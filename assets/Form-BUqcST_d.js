import{j as r}from"./iframe-C8WqZKtX.js";import{useMDXComponents as i}from"./index-JYMt2z97.js";import{M as e,C as m}from"./blocks-C8jRsZLe.js";import{F as p,D as s}from"./Form.stories-CLonsqiO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bkmr4GuA.js";import"./index-CMotOyWi.js";import"./index-C9ZTeJRU.js";import"./Button-XNcAICl1.js";import"./utils-jtSVojHF.js";import"./ButtonBase-CHzHNBmp.js";import"./Loader-yHUC8L0D.js";import"./Tooltip-Cj2CoiKx.js";import"./index-lbB97veH.js";import"./Button-NHtOoMQI.js";import"./FocusScope-B02YIt_w.js";import"./Text-CP-wYi1U.js";import"./usePress-BMPY-rYn.js";import"./RSPContexts-Cq9bAEtH.js";import"./Separator-Ce1Am9rV.js";import"./VisuallyHidden-BHi9umrS.js";import"./Checkbox-BenEnu-7.js";import"./Check-9H6Sxgn4.js";import"./CheckIndeterminateSmall-BD8qKrVp.js";import"./Form-Dzwvz71O.js";import"./useToggleState-Cgo_nGmG.js";import"./useFormReset-B2Il2kp3.js";import"./ComboBox-B-DL-nLn.js";import"./SingleComboBox-Cu8eHi87.js";import"./ListBox-Dd7pkrRQ.js";import"./ListBox-58HMCfy9.js";import"./DragAndDrop-70409Xm5.js";import"./useLabel-OKP0bQxR.js";import"./Pill-BRKEhzW9.js";import"./Input-DDBDNvYp.js";import"./filter-persistence-CwWdQER7.js";import"./Label-dGI1e1v9.js";import"./index-C6r7v-kg.js";import"./Label-BVJGCbyg.js";import"./variants-DhB_cDn7.js";import"./KeyboardArrowDown-C-TxniAy.js";import"./sha256-PDO49cWt.js";import"./DateTimePicker-B_8IyNsI.js";import"./IconButton-Bx1OvcWF.js";import"./ChevronBackward-CVhIXZ8j.js";import"./ChevronForward-nuh7y7Mb.js";import"./Calendar-C2ToxVSj.js";import"./Form-CuLwBnHk.js";import"./ErrorMessage-Cj8uOXd1.js";import"./PhoneNumberField-OazQahVh.js";import"./index-C7CL5OQ7.js";import"./TextField-BgpmOE9T.js";import"./Group-xRlHC7YN.js";import"./FieldError-BdjOXwcV.js";import"./useTextField-1vH0ptjy.js";import"./RadioGroup-CpHC8I00.js";import"./RichTextEditor-BUaiAYko.js";import"./Modal-C3l18qjV.js";import"./Select-Bsw7eVEQ.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
