import{j as L}from"./iframe-C7KNxXq2.js";import"./sha256-c80MUnA5.js";import"./SwipeableActionBlock-deKAWaAX.js";import"./BulkActions-Dbrk0urC.js";import"./IconButton-CZK1XdvV.js";import"./Canvas-BA9jPpYZ.js";import"./CardList-Bgz018fk.js";import"./ComboBox-tAHCtCvN.js";import"./DateTimePicker-DQFL_RJb.js";import"./DndList-DgKzva2Y.js";import"./EmptyState-6BMXbzn2.js";import"./ErrorPage-D8Uj9p5z.js";import"./use-file-download-Bcr01eT2.js";import"./FileIcon-C5V5NRiu.js";import"./FileList-ttIJRfI8.js";import"./Form-CE_ottxv.js";import"./ImageCarouselModal-CP_ENmT3.js";import"./ListFilters-BAQcRTHT.js";import"./Loader-APQYjrvK.js";import"./NumberField-DaBgAlpP.js";import"./PDFViewer-BGilk7w9.js";import"./PDFViewerModal-D1UzGGgf.js";import"./PhoneNumberField-DvTPG0Pi.js";import{P as _}from"./Pill-DgyECOOx.js";import"./RadioGroup-kxfvc4JA.js";import"./RichTextEditor-CRNEmizU.js";import"./Select-Dm6SzPSo.js";import"./SelectBase-BD96hg3s.js";import"./Skeleton-Bs0s-ilZ.js";import"./Switch-6w5kEZZT.js";import{A as H}from"./Ag-grid-table-C-ReKLlW.js";import"./TextField-BkjWO5Ss.js";import"./Toolbar-DGVXvVj7.js";import"./Tooltip-CHgVR_2C.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bm-0ouN-.js";import"./useHover-CGSK28vB.js";import"./ButtonBase-Be7vA8nu.js";import"./Button-DTHNft8c.js";import"./SelectionIndicator-CHLWnz5K.js";import"./index-3qGBDUho.js";import"./index-BxQa0upA.js";import"./usePress-0VSSEFQY.js";import"./Text-6d857PzC.js";import"./index-BbVp1dd2.js";import"./useCollection-CCE1b6Mj.js";import"./index-ClILm0VQ.js";import"./VisuallyHidden-BNaasymY.js";import"./Autocomplete-CnbGb_u5.js";import"./ArrowBack-B1t6Igyk.js";import"./use-dobby-context-utYx5-xA.js";import"./Label-kNOOtCBX.js";import"./index-BVuWwcQA.js";import"./Label-C6r6U2Eo.js";import"./ErrorMessage-CqvR9Kzj.js";import"./DeleteForever-ClKQTOBV.js";import"./ComboBoxListBox-C819BoMi.js";import"./ListBox-B2l4pM6B.js";import"./Check-DwHA5HLs.js";import"./ListBox-fvggytBk.js";import"./useLoadMoreSentinel-DcspdZ6k.js";import"./useLabel-BYa6sWpw.js";import"./Input-72RviXVG.js";import"./filter-persistence-DkHe7_pO.js";import"./variants-KMHszoUn.js";import"./ChevronBackward-Cu2itRK_.js";import"./ChevronForward-nmANtsRu.js";import"./Calendar-YpVmLgtq.js";import"./sortable.esm-D4jHVfjy.js";import"./DragIndicator-Cha-1cFL.js";import"./Search-CUnRiss6.js";import"./use-toast-DduRvUuv.js";import"./Description-BUd_Ao2T.js";import"./Zip-CWBG_zxW.js";import"./Download-BSWpt4qa.js";import"./Warning-DMiXxURl.js";import"./index-C7CL5OQ7.js";import"./Modal-B73cVcYH.js";import"./ZoomOut-CNdSt7P1.js";import"./use-is-mobile-BFmaanZk.js";import"./Replay-ChTCJWzf.js";import"./KeyboardArrowDown-BhIjvkCx.js";import"./KeyboardArrowUp-D7X_HiBP.js";import"./Group-CET_UDOr.js";import"./useField-BQ9w2mYH.js";import"./useFormValidation-B7kFnU8D.js";import"./useTextField-B3a5yVp0.js";import"./useFormReset-99CuZihU.js";import"./Divider-CNP2OT9d.js";import"./Add-Cqi5Na5t.js";import"./Remove-De3cy7lg.js";import"./useToggleState-BtBeNumX.js";import"./Menu-B6sGkYdP.js";import"./MoreHoriz-CMibVu47.js";import"./Checkbox-CJaGR2QB.js";import"./CheckIndeterminateSmall-BRiPLwNK.js";import"./TableOptions-CpqUjFGc.js";import"./ViewColumn-D-ArXWFN.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
