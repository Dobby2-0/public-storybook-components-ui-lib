import{j as o}from"./iframe-Haw1DKUx.js";import{a as s}from"./BulkActions-1g9-f_n5.js";import{S as a}from"./Select-Bz7Dmxjp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DaS0z1mH.js";import"./useHover-DIQUIVDf.js";import"./ButtonBase-CHyMSKuz.js";import"./Loader-D0e9TvUB.js";import"./Tooltip-fPaz-MUX.js";import"./index-BAJwUQ5N.js";import"./Button-CPvpyjbX.js";import"./SelectionIndicator-B7wHAUEF.js";import"./index-VDfa9Yd7.js";import"./index-_u_5_8Wm.js";import"./usePress-BNYHbE7L.js";import"./Text-CdO_0FZU.js";import"./useCollection-BvUTVi0Q.js";import"./index-Cqz-IwDh.js";import"./VisuallyHidden-c6KQbon4.js";import"./Autocomplete-C-oUtxto.js";import"./use-dobby-context-Drfopp6o.js";import"./sha256-DKf_Qkf5.js";import"./Pill-B4yeB9BB.js";import"./SelectBase-BXI1ZtRy.js";import"./Label-BLPFtN-i.js";import"./index-ktF_j8pW.js";import"./Label-DGPd48RE.js";import"./ListBox-ODSPyozM.js";import"./Check-CuV6tyPR.js";import"./ListBox-DDa4asyx.js";import"./useLoadMoreSentinel-D7zhB2Dp.js";import"./useLabel-joTM3rHc.js";import"./variants-BzTFXJwJ.js";import"./KeyboardArrowDown-B2GsZAZp.js";import"./filter-persistence-OMSveu6C.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
