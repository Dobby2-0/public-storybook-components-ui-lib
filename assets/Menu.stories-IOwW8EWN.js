import{j as e}from"./iframe-_r4zkpJs.js";import{B as a}from"./Button-DGDQYpfr.js";import{I as B}from"./IconButton-mQQ5YbLp.js";import{s as y}from"./MoreHoriz-DgxRlmMn.js";import{M as f}from"./Menu-FvUuitBL.js";import"./preload-helper-Dp1pzeXC.js";import"./useHover-COEADJmR.js";import"./ButtonBase-C3IiCU3a.js";import"./Loader-DsBTWAS4.js";import"./Tooltip-DEkAEmBS.js";import"./index-CxfYqbSx.js";import"./Button-eAueHdKQ.js";import"./SelectionIndicator-D6Hmcec7.js";import"./index-JtYlRQJF.js";import"./index-B8OF1t7r.js";import"./usePress-CFH9OGw_.js";import"./Text-yvX1_btQ.js";import"./useCollection-Br_iJuJX.js";import"./index-Cjhu8_Dj.js";import"./VisuallyHidden-DeiVJ0W9.js";import"./Autocomplete-B4NkeyXp.js";import"./Check-DBcKlBej.js";import"./ChevronForward-pw7D1ewS.js";const N={component:f},x={items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{separator:!0},{id:"3",label:"Item 3",children:[{id:"3.1",label:"Item 3.1"},{id:"3.2",label:"Item 3.2"}]}]},r={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"}],children:e.jsx(B,{variant:"secondary",children:e.jsx(y,{})})}},n={args:{...x,children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},s={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",isDisabled:!0},{id:"3",label:"Item 3"}],children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},t={args:{...x,trigger:"longPress",children:e.jsx(a,{variant:"secondary",size:"sm",onPress:()=>alert("Try long press"),children:"Click here"})}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2"
    }],
    children: <IconButton variant="secondary">
        <MoreHoriz />
      </IconButton>
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    children: <Button variant="secondary" size="sm">
        Click here
      </Button>
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,I,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    trigger: "longPress",
    children: <Button variant="secondary" size="sm" onPress={() => alert("Try long press")}>
        Click here
      </Button>
  }
}`,...(h=(I=t.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const Q=["Default","SubMenu","DisabledItem","LongPress"];export{r as Default,s as DisabledItem,t as LongPress,n as SubMenu,Q as __namedExportsOrder,N as default};
