var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,n=/^0o[0-7]+$/i,a=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=i||f||Function("return this")(),u=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return c.Date.now()};function v(e,t,o){var r,n,a,i,f,c,u=0,v=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var o=r,a=n;return r=n=void 0,u=t,i=e.apply(a,o)}function h(e){return u=e,f=setTimeout(O,t),v?y(e):i}function j(e){var o=e-c;return void 0===c||o>=t||o<0||g&&e-u>=a}function O(){var e=m();if(j(e))return S(e);f=setTimeout(O,function(e){var o=t-(e-c);return g?s(o,a-(e-u)):o}(e))}function S(e){return f=void 0,p&&r?y(e):(r=n=void 0,i)}function w(){var e=m(),o=j(e);if(r=arguments,n=this,c=e,o){if(void 0===f)return h(c);if(g)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,d(o)&&(v=!!o.leading,a=(g="maxWait"in o)?l(b(o.maxWait)||0,t):a,p="trailing"in o?!!o.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,r=c=n=f=void 0},w.flush=function(){return void 0===f?i:S(m())},w}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(d(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=d(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=r.test(e);return f||n.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}var g={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}};const p={form:document.querySelector(".feedback-form")};!function(){let e=g.load("feedbacForm");e&&(p.form.elements.name.value=e.name,Object.entries(e).forEach((([e,t])=>{p.form.elements[e].value=t})))}(),p.form.addEventListener("input",(function(e){let t=g.load("feedbacForm");t=t||{};const{name:o,value:r}=e.target;t[o]=r,g.save("feedbacForm",t)})),p.form.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:o}=e.target.elements;if(""===t.value||""===o.value)return void console.log("Заповніть всі поля");const r=new FormData(p.form),n={};r.forEach(((e,t)=>{n[t]=e})),console.log(n),e.target.reset(),g.remove("feedbacForm")}));
//# sourceMappingURL=03-feedback.8875c441.js.map