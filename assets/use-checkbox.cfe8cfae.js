import{a as z,u as F}from"./use-dark.f381fecd.js";import{b as T,a as D,h as L,u as R}from"./QSpinner.46e83f64.js";import{u as E,o as K}from"./option-sizes.297736c7.js";import{u as N,a as M}from"./use-form.2c42e393.js";import{r as G,c as l,h as d,g as H,L as h,ae as u}from"./index.14176138.js";const Y={...F,...R,...N,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Z=["update:modelValue"];function ee(a,k){const{props:e,slots:f,emit:V,proxy:v}=H(),{$q:x}=v,C=z(e,x),m=G(null),{refocusTargetEl:g,refocusTarget:I}=E(e,m),S=T(e,K),n=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),i=l(()=>{const t=u(e.val);return n.value===!0?e.modelValue.findIndex(o=>u(o)===t):-1}),r=l(()=>n.value===!0?i.value>-1:u(e.modelValue)===u(e.trueValue)),s=l(()=>n.value===!0?i.value===-1:u(e.modelValue)===u(e.falseValue)),b=l(()=>r.value===!1&&s.value===!1),q=l(()=>e.disable===!0?-1:e.tabindex||0),$=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const t=r.value===!0?"truthy":s.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?r.value===!0:s.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),_=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":r.value===!0?"checked":void 0,name:e.name,value:n.value===!0?e.val:e.trueValue}),t}),O=M(_),w=l(()=>{const t={tabindex:q.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":b.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function c(t){t!==void 0&&(h(t),I(t)),e.disable!==!0&&V("update:modelValue",A(),t)}function A(){if(n.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(i.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(s.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function B(t){(t.keyCode===13||t.keyCode===32)&&h(t)}function P(t){(t.keyCode===13||t.keyCode===32)&&c(t)}const j=k(r,b);return Object.assign(v,{toggle:c}),()=>{const t=j();e.disable!==!0&&O(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[d("div",{class:y.value,style:S.value,"aria-hidden":"true"},t)];g.value!==null&&o.push(g.value);const p=e.label!==void 0?D(f.default,[e.label]):L(f.default);return p!==void 0&&o.push(d("div",{class:`q-${a}__label q-anchor--skip`},p)),d("div",{ref:m,class:$.value,...w.value,onClick:c,onKeydown:B,onKeyup:P},o)}}export{Z as a,ee as b,Y as u};
