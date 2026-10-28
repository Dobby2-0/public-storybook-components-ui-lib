import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{i as r,n as i}from"./filter-persistence-XYlCWOhE.js";import{n as a,t as o}from"./ComboBox-BFYI0aI6.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),s=t(),a(),c=n(),l={component:o},u={args:{placeholder:`Search animals`,items:[{id:`1`,label:`Aardvark`},{id:`2`,label:`Cat`},{id:`3`,label:`Dog`},{id:`4`,label:`Kangaroo`},{id:`5`,label:`Panda`},{id:`6`,label:`Snake`}],children:e=>e.label}},d={args:{...u.args,label:`Favourite animal`,description:`Select an animal`}},f={args:{label:`Pick an item`,placeholder:`Search`,isDisabled:!0,items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{id:`3`,label:`Item 3`}],children:e=>e.label}},p={args:{...u.args,loading:!0,className:`w-52`}},m={args:{...u.args,items:[]}},h={args:{...u.args,selectionMode:`multiple`}},g={decorators:[(e,{args:t})=>{let[n,r]=(0,s.useState)(t.items);return t.onLoadMore=(0,s.useCallback)(()=>new Promise(e=>{setTimeout(()=>{r(e=>e.concat([{id:`7`,label:`Swan`},{id:`8`,label:`Turtle`},{id:`9`,label:`Worm`}])),e(!1)},1e3)}),[]),t.items=n,t.hasNextPage=n.length<7,n&&(0,c.jsx)(e,{...t})}],args:{...u.args,className:{listbox:`max-h-48`}}},_={decorators:[(e,{args:t})=>{let[n,r]=(0,s.useState)(``),[i,a]=(0,s.useState)(t.items),o=(0,s.useRef)(t.items);return(0,s.useEffect)(()=>{if(n){let e=i.filter(e=>e.label.toLowerCase().includes(n));a(e)}else a(o.current)},[n]),t.items=i,t.onInputChange=r,i&&(0,c.jsx)(e,{...t})}],args:{...u.args,className:{listbox:`max-h-48`},disableLocalFiltering:!0}},v={args:{...u.args},render:e=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:300},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi combobox (localStorage)`}),o({...e,selectionMode:`multiple`,storageKey:`ComboBoxMulti`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Multi combobox (localStorage + defaults)`}),o({...e,selectionMode:`multiple`,storageKey:`ComboBoxMultiDefaults`,defaultSelectedKeys:new Set([`1`,`5`])})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single combobox (localStorage)`}),o({...e,storageKey:`ComboBoxSingle`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{marginBottom:4,fontSize:12,fontWeight:600},children:`Single combobox (localStorage + default)`}),o({...e,storageKey:`ComboBoxSingleDefault`,defaultSelectedKey:`1`})]}),(0,c.jsx)(`button`,{style:{marginTop:8,padding:8,background:`#eee`,border:`1px solid #ccc`,borderRadius:4,cursor:`pointer`},onClick:()=>i(!0),children:`Clear all filter localStorage keys`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
  args: {
    ...Default.args,
    selectionMode: "multiple"
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
  decorators: [(Story, {
    args
  }) => {
    const [filterValue, setFilterValue] = useState("");
    const [nodes, setNodes] = useState(args.items);
    const itemsRef = useRef(args.items);
    useEffect(() => {
      if (filterValue) {
        const filteredNodes = nodes.filter(node =>
        // @ts-expect-error - issues with typing in storybook
        (node.label as string).toLowerCase().includes(filterValue));
        setNodes(filteredNodes);
      } else {
        setNodes(itemsRef.current);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterValue]);
    args.items = nodes;
    args.onInputChange = setFilterValue;
    return nodes && <Story {...args} />;
  }],
  args: {
    ...Default.args,
    className: {
      listbox: "max-h-48"
    },
    disableLocalFiltering: true
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLabelAndDescription`,`Disabled`,`Loading`,`EmptyList`,`MultipleSelection`,`AsyncData`,`FilteredData`,`LocalStorageVariants`]})))()}b();export{g as AsyncData,u as Default,f as Disabled,m as EmptyList,_ as FilteredData,p as Loading,v as LocalStorageVariants,h as MultipleSelection,d as WithLabelAndDescription,y as __namedExportsOrder,l as default};