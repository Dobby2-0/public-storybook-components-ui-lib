import{j as r}from"./iframe-pBnSplFZ.js";import{useMDXComponents as m}from"./index-B-RU7-R0.js";import{M as n,C as e}from"./blocks-dFmHZMpH.js";import{F as p,D as s}from"./Form.stories-2QK8Jh47.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bx9OGZXX.js";import"./index-Dqp3rM7g.js";import"./Button-BHajm_Y9.js";import"./utils-C2tA4BPa.js";import"./ButtonBase-B-KKaSsL.js";import"./Loader-BCxpNSHQ.js";import"./Tooltip-C8C0V3UG.js";import"./index-DvsOHcJY.js";import"./Button-BQuNtnOM.js";import"./FocusScope-DD209Qz4.js";import"./Hidden-DRttEpAd.js";import"./usePress-DkB5TBaY.js";import"./RSPContexts-ByB424tt.js";import"./Separator-B8JoHBbr.js";import"./Text-Uh0t-fi7.js";import"./VisuallyHidden-BZsKR4g8.js";import"./Checkbox-Cr7s8wbK.js";import"./Check-CAvp5a9O.js";import"./CheckIndeterminateSmall-DBvlFv8Y.js";import"./Form-Da77mGVq.js";import"./useToggleState-iqrIt3zH.js";import"./useFormReset-BN2-9z-1.js";import"./ComboBox-ChE1kjCw.js";import"./ListBox-BOghM7Wl.js";import"./ListBox-D36ZKHsZ.js";import"./DragAndDrop-DFCWl494.js";import"./useLabel-DYsND5BM.js";import"./Pill-bHVwbTO5.js";import"./Input-yqdFd8lF.js";import"./SelectBase-D-ybHqsP.js";import"./Label-CXmwXUEH.js";import"./index-BX5Nerub.js";import"./variants-CXzVb_7g.js";import"./KeyboardArrowDown-B79h8xLV.js";import"./DateTimePicker-BIMFw4Ct.js";import"./IconButton-Cqf0rpOa.js";import"./ChevronBackward-A3qgEFY4.js";import"./ChevronForward-2V2rw2O2.js";import"./Calendar-BYWohkWF.js";import"./DetailPageHeader-RrelicRe.js";import"./FileIcon-Bh_RKORJ.js";import"./Description-CnqqQ2Ys.js";import"./Zip-CPJrqVw7.js";import"./BulkActions-DZ4I6R0S.js";import"./Select-DHGmwFIi.js";import"./Canvas-yAzk3d6y.js";import"./ErrorMessage-CAVpP6Rf.js";import"./DeleteForever-m1DwGe_4.js";import"./DndList-C_RQ5PU9.js";import"./sortable.esm-DF_km-TF.js";import"./DragIndicator-DIRIBPUy.js";import"./ErrorPage-C0bNJ0HA.js";import"./FileList-BXZfjKvD.js";import"./Download-CHso8c3y.js";import"./Warning-Ad5JJhIA.js";import"./ListFilters-BF6gSMT7.js";import"./Modal-Ko-t30xf.js";import"./use-is-mobile-D94TSeoC.js";import"./FilterListOff-BVq_6vvG.js";import"./NumberField-BEIU6nGa.js";import"./KeyboardArrowUp-Cw4OQ68Z.js";import"./FieldError-uOItk01U.js";import"./Group-B0t4_Hqu.js";import"./useTextField-zBU0EqAB.js";import"./PDFViewer-h118WJaG.js";import"./Divider-BCSScbqD.js";import"./Remove-C0XW0eR0.js";import"./RadioGroup-Cp2Agd2b.js";import"./Menu-B6jnDrtB.js";import"./TableOutlined-C5EZ0hJu.js";import"./MoreHoriz-B2WqIWXr.js";import"./TableOptions-6zB-EdXy.js";import"./ViewColumn-DWWugy9R.js";import"./TextField-BHyX_wbt.js";import"./Toolbar-q8mh631X.js";import"./Search-Cbo4ZKs4.js";import"./Underline-Doi6xYS-.js";import"./ArrowBack-NSxCT2p1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Vr(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Vr as default};
