(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{1855:function(e,l,t){Promise.resolve().then(t.bind(t,7023))},7023:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return s}});var i=t(4357),n=t(7097),d=t(7094),o=t(7684),a=t(2091),r=t(6439);function s(){let{toast:e}=(0,d.pm)(),l=(0,a.useRouter)(),t=(0,a.usePathname)(),s=(0,a.useSearchParams)(),[u,v]=(0,r.useState)("false"),[c,m]=(0,r.useState)(!1),[f,h]=(0,r.useState)(""),[g,p]=(0,r.useState)([]),[x,k]=(0,r.useState)(),j=(0,r.useCallback)(async()=>{var l,t,i,n,d,a,r,u,v,c,m,f;try{let v=await o.Z.get("/api/event");if(!(null==v?void 0:null===(l=v.data)||void 0===l?void 0:l.ok))return e({variant:"destructive",title:null==v?void 0:null===(u=v.data)||void 0===u?void 0:null===(r=u.errors)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:a.message}),!1;p(null==v?void 0:null===(i=v.data)||void 0===i?void 0:null===(t=i.packet)||void 0===t?void 0:t.list);let c=s.get("selected");return h(c||(null==v?void 0:null===(d=v.data)||void 0===d?void 0:null===(n=d.packet)||void 0===n?void 0:n.default)),!0}catch(t){let l=null==t?void 0:null===(f=t.response)||void 0===f?void 0:null===(m=f.data)||void 0===m?void 0:null===(c=m.errors)||void 0===c?void 0:null===(v=c[0])||void 0===v?void 0:v.message;return console.error(l),e({variant:"destructive",title:l||"Something went wrong"}),!1}},[]),w=(0,r.useCallback)(async l=>{var t,i,n,d,a,r,s,u,v;try{if(!l)return!1;let r=await o.Z.get("/api/post/event/".concat(l));if(!(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.ok))return e({variant:"destructive",title:null==r?void 0:null===(a=r.data)||void 0===a?void 0:null===(d=a.errors)||void 0===d?void 0:null===(n=d[0])||void 0===n?void 0:n.message}),!1;let{list:s,total:u,page:v,limit:c}=null==r?void 0:null===(i=r.data)||void 0===i?void 0:i.packet;return k(s),!0}catch(t){let l=null==t?void 0:null===(v=t.response)||void 0===v?void 0:null===(u=v.data)||void 0===u?void 0:null===(s=u.errors)||void 0===s?void 0:null===(r=s[0])||void 0===r?void 0:r.message;return console.error(l),e({variant:"destructive",title:l||"Something went wrong"}),!1}},[]);return(0,r.useEffect)(()=>{j()},[j,c]),(0,r.useEffect)(()=>{f&&w(f)},[f,w]),(0,i.jsxs)("div",{className:"grid  ",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"my-6 flex justify-between",children:[(0,i.jsx)("h4",{className:"font-bold text-2xl",children:"Feed "}),(0,i.jsx)("div",{children:(0,i.jsx)("select",{onChange:e=>{let i=new URLSearchParams(Array.from(s.entries())),n=e.target.value.trim();h(n),n?i.set("selected",n):i.delete("selected");let d=i.toString(),o=d?"?".concat(d):"";l.push("".concat(t).concat(o))},value:f,children:null==g?void 0:g.map(e=>(0,i.jsx)("option",{value:null==e?void 0:e._id,children:null==e?void 0:e.name},null==e?void 0:e._id))})})]})}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-2 ",children:Array.isArray(x)&&(null==x?void 0:x.map(e=>(0,i.jsx)(n.Z,{data:e,setCallApi:m},null==e?void 0:e._id)))})]})}}},function(e){e.O(0,[409,956,710,759,78,388,381,703,422,702,431,744],function(){return e(e.s=1855)}),_N_E=e.O()}]);