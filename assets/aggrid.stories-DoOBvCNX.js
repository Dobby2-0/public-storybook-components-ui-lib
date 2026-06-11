import{j as L}from"./iframe-D2frS8Au.js";import"./sha256-E9qCjXim.js";import"./SwipeableActionBlock-C20A0giQ.js";import"./BulkActions-C3V2mtdU.js";import"./Canvas-DfbqMjVj.js";import"./CardBasic-D8MnE3ba.js";import"./CardList-C60sURrE.js";import"./DateTimePicker-DfkjQfzv.js";import"./DndList-ClpQwLw_.js";import"./EmptyState-PTb-zJu1.js";import"./ErrorPage-BZ-JNP6z.js";import"./use-file-download-C0zw837c.js";import"./FileIcon-CIl8x7LB.js";import"./FileList-CoIi-H8I.js";import"./Form-Dw3YkBvC.js";import"./ImageCarouselModal-DsDhmyQA.js";import"./ListFilters-Cgoar-2G.js";import"./Loader-DS9ZjgpV.js";import"./NumberField-DcS5TSx1.js";import"./PDFViewer-CYoSoFth.js";import"./PDFViewerModal-DNzr8IJO.js";import"./PhoneNumberField-BoJbxy8t.js";import{P as _}from"./Pill-CIzJvcvy.js";import"./RadioGroup-DuNWVIgW.js";import"./RichTextEditor-C-NWwiXc.js";import"./Select-7E1_mUAL.js";import"./SelectBase-BImg2GPW.js";import"./Skeleton-D5Mgxnh2.js";import"./Switch-CuPGp41Z.js";import{A as H}from"./Ag-grid-table-CoJIicGv.js";import"./TextField-BvqTZvV8.js";import"./Toolbar-CBoTJIsH.js";import"./Tooltip-DN16hxLp.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DVc9UFQX.js";import"./useHover-DYO4x4Gp.js";import"./ButtonBase-Dzf8z55z.js";import"./Button-4q-u3Eq1.js";import"./SelectionIndicator-BNK84zg9.js";import"./index-CRD6RS15.js";import"./index-zyLV6FUX.js";import"./usePress-CNDDzhH8.js";import"./Text-DXPLpS9a.js";import"./Button-DmGFltXj.js";import"./index-BSC9xO6Q.js";import"./useCollection-P5am-mv3.js";import"./index-BC_OFc4B.js";import"./VisuallyHidden-CEPXGV9t.js";import"./Autocomplete-nkGLWQyL.js";import"./ArrowBack-DpNaMsJz.js";import"./use-dobby-context-CWTwE2X2.js";import"./Label-CcCfPh60.js";import"./index-C6XEncsV.js";import"./Label-D83qOpUB.js";import"./ErrorMessage-DuNGHs53.js";import"./DeleteForever-CGBHNmm1.js";import"./variants-BZSjgDoh.js";import"./ChevronBackward-DoKY6bm1.js";import"./ChevronForward-CBCVpyTg.js";import"./Calendar-CgqK3Mm2.js";import"./sortable.esm-B0GL9_nb.js";import"./DragIndicator-DsMTwkXg.js";import"./Search-BhguYib-.js";import"./use-toast-D-QBEzoT.js";import"./Description-ATtI8O3g.js";import"./Zip-DWK5iifA.js";import"./Download-B0VEe2T7.js";import"./Warning-CunBcmwT.js";import"./index-C7CL5OQ7.js";import"./Modal-CiKZ_b66.js";import"./ZoomOut-Br2qh9wG.js";import"./ComboBox-ZSS83DXW.js";import"./ComboBoxListBox-D1ahboDu.js";import"./ListBox-wrXRWc4v.js";import"./Check-DGc1qmvX.js";import"./ListBox-B82J47RM.js";import"./useLoadMoreSentinel-CIncdtsp.js";import"./useLabel-IOUK4MD-.js";import"./Input-BYjRnERn.js";import"./filter-persistence-B4sr0-YL.js";import"./use-is-mobile-DTsoCE3N.js";import"./Replay-BbQD6B-u.js";import"./KeyboardArrowDown-CxrsIPye.js";import"./KeyboardArrowUp-wMKlFXOb.js";import"./Group-Bm-kKwd5.js";import"./useField-BWcYcy_h.js";import"./useFormValidation-BFsAlWOt.js";import"./useTextField-DX-kFRbU.js";import"./useFormReset-Bvmmvv_S.js";import"./Divider-BivKujMB.js";import"./Add-C0ngw1k6.js";import"./Remove-C2VXjbk9.js";import"./useToggleState-DvO545qK.js";import"./Menu-CGrL3i-_.js";import"./MoreHoriz-BiUEwrWJ.js";import"./Checkbox-DVfewqcr.js";import"./CheckIndeterminateSmall-Dy41791n.js";import"./TableOptions-Bsot1yrn.js";import"./ViewColumn-DeWMSOeX.js";const Fo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Lo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,m as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,s as WithMenuItems,i as WithStoredConfig,Lo as __namedExportsOrder,Fo as default};
