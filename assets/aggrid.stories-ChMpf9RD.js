import{j as L}from"./iframe-BtD0yojv.js";import"./sha256-D5DhjhLk.js";import"./SwipeableActionBlock-DQEqPDag.js";import"./BulkActions-Dkd5NGIp.js";import"./Canvas-C9anRWpv.js";import"./CardList-DpLMwPKk.js";import"./DateTimePicker-BVF4nzkw.js";import"./DndList-hWZ-NSIj.js";import"./EmptyState-B7qzLFG9.js";import"./ErrorPage-BR9JmueU.js";import"./use-file-download--ldP-qCv.js";import"./FileIcon-_5qK6fDi.js";import"./FileList-W-vfvrsK.js";import"./Form-BK95iPeB.js";import"./ImageCarouselModal-D1oSCfac.js";import"./ListFilters-olGkpMBw.js";import"./Loader-CkptIMZK.js";import"./NumberField-eWvYKYsX.js";import"./PDFViewer-DOxbpfD9.js";import"./PDFViewerModal-CUrbNxke.js";import"./PhoneNumberField-CcgspXHQ.js";import{P as _}from"./Pill-5vIfNsq1.js";import"./RichTextEditor-XMu6InSt.js";import"./Select-CkwYrgwO.js";import"./SelectBase-D9MHv8rl.js";import"./Skeleton-D3VECrgQ.js";import"./Switch-Dx66PWAn.js";import{A as H}from"./Ag-grid-table-DWxlU4sD.js";import"./TextField-BG6emvFE.js";import"./Toolbar-CWCCTTSd.js";import"./Tooltip-dk5hc1rA.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DRDDnqNF.js";import"./useHover-BLqs48I6.js";import"./ButtonBase-Cqy9kFy0.js";import"./Button-DEtrjSXc.js";import"./SelectionIndicator-Cz8uM6x8.js";import"./index-DvT1PO7t.js";import"./index-CSLKQan_.js";import"./usePress-Bs4ZcAYp.js";import"./Text-7llEMWV5.js";import"./Button-BeKZJwGO.js";import"./index-Dj6M_dyv.js";import"./useCollection-u0gpJYDj.js";import"./index-DwjBt-AS.js";import"./VisuallyHidden-DTwKOUCR.js";import"./Autocomplete-B3ysVGn7.js";import"./ArrowBack-DVlCFkJ8.js";import"./use-dobby-context-DPlS2a7_.js";import"./Label-B1HN9bsT.js";import"./index-C1oPBqtq.js";import"./Label-C5OwSjf_.js";import"./ErrorMessage-Bamm_xLA.js";import"./DeleteForever-DhR0d1bI.js";import"./variants-CxBEkkHt.js";import"./ChevronBackward-aRotAMlq.js";import"./ChevronForward-ECZRtGVh.js";import"./Calendar-DHNNANRc.js";import"./sortable.esm-DhsTfor0.js";import"./DragIndicator-DRpDKYM9.js";import"./Search-C0QBmbPh.js";import"./use-toast-B2uDmbYt.js";import"./Description-C55ZVhUm.js";import"./Zip-DEFS3iUa.js";import"./Download-BroDQI1d.js";import"./Warning-BJQ6Tv2h.js";import"./index-C7CL5OQ7.js";import"./Modal-0VK87wNv.js";import"./ZoomOut-whHZ8FZb.js";import"./ComboBox-BPp1H168.js";import"./ComboBoxListBox-DgMAgCs4.js";import"./ListBox-2eJhA-jm.js";import"./Check-B1d_Ml0Z.js";import"./ListBox-DNfm3oVS.js";import"./useLoadMoreSentinel-D_kMS8Vi.js";import"./useLabel-B87Ux1e3.js";import"./Input-BCAPiQWJ.js";import"./filter-persistence-Hl5dXqtM.js";import"./use-is-mobile-Ce_wKuvn.js";import"./Replay-Dn4XrNmF.js";import"./KeyboardArrowDown-1LpwU3Gn.js";import"./KeyboardArrowUp-DGu75fj6.js";import"./Group-hV42MEkR.js";import"./useField-DV6dwu2Y.js";import"./useFormValidation-DKuKJjUF.js";import"./useTextField-BNv6BX-4.js";import"./useFormReset-DsAJqu3D.js";import"./Divider-B4IrAfX7.js";import"./Add-BcEdWTb5.js";import"./Remove-CZwjeZXo.js";import"./useToggleState-V1pLxfb8.js";import"./Menu-CGzLtIVY.js";import"./MoreHoriz-CBbuianl.js";import"./Checkbox-CogQ4QpH.js";import"./CheckIndeterminateSmall-DcohJuBt.js";import"./TableOptions-C5QJ4H0E.js";import"./ViewColumn-ByU3YdAr.js";const Po={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
