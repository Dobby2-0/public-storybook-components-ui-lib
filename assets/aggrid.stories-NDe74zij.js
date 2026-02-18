import{j as x}from"./iframe-YbAckXSK.js";import"./sha256-Cy9Q_auo.js";import"./DetailPageHeader-COjL8L_-.js";import"./BulkActions-PedoIEhP.js";import"./IconButton-CWD4UJyV.js";import"./Canvas-DzrzJEhb.js";import"./Checkbox-BQBjf-vq.js";import"./ComboBox-CqMY0Xpl.js";import"./DateTimePicker-FhJYL8rn.js";import"./DndList-Bmu77Ez1.js";import"./ErrorPage-CZdZL8l2.js";import"./FileButton-Cc7A_DT8.js";import"./FileIcon-Drlw0XxO.js";import"./FileList-iGviQOl_.js";import"./Form-CVCIA7vr.js";import"./ImageCarousel-wYdtxwC1.js";import"./ListFilters-Bz4W4kr7.js";import"./Loader-Bg91Z0Hy.js";import"./NumberField-BLMWt2us.js";import"./PDFViewer-CI32TCsj.js";import"./PDFViewerModal-Cw7YQhof.js";import"./PhoneNumberField-DS0OU2kH.js";import{P as v}from"./Pill-DpFredR5.js";import"./RadioGroup-DUaLAZc1.js";import"./RichTextEditor-51yDP-Ad.js";import"./Select-uVkzh91R.js";import"./filter-persistence-D3QW6D7n.js";import"./Skeleton-DmOtIY_W.js";import"./Switch-Cu-2BNDt.js";import{A as B}from"./Ag-grid-table-C9Y2tE5d.js";import"./Toolbar-B5-fQkCU.js";import"./Tooltip-B6bO8_Fo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DId_ZSQM.js";import"./utils-FXyl1Dg0.js";import"./ButtonBase-D3S9Li28.js";import"./Button-BUfyAz2A.js";import"./FocusScope-wbRS7jeD.js";import"./Text-D9PQmuvE.js";import"./usePress-BOm0kPM2.js";import"./index-BTVfdg5O.js";import"./index-D2BgbupE.js";import"./index-Dkbx8zPI.js";import"./RSPContexts-Cu44xTEd.js";import"./Separator-33LoDwZp.js";import"./index-Bt6vm1AV.js";import"./VisuallyHidden-t6an82pl.js";import"./ArrowBack-BeyK9Ao6.js";import"./Label-D23oT6ec.js";import"./index-Wm8TL3-X.js";import"./Label-9YNuwaGt.js";import"./ErrorMessage-CxsTbpcz.js";import"./DeleteForever-DO7agKB0.js";import"./Check-CoHmSswN.js";import"./CheckIndeterminateSmall-CUpRAyOm.js";import"./Form-Dcbai08Q.js";import"./useToggleState-ByfKk_xH.js";import"./useFormReset-CAGJcD0p.js";import"./SingleComboBox-C3VLsf9c.js";import"./ListBox-D5cuPfT_.js";import"./ListBox-C4ePM5l8.js";import"./DragAndDrop-szfxvZzj.js";import"./useLabel-DP5XcyWK.js";import"./Input-CfUQhn90.js";import"./variants-ovNSaQvf.js";import"./ChevronBackward-BITGL9zF.js";import"./ChevronForward-CT2i8j9H.js";import"./Calendar-CN__b59B.js";import"./sortable.esm-BDl_9_D9.js";import"./DragIndicator-BfwuK3HJ.js";import"./use-toast-51Ak_LfA.js";import"./Description-1MVYVRTj.js";import"./Zip-t-cD8BLx.js";import"./Download-D7W6FZbC.js";import"./Warning-DUiKYfd5.js";import"./index-C7CL5OQ7.js";import"./Modal-EPKA_OFu.js";import"./use-is-mobile-BdCYuEOA.js";import"./Replay-BbIgja-p.js";import"./KeyboardArrowDown-DsnZ-Vj6.js";import"./KeyboardArrowUp-LzTqOGBp.js";import"./FieldError-CBOb5eLN.js";import"./Group-BXHXadXu.js";import"./useTextField-BpuYyQ-1.js";import"./Divider-D8cGZI9i.js";import"./Remove-CQbheRZW.js";import"./TextField-BQZNc5uP.js";import"./Menu-BXywHke7.js";import"./MoreHoriz-C4NAVrZb.js";import"./TableOptions-B7TeLnrR.js";import"./ViewColumn-BDOABsll.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
