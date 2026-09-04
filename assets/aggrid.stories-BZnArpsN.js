import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,r as a,t as o}from"./main-BWnksQpx.js";import{t as s}from"./Pill-Dgx35-35.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{o(),c=e(n(),1),a(),l=r(),u={title:`Components/Table/Ag-Grid-Table`,component:i,parameters:{layout:`fullscreen`},argTypes:{themeType:{options:[`classic`,`dobby`],control:{type:`inline-radio`}}}},d=e=>(0,l.jsx)(s,{variant:`warning`,children:e.value?`Electric`:`Gas`}),f=[{field:`make`,resizable:!1,sortable:!1},{field:`model`,resizable:!1,width:50,flex:0},{field:`price`,type:`numericColumn`,initialHide:!0},{field:`electric`,cellRenderer:d}],p=[{id:`1`,make:`Tesla`,model:`Model Y`,price:64950,electric:!0},{id:`2`,make:`Ford`,model:`F-Series`,price:33850,electric:!1},{id:`3`,make:`Toyota`,model:`Corolla`,price:29600,electric:!1}],m={getRows(e){let t=p.slice(e.startRow,e.endRow);e.successCallback(t,p.length)}},h={args:{columnDefs:f,datasource:m,totalCount:p.length}},g={args:{...h.args,themeType:`classic`,addRowButton:!0}},_={args:{...h.args,themeType:`dobby`}},v={args:{...h.args,selectOnRowClick:!0,selectionMode:`single`,onRowSelectionChange:e=>{console.warn(`Selected row ID:`,e)}}},y={args:{...h.args,addRowButton:!0,disableColumnOptions:!0,enableSelectAll:!0,selectionMode:`multiple`,onRowSelectionChange:e=>{e===`all`?console.warn(`All rows selected!`):console.warn(`Selected row IDs:`,e)},disableRowSelectionCondition:e=>e?.make===`Tesla`}},b={args:{...h.args,id:`ag-grid-component`}},x={args:{...h.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:`edit`,label:`Edit`,onAction:e=>{console.warn(`Edit action for row:`,e)}},{id:`delete`,label:`Delete`,onAction:e=>{console.warn(`Delete action for row:`,e)}},{id:`duplicate`,label:`Duplicate`,onAction:e=>{console.warn(`Duplicate action for row:`,e)}}]}},S={getRows(){}},C={args:{columnDefs:f,datasource:S,addRowButton:!0,selectionMode:`multiple`,enableSelectAll:!0}},w={getRows(e){e.successCallback([],0)}},T={args:{columnDefs:f,datasource:w,themeType:`dobby`}},E=Array.from({length:96},(e,t)=>({id:String(t+1),make:[`Audi`,`BMW`,`Citroën`,`Hyundai`,`Kia`,`Mercedes-Benz`,`Peugeot`,`Toyota`,`Volkswagen`,`Volvo`][t%10],model:`Model ${t+1}`,price:2e4+t*3513,electric:t%6==0})),D=()=>({getRows(e){let t=E.slice(e.startRow,e.endRow);e.successCallback(t,E.length)}}),O=()=>{let[e,t]=(0,c.useState)(15);return(0,l.jsx)(`div`,{className:`h-[600px]`,children:(0,l.jsx)(i,{columnDefs:f,datasource:(0,c.useMemo)(()=>D(),[]),cacheBlockSize:e,totalCount:E.length,pagination:{onPageSizeChange:t}},e)})},k={render:()=>(0,l.jsx)(O,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    // @ts-expect-error storybook typing issues
    selectionMode: "single",
    // @ts-expect-error storybook typing issues
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    addRowButton: true,
    disableColumnOptions: true,
    // @ts-expect-error storybook typing issues
    enableSelectAll: true,
    selectionMode: "multiple",
    onRowSelectionChange: ids => {
      if (ids === "all") {
        console.warn("All rows selected!");
      } else {
        console.warn("Selected row IDs:", ids);
      }
    },
    disableRowSelectionCondition: row => row?.make === "Tesla"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <PagedTableExample />
}`,...k.parameters?.docs?.source}}},A=[`Default`,`ClassicTheme`,`DobbyTheme`,`SingleRowSelection`,`MultipleSelection`,`WithStoredConfig`,`WithMenuItems`,`LoadingState`,`EmptyState`,`Paged`]}))();export{g as ClassicTheme,h as Default,_ as DobbyTheme,T as EmptyState,C as LoadingState,y as MultipleSelection,k as Paged,v as SingleRowSelection,x as WithMenuItems,b as WithStoredConfig,A as __namedExportsOrder,u as default};