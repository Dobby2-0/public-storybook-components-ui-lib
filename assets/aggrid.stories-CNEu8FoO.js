import{j as L}from"./iframe-Bgm5THKt.js";import"./sha256-CTXWHPJT.js";import"./SwipeableActionBlock-BpgoV_P3.js";import"./BulkActions-DYUmqDCH.js";import"./Button-DHR9HFf0.js";import"./IconButton-C32uAGyZ.js";import"./Canvas-DcgysofD.js";import"./CardBasic-nHIJS6Gz.js";import"./CardList-DZOqT6y-.js";import"./DateTimePicker-BrOuq8NJ.js";import"./DndList-Bt6u3hls.js";import"./EmptyState-DKZ59EZz.js";import"./ErrorPage-C9cAFw6-.js";import"./FileButton-Bqi6_6hX.js";import"./FileIcon-CYk-kwqO.js";import"./FileList-DFyZpx6Q.js";import"./Form-CsREkCV4.js";import"./ImageCarousel--wof7CAW.js";import"./use-dobby-context-DcjgnT_U.js";import"./Loader-ceO3C9gX.js";import"./NumberField-gmra9765.js";import"./PDFViewer-hH4GRoxf.js";import"./PDFViewerModal-C7j7gVdI.js";import"./PhoneNumberField-D-vw8hlo.js";import{P as _}from"./Pill-CvhraYzZ.js";import"./RadioGroup-B461v8pC.js";import"./RichTextEditor-Bg6BQ7O6.js";import"./SelectBase-DZwWD1Kf.js";import"./Skeleton-BW4gpDJ3.js";import{A as H}from"./Ag-grid-table-DUjsdHyM.js";import"./TextField-D1PKmmZ8.js";import"./Toolbar-C6Nz600K.js";import"./Tooltip-BFyfTSGh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DdSNQObl.js";import"./utils-Bq8izQar.js";import"./Button-CAEc_581.js";import"./FocusScope-D9Rrbq_B.js";import"./Text-Fb6kCMEk.js";import"./usePress-CGoonp27.js";import"./index-fbh5EQGT.js";import"./index-I_M9ki7z.js";import"./RSPContexts-wKeyUQal.js";import"./Separator-D-JgQQMZ.js";import"./index-DARzPVSa.js";import"./VisuallyHidden-BOG_O0ss.js";import"./ArrowBack-iCWf_y0k.js";import"./Select-CkpBODw-.js";import"./ButtonBase-BL0ygiPQ.js";import"./Label-Ctzxm2e7.js";import"./index-9i4voHfM.js";import"./Label-5VvRGiIE.js";import"./ErrorMessage-Cyi8U-tu.js";import"./DeleteForever-BM4eXaVT.js";import"./variants-0KyJ753r.js";import"./ChevronBackward-DCATkWxg.js";import"./ChevronForward-D8N1UnMg.js";import"./Calendar-C-tDaE-e.js";import"./sortable.esm-DzRPzl-a.js";import"./DragIndicator-DqL1HMUk.js";import"./Search-cbc0XnIL.js";import"./use-toast-CmpI9kI4.js";import"./Description-D_5nKTRV.js";import"./Zip-eCy88hJc.js";import"./Download-DoVsOpOx.js";import"./Warning-B4DoOrqu.js";import"./index-C7CL5OQ7.js";import"./Modal-Cs4v4Kdy.js";import"./ComboBox-CMckWH0q.js";import"./SingleComboBox-N2X49O3q.js";import"./ListBox-Ds1dQMTU.js";import"./Check-CFe97tmy.js";import"./ListBox-DERZmFuE.js";import"./DragAndDrop-BMaBBvXg.js";import"./useLabel-EJobFHlw.js";import"./Input-UZM3ZovV.js";import"./use-is-mobile-BGDQmQJ3.js";import"./Replay-Dczmi6m3.js";import"./KeyboardArrowDown-BdatrPOP.js";import"./KeyboardArrowUp-CNxouu9H.js";import"./Group-ClOGN3MA.js";import"./FieldError-B11nW6zM.js";import"./Form-DjUerOo-.js";import"./useFormReset-DDTPSCSz.js";import"./useTextField-DnpX65WF.js";import"./Divider-CnWhsMy1.js";import"./Add-B4HpyfLY.js";import"./Remove-Ta9NhDCc.js";import"./Menu-kFMy9G9p.js";import"./MoreHoriz-BWb9iOuh.js";import"./Checkbox-BLDSWsPt.js";import"./CheckIndeterminateSmall-CepwSIwS.js";import"./useToggleState-MJ4Itsb2.js";import"./TableOptions-0Ov0-eV-.js";import"./ViewColumn-Blj-5wVW.js";const jo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
