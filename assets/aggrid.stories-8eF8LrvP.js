import{j as x}from"./iframe-DwQ1cxKd.js";import"./sha256-B-PSEeYO.js";import"./SwipeableActionBlock-0XGTzyVz.js";import"./BulkActions-DC3v0OUg.js";import"./Canvas-BxvR8llz.js";import"./DateTimePicker-CVcVyIuf.js";import"./DndList-CN0ovdgM.js";import"./ErrorPage-Cc_Q8eAl.js";import"./FileButton-6ZFMG3wQ.js";import"./FileIcon-CyXxONS-.js";import"./FileList-D6giYZjw.js";import"./Form-BwonRxOM.js";import"./ImageCarousel-B5tOL4l1.js";import"./use-dobby-context-7SCQ0GY-.js";import"./Loader-C9gGUQuh.js";import"./NumberField-CagclWxz.js";import"./PDFViewer-CCGw8Q7J.js";import"./PDFViewerModal-CWYrPylM.js";import"./PhoneNumberField-DgqMDl92.js";import{P as v}from"./Pill-kffbdWLi.js";import"./RadioGroup-BrN3BuJZ.js";import"./RichTextEditor-Cx9JDuU-.js";import"./Select-y5aV3RR5.js";import"./SelectBase-BuYFQ__d.js";import"./Skeleton-BYt5vrqC.js";import"./Switch-DjTcw2pe.js";import{A as B}from"./Ag-grid-table-zSq0Qrvw.js";import"./TextField-zCwh9ACI.js";import"./Toolbar-TG-hGacr.js";import"./Tooltip-3Xd6rwqa.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-B2l9S4ei.js";import"./utils-Cq8mDMrP.js";import"./ButtonBase-2OI7vvzL.js";import"./Button-BQ-6Ynvp.js";import"./FocusScope-CGYtYmDv.js";import"./Text-v8vy5ByC.js";import"./usePress-Boayax9N.js";import"./index-BXyKMVzy.js";import"./index-CdqMcoE8.js";import"./Button-Bd9x12G_.js";import"./index-BAuicX3T.js";import"./RSPContexts-D1BZSikK.js";import"./Separator-CZ1LhOtD.js";import"./index-CoseQzcP.js";import"./VisuallyHidden-UobzTLrX.js";import"./ArrowBack-BpTsM9PF.js";import"./Label-Cr4EEV52.js";import"./index-DQiCAfZd.js";import"./Label-CLaeWWl4.js";import"./ErrorMessage-RL2rTeUv.js";import"./DeleteForever-Csn-niJN.js";import"./variants-6kbjCjNZ.js";import"./ChevronBackward-B4GlKOPq.js";import"./ChevronForward-BKmEX-sM.js";import"./Calendar-D8fPqqnH.js";import"./sortable.esm-jv24CSj-.js";import"./DragIndicator-CyseoBEf.js";import"./use-toast-C_p2hZOH.js";import"./Description-DRqMd7MO.js";import"./Zip-B4HjSkB7.js";import"./Download-0-4swq0D.js";import"./Warning-BQdJpdod.js";import"./index-C7CL5OQ7.js";import"./Modal-Dd8YfYNi.js";import"./ComboBox-4nA395YM.js";import"./SingleComboBox-CLKQmVCl.js";import"./ListBox-BBIWO29z.js";import"./Check-gF0yx19v.js";import"./ListBox-axR2Bl1n.js";import"./DragAndDrop-C_CJzo5y.js";import"./useLabel-tSNErAk0.js";import"./Input-CUoIl1Yb.js";import"./use-is-mobile-B87Y3r-T.js";import"./Replay-Da0DsUuH.js";import"./KeyboardArrowDown-CpaTLkLf.js";import"./KeyboardArrowUp-DvUiaKFH.js";import"./FieldError-BlPQOJdr.js";import"./Form-DUZwhMac.js";import"./Group-COK7b1VT.js";import"./useFormReset-C9RR7ftz.js";import"./useTextField-D9oxw4mH.js";import"./Divider-CEuxclwL.js";import"./Remove-CBIYKTYM.js";import"./useToggleState-D1pUy_vP.js";import"./Menu-BZf4O0Qg.js";import"./MoreHoriz-sp3vqaNu.js";import"./Checkbox-DzGx-As7.js";import"./CheckIndeterminateSmall-BAWBZ-82.js";import"./TableOptions-CwQPqR5h.js";import"./ViewColumn-vphZSMac.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
