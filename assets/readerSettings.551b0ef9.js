import{r as u,P as t}from"./index.b35b6c87.js";import{fetchJSON as R,fetcher as M}from"./fetcher.f8235356.js";const l=u("RTL"),a=u(!1),s=u(!1),o=u(!1),n=u("");function c(v){return v=="true"}function I(v){l.value=t.getItem("vue_RM")||"RTL",a.value=t.getItem("vue_WT")||!1,s.value=t.getItem("vue_Scale")||!1,o.value=t.getItem("vue_Offset")||!1,R(`/api/v1/manga/${v}`).then(e=>{l.value=e.meta.vue_RM?e.meta.vue_RM:t.getItem("vue_RM")||"RTL",a.value=e.meta.vue_WT?c(e.meta.vue_WT):t.getItem("vue_WT")||!1,s.value=e.meta.vue_Scale?c(e.meta.vue_Scale):t.getItem("vue_Scale")||!1,o.value=e.meta.vue_Offset?c(e.meta.vue_Offset):t.getItem("vue_Offset")||!1,n.value=e.title});function m(e){l.value=e,f("vue_RM",e)}function r(e){a.value=e,f("vue_WT",`${e}`)}function i(e){s.value=e,f("vue_Scale",`${e}`)}function T(e){o.value=e,f("vue_Offset",`${e}`)}function f(e,p){const _=new FormData;_.append("key",e),_.append("value",p),M(`/api/v1/manga/${v}/meta`,{method:"PATCH",body:_})}return{vue_RM:l,vue_WT:a,vue_Scale:s,vue_Offset:o,vue_title:n,setRM:m,setWT:r,setScale:i,setOffset:T}}export{I as c};