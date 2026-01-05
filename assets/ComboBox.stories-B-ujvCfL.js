import{r as t,j as K}from"./iframe-Buf-yu1G.js";import{C as q}from"./ComboBox-8Do9MzR_.js";import"./preload-helper-Dp1pzeXC.js";import"./SingleComboBox-d8tVhPTe.js";import"./ListBox-B5_uwrzv.js";import"./Loader-ClqT5cN-.js";import"./Check-COKk3Iux.js";import"./utils-DsZIVvgi.js";import"./Separator-D85nm_WG.js";import"./usePress-ClRLR1LW.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./FocusScope-8F9t37jv.js";import"./Text-B3Wc_O3W.js";import"./index-DZa7hcpo.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./Pill-fJ66MNf_.js";import"./Input-BnQ0a0q5.js";import"./index-h9AQGklB.js";import"./Button-C5gGSRMv.js";import"./RSPContexts-Co3FhSyY.js";import"./VisuallyHidden-DxSDzN3H.js";import"./SelectBase-DuNSvbGx.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./Label-BzDjaSQM.js";import"./variants-BqGC_269.js";import"./KeyboardArrowDown-BhgScPNQ.js";const De={component:q},a={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:s=>s.label}},i={args:{...a.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:s=>s.label}},m={args:{...a.args,loading:!0,className:"w-52"}},c={args:{...a.args,items:[]}},d={args:{...a.args,selectionMode:"multiple"}},u={decorators:[(s,{args:e})=>{const[r,g]=t.useState(e.items);return e.onLoadMore=t.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=r,r&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"}}},p={decorators:[(s,{args:e})=>{const[r,g]=t.useState(""),[n,o]=t.useState(e.items),[_,B]=t.useState(!0);return t.useEffect(()=>{if(r){const O=n.filter(R=>R.label.toLowerCase().includes(r));o(O),B(!1)}else o(e.items)},[r]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(s=>{setTimeout(()=>{s(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const ye=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData","AsyncFilteredData"];export{u as AsyncData,p as AsyncFilteredData,a as Default,l as Disabled,m as Loading,d as MultipleSelection,i as WithLabelAndDescription,ye as __namedExportsOrder,De as default,c as emptyList};
