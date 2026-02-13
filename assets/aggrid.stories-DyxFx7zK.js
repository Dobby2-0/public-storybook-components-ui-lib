import{j as x}from"./iframe-B9i1i_jP.js";import"./sha256-DxXwWffl.js";import"./DetailPageHeader-Dnj6gT5J.js";import"./BulkActions-EIk37sgq.js";import"./Canvas-FHxkLg5U.js";import"./Checkbox-Ba3hEZAS.js";import"./ComboBox-CO-bHjBk.js";import"./DateTimePicker-B0F4tRwM.js";import"./DndList-DCCc_5fx.js";import"./ErrorPage-BhaNGnxL.js";import"./FileButton-CzgvkvGp.js";import"./FileIcon-B4KDXGkF.js";import"./FileList-Bl91K578.js";import"./Form-BMSHXoMZ.js";import"./ImageCarousel-BAWUyqN7.js";import"./ListFilters-lzTJRUth.js";import"./Loader-DEOtInmN.js";import"./NumberField-CfCynjbq.js";import"./PDFViewer-D8epLXlX.js";import"./PDFViewerModal-DlTKGdRQ.js";import"./PhoneNumberField-Bo_AclCU.js";import{P as v}from"./Pill-qX-euCLy.js";import"./RadioGroup-B6bJt7xs.js";import"./RichTextEditor-CmSrcqjF.js";import"./Select-DsDxhLSK.js";import"./filter-persistence-Dum4pIbc.js";import"./Skeleton-CMiTx4BK.js";import"./Switch-DQfwYqb6.js";import{A as B}from"./Ag-grid-table-YFvT2LN0.js";import"./TextField-Be_08DB6.js";import"./Toolbar-B08DcOC-.js";import"./Tooltip-CW8Uqc4p.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-1AuD1aYe.js";import"./utils-COnSNdsl.js";import"./ButtonBase-BxH8a2Bv.js";import"./Button-DhVDtCMU.js";import"./FocusScope-BE93lXUJ.js";import"./Text-DWLitGgz.js";import"./usePress-Dgns3jNl.js";import"./index-Csh5slR5.js";import"./index-CrLGLku_.js";import"./Button-CO1paQYp.js";import"./index-DzortnFS.js";import"./RSPContexts-DA2lXq6u.js";import"./Separator-DnQOT92P.js";import"./index-DOjnVmw2.js";import"./VisuallyHidden-3J33mx8J.js";import"./ArrowBack-CA5XB1rC.js";import"./Label-CIadqGYr.js";import"./index-CHPf46pM.js";import"./Label-B397vG2u.js";import"./ErrorMessage-D-GZc-Sp.js";import"./DeleteForever-BMOniIE7.js";import"./Check-tjZQr-zW.js";import"./CheckIndeterminateSmall-dNt2LD9W.js";import"./Form-DWJuWKsi.js";import"./useToggleState-DBcKlUp1.js";import"./useFormReset-DqFL5vAo.js";import"./SingleComboBox-DPIzhnXe.js";import"./ListBox-B1prVJG_.js";import"./ListBox-D_6FCDxb.js";import"./DragAndDrop-TBpfYLRu.js";import"./useLabel-BJM0x48N.js";import"./Input-DTmvkDPv.js";import"./variants-BaDt2D4X.js";import"./ChevronBackward-BjMX8ise.js";import"./ChevronForward-DOw_KwHm.js";import"./Calendar-CgilH4JB.js";import"./sortable.esm-BzUTfCgZ.js";import"./DragIndicator-4OQ7CStb.js";import"./use-toast-CI7lIdJI.js";import"./Description-CXgU7x-9.js";import"./Zip-BELay-7e.js";import"./Download-DN1eMC9Y.js";import"./Warning-DhczxZfO.js";import"./index-C7CL5OQ7.js";import"./Modal-DnqQ88ta.js";import"./use-is-mobile-DzUAWhAB.js";import"./Replay-DFEVkzKr.js";import"./KeyboardArrowDown-DikMXYmL.js";import"./KeyboardArrowUp-DxrT-h0M.js";import"./FieldError-oORKfAmJ.js";import"./Group-C09FUsF2.js";import"./useTextField-CLcA1-ak.js";import"./Divider-COYJ1cX0.js";import"./Remove-CThLAP-T.js";import"./Menu-DaIJMbNo.js";import"./MoreHoriz-B8IFdw9T.js";import"./TableOptions-BKTAz4fl.js";import"./ViewColumn-DmNseUjO.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
