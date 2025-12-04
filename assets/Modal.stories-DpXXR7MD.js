import{j as e}from"./iframe-DP3-CQDs.js";import{B as n}from"./Button-CD3kBsXW.js";import{b as h}from"./Modal-D8kXei47.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CTHKUqKf.js";import"./ButtonBase-YXA85uzR.js";import"./Loader-b3vFoKaK.js";import"./Tooltip-C1_nDIPG.js";import"./index-DZ8PC-Vn.js";import"./Button-DjNH72gK.js";import"./FocusScope-DeaR1QOB.js";import"./Hidden-C0lX4Jn3.js";import"./usePress-BS2ZG6Qh.js";import"./index-q5ymUpaM.js";import"./index-C7NeUuQO.js";import"./RSPContexts-DL4g-k_R.js";import"./Separator-BMUj42YL.js";import"./index-C_LC-Clp.js";import"./Text-DRH279PT.js";import"./VisuallyHidden-TKVO3wAR.js";import"./IconButton-C2-rOCo0.js";const k={component:h,title:"Components/Modal/Modal",argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},t={args:{closeButton:!0,trigger:e.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>e.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[e.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),e.jsx(n,{children:"Save"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the modal content."}),e.jsx("span",{children:"More content..."})]})}},o={args:{...t.args,closeButton:!1}},r={args:{trigger:e.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const q=["Default","ModalNoCloseButton","Sheet"];export{t as Default,o as ModalNoCloseButton,r as Sheet,q as __namedExportsOrder,k as default};
