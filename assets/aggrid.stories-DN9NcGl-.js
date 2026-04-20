import{j as L}from"./iframe-DCnsIBR_.js";import"./sha256-mvRSi-KK.js";import"./SwipeableActionBlock-CtmIvqq4.js";import"./BulkActions-FukP3IBs.js";import"./Canvas-DnnDPIj6.js";import"./Checkbox-BqdrDCqi.js";import"./DateTimePicker-ByNIT22Q.js";import"./DndList-de4bMhSX.js";import"./ErrorPage-gXTvzHJH.js";import"./FileButton-CLlRZ35b.js";import"./FileIcon-CjoTTPri.js";import"./FileList-C7reA6-z.js";import"./Form-C9v4ZRZM.js";import"./ImageCarousel-dIcVuUjl.js";import"./use-dobby-context-BB7Cu8Bv.js";import"./Loader-DlSWYIX1.js";import"./NumberField-BDL5NlZl.js";import"./PDFViewer-BKCRUEl8.js";import"./PDFViewerModal-BYRDrZ5U.js";import"./PhoneNumberField-DE1JumCb.js";import{P as _}from"./Pill-DLNmahhJ.js";import"./RichTextEditor-Bk0RmIMG.js";import"./Select-EFVDOhEr.js";import"./SelectBase-CpRL5QWH.js";import"./Skeleton-C6r756yD.js";import"./Switch-C6xaMwql.js";import{A as H}from"./Ag-grid-table-D0KVKxD7.js";import"./Toolbar-CxUqG2o-.js";import"./Tooltip-CuBTs8KM.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CJ38Uhu4.js";import"./utils-BL8e7Lmy.js";import"./ButtonBase-BFMKlGBO.js";import"./Button-BRWT2KwY.js";import"./FocusScope-CBVZ6xEL.js";import"./Text-B6TfxLXM.js";import"./usePress-BQibEut6.js";import"./index-CBqyRhV4.js";import"./index-Cg5B7Yby.js";import"./Button-CWQD3tU_.js";import"./index-Bp_12h1v.js";import"./RSPContexts-CuiviOgw.js";import"./Separator-DJcQyJX1.js";import"./index-CKQPywv2.js";import"./VisuallyHidden-DQPDv7Eq.js";import"./ArrowBack-DCdQPvR8.js";import"./Label-DmMYePTt.js";import"./index-DlCmvME5.js";import"./Label-9TPDuMq-.js";import"./ErrorMessage-Co54-RML.js";import"./DeleteForever-Dz2hZ5lT.js";import"./Check-B1U5fiZb.js";import"./CheckIndeterminateSmall-DZfA9w5F.js";import"./Form-CJy_rZUj.js";import"./useToggleState-D8WjIDnr.js";import"./useFormReset-BdVlXZOG.js";import"./variants-COn9O8TO.js";import"./ChevronBackward-Dl7pWpuU.js";import"./ChevronForward-DdcUYSCD.js";import"./Calendar-CP13plmx.js";import"./sortable.esm-tG2XU3ps.js";import"./DragIndicator-XPB94_cB.js";import"./use-toast-BfFK_546.js";import"./Description-CkzCixz8.js";import"./Zip-BCcDZ-p3.js";import"./Download-CrhJU2zU.js";import"./Warning-BOaGTdrE.js";import"./index-C7CL5OQ7.js";import"./Modal-B6sDVlY2.js";import"./ComboBox-D_CAsnO8.js";import"./SingleComboBox-BFn3tj5M.js";import"./ListBox-CWdDNjWk.js";import"./ListBox-CV1TEOH3.js";import"./DragAndDrop-t2I1BC3m.js";import"./useLabel-PfIRQ1I4.js";import"./Input-Czx5u3at.js";import"./use-is-mobile-DXCxsPng.js";import"./Replay-C5lk5PFT.js";import"./KeyboardArrowDown-CD3Ak-zh.js";import"./KeyboardArrowUp-BRMceP9n.js";import"./Group-BGn85Ump.js";import"./FieldError-Df_49GcK.js";import"./useTextField-CwbSUOUH.js";import"./Divider-AjOEpNVY.js";import"./Remove-sxJAx5j0.js";import"./TextField-DYfxLo4i.js";import"./Search-DbYCGTwg.js";import"./Menu-BgMjN0G5.js";import"./MoreHoriz-BBP40q6U.js";import"./TableOptions-CbokYRm7.js";import"./ViewColumn-CE0WRWVb.js";const xo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Bo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Bo as __namedExportsOrder,xo as default};
