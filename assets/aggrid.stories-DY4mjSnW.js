import{j as x}from"./iframe-XN5PUdo-.js";import"./DetailPageHeader-CZ7Fb6jZ.js";import"./BulkActions-uoyoy0lF.js";import"./Canvas-CUlk-DIf.js";import"./ComboBox-C8o7t42p.js";import"./DateTimePicker-Cquopn59.js";import"./DndList-DTbsqDd_.js";import"./ErrorPage-QiZZROct.js";import"./FileButton-CkcWIg_5.js";import"./FileIcon-ClQ65INy.js";import"./FileList-D6Uk55G_.js";import"./Form-D695hQzB.js";import"./ImageCarousel-BUeKOZJT.js";import"./ListFilters-BGESfptT.js";import"./Loader-BehVFnXx.js";import"./NumberField-BjOz0cwt.js";import"./PDFViewer-s5rQ47J5.js";import"./PDFViewerModal-WfAj7ox9.js";import{P as v}from"./Pill-B8xuqL5P.js";import"./RadioGroup-DXPn6Dn2.js";import"./RichTextEditor-CeeKLQT8.js";import"./Select-Dahit5hr.js";import"./SelectBase-h0OwXfio.js";import"./Skeleton-CiMuSgBn.js";import"./Switch-CHpgyDfW.js";import{A as B}from"./Ag-grid-table-D3P4pnV4.js";import"./TextField-CUVhw9qH.js";import"./Toolbar-CyeiflHy.js";import"./Tooltip-C2X8H7tG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BP41wML_.js";import"./utils-Bzka9lbN.js";import"./ButtonBase-vWONjdp0.js";import"./Button-GWZf1c_M.js";import"./FocusScope-VZEF-ZvW.js";import"./Text-CpJlg3nO.js";import"./usePress-BjHcyIvs.js";import"./index-YTM8xuB5.js";import"./index-DguLE60C.js";import"./Button-DWYSm-gN.js";import"./index-Cvpg_kN6.js";import"./RSPContexts-BRB36KVP.js";import"./Separator-DGKtewIz.js";import"./index-DBjqw2XV.js";import"./VisuallyHidden-CzSagqXo.js";import"./ArrowBack-DMEcMsOI.js";import"./Label-YpVhxTSR.js";import"./index-DC6ydhDU.js";import"./Label-CceXNFpS.js";import"./ErrorMessage-tJgT2o2b.js";import"./DeleteForever--X8Xv1gD.js";import"./ListBox-C9qeEWg2.js";import"./Check-IDU531yo.js";import"./ListBox-DxL9n11H.js";import"./DragAndDrop-D8D0v0SF.js";import"./useLabel-BzR44BkW.js";import"./Input-fbADgTkx.js";import"./variants-BJS8SB37.js";import"./ChevronBackward-F43oc6KN.js";import"./ChevronForward-D4qn85sY.js";import"./Calendar-DyaqJvet.js";import"./sortable.esm-CLUC0tTf.js";import"./DragIndicator-Df6Ld5Md.js";import"./use-toast-DxWNlgQP.js";import"./Description-B2tkaQZ1.js";import"./Zip-C3hz1SYM.js";import"./Download-DtlDl-zH.js";import"./Warning-Y0t-jHbO.js";import"./Modal-n2lhklzv.js";import"./use-is-mobile-DVzLMyfp.js";import"./FilterListOff-je7oKhik.js";import"./KeyboardArrowDown-DEpKJQ2c.js";import"./KeyboardArrowUp-DJpkHGyE.js";import"./FieldError-CexR7SnA.js";import"./Form-BI6liC2Z.js";import"./Group-BMq6SCOz.js";import"./useFormReset-B2pTTz8n.js";import"./useTextField-Bb2p4L6n.js";import"./Divider-Jco4s16_.js";import"./Remove-BUtBRBOt.js";import"./useToggleState-BSR1tQpq.js";import"./Menu-DPqqzNH1.js";import"./MoreHoriz-BGqPKekt.js";import"./Checkbox-CVD9OBxT.js";import"./CheckIndeterminateSmall-BSc8ty3R.js";import"./TableOptions-BtR40QZS.js";import"./ViewColumn-DigtSvae.js";const So={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const bo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,bo as __namedExportsOrder,So as default};
