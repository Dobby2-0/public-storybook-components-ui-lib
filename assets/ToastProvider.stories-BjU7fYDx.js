import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{B as V}from"./Button-Cyl0gDq7.js";import{c as W}from"./index-By-mRCMU.js";import{r as a}from"./index-DRjF_FHU.js";import{A as v}from"./Alert-DtzIssgj.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-DmDxhQCI.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-Cv97aE-9.js";import"./Loader-Cgl1KvpE.js";import"./Button-B8-bwU7B.js";import"./Hidden-CICGlFC4.js";import"./useFocusable-Cuxsel3J.js";import"./usePress-76wSwCmG.js";import"./openLink--SV7cA94.js";import"./Error-BdxeAqUo.js";import"./Close-a0dMVUhZ.js";import"./Info-CwC22AGT.js";import"./useTranslation-DW3ljh-R.js";import"./context-BLxVKTzt.js";const k="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let q=(e=21)=>{let r="",s=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)r+=k[s[e]&63];return r};const A=a.createContext(null),g=({children:e,maxVisibleToasts:r=5})=>{const[s,n]=a.useState([]),[u,m]=a.useState([]),c=a.useCallback(p=>{n(l=>{const d=l.filter(o=>o.id!==p);return m(o=>{if(d.length<r&&o.length>0){const j=o[0];return d.push(j),o.slice(1)}return o}),d})},[r]),B=a.useCallback(p=>{const l=q(),d=()=>c(l);n(o=>o.length<r?[...o,{...p,id:l,dismiss:d}]:(m(j=>[...j,{...p,id:l,dismiss:d}]),o))},[c,r]),M=a.useMemo(()=>({toasts:s,toast:B,dismiss:c,queue:u}),[c,u,B,s]);return t.jsx(A.Provider,{value:M,children:e})},D=()=>{const e=a.useContext(A);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};try{g.displayName="ToastProvider",g.__docgenInfo={description:"",displayName:"ToastProvider",props:{maxVisibleToasts:{defaultValue:{value:"5"},description:"",name:"maxVisibleToasts",required:!1,type:{name:"number"}}}}}catch{}const f=()=>{const{toasts:e}=D();return a.useEffect(()=>{const r=e.map(({duration:s,dismiss:n})=>(s&&setTimeout(()=>{n()},s),null));return()=>{r.forEach(s=>s&&clearTimeout(s))}},[e]),t.jsx("div",{className:"fixed bottom-4 right-4 z-50 flex flex-col space-y-2",children:e.map(({id:r,title:s,description:n,action:u,variant:m,dismiss:c})=>t.jsxs(v,{variant:m??"information",onClose:c,className:W("animate-slide-in fade-in shadow-sm w-[300px]"),children:[s&&t.jsx(v.Title,{children:s}),n&&t.jsx(v.Description,{children:n}),u&&t.jsx("div",{className:"mt-2",children:u})]},r))})},nt={component:f,decorators:[e=>t.jsx(g,{maxVisibleToasts:3,children:t.jsx(e,{})})]},i=({id:e,duration:r})=>{const{toast:s}=D(),n="Toast Title "+e;return t.jsx(V,{onPress:()=>s({title:n,children:"This is a test toast notification!",onClose:()=>console.warn("Toast closed"),duration:r}),children:t.jsxs("p",{children:["Toast ",e]})})},x={render:()=>t.jsxs("div",{children:[t.jsx(i,{id:"1"}),t.jsx(f,{})]})},T={render:()=>t.jsxs("div",{children:[t.jsx(i,{id:"1"}),t.jsx(i,{id:"2"}),t.jsx(i,{id:"3"}),t.jsx(i,{id:"4"}),t.jsx(i,{id:"5"}),t.jsx(f,{})]})},h={render:()=>t.jsxs("div",{children:[t.jsx(i,{id:"1",duration:5e3}),t.jsx(f,{})]})};var _,y,b;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div>
      <ToastButton id="1" />
      <Toaster />
    </div>
}`,...(b=(y=x.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,C,E;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <ToastButton id="1" />
        <ToastButton id="2" />
        <ToastButton id="3" />
        <ToastButton id="4" />
        <ToastButton id="5" />
        <Toaster />
      </div>;
  }
}`,...(E=(C=T.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var P,S,N;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <ToastButton id="1" duration={5000} />
        <Toaster />
      </div>;
  }
}`,...(N=(S=h.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const at=["Default","MultipleToasts","WithTimeout"];export{x as Default,T as MultipleToasts,h as WithTimeout,at as __namedExportsOrder,nt as default};
