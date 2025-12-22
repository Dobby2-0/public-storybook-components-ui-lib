import{j as x}from"./iframe-BNzyGInw.js";import"./DetailPageHeader-E6e8fSvg.js";import"./BulkActions-qrwICXkM.js";import"./Canvas-CWLYMU74.js";import"./Checkbox-hcm4wUBO.js";import"./ComboBox-oIuVmc31.js";import"./DateTimePicker-dGkfk8QP.js";import"./DndList-DE4aGmhb.js";import"./ErrorPage-BVrklkYv.js";import"./FileButton-B-aY1x9L.js";import"./FileIcon-CRPbLR6F.js";import"./FileList-BTgxsaGX.js";import"./Form-BLIHBMka.js";import"./ImageCarousel-zECWPwQh.js";import"./ListFilters-B_NS7dOp.js";import"./Loader-Dfd4fjR4.js";import"./NumberField-oVwVUW-a.js";import"./PDFViewer-DnlCMEEy.js";import"./PDFViewerModal-Dp1fTaKm.js";import{P as v}from"./Pill-C-itjlAK.js";import"./RadioGroup-CRAjSDTF.js";import"./RichTextEditor-sSSBK380.js";import"./Select-B3T67SFw.js";import"./SelectBase-H1yZt9iV.js";import"./Skeleton-D4Ht1khe.js";import"./Switch-BbjeDApN.js";import{A as B}from"./Ag-grid-table-Dl2ILuOl.js";import"./TextField-w-4xirjn.js";import"./Toolbar-C3EkWg5n.js";import"./Tooltip-PWVW5Nnn.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BijAwHR7.js";import"./utils-Dlm2XOHV.js";import"./ButtonBase-KMKKr80I.js";import"./Button-DHKzDG8z.js";import"./FocusScope-8nXzWN-Y.js";import"./Text-B40xMfta.js";import"./usePress-CW0TlZGg.js";import"./index-Cde9lS8Q.js";import"./index-Bo-Ruxo_.js";import"./Button-CI6KuKV5.js";import"./index-DH5D0aUc.js";import"./RSPContexts-DrsKWjkf.js";import"./Separator-DGo6WF40.js";import"./index-CXeldCEg.js";import"./VisuallyHidden-BMEkr2Go.js";import"./ArrowBack-CMqBh9L2.js";import"./Label-DCKJq6q8.js";import"./index-CmMOcchx.js";import"./Label-gtIqMLxA.js";import"./ErrorMessage-CJ1er9eM.js";import"./DeleteForever-DspdzxsD.js";import"./Check-N35m8Kn8.js";import"./CheckIndeterminateSmall-Bat8DHuE.js";import"./Form-efq6y-HI.js";import"./useToggleState-Duztzgal.js";import"./useFormReset-CJ7CqdAv.js";import"./ListBox-WX2XCF3C.js";import"./ListBox-BM1lJpmi.js";import"./DragAndDrop-OV2wTULn.js";import"./useLabel-BTYvcJDq.js";import"./Input-CRz-Sbts.js";import"./variants-TuDvegBV.js";import"./ChevronBackward-B37NFjJC.js";import"./ChevronForward-CwJyMRJD.js";import"./Calendar-BV4x2Pxi.js";import"./sortable.esm-DRwkqOuG.js";import"./DragIndicator-9hn4RVfS.js";import"./use-toast-CZL6BdyC.js";import"./Description-CnskLZjP.js";import"./Zip-DFTogcwP.js";import"./Download-5AnAwFLg.js";import"./Warning-Bb6fDjbL.js";import"./Modal-CmGgr4Nd.js";import"./use-is-mobile-BZdzjBsa.js";import"./FilterListOff-CLw0_IeZ.js";import"./KeyboardArrowDown-u5ryAxDG.js";import"./KeyboardArrowUp-B7yNXe4M.js";import"./FieldError-CI5qv2Wj.js";import"./Group-B2C_BuoH.js";import"./useTextField-CNFUyECM.js";import"./Divider-B5b63Lzv.js";import"./Remove-Ch-xuvjS.js";import"./Menu-CUxi_oJH.js";import"./MoreHoriz-DW9R4JqR.js";import"./TableOptions-BAfaSzLP.js";import"./ViewColumn-CYD8E9ra.js";const So={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const bo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,bo as __namedExportsOrder,So as default};
