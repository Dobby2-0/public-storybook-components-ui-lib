import{j as L}from"./iframe-JIF1kEUS.js";import"./sha256-DUMEM4d_.js";import"./SwipeableActionBlock-2WNYJiSP.js";import"./BulkActions-sZRd4yYV.js";import"./Canvas-BKRBkrk-.js";import"./CardList-5n7eRxlp.js";import"./Checkbox-DJ_Ik33A.js";import"./ComboBox-D-WQmQMF.js";import"./DateTimePicker-DjvWo68z.js";import"./DndList-Duac7YRp.js";import"./EmptyState-BJogXkV-.js";import"./ErrorPage-BDEcbFTc.js";import"./FileButton-DMXBB8yu.js";import"./FileIcon-BDNiDY14.js";import"./FileList-CZ9xewKj.js";import"./Form-Bu2o5ypa.js";import"./ImageCarouselModal-C5y26l8u.js";import"./ListFilters-Cigcq-Gp.js";import"./Loader-CgakJsoh.js";import"./NumberField-Dqq6I-Y6.js";import"./PDFViewer-DiO-ObkS.js";import"./PDFViewerModal-jWtsZFYT.js";import"./PhoneNumberField-o4XrNXhI.js";import{P as _}from"./Pill-wsbcAx_Q.js";import"./RadioGroup-BWF3wZgQ.js";import"./RichTextEditor-CQj7O_DD.js";import"./Select-BGPssAsF.js";import"./SelectBase-BRkX5QXu.js";import"./Skeleton-NfvjrAZB.js";import"./Switch-B3WzSD1v.js";import{A as H}from"./Ag-grid-table-NvhX1oxR.js";import"./TextField-Cp_0lM3N.js";import"./Toolbar-x10aLoCE.js";import"./Tooltip-D80vFL2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DLRv__W6.js";import"./useHover-DHyb8Qdz.js";import"./ButtonBase-DdK6Oukh.js";import"./Button-DyK302lY.js";import"./SelectionIndicator-DhcrL_40.js";import"./index-7LK-qAka.js";import"./index-DMNA0fIu.js";import"./usePress-DtXosapC.js";import"./Text-CMmeOcHc.js";import"./Button-C0-i6d46.js";import"./index-ct-HgTBq.js";import"./useCollection-B85HJTvZ.js";import"./index-DzXU7lvl.js";import"./VisuallyHidden-Do4qJvLF.js";import"./Autocomplete-B3kPQs_T.js";import"./ArrowBack-CXyisXbF.js";import"./use-dobby-context-Duc6L5i5.js";import"./Label-Diz0UzNa.js";import"./index-CC5ChHha.js";import"./Label-CGwVSuR-.js";import"./ErrorMessage-CiECTMOd.js";import"./DeleteForever-CFliE1sa.js";import"./Check-DapBzBFU.js";import"./CheckIndeterminateSmall-BFMLsBR2.js";import"./useFormValidation-DoEJbiMD.js";import"./useToggleState-D7vlX4BY.js";import"./useFormReset-CtlHfajp.js";import"./ComboBoxListBox-2pSZQNY5.js";import"./ListBox-DO6YxmFY.js";import"./ListBox-Dvhi2JUp.js";import"./useLoadMoreSentinel-Cq2R_wKp.js";import"./useLabel-CL-fIXPD.js";import"./Input--HP2vqWB.js";import"./filter-persistence-CsNDGsz5.js";import"./variants-DB4JeGes.js";import"./ChevronBackward-C-qItTW6.js";import"./ChevronForward-CAQRhIVQ.js";import"./Calendar-gZVhxOaf.js";import"./sortable.esm-ePCxm8NQ.js";import"./DragIndicator-Br9cVykx.js";import"./Search-y1OM6wyG.js";import"./use-toast-Dz_Ew-HJ.js";import"./Description-Datx81oN.js";import"./Zip-uudro9jZ.js";import"./Download-DBtjeZGQ.js";import"./Warning-CuqPUH98.js";import"./index-C7CL5OQ7.js";import"./Modal-zwkmQ0KV.js";import"./ZoomOut-BeoWqzv3.js";import"./use-is-mobile-pDV7g1jk.js";import"./Replay-RTbxRWo9.js";import"./KeyboardArrowDown-tyaRR8Gn.js";import"./KeyboardArrowUp-BbhhKlEn.js";import"./Group-7W_jY8-t.js";import"./useField-B0227RDq.js";import"./useTextField-Vxik3vZT.js";import"./Divider-BPq_jDnh.js";import"./Add-CpV7DM7f.js";import"./Remove-B0FNR8ok.js";import"./Menu-C01aaKHR.js";import"./MoreHoriz-BtOkG1tK.js";import"./TableOptions-GRM5_ssI.js";import"./ViewColumn-BfanXHTQ.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
