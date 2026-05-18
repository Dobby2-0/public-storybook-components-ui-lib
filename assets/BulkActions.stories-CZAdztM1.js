import{j as o}from"./iframe-_r4zkpJs.js";import{a as s}from"./BulkActions-DNsLNei8.js";import{S as a}from"./Select-BST1tO1D.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DGDQYpfr.js";import"./useHover-COEADJmR.js";import"./ButtonBase-C3IiCU3a.js";import"./Loader-DsBTWAS4.js";import"./Tooltip-DEkAEmBS.js";import"./index-CxfYqbSx.js";import"./Button-eAueHdKQ.js";import"./SelectionIndicator-D6Hmcec7.js";import"./index-JtYlRQJF.js";import"./index-B8OF1t7r.js";import"./usePress-CFH9OGw_.js";import"./Text-yvX1_btQ.js";import"./useCollection-Br_iJuJX.js";import"./index-Cjhu8_Dj.js";import"./VisuallyHidden-DeiVJ0W9.js";import"./Autocomplete-B4NkeyXp.js";import"./use-dobby-context-DNS1BsF0.js";import"./sha256-CZu2pXMi.js";import"./Pill-B25dgnaL.js";import"./SelectBase-DJBv5m4B.js";import"./Label-CY7PA7Lr.js";import"./index-CygUwqqj.js";import"./Label-D3uPrXnv.js";import"./ListBox-4ph3IdUw.js";import"./Check-DBcKlBej.js";import"./ListBox-BlBHejXs.js";import"./useLoadMoreSentinel-CCqFvu7P.js";import"./useLabel-CElemXB4.js";import"./variants-59Dg2U1M.js";import"./KeyboardArrowDown-BD9WVQ8F.js";import"./filter-persistence-DIXTZaze.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
