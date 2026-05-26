import{j as L}from"./iframe-BlAShGx_.js";import"./sha256-DD82QyHS.js";import"./SwipeableActionBlock-BRfcSEa1.js";import"./BulkActions-BcXUu8AF.js";import"./Canvas-CH2549nm.js";import"./CardBasic-DOi_mUSW.js";import"./CardList-B_ooyma_.js";import"./DateTimePicker-e7z2wIH0.js";import"./DndList-CkV8IwST.js";import"./EmptyState-DRgcwkAe.js";import"./ErrorPage-C55I0vHp.js";import"./FileButton-K8knDRgX.js";import"./FileIcon-zyjT375U.js";import"./FileList-CDCOXHLt.js";import"./Form-Dp_RpToQ.js";import"./ImageCarouselModal-DUBvLdYA.js";import"./ListFilters-CV5fbNuJ.js";import"./Loader-CKhT2Eyr.js";import"./NumberField-BMc5WbA9.js";import"./PDFViewer-BxlQPdhl.js";import"./PDFViewerModal-BuTiAGWV.js";import"./PhoneNumberField-bH8SoCwJ.js";import{P as _}from"./Pill-BzEhEx-n.js";import"./RadioGroup-B9-Sc77C.js";import"./RichTextEditor-DJbwXFzC.js";import"./Select-Cnpf5dtV.js";import"./SelectBase-KEiVUW61.js";import"./Skeleton-CbkJntVm.js";import{A as H}from"./Ag-grid-table-rBr29zCr.js";import"./TextField-DtMH8gqk.js";import"./Toolbar-U0T5cyZ5.js";import"./Tooltip-DCV4EGoP.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-2zPEJEPn.js";import"./useHover-DEiLiWb1.js";import"./ButtonBase-DF2Kmxli.js";import"./Button-DPZI7PUd.js";import"./SelectionIndicator-CWzx1OXo.js";import"./index-BLSv-aTS.js";import"./index-DwQoafie.js";import"./usePress-C6xx7uxM.js";import"./Text-y3ugg862.js";import"./Button-BiBN7gXm.js";import"./index-B8l9xvvj.js";import"./useCollection-DYLt4ASN.js";import"./index-BarixTo4.js";import"./VisuallyHidden-aD9brjsU.js";import"./Autocomplete-P7FbSN_b.js";import"./ArrowBack-WI4Vyi4-.js";import"./use-dobby-context-Gm5KI7-2.js";import"./Label-DdCEuN0e.js";import"./index-P0k2IsM8.js";import"./Label-BoC4dPa5.js";import"./ErrorMessage-BkAq6UVE.js";import"./DeleteForever-BOjy5oz3.js";import"./variants-BW0ETPKh.js";import"./ChevronBackward-BPtBE408.js";import"./ChevronForward-D2eyNZqw.js";import"./Calendar-DCca09lm.js";import"./sortable.esm-DTQIbDOZ.js";import"./DragIndicator-DtFIADM1.js";import"./Search-BFe4I0Pl.js";import"./use-toast-BRfCsy_n.js";import"./Description-9eIg5-M9.js";import"./Zip-ByzdyNIr.js";import"./Download-BM6Rhu4O.js";import"./Warning-h8LaOMto.js";import"./index-C7CL5OQ7.js";import"./Modal-D-bpSerT.js";import"./ZoomOut-bLJMf5Vx.js";import"./ComboBox-BHxLEpCC.js";import"./ComboBoxListBox-Vo3kWcWA.js";import"./ListBox-4ZPkpGi9.js";import"./Check-5tPrUKX8.js";import"./ListBox-BB7bfwgx.js";import"./useLoadMoreSentinel-tvIk-Yts.js";import"./useLabel-CSkTYHtP.js";import"./Input-DkED4-42.js";import"./filter-persistence-R5SX4EiA.js";import"./use-is-mobile-CwvH31oU.js";import"./Replay-DYrcRXEd.js";import"./KeyboardArrowDown-su9MsdaE.js";import"./KeyboardArrowUp-BWNrw0XO.js";import"./Group-iEwrtl7N.js";import"./useField-eXEMRdni.js";import"./useFormValidation-DNG5JjCu.js";import"./useTextField-C7z6raMa.js";import"./useFormReset-D1pxjSJH.js";import"./Divider-BSivDJEF.js";import"./Add-CqsxO4py.js";import"./Remove-BQzuViwf.js";import"./Menu-BuBzdBX5.js";import"./MoreHoriz-DTIULDci.js";import"./Checkbox-BdvEK8vR.js";import"./CheckIndeterminateSmall-CqW5TiS4.js";import"./useToggleState-BFMozydE.js";import"./TableOptions-DeUDP6-_.js";import"./ViewColumn-C4ysYUiR.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
