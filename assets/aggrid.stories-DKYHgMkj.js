import{j as x}from"./iframe-D9_lbR41.js";import"./sha256-BFTNuNgP.js";import"./SwipeableActionBlock-DpYP7Vc9.js";import"./BulkActions-B_bSSDJG.js";import"./IconButton-BJ9QUkxQ.js";import"./Canvas-CRvaMKdU.js";import"./ComboBox-DJp3konP.js";import"./DateTimePicker-N_tqMFt6.js";import"./DndList-DNQbzx2V.js";import"./ErrorPage-D2dYRSPl.js";import"./FileButton-URBqBCVd.js";import"./FileIcon-BCJJVVcB.js";import"./FileList-ePRcXVp8.js";import"./Form-4L-Znybv.js";import"./ImageCarousel-ok1GPcGw.js";import"./use-dobby-context-D-8OzPRc.js";import"./Loader-Ydzop-h2.js";import"./NumberField-CKBYqPaJ.js";import"./PDFViewer-kzFTKgt6.js";import"./PDFViewerModal-EqfC3-Yz.js";import"./PhoneNumberField-DkhJ5dhD.js";import{P as v}from"./Pill-aPSTnWXm.js";import"./RadioGroup-CXjn2S5y.js";import"./RichTextEditor-Bwc8u8Yb.js";import"./SelectBase-DyzMHeIg.js";import"./Skeleton-CvwOrnb1.js";import{A as B}from"./Ag-grid-table-B97Q3LcH.js";import"./Toolbar-C77-Cm7q.js";import"./Tooltip-DxT_jqx4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-0TBUFIQb.js";import"./utils-BCXD4NlX.js";import"./ButtonBase-DOyfrzp8.js";import"./Button-Lmaxfra2.js";import"./FocusScope-CYvM6z0l.js";import"./Text-CQdV_Tal.js";import"./usePress-CrkuXhfZ.js";import"./index-CfnB0Nij.js";import"./index-BnDj3lOR.js";import"./index-C-LQJlmq.js";import"./RSPContexts-TeruZA21.js";import"./Separator-BtrfYL-Y.js";import"./index-QxbnYTcs.js";import"./VisuallyHidden-BGpakkLr.js";import"./ArrowBack-ZrxZwOP5.js";import"./Select-CMdVZ-LF.js";import"./Label-DOYNMx6z.js";import"./index-B7932dmZ.js";import"./Label-CUHDqSYx.js";import"./ErrorMessage-CNsJRIOc.js";import"./DeleteForever-BKL3tc8I.js";import"./SingleComboBox-CMdAd5Gn.js";import"./ListBox-RYwPuSVS.js";import"./Check-By6hSInZ.js";import"./ListBox-BfjlK5XA.js";import"./DragAndDrop-B77wAVlX.js";import"./useLabel-D7EHOPDw.js";import"./Input-DpohKcDZ.js";import"./variants-DDWAe2Mf.js";import"./ChevronBackward-CWyRdPKN.js";import"./ChevronForward-BBeMVTjE.js";import"./Calendar-Dr0Bj6Em.js";import"./sortable.esm-d1zVgjLI.js";import"./DragIndicator-7qFCBmXb.js";import"./use-toast-DEmntS4c.js";import"./Description-DoCkq2Qt.js";import"./Zip-Bsjbtq4l.js";import"./Download-Cg1Eqboq.js";import"./Warning-D9R-BmsU.js";import"./index-C7CL5OQ7.js";import"./Modal-CK_J7KxK.js";import"./use-is-mobile-CrkTiyg4.js";import"./Replay-1USFlKjw.js";import"./KeyboardArrowDown-CdT_tM4l.js";import"./KeyboardArrowUp-BTVyfSM6.js";import"./Group-DlVoFp23.js";import"./FieldError-DvWJyGAe.js";import"./Form-nYug0fMi.js";import"./useFormReset-sSmPvwMn.js";import"./useTextField-CURPFbR6.js";import"./Divider-FNTJGjot.js";import"./Remove-WY5j-lUQ.js";import"./TextField-D8qlMyLI.js";import"./Menu-C0NbsoXQ.js";import"./MoreHoriz-CBLcxKHw.js";import"./Checkbox-BgeDGAs2.js";import"./CheckIndeterminateSmall-D55ix9DC.js";import"./useToggleState-CVVyxcf8.js";import"./TableOptions-DrrhO98h.js";import"./ViewColumn-B4W00mG5.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
