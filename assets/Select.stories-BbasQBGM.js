import{j as e}from"./iframe-C1WlA_sY.js";import{c as B}from"./SelectBase-D2rOiX7h.js";import{S as n}from"./Select-DAPksUmX.js";import"./preload-helper-Dp1pzeXC.js";import"./sha256--kUdW-Qc.js";import"./Label-BSwcmczL.js";import"./index-BuXA5Et1.js";import"./index-DA45O8xF.js";import"./index-Bwv-tviQ.js";import"./Label-BmTgxGGY.js";import"./utils-BOdOtusu.js";import"./Text-Dr8JR3Hw.js";import"./ListBox-CWSX9QwH.js";import"./Loader-CKANN067.js";import"./Check-CnS3B5P0.js";import"./Separator-CT2jiVXP.js";import"./usePress-BzRlJuKw.js";import"./FocusScope-BYCV_QfQ.js";import"./index-CGt66q3u.js";import"./ListBox-wjqhOybS.js";import"./DragAndDrop-DFfJixUn.js";import"./useLabel-BNugXr2z.js";import"./index-DBm6DM46.js";import"./Button-C5TQC8Oa.js";import"./RSPContexts-CpK07g3-.js";import"./VisuallyHidden-CQg0wCvx.js";import"./variants-MEBY1FFp.js";import"./KeyboardArrowDown-BMnQhi0Q.js";import"./Pill-CDwSasNx.js";const oe={component:n},k=[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],t={args:{placeholder:"Select an item",items:k,children:r=>r.label}},o={args:{...t.args,label:"Status",description:"Select a status"}},i={args:{...o.args,isDisabled:!0}},a={args:{...t.args,selectionMode:"multiple"}},l={args:{...t.args,loading:!0,className:"w-52"}},s={args:{...t.args},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMulti"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage + defaults)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMultiDefaults",defaultSelectedKeys:new Set(["1","5"])})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage)"}),n({...r,storageKey:"SelectSingle"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage + default)"}),n({...r,storageKey:"SelectSingleDefault",defaultSelectedKey:"1"})]}),e.jsx("button",{style:{marginTop:8,padding:8,background:"#eee",border:"1px solid #ccc",borderRadius:4,cursor:"pointer"},onClick:()=>B(),children:"Clear all filter localStorage keys"})]})};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an item",
    items: items,
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var S,f,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    isDisabled: true
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,v,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,D,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,j,K;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 300
    }}>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Multi select (localStorage)
          </div>
          {Select({
          ...args,
          selectionMode: "multiple",
          storageKey: "SelectMulti"
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Multi select (localStorage + defaults)
          </div>
          {Select({
          ...args,
          selectionMode: "multiple",
          storageKey: "SelectMultiDefaults",
          defaultSelectedKeys: new Set(["1", "5"])
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Single select (localStorage)
          </div>
          {Select({
          ...args,
          storageKey: "SelectSingle"
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Single select (localStorage + default)
          </div>
          {Select({
          ...args,
          storageKey: "SelectSingleDefault",
          defaultSelectedKey: "1"
        })}
        </div>
        <button style={{
        marginTop: 8,
        padding: 8,
        background: "#eee",
        border: "1px solid #ccc",
        borderRadius: 4,
        cursor: "pointer"
      }} onClick={() => clearPersistedFilterState(true)}>
          Clear all filter localStorage keys
        </button>
      </div>;
  }
}`,...(K=(j=s.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const ie=["Default","WithLabelAndDescription","Disabled","MultipleSelection","Loading","LocalStorageVariants"];export{t as Default,i as Disabled,l as Loading,s as LocalStorageVariants,a as MultipleSelection,o as WithLabelAndDescription,ie as __namedExportsOrder,oe as default};
