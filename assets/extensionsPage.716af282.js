import{Q as U}from"./QIntersection.4210ae17.js";import{Q as q}from"./QList.53b7cd17.js";import{Q as k}from"./QInnerLoading.950f1dd6.js";import{Q as E}from"./QPage.32043b58.js";import{i as d}from"./models.4021c4b7.js";import{Q as N}from"./QImg.4c286d18.js";import{Q as w,a as $}from"./QItemLabel.f084a15e.js";import{Q as z}from"./QBtn.c248b476.js";import{Q as b}from"./QItem.624de6a8.js";import{Q as F}from"./QCard.70ae0f07.js";import{R as B}from"./Ripple.5f8954d8.js";import{u as S}from"./use-quasar.9a62b4af.js";import{g as A}from"./usefull.e82e70c8.js";import{f as Q,r as f,_ as v,D as R,j as r,k as c,m as i,n,v as C,q as x,t as u,y as h,p as y,s as T,u as V,z as L,F as _}from"./index.b35b6c87.js";import{l as j,u as D}from"./Filters.63365d1c.js";import"./Intersection.7e467ca5.js";import"./QSpinner.cedf2831.js";import"./use-dark.1516cb7d.js";import"./use-transition.6c02567b.js";import"./QIcon.ac005315.js";import"./dom.4a68f118.js";import"./fetcher.f8235356.js";const P=Q({name:"extCard",props:{exten:{type:Object,required:!0}},emits:["reload"],computed:{UpUnIn(){return this.exten.hasUpdate?"Update":this.exten.installed?"Uninstall":"Install"}},methods:{capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},async HandleExt(){this.exten.hasUpdate?await this.$fetch(`/api/v1/extension/update/${this.exten.pkgName}`):this.exten.installed?await this.$fetch(`/api/v1/extension/uninstall/${this.exten.pkgName}`):await this.$fetch(`/api/v1/extension/install/${this.exten.pkgName}`),this.$emit("reload")}},mounted:function(){A(this.exten.iconUrl+"?useCache="+this.useCache).then(t=>{this.imgdata=t})},setup(){const t=S(),e=f(`${t.localStorage.getItem("useCache")}`),a=f("");return{useCache:e,imgdata:a}}}),G={class:"row content-center col-grow"},H={key:0,style:{color:"red"}},O={class:"flex items-center"};function J(t,e,a,o,m,s){return R((r(),c(F,{flat:"",class:"q-ma-sm"},{default:i(()=>[n(b,{style:{height:"100px"}},{default:i(()=>[C("div",G,[n(w,{avatar:""},{default:i(()=>[n(N,{src:t.imgdata,loading:"lazy","spinner-color":"white",style:{height:"100px","aspect-ratio":"225/225",width:"fit-content"},class:"rounded-borders items-center justify-center","no-spinner":""},{default:i(()=>[n(k,{showing:!t.imgdata,color:"primary",class:"bg-transparent"},null,8,["showing"])]),_:1},8,["src"])]),_:1}),n(w,{class:"flex-grow"},{default:i(()=>[n($,null,{default:i(()=>[x(u(t.capitalizeFirstLetter(t.exten.name)),1)]),_:1}),n($,{caption:""},{default:i(()=>[x(u(t.capitalizeFirstLetter(t.exten.lang))+" "+u(t.exten.versionName)+" ",1),t.exten.isNsfw?(r(),h("span",H,"18+")):y("",!0)]),_:1})]),_:1})]),C("div",O,[n(z,{outline:"",color:"blue",onClick:t.HandleExt},{default:i(()=>[n($,{class:T(t.$q.dark.isActive?"text-white":"text-dark")},{default:i(()=>[x(u(t.capitalizeFirstLetter(t.UpUnIn)),1)]),_:1},8,["class"])]),_:1},8,["onClick"])])]),_:1})]),_:1})),[[B]])}var K=v(P,[["render",J]]);const M=Q({name:"sourcesPage",components:{extCard:K},created:function(){this.reload()},methods:{myTweak(t){return{height:t?`calc(100vh - ${t}px)`:"100vh"}},reload(){this.$fetchJSON("/api/v1/extension/list").then(t=>{this.list=t})},groupExtensions(t){this.allLangs=[];const e={installed:[],"updates pending":[]};t.forEach(s=>{var p;const l=s.lang;e[l]==null&&(e[l]=[],l!=="all"&&this.allLangs.push(l)),s.installed?s.hasUpdate?d(e["updates pending"])&&e["updates pending"].push(s):d(e.installed)&&e.installed.push(s):(p=e[l])==null||p.push(s)}),this.allLangs.sort(j);const a=[["updates pending",d(e["updates pending"])?e["updates pending"]:[]],["installed",d(e.installed)?e.installed:[]],["all",d(e.all)?e.all:[]]];this.filters.setcurrlangs(this.allLangs);const o=this.allLangs.map(s=>[s,e[s]]).filter(s=>s[1]!=null);return a.concat(o)},capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)}},computed:{langGroups(){return this.groupExtensions(this.list)},filterList(){let t=this.langGroups;return t=t.map(e=>{let a=e[1];return this.$route.query.q&&(a=a.filter(o=>o.name.toLowerCase().includes(`${this.$route.query.q}`.toLowerCase()))),this.langs.includes(e[0])||(a=[]),[e[0],a]}),t}},setup(t,{emit:e}){e("setTitle","Extentions");const a=D(),o=a,m=f([]),s=f(a.langs);return{list:m,allLangs:[],filters:o,langs:s}}}),W={key:0,class:"text-h4 q-ml-xl q-my-lg"};function X(t,e,a,o,m,s){const l=V("extCard");return r(),c(E,{"style-fn":t.myTweak},{default:i(()=>[(r(!0),h(_,null,L(t.filterList,p=>(r(),c(q,{key:p[0]},{default:i(()=>[p[1].length?(r(),h("div",W,u(t.capitalizeFirstLetter(p[0])),1)):y("",!0),(r(!0),h(_,null,L(p[1],(g,I)=>(r(),c(U,{key:I,style:{height:"100px",width:"100%"},class:"flex-shrink"},{default:i(()=>[!g.obsolete||g.installed?(r(),c(l,{key:0,onReload:t.reload,exten:g},null,8,["onReload","exten"])):y("",!0)]),_:2},1024))),128))]),_:2},1024))),128)),n(k,{style:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"fit-content",height:"fit-content","background-color":"transparent"},showing:t.filterList.length==3,color:"primary"},null,8,["showing"])]),_:1},8,["style-fn"])}var wt=v(M,[["render",X]]);export{wt as default};