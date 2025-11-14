import{j as x}from"./iframe-DgaJYh6P.js";import{A as v}from"./DetailPageHeader-DyLNxeVu.js";import"./BulkActions-B_3o93Oe.js";import"./Canvas-DZq7I7zH.js";import"./Checkbox-CjOkL2-F.js";import"./ComboBox-CUtcQin-.js";import"./DateTimePicker-DY19mrac.js";import"./DndList-BsWbMFiL.js";import"./ErrorPage-D3_uGePi.js";import"./FileButton-CElRXgyd.js";import"./FileIcon-9EvfyYGP.js";import"./FileList-Cudmxc-1.js";import"./ListFilters-BS269r0j.js";import"./Loader-CJN6q-l3.js";import"./NumberField-BzT_C8lp.js";import"./PDFViewer-BR8vKx84.js";import{P as B}from"./Pill-FruOqT-Z.js";import"./RadioGroup-BvZ0NYlZ.js";import"./Select-CXbuGZlm.js";import"./SelectBase-BvwcziuG.js";import"./TextField-BAevXNNH.js";import"./Toolbar-B72oQCy9.js";import"./Tooltip-B8M6KfTR.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-TDc_s2fV.js";import"./utils-zFreqGng.js";import"./ButtonBase-Bk2l1QtS.js";import"./Button-D0GcZ5bi.js";import"./FocusScope-7mG_kVK-.js";import"./Hidden-Dy2nacwr.js";import"./usePress-DdZdM5TM.js";import"./index-BZBJBxMA.js";import"./index-CiTFHc9n.js";import"./Label-CTEhDgI1.js";import"./index-CgzT9SyE.js";import"./ErrorMessage-BP27EmSr.js";import"./Button-BdCjDUEF.js";import"./index-IkpQ4eUl.js";import"./RSPContexts-D0tqF-rp.js";import"./Separator-DsVPw386.js";import"./Text-gXLstkbP.js";import"./VisuallyHidden-D1bzEdbC.js";import"./Menu-DXmg9E6R.js";import"./Check-HdJbGISQ.js";import"./ChevronForward-BwO0XRBI.js";import"./TableOutlined-CELAjD3e.js";import"./Modal-aWD5VUVE.js";import"./MoreHoriz-CYS4JrMf.js";import"./TableOptions-DOEG9ki4.js";import"./sortable.esm-Dl49q8Ds.js";import"./DragIndicator-DfHGYZwT.js";import"./ViewColumn-BwVhDPkR.js";import"./KeyboardArrowDown-DNV-BVk4.js";import"./Search-CLCZU1OJ.js";import"./Underline-yQ66NvZ6.js";import"./ArrowBack-HOzfMhGm.js";import"./DeleteForever-9wJvu4RC.js";import"./CheckIndeterminateSmall-BbZOkWSi.js";import"./Form-KQBNbKV7.js";import"./useToggleState-BHhUnQ2K.js";import"./useFormReset-olEtwpNT.js";import"./ListBox-DPtY0Gvp.js";import"./ListBox-cDXTUcI_.js";import"./DragAndDrop-CVNm0mex.js";import"./useLabel-CzfMFNF9.js";import"./Input-TlsHfPwX.js";import"./variants-Da0BcmjJ.js";import"./ChevronBackward-FbXvCnmW.js";import"./Calendar-CnZAxiCG.js";import"./use-toast-DY_Xa0g3.js";import"./Description-gV_xFWu0.js";import"./Zip-DuTRaxgp.js";import"./Download-DNcDoyHu.js";import"./Warning-Cu2XI0rB.js";import"./use-is-mobile-DAyZqDF7.js";import"./FilterListOff-BDURnKXn.js";import"./KeyboardArrowUp-DLMGS6nC.js";import"./FieldError-Bqposku1.js";import"./Group-BCVgN9v5.js";import"./useTextField-9UyhzjZP.js";import"./Divider-aip-mbMC.js";import"./Remove-CJzKZcAA.js";const po={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const uo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,uo as __namedExportsOrder,po as default};
