import{j as r}from"./iframe-B_LGz7Ej.js";import{useMDXComponents as i}from"./index-Vr-23pMK.js";import{M as e,C as m}from"./blocks-C4d8JwAR.js";import{F as p,D as s}from"./Form.stories-DBInhUqp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dy16ZsYt.js";import"./index-PA4Y_XAw.js";import"./index-4BKUk_V9.js";import"./Button-BG4S-Okt.js";import"./utils-UVlPCbp4.js";import"./ButtonBase-DF5xZ11q.js";import"./Loader-BQD4HfUj.js";import"./Tooltip-DRAJgO0E.js";import"./index--KRQgk93.js";import"./Button-CxB0R8HE.js";import"./FocusScope-CFoRViRT.js";import"./Text-ePeK-RTB.js";import"./usePress-_yNOhPfv.js";import"./RSPContexts-m5uw98Y9.js";import"./Separator-Bt-W_LIX.js";import"./VisuallyHidden-7mvvrOu0.js";import"./Checkbox-CC9JTJtG.js";import"./Check-DJ-iL_-I.js";import"./CheckIndeterminateSmall-ClmQVFWQ.js";import"./Form-D8HSC8Qz.js";import"./useToggleState-BvV2tq2I.js";import"./useFormReset-BZKWBeE1.js";import"./ComboBox-BpLyrX2u.js";import"./SingleComboBox-CjKVTuHn.js";import"./ListBox-H4MjhT-m.js";import"./ListBox-3VCK601m.js";import"./DragAndDrop-CIKmW2mn.js";import"./useLabel-C9y1SGMM.js";import"./Pill-aEht7-4L.js";import"./Input-DVEgBVzm.js";import"./SelectBase-CB4zssa5.js";import"./sha256-BrNJVfbR.js";import"./Label-Dv1vg14k.js";import"./index-DPoADSEq.js";import"./Label-ypNslIBK.js";import"./variants-Cb-df-ku.js";import"./KeyboardArrowDown-tAUKz8X8.js";import"./DateTimePicker-Bmv3ioiZ.js";import"./IconButton-CZADNQKA.js";import"./ChevronBackward-osZGRQsN.js";import"./ChevronForward-BnemPx6F.js";import"./Calendar-DIA_PQj8.js";import"./Form-CqRVHZTJ.js";import"./ErrorMessage-DbJ4tjO8.js";import"./PhoneNumberField-knfwKnNU.js";import"./index-C7CL5OQ7.js";import"./TextField-C7NduFl6.js";import"./Group-C1FXEjPa.js";import"./FieldError-DGoIA7et.js";import"./useTextField-BHgUVt4m.js";import"./RadioGroup-3VvG4tiT.js";import"./RichTextEditor-BCgp70kC.js";import"./Modal-D3tthuP2.js";import"./Select-DuoFBLOE.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
