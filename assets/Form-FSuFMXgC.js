import{j as r}from"./iframe-XN5PUdo-.js";import{useMDXComponents as i}from"./index-Cw7nQM1C.js";import{M as e,C as m}from"./blocks-5TIgkcDg.js";import{F as p,D as s}from"./Form.stories-D4wZB06B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YTM8xuB5.js";import"./index-DguLE60C.js";import"./index-DBjqw2XV.js";import"./Button-DWYSm-gN.js";import"./utils-Bzka9lbN.js";import"./ButtonBase-vWONjdp0.js";import"./Loader-BehVFnXx.js";import"./Tooltip-C2X8H7tG.js";import"./index-Cvpg_kN6.js";import"./Button-GWZf1c_M.js";import"./FocusScope-VZEF-ZvW.js";import"./Text-CpJlg3nO.js";import"./usePress-BjHcyIvs.js";import"./RSPContexts-BRB36KVP.js";import"./Separator-DGKtewIz.js";import"./VisuallyHidden-CzSagqXo.js";import"./Checkbox-CVD9OBxT.js";import"./Check-IDU531yo.js";import"./CheckIndeterminateSmall-BSc8ty3R.js";import"./Form-BI6liC2Z.js";import"./useToggleState-BSR1tQpq.js";import"./useFormReset-B2pTTz8n.js";import"./ComboBox-C8o7t42p.js";import"./ListBox-C9qeEWg2.js";import"./ListBox-DxL9n11H.js";import"./DragAndDrop-D8D0v0SF.js";import"./useLabel-BzR44BkW.js";import"./Pill-B8xuqL5P.js";import"./Input-fbADgTkx.js";import"./SelectBase-h0OwXfio.js";import"./Label-YpVhxTSR.js";import"./index-DC6ydhDU.js";import"./Label-CceXNFpS.js";import"./variants-BJS8SB37.js";import"./KeyboardArrowDown-DEpKJQ2c.js";import"./DateTimePicker-Cquopn59.js";import"./IconButton-BP41wML_.js";import"./ChevronBackward-F43oc6KN.js";import"./ChevronForward-D4qn85sY.js";import"./Calendar-DyaqJvet.js";import"./Form-D695hQzB.js";import"./ErrorMessage-tJgT2o2b.js";import"./RadioGroup-DXPn6Dn2.js";import"./FieldError-CexR7SnA.js";import"./RichTextEditor-CeeKLQT8.js";import"./Modal-n2lhklzv.js";import"./Select-Dahit5hr.js";import"./TextField-CUVhw9qH.js";import"./Group-BMq6SCOz.js";import"./useTextField-Bb2p4L6n.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function cr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{cr as default};
