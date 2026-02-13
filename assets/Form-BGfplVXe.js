import{j as r}from"./iframe-B9i1i_jP.js";import{useMDXComponents as i}from"./index-MFr5PDIH.js";import{M as e,C as m}from"./blocks-DTuLuUwr.js";import{F as p,D as s}from"./Form.stories-BcKYDcbA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Csh5slR5.js";import"./index-CrLGLku_.js";import"./index-DOjnVmw2.js";import"./Button-CO1paQYp.js";import"./utils-COnSNdsl.js";import"./ButtonBase-BxH8a2Bv.js";import"./Loader-DEOtInmN.js";import"./Tooltip-CW8Uqc4p.js";import"./index-DzortnFS.js";import"./Button-DhVDtCMU.js";import"./FocusScope-BE93lXUJ.js";import"./Text-DWLitGgz.js";import"./usePress-Dgns3jNl.js";import"./RSPContexts-DA2lXq6u.js";import"./Separator-DnQOT92P.js";import"./VisuallyHidden-3J33mx8J.js";import"./Checkbox-Ba3hEZAS.js";import"./Check-tjZQr-zW.js";import"./CheckIndeterminateSmall-dNt2LD9W.js";import"./Form-DWJuWKsi.js";import"./useToggleState-DBcKlUp1.js";import"./useFormReset-DqFL5vAo.js";import"./ComboBox-CO-bHjBk.js";import"./SingleComboBox-DPIzhnXe.js";import"./ListBox-B1prVJG_.js";import"./ListBox-D_6FCDxb.js";import"./DragAndDrop-TBpfYLRu.js";import"./useLabel-BJM0x48N.js";import"./Pill-qX-euCLy.js";import"./Input-DTmvkDPv.js";import"./filter-persistence-Dum4pIbc.js";import"./Label-CIadqGYr.js";import"./index-CHPf46pM.js";import"./Label-B397vG2u.js";import"./variants-BaDt2D4X.js";import"./KeyboardArrowDown-DikMXYmL.js";import"./sha256-DxXwWffl.js";import"./DateTimePicker-B0F4tRwM.js";import"./IconButton-1AuD1aYe.js";import"./ChevronBackward-BjMX8ise.js";import"./ChevronForward-DOw_KwHm.js";import"./Calendar-CgilH4JB.js";import"./Form-BMSHXoMZ.js";import"./ErrorMessage-D-GZc-Sp.js";import"./PhoneNumberField-Bo_AclCU.js";import"./index-C7CL5OQ7.js";import"./TextField-Be_08DB6.js";import"./Group-C09FUsF2.js";import"./FieldError-oORKfAmJ.js";import"./useTextField-CLcA1-ak.js";import"./RadioGroup-B6bJt7xs.js";import"./RichTextEditor-CmSrcqjF.js";import"./Modal-DnqQ88ta.js";import"./Select-DsDxhLSK.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
