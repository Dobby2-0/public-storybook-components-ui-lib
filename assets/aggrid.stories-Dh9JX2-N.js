import{j as x}from"./iframe-CuLNQ5qM.js";import{A as v}from"./DetailPageHeader-BQi-jB3o.js";import"./BulkActions-ovzTNTN5.js";import"./Canvas-Di6As6K9.js";import"./DateTimePicker-BuNSrkVV.js";import"./DndList-DS-cbicM.js";import"./ErrorPage-DgIXtc_N.js";import"./FileIcon-DvYR_jk5.js";import"./FileList-p9satWhs.js";import"./ListFilters-BhyYcBZ8.js";import"./Loader-LmaJX3dD.js";import"./NumberField-Drxu8kyG.js";import"./PDFViewer-BUn0PGiV.js";import{P as B}from"./Pill-CLPpXBN2.js";import"./Select-B-_kd03-.js";import"./SelectBase-Co99iJeO.js";import"./Toolbar-Dw5Cu-X9.js";import"./Tooltip-VHaYr6-V.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DmrEf_Kl.js";import"./utils-wSy4n-XH.js";import"./ButtonBase-CsGptDal.js";import"./Button-CvyKGAP8.js";import"./FocusScope-BIjy-W96.js";import"./Hidden-Di_AYg4b.js";import"./usePress-DMHr4mLT.js";import"./index-DXUTbohT.js";import"./index-CrBar2As.js";import"./Label-Cu7qCeHX.js";import"./index-tk2EjdTx.js";import"./ErrorMessage-DGCvGPMm.js";import"./Button-Bp7G-D43.js";import"./index-IwObjCqk.js";import"./RSPContexts-BdvEGR9M.js";import"./Separator-14R0r7of.js";import"./Text-B_miRZie.js";import"./VisuallyHidden-CiNe9qaA.js";import"./Menu-BIfK6ej7.js";import"./Check-iV-oDlQp.js";import"./ChevronForward-lM4DB-Ms.js";import"./TableOutlined-CGLZ4LdG.js";import"./Modal-BXk2JpAO.js";import"./MoreHoriz-C1FQs29r.js";import"./Checkbox-Bmh4hRsm.js";import"./CheckIndeterminateSmall-Cwl9pRQU.js";import"./Form-C1vrSYB1.js";import"./useToggleState-B4TQpw51.js";import"./useFormReset-CUZkaoY2.js";import"./TableOptions-DV-5GHMw.js";import"./sortable.esm-BKHTbofa.js";import"./DragIndicator-ECaFDDlr.js";import"./ViewColumn-CYlqW5iD.js";import"./TextField-DCiYMfp5.js";import"./Input-CdGXcs2K.js";import"./FieldError-fz2jm99s.js";import"./useLabel-B0jTk06P.js";import"./Group-4WFWz4Ya.js";import"./useTextField-bqn8BSZS.js";import"./KeyboardArrowDown-DhDsgI_M.js";import"./Search-K_X-FXbG.js";import"./Underline-DxFwvBFE.js";import"./ArrowBack-BArGEos5.js";import"./DeleteForever-BIZgfZ4d.js";import"./variants-Dii35SRl.js";import"./ChevronBackward-D4-ZpKUb.js";import"./Calendar-Dzrsp4GW.js";import"./Description-BzQgD02V.js";import"./Zip-DxmSwdo6.js";import"./Download-DfS_thIL.js";import"./Warning-CDMUPF3V.js";import"./ComboBox-BB3hucx-.js";import"./ListBox-D3nNT_JN.js";import"./ListBox-pXcoeCiW.js";import"./DragAndDrop-aF4IB1bh.js";import"./use-is-mobile-Cq8H0Wj0.js";import"./FilterListOff-CqqdOcwM.js";import"./KeyboardArrowUp-B3DWl_Cw.js";import"./Divider-CTv-ACaf.js";import"./Remove-CyrkY0Ll.js";const lo={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,D,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var h,R,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    }
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const co=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,co as __namedExportsOrder,lo as default};
