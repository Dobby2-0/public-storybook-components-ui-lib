import{j as r}from"./iframe-C_a4Gkrw.js";import{useMDXComponents as i}from"./index-CBEPKek0.js";import{M as e,C as m}from"./blocks-DZJtBg7d.js";import{F as p,D as s}from"./Form.stories-iG2cCLHT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bl4rPfcF.js";import"./index-CIZ1CI7H.js";import"./Button-QEdCP9_K.js";import"./utils--h9F20cq.js";import"./ButtonBase-Bnf7lv9Y.js";import"./Loader-DIMeN7KJ.js";import"./Tooltip-QjPG7mqh.js";import"./index-CGx-nm0a.js";import"./Button-Dvkxc8rW.js";import"./FocusScope-FY5DrnMd.js";import"./Hidden-5Vthnpa4.js";import"./usePress-BukzSSG8.js";import"./RSPContexts-Dk5NFcy1.js";import"./Separator-nikXjOg_.js";import"./Text-YCmlvS3e.js";import"./VisuallyHidden-ptHZAZuk.js";import"./Checkbox-z5R9WWX1.js";import"./Check-WY1da-IY.js";import"./Form-chhUrrMC.js";import"./useToggleState-CToKpcC8.js";import"./useFormReset-B5JMjsa9.js";import"./ComboBox-Nkiyf5xP.js";import"./ListBox-CKoVe0N8.js";import"./ListBox-5Iypm1et.js";import"./DragAndDrop-B99GXLse.js";import"./useLabel-Bs8xzy32.js";import"./Pill-D0pqyBBM.js";import"./Input-BExFzFeH.js";import"./SelectBase-CLjzib8T.js";import"./Label-CgMnuRQr.js";import"./index-DuvYghxQ.js";import"./variants-Da30ztd5.js";import"./KeyboardArrowDown-BGaN2xLD.js";import"./DateTimePicker-DmX7h6rw.js";import"./IconButton-6f0nht3E.js";import"./ChevronBackward-gk6OiL-X.js";import"./ChevronForward-BEbx21tt.js";import"./Form-BXuPGVPG.js";import"./ErrorMessage-Dhp9Fmvm.js";import"./RadioGroup-DpvgP-uz.js";import"./FieldError-D-gVGKiq.js";import"./RichTextEditor-BX0idfma.js";import"./Menu-CiARISXw.js";import"./Toolbar-Ba1sJbtk.js";import"./Select-NrVus9VU.js";import"./TextField-DBPNIyjL.js";import"./Group-6fgmWlyY.js";import"./useTextField-axGrlo5f.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
