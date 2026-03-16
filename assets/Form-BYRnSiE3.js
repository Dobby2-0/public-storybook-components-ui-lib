import{j as r}from"./iframe-C1iAjgAe.js";import{useMDXComponents as i}from"./index-CVq1ropW.js";import{M as e,C as m}from"./blocks-B3z2UIVJ.js";import{F as p,D as s}from"./Form.stories-CIj3PRX0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BduT9P8-.js";import"./index-BV3RjC92.js";import"./index-CD2zr-YI.js";import"./Button-CSC6fGuF.js";import"./utils-DS_EBhle.js";import"./ButtonBase-DlVARpRa.js";import"./Loader-CPB7YGoD.js";import"./Tooltip-BONxuAzc.js";import"./index-DHOqbfdy.js";import"./Button-DxBzZRHu.js";import"./FocusScope-Bh0s01to.js";import"./Text-Bw1fWTcP.js";import"./usePress-DxKdZJ7l.js";import"./RSPContexts-CHokJQ0f.js";import"./Separator-D-C27o-b.js";import"./VisuallyHidden-BHHefcMY.js";import"./Checkbox-D6DWO9z1.js";import"./Check-CkpS3TCT.js";import"./CheckIndeterminateSmall-UyDGXEhc.js";import"./Form-3VeWiql2.js";import"./useToggleState-DUjO-SVJ.js";import"./useFormReset-CsVnh12V.js";import"./ComboBox-BlYwSwFo.js";import"./SingleComboBox-Au60kABl.js";import"./ListBox-Cw9Jg25T.js";import"./ListBox-CQNGW6X9.js";import"./DragAndDrop-Bs-eQgJx.js";import"./useLabel-BfELL8BC.js";import"./Pill-C6JqJc8l.js";import"./Input-C6FwacGr.js";import"./SelectBase-B8KyAfdd.js";import"./sha256-8Aquurzw.js";import"./Label-DCduzJQR.js";import"./index-DrPILTmI.js";import"./Label-hDNXEwnM.js";import"./variants-DNyNmIcQ.js";import"./KeyboardArrowDown-B7GfXeTE.js";import"./DateTimePicker-BmUKypd_.js";import"./IconButton-C54kcoL9.js";import"./ChevronBackward-BUdgy0WX.js";import"./ChevronForward-Bypr1tgl.js";import"./Calendar-DF1cJRBW.js";import"./Form-2iZZtokh.js";import"./ErrorMessage-DnUn848V.js";import"./PhoneNumberField-0TSDl7NN.js";import"./index-C7CL5OQ7.js";import"./TextField-58hV4C3B.js";import"./Group-DwG8buS5.js";import"./FieldError-cLMSgHqM.js";import"./useTextField-D49IVq4B.js";import"./RadioGroup-BYqXbpHM.js";import"./RichTextEditor-Cb8-oiNR.js";import"./Modal-BlknBZVR.js";import"./Select-67t3Q3T4.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ur(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ur as default};
