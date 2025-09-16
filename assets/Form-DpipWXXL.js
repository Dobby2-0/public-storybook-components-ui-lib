import{j as r}from"./iframe-D4sFMyar.js";import{useMDXComponents as i}from"./index-C3KAw8QW.js";import{M as e,C as m}from"./blocks-DXE5Usp7.js";import{F as p,D as s}from"./Form.stories-BWNqn4rH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-s-DPKche.js";import"./index-BC_-Ympm.js";import"./Button-q4m-iYUK.js";import"./utils-DOnK1M50.js";import"./ButtonBase-CVvexrL6.js";import"./Loader-Cgfq8_fX.js";import"./Tooltip-CQoP5h70.js";import"./index-BNCz2s1m.js";import"./Button-CjbDBb9c.js";import"./FocusScope-BzhV52UM.js";import"./Hidden-Wfeot0h6.js";import"./usePress-BISTNL8U.js";import"./RSPContexts-htJPkFQW.js";import"./Separator-D00KM3wx.js";import"./Text-BVW_c2PG.js";import"./VisuallyHidden-1ujM2lm4.js";import"./Checkbox-_3C0CSuF.js";import"./Check-C9WDWs7Y.js";import"./Form-CIyVbpnm.js";import"./useToggleState-CHEnpu1L.js";import"./useFormReset-DZ9LAhHR.js";import"./ComboBox-BE3h3lZS.js";import"./ListBox-PA7NBarN.js";import"./ListBox-hkawBFHC.js";import"./DragAndDrop-CFD8lYjs.js";import"./useLabel-Bc0b5pqO.js";import"./Pill-CQ14XT6I.js";import"./Input-Dg5F4ttD.js";import"./SelectBase-DDDxSapH.js";import"./Label-2zUHcshT.js";import"./index-BqftwFYY.js";import"./variants-SlTHIkdS.js";import"./KeyboardArrowDown-DDbv4aZv.js";import"./DateTimePicker-C0gfqLLD.js";import"./IconButton-5yxa1Klk.js";import"./ChevronBackward-B8Wmf6zm.js";import"./ChevronForward-BGtCON-_.js";import"./Form-VD3dAvKO.js";import"./ErrorMessage-DU9GYziA.js";import"./RadioGroup-DRO1HD_c.js";import"./FieldError-DDBhGveY.js";import"./RichTextEditor-B79R8LgX.js";import"./Menu-D1d915y-.js";import"./Toolbar-COphEhgp.js";import"./Select-DaLoWExc.js";import"./TextField-Dlafg1sN.js";import"./Group-DDQea6ik.js";import"./useTextField-CiHasPdw.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function sr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{sr as default};
