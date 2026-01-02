import{j as r}from"./iframe-Cf59BB2m.js";import{useMDXComponents as i}from"./index-BadXW6Tu.js";import{M as e,C as m}from"./blocks-C5P1SNu4.js";import{F as p,D as s}from"./Form.stories-CFczr3J1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cv7hAmAe.js";import"./index-BYq1RcUP.js";import"./index-BgxwcrQu.js";import"./Button-BHfJEisQ.js";import"./utils-7d9ue3Ya.js";import"./ButtonBase-Dn4dDKa9.js";import"./Loader-CHZVrFVF.js";import"./Tooltip-DAm4L83o.js";import"./index-_zVXbRPB.js";import"./Button-D5zpqd4m.js";import"./FocusScope-Hb3BODMY.js";import"./Text-DUhSASD0.js";import"./usePress-DHEYd569.js";import"./RSPContexts-D3i3zFQc.js";import"./Separator-D-cZvXOs.js";import"./VisuallyHidden-DYdxsg1X.js";import"./Checkbox-C8_mjOVJ.js";import"./Check-DtwMPYQS.js";import"./CheckIndeterminateSmall-BNlMJkhx.js";import"./Form-DbAWoLlV.js";import"./useToggleState-BxzUmP0I.js";import"./useFormReset-Ciththrw.js";import"./ComboBox-BdHl6a_N.js";import"./SingleComboBox-Dj53WfCU.js";import"./ListBox-h-dWPs5x.js";import"./ListBox-DDoWKUg8.js";import"./DragAndDrop-Cq6WjINL.js";import"./useLabel-CLWpCBq7.js";import"./Pill-B_yM7vG5.js";import"./Input-CWSWOELh.js";import"./SelectBase-RvbGQcTX.js";import"./Label-BNkoYuny.js";import"./index-CWtkQZMw.js";import"./Label-KLsFGmd8.js";import"./variants-Bgnl3evm.js";import"./KeyboardArrowDown-CkpxCp9D.js";import"./DateTimePicker-C_reo3gT.js";import"./IconButton-BZa82xcS.js";import"./ChevronBackward-BpZknrFE.js";import"./ChevronForward-bRl41ZeU.js";import"./Calendar-5B4bU0uo.js";import"./Form-BVLIpRse.js";import"./ErrorMessage-Q5YafXdQ.js";import"./PhoneNumberField-4L8jy2yv.js";import"./index-C7CL5OQ7.js";import"./TextField-CdsZaROY.js";import"./Group-9qDLmDoV.js";import"./FieldError-CImqr5V9.js";import"./useTextField-BBbI_RXZ.js";import"./RadioGroup-Bx7duJ3y.js";import"./RichTextEditor-DH0aEsf8.js";import"./Modal-Co03dDDo.js";import"./Select-CN7TIdCl.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
