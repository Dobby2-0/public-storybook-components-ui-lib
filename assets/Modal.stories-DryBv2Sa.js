import{j as t}from"./jsx-runtime-F1iDwNaf.js";import{B as n}from"./Button-BhVqPXqn.js";import{M as h}from"./Modal-BwUQcyqM.js";import"./index-YTOF1_EJ.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-oRcX7meB.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-BTFjV_4Z.js";import"./Loader-Baa5_8E0.js";import"./Button-Cw0J1ZsA.js";import"./Hidden-D7ttFcTv.js";import"./usePress-DLzaRTNK.js";import"./openLink-DdIfhzZQ.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./IconButton-DMJWK5dW.js";import"./Close-CqA61BEN.js";import"./Dialog-BhOZYiej.js";import"./RSPContexts-D68aBqj8.js";import"./Header-Cv_Why1g.js";import"./useDescription-D9n-bgck.js";import"./FocusScope-Ckyja6SP.js";import"./context-C679USxU.js";import"./useControlledState-DSc3NtNd.js";import"./Separator-D4ZJ3bCE.js";import"./Text-CcVvtRkI.js";import"./PressResponder-1Ab0Ccdw.js";import"./ariaHideOutside-B1lZiDRj.js";import"./PortalProvider-BV92Uc6C.js";import"./getScrollParent-7nX62dkR.js";import"./useLabels-CMjnz4Yz.js";import"./VisuallyHidden-CdGMfvlm.js";const W={component:h,argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},e={args:{closeButton:!0,trigger:t.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>t.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[t.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),t.jsx(n,{children:"Save"})]}),children:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is the modal content."}),t.jsx("span",{children:"More content..."})]})}},o={args:{...e.args,closeButton:!1}},r={args:{trigger:t.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
