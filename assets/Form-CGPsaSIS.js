import{j as r}from"./iframe-CvDSZI5m.js";import{useMDXComponents as i}from"./index-Bbm0Tu81.js";import{M as e,C as m}from"./blocks-CRZNsqPH.js";import{F as p,D as s}from"./Form.stories-CGo89TH4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BylVdeyq.js";import"./index-CrMRi0OU.js";import"./Button-CeBeXQlz.js";import"./utils-BxiCvT0V.js";import"./ButtonBase-CeVwPihX.js";import"./Loader-C7fzXXHZ.js";import"./Tooltip-DVAj9ZzJ.js";import"./index-VkNvwpIi.js";import"./Button-DRxduARr.js";import"./FocusScope-8Gmna62R.js";import"./Hidden-C_DT-VWR.js";import"./usePress-dNQgNZxE.js";import"./RSPContexts-CmqWVBtj.js";import"./Separator-DbdTyUFK.js";import"./Text-pYVuekd8.js";import"./VisuallyHidden-vsQUDcsx.js";import"./Checkbox-LPwpiJJg.js";import"./Check-BY4YfxDS.js";import"./CheckIndeterminateSmall-DWFr9r8e.js";import"./Form-BcO_CJQ6.js";import"./useToggleState-BFBFq60j.js";import"./useFormReset-uGcnvREJ.js";import"./ComboBox-i-3G11MF.js";import"./ListBox-CKDGCb4T.js";import"./ListBox-DRcFFLL8.js";import"./DragAndDrop-dGYS-TJX.js";import"./useLabel-HoGK51EY.js";import"./Pill-_SzzFJUv.js";import"./Input-DPR8MKfg.js";import"./SelectBase-CRQYlrub.js";import"./Label-CEcy1AVy.js";import"./index-D7z1s-aD.js";import"./variants-yYtp41nw.js";import"./KeyboardArrowDown-BsANNLLv.js";import"./DateTimePicker-ClyxYaTs.js";import"./IconButton-CmIsBV_w.js";import"./Calendar-DlW-Luji.js";import"./ChevronBackward-CIWThcR1.js";import"./ChevronForward-c1HcKWne.js";import"./Form-DcFCTrJv.js";import"./ErrorMessage-DPK7vhDu.js";import"./RadioGroup-Bh7mKszy.js";import"./FieldError-CJk7qqlu.js";import"./RichTextEditor-C1KdNvQc.js";import"./Menu-Djfr9pEQ.js";import"./TableOutlined-DYR2EYBW.js";import"./Toolbar-DhOJ9JYN.js";import"./Underline-C4jnPDlT.js";import"./Select-pkcvlbMG.js";import"./TextField-9f4NCuVE.js";import"./Group-CZWP6rkz.js";import"./useTextField-nJcyRe3R.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function lr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{lr as default};
