import{j as r}from"./iframe-VgWWmY4g.js";import{useMDXComponents as i}from"./index-tmMYJk-r.js";import{M as e,C as m}from"./blocks-DNWiA4Op.js";import{F as p,D as s}from"./Form.stories-DEZBRP9K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-9UqWgFBl.js";import"./index-RQhmWt5V.js";import"./Button-DE2GORPD.js";import"./utils-CclEAEFa.js";import"./ButtonBase-WC6mspT-.js";import"./Loader-Bj7ijPZi.js";import"./Tooltip-CvXbAa1e.js";import"./index-DlCfgz2w.js";import"./Button-CrsherQ4.js";import"./FocusScope-BCX2Icu9.js";import"./Hidden-B13IvjIG.js";import"./usePress-DR6--iwZ.js";import"./RSPContexts-DfqDc_1E.js";import"./Separator-DdeGjH4W.js";import"./Text-D9mQM21Q.js";import"./VisuallyHidden-BoqiNbLN.js";import"./Checkbox-CEWE5Y5u.js";import"./Check-LWv9UebP.js";import"./CheckIndeterminateSmall-CoeKSITQ.js";import"./Form-r5ll95_o.js";import"./useToggleState-DPtsYaWy.js";import"./useFormReset-e4YwvD10.js";import"./ComboBox-DEBINMfi.js";import"./ListBox-DwTNfLbR.js";import"./ListBox-BnbOy1Z2.js";import"./DragAndDrop-B8YDMgIX.js";import"./useLabel-DuAhKsdk.js";import"./Pill-CZg4sYCm.js";import"./Input-Dujf9ozU.js";import"./SelectBase-DlUa0rMx.js";import"./Label-DJaAU85G.js";import"./index-eIFxzxty.js";import"./variants-BG2LdSTR.js";import"./KeyboardArrowDown-6pF2x-Nw.js";import"./DateTimePicker-BEiqx3SQ.js";import"./IconButton-Bcj38DAZ.js";import"./ChevronBackward-CGwl9bW2.js";import"./ChevronForward-FTmotF9p.js";import"./Calendar-CUXV4Wdb.js";import"./Form-DInGVhkj.js";import"./ErrorMessage-DvdrawgM.js";import"./RadioGroup-Dp8D5C7h.js";import"./FieldError-aWpv4Lsb.js";import"./RichTextEditor-CzxkWQf-.js";import"./Menu-WOTaxlbZ.js";import"./TableOutlined-l3pGpYrZ.js";import"./Toolbar-BHI9OTVI.js";import"./Underline-BUwvLUIn.js";import"./Select-BwaD4XW8.js";import"./TextField-CC1ncsFQ.js";import"./Group-at8bEIke.js";import"./useTextField-DnyDXKvT.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
