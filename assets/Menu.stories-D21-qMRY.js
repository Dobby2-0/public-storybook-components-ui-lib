import{j as e}from"./iframe-D9_lbR41.js";import{B as a}from"./Button-0TBUFIQb.js";import{I as B}from"./IconButton-BJ9QUkxQ.js";import{s as y}from"./MoreHoriz-CBLcxKHw.js";import{M as f}from"./Menu-C0NbsoXQ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BCXD4NlX.js";import"./ButtonBase-DOyfrzp8.js";import"./Loader-Ydzop-h2.js";import"./Tooltip-DxT_jqx4.js";import"./index-C-LQJlmq.js";import"./Button-Lmaxfra2.js";import"./FocusScope-CYvM6z0l.js";import"./Text-CQdV_Tal.js";import"./usePress-CrkuXhfZ.js";import"./index-CfnB0Nij.js";import"./index-BnDj3lOR.js";import"./RSPContexts-TeruZA21.js";import"./Separator-BtrfYL-Y.js";import"./index-QxbnYTcs.js";import"./VisuallyHidden-BGpakkLr.js";import"./Check-By6hSInZ.js";import"./ChevronForward-BBeMVTjE.js";const N={component:f},x={items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{separator:!0},{id:"3",label:"Item 3",children:[{id:"3.1",label:"Item 3.1"},{id:"3.2",label:"Item 3.2"}]}]},r={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"}],children:e.jsx(B,{variant:"secondary",children:e.jsx(y,{})})}},n={args:{...x,children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},s={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",isDisabled:!0},{id:"3",label:"Item 3"}],children:e.jsx(a,{variant:"secondary",size:"sm",children:"Click here"})}},t={args:{...x,trigger:"longPress",children:e.jsx(a,{variant:"secondary",size:"sm",onPress:()=>alert("Try long press"),children:"Click here"})}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
