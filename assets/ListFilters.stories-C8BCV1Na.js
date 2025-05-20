import{L as l}from"./DetailPageHeader-BxwRBiwI.js";import"./jsx-runtime-F1iDwNaf.js";import"./index-YTOF1_EJ.js";import"./index-DzfFlqCY.js";import"./BulkActions-7CC5J6B5.js";import"./Button-BPhMgJ7F.js";import"./index-UoR2Am_h.js";import"./useFocusRing-BhqMP7Wf.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-BGunrqIr.js";import"./Loader-xB9gCnz2.js";import"./Button-BdmBsY1d.js";import"./Hidden-D7ttFcTv.js";import"./usePress-BUSFzwYD.js";import"./openLink-DdIfhzZQ.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./Select-VLQn1fhD.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./SelectBase-DiiciSaR.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./ListBox-BB9uhSt7.js";import"./Check-d3BnqXpp.js";import"./ListBox-DgwY20GW.js";import"./Header-DYgvXHaf.js";import"./useDescription-DzZWTAGl.js";import"./FocusScope-BZe3pABC.js";import"./context-HK5jm6EM.js";import"./useControlledState-DSc3NtNd.js";import"./Separator-VQwpI8cE.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-SKeF9n-L.js";import"./useLabel-D8vA6x2F.js";import"./useLabels-Cu4YAmyo.js";import"./useTranslation-Dw3DpAYw.js";import"./Popover-D48GIqWz.js";import"./Dialog-ok1EYznv.js";import"./RSPContexts-D68aBqj8.js";import"./PressResponder-DU6eNYGA.js";import"./ariaHideOutside-Dy5gdQvH.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-C7zgn3BX.js";import"./VisuallyHidden-dgF7iibt.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./index-Db92_y2_.js";import"./IconButton-BwFQKJhY.js";import"./DateTimePicker-4rrvGTNc.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./DndList-CVoyEBmk.js";import"./sortable.esm-CMOp3Hru.js";import"./DragIndicator-B8qafwOQ.js";import"./DobbyContextProvider-D9oKwZ2Y.js";import"./Toaster-CqbWsPa5.js";import"./Alert-FhG3H6S_.js";import"./CheckCircle-BbpI1E_x.js";import"./Error-LHnIo6fp.js";import"./index.browser-OxPLOBIU.js";import"./ErrorPage-BHMUOT5I.js";import"./FileList-De-6jkGU.js";import"./Description-MSnmsYJ8.js";import"./Form-CCtte1Pf.js";import"./TextField-DbuoP_yg.js";import"./Input--1n2ZCo3.js";import"./FieldError-BrTfLDfE.js";import"./Form-CGWYqixX.js";import"./useFormReset-DE659B4Z.js";import"./ComboBox-DuBnYnNT.js";import"./use-is-mobile-BARwOXDw.js";import"./RadioGroup-CjTvdlQM.js";import"./RichTextEditor-CvR76RED.js";import"./Menu-BnPT8Uoi.js";import"./Toolbar-DRPBS-KR.js";import"./Tooltip-D9x7OFDs.js";import"./ArrowBack-B0FNs2_8.js";const Ne={component:l},t={args:{className:"w-[80vw]",filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    className: "w-[80vw]",
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Ve=["Defult"];export{t as Defult,Ve as __namedExportsOrder,Ne as default};
