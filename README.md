# Prumo · Financeiro e Contábil

O Prumo é o sistema do departamento financeiro e contábil: painel do diretor, fechamento D+N, rotinas, entregas e atrasos dos departamentos, chamados (pedidos de pagamento), troca de dados bancários com dupla aprovação, feedbacks da equipe, ponto e horas por trimestre, e-mails do Outlook, ferramentas, indicadores por área, backup diário e registro de atividades.

Funciona com três serviços, todos com plano gratuito:

| Serviço | Para que serve |
|---|---|
| **GitHub** | Guarda o código e o histórico de versões |
| **Supabase** | Login, banco de dados e regras de segurança |
| **Vercel** | Publica o site e dá o link para a equipe |

O portal registra o andamento do trabalho. Valores, dados bancários e documentos continuam no ERP e no repositório oficial da empresa.

---

## O que vai em cada pasta

```
prumo/
├── public/              o site (o que as pessoas abrem no navegador)
│   ├── index.html
│   ├── app.css
│   ├── app.js           telas e regras do portal
│   └── adapter.js       ligação com Supabase, Outlook e downloads
├── supabase/
│   ├── schema.sql       banco, regras de acesso e backup diário
│   └── seed.sql         modelos e frases de feedback, etapas do fechamento, ferramentas
├── scripts/
│   └── build-config.mjs gera a configuração na hora de publicar
├── vercel.json          configuração e cabeçalhos de segurança do site
├── .env.example         modelo das variáveis (sem nenhuma chave)
└── README.md            este guia
```

---

## Passo 1 · GitHub (guardar o código)

1. Crie uma conta em **github.com**, se ainda não tiver.
2. Clique em **New repository**.
   - Nome: `prumo`
   - Marque **Private**, para que só você veja o código.
3. Na página do repositório vazio, clique em **uploading an existing file** e arraste **todo o conteúdo** desta pasta, incluindo `public`, `supabase`, `scripts` e os arquivos `vercel.json`, `package.json`, `.gitignore` e `.env.example`.
   - Os arquivos que começam com ponto podem ficar ocultos no seu computador. No Windows, ative *Itens ocultos* no Explorador de Arquivos. No Mac, use Cmd+Shift+Ponto.
4. Clique em **Commit changes**.

## Passo 2 · Supabase (banco de dados e login)

1. Crie uma conta em **supabase.com** e clique em **New project**.
   - Região: **South America (São Paulo)**.
   - Crie uma senha forte para o banco e guarde num gerenciador de senhas. O portal não usa essa senha.
2. Quando o projeto estiver pronto, abra **SQL Editor > New query**:
   - Copie todo o conteúdo de `supabase/schema.sql`, cole e clique em **Run**.
   - Depois, numa nova consulta, faça o mesmo com `supabase/seed.sql`.
   - Se aparecer erro sobre `pg_cron`, ative em **Database > Extensions**, procure *pg_cron*, clique em **Enable** e rode o `schema.sql` de novo. Ele pode ser rodado várias vezes sem perder dados.
3. Em **Project Settings > API Keys** (ou **API**), copie:
   - a **Project URL** (algo como `https://abcdefgh.supabase.co`);
   - a chave **anon public**. Se houver abas, ela fica em *Legacy API keys*.
   - ⚠️ **Nunca copie a `service_role` nem a chave secreta.** O site se recusa a publicar se você colar uma delas por engano.

## Passo 3 · Vercel (publicar o site)

1. Crie uma conta em **vercel.com** entrando com o GitHub.
2. Clique em **Add New > Project** e escolha o repositório `prumo`.
3. Em **Environment Variables**, cadastre:

   | Nome | Valor |
   |---|---|
   | `SUPABASE_URL` | a Project URL do passo 2 |
   | `SUPABASE_ANON_KEY` | a chave anon public do passo 2 |
   | `LOGIN_MICROSOFT` | `false` (troque para `true` depois do passo 6) |

4. Clique em **Deploy**. Em cerca de 1 minuto você recebe o link, por exemplo `https://prumo-financeiro.vercel.app` (em Settings > Domains você escolhe o nome).
5. Volte ao Supabase, em **Authentication > URL Configuration**:
   - **Site URL**: cole o link da Vercel.
   - **Redirect URLs**: adicione o mesmo link.

## Passo 4 · Primeiro acesso

1. Abra o link e clique em **Criar conta**. Confirme pelo e-mail que chegar.
2. **A primeira pessoa a entrar vira administradora automaticamente.** Então entre você primeiro.
3. Cadastre a equipe em **Equipe e metas** e os departamentos em **Entregas dos departamentos > Novo departamento**, com os e-mails de cada um.
4. Mande o link para as pessoas. Cada uma cria a conta e pede acesso. Você aprova em **Usuários e permissões**, escolhendo o perfil:
   - **Diretor** ou **Administrador**: veem tudo, inclusive feedbacks, e mudam acessos.
   - **Equipe do financeiro**: você liga ao cartão do colaborador e marca as permissões.
   - **Solicitante de outro departamento**: só abre e acompanha os chamados do próprio departamento.

## Passo 5 · Limitar quem pode criar conta (recomendado)

No Supabase, em **SQL Editor**, rode trocando pelo domínio do e-mail da empresa:

```sql
update public.ajustes set valor = 'suaempresa.com.br' where chave = 'dominio_permitido';
```

A partir daí, só e-mails desse domínio conseguem criar conta.

Outra opção é desligar **Authentication > Sign In / Providers > Allow new users to sign up** e convidar cada pessoa por **Authentication > Users > Invite**.

## Passo 6 · Outlook e login com a conta Microsoft (opcional, com a TI)

Isso permite entrar com o e-mail da empresa, ler os e-mails dos departamentos e enviar feedbacks e resumos pelo Outlook. Cada pessoa usa as próprias permissões do Outlook, e o portal nunca vê a senha.

Peça para a TI:

1. Em **portal.azure.com > Microsoft Entra ID > App registrations > New registration**:
   - Nome: *Prumo*.
   - Tipo de conta: **somente esta organização**.
   - Redirect URI (Web): `https://SEU-PROJETO.supabase.co/auth/v1/callback`.
2. Em **API permissions > Add > Microsoft Graph > Delegated**, adicionar `openid`, `profile`, `email`, `offline_access`, `User.Read`, `Mail.Read`, `Mail.Read.Shared` e `Mail.Send`. Depois, **Grant admin consent**.
3. Em **Certificates & secrets**, criar um **Client secret** e copiar o valor.
4. No Supabase, em **Authentication > Sign In / Providers > Azure**, ligar e preencher:
   - **Client ID**: o *Application (client) ID*;
   - **Secret**: o valor criado no item 3;
   - **Azure Tenant URL**: `https://login.microsoftonline.com/ID-DO-TENANT`.
5. Na Vercel, mude `LOGIN_MICROSOFT` para `true` e clique em **Redeploy**.

O segredo do Azure fica guardado só no Supabase, nunca no código.

---

## Segurança: o que fica onde

| Item | Onde fica | Pode aparecer no site? |
|---|---|---|
| Senhas das pessoas | Supabase Auth, criptografadas | Não, nunca |
| Chave **anon public** | Vercel, depois no navegador | Sim. Ela é pública por natureza e só faz o que as regras do banco permitem |
| Chave **service_role** ou secreta | Só no painel do Supabase | **Nunca** |
| Segredo do Azure | Só no painel do Supabase | **Nunca** |
| Senha do banco | Seu gerenciador de senhas | **Nunca** |

As regras de acesso ficam **dentro do banco** (Row Level Security). Mesmo que alguém abra as ferramentas do navegador, o servidor recusa o que a pessoa não pode ver ou mudar:

- Feedbacks, observações, modelos, backups, configurações e acessos: só diretores e administradores.
- Solicitantes veem e abrem apenas os chamados do próprio departamento.
- O registro de atividades não pode ser editado nem apagado por ninguém, e cada pessoa só registra ações no próprio nome.
- Troca de dados bancários exige duas pessoas diferentes: uma confere, outra aprova.
- O site envia cabeçalhos de segurança, não pode ser embutido em outros sites e não aparece no Google.

## Backup

- **Automático**: todo dia às 6h (horário de Brasília), o próprio Supabase guarda uma cópia completa, mesmo que ninguém abra o portal. Mantém 30 dias, prazo que você muda em **Backup > Alterar**.
- **Arquivo**: em **Backup > Baixar backup agora**, você guarda um `.json` no computador ou em outro lugar seguro.
- **E-mail**: cadastre o e-mail exclusivo de backup em **Backup > Alterar** e ligue o envio diário. Ele sai pelo Outlook do administrador que abrir o portal no dia, então precisa do passo 6.
- **Restaurar**: em **Backup**, escolha um ponto e clique em **Restaurar**, ou use **Restaurar de arquivo**. Antes de restaurar, o portal guarda o estado atual.

> ⚠️ No plano gratuito, o Supabase pausa projetos que ficam **7 dias sem uso**. Com a equipe usando no dia a dia isso não acontece. Se o projeto pausar, basta clicar em **Restore** no painel do Supabase. O plano Pro (US$ 25/mês) não pausa e inclui backups do próprio Supabase.

## Levar os dados do protótipo para o sistema novo

1. No protótipo, abra **Backup > Baixar backup agora**.
2. No sistema novo, entre como administradora e use **Backup > Restaurar de arquivo**.

Os registros de exemplo vêm marcados como exemplo. Depois de restaurar, use **Limpar exemplos** no Painel.

## Como atualizar o sistema

Qualquer alteração enviada ao GitHub é publicada sozinha pela Vercel em cerca de 1 minuto. Para testar no seu computador antes:

1. Copie `.env.example` para `.env` e preencha.
2. Rode `npm run dev`.
3. Abra `http://localhost:3000` e adicione esse endereço em **Redirect URLs** no Supabase.
