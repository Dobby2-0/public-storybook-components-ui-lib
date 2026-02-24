import{j as r}from"./iframe-zjUVn86d.js";import{useMDXComponents as i}from"./index-BkG7NysK.js";import{M as e,C as m}from"./blocks-DSc0o1mL.js";import{F as p,D as s}from"./Form.stories-B8ash9WS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8-qli9Cq.js";import"./index-GjvJnm3R.js";import"./index-DSFu27zz.js";import"./Button-Di2c3rCg.js";import"./utils-Ckwt6L2U.js";import"./ButtonBase-2lfqFCz7.js";import"./Loader-BQniJKVa.js";import"./Tooltip-DvMGHQyZ.js";import"./index-vECkma1w.js";import"./Button-DDbvFyM7.js";import"./FocusScope-oHrBSakn.js";import"./Text-DZ4FRmC5.js";import"./usePress-CDnLUX3P.js";import"./RSPContexts-BBojKgpO.js";import"./Separator-DKCwbKdB.js";import"./VisuallyHidden-DdllPjXQ.js";import"./Checkbox-aAYDLKJQ.js";import"./Check-ChJKvkWG.js";import"./CheckIndeterminateSmall-CSi3fssk.js";import"./Form-BjDdwaIl.js";import"./useToggleState-O-DSWipP.js";import"./useFormReset-BHvlhi5P.js";import"./ComboBox-D3-oc0Qz.js";import"./SingleComboBox-ClEpRpXh.js";import"./ListBox-D68y9MN5.js";import"./ListBox-BLy0DBzA.js";import"./DragAndDrop-PntmnQL2.js";import"./useLabel-Mhy552JQ.js";import"./Pill-D1I6W6QS.js";import"./Input-rTZ2VCfa.js";import"./filter-persistence-BAd1_3vU.js";import"./Label-1bKwq0It.js";import"./index-DZHo1MSv.js";import"./Label-8P-bEcV9.js";import"./variants-B2B3PE35.js";import"./KeyboardArrowDown-DkDI6cAR.js";import"./sha256-CNixT76N.js";import"./DateTimePicker-BCmXFUFT.js";import"./IconButton-C-8M2ZDs.js";import"./ChevronBackward-wubYm6gq.js";import"./ChevronForward-BO2KGoDF.js";import"./Calendar-ChiUO4jE.js";import"./Form-B9SivaHB.js";import"./ErrorMessage-BemaFhYo.js";import"./PhoneNumberField-l_s86R6c.js";import"./index-C7CL5OQ7.js";import"./TextField-BOpy84Rm.js";import"./Group-Ck93w7SK.js";import"./FieldError-BxiBvMzJ.js";import"./useTextField-CGlc9wiM.js";import"./RadioGroup-CnKrzsLu.js";import"./RichTextEditor-BvkRHfRG.js";import"./Modal-dP4gQTQM.js";import"./Select-BT1hMrWV.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
