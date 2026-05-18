import{j as r}from"./iframe-_r4zkpJs.js";import{useMDXComponents as i}from"./index-DB3rddMX.js";import{M as e,C as m}from"./blocks-9_YNwEwX.js";import{F as p,D as s}from"./Form.stories-DqnqoAFH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-JtYlRQJF.js";import"./index-B8OF1t7r.js";import"./index-Cjhu8_Dj.js";import"./Button-DGDQYpfr.js";import"./useHover-COEADJmR.js";import"./ButtonBase-C3IiCU3a.js";import"./Loader-DsBTWAS4.js";import"./Tooltip-DEkAEmBS.js";import"./index-CxfYqbSx.js";import"./Button-eAueHdKQ.js";import"./SelectionIndicator-D6Hmcec7.js";import"./usePress-CFH9OGw_.js";import"./Text-yvX1_btQ.js";import"./useCollection-Br_iJuJX.js";import"./VisuallyHidden-DeiVJ0W9.js";import"./Autocomplete-B4NkeyXp.js";import"./Checkbox-C6EQTX7X.js";import"./Check-DBcKlBej.js";import"./CheckIndeterminateSmall-CgeWmSb6.js";import"./useFormValidation-DLFPZl_0.js";import"./useToggleState-B-ExFXY8.js";import"./useFormReset-BTfFq6ab.js";import"./ComboBox-RKrX64Dk.js";import"./ComboBoxListBox-C24fDrIW.js";import"./ListBox-4ph3IdUw.js";import"./ListBox-BlBHejXs.js";import"./useLoadMoreSentinel-CCqFvu7P.js";import"./useLabel-CElemXB4.js";import"./Pill-B25dgnaL.js";import"./Input-CZqX2wCp.js";import"./SelectBase-DJBv5m4B.js";import"./Label-CY7PA7Lr.js";import"./index-CygUwqqj.js";import"./Label-D3uPrXnv.js";import"./variants-59Dg2U1M.js";import"./KeyboardArrowDown-BD9WVQ8F.js";import"./filter-persistence-DIXTZaze.js";import"./sha256-CZu2pXMi.js";import"./DateTimePicker-QC4X3Ll2.js";import"./IconButton-mQQ5YbLp.js";import"./ChevronBackward-Cklzh382.js";import"./ChevronForward-pw7D1ewS.js";import"./Calendar-BBzUVRAu.js";import"./Form-DnX9zeh8.js";import"./ErrorMessage-DH8hWogh.js";import"./PhoneNumberField-QdfLE418.js";import"./index-C7CL5OQ7.js";import"./TextField-DkMYzb7h.js";import"./Group-EHwzi5bS.js";import"./useField-NcObRVOz.js";import"./useTextField-C-GBKHRk.js";import"./RadioGroup-Ce_DRsc9.js";import"./RichTextEditor-DUCsl5Nq.js";import"./Modal-Ba5r6QVv.js";import"./Select-BST1tO1D.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
