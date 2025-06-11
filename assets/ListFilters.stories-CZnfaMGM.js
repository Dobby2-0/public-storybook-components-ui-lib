import{L as r}from"./ListFilters-DzPhyToh.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./ComboBox-DN0UuAsL.js";import"./ListBox-CpsU_75Z.js";import"./Loader-BsPrQ8_e.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./index-tvICUrOf.js";import"./Check-FgbNu1D6.js";import"./useFocusRing-De8_vWxE.js";import"./platform-DO9ne4TU.js";import"./ListBox-asaKxFwG.js";import"./Header-Bo31PJBK.js";import"./usePress-jyRSkEHC.js";import"./openLink-Btrk4R3c.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./useDescription-CWQxiRdu.js";import"./FocusScope-C8WcBnFj.js";import"./context-BxCG6Cz5.js";import"./useControlledState-BZ6ANBWa.js";import"./Separator-DLggkP8A.js";import"./Hidden-975QGLs-.js";import"./DragAndDrop-CM0Wr761.js";import"./Text-DNKYJkYf.js";import"./useLabel-BNFm6v8H.js";import"./useLabels-B52qJwmh.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-Cxfx5faO.js";import"./Close-CQRyCptx.js";import"./Input-CYV0TCMr.js";import"./index-CnKvRkWh.js";import"./SelectBase-ssgdb5cy.js";import"./Label-BVYnJu1Z.js";import"./index-a5nvb9vf.js";import"./Popover-DT3YteLO.js";import"./Dialog-DLrl2gv5.js";import"./Button-Y1RDwf3W.js";import"./RSPContexts-B1Ggupi0.js";import"./PressResponder-CAmm6Bbq.js";import"./ariaHideOutside-Doz9nu2Q.js";import"./PortalProvider-ChirZUt_.js";import"./getScrollParent-C57vhpqh.js";import"./VisuallyHidden-Cn6kit17.js";import"./variants-CsVkyiyE.js";import"./Info-z3VoMegj.js";import"./KeyboardArrowDown-yCNVdyss.js";import"./Button-DNAJii3w.js";import"./ButtonBase-C8S7Km8K.js";import"./IconButton-C7EoDwAB.js";import"./Modal-DNF7oEO4.js";import"./use-is-mobile-D7QdiyOe.js";import"./Select-8QjhH60g.js";const oe={component:r},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,i;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(a=l.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ne=["Default"];export{l as Default,ne as __namedExportsOrder,oe as default};
