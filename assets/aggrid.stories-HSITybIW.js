import{j as L}from"./iframe-MJq7Ca43.js";import"./sha256-DDacMVWu.js";import"./SwipeableActionBlock-CLF8_930.js";import"./BulkActions-C_MG0Hdy.js";import"./Canvas-K5aaFS6-.js";import"./CardBasic-DAQx7UC7.js";import"./CardList-B-QjbVS_.js";import"./Checkbox-B5dq-fBf.js";import"./DateTimePicker-Cex9AAKG.js";import"./DndList-c_bbSwkO.js";import"./EmptyState-DTqY8off.js";import"./ErrorPage-BzQpPEgZ.js";import"./FileButton-CLDYn56G.js";import"./FileIcon-Cwjgo26F.js";import"./FileList-DooURKec.js";import"./Form-B0Fua4IC.js";import"./ImageCarousel-iWGva5Ln.js";import"./ListFilters-CrZmPI-m.js";import"./Loader-DVFfm2se.js";import"./NumberField-BTnjFNWr.js";import"./PDFViewer-C70x1i4s.js";import"./PDFViewerModal-BFdRHAkX.js";import"./PhoneNumberField-5XadgWgo.js";import{P as _}from"./Pill-CHfYq4x6.js";import"./RichTextEditor-BvLoL0XB.js";import"./Select-Cpug4IdQ.js";import"./SelectBase-DVRF9sMZ.js";import"./Skeleton-Bq4GvVTZ.js";import{A as H}from"./Ag-grid-table-CDoRKuO3.js";import"./Toolbar-DM6YCfWj.js";import"./Tooltip-bk47HsbA.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-C9OZw2pg.js";import"./useHover-DmV2Q5h3.js";import"./ButtonBase-h1ovOeWB.js";import"./Button-BcXSeBnd.js";import"./SelectionIndicator-CbCD7aA9.js";import"./index-CiGCyFb1.js";import"./index-Bs0u_Ynm.js";import"./usePress-3rypOCUW.js";import"./Text-BegZfy3M.js";import"./Button-DePpFx36.js";import"./index-9xACrRnl.js";import"./useCollection-CRcdom6f.js";import"./index-D9qRENIQ.js";import"./VisuallyHidden-CngllTjG.js";import"./Autocomplete-qfJj0NgY.js";import"./ArrowBack-sd7Mwixq.js";import"./use-dobby-context-CGh7yN5Q.js";import"./Label-DRe9hSxA.js";import"./index-wmYZoLgK.js";import"./Label-XPuM0PvF.js";import"./ErrorMessage-ROIkgnj-.js";import"./DeleteForever-D2caYQE3.js";import"./Check-BXmhigVp.js";import"./CheckIndeterminateSmall-BEsnnToY.js";import"./useFormValidation-K5ydMFvL.js";import"./useToggleState-BdmOoohY.js";import"./useFormReset-DvIDqCsK.js";import"./variants-C1Zo3luU.js";import"./ChevronBackward-CojAq-eQ.js";import"./ChevronForward-oQRERrBf.js";import"./Calendar-DZkzaqqd.js";import"./sortable.esm-DnTT4Uq9.js";import"./DragIndicator-BjR_60aO.js";import"./Search-BtF7LPIX.js";import"./use-toast-CGn1Uehl.js";import"./Description-Cr9xvj95.js";import"./Zip-YdpForfz.js";import"./Download-CQ1-4Wod.js";import"./Warning-BgkK7yZF.js";import"./index-C7CL5OQ7.js";import"./Modal-z1dgOjlN.js";import"./ComboBox-DCCgGDWD.js";import"./ComboBoxListBox-62SCBUlg.js";import"./ListBox-BOTZdOFF.js";import"./ListBox-DaNIL0wI.js";import"./useLoadMoreSentinel-B3ySbmyB.js";import"./useLabel-DL0t2YJ4.js";import"./Input-CIJgDx8n.js";import"./filter-persistence-DC9DoetQ.js";import"./use-is-mobile-BsQe3Tf8.js";import"./Replay-Cyw-D2EK.js";import"./KeyboardArrowDown-D-z3ed0F.js";import"./KeyboardArrowUp-YacFIvXI.js";import"./Group-Cz_FlYJs.js";import"./useField-CO1ldSEX.js";import"./useTextField-RQR_cu9n.js";import"./Divider-DZmJO7XB.js";import"./Add-C5bhWp-z.js";import"./Remove-B-200jQM.js";import"./TextField-DUQc5mDs.js";import"./Menu-ySb9hYTc.js";import"./MoreHoriz-CnH4qk2I.js";import"./TableOptions-DM4xW71B.js";import"./ViewColumn-BBcC-gQb.js";const Go={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
