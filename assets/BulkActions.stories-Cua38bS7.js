import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{S as d}from"./Select-B0F8vQcl.js";import"./index-CTjT7uj6.js";import"./index-DEHCCq9W.js";import"./SVpyu8SL-kb1JahyB.js";import"./KeyboardArrowDown-BIpZZpcG.js";import"./Info-Dq1_dlTC.js";import"./index-Bb4qSo10.js";import"./Button-CoFn26zJ.js";import"./useFocusRing-COlWfXo5.js";import"./index-9r8iugjR.js";import"./Hidden-BsqWnUMT.js";import"./useFocusable-THzxVUx6.js";import"./usePress-txE9COHB.js";import"./FieldError-mOHOEFEk.js";import"./Text-DmzI781W.js";import"./useLabels--xxESjfg.js";import"./Form-_FoLAR_T.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CO8fSrKd.js";import"./Collection-CA0OIEZf.js";import"./DragAndDrop-Msm58r93.js";import"./context-Ao51U0H-.js";import"./FocusScope-DkCrxc-x.js";import"./SelectionManager-B2MAkms-.js";import"./useControlledState-CEg4Rl-x.js";import"./useListState-CgnqO5Wd.js";import"./Dialog-C3i89GLb.js";import"./RSPContexts-CHzP-Sy3.js";import"./PortalProvider-DrflOcEs.js";import"./ariaHideOutside-CWagKFk4.js";import"./useLocalizedStringFormatter-CfLVTgOs.js";import"./VisuallyHidden-D6MjpNXd.js";import"./useSingleSelectListState-WiA2AzUx.js";import"./useMenuTrigger-DX8xHMzw.js";import"./useFormReset-Dk63eIg3.js";import"./ListBox-B0oGONat.js";import"./Check-C4fwrEtC.js";import"./Popover-Jhy2Mjt3.js";const i=({items:t,actions:a,onActionPerformed:n})=>{const c=o=>{const l=a.find(u=>u.id===o);l&&(l.event(t),n==null||n())};return r.jsxs("div",{className:"flex items-center gap-3 bg-neutral-800 text-neutral dark:bg-neutral-200 dark:text-neutral-1000 p-1.5 pl-3 rounded-md shadow-[0_2px_14px_0_rgba(0,0,0,0.25)] pointer-events-auto",children:[r.jsx("span",{children:`${t.length} item${t.length>1?"s":""} geselecteerd`}),r.jsx(d,{items:a,placeholder:"Acties",onSelectionChange:o=>c(o),className:"[&>button]:bg-neutral-900 [&>button]:border-neutral-900 [&>button>*]:!text-neutral [&>button>*]:fill-neutral [&>button]:dark:bg-neutral-100 [&>button]:dark:border-neutral-100 [&>button>*]:dark:!text-neutral-1000 [&>button>*]:dark:fill-neutral-1000"})]})};try{i.displayName="BulkActions",i.__docgenInfo={description:`Component to provide the user with the ability to perform an action on multiple items at once

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
