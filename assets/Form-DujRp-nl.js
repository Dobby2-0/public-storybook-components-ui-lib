import{j as r}from"./iframe-C_WUs4XI.js";import{useMDXComponents as i}from"./index-TxdMIpkk.js";import{M as e,C as m}from"./blocks-DcJENrsk.js";import{F as p,D as s}from"./Form.stories-BiF0Drgw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dqibsvss.js";import"./index-D36SMXzg.js";import"./index-bjnEn6Lg.js";import"./Button-DQZL8AGL.js";import"./useHover-B15IukXm.js";import"./ButtonBase-BnX1gMeh.js";import"./Loader-QA6ZLMQ1.js";import"./Tooltip-CcVVrW2g.js";import"./index-CTQmbPKJ.js";import"./Button-BjoSaiQy.js";import"./SelectionIndicator-BWNSr69i.js";import"./usePress-D35Eo-OG.js";import"./Text-uCzjv4Fa.js";import"./useCollection-CBCohlHa.js";import"./VisuallyHidden-CfBYuoy7.js";import"./Autocomplete-751aq7P5.js";import"./Checkbox-DQNjhOQW.js";import"./Check-BORt7e7q.js";import"./CheckIndeterminateSmall-CXVUxwqw.js";import"./useFormValidation-HyX2tOQ3.js";import"./useToggleState-DE--rpdD.js";import"./useFormReset-LPrGnNDj.js";import"./ComboBox-kWrnFD6w.js";import"./ComboBoxListBox-CmLVjEMc.js";import"./ListBox-Ct6a2lQ0.js";import"./ListBox-CHoqS192.js";import"./useLoadMoreSentinel-DbltEXMM.js";import"./useLabel-D7htvtBo.js";import"./Pill-DZALiA7v.js";import"./Input-vlrO8hpR.js";import"./SelectBase-Cg2DzNDv.js";import"./Label-D0RfzdSZ.js";import"./index-BqtOHJFZ.js";import"./Label-BAlkwqge.js";import"./variants-BMyk7QAG.js";import"./KeyboardArrowDown-3okSVq8N.js";import"./filter-persistence-EUj1Dnic.js";import"./sha256-BT08rnc_.js";import"./DateTimePicker-jxIvjYxh.js";import"./IconButton-W04ubT9o.js";import"./ChevronBackward-1sJvIA9G.js";import"./ChevronForward-BbybF_5e.js";import"./Calendar-CAus3aH9.js";import"./Form-DB9POXee.js";import"./ErrorMessage-DeDavaO9.js";import"./PhoneNumberField-j4uyM2n9.js";import"./index-C7CL5OQ7.js";import"./TextField-BnjLVGaq.js";import"./Group-CWo3LRm_.js";import"./useField-BlPUTVDa.js";import"./useTextField-DbUe0FJ1.js";import"./RadioGroup-Chv_79TP.js";import"./RichTextEditor-Bm5X4DSj.js";import"./Modal-6xyeBJr_.js";import"./Select-CY1yARBM.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
