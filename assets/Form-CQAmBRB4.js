import{j as r}from"./iframe-BccIeXYJ.js";import{useMDXComponents as i}from"./index-CJ3i6aLh.js";import{M as e,C as m}from"./blocks-DMvpjiVs.js";import{F as p,D as s}from"./Form.stories-BI9Wxq6S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dq0KKVog.js";import"./index-CthuzfiD.js";import"./index-BWf-lzRM.js";import"./Button-BSDZ8XsJ.js";import"./utils-CWg1MI_0.js";import"./ButtonBase-BS4GoREK.js";import"./Loader-C56ooIx6.js";import"./Tooltip-0n4xlrG5.js";import"./index-gM2N2JqA.js";import"./Button-BmX0Fecl.js";import"./FocusScope-DRo1OA8S.js";import"./Text-JbBvxV2w.js";import"./usePress-CyXWm0W6.js";import"./RSPContexts-DfJ1h1dw.js";import"./Separator-d_YcbFBs.js";import"./VisuallyHidden-JDmYm14E.js";import"./Checkbox-COJw0mB4.js";import"./Check-D_3YCtSg.js";import"./CheckIndeterminateSmall-CbGSxol3.js";import"./Form-Bhkp7VDQ.js";import"./useToggleState-CC3Ngzoh.js";import"./useFormReset-BY55ONvP.js";import"./ComboBox-CBhB8a4y.js";import"./SingleComboBox-CgNd0l4M.js";import"./ListBox-zaXb-A12.js";import"./ListBox-DRfoEjEU.js";import"./DragAndDrop-Btu60dx2.js";import"./useLabel-CQZY_KZ_.js";import"./Pill-CN7N2C7R.js";import"./Input-Car_8ReK.js";import"./filter-persistence-LJUXGpgn.js";import"./Label-2-cPUpT6.js";import"./index-BJU3fRwX.js";import"./Label-Do0ALAK2.js";import"./variants-_tz0uNJg.js";import"./KeyboardArrowDown-CLSfJLjU.js";import"./sha256-CdeorE_s.js";import"./DateTimePicker-MQarDdzn.js";import"./IconButton-BDj58X9h.js";import"./ChevronBackward-CtpCW0_O.js";import"./ChevronForward-CW1CBQ6U.js";import"./Calendar-DT2LdLDl.js";import"./Form-onvOZ8IB.js";import"./ErrorMessage-DRy_Sv9x.js";import"./PhoneNumberField-BNnr9yzb.js";import"./index-C7CL5OQ7.js";import"./TextField-CCmewIra.js";import"./Group-sPXQscmY.js";import"./FieldError-HeuBXScc.js";import"./useTextField-Ce1lh86-.js";import"./RadioGroup-BH0-JEwG.js";import"./RichTextEditor-CBF8wQvd.js";import"./Modal-DNjfSsY5.js";import"./Select-Z5pr9AtG.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
