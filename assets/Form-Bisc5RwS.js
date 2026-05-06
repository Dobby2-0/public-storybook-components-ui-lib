import{j as r}from"./iframe-CoP3LAwi.js";import{useMDXComponents as i}from"./index-DvHUVTNf.js";import{M as e,C as m}from"./blocks-C4umQpRJ.js";import{F as p,D as s}from"./Form.stories-DSzgp-AP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-85lfc85w.js";import"./index-DKc3ZT2X.js";import"./index-D1lnY5A6.js";import"./Button-DATugxcW.js";import"./useHover-CUoT5zoT.js";import"./ButtonBase-FvF1_LPg.js";import"./Loader-BbStJC2s.js";import"./Tooltip-DOpJc7fV.js";import"./index-C9VKhSaY.js";import"./Button-MtuXdxwC.js";import"./SelectionIndicator-LddWnkdC.js";import"./usePress-DfG_wu54.js";import"./Text-DvZZdpxs.js";import"./useCollection-Bb_bKlsE.js";import"./VisuallyHidden-CTBegAdx.js";import"./Autocomplete-Cecnsv7S.js";import"./Checkbox-C6lGY933.js";import"./Check-MOrs6nAQ.js";import"./CheckIndeterminateSmall-BLaU9GVH.js";import"./useFormValidation-CguSbhD_.js";import"./useToggleState-DVB2CtCt.js";import"./useFormReset-B2FbxHjC.js";import"./ComboBox-BranceTt.js";import"./ComboBoxListBox-CiyVO1BH.js";import"./ListBox-D1O_ipaN.js";import"./ListBox-Vq1x905t.js";import"./useLoadMoreSentinel-Ds2Eu_NW.js";import"./useLabel-5hZ-WMJt.js";import"./Pill-6X5xBcQO.js";import"./Input-B8oSj4D3.js";import"./SelectBase-CJBf4BIu.js";import"./Label-CsafV2Ke.js";import"./index-C2B7xrum.js";import"./Label-BCcWJ_kf.js";import"./variants-IgXeAILn.js";import"./KeyboardArrowDown-0JC_UNZg.js";import"./filter-persistence-BoIT-GT-.js";import"./sha256-BqdKJwLI.js";import"./DateTimePicker-By8gWr2M.js";import"./IconButton-Cp_ZGwH3.js";import"./ChevronBackward-C8m1JGEy.js";import"./ChevronForward-k-iMpD5Q.js";import"./Calendar-asXCKjTX.js";import"./Form-BUmXnG5r.js";import"./ErrorMessage-z9IL_ZfZ.js";import"./PhoneNumberField-BN6_kA2M.js";import"./index-C7CL5OQ7.js";import"./TextField-B6jbQQXH.js";import"./Group-DS1_VHkJ.js";import"./useField-5vuxmGPN.js";import"./useTextField-CoY9qr6s.js";import"./RadioGroup-BgXE9SzI.js";import"./RichTextEditor-CeY3cpz9.js";import"./Modal-DM-s_4ol.js";import"./Select-ChOz6Zsd.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
