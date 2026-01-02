import{j as e}from"./iframe-BYumUEqj.js";import{C as p}from"./Checkbox-Der2yD6L.js";import{L as d}from"./ListFilters-NiPwqwto.js";import{S as c}from"./Select-BgdGJi-9.js";import{S as b}from"./Switch-CfUWdFRY.js";import{T as h}from"./TextField-BO0ZpXBp.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-vIqA8EeG.js";import"./CheckIndeterminateSmall-xjnELUJH.js";import"./RSPContexts-BCJ4Z2uz.js";import"./utils-DmPleNPi.js";import"./Form-CeahTsSu.js";import"./usePress-DNxk5E_A.js";import"./index-Cerk7jZ7.js";import"./index-Ct7FywXd.js";import"./useToggleState-DnF_GuLV.js";import"./useFormReset-buycbG7e.js";import"./VisuallyHidden-BGhqA0HM.js";import"./ComboBox-0SXuPZeB.js";import"./SingleComboBox-Bd8oyeWz.js";import"./ListBox-Dg-jvKLH.js";import"./Loader-2yPpCOMH.js";import"./Separator-BZwVFUZ5.js";import"./FocusScope-CYYnJNQZ.js";import"./Text-HOHS8Yh-.js";import"./index-CzCbh3GW.js";import"./ListBox-DWXogx_m.js";import"./DragAndDrop-CXo7ZOiL.js";import"./useLabel-Bn-rd9-b.js";import"./Pill-CkJCj400.js";import"./Input-DiA8Ollg.js";import"./index-BtPpEG5e.js";import"./Button-QDSONico.js";import"./SelectBase-CSpLIeFM.js";import"./Label-JL8H_gsw.js";import"./index-z7SdNoX_.js";import"./Label-Cc2lmETZ.js";import"./variants-BNTPB0FD.js";import"./KeyboardArrowDown-C7jCuD51.js";import"./Button-2-Lq6Xv8.js";import"./ButtonBase-FLLrr_f_.js";import"./Tooltip-ClE6LB0S.js";import"./IconButton-BKCW71WF.js";import"./Modal-5nn3O46j.js";import"./use-is-mobile-q1fdcXRe.js";import"./FilterListOff-BNIXfcbI.js";import"./ErrorMessage-DF9zz_Zv.js";import"./Group-B_t8EfhO.js";import"./FieldError-BRzJb7fN.js";import"./useTextField-BOi_Sjsn.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
