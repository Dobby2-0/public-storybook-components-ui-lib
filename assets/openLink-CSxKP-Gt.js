import{$ as h,a as b,b as s,c as K,d as w}from"./platform-SeyP_Zfo.js";import{r as u,R as x}from"./index-DRjF_FHU.js";const $=u.createContext({isNative:!0,open:A,useHref:e=>e});function E(e){let{children:a,navigate:t,useHref:i}=e,d=u.useMemo(()=>({isNative:!1,open:(r,n,c,o)=>{y(r,f=>{g(f,n)?t(c,o):l(f,n)})},useHref:i||(r=>r)}),[t,i]);return x.createElement($.Provider,{value:d},a)}function v(){return u.useContext($)}function g(e,a){let t=e.getAttribute("target");return(!t||t==="_self")&&e.origin===location.origin&&!e.hasAttribute("download")&&!a.metaKey&&!a.ctrlKey&&!a.altKey&&!a.shiftKey}function l(e,a,t=!0){var i,d;let{metaKey:r,ctrlKey:n,altKey:c,shiftKey:o}=a;h()&&(!((d=window.event)===null||d===void 0||(i=d.type)===null||i===void 0)&&i.startsWith("key"))&&e.target==="_blank"&&(b()?r=!0:n=!0);let f=s()&&b()&&!K()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:r,ctrlKey:n,altKey:c,shiftKey:o}):new MouseEvent("click",{metaKey:r,ctrlKey:n,altKey:c,shiftKey:o,bubbles:!0,cancelable:!0});l.isOpening=t,w(e),e.dispatchEvent(f),l.isOpening=!1}l.isOpening=!1;function y(e,a){if(e instanceof HTMLAnchorElement)a(e);else if(e.hasAttribute("data-href")){let t=document.createElement("a");t.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(t.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(t.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(t.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(t.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(t.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(t),a(t),e.removeChild(t)}}function A(e,a){y(e,t=>l(t,a))}function H(e){let a=v();var t;const i=a.useHref((t=e.href)!==null&&t!==void 0?t:"");return{"data-href":e.href?i:void 0,"data-target":e.target,"data-rel":e.rel,"data-download":e.download,"data-ping":e.ping,"data-referrer-policy":e.referrerPolicy}}function k(e){let a=v();var t;const i=a.useHref((t=e==null?void 0:e.href)!==null&&t!==void 0?t:"");return{href:e!=null&&e.href?i:void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}export{E as $,l as a,k as b,v as c,g as d,H as e};
