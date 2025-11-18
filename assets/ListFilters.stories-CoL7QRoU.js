import{L as i}from"./ListFilters-CAu3LQ8a.js";import"./iframe-DItMUyuz.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-CRvesMgx.js";import"./ListBox-D7kMRR75.js";import"./Loader-DgPBNaV0.js";import"./Check-CT5nZNzc.js";import"./utils-CDDBdGNq.js";import"./Separator-B-5V_2jI.js";import"./usePress-DWDUijNk.js";import"./index-BlLvOc04.js";import"./index-Dn1WJ78Z.js";import"./FocusScope-CrkxwzSs.js";import"./Hidden-D0piI1_g.js";import"./ListBox-D_AYYiEK.js";import"./DragAndDrop-BY8TromW.js";import"./Text-CY-IC1ub.js";import"./useLabel-DSUBmT6N.js";import"./Pill-B-diY4iP.js";import"./Input-qlXenizh.js";import"./index-Bt_ueGGx.js";import"./Button-BiogDSkd.js";import"./RSPContexts-COEWHn-7.js";import"./VisuallyHidden-DlVhb33B.js";import"./SelectBase-Cy382Nfi.js";import"./Label-BfAYtU37.js";import"./index-TwhDy-SB.js";import"./variants-DrdoAPpS.js";import"./KeyboardArrowDown-15NzAQ-R.js";import"./Button-rP0BkDER.js";import"./ButtonBase-Drw62Jq4.js";import"./Tooltip-VB1clTAK.js";import"./IconButton-CSID9wDK.js";import"./Modal-Bpg04ITr.js";import"./use-is-mobile-Cgwllksd.js";import"./FilterListOff-CgZxGmJb.js";import"./Select-SKudxPit.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(a=l.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const z=["Default"];export{l as Default,z as __namedExportsOrder,q as default};
