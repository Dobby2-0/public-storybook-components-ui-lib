import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{C as n,d as r,l as i}from"./blocks-BQ-J5G6i.js";import{t as a}from"./mdx-react-shim-C8Di9sGM.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Hooks/useDobbyContext`}),`
`,(0,c.jsx)(t.h1,{id:`usedobbycontext`,children:`useDobbyContext`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useDobbyContext`}),` hook provides access to global functionalities, such as managing navigation and container elements.`]}),`
`,(0,c.jsxs)(t.p,{children:[`To use `,(0,c.jsx)(t.code,{children:`useDobbyContext`}),`, ensure your application is wrapped in a `,(0,c.jsx)(t.a,{href:`?path=/docs/context-dobbycontextprovider--docs`,children:`DobbyContextProvider`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useDobbyContext } from "@/hooks/useDobbyContext";

const MyComponent = () => {
  const { navigate } = useDobbyContext();

  return (
    <div>
      <button onClick={() => navigate("/home")}>
        Go to Home
      </button>
    </div>
  );
};
`})}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Prop`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`getContainer`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`() => HTMLElement | null`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(t.p,{children:`Returns the container element where dynamic components (e.g., modals)
should be rendered.`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`navigate`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:(0,c.jsx)(t.p,{children:`(to: string | number, options?: { state?: unknown,
fromRoot?: boolean }) => void`})})}),(0,c.jsx)(`td`,{children:`Handles internal navigation within the application.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`i18nextInstance`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`typeof i18next | undefined`})}),(0,c.jsx)(`td`,{children:`The i18next instance used for translations.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`maxVisibleToasts`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(t.p,{children:`The maximum number of toasts that can be displayed at the same time.`})})]})]})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};