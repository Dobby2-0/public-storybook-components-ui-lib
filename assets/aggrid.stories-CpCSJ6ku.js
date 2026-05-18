import{j as L}from"./iframe-B3WleBvn.js";import"./sha256-Hr4udksG.js";import"./SwipeableActionBlock-YpegYWBM.js";import"./BulkActions-BInpAMQ6.js";import"./Canvas-BW5iuHZP.js";import"./CardList-z2RlJxjQ.js";import"./Checkbox-vVxn5sVM.js";import"./ComboBox-BZX7hlgr.js";import"./DateTimePicker-Bp7oZqr4.js";import"./DndList-CWnysiQh.js";import"./EmptyState-DJvme1SL.js";import"./ErrorPage-BCkX7Muv.js";import"./FileButton-CM_vU2EE.js";import"./FileIcon-fn2qbQar.js";import"./FileList-yDbsJMvb.js";import"./Form-RHHMrhCW.js";import"./ImageCarouselModal-eTTGje2J.js";import"./ListFilters-Bf0IVHf3.js";import"./Loader-Y6RaYNk1.js";import"./NumberField-Bi8F2EzA.js";import"./PDFViewer-DLaVjw0M.js";import"./PDFViewerModal-B1dRzUgZ.js";import"./PhoneNumberField-BodSRjWa.js";import{P as _}from"./Pill-CSI4z3xu.js";import"./RadioGroup-CNnwUWek.js";import"./RichTextEditor-DFdGi2s3.js";import"./Select-BL5RU8ZX.js";import"./SelectBase-Ahm1IR40.js";import"./Skeleton-DthmJ31f.js";import{A as H}from"./Ag-grid-table-DBaUnzva.js";import"./Toolbar-HUFEr3R1.js";import"./Tooltip-6Lh5zJlT.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DxuFyrBI.js";import"./useHover-9rdygDPi.js";import"./ButtonBase-CNE1x8X3.js";import"./Button-DpcLJ05n.js";import"./SelectionIndicator-dmGRJ_u3.js";import"./index-BsuDJeu9.js";import"./index-C72FCE01.js";import"./usePress-CN5B4D98.js";import"./Text-WbuJZRi-.js";import"./Button-Cducs9Gt.js";import"./index-1VjKsh7-.js";import"./useCollection-DDPHmoIq.js";import"./index-BEdecYP6.js";import"./VisuallyHidden-CV96hiTu.js";import"./Autocomplete-BmWpgatm.js";import"./ArrowBack-CVCdu_vf.js";import"./use-dobby-context-DrRLltn5.js";import"./Label-CdXMtSo3.js";import"./index-CSYHPqnc.js";import"./Label-5q_A0Sob.js";import"./ErrorMessage-C7ZC4_Z-.js";import"./DeleteForever-B_HbBWib.js";import"./Check-BUQ2toxi.js";import"./CheckIndeterminateSmall-wppKXwvx.js";import"./useFormValidation-C4cdew-v.js";import"./useToggleState-D0dwb6Vg.js";import"./useFormReset-CdO2iBhb.js";import"./ComboBoxListBox-IiuEPPeC.js";import"./ListBox-BLqYuVAI.js";import"./ListBox-BpkH_bJ_.js";import"./useLoadMoreSentinel-BU4DeyjU.js";import"./useLabel-DZYoA7kr.js";import"./Input-xLNo1aje.js";import"./filter-persistence-Bi7sX7bZ.js";import"./variants-sYo_XFZ-.js";import"./ChevronBackward-Gk-Yp1fr.js";import"./ChevronForward-BKKlhuMN.js";import"./Calendar-C6WFDfhu.js";import"./sortable.esm-DdbJ5vj_.js";import"./DragIndicator-B40ydtgz.js";import"./Search-DZrJeOtV.js";import"./use-toast-CcZC7PzJ.js";import"./Description-BSgO0-qh.js";import"./Zip-DZn_Dgbx.js";import"./Download-DgP08zWy.js";import"./Warning-BacdlGWd.js";import"./index-C7CL5OQ7.js";import"./Modal-BKLgwIVo.js";import"./ZoomOut-DAEnSrMW.js";import"./use-is-mobile-CSyRR-yc.js";import"./Replay-DYq_apY2.js";import"./KeyboardArrowDown-Dy8V8GGU.js";import"./KeyboardArrowUp-BI4CcLfX.js";import"./Group-BNszYrWg.js";import"./useField-DQW0AXNt.js";import"./useTextField-DetZTYeO.js";import"./Divider-793rWQv6.js";import"./Add-Df26BMnK.js";import"./Remove-DzUz71ph.js";import"./TextField-Bj7CEQ1j.js";import"./Menu-BQABoIH4.js";import"./MoreHoriz-B2JxPLJ0.js";import"./TableOptions-Dm4cSpOB.js";import"./ViewColumn-C3TMuGmQ.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
