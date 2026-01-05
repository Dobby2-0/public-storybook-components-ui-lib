import{S as L}from"./Select-BRrZq2Xa.js";import"./iframe-Buf-yu1G.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-fJ66MNf_.js";import"./SelectBase-DuNSvbGx.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./Label-BzDjaSQM.js";import"./utils-DsZIVvgi.js";import"./Text-B3Wc_O3W.js";import"./ListBox-B5_uwrzv.js";import"./Loader-ClqT5cN-.js";import"./Check-COKk3Iux.js";import"./Separator-D85nm_WG.js";import"./usePress-ClRLR1LW.js";import"./FocusScope-8F9t37jv.js";import"./index-DZa7hcpo.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./index-h9AQGklB.js";import"./Button-C5gGSRMv.js";import"./RSPContexts-Co3FhSyY.js";import"./VisuallyHidden-DxSDzN3H.js";import"./variants-BqGC_269.js";import"./KeyboardArrowDown-BhgScPNQ.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
