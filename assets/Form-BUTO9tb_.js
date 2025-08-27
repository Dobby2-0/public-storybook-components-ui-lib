import{j as r}from"./iframe-DNoKtxhg.js";import{useMDXComponents as e}from"./index-CJ2P1iki.js";import{M as i,C as m}from"./blocks-u_Y0b1Oc.js";import{F as s,D as p}from"./Form.stories-KnsKXCMw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6qw46zt.js";import"./index-Buse-LnZ.js";import"./Button-C-99pNXT.js";import"./utils-CjaoiQdZ.js";import"./ButtonBase-9gO78yYW.js";import"./Loader-C1Wm69c0.js";import"./Tooltip-DojTDStl.js";import"./index-BAyy4ZRe.js";import"./Button-BVq8cRFE.js";import"./FocusScope-CheWUNn9.js";import"./Hidden-BkC718sq.js";import"./usePress-CWk3Znox.js";import"./RSPContexts-C_HQAxk_.js";import"./Separator-dinkM1rx.js";import"./Text-DDBXfyCI.js";import"./VisuallyHidden-D5DE70xt.js";import"./Checkbox-BoQOWMIC.js";import"./Check-BzFQLaiw.js";import"./Form-X5uZDhH0.js";import"./useToggleState-Dctq0WQK.js";import"./useFormReset-DIinY9b7.js";import"./ComboBox-Bwwc2oqY.js";import"./ListBox-CyTdCaUd.js";import"./ListBox-BPs2K5nT.js";import"./DragAndDrop-hUlJC3JF.js";import"./useLabel-DE6ZOCAx.js";import"./Pill-Cu5TwgyP.js";import"./Input-g-GV19a4.js";import"./SelectBase-D25GQSY3.js";import"./Label-DxZZTIFl.js";import"./index-Psbe8rtm.js";import"./variants-B6T0VKQU.js";import"./KeyboardArrowDown-BvqvPxvC.js";import"./DateTimePicker-BKdDeU_q.js";import"./IconButton-Dbw4FuZy.js";import"./ChevronBackward-OP0MPp-e.js";import"./ChevronForward-YDoQn2PF.js";import"./Form-BiQR47oX.js";import"./ErrorMessage-DaPS8jO_.js";import"./FieldError-R2N6O4hi.js";import"./RadioGroup-DlOo9qUO.js";import"./RichTextEditor-CUDHLNva.js";import"./Menu-rcoQsFSW.js";import"./Toolbar-grHtdaIE.js";import"./Select-SI1j6see.js";import"./TextField-DGj3IkeE.js";import"./Group-D91G00Pr.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
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
