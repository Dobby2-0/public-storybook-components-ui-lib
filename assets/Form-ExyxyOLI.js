import{j as r}from"./iframe-B0rfYQab.js";import{useMDXComponents as i}from"./index-CuIiOTWe.js";import{M as e,C as m}from"./blocks-C0qbFBBj.js";import{F as p,D as s}from"./Form.stories-DrUP6KpT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-TCG1dwA7.js";import"./index-DUf7nOBV.js";import"./index-Ce7v5vwO.js";import"./Button-BqlAje5b.js";import"./useHover-B0wlb5jZ.js";import"./ButtonBase-BLl9YrBx.js";import"./Loader-CLgQGqjj.js";import"./Tooltip-OesZ8xYk.js";import"./index-K9bwIEu-.js";import"./Button-DgG2pfGT.js";import"./SelectionIndicator-B3NOFxgm.js";import"./usePress-Chzq6C2u.js";import"./Text-VUh5tOod.js";import"./useCollection-BkTGr9ip.js";import"./VisuallyHidden-BAYTT9k-.js";import"./Autocomplete-yNs0HOYW.js";import"./Checkbox-ArAGDqHc.js";import"./Check-DSm0uhTD.js";import"./CheckIndeterminateSmall-C88GZgHB.js";import"./useFormValidation-C2NfvSuB.js";import"./useToggleState-BWKPHPY6.js";import"./useFormReset-Bp6QaN_K.js";import"./ComboBox-BCxyhYH2.js";import"./ComboBoxListBox-Bgf3n2Qw.js";import"./ListBox-llRcBisL.js";import"./ListBox-DkEqe_hd.js";import"./useLoadMoreSentinel-DKzkIAvp.js";import"./useLabel-BD7ZqNpF.js";import"./Pill-D0ciTlCp.js";import"./Input-BV3cgOQN.js";import"./SelectBase-BuWLyvF8.js";import"./Label-LnSXxjL7.js";import"./index-Dw7Qz_nr.js";import"./Label-BOolh8pV.js";import"./variants-BGyWdreT.js";import"./KeyboardArrowDown-DCW7eDtn.js";import"./filter-persistence-CaWztTH2.js";import"./sha256-D83yjLwa.js";import"./DateTimePicker-CsguV7UC.js";import"./IconButton-D2UZNkWB.js";import"./ChevronBackward-Cq6dpmFB.js";import"./ChevronForward-CiDAsLV1.js";import"./Calendar-LNGtAP8L.js";import"./Form-QYCaUJsw.js";import"./ErrorMessage-DCrnpUqd.js";import"./PhoneNumberField-DNbArwPW.js";import"./index-C7CL5OQ7.js";import"./TextField-DT4Eo8Ik.js";import"./Group-Ba-p9N0T.js";import"./useField-CVLR0J5T.js";import"./useTextField-CkywsR3v.js";import"./RadioGroup-Ci1P1hl9.js";import"./RichTextEditor-CphtRHRR.js";import"./Modal-Ciy1_PMp.js";import"./Select-k_faexP8.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
