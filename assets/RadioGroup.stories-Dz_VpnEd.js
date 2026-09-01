import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./RadioGroup-bIV-m1yG.js";var r,i,a,o,s;e((()=>{t(),r={component:n,argTypes:{label:{control:`text`},description:{control:`text`},orientation:{control:`radio`,options:[`vertical`,`horizontal`]}}},i={args:{label:`Select an option`,description:`Choose one of the following options.`,orientation:`vertical`,items:[{label:`Option 1`,id:`option1`},{label:`Option 2`,id:`option2`},{label:`Option 3`,id:`option3`}]}},a={args:{...i.args,defaultValue:`option1`,isDisabled:!0,items:[{label:`Option 1`,id:`option1`},{label:`Option 2`,id:`option2`},{label:`Option 3`,id:`option3`}]}},o={args:{...i.args,orientation:`horizontal`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    description: "Choose one of the following options.",
    orientation: "vertical",
    items: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }, {
      label: "Option 3",
      id: "option3"
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: "option1",
    isDisabled: true,
    items: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }, {
      label: "Option 3",
      id: "option3"
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "horizontal"
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`Disabled`,`Horizontal`]}))();export{i as Default,a as Disabled,o as Horizontal,s as __namedExportsOrder,r as default};