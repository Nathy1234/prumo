/* Prumo · Financeiro e Contábil — telas e regras do sistema. */
const I={
reg:'<path d="M12 5v14M5 12h14"/>',
painel:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
destaques:'<path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
rotinas:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/>',
calendario:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
equipe:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14.5A5 5 0 0 1 21.5 20"/>',
ponto:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/>',
whats:'<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 10c.5 2 2 3.5 4 4l1-1 2 1"/>',
sol:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
proc:'<path d="M5 4h10l4 4v12H5z"/><path d="M14 4v5h5M8 13h8M8 17h5"/>',
melhorias:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
relat:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
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

const COLS=['equipe','tarefas','mensagens','chamados','sugestoes','destaques','ponto','eventos','procedimentos','departamentos','entregas','acessos','pedidos','emails','categorias','ferramentas','feedbacks','observacoes','modelos','frases','verificacoes','etapas','fechamentos','assuntos','remetentes','cronograma','execucoes','cronitens','feitos'];
const D={logs:[],backups:[]};COLS.forEach(c=>D[c]=[]);
let CFG={};
const S={tela:'painel',perfil:'dir',modo:'carregando',sim:'',online:null,mesDest:MES_ATUAL,tri:triDe(MESES_ATUAL_FIX()),cal:MES_ATUAL,busca:'',limpar:false,loaded:0};
function MESES_ATUAL_FIX(){return HJ.slice(0,7)}
let DB=null;

const ETAPAS=['Aberto','Em análise','Pendência com solicitante','Programado','Concluído'];
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
  if(modOn('email')&&pode('email')){const n=D.emails.filter(e=>e.st==='triagem').length;if(n)A.push({n:2,ic:'triagem',c:'wa',t:`${n} ${n>1?'e-mails aguardam':'e-mail aguarda'} triagem`,s:'Confirme se viraram entregas recebidas ou chamados',ir:'triagem'});if(S.syncErr&&S.syncErr.code!=='sem_mcp')A.push({n:2,ic:'triagem',c:'bad',t:'Leitura do Outlook com problema',s:msgErro(S.syncErr),ir:'triagem'})}
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
function fechar(){if(FORM&&FORM.gravou){const k=chaveSheet();if(k)limparRascunho(k)}document.getElementById('ov').hidden=true;FORM=null;if(history.state&&history.state.sheet){S.pulaPop=true;history.back()}}
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

function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.h);toast.h=setTimeout(()=>el.classList.remove('show'),2200)}
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
function tabelaTri(ps){
  const ini=mesesTri(S.tri)[0]+'-01',fim=fimTri(S.tri);
  const L=ps.map(p=>{const r=resumoTri(p.id,S.tri),dm=D.chamados.filter(c=>c.st==='Concluído'&&quemFez(c)===p.id&&(c.concl||'')>=ini&&(c.concl||'')<=fim),dp=dm.filter(c=>c.prazo),dok=dp.filter(c=>!(c.concl>c.prazo)).length;return [p,r,dm.length,dp.length?Math.round(dok/dp.length*100):null]});
  if(!L.length)return vazio('Nenhum colaborador cadastrado','Cadastre a equipe para acompanhar os prazos.','pessoa','Cadastrar colaborador');
  return `<div class="tbl-wrap"><table><thead><tr><th>Colaborador</th><th>Rotinas no prazo</th><th>Demandas concluídas</th><th>Demandas no prazo</th><th>Em aberto agora</th></tr></thead><tbody>${L.map(([p,r,dn,dpct])=>`<tr><td>${esc(p.n)}</td><td>${r.pct===null?'—':`${r.pct}% <span class="meta">(${r.prazosOk}/${r.prazosTot})</span>`}</td><td>${dn}</td><td>${dpct===null?'—':dpct+'%'}</td><td>${D.chamados.filter(c=>c.resp===p.id&&c.st!=='Concluído').length}</td></tr>`).join('')}</tbody></table></div>`}

/* ---------- chamados (portal dos departamentos) ---------- */
const solic=()=>S.perfil.startsWith('sol:');
const solDep=()=>solic()?S.perfil.slice(4):null;
const quemSou=()=>S.perfil==='pendente'?'Sem perfil':dir()?(real()&&!S.sim&&papelReal()==='admin'?'Administrador':'Diretor'):solic()?`Solicitante · ${depNome(solDep())}`:(pessoa(S.perfil)?.n||'—');
const DMIN=()=>+CFG.diasMin||3;
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
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${esc(c.proto)} · aberto em ${fmt(c.aberto)}</p><h2 id="sheet-title">${esc(c.assunto)}</h2><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px"><span class="tag ${stCh[c.st]}">${esc(c.st)}${c.sub?' · '+esc(c.sub):''}</span>${sp?`<span class="tag ${sp[0]}">${sp[1]}</span>`:''}${c.fora?'<span class="tag wa">Fora do prazo da política</span>':''}</div>
 ${pode('chamados')||dir()?`<div class="chegada"><span class="lbl" style="margin:0">Chegou ao financeiro</span><button class="chip ${c.chegada==='prazo'?'on':''}" onclick="marcaChegada('${esc(c.id)}','prazo')">No prazo</button><button class="chip ${c.chegada==='atrasado'?'on bad':''}" onclick="marcaChegada('${esc(c.id)}','atrasado')">Atrasado</button>${c.chegada?`<span class="meta">marcado por ${esc(c.chegadaPor||'—')}</span>`:''}</div>`:''}</div>
 ${c.pend?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>Pendência: ${esc(c.pend)}</span></div>`:''}
 <div>${linha('Tipo',c.tipo)}${linha('Assunto',c.cat||c.subcat?catTxt(c):'Sem assunto')}${linha('Setor',c.dep?depNome(c.dep):'Não definido')}${linha(c.origem==='email'?'Remetente':'Solicitante',c.solicitante)}${linha('Chegou em',c.recebidoEm?fmtHora(c.recebidoEm)+'/'+c.recebidoEm.slice(0,4):fmtAno(c.aberto))}${linha('Fornecedor ou favorecido',c.favorecido)}${linha('NF ou documento',c.nf)}${linha('Vencimento do pagamento',c.venc?fmtAno(c.venc):'')}${linha('Centro de custo',c.cc)}${linha('Gestor que aprovou',c.aprovador)}${linha('Responsável no financeiro',c.resp?respNome(c.resp):'Ninguém aceitou ainda')}${linha('Prazo de entrega',c.prazo?fmtAno(c.prazo):'')}${linha('Aceita por',c.aceitoEm?`${c.aceitoNome||'—'} · ${fmtHora(c.aceitoEm)}`:'')}${linha('Realizada por',c.st==='Concluído'?`${quemFezNome(c)} · ${c.conclEm?fmtHora(c.conclEm):fmt(c.concl)}`:'')}${linha('No cronograma',[...D.cronitens.filter(x=>x.chamadoId===c.id).map(x=>`${D.cronograma.find(r=>r.id===x.rot)?.t||'Rotina'} · ${fmt(x.dia)}${x.feito?' · feito':''}`),...D.cronograma.filter(r=>r.chamadoId===c.id).map(r=>`${r.t} · ${fmt(r.data)}`)].join(' | '))}${linha('Descrição',c.desc)}
 ${c.origem==='email'&&le&&(c.msgId||c.emailLink)?`<div class="row"><div class="t"><span>E-mail de origem</span></div>${c.msgId?`<button class="btn" onclick="lerEmail('c:${esc(c.id)}')">Ler aqui</button>`:''}${c.emailLink?`<a class="btn ghost" href="${esc(c.emailLink)}" target="_blank" rel="noopener">Abrir no Outlook ↗</a>`:''}</div>`:''}${c.doc&&/^https?:\/\//.test(c.doc)?`<div class="row"><div class="t"><span>Documento</span></div><a class="btn" href="${esc(c.doc)}" target="_blank" rel="noopener">Abrir documento</a></div>`:''}</div>
 <div><span class="lbl">Histórico</span>${h.length?h.map(l=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(l.em)}</span><div class="t"><b style="font-weight:400">${esc(l.acao)}</b><span>${esc(quemLog(l))}</span></div></div>`).join(''):'<p class="meta">Sem registros.</p>'}</div>
 <div class="foot"><div style="display:flex;gap:8px;flex-wrap:wrap">${eq&&c.st!=='Concluído'?`<button class="btn" onclick="aceitarSheet({ch:'${esc(c.id)}'})">${c.aceitoEm?'Prazo, assunto e responsável':'Aceitar'}</button>`:''}${eq&&c.st==='Concluído'?`<button class="btn" onclick="reabrirCh('${esc(c.id)}')">${S.reab===c.id?'Confirmar reabertura':'Reabrir'}</button>`:''}${eq&&c.st!=='Concluído'?`<button class="btn" onclick="chParaCron('${esc(c.id)}')">${D.cronograma.some(r=>r.chamadoId===c.id)||D.cronitens.some(x=>x.chamadoId===c.id)?'Levar de novo ao cronograma':'Levar para o cronograma'}</button>`:''}</div><button class="btn" onclick="fechar()">Fechar</button></div>`;
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
 const mud={st:nx,sub:''};if(nx==='Programado')mud.programadoEm=HJ;
 if(nx==='Concluído')Object.assign(mud,{concl:HJ,conclEm:new Date().toISOString(),conclPor:S.perfil,conclUid:ME.uid||null,conclNome:euNome(),programadoEm:c.programadoEm||HJ},c.resp?{}:{resp:S.perfil});
 const pz=nx==='Concluído'&&c.prazo?(HJ>c.prazo?' com atraso':' no prazo'):'';
 patch('chamados',id,mud,nx==='Concluído'?`Concluído${pz}. Foi para Demandas realizadas.`:`Chamado ${nx.toLowerCase()}`,nx==='Concluído'?`Concluiu o chamado ${c.proto}${pz}`:`Moveu o chamado ${c.proto} para ${nx}`)}
function cardCh(c,interno){const du=c.venc?diasAte(c.venc):null,sp=stPrazo(c),subs=subEtapas(c.st),nx=proxEtapa(c);
 return `<div class="kcard${interno&&chAtrasado(c)?' late':''}"><div style="display:flex;justify-content:space-between;gap:6px;margin-bottom:4px"><span class="meta">${esc(c.proto)}</span>${c.chegada==='atrasado'?'<span class="tag bad" style="font-size:10.5px">Chegou atrasado</span>':c.chegada==='prazo'?'<span class="tag ok" style="font-size:10.5px">Chegou no prazo</span>':c.fora?'<span class="tag wa" style="font-size:10.5px">Fora do prazo</span>':''}</div><b>${esc(c.assunto)}</b><span>${esc(c.tipo)} · ${esc(c.dep?depNome(c.dep):'Setor não definido')}</span>
 <div class="ktags">${c.cat||c.subcat?`<span class="tag ac">${esc(catTxt(c))}</span>`:''}${sp?`<span class="tag ${sp[0]}">${sp[1]}</span>`:''}${bloqueioForn(c.favorecido)&&!['Programado','Concluído'].includes(c.st)?'<span class="tag bad">Dados bancários em verificação</span>':''}${c.origem==='email'?`<span class="tag ne">${c.aceitoEm?'Via e-mail':'Via e-mail · conferir'}</span>`:''}</div>
 ${c.origem==='email'&&(c.solicitante||c.rem)?(interno&&c.rem?`<button class="lnk" style="display:block;font-size:12px" onclick="S.fRem='${esc(c.rem)}';render();window.scrollTo({top:0})" title="Ver tudo deste remetente">De: ${esc(remNomeCh(c))}</button>`:`<span style="display:block">De: ${esc(remNomeCh(c))}</span>`):''}
 ${c.venc?`<span style="display:block;color:${du!==null&&du<=1&&c.st!=='Concluído'&&c.st!=='Programado'?'var(--bad)':'var(--ink-3)'}">Pagamento vence ${fmt(c.venc)}${du!==null&&du>=0&&c.st!=='Concluído'?` · ${du===0?'hoje':du===1?'amanhã':`em ${du} dias`}`:''}</span>`:''}
 ${c.resp?`<span style="display:block">Com: ${esc(respNome(c.resp))}</span>`:''}
 ${interno&&subs.length&&c.st!=='Concluído'?`<select class="inp mini" aria-label="Situação dentro da etapa" onchange="subCh('${esc(c.id)}',this.value)"><option value="">${esc(c.st)}</option>${subs.map(x=>`<option ${x===c.sub?'selected':''}>${esc(x)}</option>`).join('')}${c.sub&&!subs.includes(c.sub)?`<option selected>${esc(c.sub)}</option>`:''}</select>`:c.sub?`<span style="display:block">Situação: ${esc(c.sub)}</span>`:''}
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
function assPorTexto(t){const nt=norm(t);let best='',bs=0;
 for(const a of D.assuntos){const ks=[a.n,...String(a.palavras||'').split(/[,;]+/),...(a.subs||[])].map(x=>norm(x).trim()).filter(x=>x.length>1);let s=0;
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
function cfgEtapasCh(){const se=CFG.subEtapas||{};FORM={tipo:'_etapasch',listas:Object.fromEntries(ETAPAS.map((e,i)=>['e'+i,[...(se[e]||[])]]))};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Painel de chamados</p><h2 id="sheet-title">Subetapas</h2><p class="sub" style="font-size:13px">Divida cada etapa nas situações do dia a dia, como "Aguardando nota fiscal" dentro de Em análise. Adicione ou exclua quando precisar. No cartão do chamado aparece uma lista para escolher a situação.</p></div>
 ${ETAPAS.map((e,i)=>`<div class="sbox"><span class="lbl">${esc(e)}</span>${chipsEd('e'+i,'Nova subetapa')}</div>`).join('')}
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaEtapasCh()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaEtapasCh(){const o={};ETAPAS.forEach((e,i)=>{const l=FORM.listas['e'+i]||[];if(l.length)o[e]=l});
 try{await DB.doc('config/estrutura').set({...CFG,subEtapas:o});log('Alterou as subetapas do painel de chamados');toast('Subetapas salvas');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar as etapas.':'Não foi possível salvar.')}}
function subCh(id,v){const c=D.chamados.find(x=>x.id===id);if(!c)return;patch('chamados',id,{sub:v},null,`Marcou o chamado ${c.proto} como "${v||c.st}"`)}

/* aceitar demanda: assunto, prazo de entrega e responsável */
function aceitarSheet(ref){const em=ref.email?D.emails.find(x=>x.id===ref.email):null,c=ref.ch?D.chamados.find(x=>x.id===ref.ch):null;if(!em&&!c)return;
 const s=em?.sug||{},cat=c?(c.cat||''):(s.assunto&&assDe(s.assunto)?s.assunto:''),tipo=c?.tipo||s.tipo||'Outros',resp=c?.resp||respsDe(cat)[0]||(dir()?'':S.perfil),prazo=c?.prazo||prazoPadrao(cat),ja=!!c?.aceitoEm;
 FORM={tipo:'_aceitar',ref:em?'e:'+em.id:'c:'+c.id,email:em?.id||'',ch:c?.id||'',prazoMexido:!!c?.prazo};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">${em?'E-mail de '+esc(depNome(em.dep)):esc(c.proto)+' · '+esc(depNome(c.dep))}</p><h2 id="sheet-title">${ja?'Prazo, assunto e responsável':'Aceitar demanda'}</h2><p class="sub" style="font-size:13px">${ja?'Ajuste o que mudou. Fica registrado quem alterou.':'A demanda entra no painel de chamados com prazo e responsável. O atraso passa a contar a partir do prazo que você definir.'}</p></div>
 ${em?`<div class="trecho"><b style="font-weight:500">${esc(em.assunto)}</b><br>${esc(em.deNome||em.de)} · recebido ${fmtHora(em.recebido)}${em.trecho?'<br>'+esc(em.trecho):''}${em.msgId&&pode('ler_email')?`<br><button class="lnk" type="button" onclick="lerEmail('e:${esc(em.id)}')">Ler o e-mail completo</button>`:''}</div>`:''}
 <div class="fgrid">
  <div class="full"><label class="lbl" for="ac_tit">Resumo da demanda</label><input class="inp" id="ac_tit" value="${esc(c?.assunto||em?.assunto||'')}"><p class="ferr" id="ace_tit"></p></div>
  ${em?`<div class="full"><label class="lbl" for="ac_dep">Setor de quem enviou</label><select class="inp" id="ac_dep"><option value="">Não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===em.dep?'selected':''}>${esc(d.n)}</option>`).join('')}</select><p class="meta" style="margin:4px 0 0">Vale também para os próximos e-mails de ${esc(em.deNome||em.de)}.</p></div>`:''}
  <div><label class="lbl" for="ac_cat">Assunto</label><select class="inp" id="ac_cat" onchange="acCat()"><option value="">Sem assunto</option>${assLista().map(a=>`<option value="${esc(a.id)}" ${a.id===cat?'selected':''}>${esc(a.n)}</option>`).join('')}</select>${!D.assuntos.length&&pode('cadastros')?'<p class="meta" style="margin:4px 0 0">Crie assuntos em Chamados › Assuntos.</p>':''}</div>
  <div><label class="lbl" for="ac_sub">Subcategoria</label><select class="inp" id="ac_sub">${subOpts(cat,c?.subcat||'')}</select></div>
  <div><label class="lbl" for="ac_tipo">Tipo</label><select class="inp" id="ac_tipo">${TIPOS_CH.map(t=>`<option ${t===tipo?'selected':''}>${t}</option>`).join('')}</select></div>
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
 const campos={assunto:tit.slice(0,200),cat:val('ac_cat'),subcat:val('ac_sub'),tipo:val('ac_tipo'),prazo,resp,...(FORM.email?{dep:val('ac_dep')}:{})};
 const aceite={aceito:HJ,aceitoEm:new Date().toISOString(),aceitoPor:S.perfil,aceitoUid:ME.uid||null,aceitoNome:euNome()};
 const desc=`prazo ${fmt(prazo)} · ${respNome(resp)}${campos.cat?' · '+catTxt(campos):''}`;
 if(FORM.email){const em=D.emails.find(x=>x.id===FORM.email);if(!em)return;S.triando=true;
  try{const r=await aplicar(em,{acao:'chamado',tipo:campos.tipo},false,{...campos,...aceite,st:'Em análise',conferir:false},p=>`Aceitou a demanda ${p} de ${depNome(em.dep)} · ${desc}`);
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
const NOMES={feitos:'marcação de quem fez',cronitens:'item de rotina',cronograma:'rotina do cronograma',execucoes:'marcação do cronograma',remetentes:'remetente',assuntos:'assunto',verificacoes:'troca de dados bancários',etapas:'etapa do fechamento',fechamentos:'fechamento',feedbacks:'feedback',observacoes:'observação',modelos:'modelo de e-mail',frases:'frase sugerida',acessos:'acesso',pedidos:'pedido de acesso',emails:'e-mail',categorias:'categoria',ferramentas:'ferramenta',equipe:'colaborador',tarefas:'rotina',mensagens:'mensagem',chamados:'chamado',sugestoes:'sugestão',destaques:'destaque',ponto:'lançamento de horas',eventos:'prazo',procedimentos:'procedimento',departamentos:'departamento',entregas:'entrega'};
const tituloDe=d=>d.t||d.item||d.n||d.assunto||(d.pessoa&&d.mes?`${nomeDe(d.pessoa)} · ${mesCurto(d.mes)}`:'')||(d.txt||'').slice(0,40);
function notifs(){
 const ms=solic()?D.chamados.filter(c=>c.dep===solDep()).map(c=>c.proto):[];
 const L=D.logs.filter(l=>!(real()&&!S.sim?l.uid===ME.uid:l.perfil===S.perfil)&&diasAte((l.em||'').slice(0,10))>=-7&&(dir()||pode('logs')||(solic()?ms.some(p=>(l.acao||'').includes(p)):/chamado|entrega|e-mail/i.test(l.acao||''))));
 return L.slice(0,30)}
function lido(){if(S.prefs?.lido&&!S.sim)return S.prefs.lido;try{return localStorage.getItem('lido_'+(ME.uid||'')+S.perfil)||''}catch(e){return S['lido_'+S.perfil]||''}}
function marcarLido(){const v=new Date().toISOString();try{localStorage.setItem('lido_'+(ME.uid||'')+S.perfil,v)}catch(e){S['lido_'+S.perfil]=v}if(DB&&ME.uid&&!S.sim){S.prefs={...(S.prefs||{}),lido:v};DB.doc('data/users/'+ME.uid+'/prefs').set(S.prefs).catch(()=>{})}}
function bell(){const A=alertas().filter(a=>a.c==='bad'),N=notifs(),lv=lido(),P=solic()||S.perfil==='pendente'?[]:proxPrazos(5,!dir()),ph=P.filter(x=>x.d===HJ).length,novos=N.filter(n=>n.em>lv).length+A.length+ph;
 return `<div class="tb"><span class="meta">${esc(quemSou())}</span>${temaBox()}<div style="position:relative"><button class="btn bell" id="bellbtn" onclick="tgBell()" aria-label="Notificações" aria-expanded="${!!S.bell}">${ic('alertas').replace('aria-hidden','style="width:18px;height:18px" aria-hidden')}${novos?`<span class="dot">${novos}</span>`:''}</button>
 ${S.bell?`<div class="pop" role="dialog" aria-label="Notificações"><div class="ph" style="padding:12px 14px 4px"><h2>Notificações</h2><button class="btn ghost" onclick="ir('alertas')">Ver tudo</button></div>
 ${avPodePedir()?`<div style="padding:4px 14px 8px"><button class="btn pri" style="width:100%" onclick="ativarAvisos()">Ativar avisos no canto da tela</button></div>`:''}
 ${A.map(a=>`<button class="pi" onclick="ir('${a.ir}')"><span class="tag bad" style="flex:none">Alerta</span><span><b>${esc(a.t)}</b><small>${esc(a.s)}</small></span></button>`).join('')}
 ${P.length?`<p class="eyebrow" style="margin:8px 14px 2px">Próximos prazos</p>${P.map(x=>`<button class="pi ${x.d===HJ?'new':''}" onclick="ir('calendario')"><span class="meta" style="flex:none;width:72px">${x.d===HJ?'Hoje':fmt(x.d)}${x.h?' '+x.h:''}</span><span><b style="font-weight:400">${esc(x.t)}</b><small>${esc(x.g)}${x.fixo?' · fixo':''}${x.quem&&x.quem!=='Todos'?' · '+esc(x.quem):''}</small></span></button>`).join('')}<p class="eyebrow" style="margin:8px 14px 2px">Atividades</p>`:''}
 ${N.map(n=>`<button class="pi ${n.em>lv?'new':''}" onclick="${/CH-\d+/.test(n.acao)?`abrirLogCh('${(n.acao.match(/CH-\d+/)||[''])[0]}')`:`ir('${pode('logs')?'logs':'alertas'}')`}"><span class="meta" style="flex:none;width:72px">${fmtHora(n.em)}</span><span><b style="font-weight:400">${esc(n.acao)}</b><small>${esc(quemLog(n))}</small></span></button>`).join('')}
 ${!A.length&&!N.length&&!P.length?'<p class="empty">Nenhuma notificação nos últimos 7 dias.</p>':''}</div>`:''}</div></div>`}
function tgBell(){S.bell=!S.bell;if(S.bell)setTimeout(marcarLido,1500);render()}
function abrirLogCh(p){const c=D.chamados.find(x=>x.proto===p);S.bell=false;render();if(c)detalheCh(c.id)}
document.addEventListener('click',e=>{if(S.bell&&!e.target.closest('.pop')&&!e.target.closest('#bellbtn')){S.bell=false;render()}});

/* ---------- identidade e permissões ---------- */
const ME={uid:null,owner:false,edit:false,admin:false,write:null,nome:'',email:null};
let USER=null,MCP=null;const PROF={};
const PERMS=[
 ['ver_tudo','Ver o departamento inteiro','Painel geral, rotinas e entregas de todos'],
 ['chamados','Atender chamados','Assumir, devolver e avançar chamados de outros departamentos'],
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
const avU=uid=>{const p=PROF[uid];return p?.avatarUrl?`<img class="av" src="${esc(p.avatarUrl)}" alt="">`:`<span class="av">${esc((nomeU(uid)||'?')[0])}</span>`};
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
  const ok=await salvar('chamados',null,{tipo:c.tipo||'Solicitação de pagamento',dep:em.dep,solicitante:em.deNome||em.de,assunto:em.assunto,desc:`Recebido por e-mail de ${em.de} em ${fmtHora(em.recebido)}. ${em.trecho||''}`.trim(),favorecido:'',nf:'',venc:'',cc:'',aprovador:'',doc:'',chk:[],fora:false,proto,st:'Aberto',aberto:dia,abertoEm:new Date().toISOString(),resp:'',pend:'',origem:'email',conferir:true,emailLink:em.link||'',cat:em.sug?.assunto||'',msgId:em.msgId||'',caixa:em.caixa||'',recebidoEm:em.recebido||'',rem:em.rem||(em.de?remId(em.de):''),...(extra||{})},auto?null:extra?`Demanda ${proto} aceita`:`Chamado ${proto} criado`,lg?lg(proto):`${auto?'O e-mail abriu automaticamente':'Criou a partir de e-mail'} o chamado ${proto} · ${dn}`);
  return ok?'chamado:'+proto:'erro'}
 return ''}
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
 c.assunto=rem?.cat&&assDe(rem.cat)?rem.cat:assPorTexto(txt);
 const em={dep:d?.id||'',de,deNome:limparTxt(m.senderName).slice(0,80),assunto:limparTxt(m.subject||'(sem assunto)').slice(0,200),trecho:limparTxt(m.summary).slice(0,220),recebido:m.receivedDateTime||'',anexos:!!m.hasAttachments,link:/^https:\/\//.test(m.webLink||'')?m.webLink:'',sug:c,criado:new Date().toISOString(),por:ME.uid||null,msgId:m.id||'',caixa:CFG.caixa||'',rem:rid};
 if(!rem)rem=await novoContato(de,em.deNome,d?.id||'');
 if(rem.ignorar){await DB.collection('emails').doc(id).set({...em,st:'ignorado',auto:true,res:''});return 'dup'}
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
 const desde=SYNC.ultima?new Date(Date.parse(SYNC.ultima)-36e5).toISOString():(CFG.emailDesde?CFG.emailDesde+'T00:00:00Z':new Date(Date.now()-14*864e5).toISOString());
 let novos=0,auto=0,lidos=0,env=0;
 const buscar=async(inp,filtro,fn)=>{let offset=0;
  for(let pg=0;pg<(todos?8:4);pg++){
   const q={...inp,afterDateTime:desde,limit:25};if(CFG.caixa)q.mailboxOwnerEmail=CFG.caixa;if(CFG.caixaPasta&&q.folder!=='sentitems'){delete q.folder;q.folderId=CFG.caixaPasta}if(offset)q.offset=offset;
   const res=await MCP.callTool(SRV,TOOL,q,{cache:false});
   const {msgs,next}=extrairMsgs(res);lidos+=msgs.length;
   for(const m of msgs){if(filtro&&!filtro(m))continue;const r=await (fn||processar)(m);if(r==='novo')novos++;if(r==='auto')auto++;if(r==='enviado')env++}
   if(typeof next==='number'&&next>offset&&msgs.length)offset=next;else break}};
 try{
  if(todos){await buscar({folder:'inbox'});if(lerEnviados())await buscar({folder:'sentitems'},null,processarEnviado)}
  else for(const d of deps)for(const addr of listaEmails(d))await buscar({sender:addr},m=>{const x=norm(m.sender);return x===addr||x.endsWith(addr)});
  await DB.doc('sync/estado').set({ultima:new Date().toISOString(),uid:ME.uid||null,papel:quemSou(),lidos,novos,auto,env,erro:''});
  if(manual||novos||auto)toast(`${lidos} e-mails verificados · ${novos} na triagem · ${env} enviados guardados na conversa${auto?` · ${auto} registrados automaticamente`:''}`);
  if(novos||auto)log(`Verificou o Outlook: ${novos} e-mails na triagem e ${auto} registrados automaticamente`);
  try{localStorage.setItem('autoSync_'+(ME.uid||'demo'),'1')}catch(e){}
 }catch(e){S.syncErr=e;DB.doc('sync/estado').set({...SYNC,erro:e?.code||'erro',erroEm:new Date().toISOString()}).catch(()=>{});if(manual)toast(msgErro(e))}
 finally{S.sync=false;render()}}
function msgErro(e){const c=e?.code;return ({
 server_not_connected:'O e-mail ainda não está conectado. Clique em Conectar e-mail.',
 needs_reauth:'A conexão com o e-mail venceu. Clique em Conectar e-mail para continuar.',
 
 not_in_manifest:'O Outlook não liberou o acesso. Clique em Conectar e-mail e aceite as permissões.',
 approval_required:'O Outlook precisa da sua aprovação. Clique em Conectar e-mail.',
 blocked_by_policy:'A política da sua organização bloqueia a leitura do Outlook por aqui. Fale com a TI.',
 server_unavailable:'O Outlook não respondeu agora. O portal tenta de novo na próxima verificação.',
 tool_error:'O Outlook recusou a busca: '+String(e?.message||'').slice(0,160),
 sem_mcp:'A leitura do Outlook não está disponível. Entre com a conta Microsoft da empresa.'}[c]||'Não foi possível ler os e-mails agora. Tente de novo em alguns minutos.')}
async function triar(id,acao){const em=D.emails.find(x=>x.id===id);if(!em||S.triando)return;S.triando=true;
 try{if(acao==='ignorar'){await patch('emails',id,{st:'ignorado',triadoPor:ME.uid||null,triadoEm:new Date().toISOString()},'E-mail ignorado',`Ignorou o e-mail "${em.assunto}" de ${depNome(em.dep)}`);return}
  let c;if(acao==='entrega'){const ref=val('tr_'+id);if(!ref){toast('Escolha qual entrega chegou.');return}c={acao:'entrega',ref}}
  else c={acao:'chamado',tipo:val('tt_'+id)||'Solicitação de pagamento'};
  const r=await aplicar(em,c,false);if(r&&r!=='erro')await patch('emails',id,{st:'aplicado',res:r,triadoPor:ME.uid||null,triadoEm:new Date().toISOString()},r.startsWith('entrega')?'Entrega marcada como recebida':null,false)}
 finally{S.triando=false}}
function resTxt(e){const r=e.res||'';return (e.st==='ignorado'?'Ignorado':r.startsWith('entrega:')?`Entrega "${esc(D.entregas.find(x=>x.id===r.slice(8))?.item||'')}" recebida`:r.startsWith('chamado:')?`Virou o chamado ${esc(r.slice(8))}`:'Processado')+(e.auto?' automaticamente':'')}
function cardEmail(e){const s=e.sug||{},ents=D.entregas.filter(x=>x.dep===e.dep&&!x.recebido).sort((a,b)=>a.prazo<b.prazo?-1:1),ref=D.entregas.find(x=>x.id===s.ref),le=pode('ler_email');
 const sug=s.acao==='entrega'&&ref?`Parece ser a entrega "${esc(ref.item)}"`:s.acao==='chamado'?`Parece um pedido: ${esc(s.tipo)}`:'Escolha o que fazer.';
 return `<div class="mail"><div class="mh"><div class="t"><b>${esc(e.assunto)}</b><span>Recebido ${fmtHora(e.recebido)}${e.anexos?' · com anexo':''}${e.dep?' · '+esc(depNome(e.dep)):''}</span></div>${le?`<div style="display:flex;gap:6px;flex-wrap:wrap">${e.msgId?`<button class="btn" onclick="lerEmail('e:${e.id}')">Ler aqui</button>`:''}${e.link?`<a class="btn ghost" href="${esc(e.link)}" target="_blank" rel="noopener">Abrir no Outlook ↗</a>`:''}</div>`:''}</div>
 ${e.trecho?`<p class="trecho">${esc(e.trecho)}</p>`:''}
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
async function setRem(rid,mud){const r=D.remetentes.find(x=>x.id===rid),em=D.emails.find(e=>remDoEmail(e)===rid);
 const {id:_,...base}=r||{email:em?.de||'',nome:em?.deNome||'',dep:'',cat:'',ignorar:false,criado:new Date().toISOString()};const novo={...base,...mud};
 const nome=novo.nome||novo.email;
 if(!await salvar('remetentes',rid,novo,'Remetente atualizado',`Atualizou o remetente ${nome}${mud.dep!==undefined?` · setor ${mud.dep?depNome(mud.dep):'não definido'}`:''}${novo.ignorar&&!base.ignorar?' · passou a ignorar':''}`))return false;
 for(const e of D.emails.filter(e=>remDoEmail(e)===rid&&e.st==='triagem')){const m={};
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
 return `<div class="banner"><span>${SYNC.ultima?`Última verificação ${fmtHora(SYNC.ultima)} · ${SYNC.lidos||0} e-mails lidos · ${SYNC.novos||0} para triagem · ${SYNC.env||0} enviados · ${SYNC.auto||0} automáticos`:'Nenhuma verificação ainda. Clique em Conectar e-mail e depois em Verificar agora.'} · ${CFG.emailModo==='auto'?'modo automático':'modo com triagem'} · ${CFG.caixa||CFG.caixaPasta?(CFG.caixaPasta&&!PASTAS_FIXAS[CFG.caixaPasta.toLowerCase()]?'pasta compartilhada':'caixa')+(CFG.caixa?' '+esc(CFG.caixa):''):'sua caixa de entrada'} · ${lerTodos()?(lerEnviados()?'recebidos e enviados, agrupados por contato':'recebidos, agrupados por remetente'):'só e-mails dos departamentos'}</span>${ac}</div>`}
function cfgEmail(){FORM={tipo:'_cfgmail'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Integração com o Outlook</p><h2 id="sheet-title">Configurar leitura de e-mails</h2><p class="sub" style="font-size:13px">Cada pessoa lê com a própria conta Microsoft, então só vê o que já tem permissão de ver no Outlook.</p></div>
 <div class="fgrid">
  <div class="full"><label class="lbl" for="g_modo">O que fazer com os e-mails</label><select class="inp" id="g_modo"><option value="triagem" ${CFG.emailModo!=='auto'?'selected':''}>Mandar tudo para a triagem (recomendado no início)</option><option value="auto" ${CFG.emailModo==='auto'?'selected':''}>Registrar sozinho quando a confiança for alta</option></select></div>
  <div class="full"><label class="lbl" for="g_todos">Quais e-mails ler</label><select class="inp" id="g_todos"><option value="todos" ${lerTodos()?'selected':''}>Todos os e-mails da caixa de entrada, agrupados por remetente</option><option value="dep" ${lerTodos()?'':'selected'}>Só os e-mails cadastrados nos departamentos</option></select></div>
  <label class="perm full"><input type="checkbox" id="g_env" ${CFG.emailEnviados!==false?'checked':''}><span><b>Ler também os e-mails enviados</b><small>As respostas de vocês entram na conversa de cada contato. Não vão para a triagem.</small></span></label>
  <div class="full"><label class="lbl" for="g_caixa">Caixa ou pasta compartilhada · link ou e-mail · opcional</label><input class="inp" id="g_caixa" type="text" autocomplete="off" spellcheck="false" placeholder="https://outlook.office.com/mail/financeiro@empresa.com.br/inbox  ou  financeiro@empresa.com.br" value="${esc(CFG.caixaLink||CFG.caixa||'')}" oninput="mostraCaixa()"><p class="ferr" id="ge_caixa"></p><p class="meta" id="g_caixa_info" style="margin:4px 0 0">${caixaInfo(CFG.caixaLink||CFG.caixa||'')}</p></div>
  <div><label class="lbl" for="g_desde">Buscar e-mails a partir de</label><input class="inp" id="g_desde" type="date" value="${esc(CFG.emailDesde||isoD(new Date(Date.now()-14*864e5)))}"></div>
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
 if(!/^https?:\/\//i.test(v))return {email};
 let partes=[];try{const u=new URL(v);partes=u.pathname.split('/').concat((u.searchParams.get('path')||'').split('/'),(u.hash||'').replace(/^#/,'').split('/'))}catch(e){}
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
 try{await DB.doc('config/estrutura').set({...CFG,emailModo:val('g_modo'),emailTodos:val('g_todos')!=='dep',emailEnviados:!!document.getElementById('g_env')?.checked,caixa,caixaLink:/^https?:/i.test(bruto)?bruto:'',caixaPasta:cx.pasta||'',emailDesde:val('g_desde'),emailIntervalo:it});log(`Alterou a integração de e-mail para o modo ${val('g_modo')==='auto'?'automático':'com triagem'}`);toast('Configuração salva');fechar()}
 catch(e){toast(e?.code==='invalid_argument'?'Só diretores e administradores podem mudar essa configuração.':'Não foi possível salvar.')}}
function iniciarAutoSync(){const tick=()=>{if(!real()||S.sim||!pode('email')||!MCP||S.sync||document.hidden)return;let ok=false;try{ok=localStorage.getItem('autoSync_'+ME.uid)==='1'}catch(e){}if(!ok)return;const last=SYNC.ultima?Date.parse(SYNC.ultima):0;if(Date.now()-last>(+CFG.emailIntervalo||15)*6e4)sincronizar(false)};setTimeout(tick,5000);setInterval(tick,60000)}

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
async function podarBackups(){const reter=+CFG.bkReter||30,limite=new Date(Date.now()-reter*864e5).toISOString();
 for(const b of D.backups.filter(x=>x.criado<limite)){try{for(let i=0;i<(b.partes||0);i++)await DB.doc(`backups/${b.id}/partes/p${i}`).delete();await DB.doc('backups/'+b.id).delete()}catch(e){}}}
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
  <div><label class="lbl" for="b_reter">Guardar por (dias)</label><input class="inp" id="b_reter" type="number" min="7" max="365" value="${+CFG.bkReter||30}"><p class="ferr" id="be_reter"></p></div>
  <div class="full"><label class="lbl" for="b_email">E-mail dedicado ao backup · opcional</label><input class="inp" id="b_email" type="email" placeholder="backup.financeiro@empresa.com.br" value="${esc(CFG.bkEmail||'')}"><p class="ferr" id="be_email"></p></div>
  <label class="perm full"><input type="checkbox" id="b_enviar" ${CFG.bkEnviar?'checked':''}><span><b>Enviar o backup diário para esse e-mail</b><small>Sai pelo Outlook do administrador que fizer o backup do dia.</small></span></label></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfgBk()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaCfgBk(){const em=val('b_email').toLowerCase(),r=+val('b_reter'),env=document.getElementById('b_enviar').checked;errEl('be_email','');errEl('be_reter','');
 if(em&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){errEl('be_email','Confira o endereço.');return}
 if(env&&!em){errEl('be_email','Informe o e-mail para ligar o envio.');return}
 if(!(r>=7&&r<=365)){errEl('be_reter','Use um valor entre 7 e 365.');return}
 try{await DB.doc('config/estrutura').set({...CFG,bkAuto:document.getElementById('b_auto').checked,bkReter:r,bkEmail:em,bkEnviar:env});log(`Alterou a configuração de backup${em?' e o e-mail de backup':''}`);toast('Configuração salva');fechar()}
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
const procs=()=>Array.isArray(CFG.cronEtapas)&&CFG.cronEtapas.length?CFG.cronEtapas:PROC_PAD;
const sists=()=>Array.isArray(CFG.cronSis)&&CFG.cronSis.length?CFG.cronSis:SIS_PAD;
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
const vejoRot=r=>dir()||pode('ver_tudo')||minhaRot(r);
const podeMarcar=r=>podeEditRot();
const podeCron=()=>dir()||podeAdmin()||pode('cadastros');
/* toda a equipe pode corrigir e cadastrar rotinas; excluir fica com quem cadastra */
const podeEditRot=()=>dir()||podeAdmin()||(!solic()&&S.perfil!=='pendente');
const ordProc=r=>{const i=procs().indexOf(r.etapa);return i<0?99:i};
const ordR=(a,b)=>ordProc(a)-ordProc(b)||(a.hora||'99').localeCompare(b.hora||'99')||(a.t||'').localeCompare(b.t||'');
/* situação de uma rotina num dia */
function stOc(r,dia){const x=exDe(r.id,dia);
 if(x?.s==='feita')return x.concl>dia?['wa','Concluída com atraso']:['ok','Concluída'];
 const late=dia<HJ||(dia===HJ&&r.hora&&agoraHM()>r.hora);
 if(late)return ['bad',x?.s==='andamento'?'Atrasada · em andamento':'Atrasada'];
 if(x?.s==='andamento')return ['ac','Em andamento'];
 return ['ne',dia>HJ?'Prevista':'A fazer']}
/* o que ficou para trás (últimos 30 dias, incluindo hoje depois do horário) */
function atrasosCron(filtro){const L=[];for(const dia of diasDe(addDia(HJ,-30),HJ))for(const r of D.cronograma){if((filtro&&!filtro(r))||!ocorre(r,dia))continue;if(stOc(r,dia)[0]==='bad')L.push({r,dia})}return L}
function contaDia(dia,filtro){const c={tot:0,ok:0,and:0,atr:0,fazer:0};
 D.cronograma.filter(r=>ocorre(r,dia)&&(!filtro||filtro(r))).forEach(r=>{c.tot++;const x=exDe(r.id,dia),s=stOc(r,dia)[0];if(x?.s==='feita')c.ok++;else if(s==='bad')c.atr++;else if(x?.s==='andamento')c.and++;else c.fazer++});return c}
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
 const l=_ftM.get(dia+'_'+rid);if(l&&l.length)return [...l].sort((a,b)=>(a.em||'').localeCompare(b.em||''));
 const x=exDe(rid,dia);return x?.s==='feita'?[{pid:x.por,nome:x.porNome,hora:x.hora,feitoEm:x.concl,legado:true}]:[]}
const pkey=()=>S.perfil==='dir'?'dir'+(real()&&!S.sim&&ME.uid?ME.uid.slice(0,12):''):S.perfil;
const euFizEsse=(rid,dia)=>feitosDe(rid,dia).some(f=>f.legado?f.pid===S.perfil:f.id===`${dia}_${rid}_${pkey()}`);
async function euFiz(rid,dia){const r=D.cronograma.find(x=>x.id===rid);if(!r)return;
 if(!podeMarcar(r)){toast('Sem permissão para marcar.');return}if(dia>HJ){toast('Esse dia ainda não chegou.');return}
 const pk=pkey(),id=`${dia}_${rid}_${pk}`,meu=D.feitos.find(f=>f.id===id),x=exDe(rid,dia),nome=pessoa(S.perfil)?.n||ME.nome||quemSou(),agora=new Date().toISOString(),eid=dia+'_'+rid;
 const legadoMeu=!meu&&!D.feitos.some(f=>f.rot===rid&&f.dia===dia)&&x?.s==='feita'&&x.por===S.perfil;
 if(meu||legadoMeu){try{if(meu)await DB.collection('feitos').doc(id).delete();
   const resto=D.feitos.filter(f=>f.rot===rid&&f.dia===dia&&f.id!==id).sort((a,b)=>(a.em||'').localeCompare(b.em||''));
   if(!resto.length){if(x)await DB.collection('execucoes').doc(eid).delete()}
   else if(x&&x.por===S.perfil){const {id:_,...b}=x;await DB.collection('execucoes').doc(eid).set({...b,por:resto[0].pid,porNome:resto[0].nome,hora:resto[0].hora,concl:resto[0].feitoEm||x.concl})}
   log(`Desmarcou que fez "${r.t}" de ${fmt(dia)}`);toast('Desmarcado')}catch(e){toast('Não foi possível desmarcar.')}return}
 const atraso=HJ>dia;
 if(!await salvar('feitos',id,{rot:rid,dia,pid:S.perfil,uid:ME.uid||null,nome,hora:agoraHM(),em:agora,feitoEm:HJ},atraso?'Marcado como feito (com atraso)':'Marcado: você fez',`Marcou que fez "${r.t}" de ${fmt(dia)}${atraso?' (com atraso)':''}`))return;
 if(x?.s!=='feita'){const {id:_,...b}=x||{};await salvar('execucoes',eid,{...b,rot:rid,dia,s:'feita',ini:x?.ini||agora,por:S.perfil,porNome:nome,em:agora,concl:HJ,hora:agoraHM()},false,false)}}
function ocFeita(rid,dia){ocSet(rid,dia,exDe(rid,dia)?.s==='feita'?null:'feita')}
function ocAnd(rid,dia){const x=exDe(rid,dia);if(x?.s==='feita')return;ocSet(rid,dia,x?.s==='andamento'?null:'andamento')}
function linOc(r,dia,comDia,semSis){const x=exDe(r.id,dia),st=stOc(r,dia),done=x?.s==='feita',pm=podeMarcar(r)&&dia<=HJ,eu=euFizEsse(r.id,dia),FT=feitosDe(r.id,dia);
 const info=[semSis?'':(r.sis||[]).map(sisTxt).join(' · '),nomesRs(r),r.apoio?'apoio: '+r.apoio:''].filter(Boolean).map(esc).join(' · ');
 return `<div class="row oc ${done?'done':st[0]==='bad'?'late':''}"><button class="chkbtn ${eu?'eu':done?'outros':''}" ${pm?'':'disabled'} onclick="euFiz('${r.id}','${dia}')" aria-pressed="${eu}" aria-label="${eu?'Desmarcar que eu fiz':'Marcar que eu fiz'}: ${esc(r.t)}" title="${!pm?'':eu?'Você marcou que fez. Clique para desmarcar':done?'Feito por outra pessoa. Clique se você também fez':'Clique se você fez'}">${eu||done?'✓':''}</button>
 <span class="meta oc-h">${comDia?fmt(dia):esc(r.hora||'')}</span><div class="t"><b>${esc(r.t)}</b><span>${comDia&&r.etapa?esc(r.etapa)+' · ':''}${info}</span>
 ${done?`<span class="pos">Feito por ${FT.map(f=>`${esc(f.nome||'—')}${f.feitoEm&&f.feitoEm!==dia?` em ${fmt(f.feitoEm)}`:''}${f.hora?' às '+esc(f.hora):''}`).join(', ')}</span>`:x?.s==='andamento'?`<span style="color:var(--accent)">Em andamento com ${esc(x.porNome||'—')} desde ${hmDe(x.ini)}</span>`:''}
 ${r.obs&&!done?`<span>${esc(r.obs)}</span>`:''}${r.freq!=='unica'||itensDe(r.id,dia).length?linItens(r,dia):''}</div>${r.chamado?`<span class="tag ac" title="Veio do chamado">${esc(r.chamado)}</span>`:''}${r.fim&&r.freq!=='unica'?`<span class="tag ne">só até ${fmt(r.fim)}</span>`:''}${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}
 <button class="tag ${st[0]}" ${pm&&!done?'':'disabled'} onclick="ocAnd('${r.id}','${dia}')" title="${pm&&!done?(x?.s==='andamento'?'Voltar para a fazer':'Marcar em andamento'):''}">${st[1]}</button>${podeEditRot()?`<button class="btn ghost" onclick="editRot('${r.id}')" aria-label="Editar ${esc(r.t)}">Editar</button>`:''}</div>`}
const filtroCron=()=>r=>(!S.cQuem||rsDe(r).includes(S.cQuem))&&(!S.cSis||(r.sis||[]).includes(S.cSis));
const pessoasCron=()=>[...new Set(D.cronograma.flatMap(rsDe))].filter(pessoa).sort((a,b)=>nomeDe(a).localeCompare(nomeDe(b)));
function cronFiltros(){const b=(on,txt,js)=>`<button class="chip ${on?'on':''}" onclick="${js};render();salvarEstado()">${esc(txt)}</button>`;
 return `<div class="filtros cronf">${b(!S.cQuem,'Todas as pessoas',"S.cQuem=''")}${pessoasCron().map(p=>b(S.cQuem===p,nomeDe(p)+(p===S.perfil?' (você)':''),`S.cQuem='${p}'`)).join('')}<span class="sep"></span>${b(!S.cSis,'Todos os sistemas',"S.cSis=''")}${sists().map((s,i)=>b(S.cSis===s,s,`S.cSis=sists()[${i}]`)).join('')}</div>`}
function cronAbas(){const t=S.cTab||'dia';return `<div class="tabs big" role="tablist" aria-label="Cronograma">${[['dia','Dia'],['semana','Semana'],['quem','Quem faz o quê'],['rotinas','Rotinas cadastradas'],['tri','Trimestre']].map(([k,l])=>`<button role="tab" aria-selected="${t===k}" class="${t===k?'on':''}" onclick="S.cTab='${k}';render();salvarEstado()">${l}</button>`).join('')}</div>`}
const irData=(v,k='cDia')=>`<label class="sr-only" for="c_data_${k}">Escolher o dia</label><input class="inp cdata" id="c_data_${k}" type="date" data-nodraft="1" value="${v}" onchange="if(this.value){S.${k}=this.value;render()}" title="Escolher o dia">`;
function mvDia(k,n){let d=S[k]||HJ;do{d=addDia(d,n)}while(!ehUtil(d));S[k]=d;render()}
/* painel de andamento: etapa por etapa, por sistema, com quem concluiu e a hora */
function andamento(dia,k,semNav){const grp=r=>procs().includes(r.etapa)?r.etapa:'',L=D.cronograma.filter(r=>ocorre(r,dia));
 const nav=semNav?'':`<div class="cronbar"><div class="seg"><button onclick="mvDia('${k}',-1)" aria-label="Dia útil anterior">‹</button><span>${dia===HJ?'Hoje, ':''}${diaTxt(dia)}</span><button onclick="mvDia('${k}',1)" aria-label="Próximo dia útil">›</button></div>${irData(dia,k)}${dia!==HJ?`<button class="btn" onclick="S.${k}='';render()">Hoje</button>`:''}</div>`;
 if(!L.length){const px=proxComRotina(dia,()=>true);return `<div class="panel and"><div class="ph"><h2>Andamento do departamento</h2></div>${nav}<p class="meta" style="margin:0 0 8px">Nenhuma rotina prevista neste dia${paraComecar().length&&dia<'2026-11-01'?': as rotinas do WAE estão programadas para começar em novembro. Use "Começar hoje" acima':''}.</p>${px?`<button class="btn pri" onclick="S.${k}='${px}';${semNav?"S.cDia='"+px+"';":''}render()">Ver ${diaTxt(px)}</button>`:''}</div>`}
 const E=[...procs(),...(L.some(r=>!grp(r))?['']:[])],SS=sists().filter(x=>L.some(r=>(r.sis||[]).includes(x)));
 const cel=(g,x)=>{const l=L.filter(r=>grp(r)===g&&(r.sis||[]).includes(x));if(!l.length)return '<td><span class="andn">—</span></td>';
  const xs=l.map(r=>({r,x:exDe(r.id,dia),st:stOc(r,dia)[0]})),ok=xs.filter(o=>o.x?.s==='feita'),an=xs.filter(o=>o.x?.s==='andamento'),bad=xs.filter(o=>o.st==='bad');
  const cls=ok.length===l.length?(ok.some(o=>o.st==='wa')?'wa':'ok'):bad.length?'bad':an.length||ok.length?'ac':'ne';
  const lab=ok.length===l.length?(cls==='wa'?'Concluído com atraso':'Concluído'):bad.length?'Atrasado':ok.length?`${ok.length} de ${l.length} concluídas`:an.length?'Em andamento':'A fazer';
  const feitoPor=[...new Set(ok.flatMap(o=>feitosDe(o.r.id,dia)).map(f=>`✓ ${f.nome||'—'}${f.hora?' · '+f.hora:''}`))],emAnd=[...new Set(an.map(o=>`● ${o.x.porNome||'—'} desde ${hmDe(o.x.ini)}`))];
  const resp=ok.length===l.length?[]:[`Responsável: ${[...new Set(xs.filter(o=>o.x?.s!=='feita').flatMap(o=>rsDe(o.r)))].map(nomeDe).join(', ')}`];
  const tit=xs.map(o=>`${o.r.t}: ${o.x?.s==='feita'?`concluída por ${o.x.porNome||'—'} ${o.x.hora||''}`:o.x?.s==='andamento'?`em andamento com ${o.x.porNome||'—'}`:stOc(o.r,dia)[1]}`).join('\n');
  const its=l.flatMap(r=>itensDe(r.id,dia)),itTxt=its.length?[`${its.filter(i=>i.feito).length} de ${its.length} itens feitos`]:[];
  return `<td><button class="andb ${cls}" title="${esc(tit)}" onclick="S.cTab='dia';S.cDia='${dia}';S.cQuem='';S.cSis=sists()[${sists().indexOf(x)}];ir('rotinas')"><b>${lab}</b>${[...feitoPor,...emAnd,...resp,...itTxt].map(t=>`<span>${esc(t)}</span>`).join('')}</button></td>`};
 const geral=E.map(g=>{const l=L.filter(r=>grp(r)===g);if(!l.length)return null;const ok=l.filter(r=>exDe(r.id,dia)?.s==='feita').length;return {g:g||'Outras atividades',done:ok===l.length,parc:ok>0||l.some(r=>exDe(r.id,dia)?.s==='andamento')}}).filter(Boolean);
 const lista=a=>a.length>1?a.slice(0,-1).join(', ')+' e '+a[a.length-1]:a[0]||'';
 const fe=geral.filter(o=>o.done).map(o=>o.g),pa=geral.filter(o=>!o.done&&o.parc).map(o=>o.g),fa=geral.filter(o=>!o.done&&!o.parc).map(o=>o.g);
 const frase=`${fe.length?`<b class="pos">Concluído:</b> ${esc(lista(fe))}. `:'<b>Nada concluído ainda.</b> '}${pa.length?`<b style="color:var(--accent)">Em andamento:</b> ${esc(lista(pa))}. `:''}${fa.length?`<b>Falta:</b> ${esc(lista(fa))}.`:'<b class="pos">Tudo concluído no dia.</b>'}`;
 return `<div class="panel and"><div class="ph"><h2>Andamento do departamento</h2><span>${dia===HJ?'hoje':diaTxt(dia)}</span></div>${nav}<p class="andf">${frase}</p>
 <div class="tbl-wrap"><table class="andt"><thead><tr><th>Sistema</th>${E.map(g=>`<th>${g?`${procs().indexOf(g)+1}. ${esc(g)}`:'Outras'}</th>`).join('')}</tr></thead><tbody>${SS.map(x=>`<tr><th scope="row">${esc(x)}${emTeste(x)?'<small>em teste</small>':''}</th>${E.map(g=>cel(g,x)).join('')}</tr>`).join('')}</tbody></table></div>
 ${quemFezDia(dia,L,E)}
 <p class="meta" style="margin:8px 0 0">Clique numa etapa para ver as rotinas e marcar. Cada pessoa marca o que ela fez.</p></div>`}
function quemFezDia(dia,L,E){const grp=r=>procs().includes(r.etapa)?r.etapa:'',P=new Map();
 colabs().forEach(p=>P.set(p.id,{n:p.n,c:{}}));
 L.forEach(r=>feitosDe(r.id,dia).forEach(f=>{const k=f.pid&&P.has(f.pid)?f.pid:([...P.entries()].find(([,v])=>norm(v.n)===norm(f.nome))?.[0]||f.pid||f.nome);if(!P.has(k))P.set(k,{n:f.nome||'—',c:{}});const o=P.get(k).c;(o[grp(r)]=o[grp(r)]||[]).push(`${r.t}${f.hora?' · '+f.hora:''}`)}));
 const rows=[...P.values()].filter(x=>Object.keys(x.c).length||colabs().some(p=>p.n===x.n));if(!rows.length)return '';
 return `<p class="eyebrow" style="margin:16px 0 6px">Quem fez o quê no dia</p><div class="tbl-wrap"><table class="andt quem"><thead><tr><th>Pessoa</th>${E.map(g=>`<th>${g?esc(g):'Outras'}</th>`).join('')}</tr></thead><tbody>${rows.map(x=>`<tr><th scope="row">${esc(x.n)}</th>${E.map(g=>`<td>${(x.c[g]||[]).length?`<div class="qf">${x.c[g].map(t=>`<span>✓ ${esc(t)}</span>`).join('')}</div>`:'<span class="andn" style="padding:6px 0">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function proxComRotina(dia,f){let d=dia;for(let i=0;i<120;i++){d=addDia(d,1);if(D.cronograma.some(r=>ocorre(r,d)&&f(r)))return d}return ''}
const avulsasDia=dia=>D.cronograma.filter(r=>r.freq==='avulsa'&&r.ativo!==false&&(!r.ini||dia>=r.ini)&&(!r.fim||dia<=r.fim)).sort(ordR);
const fazerHoje=(rid,dia)=>euFiz(rid,dia);
const SUGESTOES_OPC=['Repasse de polos','Adiantamento a fornecedor','Reembolso de despesas','Transferência entre contas','Pagamento urgente','Estorno ou devolução'];
function outrasOpcoes(dia){const L=avulsasDia(dia),pm=podeEditRot()&&dia<=HJ,tem=new Set(D.cronograma.filter(r=>r.freq==='avulsa').map(r=>norm(r.t)));
 const sug=podeEditRot()?SUGESTOES_OPC.filter(t=>!tem.has(norm(t))):[];
 const chip=r=>{const ft=feitosDe(r.id,dia),eu=euFizEsse(r.id,dia),feito=ft.length>0;
  return `<button class="opc ${eu?'eu':feito?'on':''}" ${pm?'':'disabled'} onclick="euFiz('${r.id}','${dia}')" aria-pressed="${eu}" title="${eu?'Você marcou. Clique para desfazer':feito?'Clique se você também fez':'Clique se você fez'}"><span class="opc-ck">${feito?'✓':''}</span><span class="opc-t">${esc(r.t)}${ft.length?`<small>${ft.map(f=>esc(f.nome||'—')+(f.hora?' '+esc(f.hora):'')).join(', ')}</small>`:''}</span></button>`};
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
async function comecarHoje(){const L=paraComecar();if(!L.length)return;
 if(!S.confCom){S.confCom=true;toast(`Clique de novo para começar hoje ${L.length} rotinas do WAE.`);render();setTimeout(()=>{S.confCom=false;render()},6000);return}S.confCom=false;
 let k=0;for(const r of L){const {id,...b}=r;if(await salvar('cronograma',id,{...b,ini:HJ},false,false))k++}
 if(!D.cronograma.some(r=>r.chave==='repasse-polos'||norm(r.t)===norm('Repasse de polos'))){await salvar('cronograma',null,{chave:'repasse-polos',etapa:'Pagamento',t:'Repasse de polos',sis:['WAE'],rs:[],apoio:'',freq:'avulsa',dias:[],n:1,antes:0,data:'',hora:'',prio:'normal',obs:'',ini:'',fim:'',ativo:true,criado:HJ},false,false)}
 log(`Começou o cronograma hoje com ${k} rotinas do WAE`);toast(`${k} rotinas começam hoje. É só clicar no que foi feito.`);S.cDia='';S.pDia='';render()}
const comecarBtn=()=>paraComecar().length&&podeEditRot()?`<div class="banner"><span>As rotinas do WAE que valem sempre estão programadas para começar só em ${fmt(paraComecar()[0].ini)}. Comece hoje para registrar o que já fazem no dia a dia.</span><button class="btn pri" onclick="comecarHoje()">${S.confCom?'Confirmar: começar hoje':'Começar hoje'}</button></div>`:'';
function quadroDia(dia,f){const grp=r=>procs().includes(r.etapa)?r.etapa:'',SS=sists().filter(x=>!S.cSis||x===S.cSis),L=D.cronograma.filter(r=>r.freq!=='avulsa'&&ocorre(r,dia)&&(!S.cQuem||rsDe(r).includes(S.cQuem)||feitosDe(r.id,dia).some(x=>x.pid===S.cQuem)));
 const G=[...procs(),''];
 const comeca=x=>{const l=D.cronograma.filter(r=>(r.sis||[]).includes(x)&&r.freq!=='avulsa'&&r.freq!=='unica'&&r.ativo!==false&&r.ini&&r.ini>dia).map(iniEf).filter(d=>d>dia).sort();return l[0]||''};
 const cab=SS.map(x=>{const l=L.filter(r=>(r.sis||[]).includes(x)),k=l.filter(r=>exDe(r.id,dia)?.s==='feita').length,c=comeca(x);return `<div class="qd-h"><b>${esc(x)}</b>${emTeste(x)?'<small class="tag wa">em teste</small>':''}<span class="meta">${l.length?`${k} de ${l.length} feitas`:c?`começa em ${fmt(c)}`:'nada previsto'}</span>${!l.length&&c&&dia===HJ&&x==='WAE'&&paraComecar().length&&podeEditRot()?`<button class="btn pri qd-start" onclick="comecarHoje()">${S.confCom?'Confirmar: começar hoje':'Começar hoje'}</button>`:''}</div>`}).join('');
 return `<div class="qd" style="--n:${SS.length}"><div class="qd-cab"><span></span>${cab}</div>${G.map(g=>{const i=procs().indexOf(g);
  const temCols=L.some(r=>grp(r)===g);
  return `<div class="qd-row ${g?'':'outras'}"><h3>${i>=0?`<span class="meta">${i+1}.</span> `:''}${esc(g||'Outras atividades')}${g?'':'<small>Clique no que fez</small>'}</h3>${g||temCols?SS.map(x=>{const l=L.filter(r=>grp(r)===g&&(r.sis||[]).includes(x)).sort(ordR);
   return `<div class="qd-col"><p class="qd-sis">${esc(x)}</p>${l.length?l.map(r=>linOc(r,dia,false,true)).join(''):'<p class="meta qd-vazio">—</p>'}</div>`}).join(''):''}${g?'':outrasOpcoes(dia)}</div>`}).join('')}</div>`}
function cDia(n){let d=S.cDia||HJ;do{d=addDia(d,n)}while(!ehUtil(d));S.cDia=d;render()}
function cronDia(){const dia=S.cDia||HJ,f=filtroCron(),L=D.cronograma.filter(r=>ocorre(r,dia)&&f(r)).sort(ordR),c=contaDia(dia,f);
 const nav2=`<div class="seg"><button onclick="cDia(-1)" aria-label="Dia útil anterior">‹</button><span>${diaTxt(dia)}</span><button onclick="cDia(1)" aria-label="Próximo dia útil">›</button></div>${irData(dia)}${dia!==HJ?`<button class="btn" onclick="S.cDia='';render()">Hoje</button>`:''}`;
 const ant=dia===HJ?atrasosCron(f).filter(o=>o.dia<HJ).sort((a,b)=>a.dia<b.dia?-1:1):[];
 const grupos=[...procs(),''].map(g=>[g,L.filter(r=>(procs().includes(r.etapa)?r.etapa:'')===g)]).filter(([,l])=>l.length);
 const tav=D.tarefas.filter(t=>(!S.cQuem||t.r===S.cQuem)&&(t.prazo===dia||(dia===HJ&&atrasada(t)))&&(dir()||pode('ver_tudo')||t.r===S.perfil));
 return `<div class="cronbar">${nav2}</div>${comecarBtn()}${andamento(dia,'cDia',true)}${cronFiltros()}`+
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
 <div class="cards">${ps.map(p=>{const l=vig.filter(r=>rsDe(r).includes(p)).sort(ordR);return `<div class="panel"><div style="display:flex;align-items:center;gap:12px;margin-bottom:6px"><div class="av">${esc((nomeDe(p)||'?')[0])}</div><b style="font-weight:500">${esc(nomeDe(p))}</b><span class="meta" style="margin-left:auto">${l.length} ${l.length>1?'rotinas':'rotina'}</span></div>${l.map(r=>`<div class="row"><div class="t"><b style="font-weight:400">${esc(r.t)}</b><span>${esc(r.etapa||'Outras')} · ${esc((r.sis||[]).join(', '))} · ${esc(freqTxt(r))}</span></div>${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}</div>`).join('')}</div>`}).join('')}</div>`+
 (ap.length?note(`Apoio: ${ap.map(esc).join(', ')}.`):'')}
function cronRotinas(){const pc=podeEditRot(),L=[...D.cronograma].sort(ordR);
 const lin=r=>`<div class="row"><div class="t"><b>${esc(r.t)}</b><span>${esc(r.etapa||'Outras atividades')} · ${esc(freqTxt(r))} · ${esc((r.sis||[]).map(sisTxt).join(', ')||'Sem sistema')} · ${esc(nomesRs(r))}${r.apoio?' · apoio: '+esc(r.apoio):''}</span>${r.obs?`<span>${esc(r.obs)}</span>`:''}${r.editadoPor?`<span>Editada por ${esc(r.editadoPor)} em ${fmt((r.editadoEm||'').slice(0,10))} às ${hmDe(r.editadoEm)}</span>`:''}</div>${r.prio==='atencao'?'<span class="tag wa">Atenção</span>':''}${r.ativo===false?'<span class="tag ne">Pausada</span>':r.fim&&r.fim<HJ?'<span class="tag ne">Encerrada</span>':r.ini&&r.ini>HJ?`<span class="tag ac">Começa em ${fmt(r.ini)}</span>`:''}${pc?`<button class="btn ghost" onclick="editRot('${r.id}')">Editar</button>`:''}</div>`;
 const per=[...new Set(L.filter(r=>r.fim&&r.freq!=='unica'&&r.freq!=='avulsa').map(r=>(r.ini||'')+'|'+r.fim))].sort((a,b)=>a.split('|')[1].localeCompare(b.split('|')[1]));
 const blocos=[['Valem sempre','A ordem do processo e o D-5 valem todos os dias.',L.filter(r=>!r.fim&&r.freq!=='unica'&&r.freq!=='avulsa')],
  ['Opções de outras atividades','Aparecem como botões no dia. Para tirar da lista sem perder o histórico, edite e desmarque "Rotina ativa".',L.filter(r=>r.freq==='avulsa')],
  ...per.filter(()=>true).map(k=>{const [a,b]=k.split('|');return [`Período especial: ${a?fmt(a)+' a ':'até '}${fmt(b)}`,'Valem só neste período. Depois saem sozinhas do cronograma.',L.filter(r=>r.fim&&r.freq!=='unica'&&r.freq!=='avulsa'&&(r.ini||'')+'|'+r.fim===k)]}),
  ['Demandas de um dia só','Inclui as que vieram de chamados.',L.filter(r=>r.freq==='unica')]].filter(b=>b[2].length);
 const etp=l=>{let ult=null;return l.map(r=>{const g=r.etapa||'Outras atividades',h=g!==ult?`<p class="eyebrow" style="margin:14px 0 2px">${esc(g)}</p>`:'';ult=g;return h+lin(r)}).join('')};
 return comecarBtn()+(orgPendente()?`<div class="banner"><span>Há uma versão mais organizada do cronograma: WAE e Protheus em colunas separadas, com as mesmas etapas; D-5 sempre; pagamento D-2 só em novembro e D-1 a partir de dezembro. As rotinas atuais são atualizadas sem perder o que já foi marcado.</span><button class="btn pri" onclick="organizarModelo()">Organizar agora</button></div>`:'')+
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
 if(await salvar('cronograma',FORM.id||null,{...b,editadoPor:pessoa(S.perfil)?.n||quemSou(),editadoEm:new Date().toISOString(),t,etapa:val('rt_et'),prio:val('rt_prio'),sis,rs,apoio:val('rt_apoio'),freq,dias,n,antes,data,hora:val('rt_hora'),ini,fim,obs:val('rt_obs'),ativo:document.getElementById('rt_ativo').checked},ant?'Rotina atualizada':'Rotina cadastrada',`${ant?'Alterou':'Cadastrou'} a rotina "${t}" do cronograma`))fechar()}
async function delRot(){const b=document.getElementById('bdel');if(!FORM.del){FORM.del=true;b.textContent='Confirmar exclusão';return}
 const r=D.cronograma.find(x=>x.id===FORM.id);try{await DB.collection('cronograma').doc(FORM.id).delete();log(`Excluiu a rotina "${r?.t||''}" do cronograma`);toast('Rotina excluída');fechar()}catch(e){toast('Não foi possível excluir.')}}
/* ajustes: etapas, sistemas e módulos guardados */
function cfgCron(){FORM={tipo:'_cfgcron',listas:{et:[...procs()],sis:[...sists()],teste:Array.isArray(CFG.cronTeste)?[...CFG.cronTeste]:['Protheus']}};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Cronograma</p><h2 id="sheet-title">Ajustes</h2><p class="sub" style="font-size:13px">Etapas do processo, sistemas usados e quais telas antigas ficam no menu.</p></div>
 <div class="fgrid one"><div><span class="lbl">Etapas do processo (na ordem em que acontecem)</span>${chipsEd('et','Ex.: Aprovação')}</div>
 <div><span class="lbl">Sistemas</span>${chipsEd('sis','Ex.: Internet banking')}</div>
 <div><span class="lbl">Sistemas em teste</span>${chipsEd('teste','Ex.: Protheus')}<p class="meta" style="margin:4px 0 0">Aparecem com a marca "em teste". Tire daqui quando o sistema passar a valer de vez.</p></div>
 <div><span class="lbl">Guardados para depois (ligue quando quiser usar)</span>${MODS.map(([k,n,d])=>`<label class="perm"><input type="checkbox" id="md_${k}" ${modOn(k)?'checked':''}><span><b>${n}</b><small>${d}</small></span></label>`).join('')}</div>
 <div><span class="lbl">Modelo pronto</span><div style="display:flex;gap:8px;flex-wrap:wrap">${D.cronograma.length?`<button class="btn" type="button" onclick="organizarModelo()">Organizar com o modelo atualizado</button>`:`<button class="btn" type="button" onclick="montarModelo()">Montar o cronograma</button>`}</div><p class="meta" style="margin:4px 0 0">D-5 sempre, pagamento D-2 em novembro e D-1 a partir de dezembro, com Natalia, Jeferson e Natasha. Atualiza as rotinas existentes sem apagar nada.</p></div></div>
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
const MODELO_VER=3;
function modeloCron({NA,JN}){const EV='Evandro (Protheus)',N0='2026-11-01',N1='2026-11-30',DZ='2026-12-01',L=[];
 const r=(chave,etapa,t,sis,rs,x,alias)=>L.push({chave,etapa,t,sis:[sis],rs,apoio:'',freq:'diaria',dias:[],n:1,antes:0,data:'',hora:'',prio:'normal',obs:'',ini:N0,fim:'',ativo:true,mv:MODELO_VER,...(x||{}),_alias:alias||[]});
 const W='WAE',P='Protheus',pe={apoio:EV};
 for(const [x,suf] of [[W,'wae'],[P,'pro']]){const w=x===W,old=a=>w?a:[];
  r('ident-'+suf,'Identificação','Identificar as contas a pagar (D-5)',x,JN,{obs:'D-5: contas que vencem daqui a 5 dias úteis. Vale sempre.'},old(['ident','Identificar as contas a pagar (D-5)','Identificar as contas que vencem em 5 dias úteis (D-5)','Identificar as contas que vencem no próximo dia útil']));
  r('confer-'+suf,'Conferência','Conferir documentos, valores, vencimentos e centro de custo',x,JN,{obs:'Contas identificadas no D-5.'},old(['confer','Conferir documentos, valores, vencimentos e centro de custo']));
  r('lanc-'+suf,'Lançamento',`Lançamento no ${x}`,x,w?NA:JN,w?{}:pe,[`Lançamento no ${x}`]);
  r('baixa-'+suf,'Baixa',`Baixa no ${x}`,x,w?NA:JN,w?{}:pe,[`Baixa no ${x}`]);
  r('pagnov-'+suf,'Pagamento','Pagamento · todas as contas (D-2 em novembro)',x,JN,{hora:'10:00',fim:N1,obs:'Novembro: pagamento adiantado para 2 dias úteis antes do vencimento (D-2), porque trabalhamos no WAE e no Protheus.'},old(['pag-nov','Pagamento · todas as contas (D-2 em novembro)','Pagamento · todas as contas']));
  r('pagd1-'+suf,'Pagamento','Pagamento · todas as contas (D-1)',x,JN,{hora:'10:00',ini:DZ,obs:'Pagamento 1 dia útil antes do vencimento (D-1).'},old(['pag','Pagamento · todas as contas (D-1)']));
  if(w)r('pag1430-wae','Pagamento','Pagamento · WAE a partir das 14:30',W,JN,{hora:'14:30',obs:'Segue o D-1 (D-2 em novembro).'},['pag-wae','Pagamento · WAE']);
  r('polos-'+suf,'Pagamento','Pagamento dos polos',x,JN,{obs:'Os polos têm outro horário. Ajuste o horário nesta rotina.'},old(['pag-polos','Pagamento dos polos']));
  r('folha-'+suf,'Pagamento','Folha de pagamento',x,JN,{prio:'atencao',freq:'mensal_util',n:5,obs:'Atenção: prazo até o 5º dia útil. Confirme valores e data com o RH.'},old(['folha','Folha de pagamento']));
  r('impnov-'+suf,'Pagamento','Impostos do dia 20 (D-2 em novembro)',x,JN,{prio:'atencao',freq:'mensal_dia',n:20,antes:2,fim:N1,obs:'Atenção: confira as guias. Em novembro, pagar 2 dias úteis antes.'},old(['imp-nov','Impostos do dia 20 (D-2 em novembro)','Impostos (vencimento dia 20)']));
  r('impd1-'+suf,'Pagamento','Impostos do dia 20 (D-1)',x,JN,{prio:'atencao',freq:'mensal_dia',n:20,antes:1,ini:DZ,obs:'Atenção: confira as guias. Crie uma rotina para cada vencimento diferente.'},old(['imp','Impostos do dia 20 (D-1)']));
  r('concil-'+suf,'Conciliação','Conciliação bancária',x,JN,{},old(['concil','Conciliação bancária']));
  if(w)r('repasse-polos','Pagamento','Repasse de polos',W,[],{freq:'avulsa',ini:''},['repasse-polos','Repasse de polos']);
  if(!w)r('acomp','','Acompanhamento diário do Protheus',P,JN,{apoio:'Evandro',obs:'Evandro acompanha todos os dias a implantação do Protheus.'},['acomp','Acompanhamento diário do Protheus'])}
 return L}
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
 const faltam=[],M=modeloCron(await pessoasModelo(faltam)),hoje=HJ;let k=0;
 for(const {_alias,...r} of M){const x={...r,ini:r.ini&&r.ini<hoje?hoje:r.ini,criado:HJ};if(await salvar('cronograma',null,x,false,false))k++}
 log(`Montou o cronograma do departamento com ${k} rotinas`);
 toast(faltam.length?`${k} rotinas criadas. Cadastre ${faltam.join(', ')} e defina nas rotinas.`:`${k} rotinas criadas. Ajuste o que precisar.`);
 if(FORM)fechar();S.cTab='rotinas';ir('rotinas')}
/* atualiza as rotinas existentes no lugar (mantém o histórico de marcações), cria as que faltam e não apaga nada */
async function organizarModelo(){if(!podeCron()){toast('Só quem cadastra pode organizar o cronograma.');return}
 if(!S.confOrg){S.confOrg=true;toast('Clique de novo para confirmar. As rotinas são atualizadas sem apagar nada.');setTimeout(()=>S.confOrg=false,6000);return}
 S.confOrg=false;const faltam=[],ids=await pessoasModelo(faltam),M=modeloCron(ids),usados=new Set(),quem=pessoa(S.perfil)?.n||quemSou(),agora=new Date().toISOString();let up=0,cr=0;
 for(const {_alias,...sp} of M){const al=_alias.map(norm),sis0=sp.sis[0];
  const ant=D.cronograma.find(r=>!usados.has(r.id)&&r.chave===sp.chave)||D.cronograma.find(r=>!usados.has(r.id)&&(r.mv||0)<MODELO_VER&&r.chave&&_alias.includes(r.chave))||D.cronograma.find(r=>!usados.has(r.id)&&(r.mv||0)<MODELO_VER&&!r.chave&&al.includes(norm(r.t))&&(!(r.sis||[]).length||(r.sis||[]).includes(sis0)));
  if(ant){usados.add(ant.id);const {id,...b}=ant;
   if(await salvar('cronograma',id,{...b,...sp,rs:rsDe(ant).length?ant.rs:sp.rs,hora:ant.hora||sp.hora,apoio:ant.apoio||sp.apoio,ini:ant.ini&&ant.ini<sp.ini&&!sp.fim&&!sp.ini.startsWith('2026-12')?ant.ini:sp.ini,editadoPor:quem,editadoEm:agora},false,false))up++}
  else if(await salvar('cronograma',null,{...sp,criado:HJ},false,false))cr++}
 log(`Organizou o cronograma: ${up} rotinas atualizadas e ${cr} criadas`);
 toast(`${up} rotinas atualizadas e ${cr} criadas.${faltam.length?` Cadastre ${faltam.join(', ')}.`:''}`);
 if(FORM)fechar();S.cTab='rotinas';ir('rotinas')}

function cronPainel(){if(!D.cronograma.length)return podeCron()?`<div class="panel"><div class="ph"><h2>Cronograma do departamento</h2></div>${vazio('Cronograma ainda não montado','Monte as rotinas de WAE e Protheus com os responsáveis de cada etapa.',null)}<div style="text-align:center;margin-top:-8px;padding-bottom:12px"><button class="btn pri" onclick="montarModelo()">Montar o cronograma de novembro</button></div></div>`:'';
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
 const hoje=proxPrazos(30,true).filter(x=>x.d===HJ);if(hoje.length)L.push({k:'dia',t:`Hoje: ${hoje.length} ${hoje.length>1?'prazos':'prazo'}`,s:hoje.slice(0,3).map(x=>(x.h?x.h+' ':'')+x.t).join(' · '),ir:'painel'});
 D.eventos.filter(e=>paraMimEv(e)&&e.hora&&evOcorre(e,HJ)).forEach(e=>{const d=mn(e.hora)-ag;if(d<=15&&d>=-5)L.push({k:'ev_'+e.id,t:`${e.hora} · ${e.t}`,s:d>0?`Começa em ${d} min`:'Começando agora',ir:'calendario'})});
 D.cronograma.filter(r=>vejoRot(r)&&r.hora&&ocorre(r,HJ)&&exDe(r.id,HJ)?.s!=='feita').forEach(r=>{const d=mn(r.hora)-ag;
  if(d<=15&&d>0)L.push({k:'rt_'+r.id,t:`${r.hora} · ${r.t}`,s:`Em ${d} min · ${nomesRs(r)}`,ir:'rotinas'});else if(d<=0&&d>-180)L.push({k:'ra_'+r.id,t:`Atrasada: ${r.t}`,s:`Era às ${r.hora} · ${nomesRs(r)}`,ir:'rotinas'})});
 const ant=atrasosCron(vejoRot).filter(o=>o.dia<HJ).length;if(ant)L.push({k:'ant',t:`${ant} ${ant>1?'rotinas de dias anteriores':'rotina de dia anterior'} em atraso`,s:'Veja em Cronograma',ir:'rotinas'});
 const am=proxUtil(HJ);D.cronograma.filter(r=>r.prio==='atencao'&&vejoRot(r)&&ocorre(r,am)).forEach(r=>L.push({k:'at_'+r.id,t:`Atenção no próximo dia útil: ${r.t}`,s:r.obs||nomesRs(r),ir:'rotinas'}));
 return L}
function cantoAviso(a){let c=document.getElementById('avcanto');if(!c){c=document.createElement('div');c.id='avcanto';c.setAttribute('aria-live','polite');document.body.appendChild(c)}
 const el=document.createElement('div');el.className='avc';el.innerHTML=`<button class="avx" aria-label="Fechar aviso">×</button><b>${esc(a.t)}</b>${a.s?`<span>${esc(a.s)}</span>`:''}`;
 el.addEventListener('click',e=>{if(!e.target.classList.contains('avx'))ir(a.ir);el.remove()});c.appendChild(el);setTimeout(()=>el.remove(),20000)}
function avisarCanto(a){avMarca(a.k);let so=false;
 try{if(avOk()&&Notification.permission==='granted'){const n=new Notification('Prumo · '+a.t,{body:a.s||'',tag:'prumo-'+a.k});n.onclick=()=>{window.focus();ir(a.ir);n.close()};so=document.visibilityState!=='visible'}}catch(e){}
 if(!so)cantoAviso(a)}
function checarAvisos(){if(S.modo==='carregando'||!DB)return;try{const ja=avJa();avisosDevidos().filter(a=>!ja.includes(a.k)).slice(0,4).forEach(avisarCanto)}catch(e){}}

/* chegada dos pedidos: a equipe marca à mão se o e-mail ou chamado chegou atrasado; o diretor vê por departamento */
async function marcaChegada(id,v){const c=D.chamados.find(x=>x.id===id);if(!c)return;const nv=c.chegada===v?'':v;
 if(await patch('chamados',id,{chegada:nv,chegadaPor:nv?(pessoa(S.perfil)?.n||quemSou()):'',chegadaEm:nv?new Date().toISOString():''},nv?(nv==='atrasado'?'Marcado: chegou atrasado':'Marcado: chegou no prazo'):'Marcação retirada',`${nv?`Marcou que o chamado ${c.proto} chegou ${nv==='atrasado'?'atrasado':'no prazo'}`:`Retirou a marcação de chegada do chamado ${c.proto}`} (${depNome(c.dep)})`))setTimeout(()=>{if(FORM?.tipo==='_det'&&FORM.id===id)detalheCh(id)},150)}
function chegadaPainel(){if(!(dir()||pode('ver_tudo')||pode('chamados')))return '';const m=S.chM||MES_ATUAL,L=D.chamados.filter(c=>(c.aberto||c.recebidoEm||'').slice(0,7)===m);
 const deps=[...new Set(L.map(c=>c.dep||''))].map(d=>{const l=L.filter(c=>(c.dep||'')===d),at=l.filter(c=>c.chegada==='atrasado').length,ok=l.filter(c=>c.chegada==='prazo').length;return {n:d?depNome(d):'Setor não definido',tot:l.length,at,ok,sem:l.length-at-ok,pct:at+ok?Math.round(at/(at+ok)*100):null}}).sort((a,b)=>b.at-a.at||b.tot-a.tot);
 const nav=`<div class="seg"><button onclick="S.chM=addMes('${m}',-1);render()" aria-label="Mês anterior">‹</button><span>${mesNome(m)}</span><button onclick="S.chM=addMes('${m}',1);render()" aria-label="Próximo mês">›</button></div>`;
 return `<div class="panel"><div class="ph"><h2>Pedidos recebidos por departamento</h2>${nav}</div>${deps.length?`<div class="tbl-wrap"><table><thead><tr><th style="text-align:left">Departamento</th><th>Recebidos</th><th>No prazo</th><th>Chegaram atrasados</th><th>Sem marcação</th><th>% atrasados</th></tr></thead><tbody>${deps.map(d=>`<tr><td style="text-align:left">${esc(d.n)}</td><td>${d.tot}</td><td>${d.ok}</td><td>${d.at?`<span class="tag bad">${d.at}</span>`:'0'}</td><td>${d.sem?`<span class="meta">${d.sem}</span>`:'0'}</td><td>${d.pct===null?'—':`<span class="${d.pct>=30?'neg':d.pct===0?'pos':''}">${d.pct}%</span>`}</td></tr>`).join('')}</tbody></table></div>`:'<p class="meta" style="margin:0">Nenhum chamado ou e-mail recebido neste mês.</p>'}<p class="meta" style="margin:8px 0 0">A equipe marca em cada chamado se chegou no prazo ou atrasado.</p></div>`}

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
const MENU=[['painel','Painel'],['alertas','Alertas'],['ferramentas','Ferramentas'],['rotinas','Cronograma'],['entregas','Entregas dos departamentos'],['destaques','Destaques do mês'],['fechamento','Fechamento D+N'],['calendario','Calendário'],['equipe','Equipe e metas'],['feedbacks','Feedbacks'],['chamados','Chamados'],['realizadas','Demandas realizadas'],['bancos','Troca de dados bancários'],['whats','WhatsApp'],['proc','Procedimentos'],['melhorias','Melhorias'],['relat','Relatórios'],['indicadores','Indicadores por área'],['logs','Registro de atividades'],['usuarios','Usuários e permissões'],['backup','Backup']];
const MENU_SOL=[['abrir','Abrir chamado'],['meus','Meus chamados'],['alertas','Notificações']];
const MENU_PERM={realizadas:'realizadas',whats:'whats',relat:'relat',indicadores:'relat',logs:'logs',chamados:'chamados',triagem:'email',bancos:'antifraude',fechamento:'fechamento'};
const vis=()=>S.perfil==='pendente'?[['acesso','Meu acesso']]:solic()?MENU_SOL:MENU.filter(([k])=>(!['fechamento','entregas'].includes(k)||modOn(k))&&(!MENU_PERM[k]||pode(MENU_PERM[k])||(k==='chamados'&&pode('email')))&&(!['usuarios','backup'].includes(k)||podeAdmin())&&(k!=='feedbacks'||fbPode()));
function chAbas(on){if(!(pode('chamados')&&pode('email')))return '';const nt=D.emails.filter(e=>e.st==='triagem').length;
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
   return `<div class="panel fbc"><div style="display:flex;gap:12px;align-items:center"><div class="av">${esc((p.n||'?')[0])}</div><div style="flex:1;min-width:0"><b style="font-weight:500">${esc(p.n)}</b><div class="meta">${esc(p.vinc||'Vínculo não informado')}${p.desde?' · desde '+fmt(p.desde)+'/'+p.desde.slice(0,4):''} · ${L.length} feedbacks</div></div></div>
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
 return head('Administração','Usuários e <em>permissões</em>','Cada pessoa entra com a própria conta. O perfil define o que ela vê e o que pode fazer.',real()?`<button class="btn pri" onclick="novoAcesso()">Adicionar pessoa</button>`:'')+
 (real()?'':`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Modo demonstração: esta visualização não tem login. No portal publicado, cada pessoa aparece aqui com o nome da conta dela.</span></div>`)+
 (ped.length?`<div class="panel"><div class="ph"><h2>Pedidos de acesso</h2><span>${ped.length}</span></div>${ped.map(p=>`<div class="row">${avU(p.id)}<div class="t"><b>${esc(nomeU(p.id))}</b><span>${esc(PAPEIS[p.perfil]||'')}${p.dep?' · '+esc(depNome(p.dep)):''}${p.obs?' · '+esc(p.obs):''} · ${fmtHora(p.em)}</span></div><button class="btn" onclick="recusar('${esc(p.id)}')">Recusar</button><button class="btn pri" onclick="editAcesso('${esc(p.id)}')">Revisar e liberar</button></div>`).join('')}</div>`:'')+
 `<div class="panel"><div class="ph"><h2>Pessoas com acesso</h2><span>${lst.length}</span></div>
 ${real()?`<div class="row">${avU(ME.uid)}<div class="t"><b>${esc(ME.nome||'Você')} <span class="meta">(você)</span></b><span>Administrador · acesso total</span></div></div>`:''}
 ${lst.filter(a=>a.id!==ME.uid).map(a=>`<div class="row">${avU(a.id)}<div class="t"><b>${esc(nomeU(a.id))}</b><span>${esc(PAPEIS[a.perfil]||'')}${a.perfil==='equipe'?' · '+esc(nomeDe(a.pessoa)):''}${a.funcao?' · '+esc(a.funcao):''}${(a.assuntos||[]).filter(assDe).length?' · responsável por '+esc(a.assuntos.filter(assDe).map(assNome).join(', ')):''}${a.perfil==='solicitante'?' · '+esc(depNome(a.dep)):''}</span></div>${a.ativo===false?'<span class="tag bad">Bloqueado</span>':a.perfil==='equipe'?`<span class="meta">${PERMS.filter(([k])=>({...PADRAO,...a.perms})[k]).length} de ${PERMS.length} permissões</span>`:''}<button class="btn" onclick="editAcesso('${esc(a.id)}')">Editar</button></div>`).join('')}
 ${!lst.filter(a=>a.id!==ME.uid).length?vazio('Ninguém liberado ainda','Quando alguém abrir o portal pela primeira vez, o pedido de acesso aparece aqui.'):''}</div>
 <div class="panel"><div class="ph"><h2>O que cada perfil pode fazer</h2><span>a equipe pode ter permissões ajustadas pessoa a pessoa</span></div>${matriz()}</div>`+
 note('Quem entra pela primeira vez aparece em Pedidos de acesso. Diretores e administradores liberam, ajustam permissões ou bloqueiam. Bloquear não apaga o histórico.')},
triagem(){const pend=D.emails.filter(e=>e.st==='triagem'),hist=D.emails.filter(e=>e.st==='aplicado'||(e.st==='ignorado'&&!e.auto)).sort((a,b)=>a.recebido<b.recebido?1:-1).slice(0,30);
 const g={};pend.forEach(e=>{const k=remDoEmail(e);(g[k]=g[k]||[]).push(e)});
 const q=norm(S.fRemT||'');
 const G=Object.entries(g).map(([k,l])=>{const r=D.remetentes.find(x=>x.id===k);return {k,r,nome:r?.nome||l[0].deNome||l[0].de,email:r?.email||l[0].de,dep:r?r.dep:l[0].dep,l:l.sort((a,b)=>a.recebido<b.recebido?1:-1)}}).filter(x=>!q||norm(x.nome+' '+x.email+' '+depNome(x.dep)).includes(q)).sort((a,b)=>a.l[0].recebido<b.l[0].recebido?1:-1);
 const sem=lerTodos()?[]:D.departamentos.filter(d=>!listaEmails(d).length);
 const conhecidos=[...D.remetentes].sort((a,b)=>(a.nome||a.email||'').localeCompare(b.nome||b.email||''));
 return head('Pedidos de outras áreas e e-mails','Chamados','Os e-mails lidos da caixa ou pasta conectada ficam aqui, agrupados por remetente. Aceite cada um como chamado.')+
 chAbas('em')+chEmail()+
 (sem.length?`<div class="banner" style="background:var(--warn-bg);color:var(--warn)"><span>Sem e-mail cadastrado: ${sem.map(d=>esc(d.n)).join(', ')}. E-mails desses departamentos não são reconhecidos.</span>${pode('cadastros')?`<button class="btn" onclick="${modOn('entregas')?"ir('entregas')":'gerirDeps()'}">Cadastrar</button>`:''}</div>`:'')+
 `<div class="panel"><div class="ph"><h2>Aguardando triagem</h2><span>${pend.length} ${pend.length===1?'e-mail':'e-mails'} de ${Object.keys(g).length} ${Object.keys(g).length===1?'remetente':'remetentes'}</span></div>
 ${Object.keys(g).length>3?`<input class="inp" id="fremt" data-nodraft="1" placeholder="Buscar remetente ou setor" value="${esc(S.fRemT||'')}" oninput="S.fRemT=this.value;render()">`:''}
 ${G.length?G.map(x=>`<div class="remg"><div class="remh"><span class="av">${esc((x.nome||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(x.nome)}</b><span>${esc(x.email)} · ${x.l.length} ${x.l.length===1?'e-mail':'e-mails'}</span></div>
  <select class="inp" style="width:auto;max-width:100%" aria-label="Setor de ${esc(x.nome)}" onchange="setRem('${esc(x.k)}',{dep:this.value})"><option value="">Setor: não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===x.dep?'selected':''}>Setor: ${esc(d.n)}</option>`).join('')}</select><button class="btn ghost" onclick="editRem('${esc(x.k)}')">Mais opções</button></div>
  ${x.l.map(cardEmail).join('')}</div>`).join(''):vazio(q?'Nenhum remetente encontrado':'Nenhum e-mail para revisar',q?'Tente outro nome.':'Quando chegar e-mail, ele aparece aqui agrupado por quem enviou.')}</div>
 <div class="panel"><div class="ph"><h2>Contatos</h2><span>${conhecidos.length}</span></div>${conhecidos.length?conhecidos.map(r=>{const n=D.emails.filter(e=>remDoEmail(e)===r.id).length;return `<div class="row"><span class="av">${esc((r.nome||r.email||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(r.nome||r.email)}</b><span>${esc(r.email)} · ${r.dep?esc(depNome(r.dep)):'setor não definido'}${r.cat&&assDe(r.cat)?' · '+esc(assNome(r.cat)):''} · ${n} ${n===1?'e-mail':'e-mails'}</span></div>${r.ignorar?'<span class="tag ne">Ignorado</span>':''}<button class="btn" onclick="editRem('${esc(r.id)}')">Editar</button></div>`}).join(''):'<p class="meta">Os remetentes aparecem aqui depois da primeira verificação.</p>'}</div>
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
 <div class="stat"><p>Pontos guardados</p><strong>${L.length}</strong><small>mantém ${+CFG.bkReter||30} dias</small></div>
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
 `<div class="panel">${l.length?l.map(c=>`<div class="row"><div class="t"><b>${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(c.tipo)} · aberto ${fmt(c.aberto)}${c.venc?' · vence '+fmt(c.venc):''}</span>${c.pend&&c.st==='Pendência com solicitante'?`<span style="display:block;color:var(--bad)">Pendência: ${esc(c.pend)}</span>`:''}</div><span class="tag ${stCh[c.st]}">${esc(c.st)}</span><button class="btn ghost" onclick="detalheCh('${esc(c.id)}')">Detalhes</button>${c.st==='Pendência com solicitante'?`<button class="btn pri" onclick="abrirChSheet('${esc(c.id)}')">Corrigir</button>`:''}</div>`).join(''):vazio('Nenhum chamado ainda','Abra o primeiro chamado do seu departamento.')}</div>`},
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
 return head('Pedidos de outras áreas e e-mails','Chamados','Separados por assunto. Aceite cada demanda com prazo e responsável. Ao concluir, ela vai para Demandas realizadas.',`${podeAdmin()?`<button class="btn" onclick="cfgPrazo()">Regra de prazo: ${DMIN()} dias úteis</button>`:`<span class="chip">Regra: ${DMIN()} dias úteis</span>`}${pode('cadastros')?`<button class="btn" onclick="gerirAssuntos()">Assuntos</button>`:''}${pode('cadastros')&&!modOn('entregas')?`<button class="btn" onclick="gerirDeps()">Departamentos</button>`:''}${podeAdmin()?`<button class="btn" onclick="cfgEtapasCh()">Subetapas</button>`:''}<button class="btn pri" onclick="abrirChSheet()">Abrir chamado</button>`)+
 chAbas('ch')+chEmail()+`<div class="stats"><div class="stat"><p>Em aberto</p><strong>${ab.length}</strong></div><div class="stat"><p>Sem responsável</p><strong style="color:${sem?'var(--warn)':'var(--ink)'}">${sem}</strong></div><div class="stat"><p>Atrasadas no prazo de entrega</p><strong style="color:${atr?'var(--bad)':'var(--ink)'}">${atr}</strong></div><div class="stat"><p>Fora do prazo da política</p><strong style="color:${fora?'var(--warn)':'var(--ink)'}">${fora}</strong></div></div>
 <div class="tabs big" role="tablist" aria-label="Assuntos">${abas.map(([k,n])=>`<button role="tab" aria-selected="${fCat===k}" class="${fCat===k?'on':''}" onclick="S.fCat='${esc(k)}';render()">${esc(n)} <span class="meta">${nAb(k)}</span></button>`).join('')}${pode('cadastros')?`<button onclick="gerirAssuntos()" title="Adicionar ou excluir assuntos">+ assunto</button>`:''}</div>
 <div class="filtros"><input class="inp" id="fbch" data-nodraft="1" placeholder="Buscar por resumo, protocolo ou remetente" value="${esc(S.fBusca||'')}" oninput="S.fBusca=this.value;render()">
 ${rems.length?`<select class="inp" aria-label="Remetente" onchange="S.fRem=this.value;render()"><option value="">Todos os remetentes</option>${rems.map(([k,n])=>`<option value="${esc(k)}" ${S.fRem===k?'selected':''}>${esc(n)} (${D.chamados.filter(c=>remCh(c)===k&&c.st!=='Concluído').length})</option>`).join('')}</select>`:''}
 <select class="inp" aria-label="Setor" onchange="S.fDepC=this.value;render()"><option value="">Todos os setores</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${S.fDepC===d.id?'selected':''}>${esc(d.n)}</option>`).join('')}<option value="_sem" ${S.fDepC==='_sem'?'selected':''}>Setor não definido</option></select>
 <select class="inp" aria-label="Responsável" onchange="S.fResp=this.value;render()"><option value="">Todos os responsáveis</option><option value="dir" ${S.fResp==='dir'?'selected':''}>Diretor</option>${colabs().map(p=>`<option value="${esc(p.id)}" ${S.fResp===p.id?'selected':''}>${esc(p.n)}</option>`).join('')}</select></div>
 ${S.fRem?`<div class="remg remh"><span class="av">${esc((remNomeCh(rCh[0]||{})||'?')[0].toUpperCase())}</span><div class="t"><b>${esc(remNomeCh(rCh[0]||{}))}</b><span>${esc(rSel?.email||'')} · ${rCh.length} ${rCh.length===1?'chamado':'chamados'}, ${rCh.filter(c=>c.st!=='Concluído').length} em aberto</span></div>
 ${pode('email')||pode('cadastros')?`<select class="inp" style="width:auto;max-width:100%" aria-label="Setor do remetente" onchange="setRem('${esc(S.fRem)}',{dep:this.value})"><option value="">Setor: não definido</option>${D.departamentos.map(d=>`<option value="${esc(d.id)}" ${d.id===(rSel?rSel.dep:rCh[0]?.dep)?'selected':''}>Setor: ${esc(d.n)}</option>`).join('')}</select>`:''}<button class="btn ghost" onclick="editRem('${esc(S.fRem)}')">E-mails e opções</button><button class="btn ghost" onclick="S.fRem='';render()">Ver todos</button></div>`:''}
 <div class="kanban">${ETAPAS.map(e=>{const it=l.filter(c=>c.st===e).sort((a,b)=>e==='Concluído'?((b.concl||'')<(a.concl||'')?-1:1):((a.prazo||a.venc||'9')<(b.prazo||b.venc||'9')?-1:1));return `<div class="col"><h3>${e}<span>${it.length}</span></h3>${e==='Concluído'?'<span class="meta" style="font-size:11.5px">Últimos 30 dias</span>':''}${it.map(c=>cardCh(c,true)).join('')}${e==='Concluído'&&pode('realizadas')?`<button class="btn ghost" onclick="ir('realizadas')">Ver todas as realizadas</button>`:''}</div>`}).join('')}</div>`+
 note('Clique em um assunto para ver só as demandas dele. Os outros departamentos veem só Abrir chamado e Meus chamados. Quem não tem a permissão Abrir e-mails no portal vê o resumo, o assunto e a categoria, sem o e-mail.')},
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
logs(){const q=(S.fLog||'').toLowerCase(),l=D.logs.filter(x=>!q||((x.acao||'')+' '+(x.quem||'')).toLowerCase().includes(q));
 return head('Auditoria','Registro de atividades','Quem fez o quê e quando. Os registros não podem ser editados pela tela.')+
 `<input class="inp" id="flog" placeholder="Filtrar por pessoa, chamado ou ação" value="${esc(S.fLog||'')}" oninput="S.fLog=this.value;document.getElementById('loglist').innerHTML=logRows()">
 <div class="panel" id="loglist">${logRows()}</div>`+note('Mostra as 300 ações mais recentes. O nome vem da conta de cada pessoa; ações feitas simulando outro perfil aparecem marcadas.')},
alertas(){const A=alertas();
 return (avPodePedir()?`<div class="banner"><span>Receba avisos no canto da tela do computador quando um prazo ou rotina estiver chegando.</span><button class="btn pri" onclick="ativarAvisos()">Ativar avisos</button></div>`:'')+head('Central de notificações','Alertas',modOn('outros')?(dir()?'Atrasos do cronograma, rotinas e pendências que dependem de você.':'Alertas das rotinas sob sua responsabilidade.'):(dir()?'Rotinas do cronograma atrasadas e rotinas de atenção do departamento.':'Rotinas do cronograma sob sua responsabilidade.'))+
 `<div class="panel">${A.length?A.map(a=>`<div class="row"><span class="av ${a.c}">${ic(a.ic).replace('aria-hidden','style="width:17px;height:17px" aria-hidden')}</span><div class="t"><b>${esc(a.t)}</b><span>${esc(a.s)}</span></div>${a.id&&pode('entregas')?`<button class="btn" onclick="cobrar('${esc(a.id)}')">Cobrar</button>`:''}<button class="btn" onclick="ir('${a.ir}')">Abrir</button></div>`).join(''):vazio('Nenhum alerta agora','Quando uma rotina do cronograma atrasar ou tiver prioridade Atenção, ela aparece aqui.')}</div>`+
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
 if(!dir()&&!pode('ver_tudo')){const p=pessoa(S.perfil),mt=minhas(),r=resumoTri(S.perfil,S.tri);const meuF=r=>minhaRot(r),cm=contaDia(HJ,meuF),meus=D.cronograma.filter(r=>meuF(r)&&ocorre(r,HJ)).sort(ordR),meusAtr=atrasosCron(meuF).filter(o=>o.dia<HJ);
  return head(hojeTxt(),`Bom dia, <em>${esc(p?.n||'')}</em>`,'Seu dia no cronograma, suas demandas e seu desempenho no trimestre.',`<button class="btn pri" onclick="S.cTab='dia';S.cDia='';ir('rotinas')">Abrir cronograma</button>`)+comecarBtn()+andamento(S.pDia||HJ,'pDia')+`<div class="panel"><div class="ph"><h2>Outras atividades de hoje</h2><span>clique no que fez</span></div>${outrasOpcoes(HJ)}</div>`+
  `<div class="stats"><div class="stat"><p>Meu dia</p><strong>${cm.ok}/${cm.tot}</strong><small>${cm.atr+meusAtr.length?`<span class="neg">${cm.atr+meusAtr.length} em atraso</span>`:'rotinas concluídas'}</small></div><div class="stat"><p>Metas do trimestre</p><strong>${p?.m??0}%</strong></div><div class="stat"><p>Minhas demandas em aberto</p><strong>${D.chamados.filter(c=>c.resp===S.perfil&&c.st!=='Concluído').length}</strong></div><div class="stat"><p>Prazos cumpridos</p><strong>${r.pct===null?'—':r.pct+'%'}</strong></div></div>
  ${meusAtr.length?`<div class="panel late-p"><div class="ph"><h2>Ficaram para trás</h2><span>${meusAtr.length}</span></div>${meusAtr.map(o=>linOc(o.r,o.dia,true)).join('')}</div>`:''}
  ${(()=>{const pp=proxPrazos(5,true);return `<div class="panel"><div class="ph"><h2>Próximos prazos</h2>${novo('evento','Novo prazo')}</div>${pp.length?pp.map(linPrazo).join(''):vazio('Sem prazos próximos','')}</div>`})()}
  <div class="panel"><div class="ph"><h2>Meu dia</h2><span>${cm.ok} de ${cm.tot} concluídas</span></div>${meus.length?meus.map(r=>linOc(r,HJ)).join(''):vazio('Nenhuma rotina sua hoje','')}</div>
  ${mt.filter(x=>x.s!=='feita').length?`<div class="panel"><div class="ph"><h2>Minhas tarefas avulsas</h2><span>${mt.filter(x=>x.s!=='feita').length} abertas</span></div>${mt.filter(x=>x.s!=='feita').map(linTar).join('')}</div>`:''}
  ${modOn('entregas')?`<div class="panel"><div class="ph"><h2>Entregas de departamentos sob sua responsabilidade</h2><span>${minhasEnt().filter(entAtrasada).length} em atraso</span></div>${minhasEnt().filter(e=>!e.recebido).length?minhasEnt().filter(e=>!e.recebido).map(linEnt).join(''):vazio('Nenhuma entrega pendente','')}</div>`:''}
  <div class="panel"><div class="ph"><h2>Destaques de ${MESES[HOJE.getMonth()]}</h2></div>${dm.length?`<div class="hl">${dm.map(cardDest).join('')}</div>`:vazio('Nenhum destaque neste mês','')}</div>`+note('No perfil de colaborador você vê só as suas tarefas, as suas horas e o seu feedback.')}
 const ea=modOn('entregas')?D.entregas.filter(entAtrasada):[],porDep={};const cd=contaDia(HJ),cAtr=atrasosCron();ea.forEach(e=>porDep[depNome(e.dep)]=(porDep[depNome(e.dep)]||0)+1);
 const alertaTop=ea.length?`<div class="banner" style="background:var(--bad-bg);color:var(--bad)"><span>${ic('alertas').replace('aria-hidden','style="width:16px;height:16px;vertical-align:-3px;margin-right:6px" aria-hidden')}Em atraso: ${Object.entries(porDep).map(([n,q])=>`${esc(n)} (${q})`).join(', ')}</span><button class="btn" onclick="ir('alertas')">Ver alertas</button></div>`:'';
 return head(hojeTxt(),`Bom dia, <em>${esc(primeiroNome())}</em>`,'Visão geral do departamento hoje.',`<span class="chip">Competência ${mesCurto(MES_ATUAL)}</span>`)+alertaTop+ban+comecarBtn()+andamento(S.pDia||HJ,'pDia')+
 `<div class="stats">
  <div class="stat"><p>Cronograma de hoje</p><strong>${cd.ok}/${cd.tot}</strong><small>${cd.tot?Math.round(cd.ok/cd.tot*100):0}% concluído</small></div>
  <div class="stat"><p>Em andamento</p><strong style="color:${cd.and?'var(--accent)':'var(--ink)'}">${cd.and}</strong><small>rotinas começadas</small></div>
  <div class="stat"><p>Rotinas atrasadas</p><strong style="color:${cAtr.length+atr.length?'var(--bad)':'var(--ink)'}">${cAtr.length+atr.length}</strong><small>${atr.length?`${atr.length} tarefas avulsas`:'cronograma'}</small></div>
  ${modOn('entregas')?`<div class="stat"><p>Entregas em atraso</p><strong style="color:${ea.length?'var(--bad)':'var(--ink)'}">${ea.length}</strong><small>${ea.length?[...new Set(ea.map(e=>depNome(e.dep)))].length+' departamentos':'outros departamentos'}</small></div>`:''}
  <div class="stat"><p>Demandas atrasadas</p><strong style="color:${D.chamados.filter(chAtrasado).length?'var(--bad)':'var(--ink)'}">${D.chamados.filter(chAtrasado).length}</strong><small>prazo de entrega vencido</small></div></div>
 ${cronPainel()}${chegadaPainel()}${modOn('fechamento')&&pode('fechamento')?fechResumo():''}${demResumo()}
 ${modOn('entregas')?`<div class="grid2">
  <div class="panel"><div class="ph"><h2>Entregas por departamento</h2><button class="btn ghost" onclick="ir('entregas')">Ver entregas</button></div>${painelDep()}</div>
  <div class="panel"><div class="ph"><h2>Atrasos de departamentos</h2><span>${ea.length}</span></div>
   ${ea.length?ea.sort((a,b)=>a.prazo<b.prazo?-1:1).slice(0,5).map(e=>`<div class="row"><div class="t"><b>${esc(depNome(e.dep))}</b><span>${esc(e.item)} · ${-diasAte(e.prazo)} ${diasAte(e.prazo)<-1?'dias':'dia'} de atraso</span></div><button class="btn" onclick="cobrar('${esc(e.id)}')">Cobrar</button></div>`).join(''):vazio('Nenhum departamento em atraso','Todas as entregas estão dentro do prazo.')}
  </div></div>`:''}
 <div class="grid2">
  <div class="panel"><div class="ph"><h2>Precisa da sua atenção</h2></div>
   ${cAtr.length?`<div class="row"><div class="t"><b>${cAtr.length} ${cAtr.length>1?'rotinas do cronograma atrasadas':'rotina do cronograma atrasada'}</b><span>${esc([...new Set(cAtr.flatMap(o=>rsDe(o.r)))].map(nomeDe).join(', '))}</span></div><button class="btn" onclick="S.cTab='dia';S.cDia='';ir('rotinas')">Ver</button></div>`:''}
   ${atr.map(x=>`<div class="row"><div class="t"><b>${esc(x.t)}</b><span>${esc(nomeDe(x.r))} · venceu ${fmt(x.prazo)}</span></div><span class="tag bad">Atrasada</span></div>`).join('')}
   ${pm?`<div class="row"><div class="t"><b>${pm} ${pm>1?'mensagens aguardando':'mensagem aguardando'} aprovação</b><span>WhatsApp da diretoria</span></div><button class="btn" onclick="ir('whats')">Revisar</button></div>`:''}
   ${fbPode()?colabs().filter(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]==='ne').map(p=>`<div class="row"><div class="t"><b>Feedback mensal de ${esc(p.n)}</b><span>${esc(mesNome(addMes(MES_ATUAL,-1)))} ainda não registrado</span></div><button class="btn" onclick="fbNovo({pessoa:'${p.id}',tipo:'Mensal'})">Escrever</button></div>`).join(''):''}
   ${D.chamados.filter(chAtrasado).map(c=>`<div class="row"><div class="t"><b>Demanda atrasada: ${esc(c.assunto)}</b><span>${esc(c.proto)} · ${esc(respNome(c.resp))} · prazo ${fmt(c.prazo)}</span></div><button class="btn" onclick="detalheCh('${esc(c.id)}')">Ver</button></div>`).join('')}
   ${D.chamados.filter(c=>c.st==='Aberto').map(c=>`<div class="row"><div class="t"><b>Novo chamado: ${esc(c.assunto)}</b><span>${esc(depNome(c.dep))} · ${esc(c.tipo)}</span></div><button class="btn" onclick="ir('chamados')">Ver</button></div>`).join('')}
   ${!cAtr.length&&!atr.length&&!pm&&(!fbPode()||colabs().every(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]!=='ne'))?vazio('Tudo em dia','Nada pendente para você agora.'):''}
  </div>
  <div class="panel"><div class="ph"><h2>Destaques de ${MESES[HOJE.getMonth()]}</h2><button class="btn ghost" onclick="ir('destaques')">Ver todos</button></div>
   ${dm.length?dm.slice(0,3).map(d=>`<div class="row"><div class="t"><b>${esc(d.t)}</b><span>${esc(d.tipo)}${d.pessoa?' · '+esc(nomeDe(d.pessoa)):''}</span></div></div>`).join(''):vazio('Nenhum destaque neste mês','Registre conquistas e reconhecimentos.','destaque','Registrar destaque')}
  </div></div>
 <div class="grid2">
  <div class="panel"><div class="ph"><h2>Próximos prazos</h2><button class="btn ghost" onclick="ir('calendario')">Calendário</button></div>
   ${prox.length?prox.map(linPrazo).join(''):vazio('Sem prazos próximos','','evento','Registrar prazo')}<div style="margin-top:8px">${novo('evento','Novo prazo')}</div></div>
  <div class="panel"><div class="ph"><h2>Estruturação do departamento</h2>${podeAdmin()?'<button class="btn ghost" onclick="editEstr()">Atualizar</button>':''}</div>
   <div class="prog">${[['Processos mapeados',+CFG.mapeados||0,+CFG.meta||25],['Procedimentos documentados',D.procedimentos.length,+CFG.meta||25],['Melhorias implantadas',D.sugestoes.filter(s=>s.e==='Implantada').length,Math.max(D.sugestoes.length,1)],['Rotinas do cronograma com responsável',D.cronograma.filter(r=>rsDe(r).length).length,Math.max(D.cronograma.length,1)]].map(b=>`<div><p>${b[0]}<span>${b[1]}/${b[2]}</span></p><div class="bar"><i style="width:${Math.min(100,b[1]/b[2]*100)}%"></i></div></div>`).join('')}</div>
  </div></div>`},

destaques(){const l=D.destaques.filter(d=>d.mes===S.mesDest);
 return head('Reconhecimento','Destaques do mês','Conquistas, metas batidas e reconhecimentos da equipe.',mesNav('mesDest')+(pode('feedbacks')?novo('destaque','Registrar destaque'):''))+
 (l.length?`<div class="hl">${l.map(cardDest).join('')}</div>`:`<div class="panel">${vazio(`Nenhum destaque em ${mesNome(S.mesDest)}`,'Registre o que a equipe conquistou no mês.',pode('feedbacks')?'destaque':null,'Registrar destaque')}</div>`)+
 (pode('feedbacks')?note('Os destaques do mês entram automaticamente no relatório do trimestre e podem virar uma mensagem de reconhecimento no WhatsApp.'):'')},

rotinas(){const t=S.cTab||'dia',pc=podeEditRot();
 const btns=`${pc?`<button class="btn" onclick="editRot()">Nova rotina fixa</button>`:''}<button class="btn" onclick="editEv()">Novo prazo</button>${podeAdmin()?`<button class="btn" onclick="cfgCron()">Ajustes</button>`:''}`;
 return head(`${S.tri.q}º trimestre de ${S.tri.ano}`,'Cronograma do <em>departamento</em>',`${procs().join(' → ')}. As rotinas do dia já vêm prontas: cada pessoa clica no que fez.`,btns)+cronAbas()+
 (t==='semana'?cronSemana():t==='quem'?cronQuem():t==='rotinas'?cronRotinas():t==='tri'?cronTri():cronDia())+
 (t==='dia'?note('Cada pessoa clica no quadrado do que ela fez. Se outra pessoa também fez, ela marca o dela. O diretor vê no Painel quem fez o quê, com a hora.'):'')},

calendario(){
 const [y,m]=S.cal.split('-').map(Number),pri=new Date(y,m-1,1).getDay(),nd=new Date(y,m,0).getDate();
 const ev={};const put=(d,t,c)=>{if(d&&d.slice(0,7)===S.cal)(ev[+d.slice(8,10)]=ev[+d.slice(8,10)]||[]).push([t,c])};
 const fimM=isoD(new Date(y,m,0)),evs=D.eventos.filter(vejoEv);
 evs.forEach(e=>{for(const d of diasDe(S.cal+'-01',fimM))if(evOcorre(e,d))put(d,(e.hora?e.hora+' ':'')+e.t,corEv(e))});
 minhas().forEach(t=>put(t.prazo,t.t,t.s==='feita'?'ok':atrasada(t)?'bad':'ne'));
 D.cronograma.filter(r=>['mensal_util','mensal_dia','unica'].includes(r.freq)).forEach(r=>{for(const d of diasDe(S.cal+'-01',isoD(new Date(+S.cal.slice(0,4),+S.cal.slice(5,7),0))))if(ocorre(r,d)){const st=stOc(r,d)[0];put(d,r.t,st==='ok'||st==='wa'?'ok':st==='bad'?'bad':r.prio==='atencao'?'wa':'ne')}});
 let c='';['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].forEach(d=>c+=`<div class="dn">${d}</div>`);
 for(let i=0;i<pri;i++)c+='<div></div>';
 for(let d=1;d<=nd;d++){const iso=`${S.cal}-${pad(d)}`;c+=`<div class="day ${iso===HJ?'today':''}">${d}${(ev[d]||[]).slice(0,3).map(e=>`<span class="ev ${e[1]}" title="${esc(e[0])}">${esc(e[0])}</span>`).join('')}${(ev[d]||[]).length>3?`<span class="meta">+${ev[d].length-3}</span>`:''}</div>`}
 return head('Agenda do departamento','Calendário','Prazos das rotinas, obrigações e reuniões.',mesNav('cal')+novo('evento','Novo prazo'))+
 `<div class="panel"><div class="cal">${c}</div></div><div class="legend"><span><i style="background:var(--bad)"></i>Fechamento ou atrasada</span><span><i style="background:var(--warn)"></i>Obrigação</span><span><i style="background:var(--accent)"></i>Reunião</span><span><i style="background:var(--ok)"></i>Concluída</span><span><i style="background:var(--ink-3)"></i>Rotina</span></div>`+
 (()=>{const L=evs.filter(e=>(e.rep||'unica')!=='unica'?(!e.fim||e.fim>=S.cal+'-01')&&(!e.data||e.data<=fimM):(e.data||'').slice(0,7)===S.cal).sort((a,b)=>((a.rep||'unica')==='unica')-((b.rep||'unica')==='unica')||(a.data||'').localeCompare(b.data||''));
  return `<div class="panel"><div class="ph"><h2>Prazos e compromissos de ${mesNome(S.cal)}</h2><span>${L.length}</span></div>${L.length?L.map(e=>`<div class="row"><div class="t"><b>${esc(e.t)}</b><span>${esc(evTxt(e))} · ${esc(quemEv(e))}${e.obs?' · '+esc(e.obs):''}</span></div><span class="tag ${corEv(e)}">${esc(e.tipo||'Outro')}</span>${podeEditRot()?`<button class="btn ghost" onclick="editEv('${e.id}')">Editar</button>`:''}</div>`).join(''):vazio('Nada neste mês','','evento','Novo prazo')}</div>`})()},

equipe(){const l=pode('feedbacks')?colabs():D.equipe.filter(e=>e.id===S.perfil);const ft={Realizado:'ok',Agendado:'wa',Pendente:'bad'};
 return head(`${S.tri.q}º trimestre de ${S.tri.ano}`,'Equipe e feedbacks','Metas, feedback e o resumo de prazos e demandas de cada pessoa.',triNav()+(pode('cadastros')?novo('pessoa','Cadastrar colaborador'):''))+
 (l.length?`<div class="cards">${l.map(e=>{const r=resumoTri(e.id,S.tri),da=D.chamados.filter(c=>c.resp===e.id&&c.st!=='Concluído').length;return `<div class="panel"><div style="display:flex;align-items:center;gap:12px"><div class="av">${esc((e.n||'?')[0])}</div><div style="flex:1;min-width:0"><b style="font-weight:500">${esc(e.n)}</b><div style="font-size:12px;color:var(--ink-3)">${esc(e.c)}</div></div>${fbPode()?(()=>{const s=seloMes(e.id,addMes(MES_ATUAL,-1));return `<span class="tag ${s[0]}" title="Feedback mensal do mês anterior">${s[0]==='ok'?'Feedback enviado':s[0]==='wa'?'Feedback registrado':s[0]==='nd'?'Sem feedback previsto':'Feedback pendente'}</span>`})():''}</div>
  <div style="margin-top:16px"><p style="margin:0 0 6px;display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink-2)">Metas do trimestre<span style="font-variant-numeric:tabular-nums">${+e.m||0}%</span></p><div class="bar"><i style="width:${Math.min(100,+e.m||0)}%"></i></div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px"><div class="stat" style="padding:10px 12px;background:var(--side);border-radius:8px"><p>Demandas em aberto</p><strong style="font-size:17px">${da}</strong></div><div class="stat" style="padding:10px 12px;background:var(--side);border-radius:8px"><p>Prazos cumpridos</p><strong style="font-size:17px">${r.pct===null?'—':r.pct+'%'}</strong></div></div>
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

melhorias(){const l=[...D.sugestoes].sort((a,b)=>(b.v||0)-(a.v||0));
 return head('Ideias da equipe','Melhorias e sugestões','A equipe sugere e vota. O diretor acompanha a implantação.',novo('sugestao','Nova sugestão'))+
 `<div class="panel">${l.length?l.map(s=>`<div class="row"><button class="btn" onclick="vt('${esc(s.id)}')" aria-label="Votar" style="font-variant-numeric:tabular-nums">▲ ${s.v||0}</button><div class="t"><b>${esc(s.t)}</b><span>Sugerida por ${esc(nomeDe(s.a))}</span></div><span class="tag ${{Implantada:'ok','Em teste':'ac','Em análise':'wa'}[s.e]||'ne'}">${esc(s.e)}</span>${editar('sugestao',s.id)}</div>`).join(''):vazio('Nenhuma sugestão ainda','Toda ideia de melhoria começa aqui.','sugestao','Nova sugestão')}</div>`},

relat(){const tf=D.tarefas,f=tf.filter(x=>x.s==='feita').length,ms=mesesTri(S.tri),dq=D.destaques.filter(d=>ms.includes(d.mes));
 return head('Para as reuniões','Relatórios','Montados a partir de tudo o que foi registrado no portal.',triNav())+
 `<div class="panel"><div class="ph"><h2>Situação atual</h2><span>atualizado agora</span></div>
 ${[['Rotinas concluídas',`${f} de ${tf.length}`],['Tarefas atrasadas',tf.filter(atrasada).length],['Chamados em aberto',D.chamados.filter(c=>c.st!=='Concluído').length],['Chamados fora do prazo da política',D.chamados.filter(c=>c.fora).length],['Feedbacks mensais do mês anterior registrados',`${colabs().filter(p=>['ok','wa'].includes(seloMes(p.id,addMes(MES_ATUAL,-1))[0])).length} de ${colabs().filter(p=>seloMes(p.id,addMes(MES_ATUAL,-1))[0]!=='nd').length}`],['Mensagens aprovadas',D.mensagens.filter(m=>m.s==='aprovada').length],['Sugestões implantadas',D.sugestoes.filter(s=>s.e==='Implantada').length]].map(r=>`<div class="row"><div class="t"><b style="font-weight:400">${r[0]}</b></div><span style="font-variant-numeric:tabular-nums;font-weight:500">${r[1]}</span></div>`).join('')}</div>
 <div class="panel"><div class="ph"><h2>Entregas dos departamentos</h2><span>pontualidade e atrasos</span></div>${painelDep()}</div>
 <div class="panel"><div class="ph"><h2>Prazos do ${S.tri.q}º trimestre</h2><span>${ms.map(mesCurto).join(' · ')}</span></div>${tabelaTri(colabs())}</div>
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

function logRows(){const q=(S.fLog||'').toLowerCase(),l=D.logs.filter(x=>!q||((x.acao||'')+' '+quemLog(x)).toLowerCase().includes(q));
 return l.length?l.map(x=>`<div class="row"><span class="meta" style="width:96px">${fmtHora(x.em)}</span><div class="t"><b style="font-weight:400">${esc(x.acao)}</b><span>${esc(quemLog(x))}</span></div></div>`).join(''):vazio(q?'Nada encontrado':'Nenhuma atividade registrada ainda',q?'Tente outro termo.':'Cada registro, alteração e exclusão aparece aqui automaticamente.')}
function cfgPrazo(){FORM={tipo:'_cfg'};
 document.getElementById('sheet').innerHTML=`<div><p class="eyebrow">Política de chamados</p><h2 id="sheet-title">Prazo mínimo para pagamentos</h2><p class="sub" style="font-size:13px">Quantos dias úteis antes do vencimento os departamentos precisam abrir o chamado.</p></div>
 <div><label class="lbl" for="f_dm">Dias úteis</label><input class="inp" id="f_dm" type="number" min="0" max="30" value="${DMIN()}"><p class="ferr" id="e_dm"></p></div>
 <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="salvaCfg()">Salvar</button></div></div>`;
 document.getElementById('ov').hidden=false}
async function salvaCfg(){const v=+document.getElementById('f_dm').value;if(!(v>=0&&v<=30)){document.getElementById('e_dm').textContent='Informe um número entre 0 e 30.';return}
 if(!DB)return toast('O armazenamento não está disponível nesta visualização.');
 try{await DB.doc('config/estrutura').set({...CFG,diasMin:v});log(`Alterou a regra de prazo de chamados para ${v} dias úteis`);toast('Regra atualizada');fechar()}catch(e){toast('Não foi possível salvar.')}}
/* ---------- conectar o e-mail da Microsoft ---------- */
async function conectarEmail(){FORM={tipo:'_conectar'};const sh=document.getElementById('sheet');
 sh.innerHTML=`<div><p class="eyebrow">E-mails recebidos</p><h2 id="sheet-title">Conectar e-mail</h2></div><p class="meta">Verificando…</p>`;document.getElementById('ov').hidden=false;
 const ativo=window.portalMicrosoftAtivo?await window.portalMicrosoftAtivo():null;if(FORM?.tipo!=='_conectar')return;
 const cb=(window.PORTAL_CONFIG||{}).supabaseUrl?(window.PORTAL_CONFIG.supabaseUrl.replace(/\/+$/,'')+'/auth/v1/callback'):'https://SEU-PROJETO.supabase.co/auth/v1/callback';
 if(ativo){sh.innerHTML=`<div><p class="eyebrow">E-mails recebidos</p><h2 id="sheet-title">Conectar o e-mail da empresa</h2><p class="sub" style="font-size:13px">O Prumo lê os e-mails com a sua própria conta Microsoft. Ele nunca vê a sua senha.</p></div>
  <ol class="passos"><li>Clique em <b>Ir para a Microsoft</b>.</li><li>Entre com o e-mail da empresa${ME.email?` (o mesmo do Prumo: <b>${esc(ME.email)}</b>)`:''}.</li><li>Clique em <b>Aceitar</b>.</li><li>Se aparecer <b>Precisa de aprovação do administrador</b>, escreva o motivo e clique em <b>Solicitar aprovação</b>. O pedido vai para a TI. Depois que a TI aprovar, volte aqui e clique em Conectar e-mail de novo.</li></ol>
  ${note('A conexão dura cerca de 1 hora por vez. Quando vencer, o portal avisa e você clica em Conectar e-mail de novo, normalmente sem digitar senha.')}
  <div class="foot"><span></span><div style="display:flex;gap:8px"><button class="btn" onclick="fechar()">Cancelar</button><button class="btn pri" onclick="window.portalReconectarMicrosoft()">Ir para a Microsoft</button></div></div>`;return}
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
const EST_K=['chM','cTab','cQuem','cSis','tela','fRem','fDepC','fCat','fResp','fBusca','rPer','rCat','rDep','rQuem','fDep','fLog','fFer','busca','mesDest','cal','iPer','fRemT','fbP'];
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
const SEM_RASC=new Set(['_det','_copia','_busca','_sair','_rest','_ler','_assuntos','_resumo']);
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
function nav(){const pm=pode('whats')?pendMsg():0,na=alertas().filter(a=>a.c==='bad').length,nc=D.chamados.filter(c=>c.st==='Aberto'&&!c.resp).length,nt=D.emails.filter(e=>e.st==='triagem').length,np=D.pedidos.filter(p=>!acessoDe(p.id)).length;
 const nr=atrasosCron(vejoRot).length;const badge=(k)=>k==='rotinas'&&nr?`<span class="count" style="background:var(--bad-bg);color:var(--bad)" title="Rotinas em atraso">${nr}</span>`:k==='whats'&&pm?`<span class="count">${pm}</span>`:k==='chamados'&&(nc||(pode('email')&&nt))?`<span class="count" style="background:var(--accent-soft);color:var(--accent-ink)" title="${nc} sem responsável${pode('email')&&nt?` · ${nt} e-mails para revisar`:''}">${nc+(pode('email')?nt:0)}</span>`:k==='usuarios'&&np?`<span class="count">${np}</span>`:k==='alertas'&&na?`<span class="count" style="background:var(--bad-bg);color:var(--bad)">${na}</span>`:'';
 document.getElementById('nav').innerHTML=(solic()||S.perfil==='pendente'||S.modo==='carregando'?'':`<button class="nav reg ${S.tela==='registrar'?'on':''}" onclick="ir('registrar')">${ic('reg')}<span>Registrar</span></button>`)+
 (S.modo==='carregando'?'':vis().map(([k,n])=>`<button class="nav ${(MENU_PAI[S.tela]||S.tela)===k?'on':''}" onclick="ir('${k}')">${ic(k)}<span>${n}</span>${badge(k)}</button>`).join(''))}
function perfis(){const q=document.getElementById('quem'),box=document.getElementById('simbox');
 q.innerHTML=S.modo==='carregando'?'':real()?`<div class="me">${avU(ME.uid)}<div style="min-width:0"><b>${esc(ME.nome||'Você')}</b><span>${esc(rotuloBase())}</span></div></div>`:`<p class="meta" style="margin:0">Modo demonstração, sem login</p>`;
 box.hidden=S.modo==='carregando'||!podeSimular();if(box.hidden)return;
 const sel=document.getElementById('perfil');
 sel.innerHTML=(real()?'<option value="">Meu perfil</option>':'')+'<optgroup label="Financeiro e contábil"><option value="dir">Diretor</option>'+D.equipe.map(p=>`<option value="${esc(p.id)}">${esc(p.n)} · ${esc(p.c)}</option>`).join('')+'</optgroup>'+(D.departamentos.length?'<optgroup label="Outros departamentos">'+D.departamentos.map(d=>`<option value="sol:${esc(d.id)}">Solicitante · ${esc(d.n)}</option>`).join('')+'</optgroup>':'');
 if(S.sim&&S.sim!=='dir'&&!(S.sim.startsWith('sol:')?depDe(S.sim.slice(4)):pessoa(S.sim)))S.sim='';
 sel.value=S.sim||(real()?'':'dir')}
function render(o){
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
 m.innerHTML=`<div id="topbar">${S.perfil==='pendente'?'':bell()}</div>`+avisos+V[S.tela]();
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
 COLS.forEach(c=>db.collection(c).onSnapshot(s=>{D[c]=s.docs.map(d=>({id:d.id,...d.data()}));if(c==='acessos')S.acOk=true;later()},()=>{if(c==='acessos'){S.acOk=true;later()}}));
 db.doc('config/estrutura').onSnapshot(s=>{CFG=s.exists?s.data():{};later()},()=>{});
 db.doc('sync/estado').onSnapshot(s=>{SYNC=s.exists?s.data():{};later()},()=>{});
 db.collection('backups').onSnapshot(s=>{D.backups=s.docs.map(d=>({id:d.id,...d.data()}));S.bkCarregado=true;later()},()=>{S.bkCarregado=true});
 if(ME.uid)db.doc('data/users/'+ME.uid+'/prefs').onSnapshot(s=>{S.prefs=s.exists?s.data():{};later()},()=>{});
 let first=true;
 db.collection('logs').orderBy('em','desc').limit(300).onSnapshot(s=>{
  D.logs=s.docs.map(d=>({id:d.id,...d.data()}));
  if(!first&&!s.metadata.hasPendingWrites){const n=s.docChanges().filter(c=>c.type==='added').map(c=>c.doc.data()).find(l=>!(ME.uid&&l.uid===ME.uid)&&notifs().some(x=>x.em===l.em));if(n)toast(`${quemLog(n)}: ${n.acao}`)}
  first=false;later()},()=>{});
 iniciarAutoSync();
 setTimeout(backupDiario,8000);setInterval(backupDiario,30*6e4);
 setTimeout(checarAvisos,12000);setInterval(checarAvisos,6e4);
})();
