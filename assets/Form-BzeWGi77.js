import{j as r}from"./iframe-Cz9yhdIa.js";import{useMDXComponents as i}from"./index-BO08932f.js";import{M as e,C as m}from"./blocks-BmxyVqAg.js";import{F as p,D as s}from"./Form.stories-B8mogJ7p.js";import"./preload-helper-Dp1pzeXC.js";import"./index-RgEKvJvz.js";import"./index-CCEJ7Jd7.js";import"./Button-rQHPJzt7.js";import"./utils-Clz3z_fr.js";import"./ButtonBase-Cgv5C1M3.js";import"./Loader-DokNdlH5.js";import"./Tooltip-D1TBVkRL.js";import"./index-BMliXzMp.js";import"./Button-Ct33FO5A.js";import"./FocusScope-BU5jmXxz.js";import"./Hidden-BhdaoSJl.js";import"./usePress-DVUkZvNI.js";import"./RSPContexts-CTceN0Bv.js";import"./Separator-C52jtr6k.js";import"./Text-DzNCDAnX.js";import"./VisuallyHidden-l9INfhTJ.js";import"./Checkbox-D95Xtn41.js";import"./Check-wr4REtxR.js";import"./CheckIndeterminateSmall-DDBl8e5O.js";import"./Form-F_G8SAu3.js";import"./useToggleState-Cr1xCv8R.js";import"./useFormReset-CqGs29_d.js";import"./ComboBox-EGapgEhg.js";import"./ListBox-CEf9oJPs.js";import"./ListBox-DVB25Bla.js";import"./DragAndDrop-CgtgLPCa.js";import"./useLabel-CB7fjgrE.js";import"./Pill-Bqx_o0w-.js";import"./Input-B0YP7v72.js";import"./SelectBase-Cjwf07g4.js";import"./Label-DgeX9R9E.js";import"./index-kn6aLDQ-.js";import"./variants-DQh_-T4R.js";import"./KeyboardArrowDown-DLHuA-tF.js";import"./DateTimePicker-1B-6gUrx.js";import"./IconButton-CuNs-yD6.js";import"./Calendar-DN_UWQ3G.js";import"./ChevronBackward-DWpRTPUF.js";import"./ChevronForward-CqMuhFJz.js";import"./Form-CZlNtql2.js";import"./ErrorMessage-DxQRoDHN.js";import"./RadioGroup-vB99DoQu.js";import"./FieldError-Kj6t-U_b.js";import"./RichTextEditor-KUMOZxHN.js";import"./Menu-m86g4IEk.js";import"./TableOutlined-CMdTZukM.js";import"./Toolbar-DrFucF_S.js";import"./Underline--rmmP8aQ.js";import"./Select-Bfe0B2v6.js";import"./TextField-D8N1YKNN.js";import"./Group-2GFzSeJz.js";import"./useTextField-Dii_BJwU.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function lr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{lr as default};
