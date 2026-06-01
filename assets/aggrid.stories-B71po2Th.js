import{j as L}from"./iframe-C_WUs4XI.js";import"./sha256-BT08rnc_.js";import"./SwipeableActionBlock-MnQmIkt7.js";import"./BulkActions-BlPadMb4.js";import"./Canvas-piZb9QaR.js";import"./CardList-P_fIjirk.js";import"./Checkbox-DQNjhOQW.js";import"./DateTimePicker-jxIvjYxh.js";import"./DndList-CRcLevpa.js";import"./EmptyState-CjKPfduf.js";import"./ErrorPage-tYHUaHhl.js";import"./use-file-download-ChAauq7q.js";import"./FileIcon-7MIoGnK4.js";import"./FileList-DKz-E9Vn.js";import"./Form-DB9POXee.js";import"./ImageCarouselModal-CfCAlfs5.js";import"./ListFilters-B88nBuZf.js";import"./Loader-QA6ZLMQ1.js";import"./NumberField-D5W-fPhW.js";import"./PDFViewer--LBWiYba.js";import"./PDFViewerModal-HVp_PMHJ.js";import"./PhoneNumberField-j4uyM2n9.js";import{P as _}from"./Pill-DZALiA7v.js";import"./RadioGroup-Chv_79TP.js";import"./RichTextEditor-Bm5X4DSj.js";import"./Select-CY1yARBM.js";import"./SelectBase-Cg2DzNDv.js";import"./Skeleton-j_Ps1vhF.js";import{A as H}from"./Ag-grid-table-YDVUL1Ik.js";import"./TextField-BnjLVGaq.js";import"./Toolbar-vpFww2UK.js";import"./Tooltip-CcVVrW2g.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-W04ubT9o.js";import"./useHover-B15IukXm.js";import"./ButtonBase-BnX1gMeh.js";import"./Button-BjoSaiQy.js";import"./SelectionIndicator-BWNSr69i.js";import"./index-Dqibsvss.js";import"./index-D36SMXzg.js";import"./usePress-D35Eo-OG.js";import"./Text-uCzjv4Fa.js";import"./Button-DQZL8AGL.js";import"./index-CTQmbPKJ.js";import"./useCollection-CBCohlHa.js";import"./index-bjnEn6Lg.js";import"./VisuallyHidden-CfBYuoy7.js";import"./Autocomplete-751aq7P5.js";import"./ArrowBack-DzWz67qb.js";import"./use-dobby-context-CCnq80ks.js";import"./Label-D0RfzdSZ.js";import"./index-BqtOHJFZ.js";import"./Label-BAlkwqge.js";import"./ErrorMessage-DeDavaO9.js";import"./DeleteForever-DJr1otaZ.js";import"./Check-BORt7e7q.js";import"./CheckIndeterminateSmall-CXVUxwqw.js";import"./useFormValidation-HyX2tOQ3.js";import"./useToggleState-DE--rpdD.js";import"./useFormReset-LPrGnNDj.js";import"./variants-BMyk7QAG.js";import"./ChevronBackward-1sJvIA9G.js";import"./ChevronForward-BbybF_5e.js";import"./Calendar-CAus3aH9.js";import"./sortable.esm-BIJF4Q-P.js";import"./DragIndicator-CO49Q_i4.js";import"./Search-BLm6RZJP.js";import"./use-toast-NK75pN-d.js";import"./Description-B8d2K3bC.js";import"./Zip-DNxumezF.js";import"./Download-sLOWmabe.js";import"./Warning-BtCOXNpq.js";import"./index-C7CL5OQ7.js";import"./Modal-6xyeBJr_.js";import"./ZoomOut-Cv78XE2e.js";import"./ComboBox-kWrnFD6w.js";import"./ComboBoxListBox-CmLVjEMc.js";import"./ListBox-Ct6a2lQ0.js";import"./ListBox-CHoqS192.js";import"./useLoadMoreSentinel-DbltEXMM.js";import"./useLabel-D7htvtBo.js";import"./Input-vlrO8hpR.js";import"./filter-persistence-EUj1Dnic.js";import"./use-is-mobile-BaKpPKk1.js";import"./Replay-CedUVaWj.js";import"./KeyboardArrowDown-3okSVq8N.js";import"./KeyboardArrowUp-DoQEGcc-.js";import"./Group-CWo3LRm_.js";import"./useField-BlPUTVDa.js";import"./useTextField-DbUe0FJ1.js";import"./Divider-CEXd3lFc.js";import"./Add-BAXMWdAb.js";import"./Remove-CTdIdO9K.js";import"./Menu-CIFm3TWQ.js";import"./MoreHoriz-CjjUL5Ia.js";import"./TableOptions-BSQxllFa.js";import"./ViewColumn-DnKWINrR.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,k,E;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,x,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,W,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,P,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const zo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,zo as __namedExportsOrder,Po as default};
