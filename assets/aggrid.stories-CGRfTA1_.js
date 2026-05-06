import{j as L}from"./iframe-CWPnyXiF.js";import"./sha256-Bjrv8gy-.js";import"./SwipeableActionBlock-6TaKiJEt.js";import"./BulkActions-C68Z-mHM.js";import"./Button-BAwAwK9L.js";import"./Canvas-BlK6p_Kx.js";import"./CardBasic-XxnPqm5I.js";import"./CardList-CNJ7TWLe.js";import"./Checkbox-mUSFY9ZC.js";import"./DateTimePicker-CYfaH70I.js";import"./DndList-CyAlJx66.js";import"./EmptyState-D6an-ET6.js";import"./ErrorPage-D8dmQBV_.js";import"./FileButton-UDJvxYD1.js";import"./FileIcon-NsQtxtI9.js";import"./FileList-uzeplFYx.js";import"./Form-5hBfM729.js";import"./ImageCarousel-ls-j1TlI.js";import"./ListFilters-DRkrw0kM.js";import"./Loader-CT64ro5e.js";import"./NumberField-C6GHTouB.js";import"./PDFViewer-50yZ95vt.js";import"./PDFViewerModal-Cpw2t_En.js";import"./PhoneNumberField-Ca9OZceU.js";import{P as _}from"./Pill-ahlIUWlJ.js";import"./RadioGroup-Cg1XvcH6.js";import"./RichTextEditor-CmiatrD6.js";import"./Select-BfERwp0Z.js";import"./SelectBase-6wWOOH1d.js";import"./Skeleton-CwVJAb9t.js";import"./Switch-D-QZZljS.js";import{A as H}from"./Ag-grid-table-BfXvHUm3.js";import"./TextField-CuH6MaXj.js";import"./Toolbar-HRUvoIK8.js";import"./Tooltip-BlYj_nD2.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-ZgKE5-b8.js";import"./useHover-CMUc1mlA.js";import"./ButtonBase-pB0rpVQP.js";import"./Button-BGtGh5Ga.js";import"./SelectionIndicator-D5OlXxU3.js";import"./index-BPmBLuLs.js";import"./index-DhHbND3A.js";import"./usePress-B-EGBYnJ.js";import"./Text-CZqWnfdj.js";import"./index-B4E4YJ4E.js";import"./useCollection-st_MUtLe.js";import"./index-QAmlznd9.js";import"./VisuallyHidden-BjVEAqo-.js";import"./Autocomplete-C4GIrfvA.js";import"./ArrowBack-CuNZ-wtP.js";import"./use-dobby-context-DbflKHy4.js";import"./Label-l5SphkYs.js";import"./index-DSwJ-WTm.js";import"./Label-BAvWoAhT.js";import"./ErrorMessage-DJSf2oml.js";import"./DeleteForever-DJxq4jt6.js";import"./Check-CSzrKaPY.js";import"./CheckIndeterminateSmall-Cy9E8lzI.js";import"./useFormValidation-B5enr6lF.js";import"./useToggleState-ChvMfzKL.js";import"./useFormReset-BF9U8gIz.js";import"./variants-UQaP4fRY.js";import"./ChevronBackward-C9KFLdt9.js";import"./ChevronForward-kahqzaez.js";import"./Calendar-CYQKQnBi.js";import"./sortable.esm-BPgl_KO-.js";import"./DragIndicator-0syEeacC.js";import"./Search-BKCPP4Xq.js";import"./use-toast-Dzb7Aw3x.js";import"./Description-BFk7mZPV.js";import"./Zip-DY53ToKT.js";import"./Download-Dgv3JFb7.js";import"./Warning-C1-O2D2a.js";import"./index-C7CL5OQ7.js";import"./Modal-UhUqmkm1.js";import"./ComboBox-DR3PvQBV.js";import"./ComboBoxListBox-Df-z0Ucf.js";import"./ListBox-DrkDleTs.js";import"./ListBox-B89ZhFG_.js";import"./useLoadMoreSentinel-Tb_koUDW.js";import"./useLabel-Cpoljd6s.js";import"./Input-DRT-ed_K.js";import"./filter-persistence-BvBxMton.js";import"./use-is-mobile-BBL6EfxN.js";import"./Replay-Dtpk8h5H.js";import"./KeyboardArrowDown-Dvv_DDHb.js";import"./KeyboardArrowUp-Hf3rlPu4.js";import"./Group-BWf4DXce.js";import"./useField-BaBUUClP.js";import"./useTextField-Pp2fefFn.js";import"./Divider-CxjAlHqU.js";import"./Add-Cc0viEkV.js";import"./Remove-Cib4AbG1.js";import"./Menu-C_lKrVaa.js";import"./MoreHoriz-DbWQXEtz.js";import"./TableOptions-CmyTRSmw.js";import"./ViewColumn-CcfdqN5O.js";const zo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"},argTypes:{themeType:{options:["classic","dobby"],control:{type:"inline-radio"}}}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],c=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=c.slice(e.startRow,e.endRow);e.successCallback(F,c.length)}},o={args:{columnDefs:p,datasource:q,totalCount:c.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},i={args:{...o.args,id:"ag-grid-component"}},s={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},m={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,b,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,D,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var h,R,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(y=(R=n.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var T,I,A;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,k,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,x,B;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,W,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,P,z;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Fo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,m as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,s as WithMenuItems,i as WithStoredConfig,Fo as __namedExportsOrder,zo as default};
