import{L as i}from"./ListFilters-C0p9LNH1.js";import"./iframe-D4sFMyar.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BE3h3lZS.js";import"./ListBox-PA7NBarN.js";import"./Loader-Cgfq8_fX.js";import"./Check-C9WDWs7Y.js";import"./utils-DOnK1M50.js";import"./Separator-D00KM3wx.js";import"./usePress-BISTNL8U.js";import"./index-s-DPKche.js";import"./index-BC_-Ympm.js";import"./FocusScope-BzhV52UM.js";import"./Hidden-Wfeot0h6.js";import"./ListBox-hkawBFHC.js";import"./DragAndDrop-CFD8lYjs.js";import"./Text-BVW_c2PG.js";import"./useLabel-Bc0b5pqO.js";import"./Pill-CQ14XT6I.js";import"./Input-Dg5F4ttD.js";import"./index-BNCz2s1m.js";import"./Button-CjbDBb9c.js";import"./RSPContexts-htJPkFQW.js";import"./VisuallyHidden-1ujM2lm4.js";import"./SelectBase-DDDxSapH.js";import"./Label-2zUHcshT.js";import"./index-BqftwFYY.js";import"./variants-SlTHIkdS.js";import"./KeyboardArrowDown-DDbv4aZv.js";import"./Button-q4m-iYUK.js";import"./ButtonBase-CVvexrL6.js";import"./Tooltip-CQoP5h70.js";import"./IconButton-5yxa1Klk.js";import"./Modal-D-P-wRO7.js";import"./use-is-mobile-CqWEQU0m.js";import"./Select-DaLoWExc.js";const F={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
