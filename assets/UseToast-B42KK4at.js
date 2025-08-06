import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as s,C as n,S as d}from"./index-CRZiPky1.js";import c,{Default as p}from"./UseToast.stories-BcTG-Ktt.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-DV-3Fca9.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Toaster-BhWq09eV.js";import"./index-DzfFlqCY.js";import"./Alert--ThDSCoL.js";import"./CheckCircle-7pDPBrEl.js";import"./Close-Lw3CM0IZ.js";import"./Error-DDcq_WG-.js";import"./Info-DXk7w5MR.js";import"./index-UoR2Am_h.js";import"./useTranslation-rxOr_aTQ.js";import"./Button-DXY4xab4.js";import"./useFocusRing-DbLmhAvH.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-C1UB-DDY.js";import"./Loader-CAGfkTtI.js";import"./Tooltip-9fqTy1nm.js";import"./index-BxKNgHk_.js";import"./Button-B1BXpP9X.js";import"./Separator-BO8zFYPj.js";import"./usePress-B4dvVj7D.js";import"./openLink-Btrk4R3c.js";import"./FocusScope-CGnEyLYb.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-myWnj7Kp.js";import"./VisuallyHidden-BQsNp2BX.js";import"./PortalProvider-ChirZUt_.js";function r(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
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
