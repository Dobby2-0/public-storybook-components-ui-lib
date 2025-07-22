import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./Button-CtLes55E.js";import{M as h}from"./Modal-CQ0MpZkS.js";import"./index-yBjzXJbu.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-DbLmhAvH.js";import"./index-tvICUrOf.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-DeYdzgAr.js";import"./Loader-CAGfkTtI.js";import"./Tooltip-DXWmlJox.js";import"./index-BWuV-QZI.js";import"./Button-B1BXpP9X.js";import"./Separator-BO8zFYPj.js";import"./usePress-B4dvVj7D.js";import"./openLink-Btrk4R3c.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./FocusScope-CGnEyLYb.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-myWnj7Kp.js";import"./VisuallyHidden-BQsNp2BX.js";import"./PortalProvider-ChirZUt_.js";import"./IconButton-Bnz3ziVQ.js";import"./Close-Lw3CM0IZ.js";const I={component:h,title:"Components/Modal/Modal",argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},e={args:{closeButton:!0,trigger:t.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>t.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[t.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),t.jsx(n,{children:"Save"})]}),children:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is the modal content."}),t.jsx("span",{children:"More content..."})]})}},o={args:{...e.args,closeButton:!1}},r={args:{trigger:t.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeButton: false
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Open sheet</Button>,
    children: "Sheet content",
    side: "left",
    closeButton: false
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const J=["Default","ModalNoCloseButton","Sheet"];export{e as Default,o as ModalNoCloseButton,r as Sheet,J as __namedExportsOrder,I as default};
