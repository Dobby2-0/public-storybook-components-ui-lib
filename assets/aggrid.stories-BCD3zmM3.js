import{j as x}from"./iframe-C1WlA_sY.js";import"./sha256--kUdW-Qc.js";import"./SwipeableActionBlock-Dr9d9UqG.js";import"./BulkActions-fZXtzH0K.js";import"./IconButton-Bifcy-fm.js";import"./Canvas-BKbTi4uJ.js";import"./Checkbox-BR2-5At7.js";import"./ComboBox-Cg9CpA0_.js";import"./DateTimePicker-C_ioPQbc.js";import"./DndList-CxHDOn9c.js";import"./ErrorPage-BQrMR-Ed.js";import"./FileButton-DAMfG8zO.js";import"./FileIcon-qPiswuUP.js";import"./FileList-BQYtKC0D.js";import"./Form-BLOU5lTu.js";import"./ImageCarousel-CTu5T9XH.js";import"./use-dobby-context-DzsjOwCK.js";import"./Loader-CKANN067.js";import"./NumberField-7DSJWECx.js";import"./PDFViewer-uUJOQ_vw.js";import"./PDFViewerModal-XQ0rgsc6.js";import"./PhoneNumberField-kI3HSCfD.js";import{P as v}from"./Pill-CDwSasNx.js";import"./RadioGroup-zCWfurmN.js";import"./RichTextEditor-BvqRPdxT.js";import"./Select-DAPksUmX.js";import"./SelectBase-D2rOiX7h.js";import"./Skeleton-2iI-CGbq.js";import"./Switch-BT-NZA2V.js";import{A as B}from"./Ag-grid-table-Bf89MvHO.js";import"./Toolbar-Dxe3JYof.js";import"./Tooltip-CdjRkZRE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BYsnAU19.js";import"./utils-BOdOtusu.js";import"./ButtonBase-DIeRkI3C.js";import"./Button-C5TQC8Oa.js";import"./FocusScope-BYCV_QfQ.js";import"./Text-Dr8JR3Hw.js";import"./usePress-BzRlJuKw.js";import"./index-BuXA5Et1.js";import"./index-DA45O8xF.js";import"./index-DBm6DM46.js";import"./RSPContexts-CpK07g3-.js";import"./Separator-CT2jiVXP.js";import"./index-CGt66q3u.js";import"./VisuallyHidden-CQg0wCvx.js";import"./ArrowBack-D32zlq2Y.js";import"./Label-BSwcmczL.js";import"./index-Bwv-tviQ.js";import"./Label-BmTgxGGY.js";import"./ErrorMessage-CySwlmQA.js";import"./DeleteForever-CAjgKYcP.js";import"./Check-CnS3B5P0.js";import"./CheckIndeterminateSmall-v2QS3R7s.js";import"./Form-uGs8sdRW.js";import"./useToggleState-Bh8oCb5g.js";import"./useFormReset-Dru9koG-.js";import"./SingleComboBox-D4iUAf-l.js";import"./ListBox-CWSX9QwH.js";import"./ListBox-wjqhOybS.js";import"./DragAndDrop-DFfJixUn.js";import"./useLabel-BNugXr2z.js";import"./Input-DonHzvoM.js";import"./variants-MEBY1FFp.js";import"./ChevronBackward-sOWuBP4N.js";import"./ChevronForward-Dizgy0xy.js";import"./Calendar-CjEA50o_.js";import"./sortable.esm-7qaJep0i.js";import"./DragIndicator-Det47h__.js";import"./use-toast-D5ePxWKA.js";import"./Description--yAcM5MC.js";import"./Zip-DxNFDjGy.js";import"./Download-DV_TWmPC.js";import"./Warning-BaKl2fOl.js";import"./index-C7CL5OQ7.js";import"./Modal-Dj7IsLzl.js";import"./use-is-mobile-zkoxgU_T.js";import"./Replay-BjvOC981.js";import"./KeyboardArrowDown-BMnQhi0Q.js";import"./KeyboardArrowUp-Drh0_JP1.js";import"./FieldError-OfPrGE2g.js";import"./Group-DihpXM_7.js";import"./useTextField-Crc9s_90.js";import"./Divider-BueYVuil.js";import"./Remove-BsQa5XiN.js";import"./TextField-2MGaVYVI.js";import"./Menu-BI9tBwib.js";import"./MoreHoriz-DgzKPMiw.js";import"./TableOptions-B7RxJpzO.js";import"./ViewColumn-DFY-K75m.js";const ho={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
