import{j as x}from"./iframe-B8WK_zII.js";import"./sha256-DbcCNAtp.js";import"./SwipeableActionBlock-DSMixRs-.js";import"./BulkActions-BT76HdDf.js";import"./Canvas-C4tBF0Vu.js";import"./ComboBox-CYqA0aeB.js";import"./DateTimePicker-CrzFnoh8.js";import"./DndList-DIbFSd78.js";import"./ErrorPage-Ds8UcCEy.js";import"./FileButton-DlCTtfP6.js";import"./FileIcon-DTt0VFA6.js";import"./FileList-BJULA2E5.js";import"./Form-AACMINPV.js";import"./ImageCarousel-Du_SOE2q.js";import"./use-dobby-context-Dvd5cEiP.js";import"./Loader-Bo2GmnOf.js";import"./NumberField-BMDP1wxO.js";import"./PDFViewer-3Jr-0oNV.js";import"./PDFViewerModal-f9yT68rh.js";import"./PhoneNumberField-hi-wXkK9.js";import{P as v}from"./Pill-Du97yir-.js";import"./RadioGroup-CByN5B5M.js";import"./RichTextEditor-BRh3L-gK.js";import"./Select-cs5ddGKa.js";import"./SelectBase-k9yaq1Yn.js";import"./Skeleton-BsNGgxSp.js";import{A as B}from"./Ag-grid-table-Cw3mpufh.js";import"./TextField-DzPfXbZU.js";import"./Toolbar-a8DAxgWF.js";import"./Tooltip-JXjobMRd.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CU5Uqaow.js";import"./utils-Dqpu0TW_.js";import"./ButtonBase-BFdDKL6c.js";import"./Button-8LD7_4iX.js";import"./FocusScope-wYtpZu8X.js";import"./Text-BLwGK0ZO.js";import"./usePress-Bc5yF52P.js";import"./index-BYOlgLhF.js";import"./index-BmNgf0VY.js";import"./Button-DEdNYlto.js";import"./index-CdOOFGGV.js";import"./RSPContexts-DddIDbhf.js";import"./Separator-Drji3Xiq.js";import"./index-MaRCFGqk.js";import"./VisuallyHidden-Bm1wZh28.js";import"./ArrowBack-WWhtBGvC.js";import"./Label-2yu8Ux-S.js";import"./index-DkxbiC72.js";import"./Label-BL5Hz1_x.js";import"./ErrorMessage-zTtMIiuk.js";import"./DeleteForever-CFYFfqHX.js";import"./SingleComboBox-Dyedft87.js";import"./ListBox-euE45BxO.js";import"./Check-CHRXt5UC.js";import"./ListBox-CfvTSnpi.js";import"./DragAndDrop-Bv1iAJNW.js";import"./useLabel-_Kt3u0JC.js";import"./Input-co45GT6d.js";import"./variants-DVKK_Y6m.js";import"./ChevronBackward-BM5h6o3o.js";import"./ChevronForward-BQCcYH7S.js";import"./Calendar-DFWdsX56.js";import"./sortable.esm-Bfa4-hWd.js";import"./DragIndicator-DGrw081i.js";import"./use-toast-BfXjmuvg.js";import"./Description-C8DS0SGX.js";import"./Zip-CIXH5zfE.js";import"./Download-Cvo4CzCy.js";import"./Warning-BuSTEc3Q.js";import"./index-C7CL5OQ7.js";import"./Modal-Dv9d_Bc-.js";import"./use-is-mobile-CGmxw67O.js";import"./Replay-7PT3Mtnd.js";import"./KeyboardArrowDown-Bn_1QEaL.js";import"./KeyboardArrowUp-BToFB_CN.js";import"./FieldError-C-vLJzhb.js";import"./Form-D2G7Q8fq.js";import"./Group-DM3i6BaV.js";import"./useFormReset-Cwsq-NcE.js";import"./useTextField-D797gwzT.js";import"./Divider-CwXswXpr.js";import"./Remove-DZ5n2nCI.js";import"./Menu-CaVKZFuN.js";import"./MoreHoriz-B2Rsf2vl.js";import"./Checkbox--aPvkPFv.js";import"./CheckIndeterminateSmall-Cj01spVM.js";import"./useToggleState-lmX7RvPr.js";import"./TableOptions-B0pVzA9t.js";import"./ViewColumn-DCOLBDtz.js";const Do={title:"Components/Table/Ag-Grid-Table",component:B,parameters:{layout:"fullscreen"}},W=e=>x.jsx(v,{variant:"warning",children:e.value?"Electric":"Gas"}),j=[{field:"make",resizable:!1,sortable:!1},{field:"model",resizable:!1,width:50,flex:0},{field:"price",type:"numericColumn",initialHide:!0},{field:"electric",cellRenderer:W}],l=[{id:"1",make:"Tesla",model:"Model Y",price:64950,electric:!0},{id:"2",make:"Ford",model:"F-Series",price:33850,electric:!1},{id:"3",make:"Toyota",model:"Corolla",price:29600,electric:!1}],G={getRows(e){const O=l.slice(e.startRow,e.endRow);e.successCallback(O,l.length)}},o={args:{columnDefs:j,datasource:G,totalCount:l.length,onRowSelectionChange:e=>{console.warn("Selected row IDs:",e)}}},r={args:{...o.args,themeType:"classic",addRowButton:!0}},t={args:{...o.args,themeType:"dobby"}},i={args:{...o.args,selectOnRowClick:!0,selectionMode:"single",onRowSelectionChange:e=>{console.warn("Selected row ID:",e)}}},n={args:{...o.args,addRowButton:!0,disableColumnOptions:!0,selectionMode:"multiple",enableSelectAll:!0,onRowSelectionChange:e=>{e==="all"?console.warn("All rows selected!"):console.warn("Selected row IDs:",e)},disableRowSelectionCondition:e=>(e==null?void 0:e.make)==="Tesla"}},s={args:{...o.args,id:"ag-grid-component"}},a={args:{...o.args,disableColumnOptions:!0,suppressMovableColumns:!0,menuItems:[{id:"edit",label:"Edit",onAction:e=>{console.warn("Edit action for row:",e)}},{id:"delete",label:"Delete",onAction:e=>{console.warn("Delete action for row:",e)}},{id:"duplicate",label:"Duplicate",onAction:e=>{console.warn("Duplicate action for row:",e)}}]}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
