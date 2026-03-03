import{j as r}from"./iframe-DjqpNQmQ.js";import{useMDXComponents as i}from"./index-FmzhMfXm.js";import{M as e,C as m}from"./blocks-CE4VMGRb.js";import{F as p,D as s}from"./Form.stories-BDsqhVo2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DnQNdg3I.js";import"./index-D65Ovpds.js";import"./index-UKgaxhI3.js";import"./Button-DKHSl1RS.js";import"./utils-AsuAOT3f.js";import"./ButtonBase-CgRWnP-2.js";import"./Loader-BbmFoWOB.js";import"./Tooltip-CVvQKYzB.js";import"./index-CJfLL61d.js";import"./Button-BUzQdb-Z.js";import"./FocusScope-DVkpFk-T.js";import"./Text-1vnTBw6f.js";import"./usePress-CXnalX6N.js";import"./RSPContexts-CWNtXmO-.js";import"./Separator-CaS9j1h9.js";import"./VisuallyHidden-Brsj05xq.js";import"./Checkbox-e4z6GgGQ.js";import"./Check-DhLhA5wy.js";import"./CheckIndeterminateSmall-CRVr72eF.js";import"./Form-p96nfRNs.js";import"./useToggleState-CJeWZePG.js";import"./useFormReset-CLsxC9Rm.js";import"./ComboBox-DwRE2N0a.js";import"./SingleComboBox-aXi3HnuD.js";import"./ListBox-NG11Z0sG.js";import"./ListBox-DSFMsrDO.js";import"./DragAndDrop-DHI3lTqb.js";import"./useLabel-BLVUAkvy.js";import"./Pill-hYsr5kbZ.js";import"./Input--LXhszRQ.js";import"./SelectBase-BGr-7CF6.js";import"./sha256-h75IhSwW.js";import"./Label-CiIJCF7d.js";import"./index-BZafFY91.js";import"./Label-QirXArnd.js";import"./variants-CTYiPEro.js";import"./KeyboardArrowDown-CoO-TRF7.js";import"./DateTimePicker-Jr9H8xs-.js";import"./IconButton-DZ_aiBhW.js";import"./ChevronBackward-DJgD5YzS.js";import"./ChevronForward-BROd9BCM.js";import"./Calendar-8OitCfkv.js";import"./Form-BtezNKTS.js";import"./ErrorMessage-a-h4rWIh.js";import"./PhoneNumberField-BoGmglL0.js";import"./index-C7CL5OQ7.js";import"./TextField-BHTdZyu0.js";import"./Group-BV39CLuR.js";import"./FieldError-DYRVGx6R.js";import"./useTextField-unVmVfRL.js";import"./RadioGroup-BGgypnp8.js";import"./RichTextEditor-D0B7IZ1H.js";import"./Modal-3t1Iezmm.js";import"./Select-ia5QBNSq.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
