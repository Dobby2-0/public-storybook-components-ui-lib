import{j as r}from"./iframe-DzHgz_R0.js";import{useMDXComponents as i}from"./index-Je62QBv-.js";import{M as e,C as m}from"./blocks-CtYbha1a.js";import{F as p,D as s}from"./Form.stories-Cv8D9JF5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-lNHsNeNb.js";import"./index-Coa52mpR.js";import"./Button-BcX9VdUe.js";import"./utils-BNSxeWSS.js";import"./ButtonBase-CmRWFr30.js";import"./Loader-CoXJRd0A.js";import"./Tooltip-BuHsfSag.js";import"./index-O5q8PLHp.js";import"./Button-CZJRwUcQ.js";import"./FocusScope-ufh2Eq3k.js";import"./Hidden-DDBldYzx.js";import"./usePress-B28ZCfrq.js";import"./RSPContexts--LViVSKW.js";import"./Separator-BE4fQ99B.js";import"./Text-D5t9Swb1.js";import"./VisuallyHidden-CV11xDJs.js";import"./Checkbox-DX-MbrEm.js";import"./Check-CZgIq8UQ.js";import"./CheckIndeterminateSmall-BePvwkTo.js";import"./Form-Ci6IBD99.js";import"./useToggleState-Bq0SPpDj.js";import"./useFormReset-D-DONvMH.js";import"./ComboBox-BEMwvy3t.js";import"./ListBox-DLZtGzZh.js";import"./ListBox-CBJZICF7.js";import"./DragAndDrop-CyMDA0gp.js";import"./useLabel-D1GGIt6g.js";import"./Pill-suN6DgqO.js";import"./Input-NBZ5TvP8.js";import"./SelectBase-Ct_1VDYd.js";import"./Label-nAI03wu_.js";import"./index-BW8A16l8.js";import"./variants-C0JVJo5C.js";import"./KeyboardArrowDown-Cbo3hghj.js";import"./DateTimePicker-C7qlJn0V.js";import"./IconButton-BgibkKDI.js";import"./ChevronBackward-DwXnYTbC.js";import"./ChevronForward-BGUP2Phi.js";import"./Calendar-we7H2x9s.js";import"./Form-CKGphbyU.js";import"./ErrorMessage-C64kOCuV.js";import"./RadioGroup-CNc9SIQ3.js";import"./FieldError-COL4fk0c.js";import"./RichTextEditor-CtDF-kOn.js";import"./Modal-DUaf4VRM.js";import"./Select-DJyE7P-L.js";import"./TextField-Du84W1vA.js";import"./Group-DBl90NKo.js";import"./useTextField-y4n13uhl.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
