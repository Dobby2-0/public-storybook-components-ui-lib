import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{S as d}from"./Select-fYOOzSrH.js";import"./index-DRjF_FHU.js";import"./index-iB5ESbfh.js";import"./SVpyu8SL-kb1JahyB.js";import"./KeyboardArrowDown-BIpZZpcG.js";import"./Info-Dq1_dlTC.js";import"./index-Bb4qSo10.js";import"./Button-BAONxVOA.js";import"./useFocusRing-BDCLxdHg.js";import"./index-uWwxbAOW.js";import"./Hidden-BQxe9iwQ.js";import"./useFocusable-DLbL3L9v.js";import"./usePress-7HEdGBJW.js";import"./FieldError-C4gv9z8e.js";import"./Text-EhxhI55T.js";import"./useLabels-CoWajxQ8.js";import"./Form-rmFZAXcU.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CwzEbpor.js";import"./Collection-DRqAicu0.js";import"./DragAndDrop-AF_Njh29.js";import"./context-Dd3Tsyv-.js";import"./FocusScope-Wo7kQ_Qj.js";import"./SelectionManager-DIJt_wjX.js";import"./useControlledState-uSQY0H5C.js";import"./useListState-98eh8J0v.js";import"./Dialog-DXl7fqa1.js";import"./RSPContexts-DYuYEgz3.js";import"./PortalProvider-LJ4uW0jU.js";import"./ariaHideOutside-q57_CO0_.js";import"./useLocalizedStringFormatter-DmzOLU0f.js";import"./VisuallyHidden-BVIsPSEO.js";import"./useSingleSelectListState-ROMjc3Gg.js";import"./useMenuTrigger-CEmmfsL9.js";import"./useFormReset-DuKcgjMO.js";import"./ListBox-CPBDSlX-.js";import"./Check-C4fwrEtC.js";import"./Popover-CbLx9QzW.js";const i=({items:t,actions:a,onActionPerformed:n})=>{const c=o=>{const l=a.find(u=>u.id===o);l&&(l.event(t),n==null||n())};return r.jsxs("div",{className:"flex items-center gap-3 bg-neutral-800 text-neutral dark:bg-neutral-200 dark:text-neutral-1000 p-1.5 pl-3 rounded-md shadow-[0_2px_14px_0_rgba(0,0,0,0.25)] pointer-events-auto",children:[r.jsx("span",{children:`${t.length} item${t.length>1?"s":""} geselecteerd`}),r.jsx(d,{items:a,placeholder:"Acties",onSelectionChange:o=>c(o),className:"[&>button]:bg-neutral-900 [&>button]:border-neutral-900 [&>button>*]:!text-neutral [&>button>*]:fill-neutral [&>button]:dark:bg-neutral-100 [&>button]:dark:border-neutral-100 [&>button>*]:dark:!text-neutral-1000 [&>button>*]:dark:fill-neutral-1000"})]})};try{i.displayName="BulkActions",i.__docgenInfo={description:`Component to provide the user with the ability to perform an action on multiple items at once

Should be used in conjunction with table row selection and Popover component`,displayName:"BulkActions",props:{items:{defaultValue:null,description:"Array of items on which the action should be performed",name:"items",required:!0,type:{name:"T[]"}},actions:{defaultValue:null,description:"List of actions available",name:"actions",required:!0,type:{name:"BulkAction<T>[]"}},onActionPerformed:{defaultValue:null,description:"Callback function called after executing an action",name:"onActionPerformed",required:!1,type:{name:"(() => void)"}}}}}catch{}const P={component:i},e={args:{items:[{id:"1"}],actions:[{id:"1",label:"Actie 1",event:t=>{console.warn("Actie 1",t)}},{id:"2",label:"Actie 2",event:t=>{console.warn("Actie 2",t)}}]}};var p,m,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const tt=["Default"];export{e as Default,tt as __namedExportsOrder,P as default};
