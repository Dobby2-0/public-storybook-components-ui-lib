import{j as r}from"./iframe--ORapl0g.js";import{useMDXComponents as e}from"./index-BeP8nd8C.js";import{M as i,C as m}from"./blocks-Dw1ArXB_.js";import{F as s,D as p}from"./Form.stories-HNFghjTs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKHttHNj.js";import"./index-CaCLYdMp.js";import"./Button-DDSA7BW7.js";import"./utils-Cv1xz1zE.js";import"./ButtonBase-BOYusBZx.js";import"./Loader-DdF7jla0.js";import"./Tooltip-BGv6pVvG.js";import"./index-CkoMMhQQ.js";import"./Button-eqeopGJw.js";import"./FocusScope-BpEghKV2.js";import"./Hidden-SoIF0k4h.js";import"./usePress-By4CL9r-.js";import"./RSPContexts-B1T6t5yN.js";import"./Separator-C0u92LTD.js";import"./Text-BIABf6fc.js";import"./VisuallyHidden-BVjXAy6h.js";import"./Checkbox-B3PbIZNi.js";import"./Check-YyUTyvmu.js";import"./Form-tglzIa1c.js";import"./useToggleState-BIgeq48n.js";import"./useFormReset-Cna1KUjD.js";import"./ComboBox-CSN3r5RO.js";import"./ListBox-DoItHQaA.js";import"./ListBox-BvbSc9PA.js";import"./DragAndDrop-OoEAE9FC.js";import"./useLabel-Bh2oL7iy.js";import"./Pill-U6Ad9MMn.js";import"./Input-CgyXhqg5.js";import"./SelectBase-B2PrqAVh.js";import"./Label-BdzfxD8L.js";import"./index-DkvCM_dj.js";import"./variants-5SPAD5d6.js";import"./KeyboardArrowDown-BltIBPuJ.js";import"./DateTimePicker-CmlApyEz.js";import"./IconButton-Djk_g2g-.js";import"./ChevronBackward-CwVM6ilk.js";import"./ChevronForward-DEHG48Dn.js";import"./Form-Htrgfo1s.js";import"./ErrorMessage-hhwOSXSL.js";import"./FieldError-DKPk9Q7H.js";import"./RadioGroup-GMNbo47M.js";import"./RichTextEditor-B4j2hikh.js";import"./Menu-BQUWE8hO.js";import"./Toolbar-NMnXTFgW.js";import"./Select-CQUQ917d.js";import"./TextField-CZg0kQeL.js";import"./Group---bW7RvR.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
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
