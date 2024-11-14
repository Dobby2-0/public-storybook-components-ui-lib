import{j as R,b as g,q as T}from"./useFocusRing-COlWfXo5.js";import{r as n}from"./index-CTjT7uj6.js";function z(a,e,t){let{validationBehavior:r,focus:u}=a;R(()=>{if(r==="native"&&(t!=null&&t.current)){let i=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(i),t.current.hasAttribute("title")||(t.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(j(t.current))}});let o=g(()=>{e.resetValidation()}),c=g(i=>{var l;e.displayValidation.isInvalid||e.commitValidation();let s=t==null||(l=t.current)===null||l===void 0?void 0:l.form;if(!i.defaultPrevented&&t&&s&&q(s)===t.current){var f;u?u():(f=t.current)===null||f===void 0||f.focus(),T("keyboard")}i.preventDefault()}),v=g(()=>{e.commitValidation()});n.useEffect(()=>{let i=t==null?void 0:t.current;if(!i)return;let l=i.form;return i.addEventListener("invalid",c),i.addEventListener("change",v),l==null||l.addEventListener("reset",o),()=>{i.removeEventListener("invalid",c),i.removeEventListener("change",v),l==null||l.removeEventListener("reset",o)}},[t,c,v,o,r])}function U(a){let e=a.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function j(a){return{isInvalid:!a.validity.valid,validationDetails:U(a),validationErrors:a.validationMessage?[a.validationMessage]:[]}}function q(a){for(let e=0;e<a.elements.length;e++){let t=a.elements[e];if(!t.validity.valid)return t}return null}const C={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},D={...C,customError:!0,valid:!1},m={isInvalid:!1,validationDetails:C,validationErrors:[]},F=n.createContext({}),x="__formValidationState"+Date.now();function G(a){if(a[x]){let{realtimeValidation:e,displayValidation:t,updateValidation:r,resetValidation:u,commitValidation:o}=a[x];return{realtimeValidation:e,displayValidation:t,updateValidation:r,resetValidation:u,commitValidation:o}}return Q(a)}function Q(a){let{isInvalid:e,validationState:t,name:r,value:u,builtinValidation:o,validate:c,validationBehavior:v="aria"}=a;t&&(e||(e=t==="invalid"));let i=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:D}:null,l=n.useMemo(()=>L(_(c,u)),[c,u]);o!=null&&o.validationDetails.valid&&(o=null);let s=n.useContext(F),f=n.useMemo(()=>r?Array.isArray(r)?r.flatMap(d=>I(s[d])):I(s[r]):[],[s,r]),[A,w]=n.useState(s),[M,V]=n.useState(!1);s!==A&&(w(s),V(!1));let b=n.useMemo(()=>L(M?[]:f),[M,f]),S=n.useRef(m),[p,E]=n.useState(m),$=n.useRef(m),O=()=>{if(!B)return;y(!1);let d=l||o||S.current;h(d,$.current)||($.current=d,E(d))},[B,y]=n.useState(!1);return n.useEffect(O),{realtimeValidation:i||b||l||o||m,displayValidation:v==="native"?i||b||p:i||b||l||o||p,updateValidation(d){v==="aria"&&!h(p,d)?E(d):S.current=d},resetValidation(){let d=m;h(d,$.current)||($.current=d,E(d)),v==="native"&&y(!1),V(!0)},commitValidation(){v==="native"&&y(!0),V(!0)}}}function I(a){return a?Array.isArray(a)?a:[a]:[]}function _(a,e){if(typeof a=="function"){let t=a(e);if(t&&typeof t!="boolean")return I(t)}return[]}function L(a){return a.length?{isInvalid:!0,validationErrors:a,validationDetails:D}:null}function h(a,e){return a===e?!0:a&&e&&a.isInvalid===e.isInvalid&&a.validationErrors.length===e.validationErrors.length&&a.validationErrors.every((t,r)=>t===e.validationErrors[r])&&Object.entries(a.validationDetails).every(([t,r])=>e.validationDetails[t]===r)}const H=n.createContext(null);export{G as $,z as a,H as b,m as c,x as d};
