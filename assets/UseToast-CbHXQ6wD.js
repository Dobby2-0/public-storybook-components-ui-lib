import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as s,C as n,S as d}from"./index-B-BYLdRr.js";import c,{Default as p}from"./UseToast.stories-DkbbMTCM.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-BxtptGS3.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Toaster-DJJLAf23.js";import"./index-D8pzxCuu.js";import"./Alert-6sZAVJ3X.js";import"./CheckCircle-7pDPBrEl.js";import"./Close-Lw3CM0IZ.js";import"./Error-DDcq_WG-.js";import"./Info-DXk7w5MR.js";import"./index-D35RSF8M.js";import"./useTranslation-rxOr_aTQ.js";import"./Button-BJOneuJj.js";import"./useFocusRing-BbqFvpEd.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-CSpIQSJ6.js";import"./Loader-BsPrQ8_e.js";import"./Tooltip-Bir8do5z.js";import"./index-CYmLEje9.js";import"./Button-B72osXTA.js";import"./Separator-F-TqXpng.js";import"./usePress-BklFyQpc.js";import"./openLink-Btrk4R3c.js";import"./FocusScope-DTcBUnqK.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-B6XONKPt.js";import"./VisuallyHidden-C1QUg0KJ.js";import"./PortalProvider-ChirZUt_.js";function r(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(e.h1,{id:"usetoast",children:"UseToast"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useToast"}),` hook provides an easy way to trigger a toast notification.
To use the `,t.jsx(e.code,{children:"useToast"}),", ensure that your application is wrapped in a ",t.jsx(e.a,{href:"?path=/docs/context-dobbycontextprovider--docs",children:"DobbyContextProvider"}),"."]}),`
`,t.jsxs(e.p,{children:["For implementation details, see the ",t.jsx(e.a,{href:"#code",children:"Code"})," section.",t.jsx(e.br,{}),`
`,"For available props, check the ",t.jsx(e.a,{href:"#properties",children:"Properties"})," section."]}),`
`,t.jsx(n,{of:p}),`
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
`,t.jsx("code",{children:"5000"}),"."]})})]})]})]})]})}function O(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{O as default};
