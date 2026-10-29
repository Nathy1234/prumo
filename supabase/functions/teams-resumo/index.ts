// Resumo da semana do Prumo no Teams.
// Monta o resumo direto do banco (atrasos, chamados, o que a equipe fez no cronograma) e envia para um
// canal do Teams pelo Workflows do próprio Teams ("postar em um canal quando receber uma solicitação de webhook").
// Não tem custo: usa o Microsoft 365 que a empresa já tem.
//
// Variáveis (Edge Functions > Secrets):
//   TEAMS_WEBHOOK_URL  endereço que o Workflows do Teams gera (obrigatório)
//   TEAMS_CRON_KEY     senha para o envio automático semanal (opcional, só quando ligar o agendamento)
//   PRUMO_URL          endereço do Prumo, para o botão "Abrir o Prumo" (opcional)
// SUPABASE_URL, SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY já vêm prontas.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-prumo-cron',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resp = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const sec = (n: string) => (Deno.env.get(n) || '').trim().replace(/^["']|["']$/g, '');

// datas no horário de Brasília
const hojeBR = () => new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10);
const addDia = (iso: string, n: number) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const fmt = (iso: string) => iso ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}` : '';
const dias = (de: string, ate: string) => Math.round((new Date(ate + 'T12:00:00Z').getTime() - new Date(de + 'T12:00:00Z').getTime()) / 864e5);
type Doc = Record<string, any>;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  if (req.method !== 'POST') return resp({ erro: 'metodo' }, 405);
  const url = Deno.env.get('SUPABASE_URL')!;
  const adm = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });

  // Quem pode disparar: o agendamento (com a senha TEAMS_CRON_KEY) ou o diretor/admin logado no Prumo.
  const chaveCron = sec('TEAMS_CRON_KEY');
  const doCron = !!chaveCron && req.headers.get('x-prumo-cron') === chaveCron;
  let quem = 'agendamento semanal';
  if (!doCron) {
    const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
    if (!jwt) return resp({ erro: 'sem_login' }, 401);
    const comoUsuario = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: `Bearer ${jwt}` } } });
    const { data: u } = await comoUsuario.auth.getUser(jwt);
    if (!u?.user) return resp({ erro: 'sem_login' }, 401);
    const { data: ac } = await adm.from('docs').select('data').eq('col', 'acessos').eq('id', u.user.id).maybeSingle();
    const a = (ac?.data || {}) as Doc;
    if (a.ativo === false || !['diretor', 'admin'].includes(a.perfil)) return resp({ erro: 'sem_permissao' }, 403);
    quem = u.user.email || 'Prumo';
  }
  const hook = sec('TEAMS_WEBHOOK_URL');
  if (!hook) return resp({ erro: 'sem_webhook' }, 500);

  // dados
  const col = async (c: string) => { const { data } = await adm.from('docs').select('id,data').eq('col', c); return (data || []).map((r: Doc) => ({ id: r.id, ...r.data })); };
  const [chamados, feitos, cronograma, equipe, deps] = await Promise.all([col('chamados'), col('feitos'), col('cronograma'), col('equipe'), col('departamentos')]);
  const hoje = hojeBR(), de = addDia(hoje, -6);
  const nome = (id: string) => (equipe.find((p: Doc) => p.id === id)?.n) || (id === 'dir' ? 'Diretor' : id || 'Sem responsável');
  const dep = (id: string) => deps.find((d: Doc) => d.id === id)?.n || '';
  const diaCh = (c: Doc) => String(c.recebidoEm || c.abertoEm || c.aberto || '').slice(0, 10);
  const naSemana = (d: string) => d >= de && d <= hoje;

  const abertos = chamados.filter((c: Doc) => c.st !== 'Concluído');
  const atrasados = abertos.filter((c: Doc) => c.prazo && c.prazo < hoje).sort((a: Doc, b: Doc) => a.prazo.localeCompare(b.prazo));
  const recebidos = chamados.filter((c: Doc) => naSemana(diaCh(c)));
  const concluidos = chamados.filter((c: Doc) => c.st === 'Concluído' && naSemana(String(c.concl || '').slice(0, 10)));
  const chegAtr = recebidos.filter((c: Doc) => c.chegada === 'atrasado').length;
  const noPrazo = concluidos.filter((c: Doc) => c.prazo && !(c.concl > c.prazo)).length, comPrazo = concluidos.filter((c: Doc) => c.prazo).length;

  // o que a equipe marcou como feito no cronograma na semana (pelo dia em que foi feito)
  const feitas = feitos.filter((f: Doc) => f.st === 'feita' && naSemana(f.feitoEm || f.dia));
  const porEtapa: Record<string, number> = {}, porPessoa: Record<string, number> = {};
  let depois = 0;
  for (const f of feitas) {
    const r = cronograma.find((x: Doc) => x.id === f.rot); const g = r?.etapa || 'Outras atividades';
    const sis = f.sis || (r?.sis || [])[0] || ''; const k = sis ? `${g} (${sis})` : g;
    porEtapa[k] = (porEtapa[k] || 0) + 1; const p = f.nome || nome(f.pid); porPessoa[p] = (porPessoa[p] || 0) + 1;
    if ((f.feitoEm || f.dia) > f.dia) depois++;
  }

  const fatos = [
    { title: 'Chamados em aberto', value: String(abertos.length) },
    { title: 'Atrasados na entrega', value: String(atrasados.length) },
    { title: 'Recebidos na semana', value: `${recebidos.length}${recebidos.length ? ` (${chegAtr} chegaram atrasados)` : ''}` },
    { title: 'Concluídos na semana', value: `${concluidos.length}${comPrazo ? ` (${Math.round(noPrazo / comPrazo * 100)}% no prazo)` : ''}` },
    { title: 'Feito no cronograma', value: `${feitas.length}${depois ? ` (${depois} depois do dia)` : ''}` },
  ];
  const corpo: Doc[] = [
    { type: 'TextBlock', text: 'Prumo · Financeiro e Contábil', weight: 'Bolder', size: 'Small', color: 'Accent' },
    { type: 'TextBlock', text: `Resumo da semana · ${fmt(de)} a ${fmt(hoje)}`, weight: 'Bolder', size: 'Large', wrap: true },
    { type: 'FactSet', facts: fatos },
  ];
  if (atrasados.length) {
    corpo.push({ type: 'TextBlock', text: 'Chamados atrasados', weight: 'Bolder', spacing: 'Medium' });
    for (const c of atrasados.slice(0, 8)) {
      corpo.push({ type: 'TextBlock', wrap: true, spacing: 'Small', text: `• **${c.proto || ''}** ${c.assunto || ''} — ${nome(c.resp)} · prazo ${fmt(c.prazo)} · ${dias(c.prazo, hoje)} ${dias(c.prazo, hoje) === 1 ? 'dia' : 'dias'}${c.dep ? ` · ${dep(c.dep)}` : ''}` });
    }
    if (atrasados.length > 8) corpo.push({ type: 'TextBlock', text: `e mais ${atrasados.length - 8}`, isSubtle: true, spacing: 'Small' });
  } else corpo.push({ type: 'TextBlock', text: 'Nenhum chamado atrasado. ✅', spacing: 'Medium' });
  const et = Object.entries(porEtapa).sort((a, b) => b[1] - a[1]);
  if (et.length) {
    corpo.push({ type: 'TextBlock', text: 'O que a equipe fez no cronograma', weight: 'Bolder', spacing: 'Medium' });
    corpo.push({ type: 'FactSet', facts: et.slice(0, 8).map(([k, v]) => ({ title: k, value: String(v) })) });
  }
  const pe = Object.entries(porPessoa).sort((a, b) => b[1] - a[1]);
  if (pe.length) corpo.push({ type: 'TextBlock', wrap: true, isSubtle: true, spacing: 'Small', text: 'Por pessoa: ' + pe.map(([k, v]) => `${k} ${v}`).join(' · ') });
  corpo.push({ type: 'TextBlock', text: `Enviado pelo Prumo · ${doCron ? 'envio semanal' : 'teste enviado por ' + quem}`, isSubtle: true, size: 'Small', spacing: 'Medium', wrap: true });
  const acoes = sec('PRUMO_URL') ? [{ type: 'Action.OpenUrl', title: 'Abrir o Prumo', url: sec('PRUMO_URL') }] : [];

  const card = { type: 'AdaptiveCard', $schema: 'http://adaptivecards.io/schemas/adaptive-card.json', version: '1.4', body: corpo, actions: acoes, msteams: { width: 'Full' } };
  const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'message', attachments: [{ contentType: 'application/vnd.microsoft.card.adaptive', contentUrl: null, content: card }] }) });
  if (!r.ok) return resp({ erro: 'teams_recusou', status: r.status, detalhe: (await r.text().catch(() => '')).slice(0, 300) }, 502);
  return resp({ ok: true, atrasados: atrasados.length, feitas: feitas.length });
});
