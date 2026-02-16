import{j as e}from"./iframe-BccIeXYJ.js";import{c as B}from"./filter-persistence-LJUXGpgn.js";import{S as n}from"./Select-Z5pr9AtG.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-2-cPUpT6.js";import"./index-BJU3fRwX.js";import"./index-Dq0KKVog.js";import"./index-CthuzfiD.js";import"./Label-Do0ALAK2.js";import"./utils-CWg1MI_0.js";import"./Text-JbBvxV2w.js";import"./ListBox-zaXb-A12.js";import"./Loader-C56ooIx6.js";import"./Check-D_3YCtSg.js";import"./Separator-d_YcbFBs.js";import"./usePress-CyXWm0W6.js";import"./FocusScope-DRo1OA8S.js";import"./index-BWf-lzRM.js";import"./ListBox-DRfoEjEU.js";import"./DragAndDrop-Btu60dx2.js";import"./useLabel-CQZY_KZ_.js";import"./index-gM2N2JqA.js";import"./Button-BmX0Fecl.js";import"./RSPContexts-DfJ1h1dw.js";import"./VisuallyHidden-JDmYm14E.js";import"./variants-_tz0uNJg.js";import"./KeyboardArrowDown-CLSfJLjU.js";import"./sha256-CdeorE_s.js";import"./Pill-CN7N2C7R.js";const oe={component:n},k=[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],t={args:{placeholder:"Select an item",items:k,children:r=>r.label}},o={args:{...t.args,label:"Status",description:"Select a status"}},i={args:{...o.args,isDisabled:!0}},a={args:{...t.args,selectionMode:"multiple"}},l={args:{...t.args,loading:!0,className:"w-52"}},s={args:{...t.args},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMulti"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage + defaults)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMultiDefaults",defaultSelectedKeys:new Set(["1","5"])})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage)"}),n({...r,storageKey:"SelectSingle"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage + default)"}),n({...r,storageKey:"SelectSingleDefault",defaultSelectedKey:"1"})]}),e.jsx("button",{style:{marginTop:8,padding:8,background:"#eee",border:"1px solid #ccc",borderRadius:4,cursor:"pointer"},onClick:()=>B(),children:"Clear all filter localStorage keys"})]})};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
