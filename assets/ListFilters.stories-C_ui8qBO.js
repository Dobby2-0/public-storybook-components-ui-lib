import{L as i}from"./ListFilters-Cv8b5t3A.js";import"./iframe-uvh5eEjR.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-3W0ahb1E.js";import"./ListBox-Bo8ttujh.js";import"./Loader-D5Xo917Q.js";import"./Check-DQNJDHse.js";import"./utils-BahAdPYD.js";import"./Separator-B7rWc1qr.js";import"./usePress-BWZZCjIo.js";import"./index-D4TvyuAB.js";import"./index-BGNnMmgK.js";import"./FocusScope-Dg5P4nJf.js";import"./Hidden-DbX4vufo.js";import"./ListBox-CwAZ67HP.js";import"./DragAndDrop-D3y2a_2a.js";import"./Text-zKorpzjC.js";import"./useLabel-DN5Jqcby.js";import"./Pill-DzaSW77B.js";import"./Input-Cc-INvD7.js";import"./index-BjkaYagM.js";import"./Button-CAxi5Bg3.js";import"./RSPContexts-DqdmP-qp.js";import"./VisuallyHidden-cyliJ2tQ.js";import"./SelectBase-B5FvgjNc.js";import"./Label-BKXEOR65.js";import"./index-BBSOdNJu.js";import"./variants-do0j-hu_.js";import"./KeyboardArrowDown-Cp6BD8fy.js";import"./Button-DbBcVXgk.js";import"./ButtonBase-Bul097Fc.js";import"./Tooltip-BPeUKBd-.js";import"./IconButton-OoQfWpOP.js";import"./Modal-BLIC6OIb.js";import"./use-is-mobile-By2kZn_w.js";import"./Select-BdTegWrn.js";const F={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
