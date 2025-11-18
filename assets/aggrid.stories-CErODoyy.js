import{j as x}from"./iframe-7Nw882py.js";import{A as v}from"./DetailPageHeader-C6tZ9w7y.js";import"./BulkActions-bUuFeGWJ.js";import"./Canvas-DkasQlpv.js";import"./DateTimePicker-D__H0fOO.js";import"./DndList-0dk8MdeT.js";import"./ErrorPage-0YFzzYKt.js";import"./FileButton-YSB3N-Fb.js";import"./FileIcon-DWp7dFP7.js";import"./FileList-CHIYd2rS.js";import"./ListFilters-bxmabpkZ.js";import"./Loader-Cgo6IMUC.js";import"./NumberField-CDclLUzK.js";import"./PDFViewer-Ch0edj3B.js";import{P as B}from"./Pill-BWY8YX_7.js";import"./RadioGroup-Bnsaitzb.js";import"./SelectBase-B9h6UP-o.js";import"./Skeleton-CmQmWkTG.js";import"./Toolbar-QaFVR2z-.js";import"./Tooltip-BiYD_zex.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-B24tITV1.js";import"./utils-9iagpOxg.js";import"./ButtonBase-B1gHSSi2.js";import"./Button-BkIRXc69.js";import"./FocusScope-BCwe-NO5.js";import"./Hidden-C2VD6tQv.js";import"./usePress-BLFxd6qu.js";import"./index-D9KqQCNK.js";import"./index-B1fTOt-b.js";import"./Label-BeRP0jQD.js";import"./index-CdXzJg40.js";import"./ErrorMessage-BXdWl9-K.js";import"./Button-DAIPiDKF.js";import"./index-clrZ1K3m.js";import"./RSPContexts-DcEn7IJ0.js";import"./Separator-BQuQ-gGr.js";import"./Text-OKTTPcry.js";import"./VisuallyHidden-BTVJqNYp.js";import"./Menu-WDAYyWUW.js";import"./Check-C6PhEKVN.js";import"./ChevronForward-Cc1jZ9gi.js";import"./TableOutlined-xLAbkDYG.js";import"./Modal-DqR5fZwa.js";import"./MoreHoriz-D6WHhXSV.js";import"./Checkbox-SJWtcyYl.js";import"./CheckIndeterminateSmall-CvwuF2UN.js";import"./Form-CQO96iQp.js";import"./useToggleState-CD1JY0gB.js";import"./useFormReset-BcBe1mL-.js";import"./TableOptions-DrvAxXUl.js";import"./sortable.esm-D6IbgN8B.js";import"./DragIndicator-BMXRH4N_.js";import"./ViewColumn-ymB4RlUM.js";import"./TextField-DZGho2LB.js";import"./Input-CE1lOgdF.js";import"./FieldError-DsrimtWL.js";import"./useLabel-B1ewOS0U.js";import"./Group-B_Kpqd5L.js";import"./useTextField-RJITynIQ.js";import"./KeyboardArrowDown-903MccPh.js";import"./Search-BXeHG2Z0.js";import"./Underline-DRfHBynx.js";import"./ArrowBack-Cw90MyjA.js";import"./Select-DkCUicCh.js";import"./DeleteForever-2UG8bRSM.js";import"./variants-BmBct39u.js";import"./ChevronBackward-CtSeq79J.js";import"./Calendar-DAqiWFgm.js";import"./use-toast-fbnSF_zt.js";import"./Description-B1VR_QjW.js";import"./Zip-B8ji_F1i.js";import"./Download-Dtk4Ehsk.js";import"./Warning-DV__a1pk.js";import"./ComboBox-BSWGMVR8.js";import"./ListBox-CWwHBDnm.js";import"./ListBox-C4DPiIPV.js";import"./DragAndDrop-ClwN77iD.js";import"./use-is-mobile-oWKDr4Vz.js";import"./FilterListOff-CEoMcWhT.js";import"./KeyboardArrowUp-BbgTndoY.js";import"./Divider-BQqDjAP5.js";import"./Remove-CsOGa_W3.js";const uo={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
