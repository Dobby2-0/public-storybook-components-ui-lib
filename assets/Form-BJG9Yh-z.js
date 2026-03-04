import{j as r}from"./iframe-CR-DZe2S.js";import{useMDXComponents as i}from"./index-DNx85Lgk.js";import{M as e,C as m}from"./blocks-BJsQh5lX.js";import{F as p,D as s}from"./Form.stories-DusTzE-B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRAkue47.js";import"./index-DE98puDd.js";import"./index-k97qKrQu.js";import"./Button-BKtZAKip.js";import"./utils-MogbmQpd.js";import"./ButtonBase-CKl0ILxM.js";import"./Loader-CHcImFvN.js";import"./Tooltip-BUPUSf_5.js";import"./index-DmhtxPl_.js";import"./Button-CS0fzLJn.js";import"./FocusScope-B98o_SCP.js";import"./Text-D1iKloKO.js";import"./usePress-DSqldAbN.js";import"./RSPContexts-BSiDlk35.js";import"./Separator-ET3Zna4S.js";import"./VisuallyHidden-C2m0AmjI.js";import"./Checkbox-CtOj8AaH.js";import"./Check-C0vVWLYW.js";import"./CheckIndeterminateSmall-B_3Mcssd.js";import"./Form-Bx8b2yOW.js";import"./useToggleState-BXq0N2PU.js";import"./useFormReset-2BHxyeRj.js";import"./ComboBox-DaA0XJfH.js";import"./SingleComboBox-DF22WHCR.js";import"./ListBox-CKBBDlGe.js";import"./ListBox-8vjLlk-E.js";import"./DragAndDrop-BMbiKIe1.js";import"./useLabel-Dx05tmhm.js";import"./Pill-CV0uFtYk.js";import"./Input-BPzYrNrC.js";import"./SelectBase-DQ1ZWACc.js";import"./sha256-2iCmlBnZ.js";import"./Label-XuXd7SE3.js";import"./index-v6REk9R8.js";import"./Label-cwUc0USr.js";import"./variants-gTznkEfe.js";import"./KeyboardArrowDown-B8Wkp6RD.js";import"./DateTimePicker-BA2ebuTp.js";import"./IconButton-CepDHBmU.js";import"./ChevronBackward-D1yyMPGx.js";import"./ChevronForward-BJYAHJ-7.js";import"./Calendar-ulL__KqB.js";import"./Form-CTMABHJI.js";import"./ErrorMessage-Cz2896Dm.js";import"./PhoneNumberField-DX8UECbU.js";import"./index-C7CL5OQ7.js";import"./TextField-CV9FAG3X.js";import"./Group-BN9DhEO2.js";import"./FieldError-BtvGqxka.js";import"./useTextField-DgQnPZUm.js";import"./RadioGroup-bEIguBrJ.js";import"./RichTextEditor-B-Hg8fna.js";import"./Modal-BhLNeZUO.js";import"./Select-ASVTQbCR.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function ur(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{ur as default};
