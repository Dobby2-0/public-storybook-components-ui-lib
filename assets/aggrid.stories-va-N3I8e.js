import{j as x}from"./iframe-CR-DZe2S.js";import"./sha256-2iCmlBnZ.js";import"./SwipeableActionBlock-BsbXB1eu.js";import"./BulkActions-BXe9X4y2.js";import"./Canvas-Lyw_YmrO.js";import"./DateTimePicker-BA2ebuTp.js";import"./DndList-CZ8z2zrm.js";import"./ErrorPage-B_RdkVs4.js";import"./FileButton-CYiGcpoR.js";import"./FileIcon-Cuu9AkSD.js";import"./FileList-x7YBG-Vd.js";import"./Form-CTMABHJI.js";import"./ImageCarousel-CLEdw-_E.js";import"./use-dobby-context-DxxtkjoU.js";import"./Loader-CHcImFvN.js";import"./NumberField-D7NrlOc-.js";import"./PDFViewer-CVn4db9L.js";import"./PDFViewerModal-BHQpxKmG.js";import"./PhoneNumberField-DX8UECbU.js";import{P as v}from"./Pill-CV0uFtYk.js";import"./RichTextEditor-B-Hg8fna.js";import"./Select-ASVTQbCR.js";import"./SelectBase-DQ1ZWACc.js";import"./Skeleton-ClBe2F6R.js";import{A as B}from"./Ag-grid-table-B4D_ntdP.js";import"./TextField-CV9FAG3X.js";import"./Toolbar-c_lO81As.js";import"./Tooltip-BUPUSf_5.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CepDHBmU.js";import"./utils-MogbmQpd.js";import"./ButtonBase-CKl0ILxM.js";import"./Button-CS0fzLJn.js";import"./FocusScope-B98o_SCP.js";import"./Text-D1iKloKO.js";import"./usePress-DSqldAbN.js";import"./index-DRAkue47.js";import"./index-DE98puDd.js";import"./Button-BKtZAKip.js";import"./index-DmhtxPl_.js";import"./RSPContexts-BSiDlk35.js";import"./Separator-ET3Zna4S.js";import"./index-k97qKrQu.js";import"./VisuallyHidden-C2m0AmjI.js";import"./ArrowBack-BRom9sor.js";import"./Label-XuXd7SE3.js";import"./index-v6REk9R8.js";import"./Label-cwUc0USr.js";import"./ErrorMessage-Cz2896Dm.js";import"./DeleteForever-DHeFBBjv.js";import"./variants-gTznkEfe.js";import"./ChevronBackward-D1yyMPGx.js";import"./ChevronForward-BJYAHJ-7.js";import"./Calendar-ulL__KqB.js";import"./sortable.esm-DlpMjyE9.js";import"./DragIndicator-BYm5OV9I.js";import"./use-toast-C42fP9Zk.js";import"./Description-DiSKn4bK.js";import"./Zip-Cahwqvxv.js";import"./Download-BwEkVDPQ.js";import"./Warning-DC7iHSHq.js";import"./index-C7CL5OQ7.js";import"./Modal-BhLNeZUO.js";import"./ComboBox-DaA0XJfH.js";import"./SingleComboBox-DF22WHCR.js";import"./ListBox-CKBBDlGe.js";import"./Check-C0vVWLYW.js";import"./ListBox-8vjLlk-E.js";import"./DragAndDrop-BMbiKIe1.js";import"./useLabel-Dx05tmhm.js";import"./Input-BPzYrNrC.js";import"./use-is-mobile-BXNX20va.js";import"./Replay-Dy_-SE1j.js";import"./KeyboardArrowDown-B8Wkp6RD.js";import"./KeyboardArrowUp-v9RPIErQ.js";import"./FieldError-BtvGqxka.js";import"./Form-Bx8b2yOW.js";import"./Group-BN9DhEO2.js";import"./useFormReset-2BHxyeRj.js";import"./useTextField-DgQnPZUm.js";import"./Divider-BeJbyLhT.js";import"./Remove-BMpsB06r.js";import"./Menu-CiHQd3es.js";import"./MoreHoriz-BiavwyN4.js";import"./Checkbox-CtOj8AaH.js";import"./CheckIndeterminateSmall-B_3Mcssd.js";import"./useToggleState-BXq0N2PU.js";import"./TableOptions-5rResUdr.js";import"./ViewColumn-DpZIY8TW.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
