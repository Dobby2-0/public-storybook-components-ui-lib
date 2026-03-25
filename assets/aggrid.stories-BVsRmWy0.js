import{j as x}from"./iframe-xl7C9gCw.js";import"./sha256-D61NtQu0.js";import"./SwipeableActionBlock-BUvtRuqn.js";import"./BulkActions-CuahgLbo.js";import"./Canvas-DT_s5DMh.js";import"./DateTimePicker-BKtJI-MJ.js";import"./DndList-iie4hoOS.js";import"./ErrorPage-CjVp4Uzf.js";import"./FileButton-XCsc3qgv.js";import"./FileIcon-C6j9buw-.js";import"./FileList-DI081DQw.js";import"./Form-ArfEygYt.js";import"./ImageCarousel-CzC2E2s5.js";import"./use-dobby-context-CxBXlf_z.js";import"./Loader-BcD18_fO.js";import"./NumberField-B38oWMZJ.js";import"./PDFViewer-C0R0koHW.js";import"./PDFViewerModal-C3ytPUdA.js";import"./PhoneNumberField-Dg1Go53d.js";import{P as v}from"./Pill-Bt2Z1N0V.js";import"./RadioGroup-JCq0CIgO.js";import"./RichTextEditor-CsS6SXwm.js";import"./Select-BLGPRRCS.js";import"./SelectBase-DtsqtTEr.js";import"./Skeleton-u6ROo9Fd.js";import"./Switch-C9umZalt.js";import{A as B}from"./Ag-grid-table-BvUifw3Q.js";import"./TextField-DrRrrBV8.js";import"./Toolbar-DnHv-F4c.js";import"./Tooltip-Cfge-tCO.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Bh3I_lUN.js";import"./utils-BiDm51pV.js";import"./ButtonBase-DPaWVYfy.js";import"./Button-Bu8smok8.js";import"./FocusScope-D8isUGv_.js";import"./Text-D5cwUL8u.js";import"./usePress-DcFN7CSJ.js";import"./index-BSQJTg1U.js";import"./index-BU6HB7TO.js";import"./Button-Ckl0q2Bx.js";import"./index-Blu3z9r8.js";import"./RSPContexts-DGNFCy2_.js";import"./Separator-SGpDRDiO.js";import"./index-BkT8B2yE.js";import"./VisuallyHidden-B30ztpjt.js";import"./ArrowBack-B4umesfe.js";import"./Label-cFNOY9tj.js";import"./index-CGifAMzx.js";import"./Label-DuOqwUKe.js";import"./ErrorMessage-DS2REFx_.js";import"./DeleteForever-CHQ6RWm5.js";import"./variants-B2atYsdl.js";import"./ChevronBackward-90i9ri3h.js";import"./ChevronForward-CtY-36LZ.js";import"./Calendar-CdMds-GL.js";import"./sortable.esm-G_jokZCr.js";import"./DragIndicator-D49Z-82A.js";import"./use-toast-Chc9G-99.js";import"./Description-BkYmWH4l.js";import"./Zip-C4JVX1iH.js";import"./Download-B7jDjg5z.js";import"./Warning-r_FEp2TG.js";import"./index-C7CL5OQ7.js";import"./Modal-BZh4B78B.js";import"./ComboBox-D_jU3OQV.js";import"./SingleComboBox-CxKL_l1N.js";import"./ListBox-CsH3e1KZ.js";import"./Check-BIJ7VNCu.js";import"./ListBox-MDE8MxP3.js";import"./DragAndDrop-MjG82j_W.js";import"./useLabel-BLN-Bu8o.js";import"./Input-BI1ns65x.js";import"./use-is-mobile-B64B61DC.js";import"./Replay-CWtUT0S1.js";import"./KeyboardArrowDown-m8VpCBjc.js";import"./KeyboardArrowUp-KxZYpdmd.js";import"./FieldError-Cfdsb0KT.js";import"./Form-Cq5-aKhG.js";import"./Group-BjjdqKSE.js";import"./useFormReset-Ba7ot4V-.js";import"./useTextField-BbUQZMzk.js";import"./Divider-C3_ih_hw.js";import"./Remove-Vo37izlI.js";import"./useToggleState-C2iHtod3.js";import"./Menu-CGBwObmb.js";import"./MoreHoriz-DajP4zBQ.js";import"./Checkbox-BAAkBgzS.js";import"./CheckIndeterminateSmall-D7K1bDQz.js";import"./TableOptions-sWq3BD1a.js";import"./ViewColumn-DJAnqK69.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
