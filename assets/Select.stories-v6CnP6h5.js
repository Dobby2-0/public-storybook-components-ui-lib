import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{i as r,n as i}from"./filter-persistence-XYlCWOhE.js";import{n as a,t as o}from"./Select-CKixQLA7.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),s=t(),a(),c=n(),l={component:o},u=[{id:`1`,label:`Backlog`},{id:`2`,label:`In Progress`},{id:`3`,label:`In Review`},{id:`4`,label:`Done`},{id:`5`,label:`Won't Do`}],d={args:{placeholder:`Select an item`,items:u,children:e=>e.label}},f={args:{...d.args,label:`Status`,description:`Select a status`}},p={args:{...f.args,isDisabled:!0}},m={args:{...d.args,selectionMode:`multiple`}},h={args:{...d.args,loading:!0,className:`w-52`}},g={decorators:[(e,{args:t})=>{let[n,r]=(0,s.useState)(t.items);return t.onLoadMore=(0,s.useCallback)(()=>new Promise(e=>{setTimeout(()=>{r(e=>e.concat([{id:`7`,label:`Swan`},{id:`8`,label:`Turtle`},{id:`9`,label:`Worm`}])),e(!1)},1e3)}),[]),t.items=n,t.hasNextPage=n.length<7,n&&(0,c.jsx)(e,{...t})}],args:{...d.args,className:{listbox:`max-h-48`}}},_={args:{...d.args},render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:300},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage)`}),o({...e,selectionMode:`multiple`,storageKey:`SelectMulti`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi select (localStorage + defaults)`}),o({...e,selectionMode:`multiple`,storageKey:`SelectMultiDefaults`,defaultSelectedKeys:new Set([`1`,`5`])})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage)`}),o({...e,storageKey:`SelectSingle`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single select (localStorage + default)`}),o({...e,storageKey:`SelectSingleDefault`,defaultSelectedKey:`1`})]}),(0,c.jsx)(`button`,{style:{marginTop:8,padding:8,background:`#eee`,border:`1px solid #ccc`,borderRadius:4,cursor:`pointer`},onClick:()=>i(!0),children:`Clear all filter localStorage keys`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an item",
    items: items,
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Status",
    description: "Select a status"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabelAndDescription.args,
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithLabelAndDescription`,`Disabled`,`MultipleSelection`,`Loading`,`AsyncData`,`LocalStorageVariants`]})))()}y();export{g as AsyncData,d as Default,p as Disabled,h as Loading,_ as LocalStorageVariants,m as MultipleSelection,f as WithLabelAndDescription,v as __namedExportsOrder,l as default};