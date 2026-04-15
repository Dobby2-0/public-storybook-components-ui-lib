import{j as o}from"./iframe-BCvx5aIw.js";import{B as s}from"./BulkActions-8w2OhxDK.js";import{S as a}from"./Select-Cy0m9gdW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BSFY9fVT.js";import"./utils-DT55uSEz.js";import"./ButtonBase-DrZK1uMj.js";import"./Loader-DpWblGY1.js";import"./Tooltip-D-8X45XJ.js";import"./index-ChnMGnWF.js";import"./Button-C0e0lcau.js";import"./FocusScope-B5NpOBFv.js";import"./Text-CmDC0Fcx.js";import"./usePress-FVxBmJ3a.js";import"./index-CV_sOKXw.js";import"./index-DOmqlDl7.js";import"./RSPContexts-CDt80yYI.js";import"./Separator-DLrh4vZm.js";import"./index-DTcX34cl.js";import"./VisuallyHidden-CO0T0OMH.js";import"./Pill-DpPdkJjw.js";import"./SelectBase-Le4Pmjiv.js";import"./sha256-D06PZJCe.js";import"./Label-Dl_LIg0c.js";import"./index-04bXVge4.js";import"./Label-0n7RcqQx.js";import"./ListBox-GNdrQN2B.js";import"./Check-ByuJ0HYf.js";import"./ListBox-DLrH3TOV.js";import"./DragAndDrop-BY2nA29y.js";import"./useLabel-3dDsEzBm.js";import"./variants-BFTN77EB.js";import"./KeyboardArrowDown-Co9IMZ31.js";const $={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var A,b,g;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,h,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    count: 2,
    children: <div className="flex items-center gap-2.5">
        <Select placeholder="Set status" items={[]} className={BulkActions.selectClassNames} />
        <p>to</p>
        <Select placeholder="something" items={[]} className={BulkActions.selectClassNames} />
        <BulkActions.ConfirmationButton disabled={true} tooltipContent="Enable button when selection is valid" onConfirm={() => undefined} />
      </div>
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const oo=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,oo as __namedExportsOrder,$ as default};
