import{j as x}from"./iframe-AuHChfR8.js";import"./DetailPageHeader-DG2LJpjG.js";import"./BulkActions-BWldMJ4G.js";import"./Canvas-LgGsiLFE.js";import"./DateTimePicker-CqLToRit.js";import"./DndList-D_ypOGFF.js";import"./ErrorPage-CU2-MAYB.js";import"./FileButton-DomX6nvO.js";import"./FileIcon-CJqLfGIx.js";import"./FileList-QZSFnf6O.js";import"./Form-6lxDmRlZ.js";import"./ImageCarousel-D7tddLBG.js";import"./ListFilters-Cwxyrx60.js";import"./Loader-AC6f68R3.js";import"./NumberField-BPY3fVGG.js";import"./PDFViewer-Do99MyOc.js";import"./PDFViewerModal-BGlf0WMP.js";import{P as v}from"./Pill-DvUUpkJh.js";import"./RadioGroup-CZkaGgd2.js";import"./RichTextEditor-Ly56ws1s.js";import"./Select-DtmF_50G.js";import"./SelectBase-CocifUuq.js";import"./Skeleton-CZedgd-6.js";import{A as B}from"./Ag-grid-table-P0Y-cr7I.js";import"./Toolbar-piMJ45d6.js";import"./Tooltip-C7ILMvDf.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DTqXDDVb.js";import"./utils-BabE-UFT.js";import"./ButtonBase-af4xbuQX.js";import"./Button-B6MgONbo.js";import"./FocusScope-9az9tTJa.js";import"./Hidden-CLaRjale.js";import"./usePress-kTZ8LD1W.js";import"./index-CsgPiThP.js";import"./index-CCMtGYiC.js";import"./Button-DDZNJY-9.js";import"./index-BzjgWfDE.js";import"./RSPContexts-DdS4iVL4.js";import"./Separator-Dsp-CNcm.js";import"./index-DjvNOQuR.js";import"./Text-mSFoEL7R.js";import"./VisuallyHidden-DDCKDU00.js";import"./ArrowBack-BtavUphd.js";import"./Label-CHJze_Ty.js";import"./index-DFJopNyj.js";import"./ErrorMessage-BaW08f33.js";import"./DeleteForever-Ciajtbl1.js";import"./variants-KP2RT6pP.js";import"./ChevronBackward-B3lWWx_x.js";import"./ChevronForward-DLz9kcGZ.js";import"./Calendar-B4npkOSR.js";import"./sortable.esm-CEtYF6uW.js";import"./DragIndicator-BJvUi40A.js";import"./use-toast-BPUe5Io0.js";import"./Description-Bs0W5uKJ.js";import"./Zip-DnJG2wtu.js";import"./Download-BkmquohL.js";import"./Warning-oyrdeLdR.js";import"./Modal-CWRdL_i9.js";import"./ComboBox-X2DERFyx.js";import"./ListBox-CcjibbUR.js";import"./Check-CAtPzBwY.js";import"./ListBox-WrZOpUhW.js";import"./DragAndDrop-D2c1EfPm.js";import"./useLabel-DiW7coGv.js";import"./Input-aR4FQUuz.js";import"./use-is-mobile-B6qmZjkB.js";import"./FilterListOff-Bc5Gx28M.js";import"./KeyboardArrowDown-D6iA8Zf5.js";import"./KeyboardArrowUp-CZAfT2_t.js";import"./FieldError-Bpk62QQo.js";import"./Form-Dp36w1d8.js";import"./Group-CHX-g9al.js";import"./useFormReset-YosUtBsy.js";import"./useTextField-BzFH_jw8.js";import"./Divider-BnmAhjl5.js";import"./Remove-D0gObzLr.js";import"./Menu-BXZEdthG.js";import"./MoreHoriz-BARO2l8z.js";import"./Checkbox-wDTv23S1.js";import"./CheckIndeterminateSmall-CtS5Qc3K.js";import"./useToggleState-CtKgZZdv.js";import"./TableOptions-dETyOmAW.js";import"./ViewColumn-DGkqfyEp.js";const wo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const fo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,fo as __namedExportsOrder,wo as default};
