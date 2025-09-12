import{S as L}from"./Select-BIyCaghX.js";import"./iframe-CIaFx2q2.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-ipC1kgMn.js";import"./SelectBase-BG0f1lR1.js";import"./Label-D922ixhj.js";import"./index-CsAEAbEi.js";import"./index-CcIytjnB.js";import"./index-uKKeEpF6.js";import"./ListBox-C__S1f1y.js";import"./Loader-LULHh8rS.js";import"./Check-G01i2Qjk.js";import"./utils-D-1pXXnN.js";import"./Separator-CG6JFri3.js";import"./usePress-8aWzuJ7v.js";import"./FocusScope-DSlukKEN.js";import"./Hidden-DCSrIPOz.js";import"./ListBox-BnuMuTQm.js";import"./DragAndDrop-B3UvGqJ7.js";import"./Text-CzIHxRsu.js";import"./useLabel-6z3we1ld.js";import"./index-BUWFphUH.js";import"./Button-q_8A41Mf.js";import"./RSPContexts-7sqEX1iE.js";import"./VisuallyHidden-DhEKfe7W.js";import"./variants-CoVKe-fX.js";import"./KeyboardArrowDown-DdGS9cSB.js";const V={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
