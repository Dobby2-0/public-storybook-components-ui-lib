import{j as L}from"./iframe-BuQZYLjZ.js";import"./sha256-Dk4EG7kS.js";import"./SwipeableActionBlock-Dtsh57kf.js";import"./BulkActions-DRHDi6Qe.js";import"./Canvas-RfrDEKDi.js";import"./CardBasic-V31AOCpI.js";import"./CardList-BXiXclQm.js";import"./DateTimePicker-BQq5Fh61.js";import"./DndList-3-d6t6Ml.js";import"./EmptyState-B3hsDpYH.js";import"./ErrorPage-Dm6MOA2s.js";import"./FileButton-DZMvO8XZ.js";import"./FileIcon-DU8R7rKj.js";import"./FileList-Dqfq2dd4.js";import"./Form-CnRrtu-x.js";import"./ImageCarouselModal-CC77ELCU.js";import"./ListFilters-CMaWvJCC.js";import"./Loader-CDLiKOIL.js";import"./NumberField-DS2xdvSN.js";import"./PDFViewer-B3MIzLNk.js";import"./PDFViewerModal-BhdKCg8a.js";import"./PhoneNumberField-CNGwAavG.js";import{P as _}from"./Pill-CmqED73B.js";import"./RichTextEditor-zt3o_Luv.js";import"./Select-YtIG7dLM.js";import"./SelectBase-UM66AGz9.js";import"./Skeleton-DGQqDZ3R.js";import"./Switch-CLwBV0HD.js";import{A as H}from"./Ag-grid-table-DeJNoO3h.js";import"./TextField-BgQ1gh-2.js";import"./Toolbar-C_6SatZh.js";import"./Tooltip-BkqI6U6A.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-B5KVNJNr.js";import"./useHover-CiczVSK2.js";import"./ButtonBase-npMyeAn1.js";import"./Button-BlcQ60k5.js";import"./SelectionIndicator-D9Fg3jDt.js";import"./index-CFQJxFH6.js";import"./index-Bd-ouoAk.js";import"./usePress-ZiGbaZzJ.js";import"./Text-EG1aAmzm.js";import"./Button-Dxk9Ia29.js";import"./index-OkL7a2l2.js";import"./useCollection-_O7uR0kP.js";import"./index-CR3ZY86l.js";import"./VisuallyHidden-Dx7N9Iu0.js";import"./Autocomplete-6UbWrJdi.js";import"./ArrowBack-DM0kYT-P.js";import"./use-dobby-context-DlcbDqu6.js";import"./Label-J_ie02mz.js";import"./index-DbGlvAzX.js";import"./Label-BfqPxNfA.js";import"./ErrorMessage-DyDgCBu6.js";import"./DeleteForever-D8ILtHzz.js";import"./variants-DkqHdO62.js";import"./ChevronBackward-CCxP5tNI.js";import"./ChevronForward-Dr6FwXVq.js";import"./Calendar-DfWUvwNW.js";import"./sortable.esm-eZmfNVjo.js";import"./DragIndicator-Bhw03dob.js";import"./Search-DSNHRTBz.js";import"./use-toast-Q4b4qIgB.js";import"./Description-C4F9mPul.js";import"./Zip-MunYEeHe.js";import"./Download-CFbrThMY.js";import"./Warning-Cso4Iakh.js";import"./index-C7CL5OQ7.js";import"./Modal-CD84QN80.js";import"./ZoomOut-DR6qUgXf.js";import"./ComboBox-zC9jvUq6.js";import"./ComboBoxListBox-BRn7YNlu.js";import"./ListBox-Biimp9HY.js";import"./Check-RA4dLzQy.js";import"./ListBox-CRhZOpWJ.js";import"./useLoadMoreSentinel-0LbcLFc3.js";import"./useLabel-CdGUclwM.js";import"./Input-Dpa4kBLw.js";import"./filter-persistence-B1VoEymj.js";import"./use-is-mobile-DrofYI5S.js";import"./Replay-o3Nc4ab8.js";import"./KeyboardArrowDown-mEt7fdmE.js";import"./KeyboardArrowUp-DLCOfNyI.js";import"./Group-DRlM-70N.js";import"./useField-bqhDVJNH.js";import"./useFormValidation-DS1Of17J.js";import"./useTextField-DV_UXofQ.js";import"./useFormReset-vzBLgnoh.js";import"./Divider-xMv7Bpop.js";import"./Add-C2Bcz2P-.js";import"./Remove-B7vJm6F6.js";import"./useToggleState-DpN68xKf.js";import"./Menu-CYsRsIii.js";import"./MoreHoriz-DNLKRNuH.js";import"./Checkbox-CXRXvUAi.js";import"./CheckIndeterminateSmall-BQjc4Eee.js";import"./TableOptions-DHXJlnR3.js";import"./ViewColumn-B03rbsyL.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
