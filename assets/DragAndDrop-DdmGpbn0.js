import{$ as ye}from"./context-CDvmUKuB.js";import{r as v,R as A}from"./index-DRjF_FHU.js";import{r as be}from"./index-rX-Bn4lm.js";import{$ as Ke}from"./FocusScope-DHH2R_3E.js";import{g as me,c as ee,o as Q,F as ie}from"./useFocusRing-CTUx4aJi.js";import{f as $e,a as Se,d as ne}from"./platform-SeyP_Zfo.js";import{c as ve,a as xe}from"./openLink-Bn3ypVk4.js";import{$ as N}from"./isScrollable-BSEN4xi5.js";import{b as we,a as pe}from"./usePress-BJWzjFmP.js";import{$ as De}from"./useDescription-3QDDZ4kR.js";import{$ as Pe}from"./useControlledState-uSQY0H5C.js";function Te(n,e){const t=[];for(;n&&n!==document.documentElement;)N(n,e)&&t.push(n),n=n.parentElement;return t}function se(n,e,t,l){let i=me(t),s=t==null;v.useEffect(()=>{if(s||!n.current)return;let o=n.current;return o.addEventListener(e,i,l),()=>{o.removeEventListener(e,i,l)}},[n,e,l,s,i])}function ge(n,e){let t=oe(n,e,"left"),l=oe(n,e,"top"),i=e.offsetWidth,s=e.offsetHeight,o=n.scrollLeft,a=n.scrollTop,{borderTopWidth:f,borderLeftWidth:S}=getComputedStyle(n),g=n.scrollLeft+parseInt(S,10),w=n.scrollTop+parseInt(f,10),y=g+n.clientWidth,d=w+n.clientHeight;t<=o?o=t-parseInt(S,10):t+i>y&&(o+=t+i-y),l<=w?a=l-parseInt(f,10):l+s>d&&(a+=l+s-d),n.scrollLeft=o,n.scrollTop=a}function oe(n,e,t){const l=t==="left"?"offsetLeft":"offsetTop";let i=0;for(;e.offsetParent&&(i+=e[l],e.offsetParent!==n);){if(e.offsetParent.contains(n)){i-=n[l];break}e=e.offsetParent}return i}function re(n,e){if(n&&document.contains(n)){let o=document.scrollingElement||document.documentElement;if(window.getComputedStyle(o).overflow==="hidden"){let f=Te(n);for(let S of f)ge(S,n)}else{var t;let{left:f,top:S}=n.getBoundingClientRect();n==null||(t=n.scrollIntoView)===null||t===void 0||t.call(n,{block:"nearest"});let{left:g,top:w}=n.getBoundingClientRect();if(Math.abs(f-g)>1||Math.abs(S-w)>1){var l,i,s;e==null||(i=e.containingElement)===null||i===void 0||(l=i.scrollIntoView)===null||l===void 0||l.call(i,{block:"center",inline:"center"}),(s=n.scrollIntoView)===null||s===void 0||s.call(n,{block:"nearest"})}}}}const Fe=500;function Ce(n){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:l,onLongPress:i,threshold:s=Fe,accessibilityDescription:o}=n;const a=v.useRef(void 0);let{addGlobalListener:f,removeGlobalListener:S}=we(),{pressProps:g}=pe({isDisabled:e,onPressStart(y){if(y.continuePropagation(),(y.pointerType==="mouse"||y.pointerType==="touch")&&(t&&t({...y,type:"longpressstart"}),a.current=setTimeout(()=>{y.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),i&&i({...y,type:"longpress"}),a.current=void 0},s),y.pointerType==="touch")){let d=I=>{I.preventDefault()};f(y.target,"contextmenu",d,{once:!0}),f(window,"pointerup",()=>{setTimeout(()=>{S(y.target,"contextmenu",d)},30)},{once:!0})}},onPressEnd(y){a.current&&clearTimeout(a.current),l&&(y.pointerType==="mouse"||y.pointerType==="touch")&&l({...y,type:"longpressend"})}}),w=De(i&&!e?o:void 0);return{longPressProps:ee(g,w)}}let Z=new Map;function _e(n){let{locale:e}=ye(),t=e+(n?Object.entries(n).sort((i,s)=>i[0]<s[0]?-1:1).join():"");if(Z.has(t))return Z.get(t);let l=new Intl.Collator(e,n);return Z.set(t,l),l}function _(n){return $e()?n.altKey:n.ctrlKey}function W(n){return Se()?n.metaKey:n.ctrlKey}const Ie=1e3;function Re(n){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:l}=n,i=v.useRef({search:"",timeout:void 0}).current,s=o=>{let a=ke(o.key);if(!(!a||o.ctrlKey||o.metaKey||!o.currentTarget.contains(o.target))){if(a===" "&&i.search.trim().length>0&&(o.preventDefault(),"continuePropagation"in o||o.stopPropagation()),i.search+=a,e.getKeyForSearch!=null){let f=e.getKeyForSearch(i.search,t.focusedKey);f==null&&(f=e.getKeyForSearch(i.search)),f!=null&&(t.setFocusedKey(f),l&&l(f))}clearTimeout(i.timeout),i.timeout=setTimeout(()=>{i.search=""},Ie)}};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?s:void 0}}}function ke(n){return n.length===1||!/^[A-Z]/i.test(n)?n:""}function et(n){let{selectionManager:e,keyboardDelegate:t,ref:l,autoFocus:i=!1,shouldFocusWrap:s=!1,disallowEmptySelection:o=!1,disallowSelectAll:a=!1,selectOnFocus:f=e.selectionBehavior==="replace",disallowTypeAhead:S=!1,shouldUseVirtualFocus:g,allowsTabNavigation:w=!1,isVirtualized:y,scrollRef:d=l,linkBehavior:I="action"}=n,{direction:F}=ye(),h=ve(),m=r=>{var K;if(r.altKey&&r.key==="Tab"&&r.preventDefault(),!(!((K=l.current)===null||K===void 0)&&K.contains(r.target)))return;const $=(u,U)=>{if(u!=null){if(e.isLink(u)&&I==="selection"&&f&&!_(r)){var O;be.flushSync(()=>{e.setFocusedKey(u,U)});let te=(O=d.current)===null||O===void 0?void 0:O.querySelector(`[data-key="${CSS.escape(u.toString())}"]`),le=e.getItemProps(u);te&&h.open(te,r,le.href,le.routerOptions);return}if(e.setFocusedKey(u,U),e.isLink(u)&&I==="override")return;r.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&!_(r)&&e.replaceSelection(u)}};switch(r.key){case"ArrowDown":if(t.getKeyBelow){var D,T,P;let u=e.focusedKey!=null?(D=t.getKeyBelow)===null||D===void 0?void 0:D.call(t,e.focusedKey):(T=t.getFirstKey)===null||T===void 0?void 0:T.call(t);u==null&&s&&(u=(P=t.getFirstKey)===null||P===void 0?void 0:P.call(t,e.focusedKey)),u!=null&&(r.preventDefault(),$(u))}break;case"ArrowUp":if(t.getKeyAbove){var k,c,L;let u=e.focusedKey!=null?(k=t.getKeyAbove)===null||k===void 0?void 0:k.call(t,e.focusedKey):(c=t.getLastKey)===null||c===void 0?void 0:c.call(t);u==null&&s&&(u=(L=t.getLastKey)===null||L===void 0?void 0:L.call(t,e.focusedKey)),u!=null&&(r.preventDefault(),$(u))}break;case"ArrowLeft":if(t.getKeyLeftOf){var V,q,j;let u=e.focusedKey!=null?(V=t.getKeyLeftOf)===null||V===void 0?void 0:V.call(t,e.focusedKey):null;u==null&&s&&(u=F==="rtl"?(q=t.getFirstKey)===null||q===void 0?void 0:q.call(t,e.focusedKey):(j=t.getLastKey)===null||j===void 0?void 0:j.call(t,e.focusedKey)),u!=null&&(r.preventDefault(),$(u,F==="rtl"?"first":"last"))}break;case"ArrowRight":if(t.getKeyRightOf){var Y,G,X;let u=e.focusedKey!=null?(Y=t.getKeyRightOf)===null||Y===void 0?void 0:Y.call(t,e.focusedKey):null;u==null&&s&&(u=F==="rtl"?(G=t.getLastKey)===null||G===void 0?void 0:G.call(t,e.focusedKey):(X=t.getFirstKey)===null||X===void 0?void 0:X.call(t,e.focusedKey)),u!=null&&(r.preventDefault(),$(u,F==="rtl"?"last":"first"))}break;case"Home":if(t.getFirstKey){r.preventDefault();let u=t.getFirstKey(e.focusedKey,W(r));e.setFocusedKey(u),u!=null&&(W(r)&&r.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"End":if(t.getLastKey){r.preventDefault();let u=t.getLastKey(e.focusedKey,W(r));e.setFocusedKey(u),u!=null&&(W(r)&&r.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"PageDown":if(t.getKeyPageBelow&&e.focusedKey!=null){let u=t.getKeyPageBelow(e.focusedKey);u!=null&&(r.preventDefault(),$(u))}break;case"PageUp":if(t.getKeyPageAbove&&e.focusedKey!=null){let u=t.getKeyPageAbove(e.focusedKey);u!=null&&(r.preventDefault(),$(u))}break;case"a":W(r)&&e.selectionMode==="multiple"&&a!==!0&&(r.preventDefault(),e.selectAll());break;case"Escape":!o&&e.selectedKeys.size!==0&&(r.stopPropagation(),r.preventDefault(),e.clearSelection());break;case"Tab":if(!w){if(r.shiftKey)l.current.focus();else{let u=Ke(l.current,{tabbable:!0}),U,O;do O=u.lastChild(),O&&(U=O);while(O);U&&!U.contains(document.activeElement)&&ne(U)}break}}},p=v.useRef({top:0,left:0});se(d,"scroll",y?void 0:()=>{var r,K,$,D;p.current={top:($=(r=d.current)===null||r===void 0?void 0:r.scrollTop)!==null&&$!==void 0?$:0,left:(D=(K=d.current)===null||K===void 0?void 0:K.scrollLeft)!==null&&D!==void 0?D:0}});let b=r=>{if(e.isFocused){r.currentTarget.contains(r.target)||e.setFocused(!1);return}if(r.currentTarget.contains(r.target)){if(e.setFocused(!0),e.focusedKey==null){var K,$;let P=c=>{c!=null&&(e.setFocusedKey(c),f&&e.replaceSelection(c))},k=r.relatedTarget;var D,T;k&&r.currentTarget.compareDocumentPosition(k)&Node.DOCUMENT_POSITION_FOLLOWING?P((D=e.lastSelectedKey)!==null&&D!==void 0?D:(K=t.getLastKey)===null||K===void 0?void 0:K.call(t)):P((T=e.firstSelectedKey)!==null&&T!==void 0?T:($=t.getFirstKey)===null||$===void 0?void 0:$.call(t))}else!y&&d.current&&(d.current.scrollTop=p.current.top,d.current.scrollLeft=p.current.left);if(e.focusedKey!=null&&d.current){let P=d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);P&&(P.contains(document.activeElement)||ne(P),ie()==="keyboard"&&re(P,{containingElement:l.current}))}}},x=r=>{r.currentTarget.contains(r.relatedTarget)||e.setFocused(!1)};const C=v.useRef(i);v.useEffect(()=>{if(C.current){var r,K;let T=null;var $;i==="first"&&(T=($=(r=t.getFirstKey)===null||r===void 0?void 0:r.call(t))!==null&&$!==void 0?$:null);var D;i==="last"&&(T=(D=(K=t.getLastKey)===null||K===void 0?void 0:K.call(t))!==null&&D!==void 0?D:null);let P=e.selectedKeys;if(P.size){for(let k of P)if(e.canSelectItem(k)){T=k;break}}e.setFocused(!0),e.setFocusedKey(T),T==null&&!g&&l.current&&Q(l.current)}},[]);let E=v.useRef(e.focusedKey);v.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==E.current||C.current)&&d.current&&l.current){let r=ie(),K=l.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);if(!K)return;(r==="keyboard"||C.current)&&(ge(d.current,K),r!=="virtual"&&re(K,{containingElement:l.current}))}!g&&e.isFocused&&e.focusedKey==null&&E.current!=null&&l.current&&Q(l.current),E.current=e.focusedKey,C.current=!1}),se(l,"react-aria-focus-scope-restore",r=>{r.preventDefault(),e.setFocused(!0)});let B={onKeyDown:m,onFocus:b,onBlur:x,onMouseDown(r){d.current===r.target&&r.preventDefault()}},{typeSelectProps:R}=Re({keyboardDelegate:t,selectionManager:e});S||(B=ee(R,B));let z;return g||(z=e.focusedKey==null?0:-1),{collectionProps:{...B,tabIndex:z}}}function tt(n){let{selectionManager:e,key:t,ref:l,shouldSelectOnPressUp:i,shouldUseVirtualFocus:s,focus:o,isDisabled:a,onAction:f,allowsDifferentPressOrigin:S,linkBehavior:g="action"}=n,w=ve(),y=c=>{if(c.pointerType==="keyboard"&&_(c))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(g==="selection"&&l.current){let L=e.getItemProps(t);w.open(l.current,c,L.href,L.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(g==="override"||g==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):c&&c.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||c&&(W(c)||c.pointerType==="touch"||c.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};v.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!s&&(o?o():document.activeElement!==l.current&&l.current&&Q(l.current))},[l,t,e.focusedKey,e.childFocusStrategy,e.isFocused,s]),a=a||e.isDisabled(t);let d={};!s&&!a?d={tabIndex:t===e.focusedKey?0:-1,onFocus(c){c.target===l.current&&e.setFocusedKey(t)}}:a&&(d.onMouseDown=c=>{c.preventDefault()});let I=e.isLink(t)&&g==="override",F=e.isLink(t)&&g!=="selection"&&g!=="none",h=!a&&e.canSelectItem(t)&&!I,m=(f||F)&&!a,p=m&&(e.selectionBehavior==="replace"?!h:!h||e.isEmpty),b=m&&h&&e.selectionBehavior==="replace",x=p||b,C=v.useRef(null),E=x&&h,B=v.useRef(!1),R=v.useRef(!1),z=c=>{if(f&&f(),F&&l.current){let L=e.getItemProps(t);w.open(l.current,c,L.href,L.routerOptions)}},r={};i?(r.onPressStart=c=>{C.current=c.pointerType,B.current=E,c.pointerType==="keyboard"&&(!x||ue())&&y(c)},S?(r.onPressUp=p?void 0:c=>{c.pointerType!=="keyboard"&&h&&y(c)},r.onPress=p?z:void 0):r.onPress=c=>{if(p||b&&c.pointerType!=="mouse"){if(c.pointerType==="keyboard"&&!ce())return;z(c)}else c.pointerType!=="keyboard"&&h&&y(c)}):(r.onPressStart=c=>{C.current=c.pointerType,B.current=E,R.current=p,h&&(c.pointerType==="mouse"&&!p||c.pointerType==="keyboard"&&(!m||ue()))&&y(c)},r.onPress=c=>{(c.pointerType==="touch"||c.pointerType==="pen"||c.pointerType==="virtual"||c.pointerType==="keyboard"&&x&&ce()||c.pointerType==="mouse"&&R.current)&&(x?z(c):h&&y(c))}),d["data-key"]=t,r.preventFocusOnPress=s;let{pressProps:K,isPressed:$}=pe(r),D=b?c=>{C.current==="mouse"&&(c.stopPropagation(),c.preventDefault(),z(c))}:void 0,{longPressProps:T}=Ce({isDisabled:!E,onLongPress(c){c.pointerType==="touch"&&(y(c),e.setSelectionBehavior("toggle"))}}),P=c=>{C.current==="touch"&&B.current&&c.preventDefault()},k=e.isLink(t)?c=>{xe.isOpening||c.preventDefault()}:void 0;return{itemProps:ee(d,h||p?K:{},E?T:{},{onDoubleClick:D,onDragStartCapture:P,onClick:k}),isPressed:$,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:a,allowsSelection:h,hasAction:x}}function ce(){let n=window.event;return(n==null?void 0:n.key)==="Enter"}function ue(){let n=window.event;return(n==null?void 0:n.key)===" "||(n==null?void 0:n.code)==="Space"}class ae{getItemRect(e){let t=this.ref.current;if(!t)return null;let l=e!=null?t.querySelector(`[data-key="${CSS.escape(e.toString())}"]`):null;if(!l)return null;let i=t.getBoundingClientRect(),s=l.getBoundingClientRect();return{x:s.left-i.left+t.scrollLeft,y:s.top-i.top+t.scrollTop,width:s.width,height:s.height}}getContentSize(){let e=this.ref.current;var t,l;return{width:(t=e==null?void 0:e.scrollWidth)!==null&&t!==void 0?t:0,height:(l=e==null?void 0:e.scrollHeight)!==null&&l!==void 0?l:0}}getVisibleRect(){let e=this.ref.current;var t,l,i,s;return{x:(t=e==null?void 0:e.scrollLeft)!==null&&t!==void 0?t:0,y:(l=e==null?void 0:e.scrollTop)!==null&&l!==void 0?l:0,width:(i=e==null?void 0:e.offsetWidth)!==null&&i!==void 0?i:0,height:(s=e==null?void 0:e.offsetHeight)!==null&&s!==void 0?s:0}}constructor(e){this.ref=e}}class lt{isDisabled(e){var t;return this.disabledBehavior==="all"&&(((t=e.props)===null||t===void 0?void 0:t.isDisabled)||this.disabledKeys.has(e.key))}findNextNonDisabled(e,t){let l=e;for(;l!=null;){let i=this.collection.getItem(l);if((i==null?void 0:i.type)==="item"&&!this.isDisabled(i))return l;l=t(l)}return null}getNextKey(e){let t=e;return t=this.collection.getKeyAfter(t),this.findNextNonDisabled(t,l=>this.collection.getKeyAfter(l))}getPreviousKey(e){let t=e;return t=this.collection.getKeyBefore(t),this.findNextNonDisabled(t,l=>this.collection.getKeyBefore(l))}findKey(e,t,l){let i=e,s=this.layoutDelegate.getItemRect(i);if(!s||i==null)return null;let o=s;do{if(i=t(i),i==null)break;s=this.layoutDelegate.getItemRect(i)}while(s&&l(o,s)&&i!=null);return i}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}getKeyBelow(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getNextKey(t),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getPreviousKey(t),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){let t=this.direction==="ltr"?"getKeyRightOf":"getKeyLeftOf";return this.layoutDelegate[t]?(e=this.layoutDelegate[t](e),this.findNextNonDisabled(e,l=>this.layoutDelegate[t](l))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="rtl"):this.findKey(e,l=>this.getNextColumn(l,this.direction==="rtl"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="rtl"):null}getKeyLeftOf(e){let t=this.direction==="ltr"?"getKeyLeftOf":"getKeyRightOf";return this.layoutDelegate[t]?(e=this.layoutDelegate[t](e),this.findNextNonDisabled(e,l=>this.layoutDelegate[t](l))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="ltr"):this.findKey(e,l=>this.getNextColumn(l,this.direction==="ltr"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="ltr"):null}getFirstKey(){let e=this.collection.getFirstKey();return this.findNextNonDisabled(e,t=>this.collection.getKeyAfter(t))}getLastKey(){let e=this.collection.getLastKey();return this.findNextNonDisabled(e,t=>this.collection.getKeyBefore(t))}getKeyPageAbove(e){let t=this.ref.current,l=this.layoutDelegate.getItemRect(e);if(!l)return null;if(t&&!N(t))return this.getFirstKey();let i=e;if(this.orientation==="horizontal"){let s=Math.max(0,l.x+l.width-this.layoutDelegate.getVisibleRect().width);for(;l&&l.x>s&&i!=null;)i=this.getKeyAbove(i),l=i==null?null:this.layoutDelegate.getItemRect(i)}else{let s=Math.max(0,l.y+l.height-this.layoutDelegate.getVisibleRect().height);for(;l&&l.y>s&&i!=null;)i=this.getKeyAbove(i),l=i==null?null:this.layoutDelegate.getItemRect(i)}return i??this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.layoutDelegate.getItemRect(e);if(!l)return null;if(t&&!N(t))return this.getLastKey();let i=e;if(this.orientation==="horizontal"){let s=Math.min(this.layoutDelegate.getContentSize().width,l.y-l.width+this.layoutDelegate.getVisibleRect().width);for(;l&&l.x<s&&i!=null;)i=this.getKeyBelow(i),l=i==null?null:this.layoutDelegate.getItemRect(i)}else{let s=Math.min(this.layoutDelegate.getContentSize().height,l.y-l.height+this.layoutDelegate.getVisibleRect().height);for(;l&&l.y<s&&i!=null;)i=this.getKeyBelow(i),l=i==null?null:this.layoutDelegate.getItemRect(i)}return i??this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,i=t||this.getFirstKey();for(;i!=null;){let s=l.getItem(i);if(!s)return null;let o=s.textValue.slice(0,e.length);if(s.textValue&&this.collator.compare(o,e)===0)return i;i=this.getNextKey(i)}return null}constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||"all",this.orientation=t.orientation||"vertical",this.direction=t.direction,this.layout=t.layout||"stack",this.layoutDelegate=t.layoutDelegate||new ae(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all",this.layoutDelegate=new ae(this.ref);this.layout==="stack"&&this.orientation==="vertical"&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}class Me{build(e,t){return this.context=t,fe(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if(A.isValidElement(t)&&t.type===A.Fragment)yield*this.iterateCollection({children:t.props.children,items:l});else if(typeof t=="function"){if(!l)throw new Error("props.children was a function but props.items is missing");let i=0;for(let s of l)yield*this.getFullNode({value:s,index:i},{renderer:t}),i++}else{let i=[];A.Children.forEach(t,o=>{o&&i.push(o)});let s=0;for(let o of i){let a=this.getFullNode({element:o,index:s},{});for(let f of a)s++,yield f}}}getKey(e,t,l,i){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${i}${t.key}`;let s=t.value;if(s!=null){var o;let a=(o=s.key)!==null&&o!==void 0?o:s.id;if(a==null)throw new Error("No key found for item");return a}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,i){if(A.isValidElement(e.element)&&e.element.type===A.Fragment){let h=[];A.Children.forEach(e.element.props.children,p=>{h.push(p)});var s;let m=(s=e.index)!==null&&s!==void 0?s:0;for(const p of h)yield*this.getFullNode({element:p,index:m++},t,l,i);return}let o=e.element;if(!o&&e.value&&t&&t.renderer){let h=this.cache.get(e.value);if(h&&(!h.shouldInvalidate||!h.shouldInvalidate(this.context))){h.index=e.index,h.parentKey=i?i.key:null,yield h;return}o=t.renderer(e.value)}if(A.isValidElement(o)){let h=o.type;if(typeof h!="function"&&typeof h.getCollectionNode!="function"){let x=o.type;throw new Error(`Unknown element <${x}> in collection.`)}let m=h.getCollectionNode(o.props,this.context);var a;let p=(a=e.index)!==null&&a!==void 0?a:0,b=m.next();for(;!b.done&&b.value;){let x=b.value;e.index=p;var f;let C=(f=x.key)!==null&&f!==void 0?f:null;C==null&&(C=x.element?null:this.getKey(o,e,t,l));let B=[...this.getFullNode({...x,key:C,index:p,wrapper:Be(e.wrapper,x.wrapper)},this.getChildState(t,x),l?`${l}${o.key}`:o.key,i)];for(let R of B){var S,g;R.value=(g=(S=x.value)!==null&&S!==void 0?S:e.value)!==null&&g!==void 0?g:null,R.value&&this.cache.set(R.value,R);var w;if(e.type&&R.type!==e.type)throw new Error(`Unsupported type <${H(R.type)}> in <${H((w=i==null?void 0:i.type)!==null&&w!==void 0?w:"unknown parent type")}>. Only <${H(e.type)}> is supported.`);p++,yield R}b=m.next(B)}return}if(e.key==null||e.type==null)return;let y=this;var d,I;let F={type:e.type,props:e.props,key:e.key,parentKey:i?i.key:null,value:(d=e.value)!==null&&d!==void 0?d:null,level:i?i.level+1:0,index:e.index,rendered:e.rendered,textValue:(I=e.textValue)!==null&&I!==void 0?I:"","aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:fe(function*(){if(!e.hasChildNodes||!e.childNodes)return;let h=0;for(let m of e.childNodes()){m.key!=null&&(m.key=`${F.key}${m.key}`);let p=y.getFullNode({...m,index:h},y.getChildState(t,m),F.key,F);for(let b of p)h++,yield b}})};yield F}constructor(){this.cache=new WeakMap}}function fe(n){let e=[],t=null;return{*[Symbol.iterator](){for(let l of e)yield l;t||(t=n());for(let l of t)e.push(l),yield l}}}function Be(n,e){if(n&&e)return t=>n(e(t));if(n)return n;if(e)return e}function H(n){return n[0].toUpperCase()+n.slice(1)}function it(n,e,t){let l=v.useMemo(()=>new Me,[]),{children:i,items:s,collection:o}=n;return v.useMemo(()=>{if(o)return o;let f=l.build({children:i,items:s},t);return e(f)},[l,i,s,o,t,e])}function Ae(n,e){return typeof e.getChildren=="function"?e.getChildren(n.key):n.childNodes}function Ee(n){return Le(n,0)}function Le(n,e){if(e<0)return;let t=0;for(let l of n){if(t===e)return l;t++}}function nt(n){let e;for(let t of n)e=t;return e}function J(n,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let l=[...de(n,e),e],i=[...de(n,t),t],s=l.slice(0,i.length).findIndex((o,a)=>o!==i[a]);return s!==-1?(e=l[s],t=i[s],e.index-t.index):l.findIndex(o=>o===t)>=0?1:(i.findIndex(o=>o===e)>=0,-1)}function de(n,e){let t=[],l=e;for(;(l==null?void 0:l.parentKey)!=null;)l=n.getItem(l.parentKey),l&&t.unshift(l);return t}class M extends Set{constructor(e,t,l){super(e),e instanceof M?(this.anchorKey=t??e.anchorKey,this.currentKey=l??e.currentKey):(this.anchorKey=t??null,this.currentKey=l??null)}}function Oe(n,e){if(n.size!==e.size)return!1;for(let t of n)if(!e.has(t))return!1;return!0}function st(n){let{selectionMode:e="none",disallowEmptySelection:t=!1,allowDuplicateSelectionEvents:l,selectionBehavior:i="toggle",disabledBehavior:s="all"}=n,o=v.useRef(!1),[,a]=v.useState(!1),f=v.useRef(null),S=v.useRef(null),[,g]=v.useState(null),w=v.useMemo(()=>he(n.selectedKeys),[n.selectedKeys]),y=v.useMemo(()=>he(n.defaultSelectedKeys,new M),[n.defaultSelectedKeys]),[d,I]=Pe(w,y,n.onSelectionChange),F=v.useMemo(()=>n.disabledKeys?new Set(n.disabledKeys):new Set,[n.disabledKeys]),[h,m]=v.useState(i);i==="replace"&&h==="toggle"&&typeof d=="object"&&d.size===0&&m("replace");let p=v.useRef(i);return v.useEffect(()=>{i!==p.current&&(m(i),p.current=i)},[i]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:h,setSelectionBehavior:m,get isFocused(){return o.current},setFocused(b){o.current=b,a(b)},get focusedKey(){return f.current},get childFocusStrategy(){return S.current},setFocusedKey(b,x="first"){f.current=b,S.current=x,g(b)},selectedKeys:d,setSelectedKeys(b){(l||!Oe(b,d))&&I(b)},disabledKeys:F,disabledBehavior:s}}function he(n,e){return n?n==="all"?"all":new M(n):e}class ot{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys==="all"?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(l=>t.has(l)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&J(this.collection,i,e)<0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get lastSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&J(this.collection,i,e)>0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l;if(this.state.selectedKeys==="all")l=new M([t],t,t);else{let o=this.state.selectedKeys;var i;let a=(i=o.anchorKey)!==null&&i!==void 0?i:t;l=new M(o,a,t);var s;for(let f of this.getKeyRange(a,(s=o.currentKey)!==null&&s!==void 0?s:t))l.delete(f);for(let f of this.getKeyRange(t,a))this.canSelectItem(f)&&l.add(f)}this.state.setSelectedKeys(l)}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?J(this.collection,l,i)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){var l;if(!((l=this.layoutDelegate)===null||l===void 0)&&l.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let i=[],s=e;for(;s!=null;){let o=this.collection.getItem(s);if(o&&(o.type==="item"||o.type==="cell"&&this.allowsCellSelection)&&i.push(s),s===t)return i;s=this.collection.getKeyAfter(s)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t&&t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l=new M(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);l.has(t)?l.delete(t):this.canSelectItem(t)&&(l.add(t),l.anchorKey=t,l.currentKey=t),!(this.disallowEmptySelection&&l.size===0)&&this.state.setSelectedKeys(l)}replaceSelection(e){if(this.selectionMode==="none")return;let t=this.getKey(e);if(t==null)return;let l=this.canSelectItem(t)?new M([t],t,t):new M;this.state.setSelectedKeys(l)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new M;for(let l of e){let i=this.getKey(l);if(i!=null&&(t.add(i),this.selectionMode==="single"))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l!=null;){if(this.canSelectItem(l)){var i;let o=this.collection.getItem(l);(o==null?void 0:o.type)==="item"&&e.push(l);var s;o!=null&&o.hasChildNodes&&(this.allowsCellSelection||o.type!=="item")&&t((s=(i=Ee(Ae(o,this.collection)))===null||i===void 0?void 0:i.key)!==null&&s!==void 0?s:null)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new M)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let l=this.collection.getItem(e);return!(!l||!(l==null||(t=l.props)===null||t===void 0)&&t.isDisabled||l.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,l;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,l;return!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,l){this.collection=e,this.state=t;var i;this.allowsCellSelection=(i=l==null?void 0:l.allowsCellSelection)!==null&&i!==void 0?i:!1,this._isSelectAll=null,this.layoutDelegate=(l==null?void 0:l.layoutDelegate)||null}}const rt=v.createContext({}),ze=v.createContext(null);function Ue(n,e){let{render:t}=v.useContext(ze);return A.createElement(A.Fragment,null,t(n,e))}const We=v.forwardRef(Ue);function ct(n,e){var t;let l=n==null?void 0:n.renderDropIndicator,i=n==null||(t=n.isVirtualDragging)===null||t===void 0?void 0:t.call(n),s=v.useCallback(o=>{if(i||e!=null&&e.isDropTarget(o))return l?l(o):A.createElement(We,{target:o})},[e==null?void 0:e.target,i,l]);return n!=null&&n.useDropIndicator?s:void 0}function ut(n,e,t){var l,i;let s=n.focusedKey,o=null;if(!(e==null||(l=e.isVirtualDragging)===null||l===void 0)&&l.call(e)&&(t==null||(i=t.target)===null||i===void 0?void 0:i.type)==="item"){o=t.target.key;var a;t.target.dropPosition==="after"&&(o=(a=t.collection.getKeyAfter(o))!==null&&a!==void 0?a:o)}return v.useMemo(()=>new Set([s,o].filter(f=>f!=null)),[s,o])}export{_e as $,lt as a,Re as b,et as c,Ae as d,tt as e,st as f,it as g,ot as h,rt as i,ze as j,ut as k,ct as l,nt as m,re as n,We as o,Ce as p,Le as q,Ee as r,ae as s};
