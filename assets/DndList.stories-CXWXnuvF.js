import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-BfNQUoGZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i,t as a}from"./DndList-DjgPoWHK.js";var o,s,c,l,u,d;t((()=>{i(),o=e(n(),1),s=r(),c={component:a,decorators:[(e,{args:t})=>{let[n,r]=(0,o.useState)(t.items);return t.items=n,t.onChange=r,(0,s.jsx)(e,{...t})}]},l={args:{items:[{id:1},{id:2},{id:3},{id:4},{id:5}],children:e=>(0,s.jsx)(a.Item,{id:e.id,children:(0,s.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,s.jsx)(a.DragHandle,{}),e.id]})})}},u={...l,args:{...l.args,disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }],
    children: item => <DndList.Item id={item.id}>
        <div className="flex items-center gap-2">
          <DndList.DragHandle />
          {item.id}
        </div>
      </DndList.Item>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Disabled`]}))();export{l as Default,u as Disabled,d as __namedExportsOrder,c as default};