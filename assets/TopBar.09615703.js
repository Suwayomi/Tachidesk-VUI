import{Q as n}from"./QTooltip.7ab16f05.js";import{Q as r}from"./QBtn.0c96c562.js";import{Q as S}from"./QCheckbox.b21c9772.js";import{Q as h}from"./QCardSection.65285c56.js";import{Q as $}from"./QCardActions.5ff6c389.js";import{Q as w}from"./QCard.6152b0b4.js";import{Q as P}from"./QDialog.a8795883.js";import{C as u}from"./ClosePopup.a4da7366.js";import{u as q}from"./useDlSock.354f77d4.js";import{p as f}from"./models.d7e94ac2.js";import{_ as V,d as B,r as s,f as c,v,m as l,k as t,q as m,F as k,p,x as F,B as C,t as g,u as D}from"./index.14176138.js";import"./position-engine.6276d9be.js";import"./selection.268c89ac.js";import"./scroll.ee6971c7.js";import"./dom.be792335.js";import"./use-timeout.ca74d71c.js";import"./use-transition.69a65ae7.js";import"./QSpinner.46e83f64.js";import"./QIcon.42acba0c.js";import"./Ripple.1f67e085.js";import"./use-checkbox.cfe8cfae.js";import"./use-dark.f381fecd.js";import"./option-sizes.297736c7.js";import"./use-form.2c42e393.js";import"./focus-manager.32f8d49a.js";import"./StoreStuff.e6c8b150.js";const A=B({name:"SearchBar",setup(){const e=q(),a=s(e),i=s(),d=e.eventsFromServer.value?JSON.parse(e.eventsFromServer.value):[];return f(d)&&(i.value=d.status=="Started"),a.value.isConnected&&e.sendMsg("STATUS"),{dialo:s(!1),filter:s([]),PlayPause:i,Emitter:a}},watch:{"Emitter.eventsFromServer"(e){const a=JSON.parse(e);f(a)&&(this.PlayPause=a.status=="Started")}},methods:{toggleplay(){this.PlayPause?this.$api.get("/api/v1/downloads/stop"):this.$api.get("/api/v1/downloads/start")},clear(){this.$api.get("/api/v1/downloads/clear")},dofilter(){this.$bus.emit("DLFilter",this.filter)}}}),N={style:{"margin-right":"12.5px"}};function T(e,a,i,d,b,E){return c(),v(k,null,[l(r,{class:m(["q-ml-sm",e.$q.dark.isActive?"light":"dark"]),round:"",icon:"filter_list",onClick:a[0]||(a[0]=o=>e.dialo=!0)},{default:t(()=>[l(n,null,{default:t(()=>[p("Filter")]),_:1})]),_:1},8,["class"]),l(P,{modelValue:e.dialo,"onUpdate:modelValue":a[3]||(a[3]=o=>e.dialo=o)},{default:t(()=>[l(w,{class:"q-pa-md"},{default:t(()=>[(c(),v(k,null,F(["Downloading","Queued","finished"],(o,y)=>l(h,{key:y,class:"q-py-xs"},{default:t(()=>[l(S,{modelValue:e.filter,"onUpdate:modelValue":a[1]||(a[1]=Q=>e.filter=Q),style:{width:"100%"},val:o},{default:t(()=>[D("div",N,g(o),1)]),_:2},1032,["modelValue","val"])]),_:2},1024)),64)),l($,{align:"center"},{default:t(()=>[C(l(r,{flat:"",label:"clear",color:"primary",onClick:a[2]||(a[2]=o=>{e.filter=[],e.dofilter()})},null,512),[[u]]),C(l(r,{flat:"",label:"Save",color:"primary",onClick:e.dofilter},null,8,["onClick"]),[[u]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(r,{elevated:"",class:m(["q-ml-sm",e.$q.dark.isActive?"light":"dark"]),round:"",icon:"clear_all",onClick:e.clear},{default:t(()=>[l(n,null,{default:t(()=>[p(" Clear all downloads ")]),_:1})]),_:1},8,["class","onClick"]),l(r,{elevated:"",class:m(["q-ml-sm",e.$q.dark.isActive?"light":"dark"]),round:"",icon:e.PlayPause?"pause":"play_arrow",onClick:e.toggleplay},{default:t(()=>[l(n,null,{default:t(()=>[p(g(e.PlayPause?"stop downloads":"start downloads"),1)]),_:1})]),_:1},8,["class","icon","onClick"])],64)}var de=V(A,[["render",T]]);export{de as default};
