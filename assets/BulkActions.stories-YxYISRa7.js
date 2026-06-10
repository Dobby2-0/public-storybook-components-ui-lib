import{j as o}from"./iframe-BlVgBvDK.js";import{a as s}from"./BulkActions-BVgiT5AS.js";import{S as a}from"./Select-DXIpD63Q.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-KHPRXXdF.js";import"./useHover-BqMw7-dA.js";import"./ButtonBase-C-A6mNvO.js";import"./Loader-0-t502rO.js";import"./Tooltip-C20wWrBr.js";import"./index-CmUdzAco.js";import"./Button-BfpbnT7E.js";import"./SelectionIndicator-DK6Qs-AS.js";import"./index-DJ1sWabw.js";import"./index-C_2k30VU.js";import"./usePress-BCqabgTu.js";import"./Text-BFJDapLu.js";import"./useCollection-BNS_HcEo.js";import"./index-BZN6Tiky.js";import"./VisuallyHidden-Cr-QpJx_.js";import"./Autocomplete-ChNW0oCv.js";import"./use-dobby-context-ClRQF0Qd.js";import"./sha256-CXqT_DBa.js";import"./Pill-Btq7gRdN.js";import"./SelectBase-Cf-DT05a.js";import"./Label-4guhAsxS.js";import"./index-DqlSq4aw.js";import"./Label-DAth4fqM.js";import"./ListBox-CHfOlGrS.js";import"./Check-12ebBL0s.js";import"./ListBox-vcMBqIVB.js";import"./useLoadMoreSentinel--PXD2cJs.js";import"./useLabel--8UZYazZ.js";import"./variants-CiO8zhP-.js";import"./KeyboardArrowDown-DKGGPISO.js";import"./filter-persistence-DnfyP9K8.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
