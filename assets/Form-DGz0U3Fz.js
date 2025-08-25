import{j as r}from"./iframe-CTZsDE2u.js";import{useMDXComponents as e}from"./index-CdAn3vU0.js";import{M as i,C as m}from"./blocks-DBA42Cf8.js";import{F as s,D as p}from"./Form.stories-CtXCqRXz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwzThCEO.js";import"./index-CMVP4Fif.js";import"./Button-CiLDWSBc.js";import"./utils-bAZt0N9V.js";import"./ButtonBase-_Ly7loDx.js";import"./Loader-DLRVg_UP.js";import"./Tooltip-B8SkggiN.js";import"./index-ogfqhSKE.js";import"./Button-C8QzKROd.js";import"./FocusScope-YJp-WsX4.js";import"./Hidden-JKpfh4sA.js";import"./usePress-BzCN4qgC.js";import"./RSPContexts-C2fwjDal.js";import"./Separator-KPU7nNxm.js";import"./Text-CSJlu4DE.js";import"./VisuallyHidden-DOZJS0D7.js";import"./Checkbox-CGXCP7V9.js";import"./Check-Dh3X0Clu.js";import"./Form-CrjNvhi-.js";import"./useToggleState-CVXJPdjM.js";import"./useFormReset-CPqCEFoV.js";import"./ComboBox-BqRAR9x9.js";import"./ListBox-BcS06XZl.js";import"./ListBox-867KVexL.js";import"./DragAndDrop-scVZCB5u.js";import"./useLabel-FwaD2lec.js";import"./Pill-CGtzY8_V.js";import"./Input-nVqXf51R.js";import"./SelectBase-C5D6JhNc.js";import"./Label-DGDI-zGD.js";import"./index-BCHfhcBV.js";import"./variants-BxpsAO_M.js";import"./KeyboardArrowDown-BRk5PKQT.js";import"./DateTimePicker-DN9E8Gkm.js";import"./IconButton--ywJRYCu.js";import"./ChevronBackward-BsIsAn6s.js";import"./ChevronForward-Ctmlr9FJ.js";import"./Form-DA95zSVP.js";import"./ErrorMessage-Bn0q2l98.js";import"./FieldError-CLLL3MGx.js";import"./RadioGroup-D7NCElF6.js";import"./RichTextEditor-D9-NBXwG.js";import"./Menu-Db7ccTeU.js";import"./Toolbar-B9q2RKgh.js";import"./Select-BpfbSknO.js";import"./TextField-D7WImRjg.js";import"./Group-BWnZViNT.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(m,{of:p}),`
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
`})})]})}function sr(t={}){const{wrapper:o}={...e(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{sr as default};
