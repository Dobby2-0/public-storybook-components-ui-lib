import{j as r}from"./iframe-4IXjDiCa.js";import{useMDXComponents as i}from"./index-z3E_MIOv.js";import{M as e,C as m}from"./blocks-UX9lTuvu.js";import{F as p,D as s}from"./Form.stories-DcgpdJqj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cz7rZMbK.js";import"./index-B0lRm_1G.js";import"./Button-iiVeMA4W.js";import"./utils-BxAExPwf.js";import"./ButtonBase-CYrTN4BT.js";import"./Loader-CUahapuN.js";import"./Tooltip-B8HaEjgg.js";import"./index-BZsqDNVk.js";import"./Button-V3q3VxeI.js";import"./FocusScope-BP9fTGYZ.js";import"./Hidden-DKyGv6tz.js";import"./usePress-CDFmyKaG.js";import"./RSPContexts-BhOYO7KW.js";import"./Separator-DDSKUequ.js";import"./Text-CL40AuMR.js";import"./VisuallyHidden-D8bIOqcz.js";import"./Checkbox-DRUGoB1f.js";import"./Check-Dm8L62ls.js";import"./CheckIndeterminateSmall-D2W2TBgK.js";import"./Form-9-874zDA.js";import"./useToggleState-BqveCxD9.js";import"./useFormReset-DaHNY-8T.js";import"./ComboBox-CBTX1MUG.js";import"./ListBox-D292CMz9.js";import"./ListBox-CqYTii-I.js";import"./DragAndDrop-BeOl25og.js";import"./useLabel-6hL-K7Ok.js";import"./Pill-hRu5-zUD.js";import"./Input-DdXxmcCd.js";import"./SelectBase-TX_d4fq6.js";import"./Label-0KX0RCfQ.js";import"./index-CTgx0f1b.js";import"./variants--QwKUKWm.js";import"./KeyboardArrowDown-jRkr1Vv4.js";import"./DateTimePicker-CyXaIwK8.js";import"./IconButton-DdJt9_LL.js";import"./Calendar-CLDmEy7e.js";import"./ChevronBackward-BTqehptH.js";import"./ChevronForward-C0_UZPxR.js";import"./Form-SiZIJ_kh.js";import"./ErrorMessage-CML1K8ra.js";import"./RadioGroup-DJe1u2OA.js";import"./FieldError-KlGbcngK.js";import"./RichTextEditor-CO1zuS-v.js";import"./Menu-_in8SlLk.js";import"./TableOutlined-ByxSk0Qo.js";import"./Toolbar-B38utx4h.js";import"./Underline-Cm7gj-6H.js";import"./Select-CrrzDqDx.js";import"./TextField-Cfp-n2tP.js";import"./Group-CAeCta7I.js";import"./useTextField-CaUK3mdG.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
