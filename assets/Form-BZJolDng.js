import{j as r}from"./iframe-JIF1kEUS.js";import{useMDXComponents as i}from"./index-u6PxGEKe.js";import{M as e,C as m}from"./blocks-CyU8yvSx.js";import{F as p,D as s}from"./Form.stories--Qu7a98z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7LK-qAka.js";import"./index-DMNA0fIu.js";import"./index-DzXU7lvl.js";import"./Button-C0-i6d46.js";import"./useHover-DHyb8Qdz.js";import"./ButtonBase-DdK6Oukh.js";import"./Loader-CgakJsoh.js";import"./Tooltip-D80vFL2Z.js";import"./index-ct-HgTBq.js";import"./Button-DyK302lY.js";import"./SelectionIndicator-DhcrL_40.js";import"./usePress-DtXosapC.js";import"./Text-CMmeOcHc.js";import"./useCollection-B85HJTvZ.js";import"./VisuallyHidden-Do4qJvLF.js";import"./Autocomplete-B3kPQs_T.js";import"./Checkbox-DJ_Ik33A.js";import"./Check-DapBzBFU.js";import"./CheckIndeterminateSmall-BFMLsBR2.js";import"./useFormValidation-DoEJbiMD.js";import"./useToggleState-D7vlX4BY.js";import"./useFormReset-CtlHfajp.js";import"./ComboBox-D-WQmQMF.js";import"./ComboBoxListBox-2pSZQNY5.js";import"./ListBox-DO6YxmFY.js";import"./ListBox-Dvhi2JUp.js";import"./useLoadMoreSentinel-Cq2R_wKp.js";import"./useLabel-CL-fIXPD.js";import"./Pill-wsbcAx_Q.js";import"./Input--HP2vqWB.js";import"./SelectBase-BRkX5QXu.js";import"./Label-Diz0UzNa.js";import"./index-CC5ChHha.js";import"./Label-CGwVSuR-.js";import"./variants-DB4JeGes.js";import"./KeyboardArrowDown-tyaRR8Gn.js";import"./filter-persistence-CsNDGsz5.js";import"./sha256-DUMEM4d_.js";import"./DateTimePicker-DjvWo68z.js";import"./IconButton-DLRv__W6.js";import"./ChevronBackward-C-qItTW6.js";import"./ChevronForward-CAQRhIVQ.js";import"./Calendar-gZVhxOaf.js";import"./Form-Bu2o5ypa.js";import"./ErrorMessage-CiECTMOd.js";import"./PhoneNumberField-o4XrNXhI.js";import"./index-C7CL5OQ7.js";import"./TextField-Cp_0lM3N.js";import"./Group-7W_jY8-t.js";import"./useField-B0227RDq.js";import"./useTextField-Vxik3vZT.js";import"./RadioGroup-BWF3wZgQ.js";import"./RichTextEditor-CQj7O_DD.js";import"./Modal-zwkmQ0KV.js";import"./Select-BGPssAsF.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
