import{L as M}from"./ListBox-vtNQwoAp.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./index-By-mRCMU.js";import"./Check-f6fs0czz.js";import"./useFocusRing-DmDxhQCI.js";import"./index-rX-Bn4lm.js";import"./platform-SeyP_Zfo.js";import"./ListBox-DM1LzFJn.js";import"./Collection-BXZCYl9S.js";import"./Hidden-CICGlFC4.js";import"./DragAndDrop-CF_SXvn4.js";import"./context-C5A1kbiU.js";import"./FocusScope-BD8VaRNk.js";import"./openLink--SV7cA94.js";import"./isScrollable-BSEN4xi5.js";import"./usePress-76wSwCmG.js";import"./useDescription-vAR7K5Yy.js";import"./useControlledState-uSQY0H5C.js";import"./Text-w-xymXK0.js";import"./useLabels-DHGrCtKF.js";const K={component:M},e={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],labelResolver:r=>r.label}},t={args:{...e.args,selectionMode:"single"}},s={args:{...e.args,selectionMode:"multiple"}},o={args:{selectionMode:"single",items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}],children:(r,D)=>(D.isDisabled=r.id==="3",r.label)}},i={args:{renderEmptyState:()=>"No results found."}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "single"
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,I,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,f,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    renderEmptyState: () => "No results found."
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Q=["Default","SingleSelection","MultipleSelection","DisabledItem","EmptyList"];export{e as Default,o as DisabledItem,i as EmptyList,s as MultipleSelection,t as SingleSelection,Q as __namedExportsOrder,K as default};
