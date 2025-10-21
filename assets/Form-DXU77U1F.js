import{j as r}from"./iframe-67_K0vo3.js";import{useMDXComponents as i}from"./index-l_TNxZH2.js";import{M as e,C as m}from"./blocks-C8IuALUr.js";import{F as p,D as s}from"./Form.stories-CzFdM6mf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BFfw5jM8.js";import"./index-B5WsNQLD.js";import"./Button-l-yFLyGN.js";import"./utils-DfplCow1.js";import"./ButtonBase-DbFAWzAG.js";import"./Loader-CwbwO1Kf.js";import"./Tooltip-BcKPSMnw.js";import"./index-o3RzE2bW.js";import"./Button-DB-uOLp3.js";import"./FocusScope-BXogd-y6.js";import"./Hidden-BycuBkoX.js";import"./usePress-BQyPT91o.js";import"./RSPContexts-DtQGH2Lb.js";import"./Separator-kfzsjg1f.js";import"./Text-Cik04pvN.js";import"./VisuallyHidden-BNKN-uUU.js";import"./Checkbox-B1tAQ39c.js";import"./Check-BsON3I0V.js";import"./CheckIndeterminateSmall-DZdqw6Ps.js";import"./Form-DbKNJm7G.js";import"./useToggleState-Bv6IeWzO.js";import"./useFormReset-L8rOi5IY.js";import"./ComboBox-2OV9xC_b.js";import"./ListBox-BxRTSgIH.js";import"./ListBox-TpfM7QCC.js";import"./DragAndDrop-CnN-0uhu.js";import"./useLabel-BbVvf0uY.js";import"./Pill-8jSuI4QT.js";import"./Input-iK1GSnWq.js";import"./SelectBase-eFLSJYrD.js";import"./Label-BFHs-IQm.js";import"./index-DDxEkg14.js";import"./variants-CrlOlqhR.js";import"./KeyboardArrowDown-C4d9Wu5O.js";import"./DateTimePicker-DR7tMaMk.js";import"./IconButton-BJIr4-hU.js";import"./Calendar-BCYn6d7B.js";import"./ChevronBackward-D9Wu7eYG.js";import"./ChevronForward-BMPAWJj-.js";import"./Form-BAqmdDL9.js";import"./ErrorMessage-B3L7VGcx.js";import"./RadioGroup-BRDKFXIp.js";import"./FieldError-xIWiqhch.js";import"./RichTextEditor-Dt7kPfi9.js";import"./Menu-y4dyiXBN.js";import"./TableOutlined-B4Fx37D6.js";import"./Toolbar-B-xK-sSH.js";import"./Underline-CVIYjGnI.js";import"./Select-DnzTcggk.js";import"./TextField-B0tNOxHR.js";import"./Group-DcZd_7YW.js";import"./useTextField-CqlLt9ov.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
