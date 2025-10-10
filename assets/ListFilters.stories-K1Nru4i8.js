import{L as i}from"./ListFilters-Df7HDUgc.js";import"./iframe-CAHRDoSj.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-B6pnhxmy.js";import"./ListBox-x_fD8Bt0.js";import"./Loader-DDzIUxFb.js";import"./Check-C2Sw9Hss.js";import"./utils-DyzVzn3r.js";import"./Separator-CKhbfYPU.js";import"./usePress-CwS6QUX1.js";import"./index-CWor634J.js";import"./index-Bp86qpms.js";import"./FocusScope-D_y_TiQe.js";import"./Hidden-kAA1FSnX.js";import"./ListBox-Bsnsuq65.js";import"./DragAndDrop-CaXMIa95.js";import"./Text-D0bauOWY.js";import"./useLabel-CfnI-lB-.js";import"./Pill-CFWl9Xbn.js";import"./Input-BoXN7PFl.js";import"./index-BqeQ6Jil.js";import"./Button-Dqgu38c6.js";import"./RSPContexts-Np_bha3m.js";import"./VisuallyHidden-B5ne4b3M.js";import"./SelectBase-jiIw473B.js";import"./Label-BiMw_m6R.js";import"./index-CXdUdCRL.js";import"./variants-AnbSJ74B.js";import"./KeyboardArrowDown-XC_gZeGG.js";import"./Button-DTnDV5TU.js";import"./ButtonBase-CH9lJCwm.js";import"./Tooltip-gYIcqAG-.js";import"./IconButton-DO1CMlVY.js";import"./Modal-DsqUMCRj.js";import"./use-is-mobile-CBgeYPbx.js";import"./FilterListOff-COywPFbY.js";import"./Select-D5JGH2nq.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
