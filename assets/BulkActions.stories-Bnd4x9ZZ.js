import{j as o}from"./iframe-BdY1lRWv.js";import{a as s}from"./BulkActions-Sz5-UkFr.js";import{S as a}from"./Select-BXK0m0Vy.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CgQETFts.js";import"./useHover-CUBzInxu.js";import"./ButtonBase-BkieoQPY.js";import"./Loader-DyLWZ8ly.js";import"./Tooltip-BFDV1U_F.js";import"./index-Bt0DYN8D.js";import"./Button-75WWo8RZ.js";import"./SelectionIndicator-Br3bhGkL.js";import"./index-BgNhbYIB.js";import"./index-DbcGKh2p.js";import"./usePress-BPO2qokg.js";import"./Text-DqLy25td.js";import"./useCollection-C_dqDgBS.js";import"./index-bgvXBjzW.js";import"./VisuallyHidden-PL1ZH4Yq.js";import"./Autocomplete-BUXynPt5.js";import"./use-dobby-context-0P3iKaKg.js";import"./sha256-DPK43qvY.js";import"./Pill-QShnpDHV.js";import"./SelectBase-BIQzhu7a.js";import"./Label-Bg_ZWENv.js";import"./index-B8rcKNz3.js";import"./Label-B5iOlpn6.js";import"./ListBox-CwwQgXzD.js";import"./Check-C5TKfXp0.js";import"./ListBox-X1ECuwpH.js";import"./useLoadMoreSentinel-IHDXAYgu.js";import"./useLabel-D0_JTdQy.js";import"./variants-Bm_Nl-ge.js";import"./KeyboardArrowDown-k5MjzNLk.js";import"./filter-persistence-CJ6OG3Ov.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
