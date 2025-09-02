import{j as r}from"./iframe-uvh5eEjR.js";import{useMDXComponents as i}from"./index-CKifLlYq.js";import{M as e,C as m}from"./blocks-CBsVqTAD.js";import{F as p,D as s}from"./Form.stories-gaG7_Okp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4TvyuAB.js";import"./index-BGNnMmgK.js";import"./Button-DbBcVXgk.js";import"./utils-BahAdPYD.js";import"./ButtonBase-Bul097Fc.js";import"./Loader-D5Xo917Q.js";import"./Tooltip-BPeUKBd-.js";import"./index-BjkaYagM.js";import"./Button-CAxi5Bg3.js";import"./FocusScope-Dg5P4nJf.js";import"./Hidden-DbX4vufo.js";import"./usePress-BWZZCjIo.js";import"./RSPContexts-DqdmP-qp.js";import"./Separator-B7rWc1qr.js";import"./Text-zKorpzjC.js";import"./VisuallyHidden-cyliJ2tQ.js";import"./Checkbox-C8Mk-K9O.js";import"./Check-DQNJDHse.js";import"./Form-LPpMQ7L0.js";import"./useToggleState-GCnn7kSr.js";import"./useFormReset-UIghNJkF.js";import"./ComboBox-3W0ahb1E.js";import"./ListBox-Bo8ttujh.js";import"./ListBox-CwAZ67HP.js";import"./DragAndDrop-D3y2a_2a.js";import"./useLabel-DN5Jqcby.js";import"./Pill-DzaSW77B.js";import"./Input-Cc-INvD7.js";import"./SelectBase-B5FvgjNc.js";import"./Label-BKXEOR65.js";import"./index-BBSOdNJu.js";import"./variants-do0j-hu_.js";import"./KeyboardArrowDown-Cp6BD8fy.js";import"./DateTimePicker-_vL5UG2A.js";import"./IconButton-OoQfWpOP.js";import"./ChevronBackward-Bi6N72HI.js";import"./ChevronForward-Bgnc9uGT.js";import"./Form-D04WH4LR.js";import"./ErrorMessage-RbVmD18t.js";import"./RadioGroup-DkAz9idt.js";import"./FieldError-B5N61oN4.js";import"./RichTextEditor-B1lOJIEp.js";import"./Menu-DtCnmB4Q.js";import"./Toolbar-wRgBVdEb.js";import"./Select-BdTegWrn.js";import"./TextField-ByivPpML.js";import"./Group-CKr0TW7I.js";import"./useTextField-COTD9xlb.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
