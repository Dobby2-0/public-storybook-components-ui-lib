import{j as o}from"./iframe-BlAShGx_.js";import{a as s}from"./BulkActions-BcXUu8AF.js";import{S as a}from"./Select-Cnpf5dtV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BiBN7gXm.js";import"./useHover-DEiLiWb1.js";import"./ButtonBase-DF2Kmxli.js";import"./Loader-CKhT2Eyr.js";import"./Tooltip-DCV4EGoP.js";import"./index-B8l9xvvj.js";import"./Button-DPZI7PUd.js";import"./SelectionIndicator-CWzx1OXo.js";import"./index-BLSv-aTS.js";import"./index-DwQoafie.js";import"./usePress-C6xx7uxM.js";import"./Text-y3ugg862.js";import"./useCollection-DYLt4ASN.js";import"./index-BarixTo4.js";import"./VisuallyHidden-aD9brjsU.js";import"./Autocomplete-P7FbSN_b.js";import"./use-dobby-context-Gm5KI7-2.js";import"./sha256-DD82QyHS.js";import"./Pill-BzEhEx-n.js";import"./SelectBase-KEiVUW61.js";import"./Label-DdCEuN0e.js";import"./index-P0k2IsM8.js";import"./Label-BoC4dPa5.js";import"./ListBox-4ZPkpGi9.js";import"./Check-5tPrUKX8.js";import"./ListBox-BB7bfwgx.js";import"./useLoadMoreSentinel-tvIk-Yts.js";import"./useLabel-CSkTYHtP.js";import"./variants-BW0ETPKh.js";import"./KeyboardArrowDown-su9MsdaE.js";import"./filter-persistence-R5SX4EiA.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
