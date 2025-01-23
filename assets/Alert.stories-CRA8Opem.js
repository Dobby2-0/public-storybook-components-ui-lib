import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as D}from"./index-DRjF_FHU.js";import{A as e}from"./Alert-DtzIssgj.js";import"./index-By-mRCMU.js";import"./Error-BdxeAqUo.js";import"./Close-a0dMVUhZ.js";import"./Info-CwC22AGT.js";import"./index-wL3GxAOQ.js";import"./useTranslation-DW3ljh-R.js";import"./context-BLxVKTzt.js";const O={component:e,argTypes:{variant:{control:{type:"select",options:["information","confirmation","warning","error"]}}},decorators:[(t,{args:i})=>{const[x,j]=D.useState(!0);return i.onClose&&(i.onClose=()=>j(!1)),r.jsx(r.Fragment,{children:x&&r.jsx(t,{...i})})}]},o={args:{variant:"information"},render:t=>r.jsx(e,{...t,children:r.jsx(e.Description,{children:"Boodschap van alert."})})},n={args:{variant:"information"},render:t=>r.jsxs(e,{...t,children:[r.jsx(e.Title,{children:"Custom title"}),r.jsx(e.Description,{children:"Boodschap van alert."})]})},a={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:o.render},s={args:{variant:"information",onClose:()=>alert("Alert closed!")},render:n.render};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Custom title</Alert.Title>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,h,A;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...(A=(h=a.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var g,v,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const R=["Default","WithTitle","Closeable","CloseableWithTitle"];export{a as Closeable,s as CloseableWithTitle,o as Default,n as WithTitle,R as __namedExportsOrder,O as default};
