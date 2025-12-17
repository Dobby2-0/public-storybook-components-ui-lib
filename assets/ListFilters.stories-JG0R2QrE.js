import{j as e}from"./iframe-XN5PUdo-.js";import{C as p}from"./Checkbox-CVD9OBxT.js";import{L as d}from"./ListFilters-BGESfptT.js";import{S as c}from"./Select-Dahit5hr.js";import{S as b}from"./Switch-CHpgyDfW.js";import{T as h}from"./TextField-CUVhw9qH.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-IDU531yo.js";import"./CheckIndeterminateSmall-BSc8ty3R.js";import"./RSPContexts-BRB36KVP.js";import"./utils-Bzka9lbN.js";import"./Form-BI6liC2Z.js";import"./usePress-BjHcyIvs.js";import"./index-YTM8xuB5.js";import"./index-DguLE60C.js";import"./useToggleState-BSR1tQpq.js";import"./useFormReset-B2pTTz8n.js";import"./VisuallyHidden-CzSagqXo.js";import"./ComboBox-C8o7t42p.js";import"./ListBox-C9qeEWg2.js";import"./Loader-BehVFnXx.js";import"./Separator-DGKtewIz.js";import"./FocusScope-VZEF-ZvW.js";import"./Text-CpJlg3nO.js";import"./index-DBjqw2XV.js";import"./ListBox-DxL9n11H.js";import"./DragAndDrop-D8D0v0SF.js";import"./useLabel-BzR44BkW.js";import"./Pill-B8xuqL5P.js";import"./Input-fbADgTkx.js";import"./index-Cvpg_kN6.js";import"./Button-GWZf1c_M.js";import"./SelectBase-h0OwXfio.js";import"./Label-YpVhxTSR.js";import"./index-DC6ydhDU.js";import"./Label-CceXNFpS.js";import"./variants-BJS8SB37.js";import"./KeyboardArrowDown-DEpKJQ2c.js";import"./Button-DWYSm-gN.js";import"./ButtonBase-vWONjdp0.js";import"./Tooltip-C2X8H7tG.js";import"./IconButton-BP41wML_.js";import"./Modal-n2lhklzv.js";import"./use-is-mobile-DVzLMyfp.js";import"./FilterListOff-je7oKhik.js";import"./ErrorMessage-tJgT2o2b.js";import"./Group-BMq6SCOz.js";import"./FieldError-CexR7SnA.js";import"./useTextField-Bb2p4L6n.js";const pe={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const de=["Default","CustomFilters"];export{a as CustomFilters,t as Default,de as __namedExportsOrder,pe as default};
