import{j as r}from"./iframe-BW_3WW6f.js";import{useMDXComponents as i}from"./index-sRKdvLCx.js";import{M as e,C as m}from"./blocks-BV0yJMlN.js";import{F as p,D as s}from"./Form.stories-B94yRatJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ba9P7hMT.js";import"./index-CJoG7HbN.js";import"./index-BK1B_SrB.js";import"./Button-clvkrcg3.js";import"./useHover-CgLCGCG0.js";import"./ButtonBase-DCKa9TsH.js";import"./Loader-C4vcv2Oh.js";import"./Tooltip-BpkQD5VI.js";import"./index-CEgAeWm5.js";import"./Button-Bv4DQJIQ.js";import"./SelectionIndicator-C31Q7HLG.js";import"./usePress-Dl1N0Gd3.js";import"./Text-DWV1J4yc.js";import"./useCollection-Bmw2zVKn.js";import"./VisuallyHidden--9xNH1Jp.js";import"./Autocomplete-KJUOH_jb.js";import"./Checkbox-DJ5zASGw.js";import"./Check-CV-mrvLK.js";import"./CheckIndeterminateSmall-Ccboqhka.js";import"./useFormValidation-S4QIIU6v.js";import"./useToggleState-CnZMiMmg.js";import"./useFormReset-C2s_CEpg.js";import"./ComboBox-Bx6YDi8V.js";import"./ComboBoxListBox-CmZdp1Nq.js";import"./ListBox-ByZxSDeI.js";import"./ListBox-CTu9sTag.js";import"./useLoadMoreSentinel-Cw9UpRhN.js";import"./useLabel-1-0Qhyzi.js";import"./Pill-8Ku8kOT5.js";import"./Input-D1Xp_bUf.js";import"./SelectBase-Bldz4ndX.js";import"./Label-Dj_IUe9R.js";import"./index-BFzozxWJ.js";import"./Label-CPJWrBWs.js";import"./variants-DXiDO3Bx.js";import"./KeyboardArrowDown-CLOjLcjL.js";import"./filter-persistence-V-IMFKvI.js";import"./sha256-CQheEuXi.js";import"./DateTimePicker-DjQnrp3q.js";import"./IconButton-BXYJsDL1.js";import"./ChevronBackward-BaV1y249.js";import"./ChevronForward-lgWqvW3s.js";import"./Calendar-CF4Romrd.js";import"./Form-BN6Xx1WM.js";import"./ErrorMessage-Dpsd1Mgj.js";import"./PhoneNumberField-Cx1ymGmx.js";import"./index-C7CL5OQ7.js";import"./TextField-CtO3tVZK.js";import"./Group-1e3X9Wlf.js";import"./useField-HUv7vY2s.js";import"./useTextField-BLuWBAIT.js";import"./RadioGroup-0wbihCrT.js";import"./RichTextEditor-Jq65TPsA.js";import"./Modal-DCo6aeWa.js";import"./Select-Cl89HntU.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
