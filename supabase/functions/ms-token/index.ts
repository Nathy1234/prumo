// Mantém a conexão com o Outlook ligada, para a equipe toda.
// A Microsoft entrega uma chave de acesso que vale ~1 hora e uma chave de renovação
// que vale até 90 dias (o prazo recomeça a cada uso). Renovar exige o "secret" do app,
// que fica só aqui no Supabase, nunca no navegador.
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  if (req.method !== 'POST') return resp({ erro: 'metodo' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
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
    ? await adm.from('ms_equipe').select('refresh_token,user_id').eq('id', 1).maybeSingle()
    : await adm.from('ms_tokens').select('refresh_token').eq('user_id', uid).maybeSingle();
  if (!linha?.refresh_token) return resp({ erro: 'sem_renovacao' }, 404);

  const tenant = Deno.env.get('AZURE_TENANT_ID') || 'organizations';
  const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: Deno.env.get('AZURE_CLIENT_ID') || '',
      client_secret: Deno.env.get('AZURE_CLIENT_SECRET') || '',
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
