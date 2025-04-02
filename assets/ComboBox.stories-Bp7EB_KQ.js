import{j as K}from"./jsx-runtime-F1iDwNaf.js";import{r as s}from"./index-YTOF1_EJ.js";import{C as q}from"./ComboBox-C3pEt3Cg.js";import"./ListBox-B_vRuTKW.js";import"./Loader-xB9gCnz2.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./Check-d3BnqXpp.js";import"./useFocusRing-BCcVRV1W.js";import"./platform-DO9ne4TU.js";import"./ListBox-_ZFYxsVb.js";import"./Collection-D72pwjyt.js";import"./Hidden-D3qdwGc7.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./DragAndDrop-B_G89oNp.js";import"./Separator-Bia4ZK9j.js";import"./openLink-8mltwmIb.js";import"./usePress-Qy4Tuk_n.js";import"./useDescription-CQdQCKlk.js";import"./FocusScope-Bq1MVHph.js";import"./context-B1-8vjow.js";import"./useControlledState-BLnGQsC8.js";import"./Text-CUzL_Ejp.js";import"./useLabel-DvD-zg7_.js";import"./useLabels-Dzu6Vces.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./Input-Dv7UtOS7.js";import"./index-u5j6GQhH.js";import"./SelectBase-BCIebCcf.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./Popover-CzIfMYpm.js";import"./Dialog-CG1btdUR.js";import"./Button-aud4VQvi.js";import"./useFocusable-CYgatKa4.js";import"./RSPContexts-uj8S1pO4.js";import"./PressResponder-BL3btCGW.js";import"./useLocalizedStringFormatter-BIwj9O_3.js";import"./PortalProvider-D04PMIEq.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-CYkSmvrp.js";import"./VisuallyHidden-i3w_VAQN.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";const Ke={component:q},r={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:a=>a.label}},i={args:{...r.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:a=>a.label}},m={args:{...r.args,loading:!0}},c={args:{...r.args,items:[]}},d={args:{...r.args,selectionMode:"multiple"}},p={decorators:[(a,{args:e})=>{const[t,g]=s.useState(e.items);return e.onLoadMore=s.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=t,t&&K.jsx(a,{...e})}],args:{...r.args,className:{listbox:"max-h-48"}}},u={decorators:[(a,{args:e})=>{const[t,g]=s.useState(""),[n,o]=s.useState(e.items),[_,B]=s.useState(!0);return s.useEffect(()=>{if(t){const O=n.filter(R=>R.label.toLowerCase().includes(t));o(O),B(!1)}else o(e.items)},[t]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(a,{...e})}],args:{...r.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(a=>{setTimeout(()=>{a(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,x,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var L,k,v;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,C,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,I,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var V,T,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var j,W,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const _e=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData","AsyncFilteredData"];export{p as AsyncData,u as AsyncFilteredData,r as Default,l as Disabled,m as Loading,d as MultipleSelection,i as WithLabelAndDescription,_e as __namedExportsOrder,Ke as default,c as emptyList};
