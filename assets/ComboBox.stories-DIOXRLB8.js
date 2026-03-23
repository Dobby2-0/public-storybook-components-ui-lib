import{r,j as t}from"./iframe-CQI2BgJE.js";import{c as U}from"./SelectBase-C2EGX3VM.js";import{C as i}from"./ComboBox-Cdu9OsFQ.js";import"./preload-helper-Dp1pzeXC.js";import"./sha256-BQF5-ZpE.js";import"./Label-CuD1tqG4.js";import"./index-CcV-hXq_.js";import"./index-1dpUV8yo.js";import"./index-CMgD2K3S.js";import"./Label-qfla7SFZ.js";import"./utils-C3X5B0IN.js";import"./Text-BXLV_GVU.js";import"./ListBox-Uf8aOmyr.js";import"./Loader-GseMPIOx.js";import"./Check-SkvwYBb8.js";import"./Separator-Nme1GeN9.js";import"./usePress-CGC0cKJT.js";import"./FocusScope-BuasiKxf.js";import"./index-IJ0JUEQ3.js";import"./ListBox-TE4yhkn7.js";import"./DragAndDrop-ZC2quvuw.js";import"./useLabel-BQ3WVoNy.js";import"./index-D_Z4pr1f.js";import"./Button-Ezszb-LY.js";import"./RSPContexts-DwQOiG50.js";import"./VisuallyHidden-BgQPvfXY.js";import"./variants-DiWcWtKi.js";import"./KeyboardArrowDown-V8YjhI2z.js";import"./SingleComboBox-CeNsBKnE.js";import"./Pill-D_mUCm_f.js";import"./Input-tsvPehdY.js";const ke={component:i},o={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:e=>e.label}},d={args:{...o.args,label:"Favourite animal",description:"Select an animal"}},c={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:e=>e.label}},m={args:{...o.args,loading:!0,className:"w-52"}},u={args:{...o.args,items:[]}},g={args:{...o.args,selectionMode:"multiple"}},p={decorators:[(e,{args:n})=>{const[a,S]=r.useState(n.items);return n.onLoadMore=r.useCallback(()=>new Promise(s=>{setTimeout(()=>{S(l=>l.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),s(!1)},1e3)}),[]),n.items=a,a&&t.jsx(e,{...n})}],args:{...o.args,className:{listbox:"max-h-48"}}},b={decorators:[(e,{args:n})=>{const[a,S]=r.useState(""),[s,l]=r.useState(n.items),[q,G]=r.useState(!0);return r.useEffect(()=>{if(a){const J=s.filter(Q=>Q.label.toLowerCase().includes(a));l(J),G(!1)}else l(n.items)},[a]),n.items=s,n.hasNextPage=q,n.onInputChange=S,s&&t.jsx(e,{...n})}],args:{...o.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(e=>{setTimeout(()=>{e(!1)},1e3)}),disableLocalFiltering:!0}},f={args:{...o.args},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi combobox (localStorage)"}),i({...e,selectionMode:"multiple",storageKey:"ComboBoxMulti"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi combobox (localStorage + defaults)"}),i({...e,selectionMode:"multiple",storageKey:"ComboBoxMultiDefaults",defaultSelectedKeys:new Set(["1","5"])})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single combobox (localStorage)"}),i({...e,storageKey:"ComboBoxSingle"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single combobox (localStorage + default)"}),i({...e,storageKey:"ComboBoxSingleDefault",defaultSelectedKey:"1"})]}),t.jsx("button",{style:{marginTop:8,padding:8,background:"#eee",border:"1px solid #ccc",borderRadius:4,cursor:"pointer"},onClick:()=>U(),children:"Clear all filter localStorage keys"})]})};var x,h,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,D,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var N,B,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var k,P,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var L,j,K;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(K=(j=u.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var W,F,V;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,A,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,E,H;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(E=b.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,_,O;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
          {ComboBox({
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
          {ComboBox({
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
}`,...(O=(_=f.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const Pe=["Default","WithLabelAndDescription","Disabled","Loading","EmptyList","MultipleSelection","AsyncData","AsyncFilteredData","LocalStorageVariants"];export{p as AsyncData,b as AsyncFilteredData,o as Default,c as Disabled,u as EmptyList,m as Loading,f as LocalStorageVariants,g as MultipleSelection,d as WithLabelAndDescription,Pe as __namedExportsOrder,ke as default};
