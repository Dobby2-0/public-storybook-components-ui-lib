import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as y,b as v,c as m}from"./index-By-mRCMU.js";import{i as g}from"./Check-f6fs0czz.js";import{a as c}from"./useFocusRing-C6fsr26g.js";import{$ as b,a as V,b as x}from"./ListBox-pSTpXoQs.js";import{u as q}from"./useTranslation-BZwSnrkG.js";const h=({className:e,...a})=>t.jsx(b,{className:m("px-2 py-1.5 text-sm font-semibold",e),...a}),S=({className:e,...a})=>t.jsx(V,{"aria-label":"listbox",className:c(e,l=>m("group overflow-auto rounded-sm border bg-control border-neutral-200 p-1 text-foreground outline-none max-h-dvh","data-[empty]:p-3 data-[empty]:text-center data-[empty]:text-sm",l)),...a}),i=({className:e,children:a,...l})=>t.jsx(x,{textValue:l.textValue??(typeof a=="string"?a:void 0),className:c(e,n=>m("relative flex w-full cursor-default select-none items-center rounded-[2px] px-2 py-1.5 text-sm outline-none","data-[disabled]:pointer-events-none data-[disabled]:opacity-50","data-[focused]:bg-accent data-[focused]:text-accent-foreground","data-[hovered]:bg-accent data-[hovered]:text-accent-foreground","data-[selection-mode]:pr-8",n)),...l,children:c(a,(n,o)=>t.jsxs(t.Fragment,{children:[o.isSelected&&t.jsx("span",{className:"absolute right-2 flex size-4 items-center justify-center",children:t.jsx(g,{className:"size-4"})}),n]}))}),f=({items:e,idResolver:a="id",...l})=>{const{t:n}=q("components"),{children:o,labelResolver:p}=l;return t.jsx(S,{items:e,...l,children:e.length===0?t.jsx(i,{"aria-label":"no-results",id:"no-results",isDisabled:!0,children:n("actions.emptyList","No results found")}):s=>{const d=y(s,a),u={};let r;return o?r=o(s,u):p?r=v(s,u,p):r=d,t.jsx(i,{"aria-label":d,id:d,...u,children:r})}})};try{f.displayName="ListBox",f.__docgenInfo={description:"component that displays a list of options and allows a user to select one or more of them\n\nBased on `React-aria-components`",displayName:"ListBox",props:{className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ListBoxRenderProps & { defaultClassName: string; }) => string)"}},autoFocus:{defaultValue:null,description:"Whether to auto focus the listbox or an option.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ListBoxRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element>) => void)"}},onScroll:{defaultValue:null,description:"Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event).",name:"onScroll",required:!1,type:{name:"((e: UIEvent<HTMLDivElement, UIEvent>) => void)"}},items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T> & T[]"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on an item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},orientation:{defaultValue:{value:"'vertical'"},description:`The primary orientation of the items. Usually this is the
direction that the collection scrolls.`,name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},shouldFocusWrap:{defaultValue:null,description:"Whether focus should wrap around when the end/start is reached.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},selectionBehavior:{defaultValue:null,description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"toggle"'}]}},dragAndDropHooks:{defaultValue:null,description:"The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the ListBox.",name:"dragAndDropHooks",required:!1,type:{name:"DragAndDropHooks"}},renderEmptyState:{defaultValue:null,description:"Provides content to display when there are no items in the list.",name:"renderEmptyState",required:!1,type:{name:"((props: ListBoxRenderProps) => ReactNode)"}},layout:{defaultValue:{value:"'stack'"},description:"Whether the items are arranged in a stack or grid.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"stack"'}]}},children:{defaultValue:null,description:"Function that will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.",name:"children",required:!1,type:{name:'ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},labelResolver:{defaultValue:null,description:`Field to use as the item label, defaults to result of the "itemId" resolution.<br/>
If a function is provided, it will be called with an item as the first argument and an object with extra props for the underlying ListBoxItem as the second argument. It must return a ReactNode.`,name:"labelResolver",required:!1,type:{name:'string | number | symbol | ResolverFunctionWithProps<T, ReactNode, Omit<ListBoxItemProps<object>, "id" | "value" | "textValue">>'}},idResolver:{defaultValue:{value:'"id" as keyof T'},description:`Field to use as the item id, defaults to "id".<br/>
If a function is provided, it will be called with an item as the first argument. It must return a string.`,name:"idResolver",required:!1,type:{name:"string | number | symbol | ResolverFunction<T, string>"}}}}}catch{}try{Collection.displayName="Collection",Collection.__docgenInfo={description:"A Collection renders a list of items, automatically managing caching and keys.",displayName:"Collection",props:{items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},children:{defaultValue:null,description:"The contents of the collection.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactNode)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},idScope:{defaultValue:null,description:"A scope to prepend to all child item ids to ensure they are unique.",name:"idScope",required:!1,type:{name:"Key"}},addIdAndValue:{defaultValue:null,description:"Whether to add `id` and `value` props to all child items.",name:"addIdAndValue",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="ListBoxHeader",h.__docgenInfo={description:"",displayName:"ListBoxHeader",props:{}}}catch{}try{i.displayName="ListBoxItem",i.__docgenInfo={description:"",displayName:"ListBoxItem",props:{id:{defaultValue:null,description:"The unique id of the item.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the item is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Handler that is called when a user performs an action on the item. The exact user event depends on\nthe collection's `selectionBehavior` prop and the interaction modality.",name:"onAction",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ListBoxItemRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ListBoxItemRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ListBoxItemRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},hrefLang:{defaultValue:null,description:"Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).",name:"hrefLang",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"origin"'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},routerOptions:{defaultValue:null,description:"Options for the configured client side router.",name:"routerOptions",required:!1,type:{name:"undefined"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}}}}}catch{}export{f as L};
