import{j as o}from"./iframe-C7KNxXq2.js";import{a as s}from"./BulkActions-Dbrk0urC.js";import{S as a}from"./Select-Dm6SzPSo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bm-0ouN-.js";import"./useHover-CGSK28vB.js";import"./ButtonBase-Be7vA8nu.js";import"./Loader-APQYjrvK.js";import"./Tooltip-CHgVR_2C.js";import"./index-BbVp1dd2.js";import"./Button-DTHNft8c.js";import"./SelectionIndicator-CHLWnz5K.js";import"./index-3qGBDUho.js";import"./index-BxQa0upA.js";import"./usePress-0VSSEFQY.js";import"./Text-6d857PzC.js";import"./useCollection-CCE1b6Mj.js";import"./index-ClILm0VQ.js";import"./VisuallyHidden-BNaasymY.js";import"./Autocomplete-CnbGb_u5.js";import"./use-dobby-context-utYx5-xA.js";import"./sha256-c80MUnA5.js";import"./Pill-DgyECOOx.js";import"./SelectBase-BD96hg3s.js";import"./Label-kNOOtCBX.js";import"./index-BVuWwcQA.js";import"./Label-C6r6U2Eo.js";import"./ListBox-B2l4pM6B.js";import"./Check-DwHA5HLs.js";import"./ListBox-fvggytBk.js";import"./useLoadMoreSentinel-DcspdZ6k.js";import"./useLabel-BYa6sWpw.js";import"./variants-KMHszoUn.js";import"./KeyboardArrowDown-BhIjvkCx.js";import"./filter-persistence-DkHe7_pO.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
