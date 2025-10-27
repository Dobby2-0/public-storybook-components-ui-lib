import{j as x}from"./iframe-CqGwk_ti.js";import{A as v}from"./DetailPageHeader-DtAk1rg_.js";import"./BulkActions-D0PwTkjb.js";import"./Canvas-uFEInJZv.js";import"./DateTimePicker-DquUE10f.js";import"./DndList-BN1f9GhY.js";import"./ErrorPage-Bx4ZP_zl.js";import"./FileIcon-Cs2m2biM.js";import"./FileList-CO2dZB6D.js";import"./ListFilters-C6VhM9QU.js";import"./Loader-CmdWk6mi.js";import"./NumberField-CwYmROl-.js";import"./PDFViewer-CxLZXJmK.js";import{P as B}from"./Pill-DPnpsQeB.js";import"./RadioGroup-BuZcIwX_.js";import"./Select-BpWLgDHg.js";import"./SelectBase-DZ8QmnDR.js";import"./TextField-Dk6xHM_x.js";import"./Toolbar-DCJyQr_z.js";import"./Tooltip-1ieUy6fn.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-OUFpSXxE.js";import"./utils-D6j8o2cJ.js";import"./ButtonBase-DSBFczeu.js";import"./Button-Dwr1gNo8.js";import"./FocusScope-DCpKNz2v.js";import"./Hidden-Bqruwxpo.js";import"./usePress-hZBHe2Y1.js";import"./index-B1OMVKlf.js";import"./index-DoAUk5tk.js";import"./Label-DUsBgjQR.js";import"./index-CyAxdgCh.js";import"./ErrorMessage-NlEYki0l.js";import"./Button-X43wK8IW.js";import"./index-DxEvt5nF.js";import"./RSPContexts-CvFpMR5G.js";import"./Separator-lWngIFzm.js";import"./Text-DnMX30Ln.js";import"./VisuallyHidden-C_QBSwm5.js";import"./Menu-6zl7Uf7V.js";import"./Check-BmyTufyi.js";import"./ChevronForward-DU4pZRQl.js";import"./TableOutlined-wqStU2rY.js";import"./Modal-CJlaBXEg.js";import"./MoreHoriz-DGL920HY.js";import"./Checkbox-CrtA_MKi.js";import"./CheckIndeterminateSmall-X4jGPod0.js";import"./Form-BGN6R7pS.js";import"./useToggleState-C6fD46XA.js";import"./useFormReset-CQoWzV1t.js";import"./TableOptions-CI7wMuyA.js";import"./sortable.esm-BY8Bus3z.js";import"./DragIndicator-Bz5VbE8A.js";import"./ViewColumn-CI_-dkhl.js";import"./KeyboardArrowDown-BUfU2db7.js";import"./Search-f82-8nIS.js";import"./Underline-BqLJRycb.js";import"./ArrowBack-CeMKtK7J.js";import"./DeleteForever-BDdSQMgD.js";import"./variants-MbpVDsiM.js";import"./ChevronBackward-sVm7fgtU.js";import"./Calendar-CpdNUKiQ.js";import"./Description-fCHGY-uH.js";import"./Zip-C09uS0Ak.js";import"./Download-OhTaNcqF.js";import"./Warning-Gs_m3AO5.js";import"./ComboBox-Cx9AYTFp.js";import"./ListBox-Brm8ZzWy.js";import"./ListBox-Bi3p1sHS.js";import"./DragAndDrop-BeZ36J-G.js";import"./useLabel-vhRW4LVQ.js";import"./Input-CrrOXk0k.js";import"./use-is-mobile-BDfsqbkd.js";import"./FilterListOff-cDwjQQMg.js";import"./KeyboardArrowUp-6SD28W8v.js";import"./FieldError-DIm74mOC.js";import"./Group-BSMo81aw.js";import"./useTextField-COa8zqnB.js";import"./Divider-CDy3HzMw.js";import"./Remove-DKW2sa02.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
