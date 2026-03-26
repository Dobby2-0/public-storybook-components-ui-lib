import{j as r}from"./iframe-DwQ1cxKd.js";import{useMDXComponents as i}from"./index-DaRlaKG_.js";import{M as e,C as m}from"./blocks-C6USRgqk.js";import{F as p,D as s}from"./Form.stories-CPeCxDb9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXyKMVzy.js";import"./index-CdqMcoE8.js";import"./index-CoseQzcP.js";import"./Button-Bd9x12G_.js";import"./utils-Cq8mDMrP.js";import"./ButtonBase-2OI7vvzL.js";import"./Loader-C9gGUQuh.js";import"./Tooltip-3Xd6rwqa.js";import"./index-BAuicX3T.js";import"./Button-BQ-6Ynvp.js";import"./FocusScope-CGYtYmDv.js";import"./Text-v8vy5ByC.js";import"./usePress-Boayax9N.js";import"./RSPContexts-D1BZSikK.js";import"./Separator-CZ1LhOtD.js";import"./VisuallyHidden-UobzTLrX.js";import"./Checkbox-DzGx-As7.js";import"./Check-gF0yx19v.js";import"./CheckIndeterminateSmall-BAWBZ-82.js";import"./Form-DUZwhMac.js";import"./useToggleState-D1pUy_vP.js";import"./useFormReset-C9RR7ftz.js";import"./ComboBox-4nA395YM.js";import"./SingleComboBox-CLKQmVCl.js";import"./ListBox-BBIWO29z.js";import"./ListBox-axR2Bl1n.js";import"./DragAndDrop-C_CJzo5y.js";import"./useLabel-tSNErAk0.js";import"./Pill-kffbdWLi.js";import"./Input-CUoIl1Yb.js";import"./SelectBase-BuYFQ__d.js";import"./sha256-B-PSEeYO.js";import"./Label-Cr4EEV52.js";import"./index-DQiCAfZd.js";import"./Label-CLaeWWl4.js";import"./variants-6kbjCjNZ.js";import"./KeyboardArrowDown-CpaTLkLf.js";import"./DateTimePicker-CVcVyIuf.js";import"./IconButton-B2l9S4ei.js";import"./ChevronBackward-B4GlKOPq.js";import"./ChevronForward-BKmEX-sM.js";import"./Calendar-D8fPqqnH.js";import"./Form-BwonRxOM.js";import"./ErrorMessage-RL2rTeUv.js";import"./PhoneNumberField-DgqMDl92.js";import"./index-C7CL5OQ7.js";import"./TextField-zCwh9ACI.js";import"./Group-COK7b1VT.js";import"./FieldError-BlPQOJdr.js";import"./useTextField-D9oxw4mH.js";import"./RadioGroup-BrN3BuJZ.js";import"./RichTextEditor-Cx9JDuU-.js";import"./Modal-Dd8YfYNi.js";import"./Select-y5aV3RR5.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
