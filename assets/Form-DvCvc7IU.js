import{j as r}from"./iframe-BSmYXjVO.js";import{useMDXComponents as i}from"./index-DQvFjHQY.js";import{M as e,C as m}from"./blocks-DEgvj9aL.js";import{F as p,D as s}from"./Form.stories-DB2heuq1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-klIopXI3.js";import"./index-CEhufqlP.js";import"./Button-BLqrtYZU.js";import"./utils-BsIxPqYP.js";import"./ButtonBase-WpTy9jlr.js";import"./Loader-JBqYW2zh.js";import"./Tooltip-ZW5uaDNE.js";import"./index-DYbrKbtf.js";import"./Button-mBgBOGbs.js";import"./FocusScope-4rN7mK0_.js";import"./Hidden-Dj1-P9z-.js";import"./usePress-DuBZEVvs.js";import"./RSPContexts-CjqPehn9.js";import"./Separator-DebHZQk6.js";import"./Text-DXRU8ZkD.js";import"./VisuallyHidden-CwV5N5lw.js";import"./Checkbox-BYdU9cUq.js";import"./Check-0b-MQdoX.js";import"./CheckIndeterminateSmall-DSZWPga6.js";import"./Form-DZcEGmYa.js";import"./useToggleState--5hgrE61.js";import"./useFormReset-BZpcX0Tf.js";import"./ComboBox-D5zanUZL.js";import"./ListBox-BP8Mbn4a.js";import"./ListBox-Cb5_7k3s.js";import"./DragAndDrop-w1XgXqIx.js";import"./useLabel-CB5Ub93p.js";import"./Pill-BWELfylc.js";import"./Input-CLA21uk0.js";import"./SelectBase-KO-8fW3H.js";import"./Label-9tWRThww.js";import"./index-B5w_pHEv.js";import"./variants-BV_0hRIg.js";import"./KeyboardArrowDown-DaDLg03S.js";import"./DateTimePicker-Ciydsepy.js";import"./IconButton-DEo46tnU.js";import"./ChevronBackward-BhZ6Rr1B.js";import"./ChevronForward-Dc0SaTwU.js";import"./Calendar-DxGO6kdO.js";import"./Form-dENyJTWg.js";import"./ErrorMessage-DEuDx2bQ.js";import"./RadioGroup-Fwe839py.js";import"./FieldError-B8vAZTvc.js";import"./RichTextEditor-D7s0TuQK.js";import"./Modal-DP2Gjopr.js";import"./Select-dXyQ6Rkn.js";import"./TextField-ZKfOoF18.js";import"./Group-Bp4bOdtF.js";import"./useTextField-BIxKTWEp.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ar(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ar as default};
