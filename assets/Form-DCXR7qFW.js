import{j as r}from"./iframe-DP3-CQDs.js";import{useMDXComponents as i}from"./index-CDF4bUje.js";import{M as e,C as m}from"./blocks-D9qvZUzr.js";import{F as p,D as s}from"./Form.stories-CU6HsXPY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-q5ymUpaM.js";import"./index-C7NeUuQO.js";import"./index-C_LC-Clp.js";import"./Button-CD3kBsXW.js";import"./utils-CTHKUqKf.js";import"./ButtonBase-YXA85uzR.js";import"./Loader-b3vFoKaK.js";import"./Tooltip-C1_nDIPG.js";import"./index-DZ8PC-Vn.js";import"./Button-DjNH72gK.js";import"./FocusScope-DeaR1QOB.js";import"./Hidden-C0lX4Jn3.js";import"./usePress-BS2ZG6Qh.js";import"./RSPContexts-DL4g-k_R.js";import"./Separator-BMUj42YL.js";import"./Text-DRH279PT.js";import"./VisuallyHidden-TKVO3wAR.js";import"./Checkbox-BiW7jESg.js";import"./Check-CeDGww65.js";import"./CheckIndeterminateSmall-i5LyFDYy.js";import"./Form-C20i8PXr.js";import"./useToggleState-YxbirCsn.js";import"./useFormReset-CMl-Uc9z.js";import"./ComboBox-BRvqu5Wb.js";import"./ListBox-BYcLeG4n.js";import"./ListBox-6gDFOM9x.js";import"./DragAndDrop-DUuaZQ3q.js";import"./useLabel-DKUT9Bzy.js";import"./Pill-Cd0ujufo.js";import"./Input-N0MICXmV.js";import"./SelectBase-Bbb0einT.js";import"./Label-CXMBqC1I.js";import"./index-Dr1nA0tK.js";import"./variants-CTsV4Jtq.js";import"./KeyboardArrowDown-BfuiNlbF.js";import"./DateTimePicker-B3yC8qUK.js";import"./IconButton-C2-rOCo0.js";import"./ChevronBackward-pUczOHuE.js";import"./ChevronForward-5CmhpOGK.js";import"./Calendar-y_RpYzko.js";import"./Form-CryAe-D9.js";import"./ErrorMessage-BVUGJsOs.js";import"./RadioGroup-BkDjTNpE.js";import"./FieldError-C4TMNOHw.js";import"./RichTextEditor-DXA038Dk.js";import"./Modal-D8kXei47.js";import"./Select-DAFO6JTW.js";import"./TextField-B2KSNVvX.js";import"./Group-DC9qmLJT.js";import"./useTextField-BWDWAuce.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
