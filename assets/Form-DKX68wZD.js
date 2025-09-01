import{j as r}from"./iframe-BqcKblBi.js";import{useMDXComponents as i}from"./index-CR6PCDAm.js";import{M as e,C as m}from"./blocks-DU7sUNdb.js";import{F as p,D as s}from"./Form.stories-c2tGa4Gi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-R_cTy1__.js";import"./index-emxsTlfv.js";import"./Button-BVZ7mQ6h.js";import"./utils-DPlDjJ5O.js";import"./ButtonBase-k_Kt_3GL.js";import"./Loader-BMn_kRmk.js";import"./Tooltip-CUapcDgL.js";import"./index-Boi9HhWc.js";import"./Button-DeFOO0Lh.js";import"./FocusScope-gQz_SxT8.js";import"./Hidden-4DgY0Q1V.js";import"./usePress-aKuOBIzZ.js";import"./RSPContexts-DVnvhv8j.js";import"./Separator-DuIJRbw9.js";import"./Text-sBPVHRUs.js";import"./VisuallyHidden-C_rQJDBX.js";import"./Checkbox-Bj9dDe0c.js";import"./Check-C6nVHFQT.js";import"./Form-CjVAbD2V.js";import"./useToggleState-C5vWfEIy.js";import"./useFormReset-BqIDpCSW.js";import"./ComboBox-BksDP86b.js";import"./ListBox-BAKd1VVs.js";import"./ListBox-BIvgrmdX.js";import"./DragAndDrop-5-AnToMP.js";import"./useLabel-CL7EEixm.js";import"./Pill-BR-kVewA.js";import"./Input-CDKsxF_s.js";import"./SelectBase-KwhGOBdU.js";import"./Label-DEnkq08m.js";import"./index-B9ampa91.js";import"./variants-BP86qRIf.js";import"./KeyboardArrowDown-CizO5cEK.js";import"./DateTimePicker-D_U_zxn_.js";import"./IconButton-BdQ8zdTy.js";import"./ChevronBackward-D5tWf6eG.js";import"./ChevronForward-MydA_5jn.js";import"./Form-CD2wWX89.js";import"./ErrorMessage-B4DJHUOm.js";import"./RadioGroup-D875mZPd.js";import"./FieldError-Br5Bn5rI.js";import"./RichTextEditor-D_z462o2.js";import"./Menu-Caq06_G4.js";import"./Toolbar-pLKT6G0d.js";import"./Select-H-Eonk3u.js";import"./TextField-Ckmh-aHf.js";import"./Group-bIHGXG1-.js";import"./useTextField-ZG0Cge3m.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function sr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{sr as default};
