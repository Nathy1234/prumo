// Mantém a conexão com o Outlook ligada, para a equipe toda.
// A Microsoft entrega uma chave de acesso que vale ~1 hora e uma chave de renovação
// que vale até 90 dias (o prazo recomeça a cada uso). Renovar exige o "secret" do app,
// que fica só aqui no Supabase, nunca no navegador.
//
// A caixa dos chamados pode ser conectada com uma conta diferente da conta de login no Prumo
// (ex.: a pessoa entra como ela e conecta o contas a pagar). Isso usa o fluxo "iniciar_equipe":
// o navegador vai para a Microsoft, a Microsoft volta AQUI (GET com ?code=) e esta função guarda a conexão.
// Para isso: em Edge Functions > ms-token, deixe "Verify JWT" DESLIGADO (a função confere o login sozinha)
// e no Azure, em Autenticação, cadastre a URL de redirecionamento <SUPABASE_URL>/functions/v1/ms-token.
//
// Duas conexões:
//  - "equipe": a conta que clicou em Conectar e-mail. Serve para LER a caixa; qualquer pessoa
//    com a permissão E-mails recebidos (ou diretor/admin) usa, sem precisar conectar.
//  - "eu": a conta de cada pessoa. Serve para ENVIAR e-mails em nome dela.
//
// Variáveis (Edge Functions > Secrets): AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID.
// SUPABASE_URL, SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY já vêm prontas.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const ESCOPOS = 'openid profile email offline_access User.Read Mail.Read Mail.Read.Shared Mail.Send';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resp = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

// Valores colados com espaço ou aspas costumam quebrar o pedido; limpa antes de usar.
const sec = (n: string) => (Deno.env.get(n) || '').trim().replace(/^["']|["']$/g, '');
const b64u = (b: Uint8Array) => btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const deB64u = (t: string) => Uint8Array.from(atob(t.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((t.length + 3) % 4)), (c) => c.charCodeAt(0));
async function assinar(txt: string) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(sec('SUPABASE_SERVICE_ROLE_KEY')), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64u(new Uint8Array(await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(txt))));
}
const redirecionar = (destino: string) => new Response(null, { status: 302, headers: { Location: destino } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  const url = Deno.env.get('SUPABASE_URL')!;
  const voltaUrl = url.replace(/\/+$/, '') + '/functions/v1/ms-token';

  // Volta da Microsoft depois de conectar a caixa dos chamados.
  if (req.method === 'GET') {
    const q = new URL(req.url).searchParams;
    const [carga, ass] = String(q.get('state') || '').split('.');
    let st: { uid?: string; origem?: string; exp?: number } = {};
    try { if (carga && ass && ass === await assinar(carga)) st = JSON.parse(new TextDecoder().decode(deB64u(carga))); } catch (_) { st = {}; }
    const origem = /^https:\/\/[a-z0-9.-]+(:\d+)?$/i.test(st.origem || '') || /^http:\/\/localhost(:\d+)?$/.test(st.origem || '') ? st.origem! : '';
    if (!st.uid || !origem || !st.exp || st.exp < Date.now()) return resp({ erro: 'pedido_invalido', detalhe: 'Abra o Prumo e clique em Conectar caixa dos chamados de novo.' }, 400);
    const volta = (o: Record<string, string>) => redirecionar(`${origem}/?${new URLSearchParams(o)}`);
    if (q.get('error')) return volta({ ms: 'erro', motivo: String(q.get('error_description') || q.get('error')).split(/\r?\n/)[0].slice(0, 200) });
    const code = q.get('code');
    if (!code) return volta({ ms: 'erro', motivo: 'A Microsoft não devolveu a autorização.' });
    const tenant = sec('AZURE_TENANT_ID') || 'organizations';
    const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: sec('AZURE_CLIENT_ID'), client_secret: sec('AZURE_CLIENT_SECRET'), grant_type: 'authorization_code', code, redirect_uri: voltaUrl, scope: ESCOPOS }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.refresh_token) return volta({ ms: 'erro', motivo: (j.error ? j.error + ': ' : '') + String(j.error_description || 'a Microsoft recusou').split(/\r?\n/)[0].slice(0, 200) });
    let email = '';
    try { const c = JSON.parse(new TextDecoder().decode(deB64u(String(j.id_token || '').split('.')[1] || ''))); email = c.preferred_username || c.email || c.upn || ''; } catch (_) { email = ''; }
    const adm0 = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
    const { error } = await adm0.from('ms_equipe').upsert({ id: 1, user_id: st.uid, email, refresh_token: j.refresh_token, atualizado: new Date().toISOString() });
    if (error) return volta({ ms: 'erro', motivo: 'Não foi possível salvar a conexão: ' + error.message.slice(0, 150) });
    return volta({ ms: 'ok', email });
  }
  if (req.method !== 'POST') return resp({ erro: 'metodo' }, 405);

  const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!jwt) return resp({ erro: 'sem_login' }, 401);

  // Quem está pedindo: só pessoas logadas no Prumo.
  const comoUsuario = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: `Bearer ${jwt}` } } });
  const { data: u, error: eu } = await comoUsuario.auth.getUser(jwt);
  if (eu || !u?.user) return resp({ erro: 'sem_login' }, 401);
  const uid = u.user.id;

  const adm = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  let corpo: { acao?: string; refresh_token?: string; equipe?: boolean; tipo?: string } = {};
  try { corpo = await req.json(); } catch (_) { /* corpo vazio */ }

  // Pode usar a conexão da equipe: diretor, admin ou quem tem a permissão E-mails recebidos.
  const { data: ac } = await adm.from('docs').select('data').eq('col', 'acessos').eq('id', uid).maybeSingle();
  const a = (ac?.data || {}) as { ativo?: boolean; perfil?: string; perms?: Record<string, boolean> };
  const chefe = a.ativo !== false && (a.perfil === 'diretor' || a.perfil === 'admin');
  const podeEquipe = a.ativo !== false && (chefe || a.perms?.email === true);

  if (corpo.acao === 'guardar') {
    const rt = String(corpo.refresh_token || '');
    if (rt.length < 20 || rt.length > 8000) return resp({ erro: 'token_invalido' }, 400);
    const agora = new Date().toISOString();
    const { error } = await adm.from('ms_tokens').upsert({ user_id: uid, refresh_token: rt, atualizado: agora });
    if (error) return resp({ erro: 'nao_salvou', detalhe: error.message }, 500);
    let equipe = false;
    if (corpo.equipe && podeEquipe) {
      const { data: atual } = await adm.from('ms_equipe').select('user_id').eq('id', 1).maybeSingle();
      // Quem já é a conexão da equipe renova; outra pessoa só substitui se for diretor/admin ou se não houver nenhuma.
      if (!atual || atual.user_id === uid || chefe) {
        await adm.from('ms_equipe').upsert({ id: 1, user_id: uid, email: u.user.email || '', refresh_token: rt, atualizado: agora });
        equipe = true;
      }
    }
    return resp({ ok: true, equipe });
  }

  // Começa a conexão da caixa dos chamados com qualquer conta da empresa (não muda o login no Prumo).
  if (corpo.acao === 'iniciar_equipe') {
    if (!podeEquipe) return resp({ erro: 'sem_permissao' }, 403);
    if (!sec('AZURE_CLIENT_ID')) return resp({ erro: 'sem_client_id' }, 500);
    const origem = String((corpo as { origem?: string }).origem || '').replace(/\/+$/, '');
    const carga = b64u(new TextEncoder().encode(JSON.stringify({ uid, origem, exp: Date.now() + 15 * 60e3 })));
    const state = carga + '.' + await assinar(carga);
    const tenant = sec('AZURE_TENANT_ID') || 'organizations';
    const link = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize?` + new URLSearchParams({ client_id: sec('AZURE_CLIENT_ID'), response_type: 'code', redirect_uri: voltaUrl, response_mode: 'query', scope: ESCOPOS, state, prompt: 'select_account' });
    return resp({ url: link });
  }

  if (corpo.acao === 'status') {
    const { data: eq } = await adm.from('ms_equipe').select('email,atualizado,user_id').eq('id', 1).maybeSingle();
    return resp({ equipe: eq ? { email: eq.email, atualizado: eq.atualizado, souEu: eq.user_id === uid } : null, podeEquipe });
  }

  if (corpo.acao === 'esquecer') {
    await adm.from('ms_tokens').delete().eq('user_id', uid);
    if (chefe && corpo.equipe) await adm.from('ms_equipe').delete().eq('id', 1);
    return resp({ ok: true });
  }

  // renovar: tipo "equipe" (ler a caixa) ou "eu" (enviar em meu nome)
  const daEquipe = corpo.tipo === 'equipe';
  if (daEquipe && !podeEquipe) return resp({ erro: 'sem_permissao' }, 403);
  const { data: linha } = daEquipe
    ? await adm.from('ms_equipe').select('refresh_token,user_id,email').eq('id', 1).maybeSingle()
    : await adm.from('ms_tokens').select('refresh_token').eq('user_id', uid).maybeSingle();
  if (!linha?.refresh_token) return resp({ erro: 'sem_renovacao' }, 404);

  // Sem AZURE_TENANT_ID, usa o domínio do e-mail conectado (ex.: fatecie.edu.br), que a Microsoft também aceita.
  const dominio = String((daEquipe ? (linha as { email?: string }).email : u.user.email) || '').split('@')[1] || '';
  const tenant = sec('AZURE_TENANT_ID') || dominio || 'organizations';
  const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: sec('AZURE_CLIENT_ID'),
      client_secret: sec('AZURE_CLIENT_SECRET'),
      grant_type: 'refresh_token',
      refresh_token: linha.refresh_token,
      scope: ESCOPOS,
    }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) {
    // invalid_grant: a renovação venceu ou foi revogada; alguém precisa conectar de novo.
    if (j.error === 'invalid_grant') {
      if (daEquipe) await adm.from('ms_equipe').delete().eq('id', 1);
      else await adm.from('ms_tokens').delete().eq('user_id', uid);
    }
    return resp({ erro: j.error || 'microsoft_recusou', detalhe: String(j.error_description || '').split(/\r?\n/)[0].slice(0, 300) }, 401);
  }
  if (j.refresh_token) {
    const agora = new Date().toISOString();
    if (daEquipe) await adm.from('ms_equipe').update({ refresh_token: j.refresh_token, atualizado: agora }).eq('id', 1);
    else await adm.from('ms_tokens').update({ refresh_token: j.refresh_token, atualizado: agora }).eq('user_id', uid);
  }
  return resp({ access_token: j.access_token, expires_in: j.expires_in || 3600 });
});
