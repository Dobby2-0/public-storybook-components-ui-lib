import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{C as n,d as r,l as i,r as a}from"./blocks-Fo0HUEve.js";import{t as o}from"./mdx-react-shim-CK241gAT.js";import{Default as s,n as c,t as l}from"./Form.stories-BEWHiIJf.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`form`,children:`Form`}),`
`,(0,f.jsxs)(t.p,{children:[`The Form component provides a wrapper around ShadCN's `,(0,f.jsx)(t.code,{children:`react-hook-form`}),` component.`]}),`
`,(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`validation`,children:`Validation`}),`
`,(0,f.jsxs)(t.p,{children:[`To handle validation, create a `,(0,f.jsx)(t.code,{children:`zod`}),` schema to pass to the component.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{children:`import {z} from "zod";

const formSchema = z.object({
  text: z.string().min(2, {
    message: "Text must be at least 2 characters long",
  }),
  number: z.coerce.number({
    required_error: "Number is required",
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
`,(0,f.jsx)(t.h2,{id:`submit-and-validation-error-handling`,children:`Submit and validation error handling`}),`
`,(0,f.jsxs)(t.p,{children:[`This component wraps the default `,(0,f.jsx)(t.code,{children:`react-hook-form`}),` submit props.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{children:`import {FieldErrors} from "react-hook-form";

const onSubmit = (values: FormSchema) => {
  console.log(values);
};

const onError = (errors: FieldErrors<FormSchema>) => {
  console.error("form errors!", errors);
};

<Form onSubmit={onSubmit} onError={onError} />
`})}),`
`,(0,f.jsx)(t.h2,{id:`external-submit`,children:`External submit`}),`
`,(0,f.jsx)(t.p,{children:`To submit the form without pressing the submit button, you can add a ref and call submit that way.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{children:`const formRef = useFormRef();

<Form ref={formRef} {...props}/>;

formRef.current?.submit();
`})})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),o(),r(),c()}))();export{d as default};