import{j as x}from"./iframe-DqPoarmI.js";import{A as v}from"./DetailPageHeader-Hipvh_Cy.js";import"./BulkActions-CTks_Ed8.js";import"./Canvas-Qq1gwu1o.js";import"./DateTimePicker-DvCB9X_I.js";import"./DndList-DLO_2JCN.js";import"./ErrorPage-mPEElmdE.js";import"./FileIcon-QZQpsxj8.js";import"./FileList-BcbLQfVs.js";import"./ListFilters-jfEPdZIr.js";import"./Loader-BNpI1sTO.js";import"./NumberField-D9JHHs5K.js";import"./PDFViewer-mIU0TLwC.js";import{P as B}from"./Pill-4ZYKYFIq.js";import"./RadioGroup-B2A3Z6sY.js";import"./Select-D4DIvBlv.js";import"./SelectBase-CQ5MM6K0.js";import"./TextField-DJGmVger.js";import"./Toolbar-0iRbNZTu.js";import"./Tooltip-DwUrrbV1.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Bb8rl1kr.js";import"./utils-DhrrRemw.js";import"./ButtonBase-BgxUPvbA.js";import"./Button-Cm2_iMFf.js";import"./FocusScope-DpjDel2o.js";import"./Hidden-D0b99FbT.js";import"./usePress-6Rd71Q99.js";import"./index-DYQZGd4f.js";import"./index-B7IbPqx7.js";import"./Label-BxyBeU2R.js";import"./index-D-JzvDhh.js";import"./ErrorMessage-CZzh9nsC.js";import"./Button-22XK-pj8.js";import"./index-Bf7Lu_8g.js";import"./RSPContexts-D8Fm0ssB.js";import"./Separator-vACdU0XU.js";import"./Text-25-xGm_b.js";import"./VisuallyHidden-CsxY983Z.js";import"./Menu-BXvIstlE.js";import"./Check-D5rZOVsb.js";import"./ChevronForward-DT1QdD3c.js";import"./TableOutlined-DxWkb0u6.js";import"./Modal-d43S9O5w.js";import"./MoreHoriz-CfuXvW5W.js";import"./Checkbox-8mygOt-R.js";import"./CheckIndeterminateSmall-Cd-SV5e4.js";import"./Form-CVjWiZIk.js";import"./useToggleState-DgRI3rFF.js";import"./useFormReset-BSTYep8M.js";import"./TableOptions-DTkjTuEQ.js";import"./sortable.esm-DVZ9mhmn.js";import"./DragIndicator-qpsv-gTH.js";import"./ViewColumn-CU8gpkz1.js";import"./KeyboardArrowDown-YCSbb9N3.js";import"./Search-x9U6scPi.js";import"./Underline-ClK3ZWwl.js";import"./ArrowBack-BlDMBW_w.js";import"./DeleteForever-B8_8dbRw.js";import"./variants-BqybX_A8.js";import"./ChevronBackward-XzNxR_aC.js";import"./Calendar-CfX55UzT.js";import"./Description-AsqiIdp7.js";import"./Zip-B9UES7SN.js";import"./Download-DnFz1kgz.js";import"./Warning-BLEC8Q1R.js";import"./ComboBox-Do5fb2b3.js";import"./ListBox-DUTPcIgW.js";import"./ListBox-CoIvpxI4.js";import"./DragAndDrop-DFwH3B7f.js";import"./useLabel-Cxt7HWZH.js";import"./Input-Bvh6-KPS.js";import"./use-is-mobile-nNcKfSun.js";import"./FilterListOff-BjvOb9pj.js";import"./KeyboardArrowUp-BP6zVADm.js";import"./FieldError-Bj-EdGUS.js";import"./Group-x2T9BI_o.js";import"./useTextField-qtkHt4Fo.js";import"./Divider-CA59rH77.js";import"./Remove-B2zuCWX1.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
