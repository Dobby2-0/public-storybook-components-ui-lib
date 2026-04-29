import{j as r}from"./iframe-Bgm5THKt.js";import{useMDXComponents as i}from"./index-Cbx_Sc8f.js";import{M as e,C as m}from"./blocks-CS2327oz.js";import{F as p,D as s}from"./Form.stories-DiHvoRd0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fbh5EQGT.js";import"./index-I_M9ki7z.js";import"./index-DARzPVSa.js";import"./Button-DHR9HFf0.js";import"./utils-Bq8izQar.js";import"./ButtonBase-BL0ygiPQ.js";import"./Loader-ceO3C9gX.js";import"./Tooltip-BFyfTSGh.js";import"./index-DdSNQObl.js";import"./Button-CAEc_581.js";import"./FocusScope-D9Rrbq_B.js";import"./Text-Fb6kCMEk.js";import"./usePress-CGoonp27.js";import"./RSPContexts-wKeyUQal.js";import"./Separator-D-JgQQMZ.js";import"./VisuallyHidden-BOG_O0ss.js";import"./Checkbox-BLDSWsPt.js";import"./Check-CFe97tmy.js";import"./CheckIndeterminateSmall-CepwSIwS.js";import"./Form-DjUerOo-.js";import"./useToggleState-MJ4Itsb2.js";import"./useFormReset-DDTPSCSz.js";import"./ComboBox-CMckWH0q.js";import"./SingleComboBox-N2X49O3q.js";import"./ListBox-Ds1dQMTU.js";import"./ListBox-DERZmFuE.js";import"./DragAndDrop-BMaBBvXg.js";import"./useLabel-EJobFHlw.js";import"./Pill-CvhraYzZ.js";import"./Input-UZM3ZovV.js";import"./SelectBase-DZwWD1Kf.js";import"./sha256-CTXWHPJT.js";import"./Label-Ctzxm2e7.js";import"./index-9i4voHfM.js";import"./Label-5VvRGiIE.js";import"./variants-0KyJ753r.js";import"./KeyboardArrowDown-BdatrPOP.js";import"./DateTimePicker-BrOuq8NJ.js";import"./IconButton-C32uAGyZ.js";import"./ChevronBackward-DCATkWxg.js";import"./ChevronForward-D8N1UnMg.js";import"./Calendar-C-tDaE-e.js";import"./Form-CsREkCV4.js";import"./ErrorMessage-Cyi8U-tu.js";import"./PhoneNumberField-D-vw8hlo.js";import"./index-C7CL5OQ7.js";import"./TextField-D1PKmmZ8.js";import"./Group-ClOGN3MA.js";import"./FieldError-B11nW6zM.js";import"./useTextField-DnpX65WF.js";import"./RadioGroup-B461v8pC.js";import"./RichTextEditor-Bg6BQ7O6.js";import"./Modal-Cs4v4Kdy.js";import"./Select-CkpBODw-.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
