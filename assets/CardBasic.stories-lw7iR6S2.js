import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c}from"./index-D8pzxCuu.js";import{r as d}from"./index-tvICUrOf.js";import"./index-yBjzXJbu.js";const s=d.forwardRef(({heading:t,removeHeadingBorder:l,highlighted:C,className:n,children:_,...H},j)=>{const e=d.useMemo(()=>typeof n=="object"?n:{base:n},[n]),B=d.useMemo(()=>i.jsx("div",{className:c("border-neutral-200 mb-2.5",!l&&"pb-2.5 border-b",e==null?void 0:e.heading),children:t}),[e==null?void 0:e.heading,t,l]);return i.jsxs("div",{ref:j,className:c("w-full bg-neutral rounded-md p-[15px]",C&&"bg-neutral-150 dark:bg-neutral-300",e.base),...H,children:[t&&B,_]})});s.displayName="CardBasic";try{s.displayName="CardBasic",s.__docgenInfo={description:"Basic Card component",displayName:"CardBasic",props:{heading:{defaultValue:null,description:"Optional heading element for the panel",name:"heading",required:!1,type:{name:"ReactNode"}},removeHeadingBorder:{defaultValue:null,description:"Remove the border underneath the optional heading",name:"removeHeadingBorder",required:!1,type:{name:"boolean"}},highlighted:{defaultValue:null,description:"Higlight the component, changing the background color",name:"highlighted",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS className for the element.",name:"className",required:!1,type:{name:"string | ClassNameObject"}}}}}catch{}const R={component:s},a={args:{children:"This is a simple card component."}},r={args:{...a.args,heading:i.jsx("h2",{className:"text-lg font-semibold",children:"Card header"})}},o={args:{...r.args,highlighted:!0}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "This is a simple card component."
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    heading: <h2 className="text-lg font-semibold">Card header</h2>
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...WithHeading.args,
    highlighted: true
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["Default","WithHeading","Highlighted"];export{a as Default,o as Highlighted,r as WithHeading,V as __namedExportsOrder,R as default};
