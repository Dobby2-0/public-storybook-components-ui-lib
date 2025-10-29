import{j as x}from"./iframe-BwNFWH1f.js";import{A as v}from"./DetailPageHeader-rNwVG6hD.js";import"./BulkActions-RM58tN98.js";import"./Canvas-DUdxp_e0.js";import"./DateTimePicker-Ch0DIYhW.js";import"./DndList-je1eT4d2.js";import"./ErrorPage-C7BqnRVt.js";import"./FileIcon-Bea_bM7p.js";import"./FileList-DQGA3XJT.js";import"./ListFilters-CPAMga8U.js";import"./Loader-CSXLMFYo.js";import"./NumberField-CyCgDyKL.js";import"./PDFViewer-QuI2ZUD1.js";import{P as B}from"./Pill-BCIMG4CD.js";import"./Select-B8oFLh5Q.js";import"./SelectBase-CSioaiWQ.js";import"./TextField-ysG13TEz.js";import"./Toolbar-WciKacAA.js";import"./Tooltip-Sm4dml31.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CBIVkMOS.js";import"./utils-Rlm7jdZ4.js";import"./ButtonBase-BBviG9wf.js";import"./Button-Ddp-PUJ0.js";import"./FocusScope-BhwsVeU3.js";import"./Hidden-EiGuNxD5.js";import"./usePress-DBR8AA51.js";import"./index-BX9lLRkz.js";import"./index-CtkWuY_Y.js";import"./Label-Cm1Uqibf.js";import"./index-CVQZdYvV.js";import"./ErrorMessage-BidCM258.js";import"./Button-6D7GHbIJ.js";import"./index-Btmx5xex.js";import"./RSPContexts-_iswUeoo.js";import"./Separator-DKYNZsGp.js";import"./Text-Om7JnWTg.js";import"./VisuallyHidden-Cnanu79u.js";import"./Menu-DvGYx1L4.js";import"./Check-B7fvyNFJ.js";import"./ChevronForward-CLCIqbag.js";import"./TableOutlined-B4WDgs9o.js";import"./Modal-DG1iOUL3.js";import"./MoreHoriz-BC3lJ0TT.js";import"./Checkbox-CWwCMD5L.js";import"./CheckIndeterminateSmall-DuH5lxzM.js";import"./Form-B8dq9vOZ.js";import"./useToggleState-CRFcnHz9.js";import"./useFormReset-BQispQhm.js";import"./TableOptions-D_NVc6Px.js";import"./sortable.esm-D1WBmO9y.js";import"./DragIndicator-CVOOj2ek.js";import"./ViewColumn-CwRWjmYw.js";import"./KeyboardArrowDown-BBtYJRuP.js";import"./Search-DfikkOSP.js";import"./Underline-B-gSBYxt.js";import"./ArrowBack-Cggkbni9.js";import"./DeleteForever-D7bn6PX5.js";import"./variants-DtEjhCXQ.js";import"./ChevronBackward-CQO8UO5g.js";import"./Calendar-Y7qk8KfM.js";import"./Description-B6m50QYQ.js";import"./Zip-pI7QzN-I.js";import"./Download-CVGu6X3u.js";import"./Warning-Btv-Y93w.js";import"./ComboBox-BhZukN4t.js";import"./ListBox-ZC8CqDVC.js";import"./ListBox-88C5zmrG.js";import"./DragAndDrop-CF3sqFzb.js";import"./useLabel-DzsVno54.js";import"./Input-BNmBTnKq.js";import"./use-is-mobile-C8HjOwcr.js";import"./FilterListOff-D4nlNw6U.js";import"./KeyboardArrowUp--gWPiAIE.js";import"./FieldError-C5VzHUY0.js";import"./Group-DFgMGrw9.js";import"./useTextField-DtifSZN5.js";import"./Divider-Dvyz5Ltd.js";import"./Remove-ZyblNWoq.js";const lo={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const co=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,co as __namedExportsOrder,lo as default};
