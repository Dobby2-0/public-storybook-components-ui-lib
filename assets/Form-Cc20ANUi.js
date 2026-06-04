import{j as r}from"./iframe-DPohime8.js";import{useMDXComponents as i}from"./index-k2mdMYeb.js";import{M as e,C as m}from"./blocks-B2UWMOMe.js";import{F as p,D as s}from"./Form.stories-DEkiGgyV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bi6UBOSl.js";import"./index-DIAQTv3_.js";import"./index-5TNEXpFx.js";import"./Button-BDFc_cyK.js";import"./useHover-BYwTxAz8.js";import"./ButtonBase-d8DrokVR.js";import"./Loader-BL_wwx-u.js";import"./Tooltip-CPcJgKEX.js";import"./index-lcHZFMS1.js";import"./Button-aHtnGejH.js";import"./SelectionIndicator-D216NoSG.js";import"./usePress-BQV1sqTB.js";import"./Text-B_z0W9j8.js";import"./useCollection-DLmRJA8w.js";import"./VisuallyHidden-BG6qwqyX.js";import"./Autocomplete-CyQFeyxK.js";import"./Checkbox-CMEdTG-Y.js";import"./Check-B2fJitGt.js";import"./CheckIndeterminateSmall-BW0M4Wp3.js";import"./useFormValidation-CXlM3Mt6.js";import"./useToggleState-b11axI5f.js";import"./useFormReset-C2cpfXnO.js";import"./ComboBox-Dr_U3f8n.js";import"./ComboBoxListBox-DjFXJETy.js";import"./ListBox-CD5NshBb.js";import"./ListBox-GHwYqJeJ.js";import"./useLoadMoreSentinel-_qITs77c.js";import"./useLabel-CJu-1Hax.js";import"./Pill-D9MQQfVn.js";import"./Input-CQX5-lgl.js";import"./SelectBase-DgJmzJg_.js";import"./Label-j8-T_7Xx.js";import"./index-BjZtawmV.js";import"./Label-CmUhqHG_.js";import"./variants-w3T-bNLD.js";import"./KeyboardArrowDown-o9-obP08.js";import"./filter-persistence-BSVp_iV1.js";import"./sha256-DvYVrOsX.js";import"./DateTimePicker-CgDlQm-p.js";import"./IconButton-Qv7nbxWb.js";import"./ChevronBackward-DYQpte5M.js";import"./ChevronForward-CIQffJuv.js";import"./Calendar-DjO0naCp.js";import"./Form-DgecH4GR.js";import"./ErrorMessage-TBg0-dnn.js";import"./PhoneNumberField-Dmsejbvx.js";import"./index-C7CL5OQ7.js";import"./TextField-CQRVTnVV.js";import"./Group-lMmSacT_.js";import"./useField-6IOdVHdw.js";import"./useTextField-DSAl_lWS.js";import"./RadioGroup-biDKKnVU.js";import"./RichTextEditor-Bo-UCxxt.js";import"./Modal-BxKsWQsM.js";import"./Select-C-4AIj2T.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
