import{j as L}from"./iframe-CH7h3U8V.js";import"./sha256-DKdS_D-r.js";import"./SwipeableActionBlock-CyTUJ97N.js";import"./BulkActions-hatfIczV.js";import"./Button-DcqqCYT8.js";import"./Canvas-D-vpu3ph.js";import"./CardBasic-D_Qm1Icn.js";import"./CardList-DzMqsGJt.js";import"./Checkbox-BvTk2cIl.js";import"./ComboBox-BKlTIpfu.js";import"./DateTimePicker-CYA8MKAJ.js";import"./DndList-DMZ7y6jT.js";import"./EmptyState-DcYz-cBU.js";import"./ErrorPage-CyRPdUf4.js";import"./FileButton-xyOE9Pqh.js";import"./FileIcon-CI6mX7Ju.js";import"./FileList-CzGdXKQ6.js";import"./Form-D4OvKx5t.js";import"./ImageCarousel-COP9htue.js";import"./ListFilters-CjbzJBYH.js";import"./Loader-B_pZvink.js";import"./NumberField-BJx4V-VL.js";import"./PDFViewer-CY4h97kb.js";import"./PDFViewerModal-BKG2rxIX.js";import"./PhoneNumberField-JAO4rxMH.js";import{P as _}from"./Pill-DcOR1XRN.js";import"./RadioGroup-Yq2pQfe9.js";import"./RichTextEditor-3GHz5Wzo.js";import"./Select-DMvm-WsH.js";import"./SelectBase-DRekj_uA.js";import"./Skeleton-DCYUg7MJ.js";import"./Switch-BMA-o_uf.js";import{A as H}from"./Ag-grid-table-nTeOVYQU.js";import"./TextField-9nX5oqUQ.js";import"./Toolbar-CCLcPB2P.js";import"./Tooltip-CcYb4GNc.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BgMPRSY_.js";import"./useHover-CZDmPdFS.js";import"./ButtonBase-K-oI949Y.js";import"./Button-D6Gv_3si.js";import"./SelectionIndicator-JHbJ9Xkw.js";import"./index-J4h-2R7O.js";import"./index-BckUZTgf.js";import"./usePress-C8lzPp6I.js";import"./Text-BWkTEYgb.js";import"./index-Bd1NXLw_.js";import"./useCollection-BOybYtgF.js";import"./index-D4A8TaiF.js";import"./VisuallyHidden-BCQz32Rf.js";import"./Autocomplete-CrI-MANm.js";import"./ArrowBack-XCQoyxwD.js";import"./use-dobby-context-jETxyjt_.js";import"./Label-CemdAsXo.js";import"./index-Bh7NUlUf.js";import"./Label-BoBMW2go.js";import"./ErrorMessage-BH29XFLF.js";import"./DeleteForever-BdrPddLy.js";import"./Check-BQdXooUT.js";import"./CheckIndeterminateSmall-CFwD4ARL.js";import"./useFormValidation-DGoLihJ1.js";import"./useToggleState-DatzaFJy.js";import"./useFormReset-CQnmrfDz.js";import"./ComboBoxListBox-CVf-7pmn.js";import"./ListBox-CS6omxNF.js";import"./ListBox-CrtFpsN0.js";import"./useLoadMoreSentinel-bRhNIs_q.js";import"./useLabel-DmZ2ujYB.js";import"./Input-BVZwtBAk.js";import"./filter-persistence-DCOpaI7o.js";import"./variants-gQP7Blko.js";import"./ChevronBackward-BXthiV4X.js";import"./ChevronForward-Gbq-jCDj.js";import"./Calendar-Fmf2iLy_.js";import"./sortable.esm-COP7NnuH.js";import"./DragIndicator-wK1Hbzjb.js";import"./Search-mMC198ve.js";import"./use-toast-DFyO-Bn_.js";import"./Description-DyS9UhcK.js";import"./Zip-DEqOXuIj.js";import"./Download-CpDx76AQ.js";import"./Warning-ieALkSwK.js";import"./index-C7CL5OQ7.js";import"./Modal-UlUxmg-0.js";import"./use-is-mobile-D51PJprX.js";import"./Replay-DTp12c7s.js";import"./KeyboardArrowDown-7-ES_wIS.js";import"./KeyboardArrowUp-ZQZHUzZm.js";import"./Group-BjNGwmcd.js";import"./useField-9WQXQVHE.js";import"./useTextField-BHTUYN9u.js";import"./Divider-Bc7XYmbG.js";import"./Add-BFZT3VVd.js";import"./Remove-BDVSsYys.js";import"./Menu-5a8_sRCd.js";import"./MoreHoriz-h1Kry5q2.js";import"./TableOptions-D3CJaDCD.js";import"./ViewColumn-Cms8l76b.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
