import{j as x}from"./iframe-CQydS_nd.js";import"./sha256-4tBrSuDT.js";import"./SwipeableActionBlock-BOOvQlTj.js";import"./BulkActions-Bk_Glu7B.js";import"./Button-BgCVV-U7.js";import"./Canvas-CXItHdy3.js";import"./Checkbox-Bxj2QRyy.js";import"./DateTimePicker-nxDVcNZ5.js";import"./DndList-6R7Sft75.js";import"./ErrorPage-BOVJJd_j.js";import"./FileButton-gFCT8twx.js";import"./FileIcon-Da4lXmKK.js";import"./FileList-CE9MnM92.js";import"./Form-CAnR2wwJ.js";import"./ImageCarousel-Diji33nJ.js";import"./use-dobby-context-CqEF4Rqv.js";import"./Loader-CXGDRIQZ.js";import"./NumberField-Cl3Xq_l2.js";import"./PDFViewer-C7bouVzc.js";import"./PDFViewerModal-DLwp5OT9.js";import"./PhoneNumberField-CcJE03wr.js";import{P as v}from"./Pill-CbqXw_Z6.js";import"./RadioGroup-D7-PQaRr.js";import"./RichTextEditor-rL3ZKr80.js";import"./Select-CwUIF_Yf.js";import"./SelectBase-DdnH_xds.js";import"./Skeleton-Bs9IpJi8.js";import"./Switch-Bt5ERwkA.js";import{A as B}from"./Ag-grid-table-CX43hRLa.js";import"./TextField-yMGp338o.js";import"./Toolbar-B3MN27pz.js";import"./Tooltip-D9XFG4fY.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CFxoqjut.js";import"./utils-Cb6DKXJV.js";import"./ButtonBase-Xo-AvPpY.js";import"./Button-Bmomuf-Y.js";import"./FocusScope-CEh1fZhw.js";import"./Text-0U7ASMGe.js";import"./usePress-BCLO8Ibo.js";import"./index-CIi0pB1t.js";import"./index-BRQh5Kkd.js";import"./index-CAtuCoIc.js";import"./RSPContexts-B2C6m51m.js";import"./Separator-Di8Q68tt.js";import"./index-B5zYb6Mj.js";import"./VisuallyHidden-CSSZzawZ.js";import"./ArrowBack-DNd-H9-5.js";import"./Label-DPN3WSAu.js";import"./index-BBBOSXBq.js";import"./Label-aHG8ZUXA.js";import"./ErrorMessage-YNZTOeOE.js";import"./DeleteForever-2L3f4EgF.js";import"./Check-BtpBDXrv.js";import"./CheckIndeterminateSmall-WZwYD1sV.js";import"./Form-DaNtxD9T.js";import"./useToggleState-DulKogaz.js";import"./useFormReset-BP8vDI7O.js";import"./variants-BhTap0mv.js";import"./ChevronBackward-DxhTSEEn.js";import"./ChevronForward-BXI8ZFK5.js";import"./Calendar-kHRyAg3E.js";import"./sortable.esm-ByYGSHe6.js";import"./DragIndicator-D54xfs65.js";import"./use-toast-DvHYQVHZ.js";import"./Description-CLg5wU3j.js";import"./Zip-BY6oMLz4.js";import"./Download-Dq7xEE0H.js";import"./Warning-CO3Socf_.js";import"./index-C7CL5OQ7.js";import"./Modal-joufA_lJ.js";import"./ComboBox-BnLb2w2G.js";import"./SingleComboBox-PhCQL6bd.js";import"./ListBox-BfSmrrFc.js";import"./ListBox-Cl0mqXEA.js";import"./DragAndDrop-BzmezzB-.js";import"./useLabel-DIZx3457.js";import"./Input-C9_CzVgI.js";import"./use-is-mobile-ovWvbUY3.js";import"./Replay-CGj2OmdD.js";import"./KeyboardArrowDown-CMl7N5mW.js";import"./KeyboardArrowUp-B7hBdsAe.js";import"./FieldError-DnLuaYyc.js";import"./Group-CmAUNdu7.js";import"./useTextField-D6ZBPyHK.js";import"./Divider-Bky15hcU.js";import"./Remove-D2uQ7u0A.js";import"./Menu-ChSqnfPA.js";import"./MoreHoriz-BrGpFP6g.js";import"./TableOptions-DJOMHREY.js";import"./ViewColumn-eTdinn3p.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Ro=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Ro as __namedExportsOrder,ho as default};
