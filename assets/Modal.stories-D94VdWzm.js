import{j as t}from"./jsx-runtime-F1iDwNaf.js";import{B as n}from"./Button-DaRLznJS.js";import{M as h}from"./Modal-BiC1JOM3.js";import"./index-YTOF1_EJ.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-BhqMP7Wf.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-D7wFhVPI.js";import"./Loader-xB9gCnz2.js";import"./Button-BdmBsY1d.js";import"./Hidden-D7ttFcTv.js";import"./usePress-BUSFzwYD.js";import"./openLink-DdIfhzZQ.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./IconButton-CDSJGyOm.js";import"./Close-CqA61BEN.js";import"./Dialog-ok1EYznv.js";import"./RSPContexts-D68aBqj8.js";import"./Header-DYgvXHaf.js";import"./useDescription-DzZWTAGl.js";import"./FocusScope-BZe3pABC.js";import"./context-HK5jm6EM.js";import"./useControlledState-DSc3NtNd.js";import"./Separator-VQwpI8cE.js";import"./Text-SKeF9n-L.js";import"./PressResponder-DU6eNYGA.js";import"./ariaHideOutside-Dy5gdQvH.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-C7zgn3BX.js";import"./useLabels-Cu4YAmyo.js";import"./VisuallyHidden-dgF7iibt.js";const W={component:h,argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},e={args:{closeButton:!0,trigger:t.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>t.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[t.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),t.jsx(n,{children:"Save"})]}),children:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is the modal content."}),t.jsx("span",{children:"More content..."})]})}},o={args:{...e.args,closeButton:!1}},r={args:{trigger:t.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,m,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeButton: false
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Open sheet</Button>,
    children: "Sheet content",
    side: "left",
    closeButton: false
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const X=["Default","ModalNoCloseButton","Sheet"];export{e as Default,o as ModalNoCloseButton,r as Sheet,X as __namedExportsOrder,W as default};
