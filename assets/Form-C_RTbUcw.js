import{j as r}from"./iframe-o0TYpcWS.js";import{useMDXComponents as m}from"./index-9qCBNwOo.js";import{M as n,C as e}from"./blocks-CoeSxutb.js";import{F as p,D as s}from"./Form.stories-BeT-8VBn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDtjUNIE.js";import"./index-DCtvyVTM.js";import"./Button-DfEfUVSQ.js";import"./utils-6Xoa8S3p.js";import"./ButtonBase-DcbSxK8S.js";import"./Loader-i3isxEFD.js";import"./Tooltip-D1POKIAR.js";import"./index-CqQ0jQ-Y.js";import"./Button-BaNNE5GU.js";import"./FocusScope-B_-Ik5Fg.js";import"./Hidden-BjkS2BD-.js";import"./usePress-BUFvZDNn.js";import"./RSPContexts-LFP89PNM.js";import"./Separator-D56Kdn_n.js";import"./Text-BC0OtlUB.js";import"./VisuallyHidden-CbRbWld6.js";import"./Checkbox-D7kpy-sa.js";import"./Check-BYiamBXn.js";import"./CheckIndeterminateSmall-CfT8RcfJ.js";import"./Form-i6gWJMAP.js";import"./useToggleState-CaL_uip-.js";import"./useFormReset-BDyZ-gVy.js";import"./ComboBox-MxOkj6YK.js";import"./ListBox-2B5CRBgc.js";import"./ListBox-C6ytGWTy.js";import"./DragAndDrop-CJfQ0BzF.js";import"./useLabel-V52eCJNr.js";import"./Pill-B73ExIIY.js";import"./Input-CO3Wmnwo.js";import"./SelectBase-C8Xj5dzQ.js";import"./Label-CK66xBx8.js";import"./index-jXBKBSNL.js";import"./variants-CD0RZY28.js";import"./KeyboardArrowDown-CkRSbWDm.js";import"./DateTimePicker-huVrJ25d.js";import"./IconButton-Ci1zFG8v.js";import"./ChevronBackward-D1Ln5-If.js";import"./ChevronForward-BBejsAPW.js";import"./Calendar-BW3a4Nva.js";import"./DetailPageHeader-rtMuMOHL.js";import"./FileIcon-XXqlWySW.js";import"./Description-Drz7Yl9f.js";import"./Zip-D6JoXvbe.js";import"./BulkActions-BXb5Why3.js";import"./Select-BqfP0XWE.js";import"./Canvas-n2dVIkiU.js";import"./ErrorMessage-BzFTssNs.js";import"./DeleteForever-B2CafkgA.js";import"./DndList-DHQzoyMT.js";import"./sortable.esm-B2OmN7y3.js";import"./DragIndicator-CipuXU2s.js";import"./ErrorPage-BOq0wq8f.js";import"./FileButton-eARSld0F.js";import"./use-toast-mL_OaAqJ.js";import"./FileList-CFZJgF-7.js";import"./Download-CoMBjWqC.js";import"./Warning-Cb4D5G73.js";import"./ListFilters-B7OocauM.js";import"./Modal-_47F_byR.js";import"./use-is-mobile-DHc96Y8z.js";import"./FilterListOff-D863tJHa.js";import"./NumberField-Cg-C_Pjj.js";import"./KeyboardArrowUp-6JffRifn.js";import"./FieldError-UuFXJmBk.js";import"./Group-Bg-NoxWm.js";import"./useTextField-Br7N04WQ.js";import"./PDFViewer-gdMCmlA6.js";import"./Divider-BHwcnYm2.js";import"./Remove-CgnvQDwT.js";import"./RadioGroup-DS7_ZdxV.js";import"./Menu-Bl9TuBzG.js";import"./TableOutlined-CefJGswV.js";import"./MoreHoriz-WuWcNvo1.js";import"./TableOptions-f4mIwG7O.js";import"./ViewColumn-DtFJOk77.js";import"./TextField-CLOYN05q.js";import"./Toolbar-B-S-McHw.js";import"./Search-XwsFzk4f.js";import"./Underline-DhyW4zd4.js";import"./ArrowBack-DbEvdLXc.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:p}),`
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
