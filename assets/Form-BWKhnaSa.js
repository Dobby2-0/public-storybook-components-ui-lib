import{j as r}from"./iframe-BlAShGx_.js";import{useMDXComponents as i}from"./index-Cfx6QWf1.js";import{M as e,C as m}from"./blocks-CCzmRc72.js";import{F as p,D as s}from"./Form.stories-DWHesMge.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLSv-aTS.js";import"./index-DwQoafie.js";import"./index-BarixTo4.js";import"./Button-BiBN7gXm.js";import"./useHover-DEiLiWb1.js";import"./ButtonBase-DF2Kmxli.js";import"./Loader-CKhT2Eyr.js";import"./Tooltip-DCV4EGoP.js";import"./index-B8l9xvvj.js";import"./Button-DPZI7PUd.js";import"./SelectionIndicator-CWzx1OXo.js";import"./usePress-C6xx7uxM.js";import"./Text-y3ugg862.js";import"./useCollection-DYLt4ASN.js";import"./VisuallyHidden-aD9brjsU.js";import"./Autocomplete-P7FbSN_b.js";import"./Checkbox-BdvEK8vR.js";import"./Check-5tPrUKX8.js";import"./CheckIndeterminateSmall-CqW5TiS4.js";import"./useFormValidation-DNG5JjCu.js";import"./useToggleState-BFMozydE.js";import"./useFormReset-D1pxjSJH.js";import"./ComboBox-BHxLEpCC.js";import"./ComboBoxListBox-Vo3kWcWA.js";import"./ListBox-4ZPkpGi9.js";import"./ListBox-BB7bfwgx.js";import"./useLoadMoreSentinel-tvIk-Yts.js";import"./useLabel-CSkTYHtP.js";import"./Pill-BzEhEx-n.js";import"./Input-DkED4-42.js";import"./SelectBase-KEiVUW61.js";import"./Label-DdCEuN0e.js";import"./index-P0k2IsM8.js";import"./Label-BoC4dPa5.js";import"./variants-BW0ETPKh.js";import"./KeyboardArrowDown-su9MsdaE.js";import"./filter-persistence-R5SX4EiA.js";import"./sha256-DD82QyHS.js";import"./DateTimePicker-e7z2wIH0.js";import"./IconButton-2zPEJEPn.js";import"./ChevronBackward-BPtBE408.js";import"./ChevronForward-D2eyNZqw.js";import"./Calendar-DCca09lm.js";import"./Form-Dp_RpToQ.js";import"./ErrorMessage-BkAq6UVE.js";import"./PhoneNumberField-bH8SoCwJ.js";import"./index-C7CL5OQ7.js";import"./TextField-DtMH8gqk.js";import"./Group-iEwrtl7N.js";import"./useField-eXEMRdni.js";import"./useTextField-C7z6raMa.js";import"./RadioGroup-B9-Sc77C.js";import"./RichTextEditor-DJbwXFzC.js";import"./Modal-D-bpSerT.js";import"./Select-Cnpf5dtV.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
