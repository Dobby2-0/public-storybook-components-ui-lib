import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as e,C as m}from"./index-BVtMCnfz.js";import{F as p,D as s}from"./Form.stories-Bxz_LD1k.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-eyfuaZAt.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CTrgjtN9.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-DbLmhAvH.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-0o7fouTi.js";import"./Loader-CAGfkTtI.js";import"./Tooltip-HuGQArMP.js";import"./index-CwwWq_At.js";import"./Button-B1BXpP9X.js";import"./Separator-BO8zFYPj.js";import"./usePress-B4dvVj7D.js";import"./openLink-Btrk4R3c.js";import"./FocusScope-CGnEyLYb.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-myWnj7Kp.js";import"./VisuallyHidden-BQsNp2BX.js";import"./PortalProvider-ChirZUt_.js";import"./Checkbox-KbGvqug4.js";import"./Check-CsX-RmMH.js";import"./Form-CP-Wxeqw.js";import"./useToggleState-8ltz0Fe8.js";import"./useFormReset-D9qBtKuw.js";import"./ComboBox-DiL2UDVP.js";import"./ListBox-CCTQeIDM.js";import"./ListBox-B7cfcKLR.js";import"./DragAndDrop-CM0Wr761.js";import"./useLabel-CDKVTgiG.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-BvvJKRIP.js";import"./Close-Lw3CM0IZ.js";import"./Input-C-daEA6A.js";import"./SelectBase-Bd3RufyX.js";import"./Label-DTJHFGU3.js";import"./index-a5nvb9vf.js";import"./variants-DIvSP2G7.js";import"./Info-DXk7w5MR.js";import"./KeyboardArrowDown-3e0Y-526.js";import"./DateTimePicker-xOvMKEsv.js";import"./IconButton-f57bE0Tz.js";import"./ChevronBackward-BaD4ZkcE.js";import"./ChevronForward-CkT6jMu6.js";import"./Form-dD4EwKOq.js";import"./TextField-ColDGNB-.js";import"./FieldError-DOI3YoH4.js";import"./RadioGroup-yveveydw.js";import"./RichTextEditor-mwroNLTU.js";import"./Menu-DLu3hM0I.js";import"./Toolbar-DdD9CVYL.js";import"./Select-Cn35pWl_.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function jr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{jr as default};
