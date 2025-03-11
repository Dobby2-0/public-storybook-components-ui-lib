import{j as o}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as i}from"./index-uDG1oqxT.js";import{M as s,S as p,A as m}from"./index-DsYyw2YD.js";import r from"./DobbyContextProvider.stories-Wfq0mi-o.js";import"./index-YTOF1_EJ.js";import"./iframe-CmXkjVN_.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Toaster-BNzGSnq4.js";import"./index-D8pzxCuu.js";import"./Alert-C7hC402a.js";import"./CheckCircle-BbpI1E_x.js";import"./Close-CqA61BEN.js";import"./Error-LHnIo6fp.js";import"./Info-Cvx1OggM.js";import"./index-D35RSF8M.js";import"./useTranslation-Dw3DpAYw.js";import"./DobbyContextProvider-CdhXQNH2.js";import"./index.browser-OxPLOBIU.js";import"./PortalProvider-D04PMIEq.js";import"./openLink-8mltwmIb.js";import"./platform-DO9ne4TU.js";function n(e){const t={a:"a",code:"code",h1:"h1",p:"p",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(m,{of:r})]})}function S(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{S as default};
