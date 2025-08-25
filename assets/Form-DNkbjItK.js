import{j as r}from"./iframe-ujk103Cs.js";import{useMDXComponents as e}from"./index-AQO6tfnV.js";import{M as i,C as m}from"./blocks-BZiQhCzJ.js";import{F as s,D as p}from"./Form.stories-DOvuzlSB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OuJI1gJC.js";import"./index-CDVw1zPm.js";import"./Button-BW0OxZcA.js";import"./utils-DxlCfH3y.js";import"./ButtonBase-VXexbD0K.js";import"./Loader-_0xFbZdX.js";import"./Tooltip-BkiPuQUC.js";import"./index-BbppvES2.js";import"./Button-BT52-R8B.js";import"./FocusScope-DNw28nRe.js";import"./Hidden-EXwI3VAV.js";import"./usePress-DA_1zPAW.js";import"./RSPContexts-C_ZhbxqO.js";import"./Separator-OxYCl-w7.js";import"./Text-BrFsriPo.js";import"./VisuallyHidden-_JtxR8f0.js";import"./Checkbox-BrCEgB6F.js";import"./Check-DaeS2KZu.js";import"./Form-DenevWFK.js";import"./useToggleState-DA0TMgwX.js";import"./useFormReset-Cygt4Q-s.js";import"./ComboBox-CpEKfEAa.js";import"./ListBox-Bxpx4jRN.js";import"./ListBox-Dxp_klxZ.js";import"./DragAndDrop-CB0wt9dB.js";import"./useLabel-DTcw5c8k.js";import"./Pill-sMM9wlSZ.js";import"./Input-CAoby45R.js";import"./SelectBase-CeuOa5P_.js";import"./Label-T_Iw0r22.js";import"./index-B8sXJ65X.js";import"./variants-ChWgFhAm.js";import"./KeyboardArrowDown-Dz62llIX.js";import"./DateTimePicker-CZjuISWy.js";import"./IconButton-B9fzdUKM.js";import"./ChevronBackward-CH-t3jHj.js";import"./ChevronForward-DlsSa1o3.js";import"./Form-CfSPOsRE.js";import"./ErrorMessage-CApDZsfz.js";import"./RadioGroup-I_rsWxAH.js";import"./FieldError-CXjT5qYa.js";import"./RichTextEditor-B0DDRacU.js";import"./Menu-Bu-XFe-w.js";import"./Toolbar-yvwwi-4b.js";import"./Select-gTAShW4o.js";import"./TextField-CTNquTkd.js";import"./Group-BuI6JAo9.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
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
