import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./Button-oiBUavEL.js";import{M as h}from"./Modal-C5xPQJez.js";import"./index-yBjzXJbu.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-De8_vWxE.js";import"./index-tvICUrOf.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-C8S7Km8K.js";import"./Loader-BsPrQ8_e.js";import"./Button-Y1RDwf3W.js";import"./Hidden-975QGLs-.js";import"./usePress-jyRSkEHC.js";import"./openLink-Btrk4R3c.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./IconButton-CzZOSCgO.js";import"./Close-CQRyCptx.js";import"./Dialog-DLrl2gv5.js";import"./RSPContexts-B1Ggupi0.js";import"./Header-Bo31PJBK.js";import"./useDescription-CWQxiRdu.js";import"./FocusScope-C8WcBnFj.js";import"./context-BxCG6Cz5.js";import"./useControlledState-BZ6ANBWa.js";import"./Separator-DLggkP8A.js";import"./Text-DNKYJkYf.js";import"./PressResponder-CAmm6Bbq.js";import"./ariaHideOutside-Doz9nu2Q.js";import"./PortalProvider-ChirZUt_.js";import"./getScrollParent-C57vhpqh.js";import"./useLabels-B52qJwmh.js";import"./VisuallyHidden-Cn6kit17.js";const X={component:h,argTypes:{closeButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}}},e={args:{closeButton:!0,trigger:t.jsx(n,{children:"Open Modal"}),title:"Sign up",footer:g=>t.jsxs("div",{className:"flex flex-row gap-2 justify-end",children:[t.jsx(n,{onPress:g,variant:"ghost",children:"Cancel"}),t.jsx(n,{children:"Save"})]}),children:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is the modal content."}),t.jsx("span",{children:"More content..."})]})}},o={args:{...e.args,closeButton:!1}},r={args:{trigger:t.jsx(n,{children:"Open sheet"}),children:"Sheet content",side:"left",closeButton:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Default","ModalNoCloseButton","Sheet"];export{e as Default,o as ModalNoCloseButton,r as Sheet,Y as __namedExportsOrder,X as default};
