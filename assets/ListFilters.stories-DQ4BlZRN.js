import{L as i}from"./ListFilters-BsPGSRX_.js";import"./iframe-4IXjDiCa.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-CBTX1MUG.js";import"./ListBox-D292CMz9.js";import"./Loader-CUahapuN.js";import"./Check-Dm8L62ls.js";import"./utils-BxAExPwf.js";import"./Separator-DDSKUequ.js";import"./usePress-CDFmyKaG.js";import"./index-Cz7rZMbK.js";import"./index-B0lRm_1G.js";import"./FocusScope-BP9fTGYZ.js";import"./Hidden-DKyGv6tz.js";import"./ListBox-CqYTii-I.js";import"./DragAndDrop-BeOl25og.js";import"./Text-CL40AuMR.js";import"./useLabel-6hL-K7Ok.js";import"./Pill-hRu5-zUD.js";import"./Input-DdXxmcCd.js";import"./index-BZsqDNVk.js";import"./Button-V3q3VxeI.js";import"./RSPContexts-BhOYO7KW.js";import"./VisuallyHidden-D8bIOqcz.js";import"./SelectBase-TX_d4fq6.js";import"./Label-0KX0RCfQ.js";import"./index-CTgx0f1b.js";import"./variants--QwKUKWm.js";import"./KeyboardArrowDown-jRkr1Vv4.js";import"./Button-iiVeMA4W.js";import"./ButtonBase-CYrTN4BT.js";import"./Tooltip-B8HaEjgg.js";import"./IconButton-DdJt9_LL.js";import"./Modal-DAhdrlnW.js";import"./use-is-mobile-CutlMG9Z.js";import"./FilterListOff-DGQHA2TK.js";import"./Select-CrrzDqDx.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
