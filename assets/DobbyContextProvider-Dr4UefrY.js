import{j as o}from"./iframe-BKjj90AX.js";import{useMDXComponents as s}from"./index-fK1bV3OM.js";import{M as i,S as a,A as c}from"./blocks-BNaR3whI.js";import n from"./DobbyContextProvider.stories-DuPQv2Si.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfC-8zwp.js";import"./index-CQqQvl1z.js";import"./index-D_aTrX6k.js";function r(t){const e={a:"a",code:"code",h1:"h1",p:"p",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:n}),`
`,o.jsx(e.h1,{id:"dobbycontextprovider",children:"DobbyContextProvider"}),`
`,o.jsx(e.p,{children:`This wrapper component will provide a context to any of its children, as well as properly configure any settings
required by underlying libraries.`}),`
`,o.jsxs(e.p,{children:["This wrapper also includes the ",o.jsx(e.code,{children:"ToastContext"})," and the ",o.jsx(e.code,{children:"Toaster"})," for displaying toast notifications."]}),`
`,o.jsxs(e.p,{children:["For more information on how to use the toast notifications, refer to the ",o.jsx(e.a,{href:"?path=/docs/hooks-usetoast--docs",children:"UseToast Documentation"}),"."]}),`
`,o.jsx(a,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
<AppComponent />
</DobbyContextProvider>;
`}),`
`,o.jsx(c,{of:n})]})}function j(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}export{j as default};
