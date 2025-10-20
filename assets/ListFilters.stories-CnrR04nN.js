import{L as i}from"./ListFilters-C6qVcyh_.js";import"./iframe-Bb-F9-Qv.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-D6ELaXC0.js";import"./ListBox-BLXd4h5w.js";import"./Loader-BG6xHHmv.js";import"./Check-CMsgfgg4.js";import"./utils-COU8szoP.js";import"./Separator-t2nwopoQ.js";import"./usePress-DxOAFx5a.js";import"./index-DIJBQyfn.js";import"./index-DCqJ3syt.js";import"./FocusScope-CeLUqzCL.js";import"./Hidden-go3X780L.js";import"./ListBox-fXSTXWMD.js";import"./DragAndDrop-zpDXSf0h.js";import"./Text-L47mxpUr.js";import"./useLabel-BkLScheI.js";import"./Pill-CyZW_Gky.js";import"./Input-i_DqTx5w.js";import"./index-B7jUlP7l.js";import"./Button-DZSvE5m6.js";import"./RSPContexts-CAtLG-s-.js";import"./VisuallyHidden-CFgwHoXT.js";import"./SelectBase-D2wnsdw1.js";import"./Label-CuM7HeB-.js";import"./index-ZjnUoIH6.js";import"./variants-CTpNxqX4.js";import"./KeyboardArrowDown-BWNFbXtR.js";import"./Button-KoeQPnwU.js";import"./ButtonBase-CodM2qj1.js";import"./Tooltip-Chqs63KO.js";import"./IconButton-Csiz5Qi1.js";import"./Modal-CDgViP2b.js";import"./use-is-mobile-BbTm_2-a.js";import"./FilterListOff-DW2OAlEj.js";import"./Select-D1F7hOCG.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
