import{j as o}from"./iframe-CH7h3U8V.js";import{useMDXComponents as s}from"./index-IjEmag0X.js";import{M as i,S as a,A as c}from"./blocks-B_lDvC4F.js";import n from"./DobbyContextProvider.stories-Br4585gA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J4h-2R7O.js";import"./index-BckUZTgf.js";import"./index-D4A8TaiF.js";function r(t){const e={a:"a",code:"code",h1:"h1",p:"p",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:n}),`
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
