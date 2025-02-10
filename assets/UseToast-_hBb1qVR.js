import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as i}from"./index-ChEI-nsM.js";import{ae as s,ah as n,af as d}from"./index-DZCrlMFv.js";import c,{Default as h}from"./UseToast.stories-psQRltca.js";import"./index-DRjF_FHU.js";import"./iframe-DrUTyM8h.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-D-8MO0q_.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";import"./index-DlSQN3eM.js";import"./Button-DG5Cea6y.js";import"./index-By-mRCMU.js";import"./index-wL3GxAOQ.js";import"./useFocusRing-BWUU1kMe.js";import"./platform-SeyP_Zfo.js";import"./ButtonBase-CBytew2m.js";import"./Loader-Cgl1KvpE.js";import"./Button-BmI6QyOV.js";import"./Hidden-3y5knXN0.js";import"./useFocusable-C701Y3LS.js";import"./usePress-8Gc9NV6T.js";import"./openLink--SV7cA94.js";import"./Toaster-BQ41vSIc.js";import"./Alert-Dpd35Ztu.js";import"./CheckCircle-Ciw2kuSm.js";import"./Close-a0dMVUhZ.js";import"./Error-BKB7cmKQ.js";import"./Info-CwC22AGT.js";import"./useTranslation-BZwSnrkG.js";function r(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(e.h1,{id:"usetoast",children:"UseToast"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useToast"}),` hook provides an easy way to trigger a toast notification.
To use the `,t.jsx(e.code,{children:"useToast"}),", ensure that your application is wrapped in a ",t.jsx(e.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,t.jsxs(e.p,{children:["For implementation details, see the ",t.jsx(e.a,{href:"#code",children:"Code"})," section.",t.jsx(e.br,{}),`
`,"For available props, check the ",t.jsx(e.a,{href:"#properties",children:"Properties"})," section."]}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h2,{id:"code",children:"Code"}),`
`,t.jsx(d,{code:`
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
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsxs(e.p,{children:["For additional properties, see the ",t.jsx(e.a,{href:"?path=/docs/components-alert--docs",children:"Alert documentation"}),"."]}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Prop"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"title"})}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"The title of the toast notification."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"description"})}),t.jsx("td",{children:t.jsx("code",{children:"string"})}),t.jsx("td",{children:"The message displayed inside the toast."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"duration"})}),t.jsx("td",{children:t.jsx("code",{children:"number"})}),t.jsx("td",{children:t.jsxs(e.p,{children:["Time in milliseconds before the toast disappears. Defaults to"," ",`
`,t.jsx("code",{children:"5000"}),"."]})})]})]})]})]})}function G(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{G as default};
