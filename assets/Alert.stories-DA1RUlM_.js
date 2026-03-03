import{A as e,j as r,r as D}from"./iframe-DjqpNQmQ.js";import"./preload-helper-Dp1pzeXC.js";const W={component:e,argTypes:{variant:{control:{type:"select",options:["information","confirmation","warning","error"]}}},decorators:[(t,{args:i})=>{const[x,j]=D.useState(!0);return i.onClose&&(i.onClose=()=>j(!1)),r.jsx(r.Fragment,{children:x&&r.jsx(t,{...i})})}]},n={args:{variant:"information"},render:t=>r.jsx(e,{...t,children:r.jsx(e.Description,{children:"Boodschap van alert."})})},a={args:{variant:"information"},render:t=>r.jsxs(e,{...t,children:[r.jsx(e.Title,{children:"Custom title"}),r.jsx(e.Description,{children:"Boodschap van alert."})]})},o={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:n.render},s={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:a.render};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Custom title</Alert.Title>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,A,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...(f=(A=o.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var g,v,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const b=["Default","WithTitle","Closeable","CloseableWithTitle"];export{o as Closeable,s as CloseableWithTitle,n as Default,a as WithTitle,b as __namedExportsOrder,W as default};
