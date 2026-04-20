import{j as r}from"./iframe-oEuJi57G.js";import{useMDXComponents as i}from"./index-OTDIoBTt.js";import{M as e,C as m}from"./blocks-DM4rogKg.js";import{F as p,D as s}from"./Form.stories-DTciImnX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CDMsDVTg.js";import"./index-Dcmk_gEP.js";import"./index-D74kYfOJ.js";import"./Button-yqwJt3X3.js";import"./utils-BICVp3Ky.js";import"./ButtonBase-C9eLrQ21.js";import"./Loader-BiiYAKiC.js";import"./Tooltip-DDOk3jHc.js";import"./index-BwlHY3mc.js";import"./Button-DwvsmACz.js";import"./FocusScope-BMqEpHqw.js";import"./Text-BlxRAdj_.js";import"./usePress-CWjT6aHk.js";import"./RSPContexts-mf7-MgP5.js";import"./Separator-DhMowLpU.js";import"./VisuallyHidden-BXUgwH2T.js";import"./Checkbox-DFwhO7xh.js";import"./Check-k3yz5y2u.js";import"./CheckIndeterminateSmall-Ysi4PeyX.js";import"./Form-CAvoQM6E.js";import"./useToggleState-qCqDMhAl.js";import"./useFormReset-CcsQJYW2.js";import"./ComboBox-DVWR92kD.js";import"./SingleComboBox-BlMZsorE.js";import"./ListBox-kFcGSBhM.js";import"./ListBox-B1q350q9.js";import"./DragAndDrop-t1tiytyo.js";import"./useLabel-Bu9WOYPt.js";import"./Pill-Be5wAwX3.js";import"./Input-DUQLRS91.js";import"./SelectBase-C71bwH8o.js";import"./sha256-BSTXRW63.js";import"./Label-L2ACypNA.js";import"./index-D2A_NzS1.js";import"./Label-BDa_z1en.js";import"./variants-CUBEEnt0.js";import"./KeyboardArrowDown-BWs2i4h_.js";import"./DateTimePicker-BhAvhcF9.js";import"./IconButton-CTH4xIcw.js";import"./ChevronBackward--6V6Lana.js";import"./ChevronForward-DEjaUc4L.js";import"./Calendar-CPoaQLUJ.js";import"./Form-CIwt_oiH.js";import"./ErrorMessage-CCNQs8GB.js";import"./PhoneNumberField-CQeye7Me.js";import"./index-C7CL5OQ7.js";import"./TextField-DaSLplcO.js";import"./Group-U_t5wZ-2.js";import"./FieldError-CspbHna8.js";import"./useTextField-D-OBWVPI.js";import"./RadioGroup-DZbL2hEm.js";import"./RichTextEditor-BxTSir8z.js";import"./Modal-bYvdXnb7.js";import"./Select-B-TdLlys.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
