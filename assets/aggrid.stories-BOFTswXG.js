import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Ag-grid-table-KS7HPQis.js";import{n as a,t as o}from"./Pill-CUNjJ7U0.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),s=t(),r(),c=n(),l={title:`Components/Table/Ag-Grid-Table`,component:i,parameters:{layout:`fullscreen`},argTypes:{themeType:{options:[`classic`,`dobby`],control:{type:`inline-radio`}}}},u=e=>(0,c.jsx)(o,{variant:`warning`,children:e.value?`Electric`:`Gas`}),d=[{field:`make`,resizable:!1,sortable:!1},{field:`model`,resizable:!1,width:50,flex:0},{field:`price`,type:`numericColumn`,initialHide:!0},{field:`electric`,cellRenderer:u}],f=[{id:`1`,make:`Tesla`,model:`Model Y`,price:64950,electric:!0},{id:`2`,make:`Ford`,model:`F-Series`,price:33850,electric:!1},{id:`3`,make:`Toyota`,model:`Corolla`,price:29600,electric:!1}],p={getRows(e){let t=f.slice(e.startRow,e.endRow);e.successCallback(t,f.length)}},m={args:{columnDefs:d,datasource:p,totalCount:f.length}},h={args:{...m.args,themeType:`classic`,addRowButton:!0}},g={args:{...m.args,themeType:`dobby`}},_={args:{...m.args,selectOnRowClick:!0,selectionMode:`single`,onRowSelectionChange:e=>{console.warn(`Selected row ID:`,e)}}},v={args:{...m.args,addRowButton:!0,disableColumnOptions:!0,enableSelectAll:!0,selectionMode:`multiple`,onRowSelectionChange:e=>{e===`all`?console.warn(`All rows selected!`):console.warn(`Selected row IDs:`,e)},disableRowSelectionCondition:e=>e?.make===`Tesla`}},y={args:{...m.args,id:`ag-grid-component`}},b={args:{...m.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:`edit`,label:`Edit`,onAction:e=>{console.warn(`Edit action for row:`,e)}},{id:`delete`,label:`Delete`,onAction:e=>{console.warn(`Delete action for row:`,e)}},{id:`duplicate`,label:`Duplicate`,onAction:e=>{console.warn(`Duplicate action for row:`,e)}}]}},x={getRows(){}},S={args:{columnDefs:d,datasource:x,addRowButton:!0,selectionMode:`multiple`,enableSelectAll:!0}},C={getRows(e){e.successCallback([],0)}},w={args:{columnDefs:d,datasource:C,themeType:`dobby`}},T=Array.from({length:96},(e,t)=>({id:String(t+1),make:[`Audi`,`BMW`,`Citroën`,`Hyundai`,`Kia`,`Mercedes-Benz`,`Peugeot`,`Toyota`,`Volkswagen`,`Volvo`][t%10],model:`Model ${t+1}`,price:2e4+t*3513,electric:t%6==0})),E=()=>({getRows(e){let t=T.slice(e.startRow,e.endRow);e.successCallback(t,T.length)}}),D=()=>{let[e,t]=(0,s.useState)(15),n=(0,s.useMemo)(()=>E(),[]);return(0,c.jsx)(`div`,{className:`h-[600px]`,children:(0,c.jsx)(i,{columnDefs:d,datasource:n,cacheBlockSize:e,totalCount:T.length,pagination:{onPageSizeChange:t}},e)})},O={render:()=>(0,c.jsx)(D,{})},k=()=>{let[e,t]=(0,s.useState)(15),[n,r]=(0,s.useState)([]),a=(0,s.useMemo)(()=>E(),[]);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(`div`,{className:`h-[600px]`,children:(0,c.jsx)(i,{columnDefs:d,datasource:a,cacheBlockSize:e,totalCount:T.length,pagination:{onPageSizeChange:t},selectionMode:`multiple`,enableSelectAll:!0,selectedRowIds:n,onRowSelectionChange:r},e)}),(0,c.jsxs)(`pre`,{className:`max-w-full overflow-x-auto bg-neutral-800/10 p-2 mx-2 rounded-sm whitespace-pre-wrap break-all text-xs`,children:[`Selected value: `,JSON.stringify(n)]})]})},A={render:()=>(0,c.jsx)(k,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...w.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <PagedTableExample />
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <PagedSelectionExample />
}`,...A.parameters?.docs?.source}}},j=[`Default`,`ClassicTheme`,`DobbyTheme`,`SingleRowSelection`,`MultipleSelection`,`WithStoredConfig`,`WithMenuItems`,`LoadingState`,`EmptyState`,`Paged`,`PagedWithSelection`]})))()}M();export{h as ClassicTheme,m as Default,g as DobbyTheme,w as EmptyState,S as LoadingState,v as MultipleSelection,O as Paged,A as PagedWithSelection,_ as SingleRowSelection,b as WithMenuItems,y as WithStoredConfig,j as __namedExportsOrder,l as default};