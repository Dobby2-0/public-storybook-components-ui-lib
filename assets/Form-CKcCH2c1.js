import{j as r}from"./iframe-BwNFWH1f.js";import{useMDXComponents as m}from"./index-PtDDusfc.js";import{M as n,C as e}from"./blocks-CnJHIMdl.js";import{F as p,D as s}from"./Form.stories-B5fjKrmu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BX9lLRkz.js";import"./index-CtkWuY_Y.js";import"./Button-6D7GHbIJ.js";import"./utils-Rlm7jdZ4.js";import"./ButtonBase-BBviG9wf.js";import"./Loader-CSXLMFYo.js";import"./Tooltip-Sm4dml31.js";import"./index-Btmx5xex.js";import"./Button-Ddp-PUJ0.js";import"./FocusScope-BhwsVeU3.js";import"./Hidden-EiGuNxD5.js";import"./usePress-DBR8AA51.js";import"./RSPContexts-_iswUeoo.js";import"./Separator-DKYNZsGp.js";import"./Text-Om7JnWTg.js";import"./VisuallyHidden-Cnanu79u.js";import"./Checkbox-CWwCMD5L.js";import"./Check-B7fvyNFJ.js";import"./CheckIndeterminateSmall-DuH5lxzM.js";import"./Form-B8dq9vOZ.js";import"./useToggleState-CRFcnHz9.js";import"./useFormReset-BQispQhm.js";import"./ComboBox-BhZukN4t.js";import"./ListBox-ZC8CqDVC.js";import"./ListBox-88C5zmrG.js";import"./DragAndDrop-CF3sqFzb.js";import"./useLabel-DzsVno54.js";import"./Pill-BCIMG4CD.js";import"./Input-BNmBTnKq.js";import"./SelectBase-CSioaiWQ.js";import"./Label-Cm1Uqibf.js";import"./index-CVQZdYvV.js";import"./variants-DtEjhCXQ.js";import"./KeyboardArrowDown-BBtYJRuP.js";import"./DateTimePicker-Ch0DIYhW.js";import"./IconButton-CBIVkMOS.js";import"./ChevronBackward-CQO8UO5g.js";import"./ChevronForward-CLCIqbag.js";import"./Calendar-Y7qk8KfM.js";import"./DetailPageHeader-rNwVG6hD.js";import"./FileIcon-Bea_bM7p.js";import"./Description-B6m50QYQ.js";import"./Zip-pI7QzN-I.js";import"./BulkActions-RM58tN98.js";import"./Select-B8oFLh5Q.js";import"./Canvas-DUdxp_e0.js";import"./ErrorMessage-BidCM258.js";import"./DeleteForever-D7bn6PX5.js";import"./DndList-je1eT4d2.js";import"./sortable.esm-D1WBmO9y.js";import"./DragIndicator-CVOOj2ek.js";import"./ErrorPage-C7BqnRVt.js";import"./FileList-DQGA3XJT.js";import"./Download-CVGu6X3u.js";import"./Warning-Btv-Y93w.js";import"./ListFilters-CPAMga8U.js";import"./Modal-DG1iOUL3.js";import"./use-is-mobile-C8HjOwcr.js";import"./FilterListOff-D4nlNw6U.js";import"./NumberField-CyCgDyKL.js";import"./KeyboardArrowUp--gWPiAIE.js";import"./FieldError-C5VzHUY0.js";import"./Group-DFgMGrw9.js";import"./useTextField-DtifSZN5.js";import"./PDFViewer-QuI2ZUD1.js";import"./Divider-Dvyz5Ltd.js";import"./Remove-ZyblNWoq.js";import"./Menu-DvGYx1L4.js";import"./TableOutlined-B4WDgs9o.js";import"./MoreHoriz-BC3lJ0TT.js";import"./TableOptions-D_NVc6Px.js";import"./ViewColumn-CwRWjmYw.js";import"./TextField-ysG13TEz.js";import"./Toolbar-WciKacAA.js";import"./Search-DfikkOSP.js";import"./Underline-B-gSBYxt.js";import"./ArrowBack-Cggkbni9.js";import"./RadioGroup-DFGFBl4O.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
