import{j as r}from"./iframe-MJq7Ca43.js";import{useMDXComponents as i}from"./index-DyVnoYL6.js";import{M as e,C as m}from"./blocks-DQKXI-WW.js";import{F as p,D as s}from"./Form.stories-DitATB-L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CiGCyFb1.js";import"./index-Bs0u_Ynm.js";import"./index-D9qRENIQ.js";import"./Button-DePpFx36.js";import"./useHover-DmV2Q5h3.js";import"./ButtonBase-h1ovOeWB.js";import"./Loader-DVFfm2se.js";import"./Tooltip-bk47HsbA.js";import"./index-9xACrRnl.js";import"./Button-BcXSeBnd.js";import"./SelectionIndicator-CbCD7aA9.js";import"./usePress-3rypOCUW.js";import"./Text-BegZfy3M.js";import"./useCollection-CRcdom6f.js";import"./VisuallyHidden-CngllTjG.js";import"./Autocomplete-qfJj0NgY.js";import"./Checkbox-B5dq-fBf.js";import"./Check-BXmhigVp.js";import"./CheckIndeterminateSmall-BEsnnToY.js";import"./useFormValidation-K5ydMFvL.js";import"./useToggleState-BdmOoohY.js";import"./useFormReset-DvIDqCsK.js";import"./ComboBox-DCCgGDWD.js";import"./ComboBoxListBox-62SCBUlg.js";import"./ListBox-BOTZdOFF.js";import"./ListBox-DaNIL0wI.js";import"./useLoadMoreSentinel-B3ySbmyB.js";import"./useLabel-DL0t2YJ4.js";import"./Pill-CHfYq4x6.js";import"./Input-CIJgDx8n.js";import"./SelectBase-DVRF9sMZ.js";import"./Label-DRe9hSxA.js";import"./index-wmYZoLgK.js";import"./Label-XPuM0PvF.js";import"./variants-C1Zo3luU.js";import"./KeyboardArrowDown-D-z3ed0F.js";import"./filter-persistence-DC9DoetQ.js";import"./sha256-DDacMVWu.js";import"./DateTimePicker-Cex9AAKG.js";import"./IconButton-C9OZw2pg.js";import"./ChevronBackward-CojAq-eQ.js";import"./ChevronForward-oQRERrBf.js";import"./Calendar-DZkzaqqd.js";import"./Form-B0Fua4IC.js";import"./ErrorMessage-ROIkgnj-.js";import"./PhoneNumberField-5XadgWgo.js";import"./index-C7CL5OQ7.js";import"./TextField-DUQc5mDs.js";import"./Group-Cz_FlYJs.js";import"./useField-CO1ldSEX.js";import"./useTextField-RQR_cu9n.js";import"./RadioGroup-kqDa5hpy.js";import"./RichTextEditor-BvLoL0XB.js";import"./Modal-z1dgOjlN.js";import"./Select-Cpug4IdQ.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
