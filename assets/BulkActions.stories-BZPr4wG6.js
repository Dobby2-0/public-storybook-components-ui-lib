import{j as o}from"./iframe-DE__fsll.js";import{B as s}from"./BulkActions-BtPQ61ab.js";import{S as a}from"./Select-CMrbvY8b.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-t22Ri4Sz.js";import"./utils-CJOnvcxP.js";import"./ButtonBase-CpMGeMwK.js";import"./Loader-Dgt1NCEf.js";import"./Tooltip-CG0qE1fu.js";import"./index-DCglHl2s.js";import"./Button-Cis6ftM6.js";import"./FocusScope-C-3mWcHq.js";import"./Text-BFA6QE2e.js";import"./usePress-CxAbq9k6.js";import"./index-Ck1VTmwL.js";import"./index-B1p23in3.js";import"./RSPContexts-Bo0ROoLz.js";import"./Separator-CCL6C8Ru.js";import"./index-DFu8Eb9l.js";import"./VisuallyHidden-Cr1pH87Y.js";import"./Pill-DJx_nP_n.js";import"./SelectBase-BhOytjIh.js";import"./Label-CjSyovPz.js";import"./index-Bf3SQzM7.js";import"./Label-t560HrcO.js";import"./ListBox-DTD1rxEo.js";import"./Check-CWRKmbrU.js";import"./ListBox-BOQrLKVE.js";import"./DragAndDrop-ncihsILM.js";import"./useLabel-BpPHlk3a.js";import"./variants-Dg7bcfzN.js";import"./KeyboardArrowDown-CIGxW-Zt.js";const Z={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const $=["Default","DefaultSelectedAction","DisabledOption","WithChildren"];export{t as Default,e as DefaultSelectedAction,n as DisabledOption,i as WithChildren,$ as __namedExportsOrder,Z as default};
