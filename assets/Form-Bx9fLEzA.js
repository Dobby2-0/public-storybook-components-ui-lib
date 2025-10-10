import{j as r}from"./iframe-CAHRDoSj.js";import{useMDXComponents as i}from"./index-Ij5zGJMW.js";import{M as e,C as m}from"./blocks-aCyBPLJ2.js";import{F as p,D as s}from"./Form.stories-Mc5P0awJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWor634J.js";import"./index-Bp86qpms.js";import"./Button-DTnDV5TU.js";import"./utils-DyzVzn3r.js";import"./ButtonBase-CH9lJCwm.js";import"./Loader-DDzIUxFb.js";import"./Tooltip-gYIcqAG-.js";import"./index-BqeQ6Jil.js";import"./Button-Dqgu38c6.js";import"./FocusScope-D_y_TiQe.js";import"./Hidden-kAA1FSnX.js";import"./usePress-CwS6QUX1.js";import"./RSPContexts-Np_bha3m.js";import"./Separator-CKhbfYPU.js";import"./Text-D0bauOWY.js";import"./VisuallyHidden-B5ne4b3M.js";import"./Checkbox-VZXGeCYT.js";import"./Check-C2Sw9Hss.js";import"./CheckIndeterminateSmall-mGR8UV5P.js";import"./Form-BUGxxl0G.js";import"./useToggleState-psu54_Sn.js";import"./useFormReset-DHe6iGzv.js";import"./ComboBox-B6pnhxmy.js";import"./ListBox-x_fD8Bt0.js";import"./ListBox-Bsnsuq65.js";import"./DragAndDrop-CaXMIa95.js";import"./useLabel-CfnI-lB-.js";import"./Pill-CFWl9Xbn.js";import"./Input-BoXN7PFl.js";import"./SelectBase-jiIw473B.js";import"./Label-BiMw_m6R.js";import"./index-CXdUdCRL.js";import"./variants-AnbSJ74B.js";import"./KeyboardArrowDown-XC_gZeGG.js";import"./DateTimePicker-BRemuzas.js";import"./IconButton-DO1CMlVY.js";import"./Calendar-Cu7aj0cm.js";import"./ChevronBackward-Dvij_9j0.js";import"./ChevronForward-nOQL-BRE.js";import"./Form-COk1483s.js";import"./ErrorMessage-CqVdOyTS.js";import"./RadioGroup-DdMmryDU.js";import"./FieldError-DNftNJED.js";import"./RichTextEditor-BBoGz9Lh.js";import"./Menu-C_tkiS47.js";import"./TableOutlined-DqPSksx9.js";import"./Toolbar-BQhADYSB.js";import"./Underline-D-PV_ToT.js";import"./Select-D5JGH2nq.js";import"./TextField-G9RJUXW8.js";import"./Group-DHKef5wS.js";import"./useTextField-CKNJxXdq.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
