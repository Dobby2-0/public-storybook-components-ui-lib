import{L as i}from"./ListFilters-DS7Hsnpe.js";import"./iframe-0LLN9l3Z.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-271XSE45.js";import"./ListBox-D8XfZ4d3.js";import"./Loader-Dfmm4Yus.js";import"./Check-BcPRi-qo.js";import"./utils-BW2CTVz6.js";import"./Separator-CbCKTBDE.js";import"./usePress-DnwYf67K.js";import"./index-cnfJJ8Ux.js";import"./index-Cmpo3LKM.js";import"./FocusScope-DOda7XJF.js";import"./Hidden-BhzXpgg9.js";import"./ListBox-YSEniD7O.js";import"./DragAndDrop-BKunK-nA.js";import"./Text-DztW01tk.js";import"./useLabel-BpJ-w64t.js";import"./Pill-BfwKTOrq.js";import"./Input-DJYIvX6A.js";import"./index-BJf-YNmV.js";import"./Button-DcvBNB63.js";import"./RSPContexts-CShUAwbF.js";import"./VisuallyHidden-H9CAakca.js";import"./SelectBase-B9oediCx.js";import"./Label-atFP0mxR.js";import"./index-BY7HP-sG.js";import"./variants-CWCxChzX.js";import"./KeyboardArrowDown-Cp5KdKAf.js";import"./Button-CBRK2hQh.js";import"./ButtonBase-qolw6pfj.js";import"./Tooltip-va0E0Ilx.js";import"./IconButton-D_ybDGK6.js";import"./Modal-EpEEDef4.js";import"./use-is-mobile-Cc3RtUBd.js";import"./FilterListOff-CrC2r27H.js";import"./Select-aL70GJ6o.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
