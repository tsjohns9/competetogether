!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=17)}([function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),c=null,u=0,f=[],l=t(2);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),f.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=f.indexOf(n);e>=0&&f.splice(e,1)}function g(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),v(e,n.attrs),h(n,e),e}function v(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=u++;t=c||(c=g(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){(n.exports=t(1)(!1)).push([n.i,"* {\n  font-family: 'Noto Sans', sans-serif;\n}\nbody {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  background-color: #eeeeee;\n}\n\nmain {\n  flex: 1 0 auto;\n}\n\n.btn {\n  background-color: #4caf50 !important;\n}\n\ninput {\n  border-bottom-color: #4caf50 !important;\n}\n\n.page-footer {\n  padding: 10px !important;\n}\n\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n}\n\n.navbar-fixed {\n  margin-bottom: 15px;\n}\n",""])},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(0)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.headerInit=function(){$(".sidenav").sidenav()}},,,,,,,,,function(n,e,t){(n.exports=t(1)(!1)).push([n.i,".chat-container,\nform {\n  width: 95%;\n}\n.chat-container {\n  padding: 0;\n  margin: 0 auto;\n}\n\n.chat-h2 {\n  text-align: center;\n  background-color: #455a64;\n  padding: 8px;\n  margin-bottom: 0;\n  margin-top: 0;\n  color: white;\n}\n\n.chat-msgs {\n  border-left: solid 1px #dee2e6;\n  border-right: solid 1px #dee2e6;\n  height: 500px;\n  overflow-y: auto;\n  background-color: white;\n  color: black !important;\n}\n\n#send-msg {\n  border: solid 1px #dee2e6;\n  width: 100%;\n  padding: 13px;\n  /* border-top: 1px solid rgb(207, 207, 207); */\n  resize: none;\n}\n\n.online {\n  height: 500px;\n  border-left: solid 1px #dee2e6;\n  border-bottom: solid 1px #dee2e6;\n}\n\n.chat-msgs div {\n  padding: 5px 10px;\n}\n\n.chat-msgs div:nth-child(odd) {\n  background: #eee;\n}\n\n.bg-white {\n  background-color: white;\n}\n",""])},function(n,e,t){var r=t(14);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(0)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){"use strict";n.exports={connect:"connect",connection:"connection",message:"message",room:"room",change:"change"}},function(n,e,t){"use strict";var r,o=t(5),i=t(16),a=(r=i)&&r.__esModule?r:{default:r};t(4),t(15),$(document).ready(function(){(0,o.headerInit)();var n=io.connect(),e={name:$("#send-msg").attr("data-name"),room:$("#send-msg").attr("data-room"),message:null};n.on(a.default.connect,function(){n.emit("room",e.room)}),$("#send-msg").on("keyup",function(t){if(13===t.keyCode)return e.message=$(this).val(),n.emit(a.default.message,e),$(this).val(""),!1}),$("#send-msg").on("change",function(){var e={room:$("#send-msg").attr("data-room"),value:$("#send-msg").val()};n.emit(a.default.change,e)}),n.on(a.default.change,function(n){$("#typing").remove(),""===n?$("#typing").remove():$("#send-msg").after('\n      <span id="typing">Someone is typing...</span>\n    ')}),n.on(a.default.message,function(n){$(".chat-msgs").append('\n    <div class="messages">\n      <span><strong>'+n.name+"</strong>: </span>\n      <span>"+n.message+"</span>\n    </div>\n  ")})})}]);