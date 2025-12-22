import{j as x}from"./iframe-Bbdio10U.js";import"./DetailPageHeader-R-E7clMs.js";import"./BulkActions-BMoCQUo7.js";import"./Canvas-CMVIc8S_.js";import"./Checkbox-hP_izSef.js";import"./ComboBox-CzK3V0Ao.js";import"./DateTimePicker-DKgkghaI.js";import"./DndList-CbO0EOLm.js";import"./ErrorPage-p0VQ3HHs.js";import"./FileButton-BquR-pei.js";import"./FileIcon-GM7mP-zs.js";import"./FileList-Dx0veVyg.js";import"./Form-CjxJZ510.js";import"./ImageCarousel-CkGJnCzG.js";import"./ListFilters-CgTXZiWW.js";import"./Loader-C4FpJQGJ.js";import"./NumberField-BY2iGDTk.js";import"./PDFViewer-Cd7smK_K.js";import"./PDFViewerModal-BR0vD9xv.js";import"./PhoneNumberField-H1Zxm6ux.js";import{P as v}from"./Pill-D-M-T70d.js";import"./RadioGroup-CbQ5nF8Y.js";import"./RichTextEditor-Cw3b0H7g.js";import"./Select-CoUfIXO-.js";import"./SelectBase-DYfrbQiw.js";import"./Skeleton-CfWb9nJ-.js";import"./Switch-zh7IWQin.js";import{A as B}from"./Ag-grid-table-BGPMcH-8.js";import"./TextField-DMiglXuS.js";import"./Toolbar-BnrUOiXw.js";import"./Tooltip-BlJMOe_l.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CBwY49X9.js";import"./utils-o0DbLONt.js";import"./ButtonBase-B29ZS-UH.js";import"./Button-C9YWg7pM.js";import"./FocusScope-BgSM8is-.js";import"./Text-DX01AUPE.js";import"./usePress-GIUfo9An.js";import"./index-Du3hkKeC.js";import"./index-DwYOOHiY.js";import"./Button-BhQkNEvc.js";import"./index-DL8v6lSA.js";import"./RSPContexts-D-HQWkis.js";import"./Separator-ChYVyVRi.js";import"./index-BlYnjWZJ.js";import"./VisuallyHidden-CrDW3dOS.js";import"./ArrowBack-C9MALnqD.js";import"./Label-BR0lLTfL.js";import"./index-q07NxN1o.js";import"./Label-CKTyyX1s.js";import"./ErrorMessage-CaKHk9ej.js";import"./DeleteForever-CJjQp4E3.js";import"./Check-B5_CoLL3.js";import"./CheckIndeterminateSmall-D6ODnkqo.js";import"./Form-Co5SPek8.js";import"./useToggleState-OJ56tcxg.js";import"./useFormReset-BHS4eVja.js";import"./SingleComboBox-cy-bz4xK.js";import"./ListBox-DoGwqi9i.js";import"./ListBox-n_kiAAg6.js";import"./DragAndDrop-9WYbNBdU.js";import"./useLabel-Dm-iHBS5.js";import"./Input-DkKhp2RW.js";import"./variants-Crbjhq7L.js";import"./ChevronBackward-DFvY3GkP.js";import"./ChevronForward-DgNgdPb_.js";import"./Calendar-4D6rP63N.js";import"./sortable.esm-c9NW7pbx.js";import"./DragIndicator-xWg9L7fl.js";import"./use-toast-DYQ4vFbH.js";import"./Description-6lbLOR7T.js";import"./Zip-C1f3S0p_.js";import"./Download-DXq9AfDR.js";import"./Warning-C1ZjetP8.js";import"./index-C7CL5OQ7.js";import"./Modal-B1IQAUU-.js";import"./use-is-mobile-DCX25eYw.js";import"./FilterListOff-Dx94ph3O.js";import"./KeyboardArrowDown-CfkIcUBq.js";import"./KeyboardArrowUp-CmTI3aST.js";import"./FieldError-7QD6bG-F.js";import"./Group-Db_KIEbq.js";import"./useTextField-DaORNT_W.js";import"./Divider-CHRlRuDa.js";import"./Remove-CMPsyI0I.js";import"./Menu-8PdgJadc.js";import"./MoreHoriz-C1JfjC8G.js";import"./TableOptions-DrsoNG0H.js";import"./ViewColumn-Cm4BqtVW.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
