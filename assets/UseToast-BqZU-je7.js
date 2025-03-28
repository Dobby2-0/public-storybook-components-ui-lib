import{j as t}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as i}from"./index-uDG1oqxT.js";import{M as s,C as n,S as d}from"./index-CKxl77kY.js";import c,{Default as h}from"./UseToast.stories-BF2VqJSm.js";import"./index-YTOF1_EJ.js";import"./iframe-BG5Fp5qZ.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Toaster-CqbWsPa5.js";import"./index-DzfFlqCY.js";import"./Alert-FhG3H6S_.js";import"./CheckCircle-BbpI1E_x.js";import"./Close-CqA61BEN.js";import"./Error-LHnIo6fp.js";import"./Info-Cvx1OggM.js";import"./index-UoR2Am_h.js";import"./useTranslation-Dw3DpAYw.js";import"./Button-C1mPaZVH.js";import"./useFocusRing-BCcVRV1W.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-CTv9jQjL.js";import"./Loader-xB9gCnz2.js";import"./Button-aud4VQvi.js";import"./Hidden-D3qdwGc7.js";import"./useFocusable-CYgatKa4.js";import"./usePress-Qy4Tuk_n.js";import"./openLink-8mltwmIb.js";function r(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
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
`,t.jsx("code",{children:"5000"}),"."]})})]})]})]})]})}function q(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{q as default};
