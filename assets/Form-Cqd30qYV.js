import{j as r}from"./iframe-BuFkWplP.js";import{useMDXComponents as i}from"./index-D4O8T5ym.js";import{M as e,C as m}from"./blocks-Ks2ZubZD.js";import{F as p,D as s}from"./Form.stories-jo7fvLpp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-RoS1Ggrx.js";import"./index-BdiL26eU.js";import"./index-zqHkV5kc.js";import"./Button-CBNkgpVa.js";import"./utils-C9iw6zWm.js";import"./ButtonBase-Bk_9nHne.js";import"./Loader-DIzJdq7m.js";import"./Tooltip-D4mIy-Bb.js";import"./index-D7-a8E3n.js";import"./Button-BlGFDEZi.js";import"./FocusScope-Dp2boi_n.js";import"./Text-HLD_xZ3d.js";import"./usePress-B3kjZh-7.js";import"./RSPContexts-BRmoPSeH.js";import"./Separator-CyT0SUzg.js";import"./VisuallyHidden-B33w_ENG.js";import"./Checkbox-5XzYA7qh.js";import"./Check-d-NqFmIa.js";import"./CheckIndeterminateSmall-D4gbDiSO.js";import"./Form-DIfNPYw5.js";import"./useToggleState-DjFAOpsv.js";import"./useFormReset-BWavgqNH.js";import"./ComboBox-_gkwY7DF.js";import"./SingleComboBox-CehJ6kL9.js";import"./ListBox-BMjfYA72.js";import"./ListBox-jYKxHJae.js";import"./DragAndDrop-DyRmnP9D.js";import"./useLabel-DGbKxkyu.js";import"./Pill-BJ7greTZ.js";import"./Input-oKdc5TXI.js";import"./SelectBase-oi6w1shv.js";import"./sha256-BaHJVEED.js";import"./Label-BUm0PTbE.js";import"./index-e7KKxAvm.js";import"./Label-BDiBA2iC.js";import"./variants-DhvAw9yj.js";import"./KeyboardArrowDown-DO00PBjU.js";import"./DateTimePicker-BnB-pjiU.js";import"./IconButton-CIpWgWoP.js";import"./ChevronBackward-l9bym_VI.js";import"./ChevronForward-BoybGLcK.js";import"./Calendar-KGsiQvcZ.js";import"./Form-DUWq3IsJ.js";import"./ErrorMessage-jBZdi1Mm.js";import"./PhoneNumberField-CxCx3yq9.js";import"./index-C7CL5OQ7.js";import"./TextField-E0U5wFBv.js";import"./Group-Gzg6apm7.js";import"./FieldError-CcsYC-WJ.js";import"./useTextField-JbbFAe-P.js";import"./RadioGroup-aV1aUkDj.js";import"./RichTextEditor-CLCXEdOU.js";import"./Modal-z_P6dwt_.js";import"./Select-3HUXxPrq.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
