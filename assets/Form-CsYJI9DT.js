import{j as r}from"./iframe-BtD0yojv.js";import{useMDXComponents as i}from"./index-Do2aDhtC.js";import{M as e,C as m}from"./blocks-DLTQHbOB.js";import{F as p,D as s}from"./Form.stories-Ct_K2MFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvT1PO7t.js";import"./index-CSLKQan_.js";import"./index-DwjBt-AS.js";import"./Button-BeKZJwGO.js";import"./useHover-BLqs48I6.js";import"./ButtonBase-Cqy9kFy0.js";import"./Loader-CkptIMZK.js";import"./Tooltip-dk5hc1rA.js";import"./index-Dj6M_dyv.js";import"./Button-DEtrjSXc.js";import"./SelectionIndicator-Cz8uM6x8.js";import"./usePress-Bs4ZcAYp.js";import"./Text-7llEMWV5.js";import"./useCollection-u0gpJYDj.js";import"./VisuallyHidden-DTwKOUCR.js";import"./Autocomplete-B3ysVGn7.js";import"./Checkbox-CogQ4QpH.js";import"./Check-B1d_Ml0Z.js";import"./CheckIndeterminateSmall-DcohJuBt.js";import"./useFormValidation-DKuKJjUF.js";import"./useToggleState-V1pLxfb8.js";import"./useFormReset-DsAJqu3D.js";import"./ComboBox-BPp1H168.js";import"./ComboBoxListBox-DgMAgCs4.js";import"./ListBox-2eJhA-jm.js";import"./ListBox-DNfm3oVS.js";import"./useLoadMoreSentinel-D_kMS8Vi.js";import"./useLabel-B87Ux1e3.js";import"./Pill-5vIfNsq1.js";import"./Input-BCAPiQWJ.js";import"./SelectBase-D9MHv8rl.js";import"./Label-B1HN9bsT.js";import"./index-C1oPBqtq.js";import"./Label-C5OwSjf_.js";import"./variants-CxBEkkHt.js";import"./KeyboardArrowDown-1LpwU3Gn.js";import"./filter-persistence-Hl5dXqtM.js";import"./sha256-D5DhjhLk.js";import"./DateTimePicker-BVF4nzkw.js";import"./IconButton-DRDDnqNF.js";import"./ChevronBackward-aRotAMlq.js";import"./ChevronForward-ECZRtGVh.js";import"./Calendar-DHNNANRc.js";import"./Form-BK95iPeB.js";import"./ErrorMessage-Bamm_xLA.js";import"./PhoneNumberField-CcgspXHQ.js";import"./index-C7CL5OQ7.js";import"./TextField-BG6emvFE.js";import"./Group-hV42MEkR.js";import"./useField-DV6dwu2Y.js";import"./useTextField-BNv6BX-4.js";import"./RadioGroup-mfzo0Klc.js";import"./RichTextEditor-XMu6InSt.js";import"./Modal-0VK87wNv.js";import"./Select-CkwYrgwO.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
