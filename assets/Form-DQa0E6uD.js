import{j as r}from"./iframe-D9_lbR41.js";import{useMDXComponents as i}from"./index-CetKcNDb.js";import{M as e,C as m}from"./blocks-BFX17fjd.js";import{F as p,D as s}from"./Form.stories-DOon1HkP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfnB0Nij.js";import"./index-BnDj3lOR.js";import"./index-QxbnYTcs.js";import"./Button-0TBUFIQb.js";import"./utils-BCXD4NlX.js";import"./ButtonBase-DOyfrzp8.js";import"./Loader-Ydzop-h2.js";import"./Tooltip-DxT_jqx4.js";import"./index-C-LQJlmq.js";import"./Button-Lmaxfra2.js";import"./FocusScope-CYvM6z0l.js";import"./Text-CQdV_Tal.js";import"./usePress-CrkuXhfZ.js";import"./RSPContexts-TeruZA21.js";import"./Separator-BtrfYL-Y.js";import"./VisuallyHidden-BGpakkLr.js";import"./Checkbox-BgeDGAs2.js";import"./Check-By6hSInZ.js";import"./CheckIndeterminateSmall-D55ix9DC.js";import"./Form-nYug0fMi.js";import"./useToggleState-CVVyxcf8.js";import"./useFormReset-sSmPvwMn.js";import"./ComboBox-DJp3konP.js";import"./SingleComboBox-CMdAd5Gn.js";import"./ListBox-RYwPuSVS.js";import"./ListBox-BfjlK5XA.js";import"./DragAndDrop-B77wAVlX.js";import"./useLabel-D7EHOPDw.js";import"./Pill-aPSTnWXm.js";import"./Input-DpohKcDZ.js";import"./SelectBase-DyzMHeIg.js";import"./sha256-BFTNuNgP.js";import"./Label-DOYNMx6z.js";import"./index-B7932dmZ.js";import"./Label-CUHDqSYx.js";import"./variants-DDWAe2Mf.js";import"./KeyboardArrowDown-CdT_tM4l.js";import"./DateTimePicker-N_tqMFt6.js";import"./IconButton-BJ9QUkxQ.js";import"./ChevronBackward-CWyRdPKN.js";import"./ChevronForward-BBeMVTjE.js";import"./Calendar-Dr0Bj6Em.js";import"./Form-4L-Znybv.js";import"./ErrorMessage-CNsJRIOc.js";import"./PhoneNumberField-DkhJ5dhD.js";import"./index-C7CL5OQ7.js";import"./TextField-D8qlMyLI.js";import"./Group-DlVoFp23.js";import"./FieldError-DvWJyGAe.js";import"./useTextField-CURPFbR6.js";import"./RadioGroup-CXjn2S5y.js";import"./RichTextEditor-Bwc8u8Yb.js";import"./Modal-CK_J7KxK.js";import"./Select-CMdVZ-LF.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
