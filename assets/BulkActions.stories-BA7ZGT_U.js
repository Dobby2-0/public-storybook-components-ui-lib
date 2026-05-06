import{j as o}from"./iframe-CoP3LAwi.js";import{B as s}from"./BulkActions-BD4x8hpx.js";import{S as a}from"./Select-ChOz6Zsd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DATugxcW.js";import"./useHover-CUoT5zoT.js";import"./ButtonBase-FvF1_LPg.js";import"./Loader-BbStJC2s.js";import"./Tooltip-DOpJc7fV.js";import"./index-C9VKhSaY.js";import"./Button-MtuXdxwC.js";import"./SelectionIndicator-LddWnkdC.js";import"./index-85lfc85w.js";import"./index-DKc3ZT2X.js";import"./usePress-DfG_wu54.js";import"./Text-DvZZdpxs.js";import"./useCollection-Bb_bKlsE.js";import"./index-D1lnY5A6.js";import"./VisuallyHidden-CTBegAdx.js";import"./Autocomplete-Cecnsv7S.js";import"./Pill-6X5xBcQO.js";import"./SelectBase-CJBf4BIu.js";import"./Label-CsafV2Ke.js";import"./index-C2B7xrum.js";import"./Label-BCcWJ_kf.js";import"./ListBox-D1O_ipaN.js";import"./Check-MOrs6nAQ.js";import"./ListBox-Vq1x905t.js";import"./useLoadMoreSentinel-Ds2Eu_NW.js";import"./useLabel-5hZ-WMJt.js";import"./variants-IgXeAILn.js";import"./KeyboardArrowDown-0JC_UNZg.js";import"./filter-persistence-BoIT-GT-.js";import"./sha256-BqdKJwLI.js";const oo={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const to=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,to as __namedExportsOrder,oo as default};
