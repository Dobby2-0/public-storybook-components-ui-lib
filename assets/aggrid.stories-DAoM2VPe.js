import{j as x}from"./iframe-Dbk9NPzZ.js";import"./sha256-DG1qatbY.js";import"./SwipeableActionBlock-COA_V7gc.js";import"./BulkActions-Cb8Bwiag.js";import"./Button-DbyjWNlw.js";import"./IconButton-BAz_VGqy.js";import"./Canvas-BkmbELuv.js";import"./Checkbox-DrzH_ElG.js";import"./ComboBox-DSUU0LA1.js";import"./DateTimePicker-DAq1zQKU.js";import"./DndList-YhjbuOZo.js";import"./ErrorPage-h6fnmqJL.js";import"./FileButton-BipjkigW.js";import"./FileIcon-mcppYb1D.js";import"./FileList-BIuiDyBc.js";import"./Form-C2gZHPc3.js";import"./ImageCarousel-paL_ghuM.js";import"./use-dobby-context-Ctqapcvu.js";import"./Loader-BmfIixyy.js";import"./NumberField-2YannSmX.js";import"./PDFViewer-D9MDph9c.js";import"./PDFViewerModal-DgM4VzPz.js";import"./PhoneNumberField-DmUp0dQH.js";import{P as v}from"./Pill-BF8jBIsv.js";import"./RichTextEditor-DbBjdv6k.js";import"./Select-EO-SVPFg.js";import"./SelectBase-Bz47YmvU.js";import"./Skeleton-FeQ_Wlb4.js";import"./Switch-ITanCSVV.js";import{A as B}from"./Ag-grid-table-CrkNwYOI.js";import"./TextField-C49_J4AV.js";import"./Toolbar-CrVvr8Bg.js";import"./Tooltip-UK14ApDR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bv-T5nFX.js";import"./utils-B9xoQpOZ.js";import"./Button-DRkDMNdH.js";import"./FocusScope-BRqG8V6M.js";import"./Text-BpaktYUk.js";import"./usePress-Clz_n7Us.js";import"./index-TH42aMXO.js";import"./index-BVWlCnqj.js";import"./RSPContexts-iH8h1ZVx.js";import"./Separator-CjOr100w.js";import"./index-CxzSocwj.js";import"./VisuallyHidden-CtWysAFz.js";import"./ArrowBack-SgvWX8YO.js";import"./ButtonBase-Cps2nh9f.js";import"./Label-cKI6eZFU.js";import"./index-BwY6G9Be.js";import"./Label-DyqbNj-i.js";import"./ErrorMessage-K-ECK15w.js";import"./DeleteForever-DcKMjU8b.js";import"./Check-DwbWtzEO.js";import"./CheckIndeterminateSmall-BeqOcJ8-.js";import"./Form-yKrHej8T.js";import"./useToggleState-Bug_t-82.js";import"./useFormReset-DfqEy6da.js";import"./SingleComboBox-BGAYKzG7.js";import"./ListBox-C8KLv67H.js";import"./ListBox-BxXmjCPp.js";import"./DragAndDrop-DosNSucx.js";import"./useLabel-CVu8HgwW.js";import"./Input-G6Xu4jWC.js";import"./variants-DiM3a8R1.js";import"./ChevronBackward-_ll--s99.js";import"./ChevronForward-D2SH_7fi.js";import"./Calendar-5LCXss9-.js";import"./sortable.esm-CkiQIzg-.js";import"./DragIndicator-DuMYD6JZ.js";import"./use-toast-DAdj4AL-.js";import"./Description-CpEB-YvJ.js";import"./Zip-DzhZzRUa.js";import"./Download-DgbqypOl.js";import"./Warning-D7pYKcVV.js";import"./index-C7CL5OQ7.js";import"./Modal-c0k39qDj.js";import"./use-is-mobile-DKoewzf8.js";import"./Replay-CyuUy9nQ.js";import"./KeyboardArrowDown-hQA6mNN1.js";import"./KeyboardArrowUp-CX3qDrk0.js";import"./FieldError-CF7YGoHc.js";import"./Group-CX2JXGdJ.js";import"./useTextField-Dv7PuVcG.js";import"./Divider-DcT3IcUk.js";import"./Remove-Cd8IeUjK.js";import"./Menu-CeRsgW7n.js";import"./MoreHoriz-CsMV7edY.js";import"./TableOptions-BXl2hwqR.js";import"./ViewColumn-C56xyDRE.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
