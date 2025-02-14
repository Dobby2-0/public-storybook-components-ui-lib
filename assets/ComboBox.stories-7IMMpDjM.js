import{j as E}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{C as F}from"./ComboBox-CfS0EkAU.js";import"./ListBox-oS_h6YYe.js";import"./Loader-BJ2nfBAY.js";import"./index-By-mRCMU.js";import"./index-wL3GxAOQ.js";import"./Check-DSg0oYgO.js";import"./useFocusRing-C2joOJ2i.js";import"./platform-DO9ne4TU.js";import"./ListBox-DHY4_BdI.js";import"./Collection-C-NJo0Vc.js";import"./Hidden-BWQAXzSJ.js";import"./index-DXragnAo.js";import"./DragAndDrop-DL0As7o8.js";import"./Separator-D9Ljyr4p.js";import"./openLink-CPTnSpMu.js";import"./usePress-DzAnqiLT.js";import"./useDescription-lFTqoRvv.js";import"./FocusScope-DWeJuNxh.js";import"./context-bmyPNISj.js";import"./useControlledState-uSQY0H5C.js";import"./Text-DcMJJj-c.js";import"./useLabel-CqqkUdV-.js";import"./useTranslation-BRXvhZwW.js";import"./Pill-iNIM3s_k.js";import"./Close-jTRcUcFO.js";import"./Input-D86Qj96C.js";import"./index-DfOB4grb.js";import"./SelectBase-DFztyjMV.js";import"./Label-BdIAqgSo.js";import"./index-CIrgRNsn.js";import"./Popover-BOsTstwU.js";import"./Dialog-olLmu_1g.js";import"./Button-BLU831Ra.js";import"./useFocusable-CBTNhI2N.js";import"./RSPContexts-BlCrYygD.js";import"./PressResponder-2KqdzPgr.js";import"./useLocalizedStringFormatter-CUIF3Fy3.js";import"./PortalProvider-DG1WN5c3.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-CwnL7q1w.js";import"./VisuallyHidden--5HhtfxT.js";import"./Info-kR9cEf1C.js";import"./KeyboardArrowDown-BVVyEK41.js";const Ie={component:F},e={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:r=>r.label}},t={args:{...e.args,label:"Favourite animal",description:"Select an animal"}},o={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:r=>r.label}},n={args:{...e.args,loading:!0}},s={args:{...e.args,items:[]}},i={args:{...e.args,selectionMode:"multiple"}},l={decorators:[(r,{args:a})=>{const[m,T]=p.useState(a.items);return a.onLoadMore=p.useCallback(()=>new Promise(W=>{setTimeout(()=>{T(j=>j.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}])),W(!1)},1e3)}),[]),a.items=m,m&&E.jsx(r,{...a})}],args:{...e.args,className:{listbox:"max-h-48"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,g,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,D,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,k,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var v,L,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,C,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var M,P,N;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const Me=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData"];export{l as AsyncData,e as Default,o as Disabled,n as Loading,i as MultipleSelection,t as WithLabelAndDescription,Me as __namedExportsOrder,Ie as default,s as emptyList};
