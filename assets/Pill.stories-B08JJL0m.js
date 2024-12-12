import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{q as C}from"./Error-BKB7cmKQ.js";import{r as w}from"./index-DRjF_FHU.js";import{P as S}from"./Pill-D_5wzyEX.js";import"./index-DbF_LCtC.js";import"./Close-a0dMVUhZ.js";import"./index-Bb4qSo10.js";const _={component:S,argTypes:{variant:{control:{type:"select",options:["contrast","success","error","warning","info","highlight","info-alt"]}}},decorators:[(v,{args:n})=>{const[b,x]=w.useState(!0);return n.onClose&&(n.onClose=()=>x(!1)),o.jsx(o.Fragment,{children:b&&o.jsx(v,{...n})})}]},r={args:{variant:"contrast",children:"Default Pill"}},e={args:{variant:"error",icon:o.jsx(C,{}),children:"Pill with icon"}},a={args:{variant:"success",onClose:()=>alert("Pill closed!"),children:"Closeable Pill"}},s={args:{variant:"warning",children:"1",className:"font-bold"}};var t,l,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "contrast",
    children: "Default Pill"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "error",
    icon: <Error />,
    children: "Pill with icon"
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "success",
    onClose: () => alert("Pill closed!"),
    children: "Closeable Pill"
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,P;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "1",
    className: "font-bold"
  }
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const q=["Default","WithIcon","Closeable","Number"];export{a as Closeable,r as Default,s as Number,e as WithIcon,q as __namedExportsOrder,_ as default};
