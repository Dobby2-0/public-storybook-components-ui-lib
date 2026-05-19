import{j as r}from"./iframe-BuQZYLjZ.js";import{useMDXComponents as i}from"./index-Be5-Y4hf.js";import{M as e,C as m}from"./blocks-BA4Cx1cO.js";import{F as p,D as s}from"./Form.stories-C7MCiHOj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFQJxFH6.js";import"./index-Bd-ouoAk.js";import"./index-CR3ZY86l.js";import"./Button-Dxk9Ia29.js";import"./useHover-CiczVSK2.js";import"./ButtonBase-npMyeAn1.js";import"./Loader-CDLiKOIL.js";import"./Tooltip-BkqI6U6A.js";import"./index-OkL7a2l2.js";import"./Button-BlcQ60k5.js";import"./SelectionIndicator-D9Fg3jDt.js";import"./usePress-ZiGbaZzJ.js";import"./Text-EG1aAmzm.js";import"./useCollection-_O7uR0kP.js";import"./VisuallyHidden-Dx7N9Iu0.js";import"./Autocomplete-6UbWrJdi.js";import"./Checkbox-CXRXvUAi.js";import"./Check-RA4dLzQy.js";import"./CheckIndeterminateSmall-BQjc4Eee.js";import"./useFormValidation-DS1Of17J.js";import"./useToggleState-DpN68xKf.js";import"./useFormReset-vzBLgnoh.js";import"./ComboBox-zC9jvUq6.js";import"./ComboBoxListBox-BRn7YNlu.js";import"./ListBox-Biimp9HY.js";import"./ListBox-CRhZOpWJ.js";import"./useLoadMoreSentinel-0LbcLFc3.js";import"./useLabel-CdGUclwM.js";import"./Pill-CmqED73B.js";import"./Input-Dpa4kBLw.js";import"./SelectBase-UM66AGz9.js";import"./Label-J_ie02mz.js";import"./index-DbGlvAzX.js";import"./Label-BfqPxNfA.js";import"./variants-DkqHdO62.js";import"./KeyboardArrowDown-mEt7fdmE.js";import"./filter-persistence-B1VoEymj.js";import"./sha256-Dk4EG7kS.js";import"./DateTimePicker-BQq5Fh61.js";import"./IconButton-B5KVNJNr.js";import"./ChevronBackward-CCxP5tNI.js";import"./ChevronForward-Dr6FwXVq.js";import"./Calendar-DfWUvwNW.js";import"./Form-CnRrtu-x.js";import"./ErrorMessage-DyDgCBu6.js";import"./PhoneNumberField-CNGwAavG.js";import"./index-C7CL5OQ7.js";import"./TextField-BgQ1gh-2.js";import"./Group-DRlM-70N.js";import"./useField-bqhDVJNH.js";import"./useTextField-DV_UXofQ.js";import"./RadioGroup-COzfyGf6.js";import"./RichTextEditor-zt3o_Luv.js";import"./Modal-CD84QN80.js";import"./Select-YtIG7dLM.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
