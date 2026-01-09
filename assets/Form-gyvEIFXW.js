import{j as r}from"./iframe-BF_KP_hN.js";import{useMDXComponents as i}from"./index-DUIJIkxQ.js";import{M as e,C as m}from"./blocks-CoGZtQV3.js";import{F as p,D as s}from"./Form.stories-D9yNlthL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-I7XzL5DF.js";import"./index-DWPRwdrc.js";import"./index-MQ1ttWeg.js";import"./Button-CoLGA88s.js";import"./utils-BqpmhFVW.js";import"./ButtonBase-VG-Brf1y.js";import"./Loader-DoBWafIM.js";import"./Tooltip-BUH1OzVl.js";import"./index-7WMUdYsb.js";import"./Button-yFbSCyNo.js";import"./FocusScope-4pytHGpx.js";import"./Text-mk_HzVZA.js";import"./usePress-fc5pKrNj.js";import"./RSPContexts-BOzgkn97.js";import"./Separator-C6fCfvQY.js";import"./VisuallyHidden-DE-molTm.js";import"./Checkbox-6WeCW9x2.js";import"./Check-DLqghWKL.js";import"./CheckIndeterminateSmall-CLX2-bur.js";import"./Form-I-lBGkuI.js";import"./useToggleState-ZMJVyjVW.js";import"./useFormReset-CrtlIz-r.js";import"./ComboBox-BM71sC1H.js";import"./SingleComboBox-BKlTeZgJ.js";import"./ListBox-l4qOsAbP.js";import"./ListBox-DjHcsfaC.js";import"./DragAndDrop-D9NQ6c3Q.js";import"./useLabel-Cu4eK06_.js";import"./Pill-G3LSHrcB.js";import"./Input-DgSKj3W9.js";import"./SelectBase-DVmpqj5t.js";import"./Label-6_OGEEE6.js";import"./index-CODvd-3F.js";import"./Label-BqrROEg6.js";import"./variants-Dx_--Ifz.js";import"./KeyboardArrowDown-C3H7Ffdt.js";import"./DateTimePicker-D-zRtBmG.js";import"./IconButton-DfeYdlPD.js";import"./ChevronBackward-Dk1G718w.js";import"./ChevronForward-BzxLaZv1.js";import"./Calendar-uQBN0bwR.js";import"./Form-WKsmnKk9.js";import"./ErrorMessage-D_mC8aDW.js";import"./PhoneNumberField-C-Xo3llq.js";import"./index-C7CL5OQ7.js";import"./TextField-pP0QQzgz.js";import"./Group-DelFWukP.js";import"./FieldError-DUMDqtzu.js";import"./useTextField-6YlrZ1jG.js";import"./RadioGroup-Dq8Wqqnm.js";import"./RichTextEditor-CUhDUCW6.js";import"./Modal-B88TCYNA.js";import"./Select-DRI7tnEW.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function hr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{hr as default};
