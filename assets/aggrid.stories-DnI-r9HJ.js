import{j as x}from"./iframe-CzO8tIKf.js";import"./sha256-CJpng67C.js";import"./SwipeableActionBlock-DAYqiZWZ.js";import"./BulkActions-DTQktgOH.js";import"./Canvas-DTn6R6Gm.js";import"./ComboBox-CRBvNhyb.js";import"./DateTimePicker-DxEm634c.js";import"./DndList-DJ8dwYev.js";import"./ErrorPage-L7Ku26u6.js";import"./FileButton-C5_ucL20.js";import"./FileIcon-NOqdJF0H.js";import"./FileList-CjGkSqc8.js";import"./Form-DjHoD7Uh.js";import"./ImageCarousel-36NyAQhq.js";import"./use-dobby-context-CRVAUSvC.js";import"./Loader-yCy-tuy-.js";import"./NumberField-ChGhS7QI.js";import"./PDFViewer-CvGbTJlu.js";import"./PDFViewerModal-XSvcRUPM.js";import"./PhoneNumberField-CS-zYzSY.js";import{P as v}from"./Pill-bxO7dmgs.js";import"./RadioGroup-F_XdH_A5.js";import"./RichTextEditor-DU72W0DP.js";import"./Select-BctNBZDw.js";import"./SelectBase-BghNQWuq.js";import"./Skeleton-DozGZyIi.js";import"./Switch-D6oF-6jP.js";import{A as B}from"./Ag-grid-table-Cj7mPDw-.js";import"./TextField-CUepwB17.js";import"./Toolbar-CBzcszfw.js";import"./Tooltip-BnQpK9jh.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CVvYJJz8.js";import"./utils-Bd97OsuJ.js";import"./ButtonBase-CMFW6auj.js";import"./Button-CpJ7snnK.js";import"./FocusScope-ChueHnOn.js";import"./Text-D3Raw8n8.js";import"./usePress-Dy-QiNP_.js";import"./index-CbyHUPuW.js";import"./index-Zlv7x9BX.js";import"./Button-B_LfpQBC.js";import"./index-jDvyA-sL.js";import"./RSPContexts-B3cxRrW8.js";import"./Separator-DAynwQ_I.js";import"./index-I8rqpXNn.js";import"./VisuallyHidden-D4CgCFfs.js";import"./ArrowBack-C0fC5dKT.js";import"./Label-C0qwjwPj.js";import"./index-BHjj78yl.js";import"./Label-CQh8jyZ0.js";import"./ErrorMessage-h5ndFz97.js";import"./DeleteForever-BBmX2LxS.js";import"./SingleComboBox-lG5tuYfG.js";import"./ListBox-BilcoKLE.js";import"./Check-iPK-h5nU.js";import"./ListBox-F4HsMzTf.js";import"./DragAndDrop-Boov5mwc.js";import"./useLabel-CYOjoylC.js";import"./Input-DSX22w90.js";import"./variants-qMAhUxzD.js";import"./ChevronBackward-BpPgaX0R.js";import"./ChevronForward-DQn6X9p7.js";import"./Calendar-CO_ZWZa0.js";import"./sortable.esm-DKgacx7Q.js";import"./DragIndicator-D_liqpn6.js";import"./use-toast-C0OAoH0C.js";import"./Description-DjkT2qt0.js";import"./Zip-CzXswCuQ.js";import"./Download-NQiHA-Ec.js";import"./Warning-BS8oeIUO.js";import"./index-C7CL5OQ7.js";import"./Modal-BSY-t_rE.js";import"./use-is-mobile-DXvYaDkK.js";import"./Replay-XIt-t8lp.js";import"./KeyboardArrowDown-DCil_8Sa.js";import"./KeyboardArrowUp-BZiYAayU.js";import"./FieldError-DHth2sLA.js";import"./Form-de9bAdkX.js";import"./Group-mo5mZbB2.js";import"./useFormReset-eqP6z5tW.js";import"./useTextField-Dal14r8V.js";import"./Divider-DDpz6BH1.js";import"./Remove-D86aTneI.js";import"./useToggleState-CMqqZYpX.js";import"./Menu-BarkHWsj.js";import"./MoreHoriz-BHP0aSE2.js";import"./Checkbox-B-mn-IrF.js";import"./CheckIndeterminateSmall-r4yo_rdV.js";import"./TableOptions-DUfbrP0n.js";import"./ViewColumn-Bn7tdTLD.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,C,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var h,R,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(R=n.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var T,A,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Ro=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Ro as __namedExportsOrder,ho as default};
