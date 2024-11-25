import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{c as b}from"./index-DbF_LCtC.js";import{i as Se}from"./ChevronForward-Apw6tIHa.js";import{s as Ae}from"./MoreHoriz-yxV42mT0.js";import{r as m,R as o}from"./index-DRjF_FHU.js";import{c as Te,d as Fe,b as He,a as Ve}from"./Collection-CTnSfGb1.js";import{k as B,d as D,f as L,g as _e,h as Ie,i as w,w as Re,a as M}from"./useFocusRing-CbqlcRcM.js";import{$ as qe,c as Le,a as we,e as Me}from"./usePress-BJhFWZiC.js";import{$ as ze}from"./useFocusable-CkCYFKaT.js";import{$ as Ue}from"./useLocalizedStringFormatter-C9r8_5dd.js";import"./Hidden-cNgNYADS.js";import"./index-uWwxbAOW.js";import"./context-D23C6NFd.js";function Oe(e,a){let{elementType:s="a",onPress:l,onPressStart:r,onPressEnd:n,onClick:i,isDisabled:c,...u}=e,f={};s!=="a"&&(f={role:"link",tabIndex:c?void 0:0});let{focusableProps:p}=ze(e,a),{pressProps:g,isPressed:ke}=qe({onPress:l,onPressStart:r,onPressEnd:n,isDisabled:c,ref:a}),Ee=B(u,{labelable:!0}),Ne=D(p,g),k=Le(),je=we(e);return{isPressed:ke,linkProps:D(Ee,je,{...Ne,...f,"aria-disabled":c||void 0,"aria-current":e["aria-current"],onClick:d=>{var P;(P=g.onClick)===null||P===void 0||P.call(g,d),i&&(i(d),console.warn("onClick is deprecated, please use onPress")),!k.isNative&&d.currentTarget instanceof HTMLAnchorElement&&d.currentTarget.href&&!d.isDefaultPrevented()&&Me(d.currentTarget,d)&&e.href&&(d.preventDefault(),k.open(d.currentTarget,d,e.href,e.routerOptions))}})}}var z={};z={breadcrumbs:"عناصر الواجهة"};var U={};U={breadcrumbs:"Трохи хляб"};var O={};O={breadcrumbs:"Popis cesty"};var K={};K={breadcrumbs:"Brødkrummer"};var W={};W={breadcrumbs:"Breadcrumbs"};var G={};G={breadcrumbs:"Πλοηγήσεις breadcrumb"};var J={};J={breadcrumbs:"Breadcrumbs"};var Z={};Z={breadcrumbs:"Migas de pan"};var Q={};Q={breadcrumbs:"Lingiread"};var X={};X={breadcrumbs:"Navigointilinkit"};var Y={};Y={breadcrumbs:"Chemin de navigation"};var ee={};ee={breadcrumbs:"שבילי ניווט"};var ae={};ae={breadcrumbs:"Navigacijski putovi"};var re={};re={breadcrumbs:"Morzsamenü"};var te={};te={breadcrumbs:"Breadcrumb"};var se={};se={breadcrumbs:"パンくずリスト"};var le={};le={breadcrumbs:"탐색 표시"};var ne={};ne={breadcrumbs:"Naršymo kelias"};var de={};de={breadcrumbs:"Atpakaļceļi"};var ie={};ie={breadcrumbs:"Navigasjonsstier"};var oe={};oe={breadcrumbs:"Broodkruimels"};var ce={};ce={breadcrumbs:"Struktura nawigacyjna"};var ue={};ue={breadcrumbs:"Caminho detalhado"};var be={};be={breadcrumbs:"Categorias"};var me={};me={breadcrumbs:"Miez de pâine"};var fe={};fe={breadcrumbs:"Навигация"};var pe={};pe={breadcrumbs:"Navigačné prvky Breadcrumbs"};var $e={};$e={breadcrumbs:"Drobtine"};var xe={};xe={breadcrumbs:"Putanje navigacije"};var ve={};ve={breadcrumbs:"Sökvägar"};var he={};he={breadcrumbs:"İçerik haritaları"};var ge={};ge={breadcrumbs:"Навігаційна стежка"};var Pe={};Pe={breadcrumbs:"导航栏"};var De={};De={breadcrumbs:"導覽列"};var ye={};ye={"ar-AE":z,"bg-BG":U,"cs-CZ":O,"da-DK":K,"de-DE":W,"el-GR":G,"en-US":J,"es-ES":Z,"et-EE":Q,"fi-FI":X,"fr-FR":Y,"he-IL":ee,"hr-HR":ae,"hu-HU":re,"it-IT":te,"ja-JP":se,"ko-KR":le,"lt-LT":ne,"lv-LV":de,"nb-NO":ie,"nl-NL":oe,"pl-PL":ce,"pt-BR":ue,"pt-PT":be,"ro-RO":me,"ru-RU":fe,"sk-SK":pe,"sl-SI":$e,"sr-SP":xe,"sv-SE":ve,"tr-TR":he,"uk-UA":ge,"zh-CN":Pe,"zh-TW":De};function Ke(e){return e&&e.__esModule?e.default:e}function We(e){let{"aria-label":a,...s}=e,l=Ue(Ke(ye),"@react-aria/breadcrumbs");return{navProps:{...B(s,{labelable:!0}),"aria-label":a||l.format("breadcrumbs")}}}const Ce=m.createContext(null);function Ge(e,a){[e,a]=L(e,a,Ce);let s=e.href&&!e.isDisabled?"a":"span",{linkProps:l,isPressed:r}=Oe({...e,elementType:s},a),{hoverProps:n,isHovered:i}=_e(e),{focusProps:c,isFocused:u,isFocusVisible:f}=Ie(),p=w({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:r,isHovered:i,isFocused:u,isFocusVisible:f}});return o.createElement(s,{ref:a,slot:e.slot||void 0,...D(p,l,n,c),"data-focused":u||void 0,"data-hovered":i||void 0,"data-pressed":r||void 0,"data-focus-visible":f||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},p.children)}const Be=m.forwardRef(Ge),y=m.createContext(null);function Je(e,a){[e,a]=L(e,a,y);let{CollectionRoot:s}=m.useContext(Fe),{navProps:l}=We(e);return o.createElement(He,{content:o.createElement(Ve,e)},r=>{var n;return o.createElement("ol",{ref:a,...l,slot:e.slot||void 0,style:e.style,className:(n=e.className)!==null&&n!==void 0?n:"react-aria-Breadcrumbs"},o.createElement(y.Provider,{value:e},o.createElement(s,{collection:r})))})}const Ze=m.forwardRef(Je),Qe=Te("item",function(a,s,l){let r=l.nextKey==null,{isDisabled:n,onAction:i}=Re(y),c={"aria-current":r?"page":null,isDisabled:n||r,onPress:()=>i==null?void 0:i(l.key)},u=w({...l.props,children:l.rendered,values:{isDisabled:n||r,isCurrent:r},defaultClassName:"react-aria-Breadcrumb"});return o.createElement("li",{...B(a),...u,ref:s,"data-disabled":n||r||void 0,"data-current":r||void 0},o.createElement(Ce.Provider,{value:c},u.children))}),C=({items:e,separator:a,...s})=>{const l=m.useMemo(()=>Array.from(e).map((r,n)=>({id:n+("label"in r?r.label:"collapsed"),...r})),[e]);return t.jsx(Xe,{items:l,...s,children:r=>t.jsx(Ye,{children:"ellipses"in r?t.jsxs(t.Fragment,{children:[t.jsx(aa,{}),t.jsx(E,{children:a})]}):l.at(-1)===r?t.jsx(ra,{children:r.label}):t.jsxs(t.Fragment,{children:[t.jsx(ea,{href:r.url,children:r.label}),t.jsx(E,{children:a})]})})})},Xe=({className:e,...a})=>t.jsx(Ze,{className:b("flex flex-wrap items-center gap-1.5 break-words text-[0.875rem] text-neutral-900 sm:gap-2",e),...a}),Ye=({className:e,...a})=>t.jsx(Qe,{className:b("inline-flex items-center gap-1.5 sm:gap-2",e),...a}),ea=({className:e,...a})=>t.jsx(Be,{className:M(e,s=>b("transition-colors text-neutral-700","data-[hovered]:text-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","data-[current]:pointer-events-auto data-[current]:opacity-100",s)),...a}),E=({children:e,className:a,...s})=>t.jsx("span",{role:"presentation","aria-hidden":"true",className:b("text-neutral-500",a),...s,children:e??t.jsx(Se,{})}),aa=({className:e,...a})=>t.jsxs("span",{role:"presentation","aria-hidden":"true",className:b("flex size-7 items-center justify-center",e),...a,children:[t.jsx(Ae,{className:"size-4"}),t.jsx("span",{className:"sr-only",children:"More"})]}),ra=({className:e,...a})=>t.jsx(Be,{className:M(e,s=>b("text-foreground",s)),...a});try{C.displayName="Breadcrumbs",C.__docgenInfo={description:"Breadcrumb component to display hierarchical order of parent items leading to current item.\n\n`BreadcrumbItems` have an optional url to support navigation\n\nBased on `react-aria-componets`'s breadcrumbs",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"Array of items used to build the hierarchy",name:"items",required:!0,type:{name:"(BreadcrumbItem | BreadcrumbEllipsesItem)[]"}},separator:{defaultValue:null,description:"Optional parameter to overwrite the default `<ChevronForward/>` icon used to separate items",name:"separator",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the breadcrumbs are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},onAction:{defaultValue:null,description:"Handler that is called when a breadcrumb is clicked.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}}}}}catch{}const $a={component:C},$={args:{items:[{label:"Home",url:"#"},{label:"Page",url:"#"},{label:"Detail"}]}},x={args:{items:[{label:"Home",url:"#"},{ellipses:!0},{label:"Detail"}]}},v={args:{isDisabled:!0,items:[{label:"Home",url:"#"},{label:"Page",url:"#"},{label:"Detail"}]}},h={args:{items:[{label:"Home",url:"#"},{label:"Page",url:"#"},{label:"Detail"}],separator:"/"}};var N,j,S;$.parameters={...$.parameters,docs:{...(N=$.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      url: "#"
    }, {
      label: "Page",
      url: "#"
    }, {
      label: "Detail"
    }]
  }
}`,...(S=(j=$.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var A,T,F;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      url: "#"
    }, {
      ellipses: true
    }, {
      label: "Detail"
    }]
  }
}`,...(F=(T=x.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var H,V,_;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    items: [{
      label: "Home",
      url: "#"
    }, {
      label: "Page",
      url: "#"
    }, {
      label: "Detail"
    }]
  }
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var I,R,q;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      url: "#"
    }, {
      label: "Page",
      url: "#"
    }, {
      label: "Detail"
    }],
    separator: "/"
  }
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const xa=["Default","Collapsed","Disabled","CustomSeparator"];export{x as Collapsed,h as CustomSeparator,$ as Default,v as Disabled,xa as __namedExportsOrder,$a as default};
