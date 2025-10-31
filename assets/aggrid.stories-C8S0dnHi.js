import{j as x}from"./iframe-Cu-xdT9G.js";import{A as v}from"./DetailPageHeader-CwAvisMm.js";import"./BulkActions-BsxlowSt.js";import"./Canvas-DsSJESDT.js";import"./DateTimePicker-D3ljlQVB.js";import"./DndList-B5jsizwL.js";import"./ErrorPage-DG2oxitD.js";import"./FileIcon-Dmct-VNw.js";import"./FileList-SlaNyBrD.js";import"./ListFilters-DrJODVUK.js";import"./Loader-CQlFACD0.js";import"./NumberField-DzH36Sd_.js";import"./PDFViewer-BMXGBJEl.js";import{P as B}from"./Pill-s-29BcFn.js";import"./RadioGroup-CwikW27w.js";import"./Select-B6LTd_Y_.js";import"./SelectBase-BkY3eFs8.js";import"./TextField-B4Yh85wQ.js";import"./Toolbar-CviTTTXo.js";import"./Tooltip-BLfg4IJn.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-VBs8CpOq.js";import"./utils-NQiFZHvw.js";import"./ButtonBase-q5peoFvg.js";import"./Button-C5s0rQwd.js";import"./FocusScope-DBECekIP.js";import"./Hidden-BO76c3yM.js";import"./usePress-CYFK737S.js";import"./index-DUUU677-.js";import"./index-C4xZ7l4B.js";import"./Label-Da3scYWb.js";import"./index-DuU36ER_.js";import"./ErrorMessage-CYUAWm57.js";import"./Button-BhrobEzT.js";import"./index-BHpIhZnw.js";import"./RSPContexts-vItvQxFj.js";import"./Separator-BGcJa7Bz.js";import"./Text-C8g5IJFr.js";import"./VisuallyHidden-DHZl51FW.js";import"./Menu-CvJ3PtuC.js";import"./Check-B7zJ2v9D.js";import"./ChevronForward-CB7QQERX.js";import"./TableOutlined-Bq0wcyKC.js";import"./Modal-KFSlp3vY.js";import"./MoreHoriz-DEWkj1ub.js";import"./Checkbox-DKp5vm62.js";import"./CheckIndeterminateSmall-CbZVJ4qi.js";import"./Form-BgwRnsCl.js";import"./useToggleState-CB23Vx9G.js";import"./useFormReset-X0ZVk73o.js";import"./TableOptions-Dk7vdXmx.js";import"./sortable.esm-emFyNrEy.js";import"./DragIndicator-gaVSivv3.js";import"./ViewColumn-BW_ZcUKG.js";import"./KeyboardArrowDown-CzGScF-m.js";import"./Search-C5gL7MBl.js";import"./Underline-C1xcE_pz.js";import"./ArrowBack-Bb2HMc3u.js";import"./DeleteForever-CRdh7XAc.js";import"./variants-DKAnLtIG.js";import"./ChevronBackward-14YiJdQX.js";import"./Calendar-BHyQf7uQ.js";import"./Description-EyOIxYJ5.js";import"./Zip-QyD_O8zS.js";import"./Download-DUsJTUiM.js";import"./Warning-BGA0y4nJ.js";import"./ComboBox-DQ94DQtN.js";import"./ListBox-DX6VQhOL.js";import"./ListBox-mIgDNyAf.js";import"./DragAndDrop-B0jrN-OB.js";import"./useLabel-C_-5ugI8.js";import"./Input-CJgbypMP.js";import"./use-is-mobile-C_HTradH.js";import"./FilterListOff-Buvgy7UM.js";import"./KeyboardArrowUp-CRo4-X0A.js";import"./FieldError-Czl2AC4c.js";import"./Group-CC-xr5ew.js";import"./useTextField-B7s_M9fq.js";import"./Divider-BaY6RY39.js";import"./Remove-CKGrY03G.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,D,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var h,R,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    }
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const mo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,mo as __namedExportsOrder,co as default};
