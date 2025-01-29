import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as n}from"./index-ChEI-nsM.js";import{ae as r,af as i}from"./index-CxthuYnO.js";import"./index-DRjF_FHU.js";import"./iframe-RU3XTKHW.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";function s(e){const o={a:"a",code:"code",h1:"h1",p:"p",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Hooks/useToast"}),`
`,t.jsx(o.h1,{id:"usetoast",children:"UseToast"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useToast"}),` hook provides an easy way to trigger a toast notification.
To use the `,t.jsx(o.code,{children:"useToast"}),", ensure that your application is wrapped in a ",t.jsx(o.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,t.jsx(i,{code:`
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
`})]})}function T(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{T as default};
