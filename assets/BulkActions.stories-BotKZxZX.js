import{j as o}from"./iframe-JIF1kEUS.js";import{a as s}from"./BulkActions-sZRd4yYV.js";import{S as a}from"./Select-BGPssAsF.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C0-i6d46.js";import"./useHover-DHyb8Qdz.js";import"./ButtonBase-DdK6Oukh.js";import"./Loader-CgakJsoh.js";import"./Tooltip-D80vFL2Z.js";import"./index-ct-HgTBq.js";import"./Button-DyK302lY.js";import"./SelectionIndicator-DhcrL_40.js";import"./index-7LK-qAka.js";import"./index-DMNA0fIu.js";import"./usePress-DtXosapC.js";import"./Text-CMmeOcHc.js";import"./useCollection-B85HJTvZ.js";import"./index-DzXU7lvl.js";import"./VisuallyHidden-Do4qJvLF.js";import"./Autocomplete-B3kPQs_T.js";import"./use-dobby-context-Duc6L5i5.js";import"./sha256-DUMEM4d_.js";import"./Pill-wsbcAx_Q.js";import"./SelectBase-BRkX5QXu.js";import"./Label-Diz0UzNa.js";import"./index-CC5ChHha.js";import"./Label-CGwVSuR-.js";import"./ListBox-DO6YxmFY.js";import"./Check-DapBzBFU.js";import"./ListBox-Dvhi2JUp.js";import"./useLoadMoreSentinel-Cq2R_wKp.js";import"./useLabel-CL-fIXPD.js";import"./variants-DB4JeGes.js";import"./KeyboardArrowDown-tyaRR8Gn.js";import"./filter-persistence-CsNDGsz5.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
