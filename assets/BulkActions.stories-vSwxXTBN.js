import{j as o}from"./iframe-B3WleBvn.js";import{a as s}from"./BulkActions-BInpAMQ6.js";import{S as a}from"./Select-BL5RU8ZX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cducs9Gt.js";import"./useHover-9rdygDPi.js";import"./ButtonBase-CNE1x8X3.js";import"./Loader-Y6RaYNk1.js";import"./Tooltip-6Lh5zJlT.js";import"./index-1VjKsh7-.js";import"./Button-DpcLJ05n.js";import"./SelectionIndicator-dmGRJ_u3.js";import"./index-BsuDJeu9.js";import"./index-C72FCE01.js";import"./usePress-CN5B4D98.js";import"./Text-WbuJZRi-.js";import"./useCollection-DDPHmoIq.js";import"./index-BEdecYP6.js";import"./VisuallyHidden-CV96hiTu.js";import"./Autocomplete-BmWpgatm.js";import"./use-dobby-context-DrRLltn5.js";import"./sha256-Hr4udksG.js";import"./Pill-CSI4z3xu.js";import"./SelectBase-Ahm1IR40.js";import"./Label-CdXMtSo3.js";import"./index-CSYHPqnc.js";import"./Label-5q_A0Sob.js";import"./ListBox-BLqYuVAI.js";import"./Check-BUQ2toxi.js";import"./ListBox-BpkH_bJ_.js";import"./useLoadMoreSentinel-BU4DeyjU.js";import"./useLabel-DZYoA7kr.js";import"./variants-sYo_XFZ-.js";import"./KeyboardArrowDown-Dy8V8GGU.js";import"./filter-persistence-Bi7sX7bZ.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
