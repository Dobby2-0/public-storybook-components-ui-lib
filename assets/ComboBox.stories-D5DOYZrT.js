import{r as t,j as K}from"./iframe-DP3-CQDs.js";import{C as q}from"./ComboBox-BRvqu5Wb.js";import"./preload-helper-Dp1pzeXC.js";import"./ListBox-BYcLeG4n.js";import"./Loader-b3vFoKaK.js";import"./Check-CeDGww65.js";import"./utils-CTHKUqKf.js";import"./Separator-BMUj42YL.js";import"./usePress-BS2ZG6Qh.js";import"./index-q5ymUpaM.js";import"./index-C7NeUuQO.js";import"./FocusScope-DeaR1QOB.js";import"./Hidden-C0lX4Jn3.js";import"./index-C_LC-Clp.js";import"./ListBox-6gDFOM9x.js";import"./DragAndDrop-DUuaZQ3q.js";import"./Text-DRH279PT.js";import"./useLabel-DKUT9Bzy.js";import"./Pill-Cd0ujufo.js";import"./Input-N0MICXmV.js";import"./index-DZ8PC-Vn.js";import"./Button-DjNH72gK.js";import"./RSPContexts-DL4g-k_R.js";import"./VisuallyHidden-TKVO3wAR.js";import"./SelectBase-Bbb0einT.js";import"./Label-CXMBqC1I.js";import"./index-Dr1nA0tK.js";import"./variants-CTsV4Jtq.js";import"./KeyboardArrowDown-BfuiNlbF.js";const Ne={component:q},a={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:s=>s.label}},i={args:{...a.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:s=>s.label}},m={args:{...a.args,loading:!0,className:"w-52"}},c={args:{...a.args,items:[]}},d={args:{...a.args,selectionMode:"multiple"}},u={decorators:[(s,{args:e})=>{const[r,g]=t.useState(e.items);return e.onLoadMore=t.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=r,r&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"}}},p={decorators:[(s,{args:e})=>{const[r,g]=t.useState(""),[n,o]=t.useState(e.items),[_,B]=t.useState(!0);return t.useEffect(()=>{if(r){const O=n.filter(R=>R.label.toLowerCase().includes(r));o(O),B(!1)}else o(e.items)},[r]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(s=>{setTimeout(()=>{s(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,x,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var D,y,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var L,w,k;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    className: "w-52"
  }
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,C,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,I,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var V,T,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var j,W,H;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const De=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData","AsyncFilteredData"];export{u as AsyncData,p as AsyncFilteredData,a as Default,l as Disabled,m as Loading,d as MultipleSelection,i as WithLabelAndDescription,De as __namedExportsOrder,Ne as default,c as emptyList};
