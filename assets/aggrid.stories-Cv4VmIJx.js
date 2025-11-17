import{j as x}from"./iframe-VvmQDMUV.js";import{A as v}from"./DetailPageHeader-8Kxlmrcz.js";import"./BulkActions-BR6V89oA.js";import"./Canvas-CXIGOO5j.js";import"./DateTimePicker-DffQFvy_.js";import"./DndList-Do47fXTQ.js";import"./ErrorPage-BK-M8_hG.js";import"./FileButton-rVUlPyv2.js";import"./FileIcon-BkMb_zkh.js";import"./FileList-C9s4NDps.js";import"./ListFilters-CVNYeC_x.js";import"./Loader-B5ER55dg.js";import"./NumberField-BuDVdE42.js";import"./PDFViewer-BCbm6yS7.js";import{P as B}from"./Pill-BEvJfQe8.js";import"./Select-CdZKh-tM.js";import"./SelectBase-DuZJngbE.js";import"./TextField-_e_Uco0x.js";import"./Toolbar-DkXn9tWb.js";import"./Tooltip-DBj5mVeg.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CH02gzLd.js";import"./utils-DkFD0z7s.js";import"./ButtonBase-C_mw4oeq.js";import"./Button-HIMezUb0.js";import"./FocusScope-BOCe0r4G.js";import"./Hidden-D22h5HeX.js";import"./usePress-D04Njo7o.js";import"./index-DRuU8XP6.js";import"./index-D62asJeA.js";import"./Label-LgZfVoAp.js";import"./index-BAB0TDXu.js";import"./ErrorMessage-BMHnJsAx.js";import"./Button-0z0FQH9n.js";import"./index-Bu8Yf5d1.js";import"./RSPContexts-CZp4fpZn.js";import"./Separator-CDNXe9fK.js";import"./Text-Bmve_387.js";import"./VisuallyHidden-BerS9m0o.js";import"./Menu-q-fnkDnf.js";import"./Check-DfPCpNNs.js";import"./ChevronForward-DB7yKSBi.js";import"./TableOutlined-Csghd7MI.js";import"./Modal-DmZcgx8L.js";import"./MoreHoriz-TQdpoSJo.js";import"./Checkbox-B7IxmiU7.js";import"./CheckIndeterminateSmall-BW918XiK.js";import"./Form-BJ2L-DG3.js";import"./useToggleState-CSF3by7S.js";import"./useFormReset-BnF48LGq.js";import"./TableOptions-DsTXjz7P.js";import"./sortable.esm-B7ZK_LXp.js";import"./DragIndicator-Bl1pUctn.js";import"./ViewColumn-B4tYAiVR.js";import"./KeyboardArrowDown-gwyEh4Wq.js";import"./Search-5pKoGkeM.js";import"./Underline-S6AGFt5X.js";import"./ArrowBack-BAoDFYt9.js";import"./DeleteForever-C_2DNHyn.js";import"./variants-B_52yQ26.js";import"./ChevronBackward-CsMMem2U.js";import"./Calendar-CNdUAyFn.js";import"./use-toast-1HNtQLbU.js";import"./Description-gTA9ITS9.js";import"./Zip-nVUQIc0h.js";import"./Download-DDuXWzBm.js";import"./Warning-6SmI6rOo.js";import"./ComboBox-BXyEu7du.js";import"./ListBox-DkOgAsbr.js";import"./ListBox-DG5tA9tV.js";import"./DragAndDrop-DIpoxwmp.js";import"./useLabel-mOv0FYO4.js";import"./Input-Cyya6AHz.js";import"./use-is-mobile-24R23QZG.js";import"./FilterListOff-BFQY-y_r.js";import"./KeyboardArrowUp-Bso6APHM.js";import"./FieldError-DbY8IRqD.js";import"./Group-C2zZICyJ.js";import"./useTextField-Ba2dBEvo.js";import"./Divider-LTXD_qHQ.js";import"./Remove-BMdZWSlH.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const po=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,po as __namedExportsOrder,co as default};
