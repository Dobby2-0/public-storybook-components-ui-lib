import{j as x}from"./iframe-BSmYXjVO.js";import"./DetailPageHeader-fPRRYb9W.js";import"./BulkActions-tA5UYRRF.js";import"./Canvas-DhqQmi_J.js";import"./DateTimePicker-Ciydsepy.js";import"./DndList-FYDmzDmZ.js";import"./ErrorPage-CPELFkjR.js";import"./FileButton-BkdV6Jm4.js";import"./FileIcon-Dtdljl99.js";import"./FileList-Cvdu5IEn.js";import"./Form-dENyJTWg.js";import"./ListFilters-CIMjFCAV.js";import"./Loader-JBqYW2zh.js";import"./NumberField-DGXAWEw7.js";import"./PDFViewer-CpdqM1h7.js";import{P as v}from"./Pill-BWELfylc.js";import"./RadioGroup-Fwe839py.js";import"./RichTextEditor-D7s0TuQK.js";import"./Select-dXyQ6Rkn.js";import"./SelectBase-KO-8fW3H.js";import"./Skeleton-ly-p6nSE.js";import{A as B}from"./Ag-grid-table-AhCaNUUk.js";import"./TextField-ZKfOoF18.js";import"./Toolbar-ykDtiASO.js";import"./Tooltip-ZW5uaDNE.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DEo46tnU.js";import"./utils-BsIxPqYP.js";import"./ButtonBase-WpTy9jlr.js";import"./Button-mBgBOGbs.js";import"./FocusScope-4rN7mK0_.js";import"./Hidden-Dj1-P9z-.js";import"./usePress-DuBZEVvs.js";import"./index-klIopXI3.js";import"./index-CEhufqlP.js";import"./Button-BLqrtYZU.js";import"./index-DYbrKbtf.js";import"./RSPContexts-CjqPehn9.js";import"./Separator-DebHZQk6.js";import"./Text-DXRU8ZkD.js";import"./VisuallyHidden-CwV5N5lw.js";import"./ArrowBack-CMg6AVAw.js";import"./Label-9tWRThww.js";import"./index-B5w_pHEv.js";import"./ErrorMessage-DEuDx2bQ.js";import"./DeleteForever-D1ZNthH3.js";import"./variants-BV_0hRIg.js";import"./ChevronBackward-BhZ6Rr1B.js";import"./ChevronForward-Dc0SaTwU.js";import"./Calendar-DxGO6kdO.js";import"./sortable.esm-pCVyr2I-.js";import"./DragIndicator-BKyEV6Nm.js";import"./use-toast-ByHkEf17.js";import"./Description-CuPqYYkG.js";import"./Zip-DwB1JTdv.js";import"./Download-DGM9f5Q7.js";import"./Warning-B7DCZbbS.js";import"./ComboBox-D5zanUZL.js";import"./ListBox-BP8Mbn4a.js";import"./Check-0b-MQdoX.js";import"./ListBox-Cb5_7k3s.js";import"./DragAndDrop-w1XgXqIx.js";import"./useLabel-CB5Ub93p.js";import"./Input-CLA21uk0.js";import"./Modal-DP2Gjopr.js";import"./use-is-mobile-CTAn8ssn.js";import"./FilterListOff-DerK3pIv.js";import"./KeyboardArrowDown-DaDLg03S.js";import"./KeyboardArrowUp-BwmLFmoU.js";import"./FieldError-B8vAZTvc.js";import"./Form-DZcEGmYa.js";import"./Group-Bp4bOdtF.js";import"./useFormReset-BZpcX0Tf.js";import"./useTextField-BIxKTWEp.js";import"./Divider-dt5GUBP9.js";import"./Remove-Bjox1xYl.js";import"./Menu-90maiYS4.js";import"./MoreHoriz-D-ZB-8Sy.js";import"./Checkbox-BYdU9cUq.js";import"./CheckIndeterminateSmall-DSZWPga6.js";import"./useToggleState--5hgrE61.js";import"./TableOptions-Djs_8kg7.js";import"./ViewColumn-BTg3yXLm.js";const uo={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
