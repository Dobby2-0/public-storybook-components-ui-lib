import{L as i}from"./ListFilters-D2fdxO4O.js";import"./iframe-DZmofgpO.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-DO5474Sw.js";import"./ListBox-Dfw-z1AZ.js";import"./Loader-C9aM8Q-l.js";import"./Check-Bo3iyQ4r.js";import"./utils-DJdyUCYz.js";import"./Separator-CK7gM0HH.js";import"./usePress-Bgs7fEjB.js";import"./index-B06jorIC.js";import"./index-GmCXe-Gw.js";import"./FocusScope-BBv4nHRy.js";import"./Hidden-CnyXxbgY.js";import"./ListBox-B30LKwB5.js";import"./DragAndDrop-BEdryB3c.js";import"./Text-BrFivvbc.js";import"./useLabel-ndVDMSb_.js";import"./Pill-kX4wjIIc.js";import"./Input-DHNMVIBm.js";import"./index-D2AQP8f5.js";import"./Button-WsOGcMQH.js";import"./RSPContexts-AqUGoMDJ.js";import"./VisuallyHidden-y1mIW2ey.js";import"./SelectBase-BU5ya8Bm.js";import"./Label-B2St2kWk.js";import"./index-Dz7sG3uj.js";import"./variants-D0Ynqsg7.js";import"./KeyboardArrowDown-CuCLI7n8.js";import"./Button-BH1oba4T.js";import"./ButtonBase-CRdCDE_B.js";import"./Tooltip-BSXbDCyU.js";import"./IconButton-b6nZUUDt.js";import"./Modal-BGzzZ2M7.js";import"./use-is-mobile-fNvHs_8e.js";import"./FilterListOff-DWjHGo3F.js";import"./Select-Gsx6R7Z7.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
