import{r as t,j as K}from"./iframe-nfYaCMFG.js";import{C as q}from"./ComboBox-Dh7W8tEI.js";import"./preload-helper-Dp1pzeXC.js";import"./ListBox-B8ieJs6S.js";import"./Loader-BRFPJhgB.js";import"./Check-6HfRFboM.js";import"./utils-DsplgZ5_.js";import"./Separator-DrIqXTMA.js";import"./usePress-C-JupEBC.js";import"./index-DU8kGLuZ.js";import"./index-O77fUrkO.js";import"./FocusScope-C9_LKvrg.js";import"./Hidden-DnULKSXS.js";import"./index-CgM6Dbo0.js";import"./ListBox-BxMngG_4.js";import"./DragAndDrop-Cf3fUj8C.js";import"./Text-DIiBg8cY.js";import"./useLabel-oY3WoAVJ.js";import"./Pill-DcHgFBvL.js";import"./Input-Dt4RYi3I.js";import"./index-BvypQtYJ.js";import"./Button-BySXh0l7.js";import"./RSPContexts-DznLQtVB.js";import"./VisuallyHidden-BO-OLnWP.js";import"./SelectBase-CLFRtdhz.js";import"./Label-jyyH59mV.js";import"./index-ByjHB0Qw.js";import"./variants-Cu34kl6A.js";import"./KeyboardArrowDown-DsZyhcs8.js";const Ne={component:q},a={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:s=>s.label}},i={args:{...a.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:s=>s.label}},m={args:{...a.args,loading:!0,className:"w-52"}},c={args:{...a.args,items:[]}},d={args:{...a.args,selectionMode:"multiple"}},u={decorators:[(s,{args:e})=>{const[r,g]=t.useState(e.items);return e.onLoadMore=t.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=r,r&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"}}},p={decorators:[(s,{args:e})=>{const[r,g]=t.useState(""),[n,o]=t.useState(e.items),[_,B]=t.useState(!0);return t.useEffect(()=>{if(r){const O=n.filter(R=>R.label.toLowerCase().includes(r));o(O),B(!1)}else o(e.items)},[r]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(s=>{setTimeout(()=>{s(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
