import{j as x}from"./iframe-BgkfVsmf.js";import"./sha256-BoTivxLr.js";import"./DetailPageHeader-DONoJDDh.js";import"./BulkActions-BHbxnuiI.js";import"./Canvas-kzpW_OUz.js";import"./DateTimePicker-5VVUWcAS.js";import"./DndList-BN8lvt2t.js";import"./ErrorPage-B59m57Ov.js";import"./FileButton-CRl5X7Zm.js";import"./FileIcon-CXdU8AaT.js";import"./FileList-Dts69voV.js";import"./Form-CT60vPC2.js";import"./ImageCarousel-DVd3SX9U.js";import"./ListFilters-IkfeSJ2e.js";import"./Loader-p_Vo8jN9.js";import"./NumberField-DP44bcMY.js";import"./PDFViewer-DYyOa2AY.js";import"./PDFViewerModal-ZNIrnAA3.js";import"./PhoneNumberField-CIe7EYID.js";import{P as v}from"./Pill-BFyhyGn4.js";import"./RichTextEditor-DEyz6fCI.js";import"./Select-CKC7cjfL.js";import"./filter-persistence-0SyBUREP.js";import"./Skeleton-aMnpKIrp.js";import{A as B}from"./Ag-grid-table-CKjBmtCL.js";import"./Toolbar-vtQXUiyq.js";import"./Tooltip-mtjqNT-I.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CeUm4Fdn.js";import"./utils-B_uYpZg6.js";import"./ButtonBase-CioJjg2d.js";import"./Button-QLg2rNda.js";import"./FocusScope-DNnYTmnf.js";import"./Text-_Or1wmkT.js";import"./usePress-DpQfVuhL.js";import"./index-6GU5Ro02.js";import"./index-B7Nqf4HQ.js";import"./Button-_WAXzj12.js";import"./index-Bk8zKqwE.js";import"./RSPContexts-mRHsgW0l.js";import"./Separator-Dt3NtIOW.js";import"./index-B78zPp_S.js";import"./VisuallyHidden-qfpDzjbl.js";import"./ArrowBack-DVwy7jpi.js";import"./Label-CoDhxC3c.js";import"./index-DnMm683m.js";import"./Label-8EXxjjpB.js";import"./ErrorMessage-zBgThyzu.js";import"./DeleteForever-D-MjSpOX.js";import"./variants-xTHvPX8Z.js";import"./ChevronBackward-DzgJxEOv.js";import"./ChevronForward-QNIiOF8T.js";import"./Calendar-B9ZNp_UD.js";import"./sortable.esm-DTnlLflx.js";import"./DragIndicator-BfYfBYuC.js";import"./use-toast-CIwaddPj.js";import"./Description-B7uR_Syc.js";import"./Zip-XPonOgat.js";import"./Download-EaNHXRu5.js";import"./Warning-BvzXLndC.js";import"./index-C7CL5OQ7.js";import"./Modal-DDXAo3CP.js";import"./ComboBox-ChzUA91K.js";import"./SingleComboBox-BMZ7ZVTT.js";import"./ListBox-B7Ub8xZO.js";import"./Check-BTfkaUK1.js";import"./ListBox-BOF-YwbN.js";import"./DragAndDrop-DHK0tXw1.js";import"./useLabel-CUIwe2JB.js";import"./Input-CeZfieuh.js";import"./use-is-mobile-D5SwZRbw.js";import"./Replay-D4WqXfTQ.js";import"./KeyboardArrowDown-CERo_KLE.js";import"./KeyboardArrowUp-Cj7PMLnb.js";import"./FieldError-Bd6QDQ0X.js";import"./Form-zDn7ECcE.js";import"./Group-C0jXSrz5.js";import"./useFormReset-DzVBi8uB.js";import"./useTextField-DrgkrAu9.js";import"./Divider-DazOuVS5.js";import"./Remove-DtQAy4u1.js";import"./TextField-BLjya4WA.js";import"./Menu-QEsBtceS.js";import"./MoreHoriz-BuUVltyR.js";import"./Checkbox-CoPViu_3.js";import"./CheckIndeterminateSmall-1pSj2NgT.js";import"./useToggleState-Bz_10_1Y.js";import"./TableOptions-CRirRn1Z.js";import"./ViewColumn-XFrFq36E.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
