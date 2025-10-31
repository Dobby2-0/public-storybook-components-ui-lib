import{j as x}from"./iframe-BNuhL9ER.js";import{A as v}from"./DetailPageHeader-DcyTyv4n.js";import"./BulkActions-DzZzDxX-.js";import"./Canvas-u2NPQgXL.js";import"./Checkbox-CnTjL6HQ.js";import"./ComboBox-MAECfuuI.js";import"./DateTimePicker-CjV5E1Vp.js";import"./DndList-DcSH8Izo.js";import"./ErrorPage-DlPgD31i.js";import"./FileIcon-Dk51RXWR.js";import"./FileList-CdE0Qlzn.js";import"./ListFilters-D-lTpXY5.js";import"./Loader-CbSR5Yl8.js";import"./NumberField-Q2byEWj7.js";import"./PDFViewer-BfYGdnoN.js";import{P as B}from"./Pill-BzcrVBLa.js";import"./RadioGroup-CIayB7KU.js";import"./Select-DrStvkhQ.js";import"./SelectBase-DwzsoOT_.js";import"./TextField-lPPuSPKz.js";import"./Toolbar-nXOItH1t.js";import"./Tooltip-B1KEof99.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-MsXj_TGY.js";import"./utils-B6Vk5jXb.js";import"./ButtonBase-KQ8qlArb.js";import"./Button-B55BZ164.js";import"./FocusScope-BlIzbMWY.js";import"./Hidden-DO6oUOFb.js";import"./usePress-Dw6g1kp5.js";import"./index-Z9VK59Hf.js";import"./index-D8Zfcao_.js";import"./Label-DeEc3xzD.js";import"./index-DOmeZP0c.js";import"./ErrorMessage-DEJgWhDM.js";import"./Button-RQtk8xWr.js";import"./index-wzoeaovd.js";import"./RSPContexts-C9F26hFH.js";import"./Separator-CYNq1l07.js";import"./Text-DQ8xdPMM.js";import"./VisuallyHidden-EQRdyfzi.js";import"./Menu-CnsCWsaZ.js";import"./Check-CT0MFWhc.js";import"./ChevronForward-wMR7qsbX.js";import"./TableOutlined-B1kI8a_x.js";import"./Modal-J9TEoKDS.js";import"./MoreHoriz-Ls4oj2eW.js";import"./TableOptions-CPXkJj2h.js";import"./sortable.esm-BZubOudE.js";import"./DragIndicator-C5Zp79dx.js";import"./ViewColumn-FxS2XRgU.js";import"./KeyboardArrowDown-BN1vY0G-.js";import"./Search-D8_1KbTU.js";import"./Underline-BE2DZrUR.js";import"./ArrowBack-Ban3ss7X.js";import"./DeleteForever-AK5xwg5l.js";import"./CheckIndeterminateSmall-DKYKvVYf.js";import"./Form-J36-FgLE.js";import"./useToggleState-CnAgyEwY.js";import"./useFormReset-DobuYGFE.js";import"./ListBox-FnRLs4W9.js";import"./ListBox-BYvLc884.js";import"./DragAndDrop-CdhDJrrJ.js";import"./useLabel-C5dGn1QH.js";import"./Input-CFmzbMI1.js";import"./variants-BqY8yu-9.js";import"./ChevronBackward-D6peKxfd.js";import"./Calendar-C5TO4a7R.js";import"./Description-BqkO7mz-.js";import"./Zip-Cq5YG7_F.js";import"./Download-CPdAhGMt.js";import"./Warning-B3q5YFRk.js";import"./use-is-mobile-KbYhFQJ3.js";import"./FilterListOff-CDTzYK37.js";import"./KeyboardArrowUp-Cmp7E1L1.js";import"./FieldError-CNUwJBYi.js";import"./Group-DHG_Feuc.js";import"./useTextField-DvHxTAQn.js";import"./Divider-qr8-HvYp.js";import"./Remove-Dbd8v5w6.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const mo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,mo as __namedExportsOrder,co as default};
