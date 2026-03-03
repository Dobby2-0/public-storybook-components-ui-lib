import{j as r}from"./iframe-6lxesJXe.js";import{useMDXComponents as i}from"./index-f2pddiZb.js";import{M as e,C as m}from"./blocks-aUQeukjR.js";import{F as p,D as s}from"./Form.stories-Bb2CHZ89.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IT_DEipb.js";import"./index-Bk40pPDF.js";import"./index-nGXsvdJd.js";import"./Button-CMIcWwz4.js";import"./utils-D5cTmwLp.js";import"./ButtonBase-B7nphERO.js";import"./Loader-Crey3ZaJ.js";import"./Tooltip-DUX6tjGG.js";import"./index-CggAXAEJ.js";import"./Button-RROMk7yE.js";import"./FocusScope-B6jOn45o.js";import"./Text-xq6GtQv3.js";import"./usePress-Bw_1WlNE.js";import"./RSPContexts-nN19f7_H.js";import"./Separator-BdI5KzeN.js";import"./VisuallyHidden-D_P_uBEx.js";import"./Checkbox-D2ih2pEU.js";import"./Check-Dbf1x4v0.js";import"./CheckIndeterminateSmall-onsIgO5z.js";import"./Form-BcmdTddz.js";import"./useToggleState-B44n4vep.js";import"./useFormReset-BhrfQh01.js";import"./ComboBox-DrKMWSMI.js";import"./SingleComboBox-DrMlb69M.js";import"./ListBox-Cm062_3Q.js";import"./ListBox-DDjcw90Z.js";import"./DragAndDrop-B9oOqKRL.js";import"./useLabel-DqPSay50.js";import"./Pill-CwRBKPJM.js";import"./Input-D3gn2LH4.js";import"./filter-persistence-BVkxVPo0.js";import"./Label-CxRfc1N0.js";import"./index-BWMWNlZX.js";import"./Label-DzJolZWC.js";import"./variants-B4uJD5Oj.js";import"./KeyboardArrowDown-CNiPFV1V.js";import"./sha256-Bz9xIbUs.js";import"./DateTimePicker-CyjUCMME.js";import"./IconButton-q1E0fQVA.js";import"./ChevronBackward-DeHVRZlM.js";import"./ChevronForward-BmlsAFjK.js";import"./Calendar-CzHvQdr2.js";import"./Form-DTAJMwJn.js";import"./ErrorMessage-Cbwmgazr.js";import"./PhoneNumberField-Z23bxmSF.js";import"./index-C7CL5OQ7.js";import"./TextField-D_XZrTO3.js";import"./Group-C78Axup6.js";import"./FieldError-B4qAHhAk.js";import"./useTextField-BDMi0L_8.js";import"./RadioGroup-CaF-hDuL.js";import"./RichTextEditor-CfZpP6ka.js";import"./Modal-CxS23DwT.js";import"./Select-UMLzof6U.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
