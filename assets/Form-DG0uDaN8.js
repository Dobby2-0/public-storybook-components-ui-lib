import{j as r}from"./iframe-DI9C0XGj.js";import{useMDXComponents as i}from"./index-CwiVRxrb.js";import{M as e,C as m}from"./blocks-GDgSvPkt.js";import{F as p,D as s}from"./Form.stories-B5P4uW6U.js";import"./preload-helper-Dp1pzeXC.js";import"./index-rhYSaYR7.js";import"./index-BBABmHkT.js";import"./Button-BasiSkBq.js";import"./utils-DH7pmtTy.js";import"./ButtonBase-CGKxs8GU.js";import"./Loader-nBG2c2qw.js";import"./Tooltip-Ddl1sZ4v.js";import"./index-74jR0aHg.js";import"./Button-DYkRiOU2.js";import"./FocusScope-DACczAvf.js";import"./Hidden-CSksDgLO.js";import"./usePress-DFFM6Qbl.js";import"./RSPContexts-DJ9m66Je.js";import"./Separator-ClBKGkuu.js";import"./Text-DcT0OA-Z.js";import"./VisuallyHidden-ElH9BT4R.js";import"./Checkbox-wix5wiZe.js";import"./Check-DIq9nWUU.js";import"./CheckIndeterminateSmall-CtsWE0gc.js";import"./Form-B8gRSjBO.js";import"./useToggleState-Dm8JtWrX.js";import"./useFormReset-93b1X55p.js";import"./ComboBox-BtrKak39.js";import"./ListBox-DQXhA5Up.js";import"./ListBox-DEiNlcko.js";import"./DragAndDrop-DGT4VSIL.js";import"./useLabel-BpjHoqKr.js";import"./Pill-_bbJn_J1.js";import"./Input-CjLHpiFp.js";import"./SelectBase-CFuxMSpy.js";import"./Label-CSWNAzUW.js";import"./index-D5bFuttZ.js";import"./variants-ChZORXjr.js";import"./KeyboardArrowDown-DABkelWi.js";import"./DateTimePicker-Cw_ReAUi.js";import"./IconButton-Bnr6vnM3.js";import"./ChevronBackward-XzUvfLny.js";import"./ChevronForward-omS-a1YG.js";import"./Calendar-DtZQObLM.js";import"./Form-DSPlMYBh.js";import"./ErrorMessage-dJHOK1PY.js";import"./RadioGroup-CZMralDk.js";import"./FieldError-EKlYiboM.js";import"./RichTextEditor-TBRVijBz.js";import"./Modal-C_jczxJg.js";import"./Select-B0HeiZiq.js";import"./TextField-BlIO3LUi.js";import"./Group-BnBPqKI6.js";import"./useTextField-ALT1n8g2.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ar(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ar as default};
