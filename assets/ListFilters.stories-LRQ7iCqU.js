import{L as i}from"./ListFilters-BS269r0j.js";import"./iframe-DgaJYh6P.js";import"./preload-helper-Dp1pzeXC.js";import"./ComboBox-CUtcQin-.js";import"./ListBox-DPtY0Gvp.js";import"./Loader-CJN6q-l3.js";import"./Check-HdJbGISQ.js";import"./utils-zFreqGng.js";import"./Separator-DsVPw386.js";import"./usePress-DdZdM5TM.js";import"./index-BZBJBxMA.js";import"./index-CiTFHc9n.js";import"./FocusScope-7mG_kVK-.js";import"./Hidden-Dy2nacwr.js";import"./ListBox-cDXTUcI_.js";import"./DragAndDrop-CVNm0mex.js";import"./Text-gXLstkbP.js";import"./useLabel-CzfMFNF9.js";import"./Pill-FruOqT-Z.js";import"./Input-TlsHfPwX.js";import"./index-IkpQ4eUl.js";import"./Button-D0GcZ5bi.js";import"./RSPContexts-D0tqF-rp.js";import"./VisuallyHidden-D1bzEdbC.js";import"./SelectBase-BvwcziuG.js";import"./Label-CTEhDgI1.js";import"./index-CgzT9SyE.js";import"./variants-Da0BcmjJ.js";import"./KeyboardArrowDown-DNV-BVk4.js";import"./Button-BdCjDUEF.js";import"./ButtonBase-Bk2l1QtS.js";import"./Tooltip-B8M6KfTR.js";import"./IconButton-TDc_s2fV.js";import"./Modal-aWD5VUVE.js";import"./use-is-mobile-DAyZqDF7.js";import"./FilterListOff-BDURnKXn.js";import"./Select-CXbuGZlm.js";const q={component:i},l={args:{className:"w-[80vw]",filterValues:{status:["PENDING","APPROVED"]},filters:[{filterType:"single-select",name:"createdAt",placeholder:"Created at",items:[{id:"day",label:"Last 24 hours"},{id:"week",label:"Last 7 days"},{id:"month",label:"Last 30 days"},{id:"halfYear",label:"Last 6 months"},{id:"year",label:"Last year"}],labelResolver:e=>e.label},{filterType:"multi-select",name:"status",placeholder:"Status",items:[{id:"PENDING",label:"Pending approval"},{id:"APPROVED",label:"Approved"},{id:"TO_BE_SOLVED",label:"To be solved"},{id:"SOLVED",label:"Solved"},{id:"REJECTED",label:"Rejected"}],labelResolver:e=>e.label},{filterType:"combobox",name:"responsible",placeholder:"Responsible user",items:[{id:"1",label:"John Doe"},{id:"2",label:"Jane Doe"},{id:"3",label:"Jeff"}],labelResolver:e=>e.label}]}};var t,a,n;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
