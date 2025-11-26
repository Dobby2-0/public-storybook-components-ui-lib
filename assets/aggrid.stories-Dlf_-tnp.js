import{j as x}from"./iframe-DzHgz_R0.js";import"./DetailPageHeader-BQfgavnz.js";import"./BulkActions-DquKqziy.js";import"./Canvas-Bar10gMk.js";import"./DateTimePicker-C7qlJn0V.js";import"./DndList-kpu5k95c.js";import"./ErrorPage-D_Recvlr.js";import"./FileButton-CuJAfNf9.js";import"./FileIcon-CCZPMIYl.js";import"./FileList-ej_HjYug.js";import"./Form-CKGphbyU.js";import"./ListFilters-D1y-Jxn8.js";import"./Loader-CoXJRd0A.js";import"./NumberField-CGvrWjIb.js";import"./PDFViewer-DSmGUfsF.js";import{P as v}from"./Pill-suN6DgqO.js";import"./RadioGroup-CNc9SIQ3.js";import"./RichTextEditor-CtDF-kOn.js";import"./Select-DJyE7P-L.js";import"./SelectBase-Ct_1VDYd.js";import"./Skeleton-CLFh2YuW.js";import{A as B}from"./Ag-grid-table-DobEquF6.js";import"./TextField-Du84W1vA.js";import"./Toolbar-Dl51RXsW.js";import"./Tooltip-BuHsfSag.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BgibkKDI.js";import"./utils-BNSxeWSS.js";import"./ButtonBase-CmRWFr30.js";import"./Button-CZJRwUcQ.js";import"./FocusScope-ufh2Eq3k.js";import"./Hidden-DDBldYzx.js";import"./usePress-B28ZCfrq.js";import"./index-lNHsNeNb.js";import"./index-Coa52mpR.js";import"./Button-BcX9VdUe.js";import"./index-O5q8PLHp.js";import"./RSPContexts--LViVSKW.js";import"./Separator-BE4fQ99B.js";import"./Text-D5t9Swb1.js";import"./VisuallyHidden-CV11xDJs.js";import"./ArrowBack-QcMwPyFa.js";import"./Label-nAI03wu_.js";import"./index-BW8A16l8.js";import"./ErrorMessage-C64kOCuV.js";import"./DeleteForever-VD0uVTB-.js";import"./variants-C0JVJo5C.js";import"./ChevronBackward-DwXnYTbC.js";import"./ChevronForward-BGUP2Phi.js";import"./Calendar-we7H2x9s.js";import"./sortable.esm-usWyrmhG.js";import"./DragIndicator-DQahK4SA.js";import"./use-toast-DuMGMcvx.js";import"./Description-CZZM16xm.js";import"./Zip-92K-2GlE.js";import"./Download-C0zfS6ND.js";import"./Warning-C9_EW3OC.js";import"./ComboBox-BEMwvy3t.js";import"./ListBox-DLZtGzZh.js";import"./Check-CZgIq8UQ.js";import"./ListBox-CBJZICF7.js";import"./DragAndDrop-CyMDA0gp.js";import"./useLabel-D1GGIt6g.js";import"./Input-NBZ5TvP8.js";import"./Modal-DUaf4VRM.js";import"./use-is-mobile-tUkq6omt.js";import"./FilterListOff-_ANg6NKJ.js";import"./KeyboardArrowDown-Cbo3hghj.js";import"./KeyboardArrowUp-Dn3T4U-d.js";import"./FieldError-COL4fk0c.js";import"./Form-Ci6IBD99.js";import"./Group-DBl90NKo.js";import"./useFormReset-D-DONvMH.js";import"./useTextField-y4n13uhl.js";import"./Divider-DImWL5-0.js";import"./Remove-DQnz6lem.js";import"./Menu-CL1oBQP6.js";import"./MoreHoriz-CBAVm1jz.js";import"./Checkbox-DX-MbrEm.js";import"./CheckIndeterminateSmall-BePvwkTo.js";import"./useToggleState-Bq0SPpDj.js";import"./TableOptions-CveSp4qv.js";import"./ViewColumn-BICKNp-2.js";const uo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const go=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,go as __namedExportsOrder,uo as default};
