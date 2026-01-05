import{j as e}from"./iframe-Buf-yu1G.js";import{C as p}from"./Checkbox-MzjgM-tH.js";import{L as d}from"./ListFilters-Bpu7FI9k.js";import{S as c}from"./Select-BRrZq2Xa.js";import{S as b}from"./Switch-HVjma25c.js";import{T as h}from"./TextField-CL0ynsRx.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-COKk3Iux.js";import"./CheckIndeterminateSmall-BgIZjy-4.js";import"./RSPContexts-Co3FhSyY.js";import"./utils-DsZIVvgi.js";import"./Form-HVopaliJ.js";import"./usePress-ClRLR1LW.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./useToggleState-BC3or0JE.js";import"./useFormReset-DemyNfMe.js";import"./VisuallyHidden-DxSDzN3H.js";import"./ComboBox-8Do9MzR_.js";import"./SingleComboBox-d8tVhPTe.js";import"./ListBox-B5_uwrzv.js";import"./Loader-ClqT5cN-.js";import"./Separator-D85nm_WG.js";import"./FocusScope-8F9t37jv.js";import"./Text-B3Wc_O3W.js";import"./index-DZa7hcpo.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./Pill-fJ66MNf_.js";import"./Input-BnQ0a0q5.js";import"./index-h9AQGklB.js";import"./Button-C5gGSRMv.js";import"./SelectBase-DuNSvbGx.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./Label-BzDjaSQM.js";import"./variants-BqGC_269.js";import"./KeyboardArrowDown-BhgScPNQ.js";import"./Button-BKUHKe7M.js";import"./ButtonBase-B5E3aHsH.js";import"./Tooltip-C_80Ipr0.js";import"./IconButton-B8XORBmC.js";import"./Modal-5NGJYuZR.js";import"./use-is-mobile-DBUFuZ5J.js";import"./FilterListOff-DfLco-UK.js";import"./ErrorMessage-BqEf7DOy.js";import"./Group-DUdv2EjX.js";import"./FieldError-BFweSvb9.js";import"./useTextField-CViBBVi3.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
