import{j as L}from"./iframe-BW_3WW6f.js";import"./sha256-CQheEuXi.js";import"./SwipeableActionBlock-w6Daegha.js";import"./BulkActions-BYc8Wxf0.js";import"./Button-clvkrcg3.js";import"./IconButton-BXYJsDL1.js";import"./Canvas-BAVjerDT.js";import"./CardBasic-CcV5JFdp.js";import"./CardList-CQjtdDuN.js";import"./DateTimePicker-DjQnrp3q.js";import"./DndList-BPoNJEcQ.js";import"./EmptyState-B6eHxNS7.js";import"./ErrorPage-DXZRMkp5.js";import"./use-file-download-DIK4VhIz.js";import"./FileIcon-CNF47FEE.js";import"./FileList-BFGLIG9a.js";import"./Form-BN6Xx1WM.js";import"./ImageCarouselModal-DQ8zoj_e.js";import"./ListFilters-5S4gX5eu.js";import"./Loader-C4vcv2Oh.js";import"./NumberField-DvNdihfa.js";import"./PDFViewer-BAnGjs7k.js";import"./PDFViewerModal-Bx9ilSy1.js";import"./PhoneNumberField-Cx1ymGmx.js";import{P as _}from"./Pill-8Ku8kOT5.js";import"./RichTextEditor-Jq65TPsA.js";import"./Select-Cl89HntU.js";import"./SelectBase-Bldz4ndX.js";import"./Skeleton-C4UM0RQc.js";import"./Switch-oJFlgcnC.js";import{A as H}from"./Ag-grid-table-DTIUJ0aJ.js";import"./TextField-CtO3tVZK.js";import"./Toolbar-CeZoDnG-.js";import"./Tooltip-BpkQD5VI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEgAeWm5.js";import"./useHover-CgLCGCG0.js";import"./Button-Bv4DQJIQ.js";import"./SelectionIndicator-C31Q7HLG.js";import"./index-Ba9P7hMT.js";import"./index-CJoG7HbN.js";import"./usePress-Dl1N0Gd3.js";import"./Text-DWV1J4yc.js";import"./useCollection-Bmw2zVKn.js";import"./index-BK1B_SrB.js";import"./VisuallyHidden--9xNH1Jp.js";import"./Autocomplete-KJUOH_jb.js";import"./ArrowBack-BAUyflKI.js";import"./use-dobby-context-nwd9LFGN.js";import"./ButtonBase-DCKa9TsH.js";import"./Label-Dj_IUe9R.js";import"./index-BFzozxWJ.js";import"./Label-CPJWrBWs.js";import"./ErrorMessage-Dpsd1Mgj.js";import"./DeleteForever-Drx08niq.js";import"./variants-DXiDO3Bx.js";import"./ChevronBackward-BaV1y249.js";import"./ChevronForward-lgWqvW3s.js";import"./Calendar-CF4Romrd.js";import"./sortable.esm-DM68mCEE.js";import"./DragIndicator-CsLS2wZO.js";import"./Search-DrenFjot.js";import"./use-toast-D53wljL7.js";import"./Description-oX6U1IAn.js";import"./Zip-D700pspp.js";import"./Download-P3ee4x7A.js";import"./Warning-CKXpKmUx.js";import"./index-C7CL5OQ7.js";import"./Modal-DCo6aeWa.js";import"./ZoomOut-EXzPSR6h.js";import"./ComboBox-Bx6YDi8V.js";import"./ComboBoxListBox-CmZdp1Nq.js";import"./ListBox-ByZxSDeI.js";import"./Check-CV-mrvLK.js";import"./ListBox-CTu9sTag.js";import"./useLoadMoreSentinel-Cw9UpRhN.js";import"./useLabel-1-0Qhyzi.js";import"./Input-D1Xp_bUf.js";import"./filter-persistence-V-IMFKvI.js";import"./use-is-mobile-B_4drKLr.js";import"./Replay-C13sJZ7S.js";import"./KeyboardArrowDown-CLOjLcjL.js";import"./KeyboardArrowUp-LOcqU1sd.js";import"./Group-1e3X9Wlf.js";import"./useField-HUv7vY2s.js";import"./useFormValidation-S4QIIU6v.js";import"./useTextField-BLuWBAIT.js";import"./useFormReset-C2s_CEpg.js";import"./Divider-CU1niyIb.js";import"./Add-B01dDh5k.js";import"./Remove-ChbMgKGB.js";import"./useToggleState-CnZMiMmg.js";import"./Menu-DiHxbwjN.js";import"./MoreHoriz-B4i3Pilz.js";import"./Checkbox-DJ5zASGw.js";import"./CheckIndeterminateSmall-Ccboqhka.js";import"./TableOptions-CFO-cVmF.js";import"./ViewColumn-B3fRQ5eq.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
