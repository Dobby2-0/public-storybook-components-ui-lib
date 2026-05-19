import{j as o}from"./iframe-BuQZYLjZ.js";import{a as s}from"./BulkActions-DRHDi6Qe.js";import{S as a}from"./Select-YtIG7dLM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dxk9Ia29.js";import"./useHover-CiczVSK2.js";import"./ButtonBase-npMyeAn1.js";import"./Loader-CDLiKOIL.js";import"./Tooltip-BkqI6U6A.js";import"./index-OkL7a2l2.js";import"./Button-BlcQ60k5.js";import"./SelectionIndicator-D9Fg3jDt.js";import"./index-CFQJxFH6.js";import"./index-Bd-ouoAk.js";import"./usePress-ZiGbaZzJ.js";import"./Text-EG1aAmzm.js";import"./useCollection-_O7uR0kP.js";import"./index-CR3ZY86l.js";import"./VisuallyHidden-Dx7N9Iu0.js";import"./Autocomplete-6UbWrJdi.js";import"./use-dobby-context-DlcbDqu6.js";import"./sha256-Dk4EG7kS.js";import"./Pill-CmqED73B.js";import"./SelectBase-UM66AGz9.js";import"./Label-J_ie02mz.js";import"./index-DbGlvAzX.js";import"./Label-BfqPxNfA.js";import"./ListBox-Biimp9HY.js";import"./Check-RA4dLzQy.js";import"./ListBox-CRhZOpWJ.js";import"./useLoadMoreSentinel-0LbcLFc3.js";import"./useLabel-CdGUclwM.js";import"./variants-DkqHdO62.js";import"./KeyboardArrowDown-mEt7fdmE.js";import"./filter-persistence-B1VoEymj.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
