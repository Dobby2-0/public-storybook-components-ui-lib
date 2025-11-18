import{L as i}from"./ListFilters-bxmabpkZ.js";import"./iframe-7Nw882py.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BSWGMVR8.js";import"./ListBox-CWwHBDnm.js";import"./Loader-Cgo6IMUC.js";import"./Check-C6PhEKVN.js";import"./utils-9iagpOxg.js";import"./Separator-BQuQ-gGr.js";import"./usePress-BLFxd6qu.js";import"./index-D9KqQCNK.js";import"./index-B1fTOt-b.js";import"./FocusScope-BCwe-NO5.js";import"./Hidden-C2VD6tQv.js";import"./ListBox-C4DPiIPV.js";import"./DragAndDrop-ClwN77iD.js";import"./Text-OKTTPcry.js";import"./useLabel-B1ewOS0U.js";import"./Pill-BWY8YX_7.js";import"./Input-CE1lOgdF.js";import"./index-clrZ1K3m.js";import"./Button-BkIRXc69.js";import"./RSPContexts-DcEn7IJ0.js";import"./VisuallyHidden-BTVJqNYp.js";import"./SelectBase-B9h6UP-o.js";import"./Label-BeRP0jQD.js";import"./index-CdXzJg40.js";import"./variants-BmBct39u.js";import"./KeyboardArrowDown-903MccPh.js";import"./Button-DAIPiDKF.js";import"./ButtonBase-B1gHSSi2.js";import"./Tooltip-BiYD_zex.js";import"./IconButton-B24tITV1.js";import"./Modal-DqR5fZwa.js";import"./use-is-mobile-oWKDr4Vz.js";import"./FilterListOff-CEoMcWhT.js";import"./Select-DkCUicCh.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
