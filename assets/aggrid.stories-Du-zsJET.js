import{j as x}from"./iframe-xNs60RAO.js";import{A as v}from"./DetailPageHeader-BIt2uhq0.js";import"./BulkActions-DF_6gCDH.js";import"./Canvas-CCMEEQK3.js";import"./DateTimePicker-qzBNUtc_.js";import"./DndList-CSbtXM1-.js";import"./ErrorPage-BO22cgHS.js";import"./FileIcon-C6NoiC4l.js";import"./FileList-Cgn00a_d.js";import"./ListFilters-CuI-rZ2g.js";import"./Loader-DySeLuqF.js";import"./NumberField-DbYq5_mo.js";import"./PDFViewer-Dk1_ufYY.js";import{P as B}from"./Pill-C8--2Nmm.js";import"./RadioGroup-8tX8vRbw.js";import"./Select-CvbBmRQz.js";import"./SelectBase-GF1Xp6mk.js";import"./TextField-IH2g3SaF.js";import"./Toolbar-VcJ_8R5U.js";import"./Tooltip-BS0-9Uhb.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-jFffP_Py.js";import"./utils-kOvM0wlX.js";import"./ButtonBase-Cah5No2e.js";import"./Button-CbNA8j_n.js";import"./FocusScope-HfU7U7z4.js";import"./Hidden-Bke7puBK.js";import"./usePress-CfBsgoI1.js";import"./index-DvkX0WGL.js";import"./index-BQkmhLdL.js";import"./Label-Ks4tByTG.js";import"./index-Btwbjr86.js";import"./ErrorMessage-BT8hC85X.js";import"./Button-IIy-mMAx.js";import"./index-B1xDLFoh.js";import"./RSPContexts-CrkHLIAp.js";import"./Separator-H0GBRA_c.js";import"./Text-CfxXgIOk.js";import"./VisuallyHidden-DIGO1UZx.js";import"./Menu-C1jTPzZp.js";import"./Check-C8Iu3Mbw.js";import"./ChevronForward-hzS67vqC.js";import"./TableOutlined-BPZFaREI.js";import"./Modal-Di0_ZRhX.js";import"./MoreHoriz-BzTy4lO0.js";import"./Checkbox-b3n_LU8t.js";import"./CheckIndeterminateSmall-CsEFJ_2Q.js";import"./Form-Cw_5LOoP.js";import"./useToggleState-DE6yqDin.js";import"./useFormReset-nyQVGvPQ.js";import"./TableOptions-6fvDdU8m.js";import"./sortable.esm-B7Wgc5mc.js";import"./DragIndicator-D-_O5Sle.js";import"./ViewColumn-Cm1VG2kX.js";import"./KeyboardArrowDown-B8dnAo4J.js";import"./Search-BE44x017.js";import"./Underline-Oq_9T-6R.js";import"./ArrowBack-546ZuiNm.js";import"./DeleteForever-BLih57vf.js";import"./variants-vcJcKm5D.js";import"./ChevronBackward-BEroGQqa.js";import"./Calendar-DffA-ikb.js";import"./Description-WQD9lXa_.js";import"./Zip-BITNhwID.js";import"./Download-COC6_-L8.js";import"./Warning-0Ops-ied.js";import"./ComboBox-CZ5ic9AG.js";import"./ListBox-1cdKDqGE.js";import"./ListBox-1D_bqHJP.js";import"./DragAndDrop-Dso0fY5z.js";import"./useLabel-BI0WJR49.js";import"./Input-yonS2zAm.js";import"./use-is-mobile-BI2iwzPX.js";import"./FilterListOff-DsrKvZbX.js";import"./KeyboardArrowUp-BUZo6yhK.js";import"./FieldError-CF-Dhi17.js";import"./Group-DsedTlFL.js";import"./useTextField-C8Gz5ko0.js";import"./Divider-DQa1TRah.js";import"./Remove-CCyPEQ8h.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
