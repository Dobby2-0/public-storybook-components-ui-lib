import{j as o}from"./iframe-D2frS8Au.js";import{a as s}from"./BulkActions-C3V2mtdU.js";import{S as a}from"./Select-7E1_mUAL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DmGFltXj.js";import"./useHover-DYO4x4Gp.js";import"./ButtonBase-Dzf8z55z.js";import"./Loader-DS9ZjgpV.js";import"./Tooltip-DN16hxLp.js";import"./index-BSC9xO6Q.js";import"./Button-4q-u3Eq1.js";import"./SelectionIndicator-BNK84zg9.js";import"./index-CRD6RS15.js";import"./index-zyLV6FUX.js";import"./usePress-CNDDzhH8.js";import"./Text-DXPLpS9a.js";import"./useCollection-P5am-mv3.js";import"./index-BC_OFc4B.js";import"./VisuallyHidden-CEPXGV9t.js";import"./Autocomplete-nkGLWQyL.js";import"./use-dobby-context-CWTwE2X2.js";import"./sha256-E9qCjXim.js";import"./Pill-CIzJvcvy.js";import"./SelectBase-BImg2GPW.js";import"./Label-CcCfPh60.js";import"./index-C6XEncsV.js";import"./Label-D83qOpUB.js";import"./ListBox-wrXRWc4v.js";import"./Check-DGc1qmvX.js";import"./ListBox-B82J47RM.js";import"./useLoadMoreSentinel-CIncdtsp.js";import"./useLabel-IOUK4MD-.js";import"./variants-BZSjgDoh.js";import"./KeyboardArrowDown-CxrsIPye.js";import"./filter-persistence-B4sr0-YL.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
