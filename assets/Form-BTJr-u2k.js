import{j as r}from"./iframe-CZksL5En.js";import{useMDXComponents as i}from"./index-Dfqtnl8u.js";import{M as e,C as m}from"./blocks-D1klgGFI.js";import{F as p,D as s}from"./Form.stories-DnkaANWR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEiKeTfP.js";import"./index-BgdtoxEC.js";import"./Button-HxKFaTMR.js";import"./utils-COL0tqz2.js";import"./ButtonBase-Lrva-ME6.js";import"./Loader-DrD17BOK.js";import"./Tooltip-Bxn9ACly.js";import"./index-BEn5an2L.js";import"./Button-C9K4X3dI.js";import"./FocusScope-BbM6KRrx.js";import"./Hidden-CuUlOXSV.js";import"./usePress-Duq_bcqf.js";import"./RSPContexts-cDTZ3t3D.js";import"./Separator-SO3Z106d.js";import"./Text-Bl2g3mel.js";import"./VisuallyHidden-BHrkkriS.js";import"./Checkbox-B8ZpRwQM.js";import"./Check-D5q7GUfA.js";import"./CheckIndeterminateSmall-BBxZUknp.js";import"./Form-BviLtriC.js";import"./useToggleState-BrO6niW1.js";import"./useFormReset-DKa7fVWo.js";import"./ComboBox-BdnOfVGA.js";import"./ListBox-itBwQFkn.js";import"./ListBox-BZ2TFunV.js";import"./DragAndDrop-D791VrBD.js";import"./useLabel-B2Im7iTG.js";import"./Pill-Pny9P-ti.js";import"./Input-ySfQ6Hsz.js";import"./SelectBase-BE6-tveq.js";import"./Label-DJwWHgFx.js";import"./index-DEN5lkrX.js";import"./variants-rCwG2jtL.js";import"./KeyboardArrowDown-V3IbobSQ.js";import"./DateTimePicker-_6Dum1an.js";import"./IconButton-CNJx-FRM.js";import"./Calendar-BcoPrpmD.js";import"./ChevronBackward-DXjMs_0k.js";import"./ChevronForward-C9Yz7_rS.js";import"./Form-qct7jVNw.js";import"./ErrorMessage-DG21VOpW.js";import"./RadioGroup-BeSuQbri.js";import"./FieldError-D0oXvLZp.js";import"./RichTextEditor-BOJD4gOB.js";import"./Menu-Dnm7dIv6.js";import"./TableOutlined-Cb0kRezx.js";import"./Toolbar-JANz62xD.js";import"./Underline-B0q4MM9n.js";import"./Select-Cp1W84kl.js";import"./TextField-Czciw7Vc.js";import"./Group-CYe3HucW.js";import"./useTextField-fpRXqcal.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
