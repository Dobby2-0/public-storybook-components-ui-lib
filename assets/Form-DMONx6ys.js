import{j as r}from"./iframe-BdY1lRWv.js";import{useMDXComponents as i}from"./index-ClFlHQtd.js";import{M as e,C as m}from"./blocks-CzbzmQZZ.js";import{F as p,D as s}from"./Form.stories-CdJFnB2i.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BgNhbYIB.js";import"./index-DbcGKh2p.js";import"./index-bgvXBjzW.js";import"./Button-CgQETFts.js";import"./useHover-CUBzInxu.js";import"./ButtonBase-BkieoQPY.js";import"./Loader-DyLWZ8ly.js";import"./Tooltip-BFDV1U_F.js";import"./index-Bt0DYN8D.js";import"./Button-75WWo8RZ.js";import"./SelectionIndicator-Br3bhGkL.js";import"./usePress-BPO2qokg.js";import"./Text-DqLy25td.js";import"./useCollection-C_dqDgBS.js";import"./VisuallyHidden-PL1ZH4Yq.js";import"./Autocomplete-BUXynPt5.js";import"./Checkbox-0tb4CCLe.js";import"./Check-C5TKfXp0.js";import"./CheckIndeterminateSmall-BPFBZUPJ.js";import"./useFormValidation-DBHnp4qE.js";import"./useToggleState-BRyIdB3u.js";import"./useFormReset-ChRdYRmt.js";import"./ComboBox-esUg8x4Y.js";import"./ComboBoxListBox-MN0qLKli.js";import"./ListBox-CwwQgXzD.js";import"./ListBox-X1ECuwpH.js";import"./useLoadMoreSentinel-IHDXAYgu.js";import"./useLabel-D0_JTdQy.js";import"./Pill-QShnpDHV.js";import"./Input-o7QD9QzU.js";import"./SelectBase-BIQzhu7a.js";import"./Label-Bg_ZWENv.js";import"./index-B8rcKNz3.js";import"./Label-B5iOlpn6.js";import"./variants-Bm_Nl-ge.js";import"./KeyboardArrowDown-k5MjzNLk.js";import"./filter-persistence-CJ6OG3Ov.js";import"./sha256-DPK43qvY.js";import"./DateTimePicker-l_1MhbqN.js";import"./IconButton-qvRMvz2t.js";import"./ChevronBackward-Y8R91jxj.js";import"./ChevronForward-6oNmOa2-.js";import"./Calendar-iqzV3_HB.js";import"./Form-9fS71Ej1.js";import"./ErrorMessage-DR1fIpfm.js";import"./PhoneNumberField-DkeblKJg.js";import"./index-C7CL5OQ7.js";import"./TextField-CDxJZc3W.js";import"./Group-C6DxabH6.js";import"./useField-C8amZsl4.js";import"./useTextField-C0R03Exw.js";import"./RadioGroup-BKiCj50U.js";import"./RichTextEditor-BWrcqJ4i.js";import"./Modal-xa85oAgZ.js";import"./Select-BXK0m0Vy.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
