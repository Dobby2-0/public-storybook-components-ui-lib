import{j as x}from"./iframe-zjUVn86d.js";import"./sha256-CNixT76N.js";import"./DetailPageHeader-XVt9VnGc.js";import"./BulkActions-CvPoCpIc.js";import"./IconButton-C-8M2ZDs.js";import"./Canvas-Dr-NUiEb.js";import"./DateTimePicker-BCmXFUFT.js";import"./DndList-blV_0YkY.js";import"./ErrorPage-CqbX93ID.js";import"./FileButton-9c4WGl1o.js";import"./FileIcon-D4j98LLu.js";import"./FileList-Ckvven9-.js";import"./Form-B9SivaHB.js";import"./ImageCarousel-LlqSVuq4.js";import"./ListFilters-Cdt-rqZA.js";import"./Loader-BQniJKVa.js";import"./NumberField-DktzBpq9.js";import"./PDFViewer-CIsc-Nyk.js";import"./PDFViewerModal-CQWtIWOP.js";import"./PhoneNumberField-l_s86R6c.js";import{P as v}from"./Pill-D1I6W6QS.js";import"./RichTextEditor-BvkRHfRG.js";import"./Select-BT1hMrWV.js";import"./filter-persistence-BAd1_3vU.js";import"./Skeleton-3lmpcJo0.js";import"./Switch-Bi2aVaAV.js";import{A as B}from"./Ag-grid-table-nzHWboUm.js";import"./Toolbar-2wAMww9q.js";import"./Tooltip-DvMGHQyZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Di2c3rCg.js";import"./utils-Ckwt6L2U.js";import"./ButtonBase-2lfqFCz7.js";import"./Button-DDbvFyM7.js";import"./FocusScope-oHrBSakn.js";import"./Text-DZ4FRmC5.js";import"./usePress-CDnLUX3P.js";import"./index-8-qli9Cq.js";import"./index-GjvJnm3R.js";import"./index-vECkma1w.js";import"./RSPContexts-BBojKgpO.js";import"./Separator-DKCwbKdB.js";import"./index-DSFu27zz.js";import"./VisuallyHidden-DdllPjXQ.js";import"./ArrowBack-7oY_yGai.js";import"./Label-1bKwq0It.js";import"./index-DZHo1MSv.js";import"./Label-8P-bEcV9.js";import"./ErrorMessage-BemaFhYo.js";import"./DeleteForever-Ccm4BN8M.js";import"./variants-B2B3PE35.js";import"./ChevronBackward-wubYm6gq.js";import"./ChevronForward-BO2KGoDF.js";import"./Calendar-ChiUO4jE.js";import"./sortable.esm-Bi3JAETE.js";import"./DragIndicator-C3xZIhag.js";import"./use-toast-BICqDEwg.js";import"./Description-CD2pAGC7.js";import"./Zip-C_AtOc1G.js";import"./Download-Cy1_qdvQ.js";import"./Warning-KmN3jhx5.js";import"./index-C7CL5OQ7.js";import"./Modal-dP4gQTQM.js";import"./ComboBox-D3-oc0Qz.js";import"./SingleComboBox-ClEpRpXh.js";import"./ListBox-D68y9MN5.js";import"./Check-ChJKvkWG.js";import"./ListBox-BLy0DBzA.js";import"./DragAndDrop-PntmnQL2.js";import"./useLabel-Mhy552JQ.js";import"./Input-rTZ2VCfa.js";import"./use-is-mobile-FuAjDuNr.js";import"./Replay-BK1mNAPm.js";import"./KeyboardArrowDown-DkDI6cAR.js";import"./KeyboardArrowUp-C94xD_PV.js";import"./FieldError-BxiBvMzJ.js";import"./Form-BjDdwaIl.js";import"./Group-Ck93w7SK.js";import"./useFormReset-BHvlhi5P.js";import"./useTextField-CGlc9wiM.js";import"./Divider-I5Rziy60.js";import"./Remove-WYczGerU.js";import"./TextField-BOpy84Rm.js";import"./useToggleState-O-DSWipP.js";import"./Menu-OUvpWuBn.js";import"./MoreHoriz-DuW8vDnT.js";import"./Checkbox-aAYDLKJQ.js";import"./CheckIndeterminateSmall-CSi3fssk.js";import"./TableOptions-BfIaM4OT.js";import"./ViewColumn-CSfRilvt.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
