import{j as r}from"./iframe-DyM0pRHS.js";import{useMDXComponents as i}from"./index-gc16QbYp.js";import{M as e,C as m}from"./blocks-Dor9nWsZ.js";import{F as p,D as s}from"./Form.stories-BzVE56UW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cm2IneC0.js";import"./index-4nPyI7ty.js";import"./Button-CIZY2u7k.js";import"./utils-DMTPWBc_.js";import"./ButtonBase-CXob6006.js";import"./Loader-NhHMjgG6.js";import"./Tooltip-BsKdUJc3.js";import"./index-DtGZiul-.js";import"./Button-BHPZzixC.js";import"./FocusScope-DdxFpdp9.js";import"./Hidden-BsbvfOZ6.js";import"./usePress-UJN_1VFH.js";import"./RSPContexts-CCgX4cpz.js";import"./Separator-CKnPN-rU.js";import"./Text-CTxv4ony.js";import"./VisuallyHidden-GuNs7VLS.js";import"./Checkbox-CLaIICbS.js";import"./Check-eXuHb0sB.js";import"./CheckIndeterminateSmall-MnSn0oMf.js";import"./Form-CLk7AHWp.js";import"./useToggleState-CpBrptAb.js";import"./useFormReset-C5BHAHm-.js";import"./ComboBox-BCm53dDf.js";import"./ListBox-Di9ZcfVO.js";import"./ListBox-BZEzMSSX.js";import"./DragAndDrop-Bwttd0Fw.js";import"./useLabel-cgr6UQki.js";import"./Pill-DkJ9VafM.js";import"./Input-B5qUYEDa.js";import"./SelectBase-DVcp6qmc.js";import"./Label-BGKLD9mf.js";import"./index-DZ5G9k8-.js";import"./variants-DTRF1OOe.js";import"./KeyboardArrowDown-DIX3I_WI.js";import"./DateTimePicker-6kFtpnJp.js";import"./IconButton-CoFjjgNf.js";import"./Calendar-XuKzenDN.js";import"./ChevronBackward-DZ7QoeRb.js";import"./ChevronForward-Bd1ZS1_d.js";import"./Form-Dancg_2r.js";import"./ErrorMessage-jKBnRckJ.js";import"./RadioGroup-C3fNm1bN.js";import"./FieldError-MzeTacBU.js";import"./RichTextEditor-DjWQDXec.js";import"./Menu-Pi82NSHN.js";import"./TableOutlined-DFJLLntx.js";import"./Toolbar-VSnNmll3.js";import"./Underline-CwLnFZOp.js";import"./Select-CUpR5Zfa.js";import"./TextField-BU_JchFf.js";import"./Group-B9sErCt1.js";import"./useTextField-CQlkh26F.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
