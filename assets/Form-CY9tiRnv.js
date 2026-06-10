import{j as r}from"./iframe-BlVgBvDK.js";import{useMDXComponents as i}from"./index-DtQTsfMz.js";import{M as e,C as m}from"./blocks-7ki6ArF2.js";import{F as p,D as s}from"./Form.stories-zORTF4dm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJ1sWabw.js";import"./index-C_2k30VU.js";import"./index-BZN6Tiky.js";import"./Button-KHPRXXdF.js";import"./useHover-BqMw7-dA.js";import"./ButtonBase-C-A6mNvO.js";import"./Loader-0-t502rO.js";import"./Tooltip-C20wWrBr.js";import"./index-CmUdzAco.js";import"./Button-BfpbnT7E.js";import"./SelectionIndicator-DK6Qs-AS.js";import"./usePress-BCqabgTu.js";import"./Text-BFJDapLu.js";import"./useCollection-BNS_HcEo.js";import"./VisuallyHidden-Cr-QpJx_.js";import"./Autocomplete-ChNW0oCv.js";import"./Checkbox-KnC2Sfni.js";import"./Check-12ebBL0s.js";import"./CheckIndeterminateSmall-DHlUTFi9.js";import"./useFormValidation-DnPbtW_v.js";import"./useToggleState-DwcVjmcM.js";import"./useFormReset-YfbIiLDH.js";import"./ComboBox-Di0KBwZ4.js";import"./ComboBoxListBox-C-nVKv1V.js";import"./ListBox-CHfOlGrS.js";import"./ListBox-vcMBqIVB.js";import"./useLoadMoreSentinel--PXD2cJs.js";import"./useLabel--8UZYazZ.js";import"./Pill-Btq7gRdN.js";import"./Input-8ErQ155_.js";import"./SelectBase-Cf-DT05a.js";import"./Label-4guhAsxS.js";import"./index-DqlSq4aw.js";import"./Label-DAth4fqM.js";import"./variants-CiO8zhP-.js";import"./KeyboardArrowDown-DKGGPISO.js";import"./filter-persistence-DnfyP9K8.js";import"./sha256-CXqT_DBa.js";import"./DateTimePicker-DLcuwqN9.js";import"./IconButton-B5LDuv9K.js";import"./ChevronBackward-AfoJorFp.js";import"./ChevronForward-CLj_LqRI.js";import"./Calendar-BTSO-meH.js";import"./Form-CeyJdMoD.js";import"./ErrorMessage-PgFecnZ9.js";import"./PhoneNumberField-Bxg1yYbK.js";import"./index-C7CL5OQ7.js";import"./TextField-Bodv37_L.js";import"./Group-Czacy95q.js";import"./useField-BwPYgnyO.js";import"./useTextField-CPesYbRa.js";import"./RadioGroup-B5L-2pHo.js";import"./RichTextEditor-B-T6FF8k.js";import"./Modal-DUGg-Sib.js";import"./Select-DXIpD63Q.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
