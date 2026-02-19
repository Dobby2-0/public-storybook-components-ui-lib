import{j as x}from"./iframe-Dt5ZFruU.js";import"./sha256-CvJmP0Q_.js";import"./DetailPageHeader-ChND-jxe.js";import"./BulkActions-jWFGJeSq.js";import"./Canvas-Cn4D9mVV.js";import"./ComboBox-EqPK-xGJ.js";import"./DateTimePicker-B9e9koF4.js";import"./DndList-DhdaXh0X.js";import"./ErrorPage-BD-FGFmP.js";import"./FileButton-Cn5GVqkF.js";import"./FileIcon-DKmuSvoP.js";import"./FileList-C8Hvhlf9.js";import"./Form-Ddt670Z_.js";import"./ImageCarousel-bwxW4im5.js";import"./ListFilters-DIPY7aW7.js";import"./Loader-tH2ByKI6.js";import"./NumberField-302_8gtJ.js";import"./PDFViewer-Btat8wTB.js";import"./PDFViewerModal-B9HGR-CX.js";import"./PhoneNumberField-c-4uxd-F.js";import{P as v}from"./Pill-C3JU_pPu.js";import"./RichTextEditor-HUWXskzN.js";import"./Select-4Trd2G7Q.js";import"./filter-persistence-B5Y_gDCQ.js";import"./Skeleton-B4UxzRqi.js";import{A as B}from"./Ag-grid-table-DXfoG19w.js";import"./Toolbar-BCJ1pjQW.js";import"./Tooltip-CZ_WLqYu.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-D1enKiq_.js";import"./utils-C4ti3hoT.js";import"./ButtonBase-D_JUJID5.js";import"./Button-DAxL8e33.js";import"./FocusScope-DiyDJAao.js";import"./Text-DMLuPAoM.js";import"./usePress-B5edpycu.js";import"./index-IBUjkAG-.js";import"./index-g_UJPtR6.js";import"./Button-Q-rhjQWd.js";import"./index-BkhYyv-i.js";import"./RSPContexts-CVFJqONS.js";import"./Separator-Ci-72ggl.js";import"./index-DBx7LphP.js";import"./VisuallyHidden-Blst52FW.js";import"./ArrowBack-DXWuQFTB.js";import"./Label-CV5AQAa6.js";import"./index-DHbAauA2.js";import"./Label-BWg-kvBK.js";import"./ErrorMessage-BKkaBBDf.js";import"./DeleteForever-COxeskl5.js";import"./SingleComboBox-Bua4EQsr.js";import"./ListBox-DXMGCIav.js";import"./Check-BF1HKG2M.js";import"./ListBox-BR1knf9B.js";import"./DragAndDrop-CUNHBJe0.js";import"./useLabel-DiE2T77K.js";import"./Input-B0eU3Xjs.js";import"./variants-DctCfy_Q.js";import"./ChevronBackward-BXlux3p7.js";import"./ChevronForward-DlqW5bN2.js";import"./Calendar-Sg7N6_wh.js";import"./sortable.esm-CAb2zRCV.js";import"./DragIndicator-W6QfnTmF.js";import"./use-toast-DWxzULVu.js";import"./Description-DNc7fYx9.js";import"./Zip-Bag9l4-a.js";import"./Download-eIE3zhv0.js";import"./Warning-B_yiY2uG.js";import"./index-C7CL5OQ7.js";import"./Modal-DZFjXjFx.js";import"./use-is-mobile-C6-y1P-z.js";import"./Replay-CRA7TiUT.js";import"./KeyboardArrowDown-Bg1hzzVq.js";import"./KeyboardArrowUp-D0XdnNWG.js";import"./FieldError-B8KXzh65.js";import"./Form-2Wn2onfy.js";import"./Group-C9X_Rt1E.js";import"./useFormReset-DSn2odcv.js";import"./useTextField-CLLa2ptq.js";import"./Divider-DmFw0wGb.js";import"./Remove--RfAd5BL.js";import"./TextField-gnTz1vQq.js";import"./Menu-BhXknVYp.js";import"./MoreHoriz-CiFaerxE.js";import"./Checkbox-CNF7fp5X.js";import"./CheckIndeterminateSmall-Dq4wVn6j.js";import"./useToggleState-7YsYUvGz.js";import"./TableOptions-jzTKpfAJ.js";import"./ViewColumn-mjrCKhAB.js";const Co={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
