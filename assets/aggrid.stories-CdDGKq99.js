import{j as x}from"./iframe-Buf-yu1G.js";import"./DetailPageHeader-B_Jf2VyN.js";import"./BulkActions-DTlGLfw9.js";import"./Canvas-Cn-96Q7H.js";import"./DateTimePicker-C5W10xsK.js";import"./DndList-bJW9ucUc.js";import"./ErrorPage-CarGJ8OB.js";import"./FileButton-N1m6oFLP.js";import"./FileIcon-BoqDWXtw.js";import"./FileList-BN44n0rg.js";import"./Form-CkECDwvs.js";import"./ImageCarousel-DXpb6Vsp.js";import"./ListFilters-Bpu7FI9k.js";import"./Loader-ClqT5cN-.js";import"./NumberField-CPJbn_5_.js";import"./PDFViewer-BDRDRiZT.js";import"./PDFViewerModal-t7cQpM0f.js";import"./PhoneNumberField-CUowrS52.js";import{P as v}from"./Pill-fJ66MNf_.js";import"./RadioGroup-qQYzgj38.js";import"./RichTextEditor-BFenrSmM.js";import"./Select-BRrZq2Xa.js";import"./SelectBase-DuNSvbGx.js";import"./Skeleton-DHlseo2l.js";import"./Switch-HVjma25c.js";import{A as B}from"./Ag-grid-table-CA2Cfq1-.js";import"./TextField-CL0ynsRx.js";import"./Toolbar-DyY49vYM.js";import"./Tooltip-C_80Ipr0.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-B8XORBmC.js";import"./utils-DsZIVvgi.js";import"./ButtonBase-B5E3aHsH.js";import"./Button-C5gGSRMv.js";import"./FocusScope-8F9t37jv.js";import"./Text-B3Wc_O3W.js";import"./usePress-ClRLR1LW.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./Button-BKUHKe7M.js";import"./index-h9AQGklB.js";import"./RSPContexts-Co3FhSyY.js";import"./Separator-D85nm_WG.js";import"./index-DZa7hcpo.js";import"./VisuallyHidden-DxSDzN3H.js";import"./ArrowBack-CiWwlZFS.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./Label-BzDjaSQM.js";import"./ErrorMessage-BqEf7DOy.js";import"./DeleteForever-Blr9c_fs.js";import"./variants-BqGC_269.js";import"./ChevronBackward-Bp60H9Au.js";import"./ChevronForward-Bf-zXniX.js";import"./Calendar-TfLFjYc3.js";import"./sortable.esm-CfkFYvLP.js";import"./DragIndicator-wJXsRTNR.js";import"./use-toast-Co1UqchR.js";import"./Description-C0Mn-s07.js";import"./Zip-C1_Vu1W0.js";import"./Download-C8Av_Iif.js";import"./Warning-BMZCSt3Y.js";import"./index-C7CL5OQ7.js";import"./Modal-5NGJYuZR.js";import"./ComboBox-8Do9MzR_.js";import"./SingleComboBox-d8tVhPTe.js";import"./ListBox-B5_uwrzv.js";import"./Check-COKk3Iux.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./Input-BnQ0a0q5.js";import"./use-is-mobile-DBUFuZ5J.js";import"./FilterListOff-DfLco-UK.js";import"./KeyboardArrowDown-BhgScPNQ.js";import"./KeyboardArrowUp-BLnvKmT_.js";import"./FieldError-BFweSvb9.js";import"./Form-HVopaliJ.js";import"./Group-DUdv2EjX.js";import"./useFormReset-DemyNfMe.js";import"./useTextField-CViBBVi3.js";import"./Divider-BcrzfJHf.js";import"./Remove--DcI9ZI7.js";import"./useToggleState-BC3or0JE.js";import"./Menu-Dk-UJn7a.js";import"./MoreHoriz-DJOFMps_.js";import"./Checkbox-MzjgM-tH.js";import"./CheckIndeterminateSmall-BgIZjy-4.js";import"./TableOptions-0pKhPkN0.js";import"./ViewColumn-fbPyUpRy.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,C,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,R,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ho=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,ho as __namedExportsOrder,Do as default};
