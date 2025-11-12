import{L as i}from"./ListFilters-jfEPdZIr.js";import"./iframe-DqPoarmI.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Do5fb2b3.js";import"./ListBox-DUTPcIgW.js";import"./Loader-BNpI1sTO.js";import"./Check-D5rZOVsb.js";import"./utils-DhrrRemw.js";import"./Separator-vACdU0XU.js";import"./usePress-6Rd71Q99.js";import"./index-DYQZGd4f.js";import"./index-B7IbPqx7.js";import"./FocusScope-DpjDel2o.js";import"./Hidden-D0b99FbT.js";import"./ListBox-CoIvpxI4.js";import"./DragAndDrop-DFwH3B7f.js";import"./Text-25-xGm_b.js";import"./useLabel-Cxt7HWZH.js";import"./Pill-4ZYKYFIq.js";import"./Input-Bvh6-KPS.js";import"./index-Bf7Lu_8g.js";import"./Button-Cm2_iMFf.js";import"./RSPContexts-D8Fm0ssB.js";import"./VisuallyHidden-CsxY983Z.js";import"./SelectBase-CQ5MM6K0.js";import"./Label-BxyBeU2R.js";import"./index-D-JzvDhh.js";import"./variants-BqybX_A8.js";import"./KeyboardArrowDown-YCSbb9N3.js";import"./Button-22XK-pj8.js";import"./ButtonBase-BgxUPvbA.js";import"./Tooltip-DwUrrbV1.js";import"./IconButton-Bb8rl1kr.js";import"./Modal-d43S9O5w.js";import"./use-is-mobile-nNcKfSun.js";import"./FilterListOff-BjvOb9pj.js";import"./Select-D4DIvBlv.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
