import{j as x}from"./iframe-DigKr1Om.js";import{A as v}from"./DetailPageHeader-BWlYzItW.js";import"./BulkActions-DO-hJtWQ.js";import"./Canvas-BvQwXb2k.js";import"./DateTimePicker-C2Run3-D.js";import"./DndList-CBi8_kZ3.js";import"./ErrorPage-CTYzea0k.js";import"./FileButton-B1HUq023.js";import"./FileIcon-Cq7mtqlZ.js";import"./FileList-V1oGmEIt.js";import"./ListFilters-B70FklIn.js";import"./Loader-Cj_YKQMC.js";import"./NumberField-9vw7tK7Q.js";import"./PDFViewer-COE9EQf0.js";import{P as B}from"./Pill-BzF7PoYE.js";import"./Select-9qHjYI0p.js";import"./SelectBase-BwQBPk6D.js";import"./Skeleton-D0do4tkn.js";import"./Toolbar-z7G1HqN7.js";import"./Tooltip-D1wMFY4Z.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DJLuP6Kr.js";import"./utils-B-VLpWL1.js";import"./ButtonBase-D_Fp6IX2.js";import"./Button-D-ilA-ag.js";import"./FocusScope-D5uIQp3D.js";import"./Hidden-Ce6PGo4M.js";import"./usePress-D1PDYcdl.js";import"./index-BBCUG9Nf.js";import"./index-ar4iv7ir.js";import"./Label-Bs53qAj9.js";import"./index-TsQsGeNy.js";import"./ErrorMessage-EquhK4wk.js";import"./Button-P4gF_Z_F.js";import"./index-cj99HEtK.js";import"./RSPContexts-CX5xhoiu.js";import"./Separator-DqMpg4TZ.js";import"./Text-CygdCTcq.js";import"./VisuallyHidden-B0fHXY2j.js";import"./Menu-BanP5OZv.js";import"./Check-C2RvNe94.js";import"./ChevronForward-DxadCiyT.js";import"./TableOutlined-DoPfpFXQ.js";import"./Modal-Dg5Ho2FX.js";import"./MoreHoriz-DFabsmgi.js";import"./Checkbox-BJ2Zn-Cg.js";import"./CheckIndeterminateSmall-kOqTf0g4.js";import"./Form-Dg9pl98X.js";import"./useToggleState-DyNRELqm.js";import"./useFormReset-BUN4FjWp.js";import"./TableOptions-CWcDStEy.js";import"./sortable.esm-DWjEdsBB.js";import"./DragIndicator-Dzf6zd7T.js";import"./ViewColumn-36TevFI8.js";import"./TextField-gaJ2oXsc.js";import"./Input-Tdc1Jwao.js";import"./FieldError-CKhp1APe.js";import"./useLabel-8sLxOv-W.js";import"./Group-BTGIPX90.js";import"./useTextField-Bm7PJvO6.js";import"./KeyboardArrowDown-D6_4Bsiu.js";import"./Search-jPbMysJo.js";import"./Underline-Cn5c8Dmr.js";import"./ArrowBack-DdlUp-AZ.js";import"./DeleteForever-CHvtRBEs.js";import"./variants-UopPvdd-.js";import"./ChevronBackward-DNPtbYKv.js";import"./Calendar-CNdaOEFe.js";import"./use-toast-DdZWWsNK.js";import"./Description-CBwQm1fz.js";import"./Zip-CbeqOj3T.js";import"./Download-BcBU9qAO.js";import"./Warning-BheeRH7b.js";import"./ComboBox-Dm7fu-B4.js";import"./ListBox-BG5Kd5GX.js";import"./ListBox-EeCF4Hsu.js";import"./DragAndDrop-Do4qYM5d.js";import"./use-is-mobile-CJTQo79u.js";import"./FilterListOff-D1X8jeIP.js";import"./KeyboardArrowUp-DZ8A-2PF.js";import"./Divider-BejH1Jbl.js";import"./Remove-Bzu9hfBo.js";const po={title:"Components/Table/Ag-Grid-Table",component:v,parameters:{layout:"fullscreen"}},W=e=>x.jsx(B,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},n={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},i={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(E=(k=a.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const uo=["Default","ClassicTheme","DobbyTheme","SingleRowSelection","MultipleSelection","WithStoredConfig","WithMenuItems"];export{r as ClassicTheme,o as Default,t as DobbyTheme,i as MultipleSelection,n as SingleRowSelection,a as WithMenuItems,s as WithStoredConfig,uo as __namedExportsOrder,po as default};
