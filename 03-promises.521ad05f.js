!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form"),a=document.querySelector("input[name=delay]"),c=document.querySelector("input[name=step]"),l=document.querySelector("input[name=amount]");function d(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(a.value),o=Number(c.value),r=Number(l.value),f=1;f<=r;f+=1)d(f,t).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o;u.reset()}))}();
//# sourceMappingURL=03-promises.521ad05f.js.map
