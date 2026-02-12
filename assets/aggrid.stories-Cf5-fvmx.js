import{j as x}from"./iframe-kQ4c0Yd4.js";import"./sha256-BId82lFL.js";import"./DetailPageHeader-ZdtA1YXa.js";import"./BulkActions-DDDtE2kF.js";import"./IconButton-c5jZQzoy.js";import"./Canvas-DWDc_uwL.js";import"./DateTimePicker-DiaaQO8S.js";import"./DndList-Iy89LH3O.js";import"./ErrorPage-3DQNou0M.js";import"./FileButton-DQTdouEL.js";import"./FileIcon-OgAoIl7Z.js";import"./FileList-DMVb188L.js";import"./Form-CDWsYfzj.js";import"./ImageCarousel-CAetouWs.js";import"./ListFilters-DeFCyozO.js";import"./Loader-DjZ1s7xl.js";import"./NumberField-DAseeL4k.js";import"./PDFViewer-BSFuiIGv.js";import"./PDFViewerModal-C2vU_0wq.js";import"./PhoneNumberField-T5-A2-bp.js";import{P as v}from"./Pill-isobBUI8.js";import"./RadioGroup-BV9vNYPW.js";import"./RichTextEditor-CNogMuSu.js";import"./filter-persistence-B2k8HGbF.js";import"./Skeleton-BOehEvyB.js";import{A as B}from"./Ag-grid-table-CLkDCN5T.js";import"./Toolbar-iDpE8dXh.js";import"./Tooltip-CmWwC_Gn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-lo6HiPPu.js";import"./utils-DPXshW9P.js";import"./ButtonBase-BpYW2jkj.js";import"./Button-D608CtPn.js";import"./FocusScope-DkD1PnN3.js";import"./Text-Cwsk3i_t.js";import"./usePress-B8mkcqOZ.js";import"./index-BdQGwq14.js";import"./index-DYkG9jtj.js";import"./index-D16zF9jG.js";import"./RSPContexts-5x-4Vb2P.js";import"./Separator-VWgbKG7T.js";import"./index-CsrIcV8I.js";import"./VisuallyHidden-BlpfzwTX.js";import"./ArrowBack-Cu_6vK6b.js";import"./Select-Dl2XxC0M.js";import"./Label-BW0j8DJ7.js";import"./index-B4w9o77p.js";import"./Label-C4rnxR7f.js";import"./ErrorMessage-DGgwhh91.js";import"./DeleteForever--SQoLjBY.js";import"./variants-DBAXpt0D.js";import"./ChevronBackward-IUCAMalB.js";import"./ChevronForward-DHm1Kbgb.js";import"./Calendar-BoBUueub.js";import"./sortable.esm-Bg3hNJby.js";import"./DragIndicator-C2PMAUzc.js";import"./use-toast-D8iKnf5d.js";import"./Description-CtZcfiet.js";import"./Zip-BHBwsGsS.js";import"./Download-BHpmdAeT.js";import"./Warning-BFprAbu4.js";import"./index-C7CL5OQ7.js";import"./Modal-DrQ8QXZN.js";import"./ComboBox-l4D5-AkA.js";import"./SingleComboBox-DX2BZiZu.js";import"./ListBox-K-Qqiy2W.js";import"./Check-D25DeetW.js";import"./ListBox-BpfY284Z.js";import"./DragAndDrop-BMAYr92j.js";import"./useLabel-5XbI8qbE.js";import"./Input-BR-csXWD.js";import"./use-is-mobile-CmmD2s6J.js";import"./Replay-DPA6DHPJ.js";import"./KeyboardArrowDown-ClwYFSnh.js";import"./KeyboardArrowUp-5M01qQ5h.js";import"./FieldError-CsYXbYdm.js";import"./Form-BAEkLNOt.js";import"./Group-Ct_khpsc.js";import"./useFormReset-CKSokcbg.js";import"./useTextField-BD8tn0LI.js";import"./Divider-CyxztyVF.js";import"./Remove-CCx2Q_ZJ.js";import"./TextField-CxcR5a-b.js";import"./Menu-BQ63Ss-s.js";import"./MoreHoriz-DWDRNepJ.js";import"./Checkbox-DYv1N2nT.js";import"./CheckIndeterminateSmall-9dsMXkLz.js";import"./useToggleState-CFok9aME.js";import"./TableOptions-C1aalNf0.js";import"./ViewColumn-BqNxamOA.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
