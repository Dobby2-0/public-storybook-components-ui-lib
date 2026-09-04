import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{n,t as r}from"./Select-Kd65lgCf.js";import{n as i,r as a}from"./BulkActions-doYaKuRc.js";var o,s,c,l,u,d,f,p;e((()=>{a(),n(),o=t(),s={component:i},c={args:{count:1,actions:[{id:`action-1`,label:`Action 1`,action:()=>console.log(`Action 1`)},{id:`action-2`,label:`Action 2`,action:()=>console.log(`Action 2`)}],defaultActionId:void 0}},l=[{id:`action-1`,label:`Action 1`,action:()=>console.log(`Action 1`)},{id:`action-2`,label:`Action 2`,action:()=>console.log(`Action 2`)}],u={args:{count:1,actions:l,defaultActionId:l[0].id}},d={args:{count:1,actions:[{id:`action-1`,label:`Action 1`,action:()=>console.log(`Action 1`)},{id:`action-2`,label:`Action 2`,action:()=>console.log(`Action 2`),disabled:!0,disabledReason:`We don't want you to do this`}],defaultActionId:void 0}},f={args:{count:2,children:(0,o.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,o.jsx)(r,{placeholder:`Set status`,items:[],className:i.selectClassNames}),(0,o.jsx)(`p`,{children:`to`}),(0,o.jsx)(r,{placeholder:`something`,items:[],className:i.selectClassNames}),(0,o.jsx)(i.ConfirmationButton,{disabled:!0,tooltipContent:`Enable button when selection is valid`,onConfirm:()=>void 0})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: [{
      id: "action-1",
      label: "Action 1",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 1")
    }, {
      id: "action-2",
      label: "Action 2",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 2")
    }],
    defaultActionId: undefined
  }
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: actions,
    defaultActionId: actions[0].id
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: [{
      id: "action-1",
      label: "Action 1",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 1")
    }, {
      id: "action-2",
      label: "Action 2",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 2"),
      disabled: true,
      disabledReason: "We don't want you to do this"
    }],
    defaultActionId: undefined
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2,
    children: <div className="flex items-center gap-2.5">
        <Select placeholder="Set status" items={[]} className={BulkActions.selectClassNames} />
        <p>to</p>
        <Select placeholder="something" items={[]} className={BulkActions.selectClassNames} />
        <BulkActions.ConfirmationButton disabled={true} tooltipContent="Enable button when selection is valid" onConfirm={() => undefined} />
      </div>
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`DefaultSelectedAction`,`DisabledOption`,`WithChildren`]}))();export{c as Default,u as DefaultSelectedAction,d as DisabledOption,f as WithChildren,p as __namedExportsOrder,s as default};