import{j as x}from"./iframe-BuFkWplP.js";import"./sha256-BaHJVEED.js";import"./SwipeableActionBlock-BY1OEpgt.js";import"./BulkActions-D1lYhBEa.js";import"./Canvas-B0nQVnY9.js";import"./DateTimePicker-BnB-pjiU.js";import"./DndList-C9NXzlvv.js";import"./ErrorPage-D6kzkg0V.js";import"./FileButton-eGBVloV0.js";import"./FileIcon-1jxUzP15.js";import"./FileList-Cn0oUovP.js";import"./Form-DUWq3IsJ.js";import"./ImageCarousel-BoBTbNpO.js";import"./use-dobby-context-4yYzjdq2.js";import"./Loader-DIzJdq7m.js";import"./NumberField-BfdnTj1G.js";import"./PDFViewer-C50Asijh.js";import"./PDFViewerModal-DdKgyo3s.js";import"./PhoneNumberField-CxCx3yq9.js";import{P as v}from"./Pill-BJ7greTZ.js";import"./RadioGroup-aV1aUkDj.js";import"./RichTextEditor-CLCXEdOU.js";import"./Select-3HUXxPrq.js";import"./SelectBase-oi6w1shv.js";import"./Skeleton-Cgp4G17R.js";import{A as B}from"./Ag-grid-table-D6OzsVLv.js";import"./TextField-E0U5wFBv.js";import"./Toolbar-DAlELtMB.js";import"./Tooltip-D4mIy-Bb.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CIpWgWoP.js";import"./utils-C9iw6zWm.js";import"./ButtonBase-Bk_9nHne.js";import"./Button-BlGFDEZi.js";import"./FocusScope-Dp2boi_n.js";import"./Text-HLD_xZ3d.js";import"./usePress-B3kjZh-7.js";import"./index-RoS1Ggrx.js";import"./index-BdiL26eU.js";import"./Button-CBNkgpVa.js";import"./index-D7-a8E3n.js";import"./RSPContexts-BRmoPSeH.js";import"./Separator-CyT0SUzg.js";import"./index-zqHkV5kc.js";import"./VisuallyHidden-B33w_ENG.js";import"./ArrowBack-09-FRSgQ.js";import"./Label-BUm0PTbE.js";import"./index-e7KKxAvm.js";import"./Label-BDiBA2iC.js";import"./ErrorMessage-jBZdi1Mm.js";import"./DeleteForever-CcSZo2hG.js";import"./variants-DhvAw9yj.js";import"./ChevronBackward-l9bym_VI.js";import"./ChevronForward-BoybGLcK.js";import"./Calendar-KGsiQvcZ.js";import"./sortable.esm-DlyQKLgY.js";import"./DragIndicator-DOxKdDzE.js";import"./use-toast-DUNIw2Re.js";import"./Description-B01sIQrj.js";import"./Zip-Ct-MkTBW.js";import"./Download-LrCmuAft.js";import"./Warning-DUTsphFo.js";import"./index-C7CL5OQ7.js";import"./Modal-z_P6dwt_.js";import"./ComboBox-_gkwY7DF.js";import"./SingleComboBox-CehJ6kL9.js";import"./ListBox-BMjfYA72.js";import"./Check-d-NqFmIa.js";import"./ListBox-jYKxHJae.js";import"./DragAndDrop-DyRmnP9D.js";import"./useLabel-DGbKxkyu.js";import"./Input-oKdc5TXI.js";import"./use-is-mobile-D-nm0cUg.js";import"./Replay-DTIRTLQE.js";import"./KeyboardArrowDown-DO00PBjU.js";import"./KeyboardArrowUp-vWFZC2S8.js";import"./FieldError-CcsYC-WJ.js";import"./Form-DIfNPYw5.js";import"./Group-Gzg6apm7.js";import"./useFormReset-BWavgqNH.js";import"./useTextField-JbbFAe-P.js";import"./Divider-9TXFC1qq.js";import"./Remove-AIJjnghl.js";import"./Menu-Cskossdf.js";import"./MoreHoriz-BBHShMTs.js";import"./Checkbox-5XzYA7qh.js";import"./CheckIndeterminateSmall-D4gbDiSO.js";import"./useToggleState-DjFAOpsv.js";import"./TableOptions-R8f4oZ4H.js";import"./ViewColumn-D1Ij8fLV.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ho=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,ho as __namedExportsOrder,Do as default};
