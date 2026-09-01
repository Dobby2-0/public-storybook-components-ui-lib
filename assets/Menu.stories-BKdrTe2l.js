import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{H as n,t as r}from"./main-DS6peC0q.js";import{n as i,t as a}from"./IconButton-D0iu5jRX.js";import{r as o,t as s}from"./Menu-gbd5NXBt.js";import{n as c,t as l}from"./Button-nC1UjAyO.js";var u,d,f,p,m,h,g,_;e((()=>{c(),i(),r(),o(),u=t(),d={component:s},f={items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`},{separator:!0},{id:`3`,label:`Item 3`,children:[{id:`3.1`,label:`Item 3.1`},{id:`3.2`,label:`Item 3.2`}]}]},p={args:{items:[{id:`1`,label:`Item 1`,onPress:()=>alert(`Item 1 is clicked`)},{id:`2`,label:`Item 2`}],children:(0,u.jsx)(a,{variant:`secondary`,children:(0,u.jsx)(n,{})})}},m={args:{...f,children:(0,u.jsx)(l,{variant:`secondary`,size:`sm`,children:`Click here`})}},h={args:{items:[{id:`1`,label:`Item 1`},{id:`2`,label:`Item 2`,isDisabled:!0},{id:`3`,label:`Item 3`}],children:(0,u.jsx)(l,{variant:`secondary`,size:`sm`,children:`Click here`})}},g={args:{...f,trigger:`longPress`,children:(0,u.jsx)(l,{variant:`secondary`,size:`sm`,onPress:()=>alert(`Try long press`),children:`Click here`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1",
      onPress: () => alert("Item 1 is clicked")
    }, {
      id: "2",
      label: "Item 2"
    }],
    children: <IconButton variant="secondary">
        <MoreHoriz />
      </IconButton>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    children: <Button variant="secondary" size="sm">
        Click here
      </Button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      isDisabled: true
    }, {
      id: "3",
      label: "Item 3"
    }],
    children: <Button variant="secondary" size="sm">
        Click here
      </Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    trigger: "longPress",
    children: <Button variant="secondary" size="sm" onPress={() => alert("Try long press")}>
        Click here
      </Button>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`SubMenu`,`DisabledItem`,`LongPress`]}))();export{p as Default,h as DisabledItem,g as LongPress,m as SubMenu,_ as __namedExportsOrder,d as default};