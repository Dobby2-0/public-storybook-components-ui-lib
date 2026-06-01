import{j as e}from"./iframe-C_WUs4XI.js";import{useMDXComponents as r}from"./index-TxdMIpkk.js";import{M as i,C as n,S as d}from"./blocks-DcJENrsk.js";import c,{Default as h}from"./UseToast.stories-BsLmb-Yc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dqibsvss.js";import"./index-D36SMXzg.js";import"./index-bjnEn6Lg.js";import"./use-toast-NK75pN-d.js";import"./Button-DQZL8AGL.js";import"./useHover-B15IukXm.js";import"./ButtonBase-BnX1gMeh.js";import"./Loader-QA6ZLMQ1.js";import"./Tooltip-CcVVrW2g.js";import"./index-CTQmbPKJ.js";import"./Button-BjoSaiQy.js";import"./SelectionIndicator-BWNSr69i.js";import"./usePress-D35Eo-OG.js";import"./Text-uCzjv4Fa.js";import"./useCollection-CBCohlHa.js";import"./VisuallyHidden-CfBYuoy7.js";import"./Autocomplete-751aq7P5.js";function s(o){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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
