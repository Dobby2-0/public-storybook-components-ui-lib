import{j as o}from"./iframe-CplAapsX.js";import{B as s}from"./BulkActions-DvwyDT1s.js";import{S as a}from"./Select-DvmBaKWA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-yuAv3Z_P.js";import"./utils-BP1FQsAo.js";import"./ButtonBase-ZUXJNHQV.js";import"./Loader-DO4ogSHn.js";import"./Tooltip-DHBwmVO4.js";import"./index-DxhgBWXY.js";import"./Button-BmwiX6Hk.js";import"./FocusScope-Co7oTpXY.js";import"./Text-jeQCP_Xd.js";import"./usePress-DKuUVNPj.js";import"./index-CsyXmV7m.js";import"./index-RIj34x3n.js";import"./RSPContexts-B7LFnw2w.js";import"./Separator-Bj5eosGN.js";import"./index-1qNirS9T.js";import"./VisuallyHidden-BtQ6MD1n.js";import"./Pill-Gd39E3vN.js";import"./SelectBase-CPv_W1Nd.js";import"./Label-BmoMV9je.js";import"./index-BKBntAAk.js";import"./Label-CDhDbCJZ.js";import"./ListBox-CApBvx9-.js";import"./Check-CBSnSxms.js";import"./ListBox-BozHGlPt.js";import"./DragAndDrop-DgxJg4d0.js";import"./useLabel-BrOdjh3H.js";import"./variants-CB0fdHXi.js";import"./KeyboardArrowDown-D7zVXJq7.js";const Z={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const $=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,$ as __namedExportsOrder,Z as default};
