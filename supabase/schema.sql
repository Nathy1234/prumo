-- =====================================================================
-- Prumo · Financeiro e Contábil
-- Banco de dados, regras de acesso (RLS) e backup diário automático.
--
-- Como usar: Supabase > SQL Editor > New query > cole este arquivo
-- inteiro > Run. Pode rodar de novo sem perder dados.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Tabelas
-- ---------------------------------------------------------------------

-- Todos os registros do portal ficam nesta tabela, separados por "col"
-- (coleção): chamados, entregas, feedbacks, etc. O conteúdo vai em "data".
create table if not exists public.docs (
  path        text primary key,              -- coleção/id, ex.: chamados/ab12
  col         text not null,                 -- coleção, ex.: chamados
  id          text not null,                 -- id do registro
  data        jsonb not null default '{}'::jsonb,
  criado_em   timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  updated_by  uuid default auth.uid()
);
create index if not exists docs_col_idx on public.docs (col);
create index if not exists docs_col_criado_idx on public.docs (col, criado_em desc);

-- Nome e e-mail de quem já entrou no portal (para mostrar nomes na tela).
create table if not exists public.perfis (
  id         uuid primary key references auth.users (id) on delete cascade,
  nome       text,
  email      text,
  avatar     text,
  atualizado timestamptz not null default now()
);

-- Travas curtas para evitar duas pessoas verificando e-mails ao mesmo tempo.
create table if not exists public.leases (
  path       text primary key,
  holder     text not null,
  expires_at timestamptz not null
);

-- Ajustes do servidor. "dominio_permitido" limita quem pode criar conta.
create table if not exists public.ajustes (
  chave text primary key,
  valor text not null default ''
);
insert into public.ajustes (chave, valor) values ('dominio_permitido', '')
on conflict (chave) do nothing;

-- ---------------------------------------------------------------------
-- 2. Funções de apoio para as regras de acesso
-- ---------------------------------------------------------------------

create or replace function public.meu_acesso() returns jsonb
language sql stable security definer set search_path = public as $$
  select data from public.docs
  where col = 'acessos' and id = auth.uid()::text
    and coalesce((data->>'ativo')::boolean, true)
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce(public.meu_acesso()->>'perfil' in ('diretor','admin'), false)
$$;

create or replace function public.is_team() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce(public.meu_acesso()->>'perfil' in ('diretor','admin','equipe'), false)
$$;

create or replace function public.meu_dep() returns text
language sql stable security definer set search_path = public as $$
  select case when public.meu_acesso()->>'perfil' = 'solicitante'
              then public.meu_acesso()->>'dep' end
$$;

-- Coleções que só diretores e administradores leem e alteram.
create or replace function public.col_restrita(p_col text) returns boolean
language sql immutable as $$
  select split_part(p_col, '/', 1) in
    ('acessos','config','backups','feedbacks','observacoes','modelos','frases')
$$;

create or replace function public.pode_ler(p_col text, p_id text, p_data jsonb) returns boolean
language sql stable security definer set search_path = public as $$
  select
    public.is_admin()
    or (p_col = 'acessos' and (p_id = auth.uid()::text or public.is_team()))
    or (p_col = 'pedidos' and p_id = auth.uid()::text)
    or (p_col = 'data/users/' || auth.uid()::text)
    or p_col in ('departamentos', 'config')
    or (public.is_team()
        and split_part(p_col, '/', 1) not in
            ('backups','pedidos','feedbacks','observacoes','modelos','frases','data'))
    or (public.meu_dep() is not null and p_col = 'chamados'
        and p_data->>'dep' = public.meu_dep())
$$;

create or replace function public.pode_escrever(p_col text, p_id text, p_data jsonb) returns boolean
language sql stable security definer set search_path = public as $$
  select case
    when auth.uid() is null then false
    when p_col in ('logs','logs_arq') then false         -- registro de atividades (e o arquivo dele) é imutável
    when public.col_restrita(p_col) then public.is_admin()
    when p_col = 'pedidos' then p_id = auth.uid()::text or public.is_admin()
    when p_col = 'data/users/' || auth.uid()::text then true
    when split_part(p_col, '/', 1) = 'data' then false
    when p_col = 'chamados' then public.is_team()
         or (public.meu_dep() is not null and p_data->>'dep' = public.meu_dep())
    else public.is_team()
  end
$$;

-- ---------------------------------------------------------------------
-- 3. Regras de acesso (Row Level Security)
-- ---------------------------------------------------------------------

alter table public.docs   enable row level security;
alter table public.perfis enable row level security;
alter table public.leases enable row level security;
alter table public.ajustes enable row level security;

drop policy if exists docs_ler on public.docs;
create policy docs_ler on public.docs for select to authenticated
  using (public.pode_ler(col, id, data));

drop policy if exists docs_inserir on public.docs;
create policy docs_inserir on public.docs for insert to authenticated
  with check (
    path = col || '/' || id
    and (
      (col = 'logs' and data->>'uid' = auth.uid()::text)   -- cada um registra só em seu nome
      or public.pode_escrever(col, id, data)
    )
  );

drop policy if exists docs_alterar on public.docs;
create policy docs_alterar on public.docs for update to authenticated
  using (public.pode_escrever(col, id, data))
  with check (path = col || '/' || id and public.pode_escrever(col, id, data));

drop policy if exists docs_apagar on public.docs;
create policy docs_apagar on public.docs for delete to authenticated
  using (public.pode_escrever(col, id, data));

drop policy if exists perfis_ler on public.perfis;
create policy perfis_ler on public.perfis for select to authenticated using (true);
drop policy if exists perfis_proprio on public.perfis;
create policy perfis_proprio on public.perfis for all to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
-- leases e ajustes: sem acesso direto (só pelas funções abaixo).

-- Carimbo de quem alterou e quando.
create or replace function public.docs_carimbo() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end $$;
drop trigger if exists docs_carimbo on public.docs;
create trigger docs_carimbo before update on public.docs
  for each row execute function public.docs_carimbo();

-- ---------------------------------------------------------------------
-- 4. Funções chamadas pelo portal
-- ---------------------------------------------------------------------

-- A primeira pessoa a entrar vira administradora.
create or replace function public.claim_first_admin() returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return false; end if;
  if exists (select 1 from public.docs where col = 'acessos'
             and data->>'perfil' in ('diretor','admin')) then
    return false;
  end if;
  insert into public.docs (path, col, id, data)
  values ('acessos/' || auth.uid(), 'acessos', auth.uid()::text,
          jsonb_build_object('perfil','admin','ativo',true,'em',now()))
  on conflict (path) do update set data = excluded.data;
  return true;
end $$;
revoke all on function public.claim_first_admin() from public, anon;
grant execute on function public.claim_first_admin() to authenticated;

-- Trava curta (lease) usada pela verificação de e-mails e pelo backup.
create or replace function public.acquire_lease(p_path text, p_holder text, p_ttl_ms int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_exp timestamptz := now() + make_interval(secs => greatest(1000, least(p_ttl_ms, 600000)) / 1000.0);
        v_ok boolean;
begin
  if not public.is_team() then return jsonb_build_object('acquired', false); end if;
  insert into public.leases (path, holder, expires_at) values (p_path, p_holder, v_exp)
  on conflict (path) do update set holder = excluded.holder, expires_at = excluded.expires_at
    where public.leases.expires_at < now() or public.leases.holder = excluded.holder
  returning true into v_ok;
  return jsonb_build_object('acquired', coalesce(v_ok, false),
         'expiresAt', (select expires_at from public.leases where path = p_path));
end $$;
revoke all on function public.acquire_lease(text, text, int) from public, anon;
grant execute on function public.acquire_lease(text, text, int) to authenticated;

-- Limita cadastros a um domínio de e-mail (opcional).
-- Para usar: update public.ajustes set valor = 'suaempresa.com.br' where chave = 'dominio_permitido';
create or replace function public.checar_dominio() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_dom text;
begin
  select valor into v_dom from public.ajustes where chave = 'dominio_permitido';
  if coalesce(v_dom, '') <> '' and lower(split_part(new.email, '@', 2)) <> lower(v_dom) then
    raise exception 'Cadastro permitido apenas para e-mails @%', v_dom;
  end if;
  return new;
end $$;
drop trigger if exists checar_dominio on auth.users;
create trigger checar_dominio before insert on auth.users
  for each row execute function public.checar_dominio();

-- ---------------------------------------------------------------------
-- 5. Backup diário automático (roda no servidor, mesmo sem ninguém
--    abrir o portal). Guarda o estado completo do dia.
-- ---------------------------------------------------------------------

create or replace function public.backup_diario() returns text
language plpgsql security definer set search_path = public as $$
declare
  v_cols text[] := array['equipe','tarefas','mensagens','chamados','sugestoes','destaques','ponto',
    'eventos','procedimentos','departamentos','entregas','acessos','pedidos','emails','categorias',
    'ferramentas','feedbacks','observacoes','modelos','frases','verificacoes','etapas','fechamentos',
    'assuntos','remetentes','cronograma','execucoes','cronitens','feitos','metas','fluxo','analises'];
  v_dia  text := to_char((now() at time zone 'America/Sao_Paulo')::date, 'YYYY-MM-DD');
  v_id   text := 'd-' || v_dia;
  v_cfg  jsonb;
  v_json jsonb;
  v_txt  text;
  v_n    int;
  v_i    int := 0;
  v_reter int;
begin
  select data into v_cfg from public.docs where col = 'config' and id = 'estrutura';
  if coalesce((v_cfg->>'bkAuto')::boolean, true) = false then return 'desligado'; end if;
  if exists (select 1 from public.docs where col = 'backups' and id = v_id) then return 'ja existe'; end if;
  -- Inclui também qualquer área nova que o sistema ganhar depois (menos backups e o registro de atividades).
  select array(select distinct x from unnest(v_cols || array(
    select distinct col from public.docs
     where col not like '%/%' and col not in ('backups','logs','logs_arq','config','sync'))) as x) into v_cols;

  select jsonb_build_object(
    'sistema', 'Prumo',
    'formato', 1,
    'criado', to_char(now() at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
    'por', null,
    'config', coalesce(v_cfg, '{}'::jsonb),
    'dados', (select coalesce(jsonb_object_agg(c.nome, coalesce(t.lista, '[]'::jsonb)), '{}'::jsonb)
              from unnest(v_cols) as c(nome)
              left join (select col, jsonb_agg(data || jsonb_build_object('id', id)) as lista
                         from public.docs where col = any(v_cols) group by col) t on t.col = c.nome),
    'logs', (select coalesce(jsonb_agg(x.data || jsonb_build_object('id', x.id)), '[]'::jsonb)
             from (select id, data from public.docs where col = 'logs'
                   order by criado_em desc limit 300) x)
  ) into v_json;

  v_txt := v_json::text;
  while v_i * 80000 < length(v_txt) loop
    insert into public.docs (path, col, id, data)
    values ('backups/' || v_id || '/partes/p' || v_i, 'backups/' || v_id || '/partes', 'p' || v_i,
            jsonb_build_object('i', v_i, 't', substr(v_txt, v_i * 80000 + 1, 80000)))
    on conflict (path) do update set data = excluded.data;
    v_i := v_i + 1;
  end loop;

  select count(*) into v_n from public.docs where col = any(v_cols);
  insert into public.docs (path, col, id, data)
  values ('backups/' || v_id, 'backups', v_id,
          jsonb_build_object('criado', v_json->>'criado', 'motivo', 'diario', 'partes', v_i,
                             'tamanho', length(v_txt), 'registros', v_n, 'por', null, 'enviado', ''));

  -- Apaga backups mais antigos que o prazo configurado (padrão: 7 dias). O mais recente nunca é apagado.
  v_reter := greatest(1, coalesce((v_cfg->>'bkDias')::int, 7));
  delete from public.docs
   where col like 'backups/%/partes'
     and split_part(col, '/', 2) in (select id from public.docs where col = 'backups'
                                     and id <> v_id
                                     and (data->>'criado')::timestamptz < now() - make_interval(days => v_reter));
  delete from public.docs
   where col = 'backups' and id <> v_id
     and (data->>'criado')::timestamptz < now() - make_interval(days => v_reter);
  return v_id;
end $$;
revoke all on function public.backup_diario() from public, anon, authenticated;

-- Agenda: todo dia às 06:00 de Brasília (09:00 UTC).
create extension if not exists pg_cron with schema pg_catalog;
select cron.unschedule('portal-backup-diario')
  where exists (select 1 from cron.job where jobname = 'portal-backup-diario');
select cron.schedule('portal-backup-diario', '0 9 * * *', $$select public.backup_diario()$$);

-- Registro de atividades: o que tem mais de 60 dias sai da lista e vai para o
-- arquivo, um registro por mês (logs_arq/AAAA-MM). Nada é perdido.
create or replace function public.arquivar_logs() returns int
language plpgsql security definer set search_path = public as $$
declare
  v_dias int;
  v_n int := 0;
  r record;
begin
  select greatest(7, coalesce((data->>'logDias')::int, 60)) into v_dias
    from public.docs where col = 'config' and id = 'estrutura';
  v_dias := coalesce(v_dias, 60);
  for r in
    select to_char((data->>'em')::timestamptz at time zone 'America/Sao_Paulo', 'YYYY-MM') as mes,
           jsonb_agg(data || jsonb_build_object('id', id) order by data->>'em') as itens,
           array_agg(path) as paths
      from public.docs
     where col = 'logs' and coalesce((data->>'em')::timestamptz, criado_em) < now() - make_interval(days => v_dias)
     group by 1
  loop
    insert into public.docs (path, col, id, data)
    values ('logs_arq/' || r.mes, 'logs_arq', r.mes,
            jsonb_build_object('mes', r.mes, 'n', jsonb_array_length(r.itens), 'itens', r.itens))
    on conflict (path) do update
      set data = jsonb_build_object('mes', r.mes,
                   'n', jsonb_array_length(coalesce(public.docs.data->'itens', '[]'::jsonb) || r.itens),
                   'itens', coalesce(public.docs.data->'itens', '[]'::jsonb) || r.itens);
    delete from public.docs where path = any(r.paths);
    v_n := v_n + coalesce(array_length(r.paths, 1), 0);
  end loop;
  return v_n;
end $$;
revoke all on function public.arquivar_logs() from public, anon, authenticated;
select cron.unschedule('portal-arquivar-logs')
  where exists (select 1 from cron.job where jobname = 'portal-arquivar-logs');
select cron.schedule('portal-arquivar-logs', '30 9 * * *', $$select public.arquivar_logs()$$);

-- ---------------------------------------------------------------------
-- 6. Atualização em tempo real (todos veem as mudanças na hora)
-- ---------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'docs') then
    alter publication supabase_realtime add table public.docs;
  end if;
end $$;

-- ---------------------------------------------------------------------
-- 7. Conexão com o Outlook sem cair
--    Guarda a chave de renovação da Microsoft de cada pessoa. Só a função
--    ms-token (com a chave de serviço) lê e grava; ninguém acessa pelo site.
-- ---------------------------------------------------------------------
create table if not exists public.ms_tokens (
  user_id uuid primary key references auth.users(id) on delete cascade,
  refresh_token text not null,
  atualizado timestamptz not null default now()
);
alter table public.ms_tokens enable row level security;
revoke all on table public.ms_tokens from anon, authenticated;

-- Conexão da equipe: a conta que clicou em "Conectar e-mail". Todo mundo com a
-- permissão E-mails recebidos lê a caixa por ela, sem precisar conectar.
create table if not exists public.ms_equipe (
  id int primary key default 1 check (id = 1),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  refresh_token text not null,
  atualizado timestamptz not null default now()
);
alter table public.ms_equipe enable row level security;
revoke all on table public.ms_equipe from anon, authenticated;
