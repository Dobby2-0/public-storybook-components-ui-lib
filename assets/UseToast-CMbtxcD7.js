import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{F as t,P as n,d as r,l as i,r as a,u as o}from"./blocks-Dq8_0-8l.js";import{t as s}from"./jsx-runtime-BB9-612F.js";import{i as c,r as l,t as u}from"./UseToast.stories-C1cptQPQ.js";function d(e){let n={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n.h1,{id:`usetoast`,children:`UseToast`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`useToast`}),` hook provides an easy way to trigger a toast notification.
To use the `,(0,p.jsx)(n.code,{children:`useToast`}),`, ensure that your application is wrapped in a `,(0,p.jsx)(n.a,{href:`?path=/docs/context-dobbycontextprovider--docs`,children:`DobbyContextProvider`}),`.`]}),`
`,(0,p.jsxs)(n.p,{children:[`For implementation details, see the `,(0,p.jsx)(n.a,{href:`#code`,children:`Code`}),` section.`,(0,p.jsx)(n.br,{}),`
`,`For available props, check the `,(0,p.jsx)(n.a,{href:`#properties`,children:`Properties`}),` section.`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(n.h2,{id:`code`,children:`Code`}),`
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
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsxs)(n.p,{children:[`For additional properties, see the `,(0,p.jsx)(n.a,{href:`?path=/docs/components-alert--docs`,children:`Alert documentation`}),`.`]}),`
`,(0,p.jsxs)(`table`,{children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{children:`Prop`}),(0,p.jsx)(`th`,{children:`Type`}),(0,p.jsx)(`th`,{children:`Description`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`title`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`string`})}),(0,p.jsx)(`td`,{children:`The title of the toast notification.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`description`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`string`})}),(0,p.jsx)(`td`,{children:`The message displayed inside the toast.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`duration`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`number`})}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(n.p,{children:[`Time in milliseconds before the toast disappears. Defaults to`,` `,`
`,(0,p.jsx)(`code`,{children:`5000`}),`.`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`inlineAction`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`ReactNode`})}),(0,p.jsx)(`td`,{children:`Shown between the title and close button.`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`action`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`ReactNode`})}),(0,p.jsx)(`td`,{children:`Shown below the description.`})]})]})]}),`
`,(0,p.jsxs)(n.p,{children:[`Toasts are `,(0,p.jsx)(n.code,{children:`300px`}),` wide by default; override with `,(0,p.jsx)(n.code,{children:`className`}),`.`]}),`
`,(0,p.jsxs)(n.p,{children:[`To close the toast from a custom action component, call `,(0,p.jsx)(n.code,{children:`useToastDismiss()`}),` inside it.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=s(),n(),r(),l()})))()}m();export{f as default};