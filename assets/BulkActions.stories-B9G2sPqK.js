import{j as o}from"./iframe-CH7h3U8V.js";import{a as s}from"./BulkActions-hatfIczV.js";import{S as a}from"./Select-DMvm-WsH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcqqCYT8.js";import"./useHover-CZDmPdFS.js";import"./ButtonBase-K-oI949Y.js";import"./Loader-B_pZvink.js";import"./Tooltip-CcYb4GNc.js";import"./index-Bd1NXLw_.js";import"./Button-D6Gv_3si.js";import"./SelectionIndicator-JHbJ9Xkw.js";import"./index-J4h-2R7O.js";import"./index-BckUZTgf.js";import"./usePress-C8lzPp6I.js";import"./Text-BWkTEYgb.js";import"./useCollection-BOybYtgF.js";import"./index-D4A8TaiF.js";import"./VisuallyHidden-BCQz32Rf.js";import"./Autocomplete-CrI-MANm.js";import"./use-dobby-context-jETxyjt_.js";import"./sha256-DKdS_D-r.js";import"./Pill-DcOR1XRN.js";import"./SelectBase-DRekj_uA.js";import"./Label-CemdAsXo.js";import"./index-Bh7NUlUf.js";import"./Label-BoBMW2go.js";import"./ListBox-CS6omxNF.js";import"./Check-BQdXooUT.js";import"./ListBox-CrtFpsN0.js";import"./useLoadMoreSentinel-bRhNIs_q.js";import"./useLabel-DmZ2ujYB.js";import"./variants-gQP7Blko.js";import"./KeyboardArrowDown-7-ES_wIS.js";import"./filter-persistence-DCOpaI7o.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
