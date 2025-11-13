import{j as x}from"./iframe-DZmofgpO.js";import{A as v}from"./DetailPageHeader-nPCWqVwC.js";import"./BulkActions-_QC02jDu.js";import"./Canvas-CP2Yzu0B.js";import"./DateTimePicker-Cmsi8EMJ.js";import"./DndList-DgSg69QO.js";import"./ErrorPage-BMsxXoQh.js";import"./FileIcon-D7uxzw25.js";import"./FileList-B2lR3NzU.js";import"./ListFilters-D2fdxO4O.js";import"./Loader-C9aM8Q-l.js";import"./NumberField-KlgXaSCJ.js";import"./PDFViewer-DoQJD-gA.js";import{P as B}from"./Pill-kX4wjIIc.js";import"./RadioGroup-CIQkpnqA.js";import"./Select-Gsx6R7Z7.js";import"./SelectBase-BU5ya8Bm.js";import"./TextField-C43X8FnJ.js";import"./Toolbar-DpWwf2_e.js";import"./Tooltip-BSXbDCyU.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-b6nZUUDt.js";import"./utils-DJdyUCYz.js";import"./ButtonBase-CRdCDE_B.js";import"./Button-WsOGcMQH.js";import"./FocusScope-BBv4nHRy.js";import"./Hidden-CnyXxbgY.js";import"./usePress-Bgs7fEjB.js";import"./index-B06jorIC.js";import"./index-GmCXe-Gw.js";import"./Label-B2St2kWk.js";import"./index-Dz7sG3uj.js";import"./ErrorMessage-DY97lv_g.js";import"./Button-BH1oba4T.js";import"./index-D2AQP8f5.js";import"./RSPContexts-AqUGoMDJ.js";import"./Separator-CK7gM0HH.js";import"./Text-BrFivvbc.js";import"./VisuallyHidden-y1mIW2ey.js";import"./Menu-DDEGL0bp.js";import"./Check-Bo3iyQ4r.js";import"./ChevronForward-BJWsst89.js";import"./TableOutlined-PNATB8l7.js";import"./Modal-BGzzZ2M7.js";import"./MoreHoriz-B6Lm4KI9.js";import"./Checkbox-5X32Iean.js";import"./CheckIndeterminateSmall-DhRvDG1I.js";import"./Form-cIrwtDE6.js";import"./useToggleState-DrwfV5UC.js";import"./useFormReset-nY073m1h.js";import"./TableOptions-Cyykjz1Y.js";import"./sortable.esm-qMvJ0d42.js";import"./DragIndicator-C2ZUwjJG.js";import"./ViewColumn-EgjxPq99.js";import"./KeyboardArrowDown-CuCLI7n8.js";import"./Search-MQ5P7Zj_.js";import"./Underline-COgQCLNy.js";import"./ArrowBack-BsIQHD4x.js";import"./DeleteForever-CW52nUz4.js";import"./variants-D0Ynqsg7.js";import"./ChevronBackward-BfhCSdhh.js";import"./Calendar-DDBFTgEP.js";import"./Description-CDn3c89G.js";import"./Zip-CIARd1gK.js";import"./Download-vrdUzA7H.js";import"./Warning-BTNqX6fG.js";import"./ComboBox-DO5474Sw.js";import"./ListBox-Dfw-z1AZ.js";import"./ListBox-B30LKwB5.js";import"./DragAndDrop-BEdryB3c.js";import"./useLabel-ndVDMSb_.js";import"./Input-DHNMVIBm.js";import"./use-is-mobile-fNvHs_8e.js";import"./FilterListOff-DWjHGo3F.js";import"./KeyboardArrowUp-b5R54WcL.js";import"./FieldError-r2f7VF4x.js";import"./Group-CdDg1JHz.js";import"./useTextField-DgaEEr48.js";import"./Divider-BqteTFqy.js";import"./Remove-BbtXQRrT.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const mo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,mo as __namedExportsOrder,co as default};
