import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{S as d}from"./Select-BOhVh4Dq.js";import"./index-DRjF_FHU.js";import"./index-DbF_LCtC.js";import"./Info-CwC22AGT.js";import"./KeyboardArrowDown-Dio4eISq.js";import"./index-Bb4qSo10.js";import"./Button-y-K8Ltt2.js";import"./useFocusRing-CbqlcRcM.js";import"./index-uWwxbAOW.js";import"./Hidden-cNgNYADS.js";import"./useFocusable-CkCYFKaT.js";import"./usePress-BJhFWZiC.js";import"./FieldError-Ck2zrKGQ.js";import"./Text-CbnQEBYv.js";import"./useLabels-BVJvhECp.js";import"./Form-CoufO1UN.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BhccQcHl.js";import"./Collection-CTnSfGb1.js";import"./DragAndDrop-D41id3yr.js";import"./context-D23C6NFd.js";import"./FocusScope-BLnXaZ_1.js";import"./SelectionManager-C_CyI_eF.js";import"./useControlledState-uSQY0H5C.js";import"./useListState-iuIj62RN.js";import"./Dialog-Ds4FKggB.js";import"./RSPContexts-DYuYEgz3.js";import"./PortalProvider-DG1WN5c3.js";import"./ariaHideOutside-mw83Tz_1.js";import"./useLocalizedStringFormatter-C9r8_5dd.js";import"./VisuallyHidden-B_3gckTd.js";import"./useSingleSelectListState-Usafg2Dm.js";import"./useMenuTrigger-Bc5THr6o.js";import"./useFormReset-DpimecJZ.js";import"./ListBox-1_8XLBQq.js";import"./Check-f6fs0czz.js";import"./Popover-D8uuvgbG.js";const i=({items:t,actions:a,onActionPerformed:n})=>{const c=o=>{const l=a.find(u=>u.id===o);l&&(l.event(t),n==null||n())};return r.jsxs("div",{className:"flex items-center gap-3 bg-neutral-800 text-neutral dark:bg-neutral-200 dark:text-neutral-1000 p-1.5 pl-3 rounded-md shadow-[0_2px_14px_0_rgba(0,0,0,0.25)] pointer-events-auto",children:[r.jsx("span",{children:`${t.length} item${t.length>1?"s":""} geselecteerd`}),r.jsx(d,{items:a,placeholder:"Acties",onSelectionChange:o=>c(o),className:"[&>button]:bg-neutral-900 [&>button]:border-neutral-900 [&>button>*]:!text-neutral [&>button>*]:fill-neutral [&>button]:dark:bg-neutral-100 [&>button]:dark:border-neutral-100 [&>button>*]:dark:!text-neutral-1000 [&>button>*]:dark:fill-neutral-1000"})]})};try{i.displayName="BulkActions",i.__docgenInfo={description:`Component to provide the user with the ability to perform an action on multiple items at once

Should be used in conjunction with table row selection and Popover component`,displayName:"BulkActions",props:{items:{defaultValue:null,description:"Array of items on which the action should be performed",name:"items",required:!0,type:{name:"T[]"}},actions:{defaultValue:null,description:"List of actions available",name:"actions",required:!0,type:{name:"BulkAction<T>[]"}},onActionPerformed:{defaultValue:null,description:"Callback function called after executing an action",name:"onActionPerformed",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={component:i},e={args:{items:[{id:"1"}],actions:[{id:"1",label:"Actie 1",event:t=>{console.warn("Actie 1",t)}},{id:"2",label:"Actie 2",event:t=>{console.warn("Actie 2",t)}}]}};var p,m,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,Z as default};
