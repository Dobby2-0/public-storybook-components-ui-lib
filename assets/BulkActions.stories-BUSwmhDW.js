import{j as o}from"./iframe-C1vGzIN0.js";import{a as s}from"./BulkActions-BMWcNjYB.js";import{S as a}from"./Select-BLpDjdCe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BF5L9ZJK.js";import"./useHover-CujHnvyO.js";import"./ButtonBase-FJRpYA1s.js";import"./Loader-DeSGl8VP.js";import"./Tooltip-Dyi0MNPf.js";import"./index-DUADmaoI.js";import"./Button-CF1X--Bh.js";import"./SelectionIndicator-B5x0N5VQ.js";import"./index-DWpAU5Ra.js";import"./index-Bq1BVUq9.js";import"./usePress-BAgfS9mT.js";import"./Text-DmyGS1iW.js";import"./useCollection-CBaKeoa2.js";import"./index-9CnBZ64x.js";import"./VisuallyHidden-Bsz4IK0H.js";import"./Autocomplete-Coy3uqOG.js";import"./use-dobby-context-DAt5h7EL.js";import"./sha256-BWw-3Xd0.js";import"./Pill-C3vWeziO.js";import"./SelectBase-CdjU9ILs.js";import"./Label-sK-vXOZr.js";import"./index-TjFAGuW3.js";import"./Label-eOnzYb70.js";import"./ListBox-rItGe8Uz.js";import"./Check-BRVasYt7.js";import"./ListBox-BrNGDLjj.js";import"./useLoadMoreSentinel-Dt7kRm6L.js";import"./useLabel-CJl1ityF.js";import"./variants-izUn93u2.js";import"./KeyboardArrowDown-CXI07uH6.js";import"./filter-persistence-DimCvJVP.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
