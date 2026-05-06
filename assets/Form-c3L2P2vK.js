import{j as r}from"./iframe-CWPnyXiF.js";import{useMDXComponents as i}from"./index-CIo8U71W.js";import{M as e,C as m}from"./blocks-l2bEVetb.js";import{F as p,D as s}from"./Form.stories-CqM3seeI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPmBLuLs.js";import"./index-DhHbND3A.js";import"./index-QAmlznd9.js";import"./Button-BAwAwK9L.js";import"./useHover-CMUc1mlA.js";import"./ButtonBase-pB0rpVQP.js";import"./Loader-CT64ro5e.js";import"./Tooltip-BlYj_nD2.js";import"./index-B4E4YJ4E.js";import"./Button-BGtGh5Ga.js";import"./SelectionIndicator-D5OlXxU3.js";import"./usePress-B-EGBYnJ.js";import"./Text-CZqWnfdj.js";import"./useCollection-st_MUtLe.js";import"./VisuallyHidden-BjVEAqo-.js";import"./Autocomplete-C4GIrfvA.js";import"./Checkbox-mUSFY9ZC.js";import"./Check-CSzrKaPY.js";import"./CheckIndeterminateSmall-Cy9E8lzI.js";import"./useFormValidation-B5enr6lF.js";import"./useToggleState-ChvMfzKL.js";import"./useFormReset-BF9U8gIz.js";import"./ComboBox-DR3PvQBV.js";import"./ComboBoxListBox-Df-z0Ucf.js";import"./ListBox-DrkDleTs.js";import"./ListBox-B89ZhFG_.js";import"./useLoadMoreSentinel-Tb_koUDW.js";import"./useLabel-Cpoljd6s.js";import"./Pill-ahlIUWlJ.js";import"./Input-DRT-ed_K.js";import"./SelectBase-6wWOOH1d.js";import"./Label-l5SphkYs.js";import"./index-DSwJ-WTm.js";import"./Label-BAvWoAhT.js";import"./variants-UQaP4fRY.js";import"./KeyboardArrowDown-Dvv_DDHb.js";import"./filter-persistence-BvBxMton.js";import"./sha256-Bjrv8gy-.js";import"./DateTimePicker-CYfaH70I.js";import"./IconButton-ZgKE5-b8.js";import"./ChevronBackward-C9KFLdt9.js";import"./ChevronForward-kahqzaez.js";import"./Calendar-CYQKQnBi.js";import"./Form-5hBfM729.js";import"./ErrorMessage-DJSf2oml.js";import"./PhoneNumberField-Ca9OZceU.js";import"./index-C7CL5OQ7.js";import"./TextField-CuH6MaXj.js";import"./Group-BWf4DXce.js";import"./useField-BaBUUClP.js";import"./useTextField-Pp2fefFn.js";import"./RadioGroup-Cg1XvcH6.js";import"./RichTextEditor-CmiatrD6.js";import"./Modal-UhUqmkm1.js";import"./Select-BfERwp0Z.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{fr as default};
