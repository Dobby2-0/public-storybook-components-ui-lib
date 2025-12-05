import{j as e}from"./iframe-AuHChfR8.js";import{B as n}from"./Button-DDZNJY-9.js";import{b as h}from"./Modal-CWRdL_i9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BabE-UFT.js";import"./ButtonBase-af4xbuQX.js";import"./Loader-AC6f68R3.js";import"./Tooltip-C7ILMvDf.js";import"./index-BzjgWfDE.js";import"./Button-B6MgONbo.js";import"./FocusScope-9az9tTJa.js";import"./Hidden-CLaRjale.js";import"./usePress-kTZ8LD1W.js";import"./index-CsgPiThP.js";import"./index-CCMtGYiC.js";import"./RSPContexts-DdS4iVL4.js";import"./Separator-Dsp-CNcm.js";import"./index-DjvNOQuR.js";import"./Text-mSFoEL7R.js";import"./VisuallyHidden-DDCKDU00.js";import"./IconButton-DTqXDDVb.js";const k={component:h,title:"Components/Modal/Modal",argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},t={args:{closeButton:!0,trigger:e.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>e.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[e.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),e.jsx(n,{children:"Save"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the modal content."}),e.jsx("span",{children:"More content..."})]})}},o={args:{...t.args,closeButton:!1}},r={args:{trigger:e.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
