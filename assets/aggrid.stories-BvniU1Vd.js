import{j as L}from"./iframe-BAQ0DjCI.js";import"./sha256-B350m-06.js";import"./SwipeableActionBlock-Drs33rCp.js";import"./BulkActions-DfLlaAWe.js";import"./Canvas-CKNsGlLr.js";import"./CardList-Cf7anWQf.js";import"./Checkbox-CvnWUOvn.js";import"./ComboBox-9ycpVxge.js";import"./DateTimePicker-CyUg-wLs.js";import"./DndList-DpUHxqUC.js";import"./EmptyState-Cez_l2bU.js";import"./ErrorPage-Bi4QS3E_.js";import"./FileButton-0QNA-jHO.js";import"./FileIcon-BsDQnKp2.js";import"./FileList-e2hMBqu_.js";import"./Form-Bj0alELD.js";import"./ImageCarousel-D3fiTZOM.js";import"./ListFilters-D8_HMfra.js";import"./Loader-UropCMn-.js";import"./NumberField-CLyrK3xE.js";import"./PDFViewer-CoxPnCvs.js";import"./PDFViewerModal-COHltW9d.js";import"./PhoneNumberField-BKtGBLmf.js";import{P as _}from"./Pill-CvYX4UDN.js";import"./RadioGroup-C0J-Ijoo.js";import"./RichTextEditor-ie4OyJ9Q.js";import"./Select-5Zlkbgil.js";import"./SelectBase-CO1RqhJq.js";import"./Skeleton-C2Gy-6sQ.js";import"./Switch-Cr9zzLGm.js";import{A as H}from"./Ag-grid-table-vZ9uop-x.js";import"./Toolbar-oRT479nt.js";import"./Tooltip-DqtukSgz.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BzwgzofJ.js";import"./useHover-noAsqcmg.js";import"./ButtonBase-CQewh0V0.js";import"./Button-DFrgVfZc.js";import"./SelectionIndicator-Dm7cXaUy.js";import"./index-DzM-VVgi.js";import"./index-C5f_Uul5.js";import"./usePress-goLcaebY.js";import"./Text-DNqYLHy3.js";import"./Button-BkD8RFuk.js";import"./index-DgvE8W-k.js";import"./useCollection-BfDkc_8w.js";import"./index-hOmPybqj.js";import"./VisuallyHidden-_I1qh5Yt.js";import"./Autocomplete-BIv1BR8S.js";import"./ArrowBack-jcQ0EHma.js";import"./use-dobby-context-Bo_It24v.js";import"./Label-BIkktwhU.js";import"./index-CK_AUu5f.js";import"./Label-BMg5cfLy.js";import"./ErrorMessage-DO8G4KgV.js";import"./DeleteForever-C9xIgWXA.js";import"./Check-C-ERZWtA.js";import"./CheckIndeterminateSmall-DiaDNW6x.js";import"./useFormValidation-DPpD8car.js";import"./useToggleState-CYZjNh8U.js";import"./useFormReset-DS9CFbNB.js";import"./ComboBoxListBox-DjBca7SK.js";import"./ListBox-UEkoilAl.js";import"./ListBox-D8GDRhOv.js";import"./useLoadMoreSentinel-DDUZ1SDw.js";import"./useLabel-CKcYlPW0.js";import"./Input-BhVa_KpZ.js";import"./filter-persistence--K9j3VCY.js";import"./variants-TexM51uW.js";import"./ChevronBackward-DJpzkLg5.js";import"./ChevronForward-BqR98S9G.js";import"./Calendar-BAbJZQ49.js";import"./sortable.esm-D18D07T6.js";import"./DragIndicator-HPmfaUOF.js";import"./Search-Cy0uVRbc.js";import"./use-toast-BdQTaW18.js";import"./Description-DMB9_95R.js";import"./Zip-SAtPtork.js";import"./Download-BfZDyVBd.js";import"./Warning-4Tftv_tT.js";import"./Modal-DC67ttHi.js";import"./index-C7CL5OQ7.js";import"./use-is-mobile-C7uLO0ps.js";import"./Replay-7BB-cOOQ.js";import"./KeyboardArrowDown-3h23_Znu.js";import"./KeyboardArrowUp-DQ-_j-4_.js";import"./Group-BPkRcolb.js";import"./useField-D7OY_1X2.js";import"./useTextField-BLpJMnod.js";import"./Divider-DgBliBrE.js";import"./Add-CVe4MRip.js";import"./Remove-Bj5eqHOt.js";import"./TextField-yOnHLKCU.js";import"./Menu-tvAmBfYV.js";import"./MoreHoriz-CfFyIFVi.js";import"./TableOptions-CZD6e5QI.js";import"./ViewColumn-BGTWdC1X.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const zo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,zo as __namedExportsOrder,Po as default};
