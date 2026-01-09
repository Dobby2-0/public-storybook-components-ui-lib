import{r as t,j as K}from"./iframe-BF_KP_hN.js";import{C as q}from"./ComboBox-BM71sC1H.js";import"./preload-helper-Dp1pzeXC.js";import"./SingleComboBox-BKlTeZgJ.js";import"./ListBox-l4qOsAbP.js";import"./Loader-DoBWafIM.js";import"./Check-DLqghWKL.js";import"./utils-BqpmhFVW.js";import"./Separator-C6fCfvQY.js";import"./usePress-fc5pKrNj.js";import"./index-I7XzL5DF.js";import"./index-DWPRwdrc.js";import"./FocusScope-4pytHGpx.js";import"./Text-mk_HzVZA.js";import"./index-MQ1ttWeg.js";import"./ListBox-DjHcsfaC.js";import"./DragAndDrop-D9NQ6c3Q.js";import"./useLabel-Cu4eK06_.js";import"./Pill-G3LSHrcB.js";import"./Input-DgSKj3W9.js";import"./index-7WMUdYsb.js";import"./Button-yFbSCyNo.js";import"./RSPContexts-BOzgkn97.js";import"./VisuallyHidden-DE-molTm.js";import"./SelectBase-DVmpqj5t.js";import"./Label-6_OGEEE6.js";import"./index-CODvd-3F.js";import"./Label-BqrROEg6.js";import"./variants-Dx_--Ifz.js";import"./KeyboardArrowDown-C3H7Ffdt.js";const De={component:q},a={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:s=>s.label}},i={args:{...a.args,label:"Favourite animal",description:"Select an animal"}},l={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:s=>s.label}},m={args:{...a.args,loading:!0,className:"w-52"}},c={args:{...a.args,items:[]}},d={args:{...a.args,selectionMode:"multiple"}},u={decorators:[(s,{args:e})=>{const[r,g]=t.useState(e.items);return e.onLoadMore=t.useCallback(()=>new Promise(n=>{setTimeout(()=>{g(o=>o.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),n(!1)},1e3)}),[]),e.items=r,r&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"}}},p={decorators:[(s,{args:e})=>{const[r,g]=t.useState(""),[n,o]=t.useState(e.items),[_,B]=t.useState(!0);return t.useEffect(()=>{if(r){const O=n.filter(R=>R.label.toLowerCase().includes(r));o(O),B(!1)}else o(e.items)},[r]),e.items=n,e.hasNextPage=_,e.onInputChange=g,n&&K.jsx(s,{...e})}],args:{...a.args,className:{listbox:"max-h-48"},onLoadMore:()=>new Promise(s=>{setTimeout(()=>{s(!1)},1e3)}),disableLocalFiltering:!0}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
