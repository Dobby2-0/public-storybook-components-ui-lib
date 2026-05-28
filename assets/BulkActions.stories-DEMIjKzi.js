import{j as o}from"./iframe-DtEeAOsY.js";import{a as s}from"./BulkActions-DxXOkGrl.js";import{S as a}from"./Select-l6Hru4hO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BgXILaMl.js";import"./useHover-CDGgfiE1.js";import"./ButtonBase-lY8n4LNB.js";import"./Loader-B8XMVN5l.js";import"./Tooltip-BKfRHLdW.js";import"./index-DiE88bLl.js";import"./Button-BcJPzPMR.js";import"./SelectionIndicator-Ch86_HkK.js";import"./index-CMETJZIF.js";import"./index-DxBlrczG.js";import"./usePress-DAUHRHfO.js";import"./Text-CP_uTj70.js";import"./useCollection-DLgXqFLX.js";import"./index-DSi8nGqe.js";import"./VisuallyHidden-YL2KB_ox.js";import"./Autocomplete-Y1Zyi6W0.js";import"./use-dobby-context-SztQ2Rb6.js";import"./sha256-CRGIGSgr.js";import"./Pill-CqUtF4hW.js";import"./SelectBase-B2KbgeKX.js";import"./Label-BemCfWFK.js";import"./index-DxFi0VvR.js";import"./Label-DNXJYxmR.js";import"./ListBox-BISCuuPn.js";import"./Check-_vR4CCIL.js";import"./ListBox-DnHXL0QJ.js";import"./useLoadMoreSentinel-_2RwRX80.js";import"./useLabel-BVhVSlwk.js";import"./variants-DNhQPKTP.js";import"./KeyboardArrowDown-RUP8fZt6.js";import"./filter-persistence-D5UBtbDb.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
