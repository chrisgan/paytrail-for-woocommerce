(()=>{var e={565:(e,t,r)=>{"use strict";var n=r(601),o=r.n(n),i=r(314);r.n(i)()(o()).push([e.id,"",""])},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},181:(e,t,r)=>{var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,f=function(){return u.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?s(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function w(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-l>=i}function x(){var e=f();if(w(e))return j(e);s=setTimeout(x,function(e){var r=t-(e-c);return d?v(r,i-(e-l)):r}(e))}function j(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function b(){var e=f(),r=w(e);if(n=arguments,o=this,c=e,r){if(void 0===s)return function(e){return l=e,s=setTimeout(x,t),u?h(e):a}(c);if(d)return s=setTimeout(x,t),h(c)}return void 0===s&&(s=setTimeout(x,t)),a}return t=y(t)||0,m(r)&&(u=!!r.leading,i=(d="maxWait"in r)?p(y(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=o=s=void 0},b.flush=function(){return void 0===s?a:j(f())},b}},20:(e,t,r)=>{"use strict";var n=r(609),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},848:(e,t,r)=>{"use strict";e.exports=r(20)},609:e=>{"use strict";e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wc.wcBlocksRegistry,t=window.wc.wcSettings;var n=r(609);r(181);var o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function i(e,t,r,i){const a=(0,n.useRef)(t);o((()=>{a.current=t}),[t]),(0,n.useEffect)((()=>{const t=(null==r?void 0:r.current)??window;if(!t||!t.addEventListener)return;const n=e=>{a.current(e)};return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}),[e,r,i])}function a(e){const t=(0,n.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return o((()=>{t.current=e}),[e]),(0,n.useCallback)(((...e)=>{var r;return null==(r=t.current)?void 0:r.call(t,...e)}),[t])}var s="undefined"==typeof window;var c=r(848);const l=(0,n.createContext)({activeProvider:"",setActiveProvider:()=>{throw new Error("No set active provider defined")}}),u=({children:e})=>{const[t,r]=function(e,t,r={}){const{initializeWithValue:o=!0}=r,c=(0,n.useCallback)((e=>r.serializer?r.serializer(e):JSON.stringify(e)),[r]),l=(0,n.useCallback)((e=>{if(r.deserializer)return r.deserializer(e);if("undefined"===e)return;const n=t instanceof Function?t():t;let o;try{o=JSON.parse(e)}catch(e){return console.error("Error parsing JSON:",e),n}return o}),[r,t]),u=(0,n.useCallback)((()=>{const r=t instanceof Function?t():t;if(s)return r;try{const t=window.localStorage.getItem(e);return t?l(t):r}catch(t){return console.warn(`Error reading localStorage key “${e}”:`,t),r}}),[t,e,l]),[d,p]=(0,n.useState)((()=>o?u():t instanceof Function?t():t)),v=a((t=>{s&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const r=t instanceof Function?t(u()):t;window.localStorage.setItem(e,c(r)),p(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(t){console.warn(`Error setting localStorage key “${e}”:`,t)}})),f=a((()=>{s&&console.warn(`Tried removing localStorage key “${e}” even though environment is not a client`);const r=t instanceof Function?t():t;window.localStorage.removeItem(e),p(r),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}));(0,n.useEffect)((()=>{p(u())}),[e]);const m=(0,n.useCallback)((t=>{t.key&&t.key!==e||p(u())}),[e,u]);return i("storage",m),i("local-storage",m),[d,v,f]}("activePaytrailProvider","");return(0,c.jsx)(l.Provider,{value:{activeProvider:t,setActiveProvider:r},children:e})},d=(0,t.getSetting)("paytrail_data",{}),p=({provider:e,index:t})=>{if(d.no_providers)return null;const{activeProvider:r,setActiveProvider:o}=(0,n.useContext)(l),i=`${e.id}-${t}`;return(0,c.jsx)("li",{className:"paytrail-woocommerce-payment-fields--list-item "+(r===i?"selected":""),onClick:()=>o(i),children:(0,c.jsxs)("label",{htmlFor:`provider-${e.id}-${t}`,children:[(0,c.jsx)("input",{type:"radio",className:"paytrail-woocommerce-payment-fields--list-item--input",name:"payment_provider",value:e.id,checked:r===i,onChange:()=>o(i)}),(0,c.jsx)("div",{className:"paytrail-woocommerce-payment-fields--list-item--wrapper",children:(0,c.jsx)("img",{src:e.svg,alt:e.name,className:"paytrail-woocommerce-payment-fields--list-item--img"})})]})})},v=(0,t.getSetting)("paytrail_data",{}),f=({group:e})=>{if(!v.providers||0===v.providers.length)return null;const{activeProvider:t}=(0,n.useContext)(l),[r,o]=(0,n.useState)(e.providers.some(((e,r)=>t===((e,t)=>`${e.id}-${t}`)(e,r))));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"paytrail-provider-group",onClick:()=>o(!r),children:[(0,c.jsx)("img",{src:e.icon,className:"provider-group-icon",height:28,width:28}),(0,c.jsx)("div",{className:"paytrail-provider-group-title",children:e.name})]}),(0,c.jsx)("div",{className:"provider-list",children:(0,c.jsx)("ul",{className:"paytrail-woocommerce-payment-fields",children:r&&e.providers.map(((e,t)=>(0,c.jsx)(p,{provider:e,index:t},e.id)))})})]})},m=(0,t.getSetting)("paytrail_data",{}),y=()=>m.groups&&0!==m.groups.length?(0,c.jsx)("div",{className:"payment_box payment_method_paytrail",children:(0,c.jsx)("div",{className:"checkout-terms-link",children:m.groups.map((e=>(0,c.jsx)(f,{group:e},e.id)))})}):(0,c.jsx)("div",{className:"payment_box payment_method_paytrail"}),g=(0,t.getSetting)("paytrail_data",{mode:"default",providers:[],contains_subscription:!1}),h=(w=e=>{const{eventRegistration:t,emitResponse:r}=e,{onPaymentSetup:o}=t,{activeProvider:i}=(0,n.useContext)(l),a=i.replace(/-\d+$/,"");g.no_providers&&setActiveProvider("paytrail");const s=()=>(0,c.jsx)("div",{className:"paytrail-static-container",children:(0,c.jsx)("div",{className:"paytrail-description",children:g.description||"Your selected payment method is Paytrail."})});return(0,n.useEffect)((()=>{const e=o((async()=>(console.log(a),{type:r.responseTypes.SUCCESS,meta:{paymentMethodData:{payment_provider:a||defaultProvider}}})));return()=>{e()}}),[r.responseTypes.ERROR,r.responseTypes.SUCCESS,o,i]),g.no_providers||0===g.providers?.length||g.contains_subscription?(0,c.jsx)(s,{}):(0,c.jsx)(y,{})},class extends n.Component{render(){return(0,c.jsx)(u,{children:(0,c.jsx)(w,{...this.props})})}});var w;const x=window.wp.i18n,j=window.wp.htmlEntities,b=(0,t.getSetting)("paytrail_data",{}),_=(0,x.__)("Paytrail Payments","woo-gutenberg-products-block"),S=(0,j.decodeEntities)(b.title)||_,E=e=>{const{PaymentMethodLabel:t}=e.components;return(0,c.jsx)(t,{text:S})};r(565);const P=(0,t.getSetting)("paytrail_data",{});(0,e.registerPaymentMethod)({paymentMethodId:"paytrail",name:"paytrail",label:(0,c.jsx)(E,{}),content:(0,c.jsx)(h,{}),edit:(0,c.jsx)(h,{}),canMakePayment:()=>!0,ariaLabel:S,supports:{features:P.supports}})})()})();