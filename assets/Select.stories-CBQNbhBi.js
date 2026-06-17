import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{i as n,n as r}from"./filter-persistence-C-V7R7LG.js";import{n as i,t as a}from"./Select-C9qx8Psx.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),o=t(),s={component:a},c=[{id:`1`,label:`Backlog`},{id:`2`,label:`In Progress`},{id:`3`,label:`In Review`},{id:`4`,label:`Done`},{id:`5`,label:`Won't Do`}],l={args:{placeholder:`Select an item`,items:c,children:e=>e.label}},u={args:{...l.args,label:`Status`,description:`Select a status`}},d={args:{...u.args,isDisabled:!0}},f={args:{...l.args,selectionMode:`multiple`}},p={args:{...l.args,loading:!0,className:`w-52`}},m={args:{...l.args},render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:300},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage)`}),a({...e,selectionMode:`multiple`,storageKey:`SelectMulti`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage + defaults)`}),a({...e,selectionMode:`multiple`,storageKey:`SelectMultiDefaults`,defaultSelectedKeys:new Set([`1`,`5`])})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage)`}),a({...e,storageKey:`SelectSingle`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage + default)`}),a({...e,storageKey:`SelectSingleDefault`,defaultSelectedKey:`1`})]}),(0,o.jsx)(`button`,{style:{marginTop:8,padding:8,background:`#eee`,border:`1px solid #ccc`,borderRadius:4,cursor:`pointer`},onClick:()=>r(!0),children:`Clear all filter localStorage keys`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an item",
    items: items,
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    isDisabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLabelAndDescription`,`Disabled`,`MultipleSelection`,`Loading`,`LocalStorageVariants`]}))();export{l as Default,d as Disabled,p as Loading,m as LocalStorageVariants,f as MultipleSelection,u as WithLabelAndDescription,h as __namedExportsOrder,s as default};