import{j as x}from"./iframe-BYumUEqj.js";import"./DetailPageHeader-Dv3O0CTL.js";import"./BulkActions-Bjs-MHIe.js";import"./Canvas-LaPl3LoA.js";import"./DateTimePicker-iQz96-OA.js";import"./DndList-B7LVSESh.js";import"./ErrorPage-TYFHvY_F.js";import"./FileButton-BUomHL9Y.js";import"./FileIcon-B4V3-ts8.js";import"./FileList-DuPz7b2s.js";import"./Form-By1qF210.js";import"./ImageCarousel-BRkNl80O.js";import"./ListFilters-NiPwqwto.js";import"./Loader-2yPpCOMH.js";import"./NumberField-Z971ul_r.js";import"./PDFViewer-DNiy597k.js";import"./PDFViewerModal-Dhfa5hM-.js";import"./PhoneNumberField-km-umV2Y.js";import{P as v}from"./Pill-CkJCj400.js";import"./RadioGroup-DUW4slT6.js";import"./RichTextEditor-DubduVrC.js";import"./Select-BgdGJi-9.js";import"./SelectBase-CSpLIeFM.js";import"./Skeleton-CZUj-psu.js";import"./Switch-CfUWdFRY.js";import{A as B}from"./Ag-grid-table-CkK2Bfwh.js";import"./TextField-BO0ZpXBp.js";import"./Toolbar-DMPZ5RGl.js";import"./Tooltip-ClE6LB0S.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BKCW71WF.js";import"./utils-DmPleNPi.js";import"./ButtonBase-FLLrr_f_.js";import"./Button-QDSONico.js";import"./FocusScope-CYYnJNQZ.js";import"./Text-HOHS8Yh-.js";import"./usePress-DNxk5E_A.js";import"./index-Cerk7jZ7.js";import"./index-Ct7FywXd.js";import"./Button-2-Lq6Xv8.js";import"./index-BtPpEG5e.js";import"./RSPContexts-BCJ4Z2uz.js";import"./Separator-BZwVFUZ5.js";import"./index-CzCbh3GW.js";import"./VisuallyHidden-BGhqA0HM.js";import"./ArrowBack-CNS7EktV.js";import"./Label-JL8H_gsw.js";import"./index-z7SdNoX_.js";import"./Label-Cc2lmETZ.js";import"./ErrorMessage-DF9zz_Zv.js";import"./DeleteForever-lMGEmr9E.js";import"./variants-BNTPB0FD.js";import"./ChevronBackward-1Y0qXB-X.js";import"./ChevronForward-Bdh95-OR.js";import"./Calendar-DX9RGc6a.js";import"./sortable.esm-C-iNHc7s.js";import"./DragIndicator-tls-G62O.js";import"./use-toast-8JQUhTPc.js";import"./Description-CXtQL4C-.js";import"./Zip-CcnWvHAZ.js";import"./Download-hqZrKE7g.js";import"./Warning-_q5HvCBv.js";import"./index-C7CL5OQ7.js";import"./Modal-5nn3O46j.js";import"./ComboBox-0SXuPZeB.js";import"./SingleComboBox-Bd8oyeWz.js";import"./ListBox-Dg-jvKLH.js";import"./Check-vIqA8EeG.js";import"./ListBox-DWXogx_m.js";import"./DragAndDrop-CXo7ZOiL.js";import"./useLabel-Bn-rd9-b.js";import"./Input-DiA8Ollg.js";import"./use-is-mobile-q1fdcXRe.js";import"./FilterListOff-BNIXfcbI.js";import"./KeyboardArrowDown-C7jCuD51.js";import"./KeyboardArrowUp-DqM5ZKP6.js";import"./FieldError-BRzJb7fN.js";import"./Form-CeahTsSu.js";import"./Group-B_t8EfhO.js";import"./useFormReset-buycbG7e.js";import"./useTextField-BOi_Sjsn.js";import"./Divider-Czpmiz-y.js";import"./Remove-ERG2AiSC.js";import"./useToggleState-DnF_GuLV.js";import"./Menu-cZfscoh9.js";import"./MoreHoriz-CVw9TyoX.js";import"./Checkbox-Der2yD6L.js";import"./CheckIndeterminateSmall-xjnELUJH.js";import"./TableOptions-mea7j3-N.js";import"./ViewColumn-C_BrlArq.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,f,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,C,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,R,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    addRowButton: true,
    disableColumnOptions: true,
    selectionMode: "multiple",
    enableSelectAll: true,
    onRowSelectionChange: ids => {
      if (ids === "all") {
        console.warn("All rows selected!");
      } else {
        console.warn("Selected row IDs:", ids);
      }
    },
    disableRowSelectionCondition: row => row?.make === "Tesla"
  }
}`,...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var y,k,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disableColumnOptions: true,
    suppressMovableColumns: true,
    menuItems: [{
      id: "edit",
      label: "Edit",
      onAction: (rowId: string) => {
        console.warn("Edit action for row:", rowId);
      }
    }, {
      id: "delete",
      label: "Delete",
      onAction: (rowId: string) => {
        console.warn("Delete action for row:", rowId);
      }
    }, {
      id: "duplicate",
      label: "Duplicate",
      onAction: (rowId: string) => {
        console.warn("Duplicate action for row:", rowId);
      }
    }]
  }
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ho=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,ho as __namedExportsOrder,Do as default};
