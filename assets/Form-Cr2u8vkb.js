import{j as r}from"./iframe-BiaKCnFg.js";import{useMDXComponents as i}from"./index-BoirPNyZ.js";import{M as e,C as m}from"./blocks-DjC44FPv.js";import{F as p,D as s}from"./Form.stories-CB81dUOa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuyXEN_o.js";import"./index-DS6qTNge.js";import"./index-D6yxA-bS.js";import"./Button-0stNLDql.js";import"./useHover-D9DS5yA7.js";import"./ButtonBase-CLRY0Lb3.js";import"./Loader-ClTVtDl4.js";import"./Tooltip-CTBiM07k.js";import"./index-CSrwbFWy.js";import"./Button-WvY0-6h3.js";import"./SelectionIndicator-DrPVbDEG.js";import"./usePress-DxWS_a10.js";import"./Text-B7eeu1tm.js";import"./useCollection-BKo-JHz_.js";import"./VisuallyHidden-BMrtBig1.js";import"./Autocomplete-Crh9ZW9_.js";import"./Checkbox-DAhLMDtF.js";import"./Check-DmKiK_tG.js";import"./CheckIndeterminateSmall-DSpFU3ox.js";import"./useFormValidation-DSTisM7u.js";import"./useToggleState-CLtX8f0N.js";import"./useFormReset-z94BujoP.js";import"./ComboBox-CRyWD78q.js";import"./ComboBoxListBox-D4hdN1As.js";import"./ListBox-CsmO4l-W.js";import"./ListBox-CARPtdUg.js";import"./useLoadMoreSentinel-BizGUVWT.js";import"./useLabel-DM5gXb4l.js";import"./Pill-Yqf9-rsz.js";import"./Input-BLQ7Xpbs.js";import"./SelectBase-Bevhpolu.js";import"./Label-oyWkNGh0.js";import"./index-DtT-FGCI.js";import"./Label-B-Scc7jx.js";import"./variants-dQmToWHE.js";import"./KeyboardArrowDown-JVD3mMor.js";import"./filter-persistence-CUbWU1IC.js";import"./sha256-DTxMKfYp.js";import"./DateTimePicker-CGEZicYX.js";import"./IconButton-nrVFO6fM.js";import"./ChevronBackward-D2Q_pbQA.js";import"./ChevronForward-B3HgYxSa.js";import"./Calendar-fJfmBhqo.js";import"./Form-dP2AxA5p.js";import"./ErrorMessage-DqgXmXCa.js";import"./PhoneNumberField-CoQqiAoz.js";import"./index-C7CL5OQ7.js";import"./TextField-D5xXeSVy.js";import"./Group-Cp91AqYf.js";import"./useField-ccJTxOPY.js";import"./useTextField-D0jxVDW0.js";import"./RadioGroup-CeucmWsE.js";import"./RichTextEditor-BhQNAwLf.js";import"./Modal-DWTFpRU8.js";import"./Select-DErybrw9.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
