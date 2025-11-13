import{S as L}from"./Select-Gsx6R7Z7.js";import"./iframe-DZmofgpO.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-kX4wjIIc.js";import"./SelectBase-BU5ya8Bm.js";import"./Label-B2St2kWk.js";import"./index-Dz7sG3uj.js";import"./index-B06jorIC.js";import"./index-GmCXe-Gw.js";import"./ListBox-Dfw-z1AZ.js";import"./Loader-C9aM8Q-l.js";import"./Check-Bo3iyQ4r.js";import"./utils-DJdyUCYz.js";import"./Separator-CK7gM0HH.js";import"./usePress-Bgs7fEjB.js";import"./FocusScope-BBv4nHRy.js";import"./Hidden-CnyXxbgY.js";import"./ListBox-B30LKwB5.js";import"./DragAndDrop-BEdryB3c.js";import"./Text-BrFivvbc.js";import"./useLabel-ndVDMSb_.js";import"./index-D2AQP8f5.js";import"./Button-WsOGcMQH.js";import"./RSPContexts-AqUGoMDJ.js";import"./VisuallyHidden-y1mIW2ey.js";import"./variants-D0Ynqsg7.js";import"./KeyboardArrowDown-CuCLI7n8.js";const V={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an item",
    items: [{
      id: "1",
      label: "Backlog"
    }, {
      id: "2",
      label: "In Progress"
    }, {
      id: "3",
      label: "In Review"
    }, {
      id: "4",
      label: "Done"
    }, {
      id: "5",
      label: "Won't Do"
    }],
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    isDisabled: true
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,b,D;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(D=(b=t.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,h,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const X=["Default","WithLabelAndDescription","Disabled","MultipleSelection","Loading"];export{e as Default,a as Disabled,s as Loading,t as MultipleSelection,r as WithLabelAndDescription,X as __namedExportsOrder,V as default};
