import{L as i}from"./ListFilters-M-kBZviB.js";import"./iframe-CIaFx2q2.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BSCx8bUx.js";import"./ListBox-C__S1f1y.js";import"./Loader-LULHh8rS.js";import"./Check-G01i2Qjk.js";import"./utils-D-1pXXnN.js";import"./Separator-CG6JFri3.js";import"./usePress-8aWzuJ7v.js";import"./index-CcIytjnB.js";import"./index-uKKeEpF6.js";import"./FocusScope-DSlukKEN.js";import"./Hidden-DCSrIPOz.js";import"./ListBox-BnuMuTQm.js";import"./DragAndDrop-B3UvGqJ7.js";import"./Text-CzIHxRsu.js";import"./useLabel-6z3we1ld.js";import"./Pill-ipC1kgMn.js";import"./Input-C_DfLIqm.js";import"./index-BUWFphUH.js";import"./Button-q_8A41Mf.js";import"./RSPContexts-7sqEX1iE.js";import"./VisuallyHidden-DhEKfe7W.js";import"./SelectBase-BG0f1lR1.js";import"./Label-D922ixhj.js";import"./index-CsAEAbEi.js";import"./variants-CoVKe-fX.js";import"./KeyboardArrowDown-DdGS9cSB.js";import"./Button-Blwzr2ZA.js";import"./ButtonBase-67FoIazS.js";import"./Tooltip-B20ROSUN.js";import"./IconButton-DqibcTCX.js";import"./Modal-CGNelOOo.js";import"./use-is-mobile-XzK4ULcY.js";import"./Select-BIyCaghX.js";const F={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var a,t,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
