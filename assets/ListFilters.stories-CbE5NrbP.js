import{L as i}from"./ListFilters-CIMjFCAV.js";import"./iframe-BSmYXjVO.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-D5zanUZL.js";import"./ListBox-BP8Mbn4a.js";import"./Loader-JBqYW2zh.js";import"./Check-0b-MQdoX.js";import"./utils-BsIxPqYP.js";import"./Separator-DebHZQk6.js";import"./usePress-DuBZEVvs.js";import"./index-klIopXI3.js";import"./index-CEhufqlP.js";import"./FocusScope-4rN7mK0_.js";import"./Hidden-Dj1-P9z-.js";import"./ListBox-Cb5_7k3s.js";import"./DragAndDrop-w1XgXqIx.js";import"./Text-DXRU8ZkD.js";import"./useLabel-CB5Ub93p.js";import"./Pill-BWELfylc.js";import"./Input-CLA21uk0.js";import"./index-DYbrKbtf.js";import"./Button-mBgBOGbs.js";import"./RSPContexts-CjqPehn9.js";import"./VisuallyHidden-CwV5N5lw.js";import"./SelectBase-KO-8fW3H.js";import"./Label-9tWRThww.js";import"./index-B5w_pHEv.js";import"./variants-BV_0hRIg.js";import"./KeyboardArrowDown-DaDLg03S.js";import"./Button-BLqrtYZU.js";import"./ButtonBase-WpTy9jlr.js";import"./Tooltip-ZW5uaDNE.js";import"./IconButton-DEo46tnU.js";import"./Modal-DP2Gjopr.js";import"./use-is-mobile-CTAn8ssn.js";import"./FilterListOff-DerK3pIv.js";import"./Select-dXyQ6Rkn.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
