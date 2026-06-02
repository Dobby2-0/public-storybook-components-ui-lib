import{j as o}from"./iframe-CaZFVN_9.js";import{a as s}from"./BulkActions-HQae8Gw9.js";import{S as a}from"./Select-zswh3EqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bo3XKLn4.js";import"./useHover-BoXWJKk9.js";import"./ButtonBase-B9ZVMJr2.js";import"./Loader-CNtiz6lD.js";import"./Tooltip-BOPypVNs.js";import"./index-HlvUt4pR.js";import"./Button-DNYoyAmb.js";import"./SelectionIndicator-BciKvVnt.js";import"./index-uwxQVn1y.js";import"./index-CLCrd1v8.js";import"./usePress-DkSoGaAR.js";import"./Text-DgX_7obh.js";import"./useCollection-CVV0kPR0.js";import"./index-v4jCvFNp.js";import"./VisuallyHidden-Di4IygHH.js";import"./Autocomplete-CDL1J41e.js";import"./use-dobby-context-BgE6PRC4.js";import"./sha256-DDZglZav.js";import"./Pill-HIRp9urv.js";import"./SelectBase-CEdbQ6Ui.js";import"./Label-DLnJIsa_.js";import"./index-DqkFhy5l.js";import"./Label-CdWlHfYN.js";import"./ListBox-XN85NI9m.js";import"./Check-CF41mqP0.js";import"./ListBox-AWFh8cZ2.js";import"./useLoadMoreSentinel-Bskv3Dd7.js";import"./useLabel-BNROn0qh.js";import"./variants-zH1Mt9zZ.js";import"./KeyboardArrowDown-BpD4sA3J.js";import"./filter-persistence-Ca142Tl7.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
