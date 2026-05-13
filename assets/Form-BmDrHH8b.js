import{j as r}from"./iframe-BAQ0DjCI.js";import{useMDXComponents as i}from"./index-BsuQkjrd.js";import{M as e,C as m}from"./blocks-CECBf-Mv.js";import{F as p,D as s}from"./Form.stories-ZhyM3YBZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DzM-VVgi.js";import"./index-C5f_Uul5.js";import"./index-hOmPybqj.js";import"./Button-BkD8RFuk.js";import"./useHover-noAsqcmg.js";import"./ButtonBase-CQewh0V0.js";import"./Loader-UropCMn-.js";import"./Tooltip-DqtukSgz.js";import"./index-DgvE8W-k.js";import"./Button-DFrgVfZc.js";import"./SelectionIndicator-Dm7cXaUy.js";import"./usePress-goLcaebY.js";import"./Text-DNqYLHy3.js";import"./useCollection-BfDkc_8w.js";import"./VisuallyHidden-_I1qh5Yt.js";import"./Autocomplete-BIv1BR8S.js";import"./Checkbox-CvnWUOvn.js";import"./Check-C-ERZWtA.js";import"./CheckIndeterminateSmall-DiaDNW6x.js";import"./useFormValidation-DPpD8car.js";import"./useToggleState-CYZjNh8U.js";import"./useFormReset-DS9CFbNB.js";import"./ComboBox-9ycpVxge.js";import"./ComboBoxListBox-DjBca7SK.js";import"./ListBox-UEkoilAl.js";import"./ListBox-D8GDRhOv.js";import"./useLoadMoreSentinel-DDUZ1SDw.js";import"./useLabel-CKcYlPW0.js";import"./Pill-CvYX4UDN.js";import"./Input-BhVa_KpZ.js";import"./SelectBase-CO1RqhJq.js";import"./Label-BIkktwhU.js";import"./index-CK_AUu5f.js";import"./Label-BMg5cfLy.js";import"./variants-TexM51uW.js";import"./KeyboardArrowDown-3h23_Znu.js";import"./filter-persistence--K9j3VCY.js";import"./sha256-B350m-06.js";import"./DateTimePicker-CyUg-wLs.js";import"./IconButton-BzwgzofJ.js";import"./ChevronBackward-DJpzkLg5.js";import"./ChevronForward-BqR98S9G.js";import"./Calendar-BAbJZQ49.js";import"./Form-Bj0alELD.js";import"./ErrorMessage-DO8G4KgV.js";import"./PhoneNumberField-BKtGBLmf.js";import"./index-C7CL5OQ7.js";import"./TextField-yOnHLKCU.js";import"./Group-BPkRcolb.js";import"./useField-D7OY_1X2.js";import"./useTextField-BLpJMnod.js";import"./RadioGroup-C0J-Ijoo.js";import"./RichTextEditor-ie4OyJ9Q.js";import"./Modal-DC67ttHi.js";import"./Select-5Zlkbgil.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
