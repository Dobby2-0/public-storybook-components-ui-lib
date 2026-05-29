import{j as L}from"./iframe-BdY1lRWv.js";import"./sha256-DPK43qvY.js";import"./SwipeableActionBlock-CJ2VSv62.js";import"./BulkActions-Sz5-UkFr.js";import"./Canvas-Cfr_TO8-.js";import"./CardBasic-BvPdGtk6.js";import"./CardList-DNhHKuLF.js";import"./DateTimePicker-l_1MhbqN.js";import"./DndList-CZaZOQSw.js";import"./EmptyState-Bth84qgk.js";import"./ErrorPage-CFYLuhzX.js";import"./use-file-download-CnFYjSxk.js";import"./FileIcon-DLy5iE2D.js";import"./FileList-DMCA7ZnG.js";import"./Form-9fS71Ej1.js";import"./ImageCarouselModal-AJRC759e.js";import"./ListFilters-iunVtBkH.js";import"./Loader-DyLWZ8ly.js";import"./NumberField-B2Rv1xYB.js";import"./PDFViewer-gGejIYjv.js";import"./PDFViewerModal-Dc2qNa7b.js";import"./PhoneNumberField-DkeblKJg.js";import{P as _}from"./Pill-QShnpDHV.js";import"./RichTextEditor-BWrcqJ4i.js";import"./Select-BXK0m0Vy.js";import"./SelectBase-BIQzhu7a.js";import"./Skeleton-DFLfwUBl.js";import"./Switch-rn1v7uHv.js";import{A as H}from"./Ag-grid-table-bq6l5ZtQ.js";import"./TextField-CDxJZc3W.js";import"./Toolbar-CcaWaSD6.js";import"./Tooltip-BFDV1U_F.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-qvRMvz2t.js";import"./useHover-CUBzInxu.js";import"./ButtonBase-BkieoQPY.js";import"./Button-75WWo8RZ.js";import"./SelectionIndicator-Br3bhGkL.js";import"./index-BgNhbYIB.js";import"./index-DbcGKh2p.js";import"./usePress-BPO2qokg.js";import"./Text-DqLy25td.js";import"./Button-CgQETFts.js";import"./index-Bt0DYN8D.js";import"./useCollection-C_dqDgBS.js";import"./index-bgvXBjzW.js";import"./VisuallyHidden-PL1ZH4Yq.js";import"./Autocomplete-BUXynPt5.js";import"./ArrowBack-DUBGQxKc.js";import"./use-dobby-context-0P3iKaKg.js";import"./Label-Bg_ZWENv.js";import"./index-B8rcKNz3.js";import"./Label-B5iOlpn6.js";import"./ErrorMessage-DR1fIpfm.js";import"./DeleteForever-D_qexGu5.js";import"./variants-Bm_Nl-ge.js";import"./ChevronBackward-Y8R91jxj.js";import"./ChevronForward-6oNmOa2-.js";import"./Calendar-iqzV3_HB.js";import"./sortable.esm-Caqlze_m.js";import"./DragIndicator-fNvuU1PH.js";import"./Search-GppHAw2m.js";import"./use-toast-CtR3bUBI.js";import"./Description-BTBwdKaJ.js";import"./Zip-BL_vlDwC.js";import"./Download-DN6W7TUB.js";import"./Warning-CsaLidBu.js";import"./index-C7CL5OQ7.js";import"./Modal-xa85oAgZ.js";import"./ZoomOut-_zP2b0ix.js";import"./ComboBox-esUg8x4Y.js";import"./ComboBoxListBox-MN0qLKli.js";import"./ListBox-CwwQgXzD.js";import"./Check-C5TKfXp0.js";import"./ListBox-X1ECuwpH.js";import"./useLoadMoreSentinel-IHDXAYgu.js";import"./useLabel-D0_JTdQy.js";import"./Input-o7QD9QzU.js";import"./filter-persistence-CJ6OG3Ov.js";import"./use-is-mobile-kHcy37Z3.js";import"./Replay-DJX84zAK.js";import"./KeyboardArrowDown-k5MjzNLk.js";import"./KeyboardArrowUp-C_TNCgAo.js";import"./Group-C6DxabH6.js";import"./useField-C8amZsl4.js";import"./useFormValidation-DBHnp4qE.js";import"./useTextField-C0R03Exw.js";import"./useFormReset-ChRdYRmt.js";import"./Divider-BKaS0jYl.js";import"./Add-flPCAoyE.js";import"./Remove-Be1TVESp.js";import"./useToggleState-BRyIdB3u.js";import"./Menu-DmVvCLu1.js";import"./MoreHoriz-BOzPZUeh.js";import"./Checkbox-0tb4CCLe.js";import"./CheckIndeterminateSmall-BPFBZUPJ.js";import"./TableOptions-u2c1y_ms.js";import"./ViewColumn-BKVG1VfO.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
