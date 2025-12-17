import{j as e}from"./iframe-XN5PUdo-.js";import{useMDXComponents as r}from"./index-Cw7nQM1C.js";import{M as i,C as n,S as d}from"./blocks-5TIgkcDg.js";import c,{Default as h}from"./UseToast.stories-Bue9Jkiy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YTM8xuB5.js";import"./index-DguLE60C.js";import"./index-DBjqw2XV.js";import"./use-toast-DxWNlgQP.js";import"./Button-DWYSm-gN.js";import"./utils-Bzka9lbN.js";import"./ButtonBase-vWONjdp0.js";import"./Loader-BehVFnXx.js";import"./Tooltip-C2X8H7tG.js";import"./index-Cvpg_kN6.js";import"./Button-GWZf1c_M.js";import"./FocusScope-VZEF-ZvW.js";import"./Text-CpJlg3nO.js";import"./usePress-BjHcyIvs.js";import"./RSPContexts-BRB36KVP.js";import"./Separator-DGKtewIz.js";import"./VisuallyHidden-CzSagqXo.js";function s(o){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(t.h1,{id:"usetoast",children:"UseToast"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useToast"}),` hook provides an easy way to trigger a toast notification.
To use the `,e.jsx(t.code,{children:"useToast"}),", ensure that your application is wrapped in a ",e.jsx(t.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,e.jsxs(t.p,{children:["For implementation details, see the ",e.jsx(t.a,{href:"#code",children:"Code"})," section.",e.jsx(t.br,{}),`
`,"For available props, check the ",e.jsx(t.a,{href:"#properties",children:"Properties"})," section."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"code",children:"Code"}),`
`,e.jsx(d,{code:`
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
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.p,{children:["For additional properties, see the ",e.jsx(t.a,{href:"?path=/docs/components-alert--docs",children:"Alert documentation"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"title"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"The title of the toast notification."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"description"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"The message displayed inside the toast."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"duration"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(t.p,{children:["Time in milliseconds before the toast disappears. Defaults to"," ",`
`,e.jsx("code",{children:"5000"}),"."]})})]})]})]})]})}function S(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{S as default};
