import{L as i}from"./ListFilters-D1y-Jxn8.js";import"./iframe-DzHgz_R0.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BEMwvy3t.js";import"./ListBox-DLZtGzZh.js";import"./Loader-CoXJRd0A.js";import"./Check-CZgIq8UQ.js";import"./utils-BNSxeWSS.js";import"./Separator-BE4fQ99B.js";import"./usePress-B28ZCfrq.js";import"./index-lNHsNeNb.js";import"./index-Coa52mpR.js";import"./FocusScope-ufh2Eq3k.js";import"./Hidden-DDBldYzx.js";import"./ListBox-CBJZICF7.js";import"./DragAndDrop-CyMDA0gp.js";import"./Text-D5t9Swb1.js";import"./useLabel-D1GGIt6g.js";import"./Pill-suN6DgqO.js";import"./Input-NBZ5TvP8.js";import"./index-O5q8PLHp.js";import"./Button-CZJRwUcQ.js";import"./RSPContexts--LViVSKW.js";import"./VisuallyHidden-CV11xDJs.js";import"./SelectBase-Ct_1VDYd.js";import"./Label-nAI03wu_.js";import"./index-BW8A16l8.js";import"./variants-C0JVJo5C.js";import"./KeyboardArrowDown-Cbo3hghj.js";import"./Button-BcX9VdUe.js";import"./ButtonBase-CmRWFr30.js";import"./Tooltip-BuHsfSag.js";import"./IconButton-BgibkKDI.js";import"./Modal-DUaf4VRM.js";import"./use-is-mobile-tUkq6omt.js";import"./FilterListOff-_ANg6NKJ.js";import"./Select-DJyE7P-L.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
