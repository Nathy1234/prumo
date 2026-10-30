/* Planejamento: cálculos usados no Prumo e no link público.
   O status de cada mês sai das faixas de atingimento do próprio documento; o trimestre e o ano seguem
   a regra de cada indicador ("Média dos meses" ou "Soma, ou seja, acumulativo"). */
(function(g){
var ST=['Atingido','Parcial','Insatisfatório','Não atingido'];
var MS=['01','02','03','04','05','06','07','08','09','10','11','12'];
var MN=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
// número no formato do documento: "1.050.000,00", "2,49%", "R$ 803,525,51", "≥ 4"
function num(t){t=String(t==null?'':t).replace(/R\$|%|\s/g,'');if(!t)return NaN;var c=(t.match(/,/g)||[]).length;
 if(c>1){var i=t.lastIndexOf(',');t=t.slice(0,i).replace(/[.,]/g,'')+'.'+t.slice(i+1)}else t=t.replace(/\./g,'').replace(',','.');return parseFloat(t)}
// a faixa (texto do documento) aceita este valor?
function cabe(s,v,ultima){s=String(s||'').replace(/\s+/g,' ').trim();var m,x,y;
 if(!s)return !!ultima;                                     // "Não atingido" sem faixa = todo o resto
 if(/não se aplica|não aplicável/i.test(s))return false;
 if(/nenhuma realiza/i.test(s))return v===0;
 if((m=s.match(/^(?:de\s+)?(-?[\d.,]+)\s*%?\s*a\s*(-?[\d.,]+)/i))){x=num(m[1]);y=num(m[2]);return v>=x-1e-9&&v<=y+1e-9}
 if((m=s.match(/^(?:>=|≥|=>)\s*(-?[\d.,]+)/)))return v>=num(m[1])-1e-9;
 if((m=s.match(/^(?:<=|≤|=<)\s*(-?[\d.,]+)/)))return v<=num(m[1])+1e-9;
 if((m=s.match(/^(?:>|maior que)\s*(-?[\d.,]+)/i)))return v>num(m[1]);
 if((m=s.match(/^(?:<|menor que)\s*(-?[\d.,]+)/i)))return v<num(m[1]);
 if((m=s.match(/^(-?[\d.,]+)\s*(?:ou mais)/i)))return v>=num(m[1])-1e-9;
 if((m=s.match(/^R\$\s*([\d.,]+)/)))return v<=num(m[1])+1e-6; // faixas de orçamento: até o valor
 if((m=s.match(/^(\d+)\s+setores/i)))return v===+m[1];
 if((m=s.match(/^=?\s*(-?[\d.,]+)\s*%?$/)))return Math.abs(v-num(m[1]))<1e-6;
 return false}
function linhas(ind,grupo){if(grupo&&ind.faG){var gr=ind.faG.filter(function(x){return x[0]===grupo})[0];return gr?gr[1]:null}
 if(ind.faR)return ind.faR;if(ind.fa)return ind.fa.map(function(f,k){return [ST[k],'',f]});return null}
// status de um valor pelas faixas; null = o documento não tem faixa (status escolhido à mão)
function status(ind,v,grupo){if(v==null||v===''||isNaN(v))return null;var L=linhas(ind,grupo);if(!L)return null;
 for(var k=0;k<L.length;k++){var faixa=L[k][2],res=L[k][1];if(cabe(faixa,v,k===L.length-1))return L[k][0]}
 return 'Fora das faixas'}
function todos(P){var out=[];(P.secoes||[]).forEach(function(s){['clientes','processos','pessoas'].forEach(function(q){(s.quad[q]||[]).forEach(function(o){o.ind.forEach(function(i){out.push({sec:s.id,secNome:s.nome,quad:q,obj:o,ind:i,key:'r_'+s.id+'_'+i.c.replace(/\./g,'-')})})})})});
 ((P.financeiro||{}).obj||[]).forEach(function(o){o.ind.forEach(function(i){out.push({sec:'finq',secNome:'Quadrante Financeiro',quad:'financeiro',obj:o,ind:i,key:'r_finq_'+i.c.replace(/\./g,'-')})})});return out}
function grupos(ind){return ind.faG?ind.faG.map(function(x){return x[0]}):[null]}
function val(res,it,m,g){var r=res[it.key]||{},k=g?m+'|'+g:m,v=r.v&&r.v[k];return v==null||v===''?null:+v}
function man(res,it,m,g){var r=res[it.key]||{},k=g?m+'|'+g:m;return r.man&&r.man[k]||null}
function regra(ind){var t=ind.tr||'';return /soma|acumul/i.test(t)?'soma':/1 \(uma\)/i.test(t)?'ultimo':'media'}
function agg(res,it,meses,g){var vs=[];meses.forEach(function(m){var v=val(res,it,m,g);if(v!=null)vs.push(v)});if(!vs.length)return null;
 var r=regra(it.ind);if(r==='soma')return vs.reduce(function(a,b){return a+b},0);if(r==='ultimo')return vs[vs.length-1];return vs.reduce(function(a,b){return a+b},0)/vs.length}
function metaMes(ind,meses){if(!ind.mm)return null;var t=0;meses.forEach(function(m){t+=num(ind.mm.v[+m-1])});return t}
// status de um período (um mês, um trimestre ou o ano)
function stPer(res,it,meses,g){if(meses.length===1){var mm=man(res,it,meses[0],g);if(mm)return mm}
 var v=agg(res,it,meses,g);if(v==null){if(meses.length>1){var ms=meses.map(function(m){return man(res,it,m,g)}).filter(Boolean);if(ms.length)return ms[ms.length-1]}return null}
 if(it.ind.mm){var mt=metaMes(it.ind,meses);return v>=mt-1e-6?'Atingido':'Não atingido'}
 return status(it.ind,v,g)}
var TRI=[['01','02','03'],['04','05','06'],['07','08','09'],['10','11','12']];
g.PLC={ST:ST,MS:MS,MN:MN,TRI:TRI,num:num,status:status,todos:todos,grupos:grupos,val:val,man:man,agg:agg,regra:regra,metaMes:metaMes,stPer:stPer};
})(typeof window!=='undefined'?window:globalThis);
