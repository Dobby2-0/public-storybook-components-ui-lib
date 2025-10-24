import{L as i}from"./ListFilters-DvY_n5Qo.js";import"./iframe-mVs7rMXm.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Bohe6Xkz.js";import"./ListBox-wpG0ndym.js";import"./Loader-C9o6Q5Zm.js";import"./Check-aEkzr57w.js";import"./utils-DzOfyjf1.js";import"./Separator-CF1OPFSd.js";import"./usePress-Bofozh85.js";import"./index-Bu1wuf1m.js";import"./index-syhJ53s_.js";import"./FocusScope-DDukxBSm.js";import"./Hidden-Dg6gXerV.js";import"./ListBox-qL-1pntL.js";import"./DragAndDrop-BlRJmZn5.js";import"./Text-CFRZXIUC.js";import"./useLabel-CG9d8bJ5.js";import"./Pill-fYwD8Z5I.js";import"./Input-DgLDsxiV.js";import"./index-BE-hz1XP.js";import"./Button-CP-6kYfK.js";import"./RSPContexts-C6xg6rec.js";import"./VisuallyHidden-tTGrPe3d.js";import"./SelectBase-DitrP2yD.js";import"./Label-D3Rl5VWx.js";import"./index-Dlgck1cG.js";import"./variants-DsAgtrSh.js";import"./KeyboardArrowDown-mwEvm4yI.js";import"./Button-CPOuuvI4.js";import"./ButtonBase-C00KeHWZ.js";import"./Tooltip-D9vad0Hf.js";import"./IconButton-BK1d3xQY.js";import"./Modal-C6ybugf3.js";import"./use-is-mobile-BvvV5XBR.js";import"./FilterListOff-9HfpZinU.js";import"./Select-DSkPQCGb.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
