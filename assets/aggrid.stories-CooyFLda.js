import{j as x}from"./iframe-cTEz0bCF.js";import"./sha256-Cw29RLcO.js";import"./SwipeableActionBlock-B5f6Vd94.js";import"./BulkActions-l3QiBA1i.js";import"./Button-BuTvB2x_.js";import"./Canvas-CkIeaA3k.js";import"./DateTimePicker-CyM76thm.js";import"./DndList-DAlAvUPi.js";import"./ErrorPage-CM1N-7Zh.js";import"./FileButton-BpaljCdc.js";import"./FileIcon-BJiYoTim.js";import"./FileList-CzwgUyro.js";import"./Form-BTDoUYwk.js";import"./ImageCarousel-yVWDl1yL.js";import"./use-dobby-context-CZPjoIeV.js";import"./Loader-BKbFv0HZ.js";import"./NumberField-BVNzu-te.js";import"./PDFViewer-BClIwm_d.js";import"./PDFViewerModal-B_bm6W1K.js";import"./PhoneNumberField-CmNJi3yJ.js";import{P as v}from"./Pill-CJDjViF3.js";import"./RadioGroup-CVkoFlCR.js";import"./RichTextEditor-BYAMfXJG.js";import"./Select-CUvax54L.js";import"./SelectBase-BPzsACrx.js";import"./Skeleton-DwwqF4gu.js";import"./Switch-DHvIKOp2.js";import{A as B}from"./Ag-grid-table-CcXfp_ZS.js";import"./TextField-ADJONiUa.js";import"./Toolbar-CDxBJbtf.js";import"./Tooltip-D5TD-Rrh.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DmDWIZEW.js";import"./utils-C86d5PX9.js";import"./ButtonBase-Coxs2DBZ.js";import"./Button-Ok7T9XAA.js";import"./FocusScope-jxFZvl6T.js";import"./Text-CrXG44e1.js";import"./usePress-8Tl9jbTi.js";import"./index-CcwBWjJA.js";import"./index-CDANnZ-U.js";import"./index-DFAyb7bz.js";import"./RSPContexts-CrQOO1z_.js";import"./Separator-DLvBuDjd.js";import"./index-DtuWzYyK.js";import"./VisuallyHidden-6fkLuNLp.js";import"./ArrowBack-B6uuFAsS.js";import"./Label-BxNzbYqN.js";import"./index-BmuVQnOK.js";import"./Label-Da5c-COh.js";import"./ErrorMessage-iESg0kHK.js";import"./DeleteForever-C7x_Pvd4.js";import"./variants-CKnZm4tz.js";import"./ChevronBackward-CX80esgJ.js";import"./ChevronForward-mazovom5.js";import"./Calendar-D-PlX-k3.js";import"./sortable.esm-8GJFOwrp.js";import"./DragIndicator-wi3Hxm3t.js";import"./use-toast-tmbFqUTH.js";import"./Description-BknvZcjK.js";import"./Zip-Cm5Rz3VZ.js";import"./Download-CDqp440T.js";import"./Warning-XoEI3TVH.js";import"./index-C7CL5OQ7.js";import"./Modal-C9deD1wk.js";import"./ComboBox-b9xkF2Nz.js";import"./SingleComboBox-eBp03iMV.js";import"./ListBox-RG486XuS.js";import"./Check-BQisiqJj.js";import"./ListBox-BR1K5b4P.js";import"./DragAndDrop-C4sBlOeH.js";import"./useLabel-3tg4uJ6M.js";import"./Input-DwNh0WV_.js";import"./use-is-mobile-BJitR45C.js";import"./Replay-DYqQoNRA.js";import"./KeyboardArrowDown-BYmDJmpB.js";import"./KeyboardArrowUp-DzGhVaip.js";import"./FieldError-C10XNw_w.js";import"./Form-D5P3_FZF.js";import"./Group-D2JHcjJE.js";import"./useFormReset-BUUvJcsI.js";import"./useTextField-CIMOD1Bl.js";import"./Divider-CdRPyUwN.js";import"./Remove-DaSPDi35.js";import"./useToggleState-CeH-IZHt.js";import"./Menu-CY5bBZGd.js";import"./MoreHoriz-5hBpSjun.js";import"./Checkbox-BSqAl3jh.js";import"./CheckIndeterminateSmall-SaKhzg7z.js";import"./TableOptions-B-p4pW4n.js";import"./ViewColumn-CeDW4sVZ.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
