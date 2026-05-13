import{j as o}from"./iframe-BAQ0DjCI.js";import{a as s}from"./BulkActions-DfLlaAWe.js";import{S as a}from"./Select-5Zlkbgil.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BkD8RFuk.js";import"./useHover-noAsqcmg.js";import"./ButtonBase-CQewh0V0.js";import"./Loader-UropCMn-.js";import"./Tooltip-DqtukSgz.js";import"./index-DgvE8W-k.js";import"./Button-DFrgVfZc.js";import"./SelectionIndicator-Dm7cXaUy.js";import"./index-DzM-VVgi.js";import"./index-C5f_Uul5.js";import"./usePress-goLcaebY.js";import"./Text-DNqYLHy3.js";import"./useCollection-BfDkc_8w.js";import"./index-hOmPybqj.js";import"./VisuallyHidden-_I1qh5Yt.js";import"./Autocomplete-BIv1BR8S.js";import"./use-dobby-context-Bo_It24v.js";import"./sha256-B350m-06.js";import"./Pill-CvYX4UDN.js";import"./SelectBase-CO1RqhJq.js";import"./Label-BIkktwhU.js";import"./index-CK_AUu5f.js";import"./Label-BMg5cfLy.js";import"./ListBox-UEkoilAl.js";import"./Check-C-ERZWtA.js";import"./ListBox-D8GDRhOv.js";import"./useLoadMoreSentinel-DDUZ1SDw.js";import"./useLabel-CKcYlPW0.js";import"./variants-TexM51uW.js";import"./KeyboardArrowDown-3h23_Znu.js";import"./filter-persistence--K9j3VCY.js";const to={component:s},t={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],defaultActionId:void 0}},c=[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2")}],e={args:{count:1,actions:c,defaultActionId:c[0].id}},n={args:{count:1,actions:[{id:"action-1",label:"Action 1",action:()=>console.log("Action 1")},{id:"action-2",label:"Action 2",action:()=>console.log("Action 2"),disabled:!0,disabledReason:"We don't want you to do this"}],defaultActionId:void 0}},i={args:{count:2,children:o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(a,{placeholder:"Set status",items:[],className:s.selectClassNames}),o.jsx("p",{children:"to"}),o.jsx(a,{placeholder:"something",items:[],className:s.selectClassNames}),o.jsx(s.ConfirmationButton,{disabled:!0,tooltipContent:"Enable button when selection is valid",onConfirm:()=>{}})]})}};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
