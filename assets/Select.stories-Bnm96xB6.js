import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{i,n as a}from"./filter-persistence-DeYLs6WK.js";import{n as o,t as s}from"./Select-BtVsnjKQ.js";var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{i(),c=e(n(),1),o(),l=r(),u={component:s},d=[{id:`1`,label:`Backlog`},{id:`2`,label:`In Progress`},{id:`3`,label:`In Review`},{id:`4`,label:`Done`},{id:`5`,label:`Won't Do`}],f={args:{placeholder:`Select an item`,items:d,children:e=>e.label}},p={args:{...f.args,label:`Status`,description:`Select a status`}},m={args:{...p.args,isDisabled:!0}},h={args:{...f.args,selectionMode:`multiple`}},g={args:{...f.args,loading:!0,className:`w-52`}},_={decorators:[(e,{args:t})=>{let[n,r]=(0,c.useState)(t.items);return t.onLoadMore=(0,c.useCallback)(()=>new Promise(e=>{setTimeout(()=>{r(e=>e.concat([{id:`7`,label:`Swan`},{id:`8`,label:`Turtle`},{id:`9`,label:`Worm`}])),e(!1)},1e3)}),[]),t.items=n,t.hasNextPage=n.length<7,n&&(0,l.jsx)(e,{...t})}],args:{...f.args,className:{listbox:`max-h-48`}}},v={args:{...f.args},render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:300},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage)`}),s({...e,selectionMode:`multiple`,storageKey:`SelectMulti`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage + defaults)`}),s({...e,selectionMode:`multiple`,storageKey:`SelectMultiDefaults`,defaultSelectedKeys:new Set([`1`,`5`])})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage)`}),s({...e,storageKey:`SelectSingle`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage + default)`}),s({...e,storageKey:`SelectSingleDefault`,defaultSelectedKey:`1`})]}),(0,l.jsx)(`button`,{style:{marginTop:8,padding:8,background:`#eee`,border:`1px solid #ccc`,borderRadius:4,cursor:`pointer`},onClick:()=>a(!0),children:`Clear all filter localStorage keys`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an item",
    items: items,
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [nodes, setNodes] = useState(args.items);
    args.onLoadMore = useCallback(() => {
      return new Promise<boolean>(resolve => {
        setTimeout(() => {
          setNodes(prev => {
            return prev.concat([{
              id: "7",
              label: "Swan"
            }, {
              id: "8",
              label: "Turtle"
            }, {
              id: "9",
              label: "Worm"
            }]);
          });

          // return false to indicate no more items are available
          resolve(false);
        }, 1000);
      });
    }, []);
    args.items = nodes;
    args.hasNextPage = nodes.length < 7;
    return nodes && <Story {...args} />;
  }],
  args: {
    ...Default.args,
    className: {
      listbox: "max-h-48"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLabelAndDescription`,`Disabled`,`MultipleSelection`,`Loading`,`AsyncData`,`LocalStorageVariants`]}))();export{_ as AsyncData,f as Default,m as Disabled,g as Loading,v as LocalStorageVariants,h as MultipleSelection,p as WithLabelAndDescription,y as __namedExportsOrder,u as default};