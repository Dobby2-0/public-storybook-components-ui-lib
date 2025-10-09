import{S as L}from"./Select-_Vs4i7We.js";import"./iframe-B7A3uWXD.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-C2Xld4nc.js";import"./SelectBase-B0e74SU5.js";import"./Label-D6G7XIQG.js";import"./index-CEKSJIUF.js";import"./index-ByFicOe9.js";import"./index-CQj9uTov.js";import"./ListBox-C-zKcvJz.js";import"./Loader-BNjWdkiN.js";import"./Check-BS1OqOhH.js";import"./utils-BhB1vUAY.js";import"./Separator-FiJ-Nr5z.js";import"./usePress-qXqVJXAB.js";import"./FocusScope-BfktBpW9.js";import"./Hidden-BIxhquhB.js";import"./ListBox-DXn97KTk.js";import"./DragAndDrop-DZYsNf67.js";import"./Text-Bb6oC_Oz.js";import"./useLabel-CMYTplYs.js";import"./index-BVXSKwSp.js";import"./Button-Ddnhx0Dq.js";import"./RSPContexts-DB-WFGul.js";import"./VisuallyHidden-BZgWaQDO.js";import"./variants-CkKByUlC.js";import"./KeyboardArrowDown-CbafTnZO.js";const V={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
