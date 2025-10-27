import{L as i}from"./ListFilters-C6VhM9QU.js";import"./iframe-CqGwk_ti.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Cx9AYTFp.js";import"./ListBox-Brm8ZzWy.js";import"./Loader-CmdWk6mi.js";import"./Check-BmyTufyi.js";import"./utils-D6j8o2cJ.js";import"./Separator-lWngIFzm.js";import"./usePress-hZBHe2Y1.js";import"./index-B1OMVKlf.js";import"./index-DoAUk5tk.js";import"./FocusScope-DCpKNz2v.js";import"./Hidden-Bqruwxpo.js";import"./ListBox-Bi3p1sHS.js";import"./DragAndDrop-BeZ36J-G.js";import"./Text-DnMX30Ln.js";import"./useLabel-vhRW4LVQ.js";import"./Pill-DPnpsQeB.js";import"./Input-CrrOXk0k.js";import"./index-DxEvt5nF.js";import"./Button-Dwr1gNo8.js";import"./RSPContexts-CvFpMR5G.js";import"./VisuallyHidden-C_QBSwm5.js";import"./SelectBase-DZ8QmnDR.js";import"./Label-DUsBgjQR.js";import"./index-CyAxdgCh.js";import"./variants-MbpVDsiM.js";import"./KeyboardArrowDown-BUfU2db7.js";import"./Button-X43wK8IW.js";import"./ButtonBase-DSBFczeu.js";import"./Tooltip-1ieUy6fn.js";import"./IconButton-OUFpSXxE.js";import"./Modal-CJlaBXEg.js";import"./use-is-mobile-BDfsqbkd.js";import"./FilterListOff-cDwjQQMg.js";import"./Select-BpWLgDHg.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
