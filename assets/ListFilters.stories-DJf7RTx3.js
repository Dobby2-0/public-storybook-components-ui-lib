import{j as e}from"./iframe-DxqB9boC.js";import{C as p}from"./Checkbox-Bdax8M5c.js";import{L as d}from"./ListFilters-C0yvNark.js";import{S as c}from"./Select-CjjI2z27.js";import{S as b}from"./Switch-Bhe3HfS5.js";import{T as h}from"./TextField-CNXY365w.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-pl2AuQkJ.js";import"./CheckIndeterminateSmall-ihGUtheH.js";import"./RSPContexts-CdKmEmBz.js";import"./utils-BZoaywRP.js";import"./Form-C0Oc1coY.js";import"./usePress-DnV8oE5s.js";import"./index-CK9kbaq8.js";import"./index-DxaqE9ox.js";import"./useToggleState-DRyC_N8K.js";import"./useFormReset-TWeJgFen.js";import"./VisuallyHidden-DAEn6H89.js";import"./ComboBox-CoFh90Hq.js";import"./ListBox-CS_KHVbe.js";import"./Loader-BhEu2spN.js";import"./Separator-FUyGumNk.js";import"./FocusScope-D7q5W6Y8.js";import"./Text-Ct9ZvIUR.js";import"./index-B9LOX3vE.js";import"./ListBox-Dri4MaI7.js";import"./DragAndDrop-JFL9m-z7.js";import"./useLabel-BQM4SikJ.js";import"./Pill-aofiBUSp.js";import"./Input-SAGCCiTu.js";import"./index-Di_7lRh5.js";import"./Button-BtF1-V-Y.js";import"./SelectBase-e8haZN_B.js";import"./Label-437p-tUb.js";import"./index-BKqV3H35.js";import"./Label-DZUabfaG.js";import"./variants-DPxRw7vR.js";import"./KeyboardArrowDown-AvfzWT8M.js";import"./Button-o3sWl_8u.js";import"./ButtonBase-C25o3bVg.js";import"./Tooltip-DzBZV5GE.js";import"./IconButton-BDhE7lLp.js";import"./Modal-mSz6SvSA.js";import"./use-is-mobile-nZhqyBxM.js";import"./FilterListOff-BvSliELd.js";import"./ErrorMessage-7BPv6e7h.js";import"./Group-CXN2ynNl.js";import"./FieldError-B4A-GxZC.js";import"./useTextField-BulLtujC.js";const pe={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
