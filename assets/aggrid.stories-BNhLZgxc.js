import{j as L}from"./iframe-BiaKCnFg.js";import"./sha256-DTxMKfYp.js";import"./SwipeableActionBlock-D0Giaq65.js";import"./BulkActions-Cg87eZeT.js";import"./Canvas-C3jWzvpU.js";import"./CardList-bR4yYQTB.js";import"./Checkbox-DAhLMDtF.js";import"./ComboBox-CRyWD78q.js";import"./DateTimePicker-CGEZicYX.js";import"./DndList-D5Yr_Hzr.js";import"./EmptyState-Bg9C7okP.js";import"./ErrorPage-CdPlItwR.js";import"./use-file-download-BQ7CdxKO.js";import"./FileIcon-Cge6GVyH.js";import"./FileList-BE3xyRU7.js";import"./Form-dP2AxA5p.js";import"./ImageCarouselModal-D8709OZd.js";import"./ListFilters-BwDb2eau.js";import"./Loader-ClTVtDl4.js";import"./NumberField-BE9zFkrj.js";import"./PDFViewer-CyN7AvWo.js";import"./PDFViewerModal-BePbLfFE.js";import"./PhoneNumberField-CoQqiAoz.js";import{P as _}from"./Pill-Yqf9-rsz.js";import"./RadioGroup-CeucmWsE.js";import"./RichTextEditor-BhQNAwLf.js";import"./Select-DErybrw9.js";import"./SelectBase-Bevhpolu.js";import"./Skeleton-Sl3kNMo1.js";import"./Switch-ByiR-5Yf.js";import{A as H}from"./Ag-grid-table-DTZGqlYq.js";import"./TextField-D5xXeSVy.js";import"./Toolbar-CAe8TrTX.js";import"./Tooltip-CTBiM07k.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-nrVFO6fM.js";import"./useHover-D9DS5yA7.js";import"./ButtonBase-CLRY0Lb3.js";import"./Button-WvY0-6h3.js";import"./SelectionIndicator-DrPVbDEG.js";import"./index-BuyXEN_o.js";import"./index-DS6qTNge.js";import"./usePress-DxWS_a10.js";import"./Text-B7eeu1tm.js";import"./Button-0stNLDql.js";import"./index-CSrwbFWy.js";import"./useCollection-BKo-JHz_.js";import"./index-D6yxA-bS.js";import"./VisuallyHidden-BMrtBig1.js";import"./Autocomplete-Crh9ZW9_.js";import"./ArrowBack-Ch_w3Kmq.js";import"./use-dobby-context-WqJg_JXP.js";import"./Label-oyWkNGh0.js";import"./index-DtT-FGCI.js";import"./Label-B-Scc7jx.js";import"./ErrorMessage-DqgXmXCa.js";import"./DeleteForever-DnKfeSXy.js";import"./Check-DmKiK_tG.js";import"./CheckIndeterminateSmall-DSpFU3ox.js";import"./useFormValidation-DSTisM7u.js";import"./useToggleState-CLtX8f0N.js";import"./useFormReset-z94BujoP.js";import"./ComboBoxListBox-D4hdN1As.js";import"./ListBox-CsmO4l-W.js";import"./ListBox-CARPtdUg.js";import"./useLoadMoreSentinel-BizGUVWT.js";import"./useLabel-DM5gXb4l.js";import"./Input-BLQ7Xpbs.js";import"./filter-persistence-CUbWU1IC.js";import"./variants-dQmToWHE.js";import"./ChevronBackward-D2Q_pbQA.js";import"./ChevronForward-B3HgYxSa.js";import"./Calendar-fJfmBhqo.js";import"./sortable.esm-DcFxVskj.js";import"./DragIndicator-BFvEvfND.js";import"./Search-tfNXFARb.js";import"./use-toast-CHtKmJs4.js";import"./Description-RsD-uXug.js";import"./Zip-mXrddcpl.js";import"./Download-vPbeFjzP.js";import"./Warning-Dobc9BPK.js";import"./index-C7CL5OQ7.js";import"./Modal-DWTFpRU8.js";import"./ZoomOut-SPCjNrbe.js";import"./use-is-mobile-CH8yeaXd.js";import"./Replay-1QmQpjPO.js";import"./KeyboardArrowDown-JVD3mMor.js";import"./KeyboardArrowUp-BACLZZl9.js";import"./Group-Cp91AqYf.js";import"./useField-ccJTxOPY.js";import"./useTextField-D0jxVDW0.js";import"./Divider-C6u7RkJj.js";import"./Add-BZRA-JOw.js";import"./Remove-1oT34YJL.js";import"./Menu-CeqPksDO.js";import"./MoreHoriz-BY6ItSvG.js";import"./TableOptions-fhhzU0-8.js";import"./ViewColumn-CJQffcXF.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
