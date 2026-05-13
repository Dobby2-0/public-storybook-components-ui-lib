import{j as L}from"./iframe-B0rfYQab.js";import"./sha256-D83yjLwa.js";import"./SwipeableActionBlock-BwJIcqX5.js";import"./BulkActions-C4CT8n61.js";import"./Canvas-DNpFlXPr.js";import"./CardList-BJQywgTN.js";import"./DateTimePicker-CsguV7UC.js";import"./DndList-Dw-DoGLS.js";import"./EmptyState-M2D7g5Fj.js";import"./ErrorPage-DZBY8xLH.js";import"./FileButton-BMPV8yxX.js";import"./FileIcon-CuRVekvo.js";import"./FileList-CAZ1kuOz.js";import"./Form-QYCaUJsw.js";import"./ImageCarousel-DWx1UwqU.js";import"./ListFilters-BYqxwoBz.js";import"./Loader-CLgQGqjj.js";import"./NumberField-Ds8Dp0AW.js";import"./PDFViewer-w5i9o_rO.js";import"./PDFViewerModal-BrXyTWjA.js";import"./PhoneNumberField-DNbArwPW.js";import{P as _}from"./Pill-D0ciTlCp.js";import"./RadioGroup-Ci1P1hl9.js";import"./RichTextEditor-CphtRHRR.js";import"./Select-k_faexP8.js";import"./SelectBase-BuWLyvF8.js";import"./Skeleton-DaQKczH0.js";import{A as H}from"./Ag-grid-table-BSP7Hp2h.js";import"./Toolbar-BBQxp2Yc.js";import"./Tooltip-OesZ8xYk.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-D2UZNkWB.js";import"./useHover-B0wlb5jZ.js";import"./ButtonBase-BLl9YrBx.js";import"./Button-DgG2pfGT.js";import"./SelectionIndicator-B3NOFxgm.js";import"./index-TCG1dwA7.js";import"./index-DUf7nOBV.js";import"./usePress-Chzq6C2u.js";import"./Text-VUh5tOod.js";import"./Button-BqlAje5b.js";import"./index-K9bwIEu-.js";import"./useCollection-BkTGr9ip.js";import"./index-Ce7v5vwO.js";import"./VisuallyHidden-BAYTT9k-.js";import"./Autocomplete-yNs0HOYW.js";import"./ArrowBack-C0sgp6Zj.js";import"./use-dobby-context-Bf0bTOyW.js";import"./Label-LnSXxjL7.js";import"./index-Dw7Qz_nr.js";import"./Label-BOolh8pV.js";import"./ErrorMessage-DCrnpUqd.js";import"./DeleteForever-B3PnfZzF.js";import"./variants-BGyWdreT.js";import"./ChevronBackward-Cq6dpmFB.js";import"./ChevronForward-CiDAsLV1.js";import"./Calendar-LNGtAP8L.js";import"./sortable.esm-DkUorsx7.js";import"./DragIndicator-BH21VQmv.js";import"./Search-gW0Fh-bb.js";import"./use-toast-8E9i5ThD.js";import"./Description-EM7bFhBQ.js";import"./Zip-C32k4pmD.js";import"./Download-DONC4Nvx.js";import"./Warning-DYzNH6NS.js";import"./Modal-Ciy1_PMp.js";import"./index-C7CL5OQ7.js";import"./ComboBox-BCxyhYH2.js";import"./ComboBoxListBox-Bgf3n2Qw.js";import"./ListBox-llRcBisL.js";import"./Check-DSm0uhTD.js";import"./ListBox-DkEqe_hd.js";import"./useLoadMoreSentinel-DKzkIAvp.js";import"./useLabel-BD7ZqNpF.js";import"./Input-BV3cgOQN.js";import"./filter-persistence-CaWztTH2.js";import"./use-is-mobile-HxlX71Jr.js";import"./Replay-BmYfV9X1.js";import"./KeyboardArrowDown-DCW7eDtn.js";import"./KeyboardArrowUp-BQajcSaN.js";import"./Group-Ba-p9N0T.js";import"./useField-CVLR0J5T.js";import"./useFormValidation-C2NfvSuB.js";import"./useTextField-CkywsR3v.js";import"./useFormReset-Bp6QaN_K.js";import"./Divider-DhfrPLRw.js";import"./Add-CcuXdqnL.js";import"./Remove-By0Y7JBl.js";import"./TextField-DT4Eo8Ik.js";import"./Menu-BWoLyCYX.js";import"./MoreHoriz-CoU3GWJT.js";import"./Checkbox-ArAGDqHc.js";import"./CheckIndeterminateSmall-C88GZgHB.js";import"./useToggleState-BWKPHPY6.js";import"./TableOptions-BvsN8VLd.js";import"./ViewColumn-Bmz6UPZ0.js";const Go={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Po=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Po as __namedExportsOrder,Go as default};
