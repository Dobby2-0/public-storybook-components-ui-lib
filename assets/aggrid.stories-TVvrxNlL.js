import{j as L}from"./iframe-DtEeAOsY.js";import"./sha256-CRGIGSgr.js";import"./SwipeableActionBlock-C6t3ZeoO.js";import"./BulkActions-DxXOkGrl.js";import"./Canvas-CXVjOiaE.js";import"./CardBasic-D2B3cg3b.js";import"./CardList-CXey278l.js";import"./Checkbox-BLNIskaK.js";import"./ComboBox-JinQvC28.js";import"./DateTimePicker-x_be7xhi.js";import"./DndList-CxuMCSNQ.js";import"./EmptyState-Br6RTzcu.js";import"./ErrorPage-S_YEXwZW.js";import"./use-file-download-Ccn7G8_u.js";import"./FileIcon-DnykiDHQ.js";import"./FileList-w3oohyGa.js";import"./Form-CuhYScy4.js";import"./ImageCarouselModal-iTfM8uVr.js";import"./ListFilters-tG4X1ezM.js";import"./Loader-B8XMVN5l.js";import"./NumberField-BTV2dmdV.js";import"./PDFViewer-DQ3smoEZ.js";import"./PDFViewerModal-g-RYfvke.js";import"./PhoneNumberField-Cs_haiyn.js";import{P as _}from"./Pill-CqUtF4hW.js";import"./RadioGroup-DUWGo367.js";import"./RichTextEditor-CjfZmzpz.js";import"./Select-l6Hru4hO.js";import"./SelectBase-B2KbgeKX.js";import"./Skeleton-DlBoc6NK.js";import{A as H}from"./Ag-grid-table-oq1c3Pl7.js";import"./Toolbar-Ck7Wisyo.js";import"./Tooltip-BKfRHLdW.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-c8sYRU-c.js";import"./useHover-CDGgfiE1.js";import"./ButtonBase-lY8n4LNB.js";import"./Button-BcJPzPMR.js";import"./SelectionIndicator-Ch86_HkK.js";import"./index-CMETJZIF.js";import"./index-DxBlrczG.js";import"./usePress-DAUHRHfO.js";import"./Text-CP_uTj70.js";import"./Button-BgXILaMl.js";import"./index-DiE88bLl.js";import"./useCollection-DLgXqFLX.js";import"./index-DSi8nGqe.js";import"./VisuallyHidden-YL2KB_ox.js";import"./Autocomplete-Y1Zyi6W0.js";import"./ArrowBack-D0Mzxmh3.js";import"./use-dobby-context-SztQ2Rb6.js";import"./Label-BemCfWFK.js";import"./index-DxFi0VvR.js";import"./Label-DNXJYxmR.js";import"./ErrorMessage-Dkf8MFwt.js";import"./DeleteForever-DAMhofvr.js";import"./Check-_vR4CCIL.js";import"./CheckIndeterminateSmall-DkqyuTSj.js";import"./useFormValidation-0IDKEPmT.js";import"./useToggleState-dsi4wvA3.js";import"./useFormReset-DbJyZoQ4.js";import"./ComboBoxListBox-Ck57oYyB.js";import"./ListBox-BISCuuPn.js";import"./ListBox-DnHXL0QJ.js";import"./useLoadMoreSentinel-_2RwRX80.js";import"./useLabel-BVhVSlwk.js";import"./Input-DsWbMJtE.js";import"./filter-persistence-D5UBtbDb.js";import"./variants-DNhQPKTP.js";import"./ChevronBackward-Da4EYN-e.js";import"./ChevronForward-TWBAG5JP.js";import"./Calendar-Dk28PAhv.js";import"./sortable.esm-sbFZ6vAF.js";import"./DragIndicator-BFC1m92L.js";import"./Search-Fkm0XY52.js";import"./use-toast-CniDZXCQ.js";import"./Description-Cp5Y3eXM.js";import"./Zip-BzKFuphq.js";import"./Download-BKDw2XKn.js";import"./Warning-BGajygCD.js";import"./index-C7CL5OQ7.js";import"./Modal-CTLMcu4H.js";import"./ZoomOut-DUPKPl3S.js";import"./use-is-mobile-DPKAtrXG.js";import"./Replay-C80Gs76Q.js";import"./KeyboardArrowDown-RUP8fZt6.js";import"./KeyboardArrowUp-CP8n2FLN.js";import"./Group-DB_2ndLM.js";import"./useField-DHrn3HjU.js";import"./useTextField-DK5yU7LL.js";import"./Divider-gwXozL94.js";import"./Add-D3dCaLOe.js";import"./Remove-CqJPnCMB.js";import"./TextField-rrLRbGdG.js";import"./Menu-BcaHRT-r.js";import"./MoreHoriz-BXja_uaQ.js";import"./TableOptions-BoddX1IO.js";import"./ViewColumn-DMblG0gI.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
