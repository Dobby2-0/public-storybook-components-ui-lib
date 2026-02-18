import{j as r}from"./iframe-YbAckXSK.js";import{useMDXComponents as i}from"./index-DOklO6xe.js";import{M as e,C as m}from"./blocks-DhSKy0c2.js";import{F as p,D as s}from"./Form.stories-CD5wxrCk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTVfdg5O.js";import"./index-D2BgbupE.js";import"./index-Bt6vm1AV.js";import"./Button-DId_ZSQM.js";import"./utils-FXyl1Dg0.js";import"./ButtonBase-D3S9Li28.js";import"./Loader-Bg91Z0Hy.js";import"./Tooltip-B6bO8_Fo.js";import"./index-Dkbx8zPI.js";import"./Button-BUfyAz2A.js";import"./FocusScope-wbRS7jeD.js";import"./Text-D9PQmuvE.js";import"./usePress-BOm0kPM2.js";import"./RSPContexts-Cu44xTEd.js";import"./Separator-33LoDwZp.js";import"./VisuallyHidden-t6an82pl.js";import"./Checkbox-BQBjf-vq.js";import"./Check-CoHmSswN.js";import"./CheckIndeterminateSmall-CUpRAyOm.js";import"./Form-Dcbai08Q.js";import"./useToggleState-ByfKk_xH.js";import"./useFormReset-CAGJcD0p.js";import"./ComboBox-CqMY0Xpl.js";import"./SingleComboBox-C3VLsf9c.js";import"./ListBox-D5cuPfT_.js";import"./ListBox-C4ePM5l8.js";import"./DragAndDrop-szfxvZzj.js";import"./useLabel-DP5XcyWK.js";import"./Pill-DpFredR5.js";import"./Input-CfUQhn90.js";import"./filter-persistence-D3QW6D7n.js";import"./Label-D23oT6ec.js";import"./index-Wm8TL3-X.js";import"./Label-9YNuwaGt.js";import"./variants-ovNSaQvf.js";import"./KeyboardArrowDown-DsnZ-Vj6.js";import"./sha256-Cy9Q_auo.js";import"./DateTimePicker-FhJYL8rn.js";import"./IconButton-CWD4UJyV.js";import"./ChevronBackward-BITGL9zF.js";import"./ChevronForward-CT2i8j9H.js";import"./Calendar-CN__b59B.js";import"./Form-CVCIA7vr.js";import"./ErrorMessage-CxsTbpcz.js";import"./PhoneNumberField-DS0OU2kH.js";import"./index-C7CL5OQ7.js";import"./TextField-BQZNc5uP.js";import"./Group-BXHXadXu.js";import"./FieldError-CBOb5eLN.js";import"./useTextField-BpuYyQ-1.js";import"./RadioGroup-DUaLAZc1.js";import"./RichTextEditor-51yDP-Ad.js";import"./Modal-EPKA_OFu.js";import"./Select-uVkzh91R.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
