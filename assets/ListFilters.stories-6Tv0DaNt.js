import{L as i}from"./ListFilters-Dr_P7E13.js";import"./iframe-BNnN4MmS.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-DNM57PWm.js";import"./ListBox-BuNMU1H0.js";import"./Loader-C5JNIkHB.js";import"./Check-D0EhUYqc.js";import"./utils-cuul9-mM.js";import"./Separator-A4hyt2l7.js";import"./usePress-CpSiXQTN.js";import"./index-DVk5Avbs.js";import"./index-pnAaiu9d.js";import"./FocusScope-BdluV1yS.js";import"./Hidden-C9-RUt87.js";import"./ListBox-s1D17cQx.js";import"./DragAndDrop-B0Vvj8gH.js";import"./Text-CmVhqKLU.js";import"./useLabel-BKK0Q91T.js";import"./Pill-5jjB8f2B.js";import"./Input-DSguzKrS.js";import"./index-Ct0qmGSf.js";import"./Button-DHVIX8xh.js";import"./RSPContexts-CcQhJdYD.js";import"./VisuallyHidden-zKfq8fxw.js";import"./SelectBase-D-otatPg.js";import"./Label-DP_i8hYI.js";import"./index-CiBnTYQo.js";import"./variants-Dd5aisLQ.js";import"./KeyboardArrowDown-h4hbwNoC.js";import"./Button-CJZUwJ_Z.js";import"./ButtonBase-DBk1Id1q.js";import"./Tooltip-DpswSR1y.js";import"./IconButton-D5C6V7U6.js";import"./Modal-BBBbMGex.js";import"./use-is-mobile-DkeE2EUn.js";import"./FilterListOff-DkkVCJ6t.js";import"./Select-EB9wlXNH.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
