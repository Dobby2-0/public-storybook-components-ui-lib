import{j as x}from"./iframe-BVZZrLbX.js";import"./sha256-BO7Kz9ND.js";import"./SwipeableActionBlock-Ba5CXbdj.js";import"./BulkActions-b5jE6ouX.js";import"./Canvas-Dxp51T75.js";import"./DateTimePicker-B8awf7JE.js";import"./DndList-DKmfVR-w.js";import"./ErrorPage-Dk_D6MOv.js";import"./FileButton-DX1jnMXd.js";import"./FileIcon-48pMyTRC.js";import"./FileList-Cdd4ZvUB.js";import"./Form-BZQ1AmKj.js";import"./ImageCarousel-C_EKB4WL.js";import"./use-dobby-context-B4g-y2nC.js";import"./Loader-D0TFhHeG.js";import"./NumberField-Fm7cz2QM.js";import"./PDFViewer-VZoPbebm.js";import"./PDFViewerModal-CSDjYU3A.js";import"./PhoneNumberField-B0qS80Xt.js";import{P as v}from"./Pill-C-yacwQp.js";import"./RichTextEditor-CsXAmGli.js";import"./Select-BA4hY4hS.js";import"./SelectBase-C3IBsqmW.js";import"./Skeleton-Dr8mMpWK.js";import{A as B}from"./Ag-grid-table-CtjkFGV_.js";import"./Toolbar-0V4foL6D.js";import"./Tooltip-DHnuRUaq.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BRy-fHb8.js";import"./utils-BdEMMVT-.js";import"./ButtonBase-CS6Y7RiX.js";import"./Button-oyaftNg4.js";import"./FocusScope-BXnbZ4SY.js";import"./Text-C_Ydk97q.js";import"./usePress-OB7sJeR5.js";import"./index-DF40OkAO.js";import"./index-CK3a23VT.js";import"./Button-B4NEtBdp.js";import"./index-BG8zUkYe.js";import"./RSPContexts-Du42P4SP.js";import"./Separator-D0LP8bN8.js";import"./index-D8yeUgeq.js";import"./VisuallyHidden-CmSKDok9.js";import"./ArrowBack-BUF9gfDc.js";import"./Label-Kx-ew8WR.js";import"./index-Cpu3EwYT.js";import"./Label-0joLOm83.js";import"./ErrorMessage-CzhlxgUu.js";import"./DeleteForever-QvLLo_oU.js";import"./variants-MOwtaZQ0.js";import"./ChevronBackward-ChVUp7E8.js";import"./ChevronForward-c-QXi3tF.js";import"./Calendar-cq7QYR-f.js";import"./sortable.esm-BfJY1vwu.js";import"./DragIndicator-DOfZ7u_U.js";import"./use-toast-CyQk5E9q.js";import"./Description-B_1wjALV.js";import"./Zip-CVedZ7zo.js";import"./Download-_5nHQSdF.js";import"./Warning-Ct8o3Mp2.js";import"./index-C7CL5OQ7.js";import"./Modal-D4z8nUAy.js";import"./ComboBox-B0q4DQuK.js";import"./SingleComboBox-bJlZg3y4.js";import"./ListBox-VWjkn-gp.js";import"./Check-CEGhiEFp.js";import"./ListBox-C8rCUxAL.js";import"./DragAndDrop-BaBwknD7.js";import"./useLabel-Bvfbdk0N.js";import"./Input-Bed3WrC9.js";import"./use-is-mobile-BzWVE6nv.js";import"./Replay-CpUOg5IW.js";import"./KeyboardArrowDown-Bwjhzvrj.js";import"./KeyboardArrowUp-IiPBekKu.js";import"./FieldError-BuOd1yPh.js";import"./Form-C_QjtcIs.js";import"./Group-Dx6dwJL2.js";import"./useFormReset-Dy0CA6_T.js";import"./useTextField-CBnLfjKG.js";import"./Divider-D7qROeXB.js";import"./Remove-hP45_IDe.js";import"./TextField-Cp6u17Ie.js";import"./Menu-DkKxtFS1.js";import"./MoreHoriz-D_kJOTCh.js";import"./Checkbox-qbcVJQCD.js";import"./CheckIndeterminateSmall-Dw2w607f.js";import"./useToggleState-5eJoECNb.js";import"./TableOptions-Lig1Uctm.js";import"./ViewColumn-fA83rO4P.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,C,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,R,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Do=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Do as __namedExportsOrder,Co as default};
