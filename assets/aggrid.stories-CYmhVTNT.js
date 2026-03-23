import{j as x}from"./iframe-CQI2BgJE.js";import"./sha256-BQF5-ZpE.js";import"./SwipeableActionBlock-B-UMsVrT.js";import"./BulkActions-qG3q-n3q.js";import"./IconButton-D35tFxhh.js";import"./Canvas-COkX3ABq.js";import"./Checkbox-BMC_cK7n.js";import"./DateTimePicker-DPtINz9T.js";import"./DndList-DdKYoIcG.js";import"./ErrorPage-inaqWwgy.js";import"./FileButton-DzoSxb2K.js";import"./FileIcon-CSmrh2tl.js";import"./FileList-BQylBRji.js";import"./Form-CMjHFGly.js";import"./ImageCarousel-ChreEG8n.js";import"./use-dobby-context-oOL7Td4C.js";import"./Loader-GseMPIOx.js";import"./NumberField-DCNJ-x52.js";import"./PDFViewer-DmAPCLRR.js";import"./PDFViewerModal-Bn-w1oSK.js";import"./PhoneNumberField-BmCKsEIX.js";import{P as v}from"./Pill-D_mUCm_f.js";import"./RadioGroup-BRozzoB_.js";import"./RichTextEditor-DWJsDiAg.js";import"./Select-_puWHXbS.js";import"./SelectBase-C2EGX3VM.js";import"./Skeleton-BH7Dm4Vt.js";import"./Switch-DfFmIehP.js";import{A as B}from"./Ag-grid-table-Mn314FpH.js";import"./TextField-cie9W2Zr.js";import"./Toolbar-C4wuqdVj.js";import"./Tooltip-CmUNBg59.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D6B8G2pr.js";import"./utils-C3X5B0IN.js";import"./ButtonBase-D7O8JQ9S.js";import"./Button-Ezszb-LY.js";import"./FocusScope-BuasiKxf.js";import"./Text-BXLV_GVU.js";import"./usePress-CGC0cKJT.js";import"./index-CcV-hXq_.js";import"./index-1dpUV8yo.js";import"./index-D_Z4pr1f.js";import"./RSPContexts-DwQOiG50.js";import"./Separator-Nme1GeN9.js";import"./index-IJ0JUEQ3.js";import"./VisuallyHidden-BgQPvfXY.js";import"./ArrowBack-cx1GHLwW.js";import"./Label-CuD1tqG4.js";import"./index-CMgD2K3S.js";import"./Label-qfla7SFZ.js";import"./ErrorMessage-BDjIJoHk.js";import"./DeleteForever-ClNtX0La.js";import"./Check-SkvwYBb8.js";import"./CheckIndeterminateSmall-CFiKs0El.js";import"./Form-D8zqqw1a.js";import"./useToggleState-CM9zET3L.js";import"./useFormReset-DavwkkZt.js";import"./variants-DiWcWtKi.js";import"./ChevronBackward-CQPZaDAm.js";import"./ChevronForward-bM0HsZ5k.js";import"./Calendar-CKUlDrPC.js";import"./sortable.esm-CNvFwkC1.js";import"./DragIndicator-CrV3SeFH.js";import"./use-toast-nz95zHCh.js";import"./Description-DK7CXb1M.js";import"./Zip-BxctEuOO.js";import"./Download-B1o_HF3C.js";import"./Warning-Dw_endLU.js";import"./index-C7CL5OQ7.js";import"./Modal-C2xdQg6s.js";import"./ComboBox-Cdu9OsFQ.js";import"./SingleComboBox-CeNsBKnE.js";import"./ListBox-Uf8aOmyr.js";import"./ListBox-TE4yhkn7.js";import"./DragAndDrop-ZC2quvuw.js";import"./useLabel-BQ3WVoNy.js";import"./Input-tsvPehdY.js";import"./use-is-mobile-C7vtlpOU.js";import"./Replay-DfQpxJA1.js";import"./KeyboardArrowDown-V8YjhI2z.js";import"./KeyboardArrowUp-BbXbKSC2.js";import"./FieldError-BouTSmqf.js";import"./Group-Bq_Kmnb0.js";import"./useTextField-C34O-WWl.js";import"./Divider-CPscgFzv.js";import"./Remove-B6CLIFR5.js";import"./Menu-D5zbetrX.js";import"./MoreHoriz-BHErBH8b.js";import"./TableOptions-8Wog_-3Y.js";import"./ViewColumn-6V_pfaLV.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
