import{j as x}from"./iframe-DI9C0XGj.js";import"./DetailPageHeader-DDoyevWh.js";import"./BulkActions-CoSXExyh.js";import"./Canvas-CClCsrYr.js";import"./DateTimePicker-Cw_ReAUi.js";import"./DndList-2I6StLvJ.js";import"./ErrorPage-DOC6gBCb.js";import"./FileButton-CwwFg5uR.js";import"./FileIcon-D87xeg5Q.js";import"./FileList-DMSsK_7X.js";import"./Form-DSPlMYBh.js";import"./ListFilters-DGzHTJH5.js";import"./Loader-nBG2c2qw.js";import"./NumberField-DM8fqouo.js";import"./PDFViewer-CYl2LTCt.js";import{P as v}from"./Pill-_bbJn_J1.js";import"./RadioGroup-CZMralDk.js";import"./RichTextEditor-TBRVijBz.js";import"./Select-B0HeiZiq.js";import"./SelectBase-CFuxMSpy.js";import"./Skeleton-pXuaEXPw.js";import{A as B}from"./Ag-grid-table-C1S-KsKQ.js";import"./TextField-BlIO3LUi.js";import"./Toolbar-1Bho8ZSv.js";import"./Tooltip-Ddl1sZ4v.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Bnr6vnM3.js";import"./utils-DH7pmtTy.js";import"./ButtonBase-CGKxs8GU.js";import"./Button-DYkRiOU2.js";import"./FocusScope-DACczAvf.js";import"./Hidden-CSksDgLO.js";import"./usePress-DFFM6Qbl.js";import"./index-rhYSaYR7.js";import"./index-BBABmHkT.js";import"./Button-BasiSkBq.js";import"./index-74jR0aHg.js";import"./RSPContexts-DJ9m66Je.js";import"./Separator-ClBKGkuu.js";import"./Text-DcT0OA-Z.js";import"./VisuallyHidden-ElH9BT4R.js";import"./ArrowBack-5AyCrsP6.js";import"./Label-CSWNAzUW.js";import"./index-D5bFuttZ.js";import"./ErrorMessage-dJHOK1PY.js";import"./DeleteForever-DjYHpkW3.js";import"./variants-ChZORXjr.js";import"./ChevronBackward-XzUvfLny.js";import"./ChevronForward-omS-a1YG.js";import"./Calendar-DtZQObLM.js";import"./sortable.esm-Cft8Flqh.js";import"./DragIndicator-DEAbg5p4.js";import"./use-toast-DTRc5a9y.js";import"./Description-DVPtvnvx.js";import"./Zip-Dd7VS-AG.js";import"./Download-cVZGeNZv.js";import"./Warning-Bd1HIxKb.js";import"./ComboBox-BtrKak39.js";import"./ListBox-DQXhA5Up.js";import"./Check-DIq9nWUU.js";import"./ListBox-DEiNlcko.js";import"./DragAndDrop-DGT4VSIL.js";import"./useLabel-BpjHoqKr.js";import"./Input-CjLHpiFp.js";import"./Modal-C_jczxJg.js";import"./use-is-mobile-CogeAkkp.js";import"./FilterListOff-B-Izo778.js";import"./KeyboardArrowDown-DABkelWi.js";import"./KeyboardArrowUp-CAOIkg8F.js";import"./FieldError-EKlYiboM.js";import"./Form-B8gRSjBO.js";import"./Group-BnBPqKI6.js";import"./useFormReset-93b1X55p.js";import"./useTextField-ALT1n8g2.js";import"./Divider-DptFeKwz.js";import"./Remove-BPWvGhiA.js";import"./Menu-5T0GfOwg.js";import"./MoreHoriz-C2hF4VHh.js";import"./Checkbox-wix5wiZe.js";import"./CheckIndeterminateSmall-CtsWE0gc.js";import"./useToggleState-Dm8JtWrX.js";import"./TableOptions-BwZoxiK9.js";import"./ViewColumn-CcA8lASc.js";const uo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const go=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,go as __namedExportsOrder,uo as default};
