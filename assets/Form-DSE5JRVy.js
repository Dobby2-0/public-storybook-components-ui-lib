import{j as r}from"./iframe-B0a9GMrw.js";import{useMDXComponents as e}from"./index-q4k5uygc.js";import{M as i,C as m}from"./blocks-BuGOOCjA.js";import{F as s,D as p}from"./Form.stories-BVw7DeiS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxlCDQSx.js";import"./index-DP9z-vNA.js";import"./Button-BBC9FlZ9.js";import"./utils-BlolJK2S.js";import"./ButtonBase-DHD8ogZA.js";import"./Loader-gcht19on.js";import"./Tooltip-6n6n1h6L.js";import"./index-C7FuLVGs.js";import"./Button-Q-see15w.js";import"./FocusScope-Dl1YLnqN.js";import"./Hidden-BY-ibigr.js";import"./usePress-D65hLLaU.js";import"./RSPContexts-CzUxh-pQ.js";import"./Separator-C8_Wxzhd.js";import"./Text-DMH4P-bT.js";import"./VisuallyHidden-D4WtanT5.js";import"./Checkbox-BhYt4xrI.js";import"./Check-Nvwr8z2w.js";import"./Form-yQzYsaH_.js";import"./useToggleState-tZVQasKv.js";import"./useFormReset-C90Rq8eD.js";import"./ComboBox-Bd2ZZZXd.js";import"./ListBox-CVpZPEnB.js";import"./ListBox-D1g9srqw.js";import"./DragAndDrop-LkYqyx3-.js";import"./useLabel-DAYM8ldq.js";import"./Pill-CfHIqLbY.js";import"./Input-7qbkJzUg.js";import"./SelectBase-PXQpckUE.js";import"./Label-DFSww-7A.js";import"./index-BIvft4jJ.js";import"./variants-CnaErBT9.js";import"./KeyboardArrowDown-Cr-V6wKl.js";import"./DateTimePicker-DE5ix9p0.js";import"./IconButton-CudA5mIf.js";import"./ChevronBackward-CPRYRnM_.js";import"./ChevronForward-BnC3dem2.js";import"./Form-FsTc5Xk8.js";import"./ErrorMessage-CflkumxO.js";import"./FieldError-CE9IhZjN.js";import"./RadioGroup-43xykxpx.js";import"./RichTextEditor-SDBoSSTf.js";import"./Menu-D4bpk-5L.js";import"./Toolbar-5daa-w1c.js";import"./Select-BXjnxOyU.js";import"./TextField-Cf7HSJ0C.js";import"./Group-AXefmtid.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:p}),`
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
`})})]})}function sr(t={}){const{wrapper:o}={...e(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{sr as default};
