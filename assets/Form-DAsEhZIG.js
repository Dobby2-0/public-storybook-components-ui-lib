import{j as r}from"./iframe-DZ4iz06R.js";import{useMDXComponents as i}from"./index-CXRQq8I2.js";import{M as e,C as m}from"./blocks-Dy2rJzXG.js";import{F as p,D as s}from"./Form.stories-C65G0Gpd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRvrSVjt.js";import"./index-BYF-JKOK.js";import"./Button-J9uDLfmH.js";import"./utils-dnQturRe.js";import"./ButtonBase-BTbtU5ZY.js";import"./Loader-BzQ4QNcu.js";import"./Tooltip-Czx61z5t.js";import"./index-Bn4TehOl.js";import"./Button-Crze3F_z.js";import"./FocusScope-vtnTbGHA.js";import"./Hidden-DNDomPST.js";import"./usePress-DAoAAGAL.js";import"./RSPContexts-CEbtwRVA.js";import"./Separator-sKHgdX37.js";import"./Text-ieAo1rGX.js";import"./VisuallyHidden-CG9FKQyg.js";import"./Checkbox-DNrjF4li.js";import"./Check-8lbq2QO3.js";import"./CheckIndeterminateSmall-CLbvKbSf.js";import"./Form-BF1np-M9.js";import"./useToggleState-B7VZEJhO.js";import"./useFormReset-BOagHWDK.js";import"./ComboBox-DOq-5GSy.js";import"./ListBox-8WplZ_q0.js";import"./ListBox-CmjHxd3O.js";import"./DragAndDrop-BBlYYiVI.js";import"./useLabel-BgXQ2Dls.js";import"./Pill-BOd38cZN.js";import"./Input-9k992tVN.js";import"./SelectBase-C1Wk5ut6.js";import"./Label-Dwn1JaO_.js";import"./index-DzTh1wCX.js";import"./variants-CF_kUscs.js";import"./KeyboardArrowDown-Cqi17tZC.js";import"./DateTimePicker-wK6YPFNr.js";import"./IconButton-B7rLiM5q.js";import"./Calendar-CIgAPp40.js";import"./ChevronBackward-Cmfzd3LF.js";import"./ChevronForward-CBm9KjFV.js";import"./Form-C_pMD2lT.js";import"./ErrorMessage-79Mk8Dft.js";import"./RadioGroup-ka9Wu0B5.js";import"./FieldError-DFl0Y-fY.js";import"./RichTextEditor-DsfDpfrw.js";import"./Menu-DdP7z4rI.js";import"./TableOutlined-CknzCEx_.js";import"./Toolbar-CmVp9Od3.js";import"./Underline-DF5t30bb.js";import"./Select-rAxsUbYj.js";import"./TextField-DAVIQKaK.js";import"./Group-CQ4-op81.js";import"./useTextField-Cjc0N6WM.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
