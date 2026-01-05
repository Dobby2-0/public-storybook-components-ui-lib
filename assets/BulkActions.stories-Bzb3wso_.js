import{j as o}from"./iframe-Buf-yu1G.js";import{B as s}from"./BulkActions-DTlGLfw9.js";import{S as a}from"./Select-BRrZq2Xa.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BKUHKe7M.js";import"./utils-DsZIVvgi.js";import"./ButtonBase-B5E3aHsH.js";import"./Loader-ClqT5cN-.js";import"./Tooltip-C_80Ipr0.js";import"./index-h9AQGklB.js";import"./Button-C5gGSRMv.js";import"./FocusScope-8F9t37jv.js";import"./Text-B3Wc_O3W.js";import"./usePress-ClRLR1LW.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./RSPContexts-Co3FhSyY.js";import"./Separator-D85nm_WG.js";import"./index-DZa7hcpo.js";import"./VisuallyHidden-DxSDzN3H.js";import"./Pill-fJ66MNf_.js";import"./SelectBase-DuNSvbGx.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./Label-BzDjaSQM.js";import"./ListBox-B5_uwrzv.js";import"./Check-COKk3Iux.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./variants-BqGC_269.js";import"./KeyboardArrowDown-BhgScPNQ.js";const Z={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    count: 1,
    actions: actions,
    defaultActionId: actions[0].id
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var A,g,b;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,h,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 2,
    children: <div className="flex items-center gap-2.5">
        <Select placeholder="Set status" items={[]} className={BulkActions.selectClassNames} />
        <p>to</p>
        <Select placeholder="something" items={[]} className={BulkActions.selectClassNames} />
      </div>
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const $=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,$ as __namedExportsOrder,Z as default};
