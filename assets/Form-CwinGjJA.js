import{j as r}from"./iframe-DCnsIBR_.js";import{useMDXComponents as i}from"./index-BHgYmeeU.js";import{M as e,C as m}from"./blocks-BGFaTEdy.js";import{F as p,D as s}from"./Form.stories-K2_Q3Qb4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CBqyRhV4.js";import"./index-Cg5B7Yby.js";import"./index-CKQPywv2.js";import"./Button-CWQD3tU_.js";import"./utils-BL8e7Lmy.js";import"./ButtonBase-BFMKlGBO.js";import"./Loader-DlSWYIX1.js";import"./Tooltip-CuBTs8KM.js";import"./index-Bp_12h1v.js";import"./Button-BRWT2KwY.js";import"./FocusScope-CBVZ6xEL.js";import"./Text-B6TfxLXM.js";import"./usePress-BQibEut6.js";import"./RSPContexts-CuiviOgw.js";import"./Separator-DJcQyJX1.js";import"./VisuallyHidden-DQPDv7Eq.js";import"./Checkbox-BqdrDCqi.js";import"./Check-B1U5fiZb.js";import"./CheckIndeterminateSmall-DZfA9w5F.js";import"./Form-CJy_rZUj.js";import"./useToggleState-D8WjIDnr.js";import"./useFormReset-BdVlXZOG.js";import"./ComboBox-D_CAsnO8.js";import"./SingleComboBox-BFn3tj5M.js";import"./ListBox-CWdDNjWk.js";import"./ListBox-CV1TEOH3.js";import"./DragAndDrop-t2I1BC3m.js";import"./useLabel-PfIRQ1I4.js";import"./Pill-DLNmahhJ.js";import"./Input-Czx5u3at.js";import"./SelectBase-CpRL5QWH.js";import"./sha256-mvRSi-KK.js";import"./Label-DmMYePTt.js";import"./index-DlCmvME5.js";import"./Label-9TPDuMq-.js";import"./variants-COn9O8TO.js";import"./KeyboardArrowDown-CD3Ak-zh.js";import"./DateTimePicker-ByNIT22Q.js";import"./IconButton-CJ38Uhu4.js";import"./ChevronBackward-Dl7pWpuU.js";import"./ChevronForward-DdcUYSCD.js";import"./Calendar-CP13plmx.js";import"./Form-C9v4ZRZM.js";import"./ErrorMessage-Co54-RML.js";import"./PhoneNumberField-DE1JumCb.js";import"./index-C7CL5OQ7.js";import"./TextField-DYfxLo4i.js";import"./Group-BGn85Ump.js";import"./FieldError-Df_49GcK.js";import"./useTextField-CwbSUOUH.js";import"./RadioGroup-1aS1Um2U.js";import"./RichTextEditor-Bk0RmIMG.js";import"./Modal-B6sDVlY2.js";import"./Select-EFVDOhEr.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
