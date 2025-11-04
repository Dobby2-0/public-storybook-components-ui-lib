import{L as i}from"./ListFilters-Bm73VLdv.js";import"./iframe-BpyaIFoj.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BDE95nRM.js";import"./ListBox-6JcBGEi1.js";import"./Loader-CQM-0ZIS.js";import"./Check-Dcaj50Xp.js";import"./utils-BS6Lqt09.js";import"./Separator-DNUy2L-9.js";import"./usePress-CMrGCYWh.js";import"./index-Cme_4wJ_.js";import"./index-BmY4FwaI.js";import"./FocusScope-D68Gc64D.js";import"./Hidden-BDM9tC_5.js";import"./ListBox-Bv4k51BK.js";import"./DragAndDrop-A6siLR-4.js";import"./Text-C2WQadjm.js";import"./useLabel-DFclWn5m.js";import"./Pill-CsqFngId.js";import"./Input-BBje26OK.js";import"./index-DM8cAZNR.js";import"./Button-COvRattK.js";import"./RSPContexts-Dgzttmai.js";import"./VisuallyHidden-_74GO_fh.js";import"./SelectBase-NeCc7q-V.js";import"./Label-2lTG2-ph.js";import"./index-CeL-c1GY.js";import"./variants-0kjuNmtO.js";import"./KeyboardArrowDown-fA--4-mO.js";import"./Button-Bfur9YTP.js";import"./ButtonBase-BMDkGtEB.js";import"./Tooltip-Df7cJMCV.js";import"./IconButton-Cirh4ma1.js";import"./Modal-Cu3dX4ia.js";import"./use-is-mobile-jV6PKnYP.js";import"./FilterListOff-B6XOo2i3.js";import"./Select-DZDamuVh.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
