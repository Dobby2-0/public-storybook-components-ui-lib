import{j as r}from"./iframe-Bb-F9-Qv.js";import{useMDXComponents as i}from"./index-D3dX7Xb4.js";import{M as e,C as m}from"./blocks-Dpr63_D7.js";import{F as p,D as s}from"./Form.stories-B-useQc3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIJBQyfn.js";import"./index-DCqJ3syt.js";import"./Button-KoeQPnwU.js";import"./utils-COU8szoP.js";import"./ButtonBase-CodM2qj1.js";import"./Loader-BG6xHHmv.js";import"./Tooltip-Chqs63KO.js";import"./index-B7jUlP7l.js";import"./Button-DZSvE5m6.js";import"./FocusScope-CeLUqzCL.js";import"./Hidden-go3X780L.js";import"./usePress-DxOAFx5a.js";import"./RSPContexts-CAtLG-s-.js";import"./Separator-t2nwopoQ.js";import"./Text-L47mxpUr.js";import"./VisuallyHidden-CFgwHoXT.js";import"./Checkbox-DUdnqMjt.js";import"./Check-CMsgfgg4.js";import"./CheckIndeterminateSmall-Cxs9DhnN.js";import"./Form-CEkTrBYx.js";import"./useToggleState-BXAnOuXM.js";import"./useFormReset-D0AR9fNE.js";import"./ComboBox-D6ELaXC0.js";import"./ListBox-BLXd4h5w.js";import"./ListBox-fXSTXWMD.js";import"./DragAndDrop-zpDXSf0h.js";import"./useLabel-BkLScheI.js";import"./Pill-CyZW_Gky.js";import"./Input-i_DqTx5w.js";import"./SelectBase-D2wnsdw1.js";import"./Label-CuM7HeB-.js";import"./index-ZjnUoIH6.js";import"./variants-CTpNxqX4.js";import"./KeyboardArrowDown-BWNFbXtR.js";import"./DateTimePicker-BvMGOC84.js";import"./IconButton-Csiz5Qi1.js";import"./Calendar-MWX4ivgc.js";import"./ChevronBackward-BNNkvL6W.js";import"./ChevronForward-0UZXdIZG.js";import"./Form-C_r1ThKv.js";import"./ErrorMessage-DPGKJKkO.js";import"./RadioGroup-5KgknuKc.js";import"./FieldError-C0l8ycpX.js";import"./RichTextEditor-ag060_hR.js";import"./Menu-DrMiFmlu.js";import"./TableOutlined-CmzsKv4N.js";import"./Toolbar-dwTrz5pN.js";import"./Underline-ChetQui7.js";import"./Select-D1F7hOCG.js";import"./TextField-CGMbTZet.js";import"./Group-BtiANFTj.js";import"./useTextField-CqF8k1SG.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
