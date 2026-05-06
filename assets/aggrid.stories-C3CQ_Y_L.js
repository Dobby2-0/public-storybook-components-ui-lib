import{j as L}from"./iframe-CoP3LAwi.js";import"./sha256-BqdKJwLI.js";import"./SwipeableActionBlock-B6JiOxBT.js";import"./BulkActions-BD4x8hpx.js";import"./Canvas-BabAfNoX.js";import"./CardList-B3kCyw1-.js";import"./ComboBox-BranceTt.js";import"./DateTimePicker-By8gWr2M.js";import"./DndList-DuCVsJ-T.js";import"./EmptyState-BleHJB1U.js";import"./ErrorPage-D6iRL2H1.js";import"./FileButton-GhABzjPd.js";import"./FileIcon-BGntbe67.js";import"./FileList-DOF912iU.js";import"./Form-BUmXnG5r.js";import"./ImageCarousel--u5ENXYw.js";import"./use-dobby-context-Du1h8pF1.js";import"./Loader-BbStJC2s.js";import"./NumberField-6ooj6X3Y.js";import"./PDFViewer-DZW1MtgT.js";import"./PDFViewerModal-9Or-fNi6.js";import"./PhoneNumberField-BN6_kA2M.js";import{P as _}from"./Pill-6X5xBcQO.js";import"./RadioGroup-BgXE9SzI.js";import"./RichTextEditor-CeY3cpz9.js";import"./Select-ChOz6Zsd.js";import"./SelectBase-CJBf4BIu.js";import"./Skeleton-Dh5jkPGh.js";import{A as H}from"./Ag-grid-table-vzd2UuV3.js";import"./Toolbar-DrMg2x3A.js";import"./Tooltip-DOpJc7fV.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Cp_ZGwH3.js";import"./useHover-CUoT5zoT.js";import"./ButtonBase-FvF1_LPg.js";import"./Button-MtuXdxwC.js";import"./SelectionIndicator-LddWnkdC.js";import"./index-85lfc85w.js";import"./index-DKc3ZT2X.js";import"./usePress-DfG_wu54.js";import"./Text-DvZZdpxs.js";import"./Button-DATugxcW.js";import"./index-C9VKhSaY.js";import"./useCollection-Bb_bKlsE.js";import"./index-D1lnY5A6.js";import"./VisuallyHidden-CTBegAdx.js";import"./Autocomplete-Cecnsv7S.js";import"./ArrowBack-CCcndo0y.js";import"./Label-CsafV2Ke.js";import"./index-C2B7xrum.js";import"./Label-BCcWJ_kf.js";import"./ErrorMessage-z9IL_ZfZ.js";import"./DeleteForever-CM1VeDq6.js";import"./ComboBoxListBox-CiyVO1BH.js";import"./ListBox-D1O_ipaN.js";import"./Check-MOrs6nAQ.js";import"./ListBox-Vq1x905t.js";import"./useLoadMoreSentinel-Ds2Eu_NW.js";import"./useLabel-5hZ-WMJt.js";import"./Input-B8oSj4D3.js";import"./filter-persistence-BoIT-GT-.js";import"./variants-IgXeAILn.js";import"./ChevronBackward-C8m1JGEy.js";import"./ChevronForward-k-iMpD5Q.js";import"./Calendar-asXCKjTX.js";import"./sortable.esm-CQMap8Wl.js";import"./DragIndicator-D2XAS4ol.js";import"./Search-vlDL-qO3.js";import"./use-toast-CjyQs02C.js";import"./Description-Bas_dSQk.js";import"./Zip-BU5ftgrS.js";import"./Download-DZFq1vyp.js";import"./Warning-BzbilokE.js";import"./index-C7CL5OQ7.js";import"./Modal-DM-s_4ol.js";import"./use-is-mobile-BE6maQSU.js";import"./Replay-CPnvUo_q.js";import"./KeyboardArrowDown-0JC_UNZg.js";import"./KeyboardArrowUp-Bq7xs62v.js";import"./Group-DS1_VHkJ.js";import"./useField-5vuxmGPN.js";import"./useFormValidation-CguSbhD_.js";import"./useTextField-CoY9qr6s.js";import"./useFormReset-B2FbxHjC.js";import"./Divider-DHP3_9AJ.js";import"./Add-Cfzpn-z_.js";import"./Remove-_6faIDt1.js";import"./TextField-B6jbQQXH.js";import"./Menu-BAMJH5xf.js";import"./MoreHoriz-BtbrG0Xb.js";import"./Checkbox-C6lGY933.js";import"./CheckIndeterminateSmall-BLaU9GVH.js";import"./useToggleState-DVB2CtCt.js";import"./TableOptions-CVxKIgw6.js";import"./ViewColumn-CzT3-mWG.js";const jo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Go=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Go as __namedExportsOrder,jo as default};
