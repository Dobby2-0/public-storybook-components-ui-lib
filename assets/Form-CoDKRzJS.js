import{j as r}from"./iframe-D47Q0F9X.js";import{useMDXComponents as i}from"./index-BhS9SrsP.js";import{M as e,C as m}from"./blocks-Dmw2daHE.js";import{F as p,D as s}from"./Form.stories-DooGXXnB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1wSKHgt.js";import"./index-hDndN7gJ.js";import"./index--uK4uYFc.js";import"./Button-C4umv2Ak.js";import"./useHover-pLr5c3Hy.js";import"./ButtonBase-C1oxplRw.js";import"./Loader-CLMOnD55.js";import"./Tooltip-B2pnY3ao.js";import"./index-FReOJIC3.js";import"./Button-CeGI_FXZ.js";import"./SelectionIndicator-rjQEW9qv.js";import"./usePress-GQmnMZtx.js";import"./Text-CqcZmn8Z.js";import"./useCollection-Clj363tL.js";import"./VisuallyHidden-CJf2mle4.js";import"./Autocomplete-CB5pSjOe.js";import"./Checkbox-ZXU_zeBX.js";import"./Check-DYB2kqiC.js";import"./CheckIndeterminateSmall-DtOvRuHM.js";import"./useFormValidation-Bzv9RHuy.js";import"./useToggleState-BoStayeS.js";import"./useFormReset-D8iwcPVN.js";import"./ComboBox-xGqyBPtq.js";import"./ComboBoxListBox-DVHFeCoM.js";import"./ListBox-DpEnRpOT.js";import"./ListBox-BQ_ff7Dm.js";import"./useLoadMoreSentinel-apYGzlK-.js";import"./useLabel-DrZJMdWh.js";import"./Pill-CWgtPTGv.js";import"./Input-CaTE0for.js";import"./SelectBase-DdLE_6Aa.js";import"./Label-Ctz1Gmsq.js";import"./index-unM82PDI.js";import"./Label-BPN4USmQ.js";import"./variants-DCMXHoGR.js";import"./KeyboardArrowDown-CmUqbnk9.js";import"./filter-persistence-ng8r10gN.js";import"./sha256-Cd8QDyRt.js";import"./DateTimePicker-BL-UtIsI.js";import"./IconButton-BmPGutcO.js";import"./ChevronBackward-Cfstey5_.js";import"./ChevronForward-B3z0Tcga.js";import"./Calendar-BT5QiCIP.js";import"./Form-CVY4lSOP.js";import"./ErrorMessage-DH5O5g9U.js";import"./PhoneNumberField-CzE6GzJQ.js";import"./index-C7CL5OQ7.js";import"./TextField-CtFcDqt4.js";import"./Group-CwcpYhZr.js";import"./useField-DBg0prUx.js";import"./useTextField-DXAyCHd0.js";import"./RadioGroup-CzYUXscq.js";import"./RichTextEditor-CaQzY163.js";import"./Modal-BZRc9tKZ.js";import"./Select-CY4dX2Rc.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
