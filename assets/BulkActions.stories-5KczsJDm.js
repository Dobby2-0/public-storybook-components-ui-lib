import{j as o}from"./iframe-DetaKL0_.js";import{a as s}from"./BulkActions-B5OArb5E.js";import{S as a}from"./Select-CHxuHWVa.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DzoXCd8v.js";import"./useHover-BeS5e-IQ.js";import"./ButtonBase-DkY4nu_S.js";import"./Loader-BRWONZMQ.js";import"./Tooltip-C4qWXyn2.js";import"./index-BLrhUFFZ.js";import"./Button-Czzx2GC3.js";import"./SelectionIndicator-C0c_pcIB.js";import"./index-CW5rNLKP.js";import"./index-CPpoh3b8.js";import"./usePress-CZ1xYj4q.js";import"./Text-ByQgp3qy.js";import"./useCollection-f1aOX4n3.js";import"./index-nSRzIFah.js";import"./VisuallyHidden-DFs_nEgu.js";import"./Autocomplete-BqQtBmhO.js";import"./use-dobby-context-Dxta_jnh.js";import"./sha256-D9wVjpbe.js";import"./Pill-okCtpVED.js";import"./SelectBase-BuAOdrXd.js";import"./Label-BrRaIPZ6.js";import"./index-DxT66sOS.js";import"./Label-D0r_MkLv.js";import"./ListBox-pXm3A-w4.js";import"./Check-mBRJ3Ynd.js";import"./ListBox-CNtHPtqH.js";import"./useLoadMoreSentinel-XsYur6vV.js";import"./useLabel-C0Y-ULtJ.js";import"./variants--GfA6NPc.js";import"./KeyboardArrowDown-cG2prr1O.js";import"./filter-persistence-Cp5hBmV8.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
