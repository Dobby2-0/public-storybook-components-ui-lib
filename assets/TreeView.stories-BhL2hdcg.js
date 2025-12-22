import{r as f,j as l,c as g,x as H}from"./iframe-DxqB9boC.js";import{i as Ve,t as Re,h as Ze,e as en,z as nn,a as tn,b as rn}from"./Task-CKfcdok2.js";import{s as an}from"./Dashboard-BSARMb3L.js";import{o as ln}from"./Description-CAbCwkrv.js";import{C as on}from"./Checkbox-Bdax8M5c.js";import{L as sn}from"./Loader-BhEu2spN.js";import{h as cn}from"./index-Di_7lRh5.js";import{T as Me}from"./Tooltip-DzBZV5GE.js";import{i as dn}from"./ChevronForward-jKDmmmPQ.js";import{$ as fn}from"./Button-BtF1-V-Y.js";import{A as un,a as pn,d as hn,b as mn,c as bn}from"./Accordion-C49NL6h3.js";import"./preload-helper-Dp1pzeXC.js";import"./Check-pl2AuQkJ.js";import"./CheckIndeterminateSmall-ihGUtheH.js";import"./RSPContexts-CdKmEmBz.js";import"./utils-BZoaywRP.js";import"./Form-C0Oc1coY.js";import"./usePress-DnV8oE5s.js";import"./index-CK9kbaq8.js";import"./index-DxaqE9ox.js";import"./useToggleState-DRyC_N8K.js";import"./useFormReset-TWeJgFen.js";import"./VisuallyHidden-DAEn6H89.js";import"./Text-Ct9ZvIUR.js";import"./FocusScope-D7q5W6Y8.js";import"./Separator-FUyGumNk.js";import"./index-B9LOX3vE.js";import"./KeyboardArrowDown-AvfzWT8M.js";import"./index-BKqV3H35.js";const qe=(e,n)=>{e.length&&e.forEach(t=>{const r=n[t].children;n[t].selected=r.filter(a=>!n[a].children.length).reduce((a,i,o)=>{const c=n[i].selected;return o===0?c:["indeterminate",c].includes(a)?a:"indeterminate"},!1)})},We=(e,n={existingTreeViewData:{flatItems:{},state:{}},defaults:{selection:[],expanded:!1}},t={flatItems:{},state:{}},r)=>e.reduce((a,i)=>{var h,b,_,v,P;const o=(b=(h=n.existingTreeViewData)==null?void 0:h.state)==null?void 0:b[i.id],s=r?a.state[r].selected:!1,c=o?{selected:o.selected,expanded:o.expanded}:{selected:s===!0||!!((v=(_=n.defaults)==null?void 0:_.selection)!=null&&v.includes(i.id))||!1,expanded:(i==null?void 0:i.defaultExpanded)??(i.children?!!((P=n.defaults)!=null&&P.expanded):!1)};return a.state[i.id]={parents:r?[...a.state[r].parents,r]:[],children:[],...c},a.state[i.id].parents.forEach(p=>{const m=a.state[p];m.children.push(i.id),c.selected&&(m.expanded=!0)}),Array.isArray(i.children)&&We(i.children,n,a,i.id),a.flatItems[i.id]=i,a},t),be=(e,n)=>{const t=We(e,n);return qe(Object.entries(t.state).filter(([,{children:r}])=>!!r.length).map(([r])=>r),t.state),t};var Be=Symbol.for("immer-nothing"),ye=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function j(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var E=Object.getPrototypeOf;function O(e){return!!e&&!!e[x]}function z(e){var n;return e?Le(e)||Array.isArray(e)||!!e[ye]||!!((n=e.constructor)!=null&&n[ye])||Q(e)||Y(e):!1}var yn=Object.prototype.constructor.toString();function Le(e){if(!e||typeof e!="object")return!1;const n=E(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===yn}function K(e,n){J(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function J(e){const n=e[x];return n?n.type_:Array.isArray(e)?1:Q(e)?2:Y(e)?3:0}function ae(e,n){return J(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function $e(e,n,t){const r=J(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function gn(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Q(e){return e instanceof Map}function Y(e){return e instanceof Set}function F(e){return e.copy_||e.base_}function ie(e,n){if(Q(e))return new Map(e);if(Y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Le(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[x];let a=Reflect.ownKeys(r);for(let i=0;i<a.length;i++){const o=a[i],s=r[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(E(e),r)}else{const r=E(e);if(r!==null&&t)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function V(e,n=!1){return Z(e)||O(e)||!z(e)||(J(e)>1&&(e.set=e.add=e.clear=e.delete=_n),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>V(r,!0))),e}function _n(){j(2)}function Z(e){return Object.isFrozen(e)}var xn={};function D(e){const n=xn[e];return n||j(0,e),n}var R;function Ge(){return R}function In(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ge(e,n){n&&(D("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function le(e){oe(e),e.drafts_.forEach(vn),e.drafts_=null}function oe(e){e===R&&(R=e.parent_)}function _e(e){return R=In(R,e)}function vn(e){const n=e[x];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function xe(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[x].modified_&&(le(n),j(4)),z(e)&&(e=U(n,e),n.parent_||X(n,e)),n.patches_&&D("Patches").generateReplacementPatches_(t[x].base_,e,n.patches_,n.inversePatches_)):e=U(n,t,[]),le(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Be?e:void 0}function U(e,n,t){if(Z(n))return n;const r=n[x];if(!r)return K(n,(a,i)=>Ie(e,r,n,a,i,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return X(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const a=r.copy_;let i=a,o=!1;r.type_===3&&(i=new Set(a),a.clear(),o=!0),K(i,(s,c)=>Ie(e,r,a,s,c,t,o)),X(e,a,!1),t&&e.patches_&&D("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Ie(e,n,t,r,a,i,o){if(O(a)){const s=i&&n&&n.type_!==3&&!ae(n.assigned_,r)?i.concat(r):void 0,c=U(e,a,s);if($e(t,r,c),O(c))e.canAutoFreeze_=!1;else return}else o&&t.add(a);if(z(a)&&!Z(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;U(e,a),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&X(e,a)}}function X(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&V(n,t)}function Pn(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Ge(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,i=fe;t&&(a=[r],i=M);const{revoke:o,proxy:s}=Proxy.revocable(a,i);return r.draft_=s,r.revoke_=o,s}var fe={get(e,n){if(n===x)return e;const t=F(e);if(!ae(t,n))return wn(e,t,n);const r=t[n];return e.finalized_||!z(r)?r:r===te(e.base_,n)?(re(e),e.copy_[n]=ce(r,e)):r},has(e,n){return n in F(e)},ownKeys(e){return Reflect.ownKeys(F(e))},set(e,n,t){const r=He(F(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const a=te(F(e),n),i=a==null?void 0:a[x];if(i&&i.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(gn(t,a)&&(t!==void 0||ae(e.base_,n)))return!0;re(e),se(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return te(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,re(e),se(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=F(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){j(11)},getPrototypeOf(e){return E(e.base_)},setPrototypeOf(){j(12)}},M={};K(fe,(e,n)=>{M[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});M.deleteProperty=function(e,n){return M.set.call(this,e,n,void 0)};M.set=function(e,n,t){return fe.set.call(this,e[0],n,t,e[0])};function te(e,n){const t=e[x];return(t?F(t):e)[n]}function wn(e,n,t){var a;const r=He(n,t);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function He(e,n){if(!(n in e))return;let t=E(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=E(t)}}function se(e){e.modified_||(e.modified_=!0,e.parent_&&se(e.parent_))}function re(e){e.copy_||(e.copy_=ie(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Cn=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const i=t;t=n;const o=this;return function(c=i,...h){return o.produce(c,b=>t.call(this,b,...h))}}typeof t!="function"&&j(6),r!==void 0&&typeof r!="function"&&j(7);let a;if(z(n)){const i=_e(this),o=ce(n,void 0);let s=!0;try{a=t(o),s=!1}finally{s?le(i):oe(i)}return ge(i,r),xe(a,i)}else if(!n||typeof n!="object"){if(a=t(n),a===void 0&&(a=n),a===Be&&(a=void 0),this.autoFreeze_&&V(a,!0),r){const i=[],o=[];D("Patches").generateReplacementPatches_(n,a,i,o),r(i,o)}return a}else j(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(o,...s)=>this.produceWithPatches(o,c=>n(c,...s));let r,a;return[this.produce(n,t,(o,s)=>{r=o,a=s}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){z(e)||j(8),O(e)&&(e=Ke(e));const n=_e(this),t=ce(e,void 0);return t[x].isManual_=!0,oe(n),t}finishDraft(e,n){const t=e&&e[x];(!t||!t.isManual_)&&j(9);const{scope_:r}=t;return ge(r,n),xe(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const a=n[t];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}t>-1&&(n=n.slice(t+1));const r=D("Patches").applyPatches_;return O(e)?r(e,n):this.produce(e,a=>r(a,n))}};function ce(e,n){const t=Q(e)?D("MapSet").proxyMap_(e,n):Y(e)?D("MapSet").proxySet_(e,n):Pn(e,n);return(n?n.scope_:Ge()).drafts_.push(t),t}function Ke(e){return O(e)||j(10,e),Ue(e)}function Ue(e){if(!z(e)||Z(e))return e;const n=e[x];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=ie(e,n.scope_.immer_.useStrictShallowCopy_)}else t=ie(e,!0);return K(t,(r,a)=>{$e(t,r,Ue(a))}),n&&(n.finalized_=!1),t}var I=new Cn,jn=I.produce;I.produceWithPatches.bind(I);I.setAutoFreeze.bind(I);I.setUseStrictShallowCopy.bind(I);I.applyPatches.bind(I);I.createDraft.bind(I);I.finishDraft.bind(I);function Tn(e){var n=f.useState(function(){return V(typeof e=="function"?e():e,!0)}),t=n[1];return[n[0],f.useCallback(function(r){t(typeof r=="function"?jn(r):V(r))},[])]}const ee=f.createContext(null),Sn=(e,n)=>{Object.keys(n).forEach(t=>{t!==e&&(n[t].selected=!1)})},kn=(e,n)=>{e.children.length&&e.children.forEach(t=>{n[t].selected=e.selected}),qe(e.parents,n)},An=({items:e,selectionMode:n,selectedItem:t,defaultSelection:r,defaultExpanded:a=!1,onSelectionChange:i,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:h,enableBranchSelection:b=!1,onlyToggleOnTriggerIcon:_=!1,leafRenderer:v,enableTooltip:P=!1,tooltipProps:p})=>{const m=f.useRef([]),w=f.useRef(e),S=f.useMemo(()=>be(e,{defaults:{selection:t?[t].flat():r?[r].flat():void 0,expanded:a}}),[]),[T,C]=f.useState(e),[d,y]=Tn(S);f.useEffect(()=>{e!==w.current&&(w.current=e,C(e),y(u=>be(e,{existingTreeViewData:u})))},[e]);const N=f.useCallback(u=>{u.current&&(m.current=[...m.current,u])},[]),ue=f.useCallback(()=>{m.current.forEach(u=>{var k;(k=u.current)==null||k.close()})},[]),q=f.useCallback((u,k)=>{y(A=>{const he=A.state[u];he.selected=k,n==="focus"?Sn(u,A.state):kn(he,A.state);const ne=Ke(A);i==null||i(Object.entries(ne.state).reduce((Qe,[me,Ye])=>({...Qe,[me]:{item:ne.flatItems[me],selected:Ye.selected}}),{}),ne.flatItems[u])})},[i,n,y]),Je=f.useCallback(u=>{u in d.flatItems&&!d.state[u].selected&&(q(u,!0),d.state[u].parents.length&&d.state[u].parents.forEach(k=>{y(A=>{A.state[k].expanded=!0})}))},[q,y,d]);f.useEffect(()=>{t&&[t].flat().forEach(u=>{Je(u)})},[t]);const pe=f.useCallback((u,k)=>{y(A=>{A.state[u].expanded=k})},[y]);return{contextValue:f.useMemo(()=>({treeViewData:d,selectionMode:n,onSelectionChange:q,onExpandChange:pe,registerPopoverRef:N,closeAllPopovers:ue,defaultIcons:o,classNames:s,asPopover:c,hideTriggerIcon:h,enableBranchSelection:b,onlyToggleOnTriggerIcon:_,leafRenderer:v,enableTooltip:P,tooltipProps:p}),[c,s,ue,o,b,pe,q,h,v,_,N,n,d,P,p]),itemsInternal:T}},de=({items:e,selectionMode:n="focus",selectedItem:t,defaultSelection:r,defaultExpanded:a=!1,defaultIcons:i,hideTriggerIcon:o=!1,forceRootIcons:s=!1,className:c,asPopover:h,onSelectionChange:b,enableBranchSelection:_,onlyToggleOnTriggerIcon:v,leafRenderer:P,enableTooltip:p=!1,tooltipProps:m,...w})=>{const S=typeof c=="object"?c:{base:c},{contextValue:T,itemsInternal:C}=An({items:e,selectionMode:n,selectedItem:t,defaultSelection:r,defaultExpanded:a,hideTriggerIcon:o,classNames:S,defaultIcons:i,asPopover:h,onSelectionChange:b,enableBranchSelection:_,onlyToggleOnTriggerIcon:v,leafRenderer:P,enableTooltip:p,tooltipProps:m});return l.jsx(ee.Provider,{value:T,children:l.jsx("div",{className:g("tree",S.base),...w,children:C.map(d=>l.jsx(Xe,{item:d,forceIcon:s,addTooltip:p},d.id))})})},Fn=g("group/leaf relative cursor-pointer px-[10px] flex items-center py-1.5 text-left text-sm","before:absolute before:rounded-lg before:left-0 before:w-full before:opacity-0 before:bg-accent/70 before:h-full before:-z-10","after:absolute after:rounded-lg after:left-0 after:w-full after:opacity-0 after:bg-neutral-900/15 after:h-full after:z-10 after:pointer-events-none"),zn=g("before:opacity-100 before:bg-neutral-200 text-accent-foreground"),Xe=({item:e,forceIcon:n,addTooltip:t=!1})=>{const{treeViewData:r,selectionMode:a,defaultIcons:i,classNames:o,onSelectionChange:s,closeAllPopovers:c,enableBranchSelection:h,onlyToggleOnTriggerIcon:b,leafRenderer:_,tooltipProps:v}=f.useContext(ee),{expanded:P,selected:p}=f.useMemo(()=>r.state[e.id],[e.id,r.state]),m=f.useCallback(d=>{s(e.id,d)},[e.id,s]),w=f.useMemo(()=>{var d;return l.jsxs(l.Fragment,{children:[e.loading&&l.jsx(sn,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"}),a==="checkbox"&&l.jsx(on,{className:g(!e.children&&"mr-1.5"),isSelected:typeof p=="boolean"?p:!1,isIndeterminate:p==="indeterminate",onChange:m,isDisabled:e.loading}),l.jsx(On,{item:e,defaults:i,expanded:P,fallback:n?l.jsx(Ve,{className:"size-6"}):void 0,className:g(!n&&"mr-2",n&&((d=e.icons)==null?void 0:d.default)&&"mx-[3px]",e.loading&&"opacity-30")}),!n&&l.jsx("span",{className:g(e.loading&&"opacity-30"),children:e.label})]})},[a,p,m,e,i,P,n]),S=g(Fn,a==="focus"&&{"hover:before:opacity-100":!0,[zn]:p===!0},e.className),T=g(S,n&&!e.icons?"py-1":"py-1.5",H(o==null?void 0:o.leaf,p),e.loading&&"before:opacity-0 after:opacity-100 pointer-events-none"),C=f.useCallback(d=>()=>{var N;let y=p;d&&(c(),a==="checkbox"&&!(Array.isArray(e.children)?e.children.length:e.children)?y=!p:y=!0,m(y)),(N=e.onClick)==null||N.call(e,e,y)},[c,m,e,p,a]);return e.children?l.jsx(Dn,{item:e,onClick:C(!b&&h),baseClassName:S,leafClassName:T,forceIcon:n,children:b?l.jsx("button",{"aria-label":e.label,className:"flex flex-row flex-1 cursor-pointer",onClick:C(h),children:w}):w}):l.jsx("div",{children:l.jsx(Me,{content:e.label,...v,disabled:!t,children:_?_({"aria-label":e.label,className:T,children:w,onClick:C(!0),onPress:C(!0)},e):l.jsx("button",{"aria-label":e.label,className:T,onClick:C(!0),children:w})})})},Dn=({item:e,onClick:n,baseClassName:t,leafClassName:r,forceIcon:a,children:i})=>{var C;const{treeViewData:o,asPopover:s,classNames:c,selectionMode:h,hideTriggerIcon:b,onExpandChange:_,onlyToggleOnTriggerIcon:v,enableTooltip:P,tooltipProps:p}=f.useContext(ee),{expanded:m,selected:w}=f.useMemo(()=>o.state[e.id],[e.id,o.state]),S=f.useCallback(d=>{_(e.id,d.includes(e.id))},[e,_]),T=Array.isArray(e.children)?(C=e.children)==null?void 0:C.map(d=>l.jsx(Xe,{item:d},d.id)):e.children;if(s)return l.jsx(En,{label:e.label,className:H(c==null?void 0:c.popover),content:T,children:l.jsx("div",{className:g(t,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,w),"before:opacity-0 hover:before:opacity-0 p-0"),children:l.jsx(Me,{content:e.label,disabled:!a||!P,...p,children:l.jsxs(fn,{"aria-label":e.label,className:g("w-full focus-visible:outline-hidden",r,"m-0 border-0"),onPress:n,children:[i,a&&l.jsx("span",{className:"absolute inset-0 flex items-end bottom-1 justify-center text-neutral font-semibold text-[12px] leading-[1.5rem]",children:e.label.slice(0,1)})]})})})});{const d={};h==="focus"&&!b?(d.chevronPosition="left",d.chevron=l.jsx(dn,{className:"shrink-0 transition-transform duration-200 group-data-[state=open]/leaf:rotate-90"})):h==="checkbox"&&(d.chevronPosition="right");const y=g(t,"branch flex-1 w-full justify-normal transition-all",H(c==null?void 0:c.branch,w));return l.jsx(un,{type:"multiple",value:m?[e.id]:[],onValueChange:S,children:l.jsxs(pn,{value:e.id,id:e.id,children:[l.jsx(hn,{className:g("flex flex-row items-center gap-2",y),children:l.jsxs(l.Fragment,{children:[l.jsx(mn,{id:e.id,"aria-label":e.label,className:"p-0",onClick:n,...d,children:!v&&i}),v&&i]})}),l.jsx(bn,{className:"overflow-hidden ml-0",children:T})]})})}},En=({label:e,className:n,content:t,children:r})=>{const{registerPopoverRef:a}=f.useContext(ee),i=f.useRef(null);f.useEffect(()=>{a(i)},[]);const o=l.jsxs(l.Fragment,{children:[l.jsx("h3",{className:"font-medium px-2 text-left",children:e}),t]});return l.jsx(cn,{ref:i,content:o,className:g("fixed",n),overlayArrow:!0,placement:"right top",offset:16,children:r})},On=({item:e,expanded:n,defaults:t,fallback:r,className:a})=>{var o,s;const i=(n?((o=e.icons)==null?void 0:o.expanded)??(t==null?void 0:t.expandedBranch)??(t==null?void 0:t.branch):((s=e.icons)==null?void 0:s.default)??(e.children?t==null?void 0:t.branch:t==null?void 0:t.leaf))??r;return i?l.jsx("div",{className:g("shrink-0",a),children:i}):null};try{de.displayName="TreeView",de.__docgenInfo={description:`The TreeView component lets users navigate hierarchical lists of data with nested levels that can be expanded and collapsed.

Based on ´@radix-ui/react-accordion´`,displayName:"TreeView",props:{selectionMode:{defaultValue:{value:"focus"},description:"Selection mode for the entire tree",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"focus"'}]}},items:{defaultValue:null,description:"Data structure for the tree",name:"items",required:!0,type:{name:"TreeItem[]"}},className:{defaultValue:null,description:"Styling for the tree and optionally its branches and leafs",name:"className",required:!1,type:{name:"string | TreeViewClassNameObject"}},defaultExpanded:{defaultValue:{value:"false"},description:"Expand all nodes in the tree on component mount",name:"defaultExpanded",required:!1,type:{name:"boolean"}},selectedItem:{defaultValue:null,description:"List of IDs of the items that should be selected, nodes will expand so the item is visible",name:"selectedItem",required:!1,type:{name:"string | string[]"}},defaultSelection:{defaultValue:null,description:"List of IDs of the items that should initially be selected, nodes will expand so the item is visible",name:"defaultSelection",required:!1,type:{name:"string | string[]"}},onSelectionChange:{defaultValue:null,description:"function called when an item is selected",name:"onSelectionChange",required:!1,type:{name:"((selectionState: TreeViewSelection, trigger: TreeItem) => void)"}},defaultIcons:{defaultValue:null,description:"Object specifying the default icons to use",name:"defaultIcons",required:!1,type:{name:"TreeViewDefaultIcons"}},hideTriggerIcon:{defaultValue:{value:"false"},description:"Should the arrow trigger icon be hidden. Will be automatically hidden when asPopover is set to true",name:"hideTriggerIcon",required:!1,type:{name:"boolean"}},asPopover:{defaultValue:null,description:"Should the tree use popovers to open branches instead of accordion",name:"asPopover",required:!1,type:{name:"boolean"}},forceRootIcons:{defaultValue:{value:"false"},description:"force icons for the highest level items. Branches with no icon provided wil get a folder with an initial",name:"forceRootIcons",required:!1,type:{name:"boolean"}},enableBranchSelection:{defaultValue:null,description:"enable selecting a branch",name:"enableBranchSelection",required:!1,type:{name:"boolean"}},onlyToggleOnTriggerIcon:{defaultValue:null,description:"will expand/collapse a branch only when clicking the trigger icon",name:"onlyToggleOnTriggerIcon",required:!1,type:{name:"boolean"}},leafRenderer:{defaultValue:null,description:"Use custom component for the tree leafs instead of regular button",name:"leafRenderer",required:!1,type:{name:"((props: HTMLAttributes<HTMLElement> & PressEvents, item?: TreeItem) => ReactNode)"}},enableTooltip:{defaultValue:{value:"false"},description:"Whether to enable tooltips on the TreeViewPopover trigger",name:"enableTooltip",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"Tooltip custmoization",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "content">'}}}}}catch{}const ut={component:de,argTypes:{hideTriggerIcon:{control:"boolean",if:{arg:"asPopover",truthy:!1}}}},W={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 2.1"},{id:"4",label:"Item 2.2"}]}]}},B={args:{items:[{id:"1",label:"Dashboard",icons:{default:l.jsx(Re,{})}},{id:"2",label:"Inbox",children:[{id:"4",label:"Meldingen",icons:{default:l.jsx(Ze,{})}},{id:"5",label:"Taken",icons:{default:l.jsx(en,{})}}]},{id:"3",label:"Administratie",children:[{id:"6",label:"Gebouwen",icons:{default:l.jsx(nn,{})}},{id:"7",label:"Eigenaars",icons:{default:l.jsx(tn,{})}}]}]}},L={args:{defaultIcons:{branch:l.jsx(Ve,{}),expandedBranch:l.jsx(rn,{}),leaf:l.jsx(ln,{})},items:[{id:"1",label:"Folder (empty)",children:[]},{id:"2",label:"Folder",children:[{id:"3",label:"File"},{id:"4",label:"File"}]}],hideTriggerIcon:!0}},$={args:{forceRootIcons:!0,asPopover:!0,items:[{id:"1",label:"First item",icons:{default:l.jsx(Re,{})}},{id:"2",label:"Second item",children:[{id:"3",label:"Item 2.1",icons:{default:l.jsx(an,{})}},{id:"4",label:"Item 2.2",children:[{id:"5",label:"Item 2.2.1"}]},{id:"6",label:"Item 3.2",children:[{id:"7",label:"Item 3.2.1"},{id:"8",label:"Item 3.2.2"}]}]}]}},G={args:{items:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2",children:[{id:"3",label:"Item 3",children:l.jsx("div",{children:"Item 3"})},{id:"4",label:"Item 4",children:[{id:"5",label:"Item 5"},{id:"6",label:"Item 6"}]},{id:"7",label:"Item 7",children:[{id:"8",label:"Item 8",children:[{id:"9",label:"Item 9"}]}]}]}],selectionMode:"checkbox"}};var ve,Pe,we;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var Ce,je,Te;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Se,ke,Ae;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Fe,ze,De;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(De=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ee,Oe,Ne;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ne=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};const pt=["Default","LeafsWithIcons","AllWithIcons","forcedIconsWithPopovers","CheckboxSelection"];export{L as AllWithIcons,G as CheckboxSelection,W as Default,B as LeafsWithIcons,pt as __namedExportsOrder,ut as default,$ as forcedIconsWithPopovers};
