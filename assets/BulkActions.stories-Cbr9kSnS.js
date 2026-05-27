import{j as o}from"./iframe-BtD0yojv.js";import{a as s}from"./BulkActions-Dkd5NGIp.js";import{S as a}from"./Select-CkwYrgwO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BeKZJwGO.js";import"./useHover-BLqs48I6.js";import"./ButtonBase-Cqy9kFy0.js";import"./Loader-CkptIMZK.js";import"./Tooltip-dk5hc1rA.js";import"./index-Dj6M_dyv.js";import"./Button-DEtrjSXc.js";import"./SelectionIndicator-Cz8uM6x8.js";import"./index-DvT1PO7t.js";import"./index-CSLKQan_.js";import"./usePress-Bs4ZcAYp.js";import"./Text-7llEMWV5.js";import"./useCollection-u0gpJYDj.js";import"./index-DwjBt-AS.js";import"./VisuallyHidden-DTwKOUCR.js";import"./Autocomplete-B3ysVGn7.js";import"./use-dobby-context-DPlS2a7_.js";import"./sha256-D5DhjhLk.js";import"./Pill-5vIfNsq1.js";import"./SelectBase-D9MHv8rl.js";import"./Label-B1HN9bsT.js";import"./index-C1oPBqtq.js";import"./Label-C5OwSjf_.js";import"./ListBox-2eJhA-jm.js";import"./Check-B1d_Ml0Z.js";import"./ListBox-DNfm3oVS.js";import"./useLoadMoreSentinel-D_kMS8Vi.js";import"./useLabel-B87Ux1e3.js";import"./variants-CxBEkkHt.js";import"./KeyboardArrowDown-1LpwU3Gn.js";import"./filter-persistence-Hl5dXqtM.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
