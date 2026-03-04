import{j as r}from"./iframe-Dbk9NPzZ.js";import{useMDXComponents as i}from"./index-BWlWmwCc.js";import{M as e,C as m}from"./blocks-DKcFo1p5.js";import{F as p,D as s}from"./Form.stories-BtLxc5km.js";import"./preload-helper-Dp1pzeXC.js";import"./index-TH42aMXO.js";import"./index-BVWlCnqj.js";import"./index-CxzSocwj.js";import"./Button-DbyjWNlw.js";import"./utils-B9xoQpOZ.js";import"./ButtonBase-Cps2nh9f.js";import"./Loader-BmfIixyy.js";import"./Tooltip-UK14ApDR.js";import"./index-Bv-T5nFX.js";import"./Button-DRkDMNdH.js";import"./FocusScope-BRqG8V6M.js";import"./Text-BpaktYUk.js";import"./usePress-Clz_n7Us.js";import"./RSPContexts-iH8h1ZVx.js";import"./Separator-CjOr100w.js";import"./VisuallyHidden-CtWysAFz.js";import"./Checkbox-DrzH_ElG.js";import"./Check-DwbWtzEO.js";import"./CheckIndeterminateSmall-BeqOcJ8-.js";import"./Form-yKrHej8T.js";import"./useToggleState-Bug_t-82.js";import"./useFormReset-DfqEy6da.js";import"./ComboBox-DSUU0LA1.js";import"./SingleComboBox-BGAYKzG7.js";import"./ListBox-C8KLv67H.js";import"./ListBox-BxXmjCPp.js";import"./DragAndDrop-DosNSucx.js";import"./useLabel-CVu8HgwW.js";import"./Pill-BF8jBIsv.js";import"./Input-G6Xu4jWC.js";import"./SelectBase-Bz47YmvU.js";import"./sha256-DG1qatbY.js";import"./Label-cKI6eZFU.js";import"./index-BwY6G9Be.js";import"./Label-DyqbNj-i.js";import"./variants-DiM3a8R1.js";import"./KeyboardArrowDown-hQA6mNN1.js";import"./DateTimePicker-DAq1zQKU.js";import"./IconButton-BAz_VGqy.js";import"./ChevronBackward-_ll--s99.js";import"./ChevronForward-D2SH_7fi.js";import"./Calendar-5LCXss9-.js";import"./Form-C2gZHPc3.js";import"./ErrorMessage-K-ECK15w.js";import"./PhoneNumberField-DmUp0dQH.js";import"./index-C7CL5OQ7.js";import"./TextField-C49_J4AV.js";import"./Group-CX2JXGdJ.js";import"./FieldError-CF7YGoHc.js";import"./useTextField-Dv7PuVcG.js";import"./RadioGroup-LdzimIwO.js";import"./RichTextEditor-DbBjdv6k.js";import"./Modal-c0k39qDj.js";import"./Select-EO-SVPFg.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
