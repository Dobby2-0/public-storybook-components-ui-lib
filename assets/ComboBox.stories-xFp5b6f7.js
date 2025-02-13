import{j as E}from"./jsx-runtime-DiklIkkE.js";import{r as F}from"./index-DRjF_FHU.js";import{C as K}from"./ComboBox-Chrw1bBp.js";import"./ListBox-Dg-Y0i0h.js";import"./Loader-BJ2nfBAY.js";import"./index-By-mRCMU.js";import"./index-wL3GxAOQ.js";import"./Check-DSg0oYgO.js";import"./useFocusRing-C2joOJ2i.js";import"./platform-DO9ne4TU.js";import"./ListBox-DHY4_BdI.js";import"./Collection-C-NJo0Vc.js";import"./Hidden-BWQAXzSJ.js";import"./index-DXragnAo.js";import"./DragAndDrop-DL0As7o8.js";import"./Separator-D9Ljyr4p.js";import"./openLink-CPTnSpMu.js";import"./usePress-DzAnqiLT.js";import"./useDescription-lFTqoRvv.js";import"./FocusScope-DWeJuNxh.js";import"./context-bmyPNISj.js";import"./useControlledState-uSQY0H5C.js";import"./Text-DcMJJj-c.js";import"./useLabel-CqqkUdV-.js";import"./useTranslation-BRXvhZwW.js";import"./Pill-iNIM3s_k.js";import"./Close-jTRcUcFO.js";import"./Input-D86Qj96C.js";import"./index-DfOB4grb.js";import"./SelectBase-WzRgxCBt.js";import"./Label-BdIAqgSo.js";import"./index-CIrgRNsn.js";import"./Popover-CYhgJX5s.js";import"./Dialog-olLmu_1g.js";import"./Button-BLU831Ra.js";import"./useFocusable-CBTNhI2N.js";import"./RSPContexts-BlCrYygD.js";import"./PressResponder-2KqdzPgr.js";import"./useLocalizedStringFormatter-CUIF3Fy3.js";import"./PortalProvider-DG1WN5c3.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-CwnL7q1w.js";import"./VisuallyHidden--5HhtfxT.js";import"./Info-kR9cEf1C.js";import"./KeyboardArrowDown-BVVyEK41.js";const Ae={component:K},e={args:{placeholder:"Search animals",items:[{id:"1",label:"Aardvark"},{id:"2",label:"Cat"},{id:"3",label:"Dog"},{id:"4",label:"Kangaroo"},{id:"5",label:"Panda"},{id:"6",label:"Snake"}],children:r=>r.label}},o={args:{...e.args,label:"Favourite animal",description:"Select an animal"}},t={args:{label:"Pick an item",placeholder:"Search",isDisabled:!0,items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:r=>r.label}},n={args:{...e.args,loading:!0}},s={args:{...e.args,items:[]}},i={args:{...e.args,selectionMode:"multiple"}},l={decorators:[(r,{args:a})=>{const[m,C]=F.useState(a.items),T=()=>new Promise(W=>{setTimeout(()=>{const j=m.concat([{id:"7",label:"Swan"},{id:"8",label:"Turtle"},{id:"9",label:"Worm"}]);C(j),W(!1)},1e3)});return a.onLoadMore&&(a.onLoadMore=()=>T()),a.items=m,m&&E.jsx(r,{...a})}],args:{...e.args,className:{listbox:"max-h-48"},onLoadMore:()=>Promise.resolve(!0)}};var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Favourite animal",
    description: "Select an animal"
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,h,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var f,L,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var M,y,v;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: []
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var I,k,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,A,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const [nodes, setNodes] = useState(args.items);
    const handleLoadMore = () => {
      return new Promise<boolean>(resolve => {
        setTimeout(() => {
          const updatedItems = nodes.concat([{
            id: "7",
            label: "Swan"
          }, {
            id: "8",
            label: "Turtle"
          }, {
            id: "9",
            label: "Worm"
          }]);
          setNodes(updatedItems);

          // return false to indicate no more items are available
          resolve(false);
        }, 1000);
      });
    };
    if (args.onLoadMore) {
      args.onLoadMore = () => handleLoadMore();
    }
    args.items = nodes;
    return nodes && <Story {...args} />;
  }],
  args: {
    ...Default.args,
    className: {
      listbox: "max-h-48"
    },
    onLoadMore: () => Promise.resolve(true)
  }
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Ne=["Default","WithLabelAndDescription","Disabled","Loading","emptyList","MultipleSelection","AsyncData"];export{l as AsyncData,e as Default,t as Disabled,n as Loading,i as MultipleSelection,o as WithLabelAndDescription,Ne as __namedExportsOrder,Ae as default,s as emptyList};
