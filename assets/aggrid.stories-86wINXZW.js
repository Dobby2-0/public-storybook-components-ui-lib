import{j as x}from"./iframe-o0TYpcWS.js";import{A as v}from"./DetailPageHeader-rtMuMOHL.js";import"./BulkActions-BXb5Why3.js";import"./Canvas-n2dVIkiU.js";import"./DateTimePicker-huVrJ25d.js";import"./DndList-DHQzoyMT.js";import"./ErrorPage-BOq0wq8f.js";import"./FileButton-eARSld0F.js";import"./FileIcon-XXqlWySW.js";import"./FileList-CFZJgF-7.js";import"./ListFilters-B7OocauM.js";import"./Loader-i3isxEFD.js";import"./NumberField-Cg-C_Pjj.js";import"./PDFViewer-gdMCmlA6.js";import{P as B}from"./Pill-B73ExIIY.js";import"./RadioGroup-DS7_ZdxV.js";import"./Select-BqfP0XWE.js";import"./SelectBase-C8Xj5dzQ.js";import"./TextField-CLOYN05q.js";import"./Toolbar-B-S-McHw.js";import"./Tooltip-D1POKIAR.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Ci1zFG8v.js";import"./utils-6Xoa8S3p.js";import"./ButtonBase-DcbSxK8S.js";import"./Button-BaNNE5GU.js";import"./FocusScope-B_-Ik5Fg.js";import"./Hidden-BjkS2BD-.js";import"./usePress-BUFvZDNn.js";import"./index-DDtjUNIE.js";import"./index-DCtvyVTM.js";import"./Label-CK66xBx8.js";import"./index-jXBKBSNL.js";import"./ErrorMessage-BzFTssNs.js";import"./Button-DfEfUVSQ.js";import"./index-CqQ0jQ-Y.js";import"./RSPContexts-LFP89PNM.js";import"./Separator-D56Kdn_n.js";import"./Text-BC0OtlUB.js";import"./VisuallyHidden-CbRbWld6.js";import"./Menu-Bl9TuBzG.js";import"./Check-BYiamBXn.js";import"./ChevronForward-BBejsAPW.js";import"./TableOutlined-CefJGswV.js";import"./Modal-_47F_byR.js";import"./MoreHoriz-WuWcNvo1.js";import"./Checkbox-D7kpy-sa.js";import"./CheckIndeterminateSmall-CfT8RcfJ.js";import"./Form-i6gWJMAP.js";import"./useToggleState-CaL_uip-.js";import"./useFormReset-BDyZ-gVy.js";import"./TableOptions-f4mIwG7O.js";import"./sortable.esm-B2OmN7y3.js";import"./DragIndicator-CipuXU2s.js";import"./ViewColumn-DtFJOk77.js";import"./KeyboardArrowDown-CkRSbWDm.js";import"./Search-XwsFzk4f.js";import"./Underline-DhyW4zd4.js";import"./ArrowBack-DbEvdLXc.js";import"./DeleteForever-B2CafkgA.js";import"./variants-CD0RZY28.js";import"./ChevronBackward-D1Ln5-If.js";import"./Calendar-BW3a4Nva.js";import"./use-toast-mL_OaAqJ.js";import"./Description-Drz7Yl9f.js";import"./Zip-D6JoXvbe.js";import"./Download-CoMBjWqC.js";import"./Warning-Cb4D5G73.js";import"./ComboBox-MxOkj6YK.js";import"./ListBox-2B5CRBgc.js";import"./ListBox-C6ytGWTy.js";import"./DragAndDrop-CJfQ0BzF.js";import"./useLabel-V52eCJNr.js";import"./Input-CO3Wmnwo.js";import"./use-is-mobile-DHc96Y8z.js";import"./FilterListOff-D863tJHa.js";import"./KeyboardArrowUp-6JffRifn.js";import"./FieldError-UuFXJmBk.js";import"./Group-Bg-NoxWm.js";import"./useTextField-Br7N04WQ.js";import"./Divider-BHwcnYm2.js";import"./Remove-CgnvQDwT.js";const po={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const uo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,uo as __namedExportsOrder,po as default};
