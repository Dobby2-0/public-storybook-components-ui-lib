import{j as o}from"./iframe-C3oNYoGv.js";import{a as s}from"./BulkActions-2w3728Vj.js";import{S as a}from"./Select-2f395rd5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CVZiiT53.js";import"./useHover-DVKaX_QJ.js";import"./ButtonBase-DQ24H5Nv.js";import"./Loader-BS176VkB.js";import"./Tooltip-C0F-XsOI.js";import"./index-DE9NX_kI.js";import"./Button-BMxCuimO.js";import"./SelectionIndicator-DyF4S_O7.js";import"./index-3rpGV-RY.js";import"./index-CGo15r6A.js";import"./usePress-D0IetYL2.js";import"./Text-DUmgebTj.js";import"./useCollection-BTVCbxvc.js";import"./index-DypK0npo.js";import"./VisuallyHidden-DY-Y6Z4l.js";import"./Autocomplete-bkept6zj.js";import"./use-dobby-context-DkeuRSaw.js";import"./sha256-0xo2dyVX.js";import"./Pill-C3sT1d7S.js";import"./SelectBase-TPE-6p6R.js";import"./Label-CdQr_ZgJ.js";import"./index-D7Isqh1H.js";import"./Label-Bd9YHYxX.js";import"./ListBox-U6sMwKS2.js";import"./Check-mAR_QMe4.js";import"./ListBox-BvaKUkgI.js";import"./useLoadMoreSentinel-BDok7IrZ.js";import"./useLabel-C1EHHGsM.js";import"./variants-D78-o6ii.js";import"./KeyboardArrowDown-DONNFgEK.js";import"./filter-persistence-C0i969z8.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
