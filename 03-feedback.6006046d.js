!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n),n.register("8slrw",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),n.register("7AJDX",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("ifqQW",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,r){if(!e)return;if("string"==typeof e)return o.default(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o.default(e,r)};var t,o=(t=n("8NIkP"))&&t.__esModule?t:{default:t}})),n.register("8NIkP",(function(e,r){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,r){return u.default(e)||l.default(e,r)||s.default(e,r)||i.default()};var u=f(n("8slrw")),l=f(n("7AJDX")),i=f(n("ifqQW")),s=f(n("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var c,d={save:function(e,r){try{var t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},m="form-key",v={form:document.querySelector(".feedback-form")};(c=d.load(m))&&(v.form.elements.name.value=c.email,Object.entries(c).forEach((function(r){var t=e(a)(r,2),o=t[0],n=t[1];v.form.elements[o].value=n}))),v.form.addEventListener("input",(function(e){var r=d.load(m);r=r||{};var t=e.target,o=t.name,n=t.value;r[o]=n,d.save(m,r)})),v.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.target.elements,t=r.email,o=r.message;if(""===t.value||""===o.value)return void console.log("Заповніть всі поля");var n=new FormData(v.form),a={};n.forEach((function(e,r){a[r]=e})),console.log(a),e.target.reset(),d.remove(m)}))}();
//# sourceMappingURL=03-feedback.6006046d.js.map