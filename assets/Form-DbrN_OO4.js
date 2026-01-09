import{j as r}from"./iframe-CplAapsX.js";import{useMDXComponents as i}from"./index-CKlv5d8s.js";import{M as e,C as m}from"./blocks-hRmjl2Kp.js";import{F as p,D as s}from"./Form.stories-C10KpOgB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CsyXmV7m.js";import"./index-RIj34x3n.js";import"./index-1qNirS9T.js";import"./Button-yuAv3Z_P.js";import"./utils-BP1FQsAo.js";import"./ButtonBase-ZUXJNHQV.js";import"./Loader-DO4ogSHn.js";import"./Tooltip-DHBwmVO4.js";import"./index-DxhgBWXY.js";import"./Button-BmwiX6Hk.js";import"./FocusScope-Co7oTpXY.js";import"./Text-jeQCP_Xd.js";import"./usePress-DKuUVNPj.js";import"./RSPContexts-B7LFnw2w.js";import"./Separator-Bj5eosGN.js";import"./VisuallyHidden-BtQ6MD1n.js";import"./Checkbox-DBlbn0de.js";import"./Check-CBSnSxms.js";import"./CheckIndeterminateSmall-CIU_gyn7.js";import"./Form-BHxweaa0.js";import"./useToggleState-g6kivo64.js";import"./useFormReset-buhRQ0Qq.js";import"./ComboBox-BdFe02Wg.js";import"./SingleComboBox-BSau3Jxm.js";import"./ListBox-CApBvx9-.js";import"./ListBox-BozHGlPt.js";import"./DragAndDrop-DgxJg4d0.js";import"./useLabel-BrOdjh3H.js";import"./Pill-Gd39E3vN.js";import"./Input-FMjyMLhH.js";import"./SelectBase-CPv_W1Nd.js";import"./Label-BmoMV9je.js";import"./index-BKBntAAk.js";import"./Label-CDhDbCJZ.js";import"./variants-CB0fdHXi.js";import"./KeyboardArrowDown-D7zVXJq7.js";import"./DateTimePicker-HWysf3D0.js";import"./IconButton-m9GXKDaS.js";import"./ChevronBackward-Dhkw_V5K.js";import"./ChevronForward-MdVWDp4A.js";import"./Calendar-BDvuoczA.js";import"./Form-Dzb-gr4q.js";import"./ErrorMessage-BStnkxSq.js";import"./PhoneNumberField-18rIid9_.js";import"./index-C7CL5OQ7.js";import"./TextField-cmSnUa2o.js";import"./Group-B84DRFsA.js";import"./FieldError-CZ_3F4IE.js";import"./useTextField-BAjHgY2b.js";import"./RadioGroup-BzeeMva6.js";import"./RichTextEditor-CRw6Tnnt.js";import"./Modal-0H3481Qt.js";import"./Select-DvmBaKWA.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
