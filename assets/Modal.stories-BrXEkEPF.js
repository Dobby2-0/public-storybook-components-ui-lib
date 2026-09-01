import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{i as n,t as r}from"./Modal-AfE3cX2y.js";import{n as i,t as a}from"./Button-togyK28J.js";var o,s,c,l,u,d;e((()=>{i(),n(),o=t(),s={component:r,title:`Components/Modal/Modal`,argTypes:{closeButton:{control:`boolean`,table:{defaultValue:{summary:`true`}}}}},c={args:{closeButton:!0,trigger:(0,o.jsx)(a,{children:`Open Modal`}),title:`Sign up`,footer:e=>(0,o.jsxs)(`div`,{className:`flex flex-row gap-2 justify-end`,children:[(0,o.jsx)(a,{onPress:e,variant:`ghost`,children:`Cancel`}),(0,o.jsx)(a,{children:`Save`})]}),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`This is the modal content.`}),(0,o.jsx)(`span`,{children:`More content...`})]})}},l={args:{...c.args,closeButton:!1}},u={args:{trigger:(0,o.jsx)(a,{children:`Open sheet`}),children:`Sheet content`,side:`left`,closeButton:!1}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    closeButton: true,
    trigger: <Button>Open Modal</Button>,
    title: "Sign up",
    footer: close => <div className="flex flex-row gap-2 justify-end">
        <Button onPress={close} variant="ghost">
          Cancel
        </Button>
        <Button>Save</Button>
      </div>,
    children: <>
        <p>This is the modal content.</p>
        <span>More content...</span>
      </>
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeButton: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Open sheet</Button>,
    children: "Sheet content",
    side: "left",
    closeButton: false
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`ModalNoCloseButton`,`Sheet`]}))();export{c as Default,l as ModalNoCloseButton,u as Sheet,d as __namedExportsOrder,s as default};