import{j as r}from"./iframe-DOEMzuam.js";import{useMDXComponents as i}from"./index-CZ9eTqRe.js";import{M as e,C as m}from"./blocks-BmkuwbEL.js";import{F as p,D as s}from"./Form.stories-CbohTTlH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bnt6Gc7W.js";import"./index-Dn_XhLxL.js";import"./Button-BUeSoruP.js";import"./utils-DizTnrji.js";import"./ButtonBase-dQm3IC0o.js";import"./Loader-BZt7Nvuk.js";import"./Tooltip-A6koCDhp.js";import"./index-BZaGwZkm.js";import"./Button-XDuaZPrS.js";import"./FocusScope-BoddPA8X.js";import"./Hidden-DwCV_ylR.js";import"./usePress-DFglrxRi.js";import"./RSPContexts-WozHWclV.js";import"./Separator-C9e9UjEp.js";import"./Text-BlSQIPNO.js";import"./VisuallyHidden-D_g1tEK1.js";import"./Checkbox-CpJZnss2.js";import"./Check-DHRgzTIQ.js";import"./CheckIndeterminateSmall-DMIy4yPU.js";import"./Form-BZPoxeHS.js";import"./useToggleState-DiWgNRrG.js";import"./useFormReset-Crc1K4Z5.js";import"./ComboBox-CD-grwL8.js";import"./ListBox-CYIEqJJN.js";import"./ListBox-B_3rnM85.js";import"./DragAndDrop-B7yWKXi_.js";import"./useLabel-CrRyLqgI.js";import"./Pill-QJK3Amph.js";import"./Input-BrqyK2tL.js";import"./SelectBase-BJYzzd6c.js";import"./Label-D4X2nlyB.js";import"./index-jl_P50D2.js";import"./variants-Pi5couSY.js";import"./KeyboardArrowDown-DldpL-ho.js";import"./DateTimePicker-CO1NNHzR.js";import"./IconButton-CeXMKecn.js";import"./Calendar-G0a_rpgm.js";import"./ChevronBackward-DRqO45pd.js";import"./ChevronForward-xUiEkUpu.js";import"./Form-K_zvSXZh.js";import"./ErrorMessage-B5ZGyTVq.js";import"./RadioGroup-Bf0ZlUAL.js";import"./FieldError-BHdk6JG-.js";import"./RichTextEditor-Cls2Ihxc.js";import"./Menu-DdoiygUr.js";import"./TableOutlined-7fJ-H02Z.js";import"./Toolbar-CgehDkE5.js";import"./Underline-CSCqDL_v.js";import"./Select-CHLnOmuo.js";import"./TextField-D1G-Lsc8.js";import"./Group-Cl6-cpuG.js";import"./useTextField-BgbmyFAZ.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function lr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{lr as default};
