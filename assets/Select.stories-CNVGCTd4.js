import{S as L}from"./Select-69Q_9mSB.js";import"./iframe-Ff2s0Wa7.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-D_snA_wm.js";import"./SelectBase-CqEPgxh4.js";import"./Label-CX6kCKkr.js";import"./index-DxjM8jOk.js";import"./index-C1nCaLjx.js";import"./index-xi8jNSPF.js";import"./ListBox-DxClmdKp.js";import"./Loader-CT8ByzBI.js";import"./Check-DAAZZgS-.js";import"./utils-DedG9-wU.js";import"./Separator-DyvklDdo.js";import"./usePress-BYqqMwsO.js";import"./FocusScope-DjT-hP5n.js";import"./Hidden-DeoHi4c3.js";import"./ListBox-C0o7bD8l.js";import"./DragAndDrop-BrwPEaml.js";import"./Text-Cg-gjy63.js";import"./useLabel-CF-xOa3P.js";import"./index-LRkyAUEd.js";import"./Button-CQGhT4Ij.js";import"./RSPContexts-j2BU7Axl.js";import"./VisuallyHidden-BtKN2TbE.js";import"./variants-By0yCXqW.js";import"./KeyboardArrowDown-Dwp97ofS.js";const V={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
