import{j as r}from"./iframe-CH7h3U8V.js";import{useMDXComponents as i}from"./index-IjEmag0X.js";import{M as e,C as m}from"./blocks-B_lDvC4F.js";import{F as p,D as s}from"./Form.stories-CjQS3pC2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J4h-2R7O.js";import"./index-BckUZTgf.js";import"./index-D4A8TaiF.js";import"./Button-DcqqCYT8.js";import"./useHover-CZDmPdFS.js";import"./ButtonBase-K-oI949Y.js";import"./Loader-B_pZvink.js";import"./Tooltip-CcYb4GNc.js";import"./index-Bd1NXLw_.js";import"./Button-D6Gv_3si.js";import"./SelectionIndicator-JHbJ9Xkw.js";import"./usePress-C8lzPp6I.js";import"./Text-BWkTEYgb.js";import"./useCollection-BOybYtgF.js";import"./VisuallyHidden-BCQz32Rf.js";import"./Autocomplete-CrI-MANm.js";import"./Checkbox-BvTk2cIl.js";import"./Check-BQdXooUT.js";import"./CheckIndeterminateSmall-CFwD4ARL.js";import"./useFormValidation-DGoLihJ1.js";import"./useToggleState-DatzaFJy.js";import"./useFormReset-CQnmrfDz.js";import"./ComboBox-BKlTIpfu.js";import"./ComboBoxListBox-CVf-7pmn.js";import"./ListBox-CS6omxNF.js";import"./ListBox-CrtFpsN0.js";import"./useLoadMoreSentinel-bRhNIs_q.js";import"./useLabel-DmZ2ujYB.js";import"./Pill-DcOR1XRN.js";import"./Input-BVZwtBAk.js";import"./SelectBase-DRekj_uA.js";import"./Label-CemdAsXo.js";import"./index-Bh7NUlUf.js";import"./Label-BoBMW2go.js";import"./variants-gQP7Blko.js";import"./KeyboardArrowDown-7-ES_wIS.js";import"./filter-persistence-DCOpaI7o.js";import"./sha256-DKdS_D-r.js";import"./DateTimePicker-CYA8MKAJ.js";import"./IconButton-BgMPRSY_.js";import"./ChevronBackward-BXthiV4X.js";import"./ChevronForward-Gbq-jCDj.js";import"./Calendar-Fmf2iLy_.js";import"./Form-D4OvKx5t.js";import"./ErrorMessage-BH29XFLF.js";import"./PhoneNumberField-JAO4rxMH.js";import"./index-C7CL5OQ7.js";import"./TextField-9nX5oqUQ.js";import"./Group-BjNGwmcd.js";import"./useField-9WQXQVHE.js";import"./useTextField-BHTUYN9u.js";import"./RadioGroup-Yq2pQfe9.js";import"./RichTextEditor-3GHz5Wzo.js";import"./Modal-UlUxmg-0.js";import"./Select-DMvm-WsH.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
