import{j as x}from"./iframe-DxqB9boC.js";import"./DetailPageHeader-B6umU0_L.js";import"./BulkActions-DjMYUqNt.js";import"./Canvas-Ii81fsCu.js";import"./DateTimePicker-B-tbNxTW.js";import"./DndList-u-q1WpgV.js";import"./ErrorPage-LL6ZZq3I.js";import"./FileButton---qcJWht.js";import"./FileIcon-Buveu5Z8.js";import"./FileList-ZPvWsEv0.js";import"./Form-BPv952fH.js";import"./ImageCarousel-C1Qykl4u.js";import"./ListFilters-C0yvNark.js";import"./Loader-BhEu2spN.js";import"./NumberField-D3kD-uKS.js";import"./PDFViewer-BBK-fJ14.js";import"./PDFViewerModal-vMwhHslB.js";import{P as v}from"./Pill-aofiBUSp.js";import"./RadioGroup-BNEywHDJ.js";import"./RichTextEditor-CYzv6c2I.js";import"./Select-CjjI2z27.js";import"./SelectBase-e8haZN_B.js";import"./Skeleton-CuSJk02M.js";import{A as B}from"./Ag-grid-table-CQXQZx8a.js";import"./TextField-CNXY365w.js";import"./Toolbar-DixYAG92.js";import"./Tooltip-DzBZV5GE.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BDhE7lLp.js";import"./utils-BZoaywRP.js";import"./ButtonBase-C25o3bVg.js";import"./Button-BtF1-V-Y.js";import"./FocusScope-D7q5W6Y8.js";import"./Text-Ct9ZvIUR.js";import"./usePress-DnV8oE5s.js";import"./index-CK9kbaq8.js";import"./index-DxaqE9ox.js";import"./Button-o3sWl_8u.js";import"./index-Di_7lRh5.js";import"./RSPContexts-CdKmEmBz.js";import"./Separator-FUyGumNk.js";import"./index-B9LOX3vE.js";import"./VisuallyHidden-DAEn6H89.js";import"./ArrowBack-Dkjd6Dxm.js";import"./Label-437p-tUb.js";import"./index-BKqV3H35.js";import"./Label-DZUabfaG.js";import"./ErrorMessage-7BPv6e7h.js";import"./DeleteForever-DJkKsAzv.js";import"./variants-DPxRw7vR.js";import"./ChevronBackward-DHU_Faid.js";import"./ChevronForward-jKDmmmPQ.js";import"./Calendar-Bz0Rc8cZ.js";import"./sortable.esm-BDkEREVl.js";import"./DragIndicator-CQdn54nG.js";import"./use-toast-ByHb8yQj.js";import"./Description-CAbCwkrv.js";import"./Zip-IAcBXQc7.js";import"./Download-1SHnHwr3.js";import"./Warning-CCM5z0zB.js";import"./Modal-mSz6SvSA.js";import"./ComboBox-CoFh90Hq.js";import"./ListBox-CS_KHVbe.js";import"./Check-pl2AuQkJ.js";import"./ListBox-Dri4MaI7.js";import"./DragAndDrop-JFL9m-z7.js";import"./useLabel-BQM4SikJ.js";import"./Input-SAGCCiTu.js";import"./use-is-mobile-nZhqyBxM.js";import"./FilterListOff-BvSliELd.js";import"./KeyboardArrowDown-AvfzWT8M.js";import"./KeyboardArrowUp-BX5hZTIF.js";import"./FieldError-B4A-GxZC.js";import"./Form-C0Oc1coY.js";import"./Group-CXN2ynNl.js";import"./useFormReset-TWeJgFen.js";import"./useTextField-BulLtujC.js";import"./Divider-DzHTyTOx.js";import"./Remove-CX0m2xw7.js";import"./Menu-D990w18Z.js";import"./MoreHoriz-09WDooES.js";import"./Checkbox-Bdax8M5c.js";import"./CheckIndeterminateSmall-ihGUtheH.js";import"./useToggleState-DRyC_N8K.js";import"./TableOptions-BcSrm-9g.js";import"./ViewColumn-eVWTpvag.js";const fo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const So=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,So as __namedExportsOrder,fo as default};
