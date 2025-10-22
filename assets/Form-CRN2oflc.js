import{j as r}from"./iframe-K5ot193W.js";import{useMDXComponents as i}from"./index-r2-Gyapb.js";import{M as e,C as m}from"./blocks-CyEc9i4o.js";import{F as p,D as s}from"./Form.stories-Bknu-I0j.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B85NZ1GU.js";import"./index-CzpjyPtz.js";import"./Button-CNVb-Gv7.js";import"./utils-DoX2BHgw.js";import"./ButtonBase-BV6RYHwQ.js";import"./Loader-CVHVK9ew.js";import"./Tooltip-CxbMiB6J.js";import"./index-DWA_KCm8.js";import"./Button-CHWdOn-4.js";import"./FocusScope-CZ7OGJVT.js";import"./Hidden-D_8t15qI.js";import"./usePress-BJSAC4eU.js";import"./RSPContexts-BXwADtdt.js";import"./Separator-BZFXuRp1.js";import"./Text-uJi7ZI5y.js";import"./VisuallyHidden-C2KLU0fC.js";import"./Checkbox-BGMruPmk.js";import"./Check-KFr00HCo.js";import"./CheckIndeterminateSmall-B0qxdyYw.js";import"./Form-Drp19Z3y.js";import"./useToggleState-Cy1mpWWH.js";import"./useFormReset-BqiJdfC_.js";import"./ComboBox-BDdtx2-m.js";import"./ListBox-Cg7-tnFn.js";import"./ListBox-CZdW5w1q.js";import"./DragAndDrop-BMgy62lt.js";import"./useLabel-ndQ0b1Cw.js";import"./Pill-CQV5QYrs.js";import"./Input-Cg_ElqVt.js";import"./SelectBase-C0UE6gLY.js";import"./Label-EQWcOzQZ.js";import"./index-Ajp69JD3.js";import"./variants-BuPgxWU4.js";import"./KeyboardArrowDown-C92hH2cJ.js";import"./DateTimePicker-3fdEaoST.js";import"./IconButton-BB6Maibj.js";import"./Calendar-BFwlYNYF.js";import"./ChevronBackward-DWWLsjEA.js";import"./ChevronForward-BhG9xWP2.js";import"./Form-CGRE_Ldr.js";import"./ErrorMessage-Do7uotXR.js";import"./RadioGroup-I1eDLWUP.js";import"./FieldError-17N5RxLo.js";import"./RichTextEditor-DxcH3GAe.js";import"./Menu-zvLtjFo4.js";import"./TableOutlined-dZRRhKJ1.js";import"./Toolbar-DDYkYR5e.js";import"./Underline-B5xrc5xt.js";import"./Select-DHZ3NVe-.js";import"./TextField-DAwuR0ta.js";import"./Group-Dj2SECwg.js";import"./useTextField-tzeKTBqr.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
