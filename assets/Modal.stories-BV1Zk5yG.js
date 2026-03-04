import{j as e}from"./iframe-CR-DZe2S.js";import{B as n}from"./Button-BKtZAKip.js";import{M as h}from"./Modal-BhLNeZUO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-MogbmQpd.js";import"./ButtonBase-CKl0ILxM.js";import"./Loader-CHcImFvN.js";import"./Tooltip-BUPUSf_5.js";import"./index-DmhtxPl_.js";import"./Button-CS0fzLJn.js";import"./FocusScope-B98o_SCP.js";import"./Text-D1iKloKO.js";import"./usePress-DSqldAbN.js";import"./index-DRAkue47.js";import"./index-DE98puDd.js";import"./RSPContexts-BSiDlk35.js";import"./Separator-ET3Zna4S.js";import"./index-k97qKrQu.js";import"./VisuallyHidden-C2m0AmjI.js";import"./IconButton-CepDHBmU.js";const V={component:h,title:"Components/Modal/Modal",argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},t={args:{closeButton:!0,trigger:e.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>e.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[e.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),e.jsx(n,{children:"Save"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the modal content."}),e.jsx("span",{children:"More content..."})]})}},o={args:{...t.args,closeButton:!1}},r={args:{trigger:e.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
