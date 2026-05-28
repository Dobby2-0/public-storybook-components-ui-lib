import{j as r}from"./iframe-DtEeAOsY.js";import{useMDXComponents as i}from"./index-BxSdLMUL.js";import{M as e,C as m}from"./blocks-BLdVxhNm.js";import{F as p,D as s}from"./Form.stories-tfoEXYSd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMETJZIF.js";import"./index-DxBlrczG.js";import"./index-DSi8nGqe.js";import"./Button-BgXILaMl.js";import"./useHover-CDGgfiE1.js";import"./ButtonBase-lY8n4LNB.js";import"./Loader-B8XMVN5l.js";import"./Tooltip-BKfRHLdW.js";import"./index-DiE88bLl.js";import"./Button-BcJPzPMR.js";import"./SelectionIndicator-Ch86_HkK.js";import"./usePress-DAUHRHfO.js";import"./Text-CP_uTj70.js";import"./useCollection-DLgXqFLX.js";import"./VisuallyHidden-YL2KB_ox.js";import"./Autocomplete-Y1Zyi6W0.js";import"./Checkbox-BLNIskaK.js";import"./Check-_vR4CCIL.js";import"./CheckIndeterminateSmall-DkqyuTSj.js";import"./useFormValidation-0IDKEPmT.js";import"./useToggleState-dsi4wvA3.js";import"./useFormReset-DbJyZoQ4.js";import"./ComboBox-JinQvC28.js";import"./ComboBoxListBox-Ck57oYyB.js";import"./ListBox-BISCuuPn.js";import"./ListBox-DnHXL0QJ.js";import"./useLoadMoreSentinel-_2RwRX80.js";import"./useLabel-BVhVSlwk.js";import"./Pill-CqUtF4hW.js";import"./Input-DsWbMJtE.js";import"./SelectBase-B2KbgeKX.js";import"./Label-BemCfWFK.js";import"./index-DxFi0VvR.js";import"./Label-DNXJYxmR.js";import"./variants-DNhQPKTP.js";import"./KeyboardArrowDown-RUP8fZt6.js";import"./filter-persistence-D5UBtbDb.js";import"./sha256-CRGIGSgr.js";import"./DateTimePicker-x_be7xhi.js";import"./IconButton-c8sYRU-c.js";import"./ChevronBackward-Da4EYN-e.js";import"./ChevronForward-TWBAG5JP.js";import"./Calendar-Dk28PAhv.js";import"./Form-CuhYScy4.js";import"./ErrorMessage-Dkf8MFwt.js";import"./PhoneNumberField-Cs_haiyn.js";import"./index-C7CL5OQ7.js";import"./TextField-rrLRbGdG.js";import"./Group-DB_2ndLM.js";import"./useField-DHrn3HjU.js";import"./useTextField-DK5yU7LL.js";import"./RadioGroup-DUWGo367.js";import"./RichTextEditor-CjfZmzpz.js";import"./Modal-CTLMcu4H.js";import"./Select-l6Hru4hO.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
