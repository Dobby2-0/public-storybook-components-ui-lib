import{L as i}from"./ListFilters-B8xrctTr.js";import"./iframe-BxGeAW9p.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BuK-YfQI.js";import"./ListBox-DFmQTbtx.js";import"./Loader-DD5z-3No.js";import"./Check-CSYQRTfY.js";import"./utils-BpDgISYU.js";import"./Separator-Bwvs0j6P.js";import"./usePress-BVO8P9dy.js";import"./index-DtuOhIc3.js";import"./index--AFMggx_.js";import"./FocusScope-BU3wNYAC.js";import"./Hidden-DpUWF-xQ.js";import"./ListBox-C-ckbFzp.js";import"./DragAndDrop-P6TRunS2.js";import"./Text-BMECbb0g.js";import"./useLabel-CnRqF9Wz.js";import"./Pill-CvVKW5vh.js";import"./Input-Bh4Wq3m-.js";import"./index-V1hUTO1d.js";import"./Button-Dgs9X42X.js";import"./RSPContexts-DD-n8dG3.js";import"./VisuallyHidden-Dzm5wi_8.js";import"./SelectBase-BNh1Yrvg.js";import"./Label-CfcCawkw.js";import"./index-BaZxuM5r.js";import"./variants-Ce9e1EgG.js";import"./KeyboardArrowDown-C6-uloT1.js";import"./Button-CJRC7oad.js";import"./ButtonBase-DC_baRV4.js";import"./Tooltip-HtiexWLj.js";import"./IconButton-CvcJAtJU.js";import"./Modal-BBM3R85g.js";import"./use-is-mobile-tz0h0XSI.js";import"./FilterListOff--cII6ZYn.js";import"./Select-BK23bhKt.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
