import{j as x}from"./iframe-BCvx5aIw.js";import"./sha256-D06PZJCe.js";import"./SwipeableActionBlock-DKYx6VJi.js";import"./BulkActions-8w2OhxDK.js";import"./Button-BSFY9fVT.js";import"./IconButton-C2bEEDI6.js";import"./Canvas-CG7COLWq.js";import"./Checkbox-Cf-aWq7z.js";import"./ComboBox-CtNZBuSR.js";import"./DateTimePicker-50ngKIwj.js";import"./DndList-B2yyyrgh.js";import"./ErrorPage-Bq1ArWe3.js";import"./FileButton-Dq5w4H4K.js";import"./FileIcon-CMGknZbS.js";import"./FileList-D_Hwfa0y.js";import"./Form-DZIcutLN.js";import"./ImageCarousel-DKaVHpv4.js";import"./use-dobby-context-CgVPRdoH.js";import"./Loader-DpWblGY1.js";import"./NumberField-ypN7K51o.js";import"./PDFViewer-BnBybO4E.js";import"./PDFViewerModal-BsqWRj0K.js";import"./PhoneNumberField-ZfF7XQr6.js";import{P as v}from"./Pill-DpPdkJjw.js";import"./RadioGroup-BO1jCiox.js";import"./RichTextEditor-DWPBIZPL.js";import"./Select-Cy0m9gdW.js";import"./SelectBase-Le4Pmjiv.js";import"./Skeleton-DmGOozBc.js";import"./Switch-BS87FgsE.js";import{A as B}from"./Ag-grid-table-BZYLT-iZ.js";import"./TextField-BRVqlgQT.js";import"./Toolbar-DOtPwb__.js";import"./Tooltip-D-8X45XJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ChnMGnWF.js";import"./utils-DT55uSEz.js";import"./Button-C0e0lcau.js";import"./FocusScope-B5NpOBFv.js";import"./Text-CmDC0Fcx.js";import"./usePress-FVxBmJ3a.js";import"./index-CV_sOKXw.js";import"./index-DOmqlDl7.js";import"./RSPContexts-CDt80yYI.js";import"./Separator-DLrh4vZm.js";import"./index-DTcX34cl.js";import"./VisuallyHidden-CO0T0OMH.js";import"./ArrowBack-wRqYQ5_C.js";import"./ButtonBase-DrZK1uMj.js";import"./Label-Dl_LIg0c.js";import"./index-04bXVge4.js";import"./Label-0n7RcqQx.js";import"./ErrorMessage-CLiL9736.js";import"./DeleteForever-y-b4Cjqn.js";import"./Check-ByuJ0HYf.js";import"./CheckIndeterminateSmall-CFCFRjfA.js";import"./Form-BWRnBO_9.js";import"./useToggleState-DS2LZDdM.js";import"./useFormReset-CZmyIX8L.js";import"./SingleComboBox-C3DXQxSO.js";import"./ListBox-GNdrQN2B.js";import"./ListBox-DLrH3TOV.js";import"./DragAndDrop-BY2nA29y.js";import"./useLabel-3dDsEzBm.js";import"./Input-CeixJ7Hd.js";import"./variants-BFTN77EB.js";import"./ChevronBackward-DWWPZS4i.js";import"./ChevronForward-myCD3y13.js";import"./Calendar-CVpICZ-C.js";import"./sortable.esm-YO7BH1_a.js";import"./DragIndicator-Bs3YPBjx.js";import"./use-toast-C-l9oKRu.js";import"./Description-BG9yNQUr.js";import"./Zip-cW3kILVE.js";import"./Download-DvtZia6D.js";import"./Warning-D6itRzX-.js";import"./index-C7CL5OQ7.js";import"./Modal-DXVYfh5D.js";import"./use-is-mobile-DDMX-ek2.js";import"./Replay-Crvhhsv8.js";import"./KeyboardArrowDown-Co9IMZ31.js";import"./KeyboardArrowUp-C4oqs0O1.js";import"./FieldError-jcW9qPng.js";import"./Group-BnqbOEU3.js";import"./useTextField-D-Gq8A37.js";import"./Divider-BlFkcaYs.js";import"./Remove-D8HySIHx.js";import"./Menu-CcseoNop.js";import"./MoreHoriz-B75DV1_K.js";import"./TableOptions-C2EXkHZL.js";import"./ViewColumn-m06qLPF4.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
