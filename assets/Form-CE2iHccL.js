import{j as r}from"./iframe-CzO8tIKf.js";import{useMDXComponents as i}from"./index-BMXhJFjq.js";import{M as e,C as m}from"./blocks-DEhCb69S.js";import{F as p,D as s}from"./Form.stories-CgU3Jnkt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CbyHUPuW.js";import"./index-Zlv7x9BX.js";import"./index-I8rqpXNn.js";import"./Button-B_LfpQBC.js";import"./utils-Bd97OsuJ.js";import"./ButtonBase-CMFW6auj.js";import"./Loader-yCy-tuy-.js";import"./Tooltip-BnQpK9jh.js";import"./index-jDvyA-sL.js";import"./Button-CpJ7snnK.js";import"./FocusScope-ChueHnOn.js";import"./Text-D3Raw8n8.js";import"./usePress-Dy-QiNP_.js";import"./RSPContexts-B3cxRrW8.js";import"./Separator-DAynwQ_I.js";import"./VisuallyHidden-D4CgCFfs.js";import"./Checkbox-B-mn-IrF.js";import"./Check-iPK-h5nU.js";import"./CheckIndeterminateSmall-r4yo_rdV.js";import"./Form-de9bAdkX.js";import"./useToggleState-CMqqZYpX.js";import"./useFormReset-eqP6z5tW.js";import"./ComboBox-CRBvNhyb.js";import"./SingleComboBox-lG5tuYfG.js";import"./ListBox-BilcoKLE.js";import"./ListBox-F4HsMzTf.js";import"./DragAndDrop-Boov5mwc.js";import"./useLabel-CYOjoylC.js";import"./Pill-bxO7dmgs.js";import"./Input-DSX22w90.js";import"./SelectBase-BghNQWuq.js";import"./sha256-CJpng67C.js";import"./Label-C0qwjwPj.js";import"./index-BHjj78yl.js";import"./Label-CQh8jyZ0.js";import"./variants-qMAhUxzD.js";import"./KeyboardArrowDown-DCil_8Sa.js";import"./DateTimePicker-DxEm634c.js";import"./IconButton-CVvYJJz8.js";import"./ChevronBackward-BpPgaX0R.js";import"./ChevronForward-DQn6X9p7.js";import"./Calendar-CO_ZWZa0.js";import"./Form-DjHoD7Uh.js";import"./ErrorMessage-h5ndFz97.js";import"./PhoneNumberField-CS-zYzSY.js";import"./index-C7CL5OQ7.js";import"./TextField-CUepwB17.js";import"./Group-mo5mZbB2.js";import"./FieldError-DHth2sLA.js";import"./useTextField-Dal14r8V.js";import"./RadioGroup-F_XdH_A5.js";import"./RichTextEditor-DU72W0DP.js";import"./Modal-BSY-t_rE.js";import"./Select-BctNBZDw.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
