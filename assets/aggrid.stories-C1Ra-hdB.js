import{j as x}from"./iframe-DrFH8XRg.js";import"./sha256-BYnNrIB1.js";import"./DetailPageHeader-DsovP3Xg.js";import"./BulkActions-B56kzvlb.js";import"./Canvas-ngM5YXdw.js";import"./DateTimePicker-CaJdaA9_.js";import"./DndList-CXor6nX5.js";import"./ErrorPage-BOYKhsv4.js";import"./FileButton-C-RQ1d5M.js";import"./FileIcon-D5NpcYpy.js";import"./FileList-C075SOjA.js";import"./Form-BlCGfHMg.js";import"./ImageCarousel-BJymb85k.js";import"./ListFilters-DJb2jQdX.js";import"./Loader-CNrDyEl1.js";import"./NumberField-DBNVXM6j.js";import"./PDFViewer-2v1-ifd0.js";import"./PDFViewerModal-Dco21zQm.js";import"./PhoneNumberField-D-YYQk-v.js";import{P as v}from"./Pill-CvtuDp7S.js";import"./RichTextEditor-Y2OvcfIq.js";import"./Select-B3-LHJd5.js";import"./filter-persistence-CCGSvWjz.js";import"./Skeleton-CMVXcTKf.js";import{A as B}from"./Ag-grid-table-BXVfByCO.js";import"./TextField-TvPzg8A7.js";import"./Toolbar-BcUVfnd_.js";import"./Tooltip-CXwE-K1l.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DpaQtcQk.js";import"./utils-CnfCCKuF.js";import"./ButtonBase-F93lj1qr.js";import"./Button-DOwjUmTP.js";import"./FocusScope-B40k0w__.js";import"./Text-li9YpqBq.js";import"./usePress-Ciue2P_m.js";import"./index-iFxpPaYa.js";import"./index-BYKGypTn.js";import"./Button-X_wyXg0L.js";import"./index-DzH2doeL.js";import"./RSPContexts-mikK0Q7p.js";import"./Separator-Bk_Cftu2.js";import"./index-BuUxtWBt.js";import"./VisuallyHidden-DDfnc86H.js";import"./ArrowBack-DL3DG4wZ.js";import"./Label-BoN0Q0GS.js";import"./index-CIzZZqPp.js";import"./Label-BGBGIU50.js";import"./ErrorMessage-C4RDLZo2.js";import"./DeleteForever-DXSM3XPM.js";import"./variants-CpiCEwlc.js";import"./ChevronBackward-BKsmfqQZ.js";import"./ChevronForward-BNfIVkA4.js";import"./Calendar-CMg7Zw0g.js";import"./sortable.esm-D8_1CNP4.js";import"./DragIndicator-Cm8eqQhD.js";import"./use-toast-mWxuKBj-.js";import"./Description-C-X7w0xJ.js";import"./Zip-DDXKFQF2.js";import"./Download-Dmamygze.js";import"./Warning-CAs9mZ_1.js";import"./index-C7CL5OQ7.js";import"./Modal-rv-ciXRb.js";import"./ComboBox-CA6zcIcv.js";import"./SingleComboBox-BliqQvHC.js";import"./ListBox-Do7xm0ce.js";import"./Check-B-DywcFA.js";import"./ListBox-DSqo3Nry.js";import"./DragAndDrop-DEYpxB1p.js";import"./useLabel-CinT1c1I.js";import"./Input-BGi8fj7U.js";import"./use-is-mobile-BjR11_2J.js";import"./Replay-BXNjzOL1.js";import"./KeyboardArrowDown-Kkb4E__E.js";import"./KeyboardArrowUp-tAcpKfN8.js";import"./FieldError-B-B5gAHI.js";import"./Form-r196mReO.js";import"./Group-CRb52MbR.js";import"./useFormReset-mLoqV93f.js";import"./useTextField-B9n56kKR.js";import"./Divider-BcMS8imW.js";import"./Remove-BoUQ88xd.js";import"./Menu-C6cqiMrm.js";import"./MoreHoriz-CN4oj0Aq.js";import"./Checkbox-B5Ydmu3X.js";import"./CheckIndeterminateSmall-CWKdrz61.js";import"./useToggleState-Cf4HPSc4.js";import"./TableOptions-p4qwAQ4N.js";import"./ViewColumn-Dc5ahaN3.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
