import{j as e}from"./jsx-runtime-F1iDwNaf.js";import{a as y}from"./index-DzfFlqCY.js";import"./BulkActions-DIHb1W88.js";import{I as j}from"./IconButton-D1n4di1C.js";import"./DateTimePicker-DS2slS2q.js";import"./DobbyContextProvider-Cfvp8fBB.js";import"./FileList-CEIYIErk.js";import"./Form-BQ9iKDnL.js";import"./ListFilters-CQHLssH6.js";import"./Loader-xB9gCnz2.js";import"./RadioGroup--ihXgdr_.js";import{S as N}from"./Select-xoElFRJ1.js";import"./TextField-CtJ3eHps.js";import"./Tooltip-BgWmt_Fm.js";import{h as v}from"./ArrowBack-B0FNs2_8.js";import"./index-YTOF1_EJ.js";import"./useTranslation-Dw3DpAYw.js";import"./useFocusRing-C4BMZp44.js";import"./platform-DO9ne4TU.js";import"./ButtonBase-BXCg-JL7.js";import"./index-UoR2Am_h.js";import"./Button-BM5vVtVI.js";import"./Hidden-BOYwTkK6.js";import"./index-Cjh3zZyl.js";import"./index-BhTLYoCu.js";import"./useFocusable-DxTGOERD.js";import"./usePress-vd6OoI-D.js";import"./openLink-8mltwmIb.js";import"./Label-B2LZGk7B.js";import"./index-DFyT2So3.js";import"./variants-DIvSP2G7.js";import"./ChevronBackward-BCrEDMyZ.js";import"./ChevronForward-DTfmueCT.js";import"./Info-Cvx1OggM.js";import"./Text-DV3bYAm4.js";import"./Toaster-CqbWsPa5.js";import"./Alert-FhG3H6S_.js";import"./CheckCircle-BbpI1E_x.js";import"./Close-CqA61BEN.js";import"./Error-LHnIo6fp.js";import"./index.browser-OxPLOBIU.js";import"./PortalProvider-D04PMIEq.js";import"./Pill-C6_QnXY0.js";import"./Description-MSnmsYJ8.js";import"./index-u5j6GQhH.js";import"./ComboBox-DlV-Qe_1.js";import"./ListBox-y1J-JT0X.js";import"./Check-d3BnqXpp.js";import"./ListBox-CwX2D75j.js";import"./Separator-CbEL6sJt.js";import"./useDescription-Bhr3VKQH.js";import"./context-gkfeJ4AL.js";import"./useControlledState-BLnGQsC8.js";import"./DragAndDrop-B_G89oNp.js";import"./useLabel-CffM8sE5.js";import"./useLabels-ORoINcrz.js";import"./Input-CuuN3zjP.js";import"./SelectBase-B1bibTW4.js";import"./Popover-6v3gND-W.js";import"./Dialog-MoVWtpFC.js";import"./RSPContexts-uj8S1pO4.js";import"./PressResponder-BU6yU8x-.js";import"./ariaHideOutside-DUj27I7Q.js";import"./getScrollParent-ByVXNY_H.js";import"./VisuallyHidden-kxgC2G6T.js";import"./KeyboardArrowDown-C_KWurVb.js";import"./FieldError-CSER0sl5.js";import"./Form-DvgBAZdJ.js";import"./useFormReset-CIPUeLX4.js";const B=({title:t,titleId:a,...i})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"currentColor",width:"1.125rem",height:"1.125rem","aria-labelledby":a,...i,children:[t?e.jsx("title",{id:a,children:t}):null,e.jsx("path",{d:"M9 15.769a1.3 1.3 0 0 1-.46-.085 1.6 1.6 0 0 1-.421-.253q-.75-.656-1.622-1.537A17.5 17.5 0 0 1 4.875 12q-.75-1.012-1.237-2.11-.488-1.096-.488-2.184 0-2.512 1.669-4.21Q6.487 1.802 9 1.8q2.493 0 4.172 1.697 1.678 1.696 1.678 4.21 0 1.086-.497 2.193a11.7 11.7 0 0 1-1.237 2.119 16 16 0 0 1-1.613 1.884 34 34 0 0 1-1.622 1.528 1.6 1.6 0 0 1-.422.253A1.3 1.3 0 0 1 9 15.77M9 9q.563 0 .956-.394.394-.393.394-.956t-.394-.956A1.3 1.3 0 0 0 9 6.3q-.563 0-.956.394a1.3 1.3 0 0 0-.394.956q0 .563.394.956Q8.437 9 9 9"})]}),n=({title:t,subtitle:a,className:i,enableBackButton:b=!1,onBackButtonPress:g,children:w})=>e.jsxs("div",{className:y("group w-full flex justify-between items-center bg-neutral-150 p-4 rounded-md mb-2.5 gap-2",i),children:[b&&e.jsx(j,{variant:"ghost",onPress:g,children:e.jsx(v,{})}),w??e.jsxs("div",{className:"content flex flex-1 flex-col sm:flex-row gap-1 sm:gap-4 justify-between sm:items-center",children:[e.jsx("span",{className:"font-display font-semibold text-lg",children:t}),e.jsx("div",{className:"flex items-center text-neutral-700",children:a})]})]});try{n.displayName="DetailPageHeader",n.__docgenInfo={description:`Header component used for detail pages.

Can display either title and subtitle or custom children inside the component`,displayName:"DetailPageHeader",props:{title:{defaultValue:null,description:`Title to be shown in the header.

Will not be displayed when children are set.`,name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:`Subtitle to be shown in the header.

Will not be displayed when children are set.`,name:"subtitle",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS className for the element.",name:"className",required:!1,type:{name:"string"}},enableBackButton:{defaultValue:{value:"false"},description:"Should a button with backwards arrow be displayed.",name:"enableBackButton",required:!1,type:{name:"boolean"}},onBackButtonPress:{defaultValue:null,description:"Function to be called when pressing the back button.",name:"onBackButtonPress",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:`Optional content for the component.

Will be shown instead of a title and subtitle.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Oe={component:n},r={args:{title:"My detail page",subtitle:e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-1.5"}),e.jsx("span",{children:"Steenweg op Brussel 127, 9200 Dendermonde"})]})}},s={args:{...r.args,enableBackButton:!0}},o={args:{children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex flex-1 flex-col gap-1 justify-between",children:[e.jsx("span",{className:"font-display font-semibold text-lg",children:"Common area hasn't been cleaned this week"}),e.jsx("div",{className:"flex items-center text-neutral-700 text-sm",children:"Created by User on 10 september 2024 - 14:37"})]}),e.jsx(N,{items:[{id:"1",label:"To be solved"}],placeholder:"Status"})]})}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "My detail page",
    subtitle: <>
        <LocationOn className="mr-1.5" />
        <span>Steenweg op Brussel 127, 9200 Dendermonde</span>
      </>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    enableBackButton: true
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex flex-1 flex-col gap-1 justify-between">
          <span className="font-display font-semibold text-lg">
            Common area hasn&apos;t been cleaned this week
          </span>
          <div className="flex items-center text-neutral-700 text-sm">
            Created by User on 10 september 2024 - 14:37
          </div>
        </div>
        <Select items={[{
        id: "1",
        label: "To be solved"
      }]} placeholder="Status" />
      </div>
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ee=["Default","WithBackButton","WithCustomContent"];export{r as Default,s as WithBackButton,o as WithCustomContent,Ee as __namedExportsOrder,Oe as default};
