import{j as r}from"./iframe-Bbdio10U.js";import{useMDXComponents as i}from"./index-BiSskKtp.js";import{M as e,C as m}from"./blocks-Ca7x3xSH.js";import{F as p,D as s}from"./Form.stories-ChzOoBew.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Du3hkKeC.js";import"./index-DwYOOHiY.js";import"./index-BlYnjWZJ.js";import"./Button-BhQkNEvc.js";import"./utils-o0DbLONt.js";import"./ButtonBase-B29ZS-UH.js";import"./Loader-C4FpJQGJ.js";import"./Tooltip-BlJMOe_l.js";import"./index-DL8v6lSA.js";import"./Button-C9YWg7pM.js";import"./FocusScope-BgSM8is-.js";import"./Text-DX01AUPE.js";import"./usePress-GIUfo9An.js";import"./RSPContexts-D-HQWkis.js";import"./Separator-ChYVyVRi.js";import"./VisuallyHidden-CrDW3dOS.js";import"./Checkbox-hP_izSef.js";import"./Check-B5_CoLL3.js";import"./CheckIndeterminateSmall-D6ODnkqo.js";import"./Form-Co5SPek8.js";import"./useToggleState-OJ56tcxg.js";import"./useFormReset-BHS4eVja.js";import"./ComboBox-CzK3V0Ao.js";import"./SingleComboBox-cy-bz4xK.js";import"./ListBox-DoGwqi9i.js";import"./ListBox-n_kiAAg6.js";import"./DragAndDrop-9WYbNBdU.js";import"./useLabel-Dm-iHBS5.js";import"./Pill-D-M-T70d.js";import"./Input-DkKhp2RW.js";import"./SelectBase-DYfrbQiw.js";import"./Label-BR0lLTfL.js";import"./index-q07NxN1o.js";import"./Label-CKTyyX1s.js";import"./variants-Crbjhq7L.js";import"./KeyboardArrowDown-CfkIcUBq.js";import"./DateTimePicker-DKgkghaI.js";import"./IconButton-CBwY49X9.js";import"./ChevronBackward-DFvY3GkP.js";import"./ChevronForward-DgNgdPb_.js";import"./Calendar-4D6rP63N.js";import"./Form-CjxJZ510.js";import"./ErrorMessage-CaKHk9ej.js";import"./PhoneNumberField-H1Zxm6ux.js";import"./index-C7CL5OQ7.js";import"./TextField-DMiglXuS.js";import"./Group-Db_KIEbq.js";import"./FieldError-7QD6bG-F.js";import"./useTextField-DaORNT_W.js";import"./RadioGroup-CbQ5nF8Y.js";import"./RichTextEditor-Cw3b0H7g.js";import"./Modal-B1IQAUU-.js";import"./Select-CoUfIXO-.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function hr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{hr as default};
