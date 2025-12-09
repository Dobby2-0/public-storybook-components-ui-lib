import{S as L}from"./Select-D5dX_469.js";import"./iframe-nfYaCMFG.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-DcHgFBvL.js";import"./SelectBase-CLFRtdhz.js";import"./Label-jyyH59mV.js";import"./index-ByjHB0Qw.js";import"./index-DU8kGLuZ.js";import"./index-O77fUrkO.js";import"./ListBox-B8ieJs6S.js";import"./Loader-BRFPJhgB.js";import"./Check-6HfRFboM.js";import"./utils-DsplgZ5_.js";import"./Separator-DrIqXTMA.js";import"./usePress-C-JupEBC.js";import"./FocusScope-C9_LKvrg.js";import"./Hidden-DnULKSXS.js";import"./index-CgM6Dbo0.js";import"./ListBox-BxMngG_4.js";import"./DragAndDrop-Cf3fUj8C.js";import"./Text-DIiBg8cY.js";import"./useLabel-oY3WoAVJ.js";import"./index-BvypQtYJ.js";import"./Button-BySXh0l7.js";import"./RSPContexts-DznLQtVB.js";import"./VisuallyHidden-BO-OLnWP.js";import"./variants-Cu34kl6A.js";import"./KeyboardArrowDown-DsZyhcs8.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
