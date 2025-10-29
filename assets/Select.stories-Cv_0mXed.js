import{S as L}from"./Select-B8oFLh5Q.js";import"./iframe-BwNFWH1f.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-BCIMG4CD.js";import"./SelectBase-CSioaiWQ.js";import"./Label-Cm1Uqibf.js";import"./index-CVQZdYvV.js";import"./index-BX9lLRkz.js";import"./index-CtkWuY_Y.js";import"./ListBox-ZC8CqDVC.js";import"./Loader-CSXLMFYo.js";import"./Check-B7fvyNFJ.js";import"./utils-Rlm7jdZ4.js";import"./Separator-DKYNZsGp.js";import"./usePress-DBR8AA51.js";import"./FocusScope-BhwsVeU3.js";import"./Hidden-EiGuNxD5.js";import"./ListBox-88C5zmrG.js";import"./DragAndDrop-CF3sqFzb.js";import"./Text-Om7JnWTg.js";import"./useLabel-DzsVno54.js";import"./index-Btmx5xex.js";import"./Button-Ddp-PUJ0.js";import"./RSPContexts-_iswUeoo.js";import"./VisuallyHidden-Cnanu79u.js";import"./variants-DtEjhCXQ.js";import"./KeyboardArrowDown-BBtYJRuP.js";const V={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
