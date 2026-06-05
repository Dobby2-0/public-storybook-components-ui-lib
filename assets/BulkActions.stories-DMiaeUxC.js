import{j as o}from"./iframe-D47Q0F9X.js";import{a as s}from"./BulkActions-Bb8NRog_.js";import{S as a}from"./Select-CY4dX2Rc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C4umv2Ak.js";import"./useHover-pLr5c3Hy.js";import"./ButtonBase-C1oxplRw.js";import"./Loader-CLMOnD55.js";import"./Tooltip-B2pnY3ao.js";import"./index-FReOJIC3.js";import"./Button-CeGI_FXZ.js";import"./SelectionIndicator-rjQEW9qv.js";import"./index-D1wSKHgt.js";import"./index-hDndN7gJ.js";import"./usePress-GQmnMZtx.js";import"./Text-CqcZmn8Z.js";import"./useCollection-Clj363tL.js";import"./index--uK4uYFc.js";import"./VisuallyHidden-CJf2mle4.js";import"./Autocomplete-CB5pSjOe.js";import"./use-dobby-context-BGIYi2D0.js";import"./sha256-Cd8QDyRt.js";import"./Pill-CWgtPTGv.js";import"./SelectBase-DdLE_6Aa.js";import"./Label-Ctz1Gmsq.js";import"./index-unM82PDI.js";import"./Label-BPN4USmQ.js";import"./ListBox-DpEnRpOT.js";import"./Check-DYB2kqiC.js";import"./ListBox-BQ_ff7Dm.js";import"./useLoadMoreSentinel-apYGzlK-.js";import"./useLabel-DrZJMdWh.js";import"./variants-DCMXHoGR.js";import"./KeyboardArrowDown-CmUqbnk9.js";import"./filter-persistence-ng8r10gN.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
