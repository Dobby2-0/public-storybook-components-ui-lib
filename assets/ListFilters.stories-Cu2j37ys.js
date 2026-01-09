import{j as e}from"./iframe-CplAapsX.js";import{C as p}from"./Checkbox-DBlbn0de.js";import{L as d}from"./ListFilters-ZR7RKL6k.js";import{S as c}from"./Select-DvmBaKWA.js";import{S as b}from"./Switch-Bc_aMd0B.js";import{T as h}from"./TextField-cmSnUa2o.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-CBSnSxms.js";import"./CheckIndeterminateSmall-CIU_gyn7.js";import"./RSPContexts-B7LFnw2w.js";import"./utils-BP1FQsAo.js";import"./Form-BHxweaa0.js";import"./usePress-DKuUVNPj.js";import"./index-CsyXmV7m.js";import"./index-RIj34x3n.js";import"./useToggleState-g6kivo64.js";import"./useFormReset-buhRQ0Qq.js";import"./VisuallyHidden-BtQ6MD1n.js";import"./ComboBox-BdFe02Wg.js";import"./SingleComboBox-BSau3Jxm.js";import"./ListBox-CApBvx9-.js";import"./Loader-DO4ogSHn.js";import"./Separator-Bj5eosGN.js";import"./FocusScope-Co7oTpXY.js";import"./Text-jeQCP_Xd.js";import"./index-1qNirS9T.js";import"./ListBox-BozHGlPt.js";import"./DragAndDrop-DgxJg4d0.js";import"./useLabel-BrOdjh3H.js";import"./Pill-Gd39E3vN.js";import"./Input-FMjyMLhH.js";import"./index-DxhgBWXY.js";import"./Button-BmwiX6Hk.js";import"./SelectBase-CPv_W1Nd.js";import"./Label-BmoMV9je.js";import"./index-BKBntAAk.js";import"./Label-CDhDbCJZ.js";import"./variants-CB0fdHXi.js";import"./KeyboardArrowDown-D7zVXJq7.js";import"./Button-yuAv3Z_P.js";import"./ButtonBase-ZUXJNHQV.js";import"./Tooltip-DHBwmVO4.js";import"./IconButton-m9GXKDaS.js";import"./Modal-0H3481Qt.js";import"./use-is-mobile-mR8-Fi-n.js";import"./FilterListOff-DrH9PwOV.js";import"./ErrorMessage-BStnkxSq.js";import"./Group-B84DRFsA.js";import"./FieldError-CZ_3F4IE.js";import"./useTextField-BAjHgY2b.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
