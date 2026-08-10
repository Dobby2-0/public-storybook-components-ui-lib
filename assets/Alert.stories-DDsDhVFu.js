import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{c as i,s as a}from"./iframe-BXn5Up0J.js";var o,s,c,l,u,d,f,p;t((()=>{o=e(n(),1),i(),s=r(),c={component:a,argTypes:{variant:{control:{type:`select`,options:[`information`,`confirmation`,`warning`,`error`]}}},decorators:[(e,{args:t})=>{let[n,r]=(0,o.useState)(!0);return t.onClose&&=()=>r(!1),(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsx)(e,{...t})})}]},l={args:{variant:`information`},render:e=>(0,s.jsx)(a,{...e,children:(0,s.jsx)(a.Description,{children:`Boodschap van alert.`})})},u={args:{variant:`information`},render:e=>(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(a.Title,{children:`Custom title`}),(0,s.jsx)(a.Description,{children:`Boodschap van alert.`})]})},d={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:l.render},f={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:u.render},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Custom title</Alert.Title>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithTitle`,`Closeable`,`CloseableWithTitle`]}))();export{d as Closeable,f as CloseableWithTitle,l as Default,u as WithTitle,p as __namedExportsOrder,c as default};