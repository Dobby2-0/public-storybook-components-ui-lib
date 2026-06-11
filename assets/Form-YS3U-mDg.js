import{j as r}from"./iframe-D2frS8Au.js";import{useMDXComponents as i}from"./index-CtdaUi-A.js";import{M as e,C as m}from"./blocks-Br5nVMBu.js";import{F as p,D as s}from"./Form.stories-B9aLLrRw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRD6RS15.js";import"./index-zyLV6FUX.js";import"./index-BC_OFc4B.js";import"./Button-DmGFltXj.js";import"./useHover-DYO4x4Gp.js";import"./ButtonBase-Dzf8z55z.js";import"./Loader-DS9ZjgpV.js";import"./Tooltip-DN16hxLp.js";import"./index-BSC9xO6Q.js";import"./Button-4q-u3Eq1.js";import"./SelectionIndicator-BNK84zg9.js";import"./usePress-CNDDzhH8.js";import"./Text-DXPLpS9a.js";import"./useCollection-P5am-mv3.js";import"./VisuallyHidden-CEPXGV9t.js";import"./Autocomplete-nkGLWQyL.js";import"./Checkbox-DVfewqcr.js";import"./Check-DGc1qmvX.js";import"./CheckIndeterminateSmall-Dy41791n.js";import"./useFormValidation-BFsAlWOt.js";import"./useToggleState-DvO545qK.js";import"./useFormReset-Bvmmvv_S.js";import"./ComboBox-ZSS83DXW.js";import"./ComboBoxListBox-D1ahboDu.js";import"./ListBox-wrXRWc4v.js";import"./ListBox-B82J47RM.js";import"./useLoadMoreSentinel-CIncdtsp.js";import"./useLabel-IOUK4MD-.js";import"./Pill-CIzJvcvy.js";import"./Input-BYjRnERn.js";import"./SelectBase-BImg2GPW.js";import"./Label-CcCfPh60.js";import"./index-C6XEncsV.js";import"./Label-D83qOpUB.js";import"./variants-BZSjgDoh.js";import"./KeyboardArrowDown-CxrsIPye.js";import"./filter-persistence-B4sr0-YL.js";import"./sha256-E9qCjXim.js";import"./DateTimePicker-DfkjQfzv.js";import"./IconButton-DVc9UFQX.js";import"./ChevronBackward-DoKY6bm1.js";import"./ChevronForward-CBCVpyTg.js";import"./Calendar-CgqK3Mm2.js";import"./Form-Dw3YkBvC.js";import"./ErrorMessage-DuNGHs53.js";import"./PhoneNumberField-BoJbxy8t.js";import"./index-C7CL5OQ7.js";import"./TextField-BvqTZvV8.js";import"./Group-Bm-kKwd5.js";import"./useField-BWcYcy_h.js";import"./useTextField-DX-kFRbU.js";import"./RadioGroup-DuNWVIgW.js";import"./RichTextEditor-C-NWwiXc.js";import"./Modal-CiKZ_b66.js";import"./Select-7E1_mUAL.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
