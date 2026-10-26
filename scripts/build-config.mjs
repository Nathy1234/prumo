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
const brutoUrl = limpar(process.env.SUPABASE_URL);
const chave = limpar(process.env.SUPABASE_ANON_KEY);
const microsoft = /^(1|true|sim|yes)$/i.test(limpar(process.env.LOGIN_MICROSOFT));

// Aceita o endereço com ou sem https:// e ignora caminhos extras (ex.: /rest/v1).
let url = '';
try {
  const u = new URL(/^https?:\/\//i.test(brutoUrl) ? brutoUrl : 'https://' + brutoUrl);
  if (u.hostname.includes('.')) url = 'https://' + u.hostname;
} catch (e) { /* tratado abaixo */ }
const variaveis = Object.keys(process.env).filter(k => /SUPA|ANON|MICROSOFT/i.test(k));
if (!url) {
  console.error('\n[ERRO] SUPABASE_URL ausente ou inválida.');
  console.error('Na Vercel: Settings > Environment Variables > crie SUPABASE_URL com a Project URL do Supabase (ex.: https://abcdefgh.supabase.co).');
  console.error('Variáveis parecidas encontradas: ' + (variaveis.length ? variaveis.join(', ') : 'nenhuma') + '\n');
  process.exit(1);
}
if (chave.length < 30) {
  console.error('\n[ERRO] SUPABASE_ANON_KEY ausente. Use a chave "anon public" (nunca a service_role).\n');
  process.exit(1);
}
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
