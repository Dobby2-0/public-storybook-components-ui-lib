import{j as r}from"./iframe-DmQSL1n5.js";import{useMDXComponents as i}from"./index-DEhiS_3-.js";import{M as e,C as m}from"./blocks-BbsTpYKX.js";import{F as p,D as s}from"./Form.stories-ChMOvMJO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vN_LGgeS.js";import"./index-C_oUhXh1.js";import"./index-BSMU_KQv.js";import"./Button-CE-mMj1m.js";import"./utils-Q1S98sFL.js";import"./ButtonBase-BbXWP6MQ.js";import"./Loader-Dav_e8u7.js";import"./Tooltip-8jf_ic_C.js";import"./index-DRjml-nF.js";import"./Button-haN4-rOz.js";import"./FocusScope-BHQMkNL1.js";import"./Text-BIFAZDue.js";import"./usePress-B6PvCcgl.js";import"./RSPContexts-BCqgmaSx.js";import"./Separator-4bUDgNjt.js";import"./VisuallyHidden-DtJLncJU.js";import"./Checkbox-CyaBzxuH.js";import"./Check-DDM4CB9f.js";import"./CheckIndeterminateSmall-DOmp6zTe.js";import"./Form-_DpIGpJL.js";import"./useToggleState-B2xNtg9Y.js";import"./useFormReset-tn8EIHg-.js";import"./ComboBox-Du0e320J.js";import"./SingleComboBox-QaK58nWd.js";import"./ListBox-BejO1O41.js";import"./ListBox-Czpbme6U.js";import"./DragAndDrop-CRISqGBo.js";import"./useLabel-C77bEwrz.js";import"./Pill-5nk9SBAe.js";import"./Input-CnWvLWpx.js";import"./SelectBase-Bd1eX1e1.js";import"./sha256-kjML7lqd.js";import"./Label-DmnPIo-K.js";import"./index-D92gCk2y.js";import"./Label-Cliij9YS.js";import"./variants-CPwxUg2B.js";import"./KeyboardArrowDown-BvfLRCkB.js";import"./DateTimePicker-BRCanODh.js";import"./IconButton-Die-hctV.js";import"./ChevronBackward-eqOobHUi.js";import"./ChevronForward-_xOBq46v.js";import"./Calendar-CFSIZZjq.js";import"./Form-DP94rfIB.js";import"./ErrorMessage-Cfkk25TD.js";import"./PhoneNumberField-DxltrJL6.js";import"./index-C7CL5OQ7.js";import"./TextField-EVIXUUic.js";import"./Group-pj28-uHL.js";import"./FieldError-CgdXUbBi.js";import"./useTextField-BjzxVXiD.js";import"./RadioGroup-xBWhC8Jh.js";import"./RichTextEditor-_USTMPGd.js";import"./Modal-BJxzOPWA.js";import"./Select-CEgwEmWj.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
