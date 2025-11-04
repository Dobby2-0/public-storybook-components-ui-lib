import{j as x}from"./iframe-BpyaIFoj.js";import{A as v}from"./DetailPageHeader-C_Ngy20b.js";import"./BulkActions-DJ21L8Ft.js";import"./Canvas-CkcS982X.js";import"./DateTimePicker-3s80h-1L.js";import"./DndList-DPAd97lk.js";import"./ErrorPage-CieZKDle.js";import"./FileIcon-Bd1hxKcQ.js";import"./FileList-D7-ebE37.js";import"./ListFilters-Bm73VLdv.js";import"./Loader-CQM-0ZIS.js";import"./NumberField-B9HmUYcg.js";import"./PDFViewer-Dk_FmMYi.js";import{P as B}from"./Pill-CsqFngId.js";import"./RadioGroup-DQdVR4hB.js";import"./Select-DZDamuVh.js";import"./SelectBase-NeCc7q-V.js";import"./TextField-BRYml3T4.js";import"./Toolbar-BA6RhggX.js";import"./Tooltip-Df7cJMCV.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Cirh4ma1.js";import"./utils-BS6Lqt09.js";import"./ButtonBase-BMDkGtEB.js";import"./Button-COvRattK.js";import"./FocusScope-D68Gc64D.js";import"./Hidden-BDM9tC_5.js";import"./usePress-CMrGCYWh.js";import"./index-Cme_4wJ_.js";import"./index-BmY4FwaI.js";import"./Label-2lTG2-ph.js";import"./index-CeL-c1GY.js";import"./ErrorMessage-jOWyNAOz.js";import"./Button-Bfur9YTP.js";import"./index-DM8cAZNR.js";import"./RSPContexts-Dgzttmai.js";import"./Separator-DNUy2L-9.js";import"./Text-C2WQadjm.js";import"./VisuallyHidden-_74GO_fh.js";import"./Menu-Bl0ZaV8O.js";import"./Check-Dcaj50Xp.js";import"./ChevronForward-DJ4tIKzH.js";import"./TableOutlined-jLKYSkry.js";import"./Modal-Cu3dX4ia.js";import"./MoreHoriz-C_gA3JU-.js";import"./Checkbox-RL1NP5rV.js";import"./CheckIndeterminateSmall-BVVsf-7p.js";import"./Form-GBbxPust.js";import"./useToggleState-C2CzFGAT.js";import"./useFormReset-DEWrhs1_.js";import"./TableOptions-CEmkJR-F.js";import"./sortable.esm-CnAzs2HV.js";import"./DragIndicator-ZF9gy3Pm.js";import"./ViewColumn-DWDUKyyb.js";import"./KeyboardArrowDown-fA--4-mO.js";import"./Search-BiRaFBP5.js";import"./Underline-Bb3f6Yto.js";import"./ArrowBack-B8hUqtq1.js";import"./DeleteForever-CRRuY8i1.js";import"./variants-0kjuNmtO.js";import"./ChevronBackward-BOilAdaC.js";import"./Calendar-cHXQMppp.js";import"./Description-D9lKJP-B.js";import"./Zip-D22FHcqq.js";import"./Download-BspBNpT1.js";import"./Warning-tpkphP9S.js";import"./ComboBox-BDE95nRM.js";import"./ListBox-6JcBGEi1.js";import"./ListBox-Bv4k51BK.js";import"./DragAndDrop-A6siLR-4.js";import"./useLabel-DFclWn5m.js";import"./Input-BBje26OK.js";import"./use-is-mobile-jV6PKnYP.js";import"./FilterListOff-B6XOo2i3.js";import"./KeyboardArrowUp-D1O9ITTN.js";import"./FieldError-CUDC30OP.js";import"./Group-CxSmDhcN.js";import"./useTextField-rW4a0u7y.js";import"./Divider-DL1TNP3I.js";import"./Remove-CXy8hfDN.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
