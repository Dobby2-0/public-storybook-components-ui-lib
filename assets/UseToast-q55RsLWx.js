import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as n}from"./index-ChEI-nsM.js";import{ae as i,af as r}from"./index-BxeQlUKS.js";import"./index-DRjF_FHU.js";import"./iframe-sXd9BCE3.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";function o(s){const e={a:"a",code:"code",h1:"h1",p:"p",...n(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
`,t.jsx(e.h1,{id:"usetoast",children:"UseToast"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useToast"}),` hook provides an easy way to trigger a toast notification.
To use the `,t.jsx(e.code,{children:"useToast"}),", ensure that your application is wrapped in a ",t.jsx(e.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,t.jsx(r,{code:`
  const ToastComponent = () =>{
    const toast = useToast();

    return (

      <Button
        onPress={() =>
          toast({
            title: "Title",
            description: "This is a test toast notification!",
            duration,
          })
        }>
        <p>Toast</p>
      </Button>
    )

}
`}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"title"})}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"The title of the toast notification."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"description"})}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"The message displayed inside the toast."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"duration"})}),t.jsx("td",{children:t.jsx("code",{children:"number"})}),t.jsx("td",{children:t.jsxs(e.p,{children:["Time in milliseconds before the toast disappears. Defaults to"," ",`
`,t.jsx("code",{children:"5000"}),"."]})})]})]})]}),`
`,t.jsxs(e.p,{children:["For additional properties, see the ",t.jsx(e.a,{href:"?path=/docs/components-alert--docs",children:`Alert
documentation`}),"."]})]})}function f(s={}){const{wrapper:e}={...n(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(o,{...s})}):o(s)}export{f as default};
