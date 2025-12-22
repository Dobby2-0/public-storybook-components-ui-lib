import{j as e}from"./iframe-BNzyGInw.js";import{C as p}from"./Checkbox-hcm4wUBO.js";import{L as d}from"./ListFilters-B_NS7dOp.js";import{S as c}from"./Select-B3T67SFw.js";import{S as b}from"./Switch-BbjeDApN.js";import{T as h}from"./TextField-w-4xirjn.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-N35m8Kn8.js";import"./CheckIndeterminateSmall-Bat8DHuE.js";import"./RSPContexts-DrsKWjkf.js";import"./utils-Dlm2XOHV.js";import"./Form-efq6y-HI.js";import"./usePress-CW0TlZGg.js";import"./index-Cde9lS8Q.js";import"./index-Bo-Ruxo_.js";import"./useToggleState-Duztzgal.js";import"./useFormReset-CJ7CqdAv.js";import"./VisuallyHidden-BMEkr2Go.js";import"./ComboBox-oIuVmc31.js";import"./ListBox-WX2XCF3C.js";import"./Loader-Dfd4fjR4.js";import"./Separator-DGo6WF40.js";import"./FocusScope-8nXzWN-Y.js";import"./Text-B40xMfta.js";import"./index-CXeldCEg.js";import"./ListBox-BM1lJpmi.js";import"./DragAndDrop-OV2wTULn.js";import"./useLabel-BTYvcJDq.js";import"./Pill-C-itjlAK.js";import"./Input-CRz-Sbts.js";import"./index-DH5D0aUc.js";import"./Button-DHKzDG8z.js";import"./SelectBase-H1yZt9iV.js";import"./Label-DCKJq6q8.js";import"./index-CmMOcchx.js";import"./Label-gtIqMLxA.js";import"./variants-TuDvegBV.js";import"./KeyboardArrowDown-u5ryAxDG.js";import"./Button-CI6KuKV5.js";import"./ButtonBase-KMKKr80I.js";import"./Tooltip-PWVW5Nnn.js";import"./IconButton-BijAwHR7.js";import"./Modal-CmGgr4Nd.js";import"./use-is-mobile-BZdzjBsa.js";import"./FilterListOff-CLw0_IeZ.js";import"./ErrorMessage-CJ1er9eM.js";import"./Group-B2C_BuoH.js";import"./FieldError-CI5qv2Wj.js";import"./useTextField-CNFUyECM.js";const pe={component:d},t={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:l=>l.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:l=>l.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:l=>l.label}]}},a={args:{className:"w-[70vw]",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{items:[],placeholder:"Select an item"}),e.jsx(h,{placeholder:"Search..."}),e.jsx(p,{className:"min-h-8 pl-2",children:"Check filter"}),e.jsx(b,{className:"min-h-8 pl-2",children:"Toggle filter"})]})}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
