import{j as L}from"./iframe-BlVgBvDK.js";import"./sha256-CXqT_DBa.js";import"./SwipeableActionBlock-DOfWmHJC.js";import"./BulkActions-BVgiT5AS.js";import"./Canvas-C59mD5GR.js";import"./CardBasic-QNFHpGxb.js";import"./CardList-CrLlVbuN.js";import"./DateTimePicker-DLcuwqN9.js";import"./DndList-8wCBBhWJ.js";import"./EmptyState-DLD72Cgh.js";import"./ErrorPage-2vMyKDXi.js";import"./use-file-download-CumW6BF9.js";import"./FileIcon-DlpcWxUD.js";import"./FileList-fOPVs7YW.js";import"./Form-CeyJdMoD.js";import"./ImageCarouselModal-B2z3w1xB.js";import"./ListFilters-CAH9uHb5.js";import"./Loader-0-t502rO.js";import"./NumberField-DEmASbgb.js";import"./PDFViewer-B8onMOZi.js";import"./PDFViewerModal-DRhC6c4m.js";import"./PhoneNumberField-Bxg1yYbK.js";import{P as _}from"./Pill-Btq7gRdN.js";import"./RadioGroup-B5L-2pHo.js";import"./RichTextEditor-B-T6FF8k.js";import"./Select-DXIpD63Q.js";import"./SelectBase-Cf-DT05a.js";import"./Skeleton-COJurtrc.js";import{A as H}from"./Ag-grid-table-cVLiWWba.js";import"./Toolbar--Qc6Tnu3.js";import"./Tooltip-C20wWrBr.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-B5LDuv9K.js";import"./useHover-BqMw7-dA.js";import"./ButtonBase-C-A6mNvO.js";import"./Button-BfpbnT7E.js";import"./SelectionIndicator-DK6Qs-AS.js";import"./index-DJ1sWabw.js";import"./index-C_2k30VU.js";import"./usePress-BCqabgTu.js";import"./Text-BFJDapLu.js";import"./Button-KHPRXXdF.js";import"./index-CmUdzAco.js";import"./useCollection-BNS_HcEo.js";import"./index-BZN6Tiky.js";import"./VisuallyHidden-Cr-QpJx_.js";import"./Autocomplete-ChNW0oCv.js";import"./ArrowBack-B5ASBQ9Q.js";import"./use-dobby-context-ClRQF0Qd.js";import"./Label-4guhAsxS.js";import"./index-DqlSq4aw.js";import"./Label-DAth4fqM.js";import"./ErrorMessage-PgFecnZ9.js";import"./DeleteForever-C518WIeu.js";import"./variants-CiO8zhP-.js";import"./ChevronBackward-AfoJorFp.js";import"./ChevronForward-CLj_LqRI.js";import"./Calendar-BTSO-meH.js";import"./sortable.esm-CZx9ft2R.js";import"./DragIndicator-gDPTPqwc.js";import"./Search-CFPUNKQ2.js";import"./use-toast-qu1gtMcE.js";import"./Description-CQvqWXUV.js";import"./Zip-CoWL-XxV.js";import"./Download-C19cbiuQ.js";import"./Warning-Czyo07aO.js";import"./index-C7CL5OQ7.js";import"./Modal-DUGg-Sib.js";import"./ZoomOut-DFBjW4tv.js";import"./ComboBox-Di0KBwZ4.js";import"./ComboBoxListBox-C-nVKv1V.js";import"./ListBox-CHfOlGrS.js";import"./Check-12ebBL0s.js";import"./ListBox-vcMBqIVB.js";import"./useLoadMoreSentinel--PXD2cJs.js";import"./useLabel--8UZYazZ.js";import"./Input-8ErQ155_.js";import"./filter-persistence-DnfyP9K8.js";import"./use-is-mobile-DMmzF2wx.js";import"./Replay-BPfhZhsl.js";import"./KeyboardArrowDown-DKGGPISO.js";import"./KeyboardArrowUp-eo5EyuKB.js";import"./Group-Czacy95q.js";import"./useField-BwPYgnyO.js";import"./useFormValidation-DnPbtW_v.js";import"./useTextField-CPesYbRa.js";import"./useFormReset-YfbIiLDH.js";import"./Divider-CprAC7mI.js";import"./Add-D0aRLISV.js";import"./Remove-yHGNXFB9.js";import"./TextField-Bodv37_L.js";import"./Menu-Cg4G6c8o.js";import"./MoreHoriz-DS1SdAab.js";import"./Checkbox-KnC2Sfni.js";import"./CheckIndeterminateSmall-DHlUTFi9.js";import"./useToggleState-DwcVjmcM.js";import"./TableOptions-CXnMllpR.js";import"./ViewColumn-Chu0pts0.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
