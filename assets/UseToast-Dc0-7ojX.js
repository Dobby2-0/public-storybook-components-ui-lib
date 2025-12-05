import{j as e}from"./iframe-AuHChfR8.js";import{useMDXComponents as r}from"./index-DmAej4yN.js";import{M as i,C as n,S as d}from"./blocks-DaytiuoG.js";import c,{Default as h}from"./UseToast.stories-ChX9FPtI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsgPiThP.js";import"./index-CCMtGYiC.js";import"./index-DjvNOQuR.js";import"./use-toast-BPUe5Io0.js";import"./Button-DDZNJY-9.js";import"./utils-BabE-UFT.js";import"./ButtonBase-af4xbuQX.js";import"./Loader-AC6f68R3.js";import"./Tooltip-C7ILMvDf.js";import"./index-BzjgWfDE.js";import"./Button-B6MgONbo.js";import"./FocusScope-9az9tTJa.js";import"./Hidden-CLaRjale.js";import"./usePress-kTZ8LD1W.js";import"./RSPContexts-DdS4iVL4.js";import"./Separator-Dsp-CNcm.js";import"./Text-mSFoEL7R.js";import"./VisuallyHidden-DDCKDU00.js";function s(o){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
`,e.jsx("code",{children:"5000"}),"."]})})]})]})]})]})}function _(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{_ as default};
