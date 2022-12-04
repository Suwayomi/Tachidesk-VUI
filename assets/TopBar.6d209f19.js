import{Q as q}from"./QTooltip.7ab16f05.js";import{Q as V}from"./QBtn.0c96c562.js";import{Q as m}from"./QTab.266557dd.js";import{Q as B}from"./QTabs.9c0f7da8.js";import{Q as d}from"./QCardSection.65285c56.js";import{Q as s}from"./QCheckbox.b21c9772.js";import{Q as D}from"./QIcon.42acba0c.js";import{Q as w,a as v}from"./QItemLabel.1cd727e1.js";import{Q as g}from"./QItem.9ead9041.js";import{Q as u}from"./QRadio.2d56de22.js";import{Q as I}from"./QCard.6152b0b4.js";import{Q as T}from"./QDialog.a8795883.js";import C from"./SearchBar.415a72b9.js";import{u as U}from"./Filters.ec854820.js";import{_ as R,d as _,r as i,f as r,v as n,m as l,k as t,q as Q,F as $,s as x,p as f,n as c}from"./index.14176138.js";import"./position-engine.6276d9be.js";import"./selection.268c89ac.js";import"./scroll.ee6971c7.js";import"./dom.be792335.js";import"./use-timeout.ca74d71c.js";import"./use-transition.69a65ae7.js";import"./QSpinner.46e83f64.js";import"./Ripple.1f67e085.js";import"./uid.42677368.js";import"./QResizeObserver.abb9fe2f.js";import"./rtl.b51694b1.js";import"./use-checkbox.cfe8cfae.js";import"./use-dark.f381fecd.js";import"./option-sizes.297736c7.js";import"./use-form.2c42e393.js";import"./focus-manager.32f8d49a.js";import"./QInput.03cdaef3.js";import"./use-key-composition.23260f1b.js";import"./StoreStuff.e6c8b150.js";const S=_({name:"LibraryTopBar",components:{SearchBar:C},setup(){const e=U(),a=i(e.unread.value),b=i(e.downloaded.value),h=i(e.leftToRead.value),y=i(e.alphabetical.value),k=i(e.ByID.value),p=i(`${e.Display.value}`);return{dialo:i(!1),tab:i("filter"),unread:a,downloaded:b,leftToRead:h,alphabetical:y,ByID:k,disp:p,filters:e}},watch:{unread(){this.filters.setUnread(this.unread)},downloaded(){this.filters.setDownloaded(this.downloaded)},leftToRead(){this.filters.setLeftToRead(this.leftToRead),this.leftToRead!=null&&(this.alphabetical=null,this.ByID=null)},alphabetical(){this.filters.setAlphabetical(this.alphabetical),this.alphabetical!=null&&(this.leftToRead=null,this.ByID=null)},ByID(){this.filters.setByID(this.ByID),this.ByID!=null&&(this.alphabetical=null,this.leftToRead=null)},disp(){this.disp=="null"?this.filters.setDisplay(null):this.filters.setDisplay(this.disp=="true")}},methods:{update(){this.$api.post("/api/v1/update/fetch",`categoryId=${this.$route.query.tab}`)}}}),A={key:0},F={key:1},L={key:2};function z(e,a,b,h,y,k){const p=x("SearchBar");return r(),n($,null,[l(p),l(V,{flat:"",class:Q(["q-ml-sm",e.$q.dark.isActive?"light":"dark"]),round:"",icon:"filter_list",onClick:a[0]||(a[0]=o=>e.dialo=!0)},{default:t(()=>[l(q,null,{default:t(()=>[f(" Sort / Filter / Display ")]),_:1})]),_:1},8,["class"]),l(T,{modelValue:e.dialo,"onUpdate:modelValue":a[10]||(a[10]=o=>e.dialo=o)},{default:t(()=>[l(I,null,{default:t(()=>[l(d,{class:"q-pa-none"},{default:t(()=>[l(B,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=o=>e.tab=o),class:"text-teal"},{default:t(()=>[l(m,{class:"q-px-xl",name:"filter",icon:"filter_list",label:"Filter"}),l(m,{class:"q-px-xl",name:"sort",icon:"sort",label:"Sort"}),l(m,{class:"q-px-xl",name:"display",icon:"display_settings",label:"Display"})]),_:1},8,["modelValue"])]),_:1}),e.tab=="filter"?(r(),n("div",A,[l(d,{class:"q-px-md q-pt-md q-pb-xs"},{default:t(()=>[l(s,{modelValue:e.unread,"onUpdate:modelValue":a[2]||(a[2]=o=>e.unread=o),style:{width:"100%"},"toggle-indeterminate":"",label:"Unread","checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"blue"},null,8,["modelValue"])]),_:1}),l(d,{class:"q-px-md q-pt-xs q-pb-md"},{default:t(()=>[l(s,{modelValue:e.downloaded,"onUpdate:modelValue":a[3]||(a[3]=o=>e.downloaded=o),style:{width:"100%"},"toggle-indeterminate":"",label:"Downloaded","checked-icon":"check_box","unchecked-icon":"r_disabled_by_default","indeterminate-icon":"check_box_outline_blank","keep-color":"",size:"lg",color:"green"},null,8,["modelValue"])]),_:1})])):c("",!0),e.tab=="sort"?(r(),n("div",F,[l(d,{class:"q-px-md q-pt-md q-pb-xs"},{default:t(()=>[l(s,{modelValue:e.leftToRead,"onUpdate:modelValue":a[4]||(a[4]=o=>e.leftToRead=o),style:{width:"100%"},"checked-icon":"arrow_upward","unchecked-icon":"arrow_downward","indeterminate-icon":"null",color:"primary","keep-color":"",label:"By left to Read"},null,8,["modelValue"])]),_:1}),l(d,{class:"q-px-md q-pt-xs q-pb-xs"},{default:t(()=>[l(s,{modelValue:e.alphabetical,"onUpdate:modelValue":a[5]||(a[5]=o=>e.alphabetical=o),style:{width:"100%"},"checked-icon":"arrow_upward","unchecked-icon":"arrow_downward","indeterminate-icon":"null",color:"primary","keep-color":"",label:"Alphabetical"},null,8,["modelValue"])]),_:1}),l(d,{class:"q-px-md q-pt-xs q-pb-md"},{default:t(()=>[l(s,{modelValue:e.ByID,"onUpdate:modelValue":a[6]||(a[6]=o=>e.ByID=o),style:{width:"100%"},"checked-icon":"arrow_upward","unchecked-icon":"arrow_downward","indeterminate-icon":"null",color:"primary","keep-color":"",label:"By ID"},null,8,["modelValue"])]),_:1})])):c("",!0),e.tab=="display"?(r(),n("div",L,[l(g,{class:"q-mx-lg q-pt-md q-pb-xs"},{default:t(()=>[l(w,{thumbnail:"",class:"q-pr-sm"},{default:t(()=>[l(D,{name:"display_settings"})]),_:1}),l(w,null,{default:t(()=>[l(v,null,{default:t(()=>[f("DISPLAY MODE")]),_:1})]),_:1})]),_:1}),l(d,{class:"q-px-md q-py-xs"},{default:t(()=>[l(u,{modelValue:e.disp,"onUpdate:modelValue":a[7]||(a[7]=o=>e.disp=o),val:"null",label:"Compact grid"},null,8,["modelValue"])]),_:1}),l(d,{class:"q-px-md q-py-xs"},{default:t(()=>[l(u,{modelValue:e.disp,"onUpdate:modelValue":a[8]||(a[8]=o=>e.disp=o),val:"true",label:"Comfortable grid"},null,8,["modelValue"])]),_:1}),l(d,{class:"q-px-md q-pt-xs q-pb-md"},{default:t(()=>[l(u,{modelValue:e.disp,"onUpdate:modelValue":a[9]||(a[9]=o=>e.disp=o),val:"false",label:"list"},null,8,["modelValue"])]),_:1})])):c("",!0)]),_:1})]),_:1},8,["modelValue"]),l(V,{flat:"",round:"",class:Q(e.$q.dark.isActive?"light":"dark"),icon:"refresh",onClick:e.update},{default:t(()=>[l(q,null,{default:t(()=>[f(" Update category ")]),_:1})]),_:1},8,["class","onClick"])],64)}var Ve=R(S,[["render",z]]);export{Ve as default};
