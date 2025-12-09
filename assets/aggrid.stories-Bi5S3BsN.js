import{j as x}from"./iframe-nfYaCMFG.js";import"./DetailPageHeader-BebbdWzF.js";import"./BulkActions-BK7PvRZK.js";import"./Canvas-I3iWkHBR.js";import"./DateTimePicker-CPz4H4qU.js";import"./DndList-hcq--ndw.js";import"./ErrorPage-DGhCoApl.js";import"./FileButton-BSk646my.js";import"./FileIcon-BPiLskVD.js";import"./FileList-ScGcL1GA.js";import"./Form-VkqJRkGT.js";import"./ImageCarousel-CCe9dxnZ.js";import"./ListFilters-C3FJGumk.js";import"./Loader-BRFPJhgB.js";import"./NumberField-CXoShxpD.js";import"./PDFViewer-CmmMMaMl.js";import"./PDFViewerModal-B6ikDhQz.js";import{P as v}from"./Pill-DcHgFBvL.js";import"./RichTextEditor-BGrVrJst.js";import"./SelectBase-CLFRtdhz.js";import"./Skeleton-Dz3eJkjF.js";import{A as B}from"./Ag-grid-table-DiAkjtD7.js";import"./Toolbar-675jmVM0.js";import"./Tooltip-Da-VtRb-.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BirmpWIl.js";import"./utils-DsplgZ5_.js";import"./ButtonBase-B4OT_qP6.js";import"./Button-BySXh0l7.js";import"./FocusScope-C9_LKvrg.js";import"./Hidden-DnULKSXS.js";import"./usePress-C-JupEBC.js";import"./index-DU8kGLuZ.js";import"./index-O77fUrkO.js";import"./Button-DaRav7Eg.js";import"./index-BvypQtYJ.js";import"./RSPContexts-DznLQtVB.js";import"./Separator-DrIqXTMA.js";import"./index-CgM6Dbo0.js";import"./Text-DIiBg8cY.js";import"./VisuallyHidden-BO-OLnWP.js";import"./ArrowBack-DkeICoiW.js";import"./Select-D5dX_469.js";import"./Label-jyyH59mV.js";import"./index-ByjHB0Qw.js";import"./ErrorMessage-Pr79d6fa.js";import"./DeleteForever-pt-MWpK-.js";import"./variants-Cu34kl6A.js";import"./ChevronBackward-wgiBML_9.js";import"./ChevronForward-BzH-cPjo.js";import"./Calendar-DyXrrcys.js";import"./sortable.esm-64ufYkDm.js";import"./DragIndicator-D9_FvXTO.js";import"./use-toast-C4IMuGFH.js";import"./Description-COVaNC24.js";import"./Zip-Cv_r_OSb.js";import"./Download-v4zvnJX_.js";import"./Warning-BFEqhE5i.js";import"./Modal-C-E0_4Qy.js";import"./ComboBox-Dh7W8tEI.js";import"./ListBox-B8ieJs6S.js";import"./Check-6HfRFboM.js";import"./ListBox-BxMngG_4.js";import"./DragAndDrop-Cf3fUj8C.js";import"./useLabel-oY3WoAVJ.js";import"./Input-Dt4RYi3I.js";import"./use-is-mobile-CNbWyQ3l.js";import"./FilterListOff-_EW9Q2XU.js";import"./KeyboardArrowDown-DsZyhcs8.js";import"./KeyboardArrowUp-DfqoZXVB.js";import"./FieldError-BcU-KW9_.js";import"./Form-CdbOYzTr.js";import"./Group-CsamGP6W.js";import"./useFormReset-B8WiHVig.js";import"./useTextField-cikSAP15.js";import"./Divider-D8BIa2gZ.js";import"./Remove-BlvaRolD.js";import"./Menu-DVSybc7x.js";import"./MoreHoriz-9sOkMqJ8.js";import"./Checkbox-C1jwuNDt.js";import"./CheckIndeterminateSmall-CXKy7Zlx.js";import"./useToggleState-thq2lL_j.js";import"./TableOptions-DMKzvREV.js";import"./ViewColumn-FoJ99l_X.js";const go={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const wo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,wo as __namedExportsOrder,go as default};
