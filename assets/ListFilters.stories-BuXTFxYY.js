import{L as i}from"./ListFilters-B70FklIn.js";import"./iframe-DigKr1Om.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-Dm7fu-B4.js";import"./ListBox-BG5Kd5GX.js";import"./Loader-Cj_YKQMC.js";import"./Check-C2RvNe94.js";import"./utils-B-VLpWL1.js";import"./Separator-DqMpg4TZ.js";import"./usePress-D1PDYcdl.js";import"./index-BBCUG9Nf.js";import"./index-ar4iv7ir.js";import"./FocusScope-D5uIQp3D.js";import"./Hidden-Ce6PGo4M.js";import"./ListBox-EeCF4Hsu.js";import"./DragAndDrop-Do4qYM5d.js";import"./Text-CygdCTcq.js";import"./useLabel-8sLxOv-W.js";import"./Pill-BzF7PoYE.js";import"./Input-Tdc1Jwao.js";import"./index-cj99HEtK.js";import"./Button-D-ilA-ag.js";import"./RSPContexts-CX5xhoiu.js";import"./VisuallyHidden-B0fHXY2j.js";import"./SelectBase-BwQBPk6D.js";import"./Label-Bs53qAj9.js";import"./index-TsQsGeNy.js";import"./variants-UopPvdd-.js";import"./KeyboardArrowDown-D6_4Bsiu.js";import"./Button-P4gF_Z_F.js";import"./ButtonBase-D_Fp6IX2.js";import"./Tooltip-D1wMFY4Z.js";import"./IconButton-DJLuP6Kr.js";import"./Modal-Dg5Ho2FX.js";import"./use-is-mobile-CJTQo79u.js";import"./FilterListOff-D1X8jeIP.js";import"./Select-9qHjYI0p.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
