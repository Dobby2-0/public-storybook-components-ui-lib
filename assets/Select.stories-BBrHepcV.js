import{S as L}from"./Select-CjjI2z27.js";import"./iframe-DxqB9boC.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-aofiBUSp.js";import"./SelectBase-e8haZN_B.js";import"./Label-437p-tUb.js";import"./index-BKqV3H35.js";import"./index-CK9kbaq8.js";import"./index-DxaqE9ox.js";import"./Label-DZUabfaG.js";import"./utils-BZoaywRP.js";import"./Text-Ct9ZvIUR.js";import"./ListBox-CS_KHVbe.js";import"./Loader-BhEu2spN.js";import"./Check-pl2AuQkJ.js";import"./Separator-FUyGumNk.js";import"./usePress-DnV8oE5s.js";import"./FocusScope-D7q5W6Y8.js";import"./index-B9LOX3vE.js";import"./ListBox-Dri4MaI7.js";import"./DragAndDrop-JFL9m-z7.js";import"./useLabel-BQM4SikJ.js";import"./index-Di_7lRh5.js";import"./Button-BtF1-V-Y.js";import"./RSPContexts-CdKmEmBz.js";import"./VisuallyHidden-DAEn6H89.js";import"./variants-DPxRw7vR.js";import"./KeyboardArrowDown-AvfzWT8M.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Y=["Default","WithLabelAndDescription","Disabled","MultipleSelection","Loading"];export{e as Default,a as Disabled,s as Loading,t as MultipleSelection,r as WithLabelAndDescription,Y as __namedExportsOrder,X as default};
