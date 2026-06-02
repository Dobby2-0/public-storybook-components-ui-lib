import{j as r}from"./iframe-CaZFVN_9.js";import{useMDXComponents as i}from"./index-BHRxVE2L.js";import{M as e,C as m}from"./blocks-8z_LE11e.js";import{F as p,D as s}from"./Form.stories-DOhmAQG9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-uwxQVn1y.js";import"./index-CLCrd1v8.js";import"./index-v4jCvFNp.js";import"./Button-Bo3XKLn4.js";import"./useHover-BoXWJKk9.js";import"./ButtonBase-B9ZVMJr2.js";import"./Loader-CNtiz6lD.js";import"./Tooltip-BOPypVNs.js";import"./index-HlvUt4pR.js";import"./Button-DNYoyAmb.js";import"./SelectionIndicator-BciKvVnt.js";import"./usePress-DkSoGaAR.js";import"./Text-DgX_7obh.js";import"./useCollection-CVV0kPR0.js";import"./VisuallyHidden-Di4IygHH.js";import"./Autocomplete-CDL1J41e.js";import"./Checkbox-1NSEeikw.js";import"./Check-CF41mqP0.js";import"./CheckIndeterminateSmall-BesfFB8R.js";import"./useFormValidation-COE52moy.js";import"./useToggleState-CQVQk9JI.js";import"./useFormReset-Dx-OSkqH.js";import"./ComboBox-CIycZFUn.js";import"./ComboBoxListBox-DJaOFJn1.js";import"./ListBox-XN85NI9m.js";import"./ListBox-AWFh8cZ2.js";import"./useLoadMoreSentinel-Bskv3Dd7.js";import"./useLabel-BNROn0qh.js";import"./Pill-HIRp9urv.js";import"./Input-DHIA2bVi.js";import"./SelectBase-CEdbQ6Ui.js";import"./Label-DLnJIsa_.js";import"./index-DqkFhy5l.js";import"./Label-CdWlHfYN.js";import"./variants-zH1Mt9zZ.js";import"./KeyboardArrowDown-BpD4sA3J.js";import"./filter-persistence-Ca142Tl7.js";import"./sha256-DDZglZav.js";import"./DateTimePicker-S5Fl0g1d.js";import"./IconButton-JWOgiKJ_.js";import"./ChevronBackward-BdoJGlDU.js";import"./ChevronForward-aN5_eR41.js";import"./Calendar-C2ENPu7O.js";import"./Form-B_18ACOD.js";import"./ErrorMessage-Co_U_eae.js";import"./PhoneNumberField-CSoQVyoL.js";import"./index-C7CL5OQ7.js";import"./TextField-Cb8rPfpU.js";import"./Group-DxpWBngx.js";import"./useField-DywSONxV.js";import"./useTextField-BV3y0jgM.js";import"./RadioGroup-5lUEDsWW.js";import"./RichTextEditor-f-OBnQU8.js";import"./Modal-BFTAMgCw.js";import"./Select-zswh3EqQ.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
