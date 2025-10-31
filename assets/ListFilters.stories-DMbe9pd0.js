import{L as i}from"./ListFilters-3_5u8-9y.js";import"./iframe-cWmR0RA0.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-JQk1A2_n.js";import"./ListBox-ZeEvjtok.js";import"./Loader-fYHsT7Mc.js";import"./Check-DJfcJKLz.js";import"./utils-DANM3Yhz.js";import"./Separator-CwBMJrYt.js";import"./usePress-B7f2xl3D.js";import"./index-BdmCJmHw.js";import"./index-CbVDRwwe.js";import"./FocusScope-D1FOTx7Z.js";import"./Hidden-C04a7Jfz.js";import"./ListBox-C1CBplYT.js";import"./DragAndDrop-CZoR4VWh.js";import"./Text-B6m3pqfR.js";import"./useLabel-opnwvkWr.js";import"./Pill-glUImDlb.js";import"./Input-D9_Roog8.js";import"./index-DqP9FTCV.js";import"./Button-D33AB1AL.js";import"./RSPContexts-CZUNsAI9.js";import"./VisuallyHidden-DmuXfuGd.js";import"./SelectBase-BvL6Jgin.js";import"./Label-DgdJfSeo.js";import"./index-DymFpdQR.js";import"./variants-Co94fyhb.js";import"./KeyboardArrowDown-Kd9x3ms5.js";import"./Button-BmeSwfsK.js";import"./ButtonBase-CNM21T1D.js";import"./Tooltip-D_gyujFE.js";import"./IconButton-BKj4AuYV.js";import"./Modal-Da6noF8a.js";import"./use-is-mobile-F29SvEve.js";import"./FilterListOff-BYEoZxvd.js";import"./Select-Dk_aorhe.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
