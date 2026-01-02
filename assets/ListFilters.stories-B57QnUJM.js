import{j as e}from"./iframe-Cf59BB2m.js";import{C as p}from"./Checkbox-C8_mjOVJ.js";import{L as d}from"./ListFilters-BcKPf8LZ.js";import{S as c}from"./Select-CN7TIdCl.js";import{S as b}from"./Switch-Da6hi4dh.js";import{T as h}from"./TextField-CdsZaROY.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-DtwMPYQS.js";import"./CheckIndeterminateSmall-BNlMJkhx.js";import"./RSPContexts-D3i3zFQc.js";import"./utils-7d9ue3Ya.js";import"./Form-DbAWoLlV.js";import"./usePress-DHEYd569.js";import"./index-Cv7hAmAe.js";import"./index-BYq1RcUP.js";import"./useToggleState-BxzUmP0I.js";import"./useFormReset-Ciththrw.js";import"./VisuallyHidden-DYdxsg1X.js";import"./ComboBox-BdHl6a_N.js";import"./SingleComboBox-Dj53WfCU.js";import"./ListBox-h-dWPs5x.js";import"./Loader-CHZVrFVF.js";import"./Separator-D-cZvXOs.js";import"./FocusScope-Hb3BODMY.js";import"./Text-DUhSASD0.js";import"./index-BgxwcrQu.js";import"./ListBox-DDoWKUg8.js";import"./DragAndDrop-Cq6WjINL.js";import"./useLabel-CLWpCBq7.js";import"./Pill-B_yM7vG5.js";import"./Input-CWSWOELh.js";import"./index-_zVXbRPB.js";import"./Button-D5zpqd4m.js";import"./SelectBase-RvbGQcTX.js";import"./Label-BNkoYuny.js";import"./index-CWtkQZMw.js";import"./Label-KLsFGmd8.js";import"./variants-Bgnl3evm.js";import"./KeyboardArrowDown-CkpxCp9D.js";import"./Button-BHfJEisQ.js";import"./ButtonBase-Dn4dDKa9.js";import"./Tooltip-DAm4L83o.js";import"./IconButton-BZa82xcS.js";import"./Modal-Co03dDDo.js";import"./use-is-mobile-D1HHfYgO.js";import"./FilterListOff-KZTRFGla.js";import"./ErrorMessage-Q5YafXdQ.js";import"./Group-9qDLmDoV.js";import"./FieldError-CImqr5V9.js";import"./useTextField-BBbI_RXZ.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
