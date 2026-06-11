import{j as L}from"./iframe-BxpDzqBk.js";import"./sha256-Ba7Hr0lL.js";import"./SwipeableActionBlock-CzNcEOYJ.js";import"./BulkActions-By6AyBEf.js";import"./Canvas-BJiM1ZMQ.js";import"./CardList-CViPdx_0.js";import"./DateTimePicker-BtS3MYLm.js";import"./DndList-B2GZhRCf.js";import"./EmptyState-Eb392TMF.js";import"./ErrorPage-KJwZqVun.js";import"./use-file-download-C4OyXbxy.js";import"./FileIcon-DObVlMLB.js";import"./FileList-vXz_P6Dz.js";import"./Form-o_voga5p.js";import"./ImageCarouselModal-DYxmu1OC.js";import"./ListFilters-CTdPB7DN.js";import"./Loader-D4O6dCEt.js";import"./NumberField-D08p03Rb.js";import"./PDFViewer-B-xVSVKS.js";import"./PDFViewerModal-8tlKiVtK.js";import"./PhoneNumberField-o2Xur0G9.js";import{P as _}from"./Pill-EAssIo_y.js";import"./RichTextEditor-BjSEOrnj.js";import"./Select-Dd5uVB__.js";import"./SelectBase-DMs52A3u.js";import"./Skeleton-BgodaZlf.js";import{A as H}from"./Ag-grid-table-SLcj3exx.js";import"./TextField-BlVbLCkr.js";import"./Toolbar-DewmD7DQ.js";import"./Tooltip-B2aQCnJA.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Dv4dZ8QT.js";import"./useHover-CQPv9kXH.js";import"./ButtonBase-BIyoh5At.js";import"./Button-Dx3qKNey.js";import"./SelectionIndicator-CKAcSFvH.js";import"./index-Ckz3c10D.js";import"./index-de8NLQpv.js";import"./usePress-CF69GWM9.js";import"./Text-DMHLZ9F2.js";import"./Button-CHE9_F9n.js";import"./index-DGrH-NED.js";import"./useCollection-uwnWto8c.js";import"./index-DXAAUhhG.js";import"./VisuallyHidden-BtWZNOf_.js";import"./Autocomplete-OjHe189S.js";import"./ArrowBack-DI79QuN-.js";import"./use-dobby-context-D7IOHaFU.js";import"./Label-hQaOzBc9.js";import"./index-B_Um-vP4.js";import"./Label-DM2OBeen.js";import"./ErrorMessage-BDSSzByw.js";import"./DeleteForever-CXuQcahB.js";import"./variants-8H2OzYmC.js";import"./ChevronBackward-uAbH55Eb.js";import"./ChevronForward-DOmca4WQ.js";import"./Calendar-BN0YmGV6.js";import"./sortable.esm-BqRn6MpK.js";import"./DragIndicator-AKYOVEUu.js";import"./Search-BBTHYzd1.js";import"./use-toast-Dsv4wO8c.js";import"./Description-Dx8Fy5uV.js";import"./Zip-Dvw9Gmqj.js";import"./Download-BqgK0NXE.js";import"./Warning-Dk6dJXuK.js";import"./index-C7CL5OQ7.js";import"./Modal-C9vntYAB.js";import"./ZoomOut-DRbKhhR_.js";import"./ComboBox-GHn4pbzd.js";import"./ComboBoxListBox-BAQmkVbU.js";import"./ListBox-CZm3YyEV.js";import"./Check-C99IRoQs.js";import"./ListBox-Dn-EWkU1.js";import"./useLoadMoreSentinel-DbNmD9Xa.js";import"./useLabel-uQfF5Kkd.js";import"./Input-1SaxmQCf.js";import"./filter-persistence-B1tUfpj_.js";import"./use-is-mobile-C-zAe7P7.js";import"./Replay-BM6RQ1DJ.js";import"./KeyboardArrowDown-BarmVwNQ.js";import"./KeyboardArrowUp-Dt80Ejln.js";import"./Group-BQgCsaZT.js";import"./useField-Etz8wre5.js";import"./useFormValidation-DBQUqkgW.js";import"./useTextField-TAIz-kCX.js";import"./useFormReset-vkXybXBD.js";import"./Divider-BCmg858Y.js";import"./Add-Bzl6tqut.js";import"./Remove-BE-JtoS2.js";import"./Menu-B1hXVCZN.js";import"./MoreHoriz-BLL-E6v3.js";import"./Checkbox-CpYhyvKN.js";import"./CheckIndeterminateSmall-CFJ2n8pR.js";import"./useToggleState-CEvK-IpS.js";import"./TableOptions-yEqQlw37.js";import"./ViewColumn-BZJGFmAw.js";const Go={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Po=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Po as __namedExportsOrder,Go as default};
