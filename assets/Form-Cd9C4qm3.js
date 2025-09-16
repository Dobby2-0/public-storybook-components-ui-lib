import{j as r}from"./iframe-0LLN9l3Z.js";import{useMDXComponents as i}from"./index-CXk9yvhs.js";import{M as e,C as m}from"./blocks-D6f6kSzE.js";import{F as p,D as s}from"./Form.stories-CiGpG8xG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-cnfJJ8Ux.js";import"./index-Cmpo3LKM.js";import"./Button-CBRK2hQh.js";import"./utils-BW2CTVz6.js";import"./ButtonBase-qolw6pfj.js";import"./Loader-Dfmm4Yus.js";import"./Tooltip-va0E0Ilx.js";import"./index-BJf-YNmV.js";import"./Button-DcvBNB63.js";import"./FocusScope-DOda7XJF.js";import"./Hidden-BhzXpgg9.js";import"./usePress-DnwYf67K.js";import"./RSPContexts-CShUAwbF.js";import"./Separator-CbCKTBDE.js";import"./Text-DztW01tk.js";import"./VisuallyHidden-H9CAakca.js";import"./Checkbox-DfShGDOy.js";import"./Check-BcPRi-qo.js";import"./CheckIndeterminateSmall-DRBBfVoP.js";import"./Form-BtPLslu0.js";import"./useToggleState-BDv8mbIK.js";import"./useFormReset-KS8hIDys.js";import"./ComboBox-271XSE45.js";import"./ListBox-D8XfZ4d3.js";import"./ListBox-YSEniD7O.js";import"./DragAndDrop-BKunK-nA.js";import"./useLabel-BpJ-w64t.js";import"./Pill-BfwKTOrq.js";import"./Input-DJYIvX6A.js";import"./SelectBase-B9oediCx.js";import"./Label-atFP0mxR.js";import"./index-BY7HP-sG.js";import"./variants-CWCxChzX.js";import"./KeyboardArrowDown-Cp5KdKAf.js";import"./DateTimePicker-Zv1yExvZ.js";import"./IconButton-D_ybDGK6.js";import"./Calendar-u2R56wu6.js";import"./ChevronBackward-DU5dDGEs.js";import"./ChevronForward-BXwdg6_G.js";import"./Form-BTc6CZW_.js";import"./ErrorMessage-C5yFMhQB.js";import"./RadioGroup-42PxCyXK.js";import"./FieldError-DfcofJpY.js";import"./RichTextEditor-I7jvk_lh.js";import"./Menu-BvJPic1K.js";import"./TableOutlined-DMUzc2tH.js";import"./Toolbar-Bc26ddrE.js";import"./Underline-AzS_Z8RR.js";import"./Select-aL70GJ6o.js";import"./TextField-CRSsJRap.js";import"./Group-4n0Ev8i5.js";import"./useTextField-DyfBwc9A.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
