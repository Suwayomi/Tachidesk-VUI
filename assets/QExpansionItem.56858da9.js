import{o as j,h as a,T as J,ak as W,r as B,c as f,w as k,B as X,al as Z,g as ee,L as te}from"./index.14176138.js";import{Q as ne}from"./QItem.9ead9041.js";import{a as E,Q as q}from"./QItemLabel.1cd727e1.js";import{Q as O}from"./QIcon.42acba0c.js";import{c as N,h as ae}from"./QSpinner.46e83f64.js";import{Q as A}from"./QSeparator.8169907b.js";import{u as ie,a as oe}from"./use-dark.f381fecd.js";import{u as P}from"./QBtn.0c96c562.js";import{u as le,a as re,c as ue}from"./use-timeout.ca74d71c.js";import{u as H}from"./uid.42677368.js";var se=N({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:I,emit:T}){let r=!1,m,i,v,x,u,S;function h(){m&&m(),m=null,r=!1,clearTimeout(v),clearTimeout(x),i!==void 0&&i.removeEventListener("transitionend",u),u=null}function o(n,l,d){n.style.overflowY="hidden",l!==void 0&&(n.style.height=`${l}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,m=d}function s(n,l){n.style.overflowY=null,n.style.height=null,n.style.transition=null,h(),l!==S&&T(l)}function w(n,l){let d=0;i=n,r===!0?(h(),d=n.offsetHeight===n.scrollHeight?0:void 0):S="hide",o(n,d,l),v=setTimeout(()=>{n.style.height=`${n.scrollHeight}px`,u=c=>{(Object(c)!==c||c.target===n)&&s(n,"show")},n.addEventListener("transitionend",u),x=setTimeout(u,e.duration*1.1)},100)}function y(n,l){let d;i=n,r===!0?h():(S="show",d=n.scrollHeight),o(n,d,l),v=setTimeout(()=>{n.style.height=0,u=c=>{(Object(c)!==c||c.target===n)&&s(n,"hide")},n.addEventListener("transitionend",u),x=setTimeout(u,e.duration*1.1)},100)}return j(()=>{r===!0&&h()}),()=>a(J,{css:!1,appear:e.appear,onEnter:w,onLeave:y},I.default)}});const b=W({}),de=Object.keys(P);var Te=N({name:"QExpansionItem",props:{...P,...le,...ie,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...re,"click","afterShow","afterHide"],setup(e,{slots:I,emit:T}){const{proxy:{$q:r}}=ee(),m=oe(e,r),i=B(e.modelValue!==null?e.modelValue:e.defaultOpened),v=B(null),x=H(),{show:u,hide:S,toggle:h}=ue({showing:i});let o,s;const w=f(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),y=f(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=f(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),l=f(()=>{const t={};return de.forEach(g=>{t[g]=e[g]}),t}),d=f(()=>n.value===!0||e.expandIconToggle!==!0),c=f(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),$=f(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),R=f(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:h,show:u,hide:S})),_=f(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":x,"aria-label":t}});k(()=>e.group,t=>{s!==void 0&&s(),t!==void 0&&Q()});function D(t){n.value!==!0&&h(t),T("click",t)}function G(t){t.keyCode===13&&C(t,!0)}function C(t,g){g!==!0&&v.value!==null&&v.value.focus(),h(t),te(t)}function K(){T("afterShow")}function M(){T("afterHide")}function Q(){o===void 0&&(o=H()),i.value===!0&&(b[e.group]=o);const t=k(i,L=>{L===!0?b[e.group]=o:b[e.group]===o&&delete b[e.group]}),g=k(()=>b[e.group],(L,z)=>{z===o&&L!==void 0&&L!==o&&S()});s=()=>{t(),g(),b[e.group]===o&&delete b[e.group],s=void 0}}function U(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},g=[a(O,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:c.value})];return $.value===!0&&(Object.assign(t,{tabindex:0,..._.value,onClick:C,onKeyup:G}),g.unshift(a("div",{ref:v,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(q,t,()=>g)}function p(){let t;return I.header!==void 0?t=[].concat(I.header(R.value)):(t=[a(q,()=>[a(E,{lines:e.labelLines},()=>e.label||""),e.caption?a(E,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(O,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](U()),t}function F(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return d.value===!0&&(t.clickable=!0,t.onClick=D,Object.assign(t,n.value===!0?l.value:_.value)),a(ne,t,p)}function V(){return X(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:y.value,id:x},ae(I.default)),[[Z,i.value]])}function Y(){const t=[F(),a(se,{duration:e.duration,onShow:K,onHide:M},V)];return e.expandSeparator===!0&&t.push(a(A,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),a(A,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&Q(),j(()=>{s!==void 0&&s()}),()=>a("div",{class:w.value},[a("div",{class:"q-expansion-item__container relative-position"},Y())])}});export{Te as Q};
