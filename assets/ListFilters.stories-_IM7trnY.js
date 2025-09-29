import{L as i}from"./ListFilters-BX0ypznU.js";import"./iframe-5IEfGzXE.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-DQIhlDaB.js";import"./ListBox-BGyWtMxo.js";import"./Loader-D-eBb8G3.js";import"./Check-KM5_FBnh.js";import"./utils-BKnbYhMG.js";import"./Separator-BEJMVifu.js";import"./usePress-DUQn-7pn.js";import"./index-CAUVJQTj.js";import"./index-BNlYiRcO.js";import"./FocusScope-Cn5l4HhC.js";import"./Hidden-D7tuP1Wd.js";import"./ListBox-CEJHGLxH.js";import"./DragAndDrop-Q54wldgl.js";import"./Text-CFC3dFYq.js";import"./useLabel-3I_d-XAl.js";import"./Pill-CtlIgXQH.js";import"./Input-CxdRMaqW.js";import"./index-BAPMv0ud.js";import"./Button-YbOQXSwu.js";import"./RSPContexts-Dvv25O9r.js";import"./VisuallyHidden-DYW6wCxD.js";import"./SelectBase-apQkj3La.js";import"./Label-DrZSU7v_.js";import"./index-DeZF6bs0.js";import"./variants-UCmfpRDY.js";import"./KeyboardArrowDown-BJFiUtkH.js";import"./Button-D0AYaC-b.js";import"./ButtonBase-Dc1tPs-Z.js";import"./Tooltip-PRCnj6Ek.js";import"./IconButton-Znak6CDw.js";import"./Modal-PaZfobJc.js";import"./use-is-mobile-BafdcnfN.js";import"./FilterListOff-CAJFy0Je.js";import"./Select-6F4UM9ck.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
