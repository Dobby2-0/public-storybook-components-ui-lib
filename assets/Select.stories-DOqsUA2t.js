import{j as e}from"./iframe-DetaKL0_.js";import{c as k}from"./filter-persistence-Cp5hBmV8.js";import{S as n}from"./Select-CHxuHWVa.js";import"./preload-helper-Dp1pzeXC.js";import"./sha256-D9wVjpbe.js";import"./Pill-okCtpVED.js";import"./SelectBase-BuAOdrXd.js";import"./Label-BrRaIPZ6.js";import"./index-CW5rNLKP.js";import"./index-CPpoh3b8.js";import"./index-DxT66sOS.js";import"./Label-D0r_MkLv.js";import"./useHover-BeS5e-IQ.js";import"./Text-ByQgp3qy.js";import"./ListBox-pXm3A-w4.js";import"./Loader-BRWONZMQ.js";import"./Check-mBRJ3Ynd.js";import"./useCollection-f1aOX4n3.js";import"./index-nSRzIFah.js";import"./SelectionIndicator-C0c_pcIB.js";import"./usePress-CZ1xYj4q.js";import"./ListBox-CNtHPtqH.js";import"./useLoadMoreSentinel-XsYur6vV.js";import"./Autocomplete-BqQtBmhO.js";import"./useLabel-C0Y-ULtJ.js";import"./index-BLrhUFFZ.js";import"./Button-Czzx2GC3.js";import"./VisuallyHidden-DFs_nEgu.js";import"./variants--GfA6NPc.js";import"./KeyboardArrowDown-cG2prr1O.js";const ie={component:n},w=[{id:"1",label:"Backlog"},{id:"2",label:"In Progress"},{id:"3",label:"In Review"},{id:"4",label:"Done"},{id:"5",label:"Won't Do"}],t={args:{placeholder:"Select an item",items:w,children:r=>r.label}},o={args:{...t.args,label:"Status",description:"Select a status"}},i={args:{...o.args,isDisabled:!0}},s={args:{...t.args,selectionMode:"multiple"}},a={args:{...t.args,loading:!0,className:"w-52"}},l={args:{...t.args},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMulti"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi select (localStorage + defaults)"}),n({...r,selectionMode:"multiple",storageKey:"SelectMultiDefaults",defaultSelectedKeys:new Set(["1","5"])})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage)"}),n({...r,storageKey:"SelectSingle"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single select (localStorage + default)"}),n({...r,storageKey:"SelectSingleDefault",defaultSelectedKey:"1"})]}),e.jsx("button",{style:{marginTop:8,padding:8,background:"#eee",border:"1px solid #ccc",borderRadius:4,cursor:"pointer"},onClick:()=>k(),children:"Clear all filter localStorage keys"})]})};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,D,M;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(M=(D=a.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,j,K;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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

          {
        // @ts-expect-error - issues with typing in storybook
        Select({
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
          {
        // @ts-expect-error - issues with typing in storybook
        Select({
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
}`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const se=["Default","WithLabelAndDescription","Disabled","MultipleSelection","Loading","LocalStorageVariants"];export{t as Default,i as Disabled,a as Loading,l as LocalStorageVariants,s as MultipleSelection,o as WithLabelAndDescription,se as __namedExportsOrder,ie as default};
