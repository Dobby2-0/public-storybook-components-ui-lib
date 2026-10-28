import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{d as t,l as n,n as r,u as i}from"./blocks-C-QfPCjL.js";import{t as a}from"./jsx-runtime-BB9-612F.js";import{i as o,r as s}from"./react-BaM0PKmA.js";import{n as c,r as l}from"./DobbyContextProvider.stories-BcQzRkQH.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{of:l}),`
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
`,(0,f.jsx)(i,{code:`
<DobbyContextProvider getContainer={() => document.getElementById(appId)} maxVisibleToasts={5}>
<AppComponent />
</DobbyContextProvider>;
`}),`
`,(0,f.jsx)(r,{of:l})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),t(),c()})))()}p();export{d as default};