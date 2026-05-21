import{j as r}from"./iframe-C3oNYoGv.js";import{useMDXComponents as i}from"./index-OCBbPWu6.js";import{M as e,C as m}from"./blocks-C6n-AM0Y.js";import{F as p,D as s}from"./Form.stories-J8_2wLEg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3rpGV-RY.js";import"./index-CGo15r6A.js";import"./index-DypK0npo.js";import"./Button-CVZiiT53.js";import"./useHover-DVKaX_QJ.js";import"./ButtonBase-DQ24H5Nv.js";import"./Loader-BS176VkB.js";import"./Tooltip-C0F-XsOI.js";import"./index-DE9NX_kI.js";import"./Button-BMxCuimO.js";import"./SelectionIndicator-DyF4S_O7.js";import"./usePress-D0IetYL2.js";import"./Text-DUmgebTj.js";import"./useCollection-BTVCbxvc.js";import"./VisuallyHidden-DY-Y6Z4l.js";import"./Autocomplete-bkept6zj.js";import"./Checkbox-SnN-dOrn.js";import"./Check-mAR_QMe4.js";import"./CheckIndeterminateSmall-DJ1q6x1x.js";import"./useFormValidation-ClCiYaDv.js";import"./useToggleState-E5TLLNYX.js";import"./useFormReset-BYO9-3k3.js";import"./ComboBox-DmoKFVF_.js";import"./ComboBoxListBox-P1NZekZC.js";import"./ListBox-U6sMwKS2.js";import"./ListBox-BvaKUkgI.js";import"./useLoadMoreSentinel-BDok7IrZ.js";import"./useLabel-C1EHHGsM.js";import"./Pill-C3sT1d7S.js";import"./Input-CcCJgG5A.js";import"./SelectBase-TPE-6p6R.js";import"./Label-CdQr_ZgJ.js";import"./index-D7Isqh1H.js";import"./Label-Bd9YHYxX.js";import"./variants-D78-o6ii.js";import"./KeyboardArrowDown-DONNFgEK.js";import"./filter-persistence-C0i969z8.js";import"./sha256-0xo2dyVX.js";import"./DateTimePicker-DLn6b4Z4.js";import"./IconButton-DwzHU2-V.js";import"./ChevronBackward-9OJhWDA1.js";import"./ChevronForward-sJWD8p4C.js";import"./Calendar-BegjVVGy.js";import"./Form-Danjh4HY.js";import"./ErrorMessage-Bp6T-4YM.js";import"./PhoneNumberField-Dhpro7eX.js";import"./index-C7CL5OQ7.js";import"./TextField-DEFjqA5S.js";import"./Group-BFyWf5Tj.js";import"./useField-CxksWPkt.js";import"./useTextField-DC42Zk97.js";import"./RadioGroup-Cobcnx1k.js";import"./RichTextEditor-DMAxtRpl.js";import"./Modal-CRbtAGAs.js";import"./Select-2f395rd5.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
