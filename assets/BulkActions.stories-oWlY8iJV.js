import{j as o}from"./iframe-BxpDzqBk.js";import{a as s}from"./BulkActions-By6AyBEf.js";import{S as a}from"./Select-Dd5uVB__.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CHE9_F9n.js";import"./useHover-CQPv9kXH.js";import"./ButtonBase-BIyoh5At.js";import"./Loader-D4O6dCEt.js";import"./Tooltip-B2aQCnJA.js";import"./index-DGrH-NED.js";import"./Button-Dx3qKNey.js";import"./SelectionIndicator-CKAcSFvH.js";import"./index-Ckz3c10D.js";import"./index-de8NLQpv.js";import"./usePress-CF69GWM9.js";import"./Text-DMHLZ9F2.js";import"./useCollection-uwnWto8c.js";import"./index-DXAAUhhG.js";import"./VisuallyHidden-BtWZNOf_.js";import"./Autocomplete-OjHe189S.js";import"./use-dobby-context-D7IOHaFU.js";import"./sha256-Ba7Hr0lL.js";import"./Pill-EAssIo_y.js";import"./SelectBase-DMs52A3u.js";import"./Label-hQaOzBc9.js";import"./index-B_Um-vP4.js";import"./Label-DM2OBeen.js";import"./ListBox-CZm3YyEV.js";import"./Check-C99IRoQs.js";import"./ListBox-Dn-EWkU1.js";import"./useLoadMoreSentinel-DbNmD9Xa.js";import"./useLabel-uQfF5Kkd.js";import"./variants-8H2OzYmC.js";import"./KeyboardArrowDown-BarmVwNQ.js";import"./filter-persistence-B1tUfpj_.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
