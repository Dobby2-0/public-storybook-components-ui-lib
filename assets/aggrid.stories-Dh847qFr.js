import{j as L}from"./iframe-CaZFVN_9.js";import"./sha256-DDZglZav.js";import"./SwipeableActionBlock-De0eQ1C6.js";import"./BulkActions-HQae8Gw9.js";import"./Canvas-C3nuqGna.js";import"./CardList-B50kFzYr.js";import"./DateTimePicker-S5Fl0g1d.js";import"./DndList-CKV8vgYw.js";import"./EmptyState-Bj4_HN17.js";import"./ErrorPage-CnsBJ1-6.js";import"./use-file-download-C2G4kGIx.js";import"./FileIcon-CGKxajpN.js";import"./FileList-BLRRCCWT.js";import"./Form-B_18ACOD.js";import"./ImageCarouselModal-Cz0aSVCU.js";import"./ListFilters-CTeRMLHx.js";import"./Loader-CNtiz6lD.js";import"./NumberField-BWmbkUhu.js";import"./PDFViewer-Coh3Xx_-.js";import"./PDFViewerModal-soxoSqKN.js";import"./PhoneNumberField-CSoQVyoL.js";import{P as _}from"./Pill-HIRp9urv.js";import"./RadioGroup-5lUEDsWW.js";import"./RichTextEditor-f-OBnQU8.js";import"./Select-zswh3EqQ.js";import"./SelectBase-CEdbQ6Ui.js";import"./Skeleton-ZFlwuwNJ.js";import"./Switch-CPR1jVXb.js";import{A as H}from"./Ag-grid-table-DUfzcd9A.js";import"./TextField-Cb8rPfpU.js";import"./Toolbar-BB2YWFhH.js";import"./Tooltip-BOPypVNs.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-JWOgiKJ_.js";import"./useHover-BoXWJKk9.js";import"./ButtonBase-B9ZVMJr2.js";import"./Button-DNYoyAmb.js";import"./SelectionIndicator-BciKvVnt.js";import"./index-uwxQVn1y.js";import"./index-CLCrd1v8.js";import"./usePress-DkSoGaAR.js";import"./Text-DgX_7obh.js";import"./Button-Bo3XKLn4.js";import"./index-HlvUt4pR.js";import"./useCollection-CVV0kPR0.js";import"./index-v4jCvFNp.js";import"./VisuallyHidden-Di4IygHH.js";import"./Autocomplete-CDL1J41e.js";import"./ArrowBack-B4Na0veE.js";import"./use-dobby-context-BgE6PRC4.js";import"./Label-DLnJIsa_.js";import"./index-DqkFhy5l.js";import"./Label-CdWlHfYN.js";import"./ErrorMessage-Co_U_eae.js";import"./DeleteForever-DkIGWnoP.js";import"./variants-zH1Mt9zZ.js";import"./ChevronBackward-BdoJGlDU.js";import"./ChevronForward-aN5_eR41.js";import"./Calendar-C2ENPu7O.js";import"./sortable.esm-_Ih-5LPK.js";import"./DragIndicator-CeJrBpE0.js";import"./Search-UAc728ob.js";import"./use-toast-DxmJkqs_.js";import"./Description-CXKpiWAi.js";import"./Zip-C0QFK6dX.js";import"./Download-DoBmZNHT.js";import"./Warning-DxX1HRUp.js";import"./index-C7CL5OQ7.js";import"./Modal-BFTAMgCw.js";import"./ZoomOut-OYR3A5Bv.js";import"./ComboBox-CIycZFUn.js";import"./ComboBoxListBox-DJaOFJn1.js";import"./ListBox-XN85NI9m.js";import"./Check-CF41mqP0.js";import"./ListBox-AWFh8cZ2.js";import"./useLoadMoreSentinel-Bskv3Dd7.js";import"./useLabel-BNROn0qh.js";import"./Input-DHIA2bVi.js";import"./filter-persistence-Ca142Tl7.js";import"./use-is-mobile-C3Emhxch.js";import"./Replay-Clx_sHvh.js";import"./KeyboardArrowDown-BpD4sA3J.js";import"./KeyboardArrowUp-DwFGpnSi.js";import"./Group-DxpWBngx.js";import"./useField-DywSONxV.js";import"./useFormValidation-COE52moy.js";import"./useTextField-BV3y0jgM.js";import"./useFormReset-Dx-OSkqH.js";import"./Divider-C8fG4pW7.js";import"./Add-DggEhSm0.js";import"./Remove-CXi5VHwC.js";import"./useToggleState-CQVQk9JI.js";import"./Menu-CRv16Y0b.js";import"./MoreHoriz-uoodgQHf.js";import"./Checkbox-1NSEeikw.js";import"./CheckIndeterminateSmall-BesfFB8R.js";import"./TableOptions-n-mEwyp_.js";import"./ViewColumn-zfx5xmzi.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
