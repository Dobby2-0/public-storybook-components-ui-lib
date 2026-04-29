import{j as o}from"./iframe-Bgm5THKt.js";import{B as s}from"./BulkActions-DYUmqDCH.js";import{S as a}from"./Select-CkpBODw-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DHR9HFf0.js";import"./utils-Bq8izQar.js";import"./ButtonBase-BL0ygiPQ.js";import"./Loader-ceO3C9gX.js";import"./Tooltip-BFyfTSGh.js";import"./index-DdSNQObl.js";import"./Button-CAEc_581.js";import"./FocusScope-D9Rrbq_B.js";import"./Text-Fb6kCMEk.js";import"./usePress-CGoonp27.js";import"./index-fbh5EQGT.js";import"./index-I_M9ki7z.js";import"./RSPContexts-wKeyUQal.js";import"./Separator-D-JgQQMZ.js";import"./index-DARzPVSa.js";import"./VisuallyHidden-BOG_O0ss.js";import"./Pill-CvhraYzZ.js";import"./SelectBase-DZwWD1Kf.js";import"./sha256-CTXWHPJT.js";import"./Label-Ctzxm2e7.js";import"./index-9i4voHfM.js";import"./Label-5VvRGiIE.js";import"./ListBox-Ds1dQMTU.js";import"./Check-CFe97tmy.js";import"./ListBox-DERZmFuE.js";import"./DragAndDrop-BMaBBvXg.js";import"./useLabel-EJobFHlw.js";import"./variants-0KyJ753r.js";import"./KeyboardArrowDown-BdatrPOP.js";const $={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const oo=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,oo as __namedExportsOrder,$ as default};
