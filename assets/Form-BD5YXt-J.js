import{j as r}from"./iframe-C1vGzIN0.js";import{useMDXComponents as i}from"./index-BeI4tLso.js";import{M as e,C as m}from"./blocks-B6nPW0Lh.js";import{F as p,D as s}from"./Form.stories-C_tSmqY1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWpAU5Ra.js";import"./index-Bq1BVUq9.js";import"./index-9CnBZ64x.js";import"./Button-BF5L9ZJK.js";import"./useHover-CujHnvyO.js";import"./ButtonBase-FJRpYA1s.js";import"./Loader-DeSGl8VP.js";import"./Tooltip-Dyi0MNPf.js";import"./index-DUADmaoI.js";import"./Button-CF1X--Bh.js";import"./SelectionIndicator-B5x0N5VQ.js";import"./usePress-BAgfS9mT.js";import"./Text-DmyGS1iW.js";import"./useCollection-CBaKeoa2.js";import"./VisuallyHidden-Bsz4IK0H.js";import"./Autocomplete-Coy3uqOG.js";import"./Checkbox-Bj1yzhPm.js";import"./Check-BRVasYt7.js";import"./CheckIndeterminateSmall-sX3iZ9nV.js";import"./useFormValidation-Bib6_6D0.js";import"./useToggleState-DchEoPmG.js";import"./useFormReset-ChD4EY9v.js";import"./ComboBox-Di5er86u.js";import"./ComboBoxListBox-KFwUSpnH.js";import"./ListBox-rItGe8Uz.js";import"./ListBox-BrNGDLjj.js";import"./useLoadMoreSentinel-Dt7kRm6L.js";import"./useLabel-CJl1ityF.js";import"./Pill-C3vWeziO.js";import"./Input-BYB8D2Hr.js";import"./SelectBase-CdjU9ILs.js";import"./Label-sK-vXOZr.js";import"./index-TjFAGuW3.js";import"./Label-eOnzYb70.js";import"./variants-izUn93u2.js";import"./KeyboardArrowDown-CXI07uH6.js";import"./filter-persistence-DimCvJVP.js";import"./sha256-BWw-3Xd0.js";import"./DateTimePicker-BhRcyaE4.js";import"./IconButton-hY9_o2UU.js";import"./ChevronBackward-CO9R0N_u.js";import"./ChevronForward-poyBggNt.js";import"./Calendar-Cjf-0VpE.js";import"./Form-B1rt1IrL.js";import"./ErrorMessage-0WG6Yg7v.js";import"./PhoneNumberField-EoUeM9i1.js";import"./index-C7CL5OQ7.js";import"./TextField-DUiUnjyw.js";import"./Group-BfjPVf9q.js";import"./useField-ENgWlAn4.js";import"./useTextField-DWbKQiXE.js";import"./RadioGroup-gWsO0T6J.js";import"./RichTextEditor-CKKtpoW7.js";import"./Modal-DmI67Rbv.js";import"./Select-BLpDjdCe.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
