import{f as b}from"./QSpinner.cedf2831.js";import{ad as a}from"./index.b35b6c87.js";const f={threshold:0,root:null,rootMargin:"0px"};function d(o,e,r){let n,s,i;typeof r=="function"?(n=r,s=f,i=e.cfg===void 0):(n=r.handler,s=Object.assign({},f,r.cfg),i=e.cfg===void 0||a(e.cfg,s)===!1),e.handler!==n&&(e.handler=n),i===!0&&(e.cfg=s,e.observer!==void 0&&e.observer.unobserve(o),e.observer=new IntersectionObserver(([t])=>{if(typeof e.handler=="function"){if(t.rootBounds===null&&document.body.contains(o)===!0){e.observer.unobserve(o),e.observer.observe(o);return}(e.handler(t,e.observer)===!1||e.once===!0&&t.isIntersecting===!0)&&v(o)}},s),e.observer.observe(o))}function v(o){const e=o.__qvisible;e!==void 0&&(e.observer!==void 0&&e.observer.unobserve(o),delete o.__qvisible)}var l=b({name:"intersection",mounted(o,{modifiers:e,value:r}){const n={once:e.once===!0};d(o,n,r),o.__qvisible=n},updated(o,e){const r=o.__qvisible;r!==void 0&&d(o,r,e.value)},beforeUnmount:v});export{l as I};