import{j as o}from"./iframe-MJq7Ca43.js";import{a as s}from"./BulkActions-C_MG0Hdy.js";import{S as a}from"./Select-Cpug4IdQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DePpFx36.js";import"./useHover-DmV2Q5h3.js";import"./ButtonBase-h1ovOeWB.js";import"./Loader-DVFfm2se.js";import"./Tooltip-bk47HsbA.js";import"./index-9xACrRnl.js";import"./Button-BcXSeBnd.js";import"./SelectionIndicator-CbCD7aA9.js";import"./index-CiGCyFb1.js";import"./index-Bs0u_Ynm.js";import"./usePress-3rypOCUW.js";import"./Text-BegZfy3M.js";import"./useCollection-CRcdom6f.js";import"./index-D9qRENIQ.js";import"./VisuallyHidden-CngllTjG.js";import"./Autocomplete-qfJj0NgY.js";import"./use-dobby-context-CGh7yN5Q.js";import"./sha256-DDacMVWu.js";import"./Pill-CHfYq4x6.js";import"./SelectBase-DVRF9sMZ.js";import"./Label-DRe9hSxA.js";import"./index-wmYZoLgK.js";import"./Label-XPuM0PvF.js";import"./ListBox-BOTZdOFF.js";import"./Check-BXmhigVp.js";import"./ListBox-DaNIL0wI.js";import"./useLoadMoreSentinel-B3ySbmyB.js";import"./useLabel-DL0t2YJ4.js";import"./variants-C1Zo3luU.js";import"./KeyboardArrowDown-D-z3ed0F.js";import"./filter-persistence-DC9DoetQ.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
