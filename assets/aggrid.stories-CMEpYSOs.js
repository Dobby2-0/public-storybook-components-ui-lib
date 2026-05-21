import{j as L}from"./iframe-C3oNYoGv.js";import"./sha256-0xo2dyVX.js";import"./SwipeableActionBlock-fKjfgHiM.js";import"./BulkActions-2w3728Vj.js";import"./IconButton-DwzHU2-V.js";import"./Canvas-awvYwJBe.js";import"./CardList-a2a2-QaB.js";import"./Checkbox-SnN-dOrn.js";import"./DateTimePicker-DLn6b4Z4.js";import"./DndList-wlFHMpLi.js";import"./EmptyState-BcvrhgAP.js";import"./ErrorPage-O2i4UJND.js";import"./FileButton-kh1eaXq-.js";import"./FileIcon-DxcD0G6A.js";import"./FileList-a2mKAzT5.js";import"./Form-Danjh4HY.js";import"./ImageCarouselModal-HXJgpFwL.js";import"./ListFilters-BYvltouU.js";import"./Loader-BS176VkB.js";import"./NumberField-CxUHrC15.js";import"./PDFViewer-DeU-x-Ys.js";import"./PDFViewerModal-CoDACQV4.js";import"./PhoneNumberField-Dhpro7eX.js";import{P as _}from"./Pill-C3sT1d7S.js";import"./RadioGroup-Cobcnx1k.js";import"./RichTextEditor-DMAxtRpl.js";import"./Select-2f395rd5.js";import"./SelectBase-TPE-6p6R.js";import"./Skeleton-CI6pw1mr.js";import"./Switch-CtBRzWkK.js";import{A as H}from"./Ag-grid-table-B1jjaN-K.js";import"./TextField-DEFjqA5S.js";import"./Toolbar-DN4dwDqH.js";import"./Tooltip-C0F-XsOI.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CVZiiT53.js";import"./useHover-DVKaX_QJ.js";import"./ButtonBase-DQ24H5Nv.js";import"./Button-BMxCuimO.js";import"./SelectionIndicator-DyF4S_O7.js";import"./index-3rpGV-RY.js";import"./index-CGo15r6A.js";import"./usePress-D0IetYL2.js";import"./Text-DUmgebTj.js";import"./index-DE9NX_kI.js";import"./useCollection-BTVCbxvc.js";import"./index-DypK0npo.js";import"./VisuallyHidden-DY-Y6Z4l.js";import"./Autocomplete-bkept6zj.js";import"./ArrowBack-DLhIzihf.js";import"./use-dobby-context-DkeuRSaw.js";import"./Label-CdQr_ZgJ.js";import"./index-D7Isqh1H.js";import"./Label-Bd9YHYxX.js";import"./ErrorMessage-Bp6T-4YM.js";import"./DeleteForever-R8vbkoHQ.js";import"./Check-mAR_QMe4.js";import"./CheckIndeterminateSmall-DJ1q6x1x.js";import"./useFormValidation-ClCiYaDv.js";import"./useToggleState-E5TLLNYX.js";import"./useFormReset-BYO9-3k3.js";import"./variants-D78-o6ii.js";import"./ChevronBackward-9OJhWDA1.js";import"./ChevronForward-sJWD8p4C.js";import"./Calendar-BegjVVGy.js";import"./sortable.esm-BgCHh2vV.js";import"./DragIndicator-r9PjSgYo.js";import"./Search-BvQn5cXS.js";import"./use-toast-QGHAZ52D.js";import"./Description-aFbNUuY2.js";import"./Zip-MVm-Lpfk.js";import"./Download-BtKkVIMZ.js";import"./Warning-De1ep5Mt.js";import"./index-C7CL5OQ7.js";import"./Modal-CRbtAGAs.js";import"./ZoomOut-BFUtJ9IM.js";import"./ComboBox-DmoKFVF_.js";import"./ComboBoxListBox-P1NZekZC.js";import"./ListBox-U6sMwKS2.js";import"./ListBox-BvaKUkgI.js";import"./useLoadMoreSentinel-BDok7IrZ.js";import"./useLabel-C1EHHGsM.js";import"./Input-CcCJgG5A.js";import"./filter-persistence-C0i969z8.js";import"./use-is-mobile-BJws6DZZ.js";import"./Replay-6E1zUC4q.js";import"./KeyboardArrowDown-DONNFgEK.js";import"./KeyboardArrowUp-CUJj1o6d.js";import"./Group-BFyWf5Tj.js";import"./useField-CxksWPkt.js";import"./useTextField-DC42Zk97.js";import"./Divider-FU3otOBb.js";import"./Add-D98VJWTe.js";import"./Remove-DRP3eZ3w.js";import"./Menu-B4L4i3CF.js";import"./MoreHoriz-CU3tLC_N.js";import"./TableOptions-CodHiz4l.js";import"./ViewColumn-CwGt_5xL.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
