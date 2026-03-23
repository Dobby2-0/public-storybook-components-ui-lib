import{j as r}from"./iframe-CQI2BgJE.js";import{useMDXComponents as i}from"./index-CLOh5Gla.js";import{M as e,C as m}from"./blocks-DJFDGqDq.js";import{F as p,D as s}from"./Form.stories-COeF4oMy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CcV-hXq_.js";import"./index-1dpUV8yo.js";import"./index-IJ0JUEQ3.js";import"./Button-D6B8G2pr.js";import"./utils-C3X5B0IN.js";import"./ButtonBase-D7O8JQ9S.js";import"./Loader-GseMPIOx.js";import"./Tooltip-CmUNBg59.js";import"./index-D_Z4pr1f.js";import"./Button-Ezszb-LY.js";import"./FocusScope-BuasiKxf.js";import"./Text-BXLV_GVU.js";import"./usePress-CGC0cKJT.js";import"./RSPContexts-DwQOiG50.js";import"./Separator-Nme1GeN9.js";import"./VisuallyHidden-BgQPvfXY.js";import"./Checkbox-BMC_cK7n.js";import"./Check-SkvwYBb8.js";import"./CheckIndeterminateSmall-CFiKs0El.js";import"./Form-D8zqqw1a.js";import"./useToggleState-CM9zET3L.js";import"./useFormReset-DavwkkZt.js";import"./ComboBox-Cdu9OsFQ.js";import"./SingleComboBox-CeNsBKnE.js";import"./ListBox-Uf8aOmyr.js";import"./ListBox-TE4yhkn7.js";import"./DragAndDrop-ZC2quvuw.js";import"./useLabel-BQ3WVoNy.js";import"./Pill-D_mUCm_f.js";import"./Input-tsvPehdY.js";import"./SelectBase-C2EGX3VM.js";import"./sha256-BQF5-ZpE.js";import"./Label-CuD1tqG4.js";import"./index-CMgD2K3S.js";import"./Label-qfla7SFZ.js";import"./variants-DiWcWtKi.js";import"./KeyboardArrowDown-V8YjhI2z.js";import"./DateTimePicker-DPtINz9T.js";import"./IconButton-D35tFxhh.js";import"./ChevronBackward-CQPZaDAm.js";import"./ChevronForward-bM0HsZ5k.js";import"./Calendar-CKUlDrPC.js";import"./Form-CMjHFGly.js";import"./ErrorMessage-BDjIJoHk.js";import"./PhoneNumberField-BmCKsEIX.js";import"./index-C7CL5OQ7.js";import"./TextField-cie9W2Zr.js";import"./Group-Bq_Kmnb0.js";import"./FieldError-BouTSmqf.js";import"./useTextField-C34O-WWl.js";import"./RadioGroup-BRozzoB_.js";import"./RichTextEditor-DWJsDiAg.js";import"./Modal-C2xdQg6s.js";import"./Select-_puWHXbS.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
