import{j as r}from"./iframe-DigKr1Om.js";import{useMDXComponents as m}from"./index-C1oPHQy2.js";import{M as n,C as e}from"./blocks-B2TxHaWO.js";import{F as p,D as s}from"./Form.stories-DaJ-mC_s.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BBCUG9Nf.js";import"./index-ar4iv7ir.js";import"./Button-P4gF_Z_F.js";import"./utils-B-VLpWL1.js";import"./ButtonBase-D_Fp6IX2.js";import"./Loader-Cj_YKQMC.js";import"./Tooltip-D1wMFY4Z.js";import"./index-cj99HEtK.js";import"./Button-D-ilA-ag.js";import"./FocusScope-D5uIQp3D.js";import"./Hidden-Ce6PGo4M.js";import"./usePress-D1PDYcdl.js";import"./RSPContexts-CX5xhoiu.js";import"./Separator-DqMpg4TZ.js";import"./Text-CygdCTcq.js";import"./VisuallyHidden-B0fHXY2j.js";import"./Checkbox-BJ2Zn-Cg.js";import"./Check-C2RvNe94.js";import"./CheckIndeterminateSmall-kOqTf0g4.js";import"./Form-Dg9pl98X.js";import"./useToggleState-DyNRELqm.js";import"./useFormReset-BUN4FjWp.js";import"./ComboBox-Dm7fu-B4.js";import"./ListBox-BG5Kd5GX.js";import"./ListBox-EeCF4Hsu.js";import"./DragAndDrop-Do4qYM5d.js";import"./useLabel-8sLxOv-W.js";import"./Pill-BzF7PoYE.js";import"./Input-Tdc1Jwao.js";import"./SelectBase-BwQBPk6D.js";import"./Label-Bs53qAj9.js";import"./index-TsQsGeNy.js";import"./variants-UopPvdd-.js";import"./KeyboardArrowDown-D6_4Bsiu.js";import"./DateTimePicker-C2Run3-D.js";import"./IconButton-DJLuP6Kr.js";import"./ChevronBackward-DNPtbYKv.js";import"./ChevronForward-DxadCiyT.js";import"./Calendar-CNdaOEFe.js";import"./DetailPageHeader-BWlYzItW.js";import"./FileIcon-Cq7mtqlZ.js";import"./Description-CBwQm1fz.js";import"./Zip-CbeqOj3T.js";import"./BulkActions-DO-hJtWQ.js";import"./Select-9qHjYI0p.js";import"./Canvas-BvQwXb2k.js";import"./ErrorMessage-EquhK4wk.js";import"./DeleteForever-CHvtRBEs.js";import"./DndList-CBi8_kZ3.js";import"./sortable.esm-DWjEdsBB.js";import"./DragIndicator-Dzf6zd7T.js";import"./ErrorPage-CTYzea0k.js";import"./FileButton-B1HUq023.js";import"./use-toast-DdZWWsNK.js";import"./FileList-V1oGmEIt.js";import"./Download-BcBU9qAO.js";import"./Warning-BheeRH7b.js";import"./ListFilters-B70FklIn.js";import"./Modal-Dg5Ho2FX.js";import"./use-is-mobile-CJTQo79u.js";import"./FilterListOff-D1X8jeIP.js";import"./NumberField-9vw7tK7Q.js";import"./KeyboardArrowUp-DZ8A-2PF.js";import"./FieldError-CKhp1APe.js";import"./Group-BTGIPX90.js";import"./useTextField-Bm7PJvO6.js";import"./PDFViewer-COE9EQf0.js";import"./Divider-BejH1Jbl.js";import"./Remove-Bzu9hfBo.js";import"./Menu-BanP5OZv.js";import"./TableOutlined-DoPfpFXQ.js";import"./MoreHoriz-DFabsmgi.js";import"./TableOptions-CWcDStEy.js";import"./ViewColumn-36TevFI8.js";import"./TextField-gaJ2oXsc.js";import"./Skeleton-D0do4tkn.js";import"./Toolbar-z7G1HqN7.js";import"./Search-jPbMysJo.js";import"./Underline-Cn5c8Dmr.js";import"./ArrowBack-DdlUp-AZ.js";import"./RadioGroup-BM-ZGRVL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
`})})]})}function Gr(t={}){const{wrapper:o}={...m(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(i,{...t})}):i(t)}export{Gr as default};
