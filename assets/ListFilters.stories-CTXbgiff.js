import{L as i}from"./ListFilters-BF6gSMT7.js";import"./iframe-pBnSplFZ.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-ChE1kjCw.js";import"./ListBox-BOghM7Wl.js";import"./Loader-BCxpNSHQ.js";import"./Check-CAvp5a9O.js";import"./utils-C2tA4BPa.js";import"./Separator-B8JoHBbr.js";import"./usePress-DkB5TBaY.js";import"./index-Bx9OGZXX.js";import"./index-Dqp3rM7g.js";import"./FocusScope-DD209Qz4.js";import"./Hidden-DRttEpAd.js";import"./ListBox-D36ZKHsZ.js";import"./DragAndDrop-DFCWl494.js";import"./Text-Uh0t-fi7.js";import"./useLabel-DYsND5BM.js";import"./Pill-bHVwbTO5.js";import"./Input-yqdFd8lF.js";import"./index-DvsOHcJY.js";import"./Button-BQuNtnOM.js";import"./RSPContexts-ByB424tt.js";import"./VisuallyHidden-BZsKR4g8.js";import"./SelectBase-D-ybHqsP.js";import"./Label-CXmwXUEH.js";import"./index-BX5Nerub.js";import"./variants-CXzVb_7g.js";import"./KeyboardArrowDown-B79h8xLV.js";import"./Button-BHajm_Y9.js";import"./ButtonBase-B-KKaSsL.js";import"./Tooltip-C8C0V3UG.js";import"./IconButton-Cqf0rpOa.js";import"./Modal-Ko-t30xf.js";import"./use-is-mobile-D94TSeoC.js";import"./FilterListOff-BVq_6vvG.js";import"./Select-DHGmwFIi.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
