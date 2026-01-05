import{j as r}from"./iframe-Buf-yu1G.js";import{useMDXComponents as i}from"./index-DbwvBCA3.js";import{M as e,C as m}from"./blocks-QWzREWxc.js";import{F as p,D as s}from"./Form.stories-B17jIW11.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dXm0C7iw.js";import"./index-Dd8xEd0y.js";import"./index-DZa7hcpo.js";import"./Button-BKUHKe7M.js";import"./utils-DsZIVvgi.js";import"./ButtonBase-B5E3aHsH.js";import"./Loader-ClqT5cN-.js";import"./Tooltip-C_80Ipr0.js";import"./index-h9AQGklB.js";import"./Button-C5gGSRMv.js";import"./FocusScope-8F9t37jv.js";import"./Text-B3Wc_O3W.js";import"./usePress-ClRLR1LW.js";import"./RSPContexts-Co3FhSyY.js";import"./Separator-D85nm_WG.js";import"./VisuallyHidden-DxSDzN3H.js";import"./Checkbox-MzjgM-tH.js";import"./Check-COKk3Iux.js";import"./CheckIndeterminateSmall-BgIZjy-4.js";import"./Form-HVopaliJ.js";import"./useToggleState-BC3or0JE.js";import"./useFormReset-DemyNfMe.js";import"./ComboBox-8Do9MzR_.js";import"./SingleComboBox-d8tVhPTe.js";import"./ListBox-B5_uwrzv.js";import"./ListBox-DWtXWEmo.js";import"./DragAndDrop-CF2LES-B.js";import"./useLabel-DrjxP-NB.js";import"./Pill-fJ66MNf_.js";import"./Input-BnQ0a0q5.js";import"./SelectBase-DuNSvbGx.js";import"./Label-CfJIg83I.js";import"./index-Cy_ZjL0e.js";import"./Label-BzDjaSQM.js";import"./variants-BqGC_269.js";import"./KeyboardArrowDown-BhgScPNQ.js";import"./DateTimePicker-C5W10xsK.js";import"./IconButton-B8XORBmC.js";import"./ChevronBackward-Bp60H9Au.js";import"./ChevronForward-Bf-zXniX.js";import"./Calendar-TfLFjYc3.js";import"./Form-CkECDwvs.js";import"./ErrorMessage-BqEf7DOy.js";import"./PhoneNumberField-CUowrS52.js";import"./index-C7CL5OQ7.js";import"./TextField-CL0ynsRx.js";import"./Group-DUdv2EjX.js";import"./FieldError-BFweSvb9.js";import"./useTextField-CViBBVi3.js";import"./RadioGroup-qQYzgj38.js";import"./RichTextEditor-BFenrSmM.js";import"./Modal-5NGJYuZR.js";import"./Select-BRrZq2Xa.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function hr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{hr as default};
