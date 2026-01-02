import{S as L}from"./Select-BgdGJi-9.js";import"./iframe-BYumUEqj.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-CkJCj400.js";import"./SelectBase-CSpLIeFM.js";import"./Label-JL8H_gsw.js";import"./index-z7SdNoX_.js";import"./index-Cerk7jZ7.js";import"./index-Ct7FywXd.js";import"./Label-Cc2lmETZ.js";import"./utils-DmPleNPi.js";import"./Text-HOHS8Yh-.js";import"./ListBox-Dg-jvKLH.js";import"./Loader-2yPpCOMH.js";import"./Check-vIqA8EeG.js";import"./Separator-BZwVFUZ5.js";import"./usePress-DNxk5E_A.js";import"./FocusScope-CYYnJNQZ.js";import"./index-CzCbh3GW.js";import"./ListBox-DWXogx_m.js";import"./DragAndDrop-CXo7ZOiL.js";import"./useLabel-Bn-rd9-b.js";import"./index-BtPpEG5e.js";import"./Button-QDSONico.js";import"./RSPContexts-BCJ4Z2uz.js";import"./VisuallyHidden-BGhqA0HM.js";import"./variants-BNTPB0FD.js";import"./KeyboardArrowDown-C7jCuD51.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
