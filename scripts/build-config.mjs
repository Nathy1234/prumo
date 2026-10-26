// Gera public/config.js a partir das variáveis de ambiente (Vercel ou arquivo .env).
// Assim nenhuma chave fica gravada no GitHub.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

if (existsSync('.env')) {
  for (const linha of readFileSync('.env', 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
}

const limpar = v => String(v || '').trim().replace(/^['"]|['"]$/g, '').trim();

// Procura as variáveis mesmo que o nome tenha espaço, letra minúscula ou prefixo diferente.
const relevantes = Object.entries(process.env)
  .map(([k, v]) => [k, k.trim().toUpperCase(), limpar(v)])
  .filter(([, n]) => /SUPA|ANON|PUBLISHABLE|MICROSOFT/.test(n));
const pegar = teste => (relevantes.find(([, n, v]) => teste(n) && v) || [])[2] || '';

const ehChave = v => /^eyJ[\w-]+\.[\w-]+\.[\w-]+$/.test(v) || /^sb_(publishable|secret)_/i.test(v);
const ehUrl = v => /supabase\.(co|com)|^https?:\/\//i.test(v) && !ehChave(v);

// Converte o que foi colado no endereço do projeto: https://REF.supabase.co
function paraUrl(v) {
  if (!v || ehChave(v)) return '';
  if (/^[a-z0-9]{15,30}$/.test(v)) return `https://${v}.supabase.co`;              // só o ID do projeto
  try {
    const u = new URL(/^https?:\/\//i.test(v) ? v : 'https://' + v);
    const painel = u.pathname.match(/\/project\/([a-z0-9]{15,30})/);                  // link do painel
    if (/(^|\.)supabase\.com$/i.test(u.hostname) && painel) return `https://${painel[1]}.supabase.co`;
    if (u.hostname.includes('.') && !/(^|\.)supabase\.com$/i.test(u.hostname)) return 'https://' + u.hostname;
  } catch (e) {}
  return '';
}
const refDaChave = c => { try { return JSON.parse(Buffer.from(c.split('.')[1], 'base64url').toString()).ref || ''; } catch (e) { return ''; } };

let chave = pegar(n => /ANON|PUBLISHABLE|KEY/.test(n) && !/SERVICE|SECRET/.test(n));
if (!ehChave(chave)) chave = (relevantes.find(([, , v]) => ehChave(v) && !/sb_secret_/i.test(v)) || [])[2] || chave;

let url = paraUrl(pegar(n => /URL/.test(n)));
if (!url) url = paraUrl((relevantes.find(([, , v]) => ehUrl(v)) || [])[2] || '');
if (!url && refDaChave(chave)) url = `https://${refDaChave(chave)}.supabase.co`;      // a chave anon já traz o ID do projeto

const microsoft = /^(1|true|sim|yes)$/i.test(pegar(n => /MICROSOFT/.test(n)));

function diagnostico() {
  console.error('Variáveis encontradas na Vercel (sem mostrar os valores):');
  if (!relevantes.length) console.error('  nenhuma com SUPABASE no nome');
  for (const [k, , v] of relevantes) {
    const tipo = !v ? 'VAZIA' : ehChave(v) ? 'parece uma chave' : paraUrl(v) ? 'parece um endereço' : 'formato não reconhecido';
    console.error(`  ${JSON.stringify(k)} · ${v.length} caracteres · ${tipo}`);
  }
  console.error('');
}
if (!url) {
  console.error('\n[ERRO] Não encontrei o endereço do Supabase.');
  console.error('Na Vercel: Settings > Environment Variables > SUPABASE_URL = Project URL (ex.: https://abcdefgh.supabase.co).');
  diagnostico();
  process.exit(1);
}
if (chave.length < 30) {
  console.error('\n[ERRO] Não encontrei a chave do Supabase. Crie SUPABASE_ANON_KEY com a chave "anon public" (nunca a service_role).');
  diagnostico();
  process.exit(1);
}
console.log('Supabase: ' + url);
try {
  const carga = JSON.parse(Buffer.from(chave.split('.')[1] || '', 'base64').toString());
  if (carga.role === 'service_role') {
    console.error('\n[ERRO] Você colou a chave service_role. Ela dá acesso total ao banco e NUNCA pode ir para o site. Use a chave "anon public".\n');
    process.exit(1);
  }
} catch (e) { /* chaves no formato novo não são JWT; seguem normalmente */ }
if (/^sb_secret_/i.test(chave)) {
  console.error('\n[ERRO] Você colou a chave secreta (sb_secret_...). Use a chave publicável (sb_publishable_...) ou a "anon public".\n');
  process.exit(1);
}

writeFileSync('public/config.js',
  '// Gerado automaticamente por scripts/build-config.mjs. Não edite.\n' +
  'window.PORTAL_CONFIG = ' + JSON.stringify({ supabaseUrl: url, supabaseAnonKey: chave, microsoft }, null, 2) + ';\n');
console.log('config.js gerado' + (microsoft ? ' (login Microsoft ligado)' : ''));
