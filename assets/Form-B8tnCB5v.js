import{j as r}from"./iframe-BxpDzqBk.js";import{useMDXComponents as i}from"./index-BhjpOxtp.js";import{M as e,C as m}from"./blocks-DpA4khpS.js";import{F as p,D as s}from"./Form.stories-Bsle6bMG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ckz3c10D.js";import"./index-de8NLQpv.js";import"./index-DXAAUhhG.js";import"./Button-CHE9_F9n.js";import"./useHover-CQPv9kXH.js";import"./ButtonBase-BIyoh5At.js";import"./Loader-D4O6dCEt.js";import"./Tooltip-B2aQCnJA.js";import"./index-DGrH-NED.js";import"./Button-Dx3qKNey.js";import"./SelectionIndicator-CKAcSFvH.js";import"./usePress-CF69GWM9.js";import"./Text-DMHLZ9F2.js";import"./useCollection-uwnWto8c.js";import"./VisuallyHidden-BtWZNOf_.js";import"./Autocomplete-OjHe189S.js";import"./Checkbox-CpYhyvKN.js";import"./Check-C99IRoQs.js";import"./CheckIndeterminateSmall-CFJ2n8pR.js";import"./useFormValidation-DBQUqkgW.js";import"./useToggleState-CEvK-IpS.js";import"./useFormReset-vkXybXBD.js";import"./ComboBox-GHn4pbzd.js";import"./ComboBoxListBox-BAQmkVbU.js";import"./ListBox-CZm3YyEV.js";import"./ListBox-Dn-EWkU1.js";import"./useLoadMoreSentinel-DbNmD9Xa.js";import"./useLabel-uQfF5Kkd.js";import"./Pill-EAssIo_y.js";import"./Input-1SaxmQCf.js";import"./SelectBase-DMs52A3u.js";import"./Label-hQaOzBc9.js";import"./index-B_Um-vP4.js";import"./Label-DM2OBeen.js";import"./variants-8H2OzYmC.js";import"./KeyboardArrowDown-BarmVwNQ.js";import"./filter-persistence-B1tUfpj_.js";import"./sha256-Ba7Hr0lL.js";import"./DateTimePicker-BtS3MYLm.js";import"./IconButton-Dv4dZ8QT.js";import"./ChevronBackward-uAbH55Eb.js";import"./ChevronForward-DOmca4WQ.js";import"./Calendar-BN0YmGV6.js";import"./Form-o_voga5p.js";import"./ErrorMessage-BDSSzByw.js";import"./PhoneNumberField-o2Xur0G9.js";import"./index-C7CL5OQ7.js";import"./TextField-BlVbLCkr.js";import"./Group-BQgCsaZT.js";import"./useField-Etz8wre5.js";import"./useTextField-TAIz-kCX.js";import"./RadioGroup-BlLtBndQ.js";import"./RichTextEditor-BjSEOrnj.js";import"./Modal-C9vntYAB.js";import"./Select-Dd5uVB__.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
