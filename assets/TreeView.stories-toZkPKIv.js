import{r as f,j as l,c as _,E as H}from"./iframe-BKjj90AX.js";import{t as et,a as Re,h as tt,e as nt,z as rt,b as it}from"./Task-BYQUYp57.js";import{s as at}from"./Dashboard-CIYfd84G.js";import{o as ot}from"./Description-CK0-x7eO.js";import{i as Ve}from"./Folder-BADpF_SH.js";import{C as lt}from"./Checkbox--SiAKXAI.js";import{L as st}from"./Loader-CJMd6EFT.js";import{g as ct}from"./index-CH7xxPN0.js";import{T as qe}from"./Tooltip-Dv4X8Hdv.js";import{i as dt}from"./ChevronForward-BklfNqfo.js";import{$ as ft}from"./Button-D2FAtAKR.js";import{A as ut,a as pt,d as ht,b as mt,c as bt}from"./Accordion-B99VbShC.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-CJ5aN-e4.js";import"./CheckIndeterminateSmall-_58-dGHD.js";import"./RSPContexts-DMIetZuf.js";import"./utils-BQGmi-Gg.js";import"./Form-PPT6U8sl.js";import"./usePress-sevdLkt9.js";import"./index-CfC-8zwp.js";import"./index-CQqQvl1z.js";import"./useToggleState-AX04JU28.js";import"./useFormReset-DzOylLjz.js";import"./VisuallyHidden-lh9Q8SKc.js";import"./Text-B3lMB8qG.js";import"./FocusScope-D1KSZ3Js.js";import"./Separator-BaLphUo7.js";import"./index-D_aTrX6k.js";import"./KeyboardArrowDown-Db9HMjK_.js";import"./index-ahp2oqBX.js";const We=(e,t)=>{e.length&&e.forEach(n=>{const r=t[n].children;t[n].selected=r.filter(i=>!t[i].children.length).reduce((i,a,o)=>{const c=t[a].selected;return o===0?c:["indeterminate",c].includes(i)?i:"indeterminate"},!1)})},Be=(e,t={existingTreeViewData:{flatItems:{},state:{}},defaults:{selection:[],expanded:!1}},n={flatItems:{},state:{}},r)=>e.reduce((i,a)=>{var u,b,g,I,v;const o=(b=(u=t.existingTreeViewData)==null?void 0:u.state)==null?void 0:b[a.id],s=r?i.state[r].selected:!1,c=o?{selected:o.selected,expanded:o.expanded}:{selected:s===!0||!!((I=(g=t.defaults)==null?void 0:g.selection)!=null&&I.includes(a.id))||!1,expanded:(a==null?void 0:a.defaultExpanded)??(a.children?!!((v=t.defaults)!=null&&v.expanded):!1)};return i.state[a.id]={parents:r?[...i.state[r].parents,r]:[],children:[],...c},i.state[a.id].parents.forEach(h=>{const m=i.state[h];m.children.push(a.id),c.selected&&(m.expanded=!0)}),Array.isArray(a.children)&&Be(a.children,t,i,a.id),i.flatItems[a.id]=a,i},n),be=(e,t)=>{const n=Be(e,t);return We(Object.entries(n.state).filter(([,{children:r}])=>!!r.length).map(([r])=>r),n.state),n};var Le=Symbol.for("immer-nothing"),ye=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function j(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var D=Object.getPrototypeOf;function O(e){return!!e&&!!e[x]}function F(e){var t;return e?$e(e)||Array.isArray(e)||!!e[ye]||!!((t=e.constructor)!=null&&t[ye])||V(e)||Y(e):!1}var yt=Object.prototype.constructor.toString(),_e=new WeakMap;function $e(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=_e.get(n);return r===void 0&&(r=Function.toString.call(n),_e.set(n,r)),r===yt}function K(e,t,n=!0){Q(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Q(e){const t=e[x];return t?t.type_:Array.isArray(e)?1:V(e)?2:Y(e)?3:0}function ie(e,t){return Q(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ue(e,t,n){const r=Q(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function _t(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function V(e){return e instanceof Map}function Y(e){return e instanceof Set}function A(e){return e.copy_||e.base_}function ae(e,t){if(V(e))return new Map(e);if(Y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=$e(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[x];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const o=i[a],s=r[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(D(e),r)}else{const r=D(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function N(e,t=!1){return Z(e)||O(e)||!F(e)||(Q(e)>1&&Object.defineProperties(e,{set:W,add:W,clear:W,delete:W}),Object.freeze(e),t&&Object.values(e).forEach(n=>N(n,!0))),e}function gt(){j(2)}var W={value:gt};function Z(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var xt={};function z(e){const t=xt[e];return t||j(0,e),t}var M;function Ge(){return M}function It(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ge(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function oe(e){le(e),e.drafts_.forEach(vt),e.drafts_=null}function le(e){e===M&&(M=e.parent_)}function xe(e){return M=It(M,e)}function vt(e){const t=e[x];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ie(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[x].modified_&&(oe(t),j(4)),F(e)&&(e=X(t,e),t.parent_||J(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(n[x].base_,e,t.patches_,t.inversePatches_)):e=X(t,n,[]),oe(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Le?e:void 0}function X(e,t,n){if(Z(t))return t;const r=e.immer_.shouldUseStrictIteration(),i=t[x];if(!i)return K(t,(a,o)=>ve(e,i,t,a,o,n),r),t;if(i.scope_!==e)return t;if(!i.modified_)return J(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const a=i.copy_;let o=a,s=!1;i.type_===3&&(o=new Set(a),a.clear(),s=!0),K(o,(c,u)=>ve(e,i,a,c,u,n,s),r),J(e,a,!1),n&&e.patches_&&z("Patches").generatePatches_(i,n,e.patches_,e.inversePatches_)}return i.copy_}function ve(e,t,n,r,i,a,o){if(i==null||typeof i!="object"&&!o)return;const s=Z(i);if(!(s&&!o)){if(O(i)){const c=a&&t&&t.type_!==3&&!ie(t.assigned_,r)?a.concat(r):void 0,u=X(e,i,c);if(Ue(n,r,u),O(u))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(F(i)&&!s){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[r]===i&&s)return;X(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&(V(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&J(e,i)}}}function J(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&N(t,n)}function Pt(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Ge(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=fe;n&&(i=[r],a=R);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}var fe={get(e,t){if(t===x)return e;const n=A(e);if(!ie(n,t))return wt(e,n,t);const r=n[t];return e.finalized_||!F(r)?r:r===ne(e.base_,t)?(re(e),e.copy_[t]=ce(r,e)):r},has(e,t){return t in A(e)},ownKeys(e){return Reflect.ownKeys(A(e))},set(e,t,n){const r=He(A(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=ne(A(e),t),a=i==null?void 0:i[x];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(_t(n,i)&&(n!==void 0||ie(e.base_,t)))return!0;re(e),se(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ne(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,re(e),se(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=A(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){j(11)},getPrototypeOf(e){return D(e.base_)},setPrototypeOf(){j(12)}},R={};K(fe,(e,t)=>{R[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});R.deleteProperty=function(e,t){return R.set.call(this,e,t,void 0)};R.set=function(e,t,n){return fe.set.call(this,e[0],t,n,e[0])};function ne(e,t){const n=e[x];return(n?A(n):e)[t]}function wt(e,t,n){var i;const r=He(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function He(e,t){if(!(t in e))return;let n=D(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=D(n)}}function se(e){e.modified_||(e.modified_=!0,e.parent_&&se(e.parent_))}function re(e){e.copy_||(e.copy_=ae(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var jt=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const a=n;n=t;const o=this;return function(c=a,...u){return o.produce(c,b=>n.call(this,b,...u))}}typeof n!="function"&&j(6),r!==void 0&&typeof r!="function"&&j(7);let i;if(F(t)){const a=xe(this),o=ce(t,void 0);let s=!0;try{i=n(o),s=!1}finally{s?oe(a):le(a)}return ge(a,r),Ie(i,a)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===Le&&(i=void 0),this.autoFreeze_&&N(i,!0),r){const a=[],o=[];z("Patches").generateReplacementPatches_(t,i,a,o),r(a,o)}return i}else j(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...s)=>this.produceWithPatches(o,c=>t(c,...s));let r,i;return[this.produce(t,n,(o,s)=>{r=o,i=s}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof(e==null?void 0:e.useStrictIteration)=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){F(e)||j(8),O(e)&&(e=Ke(e));const t=xe(this),n=ce(e,void 0);return n[x].isManual_=!0,le(t),n}finishDraft(e,t){const n=e&&e[x];(!n||!n.isManual_)&&j(9);const{scope_:r}=n;return ge(r,t),Ie(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=z("Patches").applyPatches_;return O(e)?r(e,t):this.produce(e,i=>r(i,t))}};function ce(e,t){const n=V(e)?z("MapSet").proxyMap_(e,t):Y(e)?z("MapSet").proxySet_(e,t):Pt(e,t);return(t?t.scope_:Ge()).drafts_.push(n),n}function Ke(e){return O(e)||j(10,e),Xe(e)}function Xe(e){if(!F(e)||Z(e))return e;const t=e[x];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ae(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=ae(e,!0);return K(n,(i,a)=>{Ue(n,i,Xe(a))},r),t&&(t.finalized_=!1),n}var Ct=new jt,Tt=Ct.produce;function St(e){var t=f.useState(function(){return N(typeof e=="function"?e():e,!0)}),n=t[1];return[t[0],f.useCallback(function(r){n(typeof r=="function"?Tt(r):N(r))},[])]}const ee=f.createContext(null),kt=(e,t)=>{Object.keys(t).forEach(n=>{n!==e&&(t[n].selected=!1)})},At=(e,t)=>{e.children.length&&e.children.forEach(n=>{t[n].selected=e.selected}),We(e.parents,t)},Ft=({items:e,selectionMode:t,selectedItem:n,defaultSelection:r,defaultExpanded:i=!1,onSelectionChange:a,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:u,enableBranchSelection:b=!1,onlyToggleOnTriggerIcon:g=!1,leafRenderer:I,enableTooltip:v=!1,tooltipProps:h})=>{const m=f.useRef([]),P=f.useRef(e),T=f.useMemo(()=>be(e,{defaults:{selection:n?[n].flat():r?[r].flat():void 0,expanded:i}}),[]),[C,w]=f.useState(e),[d,y]=St(T);f.useEffect(()=>{e!==P.current&&(P.current=e,w(e),y(p=>be(e,{existingTreeViewData:p})))},[e]);const E=f.useCallback(p=>{p.current&&(m.current=[...m.current,p])},[]),ue=f.useCallback(()=>{m.current.forEach(p=>{var S;(S=p.current)==null||S.close()})},[]),q=f.useCallback((p,S)=>{y(k=>{const he=k.state[p];he.selected=S,t==="focus"?kt(p,k.state):At(he,k.state);const te=Ke(k);a==null||a(Object.entries(te.state).reduce((Ye,[me,Ze])=>({...Ye,[me]:{item:te.flatItems[me],selected:Ze.selected}}),{}),te.flatItems[p])})},[a,t,y]),Qe=f.useCallback(p=>{p in d.flatItems&&!d.state[p].selected&&(q(p,!0),d.state[p].parents.length&&d.state[p].parents.forEach(S=>{y(k=>{k.state[S].expanded=!0})}))},[q,y,d]);f.useEffect(()=>{n&&[n].flat().forEach(p=>{Qe(p)})},[n]);const pe=f.useCallback((p,S)=>{y(k=>{k.state[p].expanded=S})},[y]);return{contextValue:f.useMemo(()=>({treeViewData:d,selectionMode:t,onSelectionChange:q,onExpandChange:pe,registerPopoverRef:E,closeAllPopovers:ue,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:u,enableBranchSelection:b,onlyToggleOnTriggerIcon:g,leafRenderer:I,enableTooltip:v,tooltipProps:h}),[c,s,ue,o,b,pe,q,u,I,g,E,t,d,v,h]),itemsInternal:C}},de=({items:e,selectionMode:t="focus",selectedItem:n,defaultSelection:r,defaultExpanded:i=!1,defaultIcons:a,hideTriggerIcon:o=!1,forceRootIcons:s=!1,className:c,asPopover:u,onSelectionChange:b,enableBranchSelection:g,onlyToggleOnTriggerIcon:I,leafRenderer:v,enableTooltip:h=!1,tooltipProps:m,...P})=>{const T=typeof c=="object"?c:{base:c},{contextValue:C,itemsInternal:w}=Ft({items:e,selectionMode:t,selectedItem:n,defaultSelection:r,defaultExpanded:i,hideTriggerIcon:o,classNames:T,defaultIcons:a,asPopover:u,onSelectionChange:b,enableBranchSelection:g,onlyToggleOnTriggerIcon:I,leafRenderer:v,enableTooltip:h,tooltipProps:m});return l.jsx(ee.Provider,{value:C,children:l.jsx("div",{className:_("tree",T.base),...P,children:w.map(d=>l.jsx(Je,{item:d,forceIcon:s,addTooltip:h},d.id))})})},zt=_("group/leaf relative cursor-pointer px-[10px] flex items-center py-1.5 text-left text-sm","before:absolute before:rounded-lg before:left-0 before:w-full before:opacity-0 before:bg-accent/70 before:h-full before:-z-10","after:absolute after:rounded-lg after:left-0 after:w-full after:opacity-0 after:bg-neutral-900/15 after:h-full after:z-10 after:pointer-events-none"),Ot=_("before:opacity-100 before:bg-neutral-200 text-accent-foreground"),Je=({item:e,forceIcon:t,addTooltip:n=!1})=>{const{treeViewData:r,selectionMode:i,defaultIcons:a,classNames:o,onSelectionChange:s,closeAllPopovers:c,enableBranchSelection:u,onlyToggleOnTriggerIcon:b,leafRenderer:g,tooltipProps:I}=f.useContext(ee),{expanded:v,selected:h}=f.useMemo(()=>r.state[e.id],[e.id,r.state]),m=f.useCallback(d=>{s(e.id,d)},[e.id,s]),P=f.useMemo(()=>{var d;return l.jsxs(l.Fragment,{children:[e.loading&&l.jsx(st,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"}),i==="checkbox"&&l.jsx(lt,{className:_(!e.children&&"mr-1.5"),isSelected:typeof h=="boolean"?h:!1,isIndeterminate:h==="indeterminate",onChange:m,isDisabled:e.loading}),l.jsx(Nt,{item:e,defaults:a,expanded:v,fallback:t?l.jsx(Ve,{className:"size-6"}):void 0,className:_(!t&&"mr-2",t&&((d=e.icons)==null?void 0:d.default)&&"mx-[3px]",e.loading&&"opacity-30")}),!t&&l.jsx("span",{className:_(e.loading&&"opacity-30"),children:e.label})]})},[i,h,m,e,a,v,t]),T=_(zt,i==="focus"&&{"hover:before:opacity-100":!0,[Ot]:h===!0},e.className),C=_(T,t&&!e.icons?"py-1":"py-1.5",H(o==null?void 0:o.leaf,h),e.loading&&"before:opacity-0 after:opacity-100 pointer-events-none"),w=f.useCallback(d=>()=>{var E;let y=h;d&&(c(),i==="checkbox"&&!(Array.isArray(e.children)?e.children.length:e.children)?y=!h:y=!0,m(y)),(E=e.onClick)==null||E.call(e,e,y)},[c,m,e,h,i]);return e.children?l.jsx(Et,{item:e,onClick:w(!b&&u),baseClassName:T,leafClassName:C,forceIcon:t,children:b?l.jsx("button",{"aria-label":e.label,className:"flex flex-row flex-1 cursor-pointer",onClick:w(u),children:P}):P}):l.jsx("div",{children:l.jsx(qe,{content:e.label,...I,disabled:!n,children:g?g({"aria-label":e.label,className:C,children:P,onClick:w(!0),onPress:w(!0)},e):l.jsx("button",{"aria-label":e.label,className:C,onClick:w(!0),children:P})})})},Et=({item:e,onClick:t,baseClassName:n,leafClassName:r,forceIcon:i,children:a})=>{var w;const{treeViewData:o,asPopover:s,classNames:c,selectionMode:u,hideTriggerIcon:b,onExpandChange:g,onlyToggleOnTriggerIcon:I,enableTooltip:v,tooltipProps:h}=f.useContext(ee),{expanded:m,selected:P}=f.useMemo(()=>o.state[e.id],[e.id,o.state]),T=f.useCallback(d=>{g(e.id,d.includes(e.id))},[e,g]),C=Array.isArray(e.children)?(w=e.children)==null?void 0:w.map(d=>l.jsx(Je,{item:d},d.id)):e.children;if(s)return l.jsx(Dt,{label:e.label,className:H(c==null?void 0:c.popover),content:C,children:l.jsx("div",{className:_(n,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,P),"before:opacity-0 hover:before:opacity-0 p-0"),children:l.jsx(qe,{content:e.label,disabled:!i||!v,...h,children:l.jsxs(ft,{"aria-label":e.label,className:_("w-full focus-visible:outline-hidden",r,"m-0 border-0"),onPress:t,children:[a,i&&l.jsx("span",{className:"absolute inset-0 flex items-end bottom-1 justify-center text-neutral font-semibold text-[12px] leading-[1.5rem]",children:e.label.slice(0,1)})]})})})});{const d={};u==="focus"&&!b?(d.chevronPosition="left",d.chevron=l.jsx(dt,{className:"shrink-0 transition-transform duration-200 group-data-[state=open]/leaf:rotate-90"})):u==="checkbox"&&(d.chevronPosition="right");const y=_(n,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,P));return l.jsx(ut,{type:"multiple",value:m?[e.id]:[],onValueChange:T,children:l.jsxs(pt,{value:e.id,id:e.id,children:[l.jsx(ht,{className:_("flex flex-row items-center gap-2",y),children:l.jsxs(l.Fragment,{children:[l.jsx(mt,{id:e.id,"aria-label":e.label,className:"p-0",onClick:t,...d,children:!I&&a}),I&&a]})}),l.jsx(bt,{className:"overflow-hidden ml-0",children:C})]})})}},Dt=({label:e,className:t,content:n,children:r})=>{const{registerPopoverRef:i}=f.useContext(ee),a=f.useRef(null);f.useEffect(()=>{i(a)},[]);const o=l.jsxs(l.Fragment,{children:[l.jsx("h3",{className:"font-medium px-2 text-left",children:e}),n]});return l.jsx(ct,{ref:a,content:o,className:_("fixed",t),overlayArrow:!0,placement:"right top",offset:16,children:r})},Nt=({item:e,expanded:t,defaults:n,fallback:r,className:i})=>{var o,s;const a=(t?((o=e.icons)==null?void 0:o.expanded)??(n==null?void 0:n.expandedBranch)??(n==null?void 0:n.branch):((s=e.icons)==null?void 0:s.default)??(e.children?n==null?void 0:n.branch:n==null?void 0:n.leaf))??r;return a?l.jsx("div",{className:_("shrink-0",i),children:a}):null};try{de.displayName="TreeView",de.__docgenInfo={description:`The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.

Based on ´@radix-ui/react-accordion´`,displayName:"TreeView",props:{selectionMode:{defaultValue:{value:"focus"},description:"Selection mode for the entire tree",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"focus"'}]}},items:{defaultValue:null,description:"Data structure for the tree",name:"items",required:!0,type:{name:"TreeItem[]"}},className:{defaultValue:null,description:"Styling for the tree and optionally its branches and leafs",name:"className",required:!1,type:{name:"string | TreeViewClassNameObject"}},defaultExpanded:{defaultValue:{value:"false"},description:"Expand all nodes in the tree on component mount",name:"defaultExpanded",required:!1,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:"List of IDs of the items that should be selected, nodes will expand so the item is visible",name:"selectedItem",required:!1,type:{name:"string | string[]"}},defaultSelection:{defaultValue:null,description:"List of IDs of the items that should initially be selected, nodes will expand so the item is visible",name:"defaultSelection",required:!1,type:{name:"string | string[]"}},onSelectionChange:{defaultValue:null,description:"function called when an item is selected",name:"onSelectionChange",required:!1,type:{name:"((selectionState: TreeViewSelection, trigger: TreeItem) => void)"}},defaultIcons:{defaultValue:null,description:"Object specifying the default icons to use",name:"defaultIcons",required:!1,type:{name:"TreeViewDefaultIcons"}},hideTriggerIcon:{defaultValue:{value:"false"},description:"Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true",name:"hideTriggerIcon",required:!1,type:{name:"boolean"}},asPopover:{defaultValue:null,description:"Should the tree use popovers to open branches instead of accordion",name:"asPopover",required:!1,type:{name:"boolean"}},forceRootIcons:{defaultValue:{value:"false"},description:"force icons for the highest level items. Branches with no icon provided wil get a folder with an initial",name:"forceRootIcons",required:!1,type:{name:"boolean"}},enableBranchSelection:{defaultValue:null,description:"enable selecting a branch",name:"enableBranchSelection",required:!1,type:{name:"boolean"}},onlyToggleOnTriggerIcon:{defaultValue:null,description:"will expand/collapse a branch only when clicking the trigger icon",name:"onlyToggleOnTriggerIcon",required:!1,type:{name:"boolean"}},leafRenderer:{defaultValue:null,description:"Use custom component for the tree leafs instead of regular button",name:"leafRenderer",required:!1,type:{name:"((props: HTMLAttributes<HTMLElement> & PressEvents, item?: TreeItem) => ReactNode)"}},enableTooltip:{defaultValue:{value:"false"},description:"Whether to enable tooltips on the TreeViewPopover trigger",name:"enableTooltip",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"Tooltip custmoization",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "content">'}}}}}catch{}const mn={component:de,argTypes:{hideTriggerIcon:{control:"boolean",if:{arg:"asPopover",truthy:!1}}}},B={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 2.1"},{id:"4",label:"Item 2.2"}]}]}},L={args:{items:[{id:"1",label:"Dashboard",icons:{default:l.jsx(Re,{})}},{id:"2",label:"Inbox",children:[{id:"4",label:"Meldingen",icons:{default:l.jsx(tt,{})}},{id:"5",label:"Taken",icons:{default:l.jsx(nt,{})}}]},{id:"3",label:"Administratie",children:[{id:"6",label:"Gebouwen",icons:{default:l.jsx(rt,{})}},{id:"7",label:"Eigenaars",icons:{default:l.jsx(it,{})}}]}]}},$={args:{defaultIcons:{branch:l.jsx(Ve,{}),expandedBranch:l.jsx(et,{}),leaf:l.jsx(ot,{})},items:[{id:"1",label:"Folder (empty)",children:[]},{id:"2",label:"Folder",children:[{id:"3",label:"File"},{id:"4",label:"File"}]}],hideTriggerIcon:!0}},U={args:{forceRootIcons:!0,asPopover:!0,items:[{id:"1",label:"First item",icons:{default:l.jsx(Re,{})}},{id:"2",label:"Second item",children:[{id:"3",label:"Item 2.1",icons:{default:l.jsx(at,{})}},{id:"4",label:"Item 2.2",children:[{id:"5",label:"Item 2.2.1"}]},{id:"6",label:"Item 3.2",children:[{id:"7",label:"Item 3.2.1"},{id:"8",label:"Item 3.2.2"}]}]}]}},G={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 3",children:l.jsx("div",{children:"Item 3"})},{id:"4",label:"Item 4",children:[{id:"5",label:"Item 5"},{id:"6",label:"Item 6"}]},{id:"7",label:"Item 7",children:[{id:"8",label:"Item 8",children:[{id:"9",label:"Item 9"}]}]}]}],selectionMode:"checkbox"}};var Pe,we,je;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 2.1"
      }, {
        id: "4",
        label: "Item 2.2"
      }]
    }]
  }
}`,...(je=(we=B.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Ce,Te,Se;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Dashboard",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Inbox",
      children: [{
        id: "4",
        label: "Meldingen",
        icons: {
          default: <Notifications />
        }
      }, {
        id: "5",
        label: "Taken",
        icons: {
          default: <Task />
        }
      }]
    }, {
      id: "3",
      label: "Administratie",
      children: [{
        id: "6",
        label: "Gebouwen",
        icons: {
          default: <Business />
        }
      }, {
        id: "7",
        label: "Eigenaars",
        icons: {
          default: <Group />
        }
      }]
    }]
  }
}`,...(Se=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var ke,Ae,Fe;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    defaultIcons: {
      branch: <Folder />,
      expandedBranch: <FolderOpen />,
      leaf: <Description />
    },
    items: [{
      id: "1",
      label: "Folder (empty)",
      children: []
    }, {
      id: "2",
      label: "Folder",
      children: [{
        id: "3",
        label: "File"
      }, {
        id: "4",
        label: "File"
      }]
    }],
    hideTriggerIcon: true
  }
}`,...(Fe=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var ze,Oe,Ee;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    forceRootIcons: true,
    asPopover: true,
    items: [{
      id: "1",
      label: "First item",
      icons: {
        default: <GridView />
      }
    }, {
      id: "2",
      label: "Second item",
      children: [{
        id: "3",
        label: "Item 2.1",
        icons: {
          default: <Dashboard />
        }
      }, {
        id: "4",
        label: "Item 2.2",
        children: [{
          id: "5",
          label: "Item 2.2.1"
        }]
      }, {
        id: "6",
        label: "Item 3.2",
        children: [{
          id: "7",
          label: "Item 3.2.1"
        }, {
          id: "8",
          label: "Item 3.2.2"
        }]
      }]
    }]
  }
}`,...(Ee=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source}}};var De,Ne,Me;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      label: "Item 1"
    }, {
      id: "2",
      label: "Item 2",
      children: [{
        id: "3",
        label: "Item 3",
        children: <div>Item 3</div>
      }, {
        id: "4",
        label: "Item 4",
        children: [{
          id: "5",
          label: "Item 5"
        }, {
          id: "6",
          label: "Item 6"
        }]
      }, {
        id: "7",
        label: "Item 7",
        children: [{
          id: "8",
          label: "Item 8",
          children: [{
            id: "9",
            label: "Item 9"
          }]
        }]
      }]
    }],
    selectionMode: "checkbox"
  }
}`,...(Me=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};const bn=["Default","LeafsWithIcons","AllWithIcons","forcedIconsWithPopovers","CheckboxSelection"];export{$ as AllWithIcons,G as CheckboxSelection,B as Default,L as LeafsWithIcons,bn as __namedExportsOrder,mn as default,U as forcedIconsWithPopovers};
