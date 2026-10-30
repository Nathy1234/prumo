/* Prumo · Financeiro e Contábil — telas e regras do sistema. */
const I={
reg:'<path d="M12 5v14M5 12h14"/>',
painel:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
destaques:'<path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
rotinas:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/>',
calendario:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
metas:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
equipe:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14.5A5 5 0 0 1 21.5 20"/>',
ponto:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/>',
whats:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 10c.5 2 2 3.5 4 4l1-1 2 1"/>',
sol:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
proc:'<path d="M5 4h10l4 4v12H5z"/><path d="M14 4v5h5M8 13h8M8 17h5"/>',
melhorias:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
relat:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
sistema:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>',
evento:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 14h3"/>',
pessoa:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
alertas:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
entregas:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
abrir:'<path d="M12 5v14M5 12h14"/><rect x="3" y="3" width="18" height="18" rx="3"/>',
meus:'<path d="M4 6h16M4 12h16M4 18h10"/>',
chamados:'<path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 5v12"/>',
logs:'<path d="M12 8v4l3 2"/><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3 4v4h4"/>',
usuarios:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M17 11l1.5 1.5L21.5 9"/>',
triagem:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
ferramentas:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
backup:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 17v3h16v-3"/>',
acesso:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
fechamento:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
bancos:'<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
indicadores:'<path d="M4 20V12M10 20V6M16 20v-9M22 20H2"/><circle cx="16" cy="6" r="2"/>',
feedbacks:'<path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
dep:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M10 21v-4h4v4"/>',
realizadas:'<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.5 9.5"/>'};
const ic=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]||I.info}</svg>`;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const pad=n=>String(n).padStart(2,'0');
const isoD=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const HOJE=new Date(), HJ=isoD(HOJE), MES_ATUAL=HJ.slice(0,7);
const MESES=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const DIAS=['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
const fmt=s=>s?`${s.slice(8,10)}/${s.slice(5,7)}`:'—';
const mesNome=m=>{const [y,mm]=m.split('-');return `${MESES[+mm-1]} de ${y}`};
const mesCurto=m=>{const [y,mm]=m.split('-');return `${MESES[+mm-1].slice(0,3)}/${y}`};
const addMes=(m,n)=>{let [y,mm]=m.split('-').map(Number);mm+=n;while(mm>12){mm-=12;y++}while(mm<1){mm+=12;y--}return `${y}-${pad(mm)}`};
const triDe=m=>{const [y,mm]=m.split('-').map(Number);return {ano:y,q:Math.floor((mm-1)/3)+1}};
const mesesTri=t=>[0,1,2].map(i=>`${t.ano}-${pad((t.q-1)*3+1+i)}`);
const pagTri=t=>addMes(mesesTri(t)[2],2);
const faseTri=t=>{const ms=mesesTri(t),pg=pagTri(t);if(MES_ATUAL<ms[0])return ['ne','Ainda não começou'];if(MES_ATUAL<=ms[2])return ['ac','Em apuração'];if(MES_ATUAL<pg)return ['wa','Em fechamento'];if(MES_ATUAL===pg)return ['bad','Pagamento neste mês'];return ['ok','Pago']};
const fimTri=t=>{const m=mesesTri(t)[2];const [y,mm]=m.split('-').map(Number);return isoD(new Date(y,mm,0))};
const diasAte=iso=>Math.round((new Date(iso+'T12:00')-new Date(HJ+'T12:00'))/864e5);
const hrs=n=>{const v=Math.round((+n||0)*10)/10;return `${String(v).replace('.',',')} h`};

const COLS=['equipe','tarefas','mensagens','chamados','sugestoes','destaques','ponto','eventos','procedimentos','departamentos','entregas','acessos','pedidos','emails','categorias','ferramentas','feedbacks','observacoes','modelos','frases','verificacoes','etapas','fechamentos','assuntos','remetentes','cronograma','execucoes','cronitens','feitos','ausencias','semmov','metas','fluxo','analises'];
const D={logs:[],backups:[]};COLS.forEach(c=>D[c]=[]);
let CFG={};
const S={tela:'painel',perfil:'dir',modo:'carregando',sim:'',online:null,mesDest:MES_ATUAL,tri:triDe(MESES_ATUAL_FIX()),cal:MES_ATUAL,busca:'',limpar:false,loaded:0};
function MESES_ATUAL_FIX(){return HJ.slice(0,7)}
let DB=null;

const ETAPAS=['Aberto','Em análise','Pendência com solicitante','Programado','Concluído'];
// Nome e ordem das colunas só mudam na tela; por dentro a etapa continua com o nome original.
const nomeEt=k=>((CFG.colunasCh||{}).nomes||{})[k]||k;
const ordemEt=()=>{const o=((CFG.colunasCh||{}).ordem||[]).filter(k=>ETAPAS.includes(k));return [...new Set([...o,...ETAPAS])]};
const TIPOS_CH=['Solicitação de pagamento','Reembolso de despesas','Adiantamento','Dúvida contábil ou fiscal','Outros'];
const PAGTO=t=>['Solicitação de pagamento','Reembolso de despesas','Adiantamento'].includes(t);
const AREAS=['Contabilidade','Contas a pagar','Fiscal','Controladoria'];
const dir=()=>S.perfil==='dir';
const pessoa=id=>D.equipe.find(p=>p.id===id);
const nomeDe=id=>pessoa(id)?.n||'—';
const minhas=()=>dir()||pode('ver_tudo')?D.tarefas:D.tarefas.filter(t=>t.r===S.perfil);
const pendMsg=()=>D.mensagens.filter(m=>m.s!=='aprovada').length;

function stTar(t){
  if(t.s==='feita')return ['ok','Concluída'];
  if(t.prazo&&t.prazo<HJ)return ['bad','Atrasada'];
  if(t.prazo===HJ)return ['wa','Vence hoje'];
  if(t.s==='andamento')return ['ac','Em andamento'];
  return ['ne','A fazer']}
const atrasada=t=>t.s!=='feita'&&t.prazo&&t.prazo<HJ;

const depDe=id=>D.departamentos.find(d=>d.id===id);
const depNome=id=>depDe(id)?.n||'—';
function stEnt(e){
  if(e.recebido){const late=e.prazo&&e.recebido>e.prazo?Math.round((new Date(e.recebido)-new Date(e.prazo))/864e5):0;return late?['wa',`Recebida com ${late} ${late>1?'dias':'dia'} de atraso`]:['ok','Recebida no prazo']}
  const d=diasAte(e.prazo);
  if(d<0)return ['bad',`Atrasada há ${-d} ${d<-1?'dias':'dia'}`];
  if(d===0)return ['wa','Vence hoje'];
  if(d<=2)return ['wa',`Vence em ${d} ${d>1?'dias':'dia'}`];
  return ['ne',`Prazo ${fmt(e.prazo)}`]}
const entAtrasada=e=>!e.recebido&&e.prazo&&e.prazo<HJ;
const minhasEnt=()=>dir()||pode('ver_tudo')||pode('entregas')?D.entregas:D.entregas.filter(e=>e.resp===S.perfil);
function alertas(){
  const A=[];
  if(modOn('entregas'))minhasEnt().filter(e=>!e.recebido&&e.prazo).forEach(e=>{const d=diasAte(e.prazo);if(d<=1)A.push({n:d<0?3:2,ic:'entregas',c:d<0?'bad':'wa',t:d<0?`${depNome(e.dep)} está em atraso`:`${depNome(e.dep)}: entrega ${d===0?'vence hoje':'vence amanhã'}`,s:`${e.item} · prazo ${fmt(e.prazo)}${d<0?` · ${-d} ${d<-1?'dias':'dia'} de atraso`:''} · responsável: ${nomeDe(e.resp)}`,ir:'entregas',id:e.id})});
  minhas().filter(atrasada).forEach(t=>A.push({n:2,ic:'rotinas',c:'bad',t:'Tarefa avulsa em atraso',s:`${t.t} · ${nomeDe(t.r)} · venceu ${fmt(t.prazo)}`,ir:'rotinas'}));
  if(!solic()){const g={};atrasosCron(vejoRot).forEach(o=>(g[o.r.id]=g[o.r.id]||{r:o.r,d:[]}).d.push(o.dia));
   Object.values(g).forEach(({r,d})=>A.push({n:3,ic:'rotinas',c:'bad',t:`${r.etapa?r.etapa+': ':''}${r.t} em atraso`,s:`${d.length>1?`${d.length} dias pendentes desde ${fmt(d[0])}`:d[0]===HJ?`Hoje${r.hora?`, era às ${r.hora}`:''}`:`Pendente desde ${fmt(d[0])}`}${exDe(r.id,d[d.length-1])?.s==='andamento'?' · em andamento':''} · ${nomesRs(r)}`,ir:'rotinas'}));
   const am=proxUtil(HJ);D.cronograma.filter(r=>r.prio==='atencao'&&vejoRot(r)).forEach(r=>[HJ,am].forEach(d=>{if(ocorre(r,d)&&exDe(r.id,d)?.s!=='feita'&&stOc(r,d)[0]!=='bad')A.push({n:2,ic:'rotinas',c:'wa',t:`Atenção: ${r.t} ${d===HJ?'hoje':'no próximo dia útil ('+fmt(d)+')'}`,s:`${r.obs||freqTxt(r)} · ${nomesRs(r)}`,ir:'rotinas'})}))}
  if(solic()){D.chamados.filter(c=>c.dep===solDep()&&c.st==='Pendência com solicitante').forEach(c=>A.push({n:3,ic:'chamados',c:'bad',t:`Chamado ${c.proto} precisa de correção`,s:c.pend,ir:'meus'}));return A}
  D.chamados.filter(c=>pode('chamados')&&c.venc&&!['Programado','Concluído'].includes(c.st)&&diasAte(c.venc)<=1&&(dir()||c.resp===S.perfil||!c.resp)).forEach(c=>{const d=diasAte(c.venc);A.push({n:3,ic:'chamados',c:'bad',t:d<0?`Chamado ${c.proto} venceu sem pagamento programado`:`Chamado ${c.proto} vence ${d===0?'hoje':'amanhã'}`,s:`${depNome(c.dep)} · ${c.assunto}`,ir:'chamados'})});
  if(pode('chamados'))D.chamados.filter(c=>c.prazo&&c.st!=='Concluído'&&diasAte(c.prazo)<=0&&(dir()||pode('ver_tudo')||c.resp===S.perfil)).forEach(c=>{const d=diasAte(c.prazo);A.push({n:d<0?3:2,ic:'chamados',c:d<0?'bad':'wa',t:d<0?`Demanda ${c.proto} atrasada`:`Demanda ${c.proto} vence hoje`,s:`${c.assunto} · ${respNome(c.resp)}${d<0?` · ${-d} ${d<-1?'dias':'dia'} de atraso`:''}`,ir:'chamados'})});
  if(pode('chamados'))D.chamados.filter(c=>c.fora&&c.st==='Aberto').forEach(c=>A.push({n:2,ic:'chamados',c:'wa',t:`Chamado fora do prazo da política: ${depNome(c.dep)}`,s:`${c.proto} · ${c.assunto} · vence ${fmt(c.venc)}`,ir:'chamados'}));
  pode('chamados')&&D.chamados.filter(c=>c.st==='Aberto'&&!c.resp&&!c.fora).length&&A.push({n:1,ic:'chamados',c:'wa',t:`${D.chamados.filter(c=>c.st==='Aberto'&&!c.resp).length} chamados aguardam um responsável`,s:'Assuma na tela de chamados',ir:'chamados'});
  {const pm=pode('whats')?pendMsg():0;if(pm)A.push({n:1,ic:'whats',c:'wa',t:`${pm} ${pm>1?'mensagens aguardam':'mensagem aguarda'} sua aprovação`,s:'WhatsApp da diretoria',ir:'whats'});}
  if(pode('antifraude')){D.verificacoes.filter(v=>v.st==='aprovacao'&&!mesmaPessoa(v.verUid,v.verPerf)).forEach(v=>A.push({n:3,ic:'bancos',c:'bad',t:`Troca de dados bancários aguardando sua aprovação: ${v.forn}`,s:`Conferida por ${v.verPapel||''}. Os pagamentos estão travados.`,ir:'bancos'}));D.verificacoes.filter(v=>v.st==='verificacao').forEach(v=>A.push({n:2,ic:'bancos',c:'wa',t:`Troca de dados bancários para conferir: ${v.forn}`,s:`Recebido por ${String(v.origem||'').toLowerCase()} em ${fmt(v.recebido)}`,ir:'bancos'}))}
  if(dir())D.verificacoes.filter(v=>v.st==='recusada'&&diasAte((v.fimEm||'').slice(0,10))>=-7).forEach(v=>A.push({n:3,ic:'bancos',c:'bad',t:`Possível golpe: troca de conta de ${v.forn} recusada`,s:v.motivo||'',ir:'bancos'}));
  if(modOn('fechamento')&&pode('fechamento')){const c=compPadrao();D.etapas.filter(e=>atrasoF(c,e)&&(dir()||pode('ver_tudo')||e.resp===S.perfil)).forEach(e=>A.push({n:3,ic:'fechamento',c:'bad',t:`Etapa do fechamento atrasada: ${e.t}`,s:`Prazo D+${e.dn} (${fmt(dataDN(c,+e.dn||1))}) · ${nomeDe(e.resp)}`,ir:'fechamento'}))}
  if(modOn('email')&&pode('email')){const n=emPend().length;if(n)A.push({n:2,ic:'triagem',c:'wa',t:`${n} ${n>1?'e-mails aguardam':'e-mail aguarda'} triagem`,s:'Confirme se viraram entregas recebidas ou chamados',ir:'triagem'});if(S.syncErr&&S.syncErr.code!=='sem_mcp')A.push({n:2,ic:'triagem',c:'bad',t:'Leitura do Outlook com problema',s:msgErro(S.syncErr),ir:'triagem'})}
  if(podeAdmin()){const n=D.pedidos.filter(p=>!acessoDe(p.id)).length;if(n)A.push({n:2,ic:'usuarios',c:'wa',t:`${n} ${n>1?'pedidos':'pedido'} de acesso aguardando`,s:'Revise em Usuários e permissões',ir:'usuarios'});
   if(real()&&S.bkCarregado&&CFG.bkAuto!==false&&!D.backups.some(b=>b.id==='d-'+HJ)&&!S.bk)A.push({n:1,ic:'backup',c:'wa',t:'Backup de hoje ainda não foi feito',s:'Ele é criado em instantes, com o portal aberto',ir:'backup'})}
  /* por enquanto os alertas vêm só do cronograma; os outros voltam em Cronograma > Ajustes */
  if(!solic()&&S.perfil!=='pendente'){const am=proxUtil(HJ),hm=agoraHM();
   D.eventos.filter(paraMimEv).forEach(e=>[HJ,am].forEach(d=>{if(evOcorre(e,d)&&!(d===HJ&&e.hora&&e.hora<hm))A.push({n:1,ic:'evento',c:'wa',t:`${d===HJ?'Hoje':'Próximo dia útil ('+fmt(d)+')'}${e.hora?' às '+e.hora:''}: ${e.t}`,s:`${e.tipo||'Prazo'} · ${quemEv(e)}${e.obs?' · '+e.obs:''}`,ir:'calendario'})}))}
  return (modOn('outros')?A:A.filter(a=>['rotinas','evento'].includes(a.ic))).sort((a,b)=>b.n-a.n)}
function resumoDep(){
  return D.departamentos.map(d=>{const l=D.entregas.filter(e=>e.dep===d.id),rec=l.filter(e=>e.recebido&&e.prazo);
   return {d,pend:l.filter(e=>!e.recebido).length,atr:l.filter(entAtrasada).length,pont:rec.length?Math.round(rec.filter(e=>e.recebido<=e.prazo).length/rec.length*100):null,tot:l.length}}).sort((a,b)=>b.atr-a.atr||a.d.n.localeCompare(b.d.n))}
function resumoTri(pid,t){
  const ms=mesesTri(t),ini=ms[0]+'-01',fim=fimTri(t);
  const tt=D.tarefas.filter(x=>x.r===pid&&x.prazo&&x.prazo>=ini&&x.prazo<=fim&&(x.s==='feita'||x.prazo<HJ));
  const ok=tt.filter(x=>x.s==='feita'&&(!x.concluida||x.concluida<=x.prazo)).length;
  const rc=resumoCron(r=>rsDe(r).includes(pid),ini,fim),o2=ok+rc.ok,t2=tt.length+rc.prev;
  return {prazosOk:o2,prazosTot:t2,pct:t2?Math.round(o2/t2*100):null}}

/* ---------- feedbacks ---------- */
const TIPOS_FB=['Mensal','Trimestral','Semanal','Avulso'];
const TONS={pos:'Positivo',mel:'Pontos de melhoria',mix:'Positivo + melhorias'};
const TOM_C={pos:'ok',mel:'wa',mix:'ac'};
const CANAIS=['E-mail pelo sistema','E-mail próprio','Teams','Reunião 1:1','Outro'];
const OBS_T={pos:'Evolução positiva',aten:'Ponto de atenção',neu:'Neutra'};
const GRUPOS_FR=['Desempenho','Qualidade','Comportamento','Evolução','Prazos','Organização','Autonomia','Status'];
const VINC=['CLT','Estágio','PJ','Temporário'];
/* ---------- formulários ---------- */
const F={
 entrega:{col:'entregas',nome:'Entrega de departamento',desc:'O que outro departamento precisa enviar e até quando. Se atrasar, o diretor e o responsável são alertados.',ic:'entregas',
  campos:[['dep','Departamento','dep'],['item','O que deve ser enviado','text','full'],['prazo','Prazo','date'],['rec','Recorrência','select',['Única','Semanal','Mensal']],['resp','Responsável interno','pessoa'],['recebido','Recebido em','date?']]},
 departamento:{col:'departamentos',nome:'Departamento',desc:'Área que envia dados ou documentos para o financeiro e contábil.',ic:'dep',perm:'cadastros',
  campos:[['n','Nome do departamento','text','full'],['contato','Pessoa de contato','text?'],['canal','Ramal ou telefone','text?'],['gestor','E-mail do gestor da área (recebe o resumo de indicadores)','email?','full'],['emails','E-mails que enviam dados ao financeiro (separe por vírgula)','text?','full']]},
 tarefa:{col:'tarefas',nome:'Rotina ou tarefa',desc:'Atividade com responsável e prazo. Conta para o fechamento e para os prazos do trimestre.',ic:'rotinas',
  campos:[['t','Descrição','text','full'],['a','Área','select',AREAS],['r','Responsável','pessoa'],['prazo','Prazo','date'],['s','Status','select',[['aberta','A fazer'],['andamento','Em andamento'],['feita','Concluída']]]]},
 destaque:{col:'destaques',nome:'Destaque do mês',desc:'Conquistas, reconhecimentos e metas batidas que o diretor deve ver.',ic:'destaques',perm:'feedbacks',
  campos:[['t','Título','text','full'],['tipo','Tipo','select',['Conquista','Reconhecimento','Meta batida','Melhoria implantada']],['mes','Mês','month'],['pessoa','Colaborador','pessoa?'],['desc','Descrição','textarea','full']]},
 evento:{col:'eventos',nome:'Prazo ou compromisso',desc:'Obrigações, reuniões e fechamentos que aparecem no calendário com alerta.',ic:'evento',
  campos:[['t','Descrição','text','full'],['tipo','Tipo','select',['Obrigação','Fechamento','Reunião','Outro']],['data','Data','date']]},
 pessoa:{col:'equipe',nome:'Colaborador',desc:'Cadastro da equipe, metas do trimestre e situação do feedback.',ic:'pessoa',perm:'cadastros',
  campos:[['n','Nome','text'],['trat','Como chamar no e-mail','text?'],['email','E-mail','email?'],['c','Cargo','text?'],['vinc','Vínculo','select',VINC],['desde','Data de contratação','date?'],['categ','Categoria','select',[['colab','Colaborador'],['geral','Registros gerais da equipe']]],['m','Metas do trimestre (%)','number?'],['nasc','Aniversário (dd/mm)','text?'],['perfil','Perfil: responsabilidades, horários, observações','textarea?','full']]},
 modelo:{col:'modelos',nome:'Modelo de e-mail',desc:'Texto pronto para feedbacks. Aceita {nome}, {periodo}, {mes}, {ano}, {trimestre} e {meses_trimestre}.',ic:'feedbacks',perm:'_fb',oculto:true,
  campos:[['nome','Nome do modelo','text','full'],['tipo','Para qual tipo de feedback','select',[['qualquer','Qualquer tipo'],...TIPOS_FB]],['tom','Tom','select',[['qualquer','Qualquer tom'],...Object.entries(TONS)]],['assunto','Assunto','text?','full'],['texto','Texto completo','textarea','full']]},
 frase:{col:'frases',nome:'Frase sugerida',desc:'Frase curta que entra como item de lista no feedback.',ic:'feedbacks',perm:'_fb',oculto:true,
  campos:[['grupo','Grupo','select',GRUPOS_FR],['tom','Tom','select',[['pos','Positiva'],['mel','Melhoria']]],['txt','Frase','textarea','full']]},
 mensagem:{col:'mensagens',nome:'Mensagem de WhatsApp',desc:'Fica aguardando a aprovação do diretor antes do envio.',ic:'whats',perm:'whats',
  campos:[['tipo','Modelo','select',['Motivação','Aniversário','Lembrete','Comunicado']],['para','Para','text'],['quando','Data e hora do envio','datetime-local','full'],['txt','Mensagem','textarea','full']]},
 sugestao:{col:'sugestoes',nome:'Sugestão de melhoria',desc:'Ideia para o departamento. A equipe vota e o diretor acompanha.',ic:'melhorias',
  campos:[['t','Sugestão','text','full'],['a','Sugerida por','pessoa'],['e','Situação','select',['Nova','Em análise','Em teste','Implantada']]]},
 ferramenta:{col:'ferramentas',nome:'Ferramenta',desc:'Sistema ou site que o departamento usa. Abre em uma nova aba.',ic:'ferramentas',perm:'ferramentas',
  campos:[['n','Nome','text'],['cat','Categoria','cat'],['url','Endereço (link)','text','full'],['desc','Para que serve','text?','full']]},
 categoria:{col:'categorias',nome:'Categoria de ferramentas',desc:'Agrupa as ferramentas, como Governo e obrigações ou Bancos.',ic:'ferramentas',perm:'ferramentas',
  campos:[['n','Nome da categoria','text','full']]},
 procedimento:{col:'procedimentos',nome:'Procedimento',desc:'Passo a passo de uma atividade do departamento.',ic:'proc',
  campos:[['t','Título','text','full'],['a','Área','select',[...AREAS,'Equipe']],['formato','Formato','text'],['link','Link do documento','text?','full']]}};

let FORM=null;
function abrir(tipo,id){
  if(tipo==='evento')return editEv(id);
  const f=F[tipo],col=D[f.col],doc=id?col.find(x=>x.id===id):null;
  const def={mes:tipo==='destaque'?S.mesDest:MES_ATUAL,s:'aberta',f:'Pendente',r:dir()?'':S.perfil,resp:dir()?'':S.perfil,rec:'Mensal',cat:S.novaCat||'',pessoa:dir()?'':S.perfil,a:tipo==='sugestao'?(dir()?'':S.perfil):''};
  const v=doc||{};FORM={tipo,id,del:false};
  const campo=([k,l,tp,x])=>{
    const opt=tp.endsWith('?'),t=tp.replace('?',''),val=v[k]??(id?'':def[k]??''),full=x==='full'?'full':'';
    let inp;
    if(t==='select'){inp=`<select class="inp" id="f_${k}">${x.map?x.map(o=>{const [ov,ol]=Array.isArray(o)?o:[o,o];return `<option value="${esc(ov)}" ${ov==val?'selected':''}>${esc(ol)}</option>`}).join(''):''}</select>`}
    else if(t==='cat'){inp=`<select class="inp" id="f_${k}">${!val?'<option value="">Selecione</option>':''}${D.categorias.map(c=>`<option value="${esc(c.id)}" ${c.id===val?'selected':''}>${esc(c.n)}</option>`).join('')}</select>${D.categorias.length?'':'<p class="ferr" style="color:var(--ink-3)">Crie uma categoria primeiro.</p>'}`}
    else if(t==='pessoa'){const ps=(dir()||pode('ver_tudo')||pode('feedbacks'))?colabs():D.equipe.filter(p=>p.id===S.perfil);inp=`<select class="inp" id="f_${k}">${opt||!val?'<option value="">'+(opt?'Nenhum':'Selecione')+'</option>':''}${ps.map(p=>`<option value="${esc(p.id)}" ${p.id===val?'selected':''}>${esc(p.n)}</option>`).join('')}</select>`}
    else if(t==='dep'){inp=`<select class="inp" id="f_${k}">${!val?'<option value="">Selecione</option>':''}${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===val?'selected':''}>${esc(d.n)}</option>`).join('')}</select>${D.departamentos.length?'':'<p class="ferr" style="color:var(--ink-3)">Cadastre um departamento primeiro.</p>'}`}
    else if(t==='textarea')inp=`<textarea class="inp" id="f_${k}">${esc(val)}</textarea>`;
    else inp=`<input class="inp" id="f_${k}" type="${t==='number'?'number':t}" ${t==='number'?'min="0" step="0.5"':''} value="${esc(val)}">`;
    return `<div class="${x==='full'||(t==='select'&&x==='full')?'full':full}"><label class="lbl" for="f_${k}">${esc(l)}${opt?' · opcional':''}</label>${inp}<p class="ferr" id="e_${k}"></p></div>`};
  document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${id?'Editar registro':'Novo registro'}</p><h2 id="sheet-title">${esc(f.nome)}</h2><p class="sub" style="font-size:13px">${esc(f.desc)}</p></div>
   <form id="fm" class="fgrid" novalidate>${f.campos.map(campo).join('')}</form>
   <div class="foot"><div>${id?`<button class="btn danger" id="bdel" onclick="excluir()">Excluir</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="enviar()">${id?'Salvar alterações':'Registrar'}</button></div></div>`;
  document.getElementById('ov').hidden=false;
  document.getElementById('fm').addEventListener('submit',e=>{e.preventDefault();enviar()});
  document.querySelectorAll('#fm .inp').forEach(el=>el.addEventListener('input',()=>{const e=document.getElementById('e_'+el.id.slice(2));if(e)e.textContent=''}));
  setTimeout(()=>document.querySelector('#fm .inp')?.focus(),30)}
function fechar(){if(FORM&&FORM.gravou){const k=chaveSheet();if(k)limparRascunho(k)}document.getElementById('ov').hidden=true;document.getElementById('sheet').classList.remove('sheet-reu');FORM=null;if(history.state&&history.state.sheet){S.pulaPop=true;history.back()}}
document.getElementById('ov').addEventListener('click',e=>{if(e.target.id==='ov')fechar()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&FORM)fechar()});

async function enviar(){
  const f=F[FORM.tipo],o={};let ok=true;
  for(const [k,l,tp] of f.campos){
    const opt=tp.endsWith('?'),t=tp.replace('?',''),el=document.getElementById('f_'+k),err=document.getElementById('e_'+k);
    let v=el.value.trim();
    if(!v&&!opt){err.textContent='Preencha este campo.';ok=false;continue}
    if(t==='number'){if(v===''&&opt){continue}const n=Number(v.replace(',','.'));if(isNaN(n)||n<0){err.textContent='Informe um número igual ou maior que zero.';ok=false;continue}v=n}
    if(k==='emails'&&v){const l=v.split(/[,;\s]+/).filter(Boolean);if(l.some(x=>!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x))){err.textContent='Confira os endereços. Separe cada e-mail por vírgula.';ok=false;continue}const dup=D.departamentos.find(d=>d.id!==FORM.id&&listaEmails(d).some(x=>l.map(norm).includes(x)));if(dup){err.textContent=`Um desses e-mails já está em ${dup.n}.`;ok=false;continue}v=l.map(x=>x.toLowerCase()).join(', ')}
    if(k==='url'){if(!/^https?:\/\//i.test(v)&&/^[\w-]+(\.[\w-]+)+/.test(v))v='https://'+v;if(!okUrl(v)){err.textContent='Cole o endereço completo, como https://sistema.empresa.com.br';ok=false;continue}}
    if(t==='email'&&v&&!emailOk(v)){err.textContent='Confira o endereço de e-mail.';ok=false;continue}
    if(k==='nasc'&&v&&!/^\d{2}\/\d{2}$/.test(v)){err.textContent='Use o formato dd/mm.';ok=false;continue}
    o[k]=v}
  if(!ok)return;
  const ant=FORM.id?D[f.col].find(x=>x.id===FORM.id):null;
  const base=ant?Object.fromEntries(Object.entries(ant).filter(([k])=>k!=='id')):{criado:HJ};
  const data={...base,...o};
  if(FORM.tipo==='tarefa'){data.concluida=data.s==='feita'?(ant?.concluida||HJ):null}
  if(FORM.tipo==='mensagem'&&!ant)data.s='aguarda';
  if(FORM.tipo==='sugestao'&&!ant)data.v=1;
  let id=FORM.id;
  if(await salvar(f.col,id,data,ant?'Alterações salvas':'Registrado'))fechar()}

async function salvar(col,id,data,msg,lg){
  if(!DB){toast('O armazenamento não está disponível nesta visualização. Nada foi salvo.');return false}
  try{const novo=!id||!D[col]?.some(x=>x.id===id);if(id)await DB.collection(col).doc(id).set(data);else await DB.collection(col).add(data);if(msg)toast(msg);if(lg!==false)log(lg||`${novo?'Registrou':'Alterou'} ${NOMES[col]||col}: ${tituloDe(data)}`);return true}
  catch(e){toast(e?.code==='invalid_argument'?'Você não tem permissão para registrar aqui.':e?.code==='quota_exceeded'?'O limite de registros foi atingido. Exclua registros antigos.':'Não foi possível salvar. Tente de novo.');return false}}
async function patch(col,id,mud,msg,lg){const ant=D[col].find(x=>x.id===id);if(!ant)return;const {id:_,...b}=ant;return salvar(col,id,{...b,...mud},msg,lg)}
async function excluir(){
  const b=document.getElementById('bdel');
  if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
  try{const c=F[FORM.tipo].col,x=D[c].find(y=>y.id===FORM.id);await DB.collection(c).doc(FORM.id).delete();log(`Excluiu ${NOMES[c]}: ${x?tituloDe(x):''}`);toast('Registro excluído');fechar()}catch(e){toast('Não foi possível excluir.')}}

function toast(t,ms){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.h);toast.h=setTimeout(()=>el.classList.remove('show'),ms||2200)}
function ir(t,semHist){if(!sairEditorOk(()=>ir(t,semHist)))return;S.scroll[S.tela]=window.scrollY;const mudou=t!==S.tela;S.tela=t;S.fbForce=true;S.limpar=false;S.bell=false;render();
 if(!semHist&&mudou)try{history.pushState({tela:S.tela},'','#'+S.tela)}catch(e){}
 window.scrollTo({top:S.scroll[S.tela]||0});salvarEstado()}
const head=(eb,t,sub,right='')=>`<div class="top"><div><p class="eyebrow">${eb}</p><h1>${t}</h1>${sub?`<p class="sub">${sub}</p>`:''}</div>${right?`<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${right}</div>`:''}</div>`;
const note=t=>`<p class="note">${ic('info')}<span>${t}</span></p>`;
const novo=(tipo,txt)=>`<button class="btn pri" onclick="abrir('${tipo}')">${txt}</button>`;
const vazio=(t,d,tipo,b)=>`<div class="empty"><b>${t}</b>${d}${tipo?`<div style="margin-top:12px">${novo(tipo,b)}</div>`:''}</div>`;
const editar=(tipo,id)=>`<button class="btn ghost" onclick="abrir('${tipo}','${esc(id)}')" aria-label="Editar">Editar</button>`;
const hojeTxt=()=>`${DIAS[HOJE.getDay()]}, ${HOJE.getDate()} de ${MESES[HOJE.getMonth()]}`;
function linTar(x){const g=stTar(x);return `<div class="row"><div class="t"><b>${esc(x.t)}</b><span>${esc(x.a)} · ${esc(nomeDe(x.r))}</span></div><span class="meta">${fmt(x.prazo)}</span><button class="tag ${g[0]}" onclick="tg('${esc(x.id)}')" title="Avançar status">${g[1]}</button>${editar('tarefa',x.id)}</div>`}
function triNav(){return `<div class="seg"><button onclick="mvTri(-1)" aria-label="Trimestre anterior">‹</button><span>${S.tri.q}º trimestre de ${S.tri.ano}</span><button onclick="mvTri(1)" aria-label="Próximo trimestre">›</button></div>`}
function mesNav(k){return `<div class="seg"><button onclick="mvMes('${k}',-1)" aria-label="Mês anterior">‹</button><span>${mesNome(S[k])}</span><button onclick="mvMes('${k}',1)" aria-label="Próximo mês">›</button></div>`}
function mvTri(n){let {ano,q}=S.tri;q+=n;if(q>4){q=1;ano++}if(q<1){q=4;ano--}S.tri={ano,q};render()}
function mvMes(k,n){S[k]=addMes(S[k],n);render()}
function cardDest(d){return `<div class="hcard"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><span class="tag ${d.tipo==='Reconhecimento'?'ac':d.tipo==='Meta batida'?'ok':d.tipo==='Melhoria implantada'?'wa':'ne'}">${esc(d.tipo)}</span>${pode('feedbacks')?editar('destaque',d.id):''}</div><b>${esc(d.t)}</b>${d.desc?`<p>${esc(d.desc)}</p>`:''}<span class="meta">${d.pessoa?esc(nomeDe(d.pessoa))+' · ':''}${mesCurto(d.mes)}</span></div>`}
/* realizado no trimestre: chamados concluídos e o que cada um marcou como feito no cronograma.
   O prazo vale só para os chamados (concluído até o prazo combinado). */
function realizadoTri(pid,t){const ms=mesesTri(t),ini=ms[0]+'-01',fim=fimTri(t),den=d=>d&&d>=ini&&d<=fim;
 const ch=D.chamados.filter(c=>c.st==='Concluído'&&(pid==null||quemFez(c)===pid)&&den((c.concl||'').slice(0,10))),cp=ch.filter(c=>c.prazo),cok=cp.filter(c=>!(c.concl>c.prazo)).length;
 const vistos=new Set(),et={};let rot=0;
 const conta=(rid,dia,quem)=>{const k=`${dia}_${rid}_${quem}`;if(vistos.has(k))return;vistos.add(k);const r=D.cronograma.find(x=>x.id===rid);const g=(r?.etapa)||'Outras atividades';if(!noFluxo(r))return;et[g]=(et[g]||0)+1;rot++};
 (D.feitos||[]).filter(f=>f.st==='feita'&&den(f.dia)&&(pid==null||f.pid===pid)).forEach(f=>conta(f.rot,f.dia,f.pid||f.nome));
 (D.execucoes||[]).filter(x=>x.s==='feita'&&den(x.dia)&&(pid==null||x.por===pid)).forEach(x=>conta(x.rot,x.dia,x.por));
 const etapas=Object.entries(et).sort((a,b)=>b[1]-a[1]);
 return {ch:ch.length,chPrazo:cp.length,chOk:cok,pct:cp.length?Math.round(cok/cp.length*100):null,rot,etapas,total:ch.length+rot}}
const etapasTxt=E=>E.length?E.map(([g,n])=>`<span class="chip" style="cursor:default">${esc(g)} ${n}</span>`).join(' '):'<span class="meta">—</span>';
function tabelaTri(ps){
  if(!ps.length)return vazio('Nenhum colaborador cadastrado','Cadastre a equipe para acompanhar o que foi realizado.','pessoa','Cadastrar colaborador');
  const L=ps.map(p=>[p,realizadoTri(p.id,S.tri)]),T=realizadoTri(null,S.tri);
  const lin=(n,r,b)=>`<tr${b?' style="font-weight:600"':''}><td>${n}</td><td>${r.total}</td><td>${r.ch}</td><td>${r.rot}</td><td style="text-align:left;white-space:normal">${etapasTxt(r.etapas)}</td><td>${r.pct===null?'—':`${r.pct}% <span class="meta">(${r.chOk}/${r.chPrazo})</span>`}</td></tr>`;
  return `<div class="tbl-wrap"><table><thead><tr><th>Colaborador</th><th>Demandas realizadas</th><th>Chamados concluídos</th><th>Rotinas realizadas</th><th style="text-align:left">O que realizou</th><th>Chamados no prazo</th></tr></thead><tbody>${L.map(([p,r])=>lin(esc(p.n),r)).join('')}${lin('Equipe toda',T,true)}</tbody></table></div>
  <p class="meta" style="margin:8px 0 0">Conta só o que foi feito: chamados concluídos e o que cada um marcou como feito no cronograma. O prazo vale para os chamados: concluído até o prazo combinado.</p>`}
/* ---------- chamados (portal dos departamentos) ---------- */
const solic=()=>S.perfil.startsWith('sol:');
const solDep=()=>solic()?S.perfil.slice(4):null;
const quemSou=()=>S.perfil==='pendente'?'Sem perfil':dir()?(real()&&!S.sim&&papelReal()==='admin'?'Administrador':'Diretor'):solic()?`Solicitante · ${depNome(solDep())}`:(pessoa(S.perfil)?.n||'—');
const DMIN=()=>+CFG.diasMin||3;
// Antecedência mínima dos e-mails: a data pedida precisa estar pelo menos N dias depois da chegada (padrão D-8, dias corridos).
const CHEG_MIN=()=>CFG.chegadaMin===0?0:(+CFG.chegadaMin||8);
const CHEG_UTEIS=()=>CFG.chegadaUteis===true;
const chegTxt=()=>`${CHEG_MIN()} ${CHEG_UTEIS()?'dias úteis':'dias'}`;
function antecDias(recebido,prazo){const r=String(recebido||'').slice(0,10);if(!r||!prazo)return null;if(CHEG_UTEIS())return prazo>r?diasUteis(r,prazo):-diasUteis(prazo,r);return Math.round((new Date(prazo+'T12:00')-new Date(r+'T12:00'))/864e5)}
const chegPorData=(prazo,recebido)=>{if(!prazo)return 'atrasado';const a=antecDias(recebido,prazo);return a!==null&&a>=CHEG_MIN()?'prazo':'atrasado'};
function diasUteis(a,b){let n=0;const d=new Date(a+'T12:00'),f=new Date(b+'T12:00');if(f<=d)return 0;while(d<f){d.setDate(d.getDate()+1);if(util(d))n++}return n}
const stCh={'Aberto':'ac','Em análise':'wa','Pendência com solicitante':'bad','Programado':'ok','Concluído':'ne'};
const CHK=['Documento (NF, recibo ou boleto) salvo no repositório oficial','Aprovado pelo gestor do departamento','Centro de custo e vencimento conferidos'];
const CAMPOS_CH=[
 ['tipo','Tipo de chamado','tiposel',1],['dep','Departamento solicitante','depsel',1],['solicitante','Seu nome','text',1],['assunto','Resumo do pedido','text',1,'full'],
 ['favorecido','Fornecedor ou favorecido','text','pg'],['nf','Número da NF ou documento','text','pg'],['venc','Vencimento','date','pg'],['cc','Centro de custo','text','pg'],
 ['aprovador','Gestor que aprovou','text','pg'],['doc','Link do documento no repositório oficial','text','pg','full'],['desc','Descrição','textarea',1,'full']];
function formCh(v={}){
 const pg=PAGTO(v.tipo||TIPOS_CH[0]);
 const campo=([k,l,t,req,full])=>{const val=v[k]??(k==='dep'?solDep()||'':'');let inp;
  if(t==='tiposel')inp=`<select class="inp" id="c_tipo" onchange="tipoCh()">${TIPOS_CH.map(o=>`<option ${o===(v.tipo||TIPOS_CH[0])?'selected':''}>${o}</option>`).join('')}</select>`;
  else if(t==='depsel')inp=`<select class="inp" id="c_dep" ${solic()?'disabled':''}>${!val?'<option value="">Selecione</option>':''}${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===val?'selected':''}>${esc(d.n)}</option>`).join('')}</select>`;
  else if(t==='textarea')inp=`<textarea class="inp" id="c_${k}" placeholder="${k==='desc'?'Explique o que precisa ser feito e qualquer detalhe importante':''}">${esc(val)}</textarea>`;
  else inp=`<input class="inp" id="c_${k}" type="${t}" value="${esc(val)}" ${k==='venc'?'oninput="prazoCh()"':''} ${k==='doc'?'placeholder="https://"':''}>`;
  return `<div class="${full?'full':''}" ${req==='pg'?`data-pg ${pg?'':'hidden'}`:''}><label class="lbl" for="c_${k}">${esc(l)}</label>${inp}<p class="ferr" id="ce_${k}"></p></div>`};
 return `<form id="chform" class="fgrid" novalidate onsubmit="event.preventDefault()">${CAMPOS_CH.map(campo).join('')}
  <div class="full" data-pg ${pg?'':'hidden'}><span class="lbl">Confirmações obrigatórias</span>${CHK.map((c,i)=>`<label style="display:flex;gap:8px;align-items:flex-start;font-size:13px;margin:6px 0"><input type="checkbox" id="c_chk${i}" ${v.chk?.[i]?'checked':''} style="margin-top:3px">${c}</label>`).join('')}<p class="ferr" id="ce_chk"></p></div>
  <div class="full" id="c_aviso"></div></form>`}
function tipoCh(){const pg=PAGTO(document.getElementById('c_tipo').value);document.querySelectorAll('#chform [data-pg]').forEach(el=>el.hidden=!pg);prazoCh()}
function prazoCh(){const el=document.getElementById('c_aviso');if(!el)return;const pg=PAGTO(document.getElementById('c_tipo').value),v=document.getElementById('c_venc')?.value;
 if(!pg||!v){el.innerHTML='';return}
 const du=diasUteis(HJ,v);
 el.innerHTML=v<HJ?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>Esse vencimento já passou. Confira a data.</span></div>`:du<DMIN()?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Faltam ${du} ${du===1?'dia útil':'dias úteis'} até o vencimento. A política pede no mínimo ${DMIN()}. O chamado será aceito, mas marcado como fora do prazo e o diretor será avisado.</span></div>`:`<div class="banner"><span>Dentro do prazo: ${du} dias úteis até o vencimento.</span></div>`}
function lerCh(){
 const g=k=>document.getElementById('c_'+k);const tipo=g('tipo').value,pg=PAGTO(tipo),o={tipo};let ok=true;
 document.querySelectorAll('#chform .ferr').forEach(e=>e.textContent='');
 for(const [k,,t,req] of CAMPOS_CH){if(k==='tipo')continue;const v=g(k).value.trim();if(req==='pg'&&!pg){o[k]='';continue}
  if(!v){document.getElementById('ce_'+k).textContent='Preencha este campo.';ok=false;continue}o[k]=v}
 if(pg){if(o.venc&&o.venc<HJ){document.getElementById('ce_venc').textContent='O vencimento não pode estar no passado.';ok=false}
  if(o.doc&&!/^https?:\/\/\S+$/.test(o.doc)){document.getElementById('ce_doc').textContent='Cole o link completo, começando com https://';ok=false}
  o.chk=CHK.map((_,i)=>g('chk'+i).checked);if(o.chk.includes(false)){document.getElementById('ce_chk').textContent='Confirme os três itens antes de enviar.';ok=false}
  o.fora=!!o.venc&&diasUteis(HJ,o.venc)<DMIN()}else{o.chk=[];o.fora=false}
 if(!ok){document.querySelector('#chform .ferr:not(:empty)')?.closest('div')?.scrollIntoView?.({block:'center',behavior:'smooth'})}
 return ok?o:null}
async function enviarCh(id){
 const o=lerCh();if(!o)return;
 const ant=id?D.chamados.find(c=>c.id===id):null;
 if(ant){const {id:_,...b}=ant;if(await salvar('chamados',id,{...b,...o,st:solic()?'Aberto':b.st,pend:solic()?'':b.pend},'Chamado atualizado',solic()?`Corrigiu e reenviou o chamado ${b.proto}`:`Editou o chamado ${b.proto}`))fechar();return}
 const proto='CH-'+String(Date.now()).slice(-6);
 if(await salvar('chamados',null,{...o,por:ME.uid||null,proto,st:'Aberto',aberto:HJ,abertoEm:new Date().toISOString(),resp:'',pend:''},`Chamado ${proto} aberto`,`Abriu o chamado ${proto} · ${o.tipo}${o.fora?' · fora do prazo':''}`)){limparRascunho('tela:abrir:'+S.perfil);S.forceAbrir=true;if(solic())S.tela='meus';fechar();render()}}
function abrirChSheet(id){const c=id?D.chamados.find(x=>x.id===id):null;FORM={tipo:'_ch'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${c?esc(c.proto):'Novo chamado'}</p><h2 id="sheet-title">${c?(solic()?'Corrigir e reenviar':'Editar chamado'):'Abrir chamado'}</h2>${c?.pend?`<div class="banner" style="background:var(--bad-bg);color:var(--bad);margin-top:8px"><span>Pendência: ${esc(c.pend)}</span></div>`:''}</div>${formCh(c||{})}
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="enviarCh(${c?`'${esc(c.id)}'`:''})">${c?'Salvar e reenviar':'Enviar chamado'}</button></div></div>`;
 document.getElementById('ov').hidden=false;prazoCh()}
function detalheCh(id){const c=D.chamados.find(x=>x.id===id);if(!c)return;FORM={tipo:'_det',id};
 const h=D.logs.filter(l=>(l.alvo||'').includes(c.proto)||(l.acao||'').includes(c.proto));
 const linha=(l,v)=>v?`<div class="row"><div class="t"><span>${l}</span><b>${esc(v)}</b></div></div>`:'';
 const sp=stPrazo(c),eq=!solic()&&pode('chamados'),le=pode('ler_email');
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(c.proto)} · aberto em ${fmt(c.aberto)}</p><h2 id="sheet-title">${esc(c.assunto)}</h2><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px"><span class="tag ${stCh[c.st]}">${esc(nomeEt(c.st))}${c.sub?' · '+esc(c.sub):''}</span>${sp?`<span class="tag ${sp[0]}">${sp[1]}</span>`:''}${c.fora?'<span class="tag wa">Fora do prazo da política</span>':''}${pagTag(c)}${padraoTag(c)}</div>
 ${pode('chamados')||dir()?`<div class="chegada"><span class="lbl" style="margin:0">Chegou ao financeiro</span><button class="chip ${chegadaDe(c)==='prazo'?'on':''}" onclick="marcaChegada('${esc(c.id)}','prazo')">Em dia</button><button class="chip ${chegadaDe(c)==='atrasado'?'on bad':''}" onclick="marcaChegada('${esc(c.id)}','atrasado')">Atrasado</button><button class="chip ${c.chegada==='na'||c.padraoMan?'on':''}" onclick="ajusteSheet('c:${esc(c.id)}')">Ajustar prazo e padrão</button><span class="meta">${!c.chegada&&c.origem==='email'?'automático pelo texto do e-mail':c.chegadaAuto?(c.prazoEnv?`automático · pedido para ${fmtAno(c.prazoEnv)}, chegou ${antecDias(c.recebidoEm||c.abertoEm,c.prazoEnv)} ${CHEG_UTEIS()?'dias úteis':'dias'} antes (mínimo ${chegTxt()})`:'automático · o e-mail não trazia data de prazo'):c.chegada?`marcado por ${esc(c.chegadaPor||'—')}`:''}</span></div>`:''}</div>
 ${c.pend?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>Pendência: ${esc(c.pend)}</span></div>`:''}
 ${foraPadrao(c)?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Fora do padrão. Falta: ${esc(padraoTxt(c))}.${c.pedidoFaltaEm?` Pedido enviado por ${esc(c.pedidoFaltaPor||'—')} em ${fmtHora(c.pedidoFaltaEm)}.`:''}</span>${eq?`<button class="btn" onclick="pedirFalta('c:${esc(c.id)}')">${c.pedidoFaltaEm?'Pedir de novo':'Pedir o que falta'}</button>`:''}</div>`:''}
 <div>${linha('Tipo',c.tipo)}${linha('Assunto',c.cat||c.subcat?catTxt(c):'Sem assunto')}${linha('Setor',c.dep?depNome(c.dep):'Não definido')}${linha(c.origem==='email'?'Remetente':'Solicitante',c.solicitante)}${linha('Chegou em',c.recebidoEm?fmtHora(c.recebidoEm)+'/'+c.recebidoEm.slice(0,4):fmtAno(c.aberto))}${linha('Fornecedor ou favorecido',c.favorecido)}${linha('NF ou documento',c.nf)}${linha('Vencimento do pagamento',vencDe(c)?fmtAno(vencDe(c))+(c.venc?'':' (data pedida no e-mail)'):'')}${(()=>{const p=pagSit(c);return p&&!p.pend?linha(`Pagamento (limite D-${PAG_D()}: ${fmtAno(p.lim)})`,`${fmtAno(p.pg)} · ${p.ok?'dentro do padrão':'fora do padrão'}${c.pagJust?' · '+c.pagJust:''}`):''})()}${linha('Centro de custo',c.cc)}${linha('Gestor que aprovou',c.aprovador)}${linha('Responsável no financeiro',c.resp?respNome(c.resp):'Ninguém aceitou ainda')}${linha('Prazo de entrega',c.prazo?fmtAno(c.prazo):'')}${linha('Aceita por',c.aceitoEm?`${c.aceitoNome||'—'} · ${fmtHora(c.aceitoEm)}`:'')}${linha('Realizada por',c.st==='Concluído'?`${quemFezNome(c)} · ${c.conclEm?fmtHora(c.conclEm):fmt(c.concl)}`:'')}${linha('No cronograma',[...D.cronitens.filter(x=>x.chamadoId===c.id).map(x=>`${D.cronograma.find(r=>r.id===x.rot)?.t||'Rotina'} · ${fmt(x.dia)}${x.feito?' · feito':''}`),...D.cronograma.filter(r=>r.chamadoId===c.id).map(r=>`${r.t} · ${fmt(r.data)}`)].join(' | '))}${linha('Descrição',c.desc)}
 ${c.origem==='email'&&le&&(c.msgId||c.emailLink)?`<div class="row"><div class="t"><span>E-mail de origem</span></div>${c.msgId?`<button class="btn" onclick="lerEmail('c:${esc(c.id)}')">Ler aqui</button>`:''}${c.emailLink?`<a class="btn ghost" href="${esc(c.emailLink)}" target="_blank" rel="noopener">Abrir no Outlook ↗</a>`:''}</div>`:''}${c.doc&&/^https?:\/\//.test(c.doc)?`<div class="row"><div class="t"><span>Documento</span></div><a class="btn" href="${esc(c.doc)}" target="_blank" rel="noopener">Abrir documento</a></div>`:''}</div>
 <div><span class="lbl">Histórico</span>${h.length?h.map(l=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(l.em)}</span><div class="t"><b style="font-weight:400">${esc(l.acao)}</b><span>${esc(quemLog(l))}</span></div></div>`).join(''):'<p class="meta">Sem registros.</p>'}</div>
 <div class="foot"><div style="display:flex;gap:8px;flex-wrap:wrap">${eq&&c.st!=='Concluído'?`<button class="btn" onclick="aceitarSheet({ch:'${esc(c.id)}'})">${c.aceitoEm?'Prazo, assunto e responsável':'Aceitar'}</button>`:''}${eq&&c.st==='Concluído'?`<button class="btn" onclick="reabrirCh('${esc(c.id)}')">${S.reab===c.id?'Confirmar reabertura':'Reabrir'}</button>`:''}${eq&&PAGTO(c.tipo)&&['Programado','Concluído'].includes(c.st)?`<button class="btn" onclick="pagSheet('${esc(c.id)}',true)">Pagamento e justificativa</button>`:''}${eq&&c.origem==='email'&&c.msgId&&PAGTO(c.tipo)&&!c.padrao?`<button class="btn" onclick="conferirPadrao('c:${esc(c.id)}')">Conferir padrão</button>`:''}${eq&&c.st!=='Concluído'?`<button class="btn" onclick="chParaCron('${esc(c.id)}')">${D.cronograma.some(r=>r.chamadoId===c.id)||D.cronitens.some(x=>x.chamadoId===c.id)?'Levar de novo ao cronograma':'Levar para o cronograma'}</button>`:''}</div><button class="btn" onclick="fechar()">Fechar</button></div>`;
 document.getElementById('ov').hidden=false}
function pendCh(id){const c=D.chamados.find(x=>x.id===id);FORM={tipo:'_pend'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(c.proto)}</p><h2 id="sheet-title">Devolver com pendência</h2><p class="sub" style="font-size:13px">O solicitante recebe a notificação e corrige o chamado.</p></div>
 <div><label class="lbl" for="p_mot">O que precisa ser corrigido</label><textarea class="inp" id="p_mot" placeholder="A NF anexada não corresponde ao fornecedor informado"></textarea><p class="ferr" id="pe_mot"></p></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaPend('${esc(id)}')">Devolver</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaPend(id){const m=document.getElementById('p_mot').value.trim();if(!m){document.getElementById('pe_mot').textContent='Descreva o que precisa ser corrigido.';return}
 const c=D.chamados.find(x=>x.id===id);if(await patch('chamados',id,{st:'Pendência com solicitante',pend:m,devolucoes:(+c.devolucoes||0)+1},'Devolvido ao solicitante',`Devolveu o chamado ${c.proto} com pendência: ${m}`))fechar()}
function avCh(id){const c=D.chamados.find(x=>x.id===id);if(!c)return;const nx=proxEtapa(c);if(!nx)return;
 const bl=nx==='Programado'&&bloqueioForn(c.favorecido);if(bl){toast(`Pagamento travado: a troca de dados bancários de ${bl.forn} ainda não foi aprovada.`);return}
 if(nx==='Programado'){const v=vencDe(c);if(v&&HJ>uteisAntes(v,PAG_D())){pagSheet(id);return}}
 const mud={st:nx,sub:''};if(nx==='Programado')Object.assign(mud,{programadoEm:HJ,pagoEm:HJ,pagAtraso:false});
 if(nx==='Concluído')Object.assign(mud,{concl:HJ,conclEm:new Date().toISOString(),conclPor:S.perfil,conclUid:ME.uid||null,conclNome:euNome(),programadoEm:c.programadoEm||HJ},c.resp?{}:{resp:S.perfil});
 const pz=nx==='Concluído'&&c.prazo?(HJ>c.prazo?' com atraso':' no prazo'):'';
 patch('chamados',id,mud,nx==='Concluído'?`Concluído${pz}. Foi para Demandas realizadas.`:`Movido para ${nomeEt(nx)}`,nx==='Concluído'?`Concluiu o chamado ${c.proto}${pz}`:`Moveu o chamado ${c.proto} para ${nomeEt(nx)}`)}
function cardCh(c,interno){const du=c.venc?diasAte(c.venc):null,sp=stPrazo(c),subs=subEtapas(c.st),nx=proxEtapa(c);
 return `<div class="kcard${interno&&chAtrasado(c)?' late':''}"><div style="display:flex;justify-content:space-between;gap:6px;margin-bottom:4px"><span class="meta">${esc(c.proto)}</span>${chegadaTag(c,true)||(c.fora?'<span class="tag wa" style="font-size:10.5px">Fora do prazo</span>':'')}</div><b>${esc(c.assunto)}</b><span>${esc(c.tipo)} · ${esc(c.dep?depNome(c.dep):c.origem==='email'&&(c.rem||c.solicitante)?remNomeCh(c)+' · sem setor':'Setor não definido')}</span>
 <div class="ktags">${c.cat||c.subcat?`<span class="tag ac">${esc(catTxt(c))}</span>`:''}${sp?`<span class="tag ${sp[0]}">${sp[1]}</span>`:''}${bloqueioForn(c.favorecido)&&!['Programado','Concluído'].includes(c.st)?'<span class="tag bad">Dados bancários em verificação</span>':''}${pagTag(c,true)}${padraoTag(c,true)}${c.origem==='email'?`<span class="tag ne">${c.aceitoEm?'Via e-mail':'Via e-mail · conferir'}</span>`:''}</div>
 ${c.origem==='email'&&(c.solicitante||c.rem)?(interno&&c.rem?`<button class="lnk" style="display:block;font-size:12px" onclick="S.fRem='${esc(c.rem)}';render();window.scrollTo({top:0})" title="Ver tudo deste remetente">De: ${esc(remNomeCh(c))}</button>`:`<span style="display:block">De: ${esc(remNomeCh(c))}</span>`):''}
 ${c.venc?`<span style="display:block;color:${du!==null&&du<=1&&c.st!=='Concluído'&&c.st!=='Programado'?'var(--bad)':'var(--ink-3)'}">Pagamento vence ${fmt(c.venc)}${du!==null&&du>=0&&c.st!=='Concluído'?` · ${du===0?'hoje':du===1?'amanhã':`em ${du} dias`}`:''}</span>`:''}
 ${c.resp?`<span style="display:block">Com: ${esc(respNome(c.resp))}</span>`:''}
 ${interno&&subs.length&&c.st!=='Concluído'?`<select class="inp mini" aria-label="Situação dentro da etapa" onchange="subCh('${esc(c.id)}',this.value)"><option value="">${esc(nomeEt(c.st))}</option>${subs.map(x=>`<option ${x===c.sub?'selected':''}>${esc(x)}</option>`).join('')}${c.sub&&!subs.includes(c.sub)?`<option selected>${esc(c.sub)}</option>`:''}</select>`:c.sub?`<span style="display:block">Situação: ${esc(c.sub)}</span>`:''}
 <div class="acts" style="flex-wrap:wrap;gap:4px"><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Detalhes</button>${interno?`${(!c.resp||!c.prazo)&&c.st!=='Concluído'?`<button class="btn pri" onclick="aceitarSheet({ch:'${esc(c.id)}'})">Aceitar</button>`:''}${['Aberto','Em análise'].includes(c.st)?`<button class="btn ghost" onclick="pendCh('${esc(c.id)}')">Pendência</button>`:''}${nx&&c.resp?`<button class="btn" onclick="avCh('${esc(c.id)}')">${nx==='Concluído'?'Concluir ✓':'Avançar ›'}</button>`:''}`:`${c.st==='Pendência com solicitante'?`<button class="btn pri" onclick="abrirChSheet('${esc(c.id)}')">Corrigir</button>`:''}`}</div></div>`}
function regrasCh(){return `<div class="panel"><div class="ph"><h2>Antes de abrir um chamado de pagamento</h2></div>
 <div class="row"><div class="t"><b>Prazo mínimo de ${DMIN()} dias úteis antes do vencimento</b><span>Pedidos com prazo menor são aceitos, mas marcados como fora do prazo.</span></div></div>
 <div class="row"><div class="t"><b>Documento salvo no repositório oficial</b><span>Cole o link. Dados bancários e valores ficam no documento e no ERP, nunca no portal.</span></div></div>
 <div class="row"><div class="t"><b>Aprovação do gestor do seu departamento</b><span>Informe quem aprovou.</span></div></div></div>`}

/* ---------- assuntos, prazos e demandas ---------- */
const assDe=id=>id?D.assuntos.find(a=>a.id===id):null;
const assNome=id=>assDe(id)?.n||'Sem assunto';
const assLista=()=>[...D.assuntos].sort((a,b)=>(a.n||'').localeCompare(b.n||''));
const subsDe=id=>(assDe(id)?.subs||[]).filter(Boolean);
const catTxt=c=>`${assNome(c.cat)}${c.subcat?' › '+c.subcat:''}`;
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
/* categorias automáticas dos chamados: pedidos parecidos viram uma aba de assunto.
   Só preenche chamados sem assunto; nunca troca o que alguém escolheu e não apaga nada. */
const CATS_SUG=[
 ['Indicadores e premiação',['indicador','indicadores','premiacao','premio','bonus','bonificacao','comissao','comissoes','meta batida','metas']],
 ['Palestrantes e eventos',['palestrante','palestrantes','palestra','palestras','evento','eventos','honorario','honorarios','cache','congresso','seminario','workshop']],
 ['Benefícios (Swile, VR, VA)',['swile','recarga','vale refeicao','vale alimentacao','vr','va','flash','alelo','ticket','sodexo']],
 ['Reembolso',['reembolso','reembolsos','reembolsar','ressarcimento','ressarcir']],
 ['Adiantamento',['adiantamento','adiantamentos']],
 ['Diárias e viagens',['diaria','diarias','viagem','viagens','hospedagem','passagem','passagens','quilometragem','km rodado','combustivel']],
 ['Prestação de contas',['prestacao de contas','prestar contas','relatorio de despesas','despesas']],
 ['Folha e RH',['folha','folha de pagamento','rescisao','rescisoes','ferias','13 salario','decimo terceiro','salario','salarios','pensao','vale transporte']],
 ['Impostos e guias',['imposto','impostos','guia','guias','darf','gps','fgts','inss','iss','irrf','pis','cofins','csll','tributo','tributos','das simples']],
 ['Repasse de polos',['polo','polos','repasse','repasses']],
 ['Nota fiscal',['nota fiscal','notas fiscais','nf','nfe','nf-e','nfse','nfs-e','danfe','xml']],
 ['Estorno e devolução',['estorno','estornos','devolucao','devolver','cancelamento']],
 ['Cadastro e dados bancários',['cadastro de fornecedor','cadastrar fornecedor','dados bancarios','conta bancaria','alteracao bancaria']],
 ['Convênio e plano de saúde',['convenio','convenios','plano de saude','convenio saude','convenio medico','unimed','odonto','odontologico','coparticipacao']],
 ['Contratos',['contrato','contratos','aditivo']],
 ['Cartão corporativo',['cartao corporativo','fatura do cartao']],
 ['Compras e orçamentos',['pedido de compra','orcamento','orcamentos','cotacao']],
 ['Pagamento a fornecedor',['boleto','boletos','fornecedor','fornecedores','fatura','faturas','pix','pagamento','pagamentos']]];
const temPal=(nt,k)=>new RegExp('(^|[^a-z0-9])'+reEsc(norm(k))+'([^a-z0-9]|$)').test(nt);
// o assunto do e-mail pesa mais que a mensagem; categorias genéricas (nota fiscal, boleto, pagamento) só ganham se nada mais específico aparecer
const CAT_GENERICA=new Set(['Pagamento a fornecedor','Nota fiscal']);
function catSugerida(t,sub){const nt=norm(t),ns=norm(sub||'');let best=null,bs=0;
 for(const [n,ks] of CATS_SUG){let sc=0;for(const k of ks){const w=k.includes(' ')?2:1;if(ns&&temPal(ns,k))sc+=w*3;else if(temPal(nt,k))sc+=w}
  if(CAT_GENERICA.has(n))sc*=0.4;if(sc>bs){bs=sc;best=n}}return best}
/* categoria de um e-mail da triagem: o assunto cadastrado, senão a sugestão automática */
const emCatFixa=e=>{const a=assDe(e.sug?.assunto);if(a&&!a.auto)return a.n;const t=`${e.assunto||''} ${e.trecho||''}`,id=assPorTexto(t,true);return assDe(id)?.n||catSugerida(e.trecho||'',e.assunto||'')||''};
// quando nem o assunto nem o começo do e-mail dizem a categoria: o que a mensagem inteira diz, senão o próprio assunto vira a aba
const emCat=e=>emCatFixa(e)||e.catMsg||catDoAssunto(e.assunto);
const MES_W=new Set(['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro','jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']);
const PAL_VAZIA=new Set(['de','da','do','das','dos','e','a','o','as','os','para','pra','com','em','no','na','ref','referente','solicitacao','pedido','envio','segue','urgente','favor','por','mes','ano','sem','assunto','anexo','anexos','arquivo','arquivos','oi','ola','bom','dia','boa','tarde','obrigado','obrigada']);
function catDoAssunto(a){let t=String(a||'').replace(/^\s*((re|res|enc|fw|fwd|tr|rv)\s*:\s*)+/i,'').replace(/[\[\](){}"'“”:;,.!?\/\|_–—-]+/g,' ');
 const ws=t.split(/\s+/).filter(w=>{const n=norm(w);return n&&!/\d/.test(n)&&!MES_W.has(n)&&n.length>1});
 const sig=ws.filter(w=>!PAL_VAZIA.has(norm(w)));if(!sig.length)return '';
 const out=[];for(const w of ws){if(out.length>=4)break;if(!out.length&&PAL_VAZIA.has(norm(w)))continue;out.push(w)}
 while(out.length&&PAL_VAZIA.has(norm(out[out.length-1])))out.pop();
 const r=out.join(' ').toLowerCase();return r?r[0].toUpperCase()+r.slice(1):''}
// lê a mensagem inteira (só dos e-mails sem categoria) e guarda só o nome da categoria encontrada, nunca o texto
async function categoriasPelaMensagem(){if(S._cpm||!real()||S.sim||!DB||!MCP||!(pode('email')||podeAdmin()))return;
 const L=emPend().filter(e=>!emCatFixa(e)&&!e.corpoLido&&e.msgId).slice(0,8);if(!L.length)return;S._cpm=true;
 try{for(const e of L){const full=await lerCompleto(e.msgId);if(!full)continue;const corpo=String(full.body||'').slice(0,6000),anx=(full.attachments||[]).map(a=>a?.name||'').join(' ');
   const c=catSugerida(`${corpo} ${anx}`,e.assunto||'')||'';await patch('emails',e.id,{catMsg:c,corpoLido:true},null,false)}}
 catch(x){}finally{S._cpm=false}}
const assIdPorNome=n=>n?(D.assuntos.find(a=>norm(a.n)===norm(n))?.id||''):'';
const slugCat=n=>'auto_'+norm(n).replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
async function autoCategorias(){if(S._acat||!real()||S.sim||!DB||!(pode('chamados')||pode('cadastros')))return;
 const tent=S._acTent=S._acTent||new Set();
 const L=D.chamados.filter(c=>(!assDe(c.cat)||assDe(c.cat)?.auto)&&!c.catManual&&!tent.has(c.id)).slice(0,150);if(!L.length)return;
 S._acat=true;let n=0;const novas=[];
 try{for(const c of L){tent.add(c.id);const txt=`${c.assunto||''} ${c.desc||''} ${c.subcat||''} ${c.tipo&&c.tipo!=='Outros'?c.tipo:''}`;
   let id=assPorTexto(txt,true);
   if(!assDe(id)){const nome=catSugerida(`${c.desc||''} ${c.subcat||''}`,c.assunto||'');if(!nome)continue;
    const ex=D.assuntos.find(a=>norm(a.n)===norm(nome));id=ex?.id||slugCat(nome);
    if(!ex&&!assDe(id)){const ks=CATS_SUG.find(x=>x[0]===nome)[1];if(!await salvar('assuntos',id,{n:nome,palavras:ks.join(', '),dias:3,subs:[],auto:true,criado:HJ,criadoPor:S.perfil},null,false))continue;novas.push(nome)}}
   const at=D.chamados.find(x=>x.id===c.id);if(!at||at.catManual||at.cat===id||(assDe(at.cat)&&!assDe(at.cat)?.auto))continue;
   if(await patch('chamados',c.id,{cat:id,catAuto:true},null,false))n++}
  if(n)log(`Separou ${n} ${n===1?'chamado':'chamados'} em abas de assunto automaticamente${novas.length?` (abas novas: ${novas.join(', ')})`:''}`);
  if(novas.length)toast(`Abas novas em Chamados: ${novas.join(', ')}`)}
 catch(e){}finally{S._acat=false}}
function assPorTexto(t,semAuto){const nt=norm(t);let best='',bs=0;
 for(const a of D.assuntos){if(semAuto&&a.auto)continue;const ks=[a.n,...String(a.palavras||'').split(/[,;]+/),...(a.subs||[])].map(x=>norm(x).trim()).filter(x=>x.length>1);let s=0;
  for(const k of ks)if(new RegExp('(^|[^a-z0-9])'+reEsc(k)).test(nt))s++;
  if(s>bs){bs=s;best=a.id}}
 return best}
const respsDe=aid=>aid?D.acessos.filter(a=>a.perfil==='equipe'&&a.ativo!==false&&(a.assuntos||[]).includes(aid)&&pessoa(a.pessoa)).map(a=>a.pessoa):[];
function addUteis(iso,n){const d=new Date(iso+'T12:00');let k=0;while(k<n){d.setDate(d.getDate()+1);if(util(d))k++}return isoD(d)}
const diasPadrao=aid=>{const a=assDe(aid);return a&&a.dias!==''&&a.dias!=null&&+a.dias>=0?Math.round(+a.dias):3};
const prazoPadrao=aid=>addUteis(HJ,diasPadrao(aid));
const respNome=r=>!r?'—':r==='dir'?'Diretor':nomeDe(r);
const euNome=()=>dir()?((real()&&!S.sim&&ME.nome)||'Diretor'):nomeDe(S.perfil);
const quemFez=c=>c.conclPor||c.resp||'';
const quemFezNome=c=>c.conclNome||respNome(quemFez(c));
const chAtrasado=c=>c.st!=='Concluído'&&c.prazo&&c.prazo<HJ;
const fmtAno=iso=>iso?`${fmt(iso)}/${iso.slice(0,4)}`:'—';
function stPrazo(c){if(!c.prazo)return null;
 if(c.st==='Concluído'){const late=c.concl&&c.concl>c.prazo?Math.max(1,diasUteis(c.prazo,c.concl)):0;return late?['wa',`Concluída com ${late} ${late>1?'dias úteis':'dia útil'} de atraso`]:['ok','Concluída no prazo']}
 const d=diasAte(c.prazo);if(d<0)return ['bad',`Atrasada há ${-d} ${d<-1?'dias':'dia'}`];if(d===0)return ['wa','Entrega hoje'];if(d===1)return ['wa','Entrega amanhã'];return ['ne',`Entrega até ${fmt(c.prazo)}`]}
const subOpts=(cat,v)=>{const l=subsDe(cat);return `<option value="">${l.length?'Nenhuma':'Sem subcategorias'}</option>${l.map(x=>`<option ${x===v?'selected':''}>${esc(x)}</option>`).join('')}${v&&!l.includes(v)?`<option selected>${esc(v)}</option>`:''}`};
function dicaResp(cat){const r=respsDe(cat);return r.length?`Responsáveis por ${esc(assNome(cat))}: ${r.map(x=>esc(nomeDe(x))).join(', ')}`:cat?'Ninguém está marcado como responsável por esse assunto. Defina em Usuários e permissões.':''}

/* editor de listas (subcategorias e subetapas): adiciona e exclui na hora */
function chipsEd(k,ph){return `<div class="chipsed" id="ce_${k}">${chipsIn(k)}</div><div class="grp" style="margin-top:8px"><input class="inp" id="ci_${k}" data-nodraft="1" placeholder="${esc(ph)}" onkeydown="if(event.key==='Enter'){event.preventDefault();chipAdd('${k}')}"><button class="btn" type="button" onclick="chipAdd('${k}')">Adicionar</button></div>`}
function chipsIn(k){const l=FORM.listas[k]||[];return l.length?l.map((x,i)=>`<span class="chip">${esc(x)}<button type="button" class="chipx" onclick="chipDel('${k}',${i})" aria-label="Excluir ${esc(x)}" title="Excluir">×</button></span>`).join(''):'<span class="meta">Nenhuma ainda.</span>'}
function chipAdd(k){const el=document.getElementById('ci_'+k),v=(el.value||'').trim().slice(0,60);if(!v)return;const l=FORM.listas[k]=FORM.listas[k]||[];if(l.some(x=>norm(x)===norm(v))){toast('Esse item já existe.');return}l.push(v);el.value='';document.getElementById('ce_'+k).innerHTML=chipsIn(k);el.focus()}
function chipDel(k,i){FORM.listas[k].splice(i,1);document.getElementById('ce_'+k).innerHTML=chipsIn(k)}

/* gestão dos assuntos */
function gerirAssuntos(){FORM={tipo:'_assuntos'};const L=assLista();
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamados e e-mails</p><h2 id="sheet-title">Assuntos</h2><p class="sub" style="font-size:13px">Separe as demandas por tema. Cada assunto pode ter subcategorias, palavras que ajudam a reconhecer os e-mails e um prazo padrão de entrega.</p></div>
 <div>${L.length?L.map(a=>{const r=respsDe(a.id);return `<div class="row"><div class="t"><b>${esc(a.n)}</b><span>${a.subs?.length?esc(a.subs.join(' · ')):'Sem subcategorias'} · prazo padrão ${diasPadrao(a.id)} dias úteis${r.length?' · '+r.map(x=>esc(nomeDe(x))).join(', '):''}</span></div><span class="meta">${D.chamados.filter(c=>c.cat===a.id&&c.st!=='Concluído').length} em aberto</span><button class="btn" onclick="editAssunto('${esc(a.id)}')">Editar</button></div>`}).join(''):vazio('Nenhum assunto ainda','Crie assuntos como Pagamentos, Notas fiscais ou Folha para separar as demandas.')}</div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" onclick="editAssunto()">Novo assunto</button></div></div>`;
 document.getElementById('ov').hidden=false}
function editAssunto(id){const a=(id&&assDe(id))||{};FORM={tipo:'_assunto',id:id||'',del:false,listas:{subs:[...(a.subs||[])]}};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Assuntos</p><h2 id="sheet-title">${id?'Editar assunto':'Novo assunto'}</h2></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="as_n">Nome do assunto</label><input class="inp" id="as_n" value="${esc(a.n||'')}" placeholder="Notas fiscais"><p class="ferr" id="ase_n"></p></div>
 <div class="full"><span class="lbl">Subcategorias</span>${chipsEd('subs','Ex.: NF de serviço')}<p class="meta" style="margin:4px 0 0">Adicione ou exclua quando precisar. Chamados antigos guardam a subcategoria que tinham.</p></div>
 <div class="full"><label class="lbl" for="as_pal">Palavras que identificam o assunto no e-mail · opcional</label><input class="inp" id="as_pal" value="${esc(a.palavras||'')}" placeholder="nota fiscal, nf, danfe, xml"><p class="meta" style="margin:4px 0 0">Separe por vírgula. O portal usa para sugerir o assunto quando um e-mail chega.</p></div>
 <div><label class="lbl" for="as_dias">Prazo padrão (dias úteis)</label><input class="inp" id="as_dias" type="number" min="0" max="60" value="${id?diasPadrao(id):3}"><p class="ferr" id="ase_dias"></p></div></div>
 <div class="foot"><div>${id?`<button class="btn danger" id="bdel" onclick="delAssunto()">Excluir</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="gerirAssuntos()">Voltar</button><button class="btn pri" onclick="salvaAssunto()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('as_n')?.focus(),30)}
async function salvaAssunto(){const n=val('as_n'),dias=val('as_dias');errEl('ase_n','');errEl('ase_dias','');
 if(!n){errEl('ase_n','Dê um nome ao assunto.');return}
 if(D.assuntos.some(a=>a.id!==FORM.id&&norm(a.n)===norm(n))){errEl('ase_n','Já existe um assunto com esse nome.');return}
 if(dias!==''&&!(+dias>=0&&+dias<=60)){errEl('ase_dias','Use de 0 a 60.');return}
 const ant=FORM.id?assDe(FORM.id):null,{id:_,...b}=ant||{};
 if(await salvar('assuntos',FORM.id||null,{...b,n,palavras:val('as_pal'),dias:dias===''?3:Math.round(+dias),subs:FORM.listas.subs},FORM.id?'Assunto atualizado':'Assunto criado'))gerirAssuntos()}
async function delAssunto(){const b=document.getElementById('bdel'),n=D.chamados.filter(c=>c.cat===FORM.id).length;
 if(!FORM.del){FORM.del=true;b.textContent=n?`Confirmar: ${n} ${n>1?'chamados ficam':'chamado fica'} sem assunto`:'Confirmar exclusão';return}
 const a=assDe(FORM.id);try{await DB.collection('assuntos').doc(FORM.id).delete();log(`Excluiu o assunto "${a?.n||''}"`);toast('Assunto excluído');gerirAssuntos()}catch(e){toast('Não foi possível excluir.')}}

/* subetapas dentro das etapas dos chamados */
const subEtapas=st=>((CFG.subEtapas||{})[st]||[]).filter(Boolean);
// Mexer nas colunas direto no quadro: ‹ › muda a ordem, ✎ renomeia (diretor e administradores).
const podeCol=()=>podeAdmin()||dir();
async function gravaColunas(nomes,ordem,msg){try{await DB.doc('config/estrutura').set({...CFG,colunasCh:{nomes,ordem}});CFG={...CFG,colunasCh:{nomes,ordem}};log(msg);render();return true}catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar as colunas.':'Não foi possível salvar.');return false}}
function colMove(ce,d){const k=ETAPAS[ce],o=ordemEt(),i=o.indexOf(k),j=i+d;if(i<0||j<0||j>=o.length)return;[o[i],o[j]]=[o[j],o[i]];gravaColunas({...((CFG.colunasCh||{}).nomes||{})},o,`Mudou a ordem das colunas dos chamados: ${o.map(nomeEt).join(' › ')}`)}
function colNome(ce){const k=ETAPAS[ce],h=document.getElementById('colh_'+ce);if(!h)return;
 h.innerHTML=`<input class="inp" id="coln_${ce}" maxlength="40" value="${esc(nomeEt(k))}" aria-label="Nome da coluna" style="padding:4px 8px;font-size:12px">`;
 const inp=document.getElementById('coln_'+ce);inp.focus();inp.select();let feito=false;
 const fim=async ok=>{if(feito)return;feito=true;const v=inp.value.trim().slice(0,40);if(!ok||!v||v===nomeEt(k)){render();return}
  if(ETAPAS.some(x=>x!==k&&norm(nomeEt(x))===norm(v))){toast('Já existe uma coluna com esse nome.');render();return}
  const nomes={...((CFG.colunasCh||{}).nomes||{})};if(v===k)delete nomes[k];else nomes[k]=v;
  await gravaColunas(nomes,ordemEt(),`Renomeou a coluna "${nomeEt(k)}" para "${v}"`)};
 inp.onkeydown=ev=>{if(ev.key==='Enter')fim(true);if(ev.key==='Escape')fim(false)};inp.onblur=()=>fim(true)}
function cfgColunas(){const cc=CFG.colunasCh||{};FORM={tipo:'_colunas',ordem:ordemEt(),nomes:{...(cc.nomes||{})}};desenhaColunas();document.getElementById('ov').hidden=false}
function desenhaColunas(){const f=FORM;if(f?.tipo!=='_colunas')return;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamados</p><h2 id="sheet-title">Colunas do andamento</h2><p class="sub" style="font-size:13px">Mude o nome que aparece em cada coluna e a ordem delas no quadro. Os chamados continuam onde estão.</p></div>
 <div class="sbox">${f.ordem.map((k,i)=>`<div class="row" style="gap:8px"><span class="meta" style="width:18px">${i+1}</span><input class="inp" style="flex:1" id="col_${i}" data-nodraft="1" maxlength="40" value="${esc(f.nomes[k]||k)}" aria-label="Nome da coluna ${i+1}" oninput="FORM.nomes['${k}']=this.value"><button class="btn ghost" ${i?'':'disabled'} onclick="moveColuna(${i},-1)" aria-label="Subir">↑</button><button class="btn ghost" ${i<f.ordem.length-1?'':'disabled'} onclick="moveColuna(${i},1)" aria-label="Descer">↓</button></div>${(f.nomes[k]||k)!==k?`<p class="meta" style="margin:-4px 0 4px 26px">Nome original: ${esc(k)}</p>`:''}`).join('')}</div>
 <div class="foot"><button class="btn ghost" onclick="FORM.ordem=[...ETAPAS];FORM.nomes={};desenhaColunas()">Voltar ao padrão</button><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaColunas()">Salvar</button></div></div>`}
function moveColuna(i,d){const o=FORM.ordem,j=i+d;if(j<0||j>=o.length)return;[o[i],o[j]]=[o[j],o[i]];desenhaColunas()}
async function salvaColunas(){const nomes={};for(const k of ETAPAS){const v=String(FORM.nomes[k]||'').trim().slice(0,40);if(v&&v!==k)nomes[k]=v}
 const vistos=new Set();for(const k of ETAPAS){const n=norm(nomes[k]||k);if(vistos.has(n)){toast('Duas colunas ficaram com o mesmo nome.');return}vistos.add(n)}
 try{await DB.doc('config/estrutura').set({...CFG,colunasCh:{nomes,ordem:FORM.ordem}});log('Alterou o nome ou a ordem das colunas dos chamados');toast('Colunas salvas');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar as colunas.':'Não foi possível salvar.')}}
function cfgEtapasCh(){const se=CFG.subEtapas||{};FORM={tipo:'_etapasch',listas:Object.fromEntries(ETAPAS.map((e,i)=>['e'+i,[...(se[e]||[])]]))};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Painel de chamados</p><h2 id="sheet-title">Subetapas</h2><p class="sub" style="font-size:13px">Divida cada etapa nas situações do dia a dia, como "Aguardando nota fiscal" dentro de Em análise. Adicione ou exclua quando precisar. No cartão do chamado aparece uma lista para escolher a situação.</p></div>
 ${ETAPAS.map((e,i)=>`<div class="sbox"><span class="lbl">${esc(nomeEt(e))}</span>${chipsEd('e'+i,'Nova subetapa')}</div>`).join('')}
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaEtapasCh()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaEtapasCh(){const o={};ETAPAS.forEach((e,i)=>{const l=FORM.listas['e'+i]||[];if(l.length)o[e]=l});
 try{await DB.doc('config/estrutura').set({...CFG,subEtapas:o});log('Alterou as subetapas do painel de chamados');toast('Subetapas salvas');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar as etapas.':'Não foi possível salvar.')}}
function subCh(id,v){const c=D.chamados.find(x=>x.id===id);if(!c)return;patch('chamados',id,{sub:v},null,`Marcou o chamado ${c.proto} como "${v||c.st}"`)}

/* aceitar demanda: assunto, prazo de entrega e responsável */
/* prazo de pagamento no aceite: mostra até quando pagar pela regra D-5 */
const vencInfo=v=>v?`Pagar até ${fmtAno(uteisAntes(v,PAG_D()))} (D-${PAG_D()})${uteisAntes(v,PAG_D())<HJ?' · já passou do D-5':''}`:'Se tiver vencimento, informe para o Prumo calcular o D-5.';
function acVenc(){const el=document.getElementById('ac_venc_info');if(el)el.textContent=vencInfo(val('ac_venc'))}
function aceitarSheet(ref){const em=ref.email?D.emails.find(x=>x.id===ref.email):null,c=ref.ch?D.chamados.find(x=>x.id===ref.ch):null;if(!em&&!c)return;
 const s=em?.sug||{},cat=c?(c.cat||''):(assIdPorNome(emCat(em))||(s.assunto&&assDe(s.assunto)&&!assDe(s.assunto).auto?s.assunto:'')),tipo=c?.tipo||s.tipo||'Outros',resp=c?.resp||respsDe(cat)[0]||(dir()?'':S.perfil),prazo=c?.prazo||prazoPadrao(cat),ja=!!c?.aceitoEm;
 FORM={tipo:'_aceitar',ref:em?'e:'+em.id:'c:'+c.id,email:em?.id||'',ch:c?.id||'',prazoMexido:!!c?.prazo,cat0:cat,catMan0:!!c?.catManual};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${em?'E-mail de '+esc(depNome(em.dep)):esc(c.proto)+' · '+esc(depNome(c.dep))}</p><h2 id="sheet-title">${ja?'Prazo, assunto e responsável':'Aceitar demanda'}</h2><p class="sub" style="font-size:13px">${ja?'Ajuste o que mudou. Fica registrado quem alterou.':'A demanda entra no painel de chamados com prazo e responsável. O atraso passa a contar a partir do prazo que você definir.'}</p></div>
 ${em?`<div class="trecho"><b style="font-weight:500">${esc(em.assunto)}</b><br>${esc(em.deNome||em.de)} · recebido ${fmtHora(em.recebido)}${em.trecho?'<br>'+esc(em.trecho):''}${em.msgId&&pode('ler_email')?`<br><button class="lnk" type="button" onclick="lerEmail('e:${esc(em.id)}')">Ler o e-mail completo</button>`:''}</div>`:''}
 <div class="fgrid">
  <div class="full"><label class="lbl" for="ac_tit">Resumo da demanda</label><input class="inp" id="ac_tit" value="${esc(c?.assunto||em?.assunto||'')}"><p class="ferr" id="ace_tit"></p></div>
  ${em?`<div class="full"><label class="lbl" for="ac_dep">Setor de quem enviou</label><select class="inp" id="ac_dep"><option value="">Não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===em.dep?'selected':''}>${esc(d.n)}</option>`).join('')}</select><p class="meta" style="margin:4px 0 0">Vale também para os próximos e-mails de ${esc(em.deNome||em.de)}.</p></div>`:''}
  <div><label class="lbl" for="ac_cat">Assunto</label><select class="inp" id="ac_cat" onchange="acCat()"><option value="">Sem assunto</option>${assLista().map(a=>`<option value="${esc(a.id)}" ${a.id===cat?'selected':''}>${esc(a.n)}</option>`).join('')}</select>${!D.assuntos.length&&pode('cadastros')?'<p class="meta" style="margin:4px 0 0">Crie assuntos em Chamados › Assuntos.</p>':''}</div>
  <div><label class="lbl" for="ac_sub">Subcategoria</label><select class="inp" id="ac_sub">${subOpts(cat,c?.subcat||'')}</select></div>
  <div><label class="lbl" for="ac_tipo">Tipo</label><select class="inp" id="ac_tipo">${TIPOS_CH.map(t=>`<option ${t===tipo?'selected':''}>${t}</option>`).join('')}</select></div>
  <div><label class="lbl" for="ac_venc">Prazo de pagamento · vencimento</label><input class="inp" id="ac_venc" type="date" value="${esc(c?.venc||em?.prazoEnv||'')}" oninput="acVenc()"><p class="meta" id="ac_venc_info" style="margin:4px 0 0">${vencInfo(c?.venc||em?.prazoEnv||'')}</p></div>
  <div><label class="lbl" for="ac_prazo">Prazo de entrega</label><input class="inp" id="ac_prazo" type="date" value="${esc(prazo)}" oninput="FORM.prazoMexido=true"><p class="ferr" id="ace_prazo"></p></div>
  <div class="full"><label class="lbl" for="ac_resp">Responsável</label><select class="inp" id="ac_resp"><option value="">Selecione</option><option value="dir" ${resp==='dir'?'selected':''}>Diretor</option>${colabs().map(p=>`<option value="${esc(p.id)}" ${p.id===resp?'selected':''}>${esc(p.n)}</option>`).join('')}</select><p class="ferr" id="ace_resp"></p><p class="meta" id="ac_dica" style="margin:4px 0 0">${dicaResp(cat)}</p></div>
 </div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaAceite()">${ja?'Salvar':'Aceitar demanda'}</button></div></div>`;
 document.getElementById('ov').hidden=false}
function acCat(){const cat=val('ac_cat'),sub=document.getElementById('ac_sub'),rs=document.getElementById('ac_resp');sub.innerHTML=subOpts(cat,'');
 if(!FORM.prazoMexido)document.getElementById('ac_prazo').value=prazoPadrao(cat);
 const r=respsDe(cat);if(r.length&&!r.includes(rs.value))rs.value=r[0];document.getElementById('ac_dica').innerHTML=dicaResp(cat)}
async function salvaAceite(){const tit=val('ac_tit'),prazo=val('ac_prazo'),resp=val('ac_resp');['tit','prazo','resp'].forEach(k=>errEl('ace_'+k,''));let ok=true;
 if(!tit){errEl('ace_tit','Descreva a demanda.');ok=false}
 if(!prazo){errEl('ace_prazo','Defina o prazo de entrega.');ok=false}
 if(!resp){errEl('ace_resp','Escolha o responsável.');ok=false}
 if(!ok||S.triando)return;
 const campos={venc:val('ac_venc'),assunto:tit.slice(0,200),cat:val('ac_cat'),catManual:FORM.catMan0||val('ac_cat')!==FORM.cat0,subcat:val('ac_sub'),tipo:val('ac_tipo'),prazo,resp,...(FORM.email?{dep:val('ac_dep')}:{})};
 const aceite={aceito:HJ,aceitoEm:new Date().toISOString(),aceitoPor:S.perfil,aceitoUid:ME.uid||null,aceitoNome:euNome()};
 const desc=`prazo ${fmt(prazo)} · ${respNome(resp)}${campos.cat?' · '+catTxt(campos):''}`;
 if(FORM.email){const em=D.emails.find(x=>x.id===FORM.email);if(!em)return;S.triando=true;
  try{if(await emailJaAceito(em.id)){toast('Outra pessoa já aceitou este e-mail. Ele já está em Chamados.');fechar();return}const r=await aplicar(em,{acao:'chamado',tipo:campos.tipo},false,{...campos,...aceite,st:'Em análise',conferir:false},p=>`Aceitou a demanda ${p} de ${depNome(em.dep)} · ${desc}`);
   if(r&&r!=='erro'){await patch('emails',em.id,{st:'aplicado',res:r,triadoPor:ME.uid||null,triadoEm:new Date().toISOString()},null,false);
    const rid=remDoEmail(em),rm=D.remetentes.find(x=>x.id===rid);if(campos.dep&&(!rm||rm.dep!==campos.dep))await setRem(rid,{dep:campos.dep});
    fechar()}}
  finally{S.triando=false}return}
 const c=D.chamados.find(x=>x.id===FORM.ch);if(!c)return;const novo=!c.aceitoEm;
 if(await patch('chamados',c.id,{...campos,...(novo?aceite:{}),st:c.st==='Aberto'?'Em análise':c.st},novo?'Demanda aceita':'Demanda atualizada',`${novo?'Aceitou':'Alterou'} a demanda ${c.proto} · ${desc}`))fechar()}

/* ler o e-mail dentro do portal (texto puro, nada é guardado no banco) */
async function lerEmail(ref){if(!pode('ler_email')){toast('Só quem tem a permissão Abrir e-mails no portal pode ler o e-mail completo.');return}const k=ref.slice(0,1),id=ref.slice(2),em=k==='e'?D.emails.find(x=>x.id===id):null,c=k==='c'?D.chamados.find(x=>x.id===id):null;
 const msgId=em?.msgId||c?.msgId,caixa=(em?em.caixa:c?.caixa)||'',link=em?.link||c?.emailLink||'';const volta=FORM&&FORM.tipo==='_aceitar'?FORM.ref:'';
 FORM={tipo:'_ler'};const sh=document.getElementById('sheet');
 const topo=t=>`<div><p class="eyebrow">E-mail${em?' · '+esc(depNome(em.dep)):c?' · '+esc(c.proto):''}</p><h2 id="sheet-title">${esc(t)}</h2></div>`;
 const pe=`<div class="foot"><div>${link?`<a class="btn" href="${esc(link)}" target="_blank" rel="noopener">Abrir no Outlook ↗</a>`:''}</div><div style="display:flex;gap:8px">${volta?`<button class="btn" onclick="aceitarSheet({${volta.startsWith('e:')?'email':'ch'}:'${esc(volta.slice(2))}'})">Voltar</button>`:`<button class="btn" onclick="fechar()">Fechar</button>`}${em&&em.st==='triagem'&&pode('chamados')&&!volta?`<button class="btn pri" onclick="aceitarSheet({email:'${esc(em.id)}'})">Aceitar como demanda</button>`:''}</div></div>`;
 const aviso=t=>`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>${esc(t)}</span></div>`;
 const tit=em?.assunto||c?.assunto||'';
 document.getElementById('ov').hidden=false;
 if(!msgId){sh.innerHTML=topo(tit)+aviso('Este e-mail foi registrado antes da leitura dentro do portal. Use Abrir no Outlook.')+pe;return}
 if(!MCP){sh.innerHTML=topo(tit)+aviso(msgErro({code:'sem_mcp'}))+pe;return}
 sh.innerHTML=topo(tit)+'<p class="meta">Abrindo o e-mail…</p>'+pe;
 try{const r=await MCP.callTool(SRV,'outlook_get_message',{id:msgId,...(caixa?{mailboxOwnerEmail:caixa}:{})},{cache:false});const m=r?.payload||r?.structuredContent||{};
  if(FORM?.tipo!=='_ler')return;
  const corpo=String(m.body||'').replace(/\r\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim().slice(0,30000);
  const lin=(l,v)=>v?`<div class="row"><div class="t"><span>${l}</span><b style="font-weight:400">${esc(v)}</b></div></div>`:'';
  const kb=n=>n?` (${Math.max(1,Math.round(n/1024))} KB)`:'';
  sh.innerHTML=topo(m.subject||'(sem assunto)')+`<div>${lin('De',(m.senderName?m.senderName+' · ':'')+(m.sender||''))}${lin('Para',(m.to||[]).join(', '))}${lin('Cópia',(m.cc||[]).join(', '))}${lin('Recebido em',m.receivedDateTime?fmtHora(m.receivedDateTime)+'/'+m.receivedDateTime.slice(0,4):'')}${(m.attachments||[]).length?lin('Anexos · abra no Outlook para baixar',m.attachments.map(a=>a.name+kb(a.size)).join(', ')):''}</div>
  <div class="mailbody">${corpo?esc(corpo):'<span class="meta">E-mail sem texto.</span>'}</div>`+pe}
 catch(e){if(FORM?.tipo!=='_ler')return;sh.innerHTML=topo(tit)+aviso(e?.code==='not_found'?'Esse e-mail não está na sua caixa. Ele pode estar na caixa de outra pessoa ou ter sido apagado. Tente Abrir no Outlook.':msgErro(e))+pe}}

function reabrirCh(id){const c=D.chamados.find(x=>x.id===id);if(!c)return;if(S.reab!==id){S.reab=id;detalheCh(id);return}S.reab=null;
 patch('chamados',id,{st:'Em análise',sub:'',concl:'',conclEm:'',conclPor:'',conclUid:null,conclNome:''},'Chamado reaberto',`Reabriu o chamado ${c.proto}`).then(()=>detalheCh(id))}
function proxEtapa(c){return c.st==='Aberto'?'Em análise':c.st==='Em análise'?(PAGTO(c.tipo)?'Programado':'Concluído'):c.st==='Programado'?'Concluído':null}

/* ---------- logs e notificações ---------- */
const fmtHora=s=>s?`${s.slice(8,10)}/${s.slice(5,7)} ${new Date(s).toTimeString().slice(0,5)}`:'';
function log(acao,extra){if(!DB)return;DB.collection('logs').add({em:new Date().toISOString(),quem:quemSou(),perfil:S.perfil,uid:ME.uid||null,sim:!!(real()&&S.sim),acao,...(extra||{})}).catch(()=>{})}
const NOMES={fluxo:'e-mail no processo',metas:'meta ou item a fazer',feitos:'marcação de quem fez',cronitens:'item de rotina',cronograma:'rotina do cronograma',execucoes:'marcação do cronograma',remetentes:'remetente',assuntos:'assunto',verificacoes:'troca de dados bancários',etapas:'etapa do fechamento',fechamentos:'fechamento',feedbacks:'feedback',observacoes:'observação',modelos:'modelo de e-mail',frases:'frase sugerida',acessos:'acesso',pedidos:'pedido de acesso',emails:'e-mail',categorias:'categoria',ferramentas:'ferramenta',equipe:'colaborador',tarefas:'rotina',mensagens:'mensagem',chamados:'chamado',sugestoes:'sugestão',destaques:'destaque',ponto:'lançamento de horas',eventos:'prazo',procedimentos:'procedimento',departamentos:'departamento',entregas:'entrega'};
const tituloDe=d=>d.t||d.item||d.n||d.assunto||(d.pessoa&&d.mes?`${nomeDe(d.pessoa)} · ${mesCurto(d.mes)}`:'')||(d.txt||'').slice(0,40);
function notifs(){
 const ms=solic()?D.chamados.filter(c=>c.dep===solDep()).map(c=>c.proto):[];
 const L=D.logs.filter(l=>!(real()&&!S.sim?l.uid===ME.uid:l.perfil===S.perfil)&&diasAte((l.em||'').slice(0,10))>=-7&&(dir()||pode('logs')||(solic()?ms.some(p=>(l.acao||'').includes(p)):/chamado|entrega|e-mail/i.test(l.acao||''))));
 return L.slice(0,30)}
function lido(){if(S.prefs?.lido&&!S.sim)return S.prefs.lido;try{return localStorage.getItem('lido_'+(ME.uid||'')+S.perfil)||''}catch(e){return S['lido_'+S.perfil]||''}}
function marcarLido(){const v=new Date().toISOString();try{localStorage.setItem('lido_'+(ME.uid||'')+S.perfil,v)}catch(e){S['lido_'+S.perfil]=v}if(DB&&ME.uid&&!S.sim){S.prefs={...(S.prefs||{}),lido:v};DB.doc('data/users/'+ME.uid+'/prefs').set(S.prefs).catch(()=>{})}}
function bell(){const AN=aniversarios(1),A=alertas().filter(a=>a.c==='bad'),N=notifs().filter(l=>/^(Aceitou a demanda|Concluiu o chamado)/.test(l.acao||'')),lv=lido(),P=solic()||S.perfil==='pendente'?[]:proxPrazos(5,!dir()),ph=P.filter(x=>x.d===HJ).length,novos=N.filter(n=>n.em>lv).length+A.length+ph+AN.length;
 return `<div class="tb"><span class="meta">${esc(quemSou())}</span>${temaBox()}<div style="position:relative"><button class="btn bell" id="bellbtn" onclick="tgBell()" aria-label="Notificações" aria-expanded="${!!S.bell}">${ic('alertas').replace('aria-hidden','style="width:18px;height:18px" aria-hidden')}${novos?`<span class="dot">${novos}</span>`:''}</button>
 ${S.bell?`<div class="pop" role="dialog" aria-label="Notificações"><div class="ph" style="padding:12px 14px 4px"><h2>Notificações</h2><button class="btn ghost" onclick="ir('alertas')">Ver tudo</button></div>
 ${avPodePedir()?`<div style="padding:4px 14px 8px"><button class="btn pri" style="width:100%" onclick="ativarAvisos()">Ativar avisos no canto da tela</button></div>`:''}
 ${AN.map(x=>`<button class="pi new" onclick="ir('painel')"><span class="tag ok" style="flex:none">${x.em===0?'Hoje':'Amanhã'}</span><span><b>${x.tipo==='aniv'?'Aniversário':'Tempo de casa'} de ${esc(x.p.n)}</b><small>${x.tipo==='aniv'?'Dê os parabéns!':`${x.anos} ${x.anos===1?'ano':'anos'} no departamento`}</small></span></button>`).join('')}${A.map(a=>`<button class="pi" onclick="ir('${a.ir}')"><span class="tag bad" style="flex:none">Alerta</span><span><b>${esc(a.t)}</b><small>${esc(a.s)}</small></span></button>`).join('')}
 ${P.length?`<p class="eyebrow" style="margin:8px 14px 2px">Próximos prazos</p>${P.map(x=>`<button class="pi ${x.d===HJ?'new':''}" onclick="ir('calendario')"><span class="meta" style="flex:none;width:72px">${x.d===HJ?'Hoje':fmt(x.d)}${x.h?' '+x.h:''}</span><span><b style="font-weight:400">${esc(x.t)}</b><small>${esc(x.g)}${x.fixo?' · fixo':''}${x.quem&&x.quem!=='Todos'?' · '+esc(x.quem):''}</small></span></button>`).join('')}`:''}
 ${N.length?`<p class="eyebrow" style="margin:8px 14px 2px">Chamados aceitos e concluídos</p>${N.map(n=>`<button class="pi ${n.em>lv?'new':''}" onclick="${/CH-\d+/.test(n.acao)?`abrirLogCh('${(n.acao.match(/CH-\d+/)||[''])[0]}')`:`ir('chamados')`}"><span class="meta" style="flex:none;width:72px">${fmtHora(n.em)}</span><span><b style="font-weight:400">${esc(n.acao)}</b><small>${esc(quemLog(n))}</small></span></button>`).join('')}`:''}
 ${!A.length&&!P.length&&!N.length?'<p class="empty">Nenhum alerta, prazo próximo ou chamado novo.</p>':''}${pode('logs')?`<div style="padding:6px 14px 12px"><button class="btn ghost" style="width:100%" onclick="S.bell=false;ir('logs')">Ver o registro de atividades</button></div>`:''}</div>`:''}</div></div>`}
function tgBell(){S.bell=!S.bell;if(S.bell)setTimeout(marcarLido,1500);render()}
function abrirLogCh(p){const c=D.chamados.find(x=>x.proto===p);S.bell=false;render();if(c)detalheCh(c.id)}
document.addEventListener('click',e=>{if(S.bell&&!e.target.closest('.pop')&&!e.target.closest('#bellbtn')){S.bell=false;render()}});

/* ---------- identidade e permissões ---------- */
const ME={uid:null,owner:false,edit:false,admin:false,write:null,nome:'',email:null};
let USER=null,MCP=null;const PROF={};
const PERMS=[
 ['ver_tudo','Ver o departamento inteiro','Painel geral, rotinas e entregas de todos'],
 ['chamados','Atender chamados','Assumir, devolver e avançar chamados de outros departamentos'],
 ['painel_chamados','Painel dos chamados','Ver no início o painel com gráficos dos pedidos dos departamentos: em dia, atrasados e quem mais manda atrasado'],
 ['entregas','Gerenciar entregas','Cadastrar, receber e cobrar entregas dos departamentos'],
 ['email','E-mails recebidos','Ler o Outlook e fazer a triagem dos e-mails recebidos'],
 ['ler_email','Abrir e-mails no portal','Ler o e-mail completo dentro do sistema e abrir no Outlook. Quem não tem vê só o resumo, o assunto e a categoria'],
 ['feedbacks','Feedbacks e destaques','Ver e registrar feedbacks e destaques da equipe'],
 ['whats','WhatsApp da diretoria','Criar e aprovar mensagens'],
 ['cadastros','Cadastros','Departamentos, colaboradores e procedimentos'],
 ['ferramentas','Ferramentas','Adicionar categorias e ferramentas'],
 ['relat','Relatórios','Ver os relatórios do departamento'],
 ['logs','Registro de atividades','Ver quem fez o quê e quando'],
 ['antifraude','Troca de dados bancários','Registrar, conferir e aprovar trocas de conta de fornecedor'],
 ['fechamento','Fechamento D+N','Ver o fechamento e concluir as próprias etapas'],
 ['realizadas','Demandas realizadas','Ver o histórico de demandas concluídas, prazos e quem realizou cada uma']];
const PADRAO={chamados:true,entregas:true,ferramentas:true,antifraude:true,fechamento:true};
const PAPEIS={diretor:'Diretor',admin:'Administrador do portal',equipe:'Equipe do financeiro',solicitante:'Solicitante de outro departamento'};
const real=()=>S.modo==='real';
const acessoDe=uid=>uid?D.acessos.find(a=>a.id===uid):null;
function permsDe(pid){const a=D.acessos.find(x=>x.perfil==='equipe'&&x.pessoa===pid&&x.ativo!==false);return {...PADRAO,...(a?.perms||{})}}
function pode(p){if(dir())return true;if(solic()||S.perfil==='pendente')return false;return !!permsDe(S.perfil)[p]}
const podeAdmin=()=>real()?(ME.admin&&!S.sim):dir();
function perfilBase(){
 if(!real())return S.sim||'dir';
 const a=acessoDe(ME.uid);
 if(a&&a.ativo!==false){if(a.perfil==='diretor'||a.perfil==='admin')return 'dir';if(a.perfil==='equipe'&&pessoa(a.pessoa))return a.pessoa;if(a.perfil==='solicitante'&&depDe(a.dep))return 'sol:'+a.dep}
 if(a&&a.ativo===false&&!ME.admin)return 'pendente';
 if(ME.admin)return 'dir';
 return 'pendente'}
const podeSimular=()=>!real()||ME.admin||['diretor','admin'].includes(acessoDe(ME.uid)?.perfil);
function aplicarPerfil(){const b=perfilBase();if(!podeSimular())S.sim='';S.perfil=real()?(S.sim||b):(S.sim||'dir')}
function papelReal(){const a=acessoDe(ME.uid);return a?a.perfil:'admin'}
function rotuloBase(){if(!real())return 'Demonstração';const a=acessoDe(ME.uid);if(!a)return ME.admin?'Administrador do portal':'Aguardando aprovação';if(a.ativo===false)return 'Acesso bloqueado';return a.perfil==='equipe'?`Equipe · ${nomeDe(a.pessoa)}`:a.perfil==='solicitante'?`Solicitante · ${depNome(a.dep)}`:PAPEIS[a.perfil]}
const nomeU=uid=>PROF[uid]?.name||(uid===ME.uid&&ME.nome)||'Pessoa sem nome visível';
/* letra de cada etapa no calendário (o que foi marcado como feito no dia) */
const LETRAS={'Identificação':'I','Conferência':'Cf','Lançamento':'L','Baixa':'B','Pagamento':'P','Conciliação':'C','Comprovantes':'Cp','Controladoria':'Ct','Impressão de caixas':'Ic'};
const letraDe=g=>LETRAS[g]||(g?g[0].toUpperCase():'O');
function feitosDoMes(mes){const M={},vistos=new Set();
 const add=(rid,dia,quem,nome)=>{if(!dia||dia.slice(0,7)!==mes)return;const k=`${dia}_${rid}_${quem}`;if(vistos.has(k))return;vistos.add(k);const r=D.cronograma.find(x=>x.id===rid);if(!r)return;const g=r.etapa||'Outras atividades';
  const d=M[dia]=M[dia]||{};(d[g]=d[g]||[]).push(`${r.t}${nome?' · '+nome:''}`)};
 (D.feitos||[]).filter(f=>f.st==='feita').forEach(f=>add(f.rot,f.dia,f.pid||f.nome,f.nome));
 (D.execucoes||[]).filter(x=>x.s==='feita').forEach(x=>add(x.rot,x.dia,x.por,x.porNome||nomeDe(x.por)));
 return M}
/* cada marcação do cronograma vira um registro com o dia em que foi feita e o dia a que se refere */
function registrosCron(de,ate){const out=[],den=d=>d&&(!de||d>=de)&&(!ate||d<=ate),vistos=new Set();
 const push=o=>{if(!(ETAPAS_SIS[o.sis]||procs()).includes(o.g))return;const k=`${o.done}|${o.rid}|${o.ref}|${o.quem}|${o.par?1:0}`;if(vistos.has(k))return;vistos.add(k);if(den(o.done))out.push(o)};
 for(const f of (D.feitos||[])){const r=D.cronograma.find(x=>x.id===f.rot);if(!r)continue;const sis=f.sis||((r.sis||[])[0]||''),g=r.etapa||'Outras atividades',quem=f.pid||f.nome||'',base={rid:r.id,t:r.t,g,sis,ref:f.dia,quem,pid:f.pid,nome:f.nome||nomeDe(f.pid)};
  const ini=(f.ini||'').slice(0,10);
  if(f.st==='feita'){const done=f.feitoEm||(f.fim||'').slice(0,10)||f.dia;if(ini&&ini<done)push({...base,done:ini,par:true,hora:hmDe(f.ini)});push({...base,done,par:false,hora:f.hora||''})}
  else if(f.st==='andamento'&&ini)push({...base,done:ini,par:true,hora:hmDe(f.ini)})}
 for(const m of (D.semmov||[]).filter(m=>!m.desfeito)){const r=D.cronograma.find(x=>x.id===m.rot);if(!r)continue;const d0=(m.em||'').slice(0,10)||m.dia;push({rid:r.id,t:r.t,g:r.etapa||'Outras atividades',sis:m.sis||(r.sis||[])[0]||'',ref:m.dia,done:d0<m.dia?m.dia:d0,quem:m.por||'',pid:m.por,nome:m.nome||nomeDe(m.por),par:false,nt:true,hora:''})}
 for(const x of (D.execucoes||[]).filter(x=>x.s==='feita')){const r=D.cronograma.find(y=>y.id===x.rot);if(!r)continue;push({rid:r.id,t:r.t,g:r.etapa||'Outras atividades',sis:(r.sis||[])[0]||'',ref:x.dia,done:x.concl||x.dia,quem:x.por||'',pid:x.por,nome:x.porNome||nomeDe(x.por),par:false,hora:x.hora||''})}
 return out.sort((a,b)=>b.done.localeCompare(a.done)||(b.hora||'').localeCompare(a.hora||''))}
const letraS=(g,sis)=>sis==='Protheus'&&g==='Pagamento'?'P':letraDe(g);
function diaFeitosSheet(iso){const L=registrosCron(iso,iso),R=registrosCron('','').filter(o=>o.ref===iso&&o.done!==iso);FORM={tipo:'_diaf'};
 const tab=l=>`<div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Sistema</th><th style="text-align:left">Etapa</th><th>Referente a</th><th style="text-align:left">Quem</th><th>Hora</th><th>Situação</th></tr></thead><tbody>${l.map(o=>`<tr><td style="text-align:left">${esc(o.sis)}</td><td style="text-align:left">${esc(nomeEtS(o.g,o.sis))}<br><span class="meta">${esc(o.t)}</span></td><td>${fmt(o.ref)}</td><td style="text-align:left"><span class="quemf">${avP(o.pid,o.nome,'avs')}${esc(o.nome||'—')}</span></td><td>${esc(o.hora||'')}</td><td><span class="tag ${o.par?'wa':'ok'}">${o.par?'Em parte':'Finalizado'}</span></td></tr>`).join('')}</tbody></table></div>`;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Calendário</p><h2 id="sheet-title">${esc(diaTxt(iso))}</h2></div>
 <div><h3 style="font-size:14px;margin:0 0 8px">Feito neste dia</h3>${L.length?tab(L):'<p class="meta">Nada marcado como feito neste dia.</p>'}</div>
 ${R.length?`<div><h3 style="font-size:14px;margin:12px 0 8px">Do dia ${fmt(iso)}, feito em outros dias</h3>${tab(R.map(o=>({...o,ref:o.done})))}<p class="meta" style="margin:6px 0 0">Nesta tabela, "Referente a" mostra o dia em que foi feito.</p></div>`:''}
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;document.getElementById('ov').hidden=false}
function regTabela(L,max,cls){const l=L.slice(0,max);return l.length?`<table class="${cls||''}"><thead><tr><th>Feito em</th><th>Referente a</th><th>Sistema</th><th>Etapa</th><th>Quem</th><th>Situação</th></tr></thead><tbody>${l.map(o=>{const dd=o.par?0:Math.round((new Date(o.done+'T12:00')-new Date(o.ref+'T12:00'))/864e5);return `<tr><td>${fmt(o.done)}</td><td>${fmt(o.ref)}</td><td>${esc(o.sis)}</td><td>${esc(nomeEtS(o.g,o.sis))}</td><td><span class="pq">${fotoX(o.pid,o.nome,26)}${esc(o.nome||'—')}</span></td><td><span class="pill ${o.nt?'ntp':o.par?'at':'okp'}">${o.nt?'Não teve no dia':o.par?'Em parte':dd>0?`Finalizado · ${dd} ${dd===1?'dia':'dias'} depois`:'Finalizado'}</span></td></tr>`}).join('')}</tbody></table>${L.length>max?`<p class="vazio" style="margin-top:8px">e mais ${L.length-max}</p>`:''}`:'<p class="vazio">Nada marcado no cronograma no período.</p>'}
function regResumo(L){const fin=L.filter(o=>!o.par&&!o.nt),noDia=fin.filter(o=>o.done===o.ref).length,dep=fin.filter(o=>o.done>o.ref),porS={};fin.forEach(o=>porS[o.sis]=(porS[o.sis]||0)+1);
 return {tot:fin.length,noDia,pct:fin.length?Math.round(noDia/fin.length*100):null,dep:dep.length,refs:[...new Set(dep.map(o=>fmt(o.ref)))],porS}}
/* resumo de cada área para a tela Sobre o sistema: [o que tem, número ao vivo] */
const SOBRE={
 painel:['Visão geral do dia: números dos chamados, equipe no trimestre, atrasos, andamento e o que foi feito no cronograma. Cada pessoa escolhe os blocos.',()=>`${BLOCOS_PAINEL.length} blocos disponíveis`],
 alertas:['Rotinas atrasadas e pendências que precisam de atenção.',()=>{const a=alertas().length;return a?`${a} ${a===1?'alerta':'alertas'} agora`:'nenhum alerta agora'}],
 ferramentas:['Atalhos para os sistemas e sites que o departamento usa.',()=>`${D.ferramentas.length} ferramentas`],
 chamados:['Pedidos dos departamentos: leitura da caixa do contas a pagar, triagem por categoria, regra D-8, padrão do contas a pagar, D-5 com justificativa.',()=>`${D.chamados.filter(c=>c.st!=='Concluído').length} em aberto · ${emPend().length} e-mails para revisar · ${D.chamados.filter(chAtrasado).length} atrasados`],
 rotinas:['Cronograma por sistema (WAE: Lançamento, Baixa, Conciliação · Protheus: Lançar, Pagar, Conciliar), com quem fez, a hora e o dia de referência.',()=>`${D.cronograma.filter(r=>r.ativo!==false).length} rotinas ativas · sistemas: ${sists().join(', ')}`],
 metas:['Metas e lista do que fazer no mês, do departamento e de cada pessoa.',()=>{const i=itensMeta(MES_ATUAL,'dep').length;return `${i} itens do departamento em ${mesCurto(MES_ATUAL)}`}],
 entregas:['Entregas que os departamentos devem ao financeiro, com prazo e cobrança.',()=>`${D.entregas.filter(e=>!e.recebido).length} pendentes`],
 destaques:['Conquistas e reconhecimentos da equipe no mês.',()=>`${D.destaques.filter(d=>d.mes===MES_ATUAL).length} neste mês`],
 fechamento:['Acompanhamento do fechamento mensal (D+N).',()=>''],
 calendario:['Calendário com as letras do que foi feito em cada dia, a referência e as reuniões.',()=>`${registrosCron(MES_ATUAL+'-01',HJ).length} registros no mês · ${D.eventos.length} compromissos`],
 equipe:['Equipe e feedbacks: o que cada pessoa realizou no trimestre e o acompanhamento.',()=>`${colabs().length} pessoas`],
 feedbacks:['Feedbacks mensais e trimestrais, com modelos de texto.',()=>`${D.feedbacks.length} feedbacks registrados`],
 realizadas:['Histórico das demandas concluídas.',()=>`${D.chamados.filter(c=>c.st==='Concluído').length} concluídas`],
 bancos:['Troca de dados bancários com conferência antifraude.',()=>''],
 whats:['Mensagens de WhatsApp aprovadas pelo diretor.',()=>''],
 proc:['Procedimentos: o passo a passo de cada atividade.',()=>`${D.procedimentos.length} procedimentos`],
 melhorias:['Pauta das reuniões (assuntos e respostas da equipe, relatório e slides) e ideias para o sistema.',()=>`${D.sugestoes.filter(x=>sugCat(x)==='reuniao'&&!sugFeita(x)).length} assuntos a falar · ${D.sugestoes.filter(x=>sugCat(x)==='sistema').length} ideias`],
 relat:['Relatórios do trimestre: o que a equipe realizou, entregas e destaques.',()=>''],
 indicadores:['Indicadores por área, com envio do resumo aos gestores.',()=>''],
 logs:['Registro de tudo o que foi feito no sistema, com arquivo dos meses anteriores.',()=>`${D.logs.length} ações recentes`],
 usuarios:['Quem acessa o Prumo, perfis e permissões. Também escolhe as áreas e sistemas que aparecem.',()=>{const p=D.pedidos.filter(x=>!acessoDe(x.id)).length;return `${D.acessos.length} acessos${p?` · ${p} pedidos esperando`:''}`}],
 backup:['Cópia diária automática (7 dias) e cópia para baixar.',()=>{const b=[...D.backups].sort((a,c)=>(c.criado||'').localeCompare(a.criado||''))[0];return b?`último em ${fmtHora(b.criado)}`:'nenhum ainda'}]};
/* dados do próprio Prumo: início e quantas atualizações já foram publicadas (somar 1 a cada publicação) */
const PRUMO_INICIO='outubro de 2026';
const PRUMO_ATUALIZACOES=103;
const RESUMO_PRUMO='O Prumo reúne num só lugar o trabalho do Financeiro e Contábil. Ele lê sozinho os pedidos que chegam na caixa do contas a pagar, separa por categoria, confere o padrão das solicitações e controla prazos (D-8 de chegada e pagamento em D-5). Registra o que a equipe faz no WAE e no Protheus, com quem fez, quando e a que dia se refere, e mostra tudo no calendário. Para o diretor, entrega painel com os números do mês e do trimestre, atrasos por setor e o que cada pessoa realizou, além de relatórios e slides prontos. Também organiza a pauta das reuniões, guarda o histórico de tudo e faz backup todo dia, sem custo extra.';
async function editCriador(){if(!podeAdmin()||!DB)return;FORM={tipo:'_criador'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Sobre o sistema</p><h2 id="sheet-title">Nome de quem criou</h2></div><div><label class="lbl" for="cr_n">Nome</label><input class="inp" id="cr_n" maxlength="80" value="${esc(CFG.criador||'Natalia Araujo')}"></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCriador()">Salvar</button></div></div>`;document.getElementById('ov').hidden=false}
async function salvaCriador(){const n=val('cr_n').slice(0,80);if(!n)return;try{await DB.doc('config/estrutura').set({...CFG,criador:n});CFG.criador=n;toast('Nome salvo');fechar();render()}catch(e){toast('Só administradores podem mudar.')}}
/* novidades: a mudança mais recente primeiro */
const NOVIDADES=[
 ['2026-10-30','Equipe no trimestre leva ao calendário filtrado por pessoa ou etapa; L, B e C em dia conta todos os dias úteis'],
 ['2026-10-29','Link público do painel, ao vivo e sem login'],
 ['2026-10-29','Só as etapas do fluxo (L, B, C e Pagar) contam no realizado'],
 ['2026-10-29','Calendário mais limpo: L, B e C uma vez por dia'],
 ['2026-10-29','Relatório, slides e Emitir só para admin e diretor, com liberação pelo admin'],
 ['2026-10-29','Equipe no trimestre compara o tempo percorrido com o L, B e C do calendário'],
 ['2026-10-29','Botão "Não teve" para os dias sem lançamento, baixa ou conciliação'],
 ['2026-10-29','Férias e ausências, aniversários e tempo de casa no painel; ajuste de outubro no cronograma'],
 ['2026-10-29','Resumo da semana no Teams do diretor (em teste)'],
 ['2026-10-29','Tela Sobre o sistema para o administrador e o diretor, com o resumo do Prumo'],
 ['2026-10-29','Cronograma por sistema: WAE com Lançamento, Baixa e Conciliação; Protheus com Lançar, Pagar e Conciliar'],
 ['2026-10-29','Calendário com o dia em que foi feito e o dia de referência'],
 ['2026-10-29','Painel com equipe no trimestre, painel dos chamados, atrasos e realizado no cronograma'],
 ['2026-10-29','Relatório e slides com fotos, painel dos chamados e o fundo do sistema'],
 ['2026-10-29','Administrador escolhe as áreas e sistemas que aparecem no menu'],
 ['2026-10-29','Estilo vidro com marca d’água e novo logo'],
 ['2026-10-29','Caixa dos chamados conectada com a conta do contas a pagar'],
 ['2026-10-29','Categorias automáticas, pesquisa e ajuste manual nos e-mails para revisar'],
 ['2026-10-29','Padrão do contas a pagar: conferência das solicitações e pagamento em D-5'],
 ['2026-10-29','Reuniões: assuntos, respostas da equipe, relatório e slides'],
 ['2026-10-29','Foto de perfil, inclusive a do Microsoft 365'],
 ['2026-10-29','Registro de atividades com arquivo de 60 dias e backup de 7 dias']];
/* ausências: férias, atestado, folga e licença tiram as rotinas da pessoa da conta naquele dia (indicador fica 100%); home office só fica anotado */
const AUS_TIPOS=['Férias','Atestado','Folga','Licença','Home office'];
const ausExcusa=t=>t!=='Home office';
const ausDe=(pid,dia)=>(D.ausencias||[]).find(a=>a.pid===pid&&a.de<=dia&&(a.ate||a.de)>=dia);
// rotina sem ninguém disponível no dia: todos os responsáveis estão de férias, atestado etc.
function ausRot(r,dia){const rs=rsDe(r).filter(x=>x!=='dir');if(!rs.length)return null;const L=rs.map(p=>ausDe(p,dia));return L.every(a=>a&&ausExcusa(a.tipo))?L[0]:null}
const ausHoje=(dia)=>(D.ausencias||[]).filter(a=>a.de<=dia&&(a.ate||a.de)>=dia);
function ausSheet(){FORM={tipo:'_aus'};const pode2=dir()||podeAdmin()||pode('cadastros'),ps=pode2?colabs():colabs().filter(p=>p.id===S.perfil);
 const L=[...(D.ausencias||[])].filter(a=>(a.ate||a.de)>=addDia(HJ,-60)).sort((a,b)=>b.de.localeCompare(a.de));
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Equipe</p><h2 id="sheet-title">Férias e ausências</h2><p class="sub" style="font-size:13px">Nos dias de férias, atestado, folga ou licença, as rotinas da pessoa não contam como atraso e o indicador dela fica 100%. Home office fica só anotado.</p></div>
 <div class="fgrid"><div><label class="lbl" for="au_p">Pessoa</label><select class="inp" id="au_p">${ps.map(p=>`<option value="${esc(p.id)}" ${p.id===S.perfil?'selected':''}>${esc(p.n)}</option>`).join('')}</select></div>
 <div><label class="lbl" for="au_t">Tipo</label><select class="inp" id="au_t">${AUS_TIPOS.map(t=>`<option>${t}</option>`).join('')}</select></div>
 <div><label class="lbl" for="au_de">De</label><input class="inp" id="au_de" type="date" value="${HJ}"></div><div><label class="lbl" for="au_ate">Até</label><input class="inp" id="au_ate" type="date" value="${HJ}"></div>
 <div class="full"><label class="lbl" for="au_o">Observação · opcional</label><input class="inp" id="au_o" maxlength="160"></div></div>
 <div style="display:flex;justify-content:flex-end"><button class="btn pri" onclick="salvaAus()">Registrar</button></div>
 <div><h3 style="font-size:14px;margin:8px 0">Registradas</h3>${L.length?L.map(a=>`<div class="row"><span class="quemf">${avP(a.pid,nomeDe(a.pid),'avs')}<b style="font-weight:500">${esc(nomeDe(a.pid))}</b></span><div class="t"><span>${esc(a.tipo)} · ${fmt(a.de)}${(a.ate||a.de)!==a.de?' a '+fmt(a.ate):''}${a.obs?' · '+esc(a.obs):''}</span></div>${pode2||a.pid===S.perfil?`<button class="btn ghost" onclick="cancelaAus('${esc(a.id)}')">Cancelar</button>`:''}</div>`).join(''):'<p class="meta">Nenhuma ausência registrada.</p>'}</div>
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;document.getElementById('ov').hidden=false}
async function salvaAus(){const pid=val('au_p'),tipo=val('au_t'),de=val('au_de'),ate=val('au_ate')||de,obs=val('au_o').slice(0,160);if(!pid||!de){toast('Escolha a pessoa e a data.');return}if(ate<de){toast('A data final vem antes da inicial.');return}
 if(await salvar('ausencias',null,{pid,tipo,de,ate,obs,criado:HJ,criadoPor:S.perfil,criadoNome:euNome()},'Registrado',`Registrou ${tipo.toLowerCase()} de ${nomeDe(pid)}: ${fmt(de)}${ate!==de?' a '+fmt(ate):''}`))ausSheet()}
async function cancelaAus(id){const a=(D.ausencias||[]).find(x=>x.id===id);if(!a)return;if(await patch('ausencias',id,{ate:addDia(a.de,-1),cancelada:true,canceladaPor:euNome()},'Cancelado',`Cancelou ${a.tipo.toLowerCase()} de ${nomeDe(a.pid)} (${fmt(a.de)})`))setTimeout(ausSheet,200)}
/* aniversários (todos veem) e tempo de casa (diretor e admin) */
function aniversarios(dias){const out=[],hoje=new Date(HJ+'T12:00');
 for(const p of colabs()){const m=String(p.nasc||'').match(/^(\d{1,2})\D(\d{1,2})/);if(m){for(let i=0;i<=dias;i++){const d=new Date(hoje);d.setDate(d.getDate()+i);if(d.getDate()===+m[1]&&d.getMonth()+1===+m[2]){out.push({p,tipo:'aniv',d:isoD(d),em:i});break}}}
  if((dir()||podeAdmin())&&p.desde&&/^\d{4}-\d{2}-\d{2}$/.test(p.desde)){for(let i=0;i<=dias;i++){const d=new Date(hoje);d.setDate(d.getDate()+i);if(d.getDate()===+p.desde.slice(8,10)&&d.getMonth()+1===+p.desde.slice(5,7)&&d.getFullYear()>+p.desde.slice(0,4)){out.push({p,tipo:'casa',d:isoD(d),em:i,anos:d.getFullYear()-+p.desde.slice(0,4)});break}}}}
 return out.sort((a,b)=>a.em-b.em)}
function anivBloco(){const L=aniversarios(30),casa=(dir()||podeAdmin())?colabs().filter(p=>/^\d{4}-\d{2}-\d{2}$/.test(p.desde||'')&&!isNaN(new Date(p.desde))).map(p=>({p,anos:Math.floor((new Date(HJ)-new Date(p.desde))/(365.25*864e5))})).sort((a,b)=>a.p.desde.localeCompare(b.p.desde)):[];
 const quando=x=>x.em===0?'hoje':x.em===1?'amanhã':fmt(x.d);
 return `<div class="panel"><div class="ph"><h2>Aniversários${dir()||podeAdmin()?' e tempo de casa':''}</h2><span>próximos 30 dias</span></div>
 ${L.length?L.map(x=>`<div class="row ${x.em===0?'hj-row':''}"><span class="quemf">${avP(x.p.id,x.p.n)}</span><div class="t"><b style="font-weight:500">${esc(x.p.n)}</b><span>${x.tipo==='aniv'?'Aniversário':`${x.anos} ${x.anos===1?'ano':'anos'} de casa`}</span></div><span class="tag ${x.em===0?'ok':'ne'}">${quando(x)}</span></div>`).join(''):'<p class="meta" style="margin:0">Nenhum aniversário nos próximos 30 dias.</p>'}
 ${casa.length?`<p class="meta" style="margin:10px 0 4px">Tempo de casa</p><div class="tqpess">${casa.map(x=>`<div class="tqp">${avP(x.p.id,x.p.n)}<div><b>${esc(x.p.n)}</b><small>desde ${fmtAno(x.p.desde)} · ${x.anos<1?'menos de 1 ano':x.anos+(x.anos===1?' ano':' anos')}</small></div></div>`).join('')}</div>`:''}
 ${colabs().some(p=>!p.nasc)?`<p class="meta" style="margin:8px 0 0">Para aparecer aqui, preencha o aniversário (dd/mm)${dir()||podeAdmin()?' e a data de contratação':''} no cadastro de cada pessoa em Equipe e metas.</p>`:''}</div>`}
function ausBloco(){const H=ausHoje(HJ),P=(D.ausencias||[]).filter(a=>a.de>HJ&&a.de<=addDia(HJ,14)).sort((a,b)=>a.de.localeCompare(b.de));
 return `<div class="panel"><div class="ph"><h2>Férias e ausências</h2><button class="btn ghost" onclick="ausSheet()">Registrar</button></div>
 ${H.length?H.map(a=>`<div class="row"><span class="quemf">${avP(a.pid,nomeDe(a.pid))}</span><div class="t"><b style="font-weight:500">${esc(nomeDe(a.pid))}</b><span>${esc(a.tipo)} hoje${(a.ate||a.de)>HJ?' · até '+fmt(a.ate):''}</span></div><span class="tag ${ausExcusa(a.tipo)?'wa':'ne'}">${esc(a.tipo)}</span></div>`).join(''):'<p class="meta" style="margin:0">Todos no departamento hoje.</p>'}
 ${P.length?`<p class="meta" style="margin:10px 0 4px">Próximos 14 dias</p>${P.map(a=>`<div class="row"><div class="t"><b style="font-weight:500">${esc(nomeDe(a.pid))}</b><span>${esc(a.tipo)} · ${fmt(a.de)}${(a.ate||a.de)!==a.de?' a '+fmt(a.ate):''}</span></div></div>`).join('')}`:''}</div>`}
/* "Realizado no cronograma": números e uma janela com rolagem para ver o detalhe */
function realizadoSheet(dias){dias=dias||30;const L=registrosCron(addDia(HJ,-(dias-1)),HJ);FORM={tipo:'_real'};
 document.getElementById('sheet').classList.add('sheet-reu');
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma</p><h2 id="sheet-title">O que foi realizado</h2><p class="sub" style="font-size:13px">Últimos ${dias} dias, do mais recente para o mais antigo. "Referente a" é o dia a que a marcação se refere.</p></div>
 <div class="seg" style="align-self:flex-start">${[7,30,90].map(n=>`<button class="${n===dias?'on':''}" onclick="realizadoSheet(${n})">${n} dias</button>`).join('')}</div>
 <div class="dashp" style="max-height:62vh;overflow:auto"><div class="glass bloco">${regTabela(L,500,'tbx')}</div></div>
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;document.getElementById('ov').hidden=false}
/* ajuste de outubro/2026 combinado com a equipe: substitui as marcações de outubro (as antigas ficam desconsideradas, nada é apagado) */
function ajusteOutPlano(){const pes=k=>colabs().find(p=>norm(p.n).startsWith(k))?.id,J=pes('jeferson'),NS=pes('natasha'),NL=pes('natalia');
 const rot=(ch,et)=>(D.cronograma.find(r=>r.chave===ch)||D.cronograma.find(r=>r.etapa===et&&(r.sis||[]).includes('WAE')&&(r.sis||[]).length===1));
 const RL=rot('lanc-wae','Lançamento'),RB=rot('baixa-wae','Baixa'),RC=rot('concil-wae','Conciliação');
 const falta=[!J&&'Jeferson',!NS&&'Natasha',!NL&&'Natalia',!RL&&'rotina de Lançamento do WAE',!RB&&'rotina de Baixa do WAE',!RC&&'rotina de Conciliação do WAE'].filter(Boolean);
 const novos=[];const add=(r,dia,pid)=>novos.push({r,dia,pid});
 for(let d=1;d<=27;d++){const dia=`2026-10-${pad(d)}`,wd=new Date(dia+'T12:00').getDay();if(wd===0||wd===6||(d>23&&d<26))continue;
  if(d<=18){add(RL,dia,J);add(RB,dia,NS);add(RC,dia,NS)}
  else if(d<=23){add(RL,dia,NL);add(RL,dia,J);add(RB,dia,NS);add(RC,dia,NS)}
  else if(d===26){add(RL,dia,NL);add(RL,dia,J);add(RB,dia,NS)}
  else if(d===27){add(RL,dia,NL);add(RB,dia,NS)}}
 const velhosF=D.feitos.filter(f=>!f.ajuste&&(String(f.dia).startsWith('2026-10')||String(f.feitoEm||'').startsWith('2026-10'))),velhosE=D.execucoes.filter(x=>String(x.dia).startsWith('2026-10'));
 return {falta,novos,velhosF,velhosE,J}}
function ajusteOutSheet(){if(!podeAdmin())return;const P=ajusteOutPlano();FORM={tipo:'_ajout'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma</p><h2 id="sheet-title">Ajuste de outubro</h2><p class="sub" style="font-size:13px">Deixa outubro como combinado: L, B e C de 01 a 23/10 (dias úteis), só L e B em 26 e 27/10. L até 18/10 com o Jeferson e, a partir de 19/10, com a Natalia e o Jeferson (dia 27 só Natalia, Jeferson em home office). B e C com a Natasha.</p></div>
 ${P.falta.length?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>Não encontrei: ${esc(P.falta.join(', '))}. Confira os nomes em Equipe e metas e as rotinas no cronograma.</span></div>`:''}
 <div class="stats"><div class="stat"><p>Marcações novas</p><strong>${P.novos.length}</strong></div><div class="stat"><p>Desconsideradas</p><strong>${P.velhosF.length}</strong><small>ficam guardadas, não contam</small></div><div class="stat"><p>Home office</p><strong>1</strong><small>Jeferson em 27/10</small></div></div>
 <div class="foot"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" id="ajo_btn" ${P.falta.length?'disabled':''} onclick="ajusteOutAplicar()">Aplicar ajuste</button></div>`;document.getElementById('ov').hidden=false}
async function ajusteOutAplicar(){const P=ajusteOutPlano();if(P.falta.length||!DB)return;const b=document.getElementById('ajo_btn');b.disabled=true;b.textContent='Aplicando…';
 const agora=new Date().toISOString(),quem=euNome();
 try{for(const f of P.velhosF){const {id,...r}=f;await DB.collection('feitos').doc(id).set({...r,anulado:true,anuladoPor:quem,anuladoEm:agora,anuladoMotivo:'ajuste de outubro'})}
  for(const n of P.novos){const nm=nomeDe(n.pid),id=`aj10_${n.dia}_${n.r.id}_${n.pid}`;await DB.collection('feitos').doc(id).set({rot:n.r.id,dia:n.dia,sis:'WAE',pid:n.pid,uid:null,nome:nm,st:'feita',ini:n.dia+'T12:00:00.000Z',fim:n.dia+'T20:00:00.000Z',hora:'',feitoEm:n.dia,em:agora,ajuste:'outubro-2026',criadoPor:quem})}
  // resumo de cada dia: refeito a partir das marcações novas; o que não tem marcação nova fica desconsiderado
  const chaves=new Set(P.novos.map(n=>n.dia+'_'+n.r.id));
  for(const x of P.velhosE)if(!chaves.has(x.id)){const {id,...r}=x;await DB.collection('execucoes').doc(id).set({...r,anulado:true,anuladoPor:quem,anuladoEm:agora})}
  for(const k of chaves){const [dia,rid]=[k.slice(0,10),k.slice(11)];const lista=P.novos.filter(n=>n.dia===dia&&n.r.id===rid).map(n=>({pid:n.pid,nome:nomeDe(n.pid),st:'feita',ini:dia+'T12:00:00.000Z',fim:dia+'T20:00:00.000Z',feitoEm:dia,hora:'',em:agora}));
   const p0=lista[0];await DB.collection('execucoes').doc(k).set({rot:rid,dia,s:'feita',ini:p0.ini,por:p0.pid,porNome:p0.nome,em:agora,concl:dia,hora:'',ajuste:'outubro-2026'})}
  if(!(D.ausencias||[]).some(a=>a.pid===P.J&&a.de==='2026-10-27'&&a.tipo==='Home office'))await DB.collection('ausencias').add({pid:P.J,tipo:'Home office',de:'2026-10-27',ate:'2026-10-27',obs:'',criado:HJ,criadoPor:S.perfil,criadoNome:quem});
  await DB.doc('config/estrutura').set({...CFG,ajusteOut26:true});CFG.ajusteOut26=true;
  log(`Aplicou o ajuste de outubro no cronograma: ${P.novos.length} marcações e ${P.velhosF.length} desconsideradas (guardadas)`);toast('Ajuste de outubro aplicado',4000);fechar();render()}
 catch(e){toast('Parou no meio. Abra de novo e clique em Aplicar: ele continua de onde parou.',6000);b.disabled=false;b.textContent='Aplicar ajuste'}}
/* "não teve no dia": não houve lançamento, baixa ou conciliação naquele dia (conta como resolvido) */
const semMovDe=(rid,dia,sis)=>(D.semmov||[]).find(m=>m.rot===rid&&m.dia===dia&&!m.desfeito&&(!sis||!m.sis||m.sis===sis));
async function naoTeve(rid,dia,on){const r=D.cronograma.find(x=>x.id===rid);if(!r)return;const sis=multiSis(r)?sisAtual():((r.sis||[])[0]||''),id=`${dia}_${rid}${multiSis(r)?'_'+sis:''}`;
 if(on){await salvar('semmov',id,{rot:rid,dia,sis,por:S.perfil,nome:euNome(),em:new Date().toISOString(),desfeito:false},'Marcado: não teve no dia',`Marcou que não teve "${r.t}" em ${fmt(dia)}`)}
 else{const m=semMovDe(rid,dia,sis);if(m)await patch('semmov',m.id,{desfeito:true,desfeitoPor:euNome()},'Desfeito',`Desfez o "não teve" de "${r.t}" em ${fmt(dia)}`)}}
/* relatório e slides das reuniões: só admin e diretor, até o admin liberar para a equipe */
const podeReuExp=()=>podeAdmin()||dir()||CFG.reuExpTodos===true;
async function libReuExp(){if(!podeAdmin()||!DB)return;const v=!CFG.reuExpTodos;try{await DB.doc('config/estrutura').set({...CFG,reuExpTodos:v});CFG.reuExpTodos=v;log(v?'Liberou o relatório e os slides das reuniões para a equipe':'Deixou o relatório e os slides das reuniões só para admin e diretor');toast(v?'Liberado para a equipe':'Agora só admin e diretor',3500);render()}catch(e){toast('Só administradores podem mudar.')}}
// só conta o que faz parte do fluxo de cada sistema (WAE: L, B, C · Protheus: L, P, C); etapas antigas ficam fora
const noFluxo=r=>!!r&&(r.sis||[]).some(x=>(ETAPAS_SIS[x]||procs()).includes(r.etapa));
/* L, B e C em dia: cada dia útil (desde a primeira marcação do sistema) vale uma marcação por etapa.
   Conta como em dia: feito para aquele dia, "não teve" ou o responsável de férias/atestado. */
function lbcEmDia(de,ate){let tot=0,ok=0;const R=registrosCron('','');
 for(const x of sists()){const E=ETAPAS_SIS[x]||[],meus=R.filter(o=>o.sis===x&&E.includes(o.g)&&!o.par);if(!meus.length)continue;
  const ini=[...meus.map(o=>o.ref)].sort()[0],d0=ini>de?ini:de;
  for(const d of diasDe(d0,ate)){if(!ehUtil(d))continue;for(const g of E){tot++;
   if(meus.some(o=>o.ref===d&&o.g===g))ok++;
   else{const rots=D.cronograma.filter(r=>r.etapa===g&&(r.sis||[]).includes(x));if(rots.some(r=>ausRot(r,d)))ok++}}}}
 return {tot,ok}}
const saud=()=>{const h=new Date().getHours();return h<12?'Bom dia':h<18?'Boa tarde':'Boa noite'};
const fotoOk=u=>typeof u==='string'&&/^data:image\/(jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(u);
const avU=uid=>{const p=PROF[uid];return fotoOk(p?.avatarUrl)?`<img class="av" src="${p.avatarUrl}" alt="">`:`<span class="av">${esc((nomeU(uid)||'?')[0])}</span>`};
/* foto de quem é da equipe (pela conta ligada à pessoa); sem foto, a inicial */
const uidDePessoa=pid=>{if(!pid)return null;const a=pid==='dir'?D.acessos.find(x=>x.perfil==='diretor'&&x.ativo!==false)?.id:D.acessos.find(x=>x.pessoa===pid)?.id;
 if(a&&PROF[a]?.avatarUrl)return a;if(real()&&ME.uid&&!S.sim&&(S.perfil===pid||(pid==='dir'&&dir()))&&PROF[ME.uid]?.avatarUrl)return ME.uid;
 const n=norm(pid==='dir'?'':(pessoa(pid)?.n||''));if(!n)return a;const p1=n.split(/\s+/)[0];
 const hit=Object.entries(PROF).find(([,p])=>p&&p.avatarUrl&&(norm(p.name||'')===n||norm(p.name||'').split(/\s+/)[0]===p1));return hit?hit[0]:a};
const avP=(pid,nome,cls)=>{const u=uidDePessoa(pid),f=u&&PROF[u]?.avatarUrl;return fotoOk(f)?`<img class="av ${cls||''}" src="${f}" alt="">`:`<div class="av ${cls||''}">${esc((nome||'?')[0])}</div>`};
function fotoSheet(){if(!real()||!ME.uid){toast('A foto de perfil funciona no sistema publicado, com login.');return}FORM={tipo:'_foto'};const f=PROF[ME.uid]?.avatarUrl;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Meu perfil</p><h2 id="sheet-title">Foto de perfil</h2><p class="sub" style="font-size:13px">Aparece no menu, na equipe e nos registros. Todos da equipe veem.</p></div>
 <div style="display:flex;align-items:center;gap:16px"><div id="ft_prev">${fotoOk(f)?`<img class="av" style="width:96px;height:96px" src="${f}" alt="Sua foto atual">`:`<span class="av" style="width:96px;height:96px;font-size:36px">${esc((ME.nome||'?')[0])}</span>`}</div>
  <div style="display:grid;gap:8px"><label class="btn" style="cursor:pointer">Enviar uma foto do computador<input type="file" accept="image/*" hidden onchange="fotoArquivo(this)"></label><button class="btn" onclick="fotoMicrosoft()">Usar a foto do Microsoft 365</button>${fotoOk(f)?'<button class="btn ghost" onclick="fotoSalvar(\'\')">Tirar a foto</button>':''}</div></div>
 <p class="meta">A foto é cortada em quadrado e reduzida para ficar leve.</p>
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;document.getElementById('ov').hidden=false}
// recorta no centro e reduz para 192 px, em JPEG
async function fotoAutoMs(){try{if(!real()||S.sim||!ME.uid||!window.portalFotoMicrosoft||!window.portalSalvarFoto)return;if(fotoOk(PROF[ME.uid]?.avatarUrl))return;
 const k='fotoMs_'+ME.uid;let ult=0;try{ult=+localStorage.getItem(k)||0}catch(e){}if(Date.now()-ult<864e5)return;try{localStorage.setItem(k,String(Date.now()))}catch(e){}
 const d=await window.portalFotoMicrosoft();if(!d)return;const f=await fotoReduzir(d);await window.portalSalvarFoto(f);PROF[ME.uid]={...(PROF[ME.uid]||{id:ME.uid,name:ME.nome}),avatarUrl:f};render()}catch(e){}}
setTimeout(fotoAutoMs,10000);
function fotoReduzir(src){return new Promise((ok,erro)=>{const im=new Image();im.onload=()=>{const t=192,c=document.createElement('canvas');c.width=c.height=t;const x=c.getContext('2d'),m=Math.min(im.width,im.height);
 x.fillStyle='#fff';x.fillRect(0,0,t,t);x.drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,t,t);ok(c.toDataURL('image/jpeg',0.85))};im.onerror=()=>erro(new Error('imagem'));im.src=src})}
function fotoArquivo(inp){const fl=inp.files&&inp.files[0];if(!fl)return;if(!/^image\//.test(fl.type)){toast('Escolha um arquivo de imagem.');return}if(fl.size>15e6){toast('Imagem muito grande. Escolha uma de até 15 MB.');return}
 const fr=new FileReader();fr.onload=async()=>{try{fotoSalvar(await fotoReduzir(fr.result))}catch(e){toast('Não foi possível ler essa imagem.')}};fr.readAsDataURL(fl)}
async function fotoMicrosoft(){toast('Buscando a foto no Microsoft 365…');const d=window.portalFotoMicrosoft?await window.portalFotoMicrosoft():null;
 if(!d){toast('Não achei foto na sua conta Microsoft. Envie uma do computador.',5000);return}try{fotoSalvar(await fotoReduzir(d))}catch(e){toast('Não foi possível usar a foto da Microsoft.')}}
async function fotoSalvar(foto){try{await window.portalSalvarFoto(foto);PROF[ME.uid]={...(PROF[ME.uid]||{id:ME.uid,name:ME.nome}),avatarUrl:foto||''};toast(foto?'Foto atualizada':'Foto retirada');log(foto?'Atualizou a foto de perfil':'Tirou a foto de perfil');fechar();render()}
 catch(e){toast('Não foi possível salvar a foto. Tente de novo.')}}
const quemLog=l=>{const n=l.uid&&PROF[l.uid]?.name;return n?`${n} · ${l.quem}${l.sim?' (simulando)':''}`:l.quem};
const primeiroNome=()=>dir()?((real()&&!S.sim&&ME.nome)?ME.nome.split(' ')[0]:'diretor'):(pessoa(S.perfil)?.n||'');
function resolverPerfis(){if(!USER)return;const ids=[...new Set([ME.uid,...D.logs.map(l=>l.uid),...D.acessos.map(a=>a.id),...D.pedidos.map(p=>p.id)].filter(Boolean))].filter(id=>!(id in PROF));if(!ids.length)return;ids.forEach(id=>PROF[id]=PROF[id]||null);
 USER.profiles(ids).then(ps=>{for(const [k,v] of Object.entries(ps))PROF[k]=v;render()}).catch(()=>{})}
const val=id=>(document.getElementById(id)?.value||'').trim();
const errEl=(id,t)=>{const e=document.getElementById(id);if(e)e.textContent=t};

async function pedirAcesso(){const t=val('q_tipo'),d=val('q_dep'),o=val('q_obs');errEl('qe_dep','');
 if(t==='solicitante'&&!d){errEl('qe_dep','Escolha o seu departamento.');return}
 if(!DB||!ME.uid){toast('Entre com a sua conta para pedir acesso.');return}
 try{await DB.doc('pedidos/'+ME.uid).set({perfil:t,dep:t==='solicitante'?d:'',obs:o,em:new Date().toISOString()});log(`Pediu acesso ao portal como ${PAPEIS[t].toLowerCase()}`);toast('Pedido enviado ao administrador')}
 catch(e){toast(e?.code==='invalid_argument'?'Não foi possível enviar o pedido. Tente de novo ou fale com o administrador.':'Não foi possível enviar o pedido. Tente de novo.')}}
function novoAcesso(){FORM={tipo:'_busca'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Usuários e permissões</p><h2 id="sheet-title">Adicionar pessoa</h2><p class="sub" style="font-size:13px">Busque um colega da organização pelo nome ou e-mail.</p></div>
 <div><label class="lbl" for="u_q">Nome ou e-mail</label><input class="inp" id="u_q" placeholder="Fernanda Souza" autocomplete="off"></div>
 <div id="u_res"></div>
 ${note('Se a pessoa não aparecer, peça que ela abra o portal com a própria conta. O pedido de acesso dela chega na lista de pedidos.')}
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;
 document.getElementById('ov').hidden=false;
 const inp=document.getElementById('u_q'),out=document.getElementById('u_res');
 const show=async q=>{if(!USER){out.innerHTML='<p class="meta">A busca de pessoas precisa do login do claude.ai.</p>';return}const hits=await USER.search(q);hits.forEach(h=>PROF[h.id]=h);
  out.innerHTML=hits.length?hits.map(h=>`<button class="pi" data-u="${esc(h.id)}">${avU(h.id)}<span><b></b><small></small></span></button>`).join(''):`<p class="meta">${q?'Ninguém encontrado com esse termo.':'Digite para buscar.'}</p>`;
  out.querySelectorAll('[data-u]').forEach((b,i)=>{b.querySelector('b').textContent=hits[i].name+(acessoDe(hits[i].id)?' · já tem acesso':'');b.querySelector('small').textContent=hits[i].email||'';b.onclick=()=>editAcesso(hits[i].id)})};
 inp.addEventListener('focus',()=>show(''));inp.addEventListener('input',()=>show(inp.value.trim()));setTimeout(()=>inp.focus(),30)}
function editAcesso(uid){const a=acessoDe(uid),p=D.pedidos.find(x=>x.id===uid),v=a||{perfil:p?.perfil||'equipe',dep:p?.dep||'',pessoa:'',perms:{},ativo:true};FORM={tipo:'_acesso',uid,del:false};
 const pm={...PADRAO,...(v.perms||{})};
 document.getElementById('sheet').innerHTML=`<div style="display:flex;gap:12px;align-items:center">${avU(uid)}<div><p class="eyebrow" style="margin:0">${a?'Editar acesso':'Liberar acesso'}</p><h2 id="sheet-title"></h2></div></div>
 ${p&&!a?`<div class="banner"><span>Pediu para entrar como ${esc(PAPEIS[p.perfil]||'')}${p.dep?' · '+esc(depNome(p.dep)):''}${p.obs?'. Observação: '+esc(p.obs):''}</span></div>`:''}
 <div class="fgrid">
  <div class="full"><label class="lbl" for="a_perfil">Perfil</label><select class="inp" id="a_perfil" onchange="perfilCh()">${Object.entries(PAPEIS).map(([k,l])=>`<option value="${k}" ${v.perfil===k?'selected':''}>${l}</option>`).join('')}</select></div>
  <div class="full" id="a_pbox"><label class="lbl" for="a_pessoa">Colaborador vinculado</label><select class="inp" id="a_pessoa"><option value="">Selecione</option>${D.equipe.map(x=>`<option value="${esc(x.id)}" ${v.pessoa===x.id?'selected':''}>${esc(x.n)} · ${esc(x.c)}</option>`).join('')}</select><p class="ferr" id="ae_pessoa"></p><p class="meta" style="margin:4px 0 0">Liga o login ao cartão da pessoa: rotinas, demandas e feedback.</p></div>
  <div class="full" id="a_dbox"><label class="lbl" for="a_dep">Departamento</label><select class="inp" id="a_dep"><option value="">Selecione</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${v.dep===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}</select><p class="ferr" id="ae_dep"></p></div>
  <div class="full" id="a_rbox"><label class="lbl" for="a_funcao">Função no departamento · opcional</label><input class="inp" id="a_funcao" value="${esc(v.funcao||'')}" placeholder="Analista de contas a pagar"><span class="lbl" style="margin-top:12px">Responsável pelos assuntos</span>${D.assuntos.length?`<div class="perms">${assLista().map(x=>`<label class="perm"><input type="checkbox" id="a_as_${esc(x.id)}" ${(v.assuntos||[]).includes(x.id)?'checked':''}><span><b>${esc(x.n)}</b>${x.subs?.length?`<small>${esc(x.subs.join(', '))}</small>`:''}</span></label>`).join('')}</div>`:'<p class="meta">Nenhum assunto cadastrado ainda. Crie em Chamados › Assuntos.</p>'}<p class="meta" style="margin:4px 0 0">Ao aceitar uma demanda desses assuntos, o portal já sugere esta pessoa como responsável.</p></div>
  <div class="full" id="a_permbox"><span class="lbl">Permissões</span><div class="perms">${PERMS.map(([k,l,d])=>`<label class="perm"><input type="checkbox" id="a_p_${k}" ${pm[k]?'checked':''}><span><b>${l}</b><small>${d}</small></span></label>`).join('')}</div></div>
  <label class="perm full"><input type="checkbox" id="a_ativo" ${v.ativo!==false?'checked':''}><span><b>Acesso ativo</b><small>Desmarque para bloquear sem apagar o histórico.</small></span></label>
 </div>
 <div class="foot"><div>${a?`<button class="btn danger" id="bdel" onclick="removerAcesso()">Remover acesso</button>`:p?`<button class="btn danger" onclick="recusar('${esc(uid)}')">Recusar pedido</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaAcesso()">${a?'Salvar':'Liberar acesso'}</button></div></div>`;
 document.getElementById('sheet-title').textContent=nomeU(uid);
 document.getElementById('ov').hidden=false;perfilCh()}
function perfilCh(){const p=val('a_perfil');document.getElementById('a_pbox').hidden=p!=='equipe';document.getElementById('a_permbox').hidden=p!=='equipe';document.getElementById('a_rbox').hidden=p!=='equipe';document.getElementById('a_dbox').hidden=p!=='solicitante'}
async function salvaAcesso(){const uid=FORM.uid,perfil=val('a_perfil'),pe=val('a_pessoa'),dp=val('a_dep');errEl('ae_pessoa','');errEl('ae_dep','');
 if(perfil==='equipe'&&!pe){errEl('ae_pessoa','Escolha o colaborador. Se ele não existe, cadastre em Equipe e feedbacks.');return}
 if(perfil==='solicitante'&&!dp){errEl('ae_dep','Escolha o departamento.');return}
 const outro=perfil==='equipe'&&D.acessos.find(x=>x.perfil==='equipe'&&x.pessoa===pe&&x.id!==uid);if(outro){errEl('ae_pessoa','Esse colaborador já está ligado a outro login.');return}
 const perms={};if(perfil==='equipe')PERMS.forEach(([k])=>perms[k]=!!document.getElementById('a_p_'+k)?.checked);
 const ativo=document.getElementById('a_ativo').checked;
 if(!DB){toast('O armazenamento não está disponível nesta visualização.');return}
 const desc=perfil==='equipe'?`equipe, vinculado a ${nomeDe(pe)} (${Object.values(perms).filter(Boolean).length} permissões)`:perfil==='solicitante'?`solicitante de ${depNome(dp)}`:PAPEIS[perfil].toLowerCase();
 try{const ja=!!acessoDe(uid);const assuntos=perfil==='equipe'?D.assuntos.filter(x=>document.getElementById('a_as_'+x.id)?.checked).map(x=>x.id):[];
  await DB.doc('acessos/'+uid).set({perfil,pessoa:perfil==='equipe'?pe:'',dep:perfil==='solicitante'?dp:'',perms,ativo,funcao:perfil==='equipe'?val('a_funcao'):'',assuntos,por:ME.uid||null,em:new Date().toISOString()});
  if(D.pedidos.some(x=>x.id===uid))await DB.doc('pedidos/'+uid).delete().catch(()=>{});
  log(`${ja?'Alterou o acesso':'Liberou acesso'} de uma pessoa como ${desc}${ativo?'':' (bloqueado)'}`,{alvo:uid});toast(ja?'Acesso atualizado':'Acesso liberado');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar acessos.':'Não foi possível salvar.')}}
async function removerAcesso(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar remoção';return}
 try{await DB.doc('acessos/'+FORM.uid).delete();log('Removeu o acesso de uma pessoa',{alvo:FORM.uid});toast('Acesso removido');fechar()}catch(e){toast('Não foi possível remover.')}}
async function recusar(uid){try{await DB.doc('pedidos/'+uid).delete();log('Recusou um pedido de acesso',{alvo:uid});toast('Pedido recusado');fechar()}catch(e){toast('Não foi possível recusar.')}}
function matriz(){const pd={...PADRAO};const ck=v=>v?'<span class="pos">Sim</span>':'<span class="meta">—</span>';
 return `<div class="tbl-wrap"><table><thead><tr><th>Permissão</th><th>Diretor e administrador</th><th>Equipe (padrão)</th><th>Solicitante</th></tr></thead><tbody>
 <tr><td>Abrir e acompanhar chamados do próprio departamento</td><td>${ck(1)}</td><td>${ck(1)}</td><td>${ck(1)}</td></tr>
 <tr><td>Ver e atualizar as próprias rotinas, entregas e demandas</td><td>${ck(1)}</td><td>${ck(1)}</td><td>${ck(0)}</td></tr>
 ${PERMS.map(([k,l])=>`<tr><td>${l}</td><td>${ck(1)}</td><td>${ck(pd[k])}</td><td>${ck(0)}</td></tr>`).join('')}
 <tr><td>Usuários e permissões</td><td>${ck(1)}</td><td>${ck(0)}</td><td>${ck(0)}</td></tr></tbody></table></div>`}

/* ---------- integração com o Outlook ---------- */
const SRV='Microsoft 365',TOOL='outlook_email_search';
let SYNC={};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const STOP=new Set('para com dos das de da do em no na os as um uma que por segue anexo anexos fwd res enc rv mes ref referente favor envio enviado enviada bom dia tarde noite obrigado obrigada'.split(' '));
const palavras=s=>norm(s).split(/[^a-z0-9]+/).filter(w=>w.length>2&&!STOP.has(w));
const listaEmails=d=>String(d?.emails||'').split(/[,;\s]+/).map(norm).filter(x=>x.includes('@'));
function tipoPorTexto(t){t=norm(t);if(/reembolso/.test(t))return 'Reembolso de despesas';if(/adiantamento/.test(t))return 'Adiantamento';if(/pagamento|pagar|boleto|fatura|nota fiscal|\bnfs?e?\b|cobranca|vencimento|duplicata/.test(t))return 'Solicitação de pagamento';return null}
function hashId(s){s=String(s);let a=0x811c9dc5,b=0x1b873593;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);a=Math.imul(a^c,16777619);b=Math.imul(b^c,2246822507)}return 'm'+(a>>>0).toString(36)+(b>>>0).toString(36)}
const limparTxt=s=>String(s||'').replace(/[\u034f\u200b-\u200f\u2028\u2029\u00ad\ufeff]/g,'').replace(/\s+/g,' ').trim();
function objsDeTexto(t){const r=[];if(typeof t!=='string')return r;try{const v=JSON.parse(t);(Array.isArray(v)?v:[v]).forEach(x=>r.push(x));return r}catch(e){}
 let d=0,st=-1,q=false,es=false;for(let i=0;i<t.length;i++){const c=t[i];if(q){if(es)es=false;else if(c==='\\')es=true;else if(c==='"')q=false;continue}if(c==='"'){q=true;continue}if(c==='{'){if(d===0)st=i;d++}else if(c==='}'&&d>0){d--;if(d===0&&st>=0){try{r.push(JSON.parse(t.slice(st,i+1)))}catch(e){}st=-1}}}return r}
function extrairMsgs(res){const out=[],seen=new Set();let next=null;
 const vis=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(vis);return}
  if(o.nextOffset!=null&&typeof o.nextOffset==='number')next=o.nextOffset;
  if((o.subject!==undefined||o.receivedDateTime)&&(o.id||o.internetMessageId)){const k=o.internetMessageId||o.id;if(!seen.has(k)){seen.add(k);out.push(o)}return}
  Object.values(o).forEach(x=>{if(x&&typeof x==='object')vis(x)})};
 vis(res?.structuredContent);if(typeof res?.payload==='object')vis(res.payload);
 for(const b of res?.content||[])if(b&&b.type==='text')objsDeTexto(b.text).forEach(vis);
 return {msgs:out,next}}
function classificar(m,dep){
 const txt=(m.subject||'')+' '+limparTxt(m.summary);const ws=new Set(palavras(txt));
 const dia=(m.receivedDateTime||'').slice(0,10)||HJ;
 const cands=D.entregas.filter(e=>e.dep===dep.id&&!e.recebido&&e.prazo&&Math.abs((new Date(dia)-new Date(e.prazo))/864e5)<=45);
 let best=null,bs=0;
 for(const e of cands){let s=palavras(e.item).filter(w=>ws.has(w)).length;if(ws.has(norm(MESES[+e.prazo.slice(5,7)-1])))s+=1;if(s>bs){bs=s;best=e}}
 const tipo=tipoPorTexto(txt);
 if(best&&(bs>=2||(bs>=1&&cands.length===1)))return {acao:'entrega',ref:best.id,conf:bs>=2?'alta':'media',tipo};
 if(tipo)return {acao:'chamado',tipo,conf:'media'};
 if(cands.length===1)return {acao:'entrega',ref:cands[0].id,conf:'baixa'};
 return {acao:'nenhuma',conf:'baixa'}}
async function aplicar(em,c,auto,extra,lg){
 const dn=depNome(em.dep),dia=(em.recebido||new Date().toISOString()).slice(0,10);
 if(c.acao==='entrega'){const e=D.entregas.find(x=>x.id===c.ref);if(!e)return 'erro';
  const ok=await receber(e.id,dia,`${auto?'O e-mail registrou automaticamente':'Confirmou pelo e-mail'} a entrega "${e.item}" de ${dn}${e.prazo&&dia>e.prazo?' (com atraso)':''}`);return ok?'entrega:'+e.id:'erro'}
 if(c.acao==='chamado'){const proto='CH-'+String(Date.now()).slice(-6);
  const ok=await salvar('chamados',null,{tipo:c.tipo||'Solicitação de pagamento',dep:em.dep,solicitante:em.deNome||em.de,assunto:em.assunto,desc:`Recebido por e-mail de ${em.de} em ${fmtHora(em.recebido)}. ${em.trecho||''}`.trim(),favorecido:'',nf:'',venc:'',cc:'',aprovador:'',doc:'',chk:[],fora:false,proto,st:'Aberto',aberto:dia,abertoEm:new Date().toISOString(),resp:'',pend:'',origem:'email',conferir:true,emailLink:em.link||'',cat:em.sug?.assunto||'',msgId:em.msgId||'',caixa:em.caixa||'',recebidoEm:em.recebido||'',rem:em.rem||(em.de?remId(em.de):''),...(em.chegada?{chegada:em.chegada,chegadaAuto:true,chegadaPor:'Automático pelo e-mail',prazoEnv:em.prazoEnv||'',prazoTrecho:em.prazoTrecho||''}:{}),...(chegadaManDe(em)?{chegada:chegadaManDe(em),chegadaAuto:false,chegadaPor:em.ajustePor||'Ajuste da equipe',chegadaEm:em.ajusteEm||''}:{}),...(padraoManDe(em)?{padraoMan:padraoManDe(em)}:{}),...(Array.isArray(em.falta)?{falta:em.falta,faltaCc:em.faltaCc||[],padrao:true}:{}),...(extra||{})},auto?null:extra?`Demanda ${proto} aceita`:`Chamado ${proto} criado`,lg?lg(proto):`${auto?'O e-mail abriu automaticamente':'Criou a partir de e-mail'} o chamado ${proto} · ${dn}`);
  return ok?'chamado:'+proto:'erro'}
 return ''}
/* chegada automática: se o e-mail traz uma data de prazo/entrega, chegou em dia; sem data, já chegou atrasado */
const MES_NUM={jan:1,janeiro:1,fev:2,fevereiro:2,mar:3,marco:3,abr:4,abril:4,mai:5,maio:5,jun:6,junho:6,jul:7,julho:7,ago:8,agosto:8,set:9,setembro:9,out:10,outubro:10,nov:11,novembro:11,dez:12,dezembro:12};
const PALAVRA_PRAZO=/(prazo|ate|envio|enviar|entrega|entregar|vencimento|vence|venc|pagamento|pagar|limite|programar|agendar|dia)\W{0,3}[^\d\n]{0,25}$/;
function prazoNoTexto(txt,recebido){
 let t=String(txt||'').replace(/\r/g,'');
 const corte=t.search(/\n\s*(de|from|enviado|sent|-{3,}\s*mensagem|-{3,}\s*original)\s*:/i);if(corte>0)t=t.slice(0,corte); // só a mensagem nova, sem o histórico citado
 const base=recebido?new Date(recebido):new Date();if(isNaN(base))return {st:'atrasado'};
 const rec=isoD(base),y0=base.getFullYear(),achados=[];
 const add=(d,m,y,i,len)=>{d=+d;m=+m;if(!(d>=1&&d<=31&&m>=1&&m<=12))return;let a=y?(+y<100?2000+ +y:+y):y0;
  let dt=new Date(a,m-1,d);if(dt.getMonth()!==m-1)return;if(!y&&isoD(dt)<isoD(new Date(base.getTime()-180*864e5)))dt=new Date(a+1,m-1,d);
  const iso=isoD(dt);if(iso>isoD(new Date(base.getTime()+400*864e5)))return;
  const antes=norm(t.slice(Math.max(0,i-40),i));achados.push({iso,chave:PALAVRA_PRAZO.test(antes),trecho:t.slice(Math.max(0,i-30),i+len).replace(/\s+/g,' ').trim().slice(-70)})};
 for(const m of t.matchAll(/(?<![\d/.,-])(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](\d{4}|\d{2}))?(?![\d/,]|\.\d)/g))add(m[1],m[2],m[3],m.index,m[0].length);
 for(const m of norm(t).matchAll(/(?<!\d)(\d{1,2})\s*(?:de\s+)?(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro|jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\b(?:\s*(?:de\s+)?(\d{4}))?/g))add(m[1],MES_NUM[m[2]],m[3],m.index,m[0].length);
 const fut=achados.filter(a=>a.iso>=rec),chaveF=fut.filter(a=>a.chave),chaveP=achados.filter(a=>a.chave&&a.iso<rec);
 const ok=chaveF[0]||fut[0];
 if(ok)return {st:chegPorData(ok.iso,isoD(base)),data:ok.iso,trecho:ok.trecho};
 if(chaveP[0])return {st:'atrasado',data:chaveP[0].iso,trecho:chaveP[0].trecho};
 return {st:'atrasado'}}
// Situação de chegada de um chamado: a marcação manual vale; se não houver, usa a leitura automática do e-mail.
function chegadaDe(c){if(!c||c.chegada==='na')return '';if(c.chegada&&c.chegadaAuto&&c.origem==='email')return chegPorData(c.prazoEnv,c.recebidoEm||c.abertoEm);if(c.chegada)return c.chegada;if(c.origem!=='email')return '';return prazoNoTexto(`${c.assunto||''}\n${(c.desc||'').replace(/^Recebido por e-mail de .*? em [^.]*\.\s*/,'')}`,c.recebidoEm||c.abertoEm).st}
const chegadaTag=(c,peq)=>{const v=chegadaDe(c),auto=!c.chegada||c.chegadaAuto,fs=peq?' style="font-size:10.5px"':'',an=c.prazoEnv?antecDias(c.recebidoEm||c.abertoEm,c.prazoEnv):null,dica=c.prazoEnv?` title="Pedido para ${fmtAno(c.prazoEnv)} · chegou ${an} ${CHEG_UTEIS()?'dias úteis':'dias'} antes · mínimo ${chegTxt()}"`:auto&&v==='atrasado'?' title="O e-mail não trazia data de prazo"':'';
 return v==='atrasado'?`<span class="tag bad"${fs}${dica}>Chegou atrasado${auto?' · auto':''}</span>`:v==='prazo'?`<span class="tag ok"${fs}${dica}>Chegou em dia${auto?' · auto':''}</span>`:''};
/* ---------- padrão do contas a pagar ----------
   Solicitação: D-8 antes do vencimento, com vencimento, data do pagamento, NF/recibo, informações do pagamento
   e documento (boleto ou PIX), copiando as caixas obrigatórias e o diretor que autorizou. Pagamento: D-5. */
const COPIAS_PAD=['contasapagaread@fatecie.edu.br','controladoria@fatecie.edu.br','guilherme.esquivel@fatecie.edu.br'];
const copiasPad=()=>Array.isArray(CFG.padraoCopias)&&CFG.padraoCopias.length?CFG.padraoCopias:COPIAS_PAD;
const PAG_D=()=>+CFG.pagD||5;
const DATA_RX='\\d{1,2}\\s*(?:[\\/.-]\\s*\\d{1,2}|de\\s+[a-z]+)';
const ITENS_SOLIC=[
 ['venc','data de vencimento',t=>new RegExp('venc\\w*[^\\d\\n]{0,30}'+DATA_RX).test(t)],
 ['datapag','data do pagamento',t=>new RegExp('(pagamento|pagar|pago|programa\\w*|agendar)[^\\d\\n]{0,30}'+DATA_RX).test(t)],
 ['nf','nota fiscal ou recibo',(t,a)=>/\bnf\b|\bnfs?-?e\b|nota fiscal|recibo|danfe|cupom fiscal/.test(t+' '+a)],
 ['info','informações do pagamento (valor e favorecido)',t=>/r\$\s?\d|\bvalor\b/.test(t)],
 ['doc','documento (boleto ou PIX)',(t,a)=>/boleto|\bpix\b|linha digitavel|codigo de barras|\d{5}\.?\d{5}\s?\d{5}\.?\d{6}/.test(t+' '+a)]];
const itemNome=k=>ITENS_SOLIC.find(i=>i[0]===k)?.[1]||k;
function padraoSolic(txt,anexos,dest){const t=norm(txt||''),a=norm((anexos||[]).join(' ')),d=(dest||[]).map(norm);
 return {falta:ITENS_SOLIC.filter(([,,f])=>!f(t,a)).map(([k])=>k),faltaCc:copiasPad().filter(x=>!d.includes(norm(x)))}}
const foraPadrao=x=>{const m=padraoManDe(x);if(m==='ok'||m==='na')return false;if(m==='fora')return true;return Array.isArray(x.falta)&&(x.falta.length>0||(x.faltaCc||[]).length>0)};
/* ajustes manuais: o que a equipe marca vale na hora; "não se aplica" fica guardado no remetente para a mesma categoria e vai virando automático */
const remDeX=x=>D.remetentes.find(r=>r.id===(x.rem||(x.de?remDoEmail(x):'')));
const catDeX=x=>norm(x.trecho!==undefined?(emCat(x)||''):(assDe(x.cat)?.n||catSugerida(x.desc||'',x.assunto||'')||''));
function padraoManDe(x){if(x.padraoMan)return x.padraoMan;const r=remDeX(x);return r&&(r.padraoNA||[]).length&&r.padraoNA.includes(catDeX(x))?'na':''}
function chegadaManDe(x){if(x.chegadaMan)return x.chegadaMan;const r=remDeX(x);return r&&(r.chegadaNA||[]).length&&r.chegadaNA.includes(catDeX(x))?'na':''}
const padraoTxt=x=>[...(x.falta||[]).map(itemNome),...(x.faltaCc||[]).map(e=>'cópia para '+e.split('@')[0])].join(', ');
const padraoTag=(x,peq)=>foraPadrao(x)?`<span class="tag wa"${peq?' style="font-size:10.5px"':''} title="Falta: ${esc(padraoTxt(x))}">Fora do padrão</span>`:'';
async function lerCompleto(id){if(!MCP||!id)return null;try{const r=await MCP.callTool(SRV,'outlook_get_message',{id,...(CFG.caixa?{mailboxOwnerEmail:CFG.caixa}:{})},{cache:false});return r?.payload||r?.structuredContent||null}catch(e){return null}}
const padraoDe=(subj,full)=>({...padraoSolic((subj||'')+'\n'+(full.body||''),(full.attachments||[]).map(a=>a.name),[...(full.to||[]),...(full.cc||[])]),padrao:true});
/* confere o padrão de um e-mail ou chamado que chegou antes desta regra */
async function conferirPadrao(ref){const [k,id]=ref.split(':'),col=k==='e'?'emails':'chamados',x=D[col].find(y=>y.id===id);if(!x?.msgId){toast('Esse item não tem o e-mail de origem.');return}
 toast('Conferindo o e-mail…');const full=await lerCompleto(x.msgId);if(!full){toast('Não consegui abrir o e-mail no Outlook. Verifique a conexão.');return}
 const pd=padraoDe(x.assunto,full);await patch(col,id,pd,foraPadrao(pd)?`Fora do padrão: falta ${padraoTxt(pd)}`:'Está no padrão',false);if(FORM?.tipo==='_det')detalheCh(id)}
/* resposta pronta pedindo o que faltou; alguém revisa e envia pela própria conta */
function pedirFalta(ref){const [k,id]=ref.split(':'),x=k==='e'?D.emails.find(e=>e.id===id):D.chamados.find(c=>c.id===id);if(!x)return;
 const para=k==='e'?x.de:(D.remetentes.find(r=>r.id===x.rem)?.email||''),nome0=(k==='e'?x.deNome:remNomeCh(x))||'',nome=nome0==='Sem nome'||nome0.includes('@')?'':nome0.split(' ')[0];
 const itens=(x.falta||[]).map(itemNome),cc=x.faltaCc||[];
 const corpo=`Olá${nome?', '+nome:''}.\n\nRecebemos a solicitação "${x.assunto}", mas para seguir com o pagamento ela precisa estar no padrão do Contas a Pagar.\n\n${itens.length?'Está faltando:\n'+itens.map(i=>'- '+i).join('\n')+'\n\n':''}${cc.length?'Faltou copiar:\n'+cc.map(i=>'- '+i).join('\n')+'\n- o diretor que autorizou a solicitação\n\n':''}Lembrando o padrão:\n- enviar com ${CHEG_MIN()} dias de antecedência do vencimento (D-${CHEG_MIN()})\n- informar data de vencimento, data do pagamento, nota fiscal ou recibo, informações do pagamento e o documento (boleto ou PIX)\n- copiar ${copiasPad().join(', ')} e o diretor que autorizou\n\nObrigado.\nContas a Pagar`;
 FORM={tipo:'_pedfalta',ref};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Fora do padrão · ${esc(x.assunto)}</p><h2 id="sheet-title">Pedir o que faltou</h2><p class="sub" style="font-size:13px">Revise o texto. O e-mail sai pela sua conta do Outlook, para o remetente, com as cópias obrigatórias.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="pf_para">Para</label><input class="inp" id="pf_para" value="${esc(para)}"></div>
 <div class="full"><label class="lbl" for="pf_cc">Cópia (separe por vírgula)</label><input class="inp" id="pf_cc" value="${esc(copiasPad().join(', '))}"></div>
 <div class="full"><label class="lbl" for="pf_as">Assunto</label><input class="inp" id="pf_as" value="${esc('RE: '+x.assunto)}"></div>
 <div class="full"><label class="lbl" for="pf_tx">Mensagem</label><textarea class="inp" id="pf_tx" rows="14">${esc(corpo)}</textarea><p class="ferr" id="pf_err"></p></div></div>
 <div class="foot"><button class="btn ghost" onclick="copiarFalta()">Copiar texto</button><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" id="pf_btn" onclick="enviarFalta()">Enviar</button></div></div>`;
 document.getElementById('ov').hidden=false}
function copiarFalta(){const t=document.getElementById('pf_tx')?.value||'';try{navigator.clipboard.writeText(t).then(()=>toast('Texto copiado.'),()=>toast('Não foi possível copiar.'))}catch(e){toast('Não foi possível copiar.')}}
async function enviarFalta(){const v=i=>(document.getElementById(i)?.value||'').trim(),lista=t=>t.split(/[;,\s]+/).filter(x=>x.includes('@'));
 const para=lista(v('pf_para')),cc=lista(v('pf_cc')),err=document.getElementById('pf_err');
 if(!para.length){err.textContent='Informe o e-mail de quem vai receber.';return}if(!MCP){err.textContent=msgErro({code:'sem_mcp'});return}
 const b=document.getElementById('pf_btn');b.disabled=true;b.textContent='Enviando…';
 try{await MCP.callTool(SRV,'outlook_send_mail',{to:para,cc,subject:v('pf_as'),bodyType:'text',body:document.getElementById('pf_tx').value},{cache:false});
  const [k,id]=FORM.ref.split(':'),col=k==='e'?'emails':'chamados',x=D[col].find(y=>y.id===id);
  await patch(col,id,{pedidoFaltaEm:new Date().toISOString(),pedidoFaltaPor:euNome()},'Pedido enviado',`Pediu o que faltou na solicitação "${x?.assunto||''}"${x?.proto?' ('+x.proto+')':''}`);fechar()}
 catch(e){b.disabled=false;b.textContent='Enviar';err.textContent=msgErro(e)}}
/* pagamento D-5: data limite = vencimento menos N dias úteis */
const uteisAntes=(iso,n)=>{let d=iso,k=0;while(k<n){d=addDia(d,-1);if(ehUtil(d))k++}return d};
const vencDe=c=>c.venc||c.prazoEnv||'';
function pagSit(c){if(!PAGTO(c.tipo||''))return null;const v=vencDe(c);if(!v)return null;const lim=uteisAntes(v,PAG_D()),pg=c.pagoEm||c.programadoEm||'';
 if(pg)return {pg,lim,v,ok:pg<=lim,just:c.pagJust||''};
 if(['Programado','Concluído'].includes(c.st))return null;
 return HJ>lim?{pg:'',lim,v,ok:false,pend:true}:null}
const pagTag=(c,peq)=>{const p=pagSit(c);if(!p||p.ok)return '';return `<span class="tag ${p.pend?'bad':'wa'}"${peq?' style="font-size:10.5px"':''} title="Limite D-${PAG_D()}: ${fmtAno(p.lim)}">${p.pend?`Passou do D-${PAG_D()}`:`Pago fora do D-${PAG_D()}`}</span>`};
/* registrar pagamento (e justificativa quando passou do D-5) */
function pagSheet(id,editar){const c=D.chamados.find(x=>x.id===id);if(!c)return;FORM={tipo:'_pag',id,editar:!!editar};
 const v=vencDe(c),pg=c.pagoEm||c.programadoEm||HJ;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(c.proto)} · ${esc(c.assunto)}</p><h2 id="sheet-title">${editar?'Pagamento e justificativa':'Registrar o pagamento'}</h2><p class="sub" style="font-size:13px">Padrão: pagar ${PAG_D()} dias úteis antes do vencimento (D-${PAG_D()}). Depois disso, a justificativa é obrigatória e aparece no painel do diretor.</p></div>
 <div class="fgrid"><div><label class="lbl" for="pg_venc">Vencimento</label><input class="inp" id="pg_venc" type="date" value="${esc(v)}" oninput="pagLim()"></div>
 <div><label class="lbl" for="pg_data">Pago ou programado em</label><input class="inp" id="pg_data" type="date" value="${esc(pg)}" oninput="pagLim()"></div>
 <p class="meta full" id="pg_lim" style="margin:0"></p>
 <div class="full"><label class="lbl" for="pg_just">Justificativa</label><textarea class="inp" id="pg_just" rows="3" placeholder="Ex.: solicitação chegou fora do prazo; documento corrigido só no dia 12">${esc(c.pagJust||'')}</textarea><p class="ferr" id="pg_err"></p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaPag()">${editar?'Salvar':'Registrar e programar'}</button></div></div>`;
 document.getElementById('ov').hidden=false;pagLim()}
function pagLim(){const v=document.getElementById('pg_venc')?.value,d=document.getElementById('pg_data')?.value,el=document.getElementById('pg_lim');if(!el)return;
 if(!v){el.textContent='Informe o vencimento para conferir o D-'+PAG_D()+'.';return}const lim=uteisAntes(v,PAG_D());
 el.innerHTML=`Limite D-${PAG_D()}: <b>${fmtAno(lim)}</b> · ${d?(d<=lim?'<span style="color:var(--ok)">dentro do padrão</span>':'<span style="color:var(--bad)">fora do padrão: justifique</span>'):''}`}
async function salvaPag(){const c=D.chamados.find(x=>x.id===FORM.id);if(!c)return;const v=document.getElementById('pg_venc').value,d=document.getElementById('pg_data').value||HJ,j=document.getElementById('pg_just').value.trim(),err=document.getElementById('pg_err');
 const lim=v?uteisAntes(v,PAG_D()):'',fora=!!v&&d>lim;if(fora&&!j){err.textContent=`Passou do D-${PAG_D()}. Escreva a justificativa.`;return}
 const mud={pagoEm:d,pagAtraso:fora,pagJust:j,pagJustPor:j?euNome():'',...(v&&!c.venc?{venc:v}:{})};
 if(!FORM.editar)Object.assign(mud,{st:'Programado',sub:'',programadoEm:d});
 if(await patch('chamados',c.id,mud,FORM.editar?'Pagamento atualizado':`Programado${fora?' fora do D-'+PAG_D():''}`,`${FORM.editar?'Atualizou o pagamento':'Programou o pagamento'} do chamado ${c.proto}${fora?` fora do D-${PAG_D()}: ${j}`:''}`))fechar()}
/* painel: pagamentos D-5 e solicitações fora do padrão, por setor */
function padraoBloco(L){const grp=c=>c.dep?depNome(c.dep):(remNomeCh(c)+' · sem setor');
 const pg=L.map(c=>[c,pagSit(c)]).filter(([,p])=>p),sol=L.filter(c=>Array.isArray(c.falta));
 if(!pg.length&&!sol.length)return '';
 const por={};pg.forEach(([c,p])=>{const g=por[grp(c)]=por[grp(c)]||{n:grp(c),ok:0,fora:0,inc:0,sol:0};p.ok?g.ok++:g.fora++});
 sol.forEach(c=>{const g=por[grp(c)]=por[grp(c)]||{n:grp(c),ok:0,fora:0,inc:0,sol:0};g.sol++;if(foraPadrao(c))g.inc++});
 const G=Object.values(por).sort((a,b)=>(b.fora+b.inc)-(a.fora+a.inc)),mx=Math.max(1,...G.map(g=>g.ok+g.fora));
 const fora=pg.filter(([,p])=>!p.ok),inc=sol.filter(foraPadrao),cont={};inc.forEach(c=>[...(c.falta||[]).map(itemNome),...((c.faltaCc||[]).length?['cópias obrigatórias']:[])].forEach(k=>cont[k]=(cont[k]||0)+1));
 const barras=G.filter(g=>g.ok+g.fora).slice(0,8).map(g=>`<div class="hrow" title="${esc(g.n)}: ${g.ok} no D-${PAG_D()} e ${g.fora} fora"><span class="hn">${esc(g.n)}</span><div class="hbar" style="width:${Math.max(6,(g.ok+g.fora)/mx*100)}%">${g.ok?`<i class="ok" style="flex:${g.ok}"></i>`:''}${g.fora?`<i class="bad" style="flex:${g.fora}"></i>`:''}</div><span class="hv">${g.fora?`<b>${g.fora}</b> de ${g.ok+g.fora} fora`:`${g.ok} no prazo`}</span></div>`).join('')||'<p class="meta" style="margin:0">Nenhum pagamento registrado neste mês.</p>';
 const just=fora.filter(([c])=>c.pagJust||c.pagAtraso);
 return `<div class="dgrid" style="margin-top:14px"><div><div class="dh"><h3>Pagamentos no D-${PAG_D()}</h3><div class="dleg"><span><i style="background:var(--ok)"></i>No prazo</span><span><i style="background:var(--bad)"></i>Fora</span></div></div>${barras}</div>
 <div><div class="dh"><h3>Solicitações fora do padrão</h3><span class="meta">${inc.length} de ${sol.length} conferidas</span></div>${inc.length?G.filter(g=>g.inc).slice(0,6).map(g=>`<div class="row" style="padding:6px 0"><div class="t"><b style="font-weight:500">${esc(g.n)}</b><span>${g.inc} de ${g.sol} fora do padrão</span></div><span class="tag wa">${Math.round(g.inc/g.sol*100)}%</span></div>`).join('')+`<p class="meta" style="margin:6px 0 0">Mais esquecido: ${Object.entries(cont).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,n])=>`${esc(k)} (${n})`).join(' · ')}</p>`:`<p class="meta" style="margin:0">${sol.length?'Todas as solicitações conferidas estavam no padrão.':'Nenhuma solicitação conferida ainda neste mês.'}</p>`}</div></div>
 ${fora.length?`<details class="dmais"${S.dJust?' open':''} ontoggle="S.dJust=this.open"><summary>Pagamentos fora do D-${PAG_D()} e justificativas (${fora.length})</summary>${fora.map(([c,p])=>`<div class="row" style="padding:6px 0"><div class="t"><b style="font-weight:500">${esc(c.proto)} · ${esc(grp(c))}</b><span>${esc(c.assunto)} · vence ${fmt(p.v)} · limite ${fmt(p.lim)} · ${p.pend?'ainda não pago':'pago '+fmt(p.pg)}${c.pagJust?' · '+esc(c.pagJust):' · sem justificativa'}</span></div><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Ver</button></div>`).join('')}</details>`:''}`}
async function prazoDoEmail(m,corpo){const r0=prazoNoTexto((m.subject||'')+'\n'+(m.summary||''),m.receivedDateTime);if(r0.st==='prazo')return r0;
 if(corpo){const r1=prazoNoTexto((m.subject||'')+'\n'+corpo,m.receivedDateTime);return r1.st==='prazo'||r1.data?r1:r0}
 if(!MCP||!m.id)return r0;
 try{const r=await MCP.callTool(SRV,'outlook_get_message',{id:m.id,...(CFG.caixa?{mailboxOwnerEmail:CFG.caixa}:{})},{cache:false});const b=(r?.payload||r?.structuredContent||{}).body||'';
  if(b){const r1=prazoNoTexto((m.subject||'')+'\n'+b,m.receivedDateTime);if(r1.st==='prazo'||r1.data)return r1}}catch(e){}
 return r0}
async function emailJaAceito(id){try{const s=await DB.collection('emails').doc(id).get();const d=s.exists?s.data():null;return !!d&&(d.st==='aplicado'||d.st==='ignorado')}catch(e){return false}}
/* remetentes: todo e-mail da mesma pessoa fica no mesmo grupo, com o setor que vocês definirem */
const remId=addr=>'r'+hashId('rem:'+norm(addr)).slice(1);
const remDe=addr=>D.remetentes.find(r=>r.id===remId(addr));
const remDoEmail=e=>e.rem||remId(e.de);
const remCh=c=>c.rem||'';
const remNomeCh=c=>{const r=D.remetentes.find(x=>x.id===c.rem);return r?.nome||r?.email||c.solicitante||'Sem nome'};
const depPorEmail=addr=>D.departamentos.find(d=>listaEmails(d).some(x=>addr===x||(x.startsWith('@')&&addr.endsWith(x))));
const lerTodos=()=>CFG.emailTodos!==false;
const lerEnviados=()=>lerTodos()&&CFG.emailEnviados!==false;
async function novoContato(de,nome,dep){const rem={id:remId(de),email:de,nome:nome||'',dep:dep||'',cat:'',ignorar:false,criado:new Date().toISOString()};D.remetentes.push(rem);const {id:_,...rb}=rem;try{await DB.collection('remetentes').doc(rem.id).set(rb)}catch(e){}return rem}
/* e-mails enviados: entram na conversa do contato, sem ir para a triagem */
async function processarEnviado(m){
 const id=hashId(m.internetMessageId||m.id);
 if(D.emails.some(x=>x.id===id))return 'dup';
 const eu=[ME.email,CFG.caixa].filter(Boolean).map(norm),dest=(m.to||[]).filter(a=>a.address&&!eu.includes(norm(a.address)));
 if(!dest.length)return 'dup';
 const de=norm(dest[0].address);let rem=remDe(de);const d=depDe(rem?.dep)||depPorEmail(de);
 if(!rem)rem=await novoContato(de,limparTxt(dest[0].name).slice(0,80),d?.id||'');
 if(rem.ignorar)return 'dup';
 const em={dir:'enviado',st:'enviado',dep:d?.id||'',de,deNome:limparTxt(dest[0].name).slice(0,80),para:dest.map(a=>norm(a.address)).slice(0,10).join(', '),assunto:limparTxt(m.subject||'(sem assunto)').slice(0,200),trecho:limparTxt(m.summary).slice(0,220),recebido:m.receivedDateTime||'',anexos:!!m.hasAttachments,link:/^https:\/\//.test(m.webLink||'')?m.webLink:'',msgId:m.id||'',caixa:CFG.caixa||'',rem:rem.id,criado:new Date().toISOString(),por:ME.uid||null};
 D.emails.push({id,...em});await DB.collection('emails').doc(id).set(em);return 'enviado'}
async function processar(m){
 const id=hashId(m.internetMessageId||m.id);
 if(D.emails.some(x=>x.id===id))return 'dup';
 const de=norm(m.sender||'');if(!de.includes('@'))return 'dup';
 if(ME.email&&de===norm(ME.email))return 'dup';
 const rid=remId(de);let rem=remDe(de);
 const d=depDe(rem?.dep)||depPorEmail(de);
 const txt=(m.subject||'')+' '+limparTxt(m.summary);
 let c;if(d)c=classificar(m,d);else{const t=tipoPorTexto(txt);c=t?{acao:'chamado',tipo:t,conf:'media'}:{acao:'nenhuma',conf:'baixa'}}
 c.assunto=rem?.cat&&assDe(rem.cat)?rem.cat:assPorTexto(txt,true);
 const pag=c.acao==='chamado'&&PAGTO(c.tipo),full=pag?await lerCompleto(m.id):null;
 const pz=await prazoDoEmail(m,full?.body);
 const em={dep:d?.id||'',de,deNome:limparTxt(m.senderName).slice(0,80),assunto:limparTxt(m.subject||'(sem assunto)').slice(0,200),trecho:limparTxt(m.summary).slice(0,220),chegada:pz.st,prazoEnv:pz.data||'',prazoTrecho:limparTxt(pz.trecho||'').slice(0,80),recebido:m.receivedDateTime||'',anexos:!!m.hasAttachments,link:/^https:\/\//.test(m.webLink||'')?m.webLink:'',sug:c,criado:new Date().toISOString(),por:ME.uid||null,msgId:m.id||'',caixa:CFG.caixa||'',rem:rid,...(full?padraoDe(m.subject,full):{})};
 if(!rem)rem=await novoContato(de,em.deNome,d?.id||'');
 if(rem.ignorar){await DB.collection('emails').doc(id).set({...em,st:'ignorado',auto:true,res:''});return 'dup'}
 if(em.chegada==='atrasado'&&Array.isArray(S._novosAtr))S._novosAtr.push(em);
 D.emails.push({id,...em,st:'processando'});
 const auto=CFG.emailModo==='auto'&&((c.acao==='entrega'&&c.conf==='alta')||c.acao==='chamado');
 if(auto){const r=await aplicar(em,c,true);await DB.collection('emails').doc(id).set({...em,st:r==='erro'?'triagem':'aplicado',res:r,auto:true});return r==='erro'?'novo':'auto'}
 await DB.collection('emails').doc(id).set({...em,st:'triagem'});return 'novo'}
async function sincronizar(manual){
 if(S.sync||!pode('email')||!DB)return;
 if(!MCP){S.syncErr={code:'sem_mcp'};render();return}
 const deps=D.departamentos.filter(d=>listaEmails(d).length),todos=lerTodos();
 if(!todos&&!deps.length){if(manual)toast('Cadastre os e-mails dos departamentos primeiro.');return}
 if(ME.uid){try{const l=await DB.doc('sync/lock').acquire({holder:ME.uid,ttlMs:180000});if(!l.acquired){if(manual)toast('Outra pessoa está verificando o e-mail agora. Tente em instantes.');return}}catch(e){}}
 S.sync=true;S.syncErr=null;render();
 const mesmaCaixa=norm(SYNC.caixa||'')===norm(CFG.caixa||'')&&(SYNC.caixa!==undefined||!CFG.caixa)&&(SYNC.desde||'')===(CFG.emailDesde||'');
 const desde=S.reler?(CFG.emailDesde?CFG.emailDesde+'T00:00:00Z':new Date(Date.now()-30*864e5).toISOString()):SYNC.ultima&&mesmaCaixa?new Date(Date.parse(SYNC.ultima)-36e5).toISOString():(CFG.emailDesde?CFG.emailDesde+'T00:00:00Z':new Date(Date.now()-14*864e5).toISOString());
 let novos=0,auto=0,lidos=0,env=0;S._novosAtr=[];
 const buscar=async(inp,filtro,fn)=>{let offset=0;
  for(let pg=0;pg<(todos?8:4);pg++){
   const q={...inp,afterDateTime:desde,limit:25};if(CFG.caixa)q.mailboxOwnerEmail=CFG.caixa;if(CFG.caixaPasta&&q.folder!=='sentitems'){delete q.folder;q.folderId=CFG.caixaPasta}if(offset)q.offset=offset;
   const res=await MCP.callTool(SRV,TOOL,q,{cache:false});
   const {msgs,next}=extrairMsgs(res);lidos+=msgs.length;
   for(const m of msgs){if(filtro&&!filtro(m))continue;const r=await (fn||processar)(m);if(r==='novo')novos++;if(r==='auto')auto++;if(r==='enviado')env++}
   if(typeof next==='number'&&next>offset&&msgs.length)offset=next;else break}};
 try{
  if(todos){await buscar({folder:'inbox'});if(lerEnviados()){try{await buscar({folder:'sentitems'},null,processarEnviado)}catch(e){if(manual)toast('Caixa de entrada lida. A pasta de enviados não está liberada para leitura.')}}}
  else for(const d of deps)for(const addr of listaEmails(d))await buscar({sender:addr},m=>{const x=norm(m.sender);return x===addr||x.endsWith(addr)});
  if(S._novosAtr?.length){const L=S._novosAtr;S._novosAtr=[];avisarDiretor('emailAtrasado',L.length>1?`${L.length} e-mails chegaram atrasados`:'Chegou e-mail atrasado',L.map(e=>`${e.deNome||e.de}${e.dep?' ('+depNome(e.dep)+')':''} · ${e.assunto}${e.prazoEnv?` · pediu para ${fmt(e.prazoEnv)}`:' · sem data no e-mail'}`)).catch(()=>{})}
  await DB.doc('sync/estado').set({ultima:new Date().toISOString(),caixa:CFG.caixa||'',desde:CFG.emailDesde||'',uid:ME.uid||null,papel:quemSou(),lidos,novos,auto,env,erro:''});
  if(manual||novos||auto)toast(`${lidos} e-mails verificados · ${novos} na triagem · ${env} enviados guardados na conversa${auto?` · ${auto} registrados automaticamente`:''}`);
  if(novos||auto)log(`Verificou o Outlook: ${novos} e-mails na triagem e ${auto} registrados automaticamente`);
  try{localStorage.setItem('autoSync_'+(ME.uid||'demo'),'1')}catch(e){}
 }catch(e){S.syncErr=e;DB.doc('sync/estado').set({...SYNC,erro:e?.code||'erro',erroEm:new Date().toISOString()}).catch(()=>{});if(manual)toast(msgErro(e))}
 finally{S.sync=false;S.reler=false;render()}}
function relerEmails(){if(S.sync){toast('Já estou verificando. Tente em instantes.');return}S.reler=true;toast(`Buscando de novo os e-mails desde ${CFG.emailDesde?fmt(CFG.emailDesde):'30 dias atrás'}. Os que já estão no Prumo não se repetem.`);sincronizar(true)}
/* só conta e mostra os e-mails da caixa configurada (ex.: contas a pagar); os de outra caixa ficam de fora */
const daCaixa=e=>!CFG.caixa||norm(e.caixa||'')===norm(CFG.caixa);
const desdeOk=e=>!CFG.emailDesde||!e.recebido||e.recebido.slice(0,10)>=CFG.emailDesde;
const emPend=()=>D.emails.filter(e=>e.st==='triagem'&&daCaixa(e)&&desdeOk(e));
const virouChamado=e=>e.st==='aplicado'||String(e.res||'').startsWith('chamado:')||D.chamados.some(c=>c.emailId===e.id||(e.msgId&&c.msgId===e.msgId));
const deOutraCaixa=()=>D.emails.filter(e=>!daCaixa(e)&&!virouChamado(e));
async function removerOutraCaixa(){const L=deOutraCaixa();if(!L.length)return;
 if(!S.confOC){S.confOC=true;toast(`Clique de novo para remover ${L.length} e-mails que não são da caixa ${CFG.caixa}.`);render();setTimeout(()=>{S.confOC=false;render()},6000);return}S.confOC=false;
 let k=0;for(const e of L){try{await DB.collection('emails').doc(e.id).delete();k++}catch(x){}}
 const sobra=new Set(D.emails.filter(e=>!L.some(x=>x.id===e.id)).map(remDoEmail));
 for(const r of D.remetentes.filter(r=>!sobra.has(r.id)&&!r.dep&&!r.cat&&!r.ignorar)){try{await DB.collection('remetentes').doc(r.id).delete()}catch(x){}}
 log(`Removeu do Prumo ${k} e-mails que não eram da caixa ${CFG.caixa}`);toast(`${k} e-mails removidos do Prumo`);render()}
/* apaga do Prumo (não do Outlook) todos os e-mails que não viraram chamado */
async function excluirTodosEmails(){if(!(pode('email')||podeAdmin())){toast('Sem permissão.');return}
 const L=D.emails.filter(e=>!virouChamado(e));if(!L.length){toast('Não há e-mails para excluir.');return}
 if(!S.confTodos){S.confTodos=true;toast(`Clique de novo para excluir ${L.length} e-mails do Prumo. O Outlook não é alterado.`);render();setTimeout(()=>{S.confTodos=false;render()},6000);return}S.confTodos=false;
 let k=0;for(let i=0;i<L.length;i+=20){const r=await Promise.allSettled(L.slice(i,i+20).map(e=>DB.collection('emails').doc(e.id).delete()));k+=r.filter(x=>x.status==='fulfilled').length}
 log(`Excluiu do Prumo ${k} e-mails (o Outlook não foi alterado)`);toast(`${k} e-mails excluídos do Prumo. Os chamados não mudaram.`);render()}
const MS_MOTIVO={sem_renovacao:'o servidor não tem a chave de renovação guardada. Clique em Conectar e-mail uma vez (com a função ms-token já publicada) para guardá-la.',
 nao_salvou:'o servidor não conseguiu guardar a chave. Falta criar as tabelas ms_tokens e ms_equipe (rode o trecho do fim do schema.sql no SQL Editor do Supabase).',
 invalid_client:'a Microsoft recusou o segredo do app. Confira AZURE_CLIENT_SECRET (o Valor, não o ID do segredo) e AZURE_CLIENT_ID nos Secrets das Edge Functions.',
 unauthorized_client:'o app do Azure não está liberado para renovar. Confira AZURE_CLIENT_ID e AZURE_TENANT_ID nos Secrets das Edge Functions.',
 invalid_grant:'a Microsoft não aceitou mais a chave guardada (senha trocada ou acesso revogado). Clique em Conectar e-mail de novo.',
 invalid_request:'a Microsoft recusou o pedido de renovação. Confira AZURE_TENANT_ID e AZURE_CLIENT_ID nos Secrets das Edge Functions.',
 sem_permissao:'sua conta não tem a permissão E-mails recebidos para usar a conexão da equipe.',
 sem_login:'o login no Prumo expirou. Saia e entre de novo.',
 NOT_FOUND:'a função ms-token não está publicada no Supabase.',http_404:'a função ms-token não está publicada no Supabase.'};
function motivoMs(){const m=window.portalMsErro;if(!m)return '';const t=MS_MOTIVO[m.erro]||`erro "${m.erro}"${m.detalhe?': '+m.detalhe:''}.`;return ` Motivo: ${t} (${m.acao}${m.tipo?' '+m.tipo:''}, ${fmtHora(m.quando)})`}
function msgErro(e){const c=e?.code,cx=CFG.caixa||'a caixa configurada';return ({
 sem_acesso_caixa:`Sua conta não tem acesso à caixa ${cx}. Peça à TI "Acesso total" a essa caixa para o seu e-mail.${e?.message?` Detalhe da Microsoft: ${String(e.message).slice(0,200)}`:''}`,
 caixa_nao_encontrada:`Não encontrei a caixa ${cx}, ou sua conta não tem acesso a ela. Confira o endereço em Configurar caixa ou link e, se estiver certo, peça à TI "Acesso total" a essa caixa.${e?.message?` Detalhe da Microsoft: ${String(e.message).slice(0,200)}`:''}`,
 not_found:'O Outlook não encontrou a pasta ou o e-mail. Confira em Configurar caixa ou link.',
 pasta_sem_raiz:`A Caixa de Entrada do ${cx} está compartilhada com você, mas a Microsoft não deixa localizá-la. Na conta do contas a pagar, clique com o botão direito no nome da conta (acima da Caixa de Entrada) > Permissões e dê a você "Revisor" (ou peça à TI "Acesso total"). Depois clique em Conectar e-mail e em Verificar agora.${e?.message?` Detalhe: ${String(e.message).slice(0,160)}`:''}`,
 needs_reauth:'A conexão com o e-mail venceu e não renovou sozinha.'+motivoMs(),
 server_not_connected:'O e-mail ainda não está conectado. Clique em Conectar e-mail.'+motivoMs(),
 
 not_in_manifest:'O Outlook não liberou o acesso. Clique em Conectar e-mail e aceite as permissões.',
 approval_required:'O Outlook precisa da sua aprovação. Clique em Conectar e-mail.',
 blocked_by_policy:'A política da sua organização bloqueia a leitura do Outlook por aqui. Fale com a TI.',
 server_unavailable:'O Outlook não respondeu agora. O portal tenta de novo na próxima verificação.',
 tool_error:'O Outlook recusou a busca: '+String(e?.message||'').slice(0,160),
 sem_mcp:'A leitura do Outlook não está disponível. Entre com a conta Microsoft da empresa.'}[c]||('Não foi possível ler os e-mails agora.'+(e?.message||e?.code?` Detalhe: ${String(e.message||e.code).slice(0,180)}`:' Tente de novo em alguns minutos.')))}
async function triar(id,acao){const em=D.emails.find(x=>x.id===id);if(!em||S.triando)return;S.triando=true;
 try{if(await emailJaAceito(id)){toast('Outra pessoa já cuidou deste e-mail.');return}if(acao==='ignorar'){await patch('emails',id,{st:'ignorado',triadoPor:ME.uid||null,triadoEm:new Date().toISOString()},'E-mail ignorado',`Ignorou o e-mail "${em.assunto}" de ${depNome(em.dep)}`);return}
  let c;if(acao==='entrega'){const ref=val('tr_'+id);if(!ref){toast('Escolha qual entrega chegou.');return}c={acao:'entrega',ref}}
  else c={acao:'chamado',tipo:val('tt_'+id)||'Solicitação de pagamento'};
  const r=await aplicar(em,c,false);if(r&&r!=='erro')await patch('emails',id,{st:'aplicado',res:r,triadoPor:ME.uid||null,triadoEm:new Date().toISOString()},r.startsWith('entrega')?'Entrega marcada como recebida':null,false)}
 finally{S.triando=false}}
function resTxt(e){const r=e.res||'';return (e.st==='ignorado'?'Ignorado':r.startsWith('entrega:')?`Entrega "${esc(D.entregas.find(x=>x.id===r.slice(8))?.item||'')}" recebida`:r.startsWith('chamado:')?`Virou o chamado ${esc(r.slice(8))}`:'Processado')+(e.auto?' automaticamente':'')}
/* sugestão do Prumo, em cinza, até alguém confirmar ou ajustar */
const chegAutoEmail=e=>e.prazoEnv?chegPorData(e.prazoEnv,e.recebido):(e.chegada||prazoNoTexto(e.assunto+'\n'+(e.trecho||''),e.recebido).st);
const foraAuto=e=>Array.isArray(e.falta)&&(e.falta.length>0||(e.faltaCc||[]).length>0);
function sugLinha(e){const v=chegadaManDe(e)?'':chegAutoEmail(e),f=!padraoManDe(e)&&foraAuto(e);if(!v&&!f)return '';
 const p=[v?`chegou ${v==='prazo'?'em dia':'atrasado'}${e.prazoEnv?` (pedido para ${fmtAno(e.prazoEnv)})`:v==='atrasado'?' (o e-mail não traz data)':''}`:'',f?`parece fora do padrão: falta ${padraoTxt(e)}`:''].filter(Boolean);
 return `<div class="sugp"><span>Sugestão do Prumo: ${esc(p.join(' · '))}.</span><span class="sugb"><button class="lnk" onclick="confirmaSug('${esc(e.id)}')">Confirmar</button><button class="lnk" onclick="ajusteSheet('e:${esc(e.id)}')">Ajustar</button>${f?`<button class="lnk" onclick="ajusteSheet('e:${esc(e.id)}','na')">Não é pedido de pagamento</button>`:''}</span></div>`}
async function confirmaSug(id){const e=D.emails.find(x=>x.id===id);if(!e)return;const quem=pessoa(S.perfil)?.n||quemSou(),m={ajustePor:quem,ajusteEm:new Date().toISOString()};
 if(!chegadaManDe(e)){const v=chegAutoEmail(e);if(v)m.chegadaMan=v}
 if(!padraoManDe(e)&&Array.isArray(e.falta))m.padraoMan=foraAuto(e)?'fora':'ok';
 await patch('emails',id,m,'Sugestão confirmada',`Confirmou a sugestão do Prumo no e-mail "${(e.assunto||'').slice(0,80)}"${m.chegadaMan?` · chegou ${m.chegadaMan==='prazo'?'em dia':'atrasado'}`:''}${m.padraoMan==='fora'?' · fora do padrão':m.padraoMan==='ok'?' · dentro do padrão':''}`)}
function tagChegEmail(e){const cm=chegadaManDe(e);
 if(cm==='na')return '<span class="tag ne" style="font-size:10.5px">Prazo: não se aplica</span>';
 if(cm)return chegadaTag({origem:'email',chegada:cm,chegadaAuto:false,recebidoEm:e.recebido},true);
 return chegadaTag({origem:'email',chegada:e.prazoEnv?chegPorData(e.prazoEnv,e.recebido):(e.chegada||prazoNoTexto(e.assunto+'\n'+(e.trecho||''),e.recebido).st),chegadaAuto:true,prazoEnv:e.prazoEnv,recebidoEm:e.recebido},true)}
function cardEmail(e){const s=e.sug||{},ents=D.entregas.filter(x=>x.dep===e.dep&&!x.recebido).sort((a,b)=>a.prazo<b.prazo?-1:1),ref=D.entregas.find(x=>x.id===s.ref),le=pode('ler_email');
 const sug=s.acao==='entrega'&&ref?`Parece ser a entrega "${esc(ref.item)}"`:s.acao==='chamado'?`Parece um pedido: ${esc(s.tipo&&s.tipo!=='Outros'?s.tipo:'')}${s.tipo&&s.tipo!=='Outros'?' · ':''}${esc(emCat(e)||'Sem assunto')}`:`Categoria: ${esc(emCat(e)||'Sem assunto')}. Escolha o que fazer.`;
 return `<div class="mail"><div class="mh"><div class="t"><b>${esc(e.assunto)} ${chegadaManDe(e)?tagChegEmail(e):''} ${padraoManDe(e)==='fora'?padraoTag(e,true):''}${padraoManDe(e)==='na'?' <span class="tag ne" style="font-size:10.5px">Padrão: não se aplica</span>':''}</b><span>Recebido ${fmtHora(e.recebido)}${e.prazoEnv?` · prazo pedido: ${fmtAno(e.prazoEnv)}`:''}${e.anexos?' · com anexo':''}${e.dep?' · '+esc(depNome(e.dep)):''}</span></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn" onclick="ajusteSheet('e:${esc(e.id)}')" title="Mudar à mão: chegou em dia ou atrasado, dentro do padrão ou não se aplica">Ajustar prazo e padrão</button>${le&&e.msgId?`<button class="btn" onclick="lerEmail('e:${e.id}')">Ler aqui</button>`:''}${le&&e.link?`<a class="btn ghost" href="${esc(e.link)}" target="_blank" rel="noopener">Abrir no Outlook ↗</a>`:''}</div></div>
 ${e.trecho?`<p class="trecho">${esc(e.trecho)}</p>`:''}
 ${sugLinha(e)}${padraoManDe(e)==='fora'?`<div class="banner" style="background:var(--warn-bg);color:var(--warn);margin:6px 0"><span>Fora do padrão do contas a pagar. Falta: ${esc(padraoTxt(e))}.${e.pedidoFaltaEm?` Pedido enviado por ${esc(e.pedidoFaltaPor||'—')} em ${fmtHora(e.pedidoFaltaEm)}.`:''}</span><span style="display:flex;gap:6px;flex-wrap:wrap">${pode('chamados')?`<button class="btn" onclick="pedirFalta('e:${e.id}')">${e.pedidoFaltaEm?'Pedir de novo':'Pedir o que falta'}</button>`:''}<button class="btn" onclick="ajusteSheet('e:${esc(e.id)}','na')">Não é pedido de pagamento</button></span></div>`:!e.padrao&&s.acao==='chamado'&&PAGTO(s.tipo)&&e.msgId&&pode('chamados')?`<button class="lnk" style="font-size:12px" onclick="conferirPadrao('e:${e.id}')">Conferir o padrão do contas a pagar</button>`:''}
 <div class="sug"><span class="tag ${s.conf==='alta'?'ok':s.conf==='media'?'ac':'ne'}">${s.conf==='alta'?'Confiança alta':s.conf==='media'?'Confiança média':'Revisar'}</span><span>${sug}</span>${s.assunto&&assDe(s.assunto)?`<span class="tag ac">Assunto: ${esc(assNome(s.assunto))}</span>`:''}</div>
 <div class="acts2">${pode('chamados')?`<button class="btn ${s.acao!=='entrega'?'pri':''}" onclick="aceitarSheet({email:'${e.id}'})">Aceitar como demanda</button>`:''}
 ${e.dep&&ents.length?`<div class="grp"><select class="inp" id="tr_${e.id}" data-nodraft="1" aria-label="Entrega recebida"><option value="">Qual entrega chegou?</option>${ents.map(x=>`<option value="${esc(x.id)}" ${s.ref===x.id?'selected':''}>${esc(x.item)} · prazo ${fmt(x.prazo)}</option>`).join('')}</select><button class="btn ${s.acao==='entrega'?'pri':''}" onclick="triar('${e.id}','entrega')">Confirmar recebimento</button></div>`:''}
 <button class="btn ghost" onclick="triar('${e.id}','ignorar')">Ignorar</button></div></div>`}
function conversaRem(rid){const le=pode('ler_email'),h=D.emails.filter(e=>remDoEmail(e)===rid&&e.st!=='processando').sort((a,b)=>a.recebido<b.recebido?1:-1).slice(0,25);
 return `<div><span class="lbl">Conversa com este contato · ${h.length?`${h.length} mais recentes`:'nenhum e-mail ainda'}</span>${h.map(e=>`<div class="row"><span class="tag ${e.dir==='enviado'?'ac':'ne'}" style="flex:none">${e.dir==='enviado'?'Enviado':'Recebido'}</span><div class="t"><b style="font-weight:400">${esc(e.assunto)}</b><span>${fmtHora(e.recebido)}${e.dir==='enviado'?' · para '+esc(e.para||e.de):''}${e.st==='triagem'?' · aguardando triagem':e.res?.startsWith('chamado:')?' · virou '+esc(e.res.slice(8)):''}</span></div>${le&&e.msgId?`<button class="btn ghost" onclick="lerEmail('e:${e.id}')">Ler</button>`:''}</div>`).join('')}</div>`}
function editRem(rid){const r=D.remetentes.find(x=>x.id===rid),em=D.emails.find(e=>remDoEmail(e)===rid),v=r||{email:em?.de||'',nome:em?.deNome||'',dep:em?.dep||'',cat:'',ignorar:false};FORM={tipo:'_rem',id:rid};
 const n=D.emails.filter(e=>remDoEmail(e)===rid).length;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Contato · ${n} ${n===1?'e-mail':'e-mails'}</p><h2 id="sheet-title"></h2><p class="sub" style="font-size:13px">Tudo o que vale aqui é aplicado a todos os e-mails desta pessoa, os que estão na triagem e os próximos.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="rm_n">Nome</label><input class="inp" id="rm_n" value="${esc(v.nome||'')}" placeholder="João Silva"></div>
 <div><label class="lbl" for="rm_dep">Setor</label><select class="inp" id="rm_dep"><option value="">Não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===v.dep?'selected':''}>${esc(d.n)}</option>`).join('')}</select></div>
 <div><label class="lbl" for="rm_cat">Assunto padrão</label><select class="inp" id="rm_cat"><option value="">Reconhecer pelo texto</option>${assLista().map(a=>`<option value="${esc(a.id)}" ${a.id===v.cat?'selected':''}>${esc(a.n)}</option>`).join('')}</select></div>
 <label class="perm full"><input type="checkbox" id="rm_ign" ${v.ignorar?'checked':''}><span><b>Ignorar os e-mails desta pessoa</b><small>Eles deixam de aparecer na triagem. Use para propagandas e avisos automáticos.</small></span></label></div>
 ${conversaRem(rid)}
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaRem()">Salvar</button></div></div>`;
 document.getElementById('sheet-title').textContent=v.email||'';document.getElementById('ov').hidden=false}
async function salvaRem(){if(await setRem(FORM.id,{nome:val('rm_n'),dep:val('rm_dep'),cat:val('rm_cat'),ignorar:document.getElementById('rm_ign').checked}))fechar()}
async function setorEscrito(rid,nome){nome=String(nome||'').trim().slice(0,80);if(!nome)return setRem(rid,{dep:''});
 let d=D.departamentos.find(x=>norm(x.n)===norm(nome));
 if(!d){const id='dep_'+norm(nome).replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
  if(!D.departamentos.some(x=>x.id===id)&&!await salvar('departamentos',id,{n:nome,contato:'',canal:'',gestor:'',emails:'',criado:HJ,criadoPor:S.perfil},`Setor "${nome}" criado`,`Criou o setor "${nome}" ao classificar um remetente`))return;d={id}}
 return setRem(rid,{dep:d.id})}
async function setRem(rid,mud){const r=D.remetentes.find(x=>x.id===rid),em=D.emails.find(e=>remDoEmail(e)===rid);
 const {id:_,...base}=r||{email:em?.de||'',nome:em?.deNome||'',dep:'',cat:'',ignorar:false,criado:new Date().toISOString()};const novo={...base,...mud};
 const nome=novo.nome||novo.email;
 if(!await salvar('remetentes',rid,novo,'Remetente atualizado',`Atualizou o remetente ${nome}${mud.dep!==undefined?` · setor ${mud.dep?depNome(mud.dep):'não definido'}`:''}${novo.ignorar&&!base.ignorar?' · passou a ignorar':''}`))return false;
 for(const e of D.emails.filter(e=>remDoEmail(e)===rid&&e.st==='triagem'&&daCaixa(e))){const m={};
  if(mud.dep!==undefined&&e.dep!==novo.dep)m.dep=novo.dep;
  if(mud.cat&&assDe(mud.cat))m.sug={...(e.sug||{}),assunto:mud.cat};
  if(novo.ignorar)Object.assign(m,{st:'ignorado',triadoPor:ME.uid||null,triadoEm:new Date().toISOString()});
  if(Object.keys(m).length)await patch('emails',e.id,m,null,false)}
 if(mud.dep)for(const c of D.chamados.filter(c=>c.rem===rid&&!c.dep))await patch('chamados',c.id,{dep:mud.dep},null,false);
 return true}

const ERR_CONECTAR=['needs_reauth','server_not_connected','not_in_manifest','approval_required','sem_mcp'];
function statusSync(ac=''){
 if(!MCP)return `<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>${esc(msgErro({code:'sem_mcp'}))}</span>${ac}</div>`;
 if(S.syncErr)return `<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${esc(msgErro(S.syncErr))}</span>${ERR_CONECTAR.includes(S.syncErr?.code)?`<button class="btn pri" onclick="conectarEmail()">Conectar e-mail</button>`:`<button class="btn" onclick="sincronizar(true)">Tentar de novo</button>`}${ac}</div>`;
 return `<div class="banner"><span>${S.msEq?.equipe?`Conectado para a equipe por ${esc(S.msEq.equipe.email||'—')} · renova sozinho · `:''}${SYNC.ultima?`Última verificação ${fmtHora(SYNC.ultima)} · ${SYNC.lidos||0} e-mails lidos · ${SYNC.novos||0} para triagem · ${SYNC.env||0} enviados · ${SYNC.auto||0} automáticos`:'Nenhuma verificação ainda. Clique em Conectar e-mail e depois em Verificar agora.'} · ${CFG.emailModo==='auto'?'modo automático':'modo com triagem'} · ${CFG.caixa||CFG.caixaPasta?(CFG.caixaPasta&&!PASTAS_FIXAS[CFG.caixaPasta.toLowerCase()]?'pasta compartilhada':'caixa')+(CFG.caixa?' '+esc(CFG.caixa):''):'sua caixa de entrada'} · ${lerTodos()?(lerEnviados()?'recebidos e enviados, agrupados por contato':'recebidos, agrupados por remetente'):'só e-mails dos departamentos'}</span>${ac}</div>`}
function cfgEmail(){FORM={tipo:'_cfgmail'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Integração com o Outlook</p><h2 id="sheet-title">Configurar leitura de e-mails</h2><p class="sub" style="font-size:13px">Cada pessoa lê com a própria conta Microsoft, então só vê o que já tem permissão de ver no Outlook.</p></div>
 <div class="fgrid">
  <div class="full"><label class="lbl" for="g_modo">O que fazer com os e-mails</label><select class="inp" id="g_modo"><option value="triagem" ${CFG.emailModo!=='auto'?'selected':''}>Mandar tudo para a triagem (recomendado no início)</option><option value="auto" ${CFG.emailModo==='auto'?'selected':''}>Registrar sozinho quando a confiança for alta</option></select></div>
  <div class="full"><label class="lbl" for="g_todos">Quais e-mails ler</label><select class="inp" id="g_todos"><option value="todos" ${lerTodos()?'selected':''}>Todos os e-mails da caixa de entrada, agrupados por remetente</option><option value="dep" ${lerTodos()?'':'selected'}>Só os e-mails cadastrados nos departamentos</option></select></div>
  <label class="perm full"><input type="checkbox" id="g_env" ${CFG.emailEnviados!==false?'checked':''}><span><b>Ler também os e-mails enviados</b><small>As respostas de vocês entram na conversa de cada contato. Não vão para a triagem.</small></span></label>
  <div class="full"><label class="lbl" for="g_caixa">Caixa ou pasta compartilhada · link ou e-mail · opcional</label><input class="inp" id="g_caixa" type="text" autocomplete="off" spellcheck="false" placeholder="https://outlook.office.com/mail/financeiro@empresa.com.br/inbox  ou  financeiro@empresa.com.br" value="${esc(CFG.caixaLink||CFG.caixa||'')}" oninput="mostraCaixa()"><p class="ferr" id="ge_caixa"></p><p class="meta" id="g_caixa_info" style="margin:4px 0 0">${caixaInfo(CFG.caixaLink||CFG.caixa||'')}</p></div>
  <div><label class="lbl" for="g_desde">Buscar e-mails a partir de</label><input class="inp" id="g_desde" type="date" value="${esc(CFG.emailDesde||isoD(new Date(Date.now()-14*864e5)))}"><p class="meta" style="margin:4px 0 0">Ao mudar, a próxima verificação busca a partir desta data e a revisão mostra só daqui em diante. Nada é apagado e os e-mails que viraram chamado continuam.</p></div>
  <div><label class="lbl" for="g_int">Verificar a cada (minutos)</label><input class="inp" id="g_int" type="number" min="5" max="240" value="${+CFG.emailIntervalo||15}"><p class="ferr" id="ge_int"></p></div></div>
 ${note('A verificação automática roda enquanto alguém com a permissão E-mails recebidos estiver com o portal aberto.')}
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfgEmail()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
// Lê o link de uma caixa ou pasta do Outlook (ou só o endereço) e separa o e-mail e a pasta.
const PASTAS_FIXAS={inbox:'Caixa de entrada',sentitems:'Itens enviados',archive:'Arquivo morto',drafts:'Rascunhos',deleteditems:'Itens excluídos',junkemail:'Lixo eletrônico'};
const PASTAS_ALIAS={inbox:'inbox',caixadeentrada:'inbox',sentitems:'sentitems',sent:'sentitems',enviados:'sentitems',archive:'archive',drafts:'drafts',deleteditems:'deleteditems',junkemail:'junkemail'};
function lerCaixa(v){v=String(v||'').trim();if(!v)return {};
 let t=v;try{t=decodeURIComponent(v)}catch(e){}
 const email=((t.match(/[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)||[])[0]||'').toLowerCase();
 const lk=(v.match(/https?:\/\/\S+/i)||[])[0];if(!lk)return {email};
 let partes=[];try{const u=new URL(lk);partes=u.pathname.split('/').concat((u.searchParams.get('path')||'').split('/'),(u.hash||'').replace(/^#/,'').split('/'))}catch(e){}
 partes=partes.map(x=>{try{return decodeURIComponent(x)}catch(e){return x}}).filter(Boolean);
 let pasta='';for(let i=0;i<partes.length;i++){const x=partes[i],k=x.toLowerCase().replace(/[\s_-]/g,'');
  if(partes[i-1]&&/^(id|deeplink|readconv)$/i.test(partes[i-1]))continue; // id de uma mensagem, não de pasta
  if(PASTAS_ALIAS[k]){pasta=PASTAS_ALIAS[k];continue}
  if(/^(AAMk|AQMk|AAAA)[A-Za-z0-9+/=_-]{20,}$/.test(x))pasta=x}
 return {email,pasta}}
function caixaInfo(v){if(!String(v||'').trim())return 'Em branco, o portal lê a caixa de entrada de quem clicar em Verificar agora.';
 const c=lerCaixa(v);if(!c.email&&!c.pasta)return '<span style="color:var(--bad)">Não reconheci esse link.</span>';
 const nomeP=c.pasta?(PASTAS_FIXAS[c.pasta]||'pasta escolhida no link'):'Caixa de entrada';
 return `Vai ler: <b>${esc(nomeP)}</b>${c.email?` da caixa <b>${esc(c.email)}</b>`:' da sua própria caixa'}. Quem clicar em Verificar agora precisa ter permissão nessa pasta no Outlook.`}
function mostraCaixa(){const el=document.getElementById('g_caixa_info');if(el)el.innerHTML=caixaInfo(document.getElementById('g_caixa')?.value)}
async function salvaCfgEmail(){const bruto=(document.getElementById('g_caixa')?.value||'').trim(),cx=lerCaixa(bruto),caixa=cx.email,it=+val('g_int');errEl('ge_caixa','');errEl('ge_int','');
 if(bruto&&!cx.email&&!cx.pasta){errEl('ge_caixa','Não encontrei um e-mail nem uma pasta nesse link. Cole o link da pasta no Outlook na web ou o endereço da caixa.');return}
 if(!(it>=5&&it<=240)){errEl('ge_int','Use um valor entre 5 e 240.');return}
 try{await DB.doc('config/estrutura').set({...CFG,emailModo:val('g_modo'),emailTodos:val('g_todos')!=='dep',emailEnviados:!!document.getElementById('g_env')?.checked,caixa,caixaLink:/https?:/i.test(bruto)?bruto:'',caixaPasta:cx.pasta||'',emailDesde:val('g_desde'),emailIntervalo:it});log(`Alterou a integração de e-mail para o modo ${val('g_modo')==='auto'?'automático':'com triagem'}`);toast(val('g_desde')&&val('g_desde')!==(SYNC.desde||'')?`Salvo. Na próxima verificação, o Prumo busca a partir de ${fmt(val('g_desde'))}. Nada é apagado.`:'Configuração salva');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar essa configuração.':'Não foi possível salvar.')}}
function contAberto(){if(S.contAb===undefined){try{S.contAb=localStorage.getItem('contAberto')==='1'}catch(e){S.contAb=false}}return S.contAb}
function tgContatos(){S.contAb=!contAberto();try{localStorage.setItem('contAberto',S.contAb?'1':'0')}catch(e){}render()}
function iniciarAutoSync(){
 // Conexão da equipe: se alguém conectou, todo mundo com a permissão E-mails recebidos busca sozinho, sem conectar.
 const status=async()=>{if(!real()||!pode('email')||!window.portalMsStatus)return;const j=await window.portalMsStatus();if(j){const mud=JSON.stringify(j)!==JSON.stringify(S.msEq);S.msEq=j;if(mud&&['chamados','triagem'].includes(S.tela))render()}};
 window.addEventListener('prumo-ms-equipe',()=>{status();toast('E-mail conectado para a equipe toda. Ele se renova sozinho.')});
 const tick=()=>{if(!real()||S.sim||!pode('email')||!MCP||S.sync)return;let ok=!!S.msEq?.equipe;try{ok=ok||localStorage.getItem('autoSync_'+ME.uid)==='1'}catch(e){}if(!ok)return;const last=SYNC.ultima?Date.parse(SYNC.ultima):0;if(Date.now()-last>(+CFG.emailIntervalo||15)*6e4)sincronizar(false)};
 setTimeout(status,3000);setInterval(status,10*6e4);setTimeout(tick,8000);setInterval(tick,60000);setTimeout(resumoTick,15000);setInterval(resumoTick,60000);setTimeout(avisoTick,20000);setInterval(avisoTick,60000)}

/* ---------- ferramentas ---------- */
const okUrl=u=>/^https?:\/\/\S+$/i.test(u||'');
const hostDe=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}};
function catAberta(){if(S.cats)return S.cats;try{S.cats=JSON.parse(localStorage.getItem('cats')||'{}')}catch(e){S.cats={}}return S.cats}
function tgCat(id){const c=catAberta();c[id]=!c[id];try{localStorage.setItem('cats',JSON.stringify(c))}catch(e){}render()}
function novaFer(cat){S.novaCat=cat;abrir('ferramenta');S.novaCat=''}
function linFer(f,pf){return `<div class="row"><span class="favi">${esc((f.n||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(f.n)}</b><span>${esc(f.desc||hostDe(f.url))}</span></div>${okUrl(f.url)?`<a class="btn" href="${esc(f.url)}" target="_blank" rel="noopener">Abrir em nova aba ↗</a>`:'<span class="meta">Link inválido</span>'}${pf?editar('ferramenta',f.id):''}</div>`}

/* ---------- backup ---------- */
let DL=null;
const MOTIVO={diario:'Automático diário',manual:'Criado manualmente',antes:'Antes de uma restauração'};
function montarBackup(){const dados={};COLS.forEach(c=>dados[c]=D[c].filter(x=>x.st!=='processando').map(x=>({...x})));
 return {sistema:'Prumo',formato:1,criado:new Date().toISOString(),por:ME.uid||null,config:{...CFG},dados,logs:D.logs.slice(0,300)}}
const contar=b=>Object.values(b.dados||{}).reduce((a,l)=>a+(l?.length||0),0);
async function criarPonto(motivo){
 const b=montarBackup(),txt=JSON.stringify(b),id=motivo==='diario'?'d-'+HJ:(motivo==='antes'?'a-':'m-')+Date.now();
 const partes=[];for(let i=0;i<txt.length;i+=80000)partes.push(txt.slice(i,i+80000));
 for(let i=0;i<partes.length;i++)await DB.doc(`backups/${id}/partes/p${i}`).set({i,t:partes[i]});
 await DB.doc('backups/'+id).set({criado:b.criado,motivo,partes:partes.length,tamanho:txt.length,registros:contar(b),por:ME.uid||null,enviado:''});
 await podarBackups();return id}
const bkDias=()=>Math.max(1,+CFG.bkDias||7);
async function podarBackups(){const limite=new Date(Date.now()-bkDias()*864e5).toISOString(),ult=[...D.backups].sort((x,y)=>(y.criado||'').localeCompare(x.criado||''))[0];
 for(const b of D.backups.filter(x=>x.criado<limite&&x!==ult)){try{for(let i=0;i<(b.partes||0);i++)await DB.doc(`backups/${b.id}/partes/p${i}`).delete();await DB.doc('backups/'+b.id).delete()}catch(e){}}}
async function lerPonto(id){const m=D.backups.find(x=>x.id===id);let t='';for(let i=0;i<(m?.partes||0);i++){const s=await DB.doc(`backups/${id}/partes/p${i}`).get();if(!s.exists)throw new Error('parte ausente');t+=s.data().t}return JSON.parse(t)}
async function backupAgora(){if(!DB)return toast('O armazenamento não está disponível nesta visualização.');if(S.bk)return;S.bk=true;toast('Criando ponto de restauração…');
 try{await criarPonto('manual');log('Criou um ponto de restauração manual');toast('Ponto de restauração criado')}catch(e){toast(e?.code==='invalid_argument'?'Só administradores podem criar backups.':'Não foi possível criar o backup.')}finally{S.bk=false}}
async function baixarBackup(id){
 if(!DL){toast('O download não está disponível nesta visualização.');return}
 try{const b=id?await lerPonto(id):montarBackup();const nome=`backup-prumo-${(b.criado||'').slice(0,10)||HJ}.json`;
  await DL.save({filename:nome,data:JSON.stringify(b,null,1)});log(`Baixou o backup de ${fmtHora(b.criado)}`)}
 catch(e){if(e?.code==='declined')return;toast(e?.code==='rate_limited'?'Já existe um download aguardando confirmação.':'Não foi possível gerar o arquivo.')}}
async function enviarBackupEmail(manual){
 if(!CFG.bkEmail){if(manual)toast('Defina o e-mail de backup primeiro.');return false}
 if(!MCP){if(manual)toast(msgErro({code:'sem_mcp'}));return false}
 const b=montarBackup(),txt=JSON.stringify(b);
 const corpo=`<p>Backup do Prumo gerado em ${fmtHora(b.criado)}/${b.criado.slice(0,4)}.</p><p>${contar(b)} registros em ${Object.keys(b.dados).length} áreas do sistema.</p>`+(txt.length<420000?`<p>Para restaurar, copie todo o conteúdo abaixo para um arquivo com extensão .json e use Restaurar de arquivo na tela Backup do Prumo.</p><pre>${txt.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>`:'<p>O backup ficou grande demais para o corpo do e-mail. Baixe o arquivo pela tela Backup do portal.</p>');
 try{await MCP.callTool(SRV,'outlook_send_mail',{to:[CFG.bkEmail],subject:`Backup do Prumo · ${fmt(HJ)}/${HJ.slice(0,4)}`,bodyType:'html',body:corpo},{cache:false});
  const d=D.backups.find(x=>x.id==='d-'+HJ);if(d)await DB.doc('backups/'+d.id).update({enviado:new Date().toISOString()}).catch(()=>{});
  log(`Enviou o backup para o e-mail de backup`);if(manual)toast('Backup enviado por e-mail');return true}
 catch(e){S.bkErr=e;if(manual)toast(msgErro(e));render();return false}}
async function backupDiario(){
 if(!real()||!ME.admin||S.sim||!DB||CFG.bkAuto===false||S.bk)return;
 if(!S.bkCarregado)return;
 let d=D.backups.find(x=>x.id==='d-'+HJ);
 if(!d){try{const l=await DB.doc('sync/bklock').acquire({holder:ME.uid,ttlMs:120000});if(!l.acquired)return}catch(e){}
  S.bk=true;try{await criarPonto('diario');log('Backup automático diário criado')}catch(e){S.bkErr=e}finally{S.bk=false}d=D.backups.find(x=>x.id==='d-'+HJ)}
 if(CFG.bkEnviar&&CFG.bkEmail&&MCP&&!(d&&d.enviado)&&!S.bkEnviando){S.bkEnviando=true;await enviarBackupEmail(false);S.bkEnviando=false}}
function cfgBackup(){FORM={tipo:'_cfgbk'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Backup</p><h2 id="sheet-title">Configurar backup</h2><p class="sub" style="font-size:13px">O portal guarda uma cópia completa por dia e pode enviá-la ao e-mail dedicado.</p></div>
 <div class="fgrid">
  <label class="perm full"><input type="checkbox" id="b_auto" ${CFG.bkAuto!==false?'checked':''}><span><b>Backup automático diário</b><small>Feito pelo servidor todo dia às 6h, mesmo sem ninguém abrir o portal.</small></span></label>
  <div><label class="lbl" for="b_reter">Guardar por (dias)</label><input class="inp" id="b_reter" type="number" min="1" max="365" value="${bkDias()}"><p class="meta" style="margin:4px 0 0">Depois disso o backup é apagado. O mais recente sempre fica.</p><p class="ferr" id="be_reter"></p></div>
  <div class="full"><label class="lbl" for="b_email">E-mail dedicado ao backup · opcional</label><input class="inp" id="b_email" type="email" placeholder="backup.financeiro@empresa.com.br" value="${esc(CFG.bkEmail||'')}"><p class="ferr" id="be_email"></p></div>
  <label class="perm full"><input type="checkbox" id="b_enviar" ${CFG.bkEnviar?'checked':''}><span><b>Enviar o backup diário para esse e-mail</b><small>Sai pelo Outlook do administrador que fizer o backup do dia.</small></span></label></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfgBk()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaCfgBk(){const em=val('b_email').toLowerCase(),r=+val('b_reter'),env=document.getElementById('b_enviar').checked;errEl('be_email','');errEl('be_reter','');
 if(em&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){errEl('be_email','Confira o endereço.');return}
 if(env&&!em){errEl('be_email','Informe o e-mail para ligar o envio.');return}
 if(!(r>=1&&r<=365)){errEl('be_reter','Use um valor entre 1 e 365.');return}
 try{await DB.doc('config/estrutura').set({...CFG,bkAuto:document.getElementById('b_auto').checked,bkDias:r,bkEmail:em,bkEnviar:env});log(`Alterou a configuração de backup${em?' e o e-mail de backup':''}`);toast('Configuração salva');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só administradores podem mudar o backup.':'Não foi possível salvar.')}}
function arquivoBackup(inp){const f=inp.files?.[0];inp.value='';if(!f)return;const rd=new FileReader();
 rd.onload=()=>{try{const b=JSON.parse(rd.result);if(!['Prumo','Portal de Gestão Contábil'].includes(b.sistema)||!b.dados)throw 0;confirmarRestauro(b,'arquivo '+f.name)}catch(e){toast('Esse arquivo não é um backup válido do portal.')}};rd.readAsText(f)}
async function restaurarPonto(id){try{toast('Lendo o backup…');confirmarRestauro(await lerPonto(id),'ponto de '+fmtHora(D.backups.find(x=>x.id===id)?.criado))}catch(e){toast('Não foi possível ler esse ponto de restauração.')}}
function confirmarRestauro(b,origem){FORM={tipo:'_rest',b,ok:false};
 const linhas=Object.entries(b.dados).filter(([c])=>COLS.includes(c)).map(([c,l])=>`<div class="row"><div class="t"><b style="font-weight:400">${esc(NOMES[c]||c)}</b></div><span class="meta">${l.length} no backup · ${D[c].length} hoje</span></div>`).join('');
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Restaurar · ${esc(origem)}</p><h2 id="sheet-title">Voltar o sistema para ${fmtHora(b.criado)}/${(b.criado||'').slice(0,4)}</h2><p class="sub" style="font-size:13px">Antes de restaurar, o portal cria um ponto com o estado atual. O registro de atividades não é apagado.</p></div>
 <div>${linhas}</div>
 <label class="perm"><input type="checkbox" id="r_rem"><span><b>Remover registros criados depois do backup</b><small>Deixe desmarcado para só recuperar o que foi apagado ou alterado.</small></span></label>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn danger" id="r_btn" onclick="restaurar()">Restaurar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function restaurar(){const btn=document.getElementById('r_btn');if(!FORM.ok){FORM.ok=true;btn.textContent='Confirmar restauração';return}
 const b=FORM.b,rem=document.getElementById('r_rem').checked;btn.disabled=true;btn.textContent='Restaurando…';
 try{await criarPonto('antes');let n=0;
  for(const [c,l] of Object.entries(b.dados)){if(!COLS.includes(c)||!Array.isArray(l))continue;const ids=new Set();
   for(const x of l){if(!x||!x.id)continue;const {id,...r}=x;ids.add(id);await DB.collection(c).doc(id).set(r);n++}
   if(rem)for(const x of D[c].filter(y=>!ids.has(y.id)))await DB.collection(c).doc(x.id).delete()}
  if(b.config)await DB.doc('config/estrutura').set(b.config);
  log(`Restaurou o sistema para o backup de ${fmtHora(b.criado)} (${n} registros${rem?', removendo os posteriores':''})`);toast('Sistema restaurado');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só administradores podem restaurar.':'A restauração parou no meio. Use o ponto "Antes de uma restauração" para voltar.');btn.disabled=false}}

const fbPode=()=>dir()&&(real()?ME.admin:true);
const colabs=()=>D.equipe.filter(p=>p.ativo!==false&&p.categ!=='geral').sort((a,b)=>(a.n||'').localeCompare(b.n||''));
const gerais=()=>D.equipe.filter(p=>p.ativo!==false&&p.categ==='geral');
const inativos=()=>D.equipe.filter(p=>p.ativo===false);
const tratDe=p=>p?.trat||(p?.n?p.n.charAt(0).toUpperCase()+p.n.slice(1).toLowerCase():'');
const fbsDe=pid=>D.feedbacks.filter(f=>f.pessoa===pid).sort((a,b)=>(b.data||'')<(a.data||'')?-1:(b.data||'')>(a.data||'')?1:0);
const triStr=t=>`${t.ano}-T${t.q}`;const triParse=s=>{const m=String(s||'').match(/^(\d{4})-T([1-4])$/);return m?{ano:+m[1],q:+m[2]}:null};
const triAnt=(t,n=1)=>{let {ano,q}=t;q-=n;while(q<1){q+=4;ano--}return {ano,q}};
const mesesTxt=t=>{const l=mesesTri(t).map(m=>MESES[+m.slice(5)-1]);return `${l[0]}, ${l[1]} e ${l[2]}`};
function periodoTxt(f){const t=triParse(f.tri);if(f.tipo==='Trimestral'&&t)return `${t.q}º trimestre de ${t.ano} (${mesesTxt(t)})`;return mesNome(f.mes||(f.data||HJ).slice(0,7))}
const periodoCurto=f=>{const t=triParse(f.tri);if(f.tipo==='Trimestral'&&t)return `${t.q}º tri/${String(t.ano).slice(2)}`;if(f.tipo==='Mensal')return mesCurto(f.mes||(f.data||HJ).slice(0,7));return fmt(f.data)};
function subst(txt,f){const p=pessoa(f.pessoa),t=triParse(f.tri)||triDe((f.data||HJ).slice(0,7)),m=f.mes||(f.data||HJ).slice(0,7);
 return String(txt||'').replace(/\{nome\}/g,tratDe(p)).replace(/\{periodo\}/g,periodoTxt(f)).replace(/\{mes\}/g,MESES[+m.slice(5)-1]).replace(/\{ano\}/g,f.tipo==='Trimestral'?t.ano:m.slice(0,4)).replace(/\{trimestre\}/g,`${t.q}º trimestre`).replace(/\{meses_trimestre\}/g,mesesTxt(t))}
function autoTitulo(f){const p=pessoa(f.pessoa),n=(p?.n||'').toUpperCase(),t=triParse(f.tri);
 const suf=f.tipo==='Mensal'?MESES[+(f.mes||f.data||HJ).slice(5,7)-1].toUpperCase():f.tipo==='Trimestral'&&t?`${t.q}º TRIMESTRE ${t.ano}`:fmt(f.data);
 return `FEEDBACK ${String(f.tipo||'').toUpperCase()} - ${n} (${suf})`}
function md(t){const L=String(t||'').split('\n');let h='',lst=null;const close=()=>{if(lst){h+=`</${lst}>`;lst=null}};
 const inl=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
 for(const raw of L){const l=raw.replace(/\s+$/,'');let m;
  if(/^\s*-{3,}\s*$/.test(l)){close();h+='<hr>';continue}
  if((m=l.match(/^\s*###\s+(.*)/))){close();h+=`<h3>${inl(m[1])}</h3>`;continue}
  if((m=l.match(/^\s*[-•]\s+(.*)/))){if(lst!=='ul'){close();h+='<ul>';lst='ul'}h+=`<li>${inl(m[1])}</li>`;continue}
  if((m=l.match(/^\s*\d+[.)]\s+(.*)/))){if(lst!=='ol'){close();h+='<ol>';lst='ol'}h+=`<li>${inl(m[1])}</li>`;continue}
  close();if(l.trim())h+=`<p>${inl(l)}</p>`}
 close();return h}
const mdTexto=t=>String(t||'').replace(/\*\*(.+?)\*\*/g,'$1').replace(/^\s*###\s+/gm,'').replace(/^\s*-{3,}\s*$/gm,'────────');
const emailOk=x=>/^[^@\s,;]+@[^@\s,;]+\.[^@\s,;]+$/.test(x);
const listaEnd=s=>String(s||'').split(/[,;\s]+/).map(x=>x.trim()).filter(Boolean);
/* o feedback mensal só é cobrado se a pessoa teve algo com data prevista no mês (rotina do cronograma ou tarefa) */
let _fdC=null,_fdT=null,_fdF='',_fdM=new Map();
function fbDevido(pid,m){if(_fdC!==D.cronograma||_fdT!==D.tarefas||_fdF!==(CFG.feriados||'')){_fdC=D.cronograma;_fdT=D.tarefas;_fdF=CFG.feriados||'';_fdM=new Map()}
 const k=pid+'|'+m;if(_fdM.has(k))return _fdM.get(k);
 const ini=m+'-01',ult=isoD(new Date(+m.slice(0,4),+m.slice(5,7),0)),fim=ult<HJ?ult:HJ;let v=D.tarefas.some(t=>t.r===pid&&t.prazo&&t.prazo>=ini&&t.prazo<=ult);
 if(!v&&ini<=fim){const rs=D.cronograma.filter(r=>rsDe(r).includes(pid));if(rs.length)for(const d of diasDe(ini,fim))if(rs.some(r=>ocorre(r,d))){v=true;break}}
 _fdM.set(k,v);return v}
function seloMes(pid,m){const f=D.feedbacks.find(x=>x.pessoa===pid&&x.tipo==='Mensal'&&x.mes===m&&!x.arquivado)||D.feedbacks.find(x=>x.pessoa===pid&&x.tipo==='Mensal'&&x.mes===m);return f?(f.enviado?['ok','✓','Enviado',f]:['wa','●','Registrado, não enviado',f]):fbDevido(pid,m)?['ne','+','Pendente',null]:['nd','–','Nada previsto no mês, sem feedback obrigatório',null]}
function seloTri(pid,t){const s=triStr(t),f=D.feedbacks.find(x=>x.pessoa===pid&&x.tipo==='Trimestral'&&x.tri===s);return f?(f.enviado?['ok','✓','Enviado',f]:['wa','●','Registrado, não enviado',f]):['ne','+','Ainda não existe',null]}
async function copiar(html,txt){try{if(html&&window.ClipboardItem&&navigator.clipboard?.write){await navigator.clipboard.write([new ClipboardItem({'text/html':new Blob([html],{type:'text/html'}),'text/plain':new Blob([txt],{type:'text/plain'})})])}else await navigator.clipboard.writeText(txt);toast('Copiado')}catch(e){mostrarCopia(txt)}}
function mostrarCopia(txt){FORM={tipo:'_copia'};document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Copiar</p><h2 id="sheet-title">Copie o texto abaixo</h2><p class="sub" style="font-size:13px">O navegador não deixou copiar sozinho. Selecione e copie com Ctrl+C.</p></div><textarea class="inp" id="cp_txt" style="min-height:320px">${esc(txt)}</textarea><div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;document.getElementById('ov').hidden=false;setTimeout(()=>{const t=document.getElementById('cp_txt');t.focus();t.select()},30)}

/* estado de navegação do módulo */
function fbIr(tela,extra){if(!sairEditorOk(()=>fbIr(tela,extra)))return;Object.assign(S,extra||{});S.tela=tela;S.fbForce=true;render();window.scrollTo({top:0})}
function sairEditorOk(cont){if(S.tela==='fbedit'&&S.fbEd?.dirty){FORM={tipo:'_sair',cont};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Feedback</p><h2 id="sheet-title">Sair sem salvar?</h2><p class="sub" style="font-size:13px">O que você escreveu neste feedback ainda não foi salvo.</p></div><div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Continuar editando</button><button class="btn danger" onclick="const c=FORM.cont;limparRascunho(chaveMain());S.fbEd.dirty=false;fechar();c()">Sair sem salvar</button></div></div>`;
 document.getElementById('ov').hidden=false;return false}return true}
window.addEventListener('beforeunload',e=>{if(S.tela==='fbedit'&&S.fbEd?.dirty){e.preventDefault();e.returnValue=''}});

/* editor */
function fbNovo(pre){if(!sairEditorOk(()=>fbNovo(pre)))return;const p=pre||{};const tipo=p.tipo||'Mensal';
 const mes=p.mes||(tipo==='Mensal'?addMes(MES_ATUAL,-1):MES_ATUAL),tri=p.tri||triStr(triAnt(triDe(MES_ATUAL)));
 S.fbEd={id:null,pessoa:p.pessoa||'',data:HJ,tipo,tom:p.tom||'mix',mes,tri,titulo:'',assunto:p.assunto||'',texto:p.texto||'',base:p.base||'',obsUsadas:[],aba:'ant',prev:false,dirty:false,conf:null,lendo:{},trocarAssunto:true};
 S.tela='fbedit';S.fbForce=true;render();window.scrollTo({top:0})}
function fbEditar(id){const f=D.feedbacks.find(x=>x.id===id);if(!f)return;S.fbEd={id,pessoa:f.pessoa,data:f.data,tipo:f.tipo,tom:f.tom,mes:f.mes||'',tri:f.tri||'',titulo:f.titulo||'',assunto:f.assunto||'',texto:f.texto||'',base:'',obsUsadas:[],aba:'ant',prev:false,dirty:false,conf:null,lendo:{},trocarAssunto:true};S.tela='fbedit';S.fbForce=true;render();window.scrollTo({top:0})}
function fbBase(id){const f=D.feedbacks.find(x=>x.id===id);if(!f)return;fbNovo({pessoa:f.pessoa,tipo:f.tipo,tom:f.tom,assunto:f.assunto,texto:f.texto,base:`Texto baseado em "${f.titulo}" (${fmt(f.data)}/${(f.data||'').slice(0,4)}). Revise antes de salvar.`})}
function fbSet(k,v,re){const e=S.fbEd;e[k]=v;e.dirty=true;if(k==='pessoa'){e.lendo={};re=true}if(re){S.fbForce=true;render()}else{const sd=document.getElementById('fbside');if(sd&&(k==='pessoa'||k==='tipo'))sd.innerHTML=fbSide()}}
function fbTxt(el){S.fbEd.texto=el.value;S.fbEd.dirty=true}
function fbIns(txt){const e=S.fbEd,ta=document.getElementById('fb_txt');if(e.prev){e.prev=false;S.fbForce=true;render()}const t2=document.getElementById('fb_txt');
 const a=t2?t2.selectionStart:e.texto.length,b=t2?t2.selectionEnd:a,pre=e.texto.slice(0,a),pos=e.texto.slice(b),sep=pre&&!pre.endsWith('\n')?'\n':'',fim=pos&&!txt.endsWith('\n')?'\n':'';
 e.texto=pre+sep+txt+fim+pos;e.dirty=true;if(t2){t2.value=e.texto;const c=(pre+sep+txt).length;t2.focus();t2.setSelectionRange(c,c)}}
function fbFmt(k){const ta=document.getElementById('fb_txt');if(!ta)return;const e=S.fbEd,a=ta.selectionStart,b=ta.selectionEnd,v=e.texto,sel=v.slice(a,b);let novo,ca,cb;
 if(k==='b'){novo=v.slice(0,a)+'**'+(sel||'texto')+'**'+v.slice(b);ca=a+2;cb=ca+(sel||'texto').length}
 else if(k==='hr'){const ins=(a&&v[a-1]!=='\n'?'\n':'')+'---\n';novo=v.slice(0,a)+ins+v.slice(b);ca=cb=a+ins.length}
 else{const ls=v.lastIndexOf('\n',a-1)+1,le=b>a&&v[b-1]==='\n'?b-1:(v.indexOf('\n',b)<0?v.length:v.indexOf('\n',b));const bloco=v.slice(ls,le).split('\n');
  const out=bloco.map((l,i)=>k==='h'?'### '+l.replace(/^#+\s*/,''):k==='ul'?'- '+l.replace(/^\s*[-•]\s+/,''):`${i+1}. `+l.replace(/^\s*\d+[.)]\s+/,'')).join('\n');novo=v.slice(0,ls)+out+v.slice(le);ca=ls;cb=ls+out.length}
 e.texto=novo;e.dirty=true;ta.value=novo;ta.focus();ta.setSelectionRange(ca,cb)}
function fbPrev(){S.fbEd.prev=!S.fbEd.prev;S.fbForce=true;render()}
function ultimoFb(e){return fbsDe(e.pessoa).find(f=>f.id!==e.id)}
function planoDe(txt){const L=String(txt||'').split('\n'),out=[];let on=false;
 for(const l of L){const head=/^\s*###/.test(l)||/^\s*\*\*[^*]+\*\*\s*:?\s*$/.test(l)||/^\s*[^-•\d\s][^:]{0,70}:\s*$/.test(l);
  if(head){on=/direcionamento|plano de a[cç][aã]o|pr[oó]ximos passos|pontos de desenvolvimento/i.test(l);continue}
  if(on){const m=l.match(/^\s*(?:[-•]|\d+[.)])\s+(.*)/);if(m)out.push(m[1].replace(/\s*—\s*\*\*Status:\*\*.*$/,'').trim())}}
 return out.filter(Boolean)}
function fbPlano(){const u=ultimoFb(S.fbEd);if(!u){toast('Ainda não há feedback anterior.');return}const it=planoDe(u.texto);if(!it.length){toast('O último feedback não tem uma seção de plano de ação, direcionamentos ou próximos passos.');return}
 fbIns(`### Acompanhamento do plano de ação\n${it.map(i=>`- ${i} — **Status:** `).join('\n')}\n`);toast(`${it.length} itens do plano inseridos`)}
function obsNovas(e){const u=ultimoFb(e);return D.observacoes.filter(o=>o.pessoa===e.pessoa&&!o.usadoEm&&!e.obsUsadas.includes(o.id)&&(!u||(o.data||'')>=(u.data||''))).sort((a,b)=>a.data<b.data?-1:1)}
function fbInsObs(){const e=S.fbEd,sel=obsNovas(e).filter(o=>document.getElementById('ok_'+o.id)?.checked);if(!sel.length){toast('Marque pelo menos uma observação.');return}
 const g=k=>sel.filter(o=>o.tipo===k).map(o=>`- ${o.texto}`).join('\n');let t='';
 if(g('pos'))t+=`### Evoluções observadas\n${g('pos')}\n`;if(g('aten'))t+=`### Pontos que ainda precisam de atenção\n${g('aten')}\n`;if(g('neu'))t+=`### Outras observações\n${g('neu')}\n`;
 fbIns(t);e.obsUsadas.push(...sel.map(o=>o.id));document.getElementById('fbside').innerHTML=fbSide()}
function fbLer(id){S.fbEd.lendo[id]=!S.fbEd.lendo[id];document.getElementById('fbside').innerHTML=fbSide()}
function fbConf(acao,id){S.fbEd.conf={acao,id};document.getElementById('fbside').innerHTML=fbSide()}
function fbConfOk(){const e=S.fbEd,c=e.conf;e.conf=null;
 if(c.acao==='base'){const f=D.feedbacks.find(x=>x.id===c.id);e.texto=f.texto||'';e.tom=f.tom;e.assunto=e.assunto||f.assunto||'';e.base=`Texto baseado em "${f.titulo}". Revise antes de salvar.`}
 if(c.acao==='modelo'){const m=D.modelos.find(x=>x.id===c.id);e.texto=m.texto||'';if(m.tom&&m.tom!=='qualquer')e.tom=m.tom;if(document.getElementById('tm_ass')?.checked!==false&&m.assunto)e.assunto=m.assunto}
 e.dirty=true;S.fbForce=true;render()}
function fbAba(k){S.fbEd.aba=k;const sd=document.getElementById('fbside');if(sd){sd.innerHTML=fbSide();const b=sd.querySelector('.sidebody');if(b)b.scrollTop=0}}
function fbSide(){const e=S.fbEd,ab=e.aba;
 const tabs=`<div class="tabs">${ab!=='ant'?`<button class="voltar" title="Voltar para Anteriores" aria-label="Voltar" onclick="fbAba('ant')">‹ Voltar</button>`:''}${[['ant','Anteriores'],['mod','Modelos'],['fra','Frases']].map(([k,l])=>`<button class="${ab===k?'on':''}" onclick="fbAba('${k}')">${l}</button>`).join('')}</div>`;
 const conf=e.conf?`<div class="banner" style="background:var(--warn-bg);color:var(--warn);flex-direction:column;align-items:stretch"><span>${e.conf.acao==='base'?'Substituir o texto atual pelo do feedback escolhido?':'Substituir o texto atual pelo modelo?'}</span>${e.conf.acao==='modelo'?'<label style="display:flex;gap:6px;font-size:12.5px"><input type="checkbox" id="tm_ass" checked> Trocar o assunto também</label>':''}<div style="display:flex;gap:6px;justify-content:flex-end"><button class="btn" onclick="S.fbEd.conf=null;document.getElementById('fbside').innerHTML=fbSide()">Cancelar</button><button class="btn pri" onclick="fbConfOk()">Substituir</button></div></div>`:'';
 let body='';
 if(ab==='ant'){if(!e.pessoa)body='<p class="meta">Escolha o colaborador para ver o histórico dele.</p>';else{const L=fbsDe(e.pessoa).filter(f=>f.id!==e.id),on=obsNovas(e);
  body=`<div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn" onclick="fbPlano()">Puxar plano de ação</button><button class="btn ghost" onclick="obsRapida()">+ registrar observação</button></div>
  <div class="sbox"><span class="lbl">Observações novas desde o último feedback</span>${on.length?on.map(o=>`<label class="perm" style="padding:8px 10px"><input type="checkbox" id="ok_${o.id}"><span><b style="font-weight:400">${esc(o.texto)}</b><small>${OBS_T[o.tipo]} · ${fmt(o.data)}</small></span></label>`).join('')+`<button class="btn" style="margin-top:6px" onclick="fbInsObs()">Inserir observações marcadas</button>`:'<p class="meta">Nenhuma observação nova.</p>'}</div>
  <div class="sbox"><span class="lbl">Feedbacks anteriores · ${L.length}</span>${L.length?L.map(f=>`<div class="ant"><div><b>${esc(f.titulo)}</b><span class="meta">${fmt(f.data)}/${(f.data||'').slice(2,4)} · ${esc(periodoCurto(f))} · <span class="tag ${TOM_C[f.tom]}" style="font-size:10.5px">${TONS[f.tom]}</span></span></div>${e.lendo[f.id]?`<div class="fbtxt small">${md(f.texto)}</div>`:''}<div style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn ghost" onclick="fbLer('${f.id}')">${e.lendo[f.id]?'Fechar':'Ler'}</button><button class="btn ghost" onclick="fbIns(D.feedbacks.find(x=>x.id==='${f.id}').texto)">Inserir no cursor</button><button class="btn ghost" onclick="fbConf('base','${f.id}')">Usar como base</button></div></div>`).join(''):'<p class="meta">É o primeiro feedback desta pessoa.</p>'}</div>`}}
 if(ab==='mod'){const L=[...D.modelos].sort((a,b)=>((b.tipo===e.tipo)-(a.tipo===e.tipo))||(a.nome||'').localeCompare(b.nome||''));
  body=L.length?L.map(m=>`<div class="ant"><div><b>${esc(m.nome)}</b><span class="meta">${esc(m.tipo==='qualquer'||!m.tipo?'Qualquer tipo':m.tipo)} · ${m.tom&&m.tom!=='qualquer'?TONS[m.tom]:'Qualquer tom'}${m.tipo===e.tipo?' · combina':''}</span></div><div style="display:flex;gap:4px"><button class="btn" onclick="fbConf('modelo','${m.id}')">Aplicar</button><button class="btn ghost" onclick="fbIns(D.modelos.find(x=>x.id==='${m.id}').texto)">Inserir no cursor</button></div></div>`).join(''):'<p class="meta">Nenhum modelo cadastrado.</p>'}
 if(ab==='fra'){const g=t=>D.frases.filter(f=>f.tom===t).sort((a,b)=>(a.grupo||'').localeCompare(b.grupo||''));
  const bloco=(t,l)=>`<div class="sbox"><span class="lbl">${l}</span>${g(t).map(f=>`<button class="frase" onclick="fbIns('- '+D.frases.find(x=>x.id==='${f.id}').txt)"><small>${esc(f.grupo)}</small>${esc(f.txt)}</button>`).join('')||'<p class="meta">Nenhuma.</p>'}</div>`;
  body=bloco('pos','Positivas')+bloco('mel','Melhorias')}
 return tabs+conf+`<div class="sidebody">${body}</div>`}
async function fbSalvar(){const e=S.fbEd;errEl('fe_pessoa','');errEl('fe_texto','');errEl('fe_per','');let ok=true;
 if(!e.pessoa){errEl('fe_pessoa','Escolha o colaborador.');ok=false}
 if(e.tipo==='Mensal'&&!/^\d{4}-\d{2}$/.test(e.mes||'')){errEl('fe_per','Escolha o mês.');ok=false}
 if(e.tipo==='Trimestral'&&!triParse(e.tri)){errEl('fe_per','Escolha o trimestre.');ok=false}
 if(!String(e.texto).trim()){errEl('fe_texto','Escreva o feedback.');ok=false}
 if(!ok)return;
 const base={pessoa:e.pessoa,data:e.data||HJ,tipo:e.tipo,tom:e.tom,mes:e.tipo==='Mensal'?e.mes:'',tri:e.tipo==='Trimestral'?e.tri:''};
 const titulo=subst(e.titulo,base).trim()||autoTitulo(base);
 const doc={...base,titulo,assunto:subst(e.assunto,base).trim()||titulo,texto:subst(e.texto,base)};
 const ant=e.id?D.feedbacks.find(x=>x.id===e.id):null;
 const full=ant?{...Object.fromEntries(Object.entries(ant).filter(([k])=>k!=='id')),...doc}:{...doc,enviado:false,enviadoEm:'',canal:'',para:'',arquivado:false,criado:new Date().toISOString(),por:ME.uid||null};
 if(!DB){toast('O armazenamento não está disponível nesta visualização.');return}
 try{let id=e.id;if(id)await DB.collection('feedbacks').doc(id).set(full);else{const r=await DB.collection('feedbacks').add(full);id=r.id}
  for(const oid of e.obsUsadas){const o=D.observacoes.find(x=>x.id===oid);if(o){const {id:_,...b}=o;await DB.collection('observacoes').doc(oid).set({...b,usadoEm:id,fb:b.fb||id})}}
  log(`${ant?'Editou':'Registrou'} um feedback ${String(e.tipo).toLowerCase()}`);toast(ant?'Feedback atualizado':'Feedback salvo');limparRascunho(chaveMain());e.dirty=false;
  S.fbV={id};S.tela='fbver';S.fbForce=true;render();window.scrollTo({top:0})}
 catch(er){toast(er?.code==='invalid_argument'?'Só o gestor e os administradores podem salvar feedbacks.':'Não foi possível salvar. Seu texto continua aqui.')}}
function obsRapida(pid,fbid){const p=pid||S.fbEd?.pessoa;if(!p){toast('Escolha o colaborador primeiro.');return}FORM={tipo:'_obs',p,fbid};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(pessoa(p)?.n||'')}</p><h2 id="sheet-title">Registrar observação</h2><p class="sub" style="font-size:13px">Anotação curta sobre a evolução da pessoa. Vira matéria-prima para o próximo feedback.</p></div>${obsForm(p,fbid)}<div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="obsSalvar('${esc(p)}',true)">Registrar</button></div></div>`;document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('o_txt')?.focus(),30)}
function obsForm(p,fbid){return `<div class="fgrid"><div class="full"><label class="lbl" for="o_txt">Observação</label><textarea class="inp" id="o_txt" style="min-height:70px" placeholder="Voltou a usar o checklist antes de liberar as entregas"></textarea><p class="ferr" id="oe_txt"></p></div>
 <div><label class="lbl" for="o_tipo">Tipo</label><select class="inp" id="o_tipo">${Object.entries(OBS_T).map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></div>
 <div><label class="lbl" for="o_data">Data</label><input class="inp" id="o_data" type="date" value="${HJ}"></div>
 <div class="full"><label class="lbl" for="o_fb">Refere-se a</label><select class="inp" id="o_fb"><option value="">Geral</option>${fbsDe(p).map(f=>`<option value="${f.id}" ${f.id===fbid?'selected':''}>${esc(f.titulo)}</option>`).join('')}</select></div></div>`}
async function obsSalvar(p,sheet){const t=val('o_txt');if(!t){errEl('oe_txt','Escreva a observação.');return}
 try{await DB.collection('observacoes').add({pessoa:p,texto:t,tipo:val('o_tipo'),data:val('o_data')||HJ,fb:val('o_fb'),usadoEm:'',criado:new Date().toISOString(),por:ME.uid||null});log('Registrou uma observação de progressão');toast('Observação registrada');
  if(sheet){fechar();const sd=document.getElementById('fbside');if(sd&&S.fbEd)setTimeout(()=>{sd.innerHTML=fbSide()},150)}else{S.fbForce=true;render()}}
 catch(e){toast(e?.code==='invalid_argument'?'Só o gestor pode registrar observações.':'Não foi possível salvar.')}}
function obsDel(id){if(S.obsDel!==id){S.obsDel=id;S.fbForce=true;render();return}S.obsDel=null;DB.collection('observacoes').doc(id).delete().then(()=>{toast('Observação excluída');log('Excluiu uma observação de progressão')}).catch(()=>toast('Não foi possível excluir.'))}
async function fbPatch(id,mud,msg,lg){const ok=await patch('feedbacks',id,mud,msg,lg);S.fbForce=true;render();return ok}
function inativar(id){if(S.inat!==id){S.inat=id;S.fbForce=true;render();return}S.inat=null;patch('equipe',id,{ativo:false},'Colaborador inativado',`Inativou o colaborador ${nomeDe(id)}`)}
function reativar(id){patch('equipe',id,{ativo:true},'Colaborador reativado',`Reativou o colaborador ${nomeDe(id)}`)}

/* ver feedback */
function fbAcao(a){S.fbV.conf=a;S.fbForce=true;render()}
async function fbEnviar(){const f=D.feedbacks.find(x=>x.id===S.fbV.id);if(!f)return;const para=listaEnd(val('ev_para')),cc=listaEnd(val('ev_cc')),ass=val('ev_ass'),mim=document.getElementById('ev_mim')?.checked;
 errEl('eve_para','');errEl('eve_cc','');errEl('eve_ass','');let ok=true;
 if(!para.length){errEl('eve_para','Informe o destinatário.');ok=false}else if(para.some(x=>!emailOk(x))){errEl('eve_para','Confira o endereço.');ok=false}
 if(cc.some(x=>!emailOk(x))){errEl('eve_cc','Confira os endereços de cópia.');ok=false}
 if(!ass){errEl('eve_ass','Informe o assunto.');ok=false}
 if(!String(f.texto||'').trim()){toast('Este feedback está sem texto.');ok=false}
 if(!ok)return;
 S.fbV.env={para:val('ev_para'),cc:val('ev_cc'),ass,mim};
 if(S.fbV.conf!=='enviar2'){S.fbV.conf='enviar2';S.fbForce=true;render();return}
 if(!MCP){S.fbV.conf=null;S.fbV.erro='A conexão com o Outlook não está disponível nesta visualização. Copie o e-mail formatado e envie pelo seu Outlook.';S.fbForce=true;render();return}
 S.fbV.enviando=true;S.fbForce=true;render();
 try{let copia=[...cc];if(mim){try{const r=await MCP.callTool(SRV,'get_me',{},{cache:false});const pl=r.payload||{};const eu=pl.mail||pl.userPrincipalName;if(eu&&emailOk(eu))copia.push(eu)}catch(e){}}
  await MCP.callTool(SRV,'outlook_send_mail',{to:para,...(copia.length?{cc:copia}:{}),subject:ass,bodyType:'html',body:md(f.texto)},{cache:false});
  await patch('feedbacks',f.id,{enviado:true,enviadoEm:HJ,canal:'E-mail pelo sistema',para:para.join(', ')},f.enviado?'Feedback reenviado':'Feedback enviado',`${f.enviado?'Reenviou':'Enviou'} um feedback ${String(f.tipo).toLowerCase()} por e-mail`);
  S.fbV.erro=''}
 catch(e){S.fbV.erro=`O envio falhou: ${msgErro(e)} Copie o e-mail formatado e envie pelo seu próprio Outlook.`}
 finally{S.fbV.enviando=false;S.fbV.conf=null;S.fbForce=true;render()}}
async function fbOutro(){const f=D.feedbacks.find(x=>x.id===S.fbV.id);const c=val('ou_canal'),d=val('ou_data')||HJ;await fbPatch(f.id,{enviado:true,canal:c,enviadoEm:d},'Entrega registrada',`Registrou a entrega de um feedback por ${c}`)}
async function fbDesmarcar(){if(S.fbV.conf!=='desm'){fbAcao('desm');return}S.fbV.conf=null;await fbPatch(S.fbV.id,{enviado:false,enviadoEm:'',canal:'',para:''},'Envio desmarcado','Desmarcou o envio de um feedback')}
async function fbExcluir(){if(S.fbV.conf!=='del'){fbAcao('del');return}const id=S.fbV.id,f=D.feedbacks.find(x=>x.id===id);
 try{for(const o of D.observacoes.filter(o=>o.fb===id||o.usadoEm===id)){const {id:oid,...b}=o;await DB.collection('observacoes').doc(oid).set({...b,fb:b.fb===id?'':b.fb,usadoEm:b.usadoEm===id?'':b.usadoEm})}
  await DB.collection('feedbacks').doc(id).delete();log('Excluiu um feedback');toast('Feedback excluído');S.fbP=f?.pessoa;fbIr('fbpessoa')}catch(e){toast('Não foi possível excluir.')}}
function graficoEvol(pid){const L=fbsDe(pid);if(!L.length)return '<p class="meta">Sem feedbacks ainda.</p>';
 const tris=[];let t=triDe(MES_ATUAL);for(let i=0;i<8;i++){tris.unshift(t);t=triAnt(t)}
 const G=tris.map(t=>{const ms=mesesTri(t),fs=L.filter(f=>{const tt=triParse(f.tri);return tt?triStr(tt)===triStr(t):ms.includes((f.mes||f.data||'').slice(0,7))});return {t,fs,pos:fs.filter(f=>f.tom==='pos').length,mel:fs.filter(f=>f.tom==='mel').length,mix:fs.filter(f=>f.tom==='mix').length}});
 if(S.fbTab==='tabela')return `<div class="tbl-wrap"><table><thead><tr><th>Trimestre</th><th>Positivos</th><th>Mistos</th><th>Melhorias</th></tr></thead><tbody>${G.map(g=>`<tr><td>${g.t.q}º tri ${g.t.ano}</td><td>${g.pos}</td><td>${g.mix}</td><td>${g.mel}</td></tr>`).join('')}</tbody></table></div>`;
 const mx=Math.max(1,...G.map(g=>Math.max(g.pos,g.mel,g.mix))),W=640,H=200,mid=96,u=72/mx,cw=W/8;
 const bars=G.map((g,i)=>{const x=i*cw+cw/2,tip=g.fs.map(f=>`${fmt(f.data)} · ${TONS[f.tom]} · ${f.titulo}`).join('\n')||'Sem feedbacks';
  return `<g><title>${esc(`${g.t.q}º trimestre ${g.t.ano}\n${tip}`)}</title><rect x="${x-cw/2+4}" y="8" width="${cw-8}" height="${H-36}" fill="transparent"/>
  ${g.pos?`<rect x="${x-17}" y="${mid-g.pos*u}" width="10" height="${g.pos*u}" rx="2" fill="var(--ok)"/>`:''}
  ${g.mix?`<rect x="${x-5}" y="${mid-g.mix*u/2}" width="10" height="${g.mix*u}" rx="2" fill="var(--accent)"/>`:''}
  ${g.mel?`<rect x="${x+7}" y="${mid}" width="10" height="${g.mel*u}" rx="2" fill="var(--warn)"/>`:''}
  <text x="${x}" y="${H-6}" text-anchor="middle" font-size="11" fill="var(--ink-3)">${g.t.q}º/${String(g.t.ano).slice(2)}</text></g>`}).join('');
 return `<div class="tbl-wrap"><svg viewBox="0 0 ${W} ${H}" width="100%" style="min-width:420px;display:block" role="img" aria-label="Feedbacks por trimestre"><line x1="0" x2="${W}" y1="${mid}" y2="${mid}" stroke="var(--line)"/>${bars}</svg></div><div class="legend"><span><i style="background:var(--ok)"></i>Positivos (para cima)</span><span><i style="background:var(--accent)"></i>Mistos (no centro)</span><span><i style="background:var(--warn)"></i>Melhorias (para baixo)</span></div>`}

/* ---------- dias úteis com feriados ---------- */
let _ferK='',_ferS=new Set();
function FER(){const k=String(CFG.feriados||'');if(k!==_ferK){_ferK=k;_ferS=new Set(k.split(/[,;\s]+/).map(x=>{const m=x.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);return m?`${m[3]}-${m[2]}-${m[1]}`:''}).filter(Boolean))}return _ferS}
const util=d=>{const w=d.getDay();return w>0&&w<6&&!FER().has(isoD(d))};
const fimMes=c=>{const [y,m]=c.split('-').map(Number);return new Date(y,m,0,12)};
function dataDN(c,n){const d=fimMes(c);let k=0;while(k<n){d.setDate(d.getDate()+1);if(util(d))k++}return isoD(d)}
const dnDe=(c,dia)=>diasUteis(isoD(fimMes(c)),dia);

/* ---------- troca de dados bancários ---------- */
const CHK_BANCO=['O telefone usado veio do cadastro antigo ou do contrato, nunca do pedido de troca','Liguei para o contato já cadastrado e ele confirmou a troca','Recebi comprovante de titularidade da nova conta (carta timbrada ou comprovante bancário)','O titular da nova conta é o próprio fornecedor, com o mesmo CNPJ','Revisei os pagamentos já programados para este fornecedor'];
const ST_BANCO={verificacao:['wa','Em verificação'],aprovacao:['ac','Aguardando 2º aprovador'],aprovada:['ok','Aprovada'],recusada:['bad','Recusada · suspeita']};
const quemEu=()=>real()?ME.uid:S.perfil;
const mesmaPessoa=(uid,perf)=>real()?uid===ME.uid:perf===S.perfil;
function bloqueioForn(nome){const n=norm(nome).trim();if(n.length<3)return null;return D.verificacoes.find(v=>['verificacao','aprovacao','recusada'].includes(v.st)&&(v.st!=='recusada'||diasAte((v.fimEm||HJ).slice(0,10))>=-30)&&(()=>{const f=norm(v.forn).trim();return f.length>=3&&(n.includes(f)||f.includes(n))})())}
function novaTroca(){FORM={tipo:'_troca'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Segurança de pagamentos</p><h2 id="sheet-title">Registrar pedido de troca de conta</h2><p class="sub" style="font-size:13px">Registre assim que chegar o pedido. Os pagamentos desse fornecedor ficam travados até a aprovação. Não digite a conta aqui: ela vai só no ERP.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="tb_forn">Fornecedor</label><input class="inp" id="tb_forn" placeholder="TransRápido Ltda"><p class="ferr" id="tbe_forn"></p></div>
 <div><label class="lbl" for="tb_orig">Como o pedido chegou</label><select class="inp" id="tb_orig"><option>E-mail</option><option>Telefone</option><option>Chamado de outro departamento</option><option>Carta ou documento</option><option>Outro</option></select></div>
 <div><label class="lbl" for="tb_data">Recebido em</label><input class="inp" id="tb_data" type="date" value="${HJ}"></div>
 <div class="full"><label class="lbl" for="tb_obs">Observação · opcional</label><input class="inp" id="tb_obs" placeholder="E-mail veio de domínio parecido com o do fornecedor"></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaTroca()">Registrar e travar pagamentos</button></div></div>`;
 document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('tb_forn').focus(),30)}
async function salvaTroca(){const f=val('tb_forn');errEl('tbe_forn','');if(f.length<3){errEl('tbe_forn','Informe o nome do fornecedor.');return}
 if(await salvar('verificacoes',null,{forn:f,origem:val('tb_orig'),recebido:val('tb_data')||HJ,obs:val('tb_obs'),st:'verificacao',chk:CHK_BANCO.map(()=>false),contato:'',criado:new Date().toISOString(),criadoUid:ME.uid||null,criadoPerf:S.perfil},'Pedido registrado. Pagamentos travados.',`Registrou pedido de troca de dados bancários de ${f}`))fechar()}
function conferirTroca(id){const v=D.verificacoes.find(x=>x.id===id);if(!v)return;FORM={tipo:'_conf',id};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Troca de dados bancários · etapa 1 de 2</p><h2 id="sheet-title"></h2><p class="sub" style="font-size:13px">Confirme cada item. Depois, outra pessoa precisa aprovar.</p></div>
 <div class="fgrid one">${CHK_BANCO.map((c,i)=>`<label class="perm"><input type="checkbox" id="tc_${i}" ${v.chk?.[i]?'checked':''}><span><b style="font-weight:400">${c}</b></span></label>`).join('')}
 <div><label class="lbl" for="tc_cont">Nome do contato que confirmou</label><input class="inp" id="tc_cont" value="${esc(v.contato||'')}" placeholder="Fernanda, financeiro do fornecedor"><p class="ferr" id="tce_cont"></p></div>
 <div><label class="lbl" for="tc_obs">Observação · opcional</label><input class="inp" id="tc_obs" value="${esc(v.obs||'')}"></div><p class="ferr" id="tce_chk"></p></div>
 <div class="foot"><div><button class="btn danger" onclick="recusarTroca('${id}')">Recusar: parece golpe</button></div><div style="display:flex;gap:8px"><button class="btn" onclick="salvaConf(false)">Salvar rascunho</button><button class="btn pri" onclick="salvaConf(true)">Enviar para 2º aprovador</button></div></div>`;
 document.getElementById('sheet-title').textContent=v.forn;document.getElementById('ov').hidden=false}
async function salvaConf(enviar){const v=D.verificacoes.find(x=>x.id===FORM.id),chk=CHK_BANCO.map((_,i)=>document.getElementById('tc_'+i).checked),cont=val('tc_cont');errEl('tce_chk','');errEl('tce_cont','');
 if(enviar){if(chk.includes(false)){errEl('tce_chk','Confirme todos os itens. Se algum não pode ser confirmado, recuse o pedido.');return}if(!cont){errEl('tce_cont','Informe quem confirmou.');return}}
 const mud={chk,contato:cont,obs:val('tc_obs')};if(enviar)Object.assign(mud,{st:'aprovacao',verUid:ME.uid||null,verPerf:S.perfil,verPapel:quemSou(),verEm:new Date().toISOString()});
 if(await patch('verificacoes',v.id,mud,enviar?'Enviado para o 2º aprovador':'Rascunho salvo',enviar?`Conferiu a troca de dados bancários de ${v.forn} e enviou para aprovação`:false))fechar()}
async function aprovarTroca(id){const v=D.verificacoes.find(x=>x.id===id);if(mesmaPessoa(v.verUid,v.verPerf)){toast('Quem conferiu não pode aprovar. Peça para outra pessoa.');return}
 if(S.trConf!==id){S.trConf=id;render();return}S.trConf=null;
 await patch('verificacoes',id,{st:'aprovada',aprUid:ME.uid||null,aprPerf:S.perfil,aprPapel:quemSou(),fimEm:new Date().toISOString()},'Troca aprovada. Pagamentos liberados.',`Aprovou a troca de dados bancários de ${v.forn} (2º aprovador)`)}
function recusarTroca(id){const v=D.verificacoes.find(x=>x.id===id);FORM={tipo:'_recusa',id};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(v.forn)}</p><h2 id="sheet-title">Recusar pedido de troca</h2><p class="sub" style="font-size:13px">O diretor é avisado e os pagamentos desse fornecedor continuam travados por 30 dias.</p></div>
 <div><label class="lbl" for="rc_mot">Por que parece suspeito</label><textarea class="inp" id="rc_mot" placeholder="O contato cadastrado disse que não pediu troca de conta"></textarea><p class="ferr" id="rce_mot"></p></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn danger" onclick="salvaRecusa()">Recusar pedido</button></div></div>`;document.getElementById('ov').hidden=false}
async function salvaRecusa(){const m=val('rc_mot');if(!m){errEl('rce_mot','Descreva o motivo.');return}const v=D.verificacoes.find(x=>x.id===FORM.id);
 if(await patch('verificacoes',v.id,{st:'recusada',motivo:m,aprUid:ME.uid||null,aprPerf:S.perfil,aprPapel:quemSou(),fimEm:new Date().toISOString()},'Pedido recusado e diretor avisado',`Recusou por suspeita a troca de dados bancários de ${v.forn}`))fechar()}

/* ---------- fechamento D+N ---------- */
const etapasF=()=>[...D.etapas].sort((a,b)=>(+a.dn||0)-(+b.dn||0)||(a.t||'').localeCompare(b.t||''));
const fechDoc=c=>D.fechamentos.find(x=>x.id===c);
const itemF=(c,id)=>fechDoc(c)?.itens?.[id];
const feitaF=(c,id)=>itemF(c,id)?.s==='feita';
const esperando=(c,e)=>(e.deps||[]).filter(d=>D.etapas.some(x=>x.id===d)&&!feitaF(c,d));
const metaDN=()=>+CFG.metaDN||5;
function compPadrao(){const ant=addMes(MES_ATUAL,-1);return ant}
function atrasoF(c,e){return !feitaF(c,e.id)&&HJ>isoD(fimMes(c))&&dataDN(c,+e.dn||1)<HJ}
async function marcarEtapa(c,id){const e=D.etapas.find(x=>x.id===id);if(!e)return;
 if(!(dir()||pode('ver_tudo')||e.resp===S.perfil)){toast('Só o responsável pela etapa ou o diretor pode marcar.');return}
 const feita=feitaF(c,id);
 if(!feita){const w=esperando(c,e);if(w.length){toast('Conclua antes: '+w.map(d=>D.etapas.find(x=>x.id===d)?.t).join(', '));return}
  if(HJ<=isoD(fimMes(c))){toast(`O fechamento de ${mesNome(c)} só começa depois do fim do mês.`);return}}
 const doc=fechDoc(c)||{comp:c,itens:{}},itens={...(doc.itens||{})};
 itens[id]=feita?{s:'aberta'}:{s:'feita',concl:HJ,dn:dnDe(c,HJ),uid:ME.uid||null,papel:quemSou()};
 const todas=D.etapas.length&&D.etapas.every(x=>itens[x.id]?.s==='feita');
 const fim=todas?D.etapas.map(x=>itens[x.id].concl).sort().pop():'';
 const {id:_,...b}=doc;
 const ok=await salvar('fechamentos',c,{...b,comp:c,itens,encerrado:fim,duN:fim?dnDe(c,fim):null},feita?'Etapa reaberta':todas?`Fechamento de ${mesNome(c)} concluído em D+${dnDe(c,fim)}`:'Etapa concluída',`${feita?'Reabriu':'Concluiu'} a etapa "${e.t}" do fechamento de ${mesCurto(c)}${todas&&!feita?` e encerrou o fechamento em D+${dnDe(c,fim)}`:''}`)}
function editEtapa(id){const e=id?D.etapas.find(x=>x.id===id):{dn:1,deps:[]};FORM={tipo:'_etapa',id,del:false};
 const outras=etapasF().filter(x=>x.id!==id);
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Modelo do fechamento</p><h2 id="sheet-title">${id?'Editar etapa':'Nova etapa'}</h2><p class="sub" style="font-size:13px">D+N é o dia útil depois do fim do mês em que a etapa precisa estar pronta.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="et_t">Etapa</label><input class="inp" id="et_t" value="${esc(e.t||'')}" placeholder="Conciliação bancária"><p class="ferr" id="ete_t"></p></div>
 <div><label class="lbl" for="et_dn">Prazo (D+)</label><input class="inp" id="et_dn" type="number" min="1" max="25" value="${+e.dn||1}"><p class="ferr" id="ete_dn"></p></div>
 <div><label class="lbl" for="et_a">Área</label><select class="inp" id="et_a">${AREAS.map(a=>`<option ${a===e.a?'selected':''}>${a}</option>`).join('')}</select></div>
 <div class="full"><label class="lbl" for="et_r">Responsável</label><select class="inp" id="et_r"><option value="">Selecione</option>${colabs().map(p=>`<option value="${p.id}" ${p.id===e.resp?'selected':''}>${esc(p.n)}</option>`).join('')}</select><p class="ferr" id="ete_r"></p></div>
 <div class="full"><span class="lbl">Só pode começar depois de</span>${outras.length?`<div class="perms">${outras.map(o=>`<label class="perm"><input type="checkbox" id="et_d_${o.id}" ${(e.deps||[]).includes(o.id)?'checked':''}><span><b style="font-weight:400">${esc(o.t)}</b><small>D+${o.dn}</small></span></label>`).join('')}</div>`:'<p class="meta">Nenhuma outra etapa cadastrada.</p>'}<p class="ferr" id="ete_d"></p></div></div>
 <div class="foot"><div>${id?`<button class="btn danger" id="bdel" onclick="delEtapa()">Excluir</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaEtapa()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaEtapa(){const t=val('et_t'),dn=+val('et_dn'),r=val('et_r');['t','dn','r','d'].forEach(k=>errEl('ete_'+k,''));let ok=true;
 if(!t){errEl('ete_t','Informe a etapa.');ok=false}if(!(dn>=1&&dn<=25)){errEl('ete_dn','Use de 1 a 25.');ok=false}if(!r){errEl('ete_r','Escolha o responsável.');ok=false}
 const deps=D.etapas.filter(o=>o.id!==FORM.id&&document.getElementById('et_d_'+o.id)?.checked).map(o=>o.id);
 const tarde=deps.map(d=>D.etapas.find(x=>x.id===d)).filter(o=>+o.dn>dn);if(tarde.length){errEl('ete_d',`"${tarde[0].t}" tem prazo D+${tarde[0].dn}, depois desta etapa. Ajuste os prazos.`);ok=false}
 const ciclo=id=>{const seen=new Set();const go=x=>{if(x===FORM.id)return true;if(seen.has(x))return false;seen.add(x);return (D.etapas.find(y=>y.id===x)?.deps||[]).some(go)};return deps.some(go)};if(FORM.id&&ciclo()){errEl('ete_d','Isso criaria uma dependência circular.');ok=false}
 if(!ok)return;const ant=FORM.id?D.etapas.find(x=>x.id===FORM.id):null;
 if(await salvar('etapas',FORM.id||null,{...(ant?Object.fromEntries(Object.entries(ant).filter(([k])=>k!=='id')):{}),t,dn,a:val('et_a'),resp:r,deps},FORM.id?'Etapa atualizada':'Etapa criada'))fechar()}
async function delEtapa(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
 try{const e=D.etapas.find(x=>x.id===FORM.id);for(const o of D.etapas.filter(o=>(o.deps||[]).includes(FORM.id))){const {id,...r}=o;await DB.collection('etapas').doc(id).set({...r,deps:r.deps.filter(d=>d!==FORM.id)})}
  await DB.collection('etapas').doc(FORM.id).delete();log(`Excluiu a etapa "${e?.t}" do modelo de fechamento`);toast('Etapa excluída');fechar()}catch(e){toast('Não foi possível excluir.')}}
function cfgFech(){FORM={tipo:'_cfgf'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Fechamento D+N</p><h2 id="sheet-title">Meta e feriados</h2><p class="sub" style="font-size:13px">Feriados não contam como dia útil nos prazos D+N nem na regra de chamados.</p></div>
 <div class="fgrid"><div><label class="lbl" for="cf_meta">Meta de fechamento (D+)</label><input class="inp" id="cf_meta" type="number" min="1" max="25" value="${metaDN()}"><p class="ferr" id="cfe_meta"></p></div>
 <div class="full"><label class="lbl" for="cf_fer">Feriados (dd/mm/aaaa, separados por vírgula)</label><textarea class="inp" id="cf_fer" placeholder="02/11/2026, 15/11/2026, 20/11/2026, 25/12/2026">${esc(CFG.feriados||'')}</textarea><p class="ferr" id="cfe_fer"></p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfgFech()">Salvar</button></div></div>`;document.getElementById('ov').hidden=false}
async function salvaCfgFech(){const m=+val('cf_meta'),f=val('cf_fer');errEl('cfe_meta','');errEl('cfe_fer','');
 if(!(m>=1&&m<=25)){errEl('cfe_meta','Use de 1 a 25.');return}const ruins=f.split(/[,;\s]+/).filter(Boolean).filter(x=>!/^\d{2}\/\d{2}\/\d{4}$/.test(x));if(ruins.length){errEl('cfe_fer','Use o formato dd/mm/aaaa: '+ruins.slice(0,3).join(', '));return}
 try{await DB.doc('config/estrutura').set({...CFG,metaDN:m,feriados:f});log(`Alterou a meta de fechamento para D+${m} e a lista de feriados`);toast('Salvo');fechar()}catch(e){toast(e?.code==='invalid_argument'?'Só administradores podem mudar isso.':'Não foi possível salvar.')}}
function graficoDN(){const H=[];let c=compPadrao();for(let i=0;i<12;i++){H.unshift(c);c=addMes(c,-1)}
 const pts=H.map(c=>({c,d:fechDoc(c)}));if(!pts.some(p=>p.d?.duN))return '<p class="meta">O histórico aparece quando o primeiro fechamento for concluído.</p>';
 const mx=Math.max(metaDN()+2,...pts.map(p=>+p.d?.duN||0)),W=640,Hh=190,b=24,u=(Hh-b-16)/mx,cw=W/12;
 const bars=pts.map((p,i)=>{const v=+p.d?.duN||0,x=i*cw+cw/2,y=Hh-b-v*u,ok=v&&v<=metaDN();return `<g><title>${mesNome(p.c)}: ${v?'fechou em D+'+v:'sem fechamento concluído'}</title>${v?`<rect x="${x-12}" y="${y}" width="24" height="${v*u}" rx="3" fill="${ok?'var(--ok)':'var(--warn)'}"/><text x="${x}" y="${y-5}" text-anchor="middle" font-size="11" fill="var(--ink-2)">D+${v}</text>`:''}<text x="${x}" y="${Hh-6}" text-anchor="middle" font-size="11" fill="var(--ink-3)">${mesCurto(p.c).replace('/20','/')}</text></g>`}).join('');
 const ym=Hh-b-metaDN()*u;
 return `<div class="tbl-wrap"><svg viewBox="0 0 ${W} ${Hh}" width="100%" style="min-width:460px;display:block" role="img" aria-label="Dias úteis para fechar cada mês"><line x1="0" x2="${W}" y1="${ym}" y2="${ym}" stroke="var(--accent)" stroke-dasharray="4 4"/><text x="${W-4}" y="${ym-5}" text-anchor="end" font-size="11" fill="var(--accent)">meta D+${metaDN()}</text>${bars}</svg></div>`}
function fechResumo(){const c=compPadrao(),E=D.etapas;if(!E.length)return '';const f=E.filter(e=>feitaF(c,e.id)).length,doc=fechDoc(c),atr=E.filter(e=>atrasoF(c,e)).length;
 return `<div class="panel" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><div style="flex:1;min-width:220px"><p class="eyebrow" style="margin:0 0 4px">Fechamento de ${mesNome(c)}</p><b style="font-weight:500;font-size:16px">${doc?.encerrado?`Concluído em D+${doc.duN} · meta D+${metaDN()}`:`${f} de ${E.length} etapas · hoje é D+${Math.max(0,dnDe(c,HJ))}`}</b><div class="bar" style="margin-top:8px"><i style="width:${f/E.length*100}%"></i></div></div>${atr?`<span class="tag bad">${atr} ${atr>1?'etapas atrasadas':'etapa atrasada'}</span>`:''}<button class="btn" onclick="S.fComp='${c}';ir('fechamento')">Abrir fechamento</button></div>`}

/* ---------- indicadores por departamento ---------- */
function periodoInd(){const p=S.iPer||'tri';if(p==='mes')return [MES_ATUAL+'-01','Este mês'];if(p==='12m')return [isoD(new Date(Date.now()-365*864e5)),'Últimos 12 meses'];const t=triDe(MES_ATUAL);return [mesesTri(t)[0]+'-01',`${t.q}º trimestre de ${t.ano}`]}
function indDep(d,ini){const ch=D.chamados.filter(c=>c.dep===d.id&&(c.aberto||'')>=ini),pg=ch.filter(c=>PAGTO(c.tipo));
 const fora=pg.filter(c=>c.fora).length,dev=ch.filter(c=>(+c.devolucoes||0)>0||c.st==='Pendência com solicitante').length;
 const prog=ch.filter(c=>c.programadoEm&&c.aberto),tm=prog.length?prog.reduce((a,c)=>a+diasUteis(c.aberto,c.programadoEm),0)/prog.length:null;
 const en=D.entregas.filter(e=>e.dep===d.id&&e.prazo&&e.prazo>=ini&&e.prazo<=HJ),rec=en.filter(e=>e.recebido),noPrazo=rec.filter(e=>e.recebido<=e.prazo).length,abertasAtr=en.filter(e=>!e.recebido).length;
 const atrasos=rec.filter(e=>e.recebido>e.prazo).map(e=>diasUteis(e.prazo,e.recebido));
 return {d,n:ch.length,pg:pg.length,fora,foraPct:pg.length?Math.round(fora/pg.length*100):null,dev,devPct:ch.length?Math.round(dev/ch.length*100):null,tm,en:en.length,pont:en.length?Math.round(noPrazo/en.length*100):null,abertasAtr,atrMed:atrasos.length?atrasos.reduce((a,b)=>a+b,0)/atrasos.length:null}}
const pctCel=(v,ruimAcima)=>v===null?'<span class="meta">—</span>':`<span class="mini"><i style="width:${Math.min(100,v)}%;background:${(ruimAcima?v>25:v<80)?'var(--bad)':(ruimAcima?v>10:v<95)?'var(--warn)':'var(--ok)'}"></i></span>${v}%`;
function resumoTxt(r,rot){const n1=x=>x===null?'sem dados':x;
 return `### Resumo do ${rot.toLowerCase()} · ${r.d.n}\n\n**Chamados abertos:** ${r.n}\n- Pedidos de pagamento fora do prazo de ${DMIN()} dias úteis: ${r.foraPct===null?'sem pedidos':`${r.fora} de ${r.pg} (${r.foraPct}%)`}\n- Chamados devolvidos para correção: ${r.devPct===null?'sem chamados':`${r.dev} (${r.devPct}%)`}\n- Tempo médio até o pagamento ser programado: ${r.tm===null?'sem dados':r.tm.toFixed(1).replace('.',',')+' dias úteis'}\n\n**Entregas para o financeiro:** ${r.en}\n- No prazo: ${n1(r.pont)}${r.pont===null?'':'%'}\n- Ainda em aberto e atrasadas: ${r.abertasAtr}\n${r.atrMed===null?'':`- Atraso médio das que chegaram atrasadas: ${r.atrMed.toFixed(1).replace('.',',')} dias úteis\n`}\n---\nPara pedidos de pagamento, abra o chamado no portal com pelo menos ${DMIN()} dias úteis de antecedência e com o documento e a aprovação do gestor.`}
function resumoDepSheet(id){const [ini,rot]=periodoInd(),d=depDe(id),r=indDep(d,ini),txt=resumoTxt(r,rot);FORM={tipo:'_resumo',id,txt,conf:false};
 const para=d.gestor||listaEmails(d)[0]||'';
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Indicadores por área</p><h2 id="sheet-title">Resumo para ${esc(d.n)}</h2></div><div class="fbtxt small">${md(txt)}</div>
 <div class="fgrid one"><div><label class="lbl" for="rs_para">Enviar para</label><input class="inp" id="rs_para" value="${esc(para)}" placeholder="gestor.compras@empresa.com.br"><p class="ferr" id="rse_para"></p></div></div>
 <div class="foot"><button class="btn" onclick="copiar(md(FORM.txt),mdTexto(FORM.txt))">Copiar</button><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" id="rs_btn" onclick="enviarResumo()">Enviar por e-mail</button></div></div>`;document.getElementById('ov').hidden=false}
async function enviarResumo(){const para=listaEnd(val('rs_para'));errEl('rse_para','');if(!para.length||para.some(x=>!emailOk(x))){errEl('rse_para','Confira o endereço.');return}
 const b=document.getElementById('rs_btn');if(!FORM.conf){FORM.conf=true;b.textContent='Confirmar envio';return}
 if(!MCP){toast(msgErro({code:'sem_mcp'}));return}b.textContent='Enviando…';
 try{const d=depDe(FORM.id);await MCP.callTool(SRV,'outlook_send_mail',{to:para,subject:`Indicadores do ${periodoInd()[1].toLowerCase()} · ${d.n} e financeiro`,bodyType:'html',body:md(FORM.txt)},{cache:false});log(`Enviou o resumo de indicadores para ${d.n}`);toast('Resumo enviado');fechar()}
 catch(e){toast(msgErro(e));b.textContent='Enviar por e-mail';FORM.conf=false}}

/* ---------- cronograma do departamento ----------
   Rotinas recorrentes (coleção "cronograma") e o que foi feito em cada dia
   (coleção "execucoes", um registro por rotina por dia: dia_idDaRotina). */
const PROC_PAD=['Identificação','Conferência','Lançamento','Baixa','Pagamento','Conciliação'];
const SIS_PAD=['WAE','Protheus'];
const emTeste=x=>(Array.isArray(CFG.cronTeste)?CFG.cronTeste:['Protheus']).includes(x);
const sisTxt=x=>x+(emTeste(x)?' (em teste)':'');
const procs=()=>{const b=Array.isArray(CFG.cronEtapas)&&CFG.cronEtapas.length?CFG.cronEtapas:PROC_PAD;return [...b,...['Comprovantes','Controladoria','Impressão de caixas'].filter(x=>!b.includes(x))]};
const sistsTodos=()=>Array.isArray(CFG.cronSis)&&CFG.cronSis.length?CFG.cronSis:SIS_PAD;
// sistema oculto pelo admin some do cronograma, andamento e painel; o que já foi marcado continua guardado
const sists=()=>{const b=sistsTodos(),h=Array.isArray(CFG.sisOcultos)?CFG.sisOcultos:[],v=b.filter(x=>!h.includes(x));return v.length?v:b};
const ETAPAS_SIS={WAE:['Lançamento','Baixa','Conciliação'],Protheus:['Lançamento','Pagamento','Conciliação']};
const NOME_ET_SIS={Protheus:{'Lançamento':'Lançar','Pagamento':'Pagar','Conciliação':'Conciliar'}};
const nomeEtS=(g,x)=>(NOME_ET_SIS[x]||{})[g]||g;
// etapas do sistema, mais qualquer outra que tenha rotina naquele dia (nada some sem querer)
const etapasDoSis=(x,L)=>{const b=ETAPAS_SIS[x]||procs(),ex=[...new Set((L||[]).filter(r=>(r.sis||[]).includes(x)&&r.etapa&&procs().includes(r.etapa)&&!b.includes(r.etapa)).map(r=>r.etapa))];return [...b,...ex]};
/* módulos guardados para depois: ficam fora do menu até o administrador ligar */
const MODS=[['fechamento','Fechamento D+N','Etapas do fechamento do mês com prazo em dias úteis'],['entregas','Entregas dos departamentos','O que outras áreas precisam enviar e até quando'],['email','E-mails do Outlook','Alertas de e-mails para revisar e de problemas na leitura da caixa'],['outros','Outros alertas','Chamados, WhatsApp, troca de dados bancários, pedidos de acesso e backup. Desligado, os alertas vêm só do cronograma']];
const modOn=k=>!!(CFG.modulos||{})[k];
const FREQS=[['avulsa','Quando acontecer (é só clicar quando fizer)'],['diaria','Todo dia útil'],['semanal','Em dias da semana'],['mensal_util','Todo mês, no Nº dia útil'],['mensal_dia','Todo mês, em um dia fixo'],['unica','Uma vez só']];
const SEM=['dom','seg','ter','qua','qui','sex','sáb'];
const addDia=(iso,n)=>{const d=new Date(iso+'T12:00');d.setDate(d.getDate()+n);return isoD(d)};
function* diasDe(a,b){for(let d=a;d<=b;d=addDia(d,1))yield d}
const ehUtil=iso=>util(new Date(iso+'T12:00'));
const proxUtil=iso=>{let d=addDia(iso,1);while(!ehUtil(d))d=addDia(d,1);return d};
const agoraHM=()=>{const d=new Date();return pad(d.getHours())+':'+pad(d.getMinutes())};
const hmDe=iso=>{const d=new Date(iso||'');return isNaN(d)?'':pad(d.getHours())+':'+pad(d.getMinutes())};
const diaTxt=iso=>{const d=new Date(iso+'T12:00');return `${DIAS[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]}`};
/* dia fixo do mês; se não for dia útil, antecipa. "antes" antecipa mais N dias úteis (ex.: D-1) */
function diaFixo(m,n,antes){const [y,mm]=m.split('-').map(Number),ult=new Date(y,mm,0).getDate(),d=new Date(y,mm-1,Math.min(Math.max(1,n),ult),12);
 while(!util(d))d.setDate(d.getDate()-1);let k=0;while(k<(+antes||0)){d.setDate(d.getDate()-1);if(util(d))k++}return isoD(d)}
/* o WAE já é o dia a dia: as rotinas fixas do WAE programadas para 01/11 valem desde 27/10/2026 */
const INICIO_WAE='2026-10-27';
const iniEf=r=>r.ini==='2026-11-01'&&!r.fim&&(r.sis||[]).length===1&&r.sis[0]==='WAE'&&r.freq!=='unica'&&r.freq!=='avulsa'?INICIO_WAE:r.ini;
function ocorre(r,dia){if(r.freq==='avulsa')return !!exDe(r.id,dia);
 const ini=iniEf(r);if(r.ativo===false||(ini&&dia<ini)||(r.fim&&dia>r.fim))return false;
 if(r.freq==='unica')return r.data===dia;
 if(!ehUtil(dia))return false;const m=dia.slice(0,7);
 if(r.freq==='semanal')return (r.dias||[]).map(Number).includes(new Date(dia+'T12:00').getDay());
 if(r.freq==='mensal_util')return dataDN(addMes(m,-1),+r.n||1)===dia;
 if(r.freq==='mensal_dia')return diaFixo(m,+r.n||1,r.antes)===dia||diaFixo(addMes(m,1),+r.n||1,r.antes)===dia;
 return true}
function freqTxt(r){const h=r.hora?` · ${r.hora}`:'';if(r.freq==='avulsa')return 'Quando acontecer';
 if(r.freq==='unica')return `Em ${fmt(r.data)}${h}`;
 if(r.freq==='semanal')return `Toda ${(r.dias||[]).map(d=>SEM[d]).join(', ')||'—'}${h}`;
 if(r.freq==='mensal_util')return `${r.n||1}º dia útil do mês${h}`;
 if(r.freq==='mensal_dia')return `Dia ${r.n||1} de cada mês${+r.antes?` · pago ${r.antes} ${+r.antes>1?'dias úteis':'dia útil'} antes`:''}${h}`;
 return `Todo dia útil${h}`}
let _exA=null,_exM=new Map();
const exDe=(rid,dia)=>{if(_exA!==D.execucoes){_exA=D.execucoes;_exM=new Map(D.execucoes.map(x=>[x.id,x]))}return _exM.get(dia+'_'+rid)};
const rsDe=r=>(r.rs||[]).filter(Boolean);
const nomesRs=r=>rsDe(r).map(nomeDe).join(' e ')||'Sem responsável';
const minhaRot=r=>rsDe(r).includes(S.perfil);
const vejoRot=r=>dir()||pode('ver_tudo')||minhaRot(r)||!rsDe(r).length;
const podeMarcar=r=>podeEditRot();
const podeCron=()=>dir()||podeAdmin()||pode('cadastros');
/* toda a equipe pode corrigir e cadastrar rotinas; excluir fica com quem cadastra */
const podeEditRot=()=>dir()||podeAdmin()||(!solic()&&S.perfil!=='pendente');
const ordProc=r=>{const w=(r.sis||[]).length===1&&r.sis[0]==='WAE'?FLUXO_WAE.indexOf(r.etapa):-1;if(w>=0)return w;const i=procs().indexOf(r.etapa);return i<0?99:i};
const ordR=(a,b)=>ordProc(a)-ordProc(b)||(a.hora||'99').localeCompare(b.hora||'99')||(a.t||'').localeCompare(b.t||'');
/* situação de uma rotina num dia */
function stOc(r,dia){const x=exDe(r.id,dia);
 if(x?.s!=='feita'&&semMovDe(r.id,dia))return ['ok','Não teve no dia'];
 if(x?.s!=='feita'){const ex=ausRot(r,dia);if(ex)return ['ok',`${ex.tipo}: não conta`]}
 if(x?.s==='feita')return x.concl>dia?['wa','Concluída com atraso']:['ok','Concluída'];
 // Dia anterior sem marcação não vira alerta: nem todo dia tem tudo isso para fazer.
 if(dia<HJ)return x?.s==='andamento'?['ac','Ficou em andamento']:['ne','Não marcada'];
 const late=dia===HJ&&r.hora&&agoraHM()>r.hora;
 if(late)return ['bad',x?.s==='andamento'?'Atrasada · em andamento':'Atrasada'];
 if(x?.s==='andamento')return ['ac','Em andamento'];
 return ['ne',dia>HJ?'Prevista':'A fazer']}
/* o que ficou para trás (últimos 30 dias, incluindo hoje depois do horário) */
function atrasosCron(filtro){const L=[];for(const dia of diasDe(addDia(HJ,-30),HJ))for(const r of D.cronograma){if((filtro&&!filtro(r))||!ocorre(r,dia))continue;if(stOc(r,dia)[0]==='bad')L.push({r,dia})}return L}
function contaDia(dia,filtro){const c={tot:0,ok:0,and:0,atr:0,fazer:0};
 D.cronograma.filter(r=>ocorre(r,dia)&&(!filtro||filtro(r))).forEach(r=>{c.tot++;const x=exDe(r.id,dia),s=stOc(r,dia)[0];if(x?.s==='feita'||(x?.s!=='feita'&&(ausRot(r,dia)||semMovDe(r.id,dia))))c.ok++;else if(s==='bad')c.atr++;else if(x?.s==='andamento')c.and++;else c.fazer++});return c}
/* prazos cumpridos num período: conta cada dia em que a rotina era prevista */
function resumoCron(filtro,ini,fim){const o={prev:0,ok:0,atr:0,pend:0,pct:null},ate=fim<HJ?fim:HJ;if(ini>ate)return o;
 for(const dia of diasDe(ini,ate))for(const r of D.cronograma){if(!filtro(r)||!ocorre(r,dia))continue;const x=exDe(r.id,dia);
  if(x?.s==='feita'){o.prev++;x.concl<=dia?o.ok++:o.atr++}else if(dia<HJ){o.prev++;o.pend++}}
 o.pct=o.prev?Math.round(o.ok/o.prev*100):null;return o}
async function ocSet(rid,dia,s){const r=D.cronograma.find(x=>x.id===rid);if(!r)return;
 if(!podeMarcar(r)){toast('Só os responsáveis por esta rotina e o diretor podem marcar.');return}
 if(dia>HJ){toast('Essa rotina é de um dia que ainda não chegou.');return}
 const id=dia+'_'+rid,x=exDe(rid,dia),agora=new Date().toISOString();
 if(!s){if(!x)return;try{await DB.collection('execucoes').doc(id).delete();log(`Reabriu a rotina "${r.t}" de ${fmt(dia)}`);toast('Rotina reaberta')}catch(e){toast('Não foi possível reabrir.')}return}
 const atraso=s==='feita'&&HJ>dia;
 await salvar('execucoes',id,{rot:rid,dia,s,ini:x?.ini||agora,por:S.perfil,porNome:pessoa(S.perfil)?.n||quemSou(),em:agora,concl:s==='feita'?HJ:'',hora:s==='feita'?agoraHM():''},
  s==='feita'?(atraso?'Concluída com atraso':'Concluída'):'Em andamento',
  `${s==='feita'?'Concluiu':'Começou'} a rotina "${r.t}" de ${fmt(dia)}${atraso?' (com atraso)':''}`)}
let _ftA=null,_ftM=new Map();
function feitosDe(rid,dia){if(_ftA!==D.feitos){_ftA=D.feitos;_ftM=new Map();D.feitos.forEach(f=>{const k=f.dia+'_'+f.rot;if(!_ftM.has(k))_ftM.set(k,[]);_ftM.get(k).push(f)})}
 const l0=_ftM.get(dia+'_'+rid),rr=D.cronograma.find(x=>x.id===rid),l=l0&&rr&&(rr.sis||[]).length?l0.filter(f=>!f.sis||rr.sis.includes(f.sis)):l0;if(l&&l.length)return [...l].sort((a,b)=>(a.em||'').localeCompare(b.em||''));
 const x=exDe(rid,dia);return x?.s==='feita'?[{pid:x.por,nome:x.porNome,hora:x.hora,feitoEm:x.concl,ini:x.ini,st:'feita',legado:true}]:[]}
const pkey=()=>S.perfil==='dir'?'dir'+(real()&&!S.sim&&ME.uid?ME.uid.slice(0,12):''):S.perfil;
/* cada pessoa: Iniciar (data e hora de início) e Finalizar (data e hora de término) */
const stF=f=>f?(f.st||'feita'):'';
const pkeyR=r=>pkey()+(r&&multiSis(r)?'_'+sisAtual().replace(/\W/g,''):'');
const meuF=(rid,dia)=>{const r=D.cronograma.find(x=>x.id===rid);return feitosDe(rid,dia).find(f=>f.legado?f.pid===S.perfil&&(!r||!multiSis(r)||sisAtual()===(r.sis||[])[0]):f.id===`${dia}_${rid}_${pkeyR(r)}`)};
const euFizEsse=(rid,dia)=>stF(meuF(rid,dia))==='feita';
const dtH=iso=>iso?`${fmt(iso.slice(0,10))} ${hmDe(iso)}`:'';
function txtPessoa(f){const ini=f.ini?dtH(f.ini):'',fim=f.fim?dtH(f.fim):(f.feitoEm?`${fmt(f.feitoEm)}${f.hora?' '+f.hora:''}`:'');
 return stF(f)==='feita'?`${f.nome||'—'}: ${ini&&ini!==fim?`iniciou ${ini} · `:''}finalizou ${fim}`:`${f.nome||'—'}: iniciou ${ini} · em andamento`}
/* mantém o resumo da rotina no dia (usado pelo painel e pelos prazos) */
async function syncEx(rid,dia,lista){const fe=lista.filter(f=>stF(f)==='feita').sort((a,b)=>(a.fim||a.em||'').localeCompare(b.fim||b.em||'')),an=lista.filter(f=>stF(f)==='andamento');
 const x=exDe(rid,dia),eid=dia+'_'+rid;
 if(!fe.length&&!an.length){if(x)await DB.collection('execucoes').doc(eid).delete();return}
 const p0=fe[0]||an[0],ini=lista.map(f=>f.ini).filter(Boolean).sort()[0]||new Date().toISOString();
 const doc={rot:rid,dia,s:fe.length?'feita':'andamento',ini,por:p0.pid,porNome:p0.nome,em:new Date().toISOString(),concl:fe.length?(fe[0].feitoEm||HJ):'',hora:fe.length?(fe[0].hora||''):''};
 if(x&&x.s===doc.s&&x.por===doc.por&&x.concl===doc.concl&&x.ini===doc.ini)return;
 await DB.collection('execucoes').doc(eid).set(doc)}
async function marcaEu(rid,dia,acao){const r=D.cronograma.find(x=>x.id===rid);if(!r)return;
 if(!podeMarcar(r)){toast('Sem permissão para marcar.');return}if(dia>HJ){toast('Esse dia ainda não chegou.');return}
 const pk=pkeyR(r),id=`${dia}_${rid}_${pk}`,x=exDe(rid,dia),nome=pessoa(S.perfil)?.n||ME.nome||quemSou(),agora=new Date().toISOString(),sisM=multiSis(r)?sisAtual():((r.sis||[])[0]||'');
 let doDia=D.feitos.filter(f=>f.rot===rid&&f.dia===dia);
 /* registro antigo (sem a marcação por pessoa): vira um registro da pessoa que tinha feito */
 if(!doDia.length&&x?.s==='feita'&&x.por){const lid=`${dia}_${rid}_${x.por==='dir'?'dir':x.por}`,leg={rot:rid,dia,pid:x.por,nome:x.porNome,st:'feita',ini:x.ini||'',fim:'',hora:x.hora||'',feitoEm:x.concl||dia,em:x.em||agora};
  try{await DB.collection('feitos').doc(lid).set(leg);doDia=[{...leg,id:lid}]}catch(e){}}
 const meu=doDia.find(f=>f.id===id)||(x?.por===S.perfil&&!multiSis(r)?doDia.find(f=>f.pid===S.perfil):null),mid=meu?.id||id,outros=doDia.filter(f=>f.id!==mid);
 if(acao==='desfazer'){if(!meu)return;try{await DB.collection('feitos').doc(mid).delete();await syncEx(rid,dia,outros);log(`Desfez a marcação de "${r.t}" de ${fmt(dia)}`);toast('Desfeito')}catch(e){toast('Não foi possível desfazer.')}return}
 const {id:_,...b}=meu||{};
 const doc=acao==='ini'?{...b,rot:rid,dia,sis:sisM,pid:S.perfil,uid:ME.uid||null,nome,st:'andamento',ini:b.ini||agora,fim:'',hora:'',feitoEm:'',em:b.em||agora}
  :{...b,rot:rid,dia,sis:sisM,pid:S.perfil,uid:ME.uid||null,nome,st:'feita',ini:b.ini||agora,fim:agora,hora:agoraHM(),feitoEm:HJ,em:b.em||agora};
 const atraso=acao==='fim'&&HJ>dia;
 if(!await salvar('feitos',mid,doc,acao==='ini'?'Iniciado':atraso?'Finalizado (depois do dia previsto)':'Finalizado',`${acao==='ini'?'Iniciou':'Finalizou'} "${r.t}" de ${fmt(dia)}${atraso?' (com atraso)':''}`))return;
 await syncEx(rid,dia,[...outros,doc])}
/* atalho (semana e outras atividades): finaliza ou desfaz o seu */
const podeHora=f=>!!f.id&&!f.legado&&(dir()||podeAdmin()||f.pid===S.perfil);
const paraLocal=iso=>{const d=new Date(iso||'');return isNaN(d)?'':`${isoD(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}`};
function editHora(fid){const f=D.feitos.find(x=>x.id===fid);if(!f||!podeHora(f))return;const r=D.cronograma.find(x=>x.id===f.rot);FORM={tipo:'_hora',id:fid};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(r?.t||'Rotina')} · ${fmt(f.dia)}</p><h2 id="sheet-title">Horário de ${esc(f.nome||'')}</h2><p class="sub" style="font-size:13px">Corrija a data e a hora de início e de término. Deixe o término vazio se ainda está em andamento.</p></div>
 <div class="fgrid"><div><label class="lbl" for="hr_ini">Início</label><input class="inp" id="hr_ini" type="datetime-local" value="${paraLocal(f.ini)}"><p class="ferr" id="hre_ini"></p></div>
 <div><label class="lbl" for="hr_fim">Término · vazio se em andamento</label><input class="inp" id="hr_fim" type="datetime-local" value="${stF(f)==='feita'?paraLocal(f.fim||(f.feitoEm?f.feitoEm+'T'+(f.hora||'12:00'):'')):''}"><p class="ferr" id="hre_fim"></p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaHora()">Salvar horário</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaHora(){const f=D.feitos.find(x=>x.id===FORM.id);if(!f)return;const vi=val('hr_ini'),vf=val('hr_fim');errEl('hre_ini','');errEl('hre_fim','');
 if(!vi){errEl('hre_ini','Informe o início.');return}const di=new Date(vi),df=vf?new Date(vf):null;
 if(df&&df<di){errEl('hre_fim','O término é antes do início.');return}
 if(df&&isoD(df)>HJ){errEl('hre_fim','O término não pode ser no futuro.');return}
 const {id:_,...b}=f,ini=di.toISOString(),fim=df?df.toISOString():'';
 const doc={...b,ini,fim,st:df?'feita':'andamento',hora:df?`${pad(df.getHours())}:${pad(df.getMinutes())}`:'',feitoEm:df?isoD(df):'',horaAjustada:true};
 const r=D.cronograma.find(x=>x.id===f.rot);
 if(!await salvar('feitos',f.id,doc,'Horário salvo',`Alterou o horário de ${f.nome||''} em "${r?.t||''}" de ${fmt(f.dia)}: início ${dtH(ini)}${fim?`, término ${dtH(fim)}`:''}`))return;
 await syncEx(f.rot,f.dia,[...D.feitos.filter(x=>x.rot===f.rot&&x.dia===f.dia&&x.id!==f.id),doc]);fechar()}
function opcMarca(rid,dia,acao){const ms=stF(meuF(rid,dia));return marcaEu(rid,dia,(acao==='ini'&&ms==='andamento')||(acao==='fim'&&ms==='feita')?'desfazer':acao)}
function botoesMarca(rid,dia,ms){return `<button class="btn sm mk ${ms==='andamento'?'on-ac':''}" aria-pressed="${ms==='andamento'}" onclick="opcMarca('${rid}','${dia}','ini')" title="${ms==='andamento'?'Clique para desfazer':'Guarda a data e a hora de início'}">${ms==='andamento'?'● ':''}Em andamento</button><button class="btn sm mk ${ms==='feita'?'on-ok':''}" aria-pressed="${ms==='feita'}" onclick="opcMarca('${rid}','${dia}','fim')" title="${ms==='feita'?'Clique para desfazer':'Guarda a data e a hora de término'}">✓ Finalizado</button>`}
function euFiz(rid,dia){return marcaEu(rid,dia,euFizEsse(rid,dia)?'desfazer':'fim')}
function ocFeita(rid,dia){return euFiz(rid,dia)}
function linOc(r,dia,comDia,semSis){const x=exDe(r.id,dia),es=multiSis(r)?estadoSis(r,dia,sisAtual()):null,st=es?(es.fe?['ok','Concluída']:es.bad?['bad','Atrasada']:es.an?['ac','Em andamento']:['ne','A fazer']):stOc(r,dia),done=es?es.fe:x?.s==='feita',pm=podeMarcar(r)&&dia<=HJ,FT=es?es.fs:feitosDe(r.id,dia),meu=meuF(r.id,dia),ms=stF(meu);
 const info=[semSis?'':(r.sis||[]).map(sisTxt).join(' · '),nomesRs(r),r.apoio?'apoio: '+r.apoio:''].filter(Boolean).map(esc).join(' · ');
 const ind=done?'<span class="stdot ok" title="Finalizada">✓</span>':FT.some(f=>stF(f)==='andamento')?'<span class="stdot ac" title="Em andamento">●</span>':st[0]==='bad'?'<span class="stdot bad" title="Atrasada">!</span>':'';
 const nt=!done&&semMovDe(r.id,dia,semSis?sisAtual():undefined);
 const acoes=pm?(nt?`<button class="btn ghost sm" onclick="naoTeve('${r.id}','${dia}',false)">Desfazer "não teve"</button>`:done||ms?botoesMarca(r.id,dia,ms):botoesMarca(r.id,dia,ms)+`<button class="btn ghost sm" onclick="naoTeve('${r.id}','${dia}',true)" title="Não houve isso neste dia">Não teve</button>`):'';
 return `<div class="row oc ${done?'done':st[0]==='bad'?'late':''}">${ind}
 <span class="meta oc-h">${comDia?fmt(dia):esc(r.hora||'')}</span><div class="t"><b>${esc(r.t)}</b><span>${comDia&&r.etapa?esc(r.etapa)+' · ':''}${info}</span>
 ${FT.map(f=>`<span class="${stF(f)==='feita'?'pos':'emand'}">${stF(f)==='feita'?'✓':'●'} ${esc(txtPessoa(f))}${podeHora(f)?` <button class="lnk hr" onclick="editHora('${esc(f.id)}')" aria-label="Alterar horário de ${esc(f.nome||'')}">alterar horário</button>`:''}</span>`).join('')}
 ${r.obs&&!done?`<span>${esc(r.obs)}</span>`:''}${r.freq!=='unica'||itensDe(r.id,dia).length?linItens(r,dia):''}</div>${r.chamado?`<span class="tag ac" title="Veio do chamado">${esc(r.chamado)}</span>`:''}${r.fim&&r.freq!=='unica'?`<span class="tag ne">só até ${fmt(r.fim)}</span>`:''}${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}${st[0]==='bad'&&!done?`<span class="tag bad">${st[1]}</span>`:''}${nt?`<span class="tag ne">Não teve no dia · ${esc(nt.nome||'')}</span>`:''}
 <div class="oc-acoes">${acoes}</div>${podeEditRot()?`<button class="btn ghost sm" onclick="editRot('${r.id}')" aria-label="Editar ${esc(r.t)}">Editar</button>`:''}</div>`}
const filtroCron=()=>r=>(!S.cQuem||rsDe(r).includes(S.cQuem))&&(!S.cSis||(r.sis||[]).includes(S.cSis));
const pessoasCron=()=>[...new Set(D.cronograma.flatMap(rsDe))].filter(pessoa).sort((a,b)=>nomeDe(a).localeCompare(nomeDe(b)));
function cronFiltros(semSis){const b=(on,txt,js)=>`<button class="chip ${on?'on':''}" onclick="${js};render();salvarEstado()">${esc(txt)}</button>`;
 return `<div class="filtros cronf">${b(!S.cQuem,'Todas as pessoas',"S.cQuem=''")}${pessoasCron().map(p=>b(S.cQuem===p,nomeDe(p)+(p===S.perfil?' (você)':''),`S.cQuem='${p}'`)).join('')}${semSis?'':`<span class="sep"></span>${b(!S.cSis,'Todos os sistemas',"S.cSis=''")}${sists().map((s,i)=>b(S.cSis===s,s,`S.cSis=sists()[${i}]`)).join('')}`}</div>`}
function cronAbas(){const t=S.cTab||'dia';return `<div class="tabs big" role="tablist" aria-label="Cronograma">${[['dia','Dia'],['semana','Semana'],['quem','Quem faz o quê'],['rotinas','Rotinas cadastradas'],['tri','Trimestre']].map(([k,l])=>`<button role="tab" aria-selected="${t===k}" class="${t===k?'on':''}" onclick="S.cTab='${k}';render();salvarEstado()">${l}</button>`).join('')}</div>`}
const irData=(v,k='cDia')=>`<label class="sr-only" for="c_data_${k}">Escolher o dia</label><input class="inp cdata" id="c_data_${k}" type="date" data-nodraft="1" value="${v}" onchange="if(this.value){S.${k}=this.value;render()}" title="Escolher o dia">`;
function mvDia(k,n){let d=S[k]||HJ;do{d=addDia(d,n)}while(!ehUtil(d));S[k]=d;render()}
/* painel de andamento: etapa por etapa, por sistema, com quem concluiu e a hora */
/* marcação por sistema: numa rotina que vale para os dois sistemas, cada marcação guarda em qual foi feita */
const multiSis=r=>(r.sis||[]).length>1;
const sisDoF=(f,r)=>f.sis||((r.sis||[])[0]||'');
const feitosSis=(r,dia,x)=>feitosDe(r.id,dia).filter(f=>!multiSis(r)||sisDoF(f,r)===x);
function estadoSis(r,dia,x){const fs=feitosSis(r,dia,x),nt=!fs.some(f=>stF(f)==='feita')&&!!semMovDe(r.id,dia,x),fe=nt||fs.some(f=>stF(f)==='feita'),an=!fe&&fs.some(f=>stF(f)==='andamento');
 const atrasoDia=!fe&&(dia<HJ||(dia===HJ&&r.hora&&agoraHM()>r.hora));
 const tarde=fe&&fs.filter(f=>stF(f)==='feita').every(f=>(f.feitoEm||dia)>dia);
 return {fs,fe,an,bad:atrasoDia,tarde,nt}}
function andamento(dia,k,semNav){const grp=r=>procs().includes(r.etapa)?r.etapa:'',x=sisAtual(),L=D.cronograma.filter(r=>ocorre(r,dia)&&(r.sis||[]).includes(x));
 const nav=semNav?'':`<div class="cronbar"><div class="seg"><button onclick="mvDia('${k}',-1)" aria-label="Dia útil anterior">‹</button><span>${dia===HJ?'Hoje, ':''}${diaTxt(dia)}</span><button onclick="mvDia('${k}',1)" aria-label="Próximo dia útil">›</button></div>${irData(dia,k)}${dia!==HJ?`<button class="btn" onclick="S.${k}='';render()">Hoje</button>`:''}</div>`;
 const sw=`<div class="seg sis-seg" role="tablist" aria-label="Sistema">${sists().map((y,i)=>`<button role="tab" aria-selected="${y===x}" class="${y===x?'on':''}" onclick="S.cSis=sists()[${i}];render();salvarEstado()">${esc(y)}${emTeste(y)?' <small>em teste</small>':''}</button>`).join('')}</div>`;
 const fora=ausHoje(dia),topo=`<div class="ph"><h2>Andamento do departamento</h2>${sw}</div>${nav}${fora.length?`<p class="meta" style="margin:0 0 6px">${fora.map(a=>`${esc(nomeDe(a.pid))}: ${esc(a.tipo.toLowerCase())}`).join(' · ')}</p>`:''}`;
 if(!L.length){const px=proxComRotina(dia,r=>(r.sis||[]).includes(x));return `<div class="panel and">${topo}<p class="meta" style="margin:0 0 8px">Nenhuma rotina do ${esc(x)} prevista neste dia.</p>${px?`<button class="btn pri" onclick="S.${k}='${px}';${semNav?"S.cDia='"+px+"';":''}render()">Ver ${diaTxt(px)}</button>`:''}</div>`}
 const E=[...etapasDoSis(x,L),...(L.some(r=>!grp(r))?['']:[])];
 const cel=g=>{const l=L.filter(r=>grp(r)===g);if(!l.length)return '<td><span class="andn">—</span></td>';
  const xs=l.map(r=>({r,...estadoSis(r,dia,x)})),ok=xs.filter(o=>o.fe),an=xs.filter(o=>o.an),bad=xs.filter(o=>o.bad);
  const cls=ok.length===l.length?(ok.some(o=>o.tarde)?'wa':'ok'):bad.length?'bad':an.length||ok.length?'ac':'ne';
  const lab=ok.length===l.length?(xs.every(o=>o.nt)?'Não teve no dia':cls==='wa'?'Concluído com atraso':'Concluído'):bad.length?'Atrasado':ok.length?`${ok.length} de ${l.length} concluídas`:an.length?'Em andamento':'A fazer';
  const todosF=xs.flatMap(o=>o.fs),feitoPor=[...new Map(todosF.filter(f=>stF(f)==='feita').map(f=>[`${f.pid||f.nome}|${f.hora||''}`,`<span class="quemf">${avP(f.pid,f.nome,'avs')}${esc(f.nome||'—')}${f.hora?' · '+esc(f.hora):''}</span>`])).values()],emAnd=[...new Set(todosF.filter(f=>stF(f)==='andamento').map(f=>`● ${f.nome||'—'} iniciou ${hmDe(f.ini)}`))];
  const resp=[]; // o andamento mostra só o que foi feito e por quem; sem os nomes de quem ainda vai fazer
  const tit=xs.map(o=>`${o.r.t}: ${o.fe?'concluída':o.an?'em andamento':o.bad?'atrasada':'a fazer'}`).join('\n');
  const its=l.flatMap(r=>itensDe(r.id,dia)),itTxt=its.length?[`${its.filter(i=>i.feito).length} de ${its.length} itens feitos`]:[];
  if(cls==='ne'&&!itTxt.length)return '<td><span class="andn">—</span></td>'; // nada feito ainda: só um traço, sem "A fazer"
  return `<td><button class="andb ${cls}" title="${esc(tit)}" onclick="S.cTab='dia';S.cDia='${dia}';S.cQuem='';ir('rotinas')"><b>${lab}</b>${feitoPor.join('')}${[...emAnd,...resp,...itTxt].map(t=>`<span>${esc(t)}</span>`).join('')}</button></td>`};
 const geral=E.map(g=>{const l=L.filter(r=>grp(r)===g);if(!l.length)return null;const es=l.map(r=>estadoSis(r,dia,x));return {g:g||'Outras atividades',done:es.every(e=>e.fe),parc:es.some(e=>e.fe||e.an)}}).filter(Boolean);
 const lista=a=>a.length>1?a.slice(0,-1).join(', ')+' e '+a[a.length-1]:a[0]||'';
 const fe=geral.filter(o=>o.done).map(o=>o.g),pa=geral.filter(o=>!o.done&&o.parc).map(o=>o.g),fa=geral.filter(o=>!o.done&&!o.parc).map(o=>o.g);
 const frase=`${fe.length?`<b class="pos">Concluído:</b> ${esc(lista(fe))}. `:'<b>Nada concluído ainda.</b> '}${pa.length?`<b style="color:var(--accent)">Em andamento:</b> ${esc(lista(pa))}. `:''}${fa.length?`<b>Falta:</b> ${esc(lista(fa))}.`:pa.length?'':'<b class="pos">Tudo concluído no dia.</b>'}`;
 return `<div class="panel and">${topo}<p class="andf"><b>${esc(x)}${emTeste(x)?' (em teste)':''}</b> · ${frase}</p>
 <div class="tbl-wrap"><table class="andt"><thead><tr>${E.map(g=>`<th>${g?`${E.indexOf(g)+1}. ${esc(nomeEtS(g,x))}`:'Outras'}</th>`).join('')}</tr></thead><tbody><tr>${E.map(g=>cel(g)).join('')}</tr></tbody></table></div>
 ${quemFezDia(dia,L,E,x)}
 <p class="meta" style="margin:8px 0 0">Clique numa etapa para ver as rotinas e marcar. Cada pessoa marca o que ela fez.</p></div>`}
function quemFezDia(dia,L,E,x){const grp=r=>procs().includes(r.etapa)?r.etapa:'',P=new Map();
 colabs().forEach(p=>P.set(p.id,{n:p.n,c:{},pid:p.id}));
 L.forEach(r=>feitosSis(r,dia,x).forEach(f=>{const em=stF(f)==='andamento';const k=f.pid&&P.has(f.pid)?f.pid:([...P.entries()].find(([,v])=>norm(v.n)===norm(f.nome))?.[0]||f.pid||f.nome);if(!P.has(k))P.set(k,{n:f.nome||'—',c:{}});const o=P.get(k).c;(o[grp(r)]=o[grp(r)]||[]).push(em?`● ${r.t} · iniciou ${hmDe(f.ini)}`:`✓ ${r.t}${f.hora?' · '+f.hora:''}`)}));
 const rows=[...P.values()].filter(y=>Object.keys(y.c).length||colabs().some(p=>p.n===y.n));if(!rows.length)return '';
 return `<p class="eyebrow" style="margin:16px 0 6px">Quem fez o quê no dia · ${esc(x)}</p><div class="tbl-wrap"><table class="andt quem"><thead><tr><th>Pessoa</th>${E.map(g=>`<th>${g?esc(g):'Outras'}</th>`).join('')}</tr></thead><tbody>${rows.map(y=>`<tr><th scope="row"><span class="quemf">${avP(y.pid,y.n,'avs')}${esc(y.n)}</span></th>${E.map(g=>`<td>${(y.c[g]||[]).length?`<div class="qf">${y.c[g].map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:'<span class="andn" style="padding:6px 0">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function proxComRotina(dia,f){let d=dia;for(let i=0;i<120;i++){d=addDia(d,1);if(D.cronograma.some(r=>ocorre(r,d)&&f(r)))return d}return ''}
const avulsasDia=dia=>D.cronograma.filter(r=>r.freq==='avulsa'&&r.ativo!==false&&(!r.ini||dia>=r.ini)&&(!r.fim||dia<=r.fim)).sort(ordR);
const fazerHoje=(rid,dia)=>euFiz(rid,dia);
const SUGESTOES_OPC=['Repasse de polos','Adiantamento a fornecedor','Reembolso de despesas','Transferência entre contas','Pagamento urgente','Estorno ou devolução'];
function outrasOpcoes(dia){const L=avulsasDia(dia),pm=podeEditRot()&&dia<=HJ,tem=new Set(D.cronograma.filter(r=>r.freq==='avulsa').map(r=>norm(r.t)));
 const sug=podeEditRot()?SUGESTOES_OPC.filter(t=>!tem.has(norm(t))):[];
 const chip=r=>{const ft=feitosDe(r.id,dia),fe=ft.some(f=>stF(f)==='feita'),an=ft.some(f=>stF(f)==='andamento'),ms=stF(meuF(r.id,dia));
  return `<div class="opc ${fe?'on':an?'and':''}"><span class="opc-ck">${fe?'✓':an?'●':''}</span><span class="opc-t">${esc(r.t)}${ft.map(f=>`<small class="${stF(f)==='feita'?'':'emand'}">${esc(stF(f)==='feita'?`✓ ${f.nome||'—'}${f.hora?' '+f.hora:''}`:`● ${f.nome||'—'} desde ${hmDe(f.ini)}`)}${podeHora(f)?` <button class="lnk hr" onclick="editHora('${esc(f.id)}')">alterar</button>`:''}</small>`).join('')}</span>${pm?`<span class="opc-b">${botoesMarca(r.id,dia,ms)}</span>`:''}</div>`};
 return `<div class="qd-opc"><div class="opcs">${L.map(chip).join('')||'<span class="meta">Nenhuma opção ainda.</span>'}${podeEditRot()?`<button class="opc add" onclick="novaOpcao()">+ Nova opção</button>`:''}</div>${sug.length&&L.length<4?`<p class="meta" style="margin:8px 0 4px">Sugestões, clique para incluir na lista:</p><div class="opcs">${sug.map((t,i)=>`<button class="opc sug" onclick="addSugestao(${SUGESTOES_OPC.indexOf(t)})">+ ${esc(t)}</button>`).join('')}</div>`:''}</div>`}
function novaOpcao(){FORM={tipo:'_opc'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Outras atividades</p><h2 id="sheet-title">Nova opção</h2><p class="sub" style="font-size:13px">Escreva só uma vez. Depois ela aparece para todos como botão: é só clicar quando fizer.</p></div>
 <div class="fgrid one"><div><label class="lbl" for="op_t">Nome da atividade</label><input class="inp" id="op_t" placeholder="Repasse de polos" onkeydown="if(event.key==='Enter')salvaOpcao()"><p class="ferr" id="ope_t"></p></div>
 <div><label class="lbl" for="op_et">Etapa do processo · opcional</label><select class="inp" id="op_et"><option value="">Outras atividades</option>${procs().map(e=>`<option>${esc(e)}</option>`).join('')}</select></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaOpcao()">Incluir na lista</button></div></div>`;
 document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('op_t')?.focus(),30)}
const opcDoc=(t,etapa)=>({t,etapa:etapa||'',sis:[],rs:[],apoio:'',freq:'avulsa',dias:[],n:1,antes:0,data:'',hora:'',prio:'normal',obs:'',ini:'',fim:'',ativo:true,criado:HJ});
async function salvaOpcao(){const t=val('op_t');errEl('ope_t','');if(!t){errEl('ope_t','Dê um nome à atividade.');return}
 const ja=D.cronograma.find(r=>r.freq==='avulsa'&&norm(r.t)===norm(t));if(ja){if(ja.ativo===false){const {id,...b}=ja;await salvar('cronograma',id,{...b,ativo:true},'Opção reativada',`Reativou a opção "${t}"`);fechar()}else errEl('ope_t','Essa opção já existe.');return}
 if(await salvar('cronograma',null,opcDoc(t,val('op_et')),'Opção incluída',`Incluiu a opção "${t}" em outras atividades`))fechar()}
async function addSugestao(i){const t=SUGESTOES_OPC[i];if(!t||D.cronograma.some(r=>r.freq==='avulsa'&&norm(r.t)===norm(t)))return;await salvar('cronograma',null,opcDoc(t,''),'Opção incluída',`Incluiu a opção "${t}" em outras atividades`)}
function quickAvulsas(dia){const L=avulsasDia(dia),pend=L.filter(r=>exDe(r.id,dia)?.s!=='feita');if(dia>HJ||(!L.length&&!podeEditRot()))return '';
 return `<div class="panel"><div class="ph"><h2>Aconteceu hoje?</h2><span>clique no que foi feito</span></div><div class="cks">${pend.map(r=>`<button class="btn" onclick="fazerHoje('${r.id}','${dia}')" title="${esc(r.obs||'')}">✓ ${esc(r.t)}</button>`).join('')}${podeEditRot()?`<button class="btn ghost" onclick="editRot('',{freq:'avulsa',etapa:'',ini:'',rs:[],sis:[]})">+ Nova opção</button>`:''}</div>${L.length&&!pend.length?'<p class="meta" style="margin:8px 0 0">Tudo o que estava na lista já foi registrado neste dia.</p>':''}<p class="meta" style="margin:8px 0 0">Fica registrado com nome e hora. Para desfazer, clique no quadrado da atividade na lista abaixo.</p></div>`}
/* rotinas que valem sempre e foram programadas para começar depois: antecipa para hoje (só WAE; o Protheus começa em novembro) */
const paraComecar=()=>D.cronograma.filter(r=>r.freq!=='unica'&&r.freq!=='avulsa'&&!r.fim&&iniEf(r)&&iniEf(r)>HJ&&r.ini<='2026-11-01'&&(r.sis||[]).includes('WAE'));
async function autoOrganizar(){if(S._ao||!real()||S.sim||!podeCron()||!DB||!D.cronograma.length||!orgPendente())return;S._ao=true;try{await organizarModelo(true)}catch(e){}}
async function limparHorasModelo(){if(S._lh||!real()||S.sim||!podeEditRot()||!DB||!D.cronograma.length)return;S._lh=true;
 const L=D.cronograma.filter(r=>!r.horaLimpa&&!r.horaEditada&&((r.hora==='10:00'&&/^pagamento · todas as contas/i.test(r.t||''))||(r.hora==='14:30'&&/^pagamento · wae/i.test(r.t||''))));
 let k=0;for(const r of L){const {id,...b}=r;if(await salvar('cronograma',id,{...b,hora:'',horaLimpa:true,obs:/10h|14:30|regra/i.test(b.obs||'')?b.obs:((r.hora==='10:00'?'Regra: 10h todas as contas. ':'Regra: WAE a partir das 14:30. ')+(b.obs||'')).trim()},false,false))k++}
 if(k)log(`Tirou o horário padrão de ${k} rotinas de pagamento (a hora só entra se alguém escolher)`)}
async function comecarHoje(){const L=paraComecar();if(!L.length)return;
 if(!S.confCom){S.confCom=true;toast(`Clique de novo para começar hoje ${L.length} rotinas do WAE.`);render();setTimeout(()=>{S.confCom=false;render()},6000);return}S.confCom=false;
 let k=0;for(const r of L){const {id,...b}=r;if(await salvar('cronograma',id,{...b,ini:HJ},false,false))k++}
 if(!D.cronograma.some(r=>r.chave==='repasse-polos'||norm(r.t)===norm('Repasse de polos'))){await salvar('cronograma',null,{chave:'repasse-polos',etapa:'Pagamento',t:'Repasse de polos',sis:['WAE'],rs:[],apoio:'',freq:'avulsa',dias:[],n:1,antes:0,data:'',hora:'',prio:'normal',obs:'',ini:'',fim:'',ativo:true,criado:HJ},false,false)}
 log(`Começou o cronograma hoje com ${k} rotinas do WAE`);toast(`${k} rotinas começam hoje. É só clicar no que foi feito.`);S.cDia='';S.pDia='';render()}
const comecarBtn=()=>paraComecar().length&&podeEditRot()?`<div class="banner"><span>As rotinas do WAE que valem sempre estão programadas para começar só em ${fmt(paraComecar()[0].ini)}. Comece hoje para registrar o que já fazem no dia a dia.</span><button class="btn pri" onclick="comecarHoje()">${S.confCom?'Confirmar: começar hoje':'Começar hoje'}</button></div>`:'';
const sisAtual=()=>sists().includes(S.cSis)?S.cSis:sists()[0];
function quadroDia(dia,f){const grp=r=>procs().includes(r.etapa)?r.etapa:'',SS=[sisAtual()],L=D.cronograma.filter(r=>r.freq!=='avulsa'&&ocorre(r,dia)&&(!S.cQuem||rsDe(r).includes(S.cQuem)||feitosDe(r.id,dia).some(x=>x.pid===S.cQuem)));
 const G=[...etapasDoSis(SS[0],L),''];
 const comeca=x=>{const l=D.cronograma.filter(r=>(r.sis||[]).includes(x)&&r.freq!=='avulsa'&&r.freq!=='unica'&&r.ativo!==false&&r.ini&&r.ini>dia).map(iniEf).filter(d=>d>dia).sort();return l[0]||''};
 const cab=SS.map(x=>{const l=L.filter(r=>(r.sis||[]).includes(x)),k=l.filter(r=>exDe(r.id,dia)?.s==='feita').length,c=comeca(x);return `<div class="qd-h"><b>${esc(x)}</b>${emTeste(x)?'<small class="tag wa">em teste</small>':''}<span class="meta">${l.length?`${k} de ${l.length} feitas`:c?`começa em ${fmt(c)}`:'nada previsto'}</span>${!l.length&&c&&dia===HJ&&x==='WAE'&&paraComecar().length&&podeEditRot()?`<button class="btn pri qd-start" onclick="comecarHoje()">${S.confCom?'Confirmar: começar hoje':'Começar hoje'}</button>`:''}</div>`}).join('');
 const sw=`<div class="sisw" role="tablist" aria-label="Sistema">${sists().map((x,i)=>{const l=D.cronograma.filter(r=>r.freq!=='avulsa'&&ocorre(r,dia)&&(r.sis||[]).includes(x)),k=l.filter(r=>estadoSis(r,dia,x).fe).length,c=comeca(x);return `<button role="tab" aria-selected="${x===SS[0]}" class="${x===SS[0]?'on':''}" onclick="S.cSis=sists()[${i}];render();salvarEstado()"><b>${esc(x)}</b>${emTeste(x)?'<small class="tag wa">em teste</small>':''}<span>${l.length?`${k} de ${l.length} finalizadas`:c?`começa em ${fmt(c)}`:'nada previsto'}</span></button>`}).join('')}</div>`;
 const refAviso=dia<HJ?`<div class="banner"><span>Você está marcando o que se refere a <b>${fmt(dia)}</b>. Fica registrado que foi feito hoje, ${fmt(HJ)}. Para marcar só uma parte, use <b>Em andamento</b>; quando terminar, <b>Finalizado</b>.</span></div>`:'';
 return `${sw}${refAviso}<div class="qd" style="--n:1">${G.map(g=>{const i=G.indexOf(g);
  const temCols=L.some(r=>grp(r)===g);
  const nfx=g?fluxoAtivos(SS[0]).filter(f=>f.etapa===g).length:0;
  return `<div class="qd-row ${g?'':'outras'}"><h3>${g?`<span class="meta">${i+1}.</span> `:''}${esc(g?nomeEtS(g,SS[0]):'Outras atividades')}${g?'':'<small>Clique no que fez</small>'}${nfx?`<small class="fx-n">${nfx} ${nfx>1?'e-mails':'e-mail'} nesta etapa</small>`:''}</h3>${g||temCols?SS.map(x=>{const l=L.filter(r=>grp(r)===g&&(r.sis||[]).includes(x)).sort(ordR);
   return `<div class="qd-col"><p class="qd-sis">${esc(x)}</p>${l.length?l.map(r=>linOc(r,dia,false,true)).join(''):'<p class="meta qd-vazio">—</p>'}</div>`}).join(''):''}${g?'':outrasOpcoes(dia)}</div>`}).join('')}</div>`}
function cDia(n){let d=S.cDia||HJ;do{d=addDia(d,n)}while(!ehUtil(d));S.cDia=d;render()}
function cronDia(){const dia=S.cDia||HJ,f0=filtroCron(),f=r=>f0(r)&&(r.sis||[]).includes(sisAtual()),L=D.cronograma.filter(r=>ocorre(r,dia)&&f(r)).sort(ordR),c=contaDia(dia,f);
 const nav2=`<div class="seg"><button onclick="cDia(-1)" aria-label="Dia útil anterior">‹</button><span>${diaTxt(dia)}</span><button onclick="cDia(1)" aria-label="Próximo dia útil">›</button></div>${irData(dia)}${dia!==HJ?`<button class="btn" onclick="S.cDia='';render()">Hoje</button>`:''}`;
 const ant=dia===HJ?atrasosCron(f).filter(o=>o.dia<HJ).sort((a,b)=>a.dia<b.dia?-1:1):[];
 const grupos=[...procs(),''].map(g=>[g,L.filter(r=>(procs().includes(r.etapa)?r.etapa:'')===g)]).filter(([,l])=>l.length);
 const tav=D.tarefas.filter(t=>(!S.cQuem||t.r===S.cQuem)&&(t.prazo===dia||(dia===HJ&&atrasada(t)))&&(dir()||pode('ver_tudo')||t.r===S.perfil));
 return `<div class="cronbar">${nav2}</div>${comecarBtn()}${andamento(dia,'cDia',true)}${quadroFluxo(dia)}${cronFiltros(true)}`+
 `<div class="stats"><div class="stat"><p>Previstas</p><strong>${c.tot}</strong><small>${dia===HJ?'hoje':fmt(dia)}</small></div><div class="stat"><p>Concluídas</p><strong style="color:${c.tot&&c.ok===c.tot?'var(--ok)':'var(--ink)'}">${c.ok}</strong><small>${c.tot?Math.round(c.ok/c.tot*100):0}%</small></div><div class="stat"><p>Em andamento</p><strong style="color:${c.and?'var(--accent)':'var(--ink)'}">${c.and}</strong><small>começadas</small></div><div class="stat"><p>Atrasadas</p><strong style="color:${c.atr+ant.length?'var(--bad)':'var(--ink)'}">${c.atr+ant.length}</strong><small>${ant.length?`${ant.length} de dias anteriores`:'passaram do horário'}</small></div></div>`+
 (()=>{const E=D.eventos.filter(e=>vejoEv(e)&&evOcorre(e,dia)&&(!S.cQuem||e.quem!=='pessoas'||(e.ps||[]).includes(S.cQuem))).sort((a,b)=>(a.hora||'99').localeCompare(b.hora||'99'));
  return E.length?`<div class="panel"><div class="ph"><h2>Compromissos do dia</h2><span>${E.length}</span></div>${E.map(e=>`<div class="row"><span class="meta" style="width:44px">${esc(e.hora||'')}</span><div class="t"><b>${esc(e.t)}</b><span>${esc(quemEv(e))}${e.obs?' · '+esc(e.obs):''}</span></div><span class="tag ${corEv(e)}">${esc(e.tipo||'Outro')}</span>${podeEditRot()?`<button class="btn ghost" onclick="editEv('${e.id}')">Editar</button>`:''}</div>`).join('')}</div>`:''})()+
 (ant.length?`<div class="panel late-p"><div class="ph"><h2>Ficaram para trás</h2><span>${ant.length} ${ant.length>1?'rotinas':'rotina'} de dias anteriores</span></div>${ant.map(o=>linOc(o.r,o.dia,true)).join('')}</div>`:'')+
 (L.length||D.cronograma.length?quadroDia(dia,f):`<div class="panel">${vazio('Cronograma ainda não montado','Monte o cronograma com as rotinas de cada pessoa.',null)}${podeCron()?'<div style="text-align:center;margin-top:-8px;padding-bottom:12px"><button class="btn pri" onclick="montarModelo()">Montar o cronograma</button></div>':''}</div>`)+
 (tav.length?`<div class="panel"><div class="ph"><h2>Tarefas avulsas</h2><span>${tav.length}</span></div>${tav.map(linTar).join('')}</div>`:'')}
function cronSemana(){const base=S.cDia||HJ,d0=new Date(base+'T12:00');d0.setDate(d0.getDate()-((d0.getDay()+6)%7));const dias=[0,1,2,3,4].map(i=>addDia(isoD(d0),i));
 const f=filtroCron(),L=D.cronograma.filter(r=>f(r)&&dias.some(d=>ocorre(r,d))).sort(ordR);
 const sim={ok:'✓',wa:'✓',ac:'●',bad:'!',ne:''};
 const nav2=`<div class="seg"><button onclick="S.cDia=addDia('${base}',-7);render()" aria-label="Semana anterior">‹</button><span>Semana de ${fmt(dias[0])} a ${fmt(dias[4])}</span><button onclick="S.cDia=addDia('${base}',7);render()" aria-label="Próxima semana">›</button></div>${irData(base)}${base!==HJ?`<button class="btn" onclick="S.cDia='';render()">Hoje</button>`:''}`;
 return `<div class="cronbar">${nav2}</div>${cronFiltros()}<div class="panel">${L.length?`<div class="tbl-wrap"><table class="grade wkt"><thead><tr><th>Rotina</th>${dias.map(d=>`<th class="${d===HJ?'hj':''}">${SEM[new Date(d+'T12:00').getDay()]} ${fmt(d)}</th>`).join('')}</tr></thead><tbody>${L.map(r=>`<tr><td><b style="font-weight:500">${esc(r.t)}</b><br><span class="meta">${esc(r.etapa||'Outras')} · ${esc(nomesRs(r))}${r.hora?' · '+esc(r.hora):''}</span></td>${dias.map(d=>{if(!ocorre(r,d))return '<td><span class="wk off" aria-hidden="true"></span></td>';const st=stOc(r,d),pm=podeMarcar(r)&&d<=HJ;return `<td><button class="wk ${st[0]}" ${pm?'':'disabled'} onclick="euFiz('${r.id}','${d}')" title="${esc(r.t)} · ${fmt(d)} · ${st[1]}${feitosDe(r.id,d).length?' · '+feitosDe(r.id,d).map(f=>f.nome).join(', '):''}" aria-label="${esc(r.t)} ${fmt(d)}: ${st[1]}">${sim[st[0]]}</button></td>`}).join('')}</tr>`).join('')}</tbody></table></div>`:vazio('Nenhuma rotina nesta semana','')}</div>
 <div class="legend"><span><i style="background:var(--ok)"></i>Concluída</span><span><i style="background:var(--accent)"></i>Em andamento</span><span><i style="background:var(--bad)"></i>Atrasada</span><span><i style="background:var(--warn)"></i>Concluída com atraso</span><span><i style="background:var(--line)"></i>A fazer</span></div>`}
function cronQuem(){const vig=D.cronograma.filter(r=>r.ativo!==false&&(!r.fim||r.fim>=HJ)),S2=sists(),G=[...procs(),''];
 const cel=(g,s)=>{const ns=[...new Set(vig.filter(r=>(procs().includes(r.etapa)?r.etapa:'')===g&&(r.sis||[]).includes(s)).flatMap(rsDe))].map(nomeDe);return ns.length?ns.map(esc).join('<br>'):'<span class="meta">—</span>'};
 const ps=pessoasCron(),ap=[...new Set(vig.map(r=>r.apoio).filter(Boolean))];
 return `<div class="panel"><div class="ph"><h2>Etapa do processo × sistema</h2><span>rotinas em vigor</span></div><div class="tbl-wrap"><table class="grade lista"><thead><tr><th>Etapa</th>${S2.map(s=>`<th>${esc(s)}</th>`).join('')}</tr></thead><tbody>${G.filter(g=>g||vig.some(r=>!procs().includes(r.etapa))).map((g,i)=>`<tr><td><b style="font-weight:500">${g?`${i+1}. ${esc(g)}`:'Outras atividades'}</b></td>${S2.map(s=>`<td>${cel(g,s)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>
 <div class="cards">${ps.map(p=>{const l=vig.filter(r=>rsDe(r).includes(p)).sort(ordR);return `<div class="panel"><div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">${avP(p,nomeDe(p))}<b style="font-weight:500">${esc(nomeDe(p))}</b><span class="meta" style="margin-left:auto">${l.length} ${l.length>1?'rotinas':'rotina'}</span></div>${l.map(r=>`<div class="row"><div class="t"><b style="font-weight:400">${esc(r.t)}</b><span>${esc(r.etapa||'Outras')} · ${esc((r.sis||[]).join(', '))} · ${esc(freqTxt(r))}</span></div>${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}</div>`).join('')}</div>`}).join('')}</div>`+
 (ap.length?note(`Apoio: ${ap.map(esc).join(', ')}.`):'')}
function cronRotinas(){const pc=podeEditRot(),L=[...D.cronograma].sort(ordR);
 const lin=r=>`<div class="row"><div class="t"><b>${esc(r.t)}</b><span>${esc(r.etapa||'Outras atividades')} · ${esc(freqTxt(r))} · ${esc((r.sis||[]).map(sisTxt).join(', ')||'Sem sistema')} · ${esc(nomesRs(r))}${r.apoio?' · apoio: '+esc(r.apoio):''}</span>${r.obs?`<span>${esc(r.obs)}</span>`:''}${r.editadoPor?`<span>Editada por ${esc(r.editadoPor)} em ${fmt((r.editadoEm||'').slice(0,10))} às ${hmDe(r.editadoEm)}</span>`:''}</div>${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}${r.ativo===false?'<span class="tag ne">Pausada</span>':r.fim&&r.fim<HJ?'<span class="tag ne">Encerrada</span>':r.ini&&r.ini>HJ?`<span class="tag ac">Começa em ${fmt(r.ini)}</span>`:''}${pc?`<button class="btn ghost" onclick="editRot('${r.id}')">Editar</button>`:''}</div>`;
 const per=[...new Set(L.filter(r=>r.fim&&r.freq!=='unica'&&r.freq!=='avulsa').map(r=>(r.ini||'')+'|'+r.fim))].sort((a,b)=>a.split('|')[1].localeCompare(b.split('|')[1]));
 const blocos=[['Valem sempre','A ordem do processo e o D-5 valem todos os dias.',L.filter(r=>!r.fim&&r.freq!=='unica'&&r.freq!=='avulsa')],
  ['Opções de outras atividades','Aparecem como botões no dia. Para tirar da lista sem perder o histórico, edite e desmarque "Rotina ativa".',L.filter(r=>r.freq==='avulsa')],
  ...per.filter(()=>true).map(k=>{const [a,b]=k.split('|');return [`Período especial: ${a?fmt(a)+' a ':'até '}${fmt(b)}`,'Valem só neste período. Depois saem sozinhas do cronograma.',L.filter(r=>r.fim&&r.freq!=='unica'&&r.freq!=='avulsa'&&(r.ini||'')+'|'+r.fim===k)]}),
  ['Demandas de um dia só','Inclui as que vieram de chamados.',L.filter(r=>r.freq==='unica')]].filter(b=>b[2].length);
 const etp=l=>{let ult=null;return l.map(r=>{const g=r.etapa||'Outras atividades',h=g!==ult?`<p class="eyebrow" style="margin:14px 0 2px">${esc(g)}</p>`:'';ult=g;return h+lin(r)}).join('')};
 return comecarBtn()+(orgPendente()?`<div class="banner"><span>Há uma versão nova do cronograma: pagamento em D-5 e o fluxo do WAE (Pagamento no banco › Comprovantes › Controladoria › Lançamentos › Pagar títulos › Conciliar › Impressão de caixas). As rotinas são atualizadas sem perder o que já foi marcado, e as que saíram ficam pausadas.</span><button class="btn pri" onclick="organizarModelo()">Organizar agora</button></div>`:'')+
 (L.length?blocos.map(([t,d,l])=>`<div class="panel"><div class="ph"><h2>${t}</h2><span>${l.length} ${l.length>1?'rotinas':'rotina'}</span></div><p class="meta" style="margin:0">${d}</p>${etp(l)}</div>`).join(''):`<div class="panel">${vazio('Nenhuma rotina cadastrada','Use o modelo pronto ou cadastre cada rotina com etapa, sistema, responsáveis e horário.',null)}${podeCron()?'<div style="text-align:center;margin-top:-8px;padding-bottom:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn" onclick="editRot()">Nova rotina</button><button class="btn pri" onclick="montarModelo()">Montar o cronograma</button></div>':''}</div>`)+
 note('Pausar ou dar data final a uma rotina mantém o histórico. Ao excluir, os registros de dias já feitos deixam de contar.')}
function cronTri(){const ini=mesesTri(S.tri)[0]+'-01',fim=fimTri(S.tri);
 const lin=(n,o)=>`<tr><td>${n}</td><td>${o.prev}</td><td>${o.ok}</td><td>${o.atr?`<span class="tag wa">${o.atr}</span>`:'0'}</td><td>${o.pend?`<span class="tag bad">${o.pend}</span>`:'0'}</td><td>${o.pct===null?'—':`<span class="${o.pct<70?'neg':o.pct>=90?'pos':''}">${o.pct}%</span>`}</td></tr>`;
 const th='<th>Previstas até hoje</th><th>No dia</th><th>Com atraso</th><th>Não feitas</th><th>No prazo</th>';
 const G=[...procs(),''].filter(g=>D.cronograma.some(r=>(procs().includes(r.etapa)?r.etapa:'')===g));
 return `<div class="cronbar">${triNav()}<span class="meta">${mesesTri(S.tri).map(mesCurto).join(' · ')}</span></div>
 <div class="panel"><div class="ph"><h2>Por pessoa</h2></div><div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Pessoa</th>${th}</tr></thead><tbody>${pessoasCron().map(p=>lin(esc(nomeDe(p)),resumoCron(r=>rsDe(r).includes(p),ini,fim))).join('')||'<tr><td colspan="6" style="text-align:left" class="meta">Sem rotinas no trimestre.</td></tr>'}${lin('<b style="font-weight:500">Departamento</b>',resumoCron(()=>true,ini,fim))}</tbody></table></div></div>
 <div class="panel"><div class="ph"><h2>Por etapa do processo</h2></div><div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Etapa</th>${th}</tr></thead><tbody>${G.map(g=>lin(esc(g||'Outras atividades'),resumoCron(r=>(procs().includes(r.etapa)?r.etapa:'')===g,ini,fim))).join('')}</tbody></table></div></div>`+
 note('Cada dia em que a rotina estava prevista conta uma vez. Concluir depois do dia conta como atraso. Esses números entram nos prazos cumpridos de cada pessoa em Equipe e metas e no feedback do trimestre.')}
/* cadastro de rotina */
function outraAtiv(dia){editRot('',{freq:'unica',data:dia||S.cDia||HJ,etapa:'',ini:''})}
function editRot(id,pre){const r=id?D.cronograma.find(x=>x.id===id):{...{freq:'diaria',rs:S.cQuem?[S.cQuem]:[],sis:S.cSis?[S.cSis]:[],etapa:procs()[0],prio:'normal',ini:HJ,ativo:true,dias:[1],n:1,antes:0},...(pre||{})};if(!r)return;
 FORM={tipo:'_rot',id:id||'',del:false};const ps=colabs(),SS=[...new Set([...sists(),...(r.sis||[])])];
 const ck=(id2,on,txt)=>`<label class="ck"><input type="checkbox" id="${id2}" ${on?'checked':''}> ${esc(txt)}</label>`;
 const ets=[...new Set([...procs(),...(r.etapa?[r.etapa]:[])])];
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma</p><h2 id="sheet-title">${id?'Editar rotina':pre?'Outra atividade':'Nova rotina'}</h2><p class="sub" style="font-size:13px">Atividade que se repete, com etapa do processo, sistema, responsáveis e horário. Cada pessoa marca em andamento e concluída no dia.</p></div>
 <div class="fgrid">
 <div class="full"><label class="lbl" for="rt_t">Descrição</label><input class="inp" id="rt_t" value="${esc(r.t||'')}" placeholder="Baixa no WAE"><p class="ferr" id="rte_t"></p></div>
 <div><label class="lbl" for="rt_et">Etapa do processo</label><select class="inp" id="rt_et">${ets.map(e=>`<option ${e===r.etapa?'selected':''}>${esc(e)}</option>`).join('')}<option value="" ${!r.etapa?'selected':''}>Outras atividades</option></select></div>
 <div><label class="lbl" for="rt_prio">Prioridade</label><select class="inp" id="rt_prio"><option value="normal">Normal</option><option value="atencao" ${r.prio==='atencao'?'selected':''}>Atenção (avisa no dia anterior)</option></select></div>
 <div class="full"><span class="lbl">Sistema</span><div class="cks">${SS.map((s,i)=>ck('rt_s_'+i,(r.sis||[]).includes(s),s)).join('')}</div></div>
 <div class="full"><span class="lbl">Responsáveis</span><div class="cks">${ps.map(p=>ck('rt_r_'+p.id,(r.rs||[]).includes(p.id),p.n)).join('')||'<span class="meta">Cadastre a equipe em Equipe e metas.</span>'}</div><p class="ferr" id="rte_r"></p></div>
 <div class="full"><label class="lbl" for="rt_apoio">Apoio · opcional</label><input class="inp" id="rt_apoio" value="${esc(r.apoio||'')}" placeholder="Evandro (Protheus)"></div>
 <div><label class="lbl" for="rt_freq">Quando acontece</label><select class="inp" id="rt_freq" onchange="rotVis()">${FREQS.map(([k,l])=>`<option value="${k}" ${k===r.freq?'selected':''}>${l}</option>`).join('')}</select></div>
 <div><label class="lbl" for="rt_hora">Horário · opcional</label><input class="inp" id="rt_hora" type="time" value="${esc(r.hora||'')}"><p class="meta" style="margin:4px 0 0">Passou do horário sem concluir, vira atraso.</p></div>
 <div class="full" id="rtw_dias"><span class="lbl">Dias da semana</span><div class="cks">${[1,2,3,4,5].map(d=>ck('rt_d_'+d,(r.dias||[]).map(Number).includes(d),SEM[d])).join('')}</div></div>
 <div id="rtw_n"><label class="lbl" for="rt_n" id="rtl_n">Dia</label><input class="inp" id="rt_n" type="number" min="1" max="31" value="${+r.n||1}"></div>
 <div id="rtw_antes"><label class="lbl" for="rt_antes">Fazer quantos dias úteis antes · opcional</label><input class="inp" id="rt_antes" type="number" min="0" max="10" value="${+r.antes||0}"><p class="meta" style="margin:4px 0 0">1 = um dia antes do vencimento (D-1).</p></div>
 <div id="rtw_data"><label class="lbl" for="rt_data">Data</label><input class="inp" id="rt_data" type="date" value="${esc(r.data||'')}"></div>
 <div><label class="lbl" for="rt_ini">Vale a partir de</label><input class="inp" id="rt_ini" type="date" value="${esc(r.ini||'')}"></div>
 <div><label class="lbl" for="rt_fim">Até · opcional</label><input class="inp" id="rt_fim" type="date" value="${esc(r.fim||'')}"><p class="meta" style="margin:4px 0 0">Vazio: continua valendo.</p></div>
 <div class="full"><label class="lbl" for="rt_obs">Observação · opcional</label><textarea class="inp" id="rt_obs" style="min-height:60px" placeholder="Os polos têm outro horário">${esc(r.obs||'')}</textarea></div>
 <div class="full">${ck('rt_ativo',r.ativo!==false,'Rotina ativa')}</div><p class="ferr full" id="rte_freq"></p></div>
 <div class="foot"><div>${id&&podeCron()?`<button class="btn danger" id="bdel" onclick="delRot()">Excluir</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaRot()">${id?'Salvar alterações':'Cadastrar rotina'}</button></div></div>`;
 document.getElementById('ov').hidden=false;rotVis();setTimeout(()=>document.getElementById('rt_t')?.focus(),30)}
function rotVis(){const f=val('rt_freq'),sh=(id,on)=>{const e=document.getElementById(id);if(e)e.style.display=on?'':'none'};
 sh('rtw_dias',f==='semanal');sh('rtw_n',f==='mensal_util'||f==='mensal_dia');sh('rtw_antes',f==='mensal_dia');sh('rtw_data',f==='unica');
 const l=document.getElementById('rtl_n');if(l)l.textContent=f==='mensal_util'?'Qual dia útil (1 = primeiro)':'Dia do mês (vencimento)'}
async function salvaRot(){['rte_t','rte_r','rte_freq'].forEach(e=>errEl(e,''));
 const t=val('rt_t'),freq=val('rt_freq'),ant=FORM.id?D.cronograma.find(x=>x.id===FORM.id):null,SS=[...new Set([...sists(),...(ant?.sis||[])])];
 const sis=SS.filter((s,i)=>document.getElementById('rt_s_'+i)?.checked),rs=colabs().filter(p=>document.getElementById('rt_r_'+p.id)?.checked).map(p=>p.id);
 const dias=[1,2,3,4,5].filter(d=>document.getElementById('rt_d_'+d)?.checked),n=Math.round(+val('rt_n')||0),antes=Math.max(0,Math.round(+val('rt_antes')||0)),data=val('rt_data'),ini=val('rt_ini'),fim=val('rt_fim');let ok=true;
 if(!t){errEl('rte_t','Descreva a rotina.');ok=false}
 if(!rs.length&&freq!=='avulsa'){errEl('rte_r','Escolha ao menos um responsável.');ok=false}
 if(freq==='semanal'&&!dias.length){errEl('rte_freq','Escolha ao menos um dia da semana.');ok=false}
 if(freq==='mensal_util'&&!(n>=1&&n<=23)){errEl('rte_freq','Use um dia útil de 1 a 23.');ok=false}
 if(freq==='mensal_dia'&&!(n>=1&&n<=31)){errEl('rte_freq','Use um dia de 1 a 31.');ok=false}
 if(freq==='unica'&&!data){errEl('rte_freq','Informe a data.');ok=false}
 if(ini&&fim&&fim<ini){errEl('rte_freq','A data final é antes da inicial.');ok=false}
 if(!ok)return;const {id:_,...b}=ant||{criado:HJ};
 if(await salvar('cronograma',FORM.id||null,{...b,horaEditada:!!val('rt_hora'),horaLimpa:true,editadoPor:pessoa(S.perfil)?.n||quemSou(),editadoEm:new Date().toISOString(),t,etapa:val('rt_et'),prio:val('rt_prio'),sis,rs,apoio:val('rt_apoio'),freq,dias,n,antes,data,hora:val('rt_hora'),ini,fim,obs:val('rt_obs'),ativo:document.getElementById('rt_ativo').checked},ant?'Rotina atualizada':'Rotina cadastrada',`${ant?'Alterou':'Cadastrou'} a rotina "${t}" do cronograma`))fechar()}
async function delRot(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
 const r=D.cronograma.find(x=>x.id===FORM.id);try{await DB.collection('cronograma').doc(FORM.id).delete();log(`Excluiu a rotina "${r?.t||''}" do cronograma`);toast('Rotina excluída');fechar()}catch(e){toast('Não foi possível excluir.')}}
/* ajustes: etapas, sistemas e módulos guardados */
function cfgCron(){FORM={tipo:'_cfgcron',listas:{et:[...procs()],sis:[...sists()],teste:Array.isArray(CFG.cronTeste)?[...CFG.cronTeste]:['Protheus']}};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma</p><h2 id="sheet-title">Ajustes</h2><p class="sub" style="font-size:13px">Etapas do processo, sistemas usados e quais telas antigas ficam no menu.</p></div>
 <div class="fgrid one"><div><span class="lbl">Etapas do processo (na ordem em que acontecem)</span>${chipsEd('et','Ex.: Aprovação')}</div>
 <div><span class="lbl">Sistemas</span>${chipsEd('sis','Ex.: Internet banking')}</div>
 <div><span class="lbl">Sistemas em teste</span>${chipsEd('teste','Ex.: Protheus')}<p class="meta" style="margin:4px 0 0">Aparecem com a marca "em teste". Tire daqui quando o sistema passar a valer de vez.</p></div>
 <div><span class="lbl">Guardados para depois (ligue quando quiser usar)</span>${MODS.map(([k,n,d])=>`<label class="perm"><input type="checkbox" id="md_${k}" ${modOn(k)?'checked':''}><span><b>${n}</b><small>${d}</small></span></label>`).join('')}</div>
 <div><span class="lbl">Modelo pronto</span><div style="display:flex;gap:8px;flex-wrap:wrap">${D.cronograma.length?`<button class="btn" type="button" onclick="organizarModelo()">Organizar com o modelo atualizado</button>`:`<button class="btn" type="button" onclick="montarModelo()">Montar o cronograma</button>`}</div><p class="meta" style="margin:4px 0 0">Pagamento em D-5. WAE: Pagamento no banco › Comprovantes › Controladoria › Lançamentos › Pagar títulos › Conciliar › Impressão de caixas. Os responsáveis continuam como estão em cada rotina. Atualiza as rotinas sem apagar nada; as que saíram do fluxo ficam pausadas.</p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfgCron()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaCfgCron(){const L=FORM.listas;if(!L.et.length||!L.sis.length){toast('Deixe ao menos uma etapa e um sistema.');return}
 const modulos=Object.fromEntries(MODS.map(([k])=>[k,!!document.getElementById('md_'+k)?.checked]));
 try{await DB.doc('config/estrutura').set({...CFG,cronEtapas:L.et,cronSis:L.sis,cronTeste:L.teste,modulos});log('Alterou os ajustes do cronograma');toast('Ajustes salvos');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar os ajustes.':'Não foi possível salvar.')}}
/* departamentos (usados pelos chamados) quando a tela de entregas está guardada */
function gerirDeps(){FORM={tipo:'_deps'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamados</p><h2 id="sheet-title">Departamentos</h2><p class="sub" style="font-size:13px">Áreas que abrem chamados e enviam documentos para o financeiro.</p></div>
 <div>${D.departamentos.length?D.departamentos.map(d=>`<div class="row"><div class="t"><b>${esc(d.n)}</b><span>${esc(d.contato||'Sem contato')}${d.emails?' · '+esc(d.emails):''}</span></div><button class="btn" onclick="abrir('departamento','${esc(d.id)}')">Editar</button></div>`).join(''):vazio('Nenhum departamento ainda','')}</div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" onclick="abrir('departamento')">Novo departamento</button></div></div>`;
 document.getElementById('ov').hidden=false}
/* modelo pronto: cronograma de novembro (transição WAE → Protheus) */
/* modelo do departamento. "chave" identifica cada rotina para atualizações futuras sem duplicar */
/* modelo do departamento, uma rotina por sistema (WAE e Protheus lado a lado).
   "chave" identifica cada rotina; "alias" são as chaves e títulos das versões anteriores, para atualizar no lugar */
/* Análise com IA: desligada (a chave da IA é paga). Para ligar, CFG.iaLigada=true. */
const iaOn=()=>CFG.iaLigada===true;
const MODELO_VER=6;
/* fluxo do WAE, nesta ordem (padrão do contas a pagar) */
const FLUXO_WAE=['Pagamento','Comprovantes','Controladoria','Lançamento','Baixa','Conciliação','Impressão de caixas'];
/* rotinas que saíram do modelo: ficam pausadas (nada é apagado; dá para reativar em Editar) */
const PAUSAR_MODELO=['ident-wae','confer-wae','pagnov-wae','pagd1-wae','impnov-wae','pagnov-pro','impnov-pro',
 // por enquanto: WAE só Lançamento, Baixa e Conciliação; Protheus só Lançar, Pagar e Conciliar (pausadas, nada é apagado)
 'pag1430-wae','comprov-wae','controla-wae','caixas-wae','polos-wae','folha-wae','imp-wae','repasse-polos','ident-pro','confer-pro','baixa-pro'];
function modeloCron(){const EV='Evandro (Protheus)',N0='2026-11-01',L=[];
 // responsáveis não ficam no modelo: cada rotina mantém quem já estava nela e a equipe define o resto
 const r=(chave,etapa,t,sis,x,alias)=>L.push({chave,etapa,t,sis:[sis],rs:[],apoio:'',freq:'diaria',dias:[],n:1,antes:0,data:'',hora:'',prio:'normal',obs:'',ini:N0,fim:'',ativo:true,mv:MODELO_VER,...(x||{}),_alias:alias||[]});
 const W='WAE',P='Protheus',D5='D-5: pagar 5 dias úteis antes do vencimento.';
 // WAE: Pagamento no banco > Envio de comprovantes > Envio para controladoria > Lançamentos > Pagar títulos > Conciliar > Impressão de caixas
 r('pag1430-wae','Pagamento','Pagamento no banco (D-5)',W,{obs:D5+' WAE a partir das 14:30.'},['pag-wae','Pagamento · WAE','Pagamento · WAE a partir das 14:30']);
 r('comprov-wae','Comprovantes','Envio de comprovantes',W,{obs:'Depois do pagamento no banco.'});
 r('controla-wae','Controladoria','Envio para a controladoria',W,{obs:'Comprovantes enviados para controladoria@fatecie.edu.br.'});
 r('lanc-wae','Lançamento','Lançamentos no WAE',W,{},['Lançamento no WAE']);
 r('baixa-wae','Baixa','Pagar títulos no WAE',W,{},['Baixa no WAE']);
 r('concil-wae','Conciliação','Conciliar',W,{},['concil','Conciliação bancária']);
 r('caixas-wae','Impressão de caixas','Impressão de caixas',W,{});
 r('polos-wae','Pagamento','Pagamento dos polos',W,{obs:'Os polos têm outro horário. Ajuste o horário nesta rotina.'},['pag-polos','Pagamento dos polos']);
 r('folha-wae','Pagamento','Folha de pagamento',W,{prio:'atencao',freq:'mensal_util',n:5,obs:'Atenção: prazo até o 5º dia útil. Confirme valores e data com o RH.'},['folha','Folha de pagamento']);
 r('imp-wae','Pagamento','Impostos do dia 20 (D-5)',W,{prio:'atencao',freq:'mensal_dia',n:20,antes:5,obs:'Atenção: confira as guias. '+D5},['impd1-wae','imp','Impostos do dia 20 (D-1)']);
 r('repasse-polos','Pagamento','Repasse de polos',W,{freq:'avulsa',ini:''},['Repasse de polos']);
 // Protheus: mesmo fluxo de antes, com pagamento em D-5
 r('ident-pro','Identificação','Identificar as contas a pagar (D-5)',P,{obs:'Contas que vencem daqui a 5 dias úteis.'});
 r('confer-pro','Conferência','Conferir documentos, valores, vencimentos e centro de custo',P,{obs:'Contas identificadas no D-5.'});
 r('lanc-pro','Lançamento','Lançamento no Protheus',P,{apoio:EV},['Lançamento no Protheus']);
 r('baixa-pro','Baixa','Baixa no Protheus',P,{apoio:EV},['Baixa no Protheus']);
 r('pagd5-pro','Pagamento','Pagamento · todas as contas (D-5)',P,{obs:D5},['pagd1-pro']);
 r('polos-pro','Pagamento','Pagamento dos polos',P,{obs:'Os polos têm outro horário. Ajuste o horário nesta rotina.'});
 r('folha-pro','Pagamento','Folha de pagamento',P,{prio:'atencao',freq:'mensal_util',n:5,obs:'Atenção: prazo até o 5º dia útil. Confirme valores e data com o RH.'});
 r('imp-pro','Pagamento','Impostos do dia 20 (D-5)',P,{prio:'atencao',freq:'mensal_dia',n:20,antes:5,obs:'Atenção: confira as guias. '+D5},['impd1-pro']);
 r('concil-pro','Conciliação','Conciliação bancária',P,{});
 r('acomp','','Acompanhamento diário do Protheus',P,{apoio:'Evandro',obs:'Evandro acompanha todos os dias a implantação do Protheus.'},['Acompanhamento diário do Protheus']);
 return L.filter(r=>!PAUSAR_MODELO.includes(r.chave))}
const ANTIGOS=new Set(['Identificar as contas a pagar (D-5)','Identificar as contas que vencem em 5 dias úteis (D-5)','Identificar as contas que vencem no próximo dia útil','Conferir documentos, valores, vencimentos e centro de custo','Lançamento no WAE','Lançamento no Protheus','Baixa no WAE','Baixa no Protheus','Pagamento · todas as contas','Pagamento · todas as contas (D-2 em novembro)','Pagamento · todas as contas (D-1)','Pagamento · WAE','Pagamento dos polos','Folha de pagamento','Impostos (vencimento dia 20)','Impostos do dia 20 (D-2 em novembro)','Impostos do dia 20 (D-1)','Conciliação bancária','Acompanhamento diário do Protheus'].map(norm));
const orgPendente=()=>podeCron()&&D.cronograma.some(r=>r.freq!=='unica'&&(r.mv||0)<MODELO_VER&&(r.chave||ANTIGOS.has(norm(r.t))));
async function pessoasModelo(faltam){
 const achar=async(chaves,n)=>{const p=D.equipe.find(x=>chaves.includes(norm(x.n).split(/\s+/)[0]));if(p)return p.id;
  if(!(dir()||pode('cadastros'))){faltam.push(n);return ''}
  const id='p'+Math.random().toString(36).slice(2,12);try{await DB.collection('equipe').doc(id).set({n,c:'Financeiro',vinc:'CLT',categ:'colab',criado:HJ});log(`Cadastrou colaborador: ${n}`);return id}catch(e){faltam.push(n);return ''}};
 const nt=await achar(['natalia'],'Natalia'),jf=await achar(['jeferson','jefferson'],'Jeferson'),ns=await achar(['natasha'],'Natasha');
 return {NA:[nt].filter(Boolean),JN:[jf,ns].filter(Boolean)}}
async function montarModelo(){if(!podeCron()){toast('Só quem cadastra pode montar o cronograma.');return}
 if(D.cronograma.length){return organizarModelo()}
 const faltam=[],M=modeloCron(),hoje=HJ;let k=0;
 for(const {_alias,somarRs,...r} of M){const x={...r,ini:r.ini&&r.ini<hoje?hoje:r.ini,criado:HJ};if(await salvar('cronograma',null,x,false,false))k++}
 log(`Montou o cronograma do departamento com ${k} rotinas`);
 toast(faltam.length?`${k} rotinas criadas. Cadastre ${faltam.join(', ')} e defina nas rotinas.`:`${k} rotinas criadas. Ajuste o que precisar.`);
 if(FORM)fechar();S.cTab='rotinas';ir('rotinas')}
/* atualiza as rotinas existentes no lugar (mantém o histórico de marcações), cria as que faltam e não apaga nada */
async function organizarModelo(sil){if(!podeCron()){if(!sil)toast('Só quem cadastra pode organizar o cronograma.');return}
 if(!sil&&!S.confOrg){S.confOrg=true;toast('Clique de novo para confirmar. As rotinas são atualizadas sem apagar nada.');setTimeout(()=>S.confOrg=false,6000);return}
 S.confOrg=false;const faltam=[],M=modeloCron(),usados=new Set(),quem=pessoa(S.perfil)?.n||quemSou(),agora=new Date().toISOString();let up=0,cr=0;
 for(const {_alias,somarRs,...sp} of M){const al=_alias.map(norm),sis0=sp.sis[0];
  const ant=D.cronograma.find(r=>!usados.has(r.id)&&r.chave===sp.chave)||D.cronograma.find(r=>!usados.has(r.id)&&(r.mv||0)<MODELO_VER&&r.chave&&_alias.includes(r.chave))||D.cronograma.find(r=>!usados.has(r.id)&&(r.mv||0)<MODELO_VER&&!r.chave&&al.includes(norm(r.t))&&(!(r.sis||[]).length||(r.sis||[]).includes(sis0)));
  if(ant){usados.add(ant.id);const {id,...b}=ant;
   if(await salvar('cronograma',id,{...b,...sp,rs:rsDe(ant).length?[...new Set([...(ant.rs||[]),...(somarRs||[])])]:sp.rs,hora:ant.horaEditada?ant.hora:sp.hora,horaLimpa:true,apoio:ant.apoio||sp.apoio,ini:ant.ini&&ant.ini<sp.ini&&!sp.fim&&!sp.ini.startsWith('2026-12')?ant.ini:sp.ini,editadoPor:quem,editadoEm:agora},false,false))up++}
  else if(await salvar('cronograma',null,{...sp,criado:HJ},false,false))cr++}
 let pa=0;for(const x of D.cronograma.filter(r=>!usados.has(r.id)&&PAUSAR_MODELO.includes(r.chave)&&r.ativo!==false)){const {id,...b}=x;if(await salvar('cronograma',id,{...b,ativo:false,mv:MODELO_VER,obs:'Pausada: saiu do fluxo novo (pagamento D-5). Para voltar, edite e marque como ativa.',editadoPor:quem,editadoEm:agora},false,false))pa++}
 log(`Organizou o cronograma: ${up} rotinas atualizadas, ${cr} criadas e ${pa} pausadas`);
 if(!sil)toast(`${up} rotinas atualizadas, ${cr} criadas e ${pa} pausadas. Nada foi apagado.`);
 if(sil)return;if(FORM)fechar();S.cTab='rotinas';ir('rotinas')}

function cronPainel(){if(!D.cronograma.length)return podeCron()?`<div class="panel"><div class="ph"><h2>Cronograma do departamento</h2></div>${vazio('Cronograma ainda não montado','Monte as rotinas de WAE e Protheus com os responsáveis de cada etapa.',null)}<div style="text-align:center;margin-top:-8px;padding-bottom:12px"><button class="btn pri" onclick="montarModelo()">Montar o cronograma</button></div></div>`:'';
 const ps=pessoasCron(),ant=atrasosCron().filter(o=>o.dia<HJ),hoje=D.cronograma.filter(r=>ocorre(r,HJ)).sort(ordR);
 const vivo=hoje.filter(r=>{const s=stOc(r,HJ)[0];return s==='ac'||s==='bad'});
 return `<div class="panel"><div class="ph"><h2>Cronograma de hoje</h2><button class="btn ghost" onclick="S.cTab='dia';S.cDia='';ir('rotinas')">Abrir cronograma</button></div>
 <div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Pessoa</th><th>Hoje</th><th>Concluídas</th><th>Em andamento</th><th>Atrasadas</th><th>De dias anteriores</th></tr></thead><tbody>${ps.map(p=>{const f=r=>rsDe(r).includes(p),c=contaDia(HJ,f),a=ant.filter(o=>f(o.r)).length;return `<tr><td style="text-align:left">${esc(nomeDe(p))}</td><td>${c.tot}</td><td>${c.ok}</td><td>${c.and?`<span class="tag ac">${c.and}</span>`:'0'}</td><td>${c.atr?`<span class="tag bad">${c.atr}</span>`:'0'}</td><td>${a?`<span class="tag bad">${a}</span>`:'0'}</td></tr>`}).join('')}</tbody></table></div>
 ${vivo.length||ant.length?`<p class="eyebrow" style="margin:14px 0 0">Em andamento e atrasadas</p>${vivo.map(r=>linOc(r,HJ)).join('')}${ant.slice(0,8).map(o=>linOc(o.r,o.dia,true)).join('')}${ant.length>8?`<p class="meta">E mais ${ant.length-8} no cronograma.</p>`:''}`:`<p class="meta" style="margin:10px 0 0">Nada em andamento ou atrasado agora.</p>`}</div>`}

/* itens dentro de uma rotina do dia: chamados ou itens manuais */
const itensDe=(rid,dia)=>D.cronitens.filter(x=>x.rot===rid&&x.dia===dia).sort((a,b)=>(a.em||'').localeCompare(b.em||''));
function linItens(r,dia){const L=itensDe(r.id,dia),pm=podeMarcar(r)||podeEditRot(),f=L.filter(x=>x.feito).length;
 return `<div class="itens">${L.length?`<span class="meta">${f} de ${L.length} ${L.length>1?'itens feitos':'item feito'}</span>`:''}${L.map(x=>`<div class="item ${x.feito?'done':''}"><input type="checkbox" ${x.feito?'checked':''} ${pm?'':'disabled'} onchange="itemFeito('${x.id}')" aria-label="Marcar ${esc(x.t)}"><span class="it">${x.proto?`<button class="lnk" onclick="detalheCh('${esc(x.chamadoId)}')">${esc(x.proto)}</button> `:''}${esc(x.t)}${x.feito?` <small>✓ ${esc(x.porNome||'')}${x.hora?' · '+esc(x.hora):''}</small>`:''}</span>${pm?`<button class="itx" onclick="itemDel('${x.id}')" aria-label="Remover ${esc(x.t)}" title="Remover">×</button>`:''}</div>`).join('')}${pm?`<button class="lnk itadd" onclick="itemNovo('${r.id}','${dia}')">+ Adicionar chamado ou item</button>`:''}</div>`}
const chOpts=sel=>`<option value="">Nenhum (item manual)</option>`+D.chamados.filter(c=>c.st!=='Concluído'||c.id===sel).sort((a,b)=>(b.aberto||'').localeCompare(a.aberto||'')).map(c=>`<option value="${esc(c.id)}" ${c.id===sel?'selected':''}>${esc(c.proto||'')} · ${esc(c.dep?depNome(c.dep):'Sem setor')} · ${esc(c.assunto||'')}</option>`).join('');
function itemNovo(rid,dia){const r=D.cronograma.find(x=>x.id===rid);if(!r)return;FORM={tipo:'_item',rot:rid,dia};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(r.t)} · ${fmt(dia)}</p><h2 id="sheet-title">Adicionar à rotina</h2><p class="sub" style="font-size:13px">Escolha um chamado ou escreva o item. Cada item pode ser marcado como feito, com nome e hora.</p></div>
 <div class="fgrid one"><div><label class="lbl" for="it_ch">Chamado · opcional</label><select class="inp" id="it_ch" onchange="if(this.value&&!val('it_t')){const c=D.chamados.find(x=>x.id===this.value);document.getElementById('it_t').value=c?.assunto||''}">${chOpts('')}</select>${D.chamados.some(c=>c.st!=='Concluído')?'':'<p class="meta" style="margin:4px 0 0">Nenhum chamado em aberto. Por enquanto, adicione o item à mão.</p>'}</div>
 <div><label class="lbl" for="it_t">Descrição</label><input class="inp" id="it_t" placeholder="Boleto do fornecedor X, NF 123"><p class="ferr" id="ite_t"></p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaItem()">Adicionar</button></div></div>`;
 document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('it_t')?.focus(),30)}
async function addItem(rid,dia,t,c){const r=D.cronograma.find(x=>x.id===rid);
 return salvar('cronitens',null,{rot:rid,dia,t,chamadoId:c?.id||'',proto:c?.proto||'',feito:false,em:new Date().toISOString(),criadoPor:pessoa(S.perfil)?.n||quemSou()},'Adicionado à rotina',`Adicionou ${c?`o chamado ${c.proto}`:`"${t}"`} à rotina "${r?.t||''}" de ${fmt(dia)}`)}
async function salvaItem(){const c=D.chamados.find(x=>x.id===val('it_ch')),t=val('it_t')||c?.assunto||'';errEl('ite_t','');
 if(!t){errEl('ite_t','Escreva o item ou escolha um chamado.');return}
 if(await addItem(FORM.rot,FORM.dia,t,c))fechar()}
async function itemFeito(id){const x=D.cronitens.find(y=>y.id===id);if(!x)return;const r=D.cronograma.find(y=>y.id===x.rot);
 if(r&&!(podeMarcar(r)||podeEditRot())){toast('Você não pode marcar este item.');render();return}
 const v=!x.feito;await patch('cronitens',id,{feito:v,porNome:v?(pessoa(S.perfil)?.n||quemSou()):'',hora:v?agoraHM():'',feitoEm:v?HJ:''},v?'Item feito':'Item reaberto',`${v?'Fez':'Reabriu'} o item "${x.t}" da rotina "${r?.t||''}" de ${fmt(x.dia)}`)}
async function itemDel(id){const x=D.cronitens.find(y=>y.id===id);if(!x)return;
 if(S.itDel!==id){S.itDel=id;toast('Clique no × de novo para remover.');setTimeout(()=>{if(S.itDel===id)S.itDel=null},4000);return}S.itDel=null;
 try{await DB.collection('cronitens').doc(id).delete();log(`Removeu o item "${x.t}" de ${fmt(x.dia)}`);toast('Item removido')}catch(e){toast('Não foi possível remover.')}}

/* chamado → demanda do dia no cronograma (o e-mail separa, o chamado vira rotina de um dia) */
function chParaCron(cid){const c=D.chamados.find(x=>x.id===cid);if(!c)return;FORM={tipo:'_chcron',ch:cid};const ck=(i,on,t)=>`<label class="ck"><input type="checkbox" id="${i}" ${on?'checked':''}> ${esc(t)}</label>`;
 const dia=ehUtil(HJ)?HJ:proxUtil(HJ);
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamado ${esc(c.proto||'')}</p><h2 id="sheet-title">Levar para o cronograma</h2><p class="sub" style="font-size:13px">A demanda entra no dia escolhido, na etapa do processo, e é marcada como as outras rotinas.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="cc_t">Descrição</label><input class="inp" id="cc_t" value="${esc(c.assunto||c.tipo||'')}"><p class="ferr" id="cce_t"></p></div>
 <div><label class="lbl" for="cc_dia">Dia</label><input class="inp" id="cc_dia" type="date" value="${dia}" onchange="document.getElementById('cc_rot').innerHTML=rotOpts(this.value);ccVis()"></div>
 <div><label class="lbl" for="cc_rot">Onde colocar</label><select class="inp" id="cc_rot" onchange="ccVis()">${rotOpts(dia)}</select></div>
 <div class="ccsep"><label class="lbl" for="cc_et">Etapa</label><select class="inp" id="cc_et">${procs().map(e=>`<option>${esc(e)}</option>`).join('')}<option value="">Outras atividades</option></select></div>
 <div class="ccsep"><label class="lbl" for="cc_hora">Horário · opcional</label><input class="inp" id="cc_hora" type="time"></div>
 <div class="full ccsep"><span class="lbl">Sistema</span><div class="cks">${sists().map((x,i)=>ck('cc_s_'+i,false,x)).join('')}</div></div>
 <div class="full ccsep"><span class="lbl">Responsáveis</span><div class="cks">${colabs().map(p=>ck('cc_r_'+p.id,p.id===c.resp,p.n)).join('')}</div><p class="ferr" id="cce_r"></p></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaChCron()">Levar para o cronograma</button></div></div>`;
 document.getElementById('ov').hidden=false;ccVis()}
const rotOpts=dia=>`<option value="">Como demanda separada no dia</option>`+(dia?D.cronograma.filter(r=>r.freq!=='unica'&&ocorre(r,dia)).sort(ordR).map(r=>`<option value="${r.id}">Dentro de: ${esc(r.etapa?r.etapa+' · ':'')}${esc(r.t)}</option>`).join(''):'');
function ccVis(){const sep=!val('cc_rot');document.querySelectorAll('.ccsep').forEach(e=>e.style.display=sep?'':'none')}
async function salvaChCron(){const c=D.chamados.find(x=>x.id===FORM.ch),t=val('cc_t'),dia=val('cc_dia'),rot=val('cc_rot'),rs=colabs().filter(p=>document.getElementById('cc_r_'+p.id)?.checked).map(p=>p.id);errEl('cce_t','');errEl('cce_r','');
 if(!t||!dia){errEl('cce_t','Informe a descrição e o dia.');return}
 if(rot){if(await addItem(rot,dia,t,c))fechar();return}if(!rs.length){errEl('cce_r','Escolha ao menos um responsável.');return}
 if(await salvar('cronograma',null,{t,etapa:val('cc_et'),sis:sists().filter((x,i)=>document.getElementById('cc_s_'+i)?.checked),rs,apoio:'',freq:'unica',data:dia,dias:[],n:1,antes:0,hora:val('cc_hora'),prio:'normal',obs:c?.desc?String(c.desc).slice(0,200):'',ini:'',fim:'',ativo:true,criado:HJ,chamado:c?.proto||'',chamadoId:c?.id||''},'Demanda incluída no cronograma',`Levou o chamado ${c?.proto||''} para o cronograma de ${fmt(dia)}`))fechar()}

/* ---------- avisos no canto da tela (funcionam com o portal aberto, mesmo em outra aba) ---------- */
const avOk=()=>'Notification' in window;
const avPodePedir=()=>avOk()&&Notification.permission==='default';
function ativarAvisos(){if(!avOk()){toast('Este navegador não mostra avisos na tela.');return}
 Notification.requestPermission().then(r=>{toast(r==='granted'?'Avisos ativados. Eles aparecem no canto da tela.':'O navegador bloqueou os avisos. Libere em Configurações do site > Notificações.');render();if(r==='granted')checarAvisos()})}
const AV_K=()=>'avisos_'+(ME.uid||'')+S.perfil+'_'+HJ;
function avJa(){try{return JSON.parse(localStorage.getItem(AV_K())||'[]')}catch(e){return S._avJa||[]}}
function avMarca(k){const l=avJa();l.push(k);try{localStorage.setItem(AV_K(),JSON.stringify(l.slice(-300)))}catch(e){S._avJa=l}}
function avisosDevidos(){if(solic()||S.perfil==='pendente')return [];const mn=t=>{const [h,m]=String(t).split(':').map(Number);return h*60+(m||0)},ag=mn(agoraHM()),L=[];
 if(dir()){const c=cfgRes();if(resumoHoje(c)&&agoraHM()>=(c.hora||'08:00')){const r=dadosResumo(c),tot=r.secoes.reduce((a,x)=>a+(x.k==='ia'?0:x.total),0);if(tot||!c.soSeHouver)L.push({k:'resumo_'+HJ,t:tot?`Resumo do dia: ${tot} ${tot>1?'pendências':'pendência'}`:'Resumo do dia: tudo em dia',s:r.secoes.filter(x=>x.k!=='ia').map(x=>x.t).slice(0,3).join(' · '),ir:'painel'})}}
 const hoje=proxPrazos(30,true).filter(x=>x.d===HJ);if(hoje.length)L.push({k:'dia',t:`Hoje: ${hoje.length} ${hoje.length>1?'prazos':'prazo'}`,s:hoje.slice(0,3).map(x=>(x.h?x.h+' ':'')+x.t).join(' · '),ir:'painel'});
 D.eventos.filter(e=>paraMimEv(e)&&e.hora&&evOcorre(e,HJ)).forEach(e=>{const d=mn(e.hora)-ag;if(d<=15&&d>=-5)L.push({k:'ev_'+e.id,t:`${e.hora} · ${e.t}`,s:d>0?`Começa em ${d} min`:'Começando agora',ir:'calendario'})});
 D.cronograma.filter(r=>vejoRot(r)&&r.hora&&ocorre(r,HJ)&&exDe(r.id,HJ)?.s!=='feita').forEach(r=>{const d=mn(r.hora)-ag;
  if(d<=15&&d>0)L.push({k:'rt_'+r.id,t:`${r.hora} · ${r.t}`,s:`Em ${d} min · ${nomesRs(r)}`,ir:'rotinas'});else if(d<=0&&d>-180)L.push({k:'ra_'+r.id,t:`Atrasada: ${r.t}`,s:`Era às ${r.hora} · ${nomesRs(r)}`,ir:'rotinas'})});
 const ant=atrasosCron(vejoRot).filter(o=>o.dia<HJ).length;if(ant)L.push({k:'ant',t:`${ant} ${ant>1?'rotinas de dias anteriores':'rotina de dia anterior'} em atraso`,s:'Veja em Cronograma',ir:'rotinas'});
 const am=proxUtil(HJ);D.cronograma.filter(r=>r.prio==='atencao'&&vejoRot(r)&&ocorre(r,am)).forEach(r=>L.push({k:'at_'+r.id,t:`Atenção no próximo dia útil: ${r.t}`,s:r.obs||nomesRs(r),ir:'rotinas'}));
 /* lembretes periódicos no expediente (dias úteis, 8h às 18h) */
 const now=new Date(),hh=now.getHours(),expediente=ehUtil(HJ)&&hh>=8&&hh<18;
 if(expediente){
  /* a cada 1 hora: lembrar de registrar (para quem é da equipe) */
  if(pessoa(S.perfil)){const meus=D.cronograma.filter(r=>r.freq!=='avulsa'&&ocorre(r,HJ)&&minhaRot(r)),sem=meus.filter(r=>stF(meuF(r.id,HJ))!=='feita'&&exDe(r.id,HJ)?.s!=='feita').length;
   L.push({k:'reg_'+hh,t:'Registre no Prumo o que você fez',s:sem?`${sem} ${sem>1?'rotinas suas ainda sem registro hoje':'rotina sua ainda sem registro hoje'}. Marque Em andamento ou Finalizado.`:'Marque Em andamento ou Finalizado no que você fez, inclusive em Outras atividades.',ir:'rotinas'})}
  /* a cada 30 minutos: próximos compromissos e pendências */
  const slot=hh*2+(now.getMinutes()>=30?1:0),hm=agoraHM(),partes=[];
  const ev=D.eventos.filter(e=>paraMimEv(e)&&evOcorre(e,HJ)&&(!e.hora||e.hora>=hm)).sort((a,b)=>(a.hora||'99').localeCompare(b.hora||'99'));
  if(ev.length)partes.push(ev.slice(0,2).map(e=>`${e.hora?e.hora+' ':''}${e.t}`).join(' · '));
  const atr=atrasosCron(r=>vejoRot(r)).length;if(atr)partes.push(`${atr} ${atr>1?'rotinas atrasadas':'rotina atrasada'}`);
  const atc=D.cronograma.filter(r=>r.prio==='atencao'&&vejoRot(r)&&(ocorre(r,HJ)||ocorre(r,am))&&exDe(r.id,HJ)?.s!=='feita').length;if(atc)partes.push(`${atc} de atenção (folha, impostos)`);
  if(partes.length)L.push({k:'res_'+slot,t:ev.length?'Próximos compromissos':'Pendências do departamento',s:partes.join(' · '),ir:ev.length?'calendario':'rotinas'})}
 return L}
function cantoAviso(a){let c=document.getElementById('avcanto');if(!c){c=document.createElement('div');c.id='avcanto';c.setAttribute('aria-live','polite');document.body.appendChild(c)}
 const el=document.createElement('div');el.className='avc';el.innerHTML=`<button class="avx" aria-label="Fechar aviso">×</button><b>${esc(a.t)}</b>${a.s?`<span>${esc(a.s)}</span>`:''}`;
 el.addEventListener('click',e=>{if(!e.target.classList.contains('avx'))ir(a.ir);el.remove()});c.appendChild(el);setTimeout(()=>el.remove(),20000)}
function avisarCanto(a){avMarca(a.k);let so=false;
 try{if(avOk()&&Notification.permission==='granted'){const n=new Notification('Prumo · '+a.t,{body:a.s||'',tag:'prumo-'+a.k});n.onclick=()=>{window.focus();ir(a.ir);n.close()};so=document.visibilityState!=='visible'}}catch(e){}
 if(!so)cantoAviso(a)}
function checarAvisos(){if(S.modo==='carregando'||!DB)return;try{const ja=avJa();avisosDevidos().filter(a=>!ja.includes(a.k)).slice(0,4).forEach(avisarCanto)}catch(e){}}

/* chegada dos pedidos: a equipe marca à mão se o e-mail ou chamado chegou atrasado; o diretor vê por departamento */
function ajusteSheet(ref,pre){const [k,id]=ref.split(':'),x=(k==='e'?D.emails:D.chamados).find(y=>y.id===id);if(!x)return;FORM={tipo:'_ajuste',ref};
 const ch=pre==='na'?'na':k==='e'?(x.chegadaMan||''):(x.chegada==='na'?'na':!x.chegadaAuto&&x.chegada?x.chegada:''),pd=pre==='na'?'na':x.padraoMan||'',cat=catDeX(x),r=remDeX(x);
 const op=(v,t,a)=>`<option value="${v}" ${v===a?'selected':''}>${t}</option>`;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Ajuste manual</p><h2 id="sheet-title">${esc(x.assunto||'')}</h2><p class="sub" style="font-size:13px">O que você marcar aqui vale na hora e aparece atualizado no painel do diretor.</p></div>
 <div class="fgrid">
  <div class="full"><label class="lbl" for="aj_ch">Chegada ao financeiro</label><select class="inp" id="aj_ch">${op('','Automático (pela data do e-mail)',ch)}${op('prazo','Chegou em dia',ch)}${op('atrasado','Chegou atrasado',ch)}${op('na','Não se aplica (não tem prazo)',ch)}</select></div>
  <div class="full"><label class="lbl" for="aj_pd">Padrão do contas a pagar</label><select class="inp" id="aj_pd">${op('','Automático (conferência do Prumo)',pd)}${op('fora','Está fora do padrão',pd)}${op('ok','Está dentro do padrão',pd)}${op('na','Não se aplica (não é solicitação de pagamento)',pd)}</select></div>
  ${r&&cat?`<label class="perm full"><input type="checkbox" id="aj_apr" ${pre==='na'||(r.padraoNA||[]).includes(cat)||(r.chegadaNA||[]).includes(cat)?'checked':''}><span><b>Lembrar para os próximos</b><small>Quando ${esc(r.nome||r.email)} mandar outro e-mail desta mesma categoria, o "não se aplica" já vem marcado.</small></span></label>`:''}
 </div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaAjuste()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaAjuste(){if(FORM?.tipo!=='_ajuste')return;const [k,id]=FORM.ref.split(':'),x=(k==='e'?D.emails:D.chamados).find(y=>y.id===id);if(!x)return;
 const ch=val('aj_ch'),pd=val('aj_pd'),quem=pessoa(S.perfil)?.n||quemSou(),em=new Date().toISOString(),aprEl=document.getElementById('aj_apr');
 const mudCh=k==='e'?{chegadaMan:ch}:(ch?{chegada:ch,chegadaAuto:false,chegadaPor:quem,chegadaEm:em}:{chegada:x.prazoEnv?chegPorData(x.prazoEnv,x.recebidoEm||x.abertoEm):'',chegadaAuto:!!x.prazoEnv,chegadaPor:'',chegadaEm:''});
 const txt=`chegada: ${ch?{prazo:'em dia',atrasado:'atrasado',na:'não se aplica'}[ch]:'automático'} · padrão: ${pd?{ok:'dentro do padrão',na:'não se aplica',fora:'fora do padrão'}[pd]:'automático'}`;
 if(!await patch(k==='e'?'emails':'chamados',id,{...mudCh,padraoMan:pd,ajustePor:quem,ajusteEm:em},'Ajuste salvo',`Ajustou ${k==='e'?'o e-mail':'o chamado '+(x.proto||'')} "${(x.assunto||'').slice(0,80)}" · ${txt}`))return;
 // o chamado que nasceu deste e-mail recebe o mesmo ajuste
 if(k==='e')for(const c of D.chamados.filter(c=>c.emailId===id||(x.msgId&&c.msgId===x.msgId)))await patch('chamados',c.id,{...(ch?{chegada:ch,chegadaAuto:false,chegadaPor:quem,chegadaEm:em}:{}),padraoMan:pd},null,false);
 // "lembrar para os próximos": guarda no remetente, por categoria
 const r=remDeX(x),cat=catDeX(x);
 if(r&&cat&&aprEl){const apr=aprEl.checked,tg=(l,on)=>{const s2=new Set(l||[]);on?s2.add(cat):s2.delete(cat);return [...s2]};await setRem(r.id,{padraoNA:tg(r.padraoNA,apr&&pd==='na'),chegadaNA:tg(r.chegadaNA,apr&&ch==='na')})}
 fechar()}
async function marcaChegada(id,v){const c=D.chamados.find(x=>x.id===id);if(!c)return;if(c.origem==='email'&&!c.chegadaAuto&&c.chegada===v)return;const nv=c.origem==='email'||c.chegadaAuto?v:(c.chegada===v?'':v);
 if(await patch('chamados',id,{chegada:nv,chegadaAuto:false,chegadaPor:nv?(pessoa(S.perfil)?.n||quemSou()):'',chegadaEm:nv?new Date().toISOString():''},nv?(nv==='atrasado'?'Marcado: chegou atrasado':'Marcado: chegou no prazo'):'Marcação retirada',`${nv?`Marcou que o chamado ${c.proto} chegou ${nv==='atrasado'?'atrasado':'no prazo'}`:`Retirou a marcação de chegada do chamado ${c.proto}`} (${depNome(c.dep)})`))setTimeout(()=>{if(FORM?.tipo==='_det'&&FORM.id===id)detalheCh(id)},150)}
function chegadaPainel(enxuto){if(!(dir()||pode('painel_chamados')))return '';const gere=dir()||podeAdmin()||pode('chamados');const m=S.chM||MES_ATUAL;
 const doMes=mm=>D.chamados.filter(c=>(c.recebidoEm||c.aberto||'').slice(0,7)===mm);
 const L=doMes(m),mar=L.filter(c=>chegadaDe(c)),at=mar.filter(c=>chegadaDe(c)==='atrasado').length,ok=mar.length-at,pc=v=>mar.length?Math.round(v/mar.length*100):0;
 const nossa=L.filter(c=>c.prazo&&(chAtrasado(c)||(c.st==='Concluído'&&c.concl&&c.concl>c.prazo))).length;
 const grp=c=>c.dep||('rem:'+(c.rem||remNomeCh(c)));
 const deps=[...new Set(mar.map(grp))].map(d=>{const l=mar.filter(c=>grp(c)===d),a=l.filter(c=>chegadaDe(c)==='atrasado').length;return {n:d.startsWith('rem:')?`${remNomeCh(l[0])} · sem setor`:depNome(d),tot:l.length,at:a,ok:l.length-a,pct:Math.round(a/l.length*100)}}).sort((x,y)=>y.at-x.at||y.pct-x.pct||y.tot-x.tot);
 const mx=Math.max(1,...deps.map(d=>d.tot)),top=deps.slice(0,8),resto=deps.slice(8);
 const nav=`<div class="seg"><button onclick="S.chM=addMes('${m}',-1);render()" aria-label="Mês anterior">‹</button><span>${mesNome(m)}</span><button onclick="S.chM=addMes('${m}',1);render()" aria-label="Próximo mês">›</button></div>`;
 const leg=`<div class="dleg"><span><i style="background:var(--ok)"></i>Chegou em dia</span><span><i style="background:var(--bad)"></i>Chegou atrasado</span></div>`;
 const barras=top.length?top.map(d=>`<div class="hrow" title="${esc(d.n)}: ${d.at} atrasados e ${d.ok} em dia, de ${d.tot}"><span class="hn">${esc(d.n)}</span><div class="hbar" style="width:${Math.max(6,d.tot/mx*100)}%">${d.ok?`<i class="ok" style="flex:${d.ok}"></i>`:''}${d.at?`<i class="bad" style="flex:${d.at}"></i>`:''}</div><span class="hv">${d.at?`<b>${d.at}</b> de ${d.tot} atrasados`:`${d.tot} em dia`}</span></div>`).join('')+(resto.length?`<p class="meta" style="margin:6px 0 0">+ ${resto.length} departamentos com ${resto.reduce((t,d)=>t+d.at,0)} atrasados</p>`:''):'<p class="meta" style="margin:0">Nenhum pedido recebido neste mês.</p>';
 // tendência: % que chegou atrasado nos últimos 6 meses
 const ms=[...Array(6)].map((_,i)=>addMes(m,i-5)).map(mm=>{const l=doMes(mm).filter(c=>chegadaDe(c)),a=l.filter(c=>chegadaDe(c)==='atrasado').length;return {mm,tot:l.length,a,p:l.length?Math.round(a/l.length*100):null}});
 const W=360,H=150,b0=H-22,u=(b0-18)/100,cw=W/6,mxp=Math.max(...ms.map(x=>x.p??-1));
 const svg=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block" role="img" aria-label="Percentual de pedidos que chegaram atrasados nos últimos 6 meses">
  ${[50,100].map(g=>`<line x1="0" x2="${W}" y1="${b0-g*u}" y2="${b0-g*u}" stroke="var(--line)" stroke-dasharray="2 4"/><text x="${W}" y="${b0-g*u-3}" text-anchor="end" font-size="9.5" fill="var(--ink-3)">${g}%</text>`).join('')}
  <line x1="0" x2="${W}" y1="${b0}" y2="${b0}" stroke="var(--line)"/>
  ${ms.map((x,i)=>{const cx=i*cw+cw/2,h=x.p?Math.max(3,x.p*u):0,cur=x.mm===m,lab=cur||(x.p!==null&&x.p===mxp);
   return `<g><title>${mesNome(x.mm)}: ${x.p===null?'sem pedidos':`${x.p}% atrasados (${x.a} de ${x.tot})`}</title><rect x="${i*cw}" y="0" width="${cw}" height="${H}" fill="transparent"/>${h?`<path d="M${cx-11},${b0} V${b0-h+4} q0,-4 4,-4 h14 q4,0 4,4 V${b0} Z" fill="var(--bad)" opacity="${cur?1:.55}"/>`:x.p===0?`<circle cx="${cx}" cy="${b0-4}" r="3" fill="var(--ok)"/>`:''}${lab&&x.p!==null?`<text x="${cx}" y="${b0-h-6}" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">${x.p}%</text>`:''}<text x="${cx}" y="${H-6}" text-anchor="middle" font-size="10.5" fill="${cur?'var(--ink)':'var(--ink-3)'}" font-weight="${cur?600:400}">${MESES[+x.mm.slice(5)-1].slice(0,3)}</text></g>`}).join('')}</svg>`;
 const tabela=deps.length?`<details class="dtab"><summary>Ver em tabela</summary><div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Departamento</th><th>Recebidos</th><th>Em dia</th><th>Atrasados</th><th>% atrasados</th></tr></thead><tbody>${deps.map(d=>`<tr><td style="text-align:left">${esc(d.n)}</td><td>${d.tot}</td><td>${d.ok}</td><td>${d.at}</td><td><span class="${d.pct>=30?'neg':d.pct===0?'pos':''}">${d.pct}%</span></td></tr>`).join('')}</tbody></table></div></details>`:'';
 const R=resumoCh(L),remA=R.rems.filter(r=>r.atr).slice(0,5),ia=ultimaIA(`${m}-01`,m===MES_ATUAL?HJ:isoD(new Date(+m.slice(0,4),+m.slice(5,7),0)))||ultimaIA(),antec=R.deps.filter(d=>d.antec!==null);
 const extra=`<details class="dmais"${S.dMais?' open':''} ontoggle="S.dMais=this.open"><summary>Remetentes e antecedência média</summary><div class="dgrid" style="margin-top:10px"><div><div class="dh"><h3>Quem mais manda atrasado</h3><span class="meta">remetentes no mês</span></div>${remA.length?remA.map(r=>`<div class="row" style="padding:6px 0"><div class="t"><b style="font-weight:500">${esc(r.nome)}</b><span>${r.atr} de ${r.tot} atrasados${r.antec!==null?` · antecedência média ${r.antec} dias`:''}</span></div><span class="tag bad">${r.pct}%</span></div>`).join(''):'<p class="meta" style="margin:0">Ninguém mandou atrasado neste mês.</p>'}</div>
 <div><div class="dh"><h3>Antecedência média</h3><span class="meta">mínimo D-${CHEG_MIN()}</span></div>${antec.length?antec.slice(0,6).map(d=>`<div class="row" style="padding:6px 0"><div class="t"><b style="font-weight:500">${esc(d.nome)}</b><span>${d.assuntos.slice(0,2).map(esc).join(' · ')||'—'}</span></div><span class="tag ${d.antec>=CHEG_MIN()?'ok':'bad'}">${d.antec} dias</span></div>`).join(''):'<p class="meta" style="margin:0">Ainda sem e-mails com data pedida neste mês.</p>'}</div></div></details>
 ${!iaOn()?(gere?`<div class="iamini"><div><b>Análise com IA</b><p class="meta" style="margin:4px 0 0">Copie os números do mês e cole no Claude ou no Copilot para receber diagnóstico e melhorias por departamento. Sem custo.</p></div><div style="display:flex;gap:6px;flex-wrap:wrap;align-self:center"><button class="btn" onclick="iaCopiarSheet()">Analisar com IA</button><button class="btn ghost" onclick="exportarCh()">Exportar</button></div></div>`:''):''}${iaOn()?`<div class="iamini"><div><b>Análise com IA</b>${ia?.analise?`<p>${esc(ia.analise.resumo)}</p><span class="meta">${esc(ia.periodo||'')} · ${esc(dataHora(ia.criado))}</span>`:'<p class="meta" style="margin:4px 0 0">Gere uma análise para ver diagnóstico e exemplos de melhoria por departamento.</p>'}</div>${gere?`<div style="display:flex;gap:6px;flex-wrap:wrap;align-self:center"><button class="btn" onclick="iaSheet()">${ia?.analise?'Ver análise completa':'Gerar análise'}</button><button class="btn ghost" onclick="exportarCh()">Exportar</button></div>`:''}</div>`:''}`;
 return `<div class="panel dash"><div class="ph"><div><h2>Pedidos dos departamentos</h2><span>${enxuto?`${mar.length} recebidos · ${ok} em dia · ${at} atrasados${nossa?` · ${nossa} com nossa entrega atrasada`:''}`:'Chegaram em dia ou atrasados para a contabilidade'}</span></div>${nav}</div>
 ${enxuto?'':`<div class="stats"><div class="stat"><p>Recebidos no mês</p><strong>${mar.length}</strong><small>${L.length-mar.length?`${L.length-mar.length} sem marcação`:'por e-mail e chamados'}</small></div>
 <div class="stat"><p>Chegaram em dia</p><strong style="color:var(--ok)">${ok}</strong><small>${pc(ok)}% do total</small></div>
 <div class="stat"><p>Chegaram atrasados</p><strong style="color:${at?'var(--bad)':'var(--ink)'}">${at}</strong><small>${pc(at)}% · sem data ou com menos de ${chegTxt()}</small></div>
 <div class="stat"><p>Nossa entrega atrasada</p><strong style="color:${nossa?'var(--bad)':'var(--ink)'}">${nossa}</strong><small>passou do prazo combinado</small></div></div>`}
 <div class="dgrid"><div><div class="dh"><h3>Por departamento</h3>${leg}</div>${barras}</div><div><div class="dh"><h3>% que chegou atrasado</h3><span class="meta">últimos 6 meses</span></div>${svg}</div></div>
 ${padraoBloco(L)}${extra}${tabela}<p class="meta" style="margin:4px 0 0">Automático: chegou em dia o e-mail que traz a data pedida com pelo menos ${chegTxt()} de antecedência (D-${CHEG_MIN()}). Sem data, ou com menos tempo, chegou atrasado. A equipe pode corrigir no detalhe do chamado.</p></div>`}

/* ---------- painel do diretor: cada um organiza a ordem dos blocos ---------- */
const BLOCOS_NOVOS=['trimestre','registro','aniver','ausencias','dash','dashGraf','dashAtr'];
const BLOCOS_PAINEL=[['trimestre','Equipe no trimestre'],['registro','Realizado no cronograma · 7 dias'],['aniver','Aniversários e tempo de casa'],['ausencias','Férias e ausências'],['dash','Painel dos chamados do mês'],['dashGraf','Pedidos por categoria e por setor'],['dashAtr','Atrasos dos chamados'],['numeros','Números principais'],['chegada','Pedidos dos departamentos · em dia ou atrasados'],['andamento','Andamento do dia no cronograma'],['atencao','Precisa da sua atenção'],['prazos','Próximos prazos'],['destaques','Destaques do mês'],['cron','Cronograma por etapa'],['metas','Metas do mês'],['fech','Fechamento D+N'],['dem','Demandas'],['entregas','Entregas por departamento'],['atrasosDep','Atrasos de departamentos'],['estrutura','Estruturação do departamento']];
const BLOCO_LARGO=['registro','trimestre','dash','dashGraf','dashAtr','numeros','chegada','andamento','cron','metas','fech','dem'];
function prefPainel(){const p=S.prefs||{};let l={};try{l=JSON.parse(localStorage.getItem('painel_'+(ME.uid||S.perfil))||'{}')}catch(e){}return {ordem:p.painel||l.ordem||[],oculto:p.painelOculto||l.oculto||[]}}
function painelOrdem(){let o=prefPainel().ordem.filter(k=>BLOCOS_PAINEL.some(b=>b[0]===k));if(!(S.prefs||{}).painelV3)o=[...BLOCOS_NOVOS,...o.filter(k=>!BLOCOS_NOVOS.includes(k))];if(!(S.prefs||{}).painelV2&&o[0]!=='numeros'){const i=o.indexOf('numeros');if(i>0)o.splice(i,1);o.unshift('numeros')}return [...new Set([...o,...BLOCOS_PAINEL.map(b=>b[0])])]}
const painelOculto=()=>prefPainel().oculto;
function orgPainel(){FORM={tipo:'_painel',ordem:painelOrdem(),oculto:[...painelOculto()]};desenhaOrg();document.getElementById('ov').hidden=false}
function desenhaOrg(){const f=FORM;if(f?.tipo!=='_painel')return;const nome=k=>(BLOCOS_PAINEL.find(b=>b[0]===k)||[k,k])[1];
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Painel</p><h2 id="sheet-title">Organizar painel</h2><p class="sub" style="font-size:13px">Use as setas para mudar a ordem. Desmarque o que não quer ver. Vale só para o seu painel.</p></div>
 <div class="sbox">${f.ordem.map((k,i)=>`<div class="row" style="gap:8px"><label class="ck" style="flex:1"><input type="checkbox" ${f.oculto.includes(k)?'':'checked'} onchange="orgVer('${k}',this.checked)"> ${esc(nome(k))}</label><button class="btn ghost" ${i?'':'disabled'} onclick="orgMove(${i},-1)" aria-label="Subir ${esc(nome(k))}">↑</button><button class="btn ghost" ${i<f.ordem.length-1?'':'disabled'} onclick="orgMove(${i},1)" aria-label="Descer ${esc(nome(k))}">↓</button></div>`).join('')}</div>
 <div class="foot"><button class="btn ghost" onclick="FORM.ordem=BLOCOS_PAINEL.map(b=>b[0]);FORM.oculto=[];desenhaOrg()">Voltar ao padrão</button><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaOrg()">Salvar</button></div></div>`}
function orgMove(i,d){const o=FORM.ordem,j=i+d;if(j<0||j>=o.length)return;[o[i],o[j]]=[o[j],o[i]];desenhaOrg()}
function orgVer(k,v){FORM.oculto=FORM.oculto.filter(x=>x!==k);if(!v)FORM.oculto.push(k)}
// tirar um bloco do painel com o ×, e voltar clicando no nome dele embaixo
async function painelVer(k,ver){const pr=prefPainel(),ordem=painelOrdem(),oculto=pr.oculto.filter(x=>x!==k);if(!ver)oculto.push(k);
 try{localStorage.setItem('painel_'+(ME.uid||S.perfil),JSON.stringify({ordem,oculto}))}catch(e){}
 S.prefs={...(S.prefs||{}),painel:ordem,painelOculto:oculto,painelV2:true,painelV3:true};
 if(DB&&ME.uid&&!S.sim){try{await DB.doc('data/users/'+ME.uid+'/prefs').set(S.prefs)}catch(e){}}
 toast(ver?'Bloco de volta no painel':'Bloco tirado do painel. Para voltar, clique no nome dele no fim do painel.',4000);render()}
async function salvaOrg(){const ordem=[...FORM.ordem],oculto=[...FORM.oculto];
 try{localStorage.setItem('painel_'+(ME.uid||S.perfil),JSON.stringify({ordem,oculto}))}catch(e){}
 S.prefs={...(S.prefs||{}),painel:ordem,painelOculto:oculto,painelV2:true,painelV3:true};
 if(DB&&ME.uid&&!S.sim){try{await DB.doc('data/users/'+ME.uid+'/prefs').set(S.prefs)}catch(e){}}
 toast('Painel organizado');fechar();render()}
/* ---------- relatório dos chamados: Excel, HTML e análise com IA ---------- */
const dataHora=iso=>{if(!iso)return '';const d=new Date(iso);if(isNaN(d))return '';return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`};
const diaCh=c=>(c.recebidoEm||c.abertoEm||c.aberto||'').slice(0,10);
function linhasCh(de,ate,dep){return D.chamados.filter(c=>{const d=diaCh(c);return (!de||d>=de)&&(!ate||d<=ate)&&(!dep||(dep==='_sem'?!c.dep:c.dep===dep))}).sort((a,b)=>diaCh(a)<diaCh(b)?-1:diaCh(a)>diaCh(b)?1:0)}
const nossaAtr=c=>!!c.prazo&&(chAtrasado(c)||(c.st==='Concluído'&&!!c.concl&&c.concl>c.prazo));
function linhaCh(c){const ch=chegadaDe(c),sp=stPrazo(c),an=c.prazoEnv?antecDias(c.recebidoEm||c.abertoEm,c.prazoEnv):null,r=D.remetentes.find(x=>x.id===c.rem);
 return {'Protocolo':c.proto||'','Recebido em':dataHora(c.recebidoEm||c.abertoEm)||fmtAno(c.aberto),'Assunto':c.assunto||'','Tipo':c.tipo||'','Departamento':c.dep?depNome(c.dep):'Sem setor','Remetente':remNomeCh(c),'E-mail do remetente':r?.email||'','Origem':c.origem==='email'?'E-mail':'Portal',
  'Data pedida no e-mail':c.prazoEnv?fmtAno(c.prazoEnv):'','Antecedência (dias)':an??'','Chegada':ch==='prazo'?'Em dia':ch==='atrasado'?'Atrasado':'Sem marcação','Categoria':c.cat||c.subcat?catTxt(c):'','Etapa':nomeEt(c.st),'Situação na etapa':c.sub||'',
  'Responsável':c.resp?respNome(c.resp):'','Aceito em':dataHora(c.aceitoEm),'Aceito por':c.aceitoNome||'','Prazo de entrega':c.prazo?fmtAno(c.prazo):'','Concluído em':c.concl?fmtAno(c.concl):'','Concluído por':c.st==='Concluído'?quemFezNome(c):'','Nossa entrega':sp?sp[1]:(c.st==='Concluído'?'Concluída':'Sem prazo'),
  'Vencimento do pagamento':vencDe(c)?fmtAno(vencDe(c)):'',...(()=>{const p=pagSit(c);return {'Limite D-5':p?fmtAno(p.lim):'','Pago ou programado em':p&&p.pg?fmtAno(p.pg):'','Pagamento no D-5':p?(p.pend?'Passou do limite, não pago':p.ok?'No prazo':'Fora do prazo'):'','Justificativa do pagamento':c.pagJust||''}})(),'Padrão da solicitação':Array.isArray(c.falta)?(foraPadrao(c)?'Fora do padrão':'No padrão'):'Não conferido','O que faltou':padraoTxt(c),'Fornecedor ou favorecido':c.favorecido||'','NF ou documento':c.nf||'','Pendência':c.pend||'','Devoluções':+c.devolucoes||0}}
function agrupaCh(L,chave,nome){const g={};L.forEach(c=>{const k=chave(c);(g[k]=g[k]||[]).push(c)});
 return Object.entries(g).map(([k,l])=>{const m=l.filter(c=>chegadaDe(c)),at=m.filter(c=>chegadaDe(c)==='atrasado').length,ans=l.map(c=>c.prazoEnv?antecDias(c.recebidoEm||c.abertoEm,c.prazoEnv):null).filter(x=>x!==null),cats={};
  l.forEach(c=>{const t=c.cat||c.subcat?catTxt(c):(c.tipo||'Outros');cats[t]=(cats[t]||0)+1});
  return {k,nome:nome(k,l),tot:l.length,emDia:m.length-at,atr:at,pct:m.length?Math.round(at/m.length*100):0,antec:ans.length?Math.round(ans.reduce((a,b)=>a+b,0)/ans.length*10)/10:null,nossa:l.filter(nossaAtr).length,abertos:l.filter(c=>c.st!=='Concluído').length,
   assuntos:Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([t,n])=>`${t} (${n})`)}}).sort((a,b)=>b.atr-a.atr||b.pct-a.pct||b.tot-a.tot)}
const grpDep=c=>c.dep||('rem:'+(c.rem||remNomeCh(c)));
const nomeGrpDep=(k,l)=>k.startsWith('rem:')?`${remNomeCh(l[0])} · sem setor`:depNome(k);
function resumoCh(L){const m=L.filter(c=>chegadaDe(c)),at=m.filter(c=>chegadaDe(c)==='atrasado').length;
 return {tot:L.length,marcados:m.length,emDia:m.length-at,atr:at,pct:m.length?Math.round(at/m.length*100):0,nossa:L.filter(nossaAtr).length,abertos:L.filter(c=>c.st!=='Concluído').length,concl:L.filter(c=>c.st==='Concluído').length,
  deps:agrupaCh(L,grpDep,nomeGrpDep),rems:agrupaCh(L.filter(c=>c.rem||c.solicitante),c=>c.rem||('n:'+(c.solicitante||'')),(k,l)=>remNomeCh(l[0])+(l[0].dep?' · '+depNome(l[0].dep):''))}}
const perTxt=(de,ate)=>de&&ate?`${fmtAno(de)} a ${fmtAno(ate)}`:de?`desde ${fmtAno(de)}`:ate?`até ${fmtAno(ate)}`:'todo o período';

function exportarCh(){const m=MES_ATUAL;FORM={tipo:'_export'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamados</p><h2 id="sheet-title">Exportar relatório</h2><p class="sub" style="font-size:13px">Escolha o período. O Excel traz uma aba de resumo, uma por departamento, uma por remetente e a lista completa dos chamados.</p></div>
 <div class="fgrid"><div><label class="lbl" for="ex_de">De</label><input class="inp" id="ex_de" type="date" value="${m}-01"></div><div><label class="lbl" for="ex_ate">Até</label><input class="inp" id="ex_ate" type="date" value="${HJ}"></div>
 <div class="full"><label class="lbl" for="ex_dep">Departamento</label><select class="inp" id="ex_dep"><option value="">Todos</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}">${esc(d.n)}</option>`).join('')}<option value="_sem">Sem setor definido</option></select></div>
 <div class="full"><span class="lbl">Atalhos</span><div style="display:flex;gap:6px;flex-wrap:wrap">${[['Este mês',`${m}-01`,HJ],['Mês passado',`${addMes(m,-1)}-01`,isoD(new Date(+m.slice(0,4),+m.slice(5,7)-1,0))],['Últimos 3 meses',`${addMes(m,-2)}-01`,HJ],['Tudo','','']].map(([l,a,b])=>`<button class="chip" onclick="document.getElementById('ex_de').value='${a}';document.getElementById('ex_ate').value='${b}'">${l}</button>`).join('')}</div></div></div>
 <div class="foot"><button class="btn" onclick="fechar()">Cancelar</button><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="baixarHtmlCh()">Relatório HTML</button><button class="btn pri" onclick="baixarXlsxCh()">Excel (.xlsx)</button></div></div>`;
 document.getElementById('ov').hidden=false}
const exFiltro=()=>({de:val('ex_de'),ate:val('ex_ate'),dep:val('ex_dep')});
function carregaXLSX(){if(window.XLSX)return Promise.resolve(window.XLSX);return new Promise((ok,er)=>{const sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';sc.onload=()=>ok(window.XLSX);sc.onerror=()=>er(new Error('xlsx'));document.head.appendChild(sc)})}
async function baixarXlsxCh(){const f=exFiltro(),L=linhasCh(f.de,f.ate,f.dep);if(!L.length){toast('Nenhum chamado nesse período.');return}if(!DL){toast('O download não está disponível nesta visualização.');return}
 let X;try{X=await carregaXLSX()}catch(e){toast('Não foi possível carregar o gerador de Excel. Confira a internet e tente de novo.');return}
 const R=resumoCh(L),wb=X.utils.book_new();
 const aba=(linhas,nome,larg)=>{const ws=X.utils.json_to_sheet(linhas);if(linhas.length){ws['!cols']=Object.keys(linhas[0]).map(k=>({wch:larg?.[k]||Math.min(45,Math.max(10,k.length+2,...linhas.slice(0,200).map(r=>String(r[k]??'').length+1)))}));ws['!autofilter']={ref:ws['!ref']}}X.utils.book_append_sheet(wb,ws,nome)};
 aba([{Indicador:'Período',Valor:perTxt(f.de,f.ate)},{Indicador:'Departamento',Valor:f.dep?(f.dep==='_sem'?'Sem setor':depNome(f.dep)):'Todos'},{Indicador:'Regra de chegada',Valor:`D-${CHEG_MIN()} (${CHEG_UTEIS()?'dias úteis':'dias corridos'}); sem data no e-mail = atrasado`},{Indicador:'Chamados recebidos',Valor:R.tot},{Indicador:'Chegaram em dia',Valor:R.emDia},{Indicador:'Chegaram atrasados',Valor:R.atr},{Indicador:'% que chegou atrasado',Valor:R.pct+'%'},{Indicador:'Em aberto',Valor:R.abertos},{Indicador:'Concluídos',Valor:R.concl},{Indicador:'Nossa entrega atrasada',Valor:R.nossa},{Indicador:'Gerado em',Valor:dataHora(new Date().toISOString())+' por '+euNome()}],'Resumo',{Indicador:28,Valor:60});
 const grp=l=>l.map(d=>({'Nome':d.nome,'Recebidos':d.tot,'Em dia':d.emDia,'Atrasados':d.atr,'% atrasados':d.pct+'%','Antecedência média (dias)':d.antec??'','Assuntos mais comuns':d.assuntos.join('; '),'Em aberto':d.abertos,'Nossa entrega atrasada':d.nossa}));
 aba(grp(R.deps),'Por departamento');aba(grp(R.rems),'Por remetente');aba(L.map(linhaCh),'Chamados');
 const bin=X.write(wb,{bookType:'xlsx',type:'array'});
 try{await DL.save({filename:`chamados-${f.de||'inicio'}-a-${f.ate||HJ}.xlsx`,data:new Blob([bin],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})});log(`Baixou o Excel dos chamados (${perTxt(f.de,f.ate)}, ${L.length} chamados)`);toast('Excel baixado');fechar()}catch(e){toast('Não foi possível baixar.')}}
function htmlRelCh(L,f,an){const R=resumoCh(L),e=esc,mx=Math.max(1,...R.deps.map(d=>d.tot));
 const sit={critico:['#9C2F2B','#F8E5E3','Crítico'],atencao:['#8A5A0B','#F7EDDA','Atenção'],bom:['#2F6B3A','#E6F1E7','Bom']};
 const tab=(cab,lin)=>`<table><thead><tr>${cab.map(x=>`<th>${e(x)}</th>`).join('')}</tr></thead><tbody>${lin.join('')}</tbody></table>`;
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Relatório de chamados · ${e(perTxt(f.de,f.ate))}</title><style>
 body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#1C2321;background:#F6F7F7;margin:0;padding:32px 16px;line-height:1.45}main{max-width:1100px;margin:0 auto}
 h1{font-size:24px;margin:0 0 4px}h2{font-size:16px;margin:28px 0 10px}.sub{color:#5B6663;margin:0 0 20px}
 .kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;background:#E3E6E5;border:1px solid #E3E6E5;border-radius:12px;overflow:hidden}.kpi{background:#fff;padding:14px 16px}.kpi p{margin:0;font-size:12px;color:#5B6663}.kpi b{display:block;font-size:24px;font-weight:600;margin-top:2px}
 .card{background:#fff;border:1px solid #E3E6E5;border-radius:12px;padding:16px 18px;margin-top:12px}
 .bar{display:grid;grid-template-columns:200px 1fr 170px;gap:10px;align-items:center;font-size:13px;padding:4px 0}.bar .t{display:flex;gap:2px;height:12px}.bar i{display:block;height:100%}.ok{background:#2F6B3A}.bad{background:#9C2F2B}
 table{width:100%;border-collapse:collapse;font-size:12.5px;background:#fff}th,td{text-align:left;padding:7px 8px;border-bottom:1px solid #EEF0EF;vertical-align:top}th{background:#F1F3F2;font-weight:600;position:sticky;top:0}
 .wrap{overflow-x:auto;border:1px solid #E3E6E5;border-radius:12px}.tag{display:inline-block;padding:1px 8px;border-radius:99px;font-size:11.5px;font-weight:600}
 .leg span{margin-right:14px;font-size:12px;color:#5B6663}.leg i{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:5px}
 blockquote{margin:8px 0 0;padding:10px 12px;background:#F6F7F7;border-left:3px solid #C24E1C;border-radius:6px;white-space:pre-wrap}
 .foot{color:#8A9491;font-size:12px;margin-top:28px}@media print{body{background:#fff;padding:0}.card,.wrap{break-inside:avoid}}
 </style></head><body><main>
 <h1>Relatório de chamados</h1><p class="sub">${e(perTxt(f.de,f.ate))}${f.dep?' · '+e(f.dep==='_sem'?'Sem setor':depNome(f.dep)):''} · Regra: D-${CHEG_MIN()} (${CHEG_UTEIS()?'dias úteis':'dias corridos'}); sem data no e-mail conta como atrasado · Gerado em ${e(dataHora(new Date().toISOString()))} por ${e(euNome())}</p>
 <div class="kpis"><div class="kpi"><p>Recebidos</p><b>${R.tot}</b></div><div class="kpi"><p>Chegaram em dia</p><b style="color:#2F6B3A">${R.emDia}</b></div><div class="kpi"><p>Chegaram atrasados</p><b style="color:#9C2F2B">${R.atr} <small style="font-size:13px">(${R.pct}%)</small></b></div><div class="kpi"><p>Em aberto</p><b>${R.abertos}</b></div><div class="kpi"><p>Nossa entrega atrasada</p><b>${R.nossa}</b></div></div>
 <h2>Por departamento</h2><div class="card"><div class="leg"><span><i class="ok"></i>Em dia</span><span><i class="bad"></i>Atrasado</span></div>${R.deps.map(d=>`<div class="bar"><span>${e(d.nome)}</span><div class="t" style="width:${Math.max(4,d.tot/mx*100)}%">${d.emDia?`<i class="ok" style="flex:${d.emDia}"></i>`:''}${d.atr?`<i class="bad" style="flex:${d.atr}"></i>`:''}</div><span>${d.atr} de ${d.tot} atrasados (${d.pct}%)</span></div>`).join('')||'<p>Nenhum chamado.</p>'}</div>
 <div class="wrap" style="margin-top:12px">${tab(['Departamento','Recebidos','Em dia','Atrasados','% atrasados','Antecedência média','Assuntos mais comuns','Em aberto','Nossa entrega atrasada'],R.deps.map(d=>`<tr><td>${e(d.nome)}</td><td>${d.tot}</td><td>${d.emDia}</td><td>${d.atr}</td><td>${d.pct}%</td><td>${d.antec===null?'—':d.antec+' dias'}</td><td>${e(d.assuntos.join('; '))}</td><td>${d.abertos}</td><td>${d.nossa}</td></tr>`))}</div>
 <h2>Remetentes que mais mandam atrasado</h2><div class="wrap">${tab(['Remetente','Recebidos','Atrasados','% atrasados','Antecedência média'],R.rems.filter(r=>r.atr).slice(0,15).map(r=>`<tr><td>${e(r.nome)}</td><td>${r.tot}</td><td>${r.atr}</td><td>${r.pct}%</td><td>${r.antec===null?'—':r.antec+' dias'}</td></tr>`))}</div>
 ${an?`<h2>Análise com IA</h2><div class="card"><p>${e(an.resumo)}</p>${an.destaques?.length?`<ul>${an.destaques.map(x=>`<li>${e(x)}</li>`).join('')}</ul>`:''}</div>${(an.departamentos||[]).map(d=>{const c=sit[d.situacao]||sit.atencao;return `<div class="card"><b>${e(d.nome)}</b> <span class="tag" style="background:${c[1]};color:${c[0]}">${c[2]}</span><p>${e(d.diagnostico)}</p><ul>${(d.melhorias||[]).map(x=>`<li>${e(x)}</li>`).join('')}</ul>${d.exemplo_mensagem?`<blockquote>${e(d.exemplo_mensagem)}</blockquote>`:''}</div>`}).join('')}${an.acoes_contabilidade?.length?`<div class="card"><b>O que a contabilidade pode melhorar</b><ul>${an.acoes_contabilidade.map(x=>`<li>${e(x)}</li>`).join('')}</ul></div>`:''}`:''}
 <h2>Todos os chamados (${L.length})</h2><div class="wrap">${(()=>{const rows=L.map(linhaCh),cab=Object.keys(rows[0]||{});return tab(cab,rows.map(r=>`<tr>${cab.map(k=>`<td>${k==='Chegada'?`<span class="tag" style="background:${r[k]==='Atrasado'?'#F8E5E3;color:#9C2F2B':r[k]==='Em dia'?'#E6F1E7;color:#2F6B3A':'#EEF0EF;color:#5B6663'}">${e(r[k])}</span>`:e(r[k])}</td>`).join('')}</tr>`))})()}</div>
 <p class="foot">Prumo · Financeiro e Contábil. Valores e dados bancários ficam no ERP; este relatório traz só o andamento dos pedidos.</p></main></body></html>`}
async function baixarHtmlCh(){const f=exFiltro(),L=linhasCh(f.de,f.ate,f.dep);if(!L.length){toast('Nenhum chamado nesse período.');return}if(!DL){toast('O download não está disponível nesta visualização.');return}
 const an=ultimaIA(f.de,f.ate)?.analise||null;
 try{await DL.save({filename:`relatorio-chamados-${f.de||'inicio'}-a-${f.ate||HJ}.html`,data:new Blob([htmlRelCh(L,f,an)],{type:'text/html'})});log(`Baixou o relatório HTML dos chamados (${perTxt(f.de,f.ate)})`);toast('Relatório baixado. Abra no navegador; dá para imprimir ou salvar em PDF.');fechar()}catch(e){toast('Não foi possível baixar.')}}

/* análise com IA: o Prumo manda só números resumidos, nunca o texto dos e-mails */
const ultimaIA=(de,ate)=>[...D.analises].filter(a=>(!de&&!ate)||(a.de===de&&a.ate===ate)).sort((a,b)=>(b.criado||'').localeCompare(a.criado||''))[0];
function dadosIA(de,ate){const L=linhasCh(de,ate,''),R=resumoCh(L),m0=(ate||HJ).slice(0,7);
 const meses=[...Array(6)].map((_,i)=>addMes(m0,i-5)).map(mm=>{const l=D.chamados.filter(c=>diaCh(c).slice(0,7)===mm),r=resumoCh(l);return {mes:mm,recebidos:r.tot,atrasados:r.atr,pct_atrasados:r.pct}});
 const g=d=>({nome:d.nome,recebidos:d.tot,em_dia:d.emDia,atrasados:d.atr,pct_atrasados:d.pct,antecedencia_media_dias:d.antec,assuntos_mais_comuns:d.assuntos,em_aberto:d.abertos,nossa_entrega_atrasada:d.nossa});
 return {periodo:perTxt(de,ate),regra_chegada:`D-${CHEG_MIN()} ${CHEG_UTEIS()?'dias úteis':'dias corridos'}; sem data no e-mail = atrasado`,
  totais:{recebidos:R.tot,em_dia:R.emDia,atrasados:R.atr,pct_atrasados:R.pct,em_aberto:R.abertos,concluidos:R.concl,nossa_entrega_atrasada:R.nossa},
  departamentos:R.deps.slice(0,25).map(g),remetentes_com_atraso:R.rems.filter(r=>r.atr).slice(0,15).map(g),ultimos_6_meses:meses,
  etapas_em_aberto:ordemEt().filter(k=>k!=='Concluído').map(k=>({etapa:nomeEt(k),qtd:L.filter(c=>c.st===k).length}))}}
/* análise gratuita: copia os números e um pedido pronto para colar no claude.ai ou no Copilot */
const PEDIDO_IA=`Você é um analista sênior de processos de um departamento Financeiro e Contábil no Brasil. Abaixo estão indicadores resumidos dos pedidos (chamados) que outros departamentos enviam à contabilidade, quase sempre por e-mail.

Regras da casa:
- O pedido chega "em dia" quando o e-mail traz a data pedida e chega com a antecedência mínima (D-8). Sem data no e-mail, ou com menos antecedência, conta como atrasado.
- Toda solicitação de pagamento precisa ter: vencimento, data do pagamento, NF ou recibo, informações do pagamento e o documento (boleto ou PIX), com cópia para contasapagaread@, controladoria@, guilherme.esquivel@fatecie.edu.br e o diretor que autorizou.
- O pagamento é feito em D-5 (5 dias úteis antes do vencimento). Pagamento depois disso precisa de justificativa.

Escreva em português do Brasil, direto e prático, para o diretor e a equipe lerem em reunião:
1. Resumo geral em 3 a 5 frases.
2. Para cada departamento relevante: situação (crítico, atenção ou bom), diagnóstico curto e melhorias concretas com exemplos.
3. Uma mensagem curta e cordial que a contabilidade pode mandar a cada departamento com problema.
4. O que a própria contabilidade pode melhorar.
Baseie tudo nos números; não invente dados. Se a amostra for pequena, diga isso.

Indicadores (JSON):
`;
function dadosPadraoIA(de,ate){const L=D.chamados.filter(c=>{const d=diaCh(c);return d&&d>=de&&d<=ate}),dep=c=>c.dep?depNome(c.dep):remNomeCh(c),P={},G={};
 for(const c of L){if(c.padrao){const k=dep(c),x=P[k]=P[k]||{departamento:k,solicitacoes_conferidas:0,fora_do_padrao:0,itens_que_faltaram:{},copias_que_faltaram:0};x.solicitacoes_conferidas++;
   if((c.falta||[]).length||(c.faltaCc||[]).length){x.fora_do_padrao++;(c.falta||[]).forEach(i=>{const n=itemNome(i);x.itens_que_faltaram[n]=(x.itens_que_faltaram[n]||0)+1});if((c.faltaCc||[]).length)x.copias_que_faltaram++}}
  const ps=pagSit(c);if(ps&&ps.pg){const k=dep(c),y=G[k]=G[k]||{departamento:k,pagamentos:0,no_d5:0,fora_do_d5:0,justificativas:[]};y.pagamentos++;if(ps.ok)y.no_d5++;else{y.fora_do_d5++;if(ps.just)y.justificativas.push(ps.just.slice(0,160))}}}
 return {padrao_das_solicitacoes:Object.values(P),pagamentos_d5:Object.values(G)}}
function iaCopiarSheet(per){per=per||'mes';const m=MES_ATUAL,de=per==='ant'?`${addMes(m,-1)}-01`:per==='tri'?`${addMes(m,-2)}-01`:`${m}-01`,ate=per==='ant'?isoD(new Date(+m.slice(0,4),+m.slice(5,7)-1,0)):HJ;
 FORM={tipo:'_iacp',de,ate};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Análise com IA · sem custo</p><h2 id="sheet-title">Analisar no Claude ou no Copilot</h2><p class="sub" style="font-size:13px">O Prumo copia os números dos pedidos e um pedido pronto. Você cola numa IA que já usa. Só vão números resumidos: nenhum texto de e-mail, valor ou dado bancário.</p></div>
 <div><label class="lbl" for="iacp_per">Período</label><select class="inp" id="iacp_per" onchange="iaCopiarSheet(this.value)"><option value="mes" ${per==='mes'?'selected':''}>Este mês</option><option value="ant" ${per==='ant'?'selected':''}>Mês passado</option><option value="tri" ${per==='tri'?'selected':''}>Últimos 3 meses</option></select><p class="meta" style="margin:4px 0 0">${esc(perTxt(de,ate))}</p></div>
 <ol class="passos"><li>Clique em <b>Copiar para a IA</b>.</li><li>Abra o <a href="https://claude.ai/new" target="_blank" rel="noopener">Claude</a> ou o <a href="https://copilot.microsoft.com" target="_blank" rel="noopener">Copilot</a> (com o e-mail da Fatecie).</li><li>Cole com <b>Ctrl+V</b> e envie.</li></ol>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" onclick="iaCopiar()">Copiar para a IA</button></div></div>`;
 document.getElementById('ov').hidden=false}
function iaCopiar(){if(FORM?.tipo!=='_iacp')return;const {de,ate}=FORM;const txt=PEDIDO_IA+JSON.stringify({...dadosIA(de,ate),...dadosPadraoIA(de,ate)},null,1);
 copiar(null,txt);log(`Copiou os números dos pedidos (${perTxt(de,ate)}) para analisar com IA`)}
function iaSheet(de,ate){const m=MES_ATUAL;de=de??`${m}-01`;ate=ate??HJ;FORM={tipo:'_ia',de,ate};
 const a=ultimaIA(de,ate)||ultimaIA(),an=a?.analise,sit={critico:['bad','Crítico'],atencao:['wa','Atenção'],bom:['ok','Bom']};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Chamados · inteligência artificial</p><h2 id="sheet-title">Análise com IA</h2><p class="sub" style="font-size:13px">A IA lê os números dos chamados (por departamento, remetente, assunto e mês) e sugere melhorias. O texto dos e-mails não é enviado.</p></div>
 <div class="fgrid"><div><label class="lbl" for="ia_de">De</label><input class="inp" id="ia_de" type="date" value="${esc(de)}"></div><div><label class="lbl" for="ia_ate">Até</label><input class="inp" id="ia_ate" type="date" value="${esc(ate)}"></div></div>
 <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn pri" id="ia_btn" onclick="gerarIA()">${S.iaRodando?'Analisando… (pode levar até 1 minuto)':'Gerar nova análise'}</button>${an?`<button class="btn" onclick="copiarIA()">Copiar texto</button>`:''}</div>
 ${an?`<div class="iabox"><p class="meta" style="margin:0">Análise de ${esc(a.periodo||perTxt(a.de,a.ate))} · gerada em ${esc(dataHora(a.criado))} por ${esc(a.porNome||'—')}</p>
  <p style="margin:8px 0">${esc(an.resumo)}</p>${an.destaques?.length?`<ul>${an.destaques.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
  ${(an.departamentos||[]).map(d=>{const c=sit[d.situacao]||sit.atencao;return `<div class="iadep"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><b>${esc(d.nome)}</b><span class="tag ${c[0]}">${c[1]}</span></div><p>${esc(d.diagnostico)}</p>${d.melhorias?.length?`<span class="lbl">Exemplos de melhoria</span><ul>${d.melhorias.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${d.exemplo_mensagem?`<span class="lbl">Mensagem sugerida para o departamento</span><blockquote>${esc(d.exemplo_mensagem)}</blockquote>`:''}</div>`}).join('')}
  ${an.acoes_contabilidade?.length?`<div class="iadep"><b>O que a contabilidade pode melhorar</b><ul>${an.acoes_contabilidade.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}</div>`:'<p class="meta">Nenhuma análise ainda. Escolha o período e clique em Gerar nova análise.</p>'}
 <div class="foot"><span class="meta">As sugestões são da IA: confira antes de agir.</span><button class="btn" onclick="fechar()">Fechar</button></div>`;
 document.getElementById('ov').hidden=false}
async function gerarIA(){if(S.iaRodando)return;const de=val('ia_de'),ate=val('ia_ate');if(de&&ate&&de>ate){toast('A data inicial é depois da final.');return}
 const L=linhasCh(de,ate,'');if(!L.length){toast('Nenhum chamado nesse período.');return}
 const sb=window.portalSupabase;if(!sb?.functions){toast('A IA só funciona no sistema publicado, com login.');return}
 S.iaRodando=true;iaSheet(de,ate);
 const MSG={sem_chave:'Falta configurar a chave da IA (ANTHROPIC_API_KEY) no Supabase.',chave_invalida:'A chave da IA no Supabase não foi aceita. Confira o valor.',sem_permissao:'Só diretor, administradores e quem cuida dos chamados podem gerar a análise.',ocupado:'A IA está ocupada agora. Tente de novo em alguns minutos.',recusado:'A IA não conseguiu analisar esses dados. Tente outro período.'};
 try{const {data,error}=await sb.functions.invoke('ia-analise',{body:{dados:dadosIA(de,ate)}});
  if(error){let j=null;try{j=await error.context?.json()}catch(e){}toast(MSG[j?.erro]||(String(error.message||'').includes('Failed to send')||error.name==='FunctionsFetchError'?'A função ia-analise ainda não foi criada no Supabase.':'Não foi possível gerar a análise.'));return}
  if(!data?.analise){toast('A IA não devolveu a análise. Tente de novo.');return}
  await salvar('analises',null,{criado:new Date().toISOString(),de,ate,periodo:periodoTxt(de,ate),analise:data.analise,modelo:data.modelo||'',por:S.perfil,porUid:ME.uid||null,porNome:euNome()},'Análise pronta',`Gerou a análise com IA dos chamados (${periodoTxt(de,ate)})`)}
 catch(e){toast('Não foi possível gerar a análise.')}
 finally{S.iaRodando=false;if(FORM?.tipo==='_ia')setTimeout(()=>iaSheet(de,ate),300)}}
function copiarIA(){const a=ultimaIA(FORM?.de,FORM?.ate)||ultimaIA(),an=a?.analise;if(!an)return;
 const t=[`Análise dos chamados · ${a.periodo||''}`,'',an.resumo,'',...(an.destaques||[]).map(x=>'• '+x),'',...(an.departamentos||[]).flatMap(d=>[`${d.nome} (${d.situacao})`,d.diagnostico,...(d.melhorias||[]).map(x=>'  - '+x),d.exemplo_mensagem?'  Mensagem: '+d.exemplo_mensagem:'','']),'O que a contabilidade pode melhorar:',...(an.acoes_contabilidade||[]).map(x=>'• '+x)].join('\n');
 navigator.clipboard?.writeText(t).then(()=>toast('Texto copiado'),()=>toast('Não foi possível copiar.'))}
/* ---------- resumo para o diretor: e-mail + aviso no sino, na data e hora escolhidas ---------- */
// Para incluir um assunto novo no resumo, basta acrescentar um item nesta lista.
const ITENS_RESUMO=[
 ['chegada','Pedidos que chegaram atrasados','Por departamento e remetente, no mês'],
 ['nossa','Demandas atrasadas','Chamados com o nosso prazo de entrega vencido'],
 ['semResp','Chamados sem responsável','Ninguém aceitou ainda'],
 ['triagem','E-mails aguardando revisão','Chegaram e ainda não viraram chamado'],
 ['rotinas','Rotinas atrasadas do cronograma','De dias anteriores, por pessoa'],
 ['entregas','Entregas de outros departamentos em atraso','Quando o módulo de entregas está ligado'],
 ['prazos','Próximos prazos','Obrigações e compromissos dos próximos 7 dias'],
 ['ia','Última análise com IA','O resumo da análise mais recente']];
const FREQ_RES=[['util','Todo dia útil'],['semanal','Toda semana'],['mensal','Todo mês'],['datas','Só nas datas que eu escolher']];
const cfgRes=()=>({ativo:false,freq:'util',dias:[1],n:1,datas:[],hora:'08:00',para:[],soSeHouver:false,itens:{chegada:true,nossa:true,semResp:true,triagem:true,rotinas:true,entregas:true,prazos:false,ia:false},...(CFG.resumoDir||{})});
function resumoHoje(c){c=c||cfgRes();if(!c.ativo)return false;const dw=new Date(HJ+'T12:00').getDay();
 if(c.freq==='util')return ehUtil(HJ);if(c.freq==='semanal')return (c.dias||[]).map(Number).includes(dw);
 if(c.freq==='mensal'){const [y,m]=HJ.split('-').map(Number),ult=new Date(y,m,0).getDate();return +HJ.slice(8,10)===Math.min(+c.n||1,ult)}
 return (c.datas||[]).includes(HJ)}
function quandoRes(c){const h=c.hora?` às ${c.hora}`:'';return c.freq==='util'?`Todo dia útil${h}`:c.freq==='semanal'?`Toda ${(c.dias||[]).map(d=>SEM[d]).join(', ')||'—'}${h}`:c.freq==='mensal'?`Todo dia ${c.n||1}${h}`:`${(c.datas||[]).length?(c.datas||[]).map(fmt).join(', '):'nenhuma data'}${h}`}
function dadosResumo(c){c=c||cfgRes();const it=c.itens||{},S2=[],m=MES_ATUAL,url=location.origin;
 const add=(k,t,linhas,total)=>{if(it[k]&&total)S2.push({k,t,linhas,total})};
 if(it.chegada){const L=D.chamados.filter(x=>diaCh(x).slice(0,7)===m),R=resumoCh(L),d=R.deps.filter(x=>x.atr);add('chegada',`Pedidos que chegaram atrasados em ${mesNome(m)}: ${R.atr} de ${R.marcados} (${R.pct}%)`,d.slice(0,8).map(x=>`${x.nome}: ${x.atr} de ${x.tot} atrasados (${x.pct}%)`),R.atr)}
 if(it.nossa){const L=D.chamados.filter(chAtrasado).sort((a,b)=>(a.prazo||'').localeCompare(b.prazo||''));add('nossa',`Demandas com o nosso prazo vencido: ${L.length}`,L.slice(0,10).map(x=>`${x.proto} · ${x.assunto} · ${respNome(x.resp)} · prazo ${fmtAno(x.prazo)}`),L.length)}
 if(it.semResp){const L=D.chamados.filter(x=>x.st!=='Concluído'&&!x.resp);add('semResp',`Chamados sem responsável: ${L.length}`,L.slice(0,10).map(x=>`${x.proto} · ${x.assunto} · ${x.dep?depNome(x.dep):remNomeCh(x)}`),L.length)}
 if(it.triagem){const L=D.emails.filter(e=>e.st==='triagem');add('triagem',`E-mails aguardando revisão: ${L.length}`,L.slice(0,8).map(e=>`${e.deNome||e.de} · ${e.assunto}`),L.length)}
 if(it.rotinas){const L=atrasosCron().filter(o=>o.dia<HJ),por={};L.forEach(o=>rsDe(o.r).forEach(p=>{por[p]=(por[p]||0)+1}));add('rotinas',`Rotinas atrasadas do cronograma: ${L.length}`,Object.entries(por).sort((a,b)=>b[1]-a[1]).map(([p,q])=>`${nomeDe(p)}: ${q}`),L.length)}
 if(it.entregas&&modOn('entregas')){const L=D.entregas.filter(entAtrasada);add('entregas',`Entregas de outros departamentos em atraso: ${L.length}`,L.slice(0,10).map(e=>`${depNome(e.dep)} · ${e.item} · prazo ${fmtAno(e.prazo)}`),L.length)}
 if(it.prazos){const L=proxPrazos(30).filter(x=>x.d<=addDia(HJ,7));add('prazos',`Próximos prazos (7 dias): ${L.length}`,L.slice(0,10).map(x=>`${fmt(x.d)}${x.h?' '+x.h:''} · ${x.t}`),L.length)}
 if(it.ia){const a=ultimaIA();if(a?.analise)add('ia',`Última análise com IA (${a.periodo||''})`,[a.analise.resumo],1)}
 return {secoes:S2,url}}
function htmlResumo(r){const e=esc;
 return `<div style="font-family:Segoe UI,Arial,sans-serif;color:#1C2321;max-width:640px"><h2 style="margin:0 0 4px;font-size:18px">Resumo do Prumo · ${e(hojeTxt())}</h2><p style="margin:0 0 16px;color:#5B6663;font-size:13px">Financeiro e Contábil</p>
 ${r.secoes.length?r.secoes.map(x=>`<div style="border:1px solid #E3E6E5;border-radius:10px;padding:12px 14px;margin:0 0 10px"><b style="font-size:14px">${e(x.t)}</b>${x.linhas.length?`<ul style="margin:6px 0 0;padding-left:18px;font-size:13px">${x.linhas.map(l=>`<li style="margin:2px 0">${e(l)}</li>`).join('')}</ul>`:''}</div>`).join(''):'<p>Nada atrasado ou pendente nos itens escolhidos. Tudo em dia.</p>'}
 <p style="margin:16px 0 0;font-size:13px"><a href="${e(r.url)}" style="color:#C24E1C">Abrir o Prumo</a></p><p style="color:#8A9491;font-size:11.5px;margin-top:14px">Resumo automático do Prumo. Para mudar a data, o horário ou os itens, use Painel › Resumo para o diretor.</p></div>`}
async function enviarResumoDir(manual){const c=cfgRes(),av=cfgAv(),para=c.ativo||manual?(c.para||[]).filter(emailOk):[],zap=av.resumoWhats&&(av.whatsNums||[]).length;
 const r=dadosResumo(c);if(!manual&&c.soSeHouver&&!r.secoes.length)return 'vazio';
 const tot=r.secoes.reduce((a,x)=>a+(x.k==='ia'?0:x.total),0);
 if(zap){const NL='\n',txt=`*Resumo do Prumo · ${fmt(HJ)}*${NL}${r.secoes.length?r.secoes.map(x=>`*${x.t}*${x.k==='ia'||!x.linhas.length?'':NL+x.linhas.slice(0,4).map(l=>'• '+l).join(NL)}`).join(NL+NL):'Tudo em dia nos itens escolhidos.'}${NL}${location.origin}`;const w=await mandarWhats(txt);if(manual)toast(w.ok?'Resumo enviado no WhatsApp':(ERR_WHATS[w.erro]||'WhatsApp não enviado.'));if(!para.length)return w.ok}
 if(!para.length){if(manual&&!zap)toast('Informe pelo menos um e-mail para receber o resumo.');return false}
 if(!MCP){if(manual)toast(msgErro({code:'sem_mcp'}));return false}
 try{await MCP.callTool(SRV,'outlook_send_mail',{to:para,subject:`Resumo do Prumo · ${fmt(HJ)}/${HJ.slice(0,4)}${tot?` · ${tot} ${tot>1?'pendências':'pendência'}`:' · tudo em dia'}`,bodyType:'html',body:htmlResumo(r),comoEquipe:true},{cache:false});
  log(`${manual?'Enviou':'O Prumo enviou'} o resumo para o diretor (${para.join(', ')})`);if(manual)toast('Resumo enviado');return true}
 catch(e){if(manual)toast(msgErro(e));return false}}
async function resumoTick(){const c=cfgRes(),av=cfgAv(),ligado={...c,ativo:c.ativo||av.resumoWhats};if(!real()||S.sim||!DB||S.resEnv||!resumoHoje(ligado)||agoraHM()<(c.hora||'08:00'))return;if(!MCP&&!av.resumoWhats)return;
 let st=null;try{const d=await DB.doc('sync/resumo').get();st=d.exists?d.data():null}catch(e){return}
 if(st?.dia===HJ)return;
 try{const l=await DB.doc('sync/resumolock').acquire({holder:ME.uid||'x',ttlMs:180000});if(!l.acquired)return}catch(e){}
 S.resEnv=true;try{const ok=await enviarResumoDir(false);if(ok)await DB.doc('sync/resumo').set({dia:HJ,em:new Date().toISOString(),por:ME.uid||null,res:ok===true?'enviado':'nada'})}finally{S.resEnv=false}}
function cfgResumo(){const c=cfgRes();FORM={tipo:'_resumo',datas:[...(c.datas||[])]};
 const dw=[1,2,3,4,5,6].map(d=>`<label class="ck"><input type="checkbox" id="rs_d_${d}" ${(c.dias||[]).map(Number).includes(d)?'checked':''}> ${SEM[d]}</label>`).join('');
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Avisos</p><h2 id="sheet-title">Resumo e avisos do diretor</h2><p class="sub" style="font-size:13px">Avisos na hora pelo WhatsApp e um resumo do que está atrasado no dia e hora que você escolher. O diretor também vê tudo no sino do Prumo.</p></div>
 <div class="fgrid">
  <label class="perm full"><input type="checkbox" id="rs_on" ${c.ativo?'checked':''}><span><b>Ligar o resumo do dia por e-mail</b><small>${esc(quandoRes(c))}</small></span></label>
  <div><label class="lbl" for="rs_freq">Quando</label><select class="inp" id="rs_freq" onchange="resVis()">${FREQ_RES.map(([k,l])=>`<option value="${k}" ${k===c.freq?'selected':''}>${l}</option>`).join('')}</select></div>
  <div><label class="lbl" for="rs_hora">Horário</label><input class="inp" id="rs_hora" type="time" value="${esc(c.hora||'08:00')}"></div>
  <div class="full" id="rsw_sem"><span class="lbl">Dias da semana</span><div class="cks">${dw}</div></div>
  <div id="rsw_mes"><label class="lbl" for="rs_n">Dia do mês</label><input class="inp" id="rs_n" type="number" min="1" max="31" value="${+c.n||1}"></div>
  <div class="full" id="rsw_datas"><span class="lbl">Datas</span><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center" id="rs_lista"></div><div style="display:flex;gap:6px;margin-top:6px"><input class="inp" id="rs_nova" type="date" min="${HJ}" style="width:auto"><button class="btn" type="button" onclick="resAddData()">Adicionar data</button></div></div>
  <div class="full"><label class="lbl" for="rs_para">Enviar para</label><input class="inp" id="rs_para" placeholder="diretor@fatecie.edu.br" value="${esc((c.para||[]).join(', ')||(dir()&&ME.email?ME.email:''))}"><p class="meta" style="margin:4px 0 0">Separe vários e-mails por vírgula. Sai pela conta de e-mail conectada da equipe.</p><p class="ferr" id="rse_para"></p></div>
  <div class="full"><span class="lbl">O que entra no resumo</span><div class="perms">${ITENS_RESUMO.map(([k,l,d])=>`<label class="perm"><input type="checkbox" id="rs_i_${k}" ${(c.itens||{})[k]?'checked':''}><span><b>${l}</b><small>${d}</small></span></label>`).join('')}</div></div>
  <label class="perm full"><input type="checkbox" id="rs_so" ${c.soSeHouver?'checked':''}><span><b>Só enviar quando houver algo atrasado ou pendente</b><small>Nos dias em que estiver tudo em dia, o resumo não sai.</small></span></label>
 ${blocoAvisos()}
 </div>
 <div class="foot"><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" onclick="verResumo()">Ver como fica</button><button class="btn ghost" onclick="salvaResumo(true)">Salvar e enviar agora</button></div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaResumo()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false;resVis();resDatas()}
function resVis(){const f=val('rs_freq'),sh=(i,v)=>{const el=document.getElementById(i);if(el)el.hidden=!v};sh('rsw_sem',f==='semanal');sh('rsw_mes',f==='mensal');sh('rsw_datas',f==='datas')}
function resDatas(){const el=document.getElementById('rs_lista');if(!el)return;const L=[...FORM.datas].sort();el.innerHTML=L.length?L.map(d=>`<span class="chip">${fmtAno(d)} <button type="button" class="lnk" onclick="FORM.datas=FORM.datas.filter(x=>x!=='${d}');resDatas()" aria-label="Tirar ${fmtAno(d)}">×</button></span>`).join(''):'<span class="meta">Nenhuma data escolhida.</span>'}
function resAddData(){const v=val('rs_nova');if(!v)return;if(!FORM.datas.includes(v))FORM.datas.push(v);document.getElementById('rs_nova').value='';resDatas()}
function lerResumoForm(){const para=listaEnd(val('rs_para')).map(x=>x.toLowerCase());
 return {ativo:!!document.getElementById('rs_on')?.checked,freq:val('rs_freq'),hora:val('rs_hora')||'08:00',dias:[1,2,3,4,5,6].filter(d=>document.getElementById('rs_d_'+d)?.checked),n:Math.min(31,Math.max(1,Math.round(+val('rs_n')||1))),datas:[...FORM.datas].sort(),para,soSeHouver:!!document.getElementById('rs_so')?.checked,itens:Object.fromEntries(ITENS_RESUMO.map(([k])=>[k,!!document.getElementById('rs_i_'+k)?.checked]))}}
function verResumo(){const c=lerResumoForm(),r=dadosResumo(c);const w=window.open('','_blank');if(!w){toast('Libere as janelas pop-up para ver a prévia.');return}w.document.write(`<!doctype html><meta charset="utf-8"><title>Prévia do resumo</title><body style="padding:24px;background:#F6F7F7">${htmlResumo(r)}</body>`);w.document.close()}
async function salvaResumo(enviar){errEl('rse_para','');const c=lerResumoForm(),av=lerAvForm();
 if(av.whatsNums.some(n=>!foneOk(n))){toast('Confira o WhatsApp: 55 + DDD + número, só algarismos.');return}
 if((av.ativo||av.resumoWhats)&&!av.whatsNums.length){toast('Cadastre o WhatsApp do diretor.');return}
 if(c.para.some(x=>!emailOk(x))){errEl('rse_para','Confira os endereços.');return}
 if((c.ativo||(enviar&&!av.resumoWhats))&&!c.para.length){errEl('rse_para','Informe pelo menos um e-mail.');return}
 if(c.ativo&&c.freq==='semanal'&&!c.dias.length){toast('Escolha pelo menos um dia da semana.');return}
 if(c.ativo&&c.freq==='datas'&&!c.datas.length){toast('Adicione pelo menos uma data.');return}
 try{await DB.doc('config/estrutura').set({...CFG,resumoDir:c,avisosDir:av});CFG={...CFG,resumoDir:c,avisosDir:av};log(`Configurou o resumo e os avisos do diretor: resumo ${c.ativo?quandoRes(c):'desligado'}; WhatsApp ${av.ativo?'ligado':'desligado'}`);toast(av.ativo?'Avisos pelo WhatsApp ligados':c.ativo?`Resumo ligado: ${quandoRes(c)}`:'Salvo')}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar o resumo.':'Não foi possível salvar.');return}
 if(enviar)await enviarResumoDir(true);fechar()}
/* ---------- avisos na hora para o diretor (WhatsApp) ---------- */
// Para criar um aviso novo, acrescente um item aqui e chame avisarDiretor('chave', ...) onde o fato acontece.
const EVENTOS_AVISO=[
 ['emailAtrasado','Chegou e-mail atrasado','Assim que a busca encontra um pedido sem data ou com menos de D-8'],
 ['demandaAtrasada','Demanda passou do nosso prazo','Quando um chamado aceito vence sem ser concluído'],
 ['semResp','Chamado sem responsável há mais de 1 dia útil','Ninguém aceitou o pedido']];
const cfgAv=()=>({ativo:false,whats:true,email:false,whatsNums:[],eventos:{emailAtrasado:true,demandaAtrasada:true,semResp:false},resumoWhats:false,...(CFG.avisosDir||{})});
const foneOk=x=>/^\d{12,13}$/.test(String(x||'').replace(/\D/g,''));
async function mandarWhats(texto,nums){const c=cfgAv(),para=(nums||c.whatsNums||[]).filter(foneOk);if(!para.length)return {ok:false,erro:'sem_numero'};
 const sb=window.portalSupabase;if(!sb?.functions)return {ok:false,erro:'sem_login'};
 try{const {data,error}=await sb.functions.invoke('whats-enviar',{body:{para,texto}});if(error){let j=null;try{j=await error.context?.json()}catch(e){}return {ok:false,erro:j?.erro||(error.name==='FunctionsFetchError'||String(error.message||'').includes('Failed to send')?'sem_funcao':'falhou'),det:j?.res}}return {ok:!!data?.ok,res:data?.res}}
 catch(e){return {ok:false,erro:'falhou'}}}
const ERR_WHATS={sem_numero:'Cadastre o WhatsApp do diretor no Resumo e avisos.',sem_login:'O WhatsApp só funciona no sistema publicado, com login.',sem_funcao:'A função whats-enviar ainda não foi criada no Supabase.',sem_provedor:'Falta configurar o CallMeBot ou a API da Meta no Supabase.',sem_permissao:'Seu acesso não pode disparar avisos.',falhou:'Não foi possível enviar pelo WhatsApp.'};
async function avisarDiretor(ev,titulo,linhas){const c=cfgAv();if(!c.ativo||!c.eventos?.[ev])return false;
 const txt=`*Prumo · ${titulo}*\n${(linhas||[]).slice(0,8).map(l=>'• '+l).join('\n')}${(linhas||[]).length>8?`\n• e mais ${linhas.length-8}`:''}\n${location.origin}`;
 let ok=false;if(c.whats){const r=await mandarWhats(txt);ok=r.ok;if(!r.ok)S.avErr=r.erro}
 if(c.email){const para=(cfgRes().para||[]).filter(emailOk);if(para.length&&MCP){try{await MCP.callTool(SRV,'outlook_send_mail',{to:para,subject:`Prumo · ${titulo}`,bodyType:'html',body:`<p><b>${esc(titulo)}</b></p><ul>${(linhas||[]).map(l=>`<li>${esc(l)}</li>`).join('')}</ul><p><a href="${esc(location.origin)}">Abrir o Prumo</a></p>`,comoEquipe:true},{cache:false});ok=true}catch(e){}}}
 if(ok)log(`Avisou o diretor: ${titulo}`);return ok}
// demandas que venceram e chamados parados: confere a cada minuto, avisa uma vez só por chamado
async function avisoTick(){const c=cfgAv();if(!c.ativo||!real()||S.sim||!DB||S.avRod)return;const ev=c.eventos||{};
 const venc=ev.demandaAtrasada?D.chamados.filter(x=>chAtrasado(x)&&x.avisoAtraso!==x.prazo):[];
 const lim=(()=>{let d=HJ;for(let i=0;i<1;i++){d=addDia(d,-1);while(!ehUtil(d))d=addDia(d,-1)}return d})();
 const parados=ev.semResp?D.chamados.filter(x=>x.st!=='Concluído'&&!x.resp&&!x.avisoSemResp&&diaCh(x)&&diaCh(x)<lim):[];
 if(!venc.length&&!parados.length)return;
 try{const l=await DB.doc('sync/avisolock').acquire({holder:ME.uid||'x',ttlMs:120000});if(!l.acquired)return}catch(e){}
 S.avRod=true;
 try{if(venc.length&&await avisarDiretor('demandaAtrasada',venc.length>1?`${venc.length} demandas passaram do nosso prazo`:'Demanda passou do nosso prazo',venc.map(x=>`${x.proto} · ${x.assunto} · ${respNome(x.resp)} · prazo ${fmt(x.prazo)}`)))for(const x of venc)await patch('chamados',x.id,{avisoAtraso:x.prazo},null,false);
  if(parados.length&&await avisarDiretor('semResp',parados.length>1?`${parados.length} chamados sem responsável`:'Chamado sem responsável',parados.map(x=>`${x.proto} · ${x.assunto} · ${x.dep?depNome(x.dep):remNomeCh(x)} · desde ${fmt(diaCh(x))}`)))for(const x of parados)await patch('chamados',x.id,{avisoSemResp:HJ},null,false)}
 finally{S.avRod=false}}
async function testarWhats(){const nums=listaEnd(val('av_nums')).map(x=>x.replace(/\D/g,'')).filter(Boolean);if(!nums.length||nums.some(n=>!foneOk(n))){toast('Use o número com 55 + DDD + número, ex.: 5544999990000.');return}
 const c=lerAvForm();try{await DB.doc('config/estrutura').set({...CFG,avisosDir:c});CFG={...CFG,avisosDir:c}}catch(e){toast('Salve primeiro (só diretor ou administrador).');return}
 toast('Enviando teste…');const r=await mandarWhats('*Prumo* · teste de aviso. Se chegou, os avisos pelo WhatsApp estão funcionando.',nums);
 toast(r.ok?'Teste enviado. Confira o WhatsApp.':(ERR_WHATS[r.erro]||'Não foi possível enviar.')+(r.res?.[0]?.erro?` (${r.res[0].erro})`:''))}
function lerAvForm(){return {ativo:!!document.getElementById('av_on')?.checked,whats:true,email:!!document.getElementById('av_email')?.checked,whatsNums:listaEnd(val('av_nums')).map(x=>x.replace(/\D/g,'')).filter(Boolean),resumoWhats:!!document.getElementById('av_rw')?.checked,eventos:Object.fromEntries(EVENTOS_AVISO.map(([k])=>[k,!!document.getElementById('av_e_'+k)?.checked]))}}
const blocoAvisos=()=>{const a=cfgAv();return `<div class="full" style="border-top:1px solid var(--line);padding-top:14px;margin-top:4px"><span class="lbl">Avisos na hora pelo WhatsApp</span><p class="meta" style="margin:0 0 8px">Chega no WhatsApp do diretor assim que acontece, sem esperar o resumo.</p></div>
  <label class="perm full"><input type="checkbox" id="av_on" ${a.ativo?'checked':''}><span><b>Ligar os avisos pelo WhatsApp</b><small>${a.whatsNums.length?esc(a.whatsNums.join(', ')):'Nenhum número cadastrado ainda'}</small></span></label>
  <div class="full"><label class="lbl" for="av_nums">WhatsApp do diretor</label><div style="display:flex;gap:8px;flex-wrap:wrap"><input class="inp" id="av_nums" style="flex:1;min-width:220px" placeholder="5544999990000" value="${esc((a.whatsNums||[]).join(', '))}"><button class="btn" type="button" onclick="testarWhats()">Enviar teste</button></div><p class="meta" style="margin:4px 0 0">55 + DDD + número, só algarismos. Vários números separados por vírgula.</p></div>
  <div class="full"><span class="lbl">Avisar quando</span><div class="perms">${EVENTOS_AVISO.map(([k,l,d])=>`<label class="perm"><input type="checkbox" id="av_e_${k}" ${a.eventos?.[k]?'checked':''}><span><b>${l}</b><small>${d}</small></span></label>`).join('')}</div></div>
  <label class="perm full"><input type="checkbox" id="av_rw" ${a.resumoWhats?'checked':''}><span><b>Mandar o resumo do dia também pelo WhatsApp</b><small>No mesmo dia e horário do resumo acima</small></span></label>
  <label class="perm full"><input type="checkbox" id="av_email" ${a.email?'checked':''}><span><b>Mandar os avisos também por e-mail</b><small>Desligado por enquanto. Usa os e-mails do resumo.</small></span></label>`};
/* ---------- metas e a fazer do mês: departamento e cada pessoa ---------- */
const ST_META=[['afazer','A fazer','ne'],['andamento','Em andamento','ac'],['feito','Feito','ok']];
const stMeta=k=>ST_META.find(x=>x[0]===k)||ST_META[0];
const podeMeta=dono=>dono==='dep'?podeEditRot():dono==='dir'?(dir()||podeAdmin()):(dir()||podeAdmin()||dono===S.perfil);
const donoNome=d=>d==='dep'?'departamento':d==='dir'?'diretoria':nomeDe(d);
const itensMeta=(mes,dono)=>D.metas.filter(x=>x.tipo!=='nota'&&x.mes===mes&&x.dono===dono).sort((a,b)=>(ST_META.findIndex(s=>s[0]===a.st)===2)-(ST_META.findIndex(s=>s[0]===b.st)===2)||(a.prazo||'9').localeCompare(b.prazo||'9')||(a.em||'').localeCompare(b.em||''));
const notaMeta=(mes,dono)=>D.metas.find(x=>x.id===`${mes}_${dono}_nota`);
const quemNome=()=>pessoa(S.perfil)?.n||ME.nome||quemSou();
async function addMeta(mes,dono){const k=`${mes}_${dono}`.replace(/[^\w-]/g,''),t=val('mt_t_'+k),meta=val('mt_m_'+k),ini=val('mt_i_'+k),prazo=val('mt_p_'+k);
 if(ini&&prazo&&prazo<ini){toast('A data de fim é antes do início.');return}
 if(!podeMeta(dono)){toast('Cada pessoa edita só a sua lista.');return}if(!t){toast('Escreva o que precisa fazer.');document.getElementById('mt_t_'+k)?.focus();return}
 try{document.activeElement?.blur()}catch(e){}
 if(await salvar('metas',null,{tipo:'item',mes,dono,t,meta,ini,prazo,st:'afazer',em:new Date().toISOString(),criadoPor:quemNome()},'Incluído',`Incluiu "${t}" nas metas de ${mesCurto(mes)} (${donoNome(dono)})`)){
  setTimeout(()=>document.getElementById('mt_t_'+k)?.focus(),350)}}
async function stMetaCiclo(id){const x=D.metas.find(y=>y.id===id);if(!x)return;if(!podeMeta(x.dono)){toast('Cada pessoa edita só a sua lista.');return}
 const i=ST_META.findIndex(s=>s[0]===(x.st||'afazer')),nv=ST_META[(i+1)%3][0];
 await patch('metas',id,{st:nv,feitoEm:nv==='feito'?HJ:'',feitoPor:nv==='feito'?quemNome():'',iniEm:nv==='andamento'?(x.iniEm||HJ):x.iniEm||''},stMeta(nv)[1],`Marcou "${x.t}" como ${stMeta(nv)[1].toLowerCase()} (${mesCurto(x.mes)})`)}
async function salvaNota(mes,dono,el){if(!podeMeta(dono))return;const v=el.value.trim(),id=`${mes}_${dono}_nota`,ant=notaMeta(mes,dono);if((ant?.texto||'')===v)return;
 await salvar('metas',id,{tipo:'nota',mes,dono,texto:v,em:new Date().toISOString(),por:quemNome()},'Meta do mês salva',`Alterou a meta de ${mesCurto(mes)} (${donoNome(dono)})`)}
function editMeta(id){const x=D.metas.find(y=>y.id===id);if(!x||!podeMeta(x.dono))return;FORM={tipo:'_meta',id,del:false};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${x.dono==='dep'?'Departamento':esc(nomeDe(x.dono))} · ${esc(mesNome(x.mes))}</p><h2 id="sheet-title">Editar</h2></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="me_t">O que precisa fazer</label><input class="inp" id="me_t" value="${esc(x.t)}"><p class="ferr" id="mee_t"></p></div>
 <div class="full"><label class="lbl" for="me_m">Meta · opcional</label><input class="inp" id="me_m" value="${esc(x.meta||'')}" placeholder="100 lançamentos, zerar pendências"></div>
 <div><label class="lbl" for="me_i">Início</label><input class="inp" id="me_i" type="date" value="${esc(x.ini||'')}"></div>
 <div><label class="lbl" for="me_p">Fim</label><input class="inp" id="me_p" type="date" value="${esc(x.prazo||'')}"><p class="ferr" id="mee_p"></p></div>
 <div><label class="lbl" for="me_st">Situação</label><select class="inp" id="me_st">${ST_META.map(([k,l])=>`<option value="${k}" ${k===(x.st||'afazer')?'selected':''}>${l}</option>`).join('')}</select></div>
 <div class="full"><label class="lbl" for="me_o">Observação · opcional</label><textarea class="inp" id="me_o" style="min-height:60px">${esc(x.obs||'')}</textarea></div></div>
 <div class="foot"><div><button class="btn danger" id="bdel" onclick="delMeta()">Excluir</button></div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaMeta()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaMeta(){const x=D.metas.find(y=>y.id===FORM.id);if(!x)return;const t=val('me_t');errEl('mee_t','');if(!t){errEl('mee_t','Escreva o que precisa fazer.');return}
 const st=val('me_st');errEl('mee_p','');if(val('me_i')&&val('me_p')&&val('me_p')<val('me_i')){errEl('mee_p','O fim é antes do início.');return}
 if(await patch('metas',x.id,{t,meta:val('me_m'),ini:val('me_i'),prazo:val('me_p'),obs:val('me_o'),st,feitoEm:st==='feito'?(x.feitoEm||HJ):'',feitoPor:st==='feito'?(x.feitoPor||quemNome()):''},'Salvo',`Alterou "${t}" nas metas de ${mesCurto(x.mes)}`))fechar()}
async function delMeta(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
 const x=D.metas.find(y=>y.id===FORM.id);try{await DB.collection('metas').doc(FORM.id).delete();log(`Excluiu "${x?.t||''}" das metas de ${mesCurto(x?.mes||MES_ATUAL)}`);toast('Excluído');fechar()}catch(e){toast('Não foi possível excluir.')}}
async function levarPendentes(mes,dono){if(!podeMeta(dono))return;const L=itensMeta(mes,dono).filter(x=>x.st!=='feito'),prox=addMes(mes,1);if(!L.length){toast('Nada pendente para levar.');return}
 const key='lp_'+mes+dono;if(S.confLP!==key){S.confLP=key;toast(`Clique de novo para copiar ${L.length} ${L.length>1?'itens pendentes':'item pendente'} para ${mesNome(prox)}.`);setTimeout(()=>{if(S.confLP===key)S.confLP=null},5000);return}S.confLP=null;
 let k=0;for(const x of L){if(D.metas.some(y=>y.mes===prox&&y.dono===dono&&y.origem===x.id))continue;const {id,...b}=x;if(await salvar('metas',null,{...b,mes:prox,st:x.st==='andamento'?'andamento':'afazer',origem:id,em:new Date().toISOString()},false,false))k++}
 log(`Levou ${k} itens pendentes de ${mesCurto(mes)} para ${mesCurto(prox)} (${donoNome(dono)})`);toast(`${k} ${k>1?'itens copiados':'item copiado'} para ${mesNome(prox)}`)}
function cardMeta(mes,dono,titulo){const L=itensMeta(mes,dono),f=L.filter(x=>x.st==='feito').length,pm=podeMeta(dono),nota=notaMeta(mes,dono),k=`${mes}_${dono}`.replace(/[^\w-]/g,'');
 return `<div class="panel mcard ${dono==='dep'?'dep':''}"><div class="ph"><h2>${titulo}</h2><span>${L.length?`${f} de ${L.length} feitos`:'nada ainda'}</span></div>
 ${L.length?`<div class="bar" style="margin:4px 0 10px"><i style="width:${f/L.length*100}%"></i></div>`:''}
 <label class="lbl" for="mn_${k}">Meta do mês</label>${pm?`<textarea class="inp mnota" id="mn_${k}" data-nodraft="1" placeholder="${dono==='dep'?'O que o departamento precisa alcançar neste mês':'O que você quer alcançar neste mês'}" onblur="salvaNota('${mes}','${dono}',this)">${esc(nota?.texto||'')}</textarea>`:`<p class="mnota-ro">${nota?.texto?esc(nota.texto):'<span class="meta">Sem meta escrita.</span>'}</p>`}
 <div class="mlist">${L.map(x=>{const s=stMeta(x.st);return `<div class="mitem ${x.st==='feito'?'done':''}"><button class="tag ${s[2]}" ${pm?'':'disabled'} onclick="stMetaCiclo('${x.id}')" title="${pm?'Clique para mudar a situação':''}">${s[1]}</button><div class="t"><b>${esc(x.t)}</b>${x.meta||x.prazo||x.ini||x.obs?`<span>${[x.meta?'Meta: '+x.meta:'',x.ini&&x.prazo?`de ${fmt(x.ini)} a ${fmt(x.prazo)}`:x.ini?`início ${fmt(x.ini)}`:x.prazo?`fim ${fmt(x.prazo)}`:'',x.prazo&&x.st!=='feito'&&x.prazo<HJ?'(passou do fim)':'',x.obs||''].filter(Boolean).map(esc).join(' · ')}</span>`:''}${x.st==='feito'&&x.feitoPor?`<span class="pos">Feito por ${esc(x.feitoPor)} em ${fmt(x.feitoEm)}</span>`:''}</div>${pm?`<button class="btn ghost sm" onclick="editMeta('${x.id}')" aria-label="Editar ${esc(x.t)}">Editar</button>`:''}</div>`}).join('')||'<p class="meta" style="margin:8px 0">Nenhum item.</p>'}</div>
 ${pm?`<div class="madd"><div class="mf mf-t"><label class="lbl" for="mt_t_${k}">O que precisa fazer</label><input class="inp" id="mt_t_${k}" data-nodraft="1" placeholder="Conferir notas de outubro" onkeydown="if(event.key==='Enter')addMeta('${mes}','${dono}')"></div><div class="mf mf-m"><label class="lbl" for="mt_m_${k}">Meta · opcional</label><input class="inp" id="mt_m_${k}" data-nodraft="1" placeholder="100%, 50 lançamentos" onkeydown="if(event.key==='Enter')addMeta('${mes}','${dono}')"></div><div class="mf"><label class="lbl" for="mt_i_${k}">Início</label><input class="inp" id="mt_i_${k}" data-nodraft="1" type="date" value="${mes===MES_ATUAL?HJ:mes+'-01'}"></div><div class="mf"><label class="lbl" for="mt_p_${k}">Fim</label><input class="inp" id="mt_p_${k}" data-nodraft="1" type="date"></div><button class="btn pri mf-b" onclick="addMeta('${mes}','${dono}')">Adicionar</button></div>
 ${L.some(x=>x.st!=='feito')?`<button class="lnk" style="margin-top:8px" onclick="levarPendentes('${mes}','${dono}')">${S.confLP==='lp_'+mes+dono?'Confirmar: copiar pendentes':'Levar pendentes para '+mesNome(addMes(mes,1))}</button>`:''}`:'<p class="meta" style="margin:8px 0 0">Só a própria pessoa edita esta lista.</p>'}</div>`}
function resumoMetas(mes){const ps=colabs(),lin=(n,d)=>{const L=itensMeta(mes,d),f=L.filter(x=>x.st==='feito').length,a=L.filter(x=>x.st==='andamento').length,atr=L.filter(x=>x.st!=='feito'&&x.prazo&&x.prazo<HJ).length;return `<tr><td style="text-align:left">${esc(n)}</td><td>${L.length}</td><td>${f}</td><td>${a?`<span class="tag ac">${a}</span>`:'0'}</td><td>${atr?`<span class="tag bad">${atr}</span>`:'0'}</td><td>${L.length?Math.round(f/L.length*100)+'%':'—'}</td></tr>`};
 if(!D.metas.some(x=>x.mes===mes))return '';
 return `<div class="panel"><div class="ph"><h2>Metas de ${mesNome(mes)}</h2><button class="btn ghost" onclick="S.mM='${mes}';ir('metas')">Abrir metas</button></div><div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Quem</th><th>Itens</th><th>Feitos</th><th>Em andamento</th><th>Prazo passou</th><th>%</th></tr></thead><tbody>${lin('Departamento','dep')}${itensMeta(mes,'dir').length?lin('Diretoria','dir'):''}${ps.map(p=>lin(p.n,p.id)).join('')}</tbody></table></div></div>`}

/* ---------- e-mails no processo: cada e-mail (ou chamado) anda pelas etapas até ser concluído ---------- */
const refFluxo=f=>f.ref?.startsWith('email:')?D.emails.find(e=>e.id===f.ref.slice(6)):D.chamados.find(c=>c.id===(f.ref||'').slice(8));
const fluxoAtivos=x=>D.fluxo.filter(f=>f.st!=='concluido'&&(!x||!f.sis||f.sis===x));
const fluxoConcluidosDia=(dia,x)=>D.fluxo.filter(f=>f.st==='concluido'&&(f.concluidoEm||'').slice(0,10)===dia&&(!x||!f.sis||f.sis===x));
function linFluxo(f,dia){const pm=podeEditRot(),fim=f.st==='concluido',ult=(f.hist||[]).slice(-1)[0],r=refFluxo(f);
 const abrir=f.ref?.startsWith('chamado:')&&r?`<button class="lnk" onclick="detalheCh('${esc(r.id)}')">${esc(r.proto||'chamado')}</button> `:r?.link?`<a class="lnk" href="${esc(r.link)}" target="_blank" rel="noopener">abrir no Outlook ↗</a> `:'';
 return `<div class="fx-row ${fim?'done':''}"><div class="t"><b>${esc(f.t||'(sem assunto)')}</b><span>${[f.de,f.recebido?'recebido '+fmt(f.recebido.slice(0,10)):''].filter(Boolean).map(esc).join(' · ')} ${abrir}</span>
 ${ult?`<span class="meta">${fim?`✓ Concluído por ${esc(f.concluidoPor||ult.por||'—')} em ${dtH(f.concluidoEm)}`:`${esc(ult.etapa)} desde ${dtH(ult.em)} · ${esc(ult.por||'—')}`}</span>`:''}</div>
 ${fim?(pm?`<button class="lnk desf" onclick="fluxoReabrir('${f.id}')">reabrir</button>`:''):`<select class="inp fx-sel" ${pm?'':'disabled'} aria-label="Etapa de ${esc(f.t||'')}" onchange="fluxoEtapa('${f.id}',this.value)">${procs().map(e=>`<option ${e===f.etapa?'selected':''}>${esc(e)}</option>`).join('')}</select>${pm?`<button class="btn sm mk on-ok-hover" onclick="fluxoConcluir('${f.id}')">✓ Concluir</button><button class="itx" onclick="fluxoTirar('${f.id}')" title="Tirar do processo" aria-label="Tirar do processo">×</button>`:''}`}</div>`}
function quadroFluxo(dia){const x=sisAtual(),A=fluxoAtivos(x),C=fluxoConcluidosDia(dia,x),pm=podeEditRot();
 const grupos=procs().map((g,i)=>[g,i,A.filter(f=>f.etapa===g)]).filter(([, ,l])=>l.length);
 return `<div class="panel fx"><div class="ph"><h2>E-mails no processo · ${esc(x)}</h2>${pm?`<button class="btn pri" onclick="fluxoNovo()">+ Selecionar e-mail</button>`:''}</div>
 ${A.length?grupos.map(([g,i,l])=>`<p class="eyebrow" style="margin:12px 0 2px">${i+1}. ${esc(g)} · ${l.length}</p>${l.sort((a,b)=>(a.em||'').localeCompare(b.em||'')).map(f=>linFluxo(f,dia)).join('')}`).join(''):`<p class="meta" style="margin:4px 0">Nenhum e-mail em andamento no ${esc(x)}. Clique em <b>+ Selecionar e-mail</b> para incluir um e-mail do contas a pagar e escolher a etapa.</p>`}
 ${C.length?`<details style="margin-top:10px"><summary class="meta">Concluídos em ${fmt(dia)} · ${C.length}</summary>${C.map(f=>linFluxo(f,dia)).join('')}</details>`:''}</div>`}
function fluxoNovo(){FORM={tipo:'_fluxo'};const usados=new Set(D.fluxo.filter(f=>f.st!=='concluido').map(f=>f.ref));
 const em=D.emails.filter(e=>daCaixa(e)&&e.st!=='ignorado'&&!usados.has('email:'+e.id)).sort((a,b)=>(b.recebido||'').localeCompare(a.recebido||'')).slice(0,200);
 const ch=D.chamados.filter(c=>c.st!=='Concluído'&&!usados.has('chamado:'+c.id)).sort((a,b)=>(b.aberto||'').localeCompare(a.aberto||''));
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma · ${esc(sisAtual())}</p><h2 id="sheet-title">Selecionar e-mail</h2><p class="sub" style="font-size:13px">Escolha o e-mail (ou chamado) e em qual etapa ele está. Depois é só mudar a etapa conforme avança e concluir no final.</p></div>
 <div class="fgrid one"><div><label class="lbl" for="fx_q">Buscar</label><input class="inp" id="fx_q" data-nodraft="1" placeholder="Assunto ou remetente" oninput="fluxoFiltra()"></div>
 <div><label class="lbl" for="fx_ref">E-mail ou chamado</label><select class="inp" id="fx_ref" size="8">${em.length?`<optgroup label="E-mails do contas a pagar">${em.map(e=>`<option value="email:${esc(e.id)}" data-q="${esc(norm((e.assunto||'')+' '+(e.deNome||'')+' '+(e.de||'')))}">${esc(fmt((e.recebido||'').slice(0,10)))} · ${esc(e.deNome||e.de||'')} · ${esc(e.assunto||'')}</option>`).join('')}</optgroup>`:''}${ch.length?`<optgroup label="Chamados em aberto">${ch.map(c=>`<option value="chamado:${esc(c.id)}" data-q="${esc(norm((c.assunto||'')+' '+(c.proto||'')+' '+depNome(c.dep)))}">${esc(c.proto||'')} · ${esc(depNome(c.dep))} · ${esc(c.assunto||'')}</option>`).join('')}</optgroup>`:''}</select><p class="ferr" id="fxe_ref">${em.length||ch.length?'':'Nenhum e-mail ainda. Clique em Verificar agora em Chamados > E-mails para revisar.'}</p></div>
 <div class="fgrid" style="margin:0"><div><label class="lbl" for="fx_et">Etapa</label><select class="inp" id="fx_et">${procs().map(e=>`<option>${esc(e)}</option>`).join('')}</select></div>
 <div><label class="lbl" for="fx_sis">Sistema</label><select class="inp" id="fx_sis">${sists().map(x=>`<option ${x===sisAtual()?'selected':''}>${esc(x)}</option>`).join('')}</select></div></div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="fluxoSalvaNovo()">Incluir no processo</button></div></div>`;
 document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('fx_q')?.focus(),30)}
function fluxoFiltra(){const q=norm(val('fx_q'));document.querySelectorAll('#fx_ref option').forEach(o=>{o.hidden=!!q&&!(o.dataset.q||'').includes(q)})}
async function fluxoSalvaNovo(){const ref=val('fx_ref');errEl('fxe_ref','');if(!ref){errEl('fxe_ref','Escolha um e-mail ou chamado na lista.');return}
 const isEm=ref.startsWith('email:'),r=isEm?D.emails.find(e=>e.id===ref.slice(6)):D.chamados.find(c=>c.id===ref.slice(8));if(!r)return;
 const etapa=val('fx_et'),sis=val('fx_sis'),agora=new Date().toISOString(),quem=quemNome();
 const doc={ref,t:isEm?(r.assunto||''):`${r.proto||''} · ${r.assunto||''}`,de:isEm?(r.deNome||r.de||''):depNome(r.dep),recebido:isEm?(r.recebido||''):(r.aberto||''),sis,etapa,st:'andamento',em:agora,por:quem,hist:[{etapa,em:agora,por:quem}]};
 if(await salvar('fluxo',null,doc,'Incluído no processo',`Incluiu "${doc.t}" no processo (${etapa} · ${sis})`)){if(sis!==sisAtual()){S.cSis=sis}fechar()}}
async function fluxoEtapa(id,etapa){const f=D.fluxo.find(x=>x.id===id);if(!f||f.etapa===etapa)return;const agora=new Date().toISOString(),quem=quemNome();
 await patch('fluxo',id,{etapa,hist:[...(f.hist||[]),{etapa,em:agora,por:quem}]},`${etapa}`,`Moveu "${f.t}" para ${etapa} (${f.sis||''})`)}
async function fluxoConcluir(id){const f=D.fluxo.find(x=>x.id===id);if(!f)return;const agora=new Date().toISOString(),quem=quemNome();
 await patch('fluxo',id,{st:'concluido',concluidoEm:agora,concluidoPor:quem,hist:[...(f.hist||[]),{etapa:'Concluído',em:agora,por:quem}]},'Concluído',`Concluiu "${f.t}" (${f.etapa} · ${f.sis||''})`)}
async function fluxoReabrir(id){const f=D.fluxo.find(x=>x.id===id);if(!f)return;const agora=new Date().toISOString(),quem=quemNome();
 await patch('fluxo',id,{st:'andamento',concluidoEm:'',concluidoPor:'',hist:[...(f.hist||[]),{etapa:f.etapa,em:agora,por:quem,reaberto:true}]},'Reaberto',`Reabriu "${f.t}"`)}
async function fluxoTirar(id){const f=D.fluxo.find(x=>x.id===id);if(!f)return;if(S.fxDel!==id){S.fxDel=id;toast('Clique no × de novo para tirar do processo.');setTimeout(()=>{if(S.fxDel===id)S.fxDel=null},4000);return}S.fxDel=null;
 try{await DB.collection('fluxo').doc(id).delete();log(`Tirou "${f.t}" do processo`);toast('Retirado do processo')}catch(e){toast('Não foi possível retirar.')}}

/* ---------- prazos e compromissos: fixos (toda semana, todo mês) ou de uma vez ---------- */
const TIPOS_EV=['Reunião','Obrigação','Fechamento','Outro'];
const REP_EV=[['unica','Uma vez só'],['semanal','Toda semana'],['mensal','Todo mês']];
const corEv=e=>e.tipo==='Fechamento'?'bad':e.tipo==='Obrigação'?'wa':e.tipo==='Reunião'?'ac':'ne';
function evOcorre(e,dia){const r=e.rep||'unica';if(r==='unica')return e.data===dia;
 if(e.data&&dia<e.data)return false;if(e.fim&&dia>e.fim)return false;
 if(r==='semanal')return (e.dias||[]).map(Number).includes(new Date(dia+'T12:00').getDay());
 if(r==='mensal'){const [y,m]=dia.split('-').map(Number),ult=new Date(y,m,0).getDate();return +dia.slice(8,10)===Math.min(+e.n||1,ult)}
 return false}
/* o diretor vê tudo; "só pessoas escolhidas" aparece para elas e para quem criou */
const souCriador=e=>real()&&!S.sim&&e.criadoUid?e.criadoUid===ME.uid:(!!e.criadoPor&&e.criadoPor===S.perfil);
/* "Só para mim": só quem criou vê. "Pessoas escolhidas": elas, quem criou e o diretor. "Todos": todo mundo */
const vejoEv=e=>e.quem==='eu'?souCriador(e):(dir()||e.quem!=='pessoas'||(e.ps||[]).includes(S.perfil)||souCriador(e));
/* avisos e alertas: só o que é para a própria pessoa (o diretor não recebe aviso do compromisso dos outros) */
const paraMimEv=e=>e.quem==='eu'?souCriador(e):(e.quem!=='pessoas'||(e.ps||[]).includes(S.perfil)||souCriador(e));
const proxEv=(e,de,ate)=>{for(const d of diasDe(de,ate))if(evOcorre(e,d))return d;return ''};
function evTxt(e){const h=e.hora?` às ${e.hora}`:'',r=e.rep||'unica';
 return r==='semanal'?`Toda ${(e.dias||[]).map(d=>SEM[d]).join(', ')}${h}`:r==='mensal'?`Todo dia ${e.n||1}${h}`:`${fmt(e.data)}${h}`}
const quemEv=e=>e.quem==='eu'?`Só para ${e.criadoNome||'quem criou'}`:e.quem==='pessoas'?((e.ps||[]).map(nomeDe).join(', ')||'Só quem criou'):'Todos';
function proxPrazos(n,soMeus){const ate=addDia(HJ,60);
 const ev=D.eventos.filter(soMeus?paraMimEv:vejoEv).map(e=>{const d=proxEv(e,HJ,ate);return d?{d,t:e.t,g:e.tipo||'Outro',c:corEv(e),h:e.hora||'',fixo:(e.rep||'unica')!=='unica',quem:quemEv(e),id:e.id}:null}).filter(Boolean);
 const ta=D.tarefas.filter(x=>x.s!=='feita'&&x.prazo>=HJ&&(!soMeus||x.r===S.perfil)).map(x=>({d:x.prazo,t:x.t,g:x.a||'Tarefa',c:'ne',h:'',quem:nomeDe(x.r)}));
 return [...ev,...ta].sort((a,b)=>a.d<b.d?-1:a.d>b.d?1:(a.h||'99').localeCompare(b.h||'99')).slice(0,n)}
function linPrazo(e){return `<div class="row"><span class="meta" style="width:44px">${e.d===HJ?'Hoje':fmt(e.d)}</span><div class="t"><b>${esc(e.t)}</b><span>${[e.h,e.fixo?'fixo':'',e.quem==='Todos'?'':'para '+e.quem].filter(Boolean).map(esc).join(' · ')}</span></div><span class="tag ${e.c}">${esc(e.g)}</span>${e.id&&podeEditRot()?`<button class="btn ghost" onclick="editEv('${e.id}')" aria-label="Editar ${esc(e.t)}">Editar</button>`:''}</div>`}
function editEv(id){const e=id?D.eventos.find(x=>x.id===id):{tipo:'Reunião',rep:'unica',data:HJ,dias:[5],n:1,quem:'todos',ps:[]};if(!e)return;
 FORM={tipo:'_ev',id:id||'',del:false};const ck=(i,on,t)=>`<label class="ck"><input type="checkbox" id="${i}" ${on?'checked':''}> ${esc(t)}</label>`;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Próximos prazos</p><h2 id="sheet-title">${id?'Editar prazo ou compromisso':'Novo prazo ou compromisso'}</h2><p class="sub" style="font-size:13px">Pode ser fixo, como uma reunião toda sexta, ou de uma vez só. Aparece nos próximos prazos, no calendário e no cronograma do dia.</p></div>
 <div class="fgrid">
 <div class="full"><label class="lbl" for="ev_t">Descrição</label><input class="inp" id="ev_t" value="${esc(e.t||'')}" placeholder="Reunião da equipe"><p class="ferr" id="eve_t"></p></div>
 <div><label class="lbl" for="ev_tipo">Tipo</label><select class="inp" id="ev_tipo">${TIPOS_EV.map(x=>`<option ${x===e.tipo?'selected':''}>${x}</option>`).join('')}</select></div>
 <div><label class="lbl" for="ev_rep">Repetição</label><select class="inp" id="ev_rep" onchange="evVis()">${REP_EV.map(([k,l])=>`<option value="${k}" ${k===(e.rep||'unica')?'selected':''}>${l}</option>`).join('')}</select></div>
 <div class="full" id="evw_dias"><span class="lbl">Dias da semana</span><div class="cks">${[1,2,3,4,5,6].map(d=>ck('ev_d_'+d,(e.dias||[]).map(Number).includes(d),SEM[d])).join('')}</div></div>
 <div id="evw_n"><label class="lbl" for="ev_n">Dia do mês</label><input class="inp" id="ev_n" type="number" min="1" max="31" value="${+e.n||1}"></div>
 <div><label class="lbl" for="ev_data" id="evl_data">Data</label><input class="inp" id="ev_data" type="date" value="${esc(e.data||'')}"></div>
 <div><label class="lbl" for="ev_hora">Horário · opcional</label><input class="inp" id="ev_hora" type="time" value="${esc(e.hora||'')}"></div>
 <div id="evw_fim"><label class="lbl" for="ev_fim">Até · opcional</label><input class="inp" id="ev_fim" type="date" value="${esc(e.fim||'')}"><p class="meta" style="margin:4px 0 0">Vazio: continua valendo.</p></div>
 <div class="full"><span class="lbl">Quem vê</span><div class="cks"><label class="ck"><input type="radio" name="ev_quem" id="ev_q_todos" value="todos" ${e.quem!=='pessoas'?'checked':''} onchange="evVis()"> Todos</label><label class="ck"><input type="radio" name="ev_quem" id="ev_q_ps" value="pessoas" ${e.quem==='pessoas'?'checked':''} onchange="evVis()"> Pessoas escolhidas</label><label class="ck"><input type="radio" name="ev_quem" id="ev_q_eu" value="eu" ${e.quem==='eu'?'checked':''} onchange="evVis()"> Só para mim</label></div><p class="meta" style="margin:4px 0 0">Pessoas escolhidas: aparece para elas, para quem criou e para o diretor. Só para mim: ninguém mais vê.</p></div>
 <div class="full" id="evw_ps"><span class="lbl">Pessoas</span><div class="cks">${colabs().map(p=>ck('ev_p_'+p.id,(e.ps||[]).includes(p.id),p.n)).join('')}</div><p class="ferr" id="eve_ps"></p></div>
 <div class="full"><label class="lbl" for="ev_obs">Observação · opcional</label><input class="inp" id="ev_obs" value="${esc(e.obs||'')}" placeholder="Sala 2 ou link do Teams"></div><p class="ferr full" id="eve_rep"></p></div>
 <div class="foot"><div>${id&&podeEditRot()?`<button class="btn danger" id="bdel" onclick="delEv()">Excluir</button>`:''}</div><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaEv()">${id?'Salvar alterações':'Registrar'}</button></div></div>`;
 document.getElementById('ov').hidden=false;evVis();setTimeout(()=>document.getElementById('ev_t')?.focus(),30)}
function evVis(){const r=val('ev_rep'),sh=(i,on)=>{const x=document.getElementById(i);if(x)x.style.display=on?'':'none'};
 sh('evw_dias',r==='semanal');sh('evw_n',r==='mensal');sh('evw_fim',r!=='unica');sh('evw_ps',document.getElementById('ev_q_ps')?.checked);
 const l=document.getElementById('evl_data');if(l)l.textContent=r==='unica'?'Data':'Começa em'}
async function salvaEv(){['eve_t','eve_ps','eve_rep'].forEach(x=>errEl(x,''));
 const t=val('ev_t'),rep=val('ev_rep'),quem=document.getElementById('ev_q_eu').checked?'eu':document.getElementById('ev_q_ps').checked?'pessoas':'todos',ps=colabs().filter(p=>document.getElementById('ev_p_'+p.id)?.checked).map(p=>p.id);
 const dias=[1,2,3,4,5,6].filter(d=>document.getElementById('ev_d_'+d)?.checked),n=Math.round(+val('ev_n')||0),data=val('ev_data')||(rep==='unica'?'':HJ),fim=rep==='unica'?'':val('ev_fim');let ok=true;
 if(!t){errEl('eve_t','Descreva o prazo ou compromisso.');ok=false}
 if(rep==='unica'&&!data){errEl('eve_rep','Informe a data.');ok=false}
 if(rep==='semanal'&&!dias.length){errEl('eve_rep','Escolha ao menos um dia da semana.');ok=false}
 if(rep==='mensal'&&!(n>=1&&n<=31)){errEl('eve_rep','Use um dia de 1 a 31.');ok=false}
 if(fim&&fim<data){errEl('eve_rep','A data final é antes do início.');ok=false}
 if(quem==='pessoas'&&!ps.length){errEl('eve_ps','Escolha ao menos uma pessoa.');ok=false}
 if(!ok)return;const ant=FORM.id?D.eventos.find(x=>x.id===FORM.id):null,{id:_,...b}=ant||{criado:HJ,criadoPor:S.perfil,criadoUid:ME.uid||null,criadoNome:pessoa(S.perfil)?.n||ME.nome||quemSou()};
 if(await salvar('eventos',FORM.id||null,{...b,t,tipo:val('ev_tipo'),rep,data,dias,n,hora:val('ev_hora'),fim,quem,ps:quem==='pessoas'?ps:[],obs:val('ev_obs')},ant?'Alterações salvas':'Registrado',`${ant?'Alterou':'Registrou'} o prazo "${t}" (${rep==='unica'?fmt(data):REP_EV.find(x=>x[0]===rep)[1].toLowerCase()})`))fechar()}
async function delEv(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
 const e=D.eventos.find(x=>x.id===FORM.id);try{await DB.collection('eventos').doc(FORM.id).delete();log(`Excluiu o prazo "${e?.t||''}"`);toast('Excluído');fechar()}catch(x){toast('Não foi possível excluir.')}}

/* ---------- telas ---------- */
const MENU=[['painel','Painel'],['alertas','Alertas'],['ferramentas','Ferramentas'],['chamados','Chamados'],['rotinas','Cronograma'],['metas','Metas e a fazer'],['entregas','Entregas dos departamentos'],['destaques','Destaques do mês'],['fechamento','Fechamento D+N'],['calendario','Calendário'],['equipe','Equipe e metas'],['feedbacks','Feedbacks'],['realizadas','Demandas realizadas'],['bancos','Troca de dados bancários'],['whats','WhatsApp'],['proc','Procedimentos'],['melhorias','Melhorias'],['relat','Relatórios'],['indicadores','Indicadores por área'],['logs','Registro de atividades'],['sistema','Sobre o sistema'],['usuarios','Usuários e permissões'],['backup','Backup']];
const MENU_SOL=[['abrir','Abrir chamado'],['meus','Meus chamados'],['alertas','Notificações']];
const MENU_PERM={realizadas:'realizadas',whats:'whats',relat:'relat',indicadores:'relat',logs:'logs',chamados:'chamados',triagem:'email',bancos:'antifraude',fechamento:'fechamento'};
const NAO_OCULTA=['painel','usuarios','sistema'];
const ocultos=()=>Array.isArray(CFG.ocultos)?CFG.ocultos:['whats'];
const vis=()=>S.perfil==='pendente'?[['acesso','Meu acesso']]:solic()?MENU_SOL:MENU.filter(([k])=>(NAO_OCULTA.includes(k)||!ocultos().includes(k))&&(!['fechamento','entregas'].includes(k)||modOn(k))&&(!MENU_PERM[k]||pode(MENU_PERM[k])||(k==='chamados'&&pode('email')))&&(!['usuarios','backup'].includes(k)||podeAdmin())&&(k!=='sistema'||podeAdmin()||dir())&&(k!=='feedbacks'||fbPode()));
function chAbas(on){if(!(pode('chamados')&&pode('email')))return '';const nt=emPend().length;
 return `<div class="tabs big" role="tablist" aria-label="Chamados e e-mails"><button role="tab" aria-selected="${on==='ch'}" class="${on==='ch'?'on':''}" onclick="ir('chamados')">Chamados</button><button role="tab" aria-selected="${on==='em'}" class="${on==='em'?'on':''}" onclick="ir('triagem')">E-mails para revisar ${nt?`<span class="tag wa" style="font-size:11px;margin-left:4px">${nt}</span>`:''}</button></div>`}
function chEmail(){if(!pode('email'))return '';
 return statusSync(`<span style="display:flex;gap:6px;flex-wrap:wrap;margin-left:auto"><button class="btn" onclick="conectarEmail()">Conectar e-mail</button>${ME.admin||!real()?`<button class="btn" onclick="cfgEmail()" title="Escolher a caixa ou colar o link da pasta compartilhada">Configurar caixa ou link</button>`:''}<button class="btn pri" onclick="sincronizar(true)">${S.sync?'Verificando…':'Verificar agora'}</button></span>`)}
const MENU_PAI={triagem:'chamados',fbpessoa:'feedbacks',fbedit:'feedbacks',fbver:'feedbacks',fbmodelos:'feedbacks'};
function linEnt(e){const g=stEnt(e);return `<div class="row"><div class="t"><b>${esc(e.item)}</b><span>${esc(depNome(e.dep))} · ${esc(e.rec||'Única')} · responsável: ${esc(nomeDe(e.resp))}</span></div><span class="tag ${g[0]}">${g[1]}</span>${!e.recebido?`<button class="btn" onclick="receber('${esc(e.id)}')">Marcar recebido</button>`:''}${pode('entregas')&&entAtrasada(e)?`<button class="btn" onclick="cobrar('${esc(e.id)}')">Cobrar</button>`:''}${editar('entrega',e.id)}</div>`}
function painelDep(){const R=resumoDep().filter(r=>r.tot);
 if(!R.length)return vazio('Nenhuma entrega cadastrada','Cadastre o que cada departamento precisa enviar e os prazos.','entrega','Cadastrar entrega');
 return `<div class="tbl-wrap"><table><thead><tr><th>Departamento</th><th>Em atraso</th><th>Pendentes</th><th>Pontualidade</th></tr></thead><tbody>${R.map(r=>`<tr><td>${esc(r.d.n)}</td><td>${r.atr?`<span class="tag bad">${r.atr}</span>`:'<span class="meta">0</span>'}</td><td>${r.pend}</td><td>${r.pont===null?'—':`<span class="${r.pont<70?'neg':r.pont>=90?'pos':''}">${r.pont}%</span>`}</td></tr>`).join('')}</tbody></table></div>`}
const V={
bancos(){const ord={aprovacao:0,verificacao:1,recusada:2,aprovada:3};const L=[...D.verificacoes].sort((a,b)=>(ord[a.st]-ord[b.st])||((b.criado||'')<(a.criado||'')?-1:1));const pend=L.filter(v=>v.st==='verificacao'||v.st==='aprovacao');
 return head('Segurança de pagamentos','Troca de dados <em>bancários</em>','Toda troca de conta de fornecedor passa por confirmação e por um segundo aprovador antes de qualquer pagamento.',`<button class="btn pri" onclick="novaTroca()">Registrar pedido de troca</button>`)+
 `<div class="panel"><div class="ph"><h2>Regras</h2></div><div class="row"><div class="t"><b>Nunca use o telefone ou e-mail que veio no pedido de troca</b><span>Golpistas mandam o próprio contato. Ligue para o número do cadastro antigo ou do contrato.</span></div></div><div class="row"><div class="t"><b>Duas pessoas diferentes</b><span>Quem confere não aprova. O portal não deixa a mesma pessoa fazer as duas etapas.</span></div></div><div class="row"><div class="t"><b>Pagamentos travados até a aprovação</b><span>Chamados desse fornecedor não avançam para Programado enquanto a troca estiver em aberto.</span></div></div></div>`+
 `<div class="panel"><div class="ph"><h2>Pedidos</h2><span>${pend.length} em aberto</span></div>${L.length?L.map(v=>{const s=ST_BANCO[v.st],k=(v.chk||[]).filter(Boolean).length,eu=mesmaPessoa(v.verUid,v.verPerf);
  return `<div class="row" style="align-items:flex-start"><div class="t"><b>${esc(v.forn)}</b><span>${esc(v.origem)} · recebido ${fmt(v.recebido)} · checklist ${k}/${CHK_BANCO.length}${v.contato?' · confirmado com '+esc(v.contato):''}</span>${v.verPapel?`<span>Conferido por ${esc(v.verPapel)}${v.aprPapel?` · ${v.st==='recusada'?'recusado':'aprovado'} por ${esc(v.aprPapel)}`:''}</span>`:''}${v.motivo?`<span style="color:var(--bad)">Motivo: ${esc(v.motivo)}</span>`:''}${v.obs?`<span>${esc(v.obs)}</span>`:''}</div><span class="tag ${s[0]}">${s[1]}</span>
  ${v.st==='verificacao'?`<button class="btn pri" onclick="conferirTroca('${v.id}')">Conferir</button>`:''}${v.st==='aprovacao'?(eu?'<span class="meta" style="max-width:150px">Outra pessoa precisa aprovar</span>':`<button class="btn" onclick="recusarTroca('${v.id}')">Recusar</button><button class="btn ${S.trConf===v.id?'danger':'pri'}" onclick="aprovarTroca('${v.id}')">${S.trConf===v.id?'Confirmar aprovação':'Aprovar'}</button>`):''}</div>`}).join(''):vazio('Nenhum pedido de troca registrado','Registre assim que algum fornecedor pedir para mudar a conta de pagamento.')}</div>`+
 note('O portal guarda só o nome do fornecedor e a verificação. A nova conta é cadastrada apenas no ERP, depois da aprovação.')},
fechamento(){const c=S.fComp||compPadrao(),E=etapasF(),doc=fechDoc(c),f=E.filter(e=>feitaF(c,e.id)).length,inicio=dataDN(c,1),comecou=HJ>isoD(fimMes(c)),hj=comecou?dnDe(c,HJ):0,atr=E.filter(e=>atrasoF(c,e));
 const dns=[...new Set(E.map(e=>+e.dn||1))].sort((a,b)=>a-b);const pc=podeAdmin()||pode('cadastros');
 const nav2=`<div class="seg"><button onclick="S.fComp=addMes('${c}',-1);render()" aria-label="Mês anterior">‹</button><span>${mesNome(c)}</span><button onclick="S.fComp=addMes('${c}',1);render()" aria-label="Próximo mês">›</button></div>`;
 return head(`Competência ${mesCurto(c)}`,'Fechamento <em>D+N</em>',comecou?(doc?.encerrado?`Concluído em ${fmt(doc.encerrado)}, D+${doc.duN}.`:`Hoje é D+${hj}. Cada etapa tem o dia útil em que precisa estar pronta.`):`Começa em ${fmt(inicio)}/${inicio.slice(0,4)}, o primeiro dia útil depois do fim do mês.`,nav2+(pc?`<button class="btn" onclick="cfgFech()">Meta e feriados</button><button class="btn pri" onclick="editEtapa()">Nova etapa</button>`:''))+
 `<div class="stats"><div class="stat"><p>Etapas concluídas</p><strong>${f}/${E.length}</strong><small>${E.length?Math.round(f/E.length*100):0}%</small></div><div class="stat"><p>Hoje</p><strong>${comecou?'D+'+hj:'—'}</strong><small>dias úteis após ${fmt(isoD(fimMes(c)))}</small></div><div class="stat"><p>Atrasadas</p><strong style="color:${atr.length?'var(--bad)':'var(--ink)'}">${atr.length}</strong><small>passaram do D+N</small></div><div class="stat"><p>${doc?.encerrado?'Fechou em':'Meta'}</p><strong style="color:${doc?.encerrado?(doc.duN<=metaDN()?'var(--ok)':'var(--warn)'):'var(--ink)'}">D+${doc?.encerrado?doc.duN:metaDN()}</strong><small>${doc?.encerrado?`meta D+${metaDN()}`:'dias úteis para fechar'}</small></div></div>`+
 (E.length?`<div class="dncols">${dns.map(n=>{const it=E.filter(e=>(+e.dn||1)===n);return `<div class="dncol ${comecou&&n===hj?'hoje':''}"><h3>D+${n} <span>${fmt(dataDN(c,n))}</span></h3>${it.map(e=>{const done=feitaF(c,e.id),w=esperando(c,e),late=atrasoF(c,e),inf=itemF(c,e.id);
  return `<div class="dnitem ${done?'done':late?'late':''}"><button class="chkbtn" onclick="marcarEtapa('${c}','${e.id}')" aria-label="${done?'Reabrir':'Concluir'} ${esc(e.t)}" title="${done?'Reabrir':'Concluir'}">${done?'✓':''}</button><div class="t"><b>${esc(e.t)}</b><span>${esc(e.a||'')} · ${esc(nomeDe(e.resp))}</span>${done?`<span class="pos">Concluída em ${fmt(inf.concl)} (D+${inf.dn})</span>`:w.length?`<span>Aguardando: ${w.map(d=>esc(D.etapas.find(x=>x.id===d)?.t||'')).join(', ')}</span>`:late?'<span class="neg">Atrasada</span>':''}</div>${pc?`<button class="btn ghost" onclick="editEtapa('${e.id}')" aria-label="Editar etapa">Editar</button>`:''}</div>`}).join('')}</div>`}).join('')}</div>`:`<div class="panel">${vazio('Nenhuma etapa no modelo','Cadastre as etapas do fechamento com o dia útil e as dependências.',null)}${pc?'<div style="text-align:center;margin-top:-8px;padding-bottom:12px"><button class="btn pri" onclick="editEtapa()">Nova etapa</button></div>':''}</div>`)+
 `<div class="panel"><div class="ph"><h2>Em quantos dias úteis fechamos</h2><span>últimos 12 meses</span></div>${graficoDN()}</div>`+
 note('Uma etapa só pode ser concluída depois das etapas de que ela depende. O fechamento termina quando todas as etapas estão concluídas, e o D+N do mês é calculado sozinho.')},
indicadores(){const [ini,rot]=periodoInd(),R=D.departamentos.map(d=>indDep(d,ini)).sort((a,b)=>((b.foraPct??-1)-(a.foraPct??-1))||((a.pont??101)-(b.pont??101)));
 const T=R.reduce((a,r)=>({n:a.n+r.n,pg:a.pg+r.pg,fora:a.fora+r.fora,en:a.en+r.en}),{n:0,pg:0,fora:0,en:0});
 const sel=`<div class="seg">${[['mes','Mês'],['tri','Trimestre'],['12m','12 meses']].map(([k,l])=>`<button style="${(S.iPer||'tri')===k?'background:var(--accent-soft);color:var(--accent-ink)':''}" onclick="S.iPer='${k}';render()">${l}</button>`).join('')}</div>`;
 return head('Para cobrar com números','Indicadores por <em>área</em>',`${rot}. Como cada departamento envia pedidos e documentos para o financeiro.`,sel)+
 `<div class="stats"><div class="stat"><p>Chamados no período</p><strong>${T.n}</strong></div><div class="stat"><p>Pagamentos fora do prazo</p><strong style="color:${T.fora?'var(--warn)':'var(--ink)'}">${T.pg?Math.round(T.fora/T.pg*100):0}%</strong><small>${T.fora} de ${T.pg}</small></div><div class="stat"><p>Entregas no período</p><strong>${T.en}</strong></div><div class="stat"><p>Regra de prazo</p><strong>${DMIN()}</strong><small>dias úteis antes do vencimento</small></div></div>
 <div class="panel"><div class="tbl-wrap"><table class="ind"><thead><tr><th>Departamento</th><th>Chamados</th><th>Fora do prazo</th><th>Devolvidos</th><th>Até programar</th><th>Entregas no prazo</th><th>Atrasadas em aberto</th><th></th></tr></thead><tbody>${R.map(r=>`<tr><td>${esc(r.d.n)}</td><td>${r.n}</td><td>${pctCel(r.foraPct,true)}</td><td>${pctCel(r.devPct,true)}</td><td>${r.tm===null?'<span class="meta">—</span>':r.tm.toFixed(1).replace('.',',')+' d.u.'}</td><td>${pctCel(r.pont,false)}</td><td>${r.abertasAtr?`<span class="tag bad">${r.abertasAtr}</span>`:'<span class="meta">0</span>'}</td><td><button class="btn" onclick="resumoDepSheet('${r.d.id}')">Resumo ao gestor</button></td></tr>`).join('')}</tbody></table></div></div>`+
 note('Fora do prazo: pedidos de pagamento abertos com menos dias úteis do que a regra. Devolvidos: chamados que voltaram para correção. Até programar: dias úteis entre a abertura e o pagamento programado.')},
feedbacks(){const ab=S.fbAba||'col',C=colabs(),mAnt=addMes(MES_ATUAL,-1),tAnt=triAnt(triDe(MES_ATUAL));
 const tabs=`<div class="tabs big">${[['col','Colaboradores'],['mes','Painel mensal'],['tri','Painel trimestral'],['todos','Todos os feedbacks']].map(([k,l])=>`<button class="${ab===k?'on':''}" onclick="S.fbAba='${k}';render()">${l}</button>`).join('')}</div>`;
 let body='';
 if(ab==='col'){const card=p=>{const L=fbsDe(p.id),u=L[0],sm=seloMes(p.id,mAnt),st=seloTri(p.id,tAnt);
   return `<div class="panel fbc"><div style="display:flex;gap:12px;align-items:center">${avP(p.id,p.n)}<div style="flex:1;min-width:0"><b style="font-weight:500">${esc(p.n)}</b><div class="meta">${esc(p.vinc||'Vínculo não informado')}${p.desde?' · desde '+fmt(p.desde)+'/'+p.desde.slice(0,4):''} · ${L.length} feedbacks</div></div></div>
   ${!p.email?'<span class="tag bad" style="align-self:flex-start">Sem e-mail cadastrado</span>':''}
   <div class="selos"><span class="tag ${sm[0]}" title="${sm[2]}">Mensal de ${MESES[+mAnt.slice(5)-1].slice(0,3)}: ${sm[0]==='ok'?'enviado':sm[0]==='wa'?'registrado':sm[0]==='nd'?'nada previsto':'pendente'}</span><span class="tag ${st[0]}">${tAnt.q}º tri: ${st[0]==='ok'?'enviado':st[0]==='wa'?'registrado':'—'}</span></div>
   ${u?`<button class="lnk" onclick="S.fbV={id:'${u.id}'};fbIr('fbver')">Último: ${esc(u.titulo)} · ${fmt(u.data)}</button>`:'<span class="meta">Nenhum feedback ainda</span>'}
   <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:auto"><button class="btn" onclick="S.fbP='${p.id}';fbIr('fbpessoa')">Histórico</button><button class="btn pri" onclick="fbNovo({pessoa:'${p.id}'})">+ Feedback</button>${S.inat===p.id?`<button class="btn danger" onclick="inativar('${p.id}')">Confirmar inativação</button>`:`<button class="btn ghost" onclick="inativar('${p.id}')">Inativar</button>`}</div></div>`};
  body=`<div class="cards">${C.map(card).join('')}<button class="panel addcard" onclick="abrir('pessoa')"><span>+</span>Cadastrar colaborador</button></div>
  ${gerais().length?`<div class="panel"><div class="ph"><h2>Registros gerais da equipe</h2><span>feedbacks que valem para o time todo</span></div>${gerais().map(p=>`<div class="row"><div class="t"><b>${esc(p.n)}</b><span>${fbsDe(p.id).length} registros</span></div><button class="btn" onclick="S.fbP='${p.id}';fbIr('fbpessoa')">Abrir</button><button class="btn pri" onclick="fbNovo({pessoa:'${p.id}',tipo:'Avulso'})">+ Registro</button></div>`).join('')}</div>`:''}
  ${inativos().length?`<details class="panel"><summary style="cursor:pointer;font-weight:600;font-size:14px">Ex-colaboradores / inativos · ${inativos().length}</summary>${inativos().map(p=>`<div class="row"><div class="t"><b>${esc(p.n)}</b><span>${fbsDe(p.id).length} feedbacks guardados</span></div><button class="btn ghost" onclick="S.fbP='${p.id}';fbIr('fbpessoa')">Histórico</button><button class="btn" onclick="reativar('${p.id}')">Reativar</button></div>`).join('')}</details>`:''}`}
 if(ab==='mes'){const ms=[];for(let i=11;i>=0;i--)ms.push(addMes(MES_ATUAL,-i-1));
  body=`<div class="panel"><div class="tbl-wrap"><table class="grade"><thead><tr><th>Colaborador</th>${ms.map(m=>`<th>${mesCurto(m).replace('/20','/')}</th>`).join('')}</tr></thead><tbody>${C.map(p=>`<tr><td>${esc(p.n)}</td>${ms.map(m=>{const s=seloMes(p.id,m);return `<td><button class="cel ${s[0]}" title="${esc(s[2])}" onclick="${s[3]?`S.fbV={id:'${s[3].id}'};fbIr('fbver')`:`fbNovo({pessoa:'${p.id}',tipo:'Mensal',mes:'${m}'})`}">${s[1]}</button></td>`}).join('')}</tr>`).join('')}</tbody></table></div>
  <div class="legend" style="margin-top:10px"><span><b class="pos">✓</b> enviado</span><span><b style="color:var(--warn)">●</b> registrado, não enviado</span><span><b>+</b> ainda não existe (clique para criar)</span></div></div>`}
 if(ab==='tri'){const ts=[];let t=triAnt(triDe(MES_ATUAL));for(let i=0;i<8;i++){ts.unshift(t);t=triAnt(t)}
  body=`<div class="banner"><span>O envio do trimestral pelo sistema é opcional. Se ele foi entregue em reunião ou por outro meio, registre a entrega na tela do feedback.</span></div><div class="panel"><div class="tbl-wrap"><table class="grade"><thead><tr><th>Colaborador</th>${ts.map(t=>`<th>${t.q}º/${String(t.ano).slice(2)}</th>`).join('')}</tr></thead><tbody>${C.map(p=>`<tr><td>${esc(p.n)}</td>${ts.map(t=>{const s=seloTri(p.id,t);return `<td><button class="cel ${s[0]}" title="${esc(s[2])}" onclick="${s[3]?`S.fbV={id:'${s[3].id}'};fbIr('fbver')`:`fbNovo({pessoa:'${p.id}',tipo:'Trimestral',tri:'${triStr(t)}'})`}">${s[1]}</button></td>`}).join('')}</tr>`).join('')}</tbody></table></div></div>`}
 if(ab==='todos'){const F2=S.fbF||{},q=norm(F2.q||'');const L=D.feedbacks.filter(f=>(F2.arq||!f.arquivado)&&(!F2.p||f.pessoa===F2.p)&&(!F2.tipo||f.tipo===F2.tipo)&&(!F2.tom||f.tom===F2.tom)&&(!F2.env||(F2.env==='s'?f.enviado:!f.enviado))&&(!q||norm(f.titulo+' '+f.texto+' '+nomeDe(f.pessoa)).includes(q))).sort((a,b)=>(b.data||'')<(a.data||'')?-1:1);
  const sel=(k,ops,l)=>`<select class="inp" onchange="S.fbF={...(S.fbF||{}),${k}:this.value};render()" aria-label="${l}"><option value="">${l}</option>${ops.map(([v,t])=>`<option value="${esc(v)}" ${F2[k]===v?'selected':''}>${esc(t)}</option>`).join('')}</select>`;
  body=`<div class="filtros"><input class="inp" id="fb_q" placeholder="Buscar no título, texto ou nome" value="${esc(F2.q||'')}" oninput="S.fbF={...(S.fbF||{}),q:this.value};render()">${sel('p',D.equipe.map(p=>[p.id,p.n]),'Colaborador')}${sel('tipo',TIPOS_FB.map(t=>[t,t]),'Tipo')}${sel('tom',Object.entries(TONS),'Tom')}${sel('env',[['s','Enviados'],['n','Não enviados']],'Envio')}<label class="chip" style="cursor:pointer"><input type="checkbox" ${F2.arq?'checked':''} onchange="S.fbF={...(S.fbF||{}),arq:this.checked};render()"> Incluir arquivados</label></div>
  <div class="panel"><div class="tbl-wrap"><table class="lista"><thead><tr><th>Data</th><th>Colaborador</th><th>Título</th><th>Tipo</th><th>Período</th><th>Tom</th><th>Envio</th></tr></thead><tbody>${L.map(f=>`<tr onclick="S.fbV={id:'${f.id}'};fbIr('fbver')" style="cursor:pointer"><td>${fmt(f.data)}/${(f.data||'').slice(2,4)}</td><td>${esc(nomeDe(f.pessoa))}</td><td style="white-space:normal;min-width:220px">${esc(f.titulo)}${f.arquivado?' <span class="tag ne">Arquivado</span>':''}</td><td>${esc(f.tipo)}</td><td>${esc(periodoCurto(f))}</td><td><span class="tag ${TOM_C[f.tom]}">${TONS[f.tom]}</span></td><td>${f.enviado?`<span class="pos">✓ ${esc(f.canal)}</span>`:'<span class="meta">Não enviado</span>'}</td></tr>`).join('')}</tbody></table></div>${L.length?'':vazio('Nenhum feedback encontrado','Ajuste os filtros ou registre um novo.')}</div>`}
 return head('Gestão de pessoas · só gestor','Feedbacks',`${C.length} colaboradores ativos · ${D.feedbacks.length} feedbacks registrados`,`<button class="btn" onclick="fbIr('fbmodelos')">Modelos e frases</button><button class="btn pri" onclick="fbNovo()">+ Novo feedback</button>`)+tabs+body},
fbpessoa(){const p=pessoa(S.fbP);if(!p)return head('Feedbacks','Colaborador não encontrado','')+`<button class="btn" onclick="fbIr('feedbacks')">‹ Voltar</button>`;
 const L=fbsDe(p.id),pos=L.filter(f=>f.tom==='pos').length,mix=L.filter(f=>f.tom==='mix').length,mel=L.filter(f=>f.tom==='mel').length,u=L[0];
 const O=D.observacoes.filter(o=>o.pessoa===p.id).sort((a,b)=>a.data<b.data?1:-1);
 return `<button class="btn ghost" style="align-self:flex-start" onclick="fbIr('feedbacks')">‹ Feedbacks</button>`+
 head(`${esc(p.vinc||'Vínculo não informado')}${p.desde?' · desde '+fmt(p.desde)+'/'+p.desde.slice(0,4):''}${p.email?' · '+esc(p.email):''} · ${p.ativo===false?'Inativo':'Ativo'}`,esc(p.n),p.c?esc(p.c):'',`<button class="btn" onclick="fbNovo({pessoa:'${p.id}',tipo:'Mensal'})">+ Feedback mensal</button><button class="btn pri" onclick="fbNovo({pessoa:'${p.id}',tipo:'Trimestral'})">+ Trimestral</button>`)+
 (!p.email?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Sem e-mail cadastrado. Cadastre para poder enviar feedbacks pelo sistema.</span><button class="btn" onclick="abrir('pessoa','${p.id}')">Cadastrar e-mail</button></div>`:'')+
 `<div class="panel"><div class="ph"><h2>Evolução</h2><button class="btn ghost" onclick="S.fbTab=S.fbTab==='tabela'?'':'tabela';render()">${S.fbTab==='tabela'?'Ver em gráfico':'Ver em tabela'}</button></div>
 <div class="stats" style="margin:8px 0 16px"><div class="stat"><p>Feedbacks</p><strong>${L.length}</strong><small>${pos} positivos · ${mix} mistos · ${mel} melhorias</small></div><div class="stat"><p>Positivos</p><strong>${L.length?Math.round(pos/L.length*100):0}%</strong></div><div class="stat"><p>Último tom</p><strong style="font-size:16px">${u?TONS[u.tom]:'—'}</strong></div><div class="stat"><p>Último feedback</p><strong style="font-size:18px">${u?fmt(u.data)+'/'+u.data.slice(2,4):'—'}</strong></div></div>${graficoEvol(p.id)}</div>
 <div class="grid2"><div class="panel"><div class="ph"><h2>Linha do tempo</h2><span>${L.length}</span></div>${L.length?L.map(f=>`<button class="tl" onclick="S.fbV={id:'${f.id}'};fbIr('fbver')"><span class="dot2 ${TOM_C[f.tom]}"></span><span class="t"><b>${esc(f.titulo)}</b><span class="meta">${fmt(f.data)}/${(f.data||'').slice(0,4)} · ${esc(f.tipo)} · ${esc(periodoCurto(f))} · ${TONS[f.tom]} · ${f.enviado?'enviado ('+esc(f.canal)+')':'não enviado'}${f.arquivado?' · arquivado':''}</span><span class="trech">${esc(mdTexto(f.texto).slice(0,160))}${(f.texto||'').length>160?'…':''}</span></span></button>`).join(''):vazio('Nenhum feedback ainda','')}</div>
 <div style="display:flex;flex-direction:column;gap:22px"><div class="panel"><div class="ph"><h2>Observações de progressão</h2><span>${O.length}</span></div>${obsForm(p.id,'')}<div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn pri" onclick="obsSalvar('${p.id}')">Registrar observação</button></div>
  ${O.map(o=>`<div class="row"><span class="tag ${o.tipo==='pos'?'ok':o.tipo==='aten'?'wa':'ne'}" style="flex:none">${OBS_T[o.tipo]}</span><div class="t"><b style="font-weight:400">${esc(o.texto)}</b><span>${fmt(o.data)} · ${o.fb?esc(D.feedbacks.find(f=>f.id===o.fb)?.titulo||'feedback excluído'):'geral'}${o.usadoEm?' · usada em feedback':''}</span></div><button class="btn ${S.obsDel===o.id?'danger':'ghost'}" onclick="obsDel('${o.id}')">${S.obsDel===o.id?'Confirmar':'Excluir'}</button></div>`).join('')}</div>
 <details class="panel" ${!p.email?'open':''}><summary style="cursor:pointer;font-weight:600;font-size:14px">Dados do colaborador</summary>
  <div class="row"><div class="t"><span>Como chamar no e-mail</span><b>${esc(tratDe(p))}</b></div></div><div class="row"><div class="t"><span>E-mail</span><b>${esc(p.email||'—')}</b></div></div><div class="row"><div class="t"><span>Categoria</span><b>${p.categ==='geral'?'Registros gerais da equipe':'Colaborador'}</b></div></div>
  ${p.perfil?`<div class="fbtxt small" style="margin-top:8px">${md(p.perfil)}</div>`:''}<div style="margin-top:10px"><button class="btn" onclick="abrir('pessoa','${p.id}')">Editar dados</button></div></details></div></div>`},
fbedit(){const e=S.fbEd;if(!e)return '';const p=pessoa(e.pessoa);
 const ps=[...colabs(),...gerais(),...(p&&p.ativo===false?[p]:[])];
 const anos=[];for(let y=+HJ.slice(0,4)+1;y>=+HJ.slice(0,4)-3;y--)anos.push(y);
 const per=e.tipo==='Mensal'?`<div><label class="lbl" for="fe_mes">Mês de referência</label><input class="inp" id="fe_mes" type="month" value="${esc(e.mes)}" onchange="fbSet('mes',this.value)"><p class="ferr" id="fe_per"></p></div>`:e.tipo==='Trimestral'?(()=>{const t=triParse(e.tri)||triDe(MES_ATUAL);return `<div><span class="lbl">Trimestre e ano</span><div style="display:flex;gap:6px"><select class="inp" id="fe_q" onchange="fbSet('tri',this.value+'')" aria-label="Trimestre">${[1,2,3,4].map(q=>`<option value="${t.ano}-T${q}" ${q===t.q?'selected':''}>${q}º trimestre</option>`).join('')}</select><select class="inp" aria-label="Ano" onchange="fbSet('tri',this.value+'-T${t.q}',true)">${anos.map(y=>`<option ${y===t.ano?'selected':''}>${y}</option>`).join('')}</select></div><p class="ferr" id="fe_per"></p></div>`})():'<div><span class="lbl">Período</span><p class="meta" style="margin:8px 0 0">Usa a data da conversa.</p><p class="ferr" id="fe_per"></p></div>';
 const base={pessoa:e.pessoa,data:e.data,tipo:e.tipo,tom:e.tom,mes:e.mes,tri:e.tri};
 return `<button class="btn ghost" style="align-self:flex-start" onclick="${e.id?`S.fbV={id:'${e.id}'};fbIr('fbver')`:`fbIr('feedbacks')`}">‹ ${e.id?'Voltar ao feedback':'Feedbacks'}</button>`+
 head(e.id?'Editar feedback':'Novo feedback',e.id?'Editar <em>feedback</em>':'Escrever <em>feedback</em>',p?esc(p.n):'Escolha o colaborador e o tipo. Use o painel ao lado para puxar o histórico, modelos e frases.')+
 (e.base?`<div class="banner"><span>${esc(e.base)}</span></div>`:'')+
 `<div class="edgrid"><div class="panel" style="display:flex;flex-direction:column;gap:14px">
 <div class="fgrid"><div class="full"><label class="lbl" for="fe_pessoa">Colaborador</label><select class="inp" id="fe_pessoa" onchange="fbSet('pessoa',this.value)"><option value="">Selecione</option>${ps.map(x=>`<option value="${x.id}" ${x.id===e.pessoa?'selected':''}>${esc(x.n)}${x.categ==='geral'?' (registro geral)':''}</option>`).join('')}</select><p class="ferr" id="fe_pessoa"></p></div>
 <div><label class="lbl" for="fe_data">Data da conversa</label><input class="inp" id="fe_data" type="date" value="${esc(e.data)}" onchange="fbSet('data',this.value)"></div>
 <div><label class="lbl" for="fe_tipo">Tipo</label><select class="inp" id="fe_tipo" onchange="fbSet('tipo',this.value,true)">${TIPOS_FB.map(t=>`<option ${t===e.tipo?'selected':''}>${t}</option>`).join('')}</select></div>
 <div><label class="lbl" for="fe_tom">Tom</label><select class="inp" id="fe_tom" onchange="fbSet('tom',this.value)">${Object.entries(TONS).map(([k,l])=>`<option value="${k}" ${k===e.tom?'selected':''}>${l}</option>`).join('')}</select></div>${per}
 <div class="full"><label class="lbl" for="fe_tit">Título · opcional</label><input class="inp" id="fe_tit" value="${esc(e.titulo)}" placeholder="${esc(e.pessoa?autoTitulo(base):'Gerado sozinho se ficar vazio')}" oninput="fbSet('titulo',this.value)"></div>
 <div class="full"><label class="lbl" for="fe_ass">Assunto do e-mail</label><input class="inp" id="fe_ass" value="${esc(e.assunto)}" placeholder="Feedback de {periodo}" oninput="fbSet('assunto',this.value)"></div></div>
 <div><div class="toolbar"><button class="btn" onclick="fbFmt('b')" title="Negrito"><b>N</b></button><button class="btn" onclick="fbFmt('h')">Título</button><button class="btn" onclick="fbFmt('ul')">• Lista</button><button class="btn" onclick="fbFmt('ol')">1. Lista</button><button class="btn" onclick="fbFmt('hr')">Linha</button><span style="flex:1"></span><button class="btn ${e.prev?'pri':''}" onclick="fbPrev()">${e.prev?'Voltar a editar':'Pré-visualizar'}</button></div>
 ${e.prev?`<div class="fbtxt prev">${e.pessoa?`<p class="meta" style="margin:0 0 6px">Assunto: ${esc(subst(e.assunto,base)||autoTitulo(base))}</p>`:''}${md(subst(e.texto,base))||'<p class="meta">Nada escrito ainda.</p>'}</div>`:`<textarea class="inp" id="fb_txt" style="min-height:380px;font-family:var(--f-ui);line-height:1.6" placeholder="Olá, {nome}!\n\n### O que foi muito bem\n- \n\n### Pontos de desenvolvimento\n- " oninput="fbTxt(this)">${esc(e.texto)}</textarea>`}<p class="ferr" id="fe_texto"></p>
 <p class="meta" style="margin:6px 0 0">Marcadores: {nome} {periodo} {mes} {ano} {trimestre} {meses_trimestre}. Formatação: **negrito**, ### título, - lista, 1. lista, --- linha.</p></div>
 <div style="display:flex;justify-content:flex-end;gap:8px"><button class="btn" onclick="${e.id?`S.fbV={id:'${e.id}'};fbIr('fbver')`:`fbIr('feedbacks')`}">Cancelar</button><button class="btn pri" onclick="fbSalvar()">Salvar feedback</button></div></div>
 <aside class="panel side" id="fbside">${fbSide()}</aside></div>`},
fbver(){const f=D.feedbacks.find(x=>x.id===S.fbV?.id);if(!f)return `<button class="btn ghost" onclick="fbIr('feedbacks')">‹ Feedbacks</button>`+vazio('Feedback não encontrado','Ele pode ter sido excluído.');
 const p=pessoa(f.pessoa),L=fbsDe(f.pessoa),i=L.findIndex(x=>x.id===f.id),ant=L[i+1],prox=L[i-1],V2=S.fbV,O=D.observacoes.filter(o=>o.fb===f.id||o.usadoEm===f.id),env=V2.env||{};
 const html=md(f.texto),txt=mdTexto(f.texto);
 return `<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><button class="btn ghost" onclick="S.fbP='${f.pessoa}';fbIr('fbpessoa')">‹ ${esc(p?.n||'Colaborador')}</button><div style="display:flex;gap:6px"><button class="btn" ${ant?`onclick="S.fbV={id:'${ant.id}'};fbIr('fbver')"`:'disabled'}>‹ anterior</button><button class="btn" ${prox?`onclick="S.fbV={id:'${prox.id}'};fbIr('fbver')"`:'disabled'}>próximo ›</button></div></div>`+
 head(`${esc(f.tipo)} · ${esc(periodoTxt(f))}`,esc(f.titulo),'',`<button class="btn" onclick="fbEditar('${f.id}')">Editar</button><button class="btn" onclick="fbBase('${f.id}')">Usar como base</button>`)+
 `<div class="selos"><span class="tag ${TOM_C[f.tom]}">${TONS[f.tom]}</span>${f.enviado?`<span class="tag ok">Enviado · ${esc(f.canal)} · ${fmt(f.enviadoEm)}</span>`:'<span class="tag ne">Não enviado</span>'}<span class="tag ne">Conversa em ${fmt(f.data)}/${(f.data||'').slice(0,4)}</span>${f.arquivado?'<span class="tag wa">Arquivado</span>':''}</div>`+
 (V2.erro?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${esc(V2.erro)}</span></div>`:'')+
 `<div class="edgrid"><div style="display:flex;flex-direction:column;gap:22px;min-width:0"><div class="panel"><div class="toolbar" style="margin-bottom:14px"><button class="btn pri" onclick="copiar(document.getElementById('fbhtml').innerHTML,mdTexto(D.feedbacks.find(x=>x.id==='${f.id}').texto))">Copiar e-mail formatado</button><button class="btn" onclick="copiar(null,mdTexto(D.feedbacks.find(x=>x.id==='${f.id}').texto))">Copiar texto simples</button><button class="btn" onclick="copiar(null,D.feedbacks.find(x=>x.id==='${f.id}').assunto)">Copiar assunto</button><a class="btn" href="mailto:${encodeURIComponent(p?.email||'')}?subject=${encodeURIComponent(f.assunto||'')}" onclick="copiar(document.getElementById('fbhtml').innerHTML,mdTexto(D.feedbacks.find(x=>x.id==='${f.id}').texto))">Copiar e abrir no meu e-mail</a></div>
  <p class="meta" style="margin:0 0 10px">Assunto: ${esc(f.assunto)}</p><div class="fbtxt" id="fbhtml">${html}</div></div>
  <div class="panel"><div class="ph"><h2>Acompanhamento deste feedback / plano de ação</h2><span>${O.length}</span></div>${O.map(o=>`<div class="row"><span class="tag ${o.tipo==='pos'?'ok':o.tipo==='aten'?'wa':'ne'}" style="flex:none">${OBS_T[o.tipo]}</span><div class="t"><b style="font-weight:400">${esc(o.texto)}</b><span>${fmt(o.data)}${o.usadoEm===f.id&&o.fb!==f.id?' · usada neste feedback':''}</span></div></div>`).join('')}
  <div style="margin-top:10px">${obsForm(f.pessoa,f.id)}<div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn pri" onclick="obsSalvar('${f.pessoa}')">Registrar acompanhamento</button></div></div></div></div>
 <aside style="display:flex;flex-direction:column;gap:16px;min-width:0"><div class="panel"><div class="ph"><h2>Enviar pelo sistema</h2></div>
  <div class="fgrid one"><div><label class="lbl" for="ev_para">Para</label><input class="inp" id="ev_para" value="${esc(env.para??(p?.email||''))}"><p class="ferr" id="eve_para"></p></div>
  <div><label class="lbl" for="ev_cc">Cópia · opcional</label><input class="inp" id="ev_cc" value="${esc(env.cc||'')}" placeholder="gestor@empresa.com.br"><p class="ferr" id="eve_cc"></p></div>
  <div><label class="lbl" for="ev_ass">Assunto</label><input class="inp" id="ev_ass" value="${esc(env.ass??f.assunto)}"><p class="ferr" id="eve_ass"></p></div>
  <label class="perm"><input type="checkbox" id="ev_mim" ${env.mim?'checked':''}><span><b>Enviar cópia para mim</b><small>As respostas vão para o seu e-mail.</small></span></label></div>
  ${V2.conf==='enviar2'?`<div class="banner" style="background:var(--warn-bg);color:var(--warn);margin-top:10px"><span>Enviar agora para ${esc(env.para)}? O e-mail sai formatado pelo seu Outlook.</span></div><div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><button class="btn" onclick="S.fbV.conf=null;S.fbForce=true;render()">Cancelar</button><button class="btn pri" onclick="fbEnviar()">${V2.enviando?'Enviando…':'Confirmar envio'}</button></div>`:`<div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn pri" onclick="fbEnviar()">${f.enviado?'Reenviar':'Enviar'}</button></div>`}</div>
 <div class="panel"><div class="ph"><h2>Entregue de outra forma?</h2></div><div class="fgrid one"><div><label class="lbl" for="ou_canal">Canal</label><select class="inp" id="ou_canal">${CANAIS.slice(1).map(c=>`<option ${f.canal===c?'selected':''}>${c}</option>`).join('')}</select></div><div><label class="lbl" for="ou_data">Data</label><input class="inp" id="ou_data" type="date" value="${esc(f.enviadoEm||HJ)}"></div></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px;flex-wrap:wrap">${f.enviado?`<button class="btn ${V2.conf==='desm'?'danger':''}" onclick="fbDesmarcar()">${V2.conf==='desm'?'Confirmar: desmarcar envio':'Desmarcar envio'}</button>`:''}<button class="btn" onclick="fbOutro()">Registrar entrega</button></div></div>
 <div class="panel"><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="fbPatch('${f.id}',{arquivado:${!f.arquivado}},'${f.arquivado?'Feedback desarquivado':'Feedback arquivado'}','${f.arquivado?'Desarquivou':'Arquivou'} um feedback')">${f.arquivado?'Desarquivar':'Arquivar'}</button><button class="btn danger" onclick="fbExcluir()">${V2.conf==='del'?'Confirmar exclusão':'Excluir'}</button></div>${V2.conf==='del'?'<p class="meta" style="margin:8px 0 0">Excluir apaga de vez. Se só quer tirar da frente, prefira arquivar. As observações ligadas continuam guardadas.</p>':''}</div></aside></div>`},
fbmodelos(){const ab=S.fbMAba||'mod';
 const tabs=`<div class="tabs big"><button class="${ab==='mod'?'on':''}" onclick="S.fbMAba='mod';render()">Modelos de e-mail · ${D.modelos.length}</button><button class="${ab==='fra'?'on':''}" onclick="S.fbMAba='fra';render()">Frases sugeridas · ${D.frases.length}</button></div>`;
 const lista=ab==='mod'?[...D.modelos].sort((a,b)=>(a.nome||'').localeCompare(b.nome||'')).map(m=>`<div class="row"><div class="t"><b>${esc(m.nome)}</b><span>${esc(m.tipo==='qualquer'||!m.tipo?'Qualquer tipo':m.tipo)} · ${m.tom&&m.tom!=='qualquer'?TONS[m.tom]:'Qualquer tom'} · ${esc(m.assunto||'sem assunto')}</span></div>${editar('modelo',m.id)}</div>`).join(''):
  GRUPOS_FR.map(g=>{const fs=D.frases.filter(f=>f.grupo===g);return fs.length?`<div class="sbox"><span class="lbl">${g}</span>${fs.map(f=>`<div class="row"><span class="tag ${f.tom==='pos'?'ok':'wa'}" style="flex:none">${f.tom==='pos'?'Positiva':'Melhoria'}</span><div class="t"><b style="font-weight:400">${esc(f.txt)}</b></div>${editar('frase',f.id)}</div>`).join('')}</div>`:''}).join('');
 return `<button class="btn ghost" style="align-self:flex-start" onclick="fbIr('feedbacks')">‹ Feedbacks</button>`+head('Feedbacks','Modelos e frases','Textos prontos para acelerar a escrita. Use marcadores como {nome} e {periodo}.',`<button class="btn pri" onclick="abrir('${ab==='mod'?'modelo':'frase'}')">${ab==='mod'?'+ Novo modelo':'+ Nova frase'}</button>`)+tabs+`<div class="panel">${lista||vazio('Nada cadastrado ainda','')}</div>`},
acesso(){const p=D.pedidos.find(x=>x.id===ME.uid),bloq=acessoDe(ME.uid)?.ativo===false;
 return head('Prumo','Olá'+(ME.nome?', <em>'+esc(ME.nome.split(' ')[0])+'</em>':''),bloq?'O seu acesso ao portal está bloqueado. Fale com o administrador.':'Você entrou com a sua conta, mas ainda não tem um perfil no portal. Conte como vai usar e o administrador aprova.')+
 (bloq?'':(p?`<div class="banner"><span>Pedido enviado em ${fmtHora(p.em)}. Assim que for aprovado, o portal abre sozinho.</span></div>`:'')+
 `<div class="panel"><form id="pedform" class="fgrid" novalidate onsubmit="event.preventDefault()">
  <div class="full"><label class="lbl" for="q_tipo">Eu sou</label><select class="inp" id="q_tipo" onchange="document.getElementById('q_depbox').hidden=this.value!=='solicitante'"><option value="equipe">Da equipe do financeiro e contábil</option><option value="solicitante" ${p?.perfil==='solicitante'?'selected':''}>De outro departamento e vou abrir chamados</option></select></div>
  <div class="full" id="q_depbox" ${p?.perfil==='solicitante'?'':'hidden'}><label class="lbl" for="q_dep">Meu departamento</label><select class="inp" id="q_dep"><option value="">Selecione</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${p?.dep===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}</select><p class="ferr" id="qe_dep"></p></div>
  <div class="full"><label class="lbl" for="q_obs">Cargo ou observação · opcional</label><input class="inp" id="q_obs" value="${esc(p?.obs||'')}" placeholder="Analista de contas a pagar"></div></form>
  <div style="display:flex;justify-content:flex-end;margin-top:14px"><button class="btn pri" onclick="pedirAcesso()">${p?'Atualizar pedido':'Pedir acesso'}</button></div></div>`+
 note('Se o seu departamento não aparece na lista, peça para o financeiro cadastrá-lo.'))},
usuarios(){const ped=D.pedidos.filter(p=>!acessoDe(p.id)).sort((a,b)=>a.em<b.em?1:-1),lst=[...D.acessos].sort((a,b)=>nomeU(a.id).localeCompare(nomeU(b.id)));
 return head('Administração','Usuários e <em>permissões</em>','Cada pessoa entra com a própria conta. O perfil define o que ela vê e o que pode fazer.',`${podeAdmin()?`<button class="btn" onclick="menuSheet()">Mostrar e ocultar áreas</button>`:''}${real()?`<button class="btn pri" onclick="novoAcesso()">Adicionar pessoa</button>`:''}`)+
 (real()?'':`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Modo demonstração: esta visualização não tem login. No portal publicado, cada pessoa aparece aqui com o nome da conta dela.</span></div>`)+
 (ped.length?`<div class="panel"><div class="ph"><h2>Pedidos de acesso</h2><span>${ped.length}</span></div>${ped.map(p=>`<div class="row">${avU(p.id)}<div class="t"><b>${esc(nomeU(p.id))}</b><span>${esc(PAPEIS[p.perfil]||'')}${p.dep?' · '+esc(depNome(p.dep)):''}${p.obs?' · '+esc(p.obs):''} · ${fmtHora(p.em)}</span></div><button class="btn" onclick="recusar('${esc(p.id)}')">Recusar</button><button class="btn pri" onclick="editAcesso('${esc(p.id)}')">Revisar e liberar</button></div>`).join('')}</div>`:'')+
 `<div class="panel"><div class="ph"><h2>Pessoas com acesso</h2><span>${lst.length}</span></div>
 ${real()?`<div class="row">${avU(ME.uid)}<div class="t"><b>${esc(ME.nome||'Você')} <span class="meta">(você)</span></b><span>Administrador · acesso total</span></div></div>`:''}
 ${lst.filter(a=>a.id!==ME.uid).map(a=>`<div class="row">${avU(a.id)}<div class="t"><b>${esc(nomeU(a.id))}</b><span>${esc(PAPEIS[a.perfil]||'')}${a.perfil==='equipe'?' · '+esc(nomeDe(a.pessoa)):''}${a.funcao?' · '+esc(a.funcao):''}${(a.assuntos||[]).filter(assDe).length?' · responsável por '+esc(a.assuntos.filter(assDe).map(assNome).join(', ')):''}${a.perfil==='solicitante'?' · '+esc(depNome(a.dep)):''}</span></div>${a.ativo===false?'<span class="tag bad">Bloqueado</span>':a.perfil==='equipe'?`<span class="meta">${PERMS.filter(([k])=>({...PADRAO,...a.perms})[k]).length} de ${PERMS.length} permissões</span>`:''}<button class="btn" onclick="editAcesso('${esc(a.id)}')">Editar</button></div>`).join('')}
 ${!lst.filter(a=>a.id!==ME.uid).length?vazio('Ninguém liberado ainda','Quando alguém abrir o portal pela primeira vez, o pedido de acesso aparece aqui.'):''}</div>
 <div class="panel"><div class="ph"><h2>O que cada perfil pode fazer</h2><span>a equipe pode ter permissões ajustadas pessoa a pessoa</span></div>${matriz()}</div>`+
 note('Quem entra pela primeira vez aparece em Pedidos de acesso. Diretores e administradores liberam, ajustam permissões ou bloqueiam. Bloquear não apaga o histórico.')},
triagem(){const oc=CFG.caixa?deOutraCaixa().length:0,ocBan=oc?`<div class="row"><span class="t" style="white-space:normal">${oc} ${oc>1?'e-mails vieram':'e-mail veio'} de outra caixa, não do ${esc(CFG.caixa)}. Eles não aparecem mais na revisão. Quer apagar essas cópias do Prumo? Os chamados já criados não mudam.</span><button class="btn ${S.confOC?'danger':''}" onclick="removerOutraCaixa()">${S.confOC?'Confirmar: remover':'Remover do Prumo'}</button></div>`:'';const limpa=(pode('email')||podeAdmin())&&D.emails.some(e=>!virouChamado(e));const pend=emPend(),hist=D.emails.filter(e=>daCaixa(e)&&(e.st==='aplicado'||(e.st==='ignorado'&&!e.auto))).sort((a,b)=>a.recebido<b.recebido?1:-1).slice(0,30);
 // todas as categorias aparecem, cada uma com o próprio nome; a pesquisa procura em tudo (nome, e-mail, assunto, texto, setor, categoria)
 const catDe=e=>emCat(e)||'Sem assunto';
 const q=norm(S.fRemT||''),achou=e=>{if(!q)return true;const r=D.remetentes.find(x=>x.id===remDoEmail(e));return norm(`${e.assunto||''} ${e.trecho||''} ${e.deNome||''} ${e.de||''} ${r?.nome||''} ${depNome(r?r.dep:e.dep)} ${catDe(e)}`).includes(q)};
 const pendQ=pend.filter(achou),cats={};pendQ.forEach(e=>{const n=catDe(e);cats[n]=(cats[n]||0)+1});
 if(S.fCatT&&!(S.fCatT in cats))S.fCatT='';
 const abasT=Object.keys(cats).sort((a,b)=>(a==='Sem assunto')-(b==='Sem assunto')||cats[b]-cats[a]||a.localeCompare(b));
 const pendV=S.fCatT?pendQ.filter(e=>catDe(e)===S.fCatT):pendQ;
 const gruposRem=L=>{const g={};L.forEach(e=>{const k=remDoEmail(e);(g[k]=g[k]||[]).push(e)});
  return Object.entries(g).map(([k,l])=>{const r=D.remetentes.find(x=>x.id===k);return {k,r,nome:r?.nome||l[0].deNome||l[0].de,email:r?.email||l[0].de,dep:r?r.dep:l[0].dep,l:l.sort((a,b)=>a.recebido<b.recebido?1:-1)}}).sort((a,b)=>a.l[0].recebido<b.l[0].recebido?1:-1)};
 const g={};pendV.forEach(e=>{g[remDoEmail(e)]=1});
 const blocos=G=>G.map(x=>`<div class="remg"><div class="remh"><span class="av">${esc((x.nome||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(x.nome)}</b><span>${esc(x.email)} · ${x.l.length} ${x.l.length===1?'e-mail':'e-mails'}</span></div>
  <input class="inp" style="width:220px;max-width:100%" list="deps_dl" data-nodraft="1" aria-label="Setor de ${esc(x.nome)}" placeholder="Setor: escreva ou escolha" value="${esc(x.dep?depNome(x.dep):'')}" onchange="setorEscrito('${esc(x.k)}',this.value)"><button class="btn ghost" onclick="editRem('${esc(x.k)}')">Mais opções</button></div>
  ${x.l.map(cardEmail).join('')}</div>`).join('');
 const dl=`<datalist id="deps_dl">${D.departamentos.map(d=>`<option value="${esc(d.n)}"></option>`).join('')}</datalist>`;
 const lista=!pendV.length?vazio(q?'Nada encontrado':'Nenhum e-mail para revisar',q?'Tente outro nome, assunto ou palavra.':'Quando chegar e-mail, ele aparece aqui separado por categoria.')
  :S.fCatT?blocos(gruposRem(pendV))
  :abasT.map(n=>{const L=pendV.filter(e=>catDe(e)===n),ab=!(S.catFech||{})[n];return `<details class="catsec" ${ab?'open':''} ontoggle="S.catFech=S.catFech||{};S.catFech[this.dataset.c]=!this.open" data-c="${esc(n)}"><summary><b>${esc(n)}</b><span class="meta">${L.length} ${L.length===1?'e-mail':'e-mails'}</span></summary>${blocos(gruposRem(L))}</details>`}).join('');
 const sem=lerTodos()?[]:D.departamentos.filter(d=>!listaEmails(d).length);
 const conhecidos=[...D.remetentes].sort((a,b)=>(a.nome||a.email||'').localeCompare(b.nome||b.email||''));
 return head('Pedidos de outras áreas e e-mails','Chamados','Os e-mails lidos da caixa ou pasta conectada ficam aqui, separados por categoria e por quem enviou. Aceite cada um como chamado.')+
 chAbas('em')+chEmail()+(pode('email')?`<details class="dmais" style="margin-top:18px" ${S.limpaAb?'open':''} ontoggle="S.limpaAb=this.open"><summary>Mais opções de e-mail</summary><div class="row"><div class="t" style="white-space:normal"><b>Buscar os e-mails de novo</b><span>Lê de novo a caixa desde ${CFG.emailDesde?fmt(CFG.emailDesde):'30 dias atrás'} e traz de volta para a revisão o que saiu do Prumo. Não apaga nada e não repete os que já estão aqui.</span></div><button class="btn" onclick="relerEmails()">${S.sync?'Buscando…':'Buscar de novo'}</button></div>${ocBan}</details>`:'')+
 (sem.length?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Sem e-mail cadastrado: ${sem.map(d=>esc(d.n)).join(', ')}. E-mails desses departamentos não são reconhecidos.</span>${pode('cadastros')?`<button class="btn" onclick="${modOn('entregas')?"ir('entregas')":'gerirDeps()'}">Cadastrar</button>`:''}</div>`:'')+
 `<div class="panel"><div class="ph"><h2>Aguardando triagem</h2><span>${pendV.length} ${pendV.length===1?'e-mail':'e-mails'} de ${Object.keys(g).length} ${Object.keys(g).length===1?'remetente':'remetentes'}</span></div>
 <input class="inp" id="fremt" data-nodraft="1" placeholder="Pesquisar por nome, e-mail, assunto, setor, categoria ou palavra" value="${esc(S.fRemT||'')}" oninput="S.fRemT=this.value;render()" style="margin-bottom:10px">
 ${abasT.length?`<div class="catbar" role="tablist" aria-label="Categorias dos e-mails"><button role="tab" aria-selected="${!S.fCatT}" class="${S.fCatT?'':'on'}" onclick="S.fCatT='';render()">Todos <span>${pendQ.length}</span></button>${abasT.map(n=>`<button role="tab" aria-selected="${S.fCatT===n}" class="${S.fCatT===n?'on':''}" data-c="${esc(n)}" onclick="S.fCatT=this.dataset.c;render()">${esc(n)} <span>${cats[n]}</span></button>`).join('')}</div>`:''}
 ${dl}<div class="tscroll" id="tscroll">${lista}</div></div>
 <div class="panel"><button class="ph phtg" onclick="tgContatos()" aria-expanded="${contAberto()}"><h2>Contatos</h2><span>${conhecidos.length} · ${contAberto()?'fechar ▴':'abrir ▾'}</span></button>${!contAberto()?'':conhecidos.length?conhecidos.map(r=>{const n=D.emails.filter(e=>remDoEmail(e)===r.id).length;return `<div class="row"><span class="av">${esc((r.nome||r.email||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(r.nome||r.email)}</b><span>${esc(r.email)} · ${r.dep?esc(depNome(r.dep)):'setor não definido'}${r.cat&&assDe(r.cat)?' · '+esc(assNome(r.cat)):''} · ${n} ${n===1?'e-mail':'e-mails'}</span></div>${r.ignorar?'<span class="tag ne">Ignorado</span>':''}<button class="btn" onclick="editRem('${esc(r.id)}')">Editar</button></div>`}).join(''):'<p class="meta">Os remetentes aparecem aqui depois da primeira verificação.</p>'}</div>
 <div class="panel"><div class="ph"><h2>Já processados</h2><span>últimos ${hist.length}</span></div>${hist.length?hist.map(e=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(e.recebido)}</span><div class="t"><b>${esc(e.assunto)}</b><span>${esc(e.deNome||e.de)} · ${resTxt(e)}</span></div>${pode('ler_email')&&e.msgId?`<button class="btn ghost" onclick="lerEmail('e:${e.id}')">Ler</button>`:''}</div>`).join(''):'<p class="meta">Nada processado ainda.</p>'}</div>`+
 note('O portal guarda só remetente, assunto, data, um trecho curto e a referência do e-mail. O texto completo é lido na hora, direto do Outlook, por quem tem a permissão Abrir e-mails no portal.')},
ferramentas(){const pf=pode('ferramentas'),q=norm(S.fFer||''),ab=catAberta();
 const cats=[...D.categorias].sort((a,b)=>(a.n||'').localeCompare(b.n||''));
 const orf=D.ferramentas.filter(f=>!D.categorias.some(c=>c.id===f.cat));
 const grupos=[...cats.map(c=>({id:c.id,n:c.n,it:D.ferramentas.filter(f=>f.cat===c.id),cat:true})),...(orf.length?[{id:'_sem',n:'Sem categoria',it:orf,cat:false}]:[])];
 const flt=g=>g.it.filter(f=>!q||norm(f.n+' '+(f.desc||'')+' '+(f.url||'')).includes(q)).sort((a,b)=>(a.n||'').localeCompare(b.n||''));
 return head('Acesso rápido','Ferramentas','Os sistemas e sites que o departamento usa no dia a dia.',pf?`<button class="btn pri" onclick="abrir('categoria')">Nova categoria</button>`:'')+
 `<input class="inp" id="ffer" placeholder="Buscar ferramenta" value="${esc(S.fFer||'')}" oninput="S.fFer=this.value;render()">`+
 (grupos.length?`<div class="cats">${grupos.map(g=>{const it=flt(g);if(q&&!it.length)return '';const open=q?true:!!ab[g.id];
  return `<div class="cat"><div class="cath"><button class="catbtn" onclick="tgCat('${esc(g.id)}')" aria-expanded="${open}"><span class="chev ${open?'on':''}" aria-hidden="true">›</span><b>${esc(g.n)}</b><span class="meta">${g.it.length} ${g.it.length===1?'ferramenta':'ferramentas'}</span></button>${pf&&g.cat?`<button class="btn add" onclick="novaFer('${esc(g.id)}')" aria-label="Adicionar ferramenta em ${esc(g.n)}" title="Adicionar ferramenta">+</button><button class="btn ghost" onclick="abrir('categoria','${esc(g.id)}')">Editar</button>`:''}</div>
  ${open?`<div class="catbody">${it.length?it.map(f=>linFer(f,pf)).join(''):`<div class="empty">Nenhuma ferramenta nesta categoria ainda.${pf?`<div style="margin-top:10px"><button class="btn" onclick="novaFer('${esc(g.id)}')">Adicionar ferramenta</button></div>`:''}</div>`}</div>`:''}</div>`}).join('')}</div>`:`<div class="panel">${vazio('Nenhuma categoria ainda','Crie categorias como Governo e obrigações, Bancos ou Sistemas internos e adicione as ferramentas.',pf?'categoria':null,'Nova categoria')}</div>`)+
 note('Clique no nome da categoria para abrir ou fechar. O + adiciona uma ferramenta naquela categoria.')},
backup(){const L=[...D.backups].sort((a,b)=>a.criado<b.criado?1:-1),hoje=D.backups.find(b=>b.id==='d-'+HJ);
 return head('Segurança dos dados','Backup','Cópia completa do sistema todos os dias, com restauração e envio para um e-mail dedicado.',`<button class="btn" onclick="baixarBackup()">Baixar backup agora</button><button class="btn pri" onclick="backupAgora()">Criar ponto de restauração</button>`)+
 (real()?'':`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Modo demonstração: os backups funcionam no portal publicado, aberto por um administrador.</span></div>`)+
 (S.bkErr?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>O último envio de backup por e-mail falhou: ${esc(msgErro(S.bkErr))}</span><button class="btn" onclick="S.bkErr=null;enviarBackupEmail(true)">Tentar de novo</button></div>`:'')+
 `<div class="stats"><div class="stat"><p>Último backup</p><strong style="font-size:18px">${L[0]?fmtHora(L[0].criado):'—'}</strong><small>${L[0]?L[0].registros+' registros':'nenhum ainda'}</small></div>
 <div class="stat"><p>Backup de hoje</p><strong style="font-size:18px;color:${hoje?'var(--ok)':'var(--warn)'}">${hoje?'Feito':'Pendente'}</strong><small>${CFG.bkAuto===false?'automático desligado':'automático todos os dias'}</small></div>
 <div class="stat"><p>Pontos guardados</p><strong>${L.length}</strong><small>mantém ${bkDias()} dias · o último sempre fica</small></div>
 <div class="stat"><p>E-mail de backup</p><strong style="font-size:14px;overflow-wrap:anywhere">${CFG.bkEmail?esc(CFG.bkEmail):'Não definido'}</strong><small>${CFG.bkEmail&&CFG.bkEnviar?(hoje?.enviado?'enviado hoje':'envio diário ligado'):'envio desligado'}</small></div></div>
 <div class="panel"><div class="ph"><h2>Como está configurado</h2><div style="display:flex;gap:8px;flex-wrap:wrap">${CFG.bkEmail?`<button class="btn" onclick="enviarBackupEmail(true)">Enviar backup por e-mail agora</button>`:''}<button class="btn" onclick="cfgBackup()">Alterar</button></div></div>
  <div class="row"><div class="t"><b>Backup automático diário</b><span>${CFG.bkAuto===false?'Desligado':'Ligado. Feito pelo servidor todo dia às 6h.'}</span></div></div>
  <div class="row"><div class="t"><b>E-mail dedicado</b><span>${CFG.bkEmail?esc(CFG.bkEmail)+(CFG.bkEnviar?' · recebe o backup todos os dias':' · envio desligado'):'Ainda não definido. Quando você criar o e-mail exclusivo para backup, cadastre aqui.'}</span></div></div>
  <div class="row"><div class="t"><b>O que entra no backup</b><span>Todos os registros, acessos, configurações e as últimas 300 atividades. Cada dia guarda o estado completo daquele momento, com as alterações feitas até ali.</span></div></div></div>
 <div class="panel"><div class="ph"><h2>Pontos de restauração</h2><label class="btn" style="cursor:pointer">Restaurar de arquivo<input type="file" accept=".json,application/json" hidden onchange="arquivoBackup(this)"></label></div>
 ${L.length?L.map(b=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(b.criado)}</span><div class="t"><b style="font-weight:500">${MOTIVO[b.motivo]||'Backup'}</b><span>${b.registros} registros · ${Math.max(1,Math.round(b.tamanho/1024))} KB${b.enviado?' · enviado por e-mail':''}</span></div><button class="btn ghost" onclick="baixarBackup('${esc(b.id)}')">Baixar</button><button class="btn" onclick="restaurarPonto('${esc(b.id)}')">Restaurar</button></div>`).join(''):vazio('Nenhum ponto de restauração ainda','O primeiro backup automático é criado pelo servidor às 6h.')}</div>`+
 note('Os pontos de restauração ficam guardados dentro do portal. O arquivo baixado e o e-mail são cópias fora dele, para o caso de o portal deixar de existir.')},
abrir(){if(!D.departamentos.length)return head('Portal de chamados','Abrir chamado','')+`<div class="panel">${vazio('Nenhum departamento cadastrado','O financeiro precisa cadastrar os departamentos antes.')}</div>`;
 return head(`Portal de chamados · ${esc(depNome(solDep()))}`,'Abrir <em>chamado</em>','Solicitações de pagamento, reembolsos e dúvidas para o financeiro e contábil. Substitui o envio por e-mail.')+regrasCh()+
 `<div class="panel">${formCh({})}<div style="display:flex;justify-content:flex-end;margin-top:16px"><button class="btn pri" onclick="enviarCh()">Enviar chamado</button></div></div>`},
meus(){const l=D.chamados.filter(c=>c.dep===solDep()).sort((a,b)=>(b.abertoEm||'')<(a.abertoEm||'')?-1:1),pe=l.filter(c=>c.st==='Pendência com solicitante');
 return head(`Portal de chamados · ${esc(depNome(solDep()))}`,'Meus chamados','Acompanhe cada pedido até o pagamento ser programado.',`<button class="btn pri" onclick="ir('abrir')">Abrir chamado</button>`)+
 (pe.length?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${pe.length} ${pe.length>1?'chamados precisam':'chamado precisa'} de correção sua.</span></div>`:'')+
 `<div class="panel">${l.length?l.map(c=>`<div class="row"><div class="t"><b>${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(c.tipo)} · aberto ${fmt(c.aberto)}${c.venc?' · vence '+fmt(c.venc):''}</span>${c.pend&&c.st==='Pendência com solicitante'?`<span style="display:block;color:var(--bad)">Pendência: ${esc(c.pend)}</span>`:''}</div><span class="tag ${stCh[c.st]}">${esc(nomeEt(c.st))}</span><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Detalhes</button>${c.st==='Pendência com solicitante'?`<button class="btn pri" onclick="abrirChSheet('${esc(c.id)}')">Corrigir</button>`:''}</div>`).join(''):vazio('Nenhum chamado ainda','Abra o primeiro chamado do seu departamento.')}</div>`},
chamados(){if(!pode('chamados'))return V.triagem();const fCat=S.fCat||'',bq=norm(S.fBusca||'');
 const rems=[...new Map(D.chamados.filter(remCh).map(c=>[remCh(c),remNomeCh(c)])).entries()].sort((a,b)=>a[1].localeCompare(b[1]));
 if(S.fRem&&!rems.some(([k])=>k===S.fRem))S.fRem='';
 const rSel=S.fRem?D.remetentes.find(x=>x.id===S.fRem):null,rCh=S.fRem?D.chamados.filter(c=>remCh(c)===S.fRem):[];
 const base=D.chamados.filter(c=>(!S.fRem||remCh(c)===S.fRem)&&(!S.fDepC||(S.fDepC==='_sem'?!c.dep:c.dep===S.fDepC))&&(!S.fResp||c.resp===S.fResp)&&(!bq||norm(`${c.assunto} ${c.proto} ${c.solicitante||''} ${c.desc||''} ${c.subcat||''}`).includes(bq)));
 const doCat=(c,k)=>k===''?true:k==='_sem'?!assDe(c.cat):c.cat===k;
 const lim=isoD(new Date(Date.now()-30*864e5));
 const l=base.filter(c=>doCat(c,fCat)&&(c.st!=='Concluído'||(c.concl||c.aberto||'')>=lim));
 const ab=D.chamados.filter(c=>c.st!=='Concluído'),fora=ab.filter(c=>c.fora).length,sem=ab.filter(c=>!c.resp).length,atr=ab.filter(chAtrasado).length;
 const nAb=k=>base.filter(c=>c.st!=='Concluído'&&doCat(c,k)).length;
 const abas=[['','Todos'],...assLista().map(a=>[a.id,a.n]),...(D.chamados.some(c=>!assDe(c.cat))?[['_sem','Sem assunto']]:[])];
 return head('Pedidos de outras áreas e e-mails','Chamados','Separados por assunto. Aceite cada demanda com prazo e responsável. Ao concluir, ela vai para Demandas realizadas.',`${podeAdmin()?`<button class="btn" onclick="cfgPrazo()">Regra de prazo: ${DMIN()} dias úteis</button>`:`<span class="chip">Regra: ${DMIN()} dias úteis</span>`}${pode('cadastros')?`<button class="btn" onclick="gerirAssuntos()">Assuntos</button>`:''}${pode('cadastros')&&!modOn('entregas')?`<button class="btn" onclick="gerirDeps()">Departamentos</button>`:''}${podeAdmin()||dir()?`<button class="btn" onclick="cfgColunas()" title="Mudar o nome e a ordem das colunas">Colunas</button>`:''}${podeAdmin()?`<button class="btn" onclick="cfgEtapasCh()">Subetapas</button>`:''}<button class="btn" onclick="exportarCh()" title="Baixar Excel ou relatório HTML">Exportar</button>${iaOn()?`<button class="btn" onclick="iaSheet()" title="Análise e sugestões de melhoria por departamento">Análise com IA</button>`:`<button class="btn" onclick="iaCopiarSheet()" title="Copia os números para analisar no Claude ou no Copilot, sem custo">Analisar com IA</button>`}<button class="btn pri" onclick="abrirChSheet()">Abrir chamado</button>`)+
 chAbas('ch')+chEmail()+`<div class="stats"><div class="stat"><p>Em aberto</p><strong>${ab.length}</strong></div><div class="stat"><p>Sem responsável</p><strong style="color:${sem?'var(--warn)':'var(--ink)'}">${sem}</strong></div><div class="stat"><p>Atrasadas no prazo de entrega</p><strong style="color:${atr?'var(--bad)':'var(--ink)'}">${atr}</strong></div><div class="stat"><p>Fora do prazo da política</p><strong style="color:${fora?'var(--warn)':'var(--ink)'}">${fora}</strong></div></div>
 <div class="tabs big" role="tablist" aria-label="Assuntos">${abas.map(([k,n])=>`<button role="tab" aria-selected="${fCat===k}" class="${fCat===k?'on':''}" onclick="S.fCat='${esc(k)}';render()">${esc(n)} <span class="meta">${nAb(k)}</span></button>`).join('')}${pode('cadastros')?`<button onclick="gerirAssuntos()" title="Adicionar ou excluir assuntos">+ assunto</button>`:''}</div>
 <div class="filtros"><input class="inp" id="fbch" data-nodraft="1" placeholder="Buscar por resumo, protocolo ou remetente" value="${esc(S.fBusca||'')}" oninput="S.fBusca=this.value;render()">
 ${rems.length?`<select class="inp" aria-label="Remetente" onchange="S.fRem=this.value;render()"><option value="">Todos os remetentes</option>${rems.map(([k,n])=>`<option value="${esc(k)}" ${S.fRem===k?'selected':''}>${esc(n)} (${D.chamados.filter(c=>remCh(c)===k&&c.st!=='Concluído').length})</option>`).join('')}</select>`:''}
 <select class="inp" aria-label="Setor" onchange="S.fDepC=this.value;render()"><option value="">Todos os setores</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${S.fDepC===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}<option value="_sem" ${S.fDepC==='_sem'?'selected':''}>Setor não definido</option></select>
 <select class="inp" aria-label="Responsável" onchange="S.fResp=this.value;render()"><option value="">Todos os responsáveis</option><option value="dir" ${S.fResp==='dir'?'selected':''}>Diretor</option>${colabs().map(p=>`<option value="${esc(p.id)}" ${S.fResp===p.id?'selected':''}>${esc(p.n)}</option>`).join('')}</select></div>
 ${S.fRem?`<div class="remg remh"><span class="av">${esc((remNomeCh(rCh[0]||{})||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(remNomeCh(rCh[0]||{}))}</b><span>${esc(rSel?.email||'')} · ${rCh.length} ${rCh.length===1?'chamado':'chamados'}, ${rCh.filter(c=>c.st!=='Concluído').length} em aberto</span></div>
 ${pode('email')||pode('cadastros')?`<select class="inp" style="width:auto;max-width:100%" aria-label="Setor do remetente" onchange="setRem('${esc(S.fRem)}',{dep:this.value})"><option value="">Setor: não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===(rSel?rSel.dep:rCh[0]?.dep)?'selected':''}>Setor: ${esc(d.n)}</option>`).join('')}</select>`:''}<button class="btn ghost" onclick="editRem('${esc(S.fRem)}')">E-mails e opções</button><button class="btn ghost" onclick="S.fRem='';render()">Ver todos</button></div>`:''}
 <div class="kanban">${ordemEt().map(e=>{const it=l.filter(c=>c.st===e).sort((a,b)=>e==='Concluído'?((b.concl||'')<(a.concl||'')?-1:1):((a.prazo||a.venc||'9')<(b.prazo||b.venc||'9')?-1:1));const ci=ordemEt().indexOf(e),ce=ETAPAS.indexOf(e);return `<div class="col"><h3 id="colh_${ce}"><span class="cn" ${podeCol()?`ondblclick="colNome(${ce})" title="Clique duas vezes para renomear"`:''}>${esc(nomeEt(e))}</span><span class="cdir">${podeCol()?`<span class="cact"><button ${ci?'':'disabled'} onclick="colMove(${ce},-1)" aria-label="Mover coluna para a esquerda" title="Mover para a esquerda">‹</button><button onclick="colNome(${ce})" aria-label="Renomear coluna" title="Renomear">✎</button><button ${ci<ETAPAS.length-1?'':'disabled'} onclick="colMove(${ce},1)" aria-label="Mover coluna para a direita" title="Mover para a direita">›</button></span>`:''}<span>${it.length}</span></span></h3>${e==='Concluído'?'<span class="meta" style="font-size:11.5px">Últimos 30 dias</span>':''}${it.map(c=>cardCh(c,true)).join('')}${e==='Concluído'&&pode('realizadas')?`<button class="btn ghost" onclick="ir('realizadas')">Ver todas as realizadas</button>`:''}</div>`}).join('')}</div>`+
 note('Pedidos parecidos são separados sozinhos em abas (Reembolso, Nota fiscal, Impostos…). Se o Prumo errar, abra o chamado e troque o assunto: o que você escolher não é mudado de novo. Nenhum e-mail ou chamado sai da tela por causa disso. Clique em um assunto para ver só as demandas dele. Os outros departamentos veem só Abrir chamado e Meus chamados. Quem não tem a permissão Abrir e-mails no portal vê o resumo, o assunto e a categoria, sem o e-mail.')},
realizadas(){const per=S.rPer||'mes';
 const ini={mes:MES_ATUAL+'-01',mesant:addMes(MES_ATUAL,-1)+'-01',tri:mesesTri(triDe(MES_ATUAL))[0]+'-01','12m':isoD(new Date(Date.now()-365*864e5)),tudo:''}[per]??'',fim=per==='mesant'?MES_ATUAL+'-01':'9999';
 const L=D.chamados.filter(c=>c.st==='Concluído'&&(c.concl||'')>=ini&&(c.concl||'')<fim&&(!S.rCat||(S.rCat==='_sem'?!assDe(c.cat):c.cat===S.rCat))&&(!S.rDep||(S.rDep==='_sem'?!c.dep:c.dep===S.rDep))&&(!S.rQuem||quemFez(c)===S.rQuem)).sort((a,b)=>(b.conclEm||b.concl||'')<(a.conclEm||a.concl||'')?-1:1);
 S._realiz=L;
 const cp=L.filter(c=>c.prazo),ok=cp.filter(c=>!(c.concl>c.prazo)).length,atr=cp.length-ok;
 const tempos=L.map(c=>{const a=(c.aceito||c.aberto||'').slice(0,10);return a&&c.concl?diasUteis(a,c.concl):null}).filter(x=>x!==null),tm=tempos.length?tempos.reduce((a,b)=>a+b,0)/tempos.length:null;
 const grp=(f,nm)=>{const o={};L.forEach(c=>{const k=f(c)||'';const x=o[k]=o[k]||{k,n:nm(c),t:0,cp:0,ok:0};x.t++;if(c.prazo){x.cp++;if(!(c.concl>c.prazo))x.ok++}});return Object.values(o).sort((a,b)=>b.t-a.t)};
 const pp=grp(quemFez,quemFezNome),pa=grp(c=>assDe(c.cat)?c.cat:'',c=>assNome(c.cat));
 const tab=(t,G)=>`<div class="panel"><div class="ph"><h2>${t}</h2></div>${G.length?`<div class="tbl-wrap"><table><thead><tr><th style="text-align:left">${t==='Por pessoa'?'Quem realizou':'Assunto'}</th><th>Concluídas</th><th>No prazo</th><th>Com atraso</th></tr></thead><tbody>${G.map(x=>`<tr><td style="text-align:left">${esc(x.n)}</td><td>${x.t}</td><td>${x.cp?pctCel(Math.round(x.ok/x.cp*100)):'<span class="meta">sem prazo</span>'}</td><td>${x.cp-x.ok}</td></tr>`).join('')}</tbody></table></div>`:'<p class="meta">Nada no período.</p>'}</div>`;
 const pessoasOpt=[...new Map(D.chamados.filter(c=>c.st==='Concluído').map(c=>[quemFez(c),quemFezNome(c)])).entries()].filter(([k])=>k).sort((a,b)=>a[1].localeCompare(b[1]));
 return head('Histórico','Demandas <em>realizadas</em>','Tudo o que foi concluído: quem fez, quando chegou, o prazo combinado e se foi entregue no prazo.',`<button class="btn" onclick="csvRealizadas()">Baixar planilha</button>`)+
 `<div class="filtros"><select class="inp" aria-label="Período" onchange="S.rPer=this.value;render()">${[['mes','Este mês'],['mesant','Mês passado'],['tri','Este trimestre'],['12m','Últimos 12 meses'],['tudo','Tudo']].map(([k,n])=>`<option value="${k}" ${per===k?'selected':''}>${n}</option>`).join('')}</select>
 <select class="inp" aria-label="Assunto" onchange="S.rCat=this.value;render()"><option value="">Todos os assuntos</option>${assLista().map(a=>`<option value="${esc(a.id)}" ${S.rCat===a.id?'selected':''}>${esc(a.n)}</option>`).join('')}<option value="_sem" ${S.rCat==='_sem'?'selected':''}>Sem assunto</option></select>
 <select class="inp" aria-label="Setor" onchange="S.rDep=this.value;render()"><option value="">Todos os setores</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${S.rDep===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}<option value="_sem" ${S.rDep==='_sem'?'selected':''}>Setor não definido</option></select>
 <select class="inp" aria-label="Quem realizou" onchange="S.rQuem=this.value;render()"><option value="">Todas as pessoas</option>${pessoasOpt.map(([k,n])=>`<option value="${esc(k)}" ${S.rQuem===k?'selected':''}>${esc(n)}</option>`).join('')}</select></div>
 <div class="stats"><div class="stat"><p>Concluídas</p><strong>${L.length}</strong></div><div class="stat"><p>No prazo</p><strong>${cp.length?Math.round(ok/cp.length*100)+'%':'—'}</strong><small>${ok} de ${cp.length} com prazo</small></div><div class="stat"><p>Com atraso</p><strong style="color:${atr?'var(--warn)':'var(--ink)'}">${atr}</strong></div><div class="stat"><p>Tempo médio</p><strong>${tm===null?'—':tm.toFixed(1).replace('.',',')}</strong><small>dias úteis do aceite à conclusão</small></div></div>
 <div class="grid2">${tab('Por pessoa',pp)}${tab('Por assunto',pa)}</div>
 <div class="panel"><div class="ph"><h2>Demandas</h2><span>${L.length>200?'200 mais recentes de '+L.length:L.length}</span></div>
 ${L.length?L.slice(0,200).map(c=>{const sp=stPrazo(c)||['ne','Sem prazo definido'],rec=(c.recebidoEm||c.aberto||'').slice(0,10);return `<div class="row"><span class="meta" style="width:52px">${fmt(c.concl)}</span><div class="t"><b>${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(c.dep?depNome(c.dep):'setor não definido')} · ${esc(catTxt(c))} · chegou ${fmt(rec)} · prazo ${c.prazo?fmt(c.prazo):'—'} · realizada por ${esc(quemFezNome(c))}</span></div><span class="tag ${sp[0]}">${sp[1]}</span><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Detalhes</button></div>`}).join(''):vazio('Nenhuma demanda concluída no período','Troque o período ou os filtros acima.')}</div>`+
 note('Cada demanda guarda quem aceitou, o prazo combinado e quem concluiu, com data e hora. O diretor vê tudo; para outras pessoas, libere a permissão Demandas realizadas.')},
logs(){const arq=S.logAba==='arq',dias=logDias();
 const tabs=`<div class="tabs big" role="tablist" aria-label="Período"><button role="tab" aria-selected="${!arq}" class="${arq?'':'on'}" onclick="S.logAba='';render()">Últimos ${dias} dias</button><button role="tab" aria-selected="${arq}" class="${arq?'on':''}" onclick="S.logAba='arq';render()">Arquivados</button></div>`;
 const fil=`<input class="inp" id="flog" placeholder="Filtrar por pessoa, chamado ou ação" value="${esc(S.fLog||'')}" oninput="S.fLog=this.value;document.getElementById('loglist').innerHTML=logRows()">`;
 const top=head('Auditoria','Registro de atividades','Quem fez o quê e quando. Os registros não podem ser editados pela tela.')+tabs;
 if(!arq)return top+fil+`<div class="panel logbox" id="loglist">${logRows()}</div>`+note(`Mostra as 300 ações mais recentes. Depois de ${dias} dias, cada ação sai desta lista e vai para Arquivados, separada por mês. Nada é apagado.`);
 const ms=[];let m=addMes(HJ.slice(0,7),-1);for(let i=0;i<36;i++){ms.push(m);m=addMes(m,-1)}if(!S.logMes)S.logMes=addMes(HJ.slice(0,7),-2);
 return top+`<div class="logarq"><label class="lbl" for="lmes">Mês</label><select class="inp" id="lmes" onchange="S.logMes=this.value;logArqCarregar()">${ms.map(x=>`<option value="${x}" ${x===S.logMes?'selected':''}>${esc(mesNome(x))}</option>`).join('')}</select></div>`+fil+
 `<div class="panel logbox" id="loglist">${logRows()}</div>`+note('Cada mês arquivado é aberto só quando você escolhe, para o sistema não ficar pesado.')},
alertas(){const A=alertas();
 return (avPodePedir()?`<div class="banner"><span>Receba avisos no canto da tela do computador quando um prazo ou rotina estiver chegando.</span><button class="btn pri" onclick="ativarAvisos()">Ativar avisos</button></div>`:'')+head('Central de notificações','Alertas',modOn('outros')?(dir()?'Atrasos do cronograma, rotinas e pendências que dependem de você.':'Alertas das rotinas sob sua responsabilidade.'):(dir()?'Rotinas do cronograma atrasadas e rotinas de atenção do departamento.':'Rotinas do cronograma sob sua responsabilidade.'))+
 (dir()||podeAdmin()?`<div class="porg"><button class="btn ghost" onclick="cfgResumo()">Resumo e avisos do diretor${cfgAv().ativo?' · WhatsApp ligado':''}${cfgRes().ativo?' · resumo '+esc(quandoRes(cfgRes())):''}</button></div>`:'')+`<div class="panel">${A.length?A.map(a=>`<div class="row"><span class="av ${a.c}">${ic(a.ic).replace('aria-hidden','style="width:17px;height:17px" aria-hidden')}</span><div class="t"><b>${esc(a.t)}</b><span>${esc(a.s)}</span></div>${a.id&&pode('entregas')?`<button class="btn" onclick="cobrar('${esc(a.id)}')">Cobrar</button>`:''}<button class="btn" onclick="ir('${a.ir}')">Abrir</button></div>`).join(''):vazio('Nenhum alerta agora','Quando uma rotina do cronograma atrasar ou tiver prioridade Atenção, ela aparece aqui.')}</div>`+
 note('Os alertas são recalculados sozinhos todos os dias a partir dos prazos. O diretor vê tudo; cada pessoa vê o que está sob sua responsabilidade.')},

entregas(){const deps=D.departamentos,l=minhasEnt().filter(e=>!S.fDep||e.dep===S.fDep).sort((a,b)=>(!!a.recebido)-(!!b.recebido)||((a.prazo||'')<(b.prazo||'')?-1:1));
 const atr=minhasEnt().filter(entAtrasada).length;
 return head('Dados recebidos de outras áreas','Entregas dos departamentos','O que cada área precisa enviar, os prazos e quem está em atraso.',(pode('cadastros')?`<button class="btn" onclick="abrir('departamento')">Novo departamento</button>`:'')+novo('entrega','Nova entrega'))+
 (atr?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${atr} ${atr>1?'entregas estão':'entrega está'} em atraso. ${dir()?'O diretor e os responsáveis já estão sendo alertados.':'Você e o diretor estão sendo alertados.'}</span></div>`:'')+
 (dir()||pode('ver_tudo')?`<div class="panel"><div class="ph"><h2>Situação por departamento</h2><span>${deps.length} departamentos</span></div>${painelDep()}</div>`:'')+
 `<div class="panel"><div class="ph"><h2>Entregas</h2><select class="inp" style="width:auto" id="fdep" onchange="S.fDep=this.value;render()"><option value="">Todos os departamentos</option>${deps.map(d=>`<option value="${esc(d.id)}" ${S.fDep===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}</select></div>
 ${l.length?l.map(linEnt).join(''):vazio('Nenhuma entrega aqui','Cadastre o que o departamento precisa enviar e o prazo.','entrega','Nova entrega')}</div>`+
 (pode('cadastros')&&deps.length?`<div class="panel"><div class="ph"><h2>Departamentos cadastrados</h2></div>${deps.map(d=>`<div class="row"><div class="t"><b>${esc(d.n)}</b><span>${esc(d.contato||'Sem contato')}${d.canal?' · '+esc(d.canal):''}${d.emails?' · '+esc(d.emails):' · sem e-mail cadastrado'}</span></div>${editar('departamento',d.id)}</div>`).join('')}</div>`:'')+
 note('Entregas mensais e semanais geram a próxima automaticamente quando são marcadas como recebidas.')},

registrar(){const tipos=Object.entries(F).filter(([k,f])=>!f.oculto&&(!f.perm||pode(f.perm)));
 return head('Incluir e atualizar','O que você quer <em>registrar</em>?','Tudo o que for registrado aqui aparece na hora para o diretor.')+
 `<div class="types">${pode('chamados')?`<button class="type" onclick="abrirChSheet()">${ic('chamados')}<b>Chamado</b><span>Pedido de pagamento, reembolso ou dúvida em nome de outro departamento.</span></button>`:''}${fbPode()?`<button class="type" onclick="fbNovo()">${ic('feedbacks')}<b>Feedback</b><span>Mensal, trimestral, semanal ou avulso, com modelos, frases e histórico.</span></button>`:''}${tipos.map(([k,f])=>`<button class="type" onclick="abrir('${k}')">${ic(f.ic)}<b>${esc(f.nome)}</b><span>${esc(f.desc)}</span></button>`).join('')}</div>`+
 note('Para alterar um registro existente, use o botão Editar ao lado dele em qualquer tela.')},

painel(){
 const exemplos=COLS.some(c=>D[c].some(x=>x.exemplo));
 const ban=dir()&&exemplos?`<div class="banner"><span>Os registros atuais são exemplos para você testar. Quando for usar de verdade, limpe e registre os dados reais.</span><button class="btn" onclick="limparEx()">${S.limpar?'Confirmar limpeza':'Limpar exemplos'}</button></div>`:'';
 const tm=D.tarefas.filter(x=>x.prazo&&x.prazo.slice(0,7)===MES_ATUAL),fm=tm.filter(x=>x.s==='feita').length;
 const atr=D.tarefas.filter(atrasada),pm=pendMsg(),dm=D.destaques.filter(d=>d.mes===MES_ATUAL);
 const prox=proxPrazos(6);
 if(!dir()&&!pode('ver_tudo')){const p=pessoa(S.perfil),mt=minhas(),r=realizadoTri(S.perfil,S.tri);const meuF=r=>minhaRot(r),cm=contaDia(HJ,meuF),meus=D.cronograma.filter(r=>meuF(r)&&ocorre(r,HJ)).sort(ordR),meusAtr=atrasosCron(meuF).filter(o=>o.dia<HJ);
  return head(hojeTxt(),`${avP(S.perfil,p?.n,'avg')}${saud()}, <em>${esc(p?.n||'')}</em>`,'Seu dia no cronograma, suas demandas e seu desempenho no trimestre.',`<button class="btn pri" onclick="S.cTab='dia';S.cDia='';ir('rotinas')">Abrir cronograma</button>`)+chegadaPainel()+comecarBtn()+andamento(S.pDia||HJ,'pDia')+`<div class="panel"><div class="ph"><h2>Outras atividades de hoje</h2><span>clique no que fez</span></div>${outrasOpcoes(HJ)}</div>`+
  `<div class="stats"><div class="stat"><p>Meu dia</p><strong>${cm.ok}/${cm.tot}</strong><small>${cm.atr+meusAtr.length?`<span class="neg">${cm.atr+meusAtr.length} em atraso</span>`:'rotinas concluídas'}</small></div><div class="stat"><p>Metas do trimestre</p><strong>${p?.m??0}%</strong></div><div class="stat"><p>Minhas demandas em aberto</p><strong>${D.chamados.filter(c=>c.resp===S.perfil&&c.st!=='Concluído').length}</strong></div><div class="stat"><p>Realizado no trimestre</p><strong>${r.total}</strong><small>${r.pct===null?'chamados no prazo: —':`chamados no prazo: ${r.pct}%`}</small></div></div>
  ${trimBloco()}
  ${anivBloco()}${ausBloco()}
  ${meusAtr.length?`<div class="panel late-p"><div class="ph"><h2>Ficaram para trás</h2><span>${meusAtr.length}</span></div>${meusAtr.map(o=>linOc(o.r,o.dia,true)).join('')}</div>`:''}
  ${(()=>{const pp=proxPrazos(5,true);return `<div class="panel"><div class="ph"><h2>Próximos prazos</h2>${novo('evento','Novo prazo')}</div>${pp.length?pp.map(linPrazo).join(''):vazio('Sem prazos próximos','')}</div>`})()}
  <div class="panel"><div class="ph"><h2>Meu dia</h2><span>${cm.ok} de ${cm.tot} concluídas</span></div>${meus.length?meus.map(r=>linOc(r,HJ)).join(''):vazio('Nenhuma rotina sua hoje','')}</div>
  ${(()=>{const L=itensMeta(MES_ATUAL,S.perfil).filter(x=>x.st!=='feito');return L.length?`<div class="panel"><div class="ph"><h2>Minhas metas de ${MESES[+MES_ATUAL.slice(5)-1]}</h2><button class="btn ghost" onclick="S.mM='';ir('metas')">Abrir</button></div>${L.slice(0,6).map(x=>{const s=stMeta(x.st);return `<div class="row"><div class="t"><b>${esc(x.t)}</b>${x.meta||x.prazo?`<span>${[x.meta,x.prazo?'até '+fmt(x.prazo):''].filter(Boolean).map(esc).join(' · ')}</span>`:''}</div><button class="tag ${s[2]}" onclick="stMetaCiclo('${x.id}')">${s[1]}</button></div>`}).join('')}</div>`:''})()}
  ${mt.filter(x=>x.s!=='feita').length?`<div class="panel"><div class="ph"><h2>Minhas tarefas avulsas</h2><span>${mt.filter(x=>x.s!=='feita').length} abertas</span></div>${mt.filter(x=>x.s!=='feita').map(linTar).join('')}</div>`:''}
  ${modOn('entregas')?`<div class="panel"><div class="ph"><h2>Entregas de departamentos sob sua responsabilidade</h2><span>${minhasEnt().filter(entAtrasada).length} em atraso</span></div>${minhasEnt().filter(e=>!e.recebido).length?minhasEnt().filter(e=>!e.recebido).map(linEnt).join(''):vazio('Nenhuma entrega pendente','')}</div>`:''}
  <div class="panel"><div class="ph"><h2>Destaques de ${MESES[HOJE.getMonth()]}</h2></div>${dm.length?`<div class="hl">${dm.map(cardDest).join('')}</div>`:vazio('Nenhum destaque neste mês','')}</div>`+note('No perfil de colaborador você vê só as suas tarefas, as suas horas e o seu feedback.')}
 const ea=modOn('entregas')?D.entregas.filter(entAtrasada):[],porDep={};const cd=contaDia(HJ),cAtr=atrasosCron();ea.forEach(e=>porDep[depNome(e.dep)]=(porDep[depNome(e.dep)]||0)+1);
 const alertaTop=ea.length?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${ic('alertas').replace('aria-hidden','style="width:16px;height:16px;vertical-align:-3px;margin-right:6px" aria-hidden')}Em atraso: ${Object.entries(porDep).map(([n,q])=>`${esc(n)} (${q})`).join(', ')}</span><button class="btn" onclick="ir('alertas')">Ver alertas</button></div>`:'';
 const B={andamento:()=>comecarBtn()+andamento(S.pDia||HJ,'pDia'),
 trimestre:()=>trimBloco(),
 registro:()=>{const L=registrosCron(addDia(HJ,-6),HJ),R=regResumo(L);return `<div class="panel dashp"><div class="ph"><h2>Realizado no cronograma · últimos 7 dias</h2><button class="btn" onclick="realizadoSheet(7)">Ver o que foi realizado</button></div>
  <div class="kgrid" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div class="glass kcard"><span>Realizado</span><b>${R.tot}</b><small>${Object.entries(R.porS).map(([k,v])=>`${esc(k)} ${v}`).join(' · ')||'nada marcado'}</small></div><div class="glass kcard"><span>Feito no próprio dia</span><b>${R.pct===null?'—':R.pct+'%'}</b><small>${R.noDia} de ${R.tot}</small></div><div class="glass kcard"><span>Feito depois do dia</span><b>${R.dep}</b><small>${R.refs.length?'de '+R.refs.slice(0,4).join(', '):'nenhum'}</small></div></div>
  ${podeAdmin()&&!CFG.ajusteOut26?`<p class="meta" style="margin:10px 0 0">Outubro ainda tem as marcações antigas. <button class="lnk" onclick="ajusteOutSheet()">Aplicar o ajuste de outubro</button></p>`:''}</div>`},
 aniver:()=>anivBloco(),ausencias:()=>ausBloco(),
 dash:()=>pode('chamados')||dir()?`<div class="panel dashp"><div class="ph"><h2>Painel dos chamados · ${esc(mesNome(MES_ATUAL))}</h2><button class="btn ghost" onclick="ir('chamados')">Abrir chamados</button></div>${kpisX(dashCh(MES_ATUAL+'-01',HJ))}</div>`:'',
 dashGraf:()=>{if(!(pode('chamados')||dir()))return '';const K=dashCh(MES_ATUAL+'-01',HJ);return `<div class="dashp"><div class="g2">${barrasX(K.cats,'Pedidos por categoria no mês')}${barrasX(K.deps,'Pedidos por setor no mês')}</div></div>`},
 dashAtr:()=>{if(!(pode('chamados')||dir()))return '';const K=dashCh(MES_ATUAL+'-01',HJ);return `<div class="dashp"><div class="g32">${atrasosX(K,8)}${remsX(K)}</div></div>`},
 numeros:()=>{const cm=D.chamados.filter(c=>diaCh(c).slice(0,7)===MES_ATUAL),mk=cm.filter(c=>chegadaDe(c)),ca=mk.filter(c=>chegadaDe(c)==='atrasado').length,ab=D.chamados.filter(c=>c.st!=='Concluído').length,da=D.chamados.filter(chAtrasado).length,ra=cAtr.length+atr.length;
  const k=(t,v,sub,cor,go)=>`<button class="kpi" onclick="${go}"><span>${t}</span><strong style="color:${cor}">${v}</strong><small>${sub}</small></button>`;
  return `<div class="kpis">${k('Cronograma de hoje',`${cd.ok}/${cd.tot}`,`${cd.tot?Math.round(cd.ok/cd.tot*100):0}% concluído`,'var(--ink)',"S.cTab='dia';S.cDia='';ir('rotinas')")}${k('Rotinas atrasadas',ra,ra?'precisam de atenção':'tudo em dia',ra?'var(--bad)':'var(--ink)',"S.cTab='dia';ir('rotinas')")}${k('Chamados em aberto',ab,`${D.chamados.filter(c=>c.st==='Aberto'&&!c.resp).length} sem responsável`,'var(--ink)',"ir('chamados')")}${k('Demandas atrasadas',da,'prazo de entrega vencido',da?'var(--bad)':'var(--ink)',"ir('chamados')")}${k('Pedidos que chegaram atrasados',mk.length?Math.round(ca/mk.length*100)+'%':'—',`${ca} de ${mk.length} no mês`,ca?'var(--bad)':'var(--ink)',"document.getElementById('pb_chegada')?.scrollIntoView({behavior:'smooth'})")}${modOn('entregas')?k('Entregas em atraso',ea.length,ea.length?[...new Set(ea.map(e=>depNome(e.dep)))].length+' departamentos':'outros departamentos',ea.length?'var(--bad)':'var(--ink)',"ir('entregas')"):''}</div>`},
 chegada:()=>chegadaPainel(true),cron:()=>cronPainel(),metas:()=>resumoMetas(MES_ATUAL),fech:()=>modOn('fechamento')&&pode('fechamento')?fechResumo():'',dem:()=>demResumo(),
 entregas:()=>modOn('entregas')?`<div class="panel"><div class="ph"><h2>Entregas por departamento</h2><button class="btn ghost" onclick="ir('entregas')">Ver entregas</button></div>${painelDep()}</div>`:'',
 atrasosDep:()=>modOn('entregas')?`<div class="panel"><div class="ph"><h2>Atrasos de departamentos</h2><span>${ea.length}</span></div>
   ${ea.length?ea.sort((a,b)=>a.prazo<b.prazo?-1:1).slice(0,5).map(e=>`<div class="row"><div class="t"><b>${esc(depNome(e.dep))}</b><span>${esc(e.item)} · ${-diasAte(e.prazo)} ${diasAte(e.prazo)<-1?'dias':'dia'} de atraso</span></div><button class="btn" onclick="cobrar('${esc(e.id)}')">Cobrar</button></div>`).join(''):vazio('Nenhum departamento em atraso','Todas as entregas estão dentro do prazo.')}
  </div>`:'',
 atencao:()=>`<div class="panel"><div class="ph"><h2>Precisa da sua atenção</h2></div><div class="pcap">
   ${cAtr.length?`<div class="row"><div class="t"><b>${cAtr.length} ${cAtr.length>1?'rotinas do cronograma atrasadas':'rotina do cronograma atrasada'}</b><span>${esc([...new Set(cAtr.flatMap(o=>rsDe(o.r)))].map(nomeDe).join(', '))}</span></div><button class="btn" onclick="S.cTab='dia';S.cDia='';ir('rotinas')">Ver</button></div>`:''}
   ${atr.map(x=>`<div class="row"><div class="t"><b>${esc(x.t)}</b><span>${esc(nomeDe(x.r))} · venceu ${fmt(x.prazo)}</span></div><span class="tag bad">Atrasada</span></div>`).join('')}
   ${pm?`<div class="row"><div class="t"><b>${pm} ${pm>1?'mensagens aguardando':'mensagem aguardando'} aprovação</b><span>WhatsApp da diretoria</span></div><button class="btn" onclick="ir('whats')">Revisar</button></div>`:''}
   ${fbPode()?colabs().filter(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]==='ne').map(p=>`<div class="row"><div class="t"><b>Feedback mensal de ${esc(p.n)}</b><span>${esc(mesNome(addMes(MES_ATUAL,-1)))} ainda não registrado</span></div><button class="btn" onclick="fbNovo({pessoa:'${p.id}',tipo:'Mensal'})">Escrever</button></div>`).join(''):''}
   ${D.chamados.filter(chAtrasado).map(c=>`<div class="row"><div class="t"><b>Demanda atrasada: ${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(respNome(c.resp))} · prazo ${fmt(c.prazo)}</span></div><button class="btn" onclick="detalheCh('${esc(c.id)}')">Ver</button></div>`).join('')}
   ${D.chamados.filter(c=>c.st==='Aberto').map(c=>`<div class="row"><div class="t"><b>Novo chamado: ${esc(c.assunto)}</b><span>${esc(depNome(c.dep))} · ${esc(c.tipo)}</span></div><button class="btn" onclick="ir('chamados')">Ver</button></div>`).join('')}
   ${!cAtr.length&&!atr.length&&!pm&&(!fbPode()||colabs().every(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]!=='ne'))?vazio('Tudo em dia','Nada pendente para você agora.'):''}
  </div></div>`,
 destaques:()=>`<div class="panel"><div class="ph"><h2>Destaques de ${MESES[HOJE.getMonth()]}</h2><button class="btn ghost" onclick="ir('destaques')">Ver todos</button></div>
   ${dm.length?dm.slice(0,3).map(d=>`<div class="row"><div class="t"><b>${esc(d.t)}</b><span>${esc(d.tipo)}${d.pessoa?' · '+esc(nomeDe(d.pessoa)):''}</span></div></div>`).join(''):vazio('Nenhum destaque neste mês','Registre conquistas e reconhecimentos.','destaque','Registrar destaque')}</div>`,
 prazos:()=>`<div class="panel"><div class="ph"><h2>Próximos prazos</h2><button class="btn ghost" onclick="ir('calendario')">Calendário</button></div>
   ${prox.length?prox.map(linPrazo).join(''):vazio('Sem prazos próximos','','evento','Registrar prazo')}<div style="margin-top:8px">${novo('evento','Novo prazo')}</div></div>`,
 estrutura:()=>`<div class="panel"><div class="ph"><h2>Estruturação do departamento</h2>${podeAdmin()?'<button class="btn ghost" onclick="editEstr()">Atualizar</button>':''}</div>
   <div class="prog">${[['Processos mapeados',+CFG.mapeados||0,+CFG.meta||25],['Procedimentos documentados',D.procedimentos.length,+CFG.meta||25],['Melhorias implantadas',D.sugestoes.filter(s=>s.e==='Implantada').length,Math.max(D.sugestoes.length,1)],['Rotinas do cronograma com responsável',D.cronograma.filter(r=>rsDe(r).length).length,Math.max(D.cronograma.length,1)]].map(b=>`<div><p>${b[0]}<span>${b[1]}/${b[2]}</span></p><div class="bar"><i style="width:${Math.min(100,b[1]/b[2]*100)}%"></i></div></div>`).join('')}</div></div>`};
 return head(hojeTxt(),`${real()&&ME.uid?avU(ME.uid).replace('class="av"','class="av avg"'):''}${saud()}, <em>${esc(primeiroNome())}</em>`,'Visão geral do departamento hoje.',`<span class="chip">Competência ${mesCurto(MES_ATUAL)}</span>${podeReuExp()?`<button class="btn pri" onclick="emitirSheet()">Emitir relatório ou slides</button>`:''}`)+alertaTop+ban+`<div class="porg">${dir()||podeAdmin()?`<button class="btn ghost" onclick="cfgResumo()" title="E-mail com os atrasos no dia e hora que você escolher">Resumo e avisos${cfgRes().ativo||cfgAv().ativo?' · ligado':''}</button><button class="btn ghost" onclick="teamsSheet()" title="Resumo da semana no Teams do diretor">Resumo no Teams</button>${podeReuExp()?`<button class="btn ghost" onclick="linkSheet()" title="Painel ao vivo para quem tiver o link, sem login">Link público${CFG.linkPublico?.ativo?' · ligado':''}</button>`:''}`:''}<button class="btn ghost" onclick="orgPainel()" title="Mudar a ordem dos blocos ou esconder algum">Organizar painel</button></div>`+`<div class="pgrid">${painelOrdem().filter(k=>B[k]&&!painelOculto().includes(k)).map(k=>{const h=B[k]();return h?`<section class="pb ${BLOCO_LARGO.includes(k)?'f':'h'}" id="pb_${k}"><button class="pbx" onclick="painelVer('${k}',false)" title="Tirar este bloco do painel" aria-label="Tirar ${esc((BLOCOS_PAINEL.find(b=>b[0]===k)||[k,k])[1])} do painel">×</button>${h}</section>`:''}).join('')}</div>`+
 (painelOculto().filter(k=>BLOCOS_PAINEL.some(b=>b[0]===k)).length?`<div class="pocult"><span class="meta">Fora do painel, clique para voltar:</span>${painelOculto().filter(k=>BLOCOS_PAINEL.some(b=>b[0]===k)).map(k=>`<button class="chip" onclick="painelVer('${k}',true)">+ ${esc((BLOCOS_PAINEL.find(b=>b[0]===k)||[k,k])[1])}</button>`).join('')}</div>`:'')},

destaques(){const l=D.destaques.filter(d=>d.mes===S.mesDest);
 return head('Reconhecimento','Destaques do mês','Conquistas, metas batidas e reconhecimentos da equipe.',mesNav('mesDest')+(pode('feedbacks')?novo('destaque','Registrar destaque'):''))+
 (l.length?`<div class="hl">${l.map(cardDest).join('')}</div>`:`<div class="panel">${vazio(`Nenhum destaque em ${mesNome(S.mesDest)}`,'Registre o que a equipe conquistou no mês.',pode('feedbacks')?'destaque':null,'Registrar destaque')}</div>`)+
 (pode('feedbacks')?note('Os destaques do mês entram automaticamente no relatório do trimestre e podem virar uma mensagem de reconhecimento no WhatsApp.'):'')},

metas(){const mes=S.mM||MES_ATUAL,ps=colabs(),eu=ps.find(p=>p.id===S.perfil),outros=ps.filter(p=>p.id!==S.perfil);
 const nav=`<div class="seg"><button onclick="S.mM=addMes('${mes}',-1);render();salvarEstado()" aria-label="Mês anterior">‹</button><span>${mesNome(mes)}</span><button onclick="S.mM=addMes('${mes}',1);render();salvarEstado()" aria-label="Próximo mês">›</button></div>${mes!==MES_ATUAL?`<button class="btn" onclick="S.mM='';render()">Mês atual</button>`:''}`;
 return head('Planejamento do mês','Metas e <em>a fazer</em>','Escolha o mês, escreva a meta e o que precisa ser feito. Cada pessoa edita a sua lista; o departamento é de todos.',nav)+
 `<div class="mgrid">${cardMeta(mes,'dep','Departamento')}${dir()?cardMeta(mes,'dir','Diretoria <span class="meta">(você)</span>'):''}${eu?cardMeta(mes,eu.id,`${esc(eu.n)} <span class="meta">(você)</span>`):''}${outros.map(p=>cardMeta(mes,p.id,esc(p.n))).join('')}${!dir()&&(itensMeta(mes,'dir').length||notaMeta(mes,'dir')?.texto)?cardMeta(mes,'dir','Diretoria'):''}</div>`+
 note('Clique na situação para passar de A fazer para Em andamento e Feito. Use "Levar pendentes" para copiar o que ficou para o mês seguinte.')},
rotinas(){const t=S.cTab||'dia',pc=podeEditRot();
 const btns=`${pc?`<button class="btn" onclick="editRot()">Nova rotina fixa</button>`:''}<button class="btn" onclick="editEv()">Novo prazo</button>${podeAdmin()?`<button class="btn" onclick="cfgCron()">Ajustes</button>`:''}`;
 return head(`${S.tri.q}º trimestre de ${S.tri.ano}`,'Cronograma do <em>departamento</em>',`WAE: ${FLUXO_WAE.join(' → ')}. Protheus: ${procs().filter(x=>!['Comprovantes','Controladoria','Impressão de caixas'].includes(x)).join(' → ')}. Pagamento em D-${PAG_D()}. As rotinas do dia já vêm prontas: cada pessoa clica no que fez.`,btns)+cronAbas()+
 (t==='semana'?cronSemana():t==='quem'?cronQuem():t==='rotinas'?cronRotinas():t==='tri'?cronTri():cronDia())+
 (t==='dia'?note('Cada pessoa clica no quadrado do que ela fez. Se outra pessoa também fez, ela marca o dela. O diretor vê no Painel quem fez o quê, com a hora.'):'')},

calendario(){
 const [y,m]=S.cal.split('-').map(Number),pri=new Date(y,m-1,1).getDay(),nd=new Date(y,m,0).getDate();
 const ev={};const put=(d,t,c)=>{if(d&&d.slice(0,7)===S.cal)(ev[+d.slice(8,10)]=ev[+d.slice(8,10)]||[]).push([t,c])};
 const fimM=isoD(new Date(y,m,0)),evs=D.eventos.filter(vejoEv);
 evs.forEach(e=>{for(const d of diasDe(S.cal+'-01',fimM))if(evOcorre(e,d))put(d,(e.hora?e.hora+' ':'')+e.t,corEv(e))});
 minhas().forEach(t=>put(t.prazo,t.t,t.s==='feita'?'ok':atrasada(t)?'bad':'ne'));
 const RG=registrosCron(S.cal+'-01',fimM).filter(o=>(!S.calPes||o.pid===S.calPes)&&(!S.calEt||o.g===S.calEt)),RR=registrosCron('','').filter(o=>o.ref.slice(0,7)===S.cal&&o.done!==o.ref&&!o.par),ordL=g=>{const i=[...procs(),'Comprovantes','Controladoria','Impressão de caixas'].indexOf(g);return i<0?99:i};
 const porDia={};RG.forEach(o=>{(porDia[o.done]=porDia[o.done]||[]).push(o)});
 const refDia={};RR.forEach(o=>{const m=refDia[o.ref]=refDia[o.ref]||{};(m[letraS(o.g,o.sis)]=m[letraS(o.g,o.sis)]||new Set()).add(fmt(o.done))});
 let c='';['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].forEach(d=>c+=`<div class="dn">${d}</div>`);
 for(let i=0;i<pri;i++)c+='<div></div>';
 for(let d=1;d<=nd;d++){const iso=`${S.cal}-${pad(d)}`;const gx={};(porDia[iso]||[]).filter(o=>(ETAPAS_SIS[o.sis]||procs()).includes(o.g)).forEach(o=>{const k=`${o.sis}|${o.g}`;const g0=gx[k]=gx[k]||{...o,n:[],refs:new Set(),todosNt:true,algumPar:false};g0.refs.add(o.ref);if(!o.nt)g0.todosNt=false;if(o.par)g0.algumPar=true;g0.n.push(`${o.t}${o.nome?' · '+o.nome:''}${o.hora?' · '+o.hora:''}`)});
  const fx=Object.values(gx).map(o=>({...o,nt:o.todosNt,par:o.algumPar&&!o.todosNt})).sort((a,b)=>(a.sis==='Protheus')-(b.sis==='Protheus')||ordL(a.g)-ordL(b.g)),rf=null;
  c+=`<div class="day ${iso===HJ?'today':''}${fx.length||rf?' clic':''}" ${fx.length||rf?`onclick="diaFeitosSheet('${iso}')" title="Ver o que foi feito"`:''}>${d}${fx.length?`<span class="lets">${fx.map(o=>`<span class="let ${o.sis==='Protheus'?'pro':''} ${o.par?'par':''} ${o.nt?'nt':''}" title="${esc(o.sis)} · ${esc(nomeEtS(o.g,o.sis))}${[...o.refs].some(r=>r!==iso)?' · referente a '+[...o.refs].sort().map(fmt).join(', '):''}${o.par?' · em parte':''}${o.nt?' · não teve no dia':''}: ${esc(o.n.join('; '))}"><b>${esc(letraS(o.g,o.sis))}</b>${[...o.refs].some(r=>r!==iso)?'<i class="refp" aria-hidden="true"></i>':''}</span>`).join('')}</span>`:''}${rf?`<span class="meta" style="font-size:10.5px;line-height:1.3">${Object.entries(rf).map(([l,ds])=>`${esc(l)} feito em ${[...ds].join(', ')}`).join(' · ')}</span>`:''}${(ev[d]||[]).slice(0,3).map(e=>`<span class="ev ${e[1]}" title="${esc(e[0])}">${esc(e[0])}</span>`).join('')}${(ev[d]||[]).length>3?`<span class="meta">+${ev[d].length-3}</span>`:''}</div>`}
 return head('Agenda do departamento','Calendário','O que foi feito em cada dia, reuniões e obrigações.',mesNav('cal')+novo('evento','Novo prazo'))+
 `<div class="filtros cronf"><button class="chip ${!S.calPes?'on':''}" onclick="S.calPes='';render()">Todas as pessoas</button>${colabs().map(p=>`<button class="chip ${S.calPes===p.id?'on':''}" onclick="S.calPes='${esc(p.id)}';render()">${esc(p.n)}</button>`).join('')}<span class="sep"></span><button class="chip ${!S.calEt?'on':''}" onclick="S.calEt='';render()">L, B e C</button>${[...new Set(sists().flatMap(x=>ETAPAS_SIS[x]||[]))].map(g=>`<button class="chip ${S.calEt===g?'on':''}" onclick="S.calEt='${esc(g)}';render()">${esc(g)}</button>`).join('')}</div>`+
 (podeAdmin()&&!CFG.ajusteOut26?`<div class="banner"><span>Outubro ainda está com as marcações antigas. Aplique o ajuste para deixar L, B e C como combinado (01 a 23/10, e L e B em 26 e 27/10).</span><button class="btn pri" onclick="ajusteOutSheet()">Aplicar o ajuste de outubro</button></div>`:'')+
 `<div class="panel"><div class="cal">${c}</div></div><div class="legend"><span><b class="let">L</b> Lançamento / Lançar</span><span><b class="let">B</b> Baixa</span><span><b class="let">C</b> Conciliação / Conciliar</span><span><b class="let">P</b> Pagar (Protheus)</span><span><b class="let">L</b> WAE</span><span><b class="let pro">L</b> Protheus</span><span><b class="let par">L</b> feito em parte</span><span><b class="let nt">L</b> não teve no dia</span><span><b class="let">L<i class="refp"></i></b> inclui dia anterior</span></div><div class="legend"><span><i style="background:var(--accent)"></i>Reunião</span><span><i style="background:var(--warn)"></i>Obrigação</span><span><i style="background:var(--bad)"></i>Fechamento ou atrasada</span><span><i style="background:var(--ok)"></i>Concluída</span></div><p class="meta" style="margin:0">Cada letra aparece uma vez no dia em que foi feita. O pontinho indica que inclui dia anterior. Clique no dia para ver o que foi feito, a que dia se refere, por quem e a que horas.</p>`+
 (()=>{const L=evs.filter(e=>(e.rep||'unica')!=='unica'?(!e.fim||e.fim>=S.cal+'-01')&&(!e.data||e.data<=fimM):(e.data||'').slice(0,7)===S.cal).sort((a,b)=>((a.rep||'unica')==='unica')-((b.rep||'unica')==='unica')||(a.data||'').localeCompare(b.data||''));
  return `<div class="panel"><div class="ph"><h2>Prazos e compromissos de ${mesNome(S.cal)}</h2><span>${L.length}</span></div>${L.length?L.map(e=>`<div class="row"><div class="t"><b>${esc(e.t)}</b><span>${esc(evTxt(e))} · ${esc(quemEv(e))}${e.obs?' · '+esc(e.obs):''}</span></div><span class="tag ${corEv(e)}">${esc(e.tipo||'Outro')}</span>${podeEditRot()?`<button class="btn ghost" onclick="editEv('${e.id}')">Editar</button>`:''}</div>`).join(''):vazio('Nada neste mês','','evento','Novo prazo')}</div>`})()},

equipe(){const l=pode('feedbacks')?colabs():D.equipe.filter(e=>e.id===S.perfil);const ft={Realizado:'ok',Agendado:'wa',Pendente:'bad'};
 return head(`${S.tri.q}º trimestre de ${S.tri.ano}`,'Equipe e feedbacks','Metas, feedback e o que cada pessoa realizou no trimestre.',triNav()+`<button class="btn" onclick="ausSheet()">Férias e ausências</button>`+(pode('cadastros')?novo('pessoa','Cadastrar colaborador'):''))+
 (pode('feedbacks')&&l.length>1?`<div class="panel"><div class="ph"><h2>Realizado pela equipe no trimestre</h2><span>${mesesTri(S.tri).map(mesCurto).join(' · ')}</span></div>${tabelaTri(l)}</div>`:'')+
 (l.length?`<div class="cards">${l.map(e=>{const r=realizadoTri(e.id,S.tri);return `<div class="panel"><div style="display:flex;align-items:center;gap:12px">${avP(e.id,e.n)}<div style="flex:1;min-width:0"><b style="font-weight:500">${esc(e.n)}</b><div style="font-size:12px;color:var(--ink-3)">${esc(e.c)}</div></div>${fbPode()?(()=>{const s=seloMes(e.id,addMes(MES_ATUAL,-1));return `<span class="tag ${s[0]}" title="Feedback mensal do mês anterior">${s[0]==='ok'?'Feedback enviado':s[0]==='wa'?'Feedback registrado':s[0]==='nd'?'Sem feedback previsto':'Feedback pendente'}</span>`})():''}</div>
  <div style="margin-top:16px"><p style="margin:0 0 6px;display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink-2)">Metas do trimestre<span style="font-variant-numeric:tabular-nums">${+e.m||0}%</span></p><div class="bar"><i style="width:${Math.min(100,+e.m||0)}%"></i></div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px"><div class="stat" style="padding:10px 12px;background:var(--line-soft);border-radius:8px"><p>Demandas realizadas</p><strong style="font-size:17px">${r.total}</strong><small>${r.ch} chamados · ${r.rot} rotinas</small></div><div class="stat" style="padding:10px 12px;background:var(--line-soft);border-radius:8px"><p>Chamados no prazo</p><strong style="font-size:17px">${r.pct===null?'—':r.pct+'%'}</strong></div></div>
  ${r.etapas.length?`<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${etapasTxt(r.etapas)}</div>`:''}
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;font-size:12px;color:var(--ink-3);gap:8px;flex-wrap:wrap"><span>${esc(e.vinc||'')}</span>${pode('cadastros')||fbPode()?`<span style="display:flex;gap:6px">${editar('pessoa',e.id)}${fbPode()?`<button class="btn pri" onclick="S.fbP='${esc(e.id)}';fbIr('fbpessoa')">Feedbacks</button>`:''}</span>`:''}</div></div>`}).join('')}</div>`:`<div class="panel">${vazio('Nenhum colaborador cadastrado','Cadastre a equipe para começar.','pessoa','Cadastrar colaborador')}</div>`)+
 note(pode('feedbacks')?'Cada colaborador vê apenas o próprio cartão. Dados de avaliação são pessoais e seguem a LGPD.':'Este é o seu resumo. Só você e o diretor têm acesso.')},


whats(){
 return head('Comunicação','WhatsApp da diretoria','Nenhuma mensagem sai sem a sua aprovação.',novo('mensagem','Nova mensagem'))+
 (D.mensagens.length?[...D.mensagens].sort((a,b)=>(a.s==='aprovada')-(b.s==='aprovada')).map(m=>`<div class="panel"><div class="ph"><h2>${esc(m.tipo)} · ${esc(m.para)}</h2><span class="tag ${m.s==='aprovada'?'ok':'wa'}">${m.s==='aprovada'?'Aprovada e agendada':'Aguardando aprovação'}</span></div>
  <div class="bubble">${esc(m.txt)}</div><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><span class="meta">Envio: ${m.quando?fmt(m.quando.slice(0,10))+' às '+m.quando.slice(11,16):'—'}</span><div style="display:flex;gap:8px">${editar('mensagem',m.id)}${m.s!=='aprovada'?`<button class="btn pri" onclick="ap('${esc(m.id)}')">Aprovar envio</button>`:''}</div></div></div>`).join(''):`<div class="panel">${vazio('Nenhuma mensagem','Crie uma mensagem a partir de um modelo.','mensagem','Nova mensagem')}</div>`)+
 note('No sistema real, o envio usa a API oficial do WhatsApp Business, com modelos aprovados pela Meta.')},

proc(){const b=S.busca.toLowerCase(),l=D.procedimentos.filter(p=>(p.t+' '+p.a).toLowerCase().includes(b));
 return head('Base de conhecimento','Central de procedimentos','Como o departamento executa cada atividade.',novo('procedimento','Novo procedimento'))+
 `<input class="inp" id="busca" placeholder="Buscar: conciliação, notas, fechamento" value="${esc(S.busca)}" oninput="S.busca=this.value;renderList()">
 <div class="panel" id="plist">${procList(l)}</div>`},

melhorias(){const ab=S.sugAba==='sistema'?'sistema':'reuniao',l=D.sugestoes.filter(s=>sugCat(s)===ab);
 const tabs=`<div class="tabs big" role="tablist" aria-label="Tipo de sugestão">${SUG_CAT.map(([k,n])=>{const q=D.sugestoes.filter(s=>sugCat(s)===k&&!sugFeita(s)).length;return `<button role="tab" aria-selected="${ab===k}" class="${ab===k?'on':''}" onclick="S.sugAba='${k}';render()">${n} <span class="meta">${q}</span></button>`}).join('')}</div>`;
 const topo=head('Ideias da equipe','Melhorias e sugestões','Assuntos para levar às reuniões da equipe e ideias para melhorar o sistema.',`${podeAdmin()?`<button class="btn ghost" onclick="libReuExp()" title="Quem pode baixar o relatório e os slides das reuniões">Relatório e slides: ${CFG.reuExpTodos?'liberados para a equipe':'só admin e diretor'}</button>`:''}<button class="btn pri" onclick="sugSheet(null,'${ab}')">${ab==='reuniao'?'Novo assunto':'Nova sugestão'}</button>`)+tabs;
 if(!l.length)return topo+`<div class="panel">${vazio(ab==='reuniao'?'Nenhum assunto para as reuniões':'Nenhuma ideia para o sistema',ab==='reuniao'?'Anote aqui o que precisa ser falado e escolha em qual reunião.':'Toda ideia de melhoria começa aqui.')}</div>`;
 if(ab==='sistema')return topo+`<div class="panel">${[...l].sort((x,y)=>sugFeita(x)-sugFeita(y)||(y.v||0)-(x.v||0)).map(linSug).join('')}</div>`;
 const R=proxReunioes(4),ks=new Set([...R.map(r=>`${r.d}|${r.h}`),...l.map(reuKey)]);
 const K=[...ks],fut=K.filter(k=>k&&k.split('|')[0]>=HJ).sort(),sem=K.filter(k=>!k),pas=K.filter(k=>k&&k.split('|')[0]<HJ).sort().reverse();
 const pasPend=pas.filter(k=>l.some(x=>reuKey(x)===k&&!sugFeita(x))),pasOk=pas.filter(k=>!pasPend.includes(k));
 return topo+(R.length?'':`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Nenhuma reunião cadastrada no calendário. Cadastre a reunião semanal da equipe em Calendário como "Reunião" que ela aparece aqui.</span><button class="btn" onclick="ir('calendario')">Abrir calendário</button></div>`)+
 `<div class="reugrid">${[...pasPend,...fut,...sem].map(k=>reuCard(k,l)).join('')}</div>`+
 (pasOk.length?`<details class="panel dmais"><summary>Reuniões anteriores <span class="meta">${pasOk.length}</span></summary><div class="reugrid" style="margin-top:12px">${pasOk.slice(0,24).map(k=>reuCard(k,l)).join('')}</div></details>`:'')+
 note('Abra a reunião para criar um assunto. Qualquer pessoa da equipe pode criar assuntos e responder a cada um, para ninguém esquecer de falar no dia.')},
/* ---------- sobre o sistema (só admin): o que o Prumo tem hoje, com números ao vivo e o link de cada parte.
   A lista vem do próprio menu: uma área nova aparece aqui sozinha. Novidades: acrescentar em NOVIDADES a cada mudança. ---------- */
sistema(){if(!podeAdmin()&&!dir())return V.painel();
 const ok=f=>{try{return f()}catch(e){return ''}},n=(x,s1,sN)=>`${x} ${x===1?s1:sN}`,oc=ocultos();
 const vs=(()=>{const sc=[...document.querySelectorAll('script[src]')].map(x=>x.getAttribute('src')).find(x=>/app\.js/.test(x))||'';return (sc.match(/v=(\d+)/)||[])[1]||''})();
 const L=MENU.filter(([k])=>k!=='sistema').map(([k,nome])=>{const d=SOBRE[k]||['Área do sistema.',()=>''],vivo=ok(d[1]),oculta=!NAO_OCULTA.includes(k)&&oc.includes(k),desl=(['fechamento','entregas'].includes(k)&&!modOn(k));
  return `<div class="sb-it ${oculta||desl?'off':''}"><span class="sb-ic">${ic(k)}</span><div class="t"><b>${esc(nome)}${oculta?' <span class="tag ne">oculta no menu</span>':''}${desl?' <span class="tag ne">módulo desligado</span>':''}</b><span>${esc(d[0])}</span>${vivo?`<small>${vivo}</small>`:''}</div>${oculta?(podeAdmin()?`<button class="btn ghost" onclick="menuSheet()">Mostrar</button>`:''):desl?'':`<button class="btn" onclick="ir('${k}')">Abrir</button>`}</div>`}).join('');
 const T=realizadoPer(null,mesesTri(triAgora())[0]+'-01',HJ);
 return head('Administração','Sobre o <em>sistema</em>','O que o Prumo tem hoje, com os números de agora e o atalho para cada parte. Atualiza sozinho conforme o sistema é usado e ganha partes novas.',podeAdmin()?`<button class="btn" onclick="menuSheet()">Mostrar e ocultar áreas</button>`:'')+
 `<div class="panel sb-res"><div class="ph"><h2>O que o Prumo faz hoje</h2></div><p>${esc(RESUMO_PRUMO)}</p></div>`+
 `<div class="stats"><div class="stat"><p>Áreas no sistema</p><strong>${MENU.length-1}</strong><small>${oc.filter(k=>!NAO_OCULTA.includes(k)).length} ocultas no menu</small></div><div class="stat"><p>Pessoas com acesso</p><strong>${D.acessos.filter(a=>a.ativo!==false).length}</strong><small>${n(colabs().length,'pessoa na equipe','pessoas na equipe')}</small></div><div class="stat"><p>Chamados registrados</p><strong>${D.chamados.length}</strong><small>${D.chamados.filter(c=>c.st!=='Concluído').length} em aberto</small></div><div class="stat"><p>Realizado no trimestre</p><strong>${T.total}</strong><small>${T.ch} chamados · ${T.rot} rotinas</small></div></div>
 <div class="panel"><div class="ph"><h2>Partes do sistema</h2><span>${MENU.length-1} áreas${vs?` · versão ${esc(vs)}`:''}</span></div><div class="sb-list">${L}</div></div>
 <div class="panel"><div class="ph"><h2>Novidades recentes</h2><span>últimas mudanças no Prumo</span></div>${NOVIDADES.slice(0,15).map(([d,t])=>`<div class="row"><span class="meta" style="width:52px">${fmt(d)}</span><div class="t"><b style="font-weight:400">${esc(t)}</b></div></div>`).join('')}</div>`+
 `<div class="sb-fim"><div class="sb-logo">${document.querySelector('.brand .mark')?.innerHTML||''}</div><div><b>Prumo · Financeiro e Contábil</b><span>Criado por ${esc(CFG.criador||'Natalia Araujo')} em ${esc(PRUMO_INICIO)} · ${PRUMO_ATUALIZACOES} atualizações publicadas${vs?` · versão ${esc(vs)}`:''}</span></div>${podeAdmin()?`<button class="btn ghost" onclick="editCriador()">Editar nome</button>`:''}</div>`+
 note('Só administradores e o diretor veem esta tela. Os números são do momento em que você abre e mudam sozinhos conforme a equipe usa o Prumo.')},
relat(){const tf=D.tarefas,f=tf.filter(x=>x.s==='feita').length,ms=mesesTri(S.tri),dq=D.destaques.filter(d=>ms.includes(d.mes));
 return head('Para as reuniões','Relatórios','Montados a partir de tudo o que foi registrado no portal.',triNav())+
 `<div class="panel"><div class="ph"><h2>Situação atual</h2><span>atualizado agora</span></div>
 ${[['Rotinas concluídas',`${f} de ${tf.length}`],['Tarefas atrasadas',tf.filter(atrasada).length],['Chamados em aberto',D.chamados.filter(c=>c.st!=='Concluído').length],['Chamados fora do prazo da política',D.chamados.filter(c=>c.fora).length],['Feedbacks mensais do mês anterior registrados',`${colabs().filter(p=>['ok','wa'].includes(seloMes(p.id,addMes(MES_ATUAL,-1))[0])).length} de ${colabs().filter(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]!=='nd').length}`],['Mensagens aprovadas',D.mensagens.filter(m=>m.s==='aprovada').length],['Sugestões implantadas',D.sugestoes.filter(s=>s.e==='Implantada').length]].map(r=>`<div class="row"><div class="t"><b style="font-weight:400">${r[0]}</b></div><span style="font-variant-numeric:tabular-nums;font-weight:500">${r[1]}</span></div>`).join('')}</div>
 <div class="panel"><div class="ph"><h2>Entregas dos departamentos</h2><span>pontualidade e atrasos</span></div>${painelDep()}</div>
 <div class="panel"><div class="ph"><h2>Realizado no ${S.tri.q}º trimestre</h2><span>${ms.map(mesCurto).join(' · ')}</span></div>${tabelaTri(colabs())}</div>
 <div class="panel"><div class="ph"><h2>Destaques do trimestre</h2><span>${dq.length}</span></div>${dq.length?`<div class="hl">${dq.map(cardDest).join('')}</div>`:vazio('Nenhum destaque registrado no trimestre','')}</div>`}};

function procList(l){return l.length?l.map(p=>`<div class="row"><div class="t"><b>${esc(p.t)}</b><span>${esc(p.a)}${p.formato?' · '+esc(p.formato):''}</span></div>${p.link&&/^https?:\/\//.test(p.link)?`<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">Abrir</a>`:''}${editar('procedimento',p.id)}</div>`).join(''):vazio(S.busca?'Nada encontrado':'Nenhum procedimento ainda',S.busca?'Tente outra palavra.':'Documente o passo a passo das atividades.')}
function renderList(){const b=S.busca.toLowerCase();document.getElementById('plist').innerHTML=procList(D.procedimentos.filter(p=>(p.t+' '+p.a).toLowerCase().includes(b)))}

/* ---------- ações rápidas ---------- */
function tg(id){const t=D.tarefas.find(x=>x.id===id);if(!t)return;const s=t.s==='aberta'||!t.s?'andamento':t.s==='andamento'?'feita':'aberta';patch('tarefas',id,{s,concluida:s==='feita'?HJ:null},s==='feita'?'Rotina concluída':null,`Marcou a rotina "${t.t}" como ${stTar({...t,s})[1].toLowerCase()}`)}
async function receber(id,dia,lg){dia=dia||HJ;const e=D.entregas.find(x=>x.id===id);if(!e)return false;
 const ok=await patch('entregas',id,{recebido:dia},e.prazo&&dia>e.prazo?'Recebida com atraso':'Recebida no prazo',lg||`Marcou como recebida a entrega "${e.item}" de ${depNome(e.dep)}${e.prazo&&dia>e.prazo?' (com atraso)':''}`);
 if(ok&&e.rec&&e.rec!=='Única'&&e.prazo){const [y,m,d]=e.prazo.split('-').map(Number);let np;
  if(e.rec==='Semanal')np=isoD(new Date(y,m-1,d+7));else{const ult=new Date(y,m+1,0).getDate();np=isoD(new Date(y,m,Math.min(d,ult)))}
  const {id:_,recebido,...b}=e;salvar('entregas',null,{...b,prazo:np,recebido:'',criado:HJ},`Próxima entrega criada para ${fmt(np)}`,false)}return ok}
function cobrar(id){const e=D.entregas.find(x=>x.id===id);if(!e)return;const dp=depDe(e.dep),d=-diasAte(e.prazo);
 salvar('mensagens',null,{tipo:'Lembrete',para:`${dp?.n||'Departamento'}${dp?.contato?' · '+dp.contato:''}`,quando:`${HJ}T${pad(Math.min(HOJE.getHours()+1,18))}:00`,txt:`Olá! A entrega "${e.item}" estava prevista para ${fmt(e.prazo)} e ainda não chegou ao financeiro e contábil (${d} ${d>1?'dias':'dia'} de atraso). Pode nos enviar ou informar uma nova data? Obrigado.`,s:'aguarda',criado:HJ},'Cobrança criada. Aprove o envio no WhatsApp.',`Criou cobrança para ${dp?.n||'departamento'} sobre "${e.item}"`)}
function ap(id){patch('mensagens',id,{s:'aprovada'},'Mensagem aprovada e agendada',`Aprovou mensagem de WhatsApp para ${D.mensagens.find(m=>m.id===id)?.para||''}`)}
function fb(id){patch('equipe',id,{f:'Realizado',fd:HJ},'Feedback registrado',`Registrou feedback de ${nomeDe(id)}`)}
/* ---------- melhorias: assuntos para as reuniões e ideias para o sistema ---------- */
const SUG_CAT=[['reuniao','Para reuniões'],['sistema','Para o sistema']];
const SUG_ST={reuniao:['A falar','Falado'],sistema:['Nova','Em análise','Em teste','Implantada']};
const sugCat=s=>s.cat==='sistema'?'sistema':'reuniao';
const sugFeita=s=>sugCat(s)==='reuniao'?s.e==='Falado':s.e==='Implantada';
const sugAutor=s=>respNome(s.a||'dir'); // no formulário antigo, o diretor ficava com o campo vazio
const autoresSug=()=>[['dir','Diretor'],...colabs().map(p=>[p.id,p.n])];
const reuTxt=(d,h)=>`${SEM[new Date(d+'T12:00').getDay()]} ${fmtAno(d)}${h?' às '+h:''}`;
function proxReunioes(n){const ate=addDia(HJ,70),L=[];
 for(const e of D.eventos.filter(e=>e.tipo==='Reunião'&&vejoEv(e)))for(const d of diasDe(HJ,ate))if(evOcorre(e,d))L.push({d,h:e.hora||'',t:e.t||''});
 return L.sort((x,y)=>x.d<y.d?-1:x.d>y.d?1:(x.h||'').localeCompare(y.h||'')).slice(0,n)}
function linSug(s){const c=sugCat(s),cri=s.criado||(s.criadoEm||'').slice(0,10),cor={Implantada:'ok','Em teste':'ac','Em análise':'wa',Falado:'ok','A falar':'ac'}[s.e]||'ne';
 return `<div class="row"><button class="btn" onclick="vt('${esc(s.id)}')" aria-label="Votar" title="Apoiar esta sugestão" style="font-variant-numeric:tabular-nums">▲ ${s.v||0}</button><div class="t"><b>${esc(s.t)}</b>${s.obs?`<span style="color:var(--ink-2)">${esc(s.obs)}</span>`:''}<span>Sugerida por ${esc(sugAutor(s))}${cri?` · criada em ${fmtAno(cri)}`:''}${c==='reuniao'&&s.reuData&&sugFeita(s)?` · reunião de ${esc(reuTxt(s.reuData,s.reuHora))}`:''}${s.faladoEm?` · falado em ${fmtAno(s.faladoEm)}`:''}${c==='reuniao'&&topDe(s).length?` · ${topDe(s).length} ${topDe(s).length===1?'resposta':'respostas'}`:''}</span></div><span class="tag ${cor}">${esc(s.e||(c==='reuniao'?'A falar':'Nova'))}</span>${c==='reuniao'&&!sugFeita(s)?`<button class="btn ghost" onclick="sugFalado('${esc(s.id)}')">Falado ✓</button>`:''}<button class="btn ghost" onclick="sugSheet('${esc(s.id)}')" aria-label="Editar">Editar</button></div>`}
/* tópicos: qualquer pessoa acrescenta o que não pode esquecer de falar no assunto */
const topDe=s=>Array.isArray(s.topicos)?s.topicos:[];
const reuKey=s=>s.reuData?`${s.reuData}|${s.reuHora||''}`:'';
const reuTit=k=>{const [d,h]=k.split('|');return d?`Reunião de ${reuTxt(d,h)}`:'Assuntos sem reunião marcada'};
function reuCard(k,l){const it=l.filter(x=>reuKey(x)===k),pe=it.filter(x=>!sugFeita(x)),rs=it.reduce((a,x)=>a+topDe(x).length,0),d=k.split('|')[0],ev=d?proxReunioes(40).find(r=>`${r.d}|${r.h}`===k):null;
 const tag=!d?'':d===HJ?'<span class="tag ac">hoje</span>':d<HJ?(pe.length?'<span class="tag wa">já passou · há assuntos a falar</span>':'<span class="tag ok">realizada</span>'):'';
 return `<div class="panel reucard"><div class="ph"><h2>${esc(reuTit(k))}</h2>${tag}</div>${ev?.t&&!/^reuni[aã]o$/i.test(ev.t)?`<p class="meta" style="margin:0">${esc(ev.t)}</p>`:''}
 <p class="reunum">${it.length?`<b>${pe.length}</b> ${pe.length===1?'assunto a falar':'assuntos a falar'} · <b>${it.length-pe.length}</b> ${it.length-pe.length===1?'falado':'falados'} · <b>${rs}</b> ${rs===1?'resposta':'respostas'}`:'Nenhum assunto ainda.'}</p>
 ${it.length?`<ul class="reuprev">${it.slice(0,4).map(x=>`<li class="${sugFeita(x)?'ok':''}">${esc(x.t)}${topDe(x).length?` <span class="meta">· ${topDe(x).length}</span>`:''}</li>`).join('')}${it.length>4?`<li class="meta">e mais ${it.length-4}</li>`:''}</ul>`:''}
 <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn pri" onclick="reuSheet('${esc(k)}')">${it.length?'Abrir reunião':'Abrir e criar assunto'}</button>${it.length&&podeReuExp()?`<button class="btn" onclick="baixarReu('${esc(k)}','rel')">Relatório</button><button class="btn" onclick="baixarReu('${esc(k)}','slides')">Slides</button>`:''}</div></div>`}
/* relatório e slides da reunião (arquivos HTML que abrem no navegador; dá para imprimir ou salvar em PDF) */
const reuItens=k=>D.sugestoes.filter(x=>sugCat(x)==='reuniao'&&reuKey(x)===k).sort((x,y)=>sugFeita(x)-sugFeita(y)||(x.criadoEm||x.criado||'').localeCompare(y.criadoEm||y.criado||''));
const respQuando=x=>x.em?`${fmt(x.em.slice(0,10))} às ${new Date(x.em).toTimeString().slice(0,5)}`:'';
const CSS_BASE=`:root{--ink:#16201E;--ink2:#3F4A48;--ink3:#5B6664;--acc:#C24E1C;--soft:#FDEEE6;--line:#DDE3E1;--bg:#F6F7F7}*{box-sizing:border-box}body{margin:0;font-family:Onest,system-ui,-apple-system,Segoe UI,sans-serif;color:var(--ink);background:#fff}`;
const FONTE='<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap">';
/* texto das respostas: linhas e itens com "*" ou "-" viram lista */
function blocosTxt(t){const out=[];String(t||'').replace(/\r/g,'').split('\n').forEach(l=>{l=l.trim();if(!l)return;
 const ps=l.split(/\s+\*\s+/);ps.forEach((x,i)=>{x=x.trim();if(!x)return;const b=/^[*\-•]\s*/.test(x)||i>0;out.push({b,t:x.replace(/^[*\-•]\s*/,'')})})});return out}
const htmlBlocos=B=>{let h='',ul=false;for(const x of B){if(x.b&&!ul){h+='<ul>';ul=true}if(!x.b&&ul){h+='</ul>';ul=false}h+=x.b?`<li>${esc(x.t)}</li>`:`<p>${esc(x.t)}</p>`}return h+(ul?'</ul>':'')};
// divide os blocos em páginas que cabem num slide
function paginarBlocos(B,max){const pg=[];let cur=[],n=0;for(const x of B){const parts=x.t.length>max?(()=>{const o=[];let r=x.t;while(r.length>max){let c=r.lastIndexOf(' ',max);if(c<max*0.5)c=max;o.push(r.slice(0,c));r=r.slice(c).trim()}o.push(r);return o})():[x.t];
 for(const t of parts){if(cur.length&&n+t.length>max){pg.push(cur);cur=[];n=0}cur.push({b:x.b,t});n+=t.length}}if(cur.length)pg.push(cur);return pg}
/* como foi a semana: os 7 dias até a reunião (ou até hoje, se a reunião ainda vai acontecer) */
function semanaDados(k){const d=k.split('|')[0],ate=d&&d<HJ?addDia(d,-1):HJ,de=addDia(ate,-6),den=x=>x&&x>=de&&x<=ate;
 const rec=D.chamados.filter(c=>den(diaCh(c))),con=D.chamados.filter(c=>c.st==='Concluído'&&den((c.concl||'').slice(0,10))),ab=D.chamados.filter(c=>c.st!=='Concluído');
 const mar=rec.filter(c=>chegadaDe(c)),atr=mar.filter(c=>chegadaDe(c)==='atrasado').length,fp=rec.filter(foraPadrao).length;
 const pg=D.chamados.map(c=>({c,p:pagSit(c)})).filter(x=>x.p&&x.p.pg&&den(x.p.pg)),pgFora=pg.filter(x=>!x.p.ok);
 const rot=(D.execucoes||[]).filter(x=>x.s==='feita'&&den(x.dia)).length;
 const cont=f=>{const m={};rec.forEach(c=>{const n=f(c);if(n)m[n]=(m[n]||0)+1});return Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,6)};
 return {de,ate,rec:rec.length,con:con.length,ab:ab.length,atr,mar:mar.length,fp,pg:pg.length,pgFora:pgFora.length,just:pgFora.filter(x=>x.p.just).map(x=>({a:x.c.assunto||'',j:x.p.just})).slice(0,4),rot,em:emPend().length,
  cats:cont(c=>assDe(c.cat)?.n||catSugerida(c.desc||'',c.assunto||'')||'Sem assunto'),deps:cont(c=>c.dep?depNome(c.dep):''),
  feitos:con.sort((a,b)=>(b.concl||'').localeCompare(a.concl||'')).map(c=>({t:c.assunto||c.proto||'',q:c.dep?depNome(c.dep):remNomeCh(c)})),
  falados:D.sugestoes.filter(x=>sugCat(x)==='reuniao'&&sugFeita(x)&&den(x.faladoEm)).map(x=>x.t)}}
function realizadoHtml(W,max){const f=W.feitos.slice(0,max),r=W.feitos.length-f.length;
 return `<div class="g2"><div><h4>Pedidos concluídos (${W.feitos.length})</h4>${f.length?`<ul class="fe">${f.map(x=>`<li>${esc(x.t)}${x.q?` <span>· ${esc(x.q)}</span>`:''}</li>`).join('')}${r?`<li class="mais">e mais ${r}</li>`:''}</ul>`:'<p class="vazio">Nenhum pedido concluído na semana.</p>'}</div>
 <div><h4>Assuntos já falados na semana (${W.falados.length})</h4>${W.falados.length?`<ul class="fe">${W.falados.slice(0,max).map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:'<p class="vazio">Nenhum assunto marcado como falado.</p>'}<h4 style="margin-top:14px">Rotinas do cronograma</h4><p class="vazio" style="font-size:inherit;color:var(--ink2)">${W.rot} ${W.rot===1?'rotina concluída':'rotinas concluídas'}</p></div></div>`}
const barras=L=>{const mx=Math.max(1,...L.map(x=>x[1]));return L.length?`<div class="bars">${L.map(([n,v])=>`<div class="bar"><span class="bn">${esc(n)}</span><span class="bt"><i style="width:${Math.round(v/mx*100)}%"></i></span><b>${v}</b></div>`).join('')}</div>`:'<p class="vazio">Sem dados na semana.</p>'};
function semanaHtml(W){const pct=W.mar?Math.round(W.atr/W.mar*100):0;
 return `<div class="kpis"><div><b>${W.rec}</b><span>pedidos recebidos</span></div><div><b>${W.con}</b><span>concluídos</span></div><div><b>${W.ab}</b><span>em aberto agora</span></div><div><b>${W.mar?pct+'%':'—'}</b><span>chegaram atrasados${W.mar?` (${W.atr} de ${W.mar})`:''}</span></div><div><b>${W.fp}</b><span>fora do padrão</span></div><div><b>${W.pg?`${W.pg-W.pgFora}/${W.pg}`:'—'}</b><span>pagamentos no D-5</span></div><div><b>${W.rot}</b><span>rotinas concluídas</span></div><div><b>${W.em}</b><span>e-mails para revisar</span></div></div>
 <div class="g2"><div><h4>Pedidos por categoria</h4>${barras(W.cats)}</div><div><h4>Pedidos por setor</h4>${barras(W.deps)}</div></div>
 ${W.just.length?`<h4>Pagamentos fora do D-5</h4><ul class="just">${W.just.map(x=>`<li><b>${esc(x.a)}</b> — ${esc(x.j)}</li>`).join('')}</ul>`:''}`}
const CSS_DASH=`.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.kpis div{background:var(--bg);border-radius:10px;padding:12px}.kpis b{display:block;font-size:24px;letter-spacing:-.01em}.kpis span{font-size:12px;color:var(--ink3)}
.g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:16px}h4{font-size:13px;margin:0 0 8px;color:var(--ink2)}.bars{display:grid;gap:6px}.bar{display:grid;grid-template-columns:38% 1fr 28px;gap:8px;align-items:center;font-size:12.5px}
.bn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bt{background:var(--bg);border-radius:4px;height:10px;overflow:hidden}.bt i{display:block;height:100%;background:var(--acc);border-radius:4px}.bar b{text-align:right;font-variant-numeric:tabular-nums}
.vazio{font-size:12px;color:var(--ink3);margin:0}.fe{margin:0;padding-left:18px;display:grid;gap:4px;font-size:13px}.fe span{color:var(--ink3)}.fe .mais{color:var(--ink3);list-style:none}.just{margin:0;padding-left:18px;font-size:13px;display:grid;gap:4px}`;
/* ===== Relatório e slides da reunião (versão profissional) =====
   Mesmo fundo do sistema (vidro, marca d'água e logo), fotos de cada pessoa e painel dos chamados.
   Período: a semana da reunião, ou o período escolhido pelo diretor em "Emitir relatório ou slides". */
const LOGO_X='<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="8" y="8" width="88" height="104" rx="22" fill="#E4602B"/><path d="M28 36H76M28 56H68M28 76H52" stroke="#FDFFF8" stroke-width="9" stroke-linecap="round"/><circle cx="88" cy="88" r="26" fill="#161616" stroke="#FFFFFF" stroke-width="5"/><path d="M76 88l8 8l16-17" stroke="#E4602B" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const MARCA_URL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect x='8' y='8' width='88' height='104' rx='22' fill='%23E4602B'/%3E%3Cpath d='M28 36H76M28 56H68M28 76H52' stroke='%23FFFFFF' stroke-width='9' stroke-linecap='round'/%3E%3Ccircle cx='88' cy='88' r='26' fill='%233D3D3D'/%3E%3C/svg%3E";
const deptoNome=()=>CFG.depto||'Financeiro e Contábil';
const nomeDiretor=()=>{const u=uidDePessoa('dir');return (u&&PROF[u]?.name)||(dir()&&real()&&!S.sim&&ME.nome)||'Diretor'};
// foto de quem está na equipe (ou a inicial, se a pessoa ainda não escolheu foto)
function fotoX(pid,nome,px){px=px||36;const u=uidDePessoa(pid),f=u&&PROF[u]?.avatarUrl;
 return fotoOk(f)?`<img class="ft" style="width:${px}px;height:${px}px" src="${f}" alt="">`:`<span class="ft" style="width:${px}px;height:${px}px;font-size:${Math.round(px*.4)}px">${esc(String(nome||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase()||'?')}</span>`}
const pidDoNome=n=>(colabs().find(p=>norm(p.n)===norm(n||''))||{}).id;
function envolvidos(){return [{pid:'dir',n:nomeDiretor(),c:'Diretor'},...colabs().map(p=>({pid:p.id,n:p.n,c:p.c||''}))]}
// realizado no período por pessoa (chamados concluídos + marcações do cronograma)
function realizadoPer(pid,de,ate){const den=d=>d&&d>=de&&d<=ate;
 const ch=D.chamados.filter(c=>c.st==='Concluído'&&(pid==null||quemFez(c)===pid)&&den((c.concl||'').slice(0,10))),cp=ch.filter(c=>c.prazo),cok=cp.filter(c=>!(c.concl>c.prazo)).length;
 const vistos=new Set(),et={};let rot=0;const conta=(rid,dia,q)=>{const k=`${dia}_${rid}_${q}`;if(vistos.has(k))return;vistos.add(k);const r=D.cronograma.find(x=>x.id===rid);const g=(r?.etapa)||'Outras atividades';if(!noFluxo(r))return;et[g]=(et[g]||0)+1;rot++};
 (D.feitos||[]).filter(f=>f.st==='feita'&&den(f.dia)&&(pid==null||f.pid===pid)).forEach(f=>conta(f.rot,f.dia,f.pid||f.nome));
 (D.execucoes||[]).filter(x=>x.s==='feita'&&den(x.dia)&&(pid==null||x.por===pid)).forEach(x=>conta(x.rot,x.dia,x.por));
 return {ch:ch.length,chPrazo:cp.length,chOk:cok,pct:cp.length?Math.round(cok/cp.length*100):null,rot,etapas:Object.entries(et).sort((a,b)=>b[1]-a[1]),total:ch.length+rot}}
// painel dos chamados no período
function dashCh(de,ate){const den=x=>x&&x>=de&&x<=ate;
 const rec=D.chamados.filter(c=>den(diaCh(c))),con=D.chamados.filter(c=>c.st==='Concluído'&&den((c.concl||'').slice(0,10))),ab=D.chamados.filter(c=>c.st!=='Concluído');
 const atrE=ab.filter(chAtrasado).sort((a,b)=>(a.prazo||'').localeCompare(b.prazo||'')),mar=rec.filter(c=>chegadaDe(c)),chA=mar.filter(c=>chegadaDe(c)==='atrasado').length;
 const cP=con.filter(c=>c.prazo),cOk=cP.filter(c=>!(c.concl>c.prazo)).length,fp=rec.filter(foraPadrao).length;
 const pg=D.chamados.map(c=>({c,p:pagSit(c)})).filter(x=>x.p&&x.p.pg&&den(x.p.pg)),pgF=pg.filter(x=>!x.p.ok);
 const grupo=f=>{const m={};rec.forEach(c=>{const n=f(c)||'Sem nome';const o=m[n]=m[n]||{n,t:0,a:0};o.t++;if(chegadaDe(c)==='atrasado')o.a++});return Object.values(m).sort((a,b)=>b.t-a.t)};
 const cats=grupo(c=>assDe(c.cat)?.n||catSugerida(c.desc||'',c.assunto||'')||'Sem assunto').slice(0,7),deps=grupo(c=>c.dep?depNome(c.dep):remNomeCh(c)).slice(0,7);
 const rems=grupo(c=>remNomeCh(c)).filter(x=>x.a).sort((a,b)=>b.a-a.a).slice(0,5);
 const pessoas=colabs().map(p=>({pid:p.id,n:p.n,con:con.filter(c=>quemFez(c)===p.id).length,ab:ab.filter(c=>c.resp===p.id).length,atr:atrE.filter(c=>c.resp===p.id).length})).filter(x=>x.con||x.ab);
 return {rec:rec.length,con:con.length,ab:ab.length,atrE,mar:mar.length,chA,pctA:mar.length?Math.round(chA/mar.length*100):null,cP:cP.length,cOk,pctOk:cP.length?Math.round(cOk/cP.length*100):null,fp,pg:pg.length,pgF,cats,deps,rems,pessoas}}
const diasAtr=p=>Math.max(1,Math.round((new Date(HJ+'T12:00')-new Date(p+'T12:00'))/864e5));
/* pedaços de HTML usados no relatório e nos slides */
function kpisX(K){const t=[['Pedidos recebidos',K.rec,''],['Concluídos',K.con,K.pctOk===null?'':`${K.pctOk}% no prazo`],['Em aberto agora',K.ab,''],['Atrasados na entrega',K.atrE.length,K.atrE.length?'precisam de atenção':'nenhum'],['Chegaram atrasados',K.pctA===null?'—':K.pctA+'%',K.mar?`${K.chA} de ${K.mar} pedidos`:''],['Fora do padrão',K.fp,'solicitações de pagamento'],['Pagamentos no D-5',K.pg?`${K.pg-K.pgF.length}/${K.pg}`:'—',K.pgF.length?`${K.pgF.length} fora do prazo`:''],['Equipe',colabs().length,'pessoas']];
 return `<div class="kgrid">${t.map(([a,b,c],i)=>`<div class="glass kcard${(i===3&&K.atrE.length)||(i===4&&K.pctA>=30)?' alerta':''}"><span>${a}</span><b>${b}</b>${c?`<small>${esc(c)}</small>`:''}</div>`).join('')}</div>`}
function barrasX(L,tit){const mx=Math.max(1,...L.map(x=>x.t));return `<div class="glass bloco"><h3>${tit}</h3>${L.length?`<div class="hbars">${L.map(x=>`<div class="hbar"><span class="bn" title="${esc(x.n)}">${esc(x.n)}</span><span class="bt"><i class="ok" style="width:${(x.t-x.a)/mx*100}%"></i><i class="at" style="width:${x.a/mx*100}%"></i></span><b>${x.t}</b></div>`).join('')}</div><p class="leg"><i class="ok"></i>em dia <i class="at"></i>chegou atrasado</p>`:'<p class="vazio">Sem pedidos no período.</p>'}</div>`}
function atrasosX(K,max){const L=K.atrE.slice(0,max);return `<div class="glass bloco"><h3>Chamados atrasados na entrega <span class="cont">${K.atrE.length}</span></h3>${L.length?`<table class="tbx"><thead><tr><th>Chamado</th><th>Responsável</th><th>Setor</th><th>Prazo</th><th>Atraso</th></tr></thead><tbody>${L.map(c=>`<tr><td><b>${esc(c.proto||'')}</b><small>${esc(c.assunto||'')}</small></td><td><span class="pq">${fotoX(c.resp,respNome(c.resp),26)}${esc(respNome(c.resp)||'Sem responsável')}</span></td><td>${c.dep?esc(depNome(c.dep)):esc(remNomeCh(c))}</td><td>${fmt(c.prazo)}</td><td><span class="pill at">${diasAtr(c.prazo)} ${diasAtr(c.prazo)===1?'dia':'dias'}</span></td></tr>`).join('')}</tbody></table>${K.atrE.length>max?`<p class="vazio" style="margin-top:8px">e mais ${K.atrE.length-max}</p>`:''}`:'<p class="vazio">Nenhum chamado atrasado.</p>'}</div>`}
function remsX(K){return `<div class="glass bloco"><h3>Quem mais mandou pedido atrasado</h3>${K.rems.length?`<table class="tbx"><thead><tr><th>Quem mandou</th><th class="nr">Pedidos</th><th class="nr">Atrasados</th><th class="nr">%</th></tr></thead><tbody>${K.rems.map(r=>`<tr><td><b>${esc(r.n)}</b></td><td class="nr">${r.t}</td><td class="nr">${r.a}</td><td class="nr"><span class="pill at">${Math.round(r.a/r.t*100)}%</span></td></tr>`).join('')}</tbody></table>`:'<p class="vazio">Ninguém mandou pedido atrasado no período.</p>'}</div>`}
function equipeX(de,ate){const L=colabs().map(p=>({p,r:realizadoPer(p.id,de,ate)})),T=realizadoPer(null,de,ate);
 const lin=(foto,nome,sub,r,tot)=>`<tr${tot?' class="tot"':''}><td><span class="pq">${foto}<span><b>${nome}</b>${sub?`<small>${sub}</small>`:''}</span></span></td><td class="nr">${r.total}</td><td class="nr">${r.ch}</td><td class="nr">${r.rot}</td><td class="nr">${r.pct===null?'—':r.pct+'%'}</td><td>${r.etapas.length?`<span class="chips">${r.etapas.slice(0,6).map(([g,n])=>`<span>${esc(g)} ${n}</span>`).join('')}</span>`:'—'}</td></tr>`;
 return `<div class="glass bloco"><table class="tbx"><thead><tr><th>Pessoa</th><th class="nr">Realizadas</th><th class="nr">Chamados</th><th class="nr">Rotinas</th><th class="nr">No prazo</th><th>O que realizou</th></tr></thead><tbody>${L.map(({p,r})=>lin(fotoX(p.id,p.n,32),esc(p.n),esc(p.c||''),r)).join('')}${lin('','Equipe toda','',T,true)}</tbody></table></div>`}
function pessoasX(){return `<div class="gente">${envolvidos().map(e=>`<div class="pp">${fotoX(e.pid,e.n,44)}<div><b>${esc(e.n)}</b><small>${esc(e.c)}</small></div></div>`).join('')}</div>`}
const CSS_X=`:root{--ink:#1E1E1E;--ink2:#4F4F4F;--ink3:#6B6B6B;--acc:#C24E1C;--acc2:#E4602B;--soft:rgba(228,96,43,.14);--line:rgba(20,20,20,.09);--vidro:rgba(255,255,255,.62);--borda:rgba(255,255,255,.85);--ok:#2F7D4A;--bad:#B4382C}
*{box-sizing:border-box}body{margin:0;font-family:Onest,system-ui,-apple-system,Segoe UI,sans-serif;color:var(--ink)}
.fundo{background:radial-gradient(45% 55% at 90% 8%,rgba(228,96,43,.28),transparent 70%),radial-gradient(50% 60% at 12% 88%,rgba(160,160,155,.32),transparent 70%),#F1F1EE;position:relative;isolation:isolate;overflow:hidden}
.fundo::after{content:"";position:absolute;right:-4%;bottom:-10%;width:34%;aspect-ratio:1;background:url("${MARCA_URL}") center/contain no-repeat;opacity:.05;z-index:-1;pointer-events:none}
.glass{background:var(--vidro);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border:1px solid var(--borda);border-radius:18px;box-shadow:0 8px 24px rgba(0,0,0,.06)}
.ft{display:inline-grid;place-items:center;border-radius:50%;object-fit:cover;background:var(--soft);color:var(--acc);font-weight:700;flex:none;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.08)}
.marca{display:flex;align-items:center;gap:10px}.marca svg{width:34px;height:34px}.marca b{display:block;font-size:15px}.marca small{display:block;color:var(--ink3);font-size:11px}
.kgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.kcard{padding:14px 16px}.kcard span{display:block;font-size:12px;color:var(--ink3)}.kcard b{display:block;font-size:28px;letter-spacing:-.02em;margin-top:2px}.kcard small{display:block;font-size:11.5px;color:var(--ink2)}
.kcard.alerta{border-color:rgba(180,56,44,.35)}.kcard.alerta b{color:var(--bad)}
.bloco{padding:16px 18px}.bloco h3{margin:0 0 12px;font-size:14px}.cont{display:inline-grid;place-items:center;min-width:22px;height:22px;border-radius:999px;background:var(--soft);color:var(--acc);font-size:12px;margin-left:6px;padding:0 6px}
.hbars{display:grid;gap:8px}.hbar{display:grid;grid-template-columns:34% 1fr 30px;gap:10px;align-items:center;font-size:12.5px}.bn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bt{display:flex;height:12px;border-radius:999px;background:rgba(20,20,20,.06);overflow:hidden}.bt i{display:block;height:100%}.bt .ok,.leg .ok{background:var(--acc2)}.bt .at,.leg .at{background:#3D3D3D}
.hbar b{text-align:right;font-variant-numeric:tabular-nums}.leg{margin:10px 0 0;font-size:11px;color:var(--ink3);display:flex;gap:6px;align-items:center}.leg i{width:10px;height:10px;border-radius:3px;display:inline-block;margin-left:6px}
.lista{display:grid;gap:8px}.li{display:flex;align-items:center;gap:10px}.li .tx{flex:1;min-width:0}.li b{display:block;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.li small{display:block;font-size:11.5px;color:var(--ink3)}
.pill{font-size:11.5px;font-weight:600;padding:3px 10px;border-radius:999px;white-space:nowrap}.pill.at{background:rgba(180,56,44,.12);color:var(--bad)}.pill.okp{background:#E3F1E7;color:var(--ok)}
.vazio{margin:0;color:var(--ink3);font-size:13px}
.eqgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.pess{display:flex;gap:14px;padding:14px 16px;align-items:flex-start}.pess .tx{min-width:0}.pess>div>b{font-size:15px}.pess small{display:block;color:var(--ink3);font-size:12px}
.nums{display:flex;flex-wrap:wrap;gap:4px 14px;margin-top:8px;font-size:12px;color:var(--ink2)}.nums b{color:var(--ink);font-size:15px}
.chips{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.chips span{font-size:11px;padding:2px 9px;border-radius:999px;background:var(--soft);color:var(--acc)}
.gente{display:flex;flex-wrap:wrap;gap:10px}.pp{display:flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;border-radius:999px;background:var(--vidro);border:1px solid var(--borda)}.pp b{display:block;font-size:13px}.pp small{display:block;font-size:11px;color:var(--ink3)}
.g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.tbx{width:100%;border-collapse:collapse;font-size:12.5px}.tbx th{text-align:left;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink3);font-weight:600;padding:0 10px 8px;border-bottom:1px solid var(--line)}
.tbx td{padding:9px 10px;border-bottom:1px solid var(--line);vertical-align:middle}.tbx tr:last-child td{border-bottom:0}.tbx td small{display:block;color:var(--ink3);font-size:11px;max-width:28ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tbx .nr{text-align:right;font-variant-numeric:tabular-nums}.tbx td.nr{font-weight:600}.tbx tr.tot td{font-weight:700;background:rgba(228,96,43,.06)}.pq{display:inline-flex;align-items:center;gap:8px}.pq small{max-width:none}.tbx .chips{margin:0}`;
const LOGO_DATA='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect x="8" y="8" width="88" height="104" rx="22" fill="#E4602B"/><path d="M28 36H76M28 56H68M28 76H52" stroke="#FDFFF8" stroke-width="9" stroke-linecap="round"/><circle cx="88" cy="88" r="26" fill="#161616" stroke="#FFFFFF" stroke-width="5"/><path d="M76 88l8 8l16-17" stroke="#E4602B" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>');
const perReu=k=>{const d=k.split('|')[0],ate=d&&d<HJ?addDia(d,-1):HJ;return {de:addDia(ate,-6),ate,rot:'Semana'}};
/* ---------- relatório ---------- */
function htmlReuRel(k,per){per=per||perReu(k);const K=dashCh(per.de,per.ate),T=realizadoPer(null,per.de,per.ate),it=k?reuItens(k):[],pe=it.filter(x=>!sugFeita(x)),fa=it.filter(sugFeita);
 const bloco=(x,i)=>{const R=topDe(x),cri=x.criado||(x.criadoEm||'').slice(0,10);
  return `<div class="glass as"><div class="hd"><span class="n">${i+1}</span><h3>${esc(x.t)}</h3><span class="st ${sugFeita(x)?'ok':''}">${sugFeita(x)?'Falado':'A falar'}</span></div>${x.obs?`<div class="tx">${htmlBlocos(blocosTxt(x.obs))}</div>`:''}<p class="meta">Sugerido por ${esc(sugAutor(x))}${cri?` em ${fmtAno(cri)}`:''}</p>
  ${R.length?`<div class="rs">${R.map(r=>`<div class="rr">${fotoX(r.por||pidDoNome(r.porNome),r.porNome||respNome(r.por),34)}<div class="tx"><b>${esc(r.porNome||respNome(r.por)||'Equipe')}</b><small>${r.em?respQuando(r):''}</small>${htmlBlocos(blocosTxt(r.txt))}</div></div>`).join('')}</div>`:''}<div class="enc"><b>Encaminhamento</b><div class="lin"></div><div class="lin"></div></div></div>`};
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(k?reuTit(k):'Relatório do departamento')} · Prumo</title><link rel="icon" href="${LOGO_DATA}">${FONTE}<style>${CSS_X}
 body{min-height:100vh}main{max-width:980px;margin:0 auto;padding:32px 24px 64px;display:flex;flex-direction:column;gap:18px}
 .cab{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;padding:20px 22px}.cab h1{margin:6px 0 2px;font-size:28px;letter-spacing:-.02em}.cab .per{color:var(--ink2);font-size:14px}.cab .ger{font-size:12px;color:var(--ink3);text-align:right}
 h2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--acc);margin:12px 0 0}
 .as{padding:18px 20px}.hd{display:flex;align-items:center;gap:10px}.hd h3{margin:0;font-size:16px;flex:1}.n{width:28px;height:28px;border-radius:50%;background:var(--acc2);color:#fff;display:grid;place-items:center;font-weight:700;font-size:13px;flex:none}
 .st{font-size:12px;padding:3px 10px;border-radius:999px;background:var(--soft);color:var(--acc)}.st.ok{background:#E3F1E7;color:var(--ok)}.meta{font-size:12px;color:var(--ink3);margin:8px 0 0}
 .tx p{margin:4px 0}.tx ul{margin:4px 0;padding-left:18px}.rs{display:grid;gap:12px;margin-top:14px;padding-left:14px;border-left:2px solid var(--line)}.rr{display:flex;gap:10px;align-items:flex-start}.rr .tx{min-width:0}.rr b{font-size:13px;color:var(--acc)}.rr small{display:block;font-size:11px;color:var(--ink3)}
 .enc{margin-top:14px}.enc b{font-size:12px;color:var(--ink3)}.lin{border-bottom:1px solid var(--line);height:26px}
 @media (max-width:700px){.kgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.g2,.eqgrid{grid-template-columns:1fr}.cab .ger{text-align:left}}
 @media print{body{background:#fff}.glass{backdrop-filter:none;box-shadow:none}}
 </style></head><body class="fundo"><main>
 <div class="glass cab"><div><div class="marca">${LOGO_X}<div><b>Prumo</b><small>${esc(deptoNome())}</small></div></div><h1>${esc(k?reuTit(k):'Relatório do departamento')}</h1><div class="per">${esc(per.rot)} de ${fmtAno(per.de)} a ${fmtAno(per.ate)}</div></div><div class="ger">Diretor: <b>${esc(nomeDiretor())}</b><br>Gerado em ${esc(fmtHora(new Date().toISOString()))}<br>por ${esc(euNome())}</div></div>
 <h2>Quem participa</h2>${pessoasX()}
 <h2>Painel dos chamados</h2>${kpisX(K)}<div class="g2">${barrasX(K.cats,'Pedidos por categoria')}${barrasX(K.deps,'Pedidos por setor')}</div>
 <h2>Atrasos</h2><div class="g2">${atrasosX(K,12)}${remsX(K)}</div>
 ${K.pgF.length?`<div class="glass bloco"><h3>Pagamentos fora do D-5 <span class="cont">${K.pgF.length}</span></h3><div class="lista">${K.pgF.slice(0,10).map(x=>`<div class="li"><div class="tx"><b>${esc(x.c.assunto||'')}</b><small>${esc(x.p.just||'sem justificativa')}</small></div><span class="pill at">pago ${fmt(x.p.pg)}</span></div>`).join('')}</div></div>`:''}
 <h2>O que a equipe realizou</h2>${equipeX(per.de,per.ate)}
 <h2>Registro do cronograma</h2>${(()=>{const L=registrosCron(per.de,per.ate),R=regResumo(L);return `<div class="kgrid" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div class="glass kcard"><span>Realizado no período</span><b>${R.tot}</b><small>${Object.entries(R.porS).map(([k,v])=>`${esc(k)} ${v}`).join(' · ')||'—'}</small></div><div class="glass kcard"><span>Feito no próprio dia</span><b>${R.pct===null?'—':R.pct+'%'}</b><small>${R.noDia} de ${R.tot}</small></div><div class="glass kcard"><span>Feito depois do dia</span><b>${R.dep}</b><small>${R.refs.length?'de '+R.refs.slice(0,5).join(', '):'nenhum'}</small></div></div><div class="glass bloco">${regTabela(L,40,'tbx')}</div>`})()}
 ${pe.length?`<h2>Pauta da reunião</h2>${pe.map(bloco).join('')}`:''}${fa.length?`<h2>Já falados</h2>${fa.map((x,i)=>bloco(x,pe.length+i)).join('')}`:''}
 </main></body></html>`}
/* ---------- slides ---------- */
function htmlReuSlides(k,per){per=per||perReu(k);const it=k?reuItens(k):[],[d,h]=(k||'').split('|'),K=dashCh(per.de,per.ate),T=realizadoPer(null,per.de,per.ate),tot=it.length;
 const quemR=r=>r.porNome||respNome(r.por)||'Equipe',pidR=r=>r.por||pidDoNome(r.porNome);
 const tit=t=>`<h2 class="${t.length>110?'t3':t.length>60?'t2':''}">${esc(t)}</h2>`;
 const topo=(ey)=>`<div class="sh"><div class="marca">${LOGO_X}<div><b>Prumo</b><small>${esc(deptoNome())}</small></div></div><span class="ey">${esc(ey)}</span></div>`;
 const sl=[];const S2=(cls,ey,corpo)=>sl.push(`<section class="fundo ${cls||''}">${topo(ey)}<div class="cp">${corpo}</div><footer><span>${esc(deptoNome())} · Diretor: ${esc(nomeDiretor())}</span></footer></section>`);
 // capa
 sl.push(`<section class="fundo capa"><div class="glass capac"><div class="lg">${LOGO_X}</div><p class="ey2">${esc(deptoNome())}</p><h1>${k?'Reunião da equipe':'Relatório do departamento'}</h1><p class="sub">${esc(d?reuTxt(d,h):`${per.rot}: ${fmtAno(per.de)} a ${fmtAno(per.ate)}`)}</p><div class="dirc">${fotoX('dir',nomeDiretor(),48)}<div><b>${esc(nomeDiretor())}</b><small>Diretor</small></div></div></div><div class="gente">${colabs().map(p=>`<div class="pp">${fotoX(p.id,p.n,40)}<div><b>${esc(p.n)}</b><small>${esc(p.c||'')}</small></div></div>`).join('')}</div></section>`);
 // agenda
 S2('','Agenda',`${tit('O que vamos ver hoje')}<div class="g2"><div class="glass bloco"><h3>Números do período</h3><ol class="ag"><li>Painel dos chamados</li><li>Pedidos por categoria e setor</li><li>Atrasos</li><li>O que a equipe realizou</li></ol></div><div class="glass bloco"><h3>Pauta da reunião ${tot?`<span class="cont">${tot}</span>`:''}</h3>${tot?`<ol class="ag">${it.slice(0,7).map(x=>`<li>${esc(x.t.length>80?x.t.slice(0,78)+'…':x.t)}</li>`).join('')}${tot>7?`<li class="mais">e mais ${tot-7}</li>`:''}</ol>`:'<p class="vazio">Sem assuntos na pauta.</p>'}</div></div>`);
 // painel
 S2('','Painel dos chamados',`${tit(`Chamados · ${fmt(per.de)} a ${fmt(per.ate)}`)}${kpisX(K)}`);
 S2('','Painel dos chamados',`${tit('Pedidos por categoria e por setor')}<div class="g2">${barrasX(K.cats,'Por categoria')}${barrasX(K.deps,'Por setor')}</div>`);
 S2('','Atrasos',`${tit('Atrasos')}<div class="g2">${atrasosX(K,6)}${remsX(K)}</div>`);
 if(K.pgF.length)S2('','Pagamentos',`${tit('Pagamentos fora do D-5')}<div class="glass bloco"><div class="lista">${K.pgF.slice(0,7).map(x=>`<div class="li"><div class="tx"><b>${esc(x.c.assunto||'')}</b><small>${esc(x.p.just||'sem justificativa')}</small></div><span class="pill at">pago ${fmt(x.p.pg)}</span></div>`).join('')}</div></div>`);
 S2('','Equipe',`${tit('O que a equipe realizou')}${equipeX(per.de,per.ate)}`);
 // pauta e respostas
 it.forEach((x,i)=>{const R=topDe(x),cab=tit(x.t),ey=`Assunto ${i+1} de ${tot}${sugFeita(x)?' · já falado':''}`;
  const ob=paginarBlocos(blocosTxt(x.obs),600);
  S2('',ey,`${cab}${ob.length?`<div class="glass bloco det">${htmlBlocos(ob[0])}</div>`:''}<div class="quem"><span>Sugerido por</span><div class="pp">${fotoX(x.a||'dir',sugAutor(x),34)}<b>${esc(sugAutor(x))}</b></div>${R.length?`<span>Responderam</span>${[...new Map(R.map(r=>[quemR(r),r])).values()].map(r=>`<div class="pp">${fotoX(pidR(r),quemR(r),34)}<b>${esc(quemR(r))}</b></div>`).join('')}`:''}</div>${R.length?'':'<div class="glass bloco"><p class="vazio">Ninguém respondeu este assunto ainda. Espaço para a conversa na reunião.</p></div>'}`);
  ob.slice(1).forEach(pgx=>S2('',ey,`${cab}<div class="glass bloco det"><small class="cont2">detalhes · continuação</small>${htmlBlocos(pgx)}</div>`));
  R.forEach((r,ri)=>{const pgs=paginarBlocos(blocosTxt(r.txt),760);pgs.forEach((pgx,pi)=>S2('',ey,`${cab}<div class="glass bloco resp"><div class="rh">${fotoX(pidR(r),quemR(r),46)}<div><b>${esc(quemR(r))}</b><small>Resposta ${ri+1} de ${R.length}${r.em?' · '+esc(respQuando(r)):''}${pgs.length>1?` · parte ${pi+1} de ${pgs.length}`:''}</small></div></div><div class="tx">${htmlBlocos(pgx)}</div></div>`))})});
 sl.push(`<section class="fundo capa"><div class="glass capac"><div class="lg">${LOGO_X}</div><p class="ey2">Encerramento</p><h1>Encaminhamentos</h1><p class="sub">Quem faz o quê, e até quando.</p></div></section>`);
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Slides · ${esc(k?reuTit(k):deptoNome())}</title><link rel="icon" href="${LOGO_DATA}">${FONTE}<style>${CSS_X}
 html,body{height:100%;background:#0E0E0E}.deck{position:fixed;inset:0;display:grid;place-items:center}
 section{display:none;width:min(100vw,calc(100vh*16/9));height:min(100vh,calc(100vw*9/16));padding:3.2% 4.5% 5%;flex-direction:column;position:relative;font-size:min(1.45vw,2.6vh)}
 section.on{display:flex}.sh{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.6em}.sh .marca svg{width:2.4em;height:2.4em}.sh .marca b{font-size:1.05em}.sh .marca small{font-size:.75em}
 .ey{font-size:.78em;letter-spacing:.12em;text-transform:uppercase;color:var(--acc);font-weight:600;background:var(--vidro);border:1px solid var(--borda);padding:.35em .9em;border-radius:999px}
 .cp{flex:1;display:flex;flex-direction:column;gap:1em;min-height:0}
 h2{font-size:2.2em;margin:0 0 .2em;letter-spacing:-.02em;line-height:1.1}h2.t2{font-size:1.6em}h2.t3{font-size:1.25em}
 footer{position:absolute;left:4.5%;right:4.5%;bottom:2.2%;display:flex;justify-content:space-between;font-size:.72em;color:var(--ink3)}
 .kgrid{gap:.9em}.kcard{padding:1em 1.1em}.kcard span{font-size:.85em}.kcard b{font-size:2.3em}.kcard small{font-size:.78em}
 .bloco{padding:1.1em 1.3em}.bloco h3{font-size:1.05em}.hbar{font-size:.95em}.bt{height:.85em}.li b{font-size:.95em}.li small{font-size:.8em}.vazio{font-size:.95em}
 .eqgrid{gap:.8em}.pess{padding:.9em 1.1em}.pess>div>b{font-size:1.1em}.nums{font-size:.85em}.nums b{font-size:1.15em}.chips span{font-size:.75em}
 .tbx{font-size:.9em}.tbx td small{font-size:.8em}.ag{margin:0;padding-left:1.2em;display:grid;gap:.45em;font-size:1em}.ag .mais{list-style:none;color:var(--ink3)}
 .det{font-size:.98em;color:var(--ink2);line-height:1.5}.det p{margin:.2em 0}.det ul{margin:.3em 0;padding-left:1.2em}.cont2{display:block;color:var(--ink3);margin-bottom:.3em}
 .quem{display:flex;flex-wrap:wrap;align-items:center;gap:.6em;font-size:.9em;color:var(--ink3)}.quem .pp{padding:.3em .9em .3em .3em}.quem .pp b{font-size:.95em;color:var(--ink)}
 .resp .rh{display:flex;align-items:center;gap:.8em;margin-bottom:.7em}.resp .rh b{font-size:1.15em;display:block}.resp .rh small{color:var(--ink3);font-size:.8em}.resp .tx{font-size:1.02em;line-height:1.5}.resp .tx p{margin:.25em 0}.resp .tx ul{margin:.3em 0;padding-left:1.2em;display:grid;gap:.25em}
 .capa{justify-content:center;align-items:center;gap:1.4em;padding:4%}.capac{padding:2.2em 3em;text-align:center;display:flex;flex-direction:column;align-items:center;gap:.4em;min-width:55%}.capa .lg svg{width:4.5em;height:4.5em}
 .capa .ey2{margin:.4em 0 0;font-size:.9em;letter-spacing:.14em;text-transform:uppercase;color:var(--acc);font-weight:600}.capa h1{font-size:3.2em;margin:0;letter-spacing:-.02em}.capa .sub{margin:.2em 0 0;color:var(--ink2);font-size:1.15em}
 .dirc{display:flex;align-items:center;gap:.7em;margin-top:1em;text-align:left}.dirc b{display:block}.dirc small{color:var(--ink3);font-size:.8em}.capa .gente{justify-content:center;max-width:90%}.capa .pp{font-size:.9em}
 .nav{position:fixed;right:16px;bottom:12px;color:#9A9A96;font:12px Onest,system-ui,sans-serif;display:flex;gap:8px;align-items:center}.nav button{background:#262626;color:#F4F4F2;border:0;border-radius:999px;min-width:40px;min-height:36px;font:inherit;cursor:pointer}
 @media print{@page{size:1280px 720px;margin:0}html,body{background:#fff}.deck{position:static;display:block}section{display:flex!important;width:1280px;height:720px;font-size:18.5px;page-break-after:always}.nav{display:none}.glass{backdrop-filter:none}}
 </style></head><body><div class="deck">${sl.map((x,i)=>i?x:x.replace('<section class="fundo capa">','<section class="fundo capa on">')).join('')}</div>
 <div class="nav"><button id="ant" aria-label="Slide anterior">‹</button><span id="pos"></span><button id="prox" aria-label="Próximo slide">›</button></div>
 <script>(function(){var S=[].slice.call(document.querySelectorAll('section')),i=0,p=document.getElementById('pos');S.forEach(function(s,j){var g=s.querySelector('.pg');if(g)g.textContent=(j+1)+' / '+S.length});function ir(n){i=Math.max(0,Math.min(S.length-1,n));S.forEach(function(s,j){s.classList.toggle('on',j===i)});p.textContent=(i+1)+' / '+S.length}
 document.getElementById('ant').onclick=function(){ir(i-1)};document.getElementById('prox').onclick=function(){ir(i+1)};
 document.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();ir(i+1)}if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();ir(i-1)}if(e.key==='f'){document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()}});ir(0)})()</script></body></html>`}
async function baixarReu(k,tipo,per){if(!podeReuExp()){toast('Relatório e slides estão liberados só para o admin e o diretor.');return}if(!DL){toast('O download não está disponível nesta visualização.');return}k=k||'';const nome=(k.split('|')[0]||(per?per.de+'-a-'+per.ate:HJ));
 try{await DL.save({filename:`${tipo==='slides'?'slides':'relatorio'}-${k?'reuniao':'departamento'}-${nome}.html`,data:new Blob([tipo==='slides'?htmlReuSlides(k,per):htmlReuRel(k,per)],{type:'text/html'})});
  log(`Baixou ${tipo==='slides'?'os slides':'o relatório'} ${k?'da '+reuTit(k).toLowerCase():`do departamento (${per?fmtAno(per.de)+' a '+fmtAno(per.ate):''})`}`);toast(tipo==='slides'?'Slides baixados. Abra o arquivo e use as setas do teclado; F deixa em tela cheia.':'Relatório baixado. Abra no navegador; dá para imprimir ou salvar em PDF.',5000)}
 catch(e){toast('Não foi possível baixar.')}}
/* o diretor emite relatório ou slides quando quiser, escolhendo o período */
function periodoEmit(v){const m=MES_ATUAL;if(v==='mes')return {de:m+'-01',ate:HJ,rot:'Mês'};if(v==='ant'){const a=addMes(m,-1);return {de:a+'-01',ate:isoD(new Date(+m.slice(0,4),+m.slice(5,7)-1,0)),rot:'Mês'}}
 if(v==='tri'){const t=mesesTri(S.tri);return {de:t[0]+'-01',ate:fimTri(S.tri)<HJ?fimTri(S.tri):HJ,rot:'Trimestre'}}return {de:addDia(HJ,-6),ate:HJ,rot:'Semana'}}
/* o admin escolhe quais áreas aparecem no menu para todos; nada é apagado, só fica escondido */
function menuSheet(){if(!podeAdmin())return;FORM={tipo:'_menu'};const oc=new Set(ocultos());
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Administração</p><h2 id="sheet-title">Mostrar e ocultar áreas</h2><p class="sub" style="font-size:13px">Desmarque o que não quer que apareça no menu. Vale para todos. Nada é apagado: ao marcar de novo, a área volta como estava.</p></div>
 <div class="fgrid">${MENU.filter(([k])=>!NAO_OCULTA.includes(k)).map(([k,n])=>`<label class="perm"><input type="checkbox" data-k="${k}" ${oc.has(k)?'':'checked'}><span><b>${esc(n)}</b></span></label>`).join('')}</div>
 <p class="meta" style="margin:0">Painel e Usuários e permissões ficam sempre visíveis, para dar para voltar aqui.</p>
 <div><h3 style="font-size:14px;margin:8px 0 6px">Sistemas no cronograma</h3><div class="fgrid">${sistsTodos().map(x=>`<label class="perm"><input type="checkbox" data-s="${esc(x)}" ${(CFG.sisOcultos||[]).includes(x)?'':'checked'}><span><b>${esc(x)}</b><small>Desmarcado: some do cronograma, do andamento e do painel. O que já foi marcado continua no calendário e nos relatórios.</small></span></label>`).join('')}</div></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaMenu()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaMenu(){if(FORM?.tipo!=='_menu'||!DB)return;const oc=[...document.querySelectorAll('#sheet input[data-k]')].filter(i=>!i.checked).map(i=>i.dataset.k);
 let so=[...document.querySelectorAll('#sheet input[data-s]')].filter(i=>!i.checked).map(i=>i.dataset.s);if(so.length>=sistsTodos().length){toast('Deixe pelo menos um sistema visível.');return}
 try{await DB.doc('config/estrutura').set({...CFG,ocultos:oc,sisOcultos:so});CFG.ocultos=oc;CFG.sisOcultos=so;log(`Mudou as áreas do menu${oc.length?`: ocultou ${oc.map(k=>(MENU.find(m=>m[0]===k)||[,k])[1]).join(', ')}`:': todas visíveis'}`);toast('Menu atualizado');fechar();render()}
 catch(e){toast('Só administradores podem mudar o menu.')}}
function triAgora(){const n=new Date(HJ+'T12:00');return {ano:n.getFullYear(),q:Math.floor(n.getMonth()/3)+1}}
function trimBloco(){const t=triAgora(),ini=mesesTri(t)[0]+'-01',fim=fimTri(t),T=realizadoPer(null,ini,HJ);
 const dt=x=>new Date(x+'T12:00'),tot=Math.round((dt(fim)-dt(ini))/864e5)+1,pas=Math.min(tot,Math.round((dt(HJ)-dt(ini))/864e5)+1),pT=Math.round(pas/tot*100),falta=tot-pas;
 const rec=D.chamados.filter(c=>{const d=diaCh(c);return d>=ini&&d<=HJ}),res=rec.filter(c=>c.st==='Concluído').length,pR=rec.length?Math.round(res/rec.length*100):null;
 const barra=(rot,pct,sub,cor)=>`<div class="tq"><p><span>${rot}</span><b>${pct===null?'—':pct+'%'}</b></p><div class="bar"><i style="width:${pct||0}%;${cor?'background:'+cor:''}"></i></div><small>${sub}</small></div>`;
 const ps=colabs().map(p=>({p,r:realizadoPer(p.id,ini,HJ)}));
 // calendário: rotinas previstas no cronograma até hoje × feitas (ou "não teve", ou pessoa de férias/atestado)
 const LB=lbcEmDia(ini,HJ),cT=LB.tot,cO=LB.ok;
 const pC=cT?Math.round(cO/cT*100):null;
 return `<div class="panel"><div class="ph"><h2>Equipe no ${t.q}º trimestre de ${t.ano}</h2><span>${falta>0?`faltam ${falta} ${falta===1?'dia':'dias'} para o fechamento`:'trimestre encerrado'}</span></div>
 <div class="tqtop"><div class="tqbig"><span>A equipe realizou até agora</span><b>${T.total}</b><small>${T.ch} chamados concluídos · ${T.rot} rotinas do cronograma</small></div>
 <div class="tqbars">${barra('Trimestre percorrido',pT,`${pas} de ${tot} dias`)}<button class="tqlink" onclick="calFiltro()" title="Ver no calendário">${barra('L, B e C em dia (calendário)',pC,cT?`${cO} de ${cT} marcações dos dias úteis até hoje: feitas, "não teve" ou com férias · ver no calendário ›`:'nada marcado ainda','var(--ok)')}</button><button class="tqlink" onclick="ir('chamados')" title="Abrir os chamados">${barra('Chamados resolvidos',pR,rec.length?`${res} de ${rec.length} recebidos no trimestre`:'nenhum recebido ainda','var(--ok)')}</button><button class="tqlink" onclick="ir('chamados')" title="Abrir os chamados">${barra('Chamados no prazo',T.pct,T.chPrazo?`${T.chOk} de ${T.chPrazo} concluídos até o prazo`:'sem chamados com prazo concluídos','var(--accent)')}</button></div></div>
 ${ps.length?`<div class="tqpess">${ps.map(({p,r})=>`<button class="tqp" onclick="calFiltro('${esc(p.id)}')" title="Ver no calendário o que ${esc(p.n)} fez">${avP(p.id,p.n)}<div><b>${esc(p.n)}</b><small>${r.total} realizadas · ${r.pct===null?'—':r.pct+'% no prazo'}</small></div></button>`).join('')}</div>`:''}
 ${T.etapas.length?`<div class="chips2">${T.etapas.map(([g,n])=>`<button class="chip" onclick="calFiltro('','${esc(g)}')" title="Ver ${esc(g)} no calendário">${esc(g)} ${n}</button>`).join('')}</div>`:''}</div>`}
function calFiltro(pid,et){S.calPes=pid||'';S.calEt=et||'';S.cal=MES_ATUAL;ir('calendario')}
/* resumo da semana no Teams (teste): o Prumo monta e manda para o Workflows do Teams, que entrega ao diretor */
function teamsSheet(){FORM={tipo:'_teams'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Teams</p><h2 id="sheet-title">Resumo da semana no Teams</h2><p class="sub" style="font-size:13px">O Prumo manda para o Teams do diretor: chamados em aberto e atrasados, o que chegou e foi concluído na semana e o que a equipe fez no cronograma. Sem custo: usa o Workflows do próprio Teams.</p></div>
 <ol class="passos"><li>No Teams, o fluxo <b>Workflows</b> que recebe o aviso do Prumo e manda ao diretor precisa estar criado.</li><li>O endereço que o Teams gera fica guardado no Supabase como <b>TEAMS_WEBHOOK_URL</b>.</li><li>Clique em <b>Enviar teste agora</b> e confira se a mensagem chegou.</li></ol>
 <p class="meta" id="tm_res" style="margin:0"></p>
 <div class="foot"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" id="tm_btn" onclick="teamsTeste()">Enviar teste agora</button></div>`;
 document.getElementById('ov').hidden=false}
async function teamsTeste(){const sb=window.portalSupabase,b=document.getElementById('tm_btn'),o=document.getElementById('tm_res');if(!sb?.functions){toast('Funciona no sistema publicado, com login.');return}
 b.disabled=true;b.textContent='Enviando…';
 try{const {data,error}=await sb.functions.invoke('teams-resumo',{body:{}});
  if(error){let j=null;try{j=await error.context?.json()}catch(e){}const M={sem_webhook:'Falta guardar o endereço do Teams (TEAMS_WEBHOOK_URL) nos Secrets do Supabase.',sem_permissao:'Só o diretor ou um admin pode enviar.',teams_recusou:'O Teams recusou a mensagem. Confira se o endereço do fluxo está certo e se o fluxo está ligado.'};
   o.textContent=M[j?.erro]||(String(error.message||'').includes('Failed to send')||error.name==='FunctionsFetchError'?'A função teams-resumo ainda não foi publicada no Supabase.':'Não foi possível enviar agora.');o.style.color='var(--bad)';return}
  o.textContent=`Enviado. ${data?.atrasados??0} chamados atrasados e ${data?.feitas??0} marcações do cronograma na semana. Confira no Teams.`;o.style.color='var(--ok)';log('Enviou o resumo da semana para o Teams (teste)')}
 catch(e){o.textContent='Não foi possível enviar agora.'}finally{b.disabled=false;b.textContent='Enviar teste agora'}}
/* link público: painel ao vivo sem login (só números e nomes da equipe); só admin e diretor criam, trocam ou desligam */
const linkUrl=()=>CFG.linkPublico?.ativo&&CFG.linkPublico?.token?`${location.origin}/painel?t=${CFG.linkPublico.token}`:'';
function linkSheet(){if(!podeReuExp()){toast('O link público é liberado só para o admin e o diretor.');return}FORM={tipo:'_link'};const u=linkUrl();
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Compartilhar</p><h2 id="sheet-title">Link público do painel</h2><p class="sub" style="font-size:13px">Quem tiver o link vê o painel do departamento ao vivo, sem login e sem baixar nada: chamados do mês, atrasos, o que a equipe fez no trimestre e o L, B e C do dia. Não aparece assunto de e-mail, valor, conta ou dado de fornecedor.</p></div>
 ${u?`<div><label class="lbl" for="lk_u">Link</label><div style="display:flex;gap:8px"><input class="inp" id="lk_u" readonly value="${esc(u)}"><button class="btn pri" onclick="copiar(null,'${esc(u)}')">Copiar</button></div><p class="meta" style="margin:6px 0 0">Ligado desde ${esc(fmtHora(CFG.linkPublico.criado||''))}. <a href="${esc(u)}" target="_blank" rel="noopener">Abrir para conferir ↗</a></p></div>
 <div class="foot"><button class="btn danger" onclick="linkSalvar(false)">Desligar o link</button><div style="display:flex;gap:8px"><button class="btn" onclick="linkSalvar(true)">Gerar um link novo</button><button class="btn" onclick="fechar()">Fechar</button></div></div>
 <p class="meta" style="margin:0">Gerar um link novo faz o anterior parar na hora. Use se o link foi para alguém que não deveria ter.</p>`
 :`<div class="foot"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="linkSalvar(true)">Criar o link</button></div>`}`;
 document.getElementById('ov').hidden=false}
async function linkSalvar(on){if(!podeReuExp()||!DB)return;const tok=on?Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,'0')).join(''):'';
 const lp=on?{ativo:true,token:tok,criado:new Date().toISOString(),por:euNome()}:{ativo:false,token:'',desligado:new Date().toISOString(),por:euNome()};
 try{await DB.doc('config/estrutura').set({...CFG,linkPublico:lp});CFG.linkPublico=lp;log(on?'Criou um link público do painel (o anterior parou de funcionar)':'Desligou o link público do painel');toast(on?'Link criado':'Link desligado',3000);linkSheet()}
 catch(e){toast('Não foi possível salvar. Só administradores podem mudar a configuração.',5000)}}
function emitirSheet(){if(!podeReuExp()){toast('Emitir relatório e slides está liberado só para o admin e o diretor.');return}FORM={tipo:'_emit'};const R=proxReunioes(1),k=R[0]?`${R[0].d}|${R[0].h}`:'';
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Para a reunião ou para o diretor</p><h2 id="sheet-title">Emitir relatório ou slides</h2><p class="sub" style="font-size:13px">Painel dos chamados, atrasos, o que a equipe realizou e, se quiser, a pauta da próxima reunião. Com o fundo, o logo e as fotos da equipe.</p></div>
 <div class="fgrid"><div class="full"><label class="lbl" for="em_per">Período</label><select class="inp" id="em_per"><option value="sem">Últimos 7 dias</option><option value="mes">Este mês até hoje</option><option value="ant">Mês passado</option><option value="tri">Trimestre</option></select></div>
 ${k?`<label class="perm full"><input type="checkbox" id="em_reu" checked><span><b>Incluir a pauta da ${esc(reuTit(k).toLowerCase())}</b><small>Os assuntos, quem sugeriu e as respostas da equipe.</small></span></label>`:''}</div>
 <div class="foot"><button class="btn" onclick="fechar()">Fechar</button><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="emitir('rel','${esc(k)}')">Baixar relatório</button><button class="btn pri" onclick="emitir('slides','${esc(k)}')">Baixar slides</button></div></div>`;
 document.getElementById('ov').hidden=false}
function emitir(tipo,k){const per=periodoEmit(val('em_per')),r=document.getElementById('em_reu');baixarReu(r&&r.checked?k:'',tipo,per)}
function reuSheet(k){FORM={tipo:'_reu',k};const sh=document.getElementById('sheet');sh.classList.add('sheet-reu');sh.innerHTML='';reuPaint(true);document.getElementById('ov').hidden=false;setTimeout(()=>document.getElementById('rq_t')?.focus(),50)}
// redesenha a reunião sem perder o que está sendo digitado
function reuPaint(novo){if(FORM?.tipo!=='_reu')return;const sh=document.getElementById('sheet'),k=FORM.k;
 const vals={};if(!novo)sh.querySelectorAll('[id^="rq_"]').forEach(el=>vals[el.id]=[el.value,el.style.height]);
 const ae=document.activeElement,fid=ae&&sh.contains(ae)?ae.id:null,pos=fid&&ae.selectionStart!=null?[ae.selectionStart,ae.selectionEnd]:null,top=sh.scrollTop;
 const it=D.sugestoes.filter(x=>sugCat(x)==='reuniao'&&reuKey(x)===k).sort((x,y)=>sugFeita(x)-sugFeita(y)||(x.criadoEm||x.criado||'').localeCompare(y.criadoEm||y.criado||''));
 const pe=it.filter(x=>!sugFeita(x)).length;
 sh.innerHTML=`<div><p class="eyebrow">Melhorias · reunião da equipe</p><h2 id="sheet-title">${esc(reuTit(k))}</h2><p class="sub" style="font-size:13px">${it.length?`${pe} ${pe===1?'assunto a falar':'assuntos a falar'} de ${it.length}. Responda em cada assunto o que não pode esquecer.`:'Nenhum assunto ainda. Crie o primeiro.'}</p>${it.length&&podeReuExp()?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn" onclick="baixarReu(FORM.k,'rel')">Relatório (HTML)</button><button class="btn" onclick="baixarReu(FORM.k,'slides')">Slides para apresentar</button></div>`:''}</div>
 <div class="reunovo"><label class="lbl" for="rq_t">Novo assunto</label><input class="inp" id="rq_t" maxlength="200" placeholder="O que precisa ser falado nesta reunião" onkeydown="if(event.key==='Enter'){event.preventDefault();reuNovo()}"><textarea class="inp" id="rq_obs" rows="2" maxlength="5000" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,420)+'px'" placeholder="Detalhes · opcional"></textarea><div style="display:flex;justify-content:flex-end"><button class="btn pri" onclick="reuNovo()">Criar assunto</button></div></div>
 ${it.map(reuAssunto).join('')}
 <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;
 for(const [id,[v,hh]] of Object.entries(vals)){const el=document.getElementById(id);if(el&&v){el.value=v;if(hh)el.style.height=hh}}
 sh.scrollTop=top;if(fid){const el=document.getElementById(fid);if(el){el.focus();try{if(pos)el.setSelectionRange(pos[0],pos[1])}catch(e){}}}}
function reuAssunto(s){const fe=sugFeita(s),sid=esc(s.id),T=topDe(s),cri=s.criado||(s.criadoEm||'').slice(0,10);
 return `<div class="reuas ${fe?'feito':''}"><div class="reuhd"><b>${esc(s.t)}</b><span class="tag ${fe?'ok':'ac'}">${fe?'Falado':'A falar'}</span></div>
 ${s.obs?`<p class="reuobs">${esc(s.obs)}</p>`:''}<span class="meta">Criado por ${esc(sugAutor(s))}${cri?` em ${fmtAno(cri)}`:''}${s.faladoEm?` · falado em ${fmtAno(s.faladoEm)}`:''}</span>
 ${T.length?`<div class="reuresp">${T.map(x=>`<div class="resp"><p>${esc(x.txt)}</p><span class="meta">${esc(x.porNome||respNome(x.por)||'')}${x.em?` · ${fmt(x.em.slice(0,10))} às ${new Date(x.em).toTimeString().slice(0,5)}`:''}${!fe&&(x.por===S.perfil||dir())?` · <button class="lnk" onclick="topRem('${sid}','${esc(x.id)}')">tirar</button>`:''}</span></div>`).join('')}</div>`:''}
 ${fe?'':`<div class="topadd"><textarea class="inp" id="rq_r_${sid}" rows="2" maxlength="5000" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,420)+'px'" placeholder="Responder ou acrescentar um tópico" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();reuResp('${sid}')}"></textarea><button class="btn" onclick="reuResp('${sid}')">Responder</button></div>`}
 <div class="reuacts">${fe?`<button class="btn ghost" onclick="reuReabrir('${sid}')">Voltar para a falar</button>`:`<button class="btn ghost" onclick="sugFalado('${sid}')">Falado ✓</button>`}<button class="btn ghost" onclick="sugSheet('${sid}')">Editar</button></div></div>`}
async function reuNovo(){if(FORM?.tipo!=='_reu'||S.salvandoReu)return;const et=document.getElementById('rq_t'),eo=document.getElementById('rq_obs'),t=(et?.value||'').trim().slice(0,200),obs=(eo?.value||'').trim().slice(0,5000);
 if(!t){toast('Escreva o assunto.');et?.focus();return}
 const [d,h]=FORM.k.split('|');et.value='';eo.value='';S.salvandoReu=true;
 try{const ok=await salvar('sugestoes',null,{t,obs,cat:'reuniao',a:dir()?'dir':S.perfil,e:'A falar',reuData:d||'',reuHora:d?(h||''):'',faladoEm:'',topicos:[],v:1,criado:HJ,criadoEm:new Date().toISOString(),criadoPor:S.perfil,criadoUid:ME.uid||null,criadoNome:euNome()},'Assunto criado',`Criou o assunto "${t}"${d?` para a reunião de ${fmt(d)}`:''}`);
  if(!ok){const a=document.getElementById('rq_t'),b=document.getElementById('rq_obs');if(a)a.value=t;if(b)b.value=obs}}
 finally{S.salvandoReu=false;reuPaint()}}
async function reuResp(id){const s=D.sugestoes.find(x=>x.id===id),el=document.getElementById('rq_r_'+id),txt=(el?.value||'').trim().slice(0,5000);if(!s||!txt)return;
 el.value='';const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),txt,por:S.perfil,porNome:euNome(),em:new Date().toISOString()};
 const ok=await patch('sugestoes',id,{topicos:[...topDe(D.sugestoes.find(x=>x.id===id)||s),n]},null,`Respondeu no assunto "${s.t}": "${txt.slice(0,80)}"`);
 if(!ok){const e2=document.getElementById('rq_r_'+id);if(e2&&!e2.value)e2.value=txt}reuPaint()}
function reuReabrir(id){const s=D.sugestoes.find(x=>x.id===id);if(!s)return;patch('sugestoes',id,{e:'A falar',faladoEm:''},'Voltou para a falar',`Voltou o assunto "${s.t}" para a falar`)}
function topRem(id,tid){const s=D.sugestoes.find(x=>x.id===id),x=topDe(s||{}).find(y=>y.id===tid);if(!s||!x)return;if(!confirm(`Tirar a resposta "${x.txt}"?`))return;
 patch('sugestoes',id,{topicos:topDe(s).filter(y=>y.id!==tid)},'Resposta retirada',`Tirou a resposta "${x.txt}" do assunto "${s.t}"`)}
function sugFalado(id){const s=D.sugestoes.find(x=>x.id===id);if(!s)return;patch('sugestoes',id,{e:'Falado',faladoEm:HJ},'Marcado como falado',`Marcou como falado na reunião: "${s.t}"`)}
function sugSheet(id,cat){document.getElementById('sheet').classList.remove('sheet-reu');const s=id?D.sugestoes.find(x=>x.id===id):null;if(id&&!s)return;const c=s?sugCat(s):(cat==='sistema'?'sistema':'reuniao');
 FORM={tipo:'_sug',id:id||null};
 const R=proxReunioes(12),atual=s?.reuData?`${s.reuData}|${s.reuHora||''}`:'',naLista=R.some(r=>`${r.d}|${r.h}`===atual);
 const aut=s?(s.a||'dir'):(dir()?'dir':S.perfil),A=autoresSug();if(aut&&!A.some(x=>x[0]===aut))A.push([aut,respNome(aut)]);
 const cri=s?(s.criado||(s.criadoEm||'').slice(0,10)):HJ;
 const st=k=>`<select class="inp" id="sg_e_${k}">${SUG_ST[k].map(x=>`<option ${x===(s?.e)?'selected':''}>${x}</option>`).join('')}${s?.e&&sugCat(s)===k&&!SUG_ST[k].includes(s.e)?`<option selected>${esc(s.e)}</option>`:''}</select>`;
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Melhorias e sugestões</p><h2 id="sheet-title">${c==='reuniao'?(s?'Editar assunto':'Novo assunto'):(s?'Editar sugestão':'Nova sugestão')}</h2></div>
 <div class="fgrid">
  <div class="full"><label class="lbl" for="sg_t">${c==='reuniao'?'Assunto':'Sugestão'}</label><input class="inp" id="sg_t" maxlength="200" value="${esc(s?.t||'')}" placeholder="${c==='reuniao'?'Combinar a ordem das conferências na semana do fechamento':'Avisar no celular quando chegar chamado novo'}"><p class="ferr" id="sge_t"></p></div>
  <div class="full"><label class="lbl" for="sg_obs">Detalhes · opcional</label>${c==='reuniao'?'<p class="meta" style="margin:0 0 4px">Depois de salvar, qualquer pessoa da equipe pode responder neste assunto abrindo a reunião.</p>':''}<textarea class="inp" id="sg_obs" rows="3" maxlength="5000">${esc(s?.obs||'')}</textarea></div>
  <div><label class="lbl" for="sg_cat">Categoria</label><select class="inp" id="sg_cat" onchange="sugVis()">${SUG_CAT.map(([k,n])=>`<option value="${k}" ${k===c?'selected':''}>${n}</option>`).join('')}</select></div>
  <div><label class="lbl" for="sg_a">Sugerida por</label><select class="inp" id="sg_a">${A.map(([k,n])=>`<option value="${esc(k)}" ${k===aut?'selected':''}>${esc(n)}</option>`).join('')}</select></div>
  <div><span class="lbl">Criada em</span><p style="margin:8px 0 0">${cri?fmtAno(cri):'—'}${s?'':' (hoje)'}</p></div>
  <div><label class="lbl" for="sg_e_${c}">Situação</label><div id="sgw_e_reuniao">${st('reuniao')}</div><div id="sgw_e_sistema">${st('sistema')}</div></div>
  <div class="full" id="sgw_reu"><label class="lbl" for="sg_reu">Falar em qual reunião</label><select class="inp" id="sg_reu" onchange="sugVis()"><option value="">Ainda não definida</option>${R.map(r=>`<option value="${r.d}|${r.h}" ${`${r.d}|${r.h}`===atual?'selected':''}>${esc(reuTxt(r.d,r.h))}${r.t&&!/^reuni[aã]o$/i.test(r.t)?' · '+esc(r.t):''}</option>`).join('')}${atual&&!naLista?`<option value="${esc(atual)}" selected>${esc(reuTxt(s.reuData,s.reuHora))}</option>`:''}<option value="outra">Outro dia (marcar uma nova reunião)…</option></select>${R.length?'':'<p class="meta" style="margin:4px 0 0">Nenhuma reunião no calendário ainda. Escolha "Outro dia" ou cadastre a reunião semanal em Calendário.</p>'}</div>
  <div class="full" id="sgw_outra"><div class="fgrid" style="margin:0"><div><label class="lbl" for="sg_od">Data</label><input class="inp" id="sg_od" type="date" min="${HJ}"></div><div><label class="lbl" for="sg_oh">Horário · opcional</label><input class="inp" id="sg_oh" type="time"></div>
   <label class="perm full"><input type="checkbox" id="sg_cria" checked><span><b>Criar essa reunião no calendário da equipe</b><small>Ela aparece para todos em Calendário e em Próximos prazos.</small></span></label></div><p class="ferr" id="sge_od"></p></div>
 </div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaSug()">${s?'Salvar':'Registrar'}</button></div></div>`;
 document.getElementById('ov').hidden=false;sugVis()}
function sugVis(){const c=val('sg_cat'),sh=(i,v)=>{const el=document.getElementById(i);if(el)el.hidden=!v};
 sh('sgw_e_reuniao',c==='reuniao');sh('sgw_e_sistema',c==='sistema');sh('sgw_reu',c==='reuniao');sh('sgw_outra',c==='reuniao'&&val('sg_reu')==='outra')}
async function salvaSug(){if(FORM?.tipo!=='_sug'||S.salvandoSug)return;errEl('sge_t','');errEl('sge_od','');
 const t=val('sg_t').slice(0,200),obs=(document.getElementById('sg_obs')?.value||'').trim().slice(0,5000),cat=val('sg_cat')==='sistema'?'sistema':'reuniao',a=val('sg_a'),e=val('sg_e_'+cat),r=cat==='reuniao'?val('sg_reu'):'';
 if(!t){errEl('sge_t',cat==='reuniao'?'Escreva o assunto.':'Escreva a sugestão.');return}
 let reuData='',reuHora='',criar=false;
 if(r==='outra'){reuData=val('sg_od');reuHora=val('sg_oh');criar=!!document.getElementById('sg_cria')?.checked;if(!reuData){errEl('sge_od','Escolha a data da reunião.');return}if(reuData<HJ){errEl('sge_od','Escolha hoje ou uma data futura.');return}}
 else if(r){[reuData,reuHora]=r.split('|')}
 const ant=FORM.id?D.sugestoes.find(x=>x.id===FORM.id):null,{id:_,...b}=ant||{v:1,criado:HJ,criadoEm:new Date().toISOString(),criadoPor:S.perfil,criadoUid:ME.uid||null,criadoNome:euNome()};
 S.salvandoSug=true;
 try{if(criar)await salvar('eventos',null,{t:'Reunião da equipe',tipo:'Reunião',rep:'unica',data:reuData,dias:[],n:1,hora:reuHora,fim:'',quem:'todos',ps:[],obs:`Marcada para falar de: ${t}`.slice(0,200),criado:HJ,criadoPor:S.perfil,criadoUid:ME.uid||null,criadoNome:euNome()},null,`Marcou uma reunião em ${fmt(reuData)}${reuHora?' às '+reuHora:''} para falar de "${t}"`);
  const dados={...b,t,obs,cat,a,e:e||(cat==='reuniao'?'A falar':'Nova'),reuData,reuHora};dados.faladoEm=dados.e==='Falado'?(ant?.faladoEm||HJ):'';
  if(await salvar('sugestoes',FORM.id||null,dados,ant?'Sugestão atualizada':'Sugestão registrada',`${ant?'Alterou':'Registrou'} a sugestão ${cat==='reuniao'?'para reunião':'para o sistema'}: "${t}"${reuData?` · reunião de ${fmt(reuData)}`:''}`)){S.sugAba=cat;fechar()}}
 finally{S.salvandoSug=false}}
function vt(id){const s=D.sugestoes.find(x=>x.id===id);patch('sugestoes',id,{v:(s.v||0)+1},null,false)}
function editEstr(){
 FORM={tipo:'_estr'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Atualizar</p><h2 id="sheet-title">Estruturação do departamento</h2><p class="sub" style="font-size:13px">Quantos processos já foram mapeados e qual é a meta. Os demais indicadores são calculados sozinhos.</p></div>
 <div class="fgrid"><div><label class="lbl" for="f_map">Processos mapeados</label><input class="inp" id="f_map" type="number" min="0" value="${+CFG.mapeados||0}"></div><div><label class="lbl" for="f_meta">Meta de processos</label><input class="inp" id="f_meta" type="number" min="1" value="${+CFG.meta||25}"></div><p class="ferr full" id="e_estr"></p></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaEstr()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaEstr(){S._estr=1;const a=+document.getElementById('f_map').value,b=+document.getElementById('f_meta').value;
 if(!(a>=0)||!(b>=1)){document.getElementById('e_estr').textContent='Informe números válidos. A meta precisa ser pelo menos 1.';return}
 if(!DB){toast('O armazenamento não está disponível nesta visualização.');return}
 try{await DB.doc('config/estrutura').set({...CFG,mapeados:a,meta:b});log(`Atualizou a estruturação: ${a} de ${b} processos mapeados`);toast('Indicadores atualizados');fechar()}catch(e){toast('Não foi possível salvar.')}}
async function limparEx(){
 if(!S.limpar){S.limpar=true;render();return}
 S.limpar=false;let n=0;
 for(const c of COLS)for(const x of D[c].filter(x=>x.exemplo)){try{await DB.collection(c).doc(x.id).delete();n++}catch(e){}}
 toast(`${n} exemplos removidos`)}

const logDias=()=>Math.max(7,+CFG.logDias||60);
async function logArqCarregar(){const m=S.logMes;if(!m)return;if(!DB){S.logArq={mes:m,itens:[]};const e0=document.getElementById('loglist');if(e0)e0.innerHTML=logRows();return}S.logArqLendo=true;S.logArq={mes:m,itens:null};const el=document.getElementById('loglist');if(el)el.innerHTML='<p class="sub" style="padding:12px">Abrindo o arquivo…</p>';
 try{const d=await DB.doc('logs_arq/'+m).get();S.logArq={mes:m,itens:d.exists?(d.data().itens||[]).slice().reverse():[]}}catch(e){S.logArq={mes:m,itens:[],erro:true}}
 S.logArqLendo=false;if(S.tela==='logs'&&S.logAba==='arq'&&S.logMes===m){const e2=document.getElementById('loglist');if(e2)e2.innerHTML=logRows()}}
function logRows(){if(S.tela==='logs'&&S.logAba==='arq'){const A=S.logArq;if(!A||A.mes!==S.logMes){setTimeout(logArqCarregar,0);return '<p class="sub" style="padding:12px">Abrindo o arquivo…</p>'}
  if(!A.itens)return '<p class="sub" style="padding:12px">Abrindo o arquivo…</p>';if(A.erro)return vazio('Não foi possível abrir este mês','Tente de novo em instantes.');
  const q=(S.fLog||'').toLowerCase(),l=A.itens.filter(x=>!q||((x.acao||'')+' '+quemLog(x)).toLowerCase().includes(q));
  return l.length?l.map(x=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(x.em)}</span><div class="t"><b style="font-weight:400">${esc(x.acao)}</b><span>${esc(quemLog(x))}</span></div></div>`).join(''):vazio(q?'Nada encontrado':'Nada arquivado neste mês',q?'Tente outro termo.':'As ações entram aqui quando completam '+logDias()+' dias.')}
 const q=(S.fLog||'').toLowerCase(),l=D.logs.filter(x=>!q||((x.acao||'')+' '+quemLog(x)).toLowerCase().includes(q));
 return l.length?l.map(x=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(x.em)}</span><div class="t"><b style="font-weight:400">${esc(x.acao)}</b><span>${esc(quemLog(x))}</span></div></div>`).join(''):vazio(q?'Nada encontrado':'Nenhuma atividade registrada ainda',q?'Tente outro termo.':'Cada registro, alteração e exclusão aparece aqui automaticamente.')}
function cfgPrazo(){FORM={tipo:'_cfg'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Política de chamados</p><h2 id="sheet-title">Regras de prazo</h2><p class="sub" style="font-size:13px">Quantos dias úteis antes do vencimento os departamentos precisam abrir o chamado.</p></div>
 <div><label class="lbl" for="f_dm">Dias úteis</label><input class="inp" id="f_dm" type="number" min="0" max="30" value="${DMIN()}"><p class="ferr" id="e_dm"></p></div>
 <div><span class="lbl">E-mails dos departamentos · chegou em dia</span><p class="meta" style="margin:0 0 6px">O e-mail precisa trazer a data pedida e chegar com esta antecedência. Sem data, ou com menos tempo, conta como atrasado.</p><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span>D-</span><input class="inp" id="f_cm" type="number" min="0" max="60" style="width:90px" value="${CHEG_MIN()}"><select class="inp" id="f_cu" style="width:auto"><option value="c" ${CHEG_UTEIS()?'':'selected'}>dias corridos</option><option value="u" ${CHEG_UTEIS()?'selected':''}>dias úteis</option></select></div><p class="ferr" id="e_cm"></p></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfg()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaCfg(){const v=+document.getElementById('f_dm').value,cm=+document.getElementById('f_cm').value,cu=document.getElementById('f_cu').value==='u';if(!(v>=0&&v<=30)){document.getElementById('e_dm').textContent='Informe um número entre 0 e 30.';return}if(!(cm>=0&&cm<=60)){document.getElementById('e_cm').textContent='Informe um número entre 0 e 60.';return}
 if(!DB)return toast('O armazenamento não está disponível nesta visualização.');
 try{await DB.doc('config/estrutura').set({...CFG,diasMin:v,chegadaMin:cm,chegadaUteis:cu});log(`Alterou a regra de prazo de chamados para ${v} dias úteis e a antecedência dos e-mails para D-${cm} ${cu?'dias úteis':'dias corridos'}`);toast('Regra atualizada');fechar()}catch(e){toast('Não foi possível salvar.')}}
/* ---------- conectar o e-mail da Microsoft ---------- */
/* caixa dos chamados conectada com outra conta (volta da Microsoft com ?ms=ok ou ?ms=erro) */
(function(){try{const q=new URLSearchParams(location.search),m=q.get('ms');if(!m)return;
 const em=q.get('email')||'',mo=q.get('motivo')||'';history.replaceState(history.state,'',location.pathname+location.hash);
 try{sessionStorage.removeItem('ms_token_eq')}catch(e){}
 setTimeout(()=>{if(m==='ok'){toast(`Caixa dos chamados conectada${em?' com '+em:''}. Os e-mails vão carregar em instantes.`);window.dispatchEvent(new Event('prumo-ms-equipe'));try{log(`Conectou a caixa dos chamados${em?' com '+em:''}`)}catch(e){}}
  else toast('Não foi possível conectar a caixa dos chamados: '+mo,8000)},2500)}catch(e){}})();
async function conectarCaixa(){const b=document.getElementById('cx_btn');if(b){b.disabled=true;b.textContent='Abrindo a Microsoft…'}
 const ok=window.portalConectarCaixa?await window.portalConectarCaixa():false;
 if(!ok){if(b){b.disabled=false;b.textContent='Conectar caixa dos chamados'}const e=window.portalMsErro;toast(e?.erro==='sem_permissao'?'Só diretor, admin ou quem tem a permissão E-mails recebidos pode conectar a caixa.':e?.status===401||e?.status===404?'A função ms-token precisa ser publicada de novo e com "Verify JWT" desligado no Supabase.':'Não foi possível abrir a conexão agora.',8000)}}
async function conectarEmail(){FORM={tipo:'_conectar'};const sh=document.getElementById('sheet');
 sh.innerHTML=`<div><p class="eyebrow">E-mails recebidos</p><h2 id="sheet-title">Conectar e-mail</h2></div><p class="meta">Verificando…</p>`;document.getElementById('ov').hidden=false;
 const ativo=window.portalMicrosoftAtivo?await window.portalMicrosoftAtivo():null;if(FORM?.tipo!=='_conectar')return;
 const cb=(window.PORTAL_CONFIG||{}).supabaseUrl?(window.PORTAL_CONFIG.supabaseUrl.replace(/\/+$/,'')+'/auth/v1/callback'):'https://SEU-PROJETO.supabase.co/auth/v1/callback';
 if(ativo){sh.innerHTML=`<div><p class="eyebrow">E-mails recebidos</p><h2 id="sheet-title">Conectar o e-mail da empresa</h2><p class="sub" style="font-size:13px">A conta que você conectar vira a <b>conexão da equipe</b>: o Prumo busca os e-mails sozinho para todos, e a conexão se renova sozinha. Ele nunca vê a sua senha.${S.msEq?.equipe?` Hoje a equipe está conectada por <b>${esc(S.msEq.equipe.email||'—')}</b>.`:''}</p></div>
  <div class="panel" style="margin:0"><div class="ph"><h2>Caixa dos chamados</h2></div><p class="meta" style="margin:0 0 10px">Conecte a conta de onde chegam os pedidos, por exemplo o <b>contas a pagar</b>. Você continua no Prumo com a sua conta${ME.email?` (${esc(ME.email)})`:''}; só a leitura dos e-mails usa a outra conta.</p>
  <ol class="passos"><li>Clique em <b>Conectar caixa dos chamados</b>.</li><li>Na tela da Microsoft, escolha <b>Usar outra conta</b> e entre com o e-mail do contas a pagar.</li><li>Clique em <b>Aceitar</b>. Você volta para o Prumo e os e-mails carregam.</li></ol>
  <div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn pri" id="cx_btn" onclick="conectarCaixa()">Conectar caixa dos chamados</button></div></div>
  <details class="dmais" style="margin-top:12px"><summary>Entrar de novo com a minha conta (para enviar e-mails em meu nome)</summary><p class="meta">Use só se o Prumo pedir para reconectar a sua conta. Isso entra no Prumo com a conta que você escolher.</p><button class="btn" onclick="window.portalReconectarMicrosoft()">Entrar com a minha conta</button></details>
  <div class="foot"><span></span><button class="btn" onclick="fechar()">Fechar</button></div>`;return}
 const pedido=`Preciso registrar o sistema Prumo no Microsoft Entra ID para ele ler e enviar e-mails pelo Outlook com a conta de cada usuário.

1. App registrations > New registration: nome Prumo, somente esta organização. Redirect URI (Web): ${cb}
2. API permissions > Microsoft Graph > Delegated: openid, profile, email, offline_access, User.Read, Mail.Read, Mail.Read.Shared, Mail.Send. Depois, Grant admin consent.
3. Certificates & secrets: criar um Client secret.
4. Me passar o Application (client) ID e o Directory (tenant) ID. O valor do secret deve ser colado direto no Supabase (Authentication > Sign In / Providers > Azure), não por e-mail.`;
 FORM.pedido=pedido;
 sh.innerHTML=`<div><p class="eyebrow">E-mails recebidos</p><h2 id="sheet-title">Falta um passo, feito uma vez só</h2><p class="sub" style="font-size:13px">A Microsoft exige que todo sistema que lê e-mails seja registrado no Microsoft 365 da empresa. Depois disso, o botão Conectar e-mail leva direto para a tela de aceite da Microsoft.</p></div>
  <ol class="passos"><li><b>A TI registra o Prumo.</b> Copie o pedido abaixo e mande para a TI.</li><li><b>Alguém com acesso ao Supabase</b> abre <b>Authentication › Sign In / Providers › Azure</b>, liga e cola o Client ID, o secret e <b>https://login.microsoftonline.com/</b> seguido do tenant ID.</li><li>Volte aqui e clique em <b>Conectar e-mail</b>.</li></ol>
  <pre class="mailbody" style="max-height:260px">${esc(pedido)}</pre>
  ${ativo===null?note('Não foi possível verificar agora se a conexão já está ligada. Se a TI já fez o registro, recarregue a página e tente de novo.'):''}
  <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Fechar</button><button class="btn pri" onclick="copiar('',FORM.pedido)">Copiar pedido para a TI</button></div></div>`}

/* ---------- painel do diretor: demandas ---------- */
function demResumo(){if(!pode('chamados')&&!pode('realizadas'))return '';
 const ab=D.chamados.filter(c=>c.st!=='Concluído'),atr=ab.filter(chAtrasado).sort((a,b)=>a.prazo<b.prazo?-1:1),mes=D.chamados.filter(c=>c.st==='Concluído'&&(c.concl||'').slice(0,7)===MES_ATUAL),cp=mes.filter(c=>c.prazo),ok=cp.filter(c=>!(c.concl>c.prazo)).length;
 if(!D.chamados.length)return '';
 return `<div class="panel"><div class="ph"><h2>Demandas</h2><div style="display:flex;gap:6px;flex-wrap:wrap">${pode('chamados')?`<button class="btn ghost" onclick="ir('chamados')">Painel de chamados</button>`:''}${pode('realizadas')?`<button class="btn ghost" onclick="ir('realizadas')">Realizadas</button>`:''}</div></div>
 <div class="stats"><div class="stat"><p>Em andamento</p><strong>${ab.length}</strong></div><div class="stat"><p>Atrasadas</p><strong style="color:${atr.length?'var(--bad)':'var(--ink)'}">${atr.length}</strong></div><div class="stat"><p>Concluídas no mês</p><strong>${mes.length}</strong></div><div class="stat"><p>No prazo no mês</p><strong>${cp.length?Math.round(ok/cp.length*100)+'%':'—'}</strong></div></div>
 ${atr.slice(0,5).map(c=>`<div class="row"><div class="t"><b>${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(catTxt(c))} · ${esc(respNome(c.resp))} · prazo ${fmt(c.prazo)}</span></div><span class="tag bad">${stPrazo(c)[1]}</span><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Detalhes</button></div>`).join('')}</div>`}
async function csvRealizadas(){const L=S._realiz||[];if(!L.length){toast('Nada para baixar com esses filtros.');return}if(!DL){toast('O download não está disponível nesta visualização.');return}
 const q=v=>`"${String(v??'').replace(/"/g,'""')}"`;
 const cab=['Protocolo','Resumo','Setor','Assunto','Subcategoria','Tipo','Remetente ou solicitante','Chegou em','Aceita em','Aceita por','Prazo','Concluída em','Realizada por','Situação'];
 const lin=L.map(c=>[c.proto,c.assunto,c.dep?depNome(c.dep):'',assDe(c.cat)?assNome(c.cat):'',c.subcat||'',c.tipo,c.solicitante||'',fmtAno((c.recebidoEm||c.aberto||'').slice(0,10)),c.aceito?fmtAno(c.aceito):'',c.aceitoNome||'',c.prazo?fmtAno(c.prazo):'',fmtAno(c.concl),quemFezNome(c),(stPrazo(c)||['','Sem prazo definido'])[1]].map(q).join(';'));
 try{await DL.save({filename:`demandas-realizadas-${HJ}.csv`,data:new Blob(['﻿'+[cab.map(q).join(';'),...lin].join('\r\n')],{type:'text/csv'})});log(`Baixou a planilha de demandas realizadas (${L.length})`)}catch(e){toast('Não foi possível gerar o arquivo.')}}

/* ---------- aparência: claro, escuro ou automático ---------- */
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
function tema(){try{return localStorage.getItem('prumo_tema')||'auto'}catch(e){return 'auto'}}
function setTema(t){try{if(t==='auto')localStorage.removeItem('prumo_tema');else localStorage.setItem('prumo_tema',t)}catch(e){}
 if(t==='auto')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',t);marcarTema()}
function temaBox(){const t=tema(),I={auto:'<circle cx="12" cy="12" r="8"/><path d="M12 4v16"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',dark:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>'};
 return `<div class="temas temas-top" role="group" aria-label="Aparência">${[['auto','Automático'],['light','Claro'],['dark','Escuro']].map(([k,l])=>`<button type="button" data-t="${k}" title="Aparência: ${l}" aria-label="${l}" aria-pressed="${t===k}" onclick="setTema('${k}')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">${I[k]}</svg></button>`).join('')}</div>`}
function marcarTema(){document.querySelectorAll('.temas button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.t===tema())))}
marcarTema();

/* ---------- continuar de onde parou: tela, filtros, rolagem e o que estava digitando ---------- */
const EST_K=['mM','chM','cTab','cQuem','cSis','tela','fRem','fDepC','fCat','fResp','fBusca','rPer','rCat','rDep','rQuem','fDep','fLog','fFer','busca','mesDest','cal','iPer','fRemT','fbP'];
S.scroll={};
function salvarEstado(){if(S.modo==='carregando')return;const o={scroll:S.scroll,em:Date.now()};EST_K.forEach(k=>{if(S[k]!==undefined&&S[k]!==null)o[k]=S[k]});
 if(['fbedit','fbver'].includes(o.tela))o.tela=S.fbP?'fbpessoa':'feedbacks';LS.set('prumo_estado',o)}
(function(){const o=LS.get('prumo_estado',null);
 if(o&&Date.now()-(o.em||0)<30*864e5){EST_K.forEach(k=>{if(o[k]!==undefined&&!(k==='tela'&&Date.now()-(o.em||0)>2*36e5))S[k]=o[k]});S.scroll=o.scroll||{}}
 const h=(location.hash||'').slice(1);if(/^[a-z]+$/.test(h)&&V[h])S.tela=h;
 if(S.tela==='fbpessoa'&&!S.fbP)S.tela='feedbacks';if(['fbedit','fbver'].includes(S.tela))S.tela='feedbacks';
 S.voltarScroll=true})();
let _rolar;window.addEventListener('scroll',()=>{clearTimeout(_rolar);_rolar=setTimeout(()=>{if(S.modo==='carregando')return;S.scroll[S.tela]=window.scrollY;salvarEstado()},250)},{passive:true});

/* botão Voltar do navegador e do celular: fecha o painel aberto ou volta para a tela anterior */
new MutationObserver(()=>{const ov=document.getElementById('ov');if(!ov.hidden&&!(history.state&&history.state.sheet)){try{history.pushState({...(history.state||{}),sheet:1},'')}catch(e){}}}).observe(document.getElementById('ov'),{attributes:true,attributeFilter:['hidden']});
window.addEventListener('popstate',e=>{if(S.pulaPop){S.pulaPop=false;return}
 const ov=document.getElementById('ov');if(!ov.hidden){ov.hidden=true;FORM=null;return}
 const t=e.state?.tela||(location.hash||'').slice(1);if(t&&t!==S.tela&&V[t])ir(t,true)});

/* rascunhos: o que foi digitado num formulário volta quando você reabre */
const RASC_K='prumo_rasc';let RASC=LS.get(RASC_K,{});
(function(){const lim=Date.now()-7*864e5;for(const k in RASC)if(!(RASC[k]?.em>lim))delete RASC[k]})();
const SEM_RASC=new Set(['_link','_nt','_aus','_real','_ajout','_teams','_criador','_diaf','_menu','_emit','_ajuste','_iacp','_reu','_det','_copia','_busca','_sair','_rest','_ler','_assuntos','_resumo']);
function chaveSheet(f){f=f||FORM;if(!f||SEM_RASC.has(f.tipo))return null;return 'sh:'+f.tipo+':'+(f.id||f.uid||f.ref||'')}
function chaveMain(){if(S.tela==='abrir')return 'tela:abrir:'+S.perfil;if(S.tela==='fbedit'&&S.fbEd)return 'tela:fbedit:'+(S.fbEd.id||'novo');return null}
const camposDe=root=>[...root.querySelectorAll('input[id],textarea[id],select[id]')].filter(el=>!['password','file','hidden','search'].includes(el.type)&&!el.dataset.nodraft);
const lerV=el=>el.type==='checkbox'||el.type==='radio'?el.checked:el.value;
const avisar=el=>el.dispatchEvent(new Event(el.tagName==='SELECT'||el.type==='checkbox'||el.type==='radio'?'change':'input',{bubbles:true}));
function limparRascunho(k){if(!k||!RASC[k])return;delete RASC[k];LS.set(RASC_K,RASC)}
function ligarRascunho(root,key){if(!key){root._rb=null;return}
 if(!root._rb||root._rb.key!==key)root._rb={key,base:Object.fromEntries(camposDe(root).map(el=>[el.id,lerV(el)]))};
 const r=RASC[key];if(!r)return;let n=0;
 for(const [id,d] of Object.entries(r.f||{})){const el=document.getElementById(id);if(!el||!root.contains(el)||d.v===d.b||lerV(el)!==d.b)continue;
  if(el.type==='checkbox'||el.type==='radio')el.checked=d.v;else{if(el.tagName==='SELECT'&&![...el.options].some(o=>o.value===d.v))continue;el.value=d.v}
  avisar(el);n++}
 if(n&&!root.querySelector('.rasc')){const b=document.createElement('div');b.className='banner rasc';b.innerHTML='<span>Continuando de onde você parou.</span><button class="btn" type="button">Descartar o que eu tinha digitado</button>';
  b.querySelector('button').onclick=()=>descartarRascunho(root);const alvo=root.id==='sheet'?root.firstElementChild:root.querySelector('#topbar');if(alvo)alvo.after(b);else root.prepend(b)}}
function descartarRascunho(root){const k=root._rb?.key,r=k&&RASC[k];if(!r)return;limparRascunho(k);
 for(const [id,d] of Object.entries(r.f||{})){const el=document.getElementById(id);if(!el)continue;if(el.type==='checkbox'||el.type==='radio')el.checked=d.b;else el.value=d.b;avisar(el)}
 limparRascunho(k);root.querySelector('.rasc')?.remove()}
function anotar(e){const el=e.target;if(!el||!el.id)return;const root=el.closest('#sheet')||el.closest('#main');if(!root||!root._rb)return;const {key,base}=root._rb;if(!(el.id in base))return;
 const v=lerV(el),b=base[el.id],r=RASC[key]=RASC[key]||{f:{}};if(v===b)delete r.f[el.id];else r.f[el.id]={v,b};r.em=Date.now();if(!Object.keys(r.f).length)delete RASC[key];
 clearTimeout(anotar.t);anotar.t=setTimeout(()=>LS.set(RASC_K,RASC),300)}
document.addEventListener('input',anotar,true);document.addEventListener('change',anotar,true);
let _formAnt=null;
new MutationObserver(()=>{const sh=document.getElementById('sheet');if(_formAnt&&_formAnt!==FORM&&_formAnt.gravou){const k=chaveSheet(_formAnt);if(k)limparRascunho(k)}_formAnt=FORM;ligarRascunho(sh,chaveSheet())}).observe(document.getElementById('sheet'),{childList:true});

/* marca quando um formulário aberto realmente gravou algo, para não trazer de volta um rascunho já salvo */
function vigiarDB(db){const marca=p=>{const c=String(p).split('/')[0];if(FORM&&!['logs','sync','backups','data'].includes(c))FORM.gravou=true};
 const doc=r=>{for(const m of ['set','update','delete']){const f=r[m].bind(r);r[m]=async(...a)=>{const x=await f(...a);marca(r.path);return x}}const sub=r.collection;r.collection=n=>col(sub(n));return r};
 const col=c=>{const d=c.doc,a=c.add;c.doc=id=>doc(d(id));c.add=async v=>{const x=await a(v);marca(c.path);return x};return c};
 return {doc:p=>doc(db.doc(p)),collection:p=>col(db.collection(p))}}

/* ---------- render ---------- */
function nav(){const pm=pode('whats')?pendMsg():0,na=alertas().filter(a=>a.c==='bad').length,nc=D.chamados.filter(c=>c.st==='Aberto'&&!c.resp).length,nt=emPend().length,np=D.pedidos.filter(p=>!acessoDe(p.id)).length;
 const nr=atrasosCron(vejoRot).length;const badge=(k)=>k==='rotinas'&&nr?`<span class="count" style="background:var(--bad-bg);color:var(--bad)" title="Rotinas em atraso">${nr}</span>`:k==='whats'&&pm?`<span class="count">${pm}</span>`:k==='chamados'&&(nc||(pode('email')&&nt))?`<span class="count" style="background:var(--accent-soft);color:var(--accent-ink)" title="${nc} sem responsável${pode('email')&&nt?` · ${nt} e-mails para revisar`:''}">${nc+(pode('email')?nt:0)}</span>`:k==='usuarios'&&np?`<span class="count">${np}</span>`:k==='alertas'&&na?`<span class="count" style="background:var(--bad-bg);color:var(--bad)">${na}</span>`:'';
 document.getElementById('nav').innerHTML=(solic()||S.perfil==='pendente'||S.modo==='carregando'?'':`<button class="nav reg ${S.tela==='registrar'?'on':''}" onclick="ir('registrar')" title="Registrar">${ic('reg')}<span>Registrar</span></button>`)+
 (S.modo==='carregando'?'':vis().map(([k,n])=>`<button class="nav ${(MENU_PAI[S.tela]||S.tela)===k?'on':''}" onclick="ir('${k}')" title="${esc(n)}">${ic(k)}<span>${n}</span>${badge(k)}</button>`).join(''))}
/* menu lateral recolhido: só os ícones, e a área de trabalho fica maior (fica lembrado neste computador) */
function tgLateral(f){const a=document.getElementById('app');if(!a)return;const on=f===undefined?!a.classList.contains('menumini'):!!f;a.classList.toggle('menumini',on);
 const b=document.getElementById('recolher');if(b){b.textContent=on?'›':'‹';b.setAttribute('aria-label',on?'Abrir o menu':'Recolher o menu');b.title=on?'Abrir o menu':'Recolher o menu'}
 if(f===undefined)try{localStorage.setItem('menuMini',on?'1':'0')}catch(e){}}
try{if(localStorage.getItem('menuMini')==='1')tgLateral(true)}catch(e){}
function perfis(){const q=document.getElementById('quem'),box=document.getElementById('simbox');
 q.innerHTML=S.modo==='carregando'?'':real()?`<button class="me mebtn" onclick="fotoSheet()" title="Mudar a foto de perfil">${avU(ME.uid)}<div style="min-width:0;text-align:left"><b>${esc(ME.nome||'Você')}</b><span>${esc(rotuloBase())} · foto</span></div></button>`:`<p class="meta" style="margin:0">Modo demonstração, sem login</p>`;
 box.hidden=S.modo==='carregando'||!podeSimular();if(box.hidden)return;
 const sel=document.getElementById('perfil');
 sel.innerHTML=(real()?'<option value="">Meu perfil</option>':'')+'<optgroup label="Financeiro e contábil"><option value="dir">Diretor</option>'+D.equipe.map(p=>`<option value="${esc(p.id)}">${esc(p.n)} · ${esc(p.c)}</option>`).join('')+'</optgroup>'+(D.departamentos.length?'<optgroup label="Outros departamentos">'+D.departamentos.map(d=>`<option value="sol:${esc(d.id)}">Solicitante · ${esc(d.n)}</option>`).join('')+'</optgroup>':'');
 if(S.sim&&S.sim!=='dir'&&!(S.sim.startsWith('sol:')?depDe(S.sim.slice(4)):pessoa(S.sim)))S.sim='';
 sel.value=S.sim||(real()?'':'dir')}
function render(o){
 if(FORM?.tipo==='_reu'&&!document.getElementById('ov').hidden){try{reuPaint()}catch(e){}}
 aplicarPerfil();perfis();
 const m=document.getElementById('main');
 if(S.modo==='carregando'||(real()&&!S.acOk)){nav();m.innerHTML='<p class="sub">Carregando o portal…</p>';return}
 if(!(S.tela==='registrar'&&!solic()&&S.perfil!=='pendente')&&!vis().some(x=>x[0]===(MENU_PAI[S.tela]||S.tela)))S.tela=vis()[0][0];
 nav();resolverPerfis();
 if(o&&o.snap&&!S.fbForce&&m.dataset.tela===S.tela&&m.dataset.perfil===S.perfil){const ae=document.activeElement;const digitando=ae&&m.contains(ae)&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)&&ae.type!=='checkbox';
  if(S.tela==='fbedit'||digitando){const tb=document.getElementById('topbar');if(tb)tb.innerHTML=bell();const sd=document.getElementById('fbside');if(sd&&S.tela==='fbedit'&&!(ae&&sd.contains(ae)))sd.innerHTML=fbSide();S.pend=true;return}}
 S.fbForce=false;S.pend=false;
 if(S.tela==='abrir'&&document.getElementById('chform')&&!S.forceAbrir&&m.dataset.tela==='abrir'&&m.dataset.perfil===S.perfil){document.getElementById('topbar').innerHTML=bell();return}
 S.forceAbrir=false;
 const avisos=(S.online===false?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>O armazenamento não está disponível nesta visualização. Você pode navegar, mas nada será salvo.</span></div>`:'')+
  (real()&&ME.write===false?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Seu acesso a este link é só de visualização, então nada que você fizer será salvo. Peça para compartilharem o portal com você como Colaborador.</span></div>`:'')+
  (real()&&S.sim?`<div class="banner"><span>Você está vendo o portal como <b style="font-weight:600">${esc(quemSou())}</b>. O que fizer aqui fica registrado no seu nome, marcado como simulação.</span><button class="btn" onclick="S.sim='';S.forceAbrir=true;render()">Voltar ao meu perfil</button></div>`:'');
 const ae=document.activeElement,fid=ae&&ae.id&&m.contains(ae)?ae.id:null,pos=fid&&ae.selectionStart!=null?ae.selectionStart:null;
 m.dataset.tela=S.tela;m.dataset.perfil=S.perfil;
 const _ts=document.getElementById('tscroll')?.scrollTop||0;m.innerHTML=`<div id="topbar">${S.perfil==='pendente'?'':bell()}</div>`+avisos+V[S.tela]();if(_ts){const t2=document.getElementById('tscroll');if(t2)t2.scrollTop=_ts}
 ligarRascunho(m,chaveMain());salvarEstado();
 if(S.voltarScroll){S.voltarScroll=false;try{history.replaceState({tela:S.tela},'','#'+S.tela)}catch(e){}const y=S.scroll[S.tela]||0;if(y)setTimeout(()=>window.scrollTo({top:y}),60)}
 if(fid){const el=document.getElementById(fid);if(el){el.focus();try{if(pos!=null)el.setSelectionRange(pos,pos)}catch(e){}}}
 if(S.tela==='abrir')prazoCh()}
document.getElementById('perfil').addEventListener('change',e=>{S.sim=e.target.value||(real()?'':'dir');S.bell=false;S.forceAbrir=true;render()});
render();

(async()=>{
 const C=window.claude,use=n=>C?.use?C.use(n).catch(()=>null):Promise.resolve(null);
 use('mcp').then(m=>{MCP=m;render()});use('downloads').then(d=>{DL=d});
 const [db,user]=await Promise.all([use('db'),use('user')]);
 USER=user;
 if(user){const m=await user.me();ME.uid=m.id;ME.owner=m.isOwner;ME.edit=m.canEdit;ME.admin=!!(m.isOwner||m.canEdit);ME.nome=m.name||'';ME.email=m.email;ME.write=await user.can('data.write')}
 S.modo=ME.uid&&db?'real':'demo';if(!real())S.sim=S.sim||'dir';
 if(!db){S.online=false;render();return}
 DB=vigiarDB(db);S.online=true;
 let t;const later=()=>{clearTimeout(t);t=setTimeout(()=>render({snap:true}),40)};
 document.getElementById('main').addEventListener('focusout',()=>setTimeout(()=>{if(S.pend&&S.tela!=='fbedit'&&!document.getElementById('main').contains(document.activeElement))render()},200));
 COLS.forEach(c=>db.collection(c).onSnapshot(s=>{D[c]=s.docs.map(d=>({id:d.id,...d.data()}));if(c==='feitos'||c==='execucoes'){D[c+'Anul']=D[c].filter(x=>x.anulado);D[c]=D[c].filter(x=>!x.anulado)}if(c==='acessos')S.acOk=true;later()},()=>{if(c==='acessos'){S.acOk=true;later()}}));
 db.doc('config/estrutura').onSnapshot(s=>{CFG=s.exists?s.data():{};later()},()=>{});
 db.doc('sync/estado').onSnapshot(s=>{SYNC=s.exists?s.data():{};later()},()=>{});
 db.collection('backups').onSnapshot(s=>{D.backups=s.docs.map(d=>({id:d.id,...d.data()}));S.bkCarregado=true;later()},()=>{S.bkCarregado=true});
 if(ME.uid)db.doc('data/users/'+ME.uid+'/prefs').onSnapshot(s=>{S.prefs=s.exists?s.data():{};later()},()=>{});
 let first=true;
 db.collection('logs').orderBy('em','desc').limit(300).onSnapshot(s=>{
  D.logs=s.docs.map(d=>({id:d.id,...d.data()}));
  first=false;later()},()=>{});
 iniciarAutoSync();
 setTimeout(backupDiario,8000);setInterval(backupDiario,30*6e4);
 setTimeout(checarAvisos,12000);setInterval(checarAvisos,6e4);
 setTimeout(limparHorasModelo,6000);setInterval(limparHorasModelo,3e4);
 setTimeout(autoOrganizar,9000);setInterval(autoOrganizar,3e4);setTimeout(autoCategorias,12000);setInterval(autoCategorias,6e4);setTimeout(categoriasPelaMensagem,15000);setInterval(categoriasPelaMensagem,45e3);
})();
