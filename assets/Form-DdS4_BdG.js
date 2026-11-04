import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{F as t,P as n,d as r,l as i,r as a}from"./blocks-Dq8_0-8l.js";import{t as o}from"./jsx-runtime-BB9-612F.js";import{n as s,r as c,t as l}from"./Form.stories-BAMWQ7Il.js";function u(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(n.h1,{id:`form`,children:`Form`}),`
`,(0,f.jsxs)(n.p,{children:[`The Form component provides a wrapper around ShadCN's `,(0,f.jsx)(n.code,{children:`react-hook-form`}),` component.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,f.jsxs)(n.p,{children:[`To handle validation, create a `,(0,f.jsx)(n.code,{children:`zod`}),` schema to pass to the component.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{children:`import {z} from "zod";

const formSchema = z.object({
  text: z.string().min(2, {
    message: "Text must be at least 2 characters long",
  }),
  number: z.coerce.number<number>({
    error: "Number is required",
  }),
  checkbox: z.boolean(),
  select: z
    .object({id: z.string(), label: z.string(), value: z.string()})
    .optional(),
  combobox: z
    .object({id: z.string(), label: z.string(), value: z.string()})
    .optional(),
  radiogroup: z.string().optional(),
});
type FormSchema = z.infer<typeof formSchema>;
`})}),`
`,(0,f.jsx)(n.h2,{id:`submit-and-validation-error-handling`,children:`Submit and validation error handling`}),`
`,(0,f.jsxs)(n.p,{children:[`This component wraps the default `,(0,f.jsx)(n.code,{children:`react-hook-form`}),` submit props.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{children:`import {FieldErrors} from "react-hook-form";

const onSubmit = (values: FormSchema) => {
  console.log(values);
};

const onError = (errors: FieldErrors<FormSchema>) => {
  console.error("form errors!", errors);
};

<Form onSubmit={onSubmit} onError={onError} />
`})}),`
`,(0,f.jsx)(n.h2,{id:`external-submit`,children:`External submit`}),`
`,(0,f.jsx)(n.p,{children:`To submit the form without pressing the submit button, you can add a ref and call submit that way.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{children:`const formRef = useFormRef();

<Form ref={formRef} {...props}/>;

formRef.current?.submit();
`})})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=o(),n(),r(),c()})))()}p();export{d as default};