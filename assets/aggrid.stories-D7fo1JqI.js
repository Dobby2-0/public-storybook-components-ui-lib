import{j as x}from"./iframe-DLOAwRAM.js";import{A as v}from"./DetailPageHeader-Ceq5jmLf.js";import"./BulkActions-CO2HRhfW.js";import"./Canvas-BK5m9ey4.js";import"./DateTimePicker-DxceMqMz.js";import"./DndList-Bv7-KJOl.js";import"./ErrorPage-BJ9Np8zt.js";import"./FileButton-C9lh1Eb6.js";import"./FileIcon-CaS0Xt4g.js";import"./FileList-D5HT_ziD.js";import"./ListFilters-DCdvEkyp.js";import"./Loader-DDF0LXrj.js";import"./NumberField-DUog7z91.js";import"./PDFViewer-BpGZxQb3.js";import{P as B}from"./Pill-Bqz6O2km.js";import"./RadioGroup-WjigWw1t.js";import"./Select-RI4LBANL.js";import"./SelectBase-C0OKC_0l.js";import"./TextField-QUqW2Z6_.js";import"./Toolbar-DyVNoX2J.js";import"./Tooltip-DRY4ROIT.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Cbylanz1.js";import"./utils-ChAuCvw9.js";import"./ButtonBase-BEoHXirt.js";import"./Button-CEUYUVNZ.js";import"./FocusScope-Fd7Ip3Eu.js";import"./Hidden-DgqIT5pL.js";import"./usePress-DtSQX-Hh.js";import"./index-DJiPqZ_f.js";import"./index-B19DqXGu.js";import"./Label-DN3WXBAr.js";import"./index-DA10twUG.js";import"./ErrorMessage-uxB_BUl_.js";import"./Button-BptxGDtt.js";import"./index-BbI-jYvb.js";import"./RSPContexts-BbMjvc9_.js";import"./Separator-BEMdekln.js";import"./Text-B7nvB_E8.js";import"./VisuallyHidden-BOGc-052.js";import"./Menu-BFIeeOpN.js";import"./Check-CiRqf7Rc.js";import"./ChevronForward-DhYvOJnG.js";import"./TableOutlined-Dq09vyA6.js";import"./Modal-CVrkDAZ_.js";import"./MoreHoriz-CxAGytCv.js";import"./Checkbox-CADKvF8s.js";import"./CheckIndeterminateSmall-B2XenGgC.js";import"./Form-DHSg4FVY.js";import"./useToggleState-BCsLiTW9.js";import"./useFormReset-ZUDt34kV.js";import"./TableOptions-BOZYU4hI.js";import"./sortable.esm-CEhvIRGA.js";import"./DragIndicator-CoFqGFMs.js";import"./ViewColumn-BwXCLS03.js";import"./KeyboardArrowDown-iJaAlazk.js";import"./Search-Ft_uBzP1.js";import"./Underline-BaRu7f_-.js";import"./ArrowBack-DuDC99LT.js";import"./DeleteForever-BD1QgVsV.js";import"./variants-CPRQGrX9.js";import"./ChevronBackward-DCqbrNWh.js";import"./Calendar-DlQd0dqb.js";import"./use-toast-Cci6V2Ld.js";import"./Description-DosEc-fa.js";import"./Zip-CW2qeN20.js";import"./Download-DaLyPP0_.js";import"./Warning-C2goSQiz.js";import"./ComboBox-VyFiI09W.js";import"./ListBox-Bhf3UrQK.js";import"./ListBox-BGlXqbup.js";import"./DragAndDrop-6vjoJ7sH.js";import"./useLabel-DGk3X-Xs.js";import"./Input-Vf5J-MBq.js";import"./use-is-mobile-BPLbSNea.js";import"./FilterListOff-CwHCl7KN.js";import"./KeyboardArrowUp-BL2arj8t.js";import"./FieldError-H6XbXxto.js";import"./Group-Bd2VlwhK.js";import"./useTextField-CoRiiW5E.js";import"./Divider-CgjWzhjG.js";import"./Remove-CS_QvC53.js";const po={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const uo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,uo as __namedExportsOrder,po as default};
