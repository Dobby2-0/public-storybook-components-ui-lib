import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Button-Dq7ffUGf.js";import{n as a,t as o}from"./Alert-BAVaTjIO.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s=t(),r(),a(),c=n(),l={component:o,argTypes:{variant:{control:{type:`select`,options:[`information`,`confirmation`,`warning`,`error`]}}},decorators:[(e,{args:t})=>{let[n,r]=(0,s.useState)(!0);return t.onClose&&=()=>r(!1),(0,c.jsx)(c.Fragment,{children:n&&(0,c.jsx)(e,{...t})})}]},u={args:{variant:`information`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(o.Description,{children:`Boodschap van alert.`})})},d={args:{variant:`information`},render:e=>(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(o.Title,{children:`Alert title`}),(0,c.jsx)(o.Description,{children:`Alert description`})]})},f={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:u.render},p={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:d.render},m={args:{variant:`error`,onClose:()=>alert(`Alert closed!`),inlineAction:(0,c.jsx)(i,{variant:`ghost`,onPress:()=>alert(`Undo`),children:`Undo`})},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(o.Title,{children:`Item deleted`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Alert title</Alert.Title>
      <Alert.Description>Alert description</Alert.Description>
    </Alert>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    onClose: () => alert("Alert closed!"),
    inlineAction: <Button variant="ghost" onPress={() => alert("Undo")}>
        Undo
      </Button>
  },
  render: args => <Alert {...args}>
      <Alert.Title>Item deleted</Alert.Title>
    </Alert>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithTitle`,`Closeable`,`CloseableWithTitle`,`WithInlineAction`]})))()}g();export{f as Closeable,p as CloseableWithTitle,u as Default,m as WithInlineAction,d as WithTitle,h as __namedExportsOrder,l as default};