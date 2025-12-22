import{j as e}from"./iframe-Bbdio10U.js";import{C as p}from"./Checkbox-hP_izSef.js";import{L as d}from"./ListFilters-CgTXZiWW.js";import{S as c}from"./Select-CoUfIXO-.js";import{S as b}from"./Switch-zh7IWQin.js";import{T as h}from"./TextField-DMiglXuS.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-B5_CoLL3.js";import"./CheckIndeterminateSmall-D6ODnkqo.js";import"./RSPContexts-D-HQWkis.js";import"./utils-o0DbLONt.js";import"./Form-Co5SPek8.js";import"./usePress-GIUfo9An.js";import"./index-Du3hkKeC.js";import"./index-DwYOOHiY.js";import"./useToggleState-OJ56tcxg.js";import"./useFormReset-BHS4eVja.js";import"./VisuallyHidden-CrDW3dOS.js";import"./ComboBox-CzK3V0Ao.js";import"./SingleComboBox-cy-bz4xK.js";import"./ListBox-DoGwqi9i.js";import"./Loader-C4FpJQGJ.js";import"./Separator-ChYVyVRi.js";import"./FocusScope-BgSM8is-.js";import"./Text-DX01AUPE.js";import"./index-BlYnjWZJ.js";import"./ListBox-n_kiAAg6.js";import"./DragAndDrop-9WYbNBdU.js";import"./useLabel-Dm-iHBS5.js";import"./Pill-D-M-T70d.js";import"./Input-DkKhp2RW.js";import"./index-DL8v6lSA.js";import"./Button-C9YWg7pM.js";import"./SelectBase-DYfrbQiw.js";import"./Label-BR0lLTfL.js";import"./index-q07NxN1o.js";import"./Label-CKTyyX1s.js";import"./variants-Crbjhq7L.js";import"./KeyboardArrowDown-CfkIcUBq.js";import"./Button-BhQkNEvc.js";import"./ButtonBase-B29ZS-UH.js";import"./Tooltip-BlJMOe_l.js";import"./IconButton-CBwY49X9.js";import"./Modal-B1IQAUU-.js";import"./use-is-mobile-DCX25eYw.js";import"./FilterListOff-Dx94ph3O.js";import"./ErrorMessage-CaKHk9ej.js";import"./Group-Db_KIEbq.js";import"./FieldError-7QD6bG-F.js";import"./useTextField-DaORNT_W.js";const de={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
