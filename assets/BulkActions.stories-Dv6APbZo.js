import{B as u}from"./BulkActions-B3Dft-9D.js";import"./iframe-Cf59BB2m.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BHfJEisQ.js";import"./utils-7d9ue3Ya.js";import"./ButtonBase-Dn4dDKa9.js";import"./Loader-CHZVrFVF.js";import"./Tooltip-DAm4L83o.js";import"./index-_zVXbRPB.js";import"./Button-D5zpqd4m.js";import"./FocusScope-Hb3BODMY.js";import"./Text-DUhSASD0.js";import"./usePress-DHEYd569.js";import"./index-Cv7hAmAe.js";import"./index-BYq1RcUP.js";import"./RSPContexts-D3i3zFQc.js";import"./Separator-D-cZvXOs.js";import"./index-BgxwcrQu.js";import"./VisuallyHidden-DYdxsg1X.js";import"./Select-CN7TIdCl.js";import"./Pill-B_yM7vG5.js";import"./SelectBase-RvbGQcTX.js";import"./Label-BNkoYuny.js";import"./index-CWtkQZMw.js";import"./Label-KLsFGmd8.js";import"./ListBox-h-dWPs5x.js";import"./Check-DtwMPYQS.js";import"./ListBox-DDoWKUg8.js";import"./DragAndDrop-Cq6WjINL.js";import"./useLabel-CLWpCBq7.js";import"./variants-Bgnl3evm.js";import"./KeyboardArrowDown-CkpxCp9D.js";const Q={component:u},o={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},i=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],t={args:{count:1,actions:i,defaultActionId:i[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}};var e,c,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: [{
      id: "action-1",
      label: "Action 1",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 1")
    }, {
      id: "action-2",
      label: "Action 2",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 2")
    }],
    defaultActionId: undefined
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: actions,
    defaultActionId: actions[0].id
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: [{
      id: "action-1",
      label: "Action 1",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 1")
    }, {
      id: "action-2",
      label: "Action 2",
      // eslint-disable-next-line no-console
      action: () => console.log("Action 2"),
      disabled: true,
      disabledReason: "We don't want you to do this"
    }],
    defaultActionId: undefined
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=["Default","DefaultSelectedAction","DisabledOption"];export{o as Default,t as DefaultSelectedAction,n as DisabledOption,T as __namedExportsOrder,Q as default};
