import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as e,C as m}from"./index-CBYDKg5e.js";import{F as p,D as s}from"./Form.stories-CQ1-WEUF.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-DvIVKEhc.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-Bu8ga0_b.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-BbqFvpEd.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-DdjakKhW.js";import"./Loader-BsPrQ8_e.js";import"./Tooltip-DR1kSPWk.js";import"./index-BEoxFi6F.js";import"./Button-B72osXTA.js";import"./Separator-F-TqXpng.js";import"./usePress-BklFyQpc.js";import"./openLink-Btrk4R3c.js";import"./FocusScope-DTcBUnqK.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-B6XONKPt.js";import"./VisuallyHidden-C1QUg0KJ.js";import"./PortalProvider-ChirZUt_.js";import"./Checkbox-C-L1OaHW.js";import"./Check-CsX-RmMH.js";import"./Form-C_kJ7vQt.js";import"./useToggleState-BQugGUrK.js";import"./useFormReset-CNd6rKfM.js";import"./ComboBox-D4OGbOJO.js";import"./ListBox-DofWnsri.js";import"./ListBox-cehNwGeq.js";import"./DragAndDrop-CM0Wr761.js";import"./useLabel-D0PMa77V.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-D52yXNx1.js";import"./Close-Lw3CM0IZ.js";import"./Input-CKH2dVcA.js";import"./SelectBase-D-M4O5rD.js";import"./Label-BVYnJu1Z.js";import"./index-a5nvb9vf.js";import"./variants-CsVkyiyE.js";import"./Info-DXk7w5MR.js";import"./KeyboardArrowDown-3e0Y-526.js";import"./DateTimePicker-BoStMdOO.js";import"./IconButton-HqySd8IN.js";import"./ChevronBackward-BaD4ZkcE.js";import"./ChevronForward-CkT6jMu6.js";import"./Form-eQKgZaLm.js";import"./TextField-BgWgP9Zo.js";import"./FieldError-D23hDYUv.js";import"./RadioGroup-CNWyuTm6.js";import"./RichTextEditor-CDAGnGYD.js";import"./Menu-DP3ZQMlR.js";import"./Toolbar-RasgINYC.js";import"./Select-DiIN-6WM.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function jr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{jr as default};
