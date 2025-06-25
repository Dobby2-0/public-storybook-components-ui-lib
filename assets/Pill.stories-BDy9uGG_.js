import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{o as D}from"./CheckCircle-7pDPBrEl.js";import{q as b}from"./Error-DDcq_WG-.js";import{r as y}from"./index-tvICUrOf.js";import{P as n}from"./Pill-DMlxjKgV.js";import"./index-yBjzXJbu.js";import"./index-D8pzxCuu.js";import"./Close-Lw3CM0IZ.js";import"./index-D35RSF8M.js";const T={component:n,argTypes:{variant:{control:{type:"select",options:["accent","contrast","info-1","info-2","info-3","info-4","success","warning","error"]}}},decorators:[(S,{args:s})=>{const[N,E]=y.useState(!0);return s.onClose&&(s.onClose=()=>E(!1)),l.jsx(l.Fragment,{children:N&&l.jsx(S,{...s})})}]},r={args:{variant:"contrast",children:"Default Pill"}},o={args:{variant:"error",icon:l.jsx(b,{}),children:"Pill with icon"}},e={args:{variant:"success",onClose:()=>alert("Pill closed!"),children:"Closeable Pill"}},a={args:{variant:"warning",children:"1",className:"font-bold"}},i={render:()=>l.jsxs("div",{className:"flex flex-row gap-2",children:[l.jsx(n,{onClose:()=>null,variant:"accent",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"contrast",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-1",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-2",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-3",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-4",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"success",icon:l.jsx(D,{}),children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"warning",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"error",icon:l.jsx(b,{}),children:"Pill"})]})};var t,c,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "contrast",
    children: "Default Pill"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var P,d,m;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "error",
    icon: <Error />,
    children: "Pill with icon"
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,f,v;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "success",
    onClose: () => alert("Pill closed!"),
    children: "Closeable Pill"
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,h,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "1",
    className: "font-bold"
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-row gap-2">
      <Pill onClose={() => null} variant="accent">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="contrast">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="info-1">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="info-2">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="info-3">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="info-4">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="success" icon={<CheckCircle />}>
        Pill
      </Pill>
      <Pill onClose={() => null} variant="warning">
        Pill
      </Pill>
      <Pill onClose={() => null} variant="error" icon={<Error />}>
        Pill
      </Pill>
    </div>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const z=["Default","WithIcon","Closeable","Number","Variants"];export{e as Closeable,r as Default,a as Number,i as Variants,o as WithIcon,z as __namedExportsOrder,T as default};
