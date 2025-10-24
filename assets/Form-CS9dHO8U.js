import{j as r}from"./iframe-CAUhewdO.js";import{useMDXComponents as i}from"./index-Dcr19jIz.js";import{M as e,C as m}from"./blocks-BcS7LMIu.js";import{F as p,D as s}from"./Form.stories-C3c3adju.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSJujp_2.js";import"./index-DWLQBFH_.js";import"./Button-BySXEmg_.js";import"./utils-_cLWaf_5.js";import"./ButtonBase-BKz8XeI0.js";import"./Loader-D6_--q1w.js";import"./Tooltip-BU5WJX2U.js";import"./index-DDtjrfmB.js";import"./Button-XKzsS0Io.js";import"./FocusScope-B_CxtKkP.js";import"./Hidden-DMFyPc0q.js";import"./usePress-DjnbvC3G.js";import"./RSPContexts-CQOdqGct.js";import"./Separator-DOGuvkEA.js";import"./Text-Btn9TMH9.js";import"./VisuallyHidden-ppH9XbU_.js";import"./Checkbox-CJY4KqPj.js";import"./Check-DiNwzedm.js";import"./CheckIndeterminateSmall-CY3JozPS.js";import"./Form-CXb2tD-6.js";import"./useToggleState-B1RXAASj.js";import"./useFormReset-Cw58spRm.js";import"./ComboBox-Be31HobG.js";import"./ListBox-CJWFjdSt.js";import"./ListBox-CJ0d9-s8.js";import"./DragAndDrop-Bw77P5-E.js";import"./useLabel-B4ncvW39.js";import"./Pill-kKa5Dc87.js";import"./Input-J8ywhy-Z.js";import"./SelectBase-2858UH-H.js";import"./Label-Bat42nNs.js";import"./index-BMOJF3qq.js";import"./variants-BpdPj6vu.js";import"./KeyboardArrowDown-G4aPy6OS.js";import"./DateTimePicker-DBixZpUz.js";import"./IconButton-DDv16iZI.js";import"./ChevronBackward-DqV1BmZN.js";import"./ChevronForward-IdfGPmJF.js";import"./Calendar-2C4wy8NQ.js";import"./Form-Cs2AJsuE.js";import"./ErrorMessage-CqLth6kg.js";import"./RadioGroup-BRpVxXKw.js";import"./FieldError-DXO4jIiZ.js";import"./RichTextEditor-CmOmTqQp.js";import"./Menu-REC-QWvb.js";import"./TableOutlined-BqT9vnZE.js";import"./Toolbar-B47EPvEl.js";import"./Underline-A-aUs3-8.js";import"./Select-C_3XQmy6.js";import"./TextField-DaQL9SRB.js";import"./Group-DHsoyTzE.js";import"./useTextField-BefBnetK.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
