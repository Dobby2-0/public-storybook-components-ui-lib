import{j as L}from"./iframe-B_LGz7Ej.js";import"./sha256-BrNJVfbR.js";import"./SwipeableActionBlock-3aaL8Bsi.js";import"./BulkActions-DJTD87hb.js";import"./Canvas-Djfk9gkC.js";import"./CardList-BCbH-dGC.js";import"./ComboBox-BpLyrX2u.js";import"./DateTimePicker-Bmv3ioiZ.js";import"./DndList-DVN_jEfQ.js";import"./EmptyState-DCDoSTxX.js";import"./ErrorPage-Yo6tqZhf.js";import"./FileButton-DqmYOgsV.js";import"./FileIcon-CxlyWnZG.js";import"./FileList-CRvPJp8a.js";import"./Form-CqRVHZTJ.js";import"./ImageCarousel-B1dW2UP1.js";import"./use-dobby-context-zXbg2nzd.js";import"./Loader-BQD4HfUj.js";import"./NumberField-BAxvw3Fd.js";import"./PDFViewer-CscKXCDD.js";import"./PDFViewerModal-Cis95ezu.js";import"./PhoneNumberField-knfwKnNU.js";import{P as _}from"./Pill-aEht7-4L.js";import"./RadioGroup-3VvG4tiT.js";import"./RichTextEditor-BCgp70kC.js";import"./Select-DuoFBLOE.js";import"./SelectBase-CB4zssa5.js";import"./Skeleton-DhChL9ac.js";import"./Switch-kJQ5--wB.js";import{A as H}from"./Ag-grid-table-CQkTm3Gb.js";import"./TextField-C7NduFl6.js";import"./Toolbar-BTWGTEmW.js";import"./Tooltip-DRAJgO0E.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CZADNQKA.js";import"./utils-UVlPCbp4.js";import"./ButtonBase-DF5xZ11q.js";import"./Button-CxB0R8HE.js";import"./FocusScope-CFoRViRT.js";import"./Text-ePeK-RTB.js";import"./usePress-_yNOhPfv.js";import"./index-Dy16ZsYt.js";import"./index-PA4Y_XAw.js";import"./Button-BG4S-Okt.js";import"./index--KRQgk93.js";import"./RSPContexts-m5uw98Y9.js";import"./Separator-Bt-W_LIX.js";import"./index-4BKUk_V9.js";import"./VisuallyHidden-7mvvrOu0.js";import"./ArrowBack-CsIhC-xC.js";import"./Label-Dv1vg14k.js";import"./index-DPoADSEq.js";import"./Label-ypNslIBK.js";import"./ErrorMessage-DbJ4tjO8.js";import"./DeleteForever-BOWK87bd.js";import"./SingleComboBox-CjKVTuHn.js";import"./ListBox-H4MjhT-m.js";import"./Check-DJ-iL_-I.js";import"./ListBox-3VCK601m.js";import"./DragAndDrop-CIKmW2mn.js";import"./useLabel-C9y1SGMM.js";import"./Input-DVEgBVzm.js";import"./variants-Cb-df-ku.js";import"./ChevronBackward-osZGRQsN.js";import"./ChevronForward-BnemPx6F.js";import"./Calendar-DIA_PQj8.js";import"./sortable.esm-DXkkJ3MI.js";import"./DragIndicator-jYNZQhEH.js";import"./Search-C6r_J3nZ.js";import"./use-toast-ByV54XBy.js";import"./Description-CCx8QCh0.js";import"./Zip-CYv5XOzC.js";import"./Download-0rHWTohj.js";import"./Warning-CPPSNHRW.js";import"./index-C7CL5OQ7.js";import"./Modal-D3tthuP2.js";import"./use-is-mobile-Cqcrk0Qp.js";import"./Replay-0BWpBFAH.js";import"./KeyboardArrowDown-tAUKz8X8.js";import"./KeyboardArrowUp-BTV8PpiA.js";import"./Group-C1FXEjPa.js";import"./FieldError-DGoIA7et.js";import"./Form-D8HSC8Qz.js";import"./useFormReset-BZKWBeE1.js";import"./useTextField-BHgUVt4m.js";import"./Divider-kjremd-W.js";import"./Add-6uNdtUNJ.js";import"./Remove-BT3fmAS1.js";import"./useToggleState-BvV2tq2I.js";import"./Menu-CkYCjarr.js";import"./MoreHoriz-BrjBHqq5.js";import"./Checkbox-CC9JTJtG.js";import"./CheckIndeterminateSmall-ClmQVFWQ.js";import"./TableOptions-B71f3_8o.js";import"./ViewColumn-CoxWbZBT.js";const jo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,D,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Go=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Go as __namedExportsOrder,jo as default};
