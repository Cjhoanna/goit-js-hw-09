var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in d){var n=d[e];delete d[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){d[e]=t},e.parcelRequired7c6=n);var o=n("9TATG"),r=document.getElementById("start"),i=document.getElementById("stop");i.disabled=!0;let l=!1;o.scheduleJob("*/1 * * * * *",(function(){l&&(document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`)}));r.addEventListener("click",(function(){l=!0,r.disabled=!0,i.disabled=!1}),!1),i.addEventListener("click",(function(){r.disabled=!1,i.disabled=!0,l=!1}),!1);
//# sourceMappingURL=01-color-switcher.40c804e8.js.map