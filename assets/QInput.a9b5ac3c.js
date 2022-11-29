import{u as p,a as ee,b as te,c as ae,f as W,d as ne}from"./use-key-composition.a9714931.js";import{r as Q,w as B,C as q,ac as le,c as A,o as re,B as ue,h as L,g as ie,R as X}from"./index.b35b6c87.js";import{u as oe,b as se}from"./use-form.d75ed6a7.js";import{c as ce}from"./QSpinner.cedf2831.js";import{b as fe}from"./focus-manager.32f8d49a.js";const Y={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},_={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},J=Object.keys(_);J.forEach(e=>{_[e].regex=new RegExp(_[e].pattern)});const de=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+J.join("")+"])|(.)","g"),G=/[.*+?^${}()|[\]\\]/g,m=String.fromCharCode(1),ge={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function me(e,T,N,b){let f,g,O,S;const F=Q(null),y=Q(v());function R(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}B(()=>e.type+e.autogrow,w),B(()=>e.mask,t=>{if(t!==void 0)P(y.value,!0);else{const n=j(y.value);w(),e.modelValue!==n&&T("update:modelValue",n)}}),B(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&P(y.value,!0)}),B(()=>e.unmaskedValue,()=>{F.value===!0&&P(y.value)});function v(){if(w(),F.value===!0){const t=z(j(e.modelValue));return e.fillMask!==!1?I(t):t}return e.modelValue}function D(t){if(t<f.length)return f.slice(-t);let n="",l=f;const r=l.indexOf(m);if(r>-1){for(let u=t-l.length;u>0;u--)n+=m;l=l.slice(0,r)+n+l.slice(r)}return l}function w(){if(F.value=e.mask!==void 0&&e.mask.length>0&&R(),F.value===!1){S=void 0,f="",g="";return}const t=Y[e.mask]===void 0?e.mask:Y[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",l=n.replace(G,"\\$&"),r=[],u=[],i=[];let d=e.reverseFillMask===!0,o="",c="";t.replace(de,(M,V,a,h,E)=>{if(h!==void 0){const k=_[h];i.push(k),c=k.negate,d===!0&&(u.push("(?:"+c+"+)?("+k.pattern+"+)?(?:"+c+"+)?("+k.pattern+"+)?"),d=!1),u.push("(?:"+c+"+)?("+k.pattern+")?")}else if(a!==void 0)o="\\"+(a==="\\"?"":a),i.push(a),r.push("([^"+o+"]+)?"+o+"?");else{const k=V!==void 0?V:E;o=k==="\\"?"\\\\\\\\":k.replace(G,"\\\\$&"),i.push(k),r.push("([^"+o+"]+)?"+o+"?")}});const C=new RegExp("^"+r.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),Z=u.length-1,s=u.map((M,V)=>V===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+M):V===Z?new RegExp("^"+M+"("+(c===""?".":c)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+M));O=i,S=M=>{const V=C.exec(M);V!==null&&(M=V.slice(1).join(""));const a=[],h=s.length;for(let E=0,k=M;E<h;E++){const H=s[E].exec(k);if(H===null)break;k=k.slice(H.shift().length),a.push(...H)}return a.length>0?a.join(""):M},f=i.map(M=>typeof M=="string"?M:m).join(""),g=f.split(m).join(n)}function P(t,n,l){const r=b.value,u=r.selectionEnd,i=r.value.length-u,d=j(t);n===!0&&w();const o=z(d),c=e.fillMask!==!1?I(o):o,C=y.value!==c;r.value!==c&&(r.value=c),C===!0&&(y.value=c),document.activeElement===r&&q(()=>{if(c===g){const s=e.reverseFillMask===!0?g.length:0;r.setSelectionRange(s,s,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const s=u-1;x.right(r,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const s=e.reverseFillMask===!0?u===0?c.length>o.length?1:0:Math.max(0,c.length-(c===g?0:Math.min(o.length,i)+1))+1:u;r.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(C===!0){const s=Math.max(0,c.length-(c===g?0:Math.min(o.length,i+1)));s===1&&u===1?r.setSelectionRange(s,s,"forward"):x.rightReverse(r,s,s)}else{const s=c.length-i;r.setSelectionRange(s,s,"backward")}else if(C===!0){const s=Math.max(0,f.indexOf(m),Math.min(o.length,u)-1);x.right(r,s,s)}else{const s=u-1;x.right(r,s,s)}});const Z=e.unmaskedValue===!0?j(c):c;String(e.modelValue)!==Z&&N(Z,!0)}function $(t,n,l){const r=z(j(t.value));n=Math.max(0,f.indexOf(m),Math.min(r.length,n)),t.setSelectionRange(n,l,"forward")}const x={left(t,n,l,r){const u=f.slice(n-1).indexOf(m)===-1;let i=Math.max(0,n-1);for(;i>=0;i--)if(f[i]===m){n=i,u===!0&&n++;break}if(i<0&&f[n]!==void 0&&f[n]!==m)return x.right(t,0,0);n>=0&&t.setSelectionRange(n,r===!0?l:n,"backward")},right(t,n,l,r){const u=t.value.length;let i=Math.min(u,l+1);for(;i<=u;i++)if(f[i]===m){l=i;break}else f[i-1]===m&&(l=i);if(i>u&&f[l-1]!==void 0&&f[l-1]!==m)return x.left(t,u,u);t.setSelectionRange(r?n:l,l,"forward")},leftReverse(t,n,l,r){const u=D(t.value.length);let i=Math.max(0,n-1);for(;i>=0;i--)if(u[i-1]===m){n=i;break}else if(u[i]===m&&(n=i,i===0))break;if(i<0&&u[n]!==void 0&&u[n]!==m)return x.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,r===!0?l:n,"backward")},rightReverse(t,n,l,r){const u=t.value.length,i=D(u),d=i.slice(0,l+1).indexOf(m)===-1;let o=Math.min(u,l+1);for(;o<=u;o++)if(i[o-1]===m){l=o,l>0&&d===!0&&l--;break}if(o>u&&i[l-1]!==void 0&&i[l-1]!==m)return x.leftReverse(t,u,u);t.setSelectionRange(r===!0?n:l,l,"forward")}};function U(t){if(le(t)===!0)return;const n=b.value,l=n.selectionStart,r=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const u=x[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),u(n,l,r,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&l===r?x.left(n,l,r,!0):t.keyCode===46&&e.reverseFillMask===!0&&l===r&&x.rightReverse(n,l,r,!0)}function z(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return K(t);const n=O;let l=0,r="";for(let u=0;u<n.length;u++){const i=t[l],d=n[u];if(typeof d=="string")r+=d,i===d&&l++;else if(i!==void 0&&d.regex.test(i))r+=d.transform!==void 0?d.transform(i):i,l++;else return r}return r}function K(t){const n=O,l=f.indexOf(m);let r=t.length-1,u="";for(let i=n.length-1;i>=0&&r>-1;i--){const d=n[i];let o=t[r];if(typeof d=="string")u=d+u,o===d&&r--;else if(o!==void 0&&d.regex.test(o))do u=(d.transform!==void 0?d.transform(o):o)+u,r--,o=t[r];while(l===i&&o!==void 0&&d.regex.test(o));else return u}return u}function j(t){return typeof t!="string"||S===void 0?typeof t=="number"?S(""+t):t:S(t)}function I(t){return g.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?g.slice(0,-t.length)+t:t+g.slice(t.length)}return{innerValue:y,hasMask:F,moveCursorForPaste:$,updateMaskValue:P,onMaskedKeydown:U}}function ve(e,T){function N(){const b=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(b)===b&&("length"in b?Array.from(b):[b]).forEach(g=>{f.items.add(g)}),{files:f.files}}catch{return{files:void 0}}}return T===!0?A(()=>{if(e.type==="file")return N()}):A(N)}var ye=ce({name:"QInput",inheritAttrs:!1,props:{...p,...ge,...oe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ee,"paste","change"],setup(e,{emit:T,attrs:N}){const{proxy:b}=ie(),{$q:f}=b,g={};let O=NaN,S,F,y,R;const v=Q(null),D=se(e),{innerValue:w,hasMask:P,moveCursorForPaste:$,updateMaskValue:x,onMaskedKeydown:U}=me(e,T,c,v),z=ve(e,!0),K=A(()=>W(w.value)),j=ne(o),I=te(),t=A(()=>e.type==="textarea"||e.autogrow===!0),n=A(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),l=A(()=>{const a={...I.splitAttrs.listeners.value,onInput:o,onPaste:d,onChange:Z,onBlur:s,onFocus:X};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=j,P.value===!0&&(a.onKeydown=U),e.autogrow===!0&&(a.onAnimationend=C),a}),r=A(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:D.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});B(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),B(()=>e.modelValue,a=>{if(P.value===!0){if(F===!0&&(F=!1,String(a)===O))return;x(a)}else w.value!==a&&(w.value=a,e.type==="number"&&g.hasOwnProperty("value")===!0&&(S===!0?S=!1:delete g.value));e.autogrow===!0&&q(C)}),B(()=>e.autogrow,a=>{a===!0?q(C):v.value!==null&&N.rows>0&&(v.value.style.height="auto")}),B(()=>e.dense,()=>{e.autogrow===!0&&q(C)});function u(){fe(()=>{const a=document.activeElement;v.value!==null&&v.value!==a&&(a===null||a.id!==I.targetUid.value)&&v.value.focus({preventScroll:!0})})}function i(){v.value!==null&&v.value.select()}function d(a){if(P.value===!0&&e.reverseFillMask!==!0){const h=a.target;$(h,h.selectionStart,h.selectionEnd)}T("paste",a)}function o(a){if(!a||!a.target)return;if(e.type==="file"){T("update:modelValue",a.target.files);return}const h=a.target.value;if(a.target.qComposing===!0){g.value=h;return}if(P.value===!0)x(h,!1,a.inputType);else if(c(h),n.value===!0&&a.target===document.activeElement){const{selectionStart:E,selectionEnd:k}=a.target;E!==void 0&&k!==void 0&&q(()=>{a.target===document.activeElement&&h.indexOf(a.target.value)===0&&a.target.setSelectionRange(E,k)})}e.autogrow===!0&&C()}function c(a,h){R=()=>{e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==a&&O!==a&&(O=a,h===!0&&(F=!0),T("update:modelValue",a),q(()=>{O===a&&(O=NaN)})),R=void 0},e.type==="number"&&(S=!0,g.value=a),e.debounce!==void 0?(clearTimeout(y),g.value=a,y=setTimeout(R,e.debounce)):R()}function C(){requestAnimationFrame(()=>{const a=v.value;if(a!==null){const h=a.parentNode.style,{overflow:E}=a.style;f.platform.is.firefox!==!0&&(a.style.overflow="hidden"),a.style.height="1px",h.marginBottom=a.scrollHeight-1+"px",a.style.height=a.scrollHeight+"px",a.style.overflow=E,h.marginBottom=""}})}function Z(a){j(a),clearTimeout(y),R!==void 0&&R(),T("change",a.target.value)}function s(a){a!==void 0&&X(a),clearTimeout(y),R!==void 0&&R(),S=!1,F=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=w.value!==void 0?w.value:"")})}function M(){return g.hasOwnProperty("value")===!0?g.value:w.value!==void 0?w.value:""}re(()=>{s()}),ue(()=>{e.autogrow===!0&&C()}),Object.assign(I,{innerValue:w,fieldClass:A(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:A(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:c,hasValue:K,floatingLabel:A(()=>K.value===!0||W(e.displayValue)),getControl:()=>L(t.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...l.value,...e.type!=="file"?{value:M()}:z.value}),getShadowControl:()=>L("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[L("span",{class:"invisible"},M()),L("span",e.shadowText)])});const V=ae(I);return Object.assign(b,{focus:u,select:i,getNativeElement:()=>v.value}),V}});export{ye as Q};