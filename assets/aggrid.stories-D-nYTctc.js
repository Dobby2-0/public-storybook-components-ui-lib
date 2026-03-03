import{j as x}from"./iframe-DjqpNQmQ.js";import"./sha256-h75IhSwW.js";import"./SwipeableActionBlock-CvkI6Zwl.js";import"./BulkActions-JvmQTzOT.js";import"./Canvas-CTnmSjMn.js";import"./DateTimePicker-Jr9H8xs-.js";import"./DndList-Cs_Xthnc.js";import"./ErrorPage-B4uCsZxc.js";import"./FileButton-DEy-CK7d.js";import"./FileIcon-CAI4f-Uq.js";import"./FileList-CMLCe4xb.js";import"./Form-BtezNKTS.js";import"./ImageCarousel-Cq2yUeCR.js";import"./use-dobby-context-ScT_ejLK.js";import"./Loader-BbmFoWOB.js";import"./NumberField-BL0qZfbL.js";import"./PDFViewer-Diu_Gaql.js";import"./PDFViewerModal-CEjKnD29.js";import"./PhoneNumberField-BoGmglL0.js";import{P as v}from"./Pill-hYsr5kbZ.js";import"./RadioGroup-BGgypnp8.js";import"./RichTextEditor-D0B7IZ1H.js";import"./Select-ia5QBNSq.js";import"./SelectBase-BGr-7CF6.js";import"./Skeleton-BQb-Vdci.js";import"./Switch-Dt9xs3xf.js";import{A as B}from"./Ag-grid-table-D1rhmbdM.js";import"./TextField-BHTdZyu0.js";import"./Toolbar-54u5Glw7.js";import"./Tooltip-CVvQKYzB.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DZ_aiBhW.js";import"./utils-AsuAOT3f.js";import"./ButtonBase-CgRWnP-2.js";import"./Button-BUzQdb-Z.js";import"./FocusScope-DVkpFk-T.js";import"./Text-1vnTBw6f.js";import"./usePress-CXnalX6N.js";import"./index-DnQNdg3I.js";import"./index-D65Ovpds.js";import"./Button-DKHSl1RS.js";import"./index-CJfLL61d.js";import"./RSPContexts-CWNtXmO-.js";import"./Separator-CaS9j1h9.js";import"./index-UKgaxhI3.js";import"./VisuallyHidden-Brsj05xq.js";import"./ArrowBack-BW2KB5iU.js";import"./Label-CiIJCF7d.js";import"./index-BZafFY91.js";import"./Label-QirXArnd.js";import"./ErrorMessage-a-h4rWIh.js";import"./DeleteForever-DjK5Rja9.js";import"./variants-CTYiPEro.js";import"./ChevronBackward-DJgD5YzS.js";import"./ChevronForward-BROd9BCM.js";import"./Calendar-8OitCfkv.js";import"./sortable.esm-vkGUcNXz.js";import"./DragIndicator-j3UDLQIa.js";import"./use-toast-_juQSvtC.js";import"./Description-DphiJp6E.js";import"./Zip-CE_UtNkE.js";import"./Download-D_bqSbiM.js";import"./Warning-BVkPL6sq.js";import"./index-C7CL5OQ7.js";import"./Modal-3t1Iezmm.js";import"./ComboBox-DwRE2N0a.js";import"./SingleComboBox-aXi3HnuD.js";import"./ListBox-NG11Z0sG.js";import"./Check-DhLhA5wy.js";import"./ListBox-DSFMsrDO.js";import"./DragAndDrop-DHI3lTqb.js";import"./useLabel-BLVUAkvy.js";import"./Input--LXhszRQ.js";import"./use-is-mobile-DKrJkOas.js";import"./Replay-CKHqK_VG.js";import"./KeyboardArrowDown-CoO-TRF7.js";import"./KeyboardArrowUp-BJsZ-p2-.js";import"./FieldError-DYRVGx6R.js";import"./Form-p96nfRNs.js";import"./Group-BV39CLuR.js";import"./useFormReset-CLsxC9Rm.js";import"./useTextField-unVmVfRL.js";import"./Divider-amj9oK2P.js";import"./Remove-qpMJjtdQ.js";import"./useToggleState-CJeWZePG.js";import"./Menu-O3lR-upv.js";import"./MoreHoriz-gZ5Jo3P6.js";import"./Checkbox-e4z6GgGQ.js";import"./CheckIndeterminateSmall-CRVr72eF.js";import"./TableOptions-D993QuY9.js";import"./ViewColumn-C3p0lYXb.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
