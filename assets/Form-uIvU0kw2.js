import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as i}from"./index-uDG1oqxT.js";import{M as e,C as m}from"./index-Cc1RAF8c.js";import{F as p,D as s}from"./Form.stories-BPBtFT9H.js";import"./index-YTOF1_EJ.js";import"./iframe-CyezCAeu.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-DBw22uak.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-C4BMZp44.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-Nvm1gRAt.js";import"./Loader-xB9gCnz2.js";import"./Button-BM5vVtVI.js";import"./Hidden-BOYwTkK6.js";import"./useFocusable-DxTGOERD.js";import"./usePress-vd6OoI-D.js";import"./openLink-8mltwmIb.js";import"./Checkbox-DC-BnguJ.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-uj8S1pO4.js";import"./Form-DvgBAZdJ.js";import"./useToggleState-X_Bv_y9R.js";import"./useFormReset-CIPUeLX4.js";import"./useControlledState-BLnGQsC8.js";import"./VisuallyHidden-kxgC2G6T.js";import"./ComboBox-BHUZVNyf.js";import"./ListBox-B9YpIfn5.js";import"./ListBox-CwX2D75j.js";import"./Separator-CbEL6sJt.js";import"./useDescription-Bhr3VKQH.js";import"./context-gkfeJ4AL.js";import"./DragAndDrop-B_G89oNp.js";import"./Text-DV3bYAm4.js";import"./useLabel-CffM8sE5.js";import"./useLabels-ORoINcrz.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-CnNhOt2h.js";import"./Close-CqA61BEN.js";import"./Input-CuuN3zjP.js";import"./index-u5j6GQhH.js";import"./SelectBase-B11y2EXL.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./Popover-CDKpGQyJ.js";import"./Dialog-MoVWtpFC.js";import"./PressResponder-BU6yU8x-.js";import"./ariaHideOutside-DUj27I7Q.js";import"./PortalProvider-D04PMIEq.js";import"./getScrollParent-ByVXNY_H.js";import"./variants-DIvSP2G7.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./DateTimePicker-zmHKTaSK.js";import"./IconButton-18Dk205X.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Form-nR1jv5SV.js";import"./TextField-DT4YCyOq.js";import"./FieldError-CSER0sl5.js";import"./RadioGroup-DyYBRKBf.js";import"./Select-DVbRNqhH.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function Fr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{Fr as default};
