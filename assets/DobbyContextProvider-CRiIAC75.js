import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{F as t,P as n,d as r,l as i,n as a,u as o}from"./blocks-Dq8_0-8l.js";import{t as s}from"./jsx-runtime-BB9-612F.js";import{n as c,r as l}from"./DobbyContextProvider.stories-DMqSk5fp.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,p:`p`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`dobbycontextprovider`,children:`DobbyContextProvider`}),`
`,(0,f.jsx)(n.p,{children:`This wrapper component will provide a context to any of its children, as well as properly configure any settings
required by underlying libraries.`}),`
`,(0,f.jsxs)(n.p,{children:[`This wrapper also includes the `,(0,f.jsx)(n.code,{children:`ToastContext`}),` and the `,(0,f.jsx)(n.code,{children:`Toaster`}),` for displaying toast notifications.`]}),`
`,(0,f.jsxs)(n.p,{children:[`For more information on how to use the toast notifications, refer to the `,(0,f.jsx)(n.a,{href:`?path=/docs/hooks-usetoast--docs`,children:`UseToast Documentation`}),`.`]}),`
`,(0,f.jsxs)(n.p,{children:[`Every prop is optional. Any prop you omit (`,(0,f.jsx)(n.code,{children:`getContainer`}),`, `,(0,f.jsx)(n.code,{children:`navigate`}),`, `,(0,f.jsx)(n.code,{children:`i18nextInstance`}),`, `,(0,f.jsx)(n.code,{children:`maxVisibleToasts`}),`)
falls back to the value from the nearest ancestor `,(0,f.jsx)(n.code,{children:`DobbyContextProvider`}),`, if one is already mounted higher up
the tree, and only falls back to the built-in defaults when there's no ancestor at all. This lets a component
exported from a lib package nest its own `,(0,f.jsx)(n.code,{children:`DobbyContextProvider`}),` (e.g. to guarantee it works standalone) while
still inheriting the host application's `,(0,f.jsx)(n.code,{children:`getContainer`}),`/`,(0,f.jsx)(n.code,{children:`i18nextInstance`}),`/`,(0,f.jsx)(n.code,{children:`navigate`}),` when it's rendered inside
an app that already provides them.`]}),`
`,(0,f.jsx)(o,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
<AppComponent />
</DobbyContextProvider>;
`}),`
`,(0,f.jsx)(a,{of:l})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=s(),n(),r(),c()})))()}p();export{d as default};