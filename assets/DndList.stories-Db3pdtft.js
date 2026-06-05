import{j as i,r as D}from"./iframe-D47Q0F9X.js";import{D as n}from"./DndList-BwgUuqJF.js";import"./preload-helper-Dp1pzeXC.js";import"./sortable.esm-DswiSYwN.js";import"./index-D1wSKHgt.js";import"./index-hDndN7gJ.js";import"./DragIndicator-C5MxR1E2.js";const L={component:n,decorators:[(s,{args:t})=>{const[l,u]=D.useState(t.items);return t.items=l,t.onChange=u,i.jsx(s,{...t})}]},e={args:{items:[{id:1},{id:2},{id:3},{id:4},{id:5}],children:s=>i.jsx(n.Item,{id:s.id,children:i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(n.DragHandle,{}),s.id]})})}},r={...e,args:{...e.args,disabled:!0}};var a,d,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const v=["Default","Disabled"];export{e as Default,r as Disabled,v as __namedExportsOrder,L as default};
