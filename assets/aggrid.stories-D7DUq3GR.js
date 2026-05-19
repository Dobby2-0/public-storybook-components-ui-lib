import{j as L}from"./iframe-C1vGzIN0.js";import"./sha256-BWw-3Xd0.js";import"./SwipeableActionBlock-CehBio8d.js";import"./BulkActions-BMWcNjYB.js";import"./Canvas-DvhyZeHD.js";import"./CardList-9N7u6rBE.js";import"./Checkbox-Bj1yzhPm.js";import"./DateTimePicker-BhRcyaE4.js";import"./DndList-DKe4DC4v.js";import"./EmptyState-BY9JNIqk.js";import"./ErrorPage-CTv5B6-O.js";import"./FileButton-BwD0jsNV.js";import"./FileIcon-RqVRRi_N.js";import"./FileList-FAEUSoRK.js";import"./Form-B1rt1IrL.js";import"./ImageCarouselModal-DIOWmSr6.js";import"./ListFilters-BeJQe5xn.js";import"./Loader-DeSGl8VP.js";import"./NumberField-ZFTT0WNu.js";import"./PDFViewer-BJQ8BHtW.js";import"./PDFViewerModal-BHQyIgzl.js";import"./PhoneNumberField-EoUeM9i1.js";import{P as _}from"./Pill-C3vWeziO.js";import"./RadioGroup-gWsO0T6J.js";import"./RichTextEditor-CKKtpoW7.js";import"./Select-BLpDjdCe.js";import"./SelectBase-CdjU9ILs.js";import"./Skeleton-BdU-zbRJ.js";import"./Switch-CSFfuT71.js";import{A as H}from"./Ag-grid-table-M8eJYOx2.js";import"./TextField-DUiUnjyw.js";import"./Toolbar-CIZndURm.js";import"./Tooltip-Dyi0MNPf.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-hY9_o2UU.js";import"./useHover-CujHnvyO.js";import"./ButtonBase-FJRpYA1s.js";import"./Button-CF1X--Bh.js";import"./SelectionIndicator-B5x0N5VQ.js";import"./index-DWpAU5Ra.js";import"./index-Bq1BVUq9.js";import"./usePress-BAgfS9mT.js";import"./Text-DmyGS1iW.js";import"./Button-BF5L9ZJK.js";import"./index-DUADmaoI.js";import"./useCollection-CBaKeoa2.js";import"./index-9CnBZ64x.js";import"./VisuallyHidden-Bsz4IK0H.js";import"./Autocomplete-Coy3uqOG.js";import"./ArrowBack-DGwigeJ_.js";import"./use-dobby-context-DAt5h7EL.js";import"./Label-sK-vXOZr.js";import"./index-TjFAGuW3.js";import"./Label-eOnzYb70.js";import"./ErrorMessage-0WG6Yg7v.js";import"./DeleteForever-Dx9LPUS-.js";import"./Check-BRVasYt7.js";import"./CheckIndeterminateSmall-sX3iZ9nV.js";import"./useFormValidation-Bib6_6D0.js";import"./useToggleState-DchEoPmG.js";import"./useFormReset-ChD4EY9v.js";import"./variants-izUn93u2.js";import"./ChevronBackward-CO9R0N_u.js";import"./ChevronForward-poyBggNt.js";import"./Calendar-Cjf-0VpE.js";import"./sortable.esm-Do1zBmGZ.js";import"./DragIndicator-Ks20s-Xv.js";import"./Search-Bq-f8Jvg.js";import"./use-toast-CZ8Kbd43.js";import"./Description-BgOHERuD.js";import"./Zip-BrlYr6tS.js";import"./Download-BmQ69SDl.js";import"./Warning-tpqz2zXu.js";import"./index-C7CL5OQ7.js";import"./Modal-DmI67Rbv.js";import"./ZoomOut-BafB1xI7.js";import"./ComboBox-Di5er86u.js";import"./ComboBoxListBox-KFwUSpnH.js";import"./ListBox-rItGe8Uz.js";import"./ListBox-BrNGDLjj.js";import"./useLoadMoreSentinel-Dt7kRm6L.js";import"./useLabel-CJl1ityF.js";import"./Input-BYB8D2Hr.js";import"./filter-persistence-DimCvJVP.js";import"./use-is-mobile-DmLhiz6r.js";import"./Replay-JFTND6Ot.js";import"./KeyboardArrowDown-CXI07uH6.js";import"./KeyboardArrowUp-LmJOmUGN.js";import"./Group-BfjPVf9q.js";import"./useField-ENgWlAn4.js";import"./useTextField-DWbKQiXE.js";import"./Divider-D7efN2sv.js";import"./Add-XbIZj8_5.js";import"./Remove-8dB6CcaG.js";import"./Menu-BedWiZiJ.js";import"./MoreHoriz-BandHLsE.js";import"./TableOptions-kf5I_jqK.js";import"./ViewColumn-DU5g78AQ.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
