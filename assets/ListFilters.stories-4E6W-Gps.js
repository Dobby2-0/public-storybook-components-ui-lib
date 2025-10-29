import{L as i}from"./ListFilters-CShppz-g.js";import"./iframe-Ff2s0Wa7.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BOH4DrkM.js";import"./ListBox-DxClmdKp.js";import"./Loader-CT8ByzBI.js";import"./Check-DAAZZgS-.js";import"./utils-DedG9-wU.js";import"./Separator-DyvklDdo.js";import"./usePress-BYqqMwsO.js";import"./index-C1nCaLjx.js";import"./index-xi8jNSPF.js";import"./FocusScope-DjT-hP5n.js";import"./Hidden-DeoHi4c3.js";import"./ListBox-C0o7bD8l.js";import"./DragAndDrop-BrwPEaml.js";import"./Text-Cg-gjy63.js";import"./useLabel-CF-xOa3P.js";import"./Pill-D_snA_wm.js";import"./Input-DSXWsPUE.js";import"./index-LRkyAUEd.js";import"./Button-CQGhT4Ij.js";import"./RSPContexts-j2BU7Axl.js";import"./VisuallyHidden-BtKN2TbE.js";import"./SelectBase-CqEPgxh4.js";import"./Label-CX6kCKkr.js";import"./index-DxjM8jOk.js";import"./variants-By0yCXqW.js";import"./KeyboardArrowDown-Dwp97ofS.js";import"./Button-B2nGv0Y0.js";import"./ButtonBase-C1BSoN7N.js";import"./Tooltip-DgWsh440.js";import"./IconButton-D_Bv-hF2.js";import"./Modal-DepAFN0q.js";import"./use-is-mobile-DtDI-eHc.js";import"./FilterListOff-DZuLfhrP.js";import"./Select-69Q_9mSB.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
