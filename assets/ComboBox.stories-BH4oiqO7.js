import{r as a,j as t}from"./iframe-C3oNYoGv.js";import{c as U}from"./filter-persistence-C0i969z8.js";import{C as i}from"./ComboBox-DmoKFVF_.js";import"./preload-helper-Dp1pzeXC.js";import"./sha256-0xo2dyVX.js";import"./ComboBoxListBox-P1NZekZC.js";import"./ListBox-U6sMwKS2.js";import"./Loader-BS176VkB.js";import"./Check-mAR_QMe4.js";import"./useHover-DVKaX_QJ.js";import"./useCollection-BTVCbxvc.js";import"./Text-DUmgebTj.js";import"./index-3rpGV-RY.js";import"./index-CGo15r6A.js";import"./index-DypK0npo.js";import"./SelectionIndicator-DyF4S_O7.js";import"./usePress-D0IetYL2.js";import"./ListBox-BvaKUkgI.js";import"./useLoadMoreSentinel-BDok7IrZ.js";import"./Autocomplete-bkept6zj.js";import"./useLabel-C1EHHGsM.js";import"./Pill-C3sT1d7S.js";import"./Input-CcCJgG5A.js";import"./index-DE9NX_kI.js";import"./Button-BMxCuimO.js";import"./VisuallyHidden-DY-Y6Z4l.js";import"./SelectBase-TPE-6p6R.js";import"./Label-CdQr_ZgJ.js";import"./index-D7Isqh1H.js";import"./Label-Bd9YHYxX.js";import"./variants-D78-o6ii.js";import"./KeyboardArrowDown-DONNFgEK.js";const we={component:i},o={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:e=>e.label}},d={args:{...o.args,label:"Favourite animal",description:"Select an animal"}},c={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:e=>e.label}},m={args:{...o.args,loading:!0,className:"w-52"}},u={args:{...o.args,items:[]}},g={args:{...o.args,selectionMode:"multiple"}},p={decorators:[(e,{args:n})=>{const[r,f]=a.useState(n.items);return n.onLoadMore=a.useCallback(()=>new Promise(s=>{setTimeout(()=>{f(l=>l.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),s(!1)},1e3)}),[]),n.items=r,r&&t.jsx(e,{...n})}],args:{...o.args,className:{listbox:"max-h-48"}}},b={decorators:[(e,{args:n})=>{const[r,f]=a.useState(""),[s,l]=a.useState(n.items),[q,G]=a.useState(!0);return a.useEffect(()=>{if(r){const J=s.filter(Q=>Q.label.toLowerCase().includes(r));l(J),G(!1)}else l(n.items)},[r]),n.items=s,n.hasNextPage=q,n.onInputChange=f,s&&t.jsx(e,{...n})}],args:{...o.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(e=>{setTimeout(()=>{e(!1)},1e3)}),disableLocalFiltering:!0}},x={args:{...o.args},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:300},children:[t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi combobox (localStorage)"}),i({...e,selectionMode:"multiple",storageKey:"ComboBoxMulti"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Multi combobox (localStorage + defaults)"}),i({...e,selectionMode:"multiple",storageKey:"ComboBoxMultiDefaults",defaultSelectedKeys:new Set(["1","5"])})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single combobox (localStorage)"}),i({...e,storageKey:"ComboBoxSingle"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:4,fontSize:12,fontWeight:600},children:"Single combobox (localStorage + default)"}),i({...e,storageKey:"ComboBoxSingleDefault",defaultSelectedKey:"1"})]}),t.jsx("button",{style:{marginTop:8,padding:8,background:"#eee",border:"1px solid #ccc",borderRadius:4,cursor:"pointer"},onClick:()=>U(),children:"Clear all filter localStorage keys"})]})};var S,h,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var N,k,B;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var M,w,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var L,j,K;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(K=(j=u.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var W,F,V;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  // @ts-expect-error - issues with typing in storybook
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
}`,...(H=(E=b.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,_,O;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(_=x.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const Pe=["Default","WithLabelAndDescription","Disabled","Loading","EmptyList","MultipleSelection","AsyncData","AsyncFilteredData","LocalStorageVariants"];export{p as AsyncData,b as AsyncFilteredData,o as Default,c as Disabled,u as EmptyList,m as Loading,x as LocalStorageVariants,g as MultipleSelection,d as WithLabelAndDescription,Pe as __namedExportsOrder,we as default};
