import{j as s}from"./jsx-runtime-DR9Q75dM.js";import"./SVpyu8SL-kb1JahyB.js";import{o as C}from"./Error-8rQN8J_B.js";import{r as w}from"./index-DRjF_FHU.js";import{P as S}from"./Pill-OE8-7FSa.js";import"./index-iB5ESbfh.js";import"./Close-ycDl8qzo.js";import"./index-Bb4qSo10.js";const F={component:S,argTypes:{variant:{control:{type:"select",options:["contrast","success","error","warning","info","highlight","info-alt"]}}},decorators:[(v,{args:n})=>{const[b,x]=w.useState(!0);return n.onClose&&(n.onClose=()=>x(!1)),s.jsx(s.Fragment,{children:b&&s.jsx(v,{...n})})}]},r={args:{variant:"contrast",children:"Default Pill"}},e={args:{variant:"error",icon:s.jsx(C,{}),children:"Pill with icon"}},o={args:{variant:"success",onClose:()=>alert("Pill closed!"),children:"Closeable Pill"}},a={args:{variant:"warning",children:"1",className:"font-bold"}};var t,l,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "success",
    onClose: () => alert("Pill closed!"),
    children: "Closeable Pill"
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,P;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "1",
    className: "font-bold"
  }
}`,...(P=(f=a.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const O=["Default","WithIcon","Closeable","Number"];export{o as Closeable,r as Default,a as Number,e as WithIcon,O as __namedExportsOrder,F as default};
