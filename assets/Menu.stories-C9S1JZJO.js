import{j as e}from"./iframe-C8WqZKtX.js";import{B as a}from"./Button-XNcAICl1.js";import{I as B}from"./IconButton-Bx1OvcWF.js";import{s as y}from"./MoreHoriz-fzkWP4ms.js";import{M as f}from"./Menu-B1J5ppJ-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jtSVojHF.js";import"./ButtonBase-CHzHNBmp.js";import"./Loader-yHUC8L0D.js";import"./Tooltip-Cj2CoiKx.js";import"./index-lbB97veH.js";import"./Button-NHtOoMQI.js";import"./FocusScope-B02YIt_w.js";import"./Text-CP-wYi1U.js";import"./usePress-BMPY-rYn.js";import"./index-Bkmr4GuA.js";import"./index-CMotOyWi.js";import"./RSPContexts-Cq9bAEtH.js";import"./Separator-Ce1Am9rV.js";import"./index-C9ZTeJRU.js";import"./VisuallyHidden-BHi9umrS.js";import"./Check-9H6Sxgn4.js";import"./ChevronForward-nuh7y7Mb.js";const N={component:f},x={items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{separator:!0},{id:"3",label:"Item 3",children:[{id:"3.1",label:"Item 3.1"},{id:"3.2",label:"Item 3.2"}]}]},r={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"}],children:e.jsx(B,{variant:"secondary",children:e.jsx(y,{})})}},n={args:{...x,children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},s={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",isDisabled:!0},{id:"3",label:"Item 3"}],children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},t={args:{...x,trigger:"longPress",children:e.jsx(a,{variant:"secondary",size:"sm",onPress:()=>alert("Try long press"),children:"Click here"})}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
