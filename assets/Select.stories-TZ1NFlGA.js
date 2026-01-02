import{S as L}from"./Select-CN7TIdCl.js";import"./iframe-Cf59BB2m.js";import"./preload-helper-Dp1pzeXC.js";import"./Pill-B_yM7vG5.js";import"./SelectBase-RvbGQcTX.js";import"./Label-BNkoYuny.js";import"./index-CWtkQZMw.js";import"./index-Cv7hAmAe.js";import"./index-BYq1RcUP.js";import"./Label-KLsFGmd8.js";import"./utils-7d9ue3Ya.js";import"./Text-DUhSASD0.js";import"./ListBox-h-dWPs5x.js";import"./Loader-CHZVrFVF.js";import"./Check-DtwMPYQS.js";import"./Separator-D-cZvXOs.js";import"./usePress-DHEYd569.js";import"./FocusScope-Hb3BODMY.js";import"./index-BgxwcrQu.js";import"./ListBox-DDoWKUg8.js";import"./DragAndDrop-Cq6WjINL.js";import"./useLabel-CLWpCBq7.js";import"./index-_zVXbRPB.js";import"./Button-D5zpqd4m.js";import"./RSPContexts-D3i3zFQc.js";import"./VisuallyHidden-DYdxsg1X.js";import"./variants-Bgnl3evm.js";import"./KeyboardArrowDown-CkpxCp9D.js";const X={component:L},e={args:{placeholder:"Select an item",items:[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],children:w=>w.label}},r={args:{...e.args,label:"Status",description:"Select a status"}},a={args:{...r.args,isDisabled:!0}},t={args:{...e.args,selectionMode:"multiple"}},s={args:{...e.args,loading:!0,className:"w-52"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
