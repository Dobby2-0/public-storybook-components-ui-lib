import{j as o}from"./iframe-CWPnyXiF.js";import{a as s}from"./BulkActions-C68Z-mHM.js";import{S as a}from"./Select-BfERwp0Z.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BAwAwK9L.js";import"./useHover-CMUc1mlA.js";import"./ButtonBase-pB0rpVQP.js";import"./Loader-CT64ro5e.js";import"./Tooltip-BlYj_nD2.js";import"./index-B4E4YJ4E.js";import"./Button-BGtGh5Ga.js";import"./SelectionIndicator-D5OlXxU3.js";import"./index-BPmBLuLs.js";import"./index-DhHbND3A.js";import"./usePress-B-EGBYnJ.js";import"./Text-CZqWnfdj.js";import"./useCollection-st_MUtLe.js";import"./index-QAmlznd9.js";import"./VisuallyHidden-BjVEAqo-.js";import"./Autocomplete-C4GIrfvA.js";import"./use-dobby-context-DbflKHy4.js";import"./sha256-Bjrv8gy-.js";import"./Pill-ahlIUWlJ.js";import"./SelectBase-6wWOOH1d.js";import"./Label-l5SphkYs.js";import"./index-DSwJ-WTm.js";import"./Label-BAvWoAhT.js";import"./ListBox-DrkDleTs.js";import"./Check-CSzrKaPY.js";import"./ListBox-B89ZhFG_.js";import"./useLoadMoreSentinel-Tb_koUDW.js";import"./useLabel-Cpoljd6s.js";import"./variants-UQaP4fRY.js";import"./KeyboardArrowDown-Dvv_DDHb.js";import"./filter-persistence-BvBxMton.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
