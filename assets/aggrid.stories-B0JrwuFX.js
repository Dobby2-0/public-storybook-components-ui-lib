import{j as x}from"./iframe-cWmR0RA0.js";import{A as v}from"./DetailPageHeader-BwyqoP7J.js";import"./BulkActions-CLYnUdUP.js";import"./Canvas-Cxp7iWPO.js";import"./Checkbox-Ctam3EEq.js";import"./ComboBox-JQk1A2_n.js";import"./DateTimePicker-kEh1VUpj.js";import"./DndList-uDmjwQmV.js";import"./ErrorPage-BgWYkEO7.js";import"./FileIcon-DTBPKkd3.js";import"./FileList-DRN-vO8E.js";import"./ListFilters-3_5u8-9y.js";import"./Loader-fYHsT7Mc.js";import"./NumberField-CHWCrwiZ.js";import"./PDFViewer-un4LgbVk.js";import{P as B}from"./Pill-glUImDlb.js";import"./RadioGroup-or_yauFK.js";import"./Select-Dk_aorhe.js";import"./SelectBase-BvL6Jgin.js";import"./TextField-ahEB65hY.js";import"./Toolbar-BsEh5Az5.js";import"./Tooltip-D_gyujFE.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BKj4AuYV.js";import"./utils-DANM3Yhz.js";import"./ButtonBase-CNM21T1D.js";import"./Button-D33AB1AL.js";import"./FocusScope-D1FOTx7Z.js";import"./Hidden-C04a7Jfz.js";import"./usePress-B7f2xl3D.js";import"./index-BdmCJmHw.js";import"./index-CbVDRwwe.js";import"./Label-DgdJfSeo.js";import"./index-DymFpdQR.js";import"./ErrorMessage-Y5G5dUni.js";import"./Button-BmeSwfsK.js";import"./index-DqP9FTCV.js";import"./RSPContexts-CZUNsAI9.js";import"./Separator-CwBMJrYt.js";import"./Text-B6m3pqfR.js";import"./VisuallyHidden-DmuXfuGd.js";import"./Menu-JpsPvmWU.js";import"./Check-DJfcJKLz.js";import"./ChevronForward-CN9et6mH.js";import"./TableOutlined-Dvb_bf7O.js";import"./Modal-Da6noF8a.js";import"./MoreHoriz-D5OgLKwT.js";import"./TableOptions-CqfZIYRE.js";import"./sortable.esm-BxwmsuAG.js";import"./DragIndicator-D4_pG1r4.js";import"./ViewColumn-B-wHUTVl.js";import"./KeyboardArrowDown-Kd9x3ms5.js";import"./Search-CZa2eq4B.js";import"./Underline-ClsCD1X-.js";import"./ArrowBack-BfHuYe8Y.js";import"./DeleteForever-ekwy72s2.js";import"./CheckIndeterminateSmall-C_azNviH.js";import"./Form-DNMalyG1.js";import"./useToggleState-D788A18u.js";import"./useFormReset-BQulKOlJ.js";import"./ListBox-ZeEvjtok.js";import"./ListBox-C1CBplYT.js";import"./DragAndDrop-CZoR4VWh.js";import"./useLabel-opnwvkWr.js";import"./Input-D9_Roog8.js";import"./variants-Co94fyhb.js";import"./ChevronBackward-BcSI34Qy.js";import"./Calendar-C09BV8Gy.js";import"./Description-JoJ3LNHP.js";import"./Zip-wLmaHlS4.js";import"./Download-DgLmbIlZ.js";import"./Warning-Ba358OFB.js";import"./use-is-mobile-F29SvEve.js";import"./FilterListOff-BYEoZxvd.js";import"./KeyboardArrowUp-DGg3xmTR.js";import"./FieldError-BgWjfQd-.js";import"./Group-04EosYzC.js";import"./useTextField-Cau5wiZH.js";import"./Divider-BqUgSGuY.js";import"./Remove-q6ZDcmkJ.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
