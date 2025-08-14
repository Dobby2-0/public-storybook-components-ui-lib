import{j as r}from"./iframe-CkSYBG_a.js";import{useMDXComponents as e}from"./index-DFrAqF28.js";import{M as i,C as m}from"./blocks-CbdXNSt7.js";import{F as s,D as p}from"./Form.stories-CnH3b46w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_tAX6-P.js";import"./index-CzNFAoCv.js";import"./Button-D1OIx_zW.js";import"./utils-DLSS263E.js";import"./ButtonBase-DXBFRlfj.js";import"./Loader-BXcMOFC4.js";import"./Tooltip-CubrmChN.js";import"./index-CKfOdylt.js";import"./Button-DrCeR2IJ.js";import"./Separator-CY-qgb1e.js";import"./usePress-D9Q6cESK.js";import"./FocusScope-DNkZkZxq.js";import"./Hidden-CyHnZAj4.js";import"./RSPContexts-8Pqb7FMg.js";import"./Text-DnVCXFQ3.js";import"./VisuallyHidden-COww4Kj4.js";import"./Checkbox-PdavBiiY.js";import"./Check-V9FbMaZt.js";import"./Form-G6XbviiV.js";import"./useToggleState-o55WBcrX.js";import"./useFormReset-DTQ54A20.js";import"./ComboBox-mpSQ06Zh.js";import"./ListBox-LST27CLP.js";import"./ListBox-GTBTS_wl.js";import"./DragAndDrop-B2XLDND3.js";import"./useLabel-BlfCFFHM.js";import"./Pill-DnnBfJhf.js";import"./Input-bBMUpprs.js";import"./SelectBase-C1YYgpqf.js";import"./Label-B3zHKQDD.js";import"./index-fSEFgYUU.js";import"./variants-1cQ86g38.js";import"./KeyboardArrowDown-Yl24jo4p.js";import"./DateTimePicker-CYAPl-X7.js";import"./IconButton-C7q31Iug.js";import"./ChevronBackward-BkyejQxY.js";import"./ChevronForward-DOpB8PRT.js";import"./Form-C0VW28Gr.js";import"./TextField-D_1Yp9In.js";import"./FieldError-D7me8yLZ.js";import"./RadioGroup-DpYRvWIY.js";import"./RichTextEditor-Duz8uOae.js";import"./Menu-Dk76MR-X.js";import"./Toolbar-CNZ8lvTC.js";import"./Select-CMB28i5X.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
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
`})})]})}function ir(n={}){const{wrapper:o}={...e(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(t,{...n})}):t(n)}export{ir as default};
