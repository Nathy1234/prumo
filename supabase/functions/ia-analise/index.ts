// Análise dos chamados com IA (Claude).
// Recebe só números já resumidos pelo Prumo (por departamento, remetente, assunto e mês):
// nenhum texto de e-mail, valor ou dado bancário sai daqui.
//
// Variáveis (Edge Functions > Secrets): ANTHROPIC_API_KEY.
// SUPABASE_URL, SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY já vêm prontas.
import Anthropic from 'npm:@anthropic-ai/sdk';
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const resp = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

const SISTEMA = `Você é um analista sênior de processos de um departamento Financeiro e Contábil no Brasil.
Recebe indicadores resumidos dos pedidos (chamados) que outros departamentos enviam à contabilidade, quase sempre por e-mail.

Regra da casa: um pedido chega "em dia" quando o e-mail traz a data pedida e chega com a antecedência mínima informada (ex.: D-8). Sem data no e-mail, ou com menos antecedência, conta como "atrasado". "Nossa entrega atrasada" é quando a contabilidade passou do prazo que ela mesma combinou.

Escreva em português do Brasil, direto e prático, para o diretor e a equipe lerem em reunião.
- Baseie tudo nos números recebidos; não invente dados. Quando a amostra for pequena (poucos pedidos), diga isso.
- Para cada departamento relevante, dê um diagnóstico curto e melhorias concretas, com exemplos do que fazer (ex.: modelo de e-mail com campo "Data pedida", calendário de envio, lembrete no dia 20, reunião rápida com o gestor).
- Inclua um exemplo curto de mensagem cordial que a contabilidade pode mandar ao departamento.
- Separe o que é responsabilidade dos outros departamentos do que a própria contabilidade pode melhorar.`;

const ESQUEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['resumo', 'destaques', 'departamentos', 'acoes_contabilidade'],
  properties: {
    resumo: { type: 'string', description: 'Visão geral em 3 a 5 frases.' },
    destaques: { type: 'array', items: { type: 'string' }, description: 'Pontos principais, um por item.' },
    departamentos: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['nome', 'situacao', 'diagnostico', 'melhorias', 'exemplo_mensagem'],
        properties: {
          nome: { type: 'string' },
          situacao: { type: 'string', enum: ['critico', 'atencao', 'bom'] },
          diagnostico: { type: 'string' },
          melhorias: { type: 'array', items: { type: 'string' } },
          exemplo_mensagem: { type: 'string' },
        },
      },
    },
    acoes_contabilidade: { type: 'array', items: { type: 'string' }, description: 'O que a própria contabilidade pode melhorar.' },
  },
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return resp({ ok: true });
  if (req.method !== 'POST') return resp({ erro: 'metodo' }, 405);

  const url = Deno.env.get('SUPABASE_URL')!;
  const jwt = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!jwt) return resp({ erro: 'sem_login' }, 401);
  const comoUsuario = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: `Bearer ${jwt}` } } });
  const { data: u, error: eu } = await comoUsuario.auth.getUser(jwt);
  if (eu || !u?.user) return resp({ erro: 'sem_login' }, 401);

  // Só diretor, admin ou quem cuida dos chamados.
  const adm = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const { data: ac } = await adm.from('docs').select('data').eq('col', 'acessos').eq('id', u.user.id).maybeSingle();
  const a = (ac?.data || {}) as { ativo?: boolean; perfil?: string; perms?: Record<string, boolean> };
  const ok = a.ativo !== false && (a.perfil === 'diretor' || a.perfil === 'admin' || a.perms?.chamados === true || a.perms?.relat === true);
  if (!ok) return resp({ erro: 'sem_permissao' }, 403);

  if (!Deno.env.get('ANTHROPIC_API_KEY')) return resp({ erro: 'sem_chave' }, 500);

  let dados: unknown;
  try { dados = (await req.json())?.dados; } catch (_) { /* vazio */ }
  const txt = JSON.stringify(dados ?? null);
  if (!dados || txt.length > 60000) return resp({ erro: 'dados_invalidos' }, 400);

  const client = new Anthropic();
  try {
    const r = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'medium', format: { type: 'json_schema', schema: ESQUEMA } },
      system: SISTEMA,
      messages: [{ role: 'user', content: `Indicadores do período (JSON):\n${txt}\n\nFaça a análise.` }],
    });
    if (r.stop_reason === 'refusal') return resp({ erro: 'recusado' }, 422);
    if (r.stop_reason === 'max_tokens') return resp({ erro: 'resposta_longa' }, 502);
    const bloco = r.content.find((b) => b.type === 'text');
    if (!bloco || bloco.type !== 'text') return resp({ erro: 'sem_texto' }, 502);
    return resp({ analise: JSON.parse(bloco.text), modelo: r.model });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return resp({ erro: 'ocupado' }, 429);
    if (e instanceof Anthropic.AuthenticationError) return resp({ erro: 'chave_invalida' }, 500);
    if (e instanceof Anthropic.APIError) return resp({ erro: 'api', status: e.status }, 502);
    return resp({ erro: 'falhou' }, 500);
  }
});
