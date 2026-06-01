import{j as o}from"./iframe-BW_3WW6f.js";import{a as s}from"./BulkActions-BYc8Wxf0.js";import{S as a}from"./Select-Cl89HntU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-clvkrcg3.js";import"./useHover-CgLCGCG0.js";import"./ButtonBase-DCKa9TsH.js";import"./Loader-C4vcv2Oh.js";import"./Tooltip-BpkQD5VI.js";import"./index-CEgAeWm5.js";import"./Button-Bv4DQJIQ.js";import"./SelectionIndicator-C31Q7HLG.js";import"./index-Ba9P7hMT.js";import"./index-CJoG7HbN.js";import"./usePress-Dl1N0Gd3.js";import"./Text-DWV1J4yc.js";import"./useCollection-Bmw2zVKn.js";import"./index-BK1B_SrB.js";import"./VisuallyHidden--9xNH1Jp.js";import"./Autocomplete-KJUOH_jb.js";import"./use-dobby-context-nwd9LFGN.js";import"./sha256-CQheEuXi.js";import"./Pill-8Ku8kOT5.js";import"./SelectBase-Bldz4ndX.js";import"./Label-Dj_IUe9R.js";import"./index-BFzozxWJ.js";import"./Label-CPJWrBWs.js";import"./ListBox-ByZxSDeI.js";import"./Check-CV-mrvLK.js";import"./ListBox-CTu9sTag.js";import"./useLoadMoreSentinel-Cw9UpRhN.js";import"./useLabel-1-0Qhyzi.js";import"./variants-DXiDO3Bx.js";import"./KeyboardArrowDown-CLOjLcjL.js";import"./filter-persistence-V-IMFKvI.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
