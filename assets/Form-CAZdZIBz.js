import{j as r}from"./iframe-BCvx5aIw.js";import{useMDXComponents as i}from"./index-D2vcSTHv.js";import{M as e,C as m}from"./blocks-B1OHBK-h.js";import{F as p,D as s}from"./Form.stories-DaR6t1NZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CV_sOKXw.js";import"./index-DOmqlDl7.js";import"./index-DTcX34cl.js";import"./Button-BSFY9fVT.js";import"./utils-DT55uSEz.js";import"./ButtonBase-DrZK1uMj.js";import"./Loader-DpWblGY1.js";import"./Tooltip-D-8X45XJ.js";import"./index-ChnMGnWF.js";import"./Button-C0e0lcau.js";import"./FocusScope-B5NpOBFv.js";import"./Text-CmDC0Fcx.js";import"./usePress-FVxBmJ3a.js";import"./RSPContexts-CDt80yYI.js";import"./Separator-DLrh4vZm.js";import"./VisuallyHidden-CO0T0OMH.js";import"./Checkbox-Cf-aWq7z.js";import"./Check-ByuJ0HYf.js";import"./CheckIndeterminateSmall-CFCFRjfA.js";import"./Form-BWRnBO_9.js";import"./useToggleState-DS2LZDdM.js";import"./useFormReset-CZmyIX8L.js";import"./ComboBox-CtNZBuSR.js";import"./SingleComboBox-C3DXQxSO.js";import"./ListBox-GNdrQN2B.js";import"./ListBox-DLrH3TOV.js";import"./DragAndDrop-BY2nA29y.js";import"./useLabel-3dDsEzBm.js";import"./Pill-DpPdkJjw.js";import"./Input-CeixJ7Hd.js";import"./SelectBase-Le4Pmjiv.js";import"./sha256-D06PZJCe.js";import"./Label-Dl_LIg0c.js";import"./index-04bXVge4.js";import"./Label-0n7RcqQx.js";import"./variants-BFTN77EB.js";import"./KeyboardArrowDown-Co9IMZ31.js";import"./DateTimePicker-50ngKIwj.js";import"./IconButton-C2bEEDI6.js";import"./ChevronBackward-DWWPZS4i.js";import"./ChevronForward-myCD3y13.js";import"./Calendar-CVpICZ-C.js";import"./Form-DZIcutLN.js";import"./ErrorMessage-CLiL9736.js";import"./PhoneNumberField-ZfF7XQr6.js";import"./index-C7CL5OQ7.js";import"./TextField-BRVqlgQT.js";import"./Group-BnqbOEU3.js";import"./FieldError-jcW9qPng.js";import"./useTextField-D-Gq8A37.js";import"./RadioGroup-BO1jCiox.js";import"./RichTextEditor-DWPBIZPL.js";import"./Modal-DXVYfh5D.js";import"./Select-Cy0m9gdW.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
