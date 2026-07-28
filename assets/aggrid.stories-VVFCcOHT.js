import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{n,r,t as i}from"./main-BZLEAgS6.js";import{t as a}from"./Pill-soIWcEF0.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{i(),r(),o=t(),s={title:`Components/Table/Ag-Grid-Table`,component:n,parameters:{layout:`fullscreen`},argTypes:{themeType:{options:[`classic`,`dobby`],control:{type:`inline-radio`}}}},c=e=>(0,o.jsx)(a,{variant:`warning`,children:e.value?`Electric`:`Gas`}),l=[{field:`make`,resizable:!1,sortable:!1},{field:`model`,resizable:!1,width:50,flex:0},{field:`price`,type:`numericColumn`,initialHide:!0},{field:`electric`,cellRenderer:c}],u=[{id:`1`,make:`Tesla`,model:`Model Y`,price:64950,electric:!0},{id:`2`,make:`Ford`,model:`F-Series`,price:33850,electric:!1},{id:`3`,make:`Toyota`,model:`Corolla`,price:29600,electric:!1}],d={getRows(e){let t=u.slice(e.startRow,e.endRow);e.successCallback(t,u.length)}},f={args:{columnDefs:l,datasource:d,totalCount:u.length}},p={args:{...f.args,themeType:`classic`,addRowButton:!0}},m={args:{...f.args,themeType:`dobby`}},h={args:{...f.args,selectOnRowClick:!0,selectionMode:`single`,onRowSelectionChange:e=>{console.warn(`Selected row ID:`,e)}}},g={args:{...f.args,addRowButton:!0,disableColumnOptions:!0,enableSelectAll:!0,selectionMode:`multiple`,onRowSelectionChange:e=>{e===`all`?console.warn(`All rows selected!`):console.warn(`Selected row IDs:`,e)},disableRowSelectionCondition:e=>e?.make===`Tesla`}},_={args:{...f.args,id:`ag-grid-component`}},v={args:{...f.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:`edit`,label:`Edit`,onAction:e=>{console.warn(`Edit action for row:`,e)}},{id:`delete`,label:`Delete`,onAction:e=>{console.warn(`Delete action for row:`,e)}},{id:`duplicate`,label:`Duplicate`,onAction:e=>{console.warn(`Duplicate action for row:`,e)}}]}},y={getRows(){}},b={args:{columnDefs:l,datasource:y,addRowButton:!0,selectionMode:`multiple`,enableSelectAll:!0}},x={getRows(e){e.successCallback([],0)}},S={args:{columnDefs:l,datasource:x,themeType:`dobby`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`ClassicTheme`,`DobbyTheme`,`SingleRowSelection`,`MultipleSelection`,`WithStoredConfig`,`WithMenuItems`,`LoadingState`,`EmptyState`]}))();export{p as ClassicTheme,f as Default,m as DobbyTheme,S as EmptyState,b as LoadingState,g as MultipleSelection,h as SingleRowSelection,v as WithMenuItems,_ as WithStoredConfig,C as __namedExportsOrder,s as default};