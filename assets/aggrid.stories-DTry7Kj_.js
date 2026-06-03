import{j as L}from"./iframe-DetaKL0_.js";import"./sha256-D9wVjpbe.js";import"./SwipeableActionBlock-BK-HFK_Z.js";import"./BulkActions-B5OArb5E.js";import"./Button-DzoXCd8v.js";import"./IconButton-DA4usfWX.js";import"./Canvas-CqDdmjVZ.js";import"./CardList-CWrQt6w8.js";import"./Checkbox-DiFXrzE1.js";import"./ComboBox-DkSaduUO.js";import"./DateTimePicker-CFzX8wY7.js";import"./DndList-ClzlAkk4.js";import"./EmptyState-CpjABjGf.js";import"./ErrorPage-hl1nFYry.js";import"./use-file-download-Bou-WqWo.js";import"./FileIcon-Bxfg0-rg.js";import"./FileList-vR34RYQT.js";import"./Form-oZg77pM8.js";import"./ImageCarouselModal-BKmLmWqL.js";import"./ListFilters-Bx93dpgb.js";import"./Loader-BRWONZMQ.js";import"./NumberField-KnALH1pM.js";import"./PDFViewer-DGs4GRMh.js";import"./PDFViewerModal-DPqOhHXv.js";import"./PhoneNumberField-Bxt6MmOd.js";import{P as _}from"./Pill-okCtpVED.js";import"./RadioGroup-D7WpBu9V.js";import"./RichTextEditor-nEXlepCg.js";import"./Select-CHxuHWVa.js";import"./SelectBase-BuAOdrXd.js";import"./Skeleton-vnJ8gFWm.js";import"./Switch-DQ7BhL56.js";import{A as H}from"./Ag-grid-table-B-F7lfha.js";import"./TextField-DSHsPFJY.js";import"./Toolbar-Bt_jO9ZG.js";import"./Tooltip-C4qWXyn2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLrhUFFZ.js";import"./useHover-BeS5e-IQ.js";import"./Button-Czzx2GC3.js";import"./SelectionIndicator-C0c_pcIB.js";import"./index-CW5rNLKP.js";import"./index-CPpoh3b8.js";import"./usePress-CZ1xYj4q.js";import"./Text-ByQgp3qy.js";import"./useCollection-f1aOX4n3.js";import"./index-nSRzIFah.js";import"./VisuallyHidden-DFs_nEgu.js";import"./Autocomplete-BqQtBmhO.js";import"./ArrowBack-CCHm-bzG.js";import"./use-dobby-context-Dxta_jnh.js";import"./ButtonBase-DkY4nu_S.js";import"./Label-BrRaIPZ6.js";import"./index-DxT66sOS.js";import"./Label-D0r_MkLv.js";import"./ErrorMessage-jObsdSFq.js";import"./DeleteForever-c6hFJTDA.js";import"./Check-mBRJ3Ynd.js";import"./CheckIndeterminateSmall-OwS3d9ZP.js";import"./useFormValidation-C0qnTNj7.js";import"./useToggleState-BNpndbsJ.js";import"./useFormReset-BafL5Rqy.js";import"./ComboBoxListBox-DYwq1qKU.js";import"./ListBox-pXm3A-w4.js";import"./ListBox-CNtHPtqH.js";import"./useLoadMoreSentinel-XsYur6vV.js";import"./useLabel-C0Y-ULtJ.js";import"./Input-QJQCcvwh.js";import"./filter-persistence-Cp5hBmV8.js";import"./variants--GfA6NPc.js";import"./ChevronBackward-D14TUw3e.js";import"./ChevronForward-CkoO2upJ.js";import"./Calendar-BvtXseMy.js";import"./sortable.esm-DxJ5eMYE.js";import"./DragIndicator-Br5OJT0M.js";import"./Search-DLK4Kerk.js";import"./use-toast-zvD2Q3LT.js";import"./Description-B88XV94u.js";import"./Zip-Cx2Sr2d3.js";import"./Download-OAmvPdeZ.js";import"./Warning-B4k-YBIW.js";import"./index-C7CL5OQ7.js";import"./Modal-DcKphpuD.js";import"./ZoomOut-BqAwT3Er.js";import"./use-is-mobile-CdAIExxO.js";import"./Replay-CBrtXuIr.js";import"./KeyboardArrowDown-cG2prr1O.js";import"./KeyboardArrowUp-JPs2jgm7.js";import"./Group-C9m5cAlO.js";import"./useField-BVR6QcWw.js";import"./useTextField-DemaBpIG.js";import"./Divider-Dq3oCXqg.js";import"./Add-CzZUFS1-.js";import"./Remove-C9bL2W9T.js";import"./Menu-BuXUjlQ7.js";import"./MoreHoriz-DuAu8bOn.js";import"./TableOptions-bBclThO6.js";import"./ViewColumn-Duyyc9RV.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
