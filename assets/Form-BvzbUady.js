import{j as r}from"./iframe-BgkfVsmf.js";import{useMDXComponents as i}from"./index-DnLsI95G.js";import{M as e,C as m}from"./blocks-DnV0uZvQ.js";import{F as p,D as s}from"./Form.stories-CXQDWTui.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6GU5Ro02.js";import"./index-B7Nqf4HQ.js";import"./index-B78zPp_S.js";import"./Button-_WAXzj12.js";import"./utils-B_uYpZg6.js";import"./ButtonBase-CioJjg2d.js";import"./Loader-p_Vo8jN9.js";import"./Tooltip-mtjqNT-I.js";import"./index-Bk8zKqwE.js";import"./Button-QLg2rNda.js";import"./FocusScope-DNnYTmnf.js";import"./Text-_Or1wmkT.js";import"./usePress-DpQfVuhL.js";import"./RSPContexts-mRHsgW0l.js";import"./Separator-Dt3NtIOW.js";import"./VisuallyHidden-qfpDzjbl.js";import"./Checkbox-CoPViu_3.js";import"./Check-BTfkaUK1.js";import"./CheckIndeterminateSmall-1pSj2NgT.js";import"./Form-zDn7ECcE.js";import"./useToggleState-Bz_10_1Y.js";import"./useFormReset-DzVBi8uB.js";import"./ComboBox-ChzUA91K.js";import"./SingleComboBox-BMZ7ZVTT.js";import"./ListBox-B7Ub8xZO.js";import"./ListBox-BOF-YwbN.js";import"./DragAndDrop-DHK0tXw1.js";import"./useLabel-CUIwe2JB.js";import"./Pill-BFyhyGn4.js";import"./Input-CeZfieuh.js";import"./filter-persistence-0SyBUREP.js";import"./Label-CoDhxC3c.js";import"./index-DnMm683m.js";import"./Label-8EXxjjpB.js";import"./variants-xTHvPX8Z.js";import"./KeyboardArrowDown-CERo_KLE.js";import"./sha256-BoTivxLr.js";import"./DateTimePicker-5VVUWcAS.js";import"./IconButton-CeUm4Fdn.js";import"./ChevronBackward-DzgJxEOv.js";import"./ChevronForward-QNIiOF8T.js";import"./Calendar-B9ZNp_UD.js";import"./Form-CT60vPC2.js";import"./ErrorMessage-zBgThyzu.js";import"./PhoneNumberField-CIe7EYID.js";import"./index-C7CL5OQ7.js";import"./TextField-BLjya4WA.js";import"./Group-C0jXSrz5.js";import"./FieldError-Bd6QDQ0X.js";import"./useTextField-DrgkrAu9.js";import"./RadioGroup-CWVvRUDS.js";import"./RichTextEditor-DEyz6fCI.js";import"./Modal-DDXAo3CP.js";import"./Select-CKC7cjfL.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
