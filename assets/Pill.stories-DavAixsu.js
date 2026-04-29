import{j as l,o as D,q as b,r as y}from"./iframe-B_LGz7Ej.js";import{P as n}from"./Pill-aEht7-4L.js";import"./preload-helper-Dp1pzeXC.js";const _={component:n,argTypes:{variant:{control:{type:"select",options:["accent","contrast","info-1","info-2","info-3","info-4","success","warning","error"]}}},decorators:[(S,{args:i})=>{const[N,E]=y.useState(!0);return i.onClose&&(i.onClose=()=>E(!1)),l.jsx(l.Fragment,{children:N&&l.jsx(S,{...i})})}]},r={args:{variant:"contrast",children:"Default Pill"}},e={args:{variant:"error",icon:l.jsx(b,{}),children:"Pill with icon"}},a={args:{variant:"success",onClose:()=>alert("Pill closed!"),children:"Closeable Pill"}},o={args:{variant:"warning",children:"1",className:"font-bold"}},s={render:()=>l.jsxs("div",{className:"flex flex-row gap-2",children:[l.jsx(n,{onClose:()=>null,variant:"accent",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"contrast",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-1",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-2",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-3",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"info-4",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"success",icon:l.jsx(D,{}),children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"warning",children:"Pill"}),l.jsx(n,{onClose:()=>null,variant:"error",icon:l.jsx(b,{}),children:"Pill"})]})};var t,c,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "contrast",
    children: "Default Pill"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var P,d,m;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "error",
    icon: <Error />,
    children: "Pill with icon"
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,v,C;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "success",
    onClose: () => alert("Pill closed!"),
    children: "Closeable Pill"
  }
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "1",
    className: "font-bold"
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const k=["Default","WithIcon","Closeable","Number","Variants"];export{a as Closeable,r as Default,o as Number,s as Variants,e as WithIcon,k as __namedExportsOrder,_ as default};
