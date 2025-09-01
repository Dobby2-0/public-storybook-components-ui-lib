import{L as i}from"./ListFilters-DK8iNIML.js";import"./iframe-DyyyjyPW.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BbgqZDiy.js";import"./ListBox-BHqZo06u.js";import"./Loader-DxpGwVBw.js";import"./Check-BHzRbmR_.js";import"./utils-CSz4aXzB.js";import"./Separator-BC-0ngkc.js";import"./usePress-BpWlvfHO.js";import"./index-BaNO7KEt.js";import"./index-D1DR0edP.js";import"./FocusScope-CIj4bZRD.js";import"./Hidden-3UVVIbOO.js";import"./ListBox-BDL1ldzB.js";import"./DragAndDrop-oHsZow2E.js";import"./Text-BKuClZOX.js";import"./useLabel-DGpSL_32.js";import"./Pill-Dn3XsZIF.js";import"./Input-DuoEmSqm.js";import"./index-B5W-s-rI.js";import"./Button-CZ5F-stK.js";import"./RSPContexts-lCk52PBb.js";import"./VisuallyHidden-CWPjPl7I.js";import"./SelectBase-CpMb8Nns.js";import"./Label-BXo5FuW_.js";import"./index-B_Cov7To.js";import"./variants-Us7G1zn1.js";import"./KeyboardArrowDown-AeUocz4F.js";import"./Button-pjey5g1B.js";import"./ButtonBase-BMpXP14U.js";import"./Tooltip-l2i8Zu72.js";import"./IconButton-4x3s1VcL.js";import"./Modal-BHaUSdHZ.js";import"./use-is-mobile-DFShfOOr.js";import"./Select-DajIcrq9.js";const F={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(t=l.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const q=["Default"];export{l as Default,q as __namedExportsOrder,F as default};
