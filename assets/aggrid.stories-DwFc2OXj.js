import{j as x}from"./iframe-6lxesJXe.js";import"./sha256-Bz9xIbUs.js";import"./DetailPageHeader-eQRGF2Mk.js";import"./BulkActions-DF7-WIV9.js";import"./Canvas-4t2pIX5R.js";import"./Checkbox-D2ih2pEU.js";import"./DateTimePicker-CyjUCMME.js";import"./DndList-CF0tlmVd.js";import"./ErrorPage-UnmYWBt4.js";import"./FileButton-npqjCAsr.js";import"./FileIcon-C7MS5hvX.js";import"./FileList-BsbHAgE9.js";import"./Form-DTAJMwJn.js";import"./ImageCarousel-BEnX1y1p.js";import"./ListFilters-D6pQjchJ.js";import"./Loader-Crey3ZaJ.js";import"./NumberField-DQvIF65h.js";import"./PDFViewer-BkyT36hD.js";import"./PDFViewerModal-DzIUKM4E.js";import"./PhoneNumberField-Z23bxmSF.js";import{P as v}from"./Pill-CwRBKPJM.js";import"./RichTextEditor-CfZpP6ka.js";import"./Select-UMLzof6U.js";import"./filter-persistence-BVkxVPo0.js";import"./Skeleton-BvvspPXp.js";import"./Switch-C4qvWZye.js";import{A as B}from"./Ag-grid-table-BED5kgr3.js";import"./TextField-D_XZrTO3.js";import"./Toolbar-zufPfyVz.js";import"./Tooltip-DUX6tjGG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-q1E0fQVA.js";import"./utils-D5cTmwLp.js";import"./ButtonBase-B7nphERO.js";import"./Button-RROMk7yE.js";import"./FocusScope-B6jOn45o.js";import"./Text-xq6GtQv3.js";import"./usePress-Bw_1WlNE.js";import"./index-IT_DEipb.js";import"./index-Bk40pPDF.js";import"./Button-CMIcWwz4.js";import"./index-CggAXAEJ.js";import"./RSPContexts-nN19f7_H.js";import"./Separator-BdI5KzeN.js";import"./index-nGXsvdJd.js";import"./VisuallyHidden-D_P_uBEx.js";import"./ArrowBack-LJeqFBcm.js";import"./Label-CxRfc1N0.js";import"./index-BWMWNlZX.js";import"./Label-DzJolZWC.js";import"./ErrorMessage-Cbwmgazr.js";import"./DeleteForever-CD_xFbKA.js";import"./Check-Dbf1x4v0.js";import"./CheckIndeterminateSmall-onsIgO5z.js";import"./Form-BcmdTddz.js";import"./useToggleState-B44n4vep.js";import"./useFormReset-BhrfQh01.js";import"./variants-B4uJD5Oj.js";import"./ChevronBackward-DeHVRZlM.js";import"./ChevronForward-BmlsAFjK.js";import"./Calendar-CzHvQdr2.js";import"./sortable.esm-C1JNqfKo.js";import"./DragIndicator-DD0ysBFl.js";import"./use-toast-CM23hM3y.js";import"./Description-B7h6bNXH.js";import"./Zip-D09KfSJC.js";import"./Download-BkhR4za7.js";import"./Warning-BgoIRhN1.js";import"./index-C7CL5OQ7.js";import"./Modal-CxS23DwT.js";import"./ComboBox-DrKMWSMI.js";import"./SingleComboBox-DrMlb69M.js";import"./ListBox-Cm062_3Q.js";import"./ListBox-DDjcw90Z.js";import"./DragAndDrop-B9oOqKRL.js";import"./useLabel-DqPSay50.js";import"./Input-D3gn2LH4.js";import"./use-is-mobile-CtzYJFCB.js";import"./Replay-BpvLdI02.js";import"./KeyboardArrowDown-CNiPFV1V.js";import"./KeyboardArrowUp-eKH4pzfD.js";import"./FieldError-B4qAHhAk.js";import"./Group-C78Axup6.js";import"./useTextField-BDMi0L_8.js";import"./Divider-NPAztDRL.js";import"./Remove-BLepmGu2.js";import"./Menu-C00_e2c1.js";import"./MoreHoriz-DaEjspbV.js";import"./TableOptions-D-_BlEyk.js";import"./ViewColumn-7XW52Kqe.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
