import{L as i}from"./ListFilters-C3FJGumk.js";import"./iframe-nfYaCMFG.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Dh7W8tEI.js";import"./ListBox-B8ieJs6S.js";import"./Loader-BRFPJhgB.js";import"./Check-6HfRFboM.js";import"./utils-DsplgZ5_.js";import"./Separator-DrIqXTMA.js";import"./usePress-C-JupEBC.js";import"./index-DU8kGLuZ.js";import"./index-O77fUrkO.js";import"./FocusScope-C9_LKvrg.js";import"./Hidden-DnULKSXS.js";import"./index-CgM6Dbo0.js";import"./ListBox-BxMngG_4.js";import"./DragAndDrop-Cf3fUj8C.js";import"./Text-DIiBg8cY.js";import"./useLabel-oY3WoAVJ.js";import"./Pill-DcHgFBvL.js";import"./Input-Dt4RYi3I.js";import"./index-BvypQtYJ.js";import"./Button-BySXh0l7.js";import"./RSPContexts-DznLQtVB.js";import"./VisuallyHidden-BO-OLnWP.js";import"./SelectBase-CLFRtdhz.js";import"./Label-jyyH59mV.js";import"./index-ByjHB0Qw.js";import"./variants-Cu34kl6A.js";import"./KeyboardArrowDown-DsZyhcs8.js";import"./Button-DaRav7Eg.js";import"./ButtonBase-B4OT_qP6.js";import"./Tooltip-Da-VtRb-.js";import"./IconButton-BirmpWIl.js";import"./Modal-C-E0_4Qy.js";import"./use-is-mobile-CNbWyQ3l.js";import"./FilterListOff-_EW9Q2XU.js";import"./Select-D5dX_469.js";const z={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(a=l.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const H=["Default"];export{l as Default,H as __namedExportsOrder,z as default};
