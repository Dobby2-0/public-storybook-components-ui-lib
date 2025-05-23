import{j as K}from"./jsx-runtime-F1iDwNaf.js";import{r as s}from"./index-YTOF1_EJ.js";import{C as q}from"./ComboBox-C32G1xl4.js";import"./ListBox-BvPJrXQZ.js";import"./Loader-xB9gCnz2.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./Check-d3BnqXpp.js";import"./useFocusRing-BhqMP7Wf.js";import"./platform-DO9ne4TU.js";import"./ListBox-DgwY20GW.js";import"./Header-DYgvXHaf.js";import"./usePress-BUSFzwYD.js";import"./openLink-DdIfhzZQ.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./useDescription-DzZWTAGl.js";import"./FocusScope-BZe3pABC.js";import"./context-HK5jm6EM.js";import"./useControlledState-DSc3NtNd.js";import"./Separator-VQwpI8cE.js";import"./Hidden-D7ttFcTv.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-SKeF9n-L.js";import"./useLabel-D8vA6x2F.js";import"./useLabels-Cu4YAmyo.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./Input--1n2ZCo3.js";import"./index-Db92_y2_.js";import"./SelectBase-UoatXl6n.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./Popover-OPBoO5qx.js";import"./Dialog-ok1EYznv.js";import"./Button-BdmBsY1d.js";import"./RSPContexts-D68aBqj8.js";import"./PressResponder-DU6eNYGA.js";import"./ariaHideOutside-Dy5gdQvH.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-C7zgn3BX.js";import"./VisuallyHidden-dgF7iibt.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";const We={component:q},a={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:r=>r.label}},i={args:{...a.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:r=>r.label}},m={args:{...a.args,loading:!0,className:"w-52"}},c={args:{...a.args,items:[]}},d={args:{...a.args,selectionMode:"multiple"}},p={decorators:[(r,{args:e})=>{const[t,g]=s.useState(e.items);return e.onLoadMore=s.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=t,t&&K.jsx(r,{...e})}],args:{...a.args,className:{listbox:"max-h-48"}}},u={decorators:[(r,{args:e})=>{const[t,g]=s.useState(""),[n,o]=s.useState(e.items),[_,B]=s.useState(!0);return s.useEffect(()=>{if(t){const O=n.filter(R=>R.label.toLowerCase().includes(t));o(O),B(!1)}else o(e.items)},[t]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(r,{...e})}],args:{...a.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(r=>{setTimeout(()=>{r(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const He=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData","AsyncFilteredData"];export{p as AsyncData,u as AsyncFilteredData,a as Default,l as Disabled,m as Loading,d as MultipleSelection,i as WithLabelAndDescription,He as __namedExportsOrder,We as default,c as emptyList};
