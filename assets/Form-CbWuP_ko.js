import{j as r}from"./iframe-DLOAwRAM.js";import{useMDXComponents as m}from"./index-TadoCUEm.js";import{M as n,C as e}from"./blocks-Dekra7uM.js";import{F as p,D as s}from"./Form.stories-Bpowkfr5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJiPqZ_f.js";import"./index-B19DqXGu.js";import"./Button-BptxGDtt.js";import"./utils-ChAuCvw9.js";import"./ButtonBase-BEoHXirt.js";import"./Loader-DDF0LXrj.js";import"./Tooltip-DRY4ROIT.js";import"./index-BbI-jYvb.js";import"./Button-CEUYUVNZ.js";import"./FocusScope-Fd7Ip3Eu.js";import"./Hidden-DgqIT5pL.js";import"./usePress-DtSQX-Hh.js";import"./RSPContexts-BbMjvc9_.js";import"./Separator-BEMdekln.js";import"./Text-B7nvB_E8.js";import"./VisuallyHidden-BOGc-052.js";import"./Checkbox-CADKvF8s.js";import"./Check-CiRqf7Rc.js";import"./CheckIndeterminateSmall-B2XenGgC.js";import"./Form-DHSg4FVY.js";import"./useToggleState-BCsLiTW9.js";import"./useFormReset-ZUDt34kV.js";import"./ComboBox-VyFiI09W.js";import"./ListBox-Bhf3UrQK.js";import"./ListBox-BGlXqbup.js";import"./DragAndDrop-6vjoJ7sH.js";import"./useLabel-DGk3X-Xs.js";import"./Pill-Bqz6O2km.js";import"./Input-Vf5J-MBq.js";import"./SelectBase-C0OKC_0l.js";import"./Label-DN3WXBAr.js";import"./index-DA10twUG.js";import"./variants-CPRQGrX9.js";import"./KeyboardArrowDown-iJaAlazk.js";import"./DateTimePicker-DxceMqMz.js";import"./IconButton-Cbylanz1.js";import"./ChevronBackward-DCqbrNWh.js";import"./ChevronForward-DhYvOJnG.js";import"./Calendar-DlQd0dqb.js";import"./DetailPageHeader-Ceq5jmLf.js";import"./FileIcon-CaS0Xt4g.js";import"./Description-DosEc-fa.js";import"./Zip-CW2qeN20.js";import"./BulkActions-CO2HRhfW.js";import"./Select-RI4LBANL.js";import"./Canvas-BK5m9ey4.js";import"./ErrorMessage-uxB_BUl_.js";import"./DeleteForever-BD1QgVsV.js";import"./DndList-Bv7-KJOl.js";import"./sortable.esm-CEhvIRGA.js";import"./DragIndicator-CoFqGFMs.js";import"./ErrorPage-BJ9Np8zt.js";import"./FileButton-C9lh1Eb6.js";import"./use-toast-Cci6V2Ld.js";import"./FileList-D5HT_ziD.js";import"./Download-DaLyPP0_.js";import"./Warning-C2goSQiz.js";import"./ListFilters-DCdvEkyp.js";import"./Modal-CVrkDAZ_.js";import"./use-is-mobile-BPLbSNea.js";import"./FilterListOff-CwHCl7KN.js";import"./NumberField-DUog7z91.js";import"./KeyboardArrowUp-BL2arj8t.js";import"./FieldError-H6XbXxto.js";import"./Group-Bd2VlwhK.js";import"./useTextField-CoRiiW5E.js";import"./PDFViewer-BpGZxQb3.js";import"./Divider-CgjWzhjG.js";import"./Remove-CS_QvC53.js";import"./RadioGroup-WjigWw1t.js";import"./Menu-BFIeeOpN.js";import"./TableOutlined-Dq09vyA6.js";import"./MoreHoriz-CxAGytCv.js";import"./TableOptions-BOZYU4hI.js";import"./ViewColumn-BwXCLS03.js";import"./TextField-QUqW2Z6_.js";import"./Toolbar-DyVNoX2J.js";import"./Search-Ft_uBzP1.js";import"./Underline-BaRu7f_-.js";import"./ArrowBack-DuDC99LT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Br(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Br as default};
