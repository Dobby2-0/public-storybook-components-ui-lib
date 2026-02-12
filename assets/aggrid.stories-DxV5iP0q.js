import{j as x}from"./iframe-BpFVLOfy.js";import"./sha256-DnX9CJec.js";import"./DetailPageHeader-Cr_YuoUe.js";import"./BulkActions-Botnas8m.js";import"./Canvas-BsOkbG2x.js";import"./DateTimePicker-BupHZYKT.js";import"./DndList-a5sqnWJJ.js";import"./ErrorPage-DTArCKaR.js";import"./FileButton-CJ12xJY_.js";import"./FileIcon-l2aDgKnb.js";import"./FileList-vQOj1hjI.js";import"./Form-CQrMqyyo.js";import"./ImageCarousel-DbJ6Nhfr.js";import"./ListFilters-CTw_FZir.js";import"./Loader-ClVzWJEc.js";import"./NumberField-CfgP1g7W.js";import"./PDFViewer-BUtssllM.js";import"./PDFViewerModal-BnggBRLi.js";import"./PhoneNumberField-UAl-kEzF.js";import{P as v}from"./Pill-BeVljGVh.js";import"./RadioGroup-D7XseCuA.js";import"./RichTextEditor-CUvbmA5P.js";import"./Select-UgxugMl6.js";import"./filter-persistence-BWNtMiTO.js";import"./Skeleton-BYcP7hb3.js";import{A as B}from"./Ag-grid-table-DN3fD3aU.js";import"./TextField-BkV5ayR7.js";import"./Toolbar-BV-TxOUo.js";import"./Tooltip-CBOLfhLO.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DhYKlVMV.js";import"./utils-CD-49kjx.js";import"./ButtonBase-CURKgOs4.js";import"./Button-DilksvR7.js";import"./FocusScope-DqHE47eE.js";import"./Text-xYsyjKIG.js";import"./usePress-DdWpwWve.js";import"./index-CmI5jeNL.js";import"./index-B6g7O1-7.js";import"./Button-BUYxwJJf.js";import"./index-t2cyNmbH.js";import"./RSPContexts-BYEedYfM.js";import"./Separator-GBcK2eor.js";import"./index-xSmDOPsl.js";import"./VisuallyHidden-42luShXM.js";import"./ArrowBack-w1uywUx-.js";import"./Label-DNfrVbYC.js";import"./index-stOC9Ljn.js";import"./Label-gmZMiyak.js";import"./ErrorMessage-qScF5XIJ.js";import"./DeleteForever-BAXr8DJF.js";import"./variants-83REr8-v.js";import"./ChevronBackward-B6cGKDpv.js";import"./ChevronForward-i_uTagyH.js";import"./Calendar-Cqpri1fw.js";import"./sortable.esm-BKLPZBEq.js";import"./DragIndicator-ZsEWcfrS.js";import"./use-toast-C_wwdFJe.js";import"./Description-C2-r267v.js";import"./Zip-DdzuG0hR.js";import"./Download-DvxwVHLr.js";import"./Warning-CZm_dvZw.js";import"./index-C7CL5OQ7.js";import"./Modal-Dy7wmDz5.js";import"./ComboBox-de9_kVfe.js";import"./SingleComboBox-C0da2UX5.js";import"./ListBox-ByoWIHnU.js";import"./Check-DFAgOga4.js";import"./ListBox-CmrdpSOI.js";import"./DragAndDrop-WIL6PKSY.js";import"./useLabel-CyuIsgI6.js";import"./Input-DPrBOPgr.js";import"./use-is-mobile-DyuKZ0tn.js";import"./Replay-BnrYehaq.js";import"./KeyboardArrowDown-BriR5AZv.js";import"./KeyboardArrowUp-Dq-CnMOR.js";import"./FieldError-B7ODN9Kk.js";import"./Form-C7mMO57V.js";import"./Group-CXbxXz99.js";import"./useFormReset-HsepBMAI.js";import"./useTextField-DDKCmkFF.js";import"./Divider-CkUDauBj.js";import"./Remove-azB1uz0l.js";import"./Menu-B5AFL_gT.js";import"./MoreHoriz-D4MdnISb.js";import"./Checkbox-DxP3M-u8.js";import"./CheckIndeterminateSmall-CchSe1QP.js";import"./useToggleState-bVFOZVne.js";import"./TableOptions-D9Dl9ucZ.js";import"./ViewColumn-DRCWPwKG.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
