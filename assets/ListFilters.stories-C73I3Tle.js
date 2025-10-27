import{L as i}from"./ListFilters-CuI-rZ2g.js";import"./iframe-xNs60RAO.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-CZ5ic9AG.js";import"./ListBox-1cdKDqGE.js";import"./Loader-DySeLuqF.js";import"./Check-C8Iu3Mbw.js";import"./utils-kOvM0wlX.js";import"./Separator-H0GBRA_c.js";import"./usePress-CfBsgoI1.js";import"./index-DvkX0WGL.js";import"./index-BQkmhLdL.js";import"./FocusScope-HfU7U7z4.js";import"./Hidden-Bke7puBK.js";import"./ListBox-1D_bqHJP.js";import"./DragAndDrop-Dso0fY5z.js";import"./Text-CfxXgIOk.js";import"./useLabel-BI0WJR49.js";import"./Pill-C8--2Nmm.js";import"./Input-yonS2zAm.js";import"./index-B1xDLFoh.js";import"./Button-CbNA8j_n.js";import"./RSPContexts-CrkHLIAp.js";import"./VisuallyHidden-DIGO1UZx.js";import"./SelectBase-GF1Xp6mk.js";import"./Label-Ks4tByTG.js";import"./index-Btwbjr86.js";import"./variants-vcJcKm5D.js";import"./KeyboardArrowDown-B8dnAo4J.js";import"./Button-IIy-mMAx.js";import"./ButtonBase-Cah5No2e.js";import"./Tooltip-BS0-9Uhb.js";import"./IconButton-jFffP_Py.js";import"./Modal-Di0_ZRhX.js";import"./use-is-mobile-BI2iwzPX.js";import"./FilterListOff-DsrKvZbX.js";import"./Select-CvbBmRQz.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
