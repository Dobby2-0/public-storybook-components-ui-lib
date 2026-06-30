import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./ListBox-Bzda-wDe.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={component:n},i={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{id:`3`,label:`Item 3`}],labelResolver:e=>e.label}},a={args:{...i.args,selectionMode:`single`}},o={args:{...i.args,selectionMode:`multiple`}},s={args:{selectionMode:`single`,items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{id:`3`,label:`Item 3`}],children:(e,t)=>(t.isDisabled=e.id===`3`,e.label)}},c={args:{items:[],renderEmptyState:()=>`No results found.`}},l={args:{className:`max-h-64`,items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{id:`3`,label:`Item 3`},{id:`4`,label:`Item 4`},{id:`5`,label:`Item 5`},{id:`6`,label:`Item 6`},{id:`7`,label:`Item 7`},{id:`8`,label:`Item 8`},{id:`9`,label:`Item 9`},{id:`10`,label:`Item 10`},{id:`11`,label:`Item 11`},{id:`12`,label:`Item 12`},{id:`13`,label:`Item 13`},{id:`14`,label:`Item 14`},{id:`15`,label:`Item 15`}],labelResolver:e=>e.label,onLoadMore:()=>(console.warn(`loadMore`),new Promise(e=>{setTimeout(()=>e(!1),1e3)}))}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "single"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: "multiple"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    renderEmptyState: () => "No results found."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`SingleSelection`,`MultipleSelection`,`DisabledItem`,`EmptyList`,`Scroll`]}))();export{i as Default,s as DisabledItem,c as EmptyList,o as MultipleSelection,l as Scroll,a as SingleSelection,u as __namedExportsOrder,r as default};