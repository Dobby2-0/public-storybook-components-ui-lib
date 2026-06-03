import{j as r}from"./iframe-DetaKL0_.js";import{useMDXComponents as i}from"./index-CclXEljx.js";import{M as e,C as m}from"./blocks-BV8Jt9kI.js";import{F as p,D as s}from"./Form.stories-Cs97sXtW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CW5rNLKP.js";import"./index-CPpoh3b8.js";import"./index-nSRzIFah.js";import"./Button-DzoXCd8v.js";import"./useHover-BeS5e-IQ.js";import"./ButtonBase-DkY4nu_S.js";import"./Loader-BRWONZMQ.js";import"./Tooltip-C4qWXyn2.js";import"./index-BLrhUFFZ.js";import"./Button-Czzx2GC3.js";import"./SelectionIndicator-C0c_pcIB.js";import"./usePress-CZ1xYj4q.js";import"./Text-ByQgp3qy.js";import"./useCollection-f1aOX4n3.js";import"./VisuallyHidden-DFs_nEgu.js";import"./Autocomplete-BqQtBmhO.js";import"./Checkbox-DiFXrzE1.js";import"./Check-mBRJ3Ynd.js";import"./CheckIndeterminateSmall-OwS3d9ZP.js";import"./useFormValidation-C0qnTNj7.js";import"./useToggleState-BNpndbsJ.js";import"./useFormReset-BafL5Rqy.js";import"./ComboBox-DkSaduUO.js";import"./ComboBoxListBox-DYwq1qKU.js";import"./ListBox-pXm3A-w4.js";import"./ListBox-CNtHPtqH.js";import"./useLoadMoreSentinel-XsYur6vV.js";import"./useLabel-C0Y-ULtJ.js";import"./Pill-okCtpVED.js";import"./Input-QJQCcvwh.js";import"./SelectBase-BuAOdrXd.js";import"./Label-BrRaIPZ6.js";import"./index-DxT66sOS.js";import"./Label-D0r_MkLv.js";import"./variants--GfA6NPc.js";import"./KeyboardArrowDown-cG2prr1O.js";import"./filter-persistence-Cp5hBmV8.js";import"./sha256-D9wVjpbe.js";import"./DateTimePicker-CFzX8wY7.js";import"./IconButton-DA4usfWX.js";import"./ChevronBackward-D14TUw3e.js";import"./ChevronForward-CkoO2upJ.js";import"./Calendar-BvtXseMy.js";import"./Form-oZg77pM8.js";import"./ErrorMessage-jObsdSFq.js";import"./PhoneNumberField-Bxt6MmOd.js";import"./index-C7CL5OQ7.js";import"./TextField-DSHsPFJY.js";import"./Group-C9m5cAlO.js";import"./useField-BVR6QcWw.js";import"./useTextField-DemaBpIG.js";import"./RadioGroup-D7WpBu9V.js";import"./RichTextEditor-nEXlepCg.js";import"./Modal-DcKphpuD.js";import"./Select-CHxuHWVa.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
