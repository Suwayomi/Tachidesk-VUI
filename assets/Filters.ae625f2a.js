import{r as t,P as n}from"./index.b35b6c87.js";import{s as e}from"./usefull.e82e70c8.js";const o=t(n.getItem("lbUnread")),s=t(n.getItem("lbDownloaded")),a=t(n.getItem("lbLeftToRead")),b=t(n.getItem("lbAlphabetical")),i=t(n.getItem("lbByid")),u=t(n.getItem("lbDisplay"));function I(){return{setUnread:l=>{e("lbUnread",l),o.value=l},setDownloaded:l=>{e("lbDownloaded",l),s.value=l},setLeftToRead:l=>{l!=null&&(e("lbLeftToRead",l),e("lbAlphabetical",null),e("lbByid",null)),a.value=l},setAlphabetical:l=>{l!=null&&(e("lbLeftToRead",null),e("lbAlphabetical",l),e("lbByid",null)),b.value=l},setByID:l=>{l!=null&&(e("lbLeftToRead",null),e("lbAlphabetical",null),e("lbByid",l)),i.value=l},setDisplay:l=>{e("lbDisplay",l),u.value=l},unread:o,downloaded:s,leftToRead:a,alphabetical:b,ByID:i,Display:u}}export{I as u};