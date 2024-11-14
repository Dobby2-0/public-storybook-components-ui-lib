import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{S as d}from"./Select-CnU868A0.js";import"./index-DRjF_FHU.js";import"./index-DEHCCq9W.js";import"./SVpyu8SL-kb1JahyB.js";import"./KeyboardArrowDown-BIpZZpcG.js";import"./Info-Dq1_dlTC.js";import"./index-Bb4qSo10.js";import"./Button-B_k9TS4D.js";import"./useFocusRing-DNy4Cq4z.js";import"./index-uWwxbAOW.js";import"./Hidden-D3ZxR1lF.js";import"./useFocusable-C1M6QJPT.js";import"./usePress-DDKpqujk.js";import"./FieldError-BXR932ti.js";import"./Text-BfM2IXwg.js";import"./useLabels-BUqBobcW.js";import"./Form-CLIbA08M.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CNRwsNg1.js";import"./Collection-C7szJ8gh.js";import"./DragAndDrop-QcOoM8V6.js";import"./context-B_57EvzL.js";import"./FocusScope-CUPih6c7.js";import"./SelectionManager-Dh6oP-vJ.js";import"./useControlledState-uSQY0H5C.js";import"./useListState-CJQaFpGJ.js";import"./Dialog-HTw8lr78.js";import"./RSPContexts-DYuYEgz3.js";import"./PortalProvider-LJ4uW0jU.js";import"./ariaHideOutside-CuHILKlT.js";import"./useLocalizedStringFormatter-C9SymMXr.js";import"./VisuallyHidden-BWP6VdkU.js";import"./useSingleSelectListState-uAtWBvlD.js";import"./useMenuTrigger-B8kFZJoC.js";import"./useFormReset-CyoK0Yn2.js";import"./ListBox-BDKJefc8.js";import"./Check-C4fwrEtC.js";import"./Popover-CWlz6Ueg.js";const i=({items:t,actions:a,onActionPerformed:n})=>{const c=o=>{const l=a.find(u=>u.id===o);l&&(l.event(t),n==null||n())};return r.jsxs("div",{className:"flex items-center gap-3 bg-neutral-800 text-neutral dark:bg-neutral-200 dark:text-neutral-1000 p-1.5 pl-3 rounded-md shadow-[0_2px_14px_0_rgba(0,0,0,0.25)] pointer-events-auto",children:[r.jsx("span",{children:`${t.length} item${t.length>1?"s":""} geselecteerd`}),r.jsx(d,{items:a,placeholder:"Acties",onSelectionChange:o=>c(o),className:"[&>button]:bg-neutral-900 [&>button]:border-neutral-900 [&>button>*]:!text-neutral [&>button>*]:fill-neutral [&>button]:dark:bg-neutral-100 [&>button]:dark:border-neutral-100 [&>button>*]:dark:!text-neutral-1000 [&>button>*]:dark:fill-neutral-1000"})]})};try{i.displayName="BulkActions",i.__docgenInfo={description:`Component to provide the user with the ability to perform an action on multiple items at once

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
