import{j as r}from"./iframe-DrFH8XRg.js";import{useMDXComponents as i}from"./index-Dj-IFgT3.js";import{M as e,C as m}from"./blocks-YfkqC6lr.js";import{F as p,D as s}from"./Form.stories-BfGlwWYq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-iFxpPaYa.js";import"./index-BYKGypTn.js";import"./index-BuUxtWBt.js";import"./Button-X_wyXg0L.js";import"./utils-CnfCCKuF.js";import"./ButtonBase-F93lj1qr.js";import"./Loader-CNrDyEl1.js";import"./Tooltip-CXwE-K1l.js";import"./index-DzH2doeL.js";import"./Button-DOwjUmTP.js";import"./FocusScope-B40k0w__.js";import"./Text-li9YpqBq.js";import"./usePress-Ciue2P_m.js";import"./RSPContexts-mikK0Q7p.js";import"./Separator-Bk_Cftu2.js";import"./VisuallyHidden-DDfnc86H.js";import"./Checkbox-B5Ydmu3X.js";import"./Check-B-DywcFA.js";import"./CheckIndeterminateSmall-CWKdrz61.js";import"./Form-r196mReO.js";import"./useToggleState-Cf4HPSc4.js";import"./useFormReset-mLoqV93f.js";import"./ComboBox-CA6zcIcv.js";import"./SingleComboBox-BliqQvHC.js";import"./ListBox-Do7xm0ce.js";import"./ListBox-DSqo3Nry.js";import"./DragAndDrop-DEYpxB1p.js";import"./useLabel-CinT1c1I.js";import"./Pill-CvtuDp7S.js";import"./Input-BGi8fj7U.js";import"./filter-persistence-CCGSvWjz.js";import"./Label-BoN0Q0GS.js";import"./index-CIzZZqPp.js";import"./Label-BGBGIU50.js";import"./variants-CpiCEwlc.js";import"./KeyboardArrowDown-Kkb4E__E.js";import"./sha256-BYnNrIB1.js";import"./DateTimePicker-CaJdaA9_.js";import"./IconButton-DpaQtcQk.js";import"./ChevronBackward-BKsmfqQZ.js";import"./ChevronForward-BNfIVkA4.js";import"./Calendar-CMg7Zw0g.js";import"./Form-BlCGfHMg.js";import"./ErrorMessage-C4RDLZo2.js";import"./PhoneNumberField-D-YYQk-v.js";import"./index-C7CL5OQ7.js";import"./TextField-TvPzg8A7.js";import"./Group-CRb52MbR.js";import"./FieldError-B-B5gAHI.js";import"./useTextField-B9n56kKR.js";import"./RadioGroup-DkuAHg6E.js";import"./RichTextEditor-Y2OvcfIq.js";import"./Modal-rv-ciXRb.js";import"./Select-B3-LHJd5.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
