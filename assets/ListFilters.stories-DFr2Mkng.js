import{L as i}from"./ListFilters-CPAMga8U.js";import"./iframe-BwNFWH1f.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BhZukN4t.js";import"./ListBox-ZC8CqDVC.js";import"./Loader-CSXLMFYo.js";import"./Check-B7fvyNFJ.js";import"./utils-Rlm7jdZ4.js";import"./Separator-DKYNZsGp.js";import"./usePress-DBR8AA51.js";import"./index-BX9lLRkz.js";import"./index-CtkWuY_Y.js";import"./FocusScope-BhwsVeU3.js";import"./Hidden-EiGuNxD5.js";import"./ListBox-88C5zmrG.js";import"./DragAndDrop-CF3sqFzb.js";import"./Text-Om7JnWTg.js";import"./useLabel-DzsVno54.js";import"./Pill-BCIMG4CD.js";import"./Input-BNmBTnKq.js";import"./index-Btmx5xex.js";import"./Button-Ddp-PUJ0.js";import"./RSPContexts-_iswUeoo.js";import"./VisuallyHidden-Cnanu79u.js";import"./SelectBase-CSioaiWQ.js";import"./Label-Cm1Uqibf.js";import"./index-CVQZdYvV.js";import"./variants-DtEjhCXQ.js";import"./KeyboardArrowDown-BBtYJRuP.js";import"./Button-6D7GHbIJ.js";import"./ButtonBase-BBviG9wf.js";import"./Tooltip-Sm4dml31.js";import"./IconButton-CBIVkMOS.js";import"./Modal-DG1iOUL3.js";import"./use-is-mobile-C8HjOwcr.js";import"./FilterListOff-D4nlNw6U.js";import"./Select-B8oFLh5Q.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
