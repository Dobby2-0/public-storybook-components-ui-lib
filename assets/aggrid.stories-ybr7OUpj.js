import{j as L}from"./iframe-D47Q0F9X.js";import"./sha256-Cd8QDyRt.js";import"./SwipeableActionBlock-HYCYMFug.js";import"./BulkActions-Bb8NRog_.js";import"./Button-C4umv2Ak.js";import"./Canvas-BX0nxZTQ.js";import"./CardList-BFW7lXCn.js";import"./Checkbox-ZXU_zeBX.js";import"./ComboBox-xGqyBPtq.js";import"./DateTimePicker-BL-UtIsI.js";import"./DndList-BwgUuqJF.js";import"./EmptyState-C3IEWb05.js";import"./ErrorPage-CgjahOKE.js";import"./use-file-download-DeDDcdrk.js";import"./FileIcon-DVeeebC-.js";import"./FileList-Cx7QG1_2.js";import"./Form-CVY4lSOP.js";import"./ImageCarouselModal-Bom-WEFg.js";import"./ListFilters-Bgy_SsC1.js";import"./Loader-CLMOnD55.js";import"./NumberField-BLVOEO1R.js";import"./PDFViewer-DlVDOU_7.js";import"./PDFViewerModal-B8HOMalJ.js";import"./PhoneNumberField-CzE6GzJQ.js";import{P as _}from"./Pill-CWgtPTGv.js";import"./RadioGroup-CzYUXscq.js";import"./RichTextEditor-CaQzY163.js";import"./Select-CY4dX2Rc.js";import"./SelectBase-DdLE_6Aa.js";import"./Skeleton-Br95Qa8i.js";import"./Switch-Cio-Ejv8.js";import{A as H}from"./Ag-grid-table-DU2mQ_gY.js";import"./TextField-CtFcDqt4.js";import"./Toolbar-BQgLuHOC.js";import"./Tooltip-B2pnY3ao.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BmPGutcO.js";import"./useHover-pLr5c3Hy.js";import"./ButtonBase-C1oxplRw.js";import"./Button-CeGI_FXZ.js";import"./SelectionIndicator-rjQEW9qv.js";import"./index-D1wSKHgt.js";import"./index-hDndN7gJ.js";import"./usePress-GQmnMZtx.js";import"./Text-CqcZmn8Z.js";import"./index-FReOJIC3.js";import"./useCollection-Clj363tL.js";import"./index--uK4uYFc.js";import"./VisuallyHidden-CJf2mle4.js";import"./Autocomplete-CB5pSjOe.js";import"./ArrowBack-B6uD3Vki.js";import"./use-dobby-context-BGIYi2D0.js";import"./Label-Ctz1Gmsq.js";import"./index-unM82PDI.js";import"./Label-BPN4USmQ.js";import"./ErrorMessage-DH5O5g9U.js";import"./DeleteForever-B5L2g5q6.js";import"./Check-DYB2kqiC.js";import"./CheckIndeterminateSmall-DtOvRuHM.js";import"./useFormValidation-Bzv9RHuy.js";import"./useToggleState-BoStayeS.js";import"./useFormReset-D8iwcPVN.js";import"./ComboBoxListBox-DVHFeCoM.js";import"./ListBox-DpEnRpOT.js";import"./ListBox-BQ_ff7Dm.js";import"./useLoadMoreSentinel-apYGzlK-.js";import"./useLabel-DrZJMdWh.js";import"./Input-CaTE0for.js";import"./filter-persistence-ng8r10gN.js";import"./variants-DCMXHoGR.js";import"./ChevronBackward-Cfstey5_.js";import"./ChevronForward-B3z0Tcga.js";import"./Calendar-BT5QiCIP.js";import"./sortable.esm-DswiSYwN.js";import"./DragIndicator-C5MxR1E2.js";import"./Search-BM4XsoLf.js";import"./use-toast-aR13pGge.js";import"./Description--H_o1d0e.js";import"./Zip-CNh9qs4D.js";import"./Download-CV_MRsII.js";import"./Warning-CF9uXSMR.js";import"./index-C7CL5OQ7.js";import"./Modal-BZRc9tKZ.js";import"./ZoomOut-DPO72Tzh.js";import"./use-is-mobile-B-yK57JH.js";import"./Replay-BOf0wryc.js";import"./KeyboardArrowDown-CmUqbnk9.js";import"./KeyboardArrowUp-2mYSNopd.js";import"./Group-CwcpYhZr.js";import"./useField-DBg0prUx.js";import"./useTextField-DXAyCHd0.js";import"./Divider-DYxVkV6U.js";import"./Add-ehXqodtZ.js";import"./Remove-CAJUTZbQ.js";import"./Menu-jQYK6aWo.js";import"./MoreHoriz-BA0un33i.js";import"./TableOptions-341hx5gj.js";import"./ViewColumn-DAX29Nbj.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
