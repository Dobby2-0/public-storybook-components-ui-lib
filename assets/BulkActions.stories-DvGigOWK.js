import{j as o}from"./iframe-C8WqZKtX.js";import{B as s}from"./BulkActions-h7TzKqHG.js";import{S as a}from"./Select-Bsw7eVEQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-XNcAICl1.js";import"./utils-jtSVojHF.js";import"./ButtonBase-CHzHNBmp.js";import"./Loader-yHUC8L0D.js";import"./Tooltip-Cj2CoiKx.js";import"./index-lbB97veH.js";import"./Button-NHtOoMQI.js";import"./FocusScope-B02YIt_w.js";import"./Text-CP-wYi1U.js";import"./usePress-BMPY-rYn.js";import"./index-Bkmr4GuA.js";import"./index-CMotOyWi.js";import"./RSPContexts-Cq9bAEtH.js";import"./Separator-Ce1Am9rV.js";import"./index-C9ZTeJRU.js";import"./VisuallyHidden-BHi9umrS.js";import"./Pill-BRKEhzW9.js";import"./filter-persistence-CwWdQER7.js";import"./Label-dGI1e1v9.js";import"./index-C6r7v-kg.js";import"./Label-BVJGCbyg.js";import"./ListBox-Dd7pkrRQ.js";import"./Check-9H6Sxgn4.js";import"./ListBox-58HMCfy9.js";import"./DragAndDrop-70409Xm5.js";import"./useLabel-OKP0bQxR.js";import"./variants-DhB_cDn7.js";import"./KeyboardArrowDown-C-TxniAy.js";import"./sha256-PDO49cWt.js";const $={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const oo=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,oo as __namedExportsOrder,$ as default};
