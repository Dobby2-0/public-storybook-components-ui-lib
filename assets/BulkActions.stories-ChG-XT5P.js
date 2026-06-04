import{j as o}from"./iframe-DPohime8.js";import{a as s}from"./BulkActions-BqQfmLFA.js";import{S as a}from"./Select-C-4AIj2T.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BDFc_cyK.js";import"./useHover-BYwTxAz8.js";import"./ButtonBase-d8DrokVR.js";import"./Loader-BL_wwx-u.js";import"./Tooltip-CPcJgKEX.js";import"./index-lcHZFMS1.js";import"./Button-aHtnGejH.js";import"./SelectionIndicator-D216NoSG.js";import"./index-Bi6UBOSl.js";import"./index-DIAQTv3_.js";import"./usePress-BQV1sqTB.js";import"./Text-B_z0W9j8.js";import"./useCollection-DLmRJA8w.js";import"./index-5TNEXpFx.js";import"./VisuallyHidden-BG6qwqyX.js";import"./Autocomplete-CyQFeyxK.js";import"./use-dobby-context-B4gW2Qip.js";import"./sha256-DvYVrOsX.js";import"./Pill-D9MQQfVn.js";import"./SelectBase-DgJmzJg_.js";import"./Label-j8-T_7Xx.js";import"./index-BjZtawmV.js";import"./Label-CmUhqHG_.js";import"./ListBox-CD5NshBb.js";import"./Check-B2fJitGt.js";import"./ListBox-GHwYqJeJ.js";import"./useLoadMoreSentinel-_qITs77c.js";import"./useLabel-CJu-1Hax.js";import"./variants-w3T-bNLD.js";import"./KeyboardArrowDown-o9-obP08.js";import"./filter-persistence-BSVp_iV1.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const eo=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,eo as __namedExportsOrder,to as default};
