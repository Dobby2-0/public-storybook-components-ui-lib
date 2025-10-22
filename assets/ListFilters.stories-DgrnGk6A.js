import{L as i}from"./ListFilters-BHkf4cuP.js";import"./iframe-K5ot193W.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BDdtx2-m.js";import"./ListBox-Cg7-tnFn.js";import"./Loader-CVHVK9ew.js";import"./Check-KFr00HCo.js";import"./utils-DoX2BHgw.js";import"./Separator-BZFXuRp1.js";import"./usePress-BJSAC4eU.js";import"./index-B85NZ1GU.js";import"./index-CzpjyPtz.js";import"./FocusScope-CZ7OGJVT.js";import"./Hidden-D_8t15qI.js";import"./ListBox-CZdW5w1q.js";import"./DragAndDrop-BMgy62lt.js";import"./Text-uJi7ZI5y.js";import"./useLabel-ndQ0b1Cw.js";import"./Pill-CQV5QYrs.js";import"./Input-Cg_ElqVt.js";import"./index-DWA_KCm8.js";import"./Button-CHWdOn-4.js";import"./RSPContexts-BXwADtdt.js";import"./VisuallyHidden-C2KLU0fC.js";import"./SelectBase-C0UE6gLY.js";import"./Label-EQWcOzQZ.js";import"./index-Ajp69JD3.js";import"./variants-BuPgxWU4.js";import"./KeyboardArrowDown-C92hH2cJ.js";import"./Button-CNVb-Gv7.js";import"./ButtonBase-BV6RYHwQ.js";import"./Tooltip-CxbMiB6J.js";import"./IconButton-BB6Maibj.js";import"./Modal-t5gCRkr1.js";import"./use-is-mobile-DUHMj7qO.js";import"./FilterListOff-BnTzGqT9.js";import"./Select-DHZ3NVe-.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
