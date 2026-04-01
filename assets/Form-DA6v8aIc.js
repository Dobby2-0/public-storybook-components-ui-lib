import{j as r}from"./iframe-CclMH9VR.js";import{useMDXComponents as i}from"./index-BrStqqPZ.js";import{M as e,C as m}from"./blocks-D9Sbhg9l.js";import{F as p,D as s}from"./Form.stories-MFbtPOXO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwFyXgha.js";import"./index-BZEIGqvC.js";import"./index-BtyWfSph.js";import"./Button-BGiYZWoT.js";import"./utils-DJI4otPj.js";import"./ButtonBase-B3kH3Dzv.js";import"./Loader-D1v0GZVH.js";import"./Tooltip-DtBV07J9.js";import"./index-BfV2CO3M.js";import"./Button-DEkGiaJH.js";import"./FocusScope-BzOOSsDq.js";import"./Text-CLcNQ-qw.js";import"./usePress-CTnlVzrZ.js";import"./RSPContexts-DO8ewBZW.js";import"./Separator-_pJkmuEd.js";import"./VisuallyHidden-bBX73WO-.js";import"./Checkbox-DkUI7D6o.js";import"./Check-BaAWWL6Q.js";import"./CheckIndeterminateSmall-BANWNnhV.js";import"./Form-CLW0ei5f.js";import"./useToggleState-DjfuC6r0.js";import"./useFormReset-COqaC56L.js";import"./ComboBox-C4qMbfh0.js";import"./SingleComboBox-qxCbFlCE.js";import"./ListBox-BTdfh27r.js";import"./ListBox-ByrpE-RK.js";import"./DragAndDrop-BokVt44Y.js";import"./useLabel-C6ErH-yb.js";import"./Pill-CkGGkGFw.js";import"./Input-lwdSjEwT.js";import"./SelectBase-D0i3JSIG.js";import"./sha256-DKojpFWo.js";import"./Label-BAt6-cjz.js";import"./index-CpvlhjiP.js";import"./Label-D4SAJHly.js";import"./variants-njxxwcFl.js";import"./KeyboardArrowDown-XcSnIwax.js";import"./DateTimePicker-C_mMAE2I.js";import"./IconButton-CP_bCQBG.js";import"./ChevronBackward-DvZM91hO.js";import"./ChevronForward-La2bl6_q.js";import"./Calendar-DdaF2lC-.js";import"./Form-Nm0q3PMl.js";import"./ErrorMessage-D3cINjP3.js";import"./PhoneNumberField-BWhHTXuK.js";import"./index-C7CL5OQ7.js";import"./TextField-Bm1dF4_d.js";import"./Group-VjK_Di8t.js";import"./FieldError-B-RLIZh-.js";import"./useTextField-C2YKlTHq.js";import"./RadioGroup-DU9dkFz0.js";import"./RichTextEditor-ClLhZx57.js";import"./Modal-lbTsd41z.js";import"./Select-BYfjOkXB.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
