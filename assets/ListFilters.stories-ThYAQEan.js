import{L as i}from"./ListFilters-C5nzGHtA.js";import"./iframe-pCPVTgLY.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-xK4HB-cm.js";import"./ListBox-DR-3XH6b.js";import"./Loader-CQzFzc2z.js";import"./Check-DMsJCCZz.js";import"./utils-KssRnhJo.js";import"./Separator-YlK9KSKU.js";import"./usePress-B_HPZUlW.js";import"./index-BZCuiuLl.js";import"./index-BAH2mmZG.js";import"./FocusScope-CZzRTEYS.js";import"./Hidden-BFWSptsY.js";import"./ListBox-DOlAEPS4.js";import"./DragAndDrop-D_3O_Mpu.js";import"./Text-D4MUNd0p.js";import"./useLabel-Cl2QU3LM.js";import"./Pill-CqovfzcU.js";import"./Input-B0ehA1bT.js";import"./index-Cjc6cs_a.js";import"./Button-BoVUN8m3.js";import"./RSPContexts-C7hTczkb.js";import"./VisuallyHidden-BnoW5Exi.js";import"./SelectBase-h7pFXi4a.js";import"./Label-CrxS0y54.js";import"./index-Ci0KHNEk.js";import"./variants-BUHBdf3E.js";import"./KeyboardArrowDown-3MN0zNXx.js";import"./Button-DJP_bHjW.js";import"./ButtonBase-CIbgKNRk.js";import"./Tooltip-B_jAPYcF.js";import"./IconButton-BEihGyTK.js";import"./Modal-BvTA9RK4.js";import"./use-is-mobile-BgbsMXjM.js";import"./FilterListOff-BQR_ogMz.js";import"./Select-BtifVWXe.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
