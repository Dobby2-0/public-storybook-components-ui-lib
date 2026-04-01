import{j as x}from"./iframe-CclMH9VR.js";import"./sha256-DKojpFWo.js";import"./SwipeableActionBlock-Cb1KP1Gn.js";import"./BulkActions-Ct_r5YFT.js";import"./IconButton-CP_bCQBG.js";import"./Canvas-C1kxtrzj.js";import"./ComboBox-C4qMbfh0.js";import"./DateTimePicker-C_mMAE2I.js";import"./DndList-Pgs2SPH9.js";import"./ErrorPage-BVVqEh6N.js";import"./FileButton-B3MXjpOe.js";import"./FileIcon-Dx_K1Wt9.js";import"./FileList-RSiE7rww.js";import"./Form-Nm0q3PMl.js";import"./ImageCarousel-BMw5nkOO.js";import"./use-dobby-context-IZgKpCdk.js";import"./Loader-D1v0GZVH.js";import"./NumberField-XIdR_wbc.js";import"./PDFViewer-DAuGF6LD.js";import"./PDFViewerModal--_6po5Ok.js";import"./PhoneNumberField-BWhHTXuK.js";import{P as v}from"./Pill-CkGGkGFw.js";import"./RichTextEditor-ClLhZx57.js";import"./SelectBase-D0i3JSIG.js";import"./Skeleton-Dvcoq1Ox.js";import{A as B}from"./Ag-grid-table-Cz5sTz-Z.js";import"./Toolbar-3GDfnLRf.js";import"./Tooltip-DtBV07J9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGiYZWoT.js";import"./utils-DJI4otPj.js";import"./ButtonBase-B3kH3Dzv.js";import"./Button-DEkGiaJH.js";import"./FocusScope-BzOOSsDq.js";import"./Text-CLcNQ-qw.js";import"./usePress-CTnlVzrZ.js";import"./index-CwFyXgha.js";import"./index-BZEIGqvC.js";import"./index-BfV2CO3M.js";import"./RSPContexts-DO8ewBZW.js";import"./Separator-_pJkmuEd.js";import"./index-BtyWfSph.js";import"./VisuallyHidden-bBX73WO-.js";import"./ArrowBack-jwx1wtf_.js";import"./Select-BYfjOkXB.js";import"./Label-BAt6-cjz.js";import"./index-CpvlhjiP.js";import"./Label-D4SAJHly.js";import"./ErrorMessage-D3cINjP3.js";import"./DeleteForever-Bdef_Vhb.js";import"./SingleComboBox-qxCbFlCE.js";import"./ListBox-BTdfh27r.js";import"./Check-BaAWWL6Q.js";import"./ListBox-ByrpE-RK.js";import"./DragAndDrop-BokVt44Y.js";import"./useLabel-C6ErH-yb.js";import"./Input-lwdSjEwT.js";import"./variants-njxxwcFl.js";import"./ChevronBackward-DvZM91hO.js";import"./ChevronForward-La2bl6_q.js";import"./Calendar-DdaF2lC-.js";import"./sortable.esm-DWtyMb08.js";import"./DragIndicator-BffdB2dN.js";import"./use-toast-BhXjTFTp.js";import"./Description-CvmrJ9du.js";import"./Zip-Ms7juL5S.js";import"./Download-Do9rwQtn.js";import"./Warning-IftC5beX.js";import"./index-C7CL5OQ7.js";import"./Modal-lbTsd41z.js";import"./use-is-mobile-C6j7bZXi.js";import"./Replay-BeLaSXE7.js";import"./KeyboardArrowDown-XcSnIwax.js";import"./KeyboardArrowUp-BSiKXtgr.js";import"./FieldError-B-RLIZh-.js";import"./Form-CLW0ei5f.js";import"./Group-VjK_Di8t.js";import"./useFormReset-COqaC56L.js";import"./useTextField-C2YKlTHq.js";import"./Divider-CI1yhkNl.js";import"./Remove-QgPCxc4l.js";import"./TextField-Bm1dF4_d.js";import"./Menu-BSkA-IaS.js";import"./MoreHoriz-C5QLZcYw.js";import"./Checkbox-DkUI7D6o.js";import"./CheckIndeterminateSmall-BANWNnhV.js";import"./useToggleState-DjfuC6r0.js";import"./TableOptions-DF6l5rWs.js";import"./ViewColumn-Bf2Iaf4a.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
