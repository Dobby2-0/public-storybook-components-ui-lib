import{j as x}from"./iframe-IslvRBGb.js";import{A as v}from"./DetailPageHeader-DBAysnzV.js";import"./BulkActions-10kuLdQr.js";import"./Canvas-NF29wRmv.js";import"./DateTimePicker-ClXj6mB1.js";import"./DndList-B7n-1MBT.js";import"./ErrorPage-B-vQQc60.js";import"./FileIcon-B-rp2JIQ.js";import"./FileList-DQFeVDWo.js";import"./ListFilters-BNB0GH-v.js";import"./Loader-T_2b7wZZ.js";import"./NumberField-Z6Aqm2D4.js";import"./PDFViewer-efQSniHm.js";import{P as B}from"./Pill-BzzvPF_l.js";import"./RadioGroup-DwwCdZPP.js";import"./Select-BLSoCFgC.js";import"./SelectBase-qL-kfULV.js";import"./TextField-VF7XzTl0.js";import"./Toolbar-ETAuXLkp.js";import"./Tooltip-CmeBJxU8.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BkOLW7OI.js";import"./utils-C6B9t3O6.js";import"./ButtonBase-NXF1GXp-.js";import"./Button-DxbPdh9h.js";import"./FocusScope-BOgms3gn.js";import"./Hidden-CQqtKji2.js";import"./usePress-DKyAX6ma.js";import"./index-BZlxtoq5.js";import"./index-Cbch12-H.js";import"./Label-C4Yeaf_b.js";import"./index-FGSPdM27.js";import"./ErrorMessage-ByfCbuwF.js";import"./Button-DUM8JOoW.js";import"./index-BmNcZ1yu.js";import"./RSPContexts-CorAOwmw.js";import"./Separator-B-k0VL2o.js";import"./Text-CIP2X7Zh.js";import"./VisuallyHidden-CzmSA3aT.js";import"./Menu-BFC-VBwx.js";import"./Check-CRnGPrEV.js";import"./ChevronForward-C8vU5PcO.js";import"./TableOutlined-BloX4F_g.js";import"./Modal-g2iaw9OS.js";import"./MoreHoriz-PpOgutHn.js";import"./Checkbox-DMOeoN39.js";import"./CheckIndeterminateSmall-CVFe9V-4.js";import"./Form-uvWJDn03.js";import"./useToggleState-94MHg_mu.js";import"./useFormReset-CFmvlgfk.js";import"./TableOptions-zEAqbXCX.js";import"./sortable.esm-8MpodkoM.js";import"./DragIndicator-J9qhemMK.js";import"./ViewColumn-BXRaAHWW.js";import"./KeyboardArrowDown-DvA8zz9P.js";import"./Search-DIQQOEBA.js";import"./Underline-CIvi_h_5.js";import"./ArrowBack-DPYiYVzw.js";import"./DeleteForever-B9uAvWY_.js";import"./variants-CQoh3Gqd.js";import"./ChevronBackward-C2Gh1A_M.js";import"./Calendar-CLGNwAIX.js";import"./Description-Dy_B-SQZ.js";import"./Zip-DS8OxPJP.js";import"./Download-R28JTzm0.js";import"./Warning-BK3cit4L.js";import"./ComboBox-Cl1NydDA.js";import"./ListBox-C5vITzVC.js";import"./ListBox-CVk1NyQo.js";import"./DragAndDrop-DTXvTrbF.js";import"./useLabel-En4Ke3ok.js";import"./Input-tLrbbo3D.js";import"./use-is-mobile-BvVbOMkz.js";import"./FilterListOff-DSY5kNJx.js";import"./KeyboardArrowUp-NmgQ62Qo.js";import"./FieldError-Tb9_3zwe.js";import"./Group-BU-S841r.js";import"./useTextField-9e3qz17E.js";import"./Divider-B0EIKoTz.js";import"./Remove-CMwVpLlO.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
