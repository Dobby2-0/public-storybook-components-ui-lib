import{j as K}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-tvICUrOf.js";import{C as q}from"./ComboBox-DN0UuAsL.js";import"./index-yBjzXJbu.js";import"./ListBox-CpsU_75Z.js";import"./Loader-BsPrQ8_e.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./Check-FgbNu1D6.js";import"./useFocusRing-De8_vWxE.js";import"./platform-DO9ne4TU.js";import"./ListBox-asaKxFwG.js";import"./Header-Bo31PJBK.js";import"./usePress-jyRSkEHC.js";import"./openLink-Btrk4R3c.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./useDescription-CWQxiRdu.js";import"./FocusScope-C8WcBnFj.js";import"./context-BxCG6Cz5.js";import"./useControlledState-BZ6ANBWa.js";import"./Separator-DLggkP8A.js";import"./Hidden-975QGLs-.js";import"./DragAndDrop-CM0Wr761.js";import"./Text-DNKYJkYf.js";import"./useLabel-BNFm6v8H.js";import"./useLabels-B52qJwmh.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-Cxfx5faO.js";import"./Close-CQRyCptx.js";import"./Input-CYV0TCMr.js";import"./index-CnKvRkWh.js";import"./SelectBase-ssgdb5cy.js";import"./Label-BVYnJu1Z.js";import"./index-a5nvb9vf.js";import"./Popover-DT3YteLO.js";import"./Dialog-DLrl2gv5.js";import"./Button-Y1RDwf3W.js";import"./RSPContexts-B1Ggupi0.js";import"./PressResponder-CAmm6Bbq.js";import"./ariaHideOutside-Doz9nu2Q.js";import"./PortalProvider-ChirZUt_.js";import"./getScrollParent-C57vhpqh.js";import"./VisuallyHidden-Cn6kit17.js";import"./variants-CsVkyiyE.js";import"./Info-z3VoMegj.js";import"./KeyboardArrowDown-yCNVdyss.js";const He={component:q},r={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:a=>a.label}},i={args:{...r.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:a=>a.label}},m={args:{...r.args,loading:!0,className:"w-52"}},c={args:{...r.args,items:[]}},d={args:{...r.args,selectionMode:"multiple"}},p={decorators:[(a,{args:e})=>{const[t,g]=s.useState(e.items);return e.onLoadMore=s.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=t,t&&K.jsx(a,{...e})}],args:{...r.args,className:{listbox:"max-h-48"}}},u={decorators:[(a,{args:e})=>{const[t,g]=s.useState(""),[n,o]=s.useState(e.items),[_,B]=s.useState(!0);return s.useEffect(()=>{if(t){const O=n.filter(R=>R.label.toLowerCase().includes(t));o(O),B(!1)}else o(e.items)},[t]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(a,{...e})}],args:{...r.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(a=>{setTimeout(()=>{a(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const Ke=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData","AsyncFilteredData"];export{p as AsyncData,u as AsyncFilteredData,r as Default,l as Disabled,m as Loading,d as MultipleSelection,i as WithLabelAndDescription,Ke as __namedExportsOrder,He as default,c as emptyList};
