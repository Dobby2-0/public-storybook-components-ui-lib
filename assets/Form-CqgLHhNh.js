import{j as r}from"./iframe-B7A3uWXD.js";import{useMDXComponents as i}from"./index--2vZuxxA.js";import{M as e,C as m}from"./blocks-CvFBHpRY.js";import{F as p,D as s}from"./Form.stories-BKMROiLC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ByFicOe9.js";import"./index-CQj9uTov.js";import"./Button-CGazZmtI.js";import"./utils-BhB1vUAY.js";import"./ButtonBase-D4JIbC3_.js";import"./Loader-BNjWdkiN.js";import"./Tooltip-Dl1AlT9C.js";import"./index-BVXSKwSp.js";import"./Button-Ddnhx0Dq.js";import"./FocusScope-BfktBpW9.js";import"./Hidden-BIxhquhB.js";import"./usePress-qXqVJXAB.js";import"./RSPContexts-DB-WFGul.js";import"./Separator-FiJ-Nr5z.js";import"./Text-Bb6oC_Oz.js";import"./VisuallyHidden-BZgWaQDO.js";import"./Checkbox-5BHcG9SI.js";import"./Check-BS1OqOhH.js";import"./CheckIndeterminateSmall-BaE42qZa.js";import"./Form-sFoHNIZA.js";import"./useToggleState-D5oft0FM.js";import"./useFormReset-DpaQd1CF.js";import"./ComboBox-C3oyj4Z7.js";import"./ListBox-C-zKcvJz.js";import"./ListBox-DXn97KTk.js";import"./DragAndDrop-DZYsNf67.js";import"./useLabel-CMYTplYs.js";import"./Pill-C2Xld4nc.js";import"./Input-DNDBYGLw.js";import"./SelectBase-B0e74SU5.js";import"./Label-D6G7XIQG.js";import"./index-CEKSJIUF.js";import"./variants-CkKByUlC.js";import"./KeyboardArrowDown-CbafTnZO.js";import"./DateTimePicker-sh7WhdpL.js";import"./IconButton-JfhaEH9a.js";import"./Calendar-HqqV5zCs.js";import"./ChevronBackward-CGeLy8zv.js";import"./ChevronForward-BeW3SECm.js";import"./Form-DnOGcUJs.js";import"./ErrorMessage-LKqoG9wR.js";import"./RadioGroup-C_sDLmvi.js";import"./FieldError-NsmHcgHs.js";import"./RichTextEditor-BKcfJBCs.js";import"./Menu-Ba0VpzsS.js";import"./TableOutlined-KvZLzlH1.js";import"./Toolbar-E5WfencE.js";import"./Underline-TxFd1bJA.js";import"./Select-_Vs4i7We.js";import"./TextField-Ei4wD-zx.js";import"./Group-DrfLaXi9.js";import"./useTextField-CexTysom.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:s}),`
`,r.jsx(o.h2,{id:"validation",children:"Validation"}),`
`,r.jsxs(o.p,{children:["To handle validation, create a ",r.jsx(o.code,{children:"zod"})," schema to pass to the component."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`import {z} from "zod";

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
`,r.jsx(o.h2,{id:"submit-and-validation-error-handling",children:"Submit and validation error handling"}),`
`,r.jsxs(o.p,{children:["This component wraps the default ",r.jsx(o.code,{children:"react-hook-form"})," submit props."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`import {FieldErrors} from "react-hook-form";

const onSubmit = (values: FormSchema) => {
  console.log(values);
};

const onError = (errors: FieldErrors<FormSchema>) => {
  console.error("form errors!", errors);
};

<Form onSubmit={onSubmit} onError={onError} />
`})}),`
`,r.jsx(o.h2,{id:"external-submit",children:"External submit"}),`
`,r.jsx(o.p,{children:"To submit the form without pressing the submit button, you can add a ref and call submit that way."}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{children:`const formRef = useFormRef();

<Form ref={formRef} {...props}/>;

formRef.current?.submit();
`})})]})}function lr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{lr as default};
