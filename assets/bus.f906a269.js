import{b as e}from"./index.b35b6c87.js";class n{constructor(){this.__stack={}}on(s,t,o){return(this.__stack[s]||(this.__stack[s]=[])).push({fn:t,ctx:o}),this}once(s,t,o){const i=()=>{this.off(s,i),t.apply(o,arguments)};return i.__callback=t,this.on(s,i,o)}emit(s){const t=this.__stack[s];if(t!==void 0){const o=[].slice.call(arguments,1);t.forEach(i=>{i.fn.apply(i.ctx,o)})}return this}off(s,t){const o=this.__stack[s],i=[];return o!==void 0&&t&&(o.forEach(r=>{r.fn!==t&&r.fn.__callback!==t&&i.push(r)}),i.length!==0?this.__stack[s]=i:delete this.__stack[s]),this}}var f=e(({app:c})=>{const s=new n;c.config.globalProperties.$bus=s,c.provide("bus",s)});export{f as default};