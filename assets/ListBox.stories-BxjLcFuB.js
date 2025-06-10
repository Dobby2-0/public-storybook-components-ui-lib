import{L}from"./ListBox-BTvPko2l.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./Loader-BsPrQ8_e.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./index-tvICUrOf.js";import"./Check-FgbNu1D6.js";import"./useFocusRing-De8_vWxE.js";import"./platform-DO9ne4TU.js";import"./ListBox-asaKxFwG.js";import"./Header-Bo31PJBK.js";import"./usePress-jyRSkEHC.js";import"./openLink-Btrk4R3c.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./useDescription-CWQxiRdu.js";import"./FocusScope-C8WcBnFj.js";import"./context-BxCG6Cz5.js";import"./useControlledState-BZ6ANBWa.js";import"./Separator-DLggkP8A.js";import"./Hidden-975QGLs-.js";import"./DragAndDrop-CM0Wr761.js";import"./Text-DNKYJkYf.js";import"./useLabel-BNFm6v8H.js";import"./useLabels-B52qJwmh.js";import"./useTranslation-rxOr_aTQ.js";const ee={component:L},t={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],labelResolver:e=>e.label}},r={args:{...t.args,selectionMode:"single"}},n={args:{...t.args,selectionMode:"multiple"}},l={args:{selectionMode:"single",items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:(e,v)=>(v.isDisabled=e.id==="3",e.label)}},s={args:{items:[],renderEmptyState:()=>"No results found."}},a={args:{className:"max-h-64",items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"},{id:"4",label:"Item 4"},{id:"5",label:"Item 5"},{id:"6",label:"Item 6"},{id:"7",label:"Item 7"},{id:"8",label:"Item 8"},{id:"9",label:"Item 9"},{id:"10",label:"Item 10"},{id:"11",label:"Item 11"},{id:"12",label:"Item 12"},{id:"13",label:"Item 13"},{id:"14",label:"Item 14"},{id:"15",label:"Item 15"}],labelResolver:e=>e.label,onLoadMore:()=>(console.warn("loadMore"),new Promise(e=>{setTimeout(()=>e(!1),1e3)}))}};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "single"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,I,u;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(u=(I=n.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var g,S,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var M,x,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const te=["Default","SingleSelection","MultipleSelection","DisabledItem","EmptyList","Scroll"];export{t as Default,l as DisabledItem,s as EmptyList,n as MultipleSelection,a as Scroll,r as SingleSelection,te as __namedExportsOrder,ee as default};
