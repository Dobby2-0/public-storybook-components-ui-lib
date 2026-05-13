import{j as o}from"./iframe-B0rfYQab.js";import{a as s}from"./BulkActions-C4CT8n61.js";import{S as a}from"./Select-k_faexP8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BqlAje5b.js";import"./useHover-B0wlb5jZ.js";import"./ButtonBase-BLl9YrBx.js";import"./Loader-CLgQGqjj.js";import"./Tooltip-OesZ8xYk.js";import"./index-K9bwIEu-.js";import"./Button-DgG2pfGT.js";import"./SelectionIndicator-B3NOFxgm.js";import"./index-TCG1dwA7.js";import"./index-DUf7nOBV.js";import"./usePress-Chzq6C2u.js";import"./Text-VUh5tOod.js";import"./useCollection-BkTGr9ip.js";import"./index-Ce7v5vwO.js";import"./VisuallyHidden-BAYTT9k-.js";import"./Autocomplete-yNs0HOYW.js";import"./use-dobby-context-Bf0bTOyW.js";import"./sha256-D83yjLwa.js";import"./Pill-D0ciTlCp.js";import"./SelectBase-BuWLyvF8.js";import"./Label-LnSXxjL7.js";import"./index-Dw7Qz_nr.js";import"./Label-BOolh8pV.js";import"./ListBox-llRcBisL.js";import"./Check-DSm0uhTD.js";import"./ListBox-DkEqe_hd.js";import"./useLoadMoreSentinel-DKzkIAvp.js";import"./useLabel-BD7ZqNpF.js";import"./variants-BGyWdreT.js";import"./KeyboardArrowDown-DCW7eDtn.js";import"./filter-persistence-CaWztTH2.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
