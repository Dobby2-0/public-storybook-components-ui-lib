import{L as i}from"./ListFilters-40wl8O5U.js";import"./iframe-DNoKtxhg.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Bwwc2oqY.js";import"./ListBox-CyTdCaUd.js";import"./Loader-C1Wm69c0.js";import"./Check-BzFQLaiw.js";import"./utils-CjaoiQdZ.js";import"./Separator-dinkM1rx.js";import"./usePress-CWk3Znox.js";import"./index-D6qw46zt.js";import"./index-Buse-LnZ.js";import"./FocusScope-CheWUNn9.js";import"./Hidden-BkC718sq.js";import"./ListBox-BPs2K5nT.js";import"./DragAndDrop-hUlJC3JF.js";import"./Text-DDBXfyCI.js";import"./useLabel-DE6ZOCAx.js";import"./Pill-Cu5TwgyP.js";import"./Input-g-GV19a4.js";import"./index-BAyy4ZRe.js";import"./Button-BVq8cRFE.js";import"./RSPContexts-C_HQAxk_.js";import"./VisuallyHidden-D5DE70xt.js";import"./SelectBase-D25GQSY3.js";import"./Label-DxZZTIFl.js";import"./index-Psbe8rtm.js";import"./variants-B6T0VKQU.js";import"./KeyboardArrowDown-BvqvPxvC.js";import"./Button-C-99pNXT.js";import"./ButtonBase-9gO78yYW.js";import"./Tooltip-DojTDStl.js";import"./IconButton-Dbw4FuZy.js";import"./Modal-DVGC72iM.js";import"./use-is-mobile-CFJ9tU1J.js";import"./Select-SI1j6see.js";const F={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
