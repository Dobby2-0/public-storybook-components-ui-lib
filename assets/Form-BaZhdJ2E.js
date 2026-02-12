import{j as r}from"./iframe-BpFVLOfy.js";import{useMDXComponents as i}from"./index-CbFL1WNk.js";import{M as e,C as m}from"./blocks-BktAMEtY.js";import{F as p,D as s}from"./Form.stories-DcwPmlq-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CmI5jeNL.js";import"./index-B6g7O1-7.js";import"./index-xSmDOPsl.js";import"./Button-BUYxwJJf.js";import"./utils-CD-49kjx.js";import"./ButtonBase-CURKgOs4.js";import"./Loader-ClVzWJEc.js";import"./Tooltip-CBOLfhLO.js";import"./index-t2cyNmbH.js";import"./Button-DilksvR7.js";import"./FocusScope-DqHE47eE.js";import"./Text-xYsyjKIG.js";import"./usePress-DdWpwWve.js";import"./RSPContexts-BYEedYfM.js";import"./Separator-GBcK2eor.js";import"./VisuallyHidden-42luShXM.js";import"./Checkbox-DxP3M-u8.js";import"./Check-DFAgOga4.js";import"./CheckIndeterminateSmall-CchSe1QP.js";import"./Form-C7mMO57V.js";import"./useToggleState-bVFOZVne.js";import"./useFormReset-HsepBMAI.js";import"./ComboBox-de9_kVfe.js";import"./SingleComboBox-C0da2UX5.js";import"./ListBox-ByoWIHnU.js";import"./ListBox-CmrdpSOI.js";import"./DragAndDrop-WIL6PKSY.js";import"./useLabel-CyuIsgI6.js";import"./Pill-BeVljGVh.js";import"./Input-DPrBOPgr.js";import"./filter-persistence-BWNtMiTO.js";import"./Label-DNfrVbYC.js";import"./index-stOC9Ljn.js";import"./Label-gmZMiyak.js";import"./variants-83REr8-v.js";import"./KeyboardArrowDown-BriR5AZv.js";import"./sha256-DnX9CJec.js";import"./DateTimePicker-BupHZYKT.js";import"./IconButton-DhYKlVMV.js";import"./ChevronBackward-B6cGKDpv.js";import"./ChevronForward-i_uTagyH.js";import"./Calendar-Cqpri1fw.js";import"./Form-CQrMqyyo.js";import"./ErrorMessage-qScF5XIJ.js";import"./PhoneNumberField-UAl-kEzF.js";import"./index-C7CL5OQ7.js";import"./TextField-BkV5ayR7.js";import"./Group-CXbxXz99.js";import"./FieldError-B7ODN9Kk.js";import"./useTextField-DDKCmkFF.js";import"./RadioGroup-D7XseCuA.js";import"./RichTextEditor-CUvbmA5P.js";import"./Modal-Dy7wmDz5.js";import"./Select-UgxugMl6.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
