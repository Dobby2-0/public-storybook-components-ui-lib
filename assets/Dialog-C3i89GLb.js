import{s as pt,d as te,o as $t,b as le,r as mt,D as bt,j as k,c as vt,e as ve,I as gt,v as J,$ as xt,p as ht,n as ae,k as re,f as oe,i as ge,A as Et,B as wt,z as xe,O as Pt}from"./useFocusRing-COlWfXo5.js";import{$ as yt}from"./RSPContexts-CHzP-Sy3.js";import{r as $,R as g}from"./index-CTjT7uj6.js";import{f as Q}from"./usePress-txE9COHB.js";import{$ as Ct}from"./useControlledState-CEg4Rl-x.js";import{a as Rt}from"./PortalProvider-DrflOcEs.js";import{c as Ot,b as Lt}from"./FocusScope-DkCrxc-x.js";import{R as Tt}from"./index-9r8iugjR.js";import{b as Dt}from"./Hidden-BsqWnUMT.js";import{a as he,$ as It}from"./ariaHideOutside-CWagKFk4.js";import{$ as St}from"./context-Ao51U0H-.js";import{$ as Ht}from"./useLabels--xxESjfg.js";import{$ as Mt}from"./useLocalizedStringFormatter-CfLVTgOs.js";import{$ as At}from"./VisuallyHidden-D6MjpNXd.js";function kt(){return typeof window.ResizeObserver<"u"}function ie(e){const{ref:t,box:r,onResize:n}=e;$.useEffect(()=>{let o=t==null?void 0:t.current;if(o)if(kt()){const l=new window.ResizeObserver(i=>{i.length&&n()});return l.observe(o,{box:r}),()=>{o&&l.unobserve(o)}}else return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)}},[n,t,r])}function _(e,t=-1/0,r=1/0){return Math.min(Math.max(e,t),r)}const zt=g.forwardRef(({children:e,...t},r)=>{let n=$.useRef(!1),o=$.useContext(Q);r=pt(r||(o==null?void 0:o.ref));let l=te(o||{},{...t,ref:r,register(){n.current=!0,o&&o.register()}});return $t(o,r),$.useEffect(()=>{n.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),n.current=!0)},[]),g.createElement(Q.Provider,{value:l},e)});function Bt({children:e}){let t=$.useMemo(()=>({register:()=>{}}),[]);return g.createElement(Q.Provider,{value:t},e)}function Nt(e){let{ref:t,onInteractOutside:r,isDisabled:n,onInteractOutsideStart:o}=e,l=$.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),i=le(c=>{r&&K(c,t)&&(o&&o(c),l.current.isPointerDown=!0)}),a=le(c=>{r&&r(c)});$.useEffect(()=>{let c=l.current;if(n)return;const d=t.current,s=mt(d);if(typeof PointerEvent<"u"){let p=m=>{c.isPointerDown&&K(m,t)&&a(m),c.isPointerDown=!1};return s.addEventListener("pointerdown",i,!0),s.addEventListener("pointerup",p,!0),()=>{s.removeEventListener("pointerdown",i,!0),s.removeEventListener("pointerup",p,!0)}}else{let p=u=>{c.ignoreEmulatedMouseEvents?c.ignoreEmulatedMouseEvents=!1:c.isPointerDown&&K(u,t)&&a(u),c.isPointerDown=!1},m=u=>{c.ignoreEmulatedMouseEvents=!0,c.isPointerDown&&K(u,t)&&a(u),c.isPointerDown=!1};return s.addEventListener("mousedown",i,!0),s.addEventListener("mouseup",p,!0),s.addEventListener("touchstart",i,!0),s.addEventListener("touchend",m,!0),()=>{s.removeEventListener("mousedown",i,!0),s.removeEventListener("mouseup",p,!0),s.removeEventListener("touchstart",i,!0),s.removeEventListener("touchend",m,!0)}}},[t,n,i,a])}function K(e,t){if(e.button>0)return!1;if(e.target){const r=e.target.ownerDocument;if(!r||!r.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}const T={top:"top",bottom:"top",left:"left",right:"left"},j={top:"bottom",bottom:"top",left:"right",right:"left"},Ft={top:"left",left:"top"},ee={top:"height",left:"width"},Ee={width:"totalWidth",height:"totalHeight"},U={};let C=typeof document<"u"&&window.visualViewport;function se(e){let t=0,r=0,n=0,o=0,l=0,i=0,a={},c=(C==null?void 0:C.scale)>1;if(e.tagName==="BODY"){let p=document.documentElement;n=p.clientWidth,o=p.clientHeight;var d;t=(d=C==null?void 0:C.width)!==null&&d!==void 0?d:n;var s;r=(s=C==null?void 0:C.height)!==null&&s!==void 0?s:o,a.top=p.scrollTop||e.scrollTop,a.left=p.scrollLeft||e.scrollLeft,C&&(l=C.offsetTop,i=C.offsetLeft)}else({width:t,height:r,top:l,left:i}=F(e)),a.top=e.scrollTop,a.left=e.scrollLeft,n=t,o=r;return bt()&&(e.tagName==="BODY"||e.tagName==="HTML")&&c&&(a.top=0,a.left=0,l=C.pageTop,i=C.pageLeft),{width:t,height:r,totalWidth:n,totalHeight:o,scroll:a,top:l,left:i}}function Wt(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function ce(e,t,r,n,o,l,i){let a=o.scroll[e],c=n[ee[e]],d=n.scroll[T[e]]+l,s=c+n.scroll[T[e]]-l,p=t-a+i[e]-n[T[e]],m=t-a+r+i[e]-n[T[e]];return p<d?d-p:m>s?Math.max(s-m,d-p):0}function Kt(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function de(e){if(U[e])return U[e];let[t,r]=e.split(" "),n=T[t]||"right",o=Ft[n];T[r]||(r="center");let l=ee[n],i=ee[o];return U[e]={placement:t,crossPlacement:r,axis:n,crossAxis:o,size:l,crossSize:i},U[e]}function Z(e,t,r,n,o,l,i,a,c,d){let{placement:s,crossPlacement:p,axis:m,crossAxis:u,size:f,crossSize:x}=n,b={};b[u]=e[u],p==="center"?b[u]+=(e[x]-r[x])/2:p!==u&&(b[u]+=e[x]-r[x]),b[u]+=l;const R=e[u]-r[x]+c+d,v=e[u]+e[x]-c-d;if(b[u]=_(b[u],R,v),s===m){const y=a?i[f]:t[Ee[f]];b[j[m]]=Math.floor(y-e[m]+o)}else b[m]=Math.floor(e[m]+e[f]+o);return b}function Ut(e,t,r,n,o,l,i,a){const c=n?r.height:t[Ee.height];let d=e.top!=null?r.top+e.top:r.top+(c-e.bottom-i),s=a!=="top"?Math.max(0,t.height+t.top+t.scroll.top-d-(o.top+o.bottom+l)):Math.max(0,d+i-(t.top+t.scroll.top)-(o.top+o.bottom+l));return Math.min(t.height-l*2,s)}function fe(e,t,r,n,o,l){let{placement:i,axis:a,size:c}=l;return i===a?Math.max(0,r[a]-e[a]-e.scroll[a]+t[a]-n[a]-n[j[a]]-o):Math.max(0,e[c]+e[a]+e.scroll[a]-t[a]-r[a]-r[c]-n[a]-n[j[a]]-o)}function Yt(e,t,r,n,o,l,i,a,c,d,s,p,m,u,f,x){let b=de(e),{size:R,crossAxis:v,crossSize:y,placement:z,crossPlacement:O}=b,h=Z(t,a,r,b,s,p,d,m,f,x),B=s,S=fe(a,d,t,o,l+s,b);if(i&&n[R]>S){let X=de(`${j[z]} ${O}`),ut=Z(t,a,r,X,s,p,d,m,f,x);fe(a,d,t,o,l+s,X)>S&&(b=X,h=ut,B=s)}let w="bottom";b.axis==="top"?b.placement==="top"?w="top":b.placement==="bottom"&&(w="bottom"):b.crossAxis==="top"&&(b.crossPlacement==="top"?w="bottom":b.crossPlacement==="bottom"&&(w="top"));let P=ce(v,h[v],r[y],a,c,l,d);h[v]+=P;let L=Ut(h,a,d,m,o,l,r.height,w);u&&u<L&&(L=u),r.height=Math.min(r.height,L),h=Z(t,a,r,b,B,p,d,m,f,x),P=ce(v,h[v],r[y],a,c,l,d),h[v]+=P;let H={},M=t[v]+.5*t[y]-h[v]-o[T[v]];const D=f/2+x,A=T[v]==="left"?o.left+o.right:o.top+o.bottom,V=r[y]-A-f/2-x,ct=t[v]+f/2-(h[v]+o[T[v]]),dt=t[v]+t[y]-f/2-(h[v]+o[T[v]]),ft=_(M,ct,dt);return H[v]=_(ft,D,V),{position:h,maxHeight:L,arrowOffsetLeft:H.left,arrowOffsetTop:H.top,placement:b.placement}}function jt(e){let{placement:t,targetNode:r,overlayNode:n,scrollNode:o,padding:l,shouldFlip:i,boundaryElement:a,offset:c,crossOffset:d,maxHeight:s,arrowSize:p=0,arrowBoundaryOffset:m=0}=e,u=n instanceof HTMLElement?Vt(n):document.documentElement,f=u===document.documentElement;const x=window.getComputedStyle(u).position;let b=!!x&&x!=="static",R=f?F(r):ue(r,u);if(!f){let{marginTop:S,marginLeft:w}=window.getComputedStyle(r);R.top+=parseInt(S,10)||0,R.left+=parseInt(w,10)||0}let v=F(n),y=Kt(n);v.width+=y.left+y.right,v.height+=y.top+y.bottom;let z=Wt(o),O=se(a),h=se(u),B=a.tagName==="BODY"?F(u):ue(u,a);return u.tagName==="HTML"&&a.tagName==="BODY"&&(h.scroll.top=0,h.scroll.left=0),Yt(t,R,v,z,y,l,i,O,h,B,c,d,b,s,p,m)}function F(e){let{top:t,left:r,width:n,height:o}=e.getBoundingClientRect(),{scrollTop:l,scrollLeft:i,clientTop:a,clientLeft:c}=document.documentElement;return{top:t+l-a,left:r+i-c,width:n,height:o}}function ue(e,t){let r=window.getComputedStyle(e),n;if(r.position==="fixed"){let{top:o,left:l,width:i,height:a}=e.getBoundingClientRect();n={top:o,left:l,width:i,height:a}}else{n=F(e);let o=F(t),l=window.getComputedStyle(t);o.top+=(parseInt(l.borderTopWidth,10)||0)-t.scrollTop,o.left+=(parseInt(l.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function Vt(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!pe(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!pe(t);)t=t.parentElement;return t||document.documentElement}function pe(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}const we=new WeakMap;function Xt(e){let{triggerRef:t,isOpen:r,onClose:n}=e;$.useEffect(()=>{if(!r||n===null)return;let o=l=>{let i=l.target;if(!t.current||i instanceof Node&&!i.contains(t.current)||l.target instanceof HTMLInputElement||l.target instanceof HTMLTextAreaElement)return;let a=n||we.get(t.current);a&&a()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[r,n,t])}let E=typeof document<"u"&&window.visualViewport;function Zt(e){let{direction:t}=St(),{arrowSize:r=0,targetRef:n,overlayRef:o,scrollRef:l=o,placement:i="bottom",containerPadding:a=12,shouldFlip:c=!0,boundaryElement:d=typeof document<"u"?document.body:null,offset:s=0,crossOffset:p=0,shouldUpdatePosition:m=!0,isOpen:u=!0,onClose:f,maxHeight:x,arrowBoundaryOffset:b=0}=e,[R,v]=$.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),y=[m,i,o.current,n.current,l.current,a,c,d,s,p,u,t,x,b,r],z=$.useRef(E==null?void 0:E.scale);$.useEffect(()=>{u&&(z.current=E==null?void 0:E.scale)},[u]);let O=$.useCallback(()=>{if(m===!1||!u||!o.current||!n.current||!d||(E==null?void 0:E.scale)!==z.current)return;let w=null;if(l.current&&l.current.contains(document.activeElement)){let D=document.activeElement.getBoundingClientRect(),A=l.current.getBoundingClientRect();w={type:"top",offset:D.top-A.top},w.offset>A.height/2&&(w.type="bottom",w.offset=D.bottom-A.bottom)}let P=o.current;if(!x&&o.current){var L;P.style.top="0px",P.style.bottom="";var H;P.style.maxHeight=((H=(L=window.visualViewport)===null||L===void 0?void 0:L.height)!==null&&H!==void 0?H:window.innerHeight)+"px"}let M=jt({placement:Gt(i,t),overlayNode:o.current,targetNode:n.current,scrollNode:l.current||o.current,padding:a,shouldFlip:c,boundaryElement:d,offset:s,crossOffset:p,maxHeight:x,arrowSize:r,arrowBoundaryOffset:b});if(P.style.top="",P.style.bottom="",P.style.left="",P.style.right="",Object.keys(M.position).forEach(D=>P.style[D]=M.position[D]+"px"),P.style.maxHeight=M.maxHeight!=null?M.maxHeight+"px":void 0,w){let D=document.activeElement.getBoundingClientRect(),A=l.current.getBoundingClientRect(),V=D[w.type]-A[w.type];l.current.scrollTop+=V-w.offset}v(M)},y);k(O,y),qt(O),ie({ref:o,onResize:O}),ie({ref:n,onResize:O});let h=$.useRef(!1);k(()=>{let w,P=()=>{h.current=!0,clearTimeout(w),w=setTimeout(()=>{h.current=!1},500),O()},L=()=>{h.current&&P()};return E==null||E.addEventListener("resize",P),E==null||E.addEventListener("scroll",L),()=>{E==null||E.removeEventListener("resize",P),E==null||E.removeEventListener("scroll",L)}},[O]);let B=$.useCallback(()=>{h.current||f()},[f,h]);Xt({triggerRef:n,isOpen:u,onClose:f&&B});var S;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...R.position,maxHeight:(S=R.maxHeight)!==null&&S!==void 0?S:"100vh"}},placement:R.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:R.arrowOffsetLeft,top:R.arrowOffsetTop}},updatePosition:O}}function qt(e){k(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function Gt(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const I=[];function Jt(e,t){let{onClose:r,shouldCloseOnBlur:n,isOpen:o,isDismissable:l=!1,isKeyboardDismissDisabled:i=!1,shouldCloseOnInteractOutside:a}=e;$.useEffect(()=>(o&&I.push(t),()=>{let f=I.indexOf(t);f>=0&&I.splice(f,1)}),[o,t]);let c=()=>{I[I.length-1]===t&&r&&r()},d=f=>{(!a||a(f.target))&&I[I.length-1]===t&&(f.stopPropagation(),f.preventDefault())},s=f=>{(!a||a(f.target))&&(I[I.length-1]===t&&(f.stopPropagation(),f.preventDefault()),c())},p=f=>{f.key==="Escape"&&!i&&!f.nativeEvent.isComposing&&(f.stopPropagation(),f.preventDefault(),c())};Nt({ref:t,onInteractOutside:l&&o?s:null,onInteractOutsideStart:d});let{focusWithinProps:m}=vt({isDisabled:!n,onBlurWithin:f=>{!f.relatedTarget||Ot(f.relatedTarget)||(!a||a(f.relatedTarget))&&r()}}),u=f=>{f.target===f.currentTarget&&f.preventDefault()};return{overlayProps:{onKeyDown:p,...m},underlayProps:{onPointerDown:u}}}function Qt(e,t,r){let{type:n}=e,{isOpen:o}=t;$.useEffect(()=>{r&&r.current&&we.set(r.current,t.close)});let l;n==="menu"?l=!0:n==="listbox"&&(l="listbox");let i=ve();return{triggerProps:{"aria-haspopup":l,"aria-expanded":o,"aria-controls":o?i:null,onPress:t.toggle},overlayProps:{id:i}}}const q=typeof document<"u"&&window.visualViewport,_t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let Y=0,G;function er(e={}){let{isDisabled:t}=e;k(()=>{if(!t)return Y++,Y===1&&(gt()?G=rr():G=tr()),()=>{Y--,Y===0&&G()}},[t])}function tr(){return J(N(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),N(document.documentElement,"overflow","hidden"))}function rr(){let e,t,r=d=>{e=he(d.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=N(e,"overscrollBehavior","contain"))},n=d=>{if(!e||e===document.documentElement||e===document.body){d.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&d.preventDefault()},o=d=>{let s=d.target;me(s)&&s!==document.activeElement&&(d.preventDefault(),a(),s.style.transform="translateY(-2000px)",s.focus(),requestAnimationFrame(()=>{s.style.transform=""})),t&&t()},l=d=>{let s=d.target;me(s)&&(a(),s.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{s.style.transform="",q&&(q.height<window.innerHeight?requestAnimationFrame(()=>{$e(s)}):q.addEventListener("resize",()=>$e(s),{once:!0}))}))},i=null,a=()=>{if(i)return;let d=()=>{window.scrollTo(0,0)},s=window.pageXOffset,p=window.pageYOffset;i=J(W(window,"scroll",d),N(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),N(document.documentElement,"overflow","hidden"),N(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(s,p)}),window.scrollTo(0,0)},c=J(W(document,"touchstart",r,{passive:!1,capture:!0}),W(document,"touchmove",n,{passive:!1,capture:!0}),W(document,"touchend",o,{passive:!1,capture:!0}),W(document,"focus",l,!0));return()=>{t==null||t(),i==null||i(),c()}}function N(e,t,r){let n=e.style[t];return e.style[t]=r,()=>{e.style[t]=n}}function W(e,t,r,n){return e.addEventListener(t,r,n),()=>{e.removeEventListener(t,r,n)}}function $e(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let r=he(e);if(r!==document.documentElement&&r!==document.body&&r!==e){let n=r.getBoundingClientRect().top,o=e.getBoundingClientRect().top;o>n+e.clientHeight&&(r.scrollTop+=o-n)}e=r.parentElement}}function me(e){return e instanceof HTMLInputElement&&!_t.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var Pe={};Pe={dismiss:"تجاهل"};var ye={};ye={dismiss:"Отхвърляне"};var Ce={};Ce={dismiss:"Odstranit"};var Re={};Re={dismiss:"Luk"};var Oe={};Oe={dismiss:"Schließen"};var Le={};Le={dismiss:"Απόρριψη"};var Te={};Te={dismiss:"Dismiss"};var De={};De={dismiss:"Descartar"};var Ie={};Ie={dismiss:"Lõpeta"};var Se={};Se={dismiss:"Hylkää"};var He={};He={dismiss:"Rejeter"};var Me={};Me={dismiss:"התעלם"};var Ae={};Ae={dismiss:"Odbaci"};var ke={};ke={dismiss:"Elutasítás"};var ze={};ze={dismiss:"Ignora"};var Be={};Be={dismiss:"閉じる"};var Ne={};Ne={dismiss:"무시"};var Fe={};Fe={dismiss:"Atmesti"};var We={};We={dismiss:"Nerādīt"};var Ke={};Ke={dismiss:"Lukk"};var Ue={};Ue={dismiss:"Negeren"};var Ye={};Ye={dismiss:"Zignoruj"};var je={};je={dismiss:"Descartar"};var Ve={};Ve={dismiss:"Dispensar"};var Xe={};Xe={dismiss:"Revocare"};var Ze={};Ze={dismiss:"Пропустить"};var qe={};qe={dismiss:"Zrušiť"};var Ge={};Ge={dismiss:"Opusti"};var Je={};Je={dismiss:"Odbaci"};var Qe={};Qe={dismiss:"Avvisa"};var _e={};_e={dismiss:"Kapat"};var et={};et={dismiss:"Скасувати"};var tt={};tt={dismiss:"取消"};var rt={};rt={dismiss:"關閉"};var ot={};ot={"ar-AE":Pe,"bg-BG":ye,"cs-CZ":Ce,"da-DK":Re,"de-DE":Oe,"el-GR":Le,"en-US":Te,"es-ES":De,"et-EE":Ie,"fi-FI":Se,"fr-FR":He,"he-IL":Me,"hr-HR":Ae,"hu-HU":ke,"it-IT":ze,"ja-JP":Be,"ko-KR":Ne,"lt-LT":Fe,"lv-LV":We,"nb-NO":Ke,"nl-NL":Ue,"pl-PL":Ye,"pt-BR":je,"pt-PT":Ve,"ro-RO":Xe,"ru-RU":Ze,"sk-SK":qe,"sl-SI":Ge,"sr-SP":Je,"sv-SE":Qe,"tr-TR":_e,"uk-UA":et,"zh-CN":tt,"zh-TW":rt};function or(e){return e&&e.__esModule?e.default:e}function be(e){let{onDismiss:t,...r}=e,n=Mt(or(ot),"@react-aria/overlays"),o=Ht(r,n.format("dismiss")),l=()=>{t&&t()};return g.createElement(At,null,g.createElement("button",{...o,tabIndex:-1,onClick:l,style:{width:1,height:1}}))}function nr(e,t){let{triggerRef:r,popoverRef:n,isNonModal:o,isKeyboardDismissDisabled:l,shouldCloseOnInteractOutside:i,...a}=e,{overlayProps:c,underlayProps:d}=Jt({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!o,isKeyboardDismissDisabled:l,shouldCloseOnInteractOutside:i},n),{overlayProps:s,arrowProps:p,placement:m}=Zt({...a,targetRef:r,overlayRef:n,isOpen:t.isOpen,onClose:o?t.close:null});return er({isDisabled:o||!t.isOpen}),k(()=>{if(t.isOpen&&!o&&n.current)return It([n.current])},[o,t.isOpen,n]),{popoverProps:te(c,s),arrowProps:p,underlayProps:d,placement:m}}const nt=g.createContext(null);function lr(e){let t=xt(),{portalContainer:r=t?null:document.body,isExiting:n}=e,[o,l]=$.useState(!1),i=$.useMemo(()=>({contain:o,setContain:l}),[o,l]),{getContainer:a}=Rt();if(!e.portalContainer&&a&&(r=a()),!r)return null;let c=e.children;return e.disableFocusManagement||(c=g.createElement(Lt,{restoreFocus:!0,contain:o&&!n},c)),c=g.createElement(nt.Provider,{value:i},g.createElement(Bt,null,c)),Tt.createPortal(c,r)}function ar(){let e=$.useContext(nt),t=e==null?void 0:e.setContain;k(()=>{t==null||t(!0)},[t])}function ir(e,t){let{role:r="dialog"}=e,n=ht();n=e["aria-label"]?void 0:n;let o=$.useRef(!1);return $.useEffect(()=>{if(t.current&&!t.current.contains(document.activeElement)){ae(t.current);let l=setTimeout(()=>{document.activeElement===t.current&&(o.current=!0,t.current&&(t.current.blur(),ae(t.current)),o.current=!1)},500);return()=>{clearTimeout(l)}}},[t]),ar(),{dialogProps:{...re(e,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||n,onBlur:l=>{o.current&&l.stopPropagation()}},titleProps:{id:n}}}function lt(e){let[t,r]=Ct(e.isOpen,e.defaultOpen||!1,e.onOpenChange);const n=$.useCallback(()=>{r(!0)},[r]),o=$.useCallback(()=>{r(!1)},[r]),l=$.useCallback(()=>{r(!t)},[r,t]);return{isOpen:t,setOpen:r,open:n,close:o,toggle:l}}const at=$.createContext({placement:"bottom"});function sr(e,t){[e,t]=oe(e,t,at);let r=e.placement,n={position:"absolute",[r]:"100%",transform:r==="top"||r==="bottom"?"translateX(-50%)":"translateY(-50%)"},o=ge({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:r}});return o.style&&Object.keys(o.style).forEach(l=>o.style[l]===void 0&&delete o.style[l]),g.createElement("div",{...e,...o,style:{...n,...o.style},ref:t,"data-placement":r})}const Or=$.forwardRef(sr),it=$.createContext(null);function cr(e,t){[e,t]=oe(e,t,it);let r=$.useContext(ne),n=lt(e),o=e.isOpen!=null||e.defaultOpen!=null||!r?n:r,l=Et(t,o.isOpen)||e.isExiting||!1;if(Dt()){let a=e.children;return typeof a=="function"&&(a=a({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),g.createElement(g.Fragment,null,a)}return o&&!o.isOpen&&!l?null:g.createElement(dr,{...e,triggerRef:e.triggerRef,state:o,popoverRef:t,isExiting:l})}const Lr=$.forwardRef(cr);function dr({state:e,isExiting:t,UNSTABLE_portalContainer:r,...n}){let o=$.useRef(null),[l,i]=$.useState(0);k(()=>{o.current&&e.isOpen&&i(o.current.getBoundingClientRect().width)},[e.isOpen,o]);var a;let{popoverProps:c,underlayProps:d,arrowProps:s,placement:p}=nr({...n,offset:(a=n.offset)!==null&&a!==void 0?a:8,arrowSize:l},e),m=n.popoverRef,u=wt(m,!!p)||n.isEntering||!1,f=ge({...n,defaultClassName:"react-aria-Popover",values:{trigger:n.trigger||null,placement:p,isEntering:u,isExiting:t}}),x={...c.style,...f.style};return g.createElement(lr,{isExiting:t,portalContainer:r},!n.isNonModal&&e.isOpen&&g.createElement("div",{"data-testid":"underlay",...d,style:{position:"fixed",inset:0}}),g.createElement("div",{...te(re(n),c),...f,ref:m,slot:n.slot||void 0,style:x,"data-trigger":n.trigger,"data-placement":p,"data-entering":u||void 0,"data-exiting":t||void 0},!n.isNonModal&&g.createElement(be,{onDismiss:e.close}),g.createElement(at.Provider,{value:{...s,placement:p,ref:o}},f.children),g.createElement(be,{onDismiss:e.close})))}const st=$.createContext(null),ne=$.createContext(null);function Tr(e){let t=lt(e),r=$.useRef(null),{triggerProps:n,overlayProps:o}=Qt({type:"dialog"},t,r);return n.id=ve(),o["aria-labelledby"]=n.id,g.createElement(xe,{values:[[ne,t],[st,o],[it,{trigger:"DialogTrigger",triggerRef:r}]]},g.createElement(zt,{...n,ref:r,isPressed:t.isOpen},e.children))}function fr(e,t){let r=e["aria-labelledby"];[e,t]=oe(e,t,st);let{dialogProps:n,titleProps:o}=ir({...e,"aria-labelledby":r},t),l=$.useContext(ne),i=e.children;typeof i=="function"&&(i=i({close:(l==null?void 0:l.close)||(()=>{})})),!n["aria-label"]&&!n["aria-labelledby"]&&(e["aria-labelledby"]?n["aria-labelledby"]=e["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));var a;return g.createElement("section",{...re(e),...n,ref:t,slot:e.slot||void 0,style:e.style,className:(a=e.className)!==null&&a!==void 0?a:"react-aria-Dialog"},g.createElement(xe,{values:[[yt,{slots:{[Pt]:{},title:{...o,level:2}}}]]},i))}const Dr=$.forwardRef(fr);export{Lr as $,Or as a,Dr as b,Tr as c,lt as d,ie as e,ne as f,it as g,Jt as h,er as i,ar as j,lr as k,be as l,Qt as m};
