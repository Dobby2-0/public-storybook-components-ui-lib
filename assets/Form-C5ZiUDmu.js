import{j as r}from"./iframe-BxGeAW9p.js";import{useMDXComponents as i}from"./index-dEvKeEXW.js";import{M as e,C as m}from"./blocks-CUpqnVgV.js";import{F as p,D as s}from"./Form.stories-n9SnEm9I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtuOhIc3.js";import"./index--AFMggx_.js";import"./Button-CJRC7oad.js";import"./utils-BpDgISYU.js";import"./ButtonBase-DC_baRV4.js";import"./Loader-DD5z-3No.js";import"./Tooltip-HtiexWLj.js";import"./index-V1hUTO1d.js";import"./Button-Dgs9X42X.js";import"./FocusScope-BU3wNYAC.js";import"./Hidden-DpUWF-xQ.js";import"./usePress-BVO8P9dy.js";import"./RSPContexts-DD-n8dG3.js";import"./Separator-Bwvs0j6P.js";import"./Text-BMECbb0g.js";import"./VisuallyHidden-Dzm5wi_8.js";import"./Checkbox-DXI8YhCF.js";import"./Check-CSYQRTfY.js";import"./CheckIndeterminateSmall-CMsEIGkP.js";import"./Form-DB_k8Hye.js";import"./useToggleState-D4YXSt7m.js";import"./useFormReset-CzoGgTtV.js";import"./ComboBox-BuK-YfQI.js";import"./ListBox-DFmQTbtx.js";import"./ListBox-C-ckbFzp.js";import"./DragAndDrop-P6TRunS2.js";import"./useLabel-CnRqF9Wz.js";import"./Pill-CvVKW5vh.js";import"./Input-Bh4Wq3m-.js";import"./SelectBase-BNh1Yrvg.js";import"./Label-CfcCawkw.js";import"./index-BaZxuM5r.js";import"./variants-Ce9e1EgG.js";import"./KeyboardArrowDown-C6-uloT1.js";import"./DateTimePicker-Bp2eCN--.js";import"./IconButton-CvcJAtJU.js";import"./Calendar-BNscTR74.js";import"./ChevronBackward-D2eDdzP9.js";import"./ChevronForward-BhtsyZeJ.js";import"./Form-aacL6r_B.js";import"./ErrorMessage-BXDCdVoS.js";import"./RadioGroup-D_ZiXwtt.js";import"./FieldError-BbuYy8qq.js";import"./RichTextEditor-DoXhwzAq.js";import"./Menu-DgOqzc5u.js";import"./TableOutlined-C-877SM1.js";import"./Toolbar-BtcVjZiR.js";import"./Underline-BPqBx3hN.js";import"./Select-BK23bhKt.js";import"./TextField-F8Ep70by.js";import"./Group-DVvQme59.js";import"./useTextField-pVD0KfS4.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
