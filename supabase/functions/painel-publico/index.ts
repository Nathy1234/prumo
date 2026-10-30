// Painel público do Prumo: números do departamento para quem tem o link, sem login.
// O link tem uma chave (token) criada pelo admin ou diretor no Prumo; trocar ou desligar o link
// faz a chave antiga parar na hora. Só sai número e nome da equipe: nada de assunto de e-mail,
// valores, contas ou dados de fornecedores.
//
// Em Edge Functions > painel-publico, deixe "Verify JWT" DESLIGADO (quem abre o link não tem login).
// SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY já vêm prontas.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type', 'Access-Control-Allow-Methods': 'GET, OPTIONS' };
const resp = (corpo: unknown, status = 200) => new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
type Doc = Record<string, any>;
const hojeBR = () => new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10);
const addDia = (iso: string, n: number) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const dif = (a: string, b: string) => Math.round((new Date(b + 'T12:00:00Z').getTime() - new Date(a + 'T12:00:00Z').getTime()) / 864e5);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  const t = new URL(req.url).searchParams.get('t') || '';
  if (t.length < 20) return resp({ erro: 'link_invalido' }, 404);
  const adm = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const { data: cfgRow } = await adm.from('docs').select('data').eq('col', 'config').eq('id', 'estrutura').maybeSingle();
  const cfg = (cfgRow?.data || {}) as Doc, lp = cfg.linkPublico || {};
  // Planejamento 2027: link próprio (CFG.planLink), só leitura: a base do planejamento e os resultados lançados.
  if (new URL(req.url).searchParams.get('plan') === '1') {
    const pl = cfg.planLink || {};
    if (!pl.ativo || pl.token !== t) return resp({ erro: 'link_invalido' }, 404);
    const { data: rows } = await adm.from('docs').select('id,data').eq('col', 'planej');
    const def = (rows || []).find((r: Doc) => r.id === 'def');
    const res: Record<string, unknown> = {};
    (rows || []).forEach((r: Doc) => { if (r.id !== 'def') { const { v, man, obs, em, porNome } = r.data || {}; res[r.id] = { v, man, obs, em, porNome }; } });
    return resp({ atualizado: new Date().toISOString(), depto: cfg.depto || 'Financeiro e Contábil', def: def?.data?.d || null, res });
  }
  if (!lp.ativo || lp.token !== t) return resp({ erro: 'link_invalido' }, 404);

  const col = async (c: string) => { const { data } = await adm.from('docs').select('id,data').eq('col', c); return (data || []).map((r: Doc) => ({ id: r.id, ...r.data })); };
  const [chamados, feitosT, cronograma, equipe, deps, acessos, assuntos, ausencias, semmov] = await Promise.all(
    ['chamados', 'feitos', 'cronograma', 'equipe', 'departamentos', 'acessos', 'assuntos', 'ausencias', 'semmov'].map(col));
  const feitos = feitosT.filter((f: Doc) => !f.anulado);
  const hoje = hojeBR(), mes = hoje.slice(0, 7), y = +hoje.slice(0, 4), q = Math.floor((+hoje.slice(5, 7) - 1) / 3);
  const iniT = `${y}-${String(q * 3 + 1).padStart(2, '0')}-01`, fimT = new Date(Date.UTC(y, q * 3 + 3, 0)).toISOString().slice(0, 10);
  const colabs = equipe.filter((p: Doc) => p.categ !== 'geral');
  const nome = (id: string) => colabs.find((p: Doc) => p.id === id)?.n || (id === 'dir' ? 'Diretor' : '');

  // fotos: perfil (perfis.avatar) da conta ligada a cada pessoa
  const uids = acessos.filter((a: Doc) => a.pessoa).map((a: Doc) => a.id);
  const { data: perfis } = uids.length ? await adm.from('perfis').select('id,avatar').in('id', uids) : { data: [] as Doc[] };
  const foto = (pid: string) => { const a = acessos.find((x: Doc) => x.pessoa === pid); const p = a && (perfis || []).find((x: Doc) => x.id === a.id); const f = p?.avatar || ''; return /^data:image\/(jpeg|png|webp);base64,/.test(f) ? f : ''; };
  const quemFez = (c: Doc) => c.conclPor || c.resp || '';
  const diaCh = (c: Doc) => String(c.recebidoEm || c.abertoEm || c.aberto || '').slice(0, 10);

  // chamados do mês e atrasos
  const doMes = chamados.filter((c: Doc) => diaCh(c).slice(0, 7) === mes);
  const abertos = chamados.filter((c: Doc) => c.st !== 'Concluído');
  const atrasados = abertos.filter((c: Doc) => c.prazo && c.prazo < hoje).sort((a: Doc, b: Doc) => a.prazo.localeCompare(b.prazo));
  const concMes = chamados.filter((c: Doc) => c.st === 'Concluído' && String(c.concl || '').slice(0, 7) === mes);
  const cp = concMes.filter((c: Doc) => c.prazo), cok = cp.filter((c: Doc) => !(c.concl > c.prazo)).length;
  const marc = doMes.filter((c: Doc) => c.chegada), chA = marc.filter((c: Doc) => c.chegada === 'atrasado').length;
  const setor = (c: Doc) => deps.find((d: Doc) => d.id === c.dep)?.n || 'Sem setor';
  const catN = (c: Doc) => assuntos.find((a: Doc) => a.id === c.cat)?.n || 'Sem categoria';
  const grupo = (f: (c: Doc) => string) => { const m: Record<string, { n: string; t: number; a: number }> = {}; doMes.forEach((c: Doc) => { const n = f(c); const o = m[n] = m[n] || { n, t: 0, a: 0 }; o.t++; if (c.chegada === 'atrasado') o.a++; }); return Object.values(m).sort((a, b) => b.t - a.t).slice(0, 7); };

  // trimestre: o que cada um realizou (chamados concluídos + marcações do cronograma)
  const noTri = (d: string) => d >= iniT && d <= hoje;
  const etapa = (rid: string) => cronograma.find((r: Doc) => r.id === rid)?.etapa || 'Outras';
  // só o que faz parte do fluxo (WAE: Lançamento, Baixa, Conciliação · Protheus: Lançamento, Pagamento, Conciliação)
  const FLX: Record<string, string[]> = { WAE: ['Lançamento', 'Baixa', 'Conciliação'], Protheus: ['Lançamento', 'Pagamento', 'Conciliação'] };
  const noFluxo = (rid: string, sis?: string) => { const r = cronograma.find((x: Doc) => x.id === rid); if (!r) return false; const ss = sis ? [sis] : (r.sis || []); return ss.some((x: string) => (FLX[x] || []).includes(r.etapa)); };
  const real = (pid: string | null) => {
    const ch = chamados.filter((c: Doc) => c.st === 'Concluído' && (pid === null || quemFez(c) === pid) && noTri(String(c.concl || '').slice(0, 10)));
    const fx = feitos.filter((f: Doc) => f.st === 'feita' && noTri(f.feitoEm || f.dia) && (pid === null || f.pid === pid) && noFluxo(f.rot, f.sis));
    const et: Record<string, number> = {}; fx.forEach((f: Doc) => { const g = etapa(f.rot); et[g] = (et[g] || 0) + 1; });
    const p = ch.filter((c: Doc) => c.prazo), ok = p.filter((c: Doc) => !(c.concl > c.prazo)).length;
    return { total: ch.length + fx.length, ch: ch.length, rot: fx.length, pct: p.length ? Math.round(ok / p.length * 100) : null, etapas: Object.entries(et).sort((a, b) => b[1] - a[1]) };
  };
  const tot = dif(iniT, fimT) + 1, pas = Math.min(tot, dif(iniT, hoje) + 1);

  // L, B e C de hoje no WAE e no Protheus
  const ocultos: string[] = Array.isArray(cfg.sisOcultos) ? cfg.sisOcultos : [];
  const ETAPAS: Record<string, string[]> = { WAE: ['Lançamento', 'Baixa', 'Conciliação'], Protheus: ['Lançamento', 'Pagamento', 'Conciliação'] };
  const NOMES: Record<string, Record<string, string>> = { Protheus: { 'Lançamento': 'Lançar', 'Pagamento': 'Pagar', 'Conciliação': 'Conciliar' } };
  const hojeSis = Object.keys(ETAPAS).filter((s) => !ocultos.includes(s)).map((s) => ({
    sis: s, etapas: ETAPAS[s].map((g) => {
      const rots = cronograma.filter((r: Doc) => r.ativo !== false && r.etapa === g && (r.sis || []).includes(s) && (!r.ini || r.ini <= hoje));
      const fs = feitos.filter((f: Doc) => f.dia === hoje && rots.some((r: Doc) => r.id === f.rot) && (!f.sis || f.sis === s));
      const nt = semmov.some((m: Doc) => !m.desfeito && m.dia === hoje && rots.some((r: Doc) => r.id === m.rot));
      const feita = fs.filter((f: Doc) => f.st === 'feita');
      return { g: NOMES[s]?.[g] || g, prev: rots.length, st: feita.length ? 'feito' : nt ? 'naoteve' : fs.length ? 'andamento' : rots.length ? 'afazer' : 'sem', quem: [...new Set(feita.map((f: Doc) => f.nome || nome(f.pid)))].filter(Boolean), pids: [...new Set(feita.map((f: Doc) => f.pid))] };
    }),
  }));
  const fora = ausencias.filter((a: Doc) => !a.cancelada && a.de <= hoje && (a.ate || a.de) >= hoje).map((a: Doc) => ({ n: nome(a.pid), tipo: a.tipo }));

  return resp({
    atualizado: new Date().toISOString(), hoje, mes, depto: cfg.depto || 'Financeiro e Contábil',
    kpis: { recebidos: doMes.length, concluidos: concMes.length, pctPrazo: cp.length ? Math.round(cok / cp.length * 100) : null, abertos: abertos.length, atrasados: atrasados.length, pctChegAtr: marc.length ? Math.round(chA / marc.length * 100) : null },
    atrasos: atrasados.slice(0, 10).map((c: Doc) => ({ proto: c.proto || '', cat: catN(c), setor: setor(c), resp: nome(c.resp) || 'Sem responsável', foto: foto(c.resp), prazo: c.prazo, dias: dif(c.prazo, hoje) })),
    porSetor: grupo(setor), porCat: grupo(catN),
    trimestre: { q: q + 1, ano: y, tot, pas, falta: tot - pas, equipe: real(null), pessoas: colabs.map((p: Doc) => ({ n: p.n, c: p.c || '', foto: foto(p.id), ...real(p.id) })) },
    hojeSis, fora,
  });
});
