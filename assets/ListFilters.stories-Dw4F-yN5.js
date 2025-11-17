import{L as i}from"./ListFilters-B7OocauM.js";import"./iframe-o0TYpcWS.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-MxOkj6YK.js";import"./ListBox-2B5CRBgc.js";import"./Loader-i3isxEFD.js";import"./Check-BYiamBXn.js";import"./utils-6Xoa8S3p.js";import"./Separator-D56Kdn_n.js";import"./usePress-BUFvZDNn.js";import"./index-DDtjUNIE.js";import"./index-DCtvyVTM.js";import"./FocusScope-B_-Ik5Fg.js";import"./Hidden-BjkS2BD-.js";import"./ListBox-C6ytGWTy.js";import"./DragAndDrop-CJfQ0BzF.js";import"./Text-BC0OtlUB.js";import"./useLabel-V52eCJNr.js";import"./Pill-B73ExIIY.js";import"./Input-CO3Wmnwo.js";import"./index-CqQ0jQ-Y.js";import"./Button-BaNNE5GU.js";import"./RSPContexts-LFP89PNM.js";import"./VisuallyHidden-CbRbWld6.js";import"./SelectBase-C8Xj5dzQ.js";import"./Label-CK66xBx8.js";import"./index-jXBKBSNL.js";import"./variants-CD0RZY28.js";import"./KeyboardArrowDown-CkRSbWDm.js";import"./Button-DfEfUVSQ.js";import"./ButtonBase-DcbSxK8S.js";import"./Tooltip-D1POKIAR.js";import"./IconButton-Ci1zFG8v.js";import"./Modal-_47F_byR.js";import"./use-is-mobile-DHc96Y8z.js";import"./FilterListOff-D863tJHa.js";import"./Select-BqfP0XWE.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
