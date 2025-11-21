import{j as x}from"./iframe-BNnN4MmS.js";import{A as v}from"./DetailPageHeader-DIYyzI6q.js";import"./BulkActions-Dnz6QMSl.js";import"./IconButton-D5C6V7U6.js";import"./Canvas-D3FS8-tV.js";import"./Checkbox-DVNkPSSD.js";import"./ComboBox-DNM57PWm.js";import"./DateTimePicker-D-mxA75_.js";import"./DndList-DN8F3XBE.js";import"./ErrorPage-hiI5_-yH.js";import"./FileButton-D0G3yeIh.js";import"./FileIcon-Du9kC95A.js";import"./FileList-CFlzhkjk.js";import"./ListFilters-Dr_P7E13.js";import"./Loader-C5JNIkHB.js";import"./NumberField-9HkdxCvf.js";import"./PDFViewer-A1Iol9un.js";import{P as B}from"./Pill-5jjB8f2B.js";import"./RadioGroup-ClUBXjSl.js";import"./Select-EB9wlXNH.js";import"./SelectBase-D-otatPg.js";import"./Skeleton-CDhxHpLH.js";import"./TextField-ket3pYNR.js";import"./Toolbar-CQOch82Z.js";import"./Tooltip-DpswSR1y.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-DP_i8hYI.js";import"./index-CiBnTYQo.js";import"./index-DVk5Avbs.js";import"./index-pnAaiu9d.js";import"./ErrorMessage-DElq4S3R.js";import"./Button-CJZUwJ_Z.js";import"./utils-cuul9-mM.js";import"./ButtonBase-DBk1Id1q.js";import"./Button-DHVIX8xh.js";import"./FocusScope-BdluV1yS.js";import"./Hidden-C9-RUt87.js";import"./usePress-CpSiXQTN.js";import"./index-Ct0qmGSf.js";import"./RSPContexts-CcQhJdYD.js";import"./Separator-A4hyt2l7.js";import"./Text-CmVhqKLU.js";import"./VisuallyHidden-zKfq8fxw.js";import"./Menu-8Dpuc8vm.js";import"./Check-D0EhUYqc.js";import"./ChevronForward-CK06Vq3o.js";import"./TableOutlined-4tOb6AAu.js";import"./Modal-BBBbMGex.js";import"./MoreHoriz-Dzx4w868.js";import"./TableOptions-te9ZMq6V.js";import"./sortable.esm-CSGAS-xo.js";import"./DragIndicator-DosuMmBj.js";import"./ViewColumn-DMBqApWQ.js";import"./KeyboardArrowDown-h4hbwNoC.js";import"./Search-BeveVgzB.js";import"./Underline-DIV6AWjM.js";import"./ArrowBack-DVEnvyCb.js";import"./DeleteForever-CzzpxLoX.js";import"./CheckIndeterminateSmall-SJWldmAf.js";import"./Form-BTXG6m2w.js";import"./useToggleState-B88Cn5l8.js";import"./useFormReset-B4fozcLM.js";import"./ListBox-BuNMU1H0.js";import"./ListBox-s1D17cQx.js";import"./DragAndDrop-B0Vvj8gH.js";import"./useLabel-BKK0Q91T.js";import"./Input-DSguzKrS.js";import"./variants-Dd5aisLQ.js";import"./ChevronBackward-07dS8Ecs.js";import"./Calendar-Cspsycmk.js";import"./use-toast-9nsvNDB7.js";import"./Description-kcxEFu-p.js";import"./Zip-BnKF5biS.js";import"./Download-C3_OvyuM.js";import"./Warning-xKvdHz1W.js";import"./use-is-mobile-DkeE2EUn.js";import"./FilterListOff-DkkVCJ6t.js";import"./KeyboardArrowUp-C1dkkAfp.js";import"./FieldError-BZKyQ0DM.js";import"./Group-CrBNg-XP.js";import"./useTextField-Bq5lJmCf.js";import"./Divider-CXvK9cST.js";import"./Remove-B7mkNyNX.js";const uo={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
