import{j as x}from"./iframe-C1iAjgAe.js";import"./sha256-8Aquurzw.js";import"./SwipeableActionBlock-05ZI99Hd.js";import"./BulkActions-BLGGjB5z.js";import"./Canvas-S2lDtb4h.js";import"./Checkbox-D6DWO9z1.js";import"./DateTimePicker-BmUKypd_.js";import"./DndList-DoPJpYo0.js";import"./ErrorPage-DB20xMof.js";import"./FileButton-BwfNbP5f.js";import"./FileIcon-BDSgP31R.js";import"./FileList-DgKNP0eM.js";import"./Form-2iZZtokh.js";import"./ImageCarousel-DCECWeB6.js";import"./use-dobby-context-Dul5DH6K.js";import"./Loader-CPB7YGoD.js";import"./NumberField-B59JZLxB.js";import"./PDFViewer-LPfDpoOv.js";import"./PDFViewerModal-CCANbL-a.js";import"./PhoneNumberField-0TSDl7NN.js";import{P as v}from"./Pill-C6JqJc8l.js";import"./RichTextEditor-Cb8-oiNR.js";import"./SelectBase-B8KyAfdd.js";import"./Skeleton-CCS9eNEl.js";import"./Switch-_iysvXNh.js";import{A as B}from"./Ag-grid-table-CjKvftWQ.js";import"./TextField-58hV4C3B.js";import"./Toolbar-0oZkwF6-.js";import"./Tooltip-BONxuAzc.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-C54kcoL9.js";import"./utils-DS_EBhle.js";import"./ButtonBase-DlVARpRa.js";import"./Button-DxBzZRHu.js";import"./FocusScope-Bh0s01to.js";import"./Text-Bw1fWTcP.js";import"./usePress-DxKdZJ7l.js";import"./index-BduT9P8-.js";import"./index-BV3RjC92.js";import"./Button-CSC6fGuF.js";import"./index-DHOqbfdy.js";import"./RSPContexts-CHokJQ0f.js";import"./Separator-D-C27o-b.js";import"./index-CD2zr-YI.js";import"./VisuallyHidden-BHHefcMY.js";import"./ArrowBack-24BnBFTK.js";import"./Select-67t3Q3T4.js";import"./Label-DCduzJQR.js";import"./index-DrPILTmI.js";import"./Label-hDNXEwnM.js";import"./ErrorMessage-DnUn848V.js";import"./DeleteForever-CLWkjlb-.js";import"./Check-CkpS3TCT.js";import"./CheckIndeterminateSmall-UyDGXEhc.js";import"./Form-3VeWiql2.js";import"./useToggleState-DUjO-SVJ.js";import"./useFormReset-CsVnh12V.js";import"./variants-DNyNmIcQ.js";import"./ChevronBackward-BUdgy0WX.js";import"./ChevronForward-Bypr1tgl.js";import"./Calendar-DF1cJRBW.js";import"./sortable.esm-BRHxzzKO.js";import"./DragIndicator-CeMCyrSW.js";import"./use-toast-CfPkqGhi.js";import"./Description-CST_04jD.js";import"./Zip-CYSId1e8.js";import"./Download-CBhIdbfA.js";import"./Warning-BeQX6xyy.js";import"./index-C7CL5OQ7.js";import"./Modal-BlknBZVR.js";import"./ComboBox-BlYwSwFo.js";import"./SingleComboBox-Au60kABl.js";import"./ListBox-Cw9Jg25T.js";import"./ListBox-CQNGW6X9.js";import"./DragAndDrop-Bs-eQgJx.js";import"./useLabel-BfELL8BC.js";import"./Input-C6FwacGr.js";import"./use-is-mobile-BEIr0ssv.js";import"./Replay-BxZ42khK.js";import"./KeyboardArrowDown-B7GfXeTE.js";import"./KeyboardArrowUp-BZXuZBsN.js";import"./FieldError-cLMSgHqM.js";import"./Group-DwG8buS5.js";import"./useTextField-D49IVq4B.js";import"./Divider-CosQEgtS.js";import"./Remove-BzNrDuM6.js";import"./Menu-BuvIy3Ab.js";import"./MoreHoriz-KMqZ4BJo.js";import"./TableOptions-BH1Hgr6Q.js";import"./ViewColumn-BRfo71-d.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ho=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,n as MultipleSelection,i as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,ho as __namedExportsOrder,Do as default};
