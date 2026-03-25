import{j as r}from"./iframe-xl7C9gCw.js";import{useMDXComponents as i}from"./index-JTz77uY6.js";import{M as e,C as m}from"./blocks-5K730_tM.js";import{F as p,D as s}from"./Form.stories-Dq7lpgif.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSQJTg1U.js";import"./index-BU6HB7TO.js";import"./index-BkT8B2yE.js";import"./Button-Ckl0q2Bx.js";import"./utils-BiDm51pV.js";import"./ButtonBase-DPaWVYfy.js";import"./Loader-BcD18_fO.js";import"./Tooltip-Cfge-tCO.js";import"./index-Blu3z9r8.js";import"./Button-Bu8smok8.js";import"./FocusScope-D8isUGv_.js";import"./Text-D5cwUL8u.js";import"./usePress-DcFN7CSJ.js";import"./RSPContexts-DGNFCy2_.js";import"./Separator-SGpDRDiO.js";import"./VisuallyHidden-B30ztpjt.js";import"./Checkbox-BAAkBgzS.js";import"./Check-BIJ7VNCu.js";import"./CheckIndeterminateSmall-D7K1bDQz.js";import"./Form-Cq5-aKhG.js";import"./useToggleState-C2iHtod3.js";import"./useFormReset-Ba7ot4V-.js";import"./ComboBox-D_jU3OQV.js";import"./SingleComboBox-CxKL_l1N.js";import"./ListBox-CsH3e1KZ.js";import"./ListBox-MDE8MxP3.js";import"./DragAndDrop-MjG82j_W.js";import"./useLabel-BLN-Bu8o.js";import"./Pill-Bt2Z1N0V.js";import"./Input-BI1ns65x.js";import"./SelectBase-DtsqtTEr.js";import"./sha256-D61NtQu0.js";import"./Label-cFNOY9tj.js";import"./index-CGifAMzx.js";import"./Label-DuOqwUKe.js";import"./variants-B2atYsdl.js";import"./KeyboardArrowDown-m8VpCBjc.js";import"./DateTimePicker-BKtJI-MJ.js";import"./IconButton-Bh3I_lUN.js";import"./ChevronBackward-90i9ri3h.js";import"./ChevronForward-CtY-36LZ.js";import"./Calendar-CdMds-GL.js";import"./Form-ArfEygYt.js";import"./ErrorMessage-DS2REFx_.js";import"./PhoneNumberField-Dg1Go53d.js";import"./index-C7CL5OQ7.js";import"./TextField-DrRrrBV8.js";import"./Group-BjjdqKSE.js";import"./FieldError-Cfdsb0KT.js";import"./useTextField-BbUQZMzk.js";import"./RadioGroup-JCq0CIgO.js";import"./RichTextEditor-CsS6SXwm.js";import"./Modal-BZh4B78B.js";import"./Select-BLGPRRCS.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
