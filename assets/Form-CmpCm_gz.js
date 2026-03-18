import{j as r}from"./iframe-BVZZrLbX.js";import{useMDXComponents as i}from"./index-DfX4FgRS.js";import{M as e,C as m}from"./blocks-DSOqeA_N.js";import{F as p,D as s}from"./Form.stories-pPbdhLDG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DF40OkAO.js";import"./index-CK3a23VT.js";import"./index-D8yeUgeq.js";import"./Button-B4NEtBdp.js";import"./utils-BdEMMVT-.js";import"./ButtonBase-CS6Y7RiX.js";import"./Loader-D0TFhHeG.js";import"./Tooltip-DHnuRUaq.js";import"./index-BG8zUkYe.js";import"./Button-oyaftNg4.js";import"./FocusScope-BXnbZ4SY.js";import"./Text-C_Ydk97q.js";import"./usePress-OB7sJeR5.js";import"./RSPContexts-Du42P4SP.js";import"./Separator-D0LP8bN8.js";import"./VisuallyHidden-CmSKDok9.js";import"./Checkbox-qbcVJQCD.js";import"./Check-CEGhiEFp.js";import"./CheckIndeterminateSmall-Dw2w607f.js";import"./Form-C_QjtcIs.js";import"./useToggleState-5eJoECNb.js";import"./useFormReset-Dy0CA6_T.js";import"./ComboBox-B0q4DQuK.js";import"./SingleComboBox-bJlZg3y4.js";import"./ListBox-VWjkn-gp.js";import"./ListBox-C8rCUxAL.js";import"./DragAndDrop-BaBwknD7.js";import"./useLabel-Bvfbdk0N.js";import"./Pill-C-yacwQp.js";import"./Input-Bed3WrC9.js";import"./SelectBase-C3IBsqmW.js";import"./sha256-BO7Kz9ND.js";import"./Label-Kx-ew8WR.js";import"./index-Cpu3EwYT.js";import"./Label-0joLOm83.js";import"./variants-MOwtaZQ0.js";import"./KeyboardArrowDown-Bwjhzvrj.js";import"./DateTimePicker-B8awf7JE.js";import"./IconButton-BRy-fHb8.js";import"./ChevronBackward-ChVUp7E8.js";import"./ChevronForward-c-QXi3tF.js";import"./Calendar-cq7QYR-f.js";import"./Form-BZQ1AmKj.js";import"./ErrorMessage-CzhlxgUu.js";import"./PhoneNumberField-B0qS80Xt.js";import"./index-C7CL5OQ7.js";import"./TextField-Cp6u17Ie.js";import"./Group-Dx6dwJL2.js";import"./FieldError-BuOd1yPh.js";import"./useTextField-CBnLfjKG.js";import"./RadioGroup-B2TXa42w.js";import"./RichTextEditor-CsXAmGli.js";import"./Modal-D4z8nUAy.js";import"./Select-BA4hY4hS.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
