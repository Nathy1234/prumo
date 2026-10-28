// Envia avisos do Prumo por WhatsApp.
// Dois jeitos, escolhidos pelas variáveis (Edge Functions > Secrets):
//
// 1) CallMeBot (grátis, para avisar o próprio diretor):
//    WHATS_CALLMEBOT = "5544999990000=123456;5511988887777=654321"
//    (número com DDI e DDD = chave que o CallMeBot manda no WhatsApp de cada pessoa)
//
// 2) API oficial do WhatsApp Business (Meta):
//    WHATS_META_TOKEN, WHATS_META_PHONE_ID e, opcional, WHATS_META_TEMPLATE (padrão "prumo_alerta").
//    O modelo precisa estar aprovado na Meta, em português (pt_BR), com uma variável {{1}} no corpo.
//
// SUPABASE_URL, SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY já vêm prontas.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resp = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const soNum = (x: string) => String(x || '').replace(/\D/g, '');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  if (req.method !== 'POST') return resp({ erro: 'metodo' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!jwt) return resp({ erro: 'sem_login' }, 401);
  const comoUsuario = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: `Bearer ${jwt}` } } });
  const { data: u, error: eu } = await comoUsuario.auth.getUser(jwt);
  if (eu || !u?.user) return resp({ erro: 'sem_login' }, 401);

  // Só quem é da equipe (tem um acesso ativo) dispara avisos.
  const adm = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const { data: ac } = await adm.from('docs').select('data').eq('col', 'acessos').eq('id', u.user.id).maybeSingle();
  const a = (ac?.data || {}) as { ativo?: boolean; perfil?: string };
  if (!a.perfil || a.ativo === false || a.perfil === 'solicitante') return resp({ erro: 'sem_permissao' }, 403);

  // Os números permitidos ficam na configuração do Prumo (só diretor/admin mudam).
  const { data: cfg } = await adm.from('docs').select('data').eq('col', 'config').eq('id', 'estrutura').maybeSingle();
  const permitidos = new Set(((cfg?.data?.avisosDir?.whatsNums || []) as string[]).map(soNum).filter(Boolean));

  let corpo: { para?: string[]; texto?: string; teste?: boolean } = {};
  try { corpo = await req.json(); } catch (_) { /* vazio */ }
  const para = (corpo.para || []).map(soNum).filter((n) => n.length >= 10 && permitidos.has(n));
  const texto = String(corpo.texto || '').trim().slice(0, 1000);
  if (!para.length) return resp({ erro: 'sem_numero' }, 400);
  if (!texto) return resp({ erro: 'sem_texto' }, 400);

  const metaToken = Deno.env.get('WHATS_META_TOKEN'), metaFone = Deno.env.get('WHATS_META_PHONE_ID');
  const chaves = new Map((Deno.env.get('WHATS_CALLMEBOT') || '').split(/[;,\n]/).map((p) => p.split('=').map((x) => x.trim())).filter((p) => p.length === 2 && p[0] && p[1]).map(([n, k]) => [soNum(n), k]));
  if (!metaToken && !chaves.size) return resp({ erro: 'sem_provedor' }, 500);

  const res: { numero: string; ok: boolean; erro?: string }[] = [];
  for (const n of para) {
    try {
      if (metaToken && metaFone) {
        // Variáveis de modelo não aceitam quebra de linha nem espaços seguidos.
        const param = texto.replace(/\s*\n+\s*/g, ' · ').replace(/\s{2,}/g, ' ');
        const r = await fetch(`https://graph.facebook.com/v21.0/${metaFone}/messages`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${metaToken}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ messaging_product: 'whatsapp', to: n, type: 'template', template: { name: Deno.env.get('WHATS_META_TEMPLATE') || 'prumo_alerta', language: { code: 'pt_BR' }, components: [{ type: 'body', parameters: [{ type: 'text', text: param }] }] } }),
        });
        const j = await r.json().catch(() => ({}));
        res.push(r.ok ? { numero: n, ok: true } : { numero: n, ok: false, erro: j?.error?.message || String(r.status) });
      } else {
        const k = chaves.get(n);
        if (!k) { res.push({ numero: n, ok: false, erro: 'sem_chave_callmebot' }); continue; }
        const r = await fetch(`https://api.callmebot.com/whatsapp.php?phone=${n}&apikey=${encodeURIComponent(k)}&text=${encodeURIComponent(texto)}`);
        const t = await r.text();
        res.push(r.ok && !/error|invalid|not/i.test(t.slice(0, 300)) ? { numero: n, ok: true } : { numero: n, ok: false, erro: t.replace(/<[^>]+>/g, ' ').trim().slice(0, 160) });
      }
    } catch (e) {
      res.push({ numero: n, ok: false, erro: String((e as Error)?.message || e).slice(0, 160) });
    }
  }
  const ok = res.some((r) => r.ok);
  return resp({ ok, res }, ok ? 200 : 502);
});
