import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BbeNlDUO.js";import{i as n,t as r}from"./utils-TgsCZh5h.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{n as a,t as o}from"./Divider-ByfeesV7.js";var s,c,l;function u(){return(u=e((()=>{n(),s=t(),a(),c=i(),l=({children:e,divider:t,hideDivider:n,className:i,...a})=>{let l=s.Children.toArray(e).filter(Boolean);return(0,c.jsx)(`ul`,{className:r(`space-y-[15px]`,i),...a,children:l.map((e,r)=>(0,c.jsxs)(c.Fragment,{children:[!n&&r!==0&&(t??(0,c.jsx)(o,{})),(0,c.jsx)(`li`,{children:e})]}))})};try{l.displayName=`List`,l.__docgenInfo={description:`A List component that renders children as a list, with an optional custom divider between list items.`,displayName:`List`,filePath:`/home/runner/work/components-ui-lib/components-ui-lib/src/components/List/List.tsx`,methods:[],props:{divider:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/List/List.tsx`,name:`ListProps`}],description:`custom divider for the list`,name:`divider`,parent:{fileName:`components-ui-lib/src/components/List/List.tsx`,name:`ListProps`},required:!1,tags:{},type:{name:`ReactNode`}},hideDivider:{defaultValue:null,declarations:[{fileName:`components-ui-lib/src/components/List/List.tsx`,name:`ListProps`}],description:``,name:`hideDivider`,parent:{fileName:`components-ui-lib/src/components/List/List.tsx`,name:`ListProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{example:`with custom divider
<List customDivider={<div>*********</div>}>
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</List>`}}}catch{}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{u(),d=i(),f={component:l,argTypes:{children:{table:{disable:!0}}},args:{children:[`First item`,`Second item`,`Third item`]}},p={},m={args:{divider:(0,d.jsx)(`div`,{children:`************`})}},h={args:{hideDivider:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    divider: <div>************</div>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    hideDivider: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`CustomDivider`,`WithoutDivider`]})))()}_();export{m as CustomDivider,p as Default,h as WithoutDivider,g as __namedExportsOrder,f as default};