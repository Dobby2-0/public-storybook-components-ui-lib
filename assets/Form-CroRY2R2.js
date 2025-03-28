import{j as r}from"./jsx-runtime-F1iDwNaf.js";import{useMDXComponents as i}from"./index-uDG1oqxT.js";import{M as e,C as m}from"./index-BNqun4J0.js";import{F as p,D as s}from"./Form.stories-YSQ7Nfj4.js";import"./index-YTOF1_EJ.js";import"./iframe-WT7a3mpV.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-dj39ioyY.js";import"./index-DzfFlqCY.js";import"./index-UoR2Am_h.js";import"./useFocusRing-BgE-SUVI.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-8A-WwgtQ.js";import"./Loader-xB9gCnz2.js";import"./Button-BQFUDFoQ.js";import"./Hidden-BOTHLwhk.js";import"./useFocusable-DugCBd3F.js";import"./usePress-C-KiqRU_.js";import"./openLink-8mltwmIb.js";import"./Checkbox-B1cV5l_R.js";import"./Check-d3BnqXpp.js";import"./RSPContexts-uj8S1pO4.js";import"./Form-B1KytN8y.js";import"./useToggleState-CMsTKOdL.js";import"./useFormReset-D1CYZiAX.js";import"./useControlledState-BLnGQsC8.js";import"./VisuallyHidden-BCswwYkq.js";import"./ComboBox-BDYE8qC7.js";import"./ListBox-DNMjnQp4.js";import"./ListBox-DEFZNUEK.js";import"./Collection-CjVtFrzo.js";import"./DragAndDrop-B_G89oNp.js";import"./Separator-D1cWipbo.js";import"./useDescription-D2VrPItS.js";import"./FocusScope-Bnbxzdrc.js";import"./context-r8ftr82U.js";import"./Text-CY1xICwy.js";import"./useLabel-Co33jOMz.js";import"./useTranslation-Dw3DpAYw.js";import"./Pill-C6_QnXY0.js";import"./Close-CqA61BEN.js";import"./Input-CQp2pd7V.js";import"./index-u5j6GQhH.js";import"./SelectBase-DgP0BUFO.js";import"./Label-CUVhTUaF.js";import"./index-DFyT2So3.js";import"./Popover-ZV6Ir0HG.js";import"./Dialog-Cd_cubD7.js";import"./PressResponder-RJSyAG3U.js";import"./useLocalizedStringFormatter-CaNx1NP4.js";import"./PortalProvider-D04PMIEq.js";import"./ariaHideOutside-7Z-f0sYi.js";import"./getScrollParent-C3ZNwsyr.js";import"./Info-Cvx1OggM.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./Form-QX2769TH.js";import"./TextField-CnYBAy1d.js";import"./FieldError-CFq7_xda.js";import"./RadioGroup-Dea7UeQu.js";import"./Select-VSapXs2C.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{of:p}),`
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
`})})]})}function br(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{br as default};
