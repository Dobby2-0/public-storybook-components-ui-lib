import{L as i}from"./ListFilters-dDyyjgGy.js";import"./iframe-CZksL5En.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-BdnOfVGA.js";import"./ListBox-itBwQFkn.js";import"./Loader-DrD17BOK.js";import"./Check-D5q7GUfA.js";import"./utils-COL0tqz2.js";import"./Separator-SO3Z106d.js";import"./usePress-Duq_bcqf.js";import"./index-CEiKeTfP.js";import"./index-BgdtoxEC.js";import"./FocusScope-BbM6KRrx.js";import"./Hidden-CuUlOXSV.js";import"./ListBox-BZ2TFunV.js";import"./DragAndDrop-D791VrBD.js";import"./Text-Bl2g3mel.js";import"./useLabel-B2Im7iTG.js";import"./Pill-Pny9P-ti.js";import"./Input-ySfQ6Hsz.js";import"./index-BEn5an2L.js";import"./Button-C9K4X3dI.js";import"./RSPContexts-cDTZ3t3D.js";import"./VisuallyHidden-BHrkkriS.js";import"./SelectBase-BE6-tveq.js";import"./Label-DJwWHgFx.js";import"./index-DEN5lkrX.js";import"./variants-rCwG2jtL.js";import"./KeyboardArrowDown-V3IbobSQ.js";import"./Button-HxKFaTMR.js";import"./ButtonBase-Lrva-ME6.js";import"./Tooltip-Bxn9ACly.js";import"./IconButton-CNJx-FRM.js";import"./Modal-D40edpj0.js";import"./use-is-mobile-Cj7mTPab.js";import"./FilterListOff-0WwmKmKO.js";import"./Select-Cp1W84kl.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
