// Gera public/config.js a partir das variáveis de ambiente (Vercel ou arquivo .env).
// Assim nenhuma chave fica gravada no GitHub.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

if (existsSync('.env')) {
  for (const linha of readFileSync('.env', 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
}

const url = (process.env.SUPABASE_URL || '').trim();
const chave = (process.env.SUPABASE_ANON_KEY || '').trim();
const microsoft = /^(1|true|sim|yes)$/i.test(process.env.LOGIN_MICROSOFT || '');

if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
  console.error('\n[ERRO] SUPABASE_URL ausente ou inválida. Exemplo: https://abcdefgh.supabase.co\n');
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
  'window.PORTAL_CONFIG = ' + JSON.stringify({ supabaseUrl: url.replace(/\/$/, ''), supabaseAnonKey: chave, microsoft }, null, 2) + ';\n');
console.log('config.js gerado' + (microsoft ? ' (login Microsoft ligado)' : ''));
