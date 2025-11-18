import{j as x}from"./iframe-DItMUyuz.js";import{A as v}from"./DetailPageHeader-DlFm4tvX.js";import"./BulkActions-CNfprAFG.js";import"./Canvas-LCIbQloT.js";import"./DateTimePicker-qV-H3OTu.js";import"./DndList-B-lKX-w-.js";import"./ErrorPage-BLioVxpa.js";import"./FileButton-ahEHw-UF.js";import"./FileIcon-B5nlbr-j.js";import"./FileList-uwhq1Pvh.js";import"./ListFilters-CAu3LQ8a.js";import"./Loader-DgPBNaV0.js";import"./NumberField-BSywKJzF.js";import"./PDFViewer-B1EnyDGO.js";import{P as B}from"./Pill-B-diY4iP.js";import"./Select-SKudxPit.js";import"./SelectBase-Cy382Nfi.js";import"./Skeleton-DEppEyZO.js";import"./Toolbar-BY0GkaaN.js";import"./Tooltip-VB1clTAK.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CSID9wDK.js";import"./utils-CDDBdGNq.js";import"./ButtonBase-Drw62Jq4.js";import"./Button-BiogDSkd.js";import"./FocusScope-CrkxwzSs.js";import"./Hidden-D0piI1_g.js";import"./usePress-DWDUijNk.js";import"./index-BlLvOc04.js";import"./index-Dn1WJ78Z.js";import"./Label-BfAYtU37.js";import"./index-TwhDy-SB.js";import"./ErrorMessage-CAhsrsWj.js";import"./Button-rP0BkDER.js";import"./index-Bt_ueGGx.js";import"./RSPContexts-COEWHn-7.js";import"./Separator-B-5V_2jI.js";import"./Text-CY-IC1ub.js";import"./VisuallyHidden-DlVhb33B.js";import"./Menu-J2s0XuBg.js";import"./Check-CT5nZNzc.js";import"./ChevronForward-Ee2ifpTt.js";import"./TableOutlined-CtkqhySt.js";import"./Modal-Bpg04ITr.js";import"./MoreHoriz-D1rgDZVm.js";import"./Checkbox-BKelNTks.js";import"./CheckIndeterminateSmall-BC7PMfxz.js";import"./Form-drt9ybVI.js";import"./useToggleState-DcG8rK_q.js";import"./useFormReset-Bd4qPnEd.js";import"./TableOptions-Riq28o9V.js";import"./sortable.esm-CYMplRLs.js";import"./DragIndicator-9yZ6yug0.js";import"./ViewColumn-kPq6PcV5.js";import"./TextField-CvPMyCEE.js";import"./Input-qlXenizh.js";import"./FieldError-DVTnM1V8.js";import"./useLabel-DSUBmT6N.js";import"./Group-DnBzkSMd.js";import"./useTextField-BAFVVoJ_.js";import"./KeyboardArrowDown-15NzAQ-R.js";import"./Search-oZrnAhvW.js";import"./Underline-BPLkBgRT.js";import"./ArrowBack-CYceF0oO.js";import"./DeleteForever-GwI6JRYq.js";import"./variants-DrdoAPpS.js";import"./ChevronBackward-_aSE3GEI.js";import"./Calendar-R-6aMxm8.js";import"./use-toast-DqRJb430.js";import"./Description-BKWO1D4d.js";import"./Zip-DeFT_GpR.js";import"./Download-C4nV4zEH.js";import"./Warning-B3oqnZb_.js";import"./ComboBox-CRvesMgx.js";import"./ListBox-D7kMRR75.js";import"./ListBox-D_AYYiEK.js";import"./DragAndDrop-BY8TromW.js";import"./use-is-mobile-Cgwllksd.js";import"./FilterListOff-CgZxGmJb.js";import"./KeyboardArrowUp-CBQ0F1k1.js";import"./Divider-B9O0c6R9.js";import"./Remove-Cx1dtN7n.js";const po={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,f,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,C,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,R,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var y,k,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const uo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,uo as __namedExportsOrder,po as default};
