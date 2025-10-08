import{L as i}from"./ListFilters-CKe27yJH.js";import"./iframe-DZ4iz06R.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-DOq-5GSy.js";import"./ListBox-8WplZ_q0.js";import"./Loader-BzQ4QNcu.js";import"./Check-8lbq2QO3.js";import"./utils-dnQturRe.js";import"./Separator-sKHgdX37.js";import"./usePress-DAoAAGAL.js";import"./index-CRvrSVjt.js";import"./index-BYF-JKOK.js";import"./FocusScope-vtnTbGHA.js";import"./Hidden-DNDomPST.js";import"./ListBox-CmjHxd3O.js";import"./DragAndDrop-BBlYYiVI.js";import"./Text-ieAo1rGX.js";import"./useLabel-BgXQ2Dls.js";import"./Pill-BOd38cZN.js";import"./Input-9k992tVN.js";import"./index-Bn4TehOl.js";import"./Button-Crze3F_z.js";import"./RSPContexts-CEbtwRVA.js";import"./VisuallyHidden-CG9FKQyg.js";import"./SelectBase-C1Wk5ut6.js";import"./Label-Dwn1JaO_.js";import"./index-DzTh1wCX.js";import"./variants-CF_kUscs.js";import"./KeyboardArrowDown-Cqi17tZC.js";import"./Button-J9uDLfmH.js";import"./ButtonBase-BTbtU5ZY.js";import"./Tooltip-Czx61z5t.js";import"./IconButton-B7rLiM5q.js";import"./Modal-B35lp3sd.js";import"./use-is-mobile-Tb-2uvha.js";import"./FilterListOff-CUnCUPOj.js";import"./Select-rAxsUbYj.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
