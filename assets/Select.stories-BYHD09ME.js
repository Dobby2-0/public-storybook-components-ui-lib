import{S as L}from"./Select-DtmF_50G.js";import"./iframe-AuHChfR8.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-DvUUpkJh.js";import"./SelectBase-CocifUuq.js";import"./Label-CHJze_Ty.js";import"./index-DFJopNyj.js";import"./index-CsgPiThP.js";import"./index-CCMtGYiC.js";import"./ListBox-CcjibbUR.js";import"./Loader-AC6f68R3.js";import"./Check-CAtPzBwY.js";import"./utils-BabE-UFT.js";import"./Separator-Dsp-CNcm.js";import"./usePress-kTZ8LD1W.js";import"./FocusScope-9az9tTJa.js";import"./Hidden-CLaRjale.js";import"./index-DjvNOQuR.js";import"./ListBox-WrZOpUhW.js";import"./DragAndDrop-D2c1EfPm.js";import"./Text-mSFoEL7R.js";import"./useLabel-DiW7coGv.js";import"./index-BzjgWfDE.js";import"./Button-B6MgONbo.js";import"./RSPContexts-DdS4iVL4.js";import"./VisuallyHidden-DDCKDU00.js";import"./variants-KP2RT6pP.js";import"./KeyboardArrowDown-D6iA8Zf5.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
