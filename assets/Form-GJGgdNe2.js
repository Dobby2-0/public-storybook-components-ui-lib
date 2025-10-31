import{j as r}from"./iframe-Cu-xdT9G.js";import{useMDXComponents as m}from"./index-CbEO5Rq6.js";import{M as n,C as e}from"./blocks-Dgj56GJt.js";import{F as p,D as s}from"./Form.stories-CrG_jf4M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUUU677-.js";import"./index-C4xZ7l4B.js";import"./Button-BhrobEzT.js";import"./utils-NQiFZHvw.js";import"./ButtonBase-q5peoFvg.js";import"./Loader-CQlFACD0.js";import"./Tooltip-BLfg4IJn.js";import"./index-BHpIhZnw.js";import"./Button-C5s0rQwd.js";import"./FocusScope-DBECekIP.js";import"./Hidden-BO76c3yM.js";import"./usePress-CYFK737S.js";import"./RSPContexts-vItvQxFj.js";import"./Separator-BGcJa7Bz.js";import"./Text-C8g5IJFr.js";import"./VisuallyHidden-DHZl51FW.js";import"./Checkbox-DKp5vm62.js";import"./Check-B7zJ2v9D.js";import"./CheckIndeterminateSmall-CbZVJ4qi.js";import"./Form-BgwRnsCl.js";import"./useToggleState-CB23Vx9G.js";import"./useFormReset-X0ZVk73o.js";import"./ComboBox-DQ94DQtN.js";import"./ListBox-DX6VQhOL.js";import"./ListBox-mIgDNyAf.js";import"./DragAndDrop-B0jrN-OB.js";import"./useLabel-C_-5ugI8.js";import"./Pill-s-29BcFn.js";import"./Input-CJgbypMP.js";import"./SelectBase-BkY3eFs8.js";import"./Label-Da3scYWb.js";import"./index-DuU36ER_.js";import"./variants-DKAnLtIG.js";import"./KeyboardArrowDown-CzGScF-m.js";import"./DateTimePicker-D3ljlQVB.js";import"./IconButton-VBs8CpOq.js";import"./ChevronBackward-14YiJdQX.js";import"./ChevronForward-CB7QQERX.js";import"./Calendar-BHyQf7uQ.js";import"./DetailPageHeader-CwAvisMm.js";import"./FileIcon-Dmct-VNw.js";import"./Description-EyOIxYJ5.js";import"./Zip-QyD_O8zS.js";import"./BulkActions-BsxlowSt.js";import"./Select-B6LTd_Y_.js";import"./Canvas-DsSJESDT.js";import"./ErrorMessage-CYUAWm57.js";import"./DeleteForever-CRdh7XAc.js";import"./DndList-B5jsizwL.js";import"./sortable.esm-emFyNrEy.js";import"./DragIndicator-gaVSivv3.js";import"./ErrorPage-DG2oxitD.js";import"./FileList-SlaNyBrD.js";import"./Download-DUsJTUiM.js";import"./Warning-BGA0y4nJ.js";import"./ListFilters-DrJODVUK.js";import"./Modal-KFSlp3vY.js";import"./use-is-mobile-C_HTradH.js";import"./FilterListOff-Buvgy7UM.js";import"./NumberField-DzH36Sd_.js";import"./KeyboardArrowUp-CRo4-X0A.js";import"./FieldError-Czl2AC4c.js";import"./Group-CC-xr5ew.js";import"./useTextField-B7s_M9fq.js";import"./PDFViewer-BMXGBJEl.js";import"./Divider-BaY6RY39.js";import"./Remove-CKGrY03G.js";import"./RadioGroup-CwikW27w.js";import"./Menu-CvJ3PtuC.js";import"./TableOutlined-Bq0wcyKC.js";import"./MoreHoriz-DEWkj1ub.js";import"./TableOptions-Dk7vdXmx.js";import"./ViewColumn-BW_ZcUKG.js";import"./TextField-B4Yh85wQ.js";import"./Toolbar-CviTTTXo.js";import"./Search-C5gL7MBl.js";import"./Underline-C1xcE_pz.js";import"./ArrowBack-Bb2HMc3u.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
