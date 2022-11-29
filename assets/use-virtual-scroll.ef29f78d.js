import{Z as ve,r as q,c as j,w as ae,a8 as me,ao as we,L as pe,K as he,o as ze,C as ge,h as A,g as ye}from"./index.b35b6c87.js";import{r as Q}from"./rtl.b51694b1.js";const M=1e3,Me=["start","center","end","start-force","center-force","end-force"],ne=Array.prototype.filter,Ee=window.getComputedStyle(document.body).overflowAnchor===void 0?ve:function(t,s){t!==null&&(cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;const S=t.children||[];ne.call(S,g=>g.dataset&&g.dataset.qVsAnchor!==void 0).forEach(g=>{delete g.dataset.qVsAnchor});const u=S[s];u&&u.dataset&&(u.dataset.qVsAnchor="")}))};function T(t,s){return t+s}function J(t,s,S,u,g,n,V,E){const h=t===window?document.scrollingElement||document.documentElement:t,y=g===!0?"offsetWidth":"offsetHeight",o={scrollStart:0,scrollViewSize:-V-E,scrollMaxSize:0,offsetStart:-V,offsetEnd:-E};if(g===!0?(t===window?(o.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o.scrollViewSize+=document.documentElement.clientWidth):(o.scrollStart=h.scrollLeft,o.scrollViewSize+=h.clientWidth),o.scrollMaxSize=h.scrollWidth,n===!0&&(o.scrollStart=(Q===!0?o.scrollMaxSize-o.scrollViewSize:0)-o.scrollStart)):(t===window?(o.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,o.scrollViewSize+=document.documentElement.clientHeight):(o.scrollStart=h.scrollTop,o.scrollViewSize+=h.clientHeight),o.scrollMaxSize=h.scrollHeight),S!==null)for(let v=S.previousElementSibling;v!==null;v=v.previousElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetStart+=v[y]);if(u!==null)for(let v=u.nextElementSibling;v!==null;v=v.nextElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetEnd+=v[y]);if(s!==t){const v=h.getBoundingClientRect(),w=s.getBoundingClientRect();g===!0?(o.offsetStart+=w.left-v.left,o.offsetEnd-=w.width):(o.offsetStart+=w.top-v.top,o.offsetEnd-=w.height),t!==window&&(o.offsetStart+=o.scrollStart),o.offsetEnd+=o.scrollMaxSize-o.offsetStart}return o}function ce(t,s,S,u){s==="end"&&(s=(t===window?document.body:t)[S===!0?"scrollWidth":"scrollHeight"]),t===window?S===!0?(u===!0&&(s=(Q===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):S===!0?(u===!0&&(s=(Q===!0?t.scrollWidth-t.offsetWidth:0)-s),t.scrollLeft=s):t.scrollTop=s}function W(t,s,S,u){if(S>=u)return 0;const g=s.length,n=Math.floor(S/M),V=Math.floor((u-1)/M)+1;let E=t.slice(n,V).reduce(T,0);return S%M!==0&&(E-=s.slice(n*M,S).reduce(T,0)),u%M!==0&&u!==g&&(E-=s.slice(u,V*M).reduce(T,0)),E}const be={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},xe={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...be};function Re({virtualScrollLength:t,getVirtualScrollTarget:s,getVirtualScrollEl:S,virtualScrollItemSizeComputed:u}){const g=ye(),{props:n,emit:V,proxy:E}=g,{$q:h}=E;let y,o,v,w=[],f;const x=q(0),k=q(0),F=q({}),O=q(null),_=q(null),H=q(null),m=q({from:0,to:0}),D=j(()=>n.tableColspan!==void 0?n.tableColspan:100);u===void 0&&(u=j(()=>n.virtualScrollItemSize));const I=j(()=>u.value+";"+n.virtualScrollHorizontal),se=j(()=>I.value+";"+n.virtualScrollSliceRatioBefore+";"+n.virtualScrollSliceRatioAfter);ae(se,()=>{B()}),ae(I,X);function X(){K(o,!0)}function ee(e){K(e===void 0?o:e)}function C(e,l){const r=s();if(r==null||r.nodeType===8)return;const d=J(r,S(),O.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd);v!==d.scrollViewSize&&B(d.scrollViewSize),N(r,d,Math.min(t.value-1,Math.max(0,parseInt(e,10)||0)),0,Me.indexOf(l)>-1?l:o>-1&&e>o?"end":"start")}function ue(){const e=s();if(e==null||e.nodeType===8)return;const l=J(e,S(),O.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd),r=t.value-1,d=l.scrollMaxSize-l.offsetStart-l.offsetEnd-k.value;if(y===l.scrollStart)return;if(l.scrollMaxSize<=0){N(e,l,0,0);return}v!==l.scrollViewSize&&B(l.scrollViewSize),Y(m.value.from);const p=Math.floor(l.scrollMaxSize-Math.max(l.scrollViewSize,l.offsetEnd)-Math.min(f[r],l.scrollViewSize/2));if(p>0&&Math.ceil(l.scrollStart)>=p){N(e,l,r,l.scrollMaxSize-l.offsetEnd-w.reduce(T,0));return}let c=0,a=l.scrollStart-l.offsetStart,z=a;if(a<=d&&a+l.scrollViewSize>=x.value)a-=x.value,c=m.value.from,z=a;else for(let i=0;a>=w[i]&&c<r;i++)a-=w[i],c+=M;for(;a>0&&c<r;)a-=f[c],a>-l.scrollViewSize?(c++,z=a):z=f[c]+a;N(e,l,c,z)}function N(e,l,r,d,p){const c=typeof p=="string"&&p.indexOf("-force")>-1,a=c===!0?p.replace("-force",""):p,z=a!==void 0?a:"start";let i=Math.max(0,r-F.value[z]),b=i+F.value.total;b>t.value&&(b=t.value,i=Math.max(0,b-F.value.total)),y=l.scrollStart;const P=i!==m.value.from||b!==m.value.to;if(P===!1&&a===void 0){te(r);return}const{activeElement:re}=document,R=H.value;P===!0&&R!==null&&R!==re&&R.contains(re)===!0&&(R.addEventListener("focusout",le),setTimeout(()=>{R!==null&&R.removeEventListener("focusout",le)})),Ee(R,r-i);const de=a!==void 0?f.slice(i,r).reduce(T,0):0;if(P===!0){const L=b>=m.value.from&&i<=m.value.to?m.value.to:b;m.value={from:i,to:L},x.value=W(w,f,0,i),k.value=W(w,f,b,t.value),requestAnimationFrame(()=>{m.value.to!==b&&y===l.scrollStart&&(m.value={from:m.value.from,to:b},k.value=W(w,f,b,t.value))})}requestAnimationFrame(()=>{if(y!==l.scrollStart)return;P===!0&&Y(i);const L=f.slice(i,r).reduce(T,0),$=L+l.offsetStart+x.value,ie=$+f[r];let Z=$+d;if(a!==void 0){const Se=L-de,G=l.scrollStart+Se;Z=c!==!0&&G<$&&ie<G+l.scrollViewSize?G:a==="end"?ie-l.scrollViewSize:$-(a==="start"?0:Math.round((l.scrollViewSize-f[r])/2))}y=Z,ce(e,Z,n.virtualScrollHorizontal,h.lang.rtl),te(r)})}function Y(e){const l=H.value;if(l){const r=ne.call(l.children,i=>i.classList&&i.classList.contains("q-virtual-scroll--skip")===!1),d=r.length,p=n.virtualScrollHorizontal===!0?i=>i.getBoundingClientRect().width:i=>i.offsetHeight;let c=e,a,z;for(let i=0;i<d;){for(a=p(r[i]),i++;i<d&&r[i].classList.contains("q-virtual-scroll--with-prev")===!0;)a+=p(r[i]),i++;z=a-f[c],z!==0&&(f[c]+=z,w[Math.floor(c/M)]+=z),c++}}}function le(){H.value!==null&&H.value!==void 0&&H.value.focus()}function K(e,l){const r=1*u.value;(l===!0||Array.isArray(f)===!1)&&(f=[]);const d=f.length;f.length=t.value;for(let c=t.value-1;c>=d;c--)f[c]=r;const p=Math.floor((t.value-1)/M);w=[];for(let c=0;c<=p;c++){let a=0;const z=Math.min((c+1)*M,t.value);for(let i=c*M;i<z;i++)a+=f[i];w.push(a)}o=-1,y=void 0,x.value=W(w,f,0,m.value.from),k.value=W(w,f,m.value.to,t.value),e>=0?(Y(m.value.from),ge(()=>{C(e)})):U()}function B(e){if(e===void 0&&typeof window!="undefined"){const a=s();a!=null&&a.nodeType!==8&&(e=J(a,S(),O.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd).scrollViewSize)}v=e;const l=parseFloat(n.virtualScrollSliceRatioBefore)||0,r=parseFloat(n.virtualScrollSliceRatioAfter)||0,d=1+l+r,p=e===void 0||e<=0?1:Math.ceil(e/u.value),c=Math.max(1,p,Math.ceil((n.virtualScrollSliceSize>0?n.virtualScrollSliceSize:10)/d));F.value={total:Math.ceil(c*d),start:Math.ceil(c*l),center:Math.ceil(c*(.5+l)),end:Math.ceil(c*(1+l)),view:p}}function fe(e,l){const r=n.virtualScrollHorizontal===!0?"width":"height",d={["--q-virtual-scroll-item-"+r]:u.value+"px"};return[e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"before",ref:O},[A("tr",[A("td",{style:{[r]:`${x.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"before",ref:O,style:{[r]:`${x.value}px`,...d}}),A(e,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},l.flat()),e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_},[A("tr",[A("td",{style:{[r]:`${k.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_,style:{[r]:`${k.value}px`,...d}})]}function te(e){o!==e&&(n.onVirtualScroll!==void 0&&V("virtual-scroll",{index:e,from:m.value.from,to:m.value.to-1,direction:e<o?"decrease":"increase",ref:E}),o=e)}B();const U=me(ue,h.platform.is.ios===!0?120:35);we(()=>{B()});let oe=!1;return pe(()=>{oe=!0}),he(()=>{if(oe!==!0)return;const e=s();y!==void 0&&e!==void 0&&e!==null&&e.nodeType!==8?ce(e,y,n.virtualScrollHorizontal,h.lang.rtl):C(o)}),ze(()=>{U.cancel()}),Object.assign(E,{scrollTo:C,reset:X,refresh:ee}),{virtualScrollSliceRange:m,virtualScrollSliceSizeComputed:F,setVirtualScrollSize:B,onVirtualScrollEvt:U,localResetVirtualScroll:K,padVirtualScroll:fe,scrollTo:C,reset:X,refresh:ee}}export{Re as a,xe as u};