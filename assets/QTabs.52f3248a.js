import{Q as N}from"./QIcon.ac005315.js";import{R as xe}from"./Ripple.5f8954d8.js";import{a as Me,c as $e,h as Ee}from"./QSpinner.cedf2831.js";import{i as De,e as Y,r as T,c as f,o as de,B as Fe,ab as be,D as Qe,h,N as ce,O as We,ac as je,g as he,ad as Ke,Z as ve,w as D,E as Oe,L as Ve,K as Ne}from"./index.b35b6c87.js";import{u as ze}from"./uid.42677368.js";import{Q as He}from"./QResizeObserver.90150d42.js";import{u as p}from"./QDialog.476c5919.js";import{b as fe}from"./use-timeout.4812ac2b.js";import{r as Ue}from"./rtl.b51694b1.js";let Ge=0;const lt=["click","keydown"],it={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ge++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ut(t,x,R,v){const r=De(be,Y);if(r===Y)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Y;const{proxy:z}=he(),M=T(null),F=T(null),Q=T(null),H=f(()=>t.disable===!0||t.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},t.ripple===!0?{}:t.ripple)),I=f(()=>r.currentModel.value===t.name),U=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(I.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(t.icon&&t.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(t.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(t.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(v!==void 0?v.linkClass.value:"")),L=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(t.contentClass!==void 0?` ${t.contentClass}`:"")),m=f(()=>t.disable===!0||r.hasFocus.value===!0||I.value===!1&&r.hasActiveTab.value===!0?-1:t.tabindex||0);function C(l,c){if(c!==!0&&M.value!==null&&M.value.focus(),t.disable===!0){v!==void 0&&v.hasRouterLink.value===!0&&ce(l);return}if(v===void 0){r.updateModel({name:t.name}),R("click",l);return}if(v.hasRouterLink.value===!0){const w=(g={})=>{let k;const j=g.to===void 0||Ke(g.to,t.to)===!0?r.avoidRouteWatcher=ze():null;return v.navigateToRouterLink(l,{...g,returnRouterError:!0}).catch(b=>{k=b}).then(b=>{if(j===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,k===void 0&&(b===void 0||b.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:t.name})),g.returnRouterError===!0)return k!==void 0?Promise.reject(k):b})};R("click",l,w),l.defaultPrevented!==!0&&w();return}R("click",l)}function _(l){We(l,[13,32])?C(l,!0):je(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,z.$el)===!0&&ce(l),R("keydown",l)}function $(){const l=r.tabProps.value.narrowIndicator,c=[],w=h("div",{ref:Q,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});t.icon!==void 0&&c.push(h(N,{class:"q-tab__icon",name:t.icon})),t.label!==void 0&&c.push(h("div",{class:"q-tab__label"},t.label)),t.alert!==!1&&c.push(t.alertIcon!==void 0?h(N,{class:"q-tab__alert-icon",color:t.alert!==!0?t.alert:void 0,name:t.alertIcon}):h("div",{class:"q-tab__alert"+(t.alert!==!0?` text-${t.alert}`:"")})),l===!0&&c.push(w);const g=[h("div",{class:"q-focus-helper",tabindex:-1,ref:M}),h("div",{class:L.value},Me(x.default,c))];return l===!1&&g.push(w),g}const A={name:f(()=>t.name),rootRef:F,tabIndicatorRef:Q,routeData:v};de(()=>{r.unregisterTab(A)}),Fe(()=>{r.registerTab(A)});function W(l,c){const w={ref:F,class:U.value,tabindex:m.value,role:"tab","aria-selected":I.value===!0?"true":"false","aria-disabled":t.disable===!0?"true":void 0,onClick:C,onKeydown:_,...c};return Qe(h(l,w,$()),[[xe,H.value]])}return{renderTab:W,$tabs:r}}function Xe(t,x,R){const v=R===!0?["left","right"]:["top","bottom"];return`absolute-${x===!0?v[0]:v[1]}${t?` text-${t}`:""}`}const Ze=["left","center","right","justify"];var st=$e({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:t=>Ze.includes(t)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(t,{slots:x,emit:R}){const{proxy:v}=he(),{$q:r}=v,{registerTick:z}=p(),{registerTick:M}=p(),{registerTick:F}=p(),{registerTimeout:Q,removeTimeout:H}=fe(),{registerTimeout:I,removeTimeout:U}=fe(),L=T(null),m=T(null),C=T(t.modelValue),_=T(!1),$=T(!0),A=T(!1),W=T(!1),l=f(()=>r.platform.is.desktop===!0||t.mobileArrows===!0),c=[],w=T(0),g=T(!1);let k,j,b,P=l.value===!0?te:ve;const me=f(()=>({activeClass:t.activeClass,activeColor:t.activeColor,activeBgColor:t.activeBgColor,indicatorClass:Xe(t.indicatorColor,t.switchIndicator,t.vertical),narrowIndicator:t.narrowIndicator,inlineLabel:t.inlineLabel,noCaps:t.noCaps})),ge=f(()=>{const e=w.value,a=C.value;for(let n=0;n<e;n++)if(c[n].name.value===a)return!0;return!1}),Te=f(()=>`q-tabs__content--align-${_.value===!0?"left":W.value===!0?"justify":t.align}`),we=f(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${t.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${l.value===!0&&t.outsideArrows===!0?"outside":"inside"}`+(t.dense===!0?" q-tabs--dense":"")+(t.shrink===!0?" col-shrink":"")+(t.stretch===!0?" self-stretch":"")),Ce=f(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Te.value+(t.contentClass!==void 0?` ${t.contentClass}`:"")+(r.platform.is.mobile===!0?" scroll":"")),K=f(()=>t.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),O=f(()=>t.vertical!==!0&&r.lang.rtl===!0),G=f(()=>Ue===!1&&O.value===!0);D(O,P),D(()=>t.modelValue,e=>{X({name:e,setCurrent:!0,skipEmit:!0})}),D(()=>t.outsideArrows,()=>{E()}),D(l,e=>{P=e===!0?te:ve,E()});function X({name:e,setCurrent:a,skipEmit:n,fromRoute:u}){C.value!==e&&(n!==!0&&t["onUpdate:modelValue"]!==void 0&&R("update:modelValue",e),(a===!0||t["onUpdate:modelValue"]===void 0)&&(ye(C.value,e),C.value=e))}function E(){z(()=>{ee({width:L.value.offsetWidth,height:L.value.offsetHeight})})}function ee(e){if(K.value===void 0||m.value===null)return;const a=e[K.value.container],n=Math.min(m.value[K.value.scroll],Array.prototype.reduce.call(m.value.children,(s,i)=>s+(i[K.value.content]||0),0)),u=a>0&&n>a;_.value=u,u===!0&&M(P),W.value=a<parseInt(t.breakpoint,10)}function ye(e,a){const n=e!=null&&e!==""?c.find(s=>s.name.value===e):null,u=a!=null&&a!==""?c.find(s=>s.name.value===a):null;if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;clearTimeout(k),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const o=s.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=t.vertical===!0?`translate3d(0,${o.top-d.top}px,0) scale3d(1,${d.height?o.height/d.height:1},1)`:`translate3d(${o.left-d.left}px,0,0) scale3d(${d.width?o.width/d.width:1},1,1)`,F(()=>{k=setTimeout(()=>{i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&_.value===!0&&B(u.rootRef.value)}function B(e){const{left:a,width:n,top:u,height:s}=m.value.getBoundingClientRect(),i=e.getBoundingClientRect();let o=t.vertical===!0?i.top-u:i.left-a;if(o<0){m.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),P();return}o+=t.vertical===!0?i.height-s:i.width-n,o>0&&(m.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),P())}function te(){const e=m.value;if(e!==null){const a=e.getBoundingClientRect(),n=t.vertical===!0?e.scrollTop:Math.abs(e.scrollLeft);O.value===!0?($.value=Math.ceil(n+a.width)<e.scrollWidth-1,A.value=n>0):($.value=n>0,A.value=t.vertical===!0?Math.ceil(n+a.height)<e.scrollHeight:Math.ceil(n+a.width)<e.scrollWidth)}}function ae(e){y(),j=setInterval(()=>{_e(e)===!0&&y()},5)}function ne(){ae(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function oe(){ae(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function y(){clearInterval(j)}function qe(e,a){const n=Array.prototype.filter.call(m.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(e===36)return B(n[0]),n[0].focus(),!0;if(e===35)return B(n[u-1]),n[u-1].focus(),!0;const s=e===(t.vertical===!0?38:37),i=e===(t.vertical===!0?40:39),o=s===!0?-1:i===!0?1:void 0;if(o!==void 0){const d=O.value===!0?-1:1,q=n.indexOf(a)+o*d;return q>=0&&q<u&&(B(n[q]),n[q].focus({preventScroll:!0})),!0}}const Re=f(()=>G.value===!0?{get:e=>Math.abs(e.scrollLeft),set:(e,a)=>{e.scrollLeft=-a}}:t.vertical===!0?{get:e=>e.scrollTop,set:(e,a)=>{e.scrollTop=a}}:{get:e=>e.scrollLeft,set:(e,a)=>{e.scrollLeft=a}});function _e(e){const a=m.value,{get:n,set:u}=Re.value;let s=!1,i=n(a);const o=e<i?-1:1;return i+=o*5,i<0?(s=!0,i=0):(o===-1&&i<=e||o===1&&i>=e)&&(s=!0,i=e),u(a,i),P(),s}function re(e,a){for(const n in e)if(e[n]!==a[n])return!1;return!0}function ke(){let e=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=c.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:u,query:s}=v.$route,i=Object.keys(s).length;for(const o of n){const d=o.routeData.exact.value===!0;if(o.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:q,query:Z,matched:Ae,href:Be}=o.routeData.resolvedLink.value,J=Object.keys(Z).length;if(d===!0){if(q!==u||J!==i||re(s,Z)===!1)continue;e=o.name.value;break}if(q!==""&&q!==u||J!==0&&re(Z,s)===!1)continue;const S={matchedLen:Ae.length,queryDiff:i-J,hrefLen:Be.length-q.length};if(S.matchedLen>a.matchedLen){e=o.name.value,a=S;continue}else if(S.matchedLen!==a.matchedLen)continue;if(S.queryDiff<a.queryDiff)e=o.name.value,a=S;else if(S.queryDiff!==a.queryDiff)continue;S.hrefLen>a.hrefLen&&(e=o.name.value,a=S)}e===null&&c.some(o=>o.routeData===void 0&&o.name.value===C.value)===!0||X({name:e,setCurrent:!0})}function Se(e){if(H(),g.value!==!0&&L.value!==null&&e.target&&typeof e.target.closest=="function"){const a=e.target.closest(".q-tab");a&&L.value.contains(a)===!0&&(g.value=!0,_.value===!0&&B(a))}}function Le(){Q(()=>{g.value=!1},30)}function V(){ie.avoidRouteWatcher===!1?I(ke):U()}function le(){if(b===void 0){const e=D(()=>v.$route.fullPath,V);b=()=>{e(),b=void 0}}}function Pe(e){c.push(e),w.value++,E(),e.routeData===void 0||v.$route===void 0?I(()=>{if(_.value===!0){const a=C.value,n=a!=null&&a!==""?c.find(u=>u.name.value===a):null;n&&B(n.rootRef.value)}}):(le(),e.routeData.hasRouterLink.value===!0&&V())}function Ie(e){c.splice(c.indexOf(e),1),w.value--,E(),b!==void 0&&e.routeData!==void 0&&(c.every(a=>a.routeData===void 0)===!0&&b(),V())}const ie={currentModel:C,tabProps:me,hasFocus:g,hasActiveTab:ge,registerTab:Pe,unregisterTab:Ie,verifyRouteModel:V,updateModel:X,onKbdNavigate:qe,avoidRouteWatcher:!1};Oe(be,ie);function ue(){clearTimeout(k),y(),b!==void 0&&b()}let se;return de(ue),Ve(()=>{se=b!==void 0,ue()}),Ne(()=>{se===!0&&le(),E()}),()=>{const e=[h(He,{onResize:ee}),h("div",{ref:m,class:Ce.value,onScroll:P},Ee(x.default))];return l.value===!0&&e.push(h(N,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:t.leftIcon||r.iconSet.tabs[t.vertical===!0?"up":"left"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:y,onMouseleavePassive:y,onTouchendPassive:y}),h(N,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:t.rightIcon||r.iconSet.tabs[t.vertical===!0?"down":"right"],onMousedownPassive:oe,onTouchstartPassive:oe,onMouseupPassive:y,onMouseleavePassive:y,onTouchendPassive:y})),h("div",{ref:L,class:we.value,role:"tablist",onFocusin:Se,onFocusout:Le},e)}}});export{st as Q,lt as a,ut as b,it as u};