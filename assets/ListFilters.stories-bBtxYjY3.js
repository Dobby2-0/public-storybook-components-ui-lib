import{L as i}from"./ListFilters-B3Ocl4QL.js";import"./iframe-DyM0pRHS.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BCm53dDf.js";import"./ListBox-Di9ZcfVO.js";import"./Loader-NhHMjgG6.js";import"./Check-eXuHb0sB.js";import"./utils-DMTPWBc_.js";import"./Separator-CKnPN-rU.js";import"./usePress-UJN_1VFH.js";import"./index-Cm2IneC0.js";import"./index-4nPyI7ty.js";import"./FocusScope-DdxFpdp9.js";import"./Hidden-BsbvfOZ6.js";import"./ListBox-BZEzMSSX.js";import"./DragAndDrop-Bwttd0Fw.js";import"./Text-CTxv4ony.js";import"./useLabel-cgr6UQki.js";import"./Pill-DkJ9VafM.js";import"./Input-B5qUYEDa.js";import"./index-DtGZiul-.js";import"./Button-BHPZzixC.js";import"./RSPContexts-CCgX4cpz.js";import"./VisuallyHidden-GuNs7VLS.js";import"./SelectBase-DVcp6qmc.js";import"./Label-BGKLD9mf.js";import"./index-DZ5G9k8-.js";import"./variants-DTRF1OOe.js";import"./KeyboardArrowDown-DIX3I_WI.js";import"./Button-CIZY2u7k.js";import"./ButtonBase-CXob6006.js";import"./Tooltip-BsKdUJc3.js";import"./IconButton-CoFjjgNf.js";import"./Modal-CJtx8DTQ.js";import"./use-is-mobile-B3TLdaS3.js";import"./FilterListOff-B4pGK056.js";import"./Select-CUpR5Zfa.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
