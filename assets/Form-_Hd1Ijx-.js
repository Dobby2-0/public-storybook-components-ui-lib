import{j as r}from"./iframe-rn8Wjp4c.js";import{useMDXComponents as i}from"./index-CQlsUL3Q.js";import{M as e,C as m}from"./blocks-8UefF5SS.js";import{F as p,D as s}from"./Form.stories-CET-4Zm7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3NyxgkYe.js";import"./index-DNJ50_qQ.js";import"./Button-DWDUD7Ru.js";import"./utils-lzWS_ab1.js";import"./ButtonBase-BF2C0DfN.js";import"./Loader-j39Hi2xs.js";import"./Tooltip-B0ZcRQcM.js";import"./index-qbjyWTon.js";import"./Button-BVJ8HWzR.js";import"./FocusScope-B3kI02tz.js";import"./Hidden-BHlQy2UU.js";import"./usePress-Bh2TdPKJ.js";import"./RSPContexts-C_JnRKvd.js";import"./Separator-OOxgFT3z.js";import"./Text-CPfn8Qj2.js";import"./VisuallyHidden-qkZaT8Cg.js";import"./Checkbox-BHed57CF.js";import"./Check-B4kKux3M.js";import"./CheckIndeterminateSmall-CDeazwbv.js";import"./Form-Cdk0zU-I.js";import"./useToggleState-C-zIbjtg.js";import"./useFormReset-BhG_PTAS.js";import"./ComboBox-DPBbV1k6.js";import"./ListBox-oXBi6goS.js";import"./ListBox-BNBp2rOo.js";import"./DragAndDrop-CNAdp5YQ.js";import"./useLabel-CoxeWDAg.js";import"./Pill-Rlx_tQc0.js";import"./Input-DVJXUOnk.js";import"./SelectBase-CLZEKvnW.js";import"./Label-DnZbWI3v.js";import"./index-BV-X4tof.js";import"./variants-C7XC65b5.js";import"./KeyboardArrowDown-B2chyI-E.js";import"./DateTimePicker-CvHNDV2k.js";import"./IconButton-7BpSUSKC.js";import"./Calendar-DKUWG0dU.js";import"./ChevronBackward-BEZuJHqx.js";import"./ChevronForward-DjjqMeve.js";import"./Form-BDmX63Iq.js";import"./ErrorMessage-7nPScKW9.js";import"./RadioGroup-B1hKN3Ts.js";import"./FieldError-mGWboLGJ.js";import"./RichTextEditor-pkteoTJ6.js";import"./Menu-CkoxqEjC.js";import"./TableOutlined-BzxQ61OH.js";import"./Toolbar-CwLPifoH.js";import"./Underline-DChMTj_N.js";import"./Select-r2bBau0m.js";import"./TextField-kEtS-DPI.js";import"./Group-46CSFwMJ.js";import"./useTextField-CKg4e5ER.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
