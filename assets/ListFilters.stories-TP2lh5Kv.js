import{j as e}from"./iframe-BF_KP_hN.js";import{C as p}from"./Checkbox-6WeCW9x2.js";import{L as d}from"./ListFilters-D-woOWiu.js";import{S as c}from"./Select-DRI7tnEW.js";import{S as b}from"./Switch-pvx7xyOx.js";import{T as h}from"./TextField-pP0QQzgz.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-DLqghWKL.js";import"./CheckIndeterminateSmall-CLX2-bur.js";import"./RSPContexts-BOzgkn97.js";import"./utils-BqpmhFVW.js";import"./Form-I-lBGkuI.js";import"./usePress-fc5pKrNj.js";import"./index-I7XzL5DF.js";import"./index-DWPRwdrc.js";import"./useToggleState-ZMJVyjVW.js";import"./useFormReset-CrtlIz-r.js";import"./VisuallyHidden-DE-molTm.js";import"./ComboBox-BM71sC1H.js";import"./SingleComboBox-BKlTeZgJ.js";import"./ListBox-l4qOsAbP.js";import"./Loader-DoBWafIM.js";import"./Separator-C6fCfvQY.js";import"./FocusScope-4pytHGpx.js";import"./Text-mk_HzVZA.js";import"./index-MQ1ttWeg.js";import"./ListBox-DjHcsfaC.js";import"./DragAndDrop-D9NQ6c3Q.js";import"./useLabel-Cu4eK06_.js";import"./Pill-G3LSHrcB.js";import"./Input-DgSKj3W9.js";import"./index-7WMUdYsb.js";import"./Button-yFbSCyNo.js";import"./SelectBase-DVmpqj5t.js";import"./Label-6_OGEEE6.js";import"./index-CODvd-3F.js";import"./Label-BqrROEg6.js";import"./variants-Dx_--Ifz.js";import"./KeyboardArrowDown-C3H7Ffdt.js";import"./Button-CoLGA88s.js";import"./ButtonBase-VG-Brf1y.js";import"./Tooltip-BUH1OzVl.js";import"./IconButton-DfeYdlPD.js";import"./Modal-B88TCYNA.js";import"./use-is-mobile-CelH9V2S.js";import"./FilterListOff-CLDH5RnX.js";import"./ErrorMessage-D_mC8aDW.js";import"./Group-DelFWukP.js";import"./FieldError-DUMDqtzu.js";import"./useTextField-6YlrZ1jG.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: "w-[80vw]",
    filterValues: {
      status: ["PENDING", "APPROVED"]
    },
    filters: [{
      filterType: "single-select",
      name: "createdAt",
      placeholder: "Created at",
      items: [{
        id: "day",
        label: "Last 24 hours"
      }, {
        id: "week",
        label: "Last 7 days"
      }, {
        id: "month",
        label: "Last 30 days"
      }, {
        id: "halfYear",
        label: "Last 6 months"
      }, {
        id: "year",
        label: "Last year"
      }],
      labelResolver: (item: {
        label?: string;
      }) => item.label
    }, {
      filterType: "multi-select",
      name: "status",
      placeholder: "Status",
      items: [{
        id: "PENDING",
        label: "Pending approval"
      }, {
        id: "APPROVED",
        label: "Approved"
      }, {
        id: "TO_BE_SOLVED",
        label: "To be solved"
      }, {
        id: "SOLVED",
        label: "Solved"
      }, {
        id: "REJECTED",
        label: "Rejected"
      }],
      labelResolver: (item: {
        label?: string;
      }) => item.label
    }, {
      filterType: "combobox",
      name: "responsible",
      placeholder: "Responsible user",
      items: [{
        id: "1",
        label: "John Doe"
      }, {
        id: "2",
        label: "Jane Doe"
      }, {
        id: "3",
        label: "Jeff"
      }],
      labelResolver: (item: {
        label?: string;
      }) => item.label
    }]
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var s,n,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    className: "w-[70vw]",
    children: <>
        <Select items={[]} placeholder="Select an item" />
        <TextField placeholder="Search..." />
        <Checkbox className="min-h-8 pl-2">Check filter</Checkbox>
        <Switch className="min-h-8 pl-2">Toggle filter</Switch>
      </>
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const ce=["Default","CustomFilters"];export{a as CustomFilters,t as Default,ce as __namedExportsOrder,de as default};
