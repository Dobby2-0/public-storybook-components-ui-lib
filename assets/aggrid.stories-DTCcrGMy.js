import{j as x}from"./iframe-BccIeXYJ.js";import"./sha256-CdeorE_s.js";import"./DetailPageHeader-Cpmw652k.js";import"./BulkActions-BX5mjgWh.js";import"./Canvas-GK-M2X13.js";import"./DateTimePicker-MQarDdzn.js";import"./DndList-CMghqDEh.js";import"./ErrorPage-YonItJW5.js";import"./FileButton-CFO2BaSu.js";import"./FileIcon-UXSDg_L7.js";import"./FileList-B7O9jGOG.js";import"./Form-onvOZ8IB.js";import"./ImageCarousel-CAGwJuPZ.js";import"./ListFilters-DzF6z1J_.js";import"./Loader-C56ooIx6.js";import"./NumberField-CL3Nky2u.js";import"./PDFViewer-DbJoTTWb.js";import"./PDFViewerModal-ebeodSnb.js";import"./PhoneNumberField-BNnr9yzb.js";import{P as v}from"./Pill-CN7N2C7R.js";import"./RadioGroup-BH0-JEwG.js";import"./RichTextEditor-CBF8wQvd.js";import"./Select-Z5pr9AtG.js";import"./filter-persistence-LJUXGpgn.js";import"./Skeleton-Chw2kxYF.js";import"./Switch-DQvBu-JT.js";import{A as B}from"./Ag-grid-table-DGmrrlrc.js";import"./TextField-CCmewIra.js";import"./Toolbar-1k7tfmaf.js";import"./Tooltip-0n4xlrG5.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BDj58X9h.js";import"./utils-CWg1MI_0.js";import"./ButtonBase-BS4GoREK.js";import"./Button-BmX0Fecl.js";import"./FocusScope-DRo1OA8S.js";import"./Text-JbBvxV2w.js";import"./usePress-CyXWm0W6.js";import"./index-Dq0KKVog.js";import"./index-CthuzfiD.js";import"./Button-BSDZ8XsJ.js";import"./index-gM2N2JqA.js";import"./RSPContexts-DfJ1h1dw.js";import"./Separator-d_YcbFBs.js";import"./index-BWf-lzRM.js";import"./VisuallyHidden-JDmYm14E.js";import"./ArrowBack-DjSQmqxT.js";import"./Label-2-cPUpT6.js";import"./index-BJU3fRwX.js";import"./Label-Do0ALAK2.js";import"./ErrorMessage-DRy_Sv9x.js";import"./DeleteForever-CfCrYsw7.js";import"./variants-_tz0uNJg.js";import"./ChevronBackward-CtpCW0_O.js";import"./ChevronForward-CW1CBQ6U.js";import"./Calendar-DT2LdLDl.js";import"./sortable.esm-EZAebhve.js";import"./DragIndicator-CwgB0qEQ.js";import"./use-toast-BPxv438V.js";import"./Description-DknknTJg.js";import"./Zip-DnXdN_qh.js";import"./Download-Dt92PS-A.js";import"./Warning-a9ncxOL5.js";import"./index-C7CL5OQ7.js";import"./Modal-DNjfSsY5.js";import"./ComboBox-CBhB8a4y.js";import"./SingleComboBox-CgNd0l4M.js";import"./ListBox-zaXb-A12.js";import"./Check-D_3YCtSg.js";import"./ListBox-DRfoEjEU.js";import"./DragAndDrop-Btu60dx2.js";import"./useLabel-CQZY_KZ_.js";import"./Input-Car_8ReK.js";import"./use-is-mobile-2DVngIzP.js";import"./Replay-C5Z4w075.js";import"./KeyboardArrowDown-CLSfJLjU.js";import"./KeyboardArrowUp-CQbmKtIU.js";import"./FieldError-HeuBXScc.js";import"./Form-Bhkp7VDQ.js";import"./Group-sPXQscmY.js";import"./useFormReset-BY55ONvP.js";import"./useTextField-Ce1lh86-.js";import"./Divider-gQCdSGve.js";import"./Remove-CXQvKn6X.js";import"./useToggleState-CC3Ngzoh.js";import"./Menu-BzYncp-c.js";import"./MoreHoriz-B2ruFZpo.js";import"./Checkbox-COJw0mB4.js";import"./CheckIndeterminateSmall-CbGSxol3.js";import"./TableOptions-hcPJaqxe.js";import"./ViewColumn-SMnEAMcZ.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Ro=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Ro as __namedExportsOrder,ho as default};
