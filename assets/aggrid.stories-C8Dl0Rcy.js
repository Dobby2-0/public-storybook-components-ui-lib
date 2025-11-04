import{j as x}from"./iframe-pBnSplFZ.js";import{A as v}from"./DetailPageHeader-RrelicRe.js";import"./BulkActions-DZ4I6R0S.js";import"./Canvas-yAzk3d6y.js";import"./Checkbox-Cr7s8wbK.js";import"./DateTimePicker-BIMFw4Ct.js";import"./DndList-C_RQ5PU9.js";import"./ErrorPage-C0bNJ0HA.js";import"./FileIcon-Bh_RKORJ.js";import"./FileList-BXZfjKvD.js";import"./ListFilters-BF6gSMT7.js";import"./Loader-BCxpNSHQ.js";import"./NumberField-BEIU6nGa.js";import"./PDFViewer-h118WJaG.js";import{P as B}from"./Pill-bHVwbTO5.js";import"./RadioGroup-Cp2Agd2b.js";import"./Select-DHGmwFIi.js";import"./SelectBase-D-ybHqsP.js";import"./TextField-BHyX_wbt.js";import"./Toolbar-q8mh631X.js";import"./Tooltip-C8C0V3UG.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Cqf0rpOa.js";import"./utils-C2tA4BPa.js";import"./ButtonBase-B-KKaSsL.js";import"./Button-BQuNtnOM.js";import"./FocusScope-DD209Qz4.js";import"./Hidden-DRttEpAd.js";import"./usePress-DkB5TBaY.js";import"./index-Bx9OGZXX.js";import"./index-Dqp3rM7g.js";import"./Label-CXmwXUEH.js";import"./index-BX5Nerub.js";import"./ErrorMessage-CAVpP6Rf.js";import"./Button-BHajm_Y9.js";import"./index-DvsOHcJY.js";import"./RSPContexts-ByB424tt.js";import"./Separator-B8JoHBbr.js";import"./Text-Uh0t-fi7.js";import"./VisuallyHidden-BZsKR4g8.js";import"./Menu-B6jnDrtB.js";import"./Check-CAvp5a9O.js";import"./ChevronForward-2V2rw2O2.js";import"./TableOutlined-C5EZ0hJu.js";import"./Modal-Ko-t30xf.js";import"./MoreHoriz-B2WqIWXr.js";import"./TableOptions-6zB-EdXy.js";import"./sortable.esm-DF_km-TF.js";import"./DragIndicator-DIRIBPUy.js";import"./ViewColumn-DWWugy9R.js";import"./KeyboardArrowDown-B79h8xLV.js";import"./Search-Cbo4ZKs4.js";import"./Underline-Doi6xYS-.js";import"./ArrowBack-NSxCT2p1.js";import"./DeleteForever-m1DwGe_4.js";import"./CheckIndeterminateSmall-DBvlFv8Y.js";import"./Form-Da77mGVq.js";import"./useToggleState-iqrIt3zH.js";import"./useFormReset-BN2-9z-1.js";import"./variants-CXzVb_7g.js";import"./ChevronBackward-A3qgEFY4.js";import"./Calendar-BYWohkWF.js";import"./Description-CnqqQ2Ys.js";import"./Zip-CPJrqVw7.js";import"./Download-CHso8c3y.js";import"./Warning-Ad5JJhIA.js";import"./ComboBox-ChE1kjCw.js";import"./ListBox-BOghM7Wl.js";import"./ListBox-D36ZKHsZ.js";import"./DragAndDrop-DFCWl494.js";import"./useLabel-DYsND5BM.js";import"./Input-yqdFd8lF.js";import"./use-is-mobile-D94TSeoC.js";import"./FilterListOff-BVq_6vvG.js";import"./KeyboardArrowUp-Cw4OQ68Z.js";import"./FieldError-uOItk01U.js";import"./Group-B0t4_Hqu.js";import"./useTextField-zBU0EqAB.js";import"./Divider-BCSScbqD.js";import"./Remove-C0XW0eR0.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
