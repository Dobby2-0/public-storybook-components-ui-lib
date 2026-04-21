import{j as L}from"./iframe-BKjj90AX.js";import"./sha256-DA-kmTof.js";import"./SwipeableActionBlock-DslWDfXi.js";import"./BulkActions-WlD9uwmr.js";import"./Canvas-BKPUL4Dj.js";import"./CardBasic-B4RQ_8yz.js";import"./CardList-C9E8hZHb.js";import"./Checkbox--SiAKXAI.js";import"./ComboBox-Bg4oTqEI.js";import"./DateTimePicker-puJTcOib.js";import"./DndList-BuaXYBT0.js";import"./EmptyState-DpMrRO46.js";import"./ErrorPage-TNOKyqHE.js";import"./FileButton-C7AlxaIo.js";import"./FileIcon-BgTWruHR.js";import"./FileList-CjJvixMN.js";import"./Form-9WonkxdS.js";import"./ImageCarousel-uy5dR_Md.js";import"./use-dobby-context-C9Nu9XPL.js";import"./Loader-CJMd6EFT.js";import"./NumberField-DkWznRYI.js";import"./PDFViewer-B3yN06kO.js";import"./PDFViewerModal-DF7YZP12.js";import"./PhoneNumberField-Ci48Q54W.js";import{P as _}from"./Pill-DS72AxaO.js";import"./RadioGroup-Bc8cP7mw.js";import"./RichTextEditor-COR-yakR.js";import"./Select-COVRMDzE.js";import"./SelectBase-ChcQSQTu.js";import"./Skeleton-Bkg0KV8T.js";import{A as H}from"./Ag-grid-table-Dr8zajwA.js";import"./Toolbar-L-1-rb83.js";import"./Tooltip-Dv4X8Hdv.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DeFAso3h.js";import"./utils-BQGmi-Gg.js";import"./ButtonBase-CEBwc4l7.js";import"./Button-D2FAtAKR.js";import"./FocusScope-D1KSZ3Js.js";import"./Text-B3lMB8qG.js";import"./usePress-sevdLkt9.js";import"./index-CfC-8zwp.js";import"./index-CQqQvl1z.js";import"./Button-cF1FIGpi.js";import"./index-CH7xxPN0.js";import"./RSPContexts-DMIetZuf.js";import"./Separator-BaLphUo7.js";import"./index-D_aTrX6k.js";import"./VisuallyHidden-lh9Q8SKc.js";import"./ArrowBack-BT50zT2w.js";import"./Label-D4owk67k.js";import"./index-ahp2oqBX.js";import"./Label-C2v2K1Ys.js";import"./ErrorMessage-CuJFGUyO.js";import"./DeleteForever-Pxr_3-a0.js";import"./Check-CJ5aN-e4.js";import"./CheckIndeterminateSmall-_58-dGHD.js";import"./Form-PPT6U8sl.js";import"./useToggleState-AX04JU28.js";import"./useFormReset-DzOylLjz.js";import"./SingleComboBox-BkhNxZdg.js";import"./ListBox-CCuuPQhv.js";import"./ListBox-YLWPjoZE.js";import"./DragAndDrop-C-rNiGwR.js";import"./useLabel-Bp8zyRi4.js";import"./Input-aDyxqRAx.js";import"./variants-yCI5tnr_.js";import"./ChevronBackward-kfg3Le3K.js";import"./ChevronForward-BklfNqfo.js";import"./Calendar-CV3fimRI.js";import"./sortable.esm-DZ4Y7LyO.js";import"./DragIndicator-DtEgXOmE.js";import"./Search-DXYhoder.js";import"./use-toast-mSVIMWzm.js";import"./Description-CK0-x7eO.js";import"./Zip-CofRxyIM.js";import"./Download-BDjuDwin.js";import"./Warning-9k3O-bjY.js";import"./index-C7CL5OQ7.js";import"./Modal-7DjZJfS5.js";import"./use-is-mobile-BoU0dbZ_.js";import"./Replay-C4viWRHP.js";import"./KeyboardArrowDown-Db9HMjK_.js";import"./KeyboardArrowUp-ClO_wBOp.js";import"./Group-BydyQFHO.js";import"./FieldError-CT8UKnep.js";import"./useTextField-BpbjNyH_.js";import"./Divider-wtFZBgwR.js";import"./Add-C90-CNvd.js";import"./Remove-z0-NJxGg.js";import"./TextField-ELnKCMBG.js";import"./Menu-xvWtdE1U.js";import"./MoreHoriz-DuGxllDR.js";import"./TableOptions-BQl7Sh8e.js";import"./ViewColumn-BY-IJ6Mv.js";const jo={title:"Components/Table/Ag-Grid-Table",component:H,parameters:{layout:"fullscreen"}},Y=e=>L.jsx(_,{variant:"warning",children:e.value?"Electric":"Gas"}),p=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:Y}],m=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],q={getRows(e){const F=m.slice(e.startRow,e.endRow);e.successCallback(F,m.length)}},o={args:{columnDefs:p,datasource:q,totalCount:m.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},a={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},i={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}},J={getRows(){}},l={args:{columnDefs:p,datasource:J,addRowButton:!0,selectionMode:"multiple",enableSelectAll:!0}},K={getRows(e){e.successCallback([],0)}},c={args:{columnDefs:p,datasource:K,themeType:"dobby"}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource,
    totalCount: data.length,
    onRowSelectionChange: ids => {
      console.warn("Selected row IDs:", ids);
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "classic",
    addRowButton: true
  }
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,D,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    themeType: "dobby"
  }
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var h,R,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectOnRowClick: true,
    selectionMode: "single",
    onRowSelectionChange: ids => {
      console.warn("Selected row ID:", ids);
    }
  }
}`,...(y=(R=n.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var T,I,A;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,k,E;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "ag-grid-component"
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,x,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,W,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: slowDatasource,
    addRowButton: true,
    selectionMode: "multiple",
    enableSelectAll: true
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,P,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columnDefs,
    datasource: emptyDatasource,
    themeType: "dobby"
  }
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Go=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems","LoadingState","EmptyState"];export{r as ClassicTheme,o as Default,t as DobbyTheme,c as EmptyState,l as LoadingState,a as MultipleSelection,n as SingleRowSelection,i as WithMenuItems,s as WithStoredConfig,Go as __namedExportsOrder,jo as default};
