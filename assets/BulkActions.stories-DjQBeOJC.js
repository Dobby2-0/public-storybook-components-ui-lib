import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{S as d}from"./Select-_STG31Zs.js";import"./index-DRjF_FHU.js";import"./index-DbF_LCtC.js";import"./Info-CwC22AGT.js";import"./KeyboardArrowDown-Dio4eISq.js";import"./index-Bb4qSo10.js";import"./Button-DAMHuVxy.js";import"./useFocusRing-COHXKEhw.js";import"./index-uWwxbAOW.js";import"./Hidden-CbCJUow4.js";import"./useFocusable-Bby8otC-.js";import"./usePress-CEEQ2DfS.js";import"./FieldError-Dg3SKJ14.js";import"./Text-YYl8Jarj.js";import"./useLabels-BGJSVpoH.js";import"./Form-BySC8j8W.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BCUSPfab.js";import"./Collection-DBqu8l_V.js";import"./DragAndDrop-Brvc0Xnm.js";import"./context-NQqpI-UJ.js";import"./FocusScope-Cyqu5Mq1.js";import"./isScrollable-BSEN4xi5.js";import"./useControlledState-uSQY0H5C.js";import"./Dialog-CY5ZVVOu.js";import"./RSPContexts-DYuYEgz3.js";import"./PortalProvider-DG1WN5c3.js";import"./ariaHideOutside-DuLZqUiR.js";import"./useLocalizedStringFormatter-CX6MBcGE.js";import"./VisuallyHidden-BtSD6aGO.js";import"./useSingleSelectListState-mykHAB-z.js";import"./useFormReset-jv0JQDbt.js";import"./ListBox-CQv-5Hin.js";import"./Check-f6fs0czz.js";import"./Popover-trQ-YC2X.js";const i=({items:t,actions:a,onActionPerformed:n})=>{const c=o=>{const l=a.find(u=>u.id===o);l&&(l.event(t),n==null||n())};return r.jsxs("div",{className:"flex items-center gap-3 bg-neutral-800 text-neutral dark:bg-neutral-200 dark:text-neutral-1000 p-1.5 pl-3 rounded-md shadow-[0_2px_14px_0_rgba(0,0,0,0.25)] pointer-events-auto",children:[r.jsx("span",{children:`${t.length} item${t.length>1?"s":""} geselecteerd`}),r.jsx(d,{items:a,placeholder:"Acties",onSelectionChange:o=>c(o),className:"[&>button]:bg-neutral-900 [&>button]:border-neutral-900 [&>button>*]:!text-neutral [&>button>*]:fill-neutral [&>button]:dark:bg-neutral-100 [&>button]:dark:border-neutral-100 [&>button>*]:dark:!text-neutral-1000 [&>button>*]:dark:fill-neutral-1000"})]})};try{i.displayName="BulkActions",i.__docgenInfo={description:`Component to provide the user with the ability to perform an action on multiple items at once

Should be used in conjunction with table row selection and Popover component`,displayName:"BulkActions",props:{items:{defaultValue:null,description:"Array of items on which the action should be performed",name:"items",required:!0,type:{name:"T[]"}},actions:{defaultValue:null,description:"List of actions available",name:"actions",required:!0,type:{name:"BulkAction<T>[]"}},onActionPerformed:{defaultValue:null,description:"Callback function called after executing an action",name:"onActionPerformed",required:!1,type:{name:"(() => void)"}}}}}catch{}const X={component:i},e={args:{items:[{id:"1"}],actions:[{id:"1",label:"Actie 1",event:t=>{console.warn("Actie 1",t)}},{id:"2",label:"Actie 2",event:t=>{console.warn("Actie 2",t)}}]}};var p,s,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1"
    }],
    actions: [{
      id: "1",
      label: "Actie 1",
      event: items => {
        console.warn("Actie 1", items);
      }
    }, {
      id: "2",
      label: "Actie 2",
      event: items => {
        console.warn("Actie 2", items);
      }
    }]
  }
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,X as default};
