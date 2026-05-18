import{j as L}from"./iframe-_r4zkpJs.js";import"./sha256-CZu2pXMi.js";import"./SwipeableActionBlock-DWLzzFo3.js";import"./BulkActions-DNsLNei8.js";import"./Canvas-mOgkuts8.js";import"./CardList-B7D5jc3D.js";import"./DateTimePicker-QC4X3Ll2.js";import"./DndList-Ck215ONc.js";import"./EmptyState-NpAcPPoU.js";import"./ErrorPage-6XauWAM6.js";import"./FileButton-DqK_icuQ.js";import"./FileIcon-CQQLRpwF.js";import"./FileList-DYuSjZk6.js";import"./Form-DnX9zeh8.js";import"./ImageCarouselModal-BaJv8ESM.js";import"./ListFilters-K8AhVFmK.js";import"./Loader-DsBTWAS4.js";import"./NumberField-DG9hFW8z.js";import"./PDFViewer-DSI0XMQ_.js";import"./PDFViewerModal-BLgkFJV4.js";import"./PhoneNumberField-QdfLE418.js";import{P as _}from"./Pill-B25dgnaL.js";import"./RadioGroup-Ce_DRsc9.js";import"./RichTextEditor-DUCsl5Nq.js";import"./Select-BST1tO1D.js";import"./SelectBase-DJBv5m4B.js";import"./Skeleton-BxmCvGAi.js";import"./Switch-Bxx5uULi.js";import{A as H}from"./Ag-grid-table-Se2TsiQr.js";import"./TextField-DkMYzb7h.js";import"./Toolbar-ewrl6SEh.js";import"./Tooltip-DEkAEmBS.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-mQQ5YbLp.js";import"./useHover-COEADJmR.js";import"./ButtonBase-C3IiCU3a.js";import"./Button-eAueHdKQ.js";import"./SelectionIndicator-D6Hmcec7.js";import"./index-JtYlRQJF.js";import"./index-B8OF1t7r.js";import"./usePress-CFH9OGw_.js";import"./Text-yvX1_btQ.js";import"./Button-DGDQYpfr.js";import"./index-CxfYqbSx.js";import"./useCollection-Br_iJuJX.js";import"./index-Cjhu8_Dj.js";import"./VisuallyHidden-DeiVJ0W9.js";import"./Autocomplete-B4NkeyXp.js";import"./ArrowBack-xxYbE_nc.js";import"./use-dobby-context-DNS1BsF0.js";import"./Label-CY7PA7Lr.js";import"./index-CygUwqqj.js";import"./Label-D3uPrXnv.js";import"./ErrorMessage-DH8hWogh.js";import"./DeleteForever-BpwdjZwJ.js";import"./variants-59Dg2U1M.js";import"./ChevronBackward-Cklzh382.js";import"./ChevronForward-pw7D1ewS.js";import"./Calendar-BBzUVRAu.js";import"./sortable.esm-DQDARI89.js";import"./DragIndicator-BzCvg6nt.js";import"./Search-D2Uf46Ry.js";import"./use-toast-DBTIeDCC.js";import"./Description-x4ARvWNJ.js";import"./Zip-Cx-wlOYy.js";import"./Download-CcnlDAIV.js";import"./Warning-Ch4gviVT.js";import"./index-C7CL5OQ7.js";import"./Modal-Ba5r6QVv.js";import"./ZoomOut-DHFRyYs7.js";import"./ComboBox-RKrX64Dk.js";import"./ComboBoxListBox-C24fDrIW.js";import"./ListBox-4ph3IdUw.js";import"./Check-DBcKlBej.js";import"./ListBox-BlBHejXs.js";import"./useLoadMoreSentinel-CCqFvu7P.js";import"./useLabel-CElemXB4.js";import"./Input-CZqX2wCp.js";import"./filter-persistence-DIXTZaze.js";import"./use-is-mobile-DinnkAhI.js";import"./Replay-BXcP1KrN.js";import"./KeyboardArrowDown-BD9WVQ8F.js";import"./KeyboardArrowUp-CDX18SOu.js";import"./Group-EHwzi5bS.js";import"./useField-NcObRVOz.js";import"./useFormValidation-DLFPZl_0.js";import"./useTextField-C-GBKHRk.js";import"./useFormReset-BTfFq6ab.js";import"./Divider-B-0I7utd.js";import"./Add-DHQyzeye.js";import"./Remove-DZoeM3sn.js";import"./useToggleState-B-ExFXY8.js";import"./Menu-FvUuitBL.js";import"./MoreHoriz-DgxRlmMn.js";import"./Checkbox-C6EQTX7X.js";import"./CheckIndeterminateSmall-CgeWmSb6.js";import"./TableOptions-CEraRbO2.js";import"./ViewColumn-DHyo3ICP.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,b,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,D,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var h,R,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(y=(R=n.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var T,I,A;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,k,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,x,B;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,W,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,P,z;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Fo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,m as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,s as WithMenuItems,i as WithStoredConfig,Fo as __namedExportsOrder,zo as default};
