import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{Ot as i,Xt as a,t as o}from"./main-DS6peC0q.js";import{n as s,t as c}from"./Pill-Q8lFiUIM.js";var l,u,d,f,p,m,h,g,_;t((()=>{o(),l=e(n(),1),s(),u=r(),d={component:c,argTypes:{variant:{control:{type:`select`,options:[`accent`,`contrast`,`info-1`,`info-2`,`info-3`,`info-4`,`success`,`warning`,`error`]}}},decorators:[(e,{args:t})=>{let[n,r]=(0,l.useState)(!0);return t.onClose&&=()=>r(!1),(0,u.jsx)(u.Fragment,{children:n&&(0,u.jsx)(e,{...t})})}]},f={args:{variant:`contrast`,children:`Default Pill`}},p={args:{variant:`error`,icon:(0,u.jsx)(i,{}),children:`Pill with icon`}},m={args:{variant:`success`,onClose:()=>alert(`Pill closed!`),children:`Closeable Pill`}},h={args:{variant:`warning`,children:`1`,className:`font-bold`}},g={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-row gap-2`,children:[(0,u.jsx)(c,{onClose:()=>null,variant:`accent`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`contrast`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`info-1`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`info-2`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`info-3`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`info-4`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`success`,icon:(0,u.jsx)(a,{}),children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`warning`,children:`Pill`}),(0,u.jsx)(c,{onClose:()=>null,variant:`error`,icon:(0,u.jsx)(i,{}),children:`Pill`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "contrast",
    children: "Default Pill"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    icon: <Error />,
    children: "Pill with icon"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    onClose: () => alert("Pill closed!"),
    children: "Closeable Pill"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "1",
    className: "font-bold"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithIcon`,`Closeable`,`Number`,`Variants`]}))();export{m as Closeable,f as Default,h as Number,g as Variants,p as WithIcon,_ as __namedExportsOrder,d as default};