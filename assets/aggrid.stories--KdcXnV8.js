import{j as L}from"./iframe-Haw1DKUx.js";import"./sha256-DKf_Qkf5.js";import"./SwipeableActionBlock-DIxpY7KJ.js";import"./BulkActions-1g9-f_n5.js";import"./Button-DaS0z1mH.js";import"./Canvas-CkOIV3FL.js";import"./CardList-qfIIZ0uW.js";import"./DateTimePicker-BJZpwm5G.js";import"./DndList-CkXtTNAD.js";import"./EmptyState-DadAuEBJ.js";import"./ErrorPage-CecL2TFe.js";import"./FileButton-CjS71zkw.js";import"./FileIcon-BudehhCe.js";import"./FileList-DKtxsFQw.js";import"./Form-AvoG_EVR.js";import"./ImageCarouselModal-Dybi97rp.js";import"./ListFilters-CA8N1NRK.js";import"./Loader-D0e9TvUB.js";import"./NumberField-CtNMDMmo.js";import"./PDFViewer-DlAl3n66.js";import"./PDFViewerModal-CUCYH5mA.js";import"./PhoneNumberField-BQUftfQV.js";import{P as _}from"./Pill-B4yeB9BB.js";import"./RichTextEditor-fnyhQv4Z.js";import"./Select-Bz7Dmxjp.js";import"./SelectBase-BXI1ZtRy.js";import"./Skeleton-BubizwoJ.js";import"./Switch-2dtXmE11.js";import{A as H}from"./Ag-grid-table-BxX8UQ1a.js";import"./TextField-CJZDso7S.js";import"./Toolbar-C5ATfvYg.js";import"./Tooltip-fPaz-MUX.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BXEMXCtx.js";import"./useHover-DIQUIVDf.js";import"./ButtonBase-CHyMSKuz.js";import"./Button-CPvpyjbX.js";import"./SelectionIndicator-B7wHAUEF.js";import"./index-VDfa9Yd7.js";import"./index-_u_5_8Wm.js";import"./usePress-BNYHbE7L.js";import"./Text-CdO_0FZU.js";import"./index-BAJwUQ5N.js";import"./useCollection-BvUTVi0Q.js";import"./index-Cqz-IwDh.js";import"./VisuallyHidden-c6KQbon4.js";import"./Autocomplete-C-oUtxto.js";import"./ArrowBack-_tZ4gjtR.js";import"./use-dobby-context-Drfopp6o.js";import"./Label-BLPFtN-i.js";import"./index-ktF_j8pW.js";import"./Label-DGPd48RE.js";import"./ErrorMessage-D0E89wKe.js";import"./DeleteForever-Is1NICe7.js";import"./variants-BzTFXJwJ.js";import"./ChevronBackward-B7Pmn56a.js";import"./ChevronForward-DxrgIY-z.js";import"./Calendar-B6aZvLfc.js";import"./sortable.esm-qkKqa64_.js";import"./DragIndicator-DAWRpLi-.js";import"./Search-DXGmx6bc.js";import"./use-toast-yf1US4dS.js";import"./Description-Dc6xrowy.js";import"./Zip-CnEG9sgJ.js";import"./Download-Cb5-_NM4.js";import"./Warning-vXT2Y6Wn.js";import"./index-C7CL5OQ7.js";import"./Modal-DfvnNLnx.js";import"./ZoomOut-BuZ5L_Ht.js";import"./ComboBox-D4o7e6hP.js";import"./ComboBoxListBox-Cy_RNGwe.js";import"./ListBox-ODSPyozM.js";import"./Check-CuV6tyPR.js";import"./ListBox-DDa4asyx.js";import"./useLoadMoreSentinel-D7zhB2Dp.js";import"./useLabel-joTM3rHc.js";import"./Input-Cec0u_Wa.js";import"./filter-persistence-OMSveu6C.js";import"./use-is-mobile-BMJ4ZTzu.js";import"./Replay-OW8_SJt4.js";import"./KeyboardArrowDown-B2GsZAZp.js";import"./KeyboardArrowUp-lYdGR1zC.js";import"./Group-jf1ySP4a.js";import"./useField-850B2brv.js";import"./useFormValidation-DTTkiqbY.js";import"./useTextField-Dc1lo96t.js";import"./useFormReset-BtWtdd4x.js";import"./Divider-aaPfIGU5.js";import"./Add-DgF2EVyz.js";import"./Remove-DSw4bHoD.js";import"./useToggleState-ClxXHCgY.js";import"./Menu-DcVx__S8.js";import"./MoreHoriz-DOwxC8-L.js";import"./Checkbox-e5s2xif-.js";import"./CheckIndeterminateSmall-C2wxyDMm.js";import"./TableOptions-CQe8CArw.js";import"./ViewColumn-CwO14oRc.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
