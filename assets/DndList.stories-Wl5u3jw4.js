import{j as i}from"./jsx-runtime-F1iDwNaf.js";import{D as n}from"./DndList-C40gmYqT.js";import{r as D}from"./index-YTOF1_EJ.js";import"./index-D8pzxCuu.js";import"./sortable.esm-CMOp3Hru.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./DragIndicator-B8qafwOQ.js";const v={component:n,decorators:[(s,{args:r})=>{const[l,u]=D.useState(r.items);return r.items=l,r.onChange=u,i.jsx(s,{...r})}]},e={args:{items:[{id:1},{id:2},{id:3},{id:4},{id:5}],children:s=>i.jsx(n.Item,{id:s.id,children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(n.DragHandle,{}),s.id]})})}},t={...e,args:{...e.args,disabled:!0}};var a,d,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Default","Disabled"];export{e as Default,t as Disabled,E as __namedExportsOrder,v as default};
