import{j as r}from"./iframe-BKjj90AX.js";import{useMDXComponents as i}from"./index-fK1bV3OM.js";import{M as e,C as m}from"./blocks-BNaR3whI.js";import{F as p,D as s}from"./Form.stories-DZPItQfK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfC-8zwp.js";import"./index-CQqQvl1z.js";import"./index-D_aTrX6k.js";import"./Button-cF1FIGpi.js";import"./utils-BQGmi-Gg.js";import"./ButtonBase-CEBwc4l7.js";import"./Loader-CJMd6EFT.js";import"./Tooltip-Dv4X8Hdv.js";import"./index-CH7xxPN0.js";import"./Button-D2FAtAKR.js";import"./FocusScope-D1KSZ3Js.js";import"./Text-B3lMB8qG.js";import"./usePress-sevdLkt9.js";import"./RSPContexts-DMIetZuf.js";import"./Separator-BaLphUo7.js";import"./VisuallyHidden-lh9Q8SKc.js";import"./Checkbox--SiAKXAI.js";import"./Check-CJ5aN-e4.js";import"./CheckIndeterminateSmall-_58-dGHD.js";import"./Form-PPT6U8sl.js";import"./useToggleState-AX04JU28.js";import"./useFormReset-DzOylLjz.js";import"./ComboBox-Bg4oTqEI.js";import"./SingleComboBox-BkhNxZdg.js";import"./ListBox-CCuuPQhv.js";import"./ListBox-YLWPjoZE.js";import"./DragAndDrop-C-rNiGwR.js";import"./useLabel-Bp8zyRi4.js";import"./Pill-DS72AxaO.js";import"./Input-aDyxqRAx.js";import"./SelectBase-ChcQSQTu.js";import"./sha256-DA-kmTof.js";import"./Label-D4owk67k.js";import"./index-ahp2oqBX.js";import"./Label-C2v2K1Ys.js";import"./variants-yCI5tnr_.js";import"./KeyboardArrowDown-Db9HMjK_.js";import"./DateTimePicker-puJTcOib.js";import"./IconButton-DeFAso3h.js";import"./ChevronBackward-kfg3Le3K.js";import"./ChevronForward-BklfNqfo.js";import"./Calendar-CV3fimRI.js";import"./Form-9WonkxdS.js";import"./ErrorMessage-CuJFGUyO.js";import"./PhoneNumberField-Ci48Q54W.js";import"./index-C7CL5OQ7.js";import"./TextField-ELnKCMBG.js";import"./Group-BydyQFHO.js";import"./FieldError-CT8UKnep.js";import"./useTextField-BpbjNyH_.js";import"./RadioGroup-Bc8cP7mw.js";import"./RichTextEditor-COR-yakR.js";import"./Modal-7DjZJfS5.js";import"./Select-COVRMDzE.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
