import{j as e}from"./iframe-DE__fsll.js";import{C as p}from"./Checkbox-4ZMlTMb-.js";import{L as d}from"./ListFilters-C_S57ldb.js";import{S as c}from"./Select-CMrbvY8b.js";import{S as b}from"./Switch-ARTi3JH7.js";import{T as h}from"./TextField-COzDZDQ8.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-CWRKmbrU.js";import"./CheckIndeterminateSmall-D1A7JJ8v.js";import"./RSPContexts-Bo0ROoLz.js";import"./utils-CJOnvcxP.js";import"./Form-UhUhkH5U.js";import"./usePress-CxAbq9k6.js";import"./index-Ck1VTmwL.js";import"./index-B1p23in3.js";import"./useToggleState-BSksLaNR.js";import"./useFormReset-Bpciiqgr.js";import"./VisuallyHidden-Cr1pH87Y.js";import"./ComboBox-BIoJ6nxn.js";import"./SingleComboBox-D2oWAhtp.js";import"./ListBox-DTD1rxEo.js";import"./Loader-Dgt1NCEf.js";import"./Separator-CCL6C8Ru.js";import"./FocusScope-C-3mWcHq.js";import"./Text-BFA6QE2e.js";import"./index-DFu8Eb9l.js";import"./ListBox-BOQrLKVE.js";import"./DragAndDrop-ncihsILM.js";import"./useLabel-BpPHlk3a.js";import"./Pill-DJx_nP_n.js";import"./Input-C9UBon8y.js";import"./index-DCglHl2s.js";import"./Button-Cis6ftM6.js";import"./SelectBase-BhOytjIh.js";import"./Label-CjSyovPz.js";import"./index-Bf3SQzM7.js";import"./Label-t560HrcO.js";import"./variants-Dg7bcfzN.js";import"./KeyboardArrowDown-CIGxW-Zt.js";import"./Button-t22Ri4Sz.js";import"./ButtonBase-CpMGeMwK.js";import"./Tooltip-CG0qE1fu.js";import"./IconButton-swzn-ArZ.js";import"./Modal-CdY-0WZU.js";import"./use-is-mobile-19dZFxa_.js";import"./FilterListOff-C5ULNrTx.js";import"./ErrorMessage-Cok-r2_j.js";import"./Group-BAnPj7Ly.js";import"./FieldError-BDgc5NlL.js";import"./useTextField-GmcVgQB9.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
