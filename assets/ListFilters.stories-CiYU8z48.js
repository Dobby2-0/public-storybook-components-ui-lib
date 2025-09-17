import{L as i}from"./ListFilters-RV7ZxEzQ.js";import"./iframe-Cz9yhdIa.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-EGapgEhg.js";import"./ListBox-CEf9oJPs.js";import"./Loader-DokNdlH5.js";import"./Check-wr4REtxR.js";import"./utils-Clz3z_fr.js";import"./Separator-C52jtr6k.js";import"./usePress-DVUkZvNI.js";import"./index-RgEKvJvz.js";import"./index-CCEJ7Jd7.js";import"./FocusScope-BU5jmXxz.js";import"./Hidden-BhdaoSJl.js";import"./ListBox-DVB25Bla.js";import"./DragAndDrop-CgtgLPCa.js";import"./Text-DzNCDAnX.js";import"./useLabel-CB7fjgrE.js";import"./Pill-Bqx_o0w-.js";import"./Input-B0YP7v72.js";import"./index-BMliXzMp.js";import"./Button-Ct33FO5A.js";import"./RSPContexts-CTceN0Bv.js";import"./VisuallyHidden-l9INfhTJ.js";import"./SelectBase-Cjwf07g4.js";import"./Label-DgeX9R9E.js";import"./index-kn6aLDQ-.js";import"./variants-DQh_-T4R.js";import"./KeyboardArrowDown-DLHuA-tF.js";import"./Button-rQHPJzt7.js";import"./ButtonBase-Cgv5C1M3.js";import"./Tooltip-D1TBVkRL.js";import"./IconButton-CuNs-yD6.js";import"./Modal-kwr0E-Y_.js";import"./use-is-mobile-Bm3tHqkj.js";import"./FilterListOff-DHH8yedS.js";import"./Select-Bfe0B2v6.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
