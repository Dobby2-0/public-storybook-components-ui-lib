import{j as x}from"./iframe-JlWdiiHl.js";import{A as v}from"./DetailPageHeader-BIkzNsJa.js";import"./BulkActions-DiUiCme4.js";import"./Canvas-Z_NSxsGA.js";import"./DateTimePicker-DPowqRCh.js";import"./DndList-B1x6f4rP.js";import"./ErrorPage-DsE4l2cC.js";import"./FileIcon-D13FkPfo.js";import"./FileList-B8IwUKHC.js";import"./ListFilters-prcieoAk.js";import"./Loader-yx3fH-TK.js";import"./NumberField-h3Q6eXyu.js";import"./PDFViewer-ifQrzzdp.js";import{P as B}from"./Pill-BpVr6TYj.js";import"./RadioGroup-B3in0CDn.js";import"./Select-CIT7ufcF.js";import"./SelectBase-Bbck38Gg.js";import"./TextField-eACxTnCE.js";import"./Toolbar-BsEq2wSA.js";import"./Tooltip-Cmi8As55.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BwOYIfxd.js";import"./utils-B9FUAslD.js";import"./ButtonBase-ClZRLPcQ.js";import"./Button-BK1PxoQt.js";import"./FocusScope-CP5yk3g1.js";import"./Hidden-CPBmKffQ.js";import"./usePress-CLQ8F3f5.js";import"./index-w7GDP4sO.js";import"./index-DrDOyqoK.js";import"./Label-Cozg5pd1.js";import"./index-hIpYKxdI.js";import"./ErrorMessage-Ci8zoWda.js";import"./Button-B0c4j5xB.js";import"./index-ZEaINpS0.js";import"./RSPContexts-BwV0qXfK.js";import"./Separator-CXMyKefx.js";import"./Text-DHtVhlPo.js";import"./VisuallyHidden-BHkR_MPK.js";import"./Menu-BOclpMxU.js";import"./Check-Cb5d6i5Y.js";import"./ChevronForward-CH0PbmrI.js";import"./TableOutlined-BstZpy1U.js";import"./Modal-B3BPmvJz.js";import"./MoreHoriz-DJiaH7_M.js";import"./Checkbox-6CtY_9kf.js";import"./CheckIndeterminateSmall-CIpvBwYI.js";import"./Form-vyoKoPzQ.js";import"./useToggleState-CioIQ3we.js";import"./useFormReset-EWgFTMOs.js";import"./TableOptions--hN_02iu.js";import"./sortable.esm-Cymz0TwX.js";import"./DragIndicator-CtzZX2s8.js";import"./ViewColumn-CUBFEZp4.js";import"./KeyboardArrowDown-Dkg1zN07.js";import"./Search-Dr0nUu7n.js";import"./Underline-R9cZCt3j.js";import"./ArrowBack-q3xWKirs.js";import"./DeleteForever-BgK5_fnr.js";import"./variants-4kH4djqJ.js";import"./ChevronBackward-BbK5jXni.js";import"./Calendar-rvsLX6j7.js";import"./Description-DBxom4ao.js";import"./Zip-Bso_cuHN.js";import"./Download-C4Wvd07n.js";import"./Warning-DZ2APxsx.js";import"./ComboBox-31WOtWNo.js";import"./ListBox-DxlabwBd.js";import"./ListBox-B5O-leqc.js";import"./DragAndDrop-f39aXZ9P.js";import"./useLabel-Ck6TnA8s.js";import"./Input-Dz_NBn-4.js";import"./use-is-mobile-01tpQQEt.js";import"./FilterListOff-B1XX2r4e.js";import"./KeyboardArrowUp-LPLqwFub.js";import"./FieldError-kogSkTAT.js";import"./Group-cK0uO5xB.js";import"./useTextField-DIidJVY1.js";import"./Divider-DXeBYE44.js";import"./Remove-BiV5UJhb.js";const co={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)}}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
