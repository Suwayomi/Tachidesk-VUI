import{a2 as i}from"./index.14176138.js";function u(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function c(t,n){const r=t.style;for(const e in n)r[e]=n[e]}function s(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=i(t);if(n)return n.$el||n}function f(t,n){if(t==null||t.contains(n)===!0)return!0;for(let r=t.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(n))return!0;return!1}export{f as a,c,s as g,u as h};
