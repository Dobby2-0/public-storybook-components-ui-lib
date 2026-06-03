import{L}from"./ListBox-pXm3A-w4.js";import"./iframe-DetaKL0_.js";import"./preload-helper-Dp1pzeXC.js";import"./Loader-BRWONZMQ.js";import"./Check-mBRJ3Ynd.js";import"./useHover-BeS5e-IQ.js";import"./useCollection-f1aOX4n3.js";import"./Text-ByQgp3qy.js";import"./index-CW5rNLKP.js";import"./index-CPpoh3b8.js";import"./index-nSRzIFah.js";import"./SelectionIndicator-C0c_pcIB.js";import"./usePress-CZ1xYj4q.js";import"./ListBox-CNtHPtqH.js";import"./useLoadMoreSentinel-XsYur6vV.js";import"./Autocomplete-BqQtBmhO.js";import"./useLabel-C0Y-ULtJ.js";const H={component:L},t={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],labelResolver:e=>e.label}},n={args:{...t.args,selectionMode:"single"}},l={args:{...t.args,selectionMode:"multiple"}},r={args:{selectionMode:"single",items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:(e,v)=>(v.isDisabled=e.id==="3",e.label)}},s={args:{items:[],renderEmptyState:()=>"No results found."}},a={args:{className:"max-h-64",items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"},{id:"4",label:"Item 4"},{id:"5",label:"Item 5"},{id:"6",label:"Item 6"},{id:"7",label:"Item 7"},{id:"8",label:"Item 8"},{id:"9",label:"Item 9"},{id:"10",label:"Item 10"},{id:"11",label:"Item 11"},{id:"12",label:"Item 12"},{id:"13",label:"Item 13"},{id:"14",label:"Item 14"},{id:"15",label:"Item 15"}],labelResolver:e=>e.label,onLoadMore:()=>(console.warn("loadMore"),new Promise(e=>{setTimeout(()=>e(!1),1e3)}))}};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
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
    labelResolver: item => item.label as string
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "single"
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,I,u;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(u=(I=l.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var g,S,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
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
    children: (item, extraProps) => {
      // @ts-expect-error - issues with typing in storybook
      extraProps.isDisabled = item.id === "3";
      // @ts-expect-error - issues with typing in storybook
      return item.label as string;
    }
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var M,x,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: [],
    renderEmptyState: () => "No results found."
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,w,D;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: "max-h-64",
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2"
    }, {
      id: "3",
      label: "Item 3"
    }, {
      id: "4",
      label: "Item 4"
    }, {
      id: "5",
      label: "Item 5"
    }, {
      id: "6",
      label: "Item 6"
    }, {
      id: "7",
      label: "Item 7"
    }, {
      id: "8",
      label: "Item 8"
    }, {
      id: "9",
      label: "Item 9"
    }, {
      id: "10",
      label: "Item 10"
    }, {
      id: "11",
      label: "Item 11"
    }, {
      id: "12",
      label: "Item 12"
    }, {
      id: "13",
      label: "Item 13"
    }, {
      id: "14",
      label: "Item 14"
    }, {
      id: "15",
      label: "Item 15"
    }],
    // @ts-expect-error - issues with typing in storybook
    labelResolver: item => item.label as string,
    onLoadMore: () => {
      console.warn("loadMore");
      return new Promise(resolve => {
        setTimeout(() => resolve(false), 1000);
      });
    }
  }
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const J=["Default","SingleSelection","MultipleSelection","DisabledItem","EmptyList","Scroll"];export{t as Default,r as DisabledItem,s as EmptyList,l as MultipleSelection,a as Scroll,n as SingleSelection,J as __namedExportsOrder,H as default};
