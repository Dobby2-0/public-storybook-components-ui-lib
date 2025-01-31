import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as s}from"./index-ChEI-nsM.js";import{ae as i,af as r}from"./index-DzDNvG58.js";import"./index-DRjF_FHU.js";import"./iframe-DcYghyRk.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useDobbyContext"}),`
`,e.jsx(n.h1,{id:"usedobbycontext",children:"useDobbyContext"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useDobbyContext"})," hook provides access to global functionalities, such as managing breakpoints, navigation, and container elements."]}),`
`,e.jsxs(n.p,{children:["To use ",e.jsx(n.code,{children:"useDobbyContext"}),", ensure your application is wrapped in a ",e.jsx(n.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r,{code:`
  import { useDobbyContext } from "@/hooks/useDobbyContext";

const MyComponent = () => {
const { navigate, breakpoints } = useDobbyContext();

    return (
      <div>
        <p>Small breakpoint: {breakpoints.sm}px</p>
        <button onClick={() => navigate('/home')}>
          Go to Home
        </button>
      </div>
    );

};
`}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getContainer"})}),e.jsx("td",{children:e.jsx("code",{children:"() => HTMLElement | null"})}),e.jsx("td",{children:"Returns the container element where dynamic components (e.g., modals) should be rendered."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"breakpoints"})}),e.jsx("td",{children:e.jsx("code",{children:'sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 '})}),e.jsx("td",{children:"Defines the application's breakpoint sizes."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"navigate"})}),e.jsx("td",{children:e.jsx("code",{children:"(to: string | number, options?: { state?: unknown, fromRoot?: boolean }) => void"})}),e.jsx("td",{children:"Handles internal navigation within the application."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"i18nextInstance"})}),e.jsx("td",{children:e.jsx("code",{children:"typeof i18next | undefined"})}),e.jsx("td",{children:"The i18next instance used for translations."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxVisibleToasts"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"The maximum number of toasts that can be displayed at the same time."})]})]})]})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
