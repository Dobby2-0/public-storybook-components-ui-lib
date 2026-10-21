import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Alert-CphvIa17.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),s={component:i,argTypes:{variant:{control:{type:`select`,options:[`information`,`confirmation`,`warning`,`error`]}}},decorators:[(e,{args:t})=>{let[n,r]=(0,a.useState)(!0);return t.onClose&&=()=>r(!1),(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)(e,{...t})})}]},c={args:{variant:`information`},render:e=>(0,o.jsx)(i,{...e,children:(0,o.jsx)(i.Description,{children:`Boodschap van alert.`})})},l={args:{variant:`information`},render:e=>(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(i.Title,{children:`Custom title`}),(0,o.jsx)(i.Description,{children:`Boodschap van alert.`})]})},u={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:c.render},d={args:{variant:`information`,onClose:()=>alert(`Alert closed!`)},render:l.render},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information"
  },
  render: args => <Alert {...args}>
      <Alert.Title>Custom title</Alert.Title>
      <Alert.Description>Boodschap van alert.</Alert.Description>
    </Alert>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: Default.render
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "information",
    onClose: () => alert("Alert closed!")
  },
  render: WithTitle.render
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithTitle`,`Closeable`,`CloseableWithTitle`]})))()}p();export{u as Closeable,d as CloseableWithTitle,c as Default,l as WithTitle,f as __namedExportsOrder,s as default};