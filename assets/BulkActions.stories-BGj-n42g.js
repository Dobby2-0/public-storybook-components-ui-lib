import{j as o}from"./iframe-C1WlA_sY.js";import{B as s}from"./BulkActions-fZXtzH0K.js";import{S as a}from"./Select-DAPksUmX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BYsnAU19.js";import"./utils-BOdOtusu.js";import"./ButtonBase-DIeRkI3C.js";import"./Loader-CKANN067.js";import"./Tooltip-CdjRkZRE.js";import"./index-DBm6DM46.js";import"./Button-C5TQC8Oa.js";import"./FocusScope-BYCV_QfQ.js";import"./Text-Dr8JR3Hw.js";import"./usePress-BzRlJuKw.js";import"./index-BuXA5Et1.js";import"./index-DA45O8xF.js";import"./RSPContexts-CpK07g3-.js";import"./Separator-CT2jiVXP.js";import"./index-CGt66q3u.js";import"./VisuallyHidden-CQg0wCvx.js";import"./Pill-CDwSasNx.js";import"./SelectBase-D2rOiX7h.js";import"./sha256--kUdW-Qc.js";import"./Label-BSwcmczL.js";import"./index-Bwv-tviQ.js";import"./Label-BmTgxGGY.js";import"./ListBox-CWSX9QwH.js";import"./Check-CnS3B5P0.js";import"./ListBox-wjqhOybS.js";import"./DragAndDrop-DFfJixUn.js";import"./useLabel-BNugXr2z.js";import"./variants-MEBY1FFp.js";import"./KeyboardArrowDown-BMnQhi0Q.js";const $={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
