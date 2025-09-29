import{L as i}from"./ListFilters-BDDHRpfx.js";import"./iframe-DBnObzrn.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-B41Eyrq0.js";import"./ListBox-9AX5Zh7m.js";import"./Loader-iGbdXS8B.js";import"./Check-DGxcuHpa.js";import"./utils-CmXHMkFm.js";import"./Separator-CUfliJ99.js";import"./usePress-DksSrDjq.js";import"./index-DrnuBweW.js";import"./index-BkS5XzE6.js";import"./FocusScope-BV70u0ED.js";import"./Hidden-8XDs_WM2.js";import"./ListBox-CuZsGKT-.js";import"./DragAndDrop-Bxw30OqG.js";import"./Text-CW5cJXdz.js";import"./useLabel-D5Tuz0kv.js";import"./Pill-CaSdWkbD.js";import"./Input-xMtkwtyt.js";import"./index-D6OcNlQi.js";import"./Button-DiiHpJL5.js";import"./RSPContexts-DZAnCItI.js";import"./VisuallyHidden-f3y7nvJ5.js";import"./SelectBase-Xde6dxva.js";import"./Label-4NsE0O4c.js";import"./index-BJjYWeBn.js";import"./variants-l05g1hgj.js";import"./KeyboardArrowDown-C23FBmxV.js";import"./Button-Cr0T578r.js";import"./ButtonBase-_YL9JEM3.js";import"./Tooltip-DpPc78rU.js";import"./IconButton-qeGxb-lN.js";import"./Modal-DsPNI3CW.js";import"./use-is-mobile-COGhAFP7.js";import"./FilterListOff-mQcch4kx.js";import"./Select-DspbnRlG.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
