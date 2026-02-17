import{j as e}from"./iframe-C8WqZKtX.js";import{B as n}from"./Button-XNcAICl1.js";import{b as h}from"./Modal-C3l18qjV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jtSVojHF.js";import"./ButtonBase-CHzHNBmp.js";import"./Loader-yHUC8L0D.js";import"./Tooltip-Cj2CoiKx.js";import"./index-lbB97veH.js";import"./Button-NHtOoMQI.js";import"./FocusScope-B02YIt_w.js";import"./Text-CP-wYi1U.js";import"./usePress-BMPY-rYn.js";import"./index-Bkmr4GuA.js";import"./index-CMotOyWi.js";import"./RSPContexts-Cq9bAEtH.js";import"./Separator-Ce1Am9rV.js";import"./index-C9ZTeJRU.js";import"./VisuallyHidden-BHi9umrS.js";import"./IconButton-Bx1OvcWF.js";const V={component:h,title:"Components/Modal/Modal",argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},t={args:{closeButton:!0,trigger:e.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>e.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[e.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),e.jsx(n,{children:"Save"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the modal content."}),e.jsx("span",{children:"More content..."})]})}},o={args:{...t.args,closeButton:!1}},r={args:{trigger:e.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    closeButton: true,
    trigger: <Button>Open Modal</Button>,
    title: "Sign up",
    footer: close => <div className="flex flex-row gap-2 justify-end">
        <Button onPress={close} variant="ghost">
          Cancel
        </Button>
        <Button>Save</Button>
      </div>,
    children: <>
        <p>This is the modal content.</p>
        <span>More content...</span>
      </>
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeButton: false
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Open sheet</Button>,
    children: "Sheet content",
    side: "left",
    closeButton: false
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Default","ModalNoCloseButton","Sheet"];export{t as Default,o as ModalNoCloseButton,r as Sheet,k as __namedExportsOrder,V as default};
