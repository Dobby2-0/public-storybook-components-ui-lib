import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{C as n,d as r,l as i,r as a,u as o}from"./blocks-Dcp55I_8.js";import{t as s}from"./mdx-react-shim-BDAsYIUA.js";import c,{Default as l,t as u}from"./UseToast.stories-C7lzF2oD.js";function d(e){let t={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`usetoast`,children:`UseToast`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`useToast`}),` hook provides an easy way to trigger a toast notification.
To use the `,(0,p.jsx)(t.code,{children:`useToast`}),`, ensure that your application is wrapped in a `,(0,p.jsx)(t.a,{href:`?path=/docs/context-dobbycontextprovider--docs`,children:`DobbyContextProvider`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`For implementation details, see the `,(0,p.jsx)(t.a,{href:`#code`,children:`Code`}),` section.`,(0,p.jsx)(t.br,{}),`
`,`For available props, check the `,(0,p.jsx)(t.a,{href:`#properties`,children:`Properties`}),` section.`]}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(t.h2,{id:`code`,children:`Code`}),`
`,(0,p.jsx)(o,{code:`
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
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsxs)(t.p,{children:[`For additional properties, see the `,(0,p.jsx)(t.a,{href:`?path=/docs/components-alert--docs`,children:`Alert documentation`}),`.`]}),`
`,(0,p.jsxs)(`table`,{children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{children:`Prop`}),(0,p.jsx)(`th`,{children:`Type`}),(0,p.jsx)(`th`,{children:`Description`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`title`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`string`})}),(0,p.jsx)(`td`,{children:`The title of the toast notification.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`description`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`string`})}),(0,p.jsx)(`td`,{children:`The message displayed inside the toast.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`duration`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`number`})}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`Time in milliseconds before the toast disappears. Defaults to`,` `,`
`,(0,p.jsx)(`code`,{children:`5000`}),`.`]})})]})]})]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),u()}))();export{f as default};