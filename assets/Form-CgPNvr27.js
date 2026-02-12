import{j as r}from"./iframe-kQ4c0Yd4.js";import{useMDXComponents as i}from"./index-ZztgYyD2.js";import{M as e,C as m}from"./blocks-BARfiukj.js";import{F as p,D as s}from"./Form.stories-CoxGxSbf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdQGwq14.js";import"./index-DYkG9jtj.js";import"./index-CsrIcV8I.js";import"./Button-lo6HiPPu.js";import"./utils-DPXshW9P.js";import"./ButtonBase-BpYW2jkj.js";import"./Loader-DjZ1s7xl.js";import"./Tooltip-CmWwC_Gn.js";import"./index-D16zF9jG.js";import"./Button-D608CtPn.js";import"./FocusScope-DkD1PnN3.js";import"./Text-Cwsk3i_t.js";import"./usePress-B8mkcqOZ.js";import"./RSPContexts-5x-4Vb2P.js";import"./Separator-VWgbKG7T.js";import"./VisuallyHidden-BlpfzwTX.js";import"./Checkbox-DYv1N2nT.js";import"./Check-D25DeetW.js";import"./CheckIndeterminateSmall-9dsMXkLz.js";import"./Form-BAEkLNOt.js";import"./useToggleState-CFok9aME.js";import"./useFormReset-CKSokcbg.js";import"./ComboBox-l4D5-AkA.js";import"./SingleComboBox-DX2BZiZu.js";import"./ListBox-K-Qqiy2W.js";import"./ListBox-BpfY284Z.js";import"./DragAndDrop-BMAYr92j.js";import"./useLabel-5XbI8qbE.js";import"./Pill-isobBUI8.js";import"./Input-BR-csXWD.js";import"./filter-persistence-B2k8HGbF.js";import"./Label-BW0j8DJ7.js";import"./index-B4w9o77p.js";import"./Label-C4rnxR7f.js";import"./variants-DBAXpt0D.js";import"./KeyboardArrowDown-ClwYFSnh.js";import"./sha256-BId82lFL.js";import"./DateTimePicker-DiaaQO8S.js";import"./IconButton-c5jZQzoy.js";import"./ChevronBackward-IUCAMalB.js";import"./ChevronForward-DHm1Kbgb.js";import"./Calendar-BoBUueub.js";import"./Form-CDWsYfzj.js";import"./ErrorMessage-DGgwhh91.js";import"./PhoneNumberField-T5-A2-bp.js";import"./index-C7CL5OQ7.js";import"./TextField-CxcR5a-b.js";import"./Group-Ct_khpsc.js";import"./FieldError-CsYXbYdm.js";import"./useTextField-BD8tn0LI.js";import"./RadioGroup-BV9vNYPW.js";import"./RichTextEditor-CNogMuSu.js";import"./Modal-DrQ8QXZN.js";import"./Select-Dl2XxC0M.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
