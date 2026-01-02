import{j as r}from"./iframe-BYumUEqj.js";import{useMDXComponents as i}from"./index-BM6g5HLc.js";import{M as e,C as m}from"./blocks-BhhnJugj.js";import{F as p,D as s}from"./Form.stories-CTFfgEE5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cerk7jZ7.js";import"./index-Ct7FywXd.js";import"./index-CzCbh3GW.js";import"./Button-2-Lq6Xv8.js";import"./utils-DmPleNPi.js";import"./ButtonBase-FLLrr_f_.js";import"./Loader-2yPpCOMH.js";import"./Tooltip-ClE6LB0S.js";import"./index-BtPpEG5e.js";import"./Button-QDSONico.js";import"./FocusScope-CYYnJNQZ.js";import"./Text-HOHS8Yh-.js";import"./usePress-DNxk5E_A.js";import"./RSPContexts-BCJ4Z2uz.js";import"./Separator-BZwVFUZ5.js";import"./VisuallyHidden-BGhqA0HM.js";import"./Checkbox-Der2yD6L.js";import"./Check-vIqA8EeG.js";import"./CheckIndeterminateSmall-xjnELUJH.js";import"./Form-CeahTsSu.js";import"./useToggleState-DnF_GuLV.js";import"./useFormReset-buycbG7e.js";import"./ComboBox-0SXuPZeB.js";import"./SingleComboBox-Bd8oyeWz.js";import"./ListBox-Dg-jvKLH.js";import"./ListBox-DWXogx_m.js";import"./DragAndDrop-CXo7ZOiL.js";import"./useLabel-Bn-rd9-b.js";import"./Pill-CkJCj400.js";import"./Input-DiA8Ollg.js";import"./SelectBase-CSpLIeFM.js";import"./Label-JL8H_gsw.js";import"./index-z7SdNoX_.js";import"./Label-Cc2lmETZ.js";import"./variants-BNTPB0FD.js";import"./KeyboardArrowDown-C7jCuD51.js";import"./DateTimePicker-iQz96-OA.js";import"./IconButton-BKCW71WF.js";import"./ChevronBackward-1Y0qXB-X.js";import"./ChevronForward-Bdh95-OR.js";import"./Calendar-DX9RGc6a.js";import"./Form-By1qF210.js";import"./ErrorMessage-DF9zz_Zv.js";import"./PhoneNumberField-km-umV2Y.js";import"./index-C7CL5OQ7.js";import"./TextField-BO0ZpXBp.js";import"./Group-B_t8EfhO.js";import"./FieldError-BRzJb7fN.js";import"./useTextField-BOi_Sjsn.js";import"./RadioGroup-DUW4slT6.js";import"./RichTextEditor-DubduVrC.js";import"./Modal-5nn3O46j.js";import"./Select-BgdGJi-9.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
