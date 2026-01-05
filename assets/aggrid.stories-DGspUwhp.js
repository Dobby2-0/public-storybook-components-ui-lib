import{j as x}from"./iframe-DE__fsll.js";import"./DetailPageHeader-BQ9ut-Wx.js";import"./BulkActions-BtPQ61ab.js";import"./Canvas-B122RCkO.js";import"./DateTimePicker-Cyt1RwQ1.js";import"./DndList-D6czGi11.js";import"./ErrorPage-BdyTJBrI.js";import"./FileButton-mwd0dJWw.js";import"./FileIcon-CaloWBTV.js";import"./FileList-DrUgVRxF.js";import"./Form-CkS2cGId.js";import"./ImageCarousel-Bi44Ds0a.js";import"./ListFilters-C_S57ldb.js";import"./Loader-Dgt1NCEf.js";import"./NumberField-BfjDdj15.js";import"./PDFViewer-Do9ntmkH.js";import"./PDFViewerModal-CBeGPh32.js";import"./PhoneNumberField-WSbzwqQb.js";import{P as v}from"./Pill-DJx_nP_n.js";import"./RadioGroup-BJ6bRg2b.js";import"./RichTextEditor-BOKPf7bG.js";import"./Select-CMrbvY8b.js";import"./SelectBase-BhOytjIh.js";import"./Skeleton-LG4FyQai.js";import"./Switch-ARTi3JH7.js";import{A as B}from"./Ag-grid-table-DRySrfaG.js";import"./TextField-COzDZDQ8.js";import"./Toolbar-BLeyYV-4.js";import"./Tooltip-CG0qE1fu.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-swzn-ArZ.js";import"./utils-CJOnvcxP.js";import"./ButtonBase-CpMGeMwK.js";import"./Button-Cis6ftM6.js";import"./FocusScope-C-3mWcHq.js";import"./Text-BFA6QE2e.js";import"./usePress-CxAbq9k6.js";import"./index-Ck1VTmwL.js";import"./index-B1p23in3.js";import"./Button-t22Ri4Sz.js";import"./index-DCglHl2s.js";import"./RSPContexts-Bo0ROoLz.js";import"./Separator-CCL6C8Ru.js";import"./index-DFu8Eb9l.js";import"./VisuallyHidden-Cr1pH87Y.js";import"./ArrowBack-C9sGlJ41.js";import"./Label-CjSyovPz.js";import"./index-Bf3SQzM7.js";import"./Label-t560HrcO.js";import"./ErrorMessage-Cok-r2_j.js";import"./DeleteForever-dUvGfNMT.js";import"./variants-Dg7bcfzN.js";import"./ChevronBackward-D64p-7-6.js";import"./ChevronForward-B507lNr8.js";import"./Calendar-B3NHFppk.js";import"./sortable.esm-DQjx2LzB.js";import"./DragIndicator-CeC9Nper.js";import"./use-toast-03ys95tv.js";import"./Description-CuEZGUxP.js";import"./Zip-Do6TRHjk.js";import"./Download-55X34-hg.js";import"./Warning-CCWp_XI-.js";import"./index-C7CL5OQ7.js";import"./Modal-CdY-0WZU.js";import"./ComboBox-BIoJ6nxn.js";import"./SingleComboBox-D2oWAhtp.js";import"./ListBox-DTD1rxEo.js";import"./Check-CWRKmbrU.js";import"./ListBox-BOQrLKVE.js";import"./DragAndDrop-ncihsILM.js";import"./useLabel-BpPHlk3a.js";import"./Input-C9UBon8y.js";import"./use-is-mobile-19dZFxa_.js";import"./FilterListOff-C5ULNrTx.js";import"./KeyboardArrowDown-CIGxW-Zt.js";import"./KeyboardArrowUp-CTw5XfSm.js";import"./FieldError-BDgc5NlL.js";import"./Form-UhUhkH5U.js";import"./Group-BAnPj7Ly.js";import"./useFormReset-Bpciiqgr.js";import"./useTextField-GmcVgQB9.js";import"./Divider-DFooZ_B4.js";import"./Remove-C0c0Ub_D.js";import"./useToggleState-BSksLaNR.js";import"./Menu-CWInUEbB.js";import"./MoreHoriz-Yn3dd4eR.js";import"./Checkbox-4ZMlTMb-.js";import"./CheckIndeterminateSmall-D1A7JJ8v.js";import"./TableOptions-CM3TM-My.js";import"./ViewColumn-oK2nkZya.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
