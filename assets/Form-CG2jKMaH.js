import{j as r}from"./iframe-Dt5ZFruU.js";import{useMDXComponents as i}from"./index-Ch_g6uyt.js";import{M as e,C as m}from"./blocks-DnEorK_p.js";import{F as p,D as s}from"./Form.stories-BKQrHQcA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IBUjkAG-.js";import"./index-g_UJPtR6.js";import"./index-DBx7LphP.js";import"./Button-Q-rhjQWd.js";import"./utils-C4ti3hoT.js";import"./ButtonBase-D_JUJID5.js";import"./Loader-tH2ByKI6.js";import"./Tooltip-CZ_WLqYu.js";import"./index-BkhYyv-i.js";import"./Button-DAxL8e33.js";import"./FocusScope-DiyDJAao.js";import"./Text-DMLuPAoM.js";import"./usePress-B5edpycu.js";import"./RSPContexts-CVFJqONS.js";import"./Separator-Ci-72ggl.js";import"./VisuallyHidden-Blst52FW.js";import"./Checkbox-CNF7fp5X.js";import"./Check-BF1HKG2M.js";import"./CheckIndeterminateSmall-Dq4wVn6j.js";import"./Form-2Wn2onfy.js";import"./useToggleState-7YsYUvGz.js";import"./useFormReset-DSn2odcv.js";import"./ComboBox-EqPK-xGJ.js";import"./SingleComboBox-Bua4EQsr.js";import"./ListBox-DXMGCIav.js";import"./ListBox-BR1knf9B.js";import"./DragAndDrop-CUNHBJe0.js";import"./useLabel-DiE2T77K.js";import"./Pill-C3JU_pPu.js";import"./Input-B0eU3Xjs.js";import"./filter-persistence-B5Y_gDCQ.js";import"./Label-CV5AQAa6.js";import"./index-DHbAauA2.js";import"./Label-BWg-kvBK.js";import"./variants-DctCfy_Q.js";import"./KeyboardArrowDown-Bg1hzzVq.js";import"./sha256-CvJmP0Q_.js";import"./DateTimePicker-B9e9koF4.js";import"./IconButton-D1enKiq_.js";import"./ChevronBackward-BXlux3p7.js";import"./ChevronForward-DlqW5bN2.js";import"./Calendar-Sg7N6_wh.js";import"./Form-Ddt670Z_.js";import"./ErrorMessage-BKkaBBDf.js";import"./PhoneNumberField-c-4uxd-F.js";import"./index-C7CL5OQ7.js";import"./TextField-gnTz1vQq.js";import"./Group-C9X_Rt1E.js";import"./FieldError-B8KXzh65.js";import"./useTextField-CLLa2ptq.js";import"./RadioGroup-DWZ8OPdv.js";import"./RichTextEditor-HUWXskzN.js";import"./Modal-DZFjXjFx.js";import"./Select-4Trd2G7Q.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
