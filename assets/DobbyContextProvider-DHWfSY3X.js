import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as i}from"./index-ChEI-nsM.js";import{ae as s,af as p,ag as a}from"./index-Db8zQ-Tw.js";import r from"./DobbyContextProvider.stories-lQo3thqj.js";import"./index-DRjF_FHU.js";import"./iframe-CqKO9ova.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";import"./index-DlSQN3eM.js";import"./DobbyContextProvider-DuueyHcu.js";import"./PortalProvider-DG1WN5c3.js";import"./index-By-mRCMU.js";import"./Alert-DH-nntUY.js";import"./Error-BdxeAqUo.js";import"./Close-a0dMVUhZ.js";import"./Info-CwC22AGT.js";import"./index-wL3GxAOQ.js";import"./useTranslation-BZwSnrkG.js";import"./openLink--SV7cA94.js";import"./platform-SeyP_Zfo.js";function n(e){const t={a:"a",code:"code",h1:"h1",p:"p",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
`,o.jsx(t.h1,{id:"dobbycontextprovider",children:"DobbyContextProvider"}),`
`,o.jsx(t.p,{children:`This wrapper component will provide a context to any of its children, as well as properly configure any settings
required by underlying libraries.`}),`
`,o.jsxs(t.p,{children:["This wrapper also includes the ",o.jsx(t.code,{children:"ToastContext"})," and the ",o.jsx(t.code,{children:"Toaster"})," for displaying toast notifications."]}),`
`,o.jsxs(t.p,{children:["For more information on how to use the toast notifications, refer to the ",o.jsx(t.a,{href:"?path=/docs/components-toast-toaster--docs",children:"Toaster Documentation"}),"."]}),`
`,o.jsx(p,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
  <AppComponent />
</DobbyContextProvider>;
`}),`
`,o.jsx(a,{of:r})]})}function I(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{I as default};
