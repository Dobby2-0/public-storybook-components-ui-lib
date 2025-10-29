import{j as x}from"./iframe-Ff2s0Wa7.js";import{A as v}from"./DetailPageHeader-_N6aSScB.js";import"./BulkActions-Jg29u0YC.js";import"./IconButton-D_Bv-hF2.js";import"./Canvas-CuJFcSkA.js";import"./DateTimePicker-CXs03N8j.js";import"./DndList-wBRcdm7m.js";import"./ErrorPage-Dn8ONBzm.js";import"./FileIcon-Qig9J2su.js";import"./FileList-BBDgWL3C.js";import"./ListFilters-CShppz-g.js";import"./Loader-CT8ByzBI.js";import"./NumberField-BqkmXi1A.js";import"./PDFViewer-Bw_pYG-O.js";import{P as B}from"./Pill-D_snA_wm.js";import"./Select-69Q_9mSB.js";import"./SelectBase-CqEPgxh4.js";import"./Toolbar-BD8HUk5g.js";import"./Tooltip-DgWsh440.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-CX6kCKkr.js";import"./index-DxjM8jOk.js";import"./index-C1nCaLjx.js";import"./index-xi8jNSPF.js";import"./ErrorMessage-Ci6eNVnP.js";import"./Button-B2nGv0Y0.js";import"./utils-DedG9-wU.js";import"./ButtonBase-C1BSoN7N.js";import"./Button-CQGhT4Ij.js";import"./FocusScope-DjT-hP5n.js";import"./Hidden-DeoHi4c3.js";import"./usePress-BYqqMwsO.js";import"./index-LRkyAUEd.js";import"./RSPContexts-j2BU7Axl.js";import"./Separator-DyvklDdo.js";import"./Text-Cg-gjy63.js";import"./VisuallyHidden-BtKN2TbE.js";import"./Menu-CfVDILg1.js";import"./Check-DAAZZgS-.js";import"./ChevronForward-BG8bFhk2.js";import"./TableOutlined-9KM0UD6Q.js";import"./Modal-DepAFN0q.js";import"./MoreHoriz-BiCm5fHp.js";import"./Checkbox-BlpeXcLe.js";import"./CheckIndeterminateSmall-CU2i2Bza.js";import"./Form-jJBjopWq.js";import"./useToggleState-Z_ps1LuL.js";import"./useFormReset-dLaDw7ax.js";import"./TableOptions-BgKqdtxr.js";import"./sortable.esm-PR-HnRQ3.js";import"./DragIndicator-BQK9cMlX.js";import"./ViewColumn-DpDNHLlw.js";import"./TextField-LirNgzw2.js";import"./Input-DSXWsPUE.js";import"./FieldError-E01F8AMA.js";import"./useLabel-CF-xOa3P.js";import"./Group-CxMk8V41.js";import"./useTextField-Cu4c8_PC.js";import"./KeyboardArrowDown-Dwp97ofS.js";import"./Search-D007Iynt.js";import"./Underline-C77qBY9q.js";import"./ArrowBack-CaIGsGuE.js";import"./DeleteForever-CdwKfMT0.js";import"./variants-By0yCXqW.js";import"./ChevronBackward-Bv8VERD6.js";import"./Calendar-CNXzjuZe.js";import"./Description-C5Wabggh.js";import"./Zip-DUKhOLyR.js";import"./Download-B06yWSef.js";import"./Warning-D7tyftVX.js";import"./ComboBox-BOH4DrkM.js";import"./ListBox-DxClmdKp.js";import"./ListBox-C0o7bD8l.js";import"./DragAndDrop-BrwPEaml.js";import"./use-is-mobile-DtDI-eHc.js";import"./FilterListOff-DZuLfhrP.js";import"./KeyboardArrowUp-DH7XOq6A.js";import"./Divider-DQkFv8yA.js";import"./Remove-CBALtlaw.js";const lo={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const co=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,co as __namedExportsOrder,lo as default};
