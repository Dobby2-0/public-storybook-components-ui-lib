import{j as x}from"./iframe-C8WqZKtX.js";import"./sha256-PDO49cWt.js";import"./DetailPageHeader-ai9XzjnB.js";import"./BulkActions-h7TzKqHG.js";import"./Canvas-C3X-Jef3.js";import"./DateTimePicker-B_8IyNsI.js";import"./DndList-CpKA1RuL.js";import"./ErrorPage-Dt78QA4f.js";import"./FileButton-CN32BuzV.js";import"./FileIcon-BynEBA04.js";import"./FileList-DlhdbeYM.js";import"./Form-CuLwBnHk.js";import"./ImageCarousel-9aLs8DPa.js";import"./ListFilters-mRDHtBql.js";import"./Loader-yHUC8L0D.js";import"./NumberField-CFn1EbZN.js";import"./PDFViewer-Dw6h5ZUe.js";import"./PDFViewerModal-WUF-0UaY.js";import"./PhoneNumberField-OazQahVh.js";import{P as v}from"./Pill-BRKEhzW9.js";import"./RichTextEditor-BUaiAYko.js";import"./Select-Bsw7eVEQ.js";import"./filter-persistence-CwWdQER7.js";import"./Skeleton-CyPGiFZ3.js";import{A as B}from"./Ag-grid-table-D7ebIBBK.js";import"./Toolbar-Ch-2zCrs.js";import"./Tooltip-Cj2CoiKx.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Bx1OvcWF.js";import"./utils-jtSVojHF.js";import"./ButtonBase-CHzHNBmp.js";import"./Button-NHtOoMQI.js";import"./FocusScope-B02YIt_w.js";import"./Text-CP-wYi1U.js";import"./usePress-BMPY-rYn.js";import"./index-Bkmr4GuA.js";import"./index-CMotOyWi.js";import"./Button-XNcAICl1.js";import"./index-lbB97veH.js";import"./RSPContexts-Cq9bAEtH.js";import"./Separator-Ce1Am9rV.js";import"./index-C9ZTeJRU.js";import"./VisuallyHidden-BHi9umrS.js";import"./ArrowBack-DNP8hfrb.js";import"./Label-dGI1e1v9.js";import"./index-C6r7v-kg.js";import"./Label-BVJGCbyg.js";import"./ErrorMessage-Cj8uOXd1.js";import"./DeleteForever-Bt7zQ5cL.js";import"./variants-DhB_cDn7.js";import"./ChevronBackward-CVhIXZ8j.js";import"./ChevronForward-nuh7y7Mb.js";import"./Calendar-C2ToxVSj.js";import"./sortable.esm-DIzPzkSf.js";import"./DragIndicator-CSTf1vSg.js";import"./use-toast-C9g4TaUc.js";import"./Description-nf9H86uL.js";import"./Zip-D0JmseL6.js";import"./Download-CkRAzFRa.js";import"./Warning-DSxnPQCN.js";import"./index-C7CL5OQ7.js";import"./Modal-C3l18qjV.js";import"./ComboBox-B-DL-nLn.js";import"./SingleComboBox-Cu8eHi87.js";import"./ListBox-Dd7pkrRQ.js";import"./Check-9H6Sxgn4.js";import"./ListBox-58HMCfy9.js";import"./DragAndDrop-70409Xm5.js";import"./useLabel-OKP0bQxR.js";import"./Input-DDBDNvYp.js";import"./use-is-mobile-Di2LuYnw.js";import"./Replay-B-o7SmCt.js";import"./KeyboardArrowDown-C-TxniAy.js";import"./KeyboardArrowUp-CYngkDtx.js";import"./FieldError-BdjOXwcV.js";import"./Form-Dzwvz71O.js";import"./Group-xRlHC7YN.js";import"./useFormReset-B2Il2kp3.js";import"./useTextField-1vH0ptjy.js";import"./Divider-Cr2OrR-m.js";import"./Remove-BUc6ZK48.js";import"./TextField-BgpmOE9T.js";import"./Menu-B1J5ppJ-.js";import"./MoreHoriz-fzkWP4ms.js";import"./Checkbox-BenEnu-7.js";import"./CheckIndeterminateSmall-BD8qKrVp.js";import"./useToggleState-Cgo_nGmG.js";import"./TableOptions-D1qt8sbB.js";import"./ViewColumn-MhT86M0Q.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Do=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,Do as __namedExportsOrder,Co as default};
