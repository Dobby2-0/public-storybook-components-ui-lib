import{L as i}from"./ListFilters-S7bzerSW.js";import"./iframe-CAUhewdO.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Be31HobG.js";import"./ListBox-CJWFjdSt.js";import"./Loader-D6_--q1w.js";import"./Check-DiNwzedm.js";import"./utils-_cLWaf_5.js";import"./Separator-DOGuvkEA.js";import"./usePress-DjnbvC3G.js";import"./index-CSJujp_2.js";import"./index-DWLQBFH_.js";import"./FocusScope-B_CxtKkP.js";import"./Hidden-DMFyPc0q.js";import"./ListBox-CJ0d9-s8.js";import"./DragAndDrop-Bw77P5-E.js";import"./Text-Btn9TMH9.js";import"./useLabel-B4ncvW39.js";import"./Pill-kKa5Dc87.js";import"./Input-J8ywhy-Z.js";import"./index-DDtjrfmB.js";import"./Button-XKzsS0Io.js";import"./RSPContexts-CQOdqGct.js";import"./VisuallyHidden-ppH9XbU_.js";import"./SelectBase-2858UH-H.js";import"./Label-Bat42nNs.js";import"./index-BMOJF3qq.js";import"./variants-BpdPj6vu.js";import"./KeyboardArrowDown-G4aPy6OS.js";import"./Button-BySXEmg_.js";import"./ButtonBase-BKz8XeI0.js";import"./Tooltip-BU5WJX2U.js";import"./IconButton-DDv16iZI.js";import"./Modal-8e9kjui3.js";import"./use-is-mobile-DfdIAB0Z.js";import"./FilterListOff-DwU3biNr.js";import"./Select-C_3XQmy6.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
