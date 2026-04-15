import{j as r}from"./iframe-cTEz0bCF.js";import{useMDXComponents as i}from"./index-CuTDBKcj.js";import{M as e,C as m}from"./blocks-DR-BGhmS.js";import{F as p,D as s}from"./Form.stories-DPkJKjKX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CcwBWjJA.js";import"./index-CDANnZ-U.js";import"./index-DtuWzYyK.js";import"./Button-BuTvB2x_.js";import"./utils-C86d5PX9.js";import"./ButtonBase-Coxs2DBZ.js";import"./Loader-BKbFv0HZ.js";import"./Tooltip-D5TD-Rrh.js";import"./index-DFAyb7bz.js";import"./Button-Ok7T9XAA.js";import"./FocusScope-jxFZvl6T.js";import"./Text-CrXG44e1.js";import"./usePress-8Tl9jbTi.js";import"./RSPContexts-CrQOO1z_.js";import"./Separator-DLvBuDjd.js";import"./VisuallyHidden-6fkLuNLp.js";import"./Checkbox-BSqAl3jh.js";import"./Check-BQisiqJj.js";import"./CheckIndeterminateSmall-SaKhzg7z.js";import"./Form-D5P3_FZF.js";import"./useToggleState-CeH-IZHt.js";import"./useFormReset-BUUvJcsI.js";import"./ComboBox-b9xkF2Nz.js";import"./SingleComboBox-eBp03iMV.js";import"./ListBox-RG486XuS.js";import"./ListBox-BR1K5b4P.js";import"./DragAndDrop-C4sBlOeH.js";import"./useLabel-3tg4uJ6M.js";import"./Pill-CJDjViF3.js";import"./Input-DwNh0WV_.js";import"./SelectBase-BPzsACrx.js";import"./sha256-Cw29RLcO.js";import"./Label-BxNzbYqN.js";import"./index-BmuVQnOK.js";import"./Label-Da5c-COh.js";import"./variants-CKnZm4tz.js";import"./KeyboardArrowDown-BYmDJmpB.js";import"./DateTimePicker-CyM76thm.js";import"./IconButton-DmDWIZEW.js";import"./ChevronBackward-CX80esgJ.js";import"./ChevronForward-mazovom5.js";import"./Calendar-D-PlX-k3.js";import"./Form-BTDoUYwk.js";import"./ErrorMessage-iESg0kHK.js";import"./PhoneNumberField-CmNJi3yJ.js";import"./index-C7CL5OQ7.js";import"./TextField-ADJONiUa.js";import"./Group-D2JHcjJE.js";import"./FieldError-C10XNw_w.js";import"./useTextField-CIMOD1Bl.js";import"./RadioGroup-CVkoFlCR.js";import"./RichTextEditor-BYAMfXJG.js";import"./Modal-C9deD1wk.js";import"./Select-CUvax54L.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
