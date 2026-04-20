import{j as x}from"./iframe-oEuJi57G.js";import"./sha256-BSTXRW63.js";import"./SwipeableActionBlock-DGiGxvmG.js";import"./BulkActions-CGvf8ID6.js";import"./IconButton-CTH4xIcw.js";import"./Canvas-D1i5y4lv.js";import"./Checkbox-DFwhO7xh.js";import"./ComboBox-DVWR92kD.js";import"./DateTimePicker-BhAvhcF9.js";import"./DndList-BjoVqnUH.js";import"./ErrorPage-DgPaYBxz.js";import"./FileButton-Md_wDw6n.js";import"./FileIcon-Cq-k0ifr.js";import"./FileList-DmChOdGN.js";import"./Form-CIwt_oiH.js";import"./ImageCarousel-DRCq3wRu.js";import"./use-dobby-context-BGWc9n3z.js";import"./Loader-BiiYAKiC.js";import"./NumberField-DAzkUXVa.js";import"./PDFViewer-6W2mBnD4.js";import"./PDFViewerModal-BOZotZTJ.js";import"./PhoneNumberField-CQeye7Me.js";import{P as v}from"./Pill-Be5wAwX3.js";import"./RichTextEditor-BxTSir8z.js";import"./Select-B-TdLlys.js";import"./SelectBase-C71bwH8o.js";import"./Skeleton-B9a_FvoE.js";import{A as B}from"./Ag-grid-table-MTLU65Va.js";import"./Toolbar-DEMIfN0R.js";import"./Tooltip-DDOk3jHc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-yqwJt3X3.js";import"./utils-BICVp3Ky.js";import"./ButtonBase-C9eLrQ21.js";import"./Button-DwvsmACz.js";import"./FocusScope-BMqEpHqw.js";import"./Text-BlxRAdj_.js";import"./usePress-CWjT6aHk.js";import"./index-CDMsDVTg.js";import"./index-Dcmk_gEP.js";import"./index-BwlHY3mc.js";import"./RSPContexts-mf7-MgP5.js";import"./Separator-DhMowLpU.js";import"./index-D74kYfOJ.js";import"./VisuallyHidden-BXUgwH2T.js";import"./ArrowBack-DMjftH1c.js";import"./Label-L2ACypNA.js";import"./index-D2A_NzS1.js";import"./Label-BDa_z1en.js";import"./ErrorMessage-CCNQs8GB.js";import"./DeleteForever-CIy2ttjT.js";import"./Check-k3yz5y2u.js";import"./CheckIndeterminateSmall-Ysi4PeyX.js";import"./Form-CAvoQM6E.js";import"./useToggleState-qCqDMhAl.js";import"./useFormReset-CcsQJYW2.js";import"./SingleComboBox-BlMZsorE.js";import"./ListBox-kFcGSBhM.js";import"./ListBox-B1q350q9.js";import"./DragAndDrop-t1tiytyo.js";import"./useLabel-Bu9WOYPt.js";import"./Input-DUQLRS91.js";import"./variants-CUBEEnt0.js";import"./ChevronBackward--6V6Lana.js";import"./ChevronForward-DEjaUc4L.js";import"./Calendar-CPoaQLUJ.js";import"./sortable.esm-BuQMjhE9.js";import"./DragIndicator-CNgwM1XI.js";import"./use-toast-CtXfIZnA.js";import"./Description-Br1CeYGf.js";import"./Zip-BpunmBnD.js";import"./Download-Vp1pIAWF.js";import"./Warning-V2hRL6Jh.js";import"./index-C7CL5OQ7.js";import"./Modal-bYvdXnb7.js";import"./use-is-mobile-0n7hCb7Y.js";import"./Replay-Cmty3yI_.js";import"./KeyboardArrowDown-BWs2i4h_.js";import"./KeyboardArrowUp-BGjpYmNy.js";import"./FieldError-CspbHna8.js";import"./Group-U_t5wZ-2.js";import"./useTextField-D-OBWVPI.js";import"./Divider-X-E86Oqh.js";import"./Remove-U6eGgTeX.js";import"./TextField-DaSLplcO.js";import"./Menu-g8pZ8QTn.js";import"./MoreHoriz-C8tLcXQa.js";import"./TableOptions-CuVLK2j_.js";import"./ViewColumn-BdIpiXmE.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Do=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Do as __namedExportsOrder,Co as default};
