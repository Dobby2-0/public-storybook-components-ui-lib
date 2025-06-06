import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as n}from"./index-BKx0brzA.js";import{M as m,C as e}from"./index-DKDEEanR.js";import{F as p,D as s}from"./Form.stories-eP1T9yjV.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-BfHRfYcW.js";import"./index-CW62Yr2X.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-DVtnY_UE.js";import"./index-D8pzxCuu.js";import"./index-D35RSF8M.js";import"./useFocusRing-De8_vWxE.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-DGkuYQt4.js";import"./Loader-BsPrQ8_e.js";import"./Button-Y1RDwf3W.js";import"./Hidden-975QGLs-.js";import"./usePress-jyRSkEHC.js";import"./openLink-Btrk4R3c.js";import"./Checkbox-DBZBy6V_.js";import"./Check-FgbNu1D6.js";import"./RSPContexts-B1Ggupi0.js";import"./Form-CSW3m1S6.js";import"./useToggleState-uNN2WKV4.js";import"./useFormReset-Cho-ST89.js";import"./useControlledState-BZ6ANBWa.js";import"./VisuallyHidden-Cn6kit17.js";import"./ComboBox-D73v7_9q.js";import"./ListBox-BdUEambw.js";import"./ListBox-asaKxFwG.js";import"./Header-Bo31PJBK.js";import"./useDescription-CWQxiRdu.js";import"./FocusScope-C8WcBnFj.js";import"./context-BxCG6Cz5.js";import"./Separator-DLggkP8A.js";import"./DragAndDrop-CM0Wr761.js";import"./Text-DNKYJkYf.js";import"./useLabel-BNFm6v8H.js";import"./useLabels-B52qJwmh.js";import"./useTranslation-rxOr_aTQ.js";import"./Pill-Abu_PXhx.js";import"./Close-CQRyCptx.js";import"./Input-CYV0TCMr.js";import"./index-CnKvRkWh.js";import"./SelectBase-C2w1GOtJ.js";import"./Label-BVYnJu1Z.js";import"./index-a5nvb9vf.js";import"./Popover-D16OHjb2.js";import"./Dialog-DLrl2gv5.js";import"./PressResponder-CAmm6Bbq.js";import"./ariaHideOutside-Doz9nu2Q.js";import"./PortalProvider-ChirZUt_.js";import"./getScrollParent-C57vhpqh.js";import"./variants-CsVkyiyE.js";import"./Info-z3VoMegj.js";import"./KeyboardArrowDown-yCNVdyss.js";import"./DateTimePicker-0PVriMKR.js";import"./IconButton-CEvSBihD.js";import"./ChevronBackward-CX4kocVP.js";import"./ChevronForward-BsJowB8j.js";import"./Form-DYHU2sp3.js";import"./TextField-ChkuNCpl.js";import"./FieldError-DErQJGex.js";import"./RadioGroup-BAr9GvwV.js";import"./RichTextEditor-Cd1L1O5v.js";import"./Menu-BeQFvdNI.js";import"./Toolbar-D0ffhLqL.js";import"./Select-BqTiuvci.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p}),`
`,r.jsx(o.h1,{id:"form",children:"Form"}),`
`,r.jsxs(o.p,{children:["The Form component provides a wrapper around ShadCN's ",r.jsx(o.code,{children:"react-hook-form"})," component."]}),`
`,r.jsx(e,{of:s}),`
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
`})})]})}function Mr(t={}){const{wrapper:o}={...n(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Mr as default};
