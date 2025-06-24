import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as s,S as p,A as m}from"./index-CBYDKg5e.js";import r from"./DobbyContextProvider.stories-CgGQclCn.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-DvIVKEhc.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Toaster-DJJLAf23.js";import"./index-D8pzxCuu.js";import"./Alert-6sZAVJ3X.js";import"./CheckCircle-7pDPBrEl.js";import"./Close-Lw3CM0IZ.js";import"./Error-DDcq_WG-.js";import"./Info-DXk7w5MR.js";import"./index-D35RSF8M.js";import"./useTranslation-rxOr_aTQ.js";import"./DobbyContextProvider-Dq5lzxrp.js";import"./index.browser-OxPLOBIU.js";import"./PortalProvider-ChirZUt_.js";import"./openLink-Btrk4R3c.js";import"./platform-DO9ne4TU.js";function n(e){const t={a:"a",code:"code",h1:"h1",p:"p",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
`,o.jsx(t.h1,{id:"dobbycontextprovider",children:"DobbyContextProvider"}),`
`,o.jsx(t.p,{children:`This wrapper component will provide a context to any of its children, as well as properly configure any settings
required by underlying libraries.`}),`
`,o.jsxs(t.p,{children:["This wrapper also includes the ",o.jsx(t.code,{children:"ToastContext"})," and the ",o.jsx(t.code,{children:"Toaster"})," for displaying toast notifications."]}),`
`,o.jsxs(t.p,{children:["For more information on how to use the toast notifications, refer to the ",o.jsx(t.a,{href:"?path=/docs/hooks-usetoast--docs",children:"UseToast Documentation"}),"."]}),`
`,o.jsx(p,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
  <AppComponent />
</DobbyContextProvider>;
`}),`
`,o.jsx(m,{of:r})]})}function _(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{_ as default};
