!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in t){var d=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,d.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=d);var o=d("cp28T"),r=document.getElementById("start"),i=document.getElementById("stop");i.disabled=!0;var l=!1;o.scheduleJob("*/1 * * * * *",(function(){l&&(document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}));r.addEventListener("click",(function(){l=!0,r.disabled=!0,i.disabled=!1}),!1),i.addEventListener("click",(function(){r.disabled=!1,i.disabled=!0,l=!1}),!1)}();
//# sourceMappingURL=01-color-switcher.c6bce8eb.js.map