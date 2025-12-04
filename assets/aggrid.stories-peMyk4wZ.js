import{j as x}from"./iframe-DP3-CQDs.js";import"./DetailPageHeader-DrmIPaMC.js";import"./BulkActions-CZ6Vgre8.js";import"./Canvas-BEt9XG-D.js";import"./DateTimePicker-B3yC8qUK.js";import"./DndList-ZLv4BrL_.js";import"./ErrorPage-BK2rUcEK.js";import"./FileButton-DC8NEoGU.js";import"./FileIcon-CO4x0dnV.js";import"./FileList-D4sYyQAX.js";import"./Form-CryAe-D9.js";import"./ListFilters-KI0-LwPD.js";import"./Loader-b3vFoKaK.js";import"./NumberField-kGooEcsK.js";import"./PDFViewer-CmpOIMKy.js";import"./PDFViewerModal-4ZHkMd_T.js";import{P as v}from"./Pill-Cd0ujufo.js";import"./RadioGroup-BkDjTNpE.js";import"./RichTextEditor-DXA038Dk.js";import"./Select-DAFO6JTW.js";import"./SelectBase-Bbb0einT.js";import"./Skeleton-D-7I6Eyj.js";import{A as B}from"./Ag-grid-table-DzFjWbeR.js";import"./TextField-B2KSNVvX.js";import"./Toolbar-eRfimyXS.js";import"./Tooltip-C1_nDIPG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-C2-rOCo0.js";import"./utils-CTHKUqKf.js";import"./ButtonBase-YXA85uzR.js";import"./Button-DjNH72gK.js";import"./FocusScope-DeaR1QOB.js";import"./Hidden-C0lX4Jn3.js";import"./usePress-BS2ZG6Qh.js";import"./index-q5ymUpaM.js";import"./index-C7NeUuQO.js";import"./Button-CD3kBsXW.js";import"./index-DZ8PC-Vn.js";import"./RSPContexts-DL4g-k_R.js";import"./Separator-BMUj42YL.js";import"./index-C_LC-Clp.js";import"./Text-DRH279PT.js";import"./VisuallyHidden-TKVO3wAR.js";import"./ArrowBack-CBv0sy9X.js";import"./Label-CXMBqC1I.js";import"./index-Dr1nA0tK.js";import"./ErrorMessage-BVUGJsOs.js";import"./DeleteForever-DdgUnJrp.js";import"./variants-CTsV4Jtq.js";import"./ChevronBackward-pUczOHuE.js";import"./ChevronForward-5CmhpOGK.js";import"./Calendar-y_RpYzko.js";import"./sortable.esm-CKVPzsYE.js";import"./DragIndicator-eEX-D3Id.js";import"./use-toast-WL3tJiYs.js";import"./Description-CCyzWu4L.js";import"./Zip-C43FmY-Y.js";import"./Download-Cg6LMujQ.js";import"./Warning-COVC_pnd.js";import"./ComboBox-BRvqu5Wb.js";import"./ListBox-BYcLeG4n.js";import"./Check-CeDGww65.js";import"./ListBox-6gDFOM9x.js";import"./DragAndDrop-DUuaZQ3q.js";import"./useLabel-DKUT9Bzy.js";import"./Input-N0MICXmV.js";import"./Modal-D8kXei47.js";import"./use-is-mobile-CEhgwfZP.js";import"./FilterListOff-4GQtVt3C.js";import"./KeyboardArrowDown-BfuiNlbF.js";import"./KeyboardArrowUp-D-kQmN23.js";import"./FieldError-C4TMNOHw.js";import"./Form-C20i8PXr.js";import"./Group-DC9qmLJT.js";import"./useFormReset-CMl-Uc9z.js";import"./useTextField-BWDWAuce.js";import"./Divider-BdQWkJAG.js";import"./Remove-BekiEZv1.js";import"./Menu-438Jpq4x.js";import"./MoreHoriz-HssYYUWs.js";import"./Checkbox-BiW7jESg.js";import"./CheckIndeterminateSmall-i5LyFDYy.js";import"./useToggleState-YxbirCsn.js";import"./TableOptions-CNzSUDI2.js";import"./ViewColumn-BZlsteCw.js";const wo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const fo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,fo as __namedExportsOrder,wo as default};
