import{j as o}from"./iframe-Dt5ZFruU.js";import{B as s}from"./BulkActions-jWFGJeSq.js";import{S as a}from"./Select-4Trd2G7Q.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Q-rhjQWd.js";import"./utils-C4ti3hoT.js";import"./ButtonBase-D_JUJID5.js";import"./Loader-tH2ByKI6.js";import"./Tooltip-CZ_WLqYu.js";import"./index-BkhYyv-i.js";import"./Button-DAxL8e33.js";import"./FocusScope-DiyDJAao.js";import"./Text-DMLuPAoM.js";import"./usePress-B5edpycu.js";import"./index-IBUjkAG-.js";import"./index-g_UJPtR6.js";import"./RSPContexts-CVFJqONS.js";import"./Separator-Ci-72ggl.js";import"./index-DBx7LphP.js";import"./VisuallyHidden-Blst52FW.js";import"./Pill-C3JU_pPu.js";import"./filter-persistence-B5Y_gDCQ.js";import"./Label-CV5AQAa6.js";import"./index-DHbAauA2.js";import"./Label-BWg-kvBK.js";import"./ListBox-DXMGCIav.js";import"./Check-BF1HKG2M.js";import"./ListBox-BR1knf9B.js";import"./DragAndDrop-CUNHBJe0.js";import"./useLabel-DiE2T77K.js";import"./variants-DctCfy_Q.js";import"./KeyboardArrowDown-Bg1hzzVq.js";import"./sha256-CvJmP0Q_.js";const $={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
