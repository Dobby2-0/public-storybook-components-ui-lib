import{j as r}from"./iframe-mVs7rMXm.js";import{useMDXComponents as i}from"./index-BSyehMUD.js";import{M as e,C as m}from"./blocks-B6re59L7.js";import{F as p,D as s}from"./Form.stories-u-jdjFuE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bu1wuf1m.js";import"./index-syhJ53s_.js";import"./Button-CPOuuvI4.js";import"./utils-DzOfyjf1.js";import"./ButtonBase-C00KeHWZ.js";import"./Loader-C9o6Q5Zm.js";import"./Tooltip-D9vad0Hf.js";import"./index-BE-hz1XP.js";import"./Button-CP-6kYfK.js";import"./FocusScope-DDukxBSm.js";import"./Hidden-Dg6gXerV.js";import"./usePress-Bofozh85.js";import"./RSPContexts-C6xg6rec.js";import"./Separator-CF1OPFSd.js";import"./Text-CFRZXIUC.js";import"./VisuallyHidden-tTGrPe3d.js";import"./Checkbox-CwqRpgnZ.js";import"./Check-aEkzr57w.js";import"./CheckIndeterminateSmall-DOrZx7wj.js";import"./Form-AVCEi9L_.js";import"./useToggleState-BRNRVlo3.js";import"./useFormReset-Ceohc1Dx.js";import"./ComboBox-Bohe6Xkz.js";import"./ListBox-wpG0ndym.js";import"./ListBox-qL-1pntL.js";import"./DragAndDrop-BlRJmZn5.js";import"./useLabel-CG9d8bJ5.js";import"./Pill-fYwD8Z5I.js";import"./Input-DgLDsxiV.js";import"./SelectBase-DitrP2yD.js";import"./Label-D3Rl5VWx.js";import"./index-Dlgck1cG.js";import"./variants-DsAgtrSh.js";import"./KeyboardArrowDown-mwEvm4yI.js";import"./DateTimePicker-SPGOPzRR.js";import"./IconButton-BK1d3xQY.js";import"./ChevronBackward-D-TFlKkT.js";import"./ChevronForward-CX3XUPgX.js";import"./Calendar-K3qf-RyC.js";import"./Form-1t762_DZ.js";import"./ErrorMessage-DtCnOQhQ.js";import"./RadioGroup-DuamYO3C.js";import"./FieldError-BM2Tt3me.js";import"./RichTextEditor-BFKRYOg9.js";import"./Menu-DIH4VlbC.js";import"./TableOutlined-CJnJgXi0.js";import"./Toolbar-CEYY50np.js";import"./Underline-BsNcdyr0.js";import"./Select-DSkPQCGb.js";import"./TextField-DqtkoT9h.js";import"./Group-DbIGd4mj.js";import"./useTextField-DxtEvj3b.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
