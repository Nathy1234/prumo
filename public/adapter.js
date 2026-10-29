/* =====================================================================
   Prumo · Financeiro e Contábil
   Adaptador: liga o portal ao Supabase (login, banco em tempo real),
   ao Outlook (Microsoft Graph, com a conta de quem está logado) e ao
   download de arquivos. Nenhuma senha ou chave secreta fica aqui:
   a URL e a chave pública do Supabase vêm de config.js, gerado pela
   Vercel a partir das variáveis de ambiente.
   ===================================================================== */
(function () {
  'use strict';
  const CFG = window.PORTAL_CONFIG || {};
  const MS_SCOPES = 'openid profile email offline_access User.Read Mail.Read Mail.Read.Shared Mail.Send';
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let liberar;
  const pronto = new Promise(r => { liberar = r; });
  window.claude = { use: async nome => { const ns = await pronto; return ns[nome] || null; } };

  /* ------------------------------------------------------------------
     Tela de login
     ------------------------------------------------------------------ */
  const css = `#login{position:fixed;inset:0;z-index:100;background:var(--bg);display:flex;align-items:center;justify-content:center;padding:24px max(16px,env(safe-area-inset-right,0px)) 24px max(16px,env(safe-area-inset-left,0px));overflow-y:auto}
#login .card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:28px;width:min(420px,100%);display:flex;flex-direction:column;gap:14px}
#login h1{font-size:22px;margin:0}#login .sub{margin:0}#login form{display:flex;flex-direction:column;gap:12px}
#login .ms{display:flex;align-items:center;justify-content:center;gap:10px;padding:10px;font-size:14px}
#login .ou{display:flex;align-items:center;gap:10px;color:var(--ink-3);font-size:12px}#login .ou:before,#login .ou:after{content:"";flex:1;border-top:1px solid var(--line)}
#login .msg{font-size:13px;border-radius:8px;padding:8px 10px;background:var(--accent-soft);color:var(--accent-ink)}#login .msg.erro{background:var(--bad-bg);color:var(--bad)}
#login .links{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}#login .links button{border:0;background:none;color:var(--accent);cursor:pointer;padding:0;font-size:13px}
#sairbox{display:flex;gap:6px;flex-wrap:wrap}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function telaLogin(modo, msg, erro) {
    modo = modo || 'entrar';
    let el = document.getElementById('login');
    if (!el) { el = document.createElement('div'); el.id = 'login'; document.body.appendChild(el); }
    const t = { entrar: 'Entrar no Prumo', criar: 'Criar conta', esqueci: 'Recuperar senha', nova: 'Criar nova senha' }[modo];
    el.innerHTML = `<div class="card" role="dialog" aria-labelledby="lg_t">
      <div class="brand"><div class="mark">P</div><div><b>Prumo</b><span>Financeiro e Contábil</span></div></div>
      <h1 id="lg_t">${t}</h1>
      ${msg ? `<p class="msg ${erro ? 'erro' : ''}">${esc(msg)}</p>` : ''}
      ${msAtivo && (modo === 'entrar' || modo === 'criar') ? `<button class="btn ms" id="lg_ms" type="button"><svg width="18" height="18" viewBox="0 0 23 23" aria-hidden="true"><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>Entrar com a conta Microsoft da empresa</button><div class="ou">ou com e-mail e senha</div>` : ''}
      <form id="lg_f" novalidate>
        ${modo === 'criar' ? '<div><label class="lbl" for="lg_nome">Nome completo</label><input class="inp" id="lg_nome" autocomplete="name" required></div>' : ''}
        ${modo !== 'nova' ? '<div><label class="lbl" for="lg_email">E-mail</label><input class="inp" id="lg_email" type="email" autocomplete="email" required></div>' : ''}
        ${modo === 'entrar' || modo === 'criar' || modo === 'nova' ? `<div><label class="lbl" for="lg_senha">${modo === 'nova' ? 'Nova senha' : 'Senha'}</label><input class="inp" id="lg_senha" type="password" autocomplete="${modo === 'entrar' ? 'current-password' : 'new-password'}" minlength="8" required>${modo !== 'entrar' ? '<p class="meta" style="margin:4px 0 0">Mínimo de 8 caracteres.</p>' : ''}</div>` : ''}
        <p class="ferr" id="lg_err"></p>
        <button class="btn pri" type="submit" style="padding:10px">${{ entrar: 'Entrar', criar: 'Criar conta', esqueci: 'Enviar link de recuperação', nova: 'Salvar nova senha' }[modo]}</button>
      </form>
      <div class="links">${modo === 'entrar' ? '<button type="button" data-m="criar">Criar conta</button><button type="button" data-m="esqueci">Esqueci a senha</button>' : modo !== 'nova' ? '<button type="button" data-m="entrar">Já tenho conta</button>' : ''}</div>
    </div>`;
    el.querySelectorAll('[data-m]').forEach(b => b.onclick = () => telaLogin(b.dataset.m));
    const ms = document.getElementById('lg_ms');
    if (ms) ms.onclick = () => entrarMicrosoft();
    document.getElementById('lg_f').onsubmit = async ev => {
      ev.preventDefault();
      const v = id => (document.getElementById(id)?.value || '').trim();
      const err = document.getElementById('lg_err'); err.textContent = '';
      const email = v('lg_email'), senha = document.getElementById('lg_senha')?.value || '';
      if (modo !== 'nova' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'Informe um e-mail válido.'; return; }
      if ((modo === 'criar' || modo === 'nova') && senha.length < 8) { err.textContent = 'A senha precisa ter pelo menos 8 caracteres.'; return; }
      if (modo === 'criar' && !v('lg_nome')) { err.textContent = 'Informe o seu nome.'; return; }
      const btn = ev.submitter || el.querySelector('button[type=submit]'); btn.disabled = true;
      try {
        if (modo === 'entrar') {
          const { error } = await sb.auth.signInWithPassword({ email, password: senha });
          if (error) throw error;
        } else if (modo === 'criar') {
          const { data, error } = await sb.auth.signUp({ email, password: senha, options: { data: { full_name: v('lg_nome') }, emailRedirectTo: location.origin } });
          if (error) throw error;
          if (!data.session) telaLogin('entrar', 'Conta criada. Abra o e-mail de confirmação que enviamos e depois entre aqui.');
        } else if (modo === 'esqueci') {
          const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin });
          if (error) throw error;
          telaLogin('entrar', 'Se esse e-mail tiver conta, você vai receber um link para criar uma nova senha.');
        } else if (modo === 'nova') {
          const { error } = await sb.auth.updateUser({ password: senha });
          if (error) throw error;
          location.replace(location.origin);
        }
      } catch (e) {
        err.textContent = traduzErro(e);
      } finally { btn.disabled = false; }
    };
    setTimeout(() => el.querySelector('input')?.focus(), 30);
  }
  function traduzErro(e) {
    const m = String(e?.message || '');
    if (/Invalid login credentials/i.test(m)) return 'E-mail ou senha incorretos.';
    if (/Email not confirmed/i.test(m)) return 'Confirme o seu e-mail pelo link que enviamos antes de entrar.';
    if (/already registered|already been registered/i.test(m)) return 'Esse e-mail já tem conta. Use Entrar ou Esqueci a senha.';
    if (/Cadastro permitido apenas/i.test(m)) return m.replace(/^.*(Cadastro permitido apenas.*)$/, '$1');
    if (/Signups not allowed/i.test(m)) return 'Novos cadastros estão fechados. Peça um convite ao administrador do portal.';
    if (/rate limit|too many/i.test(m)) return 'Muitas tentativas. Aguarde alguns minutos e tente de novo.';
    if (/Password should/i.test(m)) return 'A senha é fraca. Use pelo menos 8 caracteres, misturando letras e números.';
    return 'Não foi possível concluir. ' + m;
  }
  // Chama a função ms-token do Supabase com o login da pessoa.
  async function msFuncao(corpo, jwt) {
    if (!jwt) { const { data } = await sb.auth.getSession(); jwt = data?.session?.access_token; }
    if (!jwt) return null;
    const r = await fetch(CFG.supabaseUrl.replace(/\/+$/, '') + '/functions/v1/ms-token', { method: 'POST', headers: { Authorization: 'Bearer ' + jwt, apikey: CFG.supabaseAnonKey, 'Content-Type': 'application/json' }, body: JSON.stringify(corpo) });
    if (!r.ok) {
      // Guarda o motivo para o portal mostrar (ex.: sem_renovacao, nao_salvou, invalid_client).
      let j = {}; try { j = await r.json(); } catch (e) {}
      window.portalMsErro = { acao: corpo.acao, tipo: corpo.tipo || '', status: r.status, erro: j.erro || j.code || j.message || ('http_' + r.status), detalhe: String(j.detalhe || '').slice(0, 300), quando: new Date().toISOString() };
      return null;
    }
    if (corpo.acao !== 'status') window.portalMsErro = null;
    return r.json();
  }
  // equipe=true: veio do botão Conectar e-mail; essa conta passa a ser a conexão da equipe para ler a caixa.
  function entrarMicrosoft(equipe) {
    try { if (equipe === true) localStorage.setItem('ms_conectar_equipe', '1'); else localStorage.removeItem('ms_conectar_equipe'); } catch (e) {}
    sb.auth.signInWithOAuth({ provider: 'azure', options: { scopes: MS_SCOPES, redirectTo: location.origin } });
  }
  window.portalReconectarMicrosoft = () => entrarMicrosoft(true);
  // Conecta a caixa dos chamados com outra conta da Microsoft, sem trocar o login no Prumo.
  window.portalConectarCaixa = async () => {
    const j = await msFuncao({ acao: 'iniciar_equipe', origem: location.origin });
    if (j?.url) { location.href = j.url; return true; }
    return false;
  };

  // Descobre sozinho se a conexão com a Microsoft já foi ligada no Supabase.
  let msAtivo = !!CFG.microsoft, msChecado = null;
  function checarMicrosoft() {
    if (!msChecado) msChecado = fetch(CFG.supabaseUrl + '/auth/v1/settings', { headers: { apikey: CFG.supabaseAnonKey } })
      .then(r => r.json()).then(j => { msAtivo = msAtivo || !!j?.external?.azure; if (!msAtivo) msChecado = null; return msAtivo; }).catch(() => { msChecado = null; return msAtivo; });
    return msChecado;
  }
  window.portalMicrosoftAtivo = () => checarMicrosoft();

  /* ------------------------------------------------------------------
     Supabase
     ------------------------------------------------------------------ */
  if (!CFG.supabaseUrl || !CFG.supabaseAnonKey || !window.supabase) {
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('main').innerHTML = '<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>O portal não está configurado. Defina SUPABASE_URL e SUPABASE_ANON_KEY nas variáveis de ambiente da Vercel e publique de novo.</span></div>';
    });
    liberar({});
    return;
  }
  const sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' }
  });
  window.portalSupabase = sb;

  let logado = false;
  sb.auth.onAuthStateChange((ev, sessao) => {
    if (ev === 'PASSWORD_RECOVERY') { telaLogin('nova'); return; }
    if (ev === 'SIGNED_OUT') { location.replace(location.origin); return; }
    if (sessao?.provider_token) {
      try { sessionStorage.setItem('ms_token', JSON.stringify({ t: sessao.provider_token, exp: Date.now() + 55 * 60e3 })); localStorage.setItem('ms_conectou', '1'); } catch (e) {}
    }
    // A chave de renovação só vem logo depois de entrar pela Microsoft: guarda no servidor para renovar sozinho.
    if (sessao?.provider_refresh_token) {
      let eq = false; try { eq = localStorage.getItem('ms_conectar_equipe') === '1'; localStorage.removeItem('ms_conectar_equipe'); sessionStorage.removeItem('ms_token_eq'); } catch (e) {}
      msFuncao({ acao: 'guardar', refresh_token: sessao.provider_refresh_token, equipe: eq }, sessao.access_token).then(j => { if (j?.equipe) window.dispatchEvent(new Event('prumo-ms-equipe')); }).catch(() => {});
    }
    if ((ev === 'SIGNED_IN' || ev === 'INITIAL_SESSION') && sessao && !logado) aposLogin(sessao);
    if (ev === 'INITIAL_SESSION' && !sessao) checarMicrosoft().then(() => { if (!logado) telaLogin('entrar'); });
  });

  async function aposLogin(sessao) {
    if (logado) return; logado = true;
    const u = sessao.user;
    const nome = u.user_metadata?.full_name || u.user_metadata?.name || (u.email || '').split('@')[0];
    try { await sb.rpc('claim_first_admin'); } catch (e) {}
    try { await sb.from('perfis').upsert({ id: u.id, nome, email: u.email, atualizado: new Date().toISOString() }); } catch (e) {}
    const { data: ac } = await sb.from('docs').select('data').eq('col', 'acessos').eq('id', u.id).maybeSingle();
    const perfil = ac?.data?.ativo === false ? '' : ac?.data?.perfil;
    const admin = perfil === 'diretor' || perfil === 'admin';
    document.getElementById('login')?.remove();
    await checarMicrosoft();
    botaoSair(nome);
    liberar({ db: criarDb(u.id), user: criarUser(u, nome, admin), mcp: criarMcp(), downloads: criarDownloads() });
  }
  function botaoSair() {
    const aside = document.querySelector('aside'); if (!aside || document.getElementById('sairbox')) return;
    const box = document.createElement('div'); box.id = 'sairbox';
    box.innerHTML = '<button class="btn" type="button" id="btn_sair">Sair</button>' + (msAtivo ? '<button class="btn ghost" type="button" id="btn_ms" title="Use se a leitura do Outlook pedir para conectar de novo">Conectar e-mail</button>' : '');
    aside.insertBefore(box, aside.querySelector('.secure'));
    document.getElementById('btn_sair').onclick = async () => { try { sessionStorage.removeItem('ms_token'); sessionStorage.removeItem('ms_token_eq'); localStorage.removeItem('prumo_rasc'); } catch (e) {} await sb.auth.signOut(); };
    const bm = document.getElementById('btn_ms'); if (bm) bm.onclick = () => entrarMicrosoft(true);
  }

  /* ------------------------------------------------------------------
     Usuário
     ------------------------------------------------------------------ */
  const cores = ['#1E5B55', '#7A4E9C', '#9C5A2B', '#2F6B3A', '#2B5C9C', '#9C2F5A'];
  const corDe = id => cores[[...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0) % cores.length];
  function criarUser(u, nome, admin) {
    const cache = {};
    window.portalSalvarFoto = async foto => {
      const { error } = await sb.from('perfis').update({ avatar: foto || null, atualizado: new Date().toISOString() }).eq('id', u.id);
      if (error) throw error;
      cache[u.id] = { ...(cache[u.id] || { id: u.id, nome }), avatar: foto || null };
      return true;
    };
    const perfilDe = (id, row) => ({ id, name: row?.nome || '', avatarUrl: row?.avatar || '', color: corDe(id), email: null, isMe: id === u.id, guest: false });
    return {
      isOwner: async () => admin, canEdit: async () => admin, can: async () => true,
      id: async () => u.id, name: async () => nome, email: async () => u.email,
      me: async () => ({ id: u.id, name: nome, avatarUrl: cache[u.id]?.avatar || '', color: corDe(u.id), email: u.email, isOwner: admin, canEdit: admin }),
      profiles: async ids => {
        ids = [...new Set([].concat(ids || []).filter(Boolean))];
        const faltam = ids.filter(i => !(i in cache) && /^[0-9a-f-]{36}$/i.test(i));
        if (faltam.length) {
          const { data } = await sb.from('perfis').select('id,nome,avatar').in('id', faltam);
          faltam.forEach(i => { cache[i] = null; });
          (data || []).forEach(r => { cache[r.id] = r; });
        }
        return Object.fromEntries(ids.map(i => [i, perfilDe(i, cache[i])]));
      },
      search: async q => {
        q = String(q || '').trim();
        let req = sb.from('perfis').select('id,nome,email,avatar').order('nome').limit(8);
        if (q) req = req.or(`nome.ilike.%${q.replace(/[%,()]/g, '')}%,email.ilike.%${q.replace(/[%,()]/g, '')}%`);
        const { data } = await req;
        return (data || []).filter(r => r.nome).map(r => { cache[r.id] = r; return { ...perfilDe(r.id, r), email: r.email }; });
      }
    };
  }

  /* ------------------------------------------------------------------
     Banco de dados (mesma interface usada pelo portal)
     ------------------------------------------------------------------ */
  function criarDb(uid) {
    const META = { fromCache: false, hasPendingWrites: false };
    const caches = new Map();
    const docListeners = new Map();
    const partes = p => { const s = String(p).split('/'); return { col: s.slice(0, -1).join('/'), id: s[s.length - 1] }; };
    const validar = (p, par) => {
      const s = String(p).split('/');
      if (!p || s.some(x => !x || !/^[A-Za-z0-9_\-.~:@+]+$/.test(x)) || (s.length % 2 === 0) !== par) throw new TypeError('Caminho inválido: ' + p);
    };
    const erro = e => {
      const m = String(e?.message || e?.details || '');
      if (e?.code === '42501' || /row-level security|permission denied|violates/i.test(m)) return { code: 'invalid_argument', message: 'Sem permissão para esta ação.' };
      if (/Failed to fetch|NetworkError|network/i.test(m)) return { code: 'unavailable', message: 'Sem conexão com o servidor.' };
      return { code: 'invalid_argument', message: m || 'Erro ao salvar.' };
    };
    const snapDoc = (id, data) => ({ id, exists: !!data, data: () => data || undefined, metadata: META });

    function cacheDe(col, ord, lim) {
      const k = col + '|' + (ord || '') + '|' + (lim || '');
      if (caches.has(k)) return caches.get(k);
      const c = { col, ord, lim, rows: new Map(), ordem: [], subs: new Set(), carregado: false, antes: new Set() };
      caches.set(k, c);
      carregar(c);
      return c;
    }
    async function carregar(c) {
      try {
        let todos = [];
        if (c.lim) {
          const { data, error } = await sb.from('docs').select('id,data,criado_em').eq('col', c.col).order('criado_em', { ascending: false }).limit(c.lim);
          if (error) throw error; todos = data;
        } else {
          for (let de = 0; ; de += 1000) {
            const { data, error } = await sb.from('docs').select('id,data,criado_em').eq('col', c.col).order('id').range(de, de + 999);
            if (error) throw error; todos = todos.concat(data); if (data.length < 1000) break;
          }
        }
        todos.forEach(r => c.rows.set(r.id, { data: r.data, t: r.criado_em }));
      } catch (e) { console.warn('Falha ao carregar', c.col, e); }
      c.carregado = true; emitir(c);
    }
    function ordenar(c) {
      let l = [...c.rows.entries()];
      if (c.lim) { l.sort((a, b) => (b[1].t || '') < (a[1].t || '') ? -1 : 1); l = l.slice(0, c.lim); }
      else l.sort((a, b) => a[0] < b[0] ? -1 : 1);
      return l;
    }
    function emitir(c) {
      if (!c.carregado) return;
      const l = ordenar(c);
      const docs = l.map(([id, r]) => snapDoc(id, r.data));
      const agora = new Set(l.map(x => x[0]));
      const mud = docs.filter(d => !c.antes.has(d.id)).map(d => ({ type: 'added', doc: d, oldIndex: -1, newIndex: 0 }));
      c.antes = agora;
      const snap = { docs, size: docs.length, empty: !docs.length, docChanges: () => mud, metadata: META };
      c.subs.forEach(s => { try { s(snap); } catch (e) { console.error(e); } });
      const dl = docListeners.get(c.col);
      if (dl) dl.forEach(({ id, fn }) => { try { fn(snapDoc(id, c.rows.get(id)?.data)); } catch (e) { console.error(e); } });
    }
    function aplicar(col, id, data, t) {
      let tocou = false;
      caches.forEach(c => { if (c.col === col) { if (data === null) c.rows.delete(id); else c.rows.set(id, { data, t: t || c.rows.get(id)?.t || new Date().toISOString() }); tocou = true; emitir(c); } });
      if (!tocou && docListeners.has(col)) cacheDe(col);
    }
    sb.channel('portal-docs').on('postgres_changes', { event: '*', schema: 'public', table: 'docs' }, p => {
      if (p.eventType === 'DELETE') { const pt = p.old?.path; if (pt) { const { col, id } = partes(pt); aplicar(col, id, null); } return; }
      const r = p.new; if (r && r.col) aplicar(r.col, r.id, r.data, r.criado_em);
    }).subscribe();

    function docRef(path) {
      validar(path, true);
      const { col, id } = partes(path);
      return {
        id, path,
        async get() {
          const { data, error } = await sb.from('docs').select('data').eq('path', path).maybeSingle();
          if (error) throw erro(error);
          return snapDoc(id, data?.data);
        },
        async set(d) {
          const limpo = JSON.parse(JSON.stringify(d));
          const { error } = await sb.from('docs').upsert({ path, col, id, data: limpo });
          if (error) throw erro(error);
          aplicar(col, id, limpo);
        },
        async update(d) {
          const { data: atual, error: e1 } = await sb.from('docs').select('data').eq('path', path).maybeSingle();
          if (e1) throw erro(e1);
          if (!atual) throw { code: 'invalid_argument', message: 'Registro não existe.' };
          const juntar = (a, b) => { const o = { ...a }; for (const [k, v] of Object.entries(b)) o[k] = v && typeof v === 'object' && !Array.isArray(v) && a?.[k] && typeof a[k] === 'object' && !Array.isArray(a[k]) ? juntar(a[k], v) : v; return o; };
          const novo = juntar(atual.data, JSON.parse(JSON.stringify(d)));
          const { error } = await sb.from('docs').update({ data: novo }).eq('path', path);
          if (error) throw erro(error);
          aplicar(col, id, novo);
        },
        async delete() {
          const { error } = await sb.from('docs').delete().eq('path', path);
          if (error) throw erro(error);
          aplicar(col, id, null);
        },
        async acquire(o) {
          const { data, error } = await sb.rpc('acquire_lease', { p_path: path, p_holder: String(o?.holder || uid), p_ttl_ms: +o?.ttlMs || 30000 });
          if (error) return { acquired: false };
          return { acquired: !!data?.acquired, expiresAt: data?.expiresAt };
        },
        onSnapshot(next, onErr) {
          if (!docListeners.has(col)) docListeners.set(col, new Set());
          const reg = { id, fn: next }; docListeners.get(col).add(reg);
          const c = cacheDe(col);
          if (c.carregado) setTimeout(() => next(snapDoc(id, c.rows.get(id)?.data)), 0);
          return () => docListeners.get(col)?.delete(reg);
        },
        collection: sub => colRef(path + '/' + sub)
      };
    }
    function colRef(col, ord, lim) {
      validar(col, false);
      const q = {
        path: col,
        where: () => q,
        orderBy: (f, dir) => colRef(col, (f || 'x') + ':' + (dir || 'asc'), lim),
        limit: n => colRef(col, ord, n),
        doc: id => docRef(col + '/' + (id || novoId())),
        async add(d) { const r = docRef(col + '/' + novoId()); await r.set(d); return r; },
        async get() {
          const { data, error } = await sb.from('docs').select('id,data').eq('col', col).order('id');
          if (error) throw erro(error);
          const docs = data.map(r => snapDoc(r.id, r.data));
          return { docs, size: docs.length, empty: !docs.length, docChanges: () => [], metadata: META };
        },
        onSnapshot(next, onErr) {
          const c = cacheDe(col, ord, lim); c.subs.add(next);
          if (c.carregado) setTimeout(() => emitir(c), 0);
          return () => c.subs.delete(next);
        }
      };
      return q;
    }
    const novoId = () => (crypto.randomUUID ? crypto.randomUUID().replace(/-/g, '').slice(0, 20) : Math.random().toString(36).slice(2) + Date.now().toString(36));
    return { doc: docRef, collection: p => colRef(p) };
  }

  /* ------------------------------------------------------------------
     Outlook pelo Microsoft Graph, com a permissão de quem está logado
     ------------------------------------------------------------------ */
  function criarMcp() {
    // Duas chaves: "equipe" (ler a caixa, a conta que clicou em Conectar e-mail) e "eu" (enviar em meu nome).
    const CH = { equipe: 'ms_token_eq', eu: 'ms_token' }, renovando = {}, falhouAte = {};
    const lerCache = tipo => { try { const s = JSON.parse(sessionStorage.getItem(CH[tipo]) || 'null'); if (s && s.exp > Date.now()) return s.t; } catch (e) {} return null; };
    // Pede uma chave nova à função ms-token (o secret do app fica só no Supabase).
    function renovar(tipo) {
      if (Date.now() < (falhouAte[tipo] || 0)) return Promise.resolve(null);
      if (!renovando[tipo]) renovando[tipo] = msFuncao({ acao: 'renovar', tipo }).then(j => {
        if (!j?.access_token) { falhouAte[tipo] = Date.now() + 2 * 60e3; return null; }
        try { sessionStorage.setItem(CH[tipo], JSON.stringify({ t: j.access_token, exp: Date.now() + Math.max(60, (+j.expires_in || 3600) - 300) * 1000 })); localStorage.setItem('ms_conectou', '1'); } catch (e) {}
        return j.access_token;
      }).catch(() => null).finally(() => { setTimeout(() => { renovando[tipo] = null; }, 0); });
      return renovando[tipo];
    }
    async function token(tipo) {
      const c = lerCache(tipo); if (c) return c;
      const novo = await renovar(tipo); if (novo) return novo;
      if (tipo === 'equipe') { const meu = lerCache('eu') || await renovar('eu'); if (meu) return meu; }
      const { data } = await sb.auth.getSession();
      return data?.session?.provider_token || null;
    }
    window.portalMsStatus = () => msFuncao({ acao: 'status' }).catch(() => null);
    window.portalFotoMicrosoft = async () => {
      const t = await token('eu'); if (!t) return null;
      const r = await fetch('https://graph.microsoft.com/v1.0/me/photos/240x240/$value', { headers: { Authorization: 'Bearer ' + t } });
      if (!r.ok) return null;
      const b = await r.blob();
      return await new Promise(ok => { const fr = new FileReader(); fr.onload = () => ok(fr.result); fr.onerror = () => ok(null); fr.readAsDataURL(b); });
    };
    // Renova antes de vencer, enquanto o portal está aberto.
    setInterval(() => { for (const tipo of ['equipe', 'eu']) { try { const s = JSON.parse(sessionStorage.getItem(CH[tipo]) || 'null'); if (s && s.exp - Date.now() < 10 * 60e3) { sessionStorage.removeItem(CH[tipo]); renovar(tipo); } } catch (e) {} } }, 5 * 60e3);
    async function graph(metodo, url, corpo, extras) {
      const tipo = extras?._tipo || (/\/sendMail$/.test(url) ? 'eu' : 'equipe'), t = await token(tipo);
      if (!t) { let ja = false; try { ja = localStorage.getItem('ms_conectou') === '1'; } catch (e) {} throw { code: ja ? 'needs_reauth' : 'server_not_connected', message: 'Sem conexão com o Outlook.' }; }
      let r;
      try {
        r = await fetch('https://graph.microsoft.com/v1.0' + url, { method: metodo, headers: { Authorization: 'Bearer ' + t, 'Content-Type': 'application/json', ...Object.fromEntries(Object.entries(extras || {}).filter(([k]) => !k.startsWith('_'))) }, body: corpo ? JSON.stringify(corpo) : undefined });
      } catch (e) { throw { code: 'server_unavailable', retryable: true, message: 'O Outlook não respondeu.' }; }
      if (r.status === 401) {
        try { sessionStorage.removeItem(CH[tipo]); } catch (e) {}
        if (!extras?._tentou) { const n = await renovar(tipo); if (n) return graph(metodo, url, corpo, { ...(extras || {}), _tentou: true }); }
        throw { code: 'needs_reauth', message: 'A conexão com o Outlook expirou.' };
      }
      const det = async () => { try { const j = await r.json(); return [j.error?.code, j.error?.message].filter(Boolean).join(': '); } catch (e) { return ''; } };
      const outra = /^\/users\//.test(url);
      if (r.status === 403) throw { code: outra ? 'sem_acesso_caixa' : 'blocked_by_policy', message: await det() || 'Sem permissão no Outlook.' };
      if (r.status === 404) throw { code: outra ? 'caixa_nao_encontrada' : 'not_found', message: await det() || 'Não encontrado.' };
      if (r.status === 429 || r.status >= 500) throw { code: 'server_unavailable', retryable: true, message: 'O Outlook está ocupado.' };
      if (!r.ok) { let m = ''; try { m = (await r.json()).error?.message; } catch (e) {} throw { code: 'tool_error', message: m || 'Erro ' + r.status }; }
      return r.status === 202 || r.status === 204 ? {} : r.json();
    }
    const aspas = s => String(s || '').replace(/'/g, "''");
    /* Caixa compartilhada só por pasta: a Microsoft não acha "Inbox" pelo nome padrão.
       Então lista as pastas da caixa e usa o código interno da Caixa de Entrada / Itens Enviados. */
    const NOMES_PASTA = { inbox: ['caixa de entrada', 'inbox', 'entrada'], sentitems: ['itens enviados', 'sent items', 'enviados', 'mensagens enviadas'] };
    const cachePasta = {};
    async function pastaPorNome(dono, tipo) {
      const k = dono + '|' + tipo; if (cachePasta[k]) return cachePasta[k];
      let r;
      try { r = await graph('GET', dono + '/mailFolders?$top=100&$select=id,displayName'); }
      catch (e) { throw { code: 'pasta_sem_raiz', message: (e && e.message) || '' }; }
      const nomes = NOMES_PASTA[tipo] || [], tira = x => String(x || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
      const f = (r.value || []).find(p => nomes.some(n => tira(p.displayName) === tira(n)));
      if (!f) throw { code: 'pasta_sem_raiz', message: 'Pasta "' + (nomes[0] || tipo) + '" não apareceu na lista de pastas compartilhadas.' };
      return (cachePasta[k] = f.id);
    }
    const ferramentas = {
      async outlook_email_search(i) {
        const dono = i.mailboxOwnerEmail ? `/users/${encodeURIComponent(i.mailboxOwnerEmail)}` : '/me';
        const base = dono + (i.folderId ? `/mailFolders/${encodeURIComponent(i.folderId)}/messages` : ({ inbox: '/mailFolders/inbox/messages', sentitems: '/mailFolders/sentitems/messages' }[i.folder] || '/messages'));
        const filtros = [];
        if (i.sender) filtros.push(`from/emailAddress/address eq '${aspas(i.sender)}'`);
        if (i.afterDateTime) filtros.push(`receivedDateTime ge ${new Date(i.afterDateTime).toISOString()}`);
        const top = Math.min(25, +i.limit || 10), skip = +i.offset || 0;
        const qs = new URLSearchParams({ $select: 'id,internetMessageId,subject,from,toRecipients,ccRecipients,receivedDateTime,bodyPreview,hasAttachments,webLink', $top: String(top) });
        if (filtros.length) qs.set('$filter', filtros.join(' and '));
        if (!i.sender) qs.set('$orderby', 'receivedDateTime desc');
        if (skip) qs.set('$skip', String(skip));
        let r;
        try { r = await graph('GET', base + '?' + qs.toString(), null, { Prefer: 'IdType="ImmutableId"' }); }
        catch (e) {
          if (!(i.mailboxOwnerEmail && !i.folderId && (i.folder === 'inbox' || i.folder === 'sentitems') && /default folder|not found/i.test((e && e.message) || ''))) throw e;
          const id = await pastaPorNome(dono, i.folder);
          r = await graph('GET', dono + '/mailFolders/' + encodeURIComponent(id) + '/messages?' + qs.toString(), null, { Prefer: 'IdType="ImmutableId"' });
        }
        const value = (r.value || []).map(m => ({ id: m.id, internetMessageId: m.internetMessageId, subject: m.subject, sender: m.from?.emailAddress?.address || '', senderName: m.from?.emailAddress?.name || '', to: (m.toRecipients || []).concat(m.ccRecipients || []).map(a => ({ address: a.emailAddress?.address || '', name: a.emailAddress?.name || '' })).filter(a => a.address), receivedDateTime: m.receivedDateTime, summary: m.bodyPreview || '', hasAttachments: !!m.hasAttachments, webLink: m.webLink }));
        return { value, ...(r['@odata.nextLink'] ? { nextOffset: skip + value.length } : {}) };
      },
      async outlook_send_mail(i) {
        const end = l => (l || []).map(a => ({ emailAddress: { address: a } }));
        await graph('POST', '/me/sendMail', { message: { subject: i.subject, body: { contentType: i.bodyType === 'html' ? 'HTML' : 'Text', content: i.body }, toRecipients: end(i.to), ccRecipients: end(i.cc), bccRecipients: end(i.bcc) }, saveToSentItems: true }, i.comoEquipe ? { _tipo: 'equipe' } : undefined);
        return { ok: true };
      },
      // Lê um e-mail inteiro para abrir dentro do portal. Pede o corpo em
      // texto puro: nada de HTML ou scripts do remetente chega à tela.
      async outlook_get_message(i) {
        const base = i.mailboxOwnerEmail ? `/users/${encodeURIComponent(i.mailboxOwnerEmail)}/messages/` : '/me/messages/';
        const m = await graph('GET', base + encodeURIComponent(i.id) + '?$select=subject,from,toRecipients,ccRecipients,receivedDateTime,body,hasAttachments,webLink&$expand=attachments($select=name,size)', null, { Prefer: 'outlook.body-content-type="text", IdType="ImmutableId"' });
        const end = l => (l || []).map(a => a.emailAddress?.address || '').filter(Boolean);
        return { subject: m.subject || '', sender: m.from?.emailAddress?.address || '', senderName: m.from?.emailAddress?.name || '', to: end(m.toRecipients), cc: end(m.ccRecipients), receivedDateTime: m.receivedDateTime, body: m.body?.content || '', hasAttachments: !!m.hasAttachments, attachments: (m.attachments || []).map(a => ({ name: a.name, size: a.size })), webLink: m.webLink };
      },
      async get_me() {
        const r = await graph('GET', '/me?$select=displayName,mail,userPrincipalName,id');
        return r;
      }
    };
    return {
      async callTool(servidor, ferramenta, entrada) {
        const f = ferramentas[ferramenta];
        if (!f) throw { code: 'not_in_manifest', message: 'Ferramenta indisponível.' };
        const payload = await f(entrada || {});
        return { content: [], payload, structuredContent: payload };
      },
      async listTools() { return { servers: [{ server: 'Microsoft 365', authStatus: 'unknown', tools: Object.keys(ferramentas).map(name => ({ name, description: '' })) }] }; },
      async invalidate() {}
    };
  }

  /* ------------------------------------------------------------------
     Downloads
     ------------------------------------------------------------------ */
  function criarDownloads() {
    return {
      async save({ filename, data }) {
        const blob = data instanceof Blob ? data : new Blob([data], { type: /\.json$/i.test(filename) ? 'application/json' : 'text/plain' });
        const url = URL.createObjectURL(blob), a = document.createElement('a');
        a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        return { status: 'saved' };
      }
    };
  }
})();
