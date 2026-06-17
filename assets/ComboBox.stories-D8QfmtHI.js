import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{i,n as a}from"./filter-persistence-C-V7R7LG.js";import{n as o,t as s}from"./ComboBox-CvMdi0lQ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;t((()=>{i(),c=e(n(),1),o(),l=r(),u={component:s},d={args:{placeholder:`Search animals`,items:[{id:`1`,label:`Aardvark`},{id:`2`,label:`Cat`},{id:`3`,label:`Dog`},{id:`4`,label:`Kangaroo`},{id:`5`,label:`Panda`},{id:`6`,label:`Snake`}],children:e=>e.label}},f={args:{...d.args,label:`Favourite animal`,description:`Select an animal`}},p={args:{label:`Pick an item`,placeholder:`Search`,isDisabled:!0,items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{id:`3`,label:`Item 3`}],children:e=>e.label}},m={args:{...d.args,loading:!0,className:`w-52`}},h={args:{...d.args,items:[]}},g={args:{...d.args,selectionMode:`multiple`}},_={decorators:[(e,{args:t})=>{let[n,r]=(0,c.useState)(t.items);return t.onLoadMore=(0,c.useCallback)(()=>new Promise(e=>{setTimeout(()=>{r(e=>e.concat([{id:`7`,label:`Swan`},{id:`8`,label:`Turtle`},{id:`9`,label:`Worm`}])),e(!1)},1e3)}),[]),t.items=n,n&&(0,l.jsx)(e,{...t})}],args:{...d.args,className:{listbox:`max-h-48`}}},v={decorators:[(e,{args:t})=>{let[n,r]=(0,c.useState)(``),[i,a]=(0,c.useState)(t.items),[o,s]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{n?(a(i.filter(e=>e.label.toLowerCase().includes(n))),s(!1)):a(t.items)},[n]),t.items=i,t.hasNextPage=o,t.onInputChange=r,i&&(0,l.jsx)(e,{...t})}],args:{...d.args,className:{listbox:`max-h-48`},onLoadMore:()=>new Promise(e=>{setTimeout(()=>{e(!1)},1e3)}),disableLocalFiltering:!0}},y={args:{...d.args},render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:300},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi combobox (localStorage)`}),s({...e,selectionMode:`multiple`,storageKey:`ComboBoxMulti`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi combobox (localStorage + defaults)`}),s({...e,selectionMode:`multiple`,storageKey:`ComboBoxMultiDefaults`,defaultSelectedKeys:new Set([`1`,`5`])})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single combobox (localStorage)`}),s({...e,storageKey:`ComboBoxSingle`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single combobox (localStorage + default)`}),s({...e,storageKey:`ComboBoxSingleDefault`,defaultSelectedKey:`1`})]}),(0,l.jsx)(`button`,{style:{marginTop:8,padding:8,background:`#eee`,border:`1px solid #ccc`,borderRadius:4,cursor:`pointer`},onClick:()=>a(!0),children:`Clear all filter localStorage keys`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search animals",
    items: [{
      id: "1",
      label: "Aardvark"
    }, {
      id: "2",
      label: "Cat"
    }, {
      id: "3",
      label: "Dog"
    }, {
      id: "4",
      label: "Kangaroo"
    }, {
      id: "5",
      label: "Panda"
    }, {
      id: "6",
      label: "Snake"
    }],
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pick an item",
    placeholder: "Search",
    isDisabled: true,
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2"
    }, {
      id: "3",
      label: "Item 3"
    }],
    // @ts-expect-error - issues with typing in storybook
    children: item => item.label as string
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
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
    return nodes && <Story {...args} />;
  }],
  args: {
    ...Default.args,
    className: {
      listbox: "max-h-48"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [filterValue, setFilterValue] = useState("");
    const [nodes, setNodes] = useState(args.items);
    const [hasNextPage, setHasNextPage] = useState(true);
    useEffect(() => {
      if (filterValue) {
        const filteredNodes = nodes.filter(node =>
        // @ts-expect-error - issues with typing in storybook
        (node.label as string).toLowerCase().includes(filterValue));
        setNodes(filteredNodes);
        setHasNextPage(false);
      } else {
        setNodes(args.items);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterValue]);
    args.items = nodes;
    args.hasNextPage = hasNextPage;
    args.onInputChange = setFilterValue;
    return nodes && <Story {...args} />;
  }],
  args: {
    ...Default.args,
    className: {
      listbox: "max-h-48"
    },
    onLoadMore: () => {
      return new Promise<boolean>(resolve => {
        setTimeout(() => {
          resolve(false);
        }, 1000);
      });
    },
    disableLocalFiltering: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            Multi combobox (localStorage)
          </div>
          {
        // @ts-expect-error - issues with typing in storybook
        ComboBox({
          ...args,
          selectionMode: "multiple",
          storageKey: "ComboBoxMulti"
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Multi combobox (localStorage + defaults)
          </div>
          {
        // @ts-expect-error - issues with typing in storybook
        ComboBox({
          ...args,
          selectionMode: "multiple",
          storageKey: "ComboBoxMultiDefaults",
          defaultSelectedKeys: new Set(["1", "5"])
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Single combobox (localStorage)
          </div>
          {ComboBox({
          ...args,
          storageKey: "ComboBoxSingle"
        })}
        </div>
        <div>
          <div style={{
          marginBottom: 4,
          fontSize: 12,
          fontWeight: 600
        }}>
            Single combobox (localStorage + default)
          </div>
          {ComboBox({
          ...args,
          storageKey: "ComboBoxSingleDefault",
          // @ts-expect-error - issues with typing in storybook
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithLabelAndDescription`,`Disabled`,`Loading`,`EmptyList`,`MultipleSelection`,`AsyncData`,`AsyncFilteredData`,`LocalStorageVariants`]}))();export{_ as AsyncData,v as AsyncFilteredData,d as Default,p as Disabled,h as EmptyList,m as Loading,y as LocalStorageVariants,g as MultipleSelection,f as WithLabelAndDescription,b as __namedExportsOrder,u as default};