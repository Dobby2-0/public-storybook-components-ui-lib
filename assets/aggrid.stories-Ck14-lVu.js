import{j as L}from"./iframe-DPohime8.js";import"./sha256-DvYVrOsX.js";import"./SwipeableActionBlock-D_DR3fpl.js";import"./BulkActions-BqQfmLFA.js";import"./Canvas-C1nqoeUT.js";import"./CardList-De8umkg9.js";import"./DateTimePicker-CgDlQm-p.js";import"./DndList-BrPFGwJY.js";import"./EmptyState-DAGfyc3A.js";import"./ErrorPage-CG7zYRYL.js";import"./use-file-download-DUgt8G9k.js";import"./FileIcon-DfL_jX6E.js";import"./FileList-Dc9S83OR.js";import"./Form-DgecH4GR.js";import"./ImageCarouselModal-B_904OCc.js";import"./ListFilters-B8ZY750l.js";import"./Loader-BL_wwx-u.js";import"./NumberField-BeiMCy11.js";import"./PDFViewer-D11VEk86.js";import"./PDFViewerModal-BWge3rgp.js";import"./PhoneNumberField-Dmsejbvx.js";import{P as _}from"./Pill-D9MQQfVn.js";import"./RichTextEditor-Bo-UCxxt.js";import"./Select-C-4AIj2T.js";import"./SelectBase-DgJmzJg_.js";import"./Skeleton-DWtuXssj.js";import"./Switch-DqBqEnFT.js";import{A as H}from"./Ag-grid-table-CyvZQ-hK.js";import"./TextField-CQRVTnVV.js";import"./Toolbar-CvwkIU4_.js";import"./Tooltip-CPcJgKEX.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Qv7nbxWb.js";import"./useHover-BYwTxAz8.js";import"./ButtonBase-d8DrokVR.js";import"./Button-aHtnGejH.js";import"./SelectionIndicator-D216NoSG.js";import"./index-Bi6UBOSl.js";import"./index-DIAQTv3_.js";import"./usePress-BQV1sqTB.js";import"./Text-B_z0W9j8.js";import"./Button-BDFc_cyK.js";import"./index-lcHZFMS1.js";import"./useCollection-DLmRJA8w.js";import"./index-5TNEXpFx.js";import"./VisuallyHidden-BG6qwqyX.js";import"./Autocomplete-CyQFeyxK.js";import"./ArrowBack-u_rkoRSn.js";import"./use-dobby-context-B4gW2Qip.js";import"./Label-j8-T_7Xx.js";import"./index-BjZtawmV.js";import"./Label-CmUhqHG_.js";import"./ErrorMessage-TBg0-dnn.js";import"./DeleteForever-f0sb3oNH.js";import"./variants-w3T-bNLD.js";import"./ChevronBackward-DYQpte5M.js";import"./ChevronForward-CIQffJuv.js";import"./Calendar-DjO0naCp.js";import"./sortable.esm-BopTVonG.js";import"./DragIndicator-DFed9jup.js";import"./Search-C_OV_t31.js";import"./use-toast-B9oUOTcI.js";import"./Description-DRibe7lu.js";import"./Zip-C8aFcxlM.js";import"./Download-CNoR1mDF.js";import"./Warning-BhGZDcVs.js";import"./index-C7CL5OQ7.js";import"./Modal-BxKsWQsM.js";import"./ZoomOut-kFMweI5F.js";import"./ComboBox-Dr_U3f8n.js";import"./ComboBoxListBox-DjFXJETy.js";import"./ListBox-CD5NshBb.js";import"./Check-B2fJitGt.js";import"./ListBox-GHwYqJeJ.js";import"./useLoadMoreSentinel-_qITs77c.js";import"./useLabel-CJu-1Hax.js";import"./Input-CQX5-lgl.js";import"./filter-persistence-BSVp_iV1.js";import"./use-is-mobile-7qH4uFan.js";import"./Replay-BnenvjoH.js";import"./KeyboardArrowDown-o9-obP08.js";import"./KeyboardArrowUp-CjZp8_wp.js";import"./Group-lMmSacT_.js";import"./useField-6IOdVHdw.js";import"./useFormValidation-CXlM3Mt6.js";import"./useTextField-DSAl_lWS.js";import"./useFormReset-C2cpfXnO.js";import"./Divider-JPPvQSaJ.js";import"./Add-D9xQKI9Z.js";import"./Remove-Cc8LEOAH.js";import"./useToggleState-b11axI5f.js";import"./Menu-CcKesU6t.js";import"./MoreHoriz-DURn_srt.js";import"./Checkbox-CMEdTG-Y.js";import"./CheckIndeterminateSmall-BW0M4Wp3.js";import"./TableOptions-Bu6mFYPG.js";import"./ViewColumn-DTTArPlw.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
