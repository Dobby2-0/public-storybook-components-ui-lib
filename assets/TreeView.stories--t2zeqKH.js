import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{Bt as n,It as r,L as i,_ as a,_t as o,at as s,ct as c,gt as l,in as u,t as d}from"./main-DS6peC0q.js";import{n as f,t as p}from"./TreeView-dl4kZJby.js";var m,h,g,_,v,y,b,x,S;e((()=>{d(),f(),m=t(),h={component:p,argTypes:{hideTriggerIcon:{control:`boolean`,if:{arg:`asPopover`,truthy:!1}}}},g={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`,children:[{id:`3`,label:`Item 2.1`},{id:`4`,label:`Item 2.2`}]}]}},_={args:{items:[{id:`1`,label:`Item 1`,menuActions:[{id:`menu-item-1`,label:`Alert me`,onPress:()=>alert(`clicked`)}]},{id:`2`,label:`Item 2`}]}},v={args:{items:[{id:`1`,label:`Dashboard`,icons:{default:(0,m.jsx)(c,{})}},{id:`2`,label:`Inbox`,children:[{id:`4`,label:`Meldingen`,icons:{default:(0,m.jsx)(i,{})}},{id:`5`,label:`Taken`,icons:{default:(0,m.jsx)(a,{})}}]},{id:`3`,label:`Administratie`,children:[{id:`6`,label:`Gebouwen`,icons:{default:(0,m.jsx)(u,{})}},{id:`7`,label:`Eigenaars`,icons:{default:(0,m.jsx)(s,{})}}]}]}},y={args:{defaultIcons:{branch:(0,m.jsx)(o,{}),expandedBranch:(0,m.jsx)(l,{}),leaf:(0,m.jsx)(r,{})},items:[{id:`1`,label:`Folder (empty)`,children:[]},{id:`2`,label:`Folder`,children:[{id:`3`,label:`File`},{id:`4`,label:`File`}]}],hideTriggerIcon:!0}},b={args:{forceRootIcons:!0,asPopover:!0,items:[{id:`1`,label:`First item`,icons:{default:(0,m.jsx)(c,{})}},{id:`2`,label:`Second item`,children:[{id:`3`,label:`Item 2.1`,icons:{default:(0,m.jsx)(n,{})}},{id:`4`,label:`Item 2.2`,children:[{id:`5`,label:`Item 2.2.1`}]},{id:`6`,label:`Item 3.2`,children:[{id:`7`,label:`Item 3.2.1`},{id:`8`,label:`Item 3.2.2`}]}]}]}},x={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`,children:[{id:`3`,label:`Item 3`,children:(0,m.jsx)(`div`,{children:`Item 3`})},{id:`4`,label:`Item 4`,children:[{id:`5`,label:`Item 5`},{id:`6`,label:`Item 6`}]},{id:`7`,label:`Item 7`,children:[{id:`8`,label:`Item 8`,children:[{id:`9`,label:`Item 9`}]}]}]}],selectionMode:`checkbox`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 2.1"
      }, {
        id: "4",
        label: "Item 2.2"
      }]
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1",
      menuActions: [{
        id: "menu-item-1",
        label: "Alert me",
        onPress: () => alert("clicked")
      }]
    }, {
      id: "2",
      label: "Item 2"
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Dashboard",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Inbox",
      children: [{
        id: "4",
        label: "Meldingen",
        icons: {
          default: <Notifications />
        }
      }, {
        id: "5",
        label: "Taken",
        icons: {
          default: <Task />
        }
      }]
    }, {
      id: "3",
      label: "Administratie",
      children: [{
        id: "6",
        label: "Gebouwen",
        icons: {
          default: <Business />
        }
      }, {
        id: "7",
        label: "Eigenaars",
        icons: {
          default: <Group />
        }
      }]
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultIcons: {
      branch: <Folder />,
      expandedBranch: <FolderOpen />,
      leaf: <Description />
    },
    items: [{
      id: "1",
      label: "Folder (empty)",
      children: []
    }, {
      id: "2",
      label: "Folder",
      children: [{
        id: "3",
        label: "File"
      }, {
        id: "4",
        label: "File"
      }]
    }],
    hideTriggerIcon: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    forceRootIcons: true,
    asPopover: true,
    items: [{
      id: "1",
      label: "First item",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Second item",
      children: [{
        id: "3",
        label: "Item 2.1",
        icons: {
          default: <Dashboard />
        }
      }, {
        id: "4",
        label: "Item 2.2",
        children: [{
          id: "5",
          label: "Item 2.2.1"
        }]
      }, {
        id: "6",
        label: "Item 3.2",
        children: [{
          id: "7",
          label: "Item 3.2.1"
        }, {
          id: "8",
          label: "Item 3.2.2"
        }]
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 3",
        children: <div>Item 3</div>
      }, {
        id: "4",
        label: "Item 4",
        children: [{
          id: "5",
          label: "Item 5"
        }, {
          id: "6",
          label: "Item 6"
        }]
      }, {
        id: "7",
        label: "Item 7",
        children: [{
          id: "8",
          label: "Item 8",
          children: [{
            id: "9",
            label: "Item 9"
          }]
        }]
      }]
    }],
    selectionMode: "checkbox"
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`DefaultWithMenuActions`,`LeafsWithIcons`,`AllWithIcons`,`ForcedIconsWithPopovers`,`CheckboxSelection`]}))();export{y as AllWithIcons,x as CheckboxSelection,g as Default,_ as DefaultWithMenuActions,b as ForcedIconsWithPopovers,v as LeafsWithIcons,S as __namedExportsOrder,h as default};