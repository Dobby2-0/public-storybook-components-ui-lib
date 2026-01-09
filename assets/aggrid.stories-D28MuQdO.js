import{j as x}from"./iframe-CplAapsX.js";import"./DetailPageHeader-BBQbr46A.js";import"./BulkActions-DvwyDT1s.js";import"./Canvas-hKvp-fP2.js";import"./DateTimePicker-HWysf3D0.js";import"./DndList-NAO-bW8S.js";import"./ErrorPage-DK8rm0QM.js";import"./FileButton-BlHuJhfv.js";import"./FileIcon-v9ghkel9.js";import"./FileList-CARtnYea.js";import"./Form-Dzb-gr4q.js";import"./ImageCarousel-G6wJS2_e.js";import"./ListFilters-ZR7RKL6k.js";import"./Loader-DO4ogSHn.js";import"./NumberField-C5U2Ex55.js";import"./PDFViewer-CqLYc6cs.js";import"./PDFViewerModal-B4IPMmjw.js";import"./PhoneNumberField-18rIid9_.js";import{P as v}from"./Pill-Gd39E3vN.js";import"./RichTextEditor-CRw6Tnnt.js";import"./Select-DvmBaKWA.js";import"./SelectBase-CPv_W1Nd.js";import"./Skeleton-CLNoM8-9.js";import"./Switch-Bc_aMd0B.js";import{A as B}from"./Ag-grid-table-Cq1pwFOE.js";import"./TextField-cmSnUa2o.js";import"./Toolbar-CI-JiM4o.js";import"./Tooltip-DHBwmVO4.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-m9GXKDaS.js";import"./utils-BP1FQsAo.js";import"./ButtonBase-ZUXJNHQV.js";import"./Button-BmwiX6Hk.js";import"./FocusScope-Co7oTpXY.js";import"./Text-jeQCP_Xd.js";import"./usePress-DKuUVNPj.js";import"./index-CsyXmV7m.js";import"./index-RIj34x3n.js";import"./Button-yuAv3Z_P.js";import"./index-DxhgBWXY.js";import"./RSPContexts-B7LFnw2w.js";import"./Separator-Bj5eosGN.js";import"./index-1qNirS9T.js";import"./VisuallyHidden-BtQ6MD1n.js";import"./ArrowBack-MZ-GJ9mX.js";import"./Label-BmoMV9je.js";import"./index-BKBntAAk.js";import"./Label-CDhDbCJZ.js";import"./ErrorMessage-BStnkxSq.js";import"./DeleteForever-BCKBHkdq.js";import"./variants-CB0fdHXi.js";import"./ChevronBackward-Dhkw_V5K.js";import"./ChevronForward-MdVWDp4A.js";import"./Calendar-BDvuoczA.js";import"./sortable.esm-mSvcdb2W.js";import"./DragIndicator-BLoRV5ZN.js";import"./use-toast-JHYWA4U3.js";import"./Description-DYV7gI_X.js";import"./Zip-BlrGTPce.js";import"./Download-D3yWbRQk.js";import"./Warning-Durnj-Gq.js";import"./index-C7CL5OQ7.js";import"./Modal-0H3481Qt.js";import"./ComboBox-BdFe02Wg.js";import"./SingleComboBox-BSau3Jxm.js";import"./ListBox-CApBvx9-.js";import"./Check-CBSnSxms.js";import"./ListBox-BozHGlPt.js";import"./DragAndDrop-DgxJg4d0.js";import"./useLabel-BrOdjh3H.js";import"./Input-FMjyMLhH.js";import"./use-is-mobile-mR8-Fi-n.js";import"./FilterListOff-DrH9PwOV.js";import"./KeyboardArrowDown-D7zVXJq7.js";import"./KeyboardArrowUp-DUgEDdjU.js";import"./FieldError-CZ_3F4IE.js";import"./Form-BHxweaa0.js";import"./Group-B84DRFsA.js";import"./useFormReset-buhRQ0Qq.js";import"./useTextField-BAjHgY2b.js";import"./Divider-BKNG9tCb.js";import"./Remove-CZgQ3rbh.js";import"./useToggleState-g6kivo64.js";import"./Menu-CC8NmlLO.js";import"./MoreHoriz-DoCrejFJ.js";import"./Checkbox-DBlbn0de.js";import"./CheckIndeterminateSmall-CIU_gyn7.js";import"./TableOptions-Bty-cRHc.js";import"./ViewColumn-fYtzSkWr.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Do=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Do as __namedExportsOrder,Co as default};
