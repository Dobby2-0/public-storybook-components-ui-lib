import{j as x}from"./iframe-Cf59BB2m.js";import"./DetailPageHeader-D20-ju36.js";import"./BulkActions-B3Dft-9D.js";import"./Canvas-BEbFYOR5.js";import"./DateTimePicker-C_reo3gT.js";import"./DndList-2dPhw2tH.js";import"./ErrorPage-C0wvYF96.js";import"./FileButton-BzUucVWx.js";import"./FileIcon-QtYta-A_.js";import"./FileList-CgBNN11t.js";import"./Form-BVLIpRse.js";import"./ImageCarousel-DFp6rW0K.js";import"./ListFilters-BcKPf8LZ.js";import"./Loader-CHZVrFVF.js";import"./NumberField-CHkngfu8.js";import"./PDFViewer-CcKEnnSt.js";import"./PDFViewerModal-6mJhjx5X.js";import"./PhoneNumberField-4L8jy2yv.js";import{P as v}from"./Pill-B_yM7vG5.js";import"./RichTextEditor-DH0aEsf8.js";import"./Select-CN7TIdCl.js";import"./SelectBase-RvbGQcTX.js";import"./Skeleton-CUWv6H2e.js";import{A as B}from"./Ag-grid-table-CgwqKWDf.js";import"./Toolbar-agXFnAhc.js";import"./Tooltip-DAm4L83o.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BZa82xcS.js";import"./utils-7d9ue3Ya.js";import"./ButtonBase-Dn4dDKa9.js";import"./Button-D5zpqd4m.js";import"./FocusScope-Hb3BODMY.js";import"./Text-DUhSASD0.js";import"./usePress-DHEYd569.js";import"./index-Cv7hAmAe.js";import"./index-BYq1RcUP.js";import"./Button-BHfJEisQ.js";import"./index-_zVXbRPB.js";import"./RSPContexts-D3i3zFQc.js";import"./Separator-D-cZvXOs.js";import"./index-BgxwcrQu.js";import"./VisuallyHidden-DYdxsg1X.js";import"./ArrowBack-DDPwXEi7.js";import"./Label-BNkoYuny.js";import"./index-CWtkQZMw.js";import"./Label-KLsFGmd8.js";import"./ErrorMessage-Q5YafXdQ.js";import"./DeleteForever-CFfe3LVX.js";import"./variants-Bgnl3evm.js";import"./ChevronBackward-BpZknrFE.js";import"./ChevronForward-bRl41ZeU.js";import"./Calendar-5B4bU0uo.js";import"./sortable.esm-CpkENcrG.js";import"./DragIndicator-VniWGMw8.js";import"./use-toast-r1z2kbXF.js";import"./Description-DNXRi64y.js";import"./Zip-D_C-CGki.js";import"./Download-BKlLVrNF.js";import"./Warning-Dnt3eOyo.js";import"./index-C7CL5OQ7.js";import"./Modal-Co03dDDo.js";import"./ComboBox-BdHl6a_N.js";import"./SingleComboBox-Dj53WfCU.js";import"./ListBox-h-dWPs5x.js";import"./Check-DtwMPYQS.js";import"./ListBox-DDoWKUg8.js";import"./DragAndDrop-Cq6WjINL.js";import"./useLabel-CLWpCBq7.js";import"./Input-CWSWOELh.js";import"./use-is-mobile-D1HHfYgO.js";import"./FilterListOff-KZTRFGla.js";import"./KeyboardArrowDown-CkpxCp9D.js";import"./KeyboardArrowUp-BwsjoRqq.js";import"./FieldError-CImqr5V9.js";import"./Form-DbAWoLlV.js";import"./Group-9qDLmDoV.js";import"./useFormReset-Ciththrw.js";import"./useTextField-BBbI_RXZ.js";import"./Divider-GfbCt_XQ.js";import"./Remove-vZu4tEOZ.js";import"./TextField-CdsZaROY.js";import"./Menu-bR76TXzB.js";import"./MoreHoriz-cA2dwOf8.js";import"./Checkbox-C8_mjOVJ.js";import"./CheckIndeterminateSmall-BNlMJkhx.js";import"./useToggleState-BxzUmP0I.js";import"./TableOptions-Bt9UVZeb.js";import"./ViewColumn-D4_KzlhV.js";const bo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Co=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Co as __namedExportsOrder,bo as default};
