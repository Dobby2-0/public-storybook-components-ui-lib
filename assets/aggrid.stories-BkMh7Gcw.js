import{j as x}from"./iframe-BF_KP_hN.js";import"./DetailPageHeader-_zXZ5yug.js";import"./BulkActions-BuOoFIQA.js";import"./Canvas-DDkjexIT.js";import"./DateTimePicker-D-zRtBmG.js";import"./DndList-CreTOi_A.js";import"./ErrorPage-C5ludSb9.js";import"./FileButton-BPmnUEU8.js";import"./FileIcon-gndWwAHH.js";import"./FileList-D6r_6b_U.js";import"./Form-WKsmnKk9.js";import"./ImageCarousel-D70TVoNt.js";import"./ListFilters-D-woOWiu.js";import"./Loader-DoBWafIM.js";import"./NumberField-B2nqlAnu.js";import"./PDFViewer-D8oUoGYr.js";import"./PDFViewerModal-DkbhYKIf.js";import"./PhoneNumberField-C-Xo3llq.js";import{P as v}from"./Pill-G3LSHrcB.js";import"./RichTextEditor-CUhDUCW6.js";import"./Select-DRI7tnEW.js";import"./SelectBase-DVmpqj5t.js";import"./Skeleton-Ct7je5_8.js";import{A as B}from"./Ag-grid-table-CQKfn5Ze.js";import"./Toolbar-B92ScLIw.js";import"./Tooltip-BUH1OzVl.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DfeYdlPD.js";import"./utils-BqpmhFVW.js";import"./ButtonBase-VG-Brf1y.js";import"./Button-yFbSCyNo.js";import"./FocusScope-4pytHGpx.js";import"./Text-mk_HzVZA.js";import"./usePress-fc5pKrNj.js";import"./index-I7XzL5DF.js";import"./index-DWPRwdrc.js";import"./Button-CoLGA88s.js";import"./index-7WMUdYsb.js";import"./RSPContexts-BOzgkn97.js";import"./Separator-C6fCfvQY.js";import"./index-MQ1ttWeg.js";import"./VisuallyHidden-DE-molTm.js";import"./ArrowBack-CGORF4Uh.js";import"./Label-6_OGEEE6.js";import"./index-CODvd-3F.js";import"./Label-BqrROEg6.js";import"./ErrorMessage-D_mC8aDW.js";import"./DeleteForever-oO1deUgK.js";import"./variants-Dx_--Ifz.js";import"./ChevronBackward-Dk1G718w.js";import"./ChevronForward-BzxLaZv1.js";import"./Calendar-uQBN0bwR.js";import"./sortable.esm-CZZbbNYQ.js";import"./DragIndicator-DVN0iZyI.js";import"./use-toast-DvN8IjgC.js";import"./Description-BQX3Q8av.js";import"./Zip-FMajto_2.js";import"./Download-BMeS47sI.js";import"./Warning-CDR_UCbp.js";import"./index-C7CL5OQ7.js";import"./Modal-B88TCYNA.js";import"./ComboBox-BM71sC1H.js";import"./SingleComboBox-BKlTeZgJ.js";import"./ListBox-l4qOsAbP.js";import"./Check-DLqghWKL.js";import"./ListBox-DjHcsfaC.js";import"./DragAndDrop-D9NQ6c3Q.js";import"./useLabel-Cu4eK06_.js";import"./Input-DgSKj3W9.js";import"./use-is-mobile-CelH9V2S.js";import"./FilterListOff-CLDH5RnX.js";import"./KeyboardArrowDown-C3H7Ffdt.js";import"./KeyboardArrowUp-h5YoWNgB.js";import"./FieldError-DUMDqtzu.js";import"./Form-I-lBGkuI.js";import"./Group-DelFWukP.js";import"./useFormReset-CrtlIz-r.js";import"./useTextField-6YlrZ1jG.js";import"./Divider-BRQqutMJ.js";import"./Remove-B5XAKBoj.js";import"./TextField-pP0QQzgz.js";import"./Menu-BYdDH4Jm.js";import"./MoreHoriz-D2wPexb0.js";import"./Checkbox-6WeCW9x2.js";import"./CheckIndeterminateSmall-CLX2-bur.js";import"./useToggleState-ZMJVyjVW.js";import"./TableOptions-Bh-L-xf5.js";import"./ViewColumn-CC62t7Ie.js";const bo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Co=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Co as __namedExportsOrder,bo as default};
