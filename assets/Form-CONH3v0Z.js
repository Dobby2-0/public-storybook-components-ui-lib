import{j as r}from"./iframe-B8WK_zII.js";import{useMDXComponents as i}from"./index-BEbcRA00.js";import{M as e,C as m}from"./blocks-Ek6eckqA.js";import{F as p,D as s}from"./Form.stories-D02g7d5G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BYOlgLhF.js";import"./index-BmNgf0VY.js";import"./index-MaRCFGqk.js";import"./Button-DEdNYlto.js";import"./utils-Dqpu0TW_.js";import"./ButtonBase-BFdDKL6c.js";import"./Loader-Bo2GmnOf.js";import"./Tooltip-JXjobMRd.js";import"./index-CdOOFGGV.js";import"./Button-8LD7_4iX.js";import"./FocusScope-wYtpZu8X.js";import"./Text-BLwGK0ZO.js";import"./usePress-Bc5yF52P.js";import"./RSPContexts-DddIDbhf.js";import"./Separator-Drji3Xiq.js";import"./VisuallyHidden-Bm1wZh28.js";import"./Checkbox--aPvkPFv.js";import"./Check-CHRXt5UC.js";import"./CheckIndeterminateSmall-Cj01spVM.js";import"./Form-D2G7Q8fq.js";import"./useToggleState-lmX7RvPr.js";import"./useFormReset-Cwsq-NcE.js";import"./ComboBox-CYqA0aeB.js";import"./SingleComboBox-Dyedft87.js";import"./ListBox-euE45BxO.js";import"./ListBox-CfvTSnpi.js";import"./DragAndDrop-Bv1iAJNW.js";import"./useLabel-_Kt3u0JC.js";import"./Pill-Du97yir-.js";import"./Input-co45GT6d.js";import"./SelectBase-k9yaq1Yn.js";import"./sha256-DbcCNAtp.js";import"./Label-2yu8Ux-S.js";import"./index-DkxbiC72.js";import"./Label-BL5Hz1_x.js";import"./variants-DVKK_Y6m.js";import"./KeyboardArrowDown-Bn_1QEaL.js";import"./DateTimePicker-CrzFnoh8.js";import"./IconButton-CU5Uqaow.js";import"./ChevronBackward-BM5h6o3o.js";import"./ChevronForward-BQCcYH7S.js";import"./Calendar-DFWdsX56.js";import"./Form-AACMINPV.js";import"./ErrorMessage-zTtMIiuk.js";import"./PhoneNumberField-hi-wXkK9.js";import"./index-C7CL5OQ7.js";import"./TextField-DzPfXbZU.js";import"./Group-DM3i6BaV.js";import"./FieldError-C-vLJzhb.js";import"./useTextField-D797gwzT.js";import"./RadioGroup-CByN5B5M.js";import"./RichTextEditor-BRh3L-gK.js";import"./Modal-Dv9d_Bc-.js";import"./Select-cs5ddGKa.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
