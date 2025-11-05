import{L as i}from"./ListFilters-prcieoAk.js";import"./iframe-JlWdiiHl.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-31WOtWNo.js";import"./ListBox-DxlabwBd.js";import"./Loader-yx3fH-TK.js";import"./Check-Cb5d6i5Y.js";import"./utils-B9FUAslD.js";import"./Separator-CXMyKefx.js";import"./usePress-CLQ8F3f5.js";import"./index-w7GDP4sO.js";import"./index-DrDOyqoK.js";import"./FocusScope-CP5yk3g1.js";import"./Hidden-CPBmKffQ.js";import"./ListBox-B5O-leqc.js";import"./DragAndDrop-f39aXZ9P.js";import"./Text-DHtVhlPo.js";import"./useLabel-Ck6TnA8s.js";import"./Pill-BpVr6TYj.js";import"./Input-Dz_NBn-4.js";import"./index-ZEaINpS0.js";import"./Button-BK1PxoQt.js";import"./RSPContexts-BwV0qXfK.js";import"./VisuallyHidden-BHkR_MPK.js";import"./SelectBase-Bbck38Gg.js";import"./Label-Cozg5pd1.js";import"./index-hIpYKxdI.js";import"./variants-4kH4djqJ.js";import"./KeyboardArrowDown-Dkg1zN07.js";import"./Button-B0c4j5xB.js";import"./ButtonBase-ClZRLPcQ.js";import"./Tooltip-Cmi8As55.js";import"./IconButton-BwOYIfxd.js";import"./Modal-B3BPmvJz.js";import"./use-is-mobile-01tpQQEt.js";import"./FilterListOff-B1XX2r4e.js";import"./Select-CIT7ufcF.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
