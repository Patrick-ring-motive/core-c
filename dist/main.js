(()=>{var t={964:function(t,r,e){var n=window||self||e.g||globalThis||frames||this;n.globalObject=n,n.assert=void 0,assert.h=assert,assert.h.assert=assert},187:function(t,r,e){var n=window||self||e.g||globalThis||frames||this;n.globalObject=n,n.ctype={},ctype.h=ctype,ctype.h.charify=function(t){return"number"==typeof t?String.fromCharCode(t):""+t},ctype.h.isalnum=function(t){return t=charify(t),0+/^[a-z0-9]+$/gi.test(t)},ctype.h.isalpha=function(t){return t=charify(t),0+/^[a-z]+$/gi.test(t)},ctype.h.iscntrl=function(t){var r=(t=charify(t)).charCodeAt(0);return 0+(r<32||127==r)},ctype.h.isdigit=function(t){return t=charify(t),0+/^[0-9]+$/gi.test(t)},ctype.h.isgraph=function(t){return t=charify(t),1+"!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~`".indexOf(t)},ctype.h.islower=function(t){return t=charify(t),0+/^[a-z]+$/g.test(t)},ctype.h.isprint=function(t){var r=(t=charify(t)).charCodeAt(0);return 0+(r>=32&&127!=r)},ctype.h.ispunct=function(t){return t=charify(t),1+"!\"#$%&'()*+,-./:;<=>?@[]^_{|}~`".indexOf(t)},ctype.h.isspace=function(t){return t=charify(t),1+" \n\t\v\f\r".indexOf(t)},ctype.h.islower=function(t){return t=charify(t),0+/^[A-Z]+$/g.test(t)},ctype.h.isxdigit=function(t){return t=charify(t),0+/^[a-f0-9]+$/gi.test(t)},ctype.h.tolower=function(t){return(t=charify(t)).toLowerCase()},ctype.h.toupper=function(t){return(t=charify(t)).toUpperCase()};for(var i=Object.getOwnPropertyNames(ctype.h),c=i.length,a=0;a<c;a++)n[i[a]]=ctype.h[i[a]]},707:function(t,r,e){var n=window||self||e.g||globalThis||frames||this;n.globalObject=n,n.math=n.Math,math.h=math,math.h.fabs=Math.abs;for(var i=Object.getOwnPropertyNames(math.h),c=i.length,a=0;a<c;a++)n[i[a]]=math.h[i[a]]}},r={};function e(n){var i=r[n];if(void 0!==i)return i.exports;var c=r[n]={exports:{}};return t[n].call(c.exports,c,c.exports,e),c.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(964),e(187),e(707),console.log("Hello World!")})()})();