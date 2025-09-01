import{j as r}from"./iframe-DyyyjyPW.js";import{useMDXComponents as i}from"./index-iI-_aD5m.js";import{M as e,C as m}from"./blocks-D16C0hoB.js";import{F as p,D as s}from"./Form.stories-DOWxO49v.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BaNO7KEt.js";import"./index-D1DR0edP.js";import"./Button-pjey5g1B.js";import"./utils-CSz4aXzB.js";import"./ButtonBase-BMpXP14U.js";import"./Loader-DxpGwVBw.js";import"./Tooltip-l2i8Zu72.js";import"./index-B5W-s-rI.js";import"./Button-CZ5F-stK.js";import"./FocusScope-CIj4bZRD.js";import"./Hidden-3UVVIbOO.js";import"./usePress-BpWlvfHO.js";import"./RSPContexts-lCk52PBb.js";import"./Separator-BC-0ngkc.js";import"./Text-BKuClZOX.js";import"./VisuallyHidden-CWPjPl7I.js";import"./Checkbox-Dr31Zg_Q.js";import"./Check-BHzRbmR_.js";import"./Form-DkfXqsKC.js";import"./useToggleState-qqT8ZzLM.js";import"./useFormReset-CVnVw2sV.js";import"./ComboBox-BbgqZDiy.js";import"./ListBox-BHqZo06u.js";import"./ListBox-BDL1ldzB.js";import"./DragAndDrop-oHsZow2E.js";import"./useLabel-DGpSL_32.js";import"./Pill-Dn3XsZIF.js";import"./Input-DuoEmSqm.js";import"./SelectBase-CpMb8Nns.js";import"./Label-BXo5FuW_.js";import"./index-B_Cov7To.js";import"./variants-Us7G1zn1.js";import"./KeyboardArrowDown-AeUocz4F.js";import"./DateTimePicker-D04hPjBG.js";import"./IconButton-4x3s1VcL.js";import"./ChevronBackward-DEH8fW-p.js";import"./ChevronForward-Be5A6eHA.js";import"./Form-CUd3OTw4.js";import"./ErrorMessage-CjPWiMp9.js";import"./RadioGroup-DnhXv8j3.js";import"./FieldError-D517u-nS.js";import"./RichTextEditor-V3O4Mc_C.js";import"./Menu-Bis92s80.js";import"./Toolbar-BVSO2fN5.js";import"./Select-DajIcrq9.js";import"./TextField-Ba89Hcr_.js";import"./Group-2pJGjHd7.js";import"./useTextField-6R3ft2rW.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
