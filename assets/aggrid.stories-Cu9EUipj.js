import{j as x}from"./iframe-DmQSL1n5.js";import"./sha256-kjML7lqd.js";import"./SwipeableActionBlock-CUvst_wE.js";import"./BulkActions-Chat_Nax.js";import"./Button-CE-mMj1m.js";import"./IconButton-Die-hctV.js";import"./Canvas-DSNxSo8R.js";import"./Checkbox-CyaBzxuH.js";import"./ComboBox-Du0e320J.js";import"./DateTimePicker-BRCanODh.js";import"./DndList-Dn7_cqKE.js";import"./ErrorPage-C5LwVuzq.js";import"./FileButton-BDR2ikSf.js";import"./FileIcon-B2j2oNSm.js";import"./FileList-f9eq8wgf.js";import"./Form-DP94rfIB.js";import"./ImageCarousel-BoMZCK6r.js";import"./use-dobby-context-DhIjQbd5.js";import"./Loader-Dav_e8u7.js";import"./NumberField-DNoDaRFh.js";import"./PDFViewer-C_xxdUbR.js";import"./PDFViewerModal-DX1qpvci.js";import"./PhoneNumberField-DxltrJL6.js";import{P as v}from"./Pill-5nk9SBAe.js";import"./RadioGroup-xBWhC8Jh.js";import"./RichTextEditor-_USTMPGd.js";import"./Select-CEgwEmWj.js";import"./SelectBase-Bd1eX1e1.js";import"./Skeleton-mzCfZppy.js";import{A as B}from"./Ag-grid-table-DqQd3Shx.js";import"./TextField-EVIXUUic.js";import"./Toolbar-Dk0njvfo.js";import"./Tooltip-8jf_ic_C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRjml-nF.js";import"./utils-Q1S98sFL.js";import"./Button-haN4-rOz.js";import"./FocusScope-BHQMkNL1.js";import"./Text-BIFAZDue.js";import"./usePress-B6PvCcgl.js";import"./index-vN_LGgeS.js";import"./index-C_oUhXh1.js";import"./RSPContexts-BCqgmaSx.js";import"./Separator-4bUDgNjt.js";import"./index-BSMU_KQv.js";import"./VisuallyHidden-DtJLncJU.js";import"./ArrowBack-C-NPECSZ.js";import"./ButtonBase-BbXWP6MQ.js";import"./Label-DmnPIo-K.js";import"./index-D92gCk2y.js";import"./Label-Cliij9YS.js";import"./ErrorMessage-Cfkk25TD.js";import"./DeleteForever-DJTbO17y.js";import"./Check-DDM4CB9f.js";import"./CheckIndeterminateSmall-DOmp6zTe.js";import"./Form-_DpIGpJL.js";import"./useToggleState-B2xNtg9Y.js";import"./useFormReset-tn8EIHg-.js";import"./SingleComboBox-QaK58nWd.js";import"./ListBox-BejO1O41.js";import"./ListBox-Czpbme6U.js";import"./DragAndDrop-CRISqGBo.js";import"./useLabel-C77bEwrz.js";import"./Input-CnWvLWpx.js";import"./variants-CPwxUg2B.js";import"./ChevronBackward-eqOobHUi.js";import"./ChevronForward-_xOBq46v.js";import"./Calendar-CFSIZZjq.js";import"./sortable.esm-D_9N-XR6.js";import"./DragIndicator-R6uVEBXo.js";import"./use-toast-cEc0h4yp.js";import"./Description-xaQWVz2s.js";import"./Zip-C584ETIF.js";import"./Download-BB_wX1Wl.js";import"./Warning-CKT263VG.js";import"./index-C7CL5OQ7.js";import"./Modal-BJxzOPWA.js";import"./use-is-mobile-Cqq0BjVf.js";import"./Replay-CCfk1DEq.js";import"./KeyboardArrowDown-BvfLRCkB.js";import"./KeyboardArrowUp-Bagp6-Eh.js";import"./FieldError-CgdXUbBi.js";import"./Group-pj28-uHL.js";import"./useTextField-BjzxVXiD.js";import"./Divider-ZoqTB9Dx.js";import"./Remove-Cu-7lOsj.js";import"./Menu-CAVUQPux.js";import"./MoreHoriz-Ca6IYqdW.js";import"./TableOptions-Cw-YeLeE.js";import"./ViewColumn-DzAGRT68.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
