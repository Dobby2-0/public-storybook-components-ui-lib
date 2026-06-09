import{j as o}from"./iframe-BiaKCnFg.js";import{a as s}from"./BulkActions-Cg87eZeT.js";import{S as a}from"./Select-DErybrw9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-0stNLDql.js";import"./useHover-D9DS5yA7.js";import"./ButtonBase-CLRY0Lb3.js";import"./Loader-ClTVtDl4.js";import"./Tooltip-CTBiM07k.js";import"./index-CSrwbFWy.js";import"./Button-WvY0-6h3.js";import"./SelectionIndicator-DrPVbDEG.js";import"./index-BuyXEN_o.js";import"./index-DS6qTNge.js";import"./usePress-DxWS_a10.js";import"./Text-B7eeu1tm.js";import"./useCollection-BKo-JHz_.js";import"./index-D6yxA-bS.js";import"./VisuallyHidden-BMrtBig1.js";import"./Autocomplete-Crh9ZW9_.js";import"./use-dobby-context-WqJg_JXP.js";import"./sha256-DTxMKfYp.js";import"./Pill-Yqf9-rsz.js";import"./SelectBase-Bevhpolu.js";import"./Label-oyWkNGh0.js";import"./index-DtT-FGCI.js";import"./Label-B-Scc7jx.js";import"./ListBox-CsmO4l-W.js";import"./Check-DmKiK_tG.js";import"./ListBox-CARPtdUg.js";import"./useLoadMoreSentinel-BizGUVWT.js";import"./useLabel-DM5gXb4l.js";import"./variants-dQmToWHE.js";import"./KeyboardArrowDown-JVD3mMor.js";import"./filter-persistence-CUbWU1IC.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
