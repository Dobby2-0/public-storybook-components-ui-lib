import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{C as n,d as r,l as i,n as a,u as o}from"./blocks-jje8DXgp.js";import{t as s}from"./mdx-react-shim-yxxCIQgh.js";import c,{t as l}from"./DobbyContextProvider.stories-EJ7Qobgr.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:c}),`
`,(0,f.jsx)(t.h1,{id:`dobbycontextprovider`,children:`DobbyContextProvider`}),`
`,(0,f.jsx)(t.p,{children:`This wrapper component will provide a context to any of its children, as well as properly configure any settings
required by underlying libraries.`}),`
`,(0,f.jsxs)(t.p,{children:[`This wrapper also includes the `,(0,f.jsx)(t.code,{children:`ToastContext`}),` and the `,(0,f.jsx)(t.code,{children:`Toaster`}),` for displaying toast notifications.`]}),`
`,(0,f.jsxs)(t.p,{children:[`For more information on how to use the toast notifications, refer to the `,(0,f.jsx)(t.a,{href:`?path=/docs/hooks-usetoast--docs`,children:`UseToast Documentation`}),`.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Every prop is optional. Any prop you omit (`,(0,f.jsx)(t.code,{children:`getContainer`}),`, `,(0,f.jsx)(t.code,{children:`navigate`}),`, `,(0,f.jsx)(t.code,{children:`i18nextInstance`}),`, `,(0,f.jsx)(t.code,{children:`maxVisibleToasts`}),`)
falls back to the value from the nearest ancestor `,(0,f.jsx)(t.code,{children:`DobbyContextProvider`}),`, if one is already mounted higher up
the tree, and only falls back to the built-in defaults when there's no ancestor at all. This lets a component
exported from a lib package nest its own `,(0,f.jsx)(t.code,{children:`DobbyContextProvider`}),` (e.g. to guarantee it works standalone) while
still inheriting the host application's `,(0,f.jsx)(t.code,{children:`getContainer`}),`/`,(0,f.jsx)(t.code,{children:`i18nextInstance`}),`/`,(0,f.jsx)(t.code,{children:`navigate`}),` when it's rendered inside
an app that already provides them.`]}),`
`,(0,f.jsx)(o,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
<AppComponent />
</DobbyContextProvider>;
`}),`
`,(0,f.jsx)(a,{of:c})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),r(),l()}))();export{d as default};