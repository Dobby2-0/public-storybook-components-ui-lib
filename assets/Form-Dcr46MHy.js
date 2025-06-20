import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-BKx0brzA.js";import{M as e,C as m}from"./index-Bef_99_s.js";import{F as p,D as s}from"./Form.stories-BxTfz3m1.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-B8cIl6mT.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-6KRtGud8.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-svuNaqvz.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-DsMG5DpB.js";import"./Loader-BsPrQ8_e.js";import"./Popover-DdtZAl2D.js";import"./Button-IosM9zLW.js";import"./Separator-C-G8_eqc.js";import"./usePress-BRLjaWWA.js";import"./openLink-Btrk4R3c.js";import"./FocusScope-D8XSZQfg.js";import"./Hidden-975QGLs-.js";import"./RSPContexts-B1Ggupi0.js";import"./Text-zz4c8jxy.js";import"./VisuallyHidden-9HlCxnFw.js";import"./PortalProvider-ChirZUt_.js";import"./index-CnKvRkWh.js";import"./Checkbox-w3skdhUP.js";import"./Check-FgbNu1D6.js";import"./Form-DCtv8psB.js";import"./useToggleState-DH29v3MT.js";import"./useFormReset-3hKGUw2k.js";import"./ComboBox-BA97y3DZ.js";import"./ListBox-CTabrlBj.js";import"./ListBox-DtmVd-dv.js";import"./DragAndDrop-CM0Wr761.js";import"./useLabel-BdzwDt_6.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-Abu_PXhx.js";import"./Close-CQRyCptx.js";import"./Input-SnyoRIBI.js";import"./SelectBase-DcQQzoDc.js";import"./Label-BVYnJu1Z.js";import"./index-a5nvb9vf.js";import"./variants-CsVkyiyE.js";import"./Info-z3VoMegj.js";import"./KeyboardArrowDown-yCNVdyss.js";import"./DateTimePicker-4UnwViu2.js";import"./IconButton-C2xFn3iC.js";import"./ChevronBackward-CX4kocVP.js";import"./ChevronForward-BsJowB8j.js";import"./Form-CeENbQkJ.js";import"./TextField-D3h3GvFU.js";import"./FieldError-DqtNbsXe.js";import"./RadioGroup-Dg3ojmvG.js";import"./RichTextEditor-BYHIbP9q.js";import"./Menu-BHzzB0jR.js";import"./Toolbar-C7PJH_wL.js";import"./Select-tFm6dcpi.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
