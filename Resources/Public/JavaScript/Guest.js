webpackJsonp([1],{126:function(e,t,n){(function(t){function debounce(e,t,i){function invokeFunc(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function leadingEdge(e){return f=e,c=setTimeout(timerExpired,t),d?invokeFunc(e):u}function remainingWait(e){var n=e-l,i=e-f,r=t-n;return s?p(r,a-i):r}function shouldInvoke(e){var n=e-l,i=e-f;return void 0===l||n>=t||n<0||s&&i>=a}function timerExpired(){var e=g();if(shouldInvoke(e))return trailingEdge(e);c=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return c=void 0,m&&r?invokeFunc(e):(r=o=void 0,u)}function cancel(){void 0!==c&&clearTimeout(c),f=0,r=l=o=c=void 0}function flush(){return void 0===c?u:trailingEdge(g())}function debounced(){var e=g(),n=shouldInvoke(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return leadingEdge(l);if(s)return c=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===c&&(c=setTimeout(timerExpired,t)),u}var r,o,a,u,c,l,f=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);return t=toNumber(t)||0,isObject(i)&&(d=!!i.leading,s="maxWait"in i,a=s?b(toNumber(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&v.call(e)==r}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=f||d||Function("return this")(),m=Object.prototype,v=m.toString,b=Math.max,p=Math.min,g=function(){return s.Date.now()};e.exports=debounce}).call(t,n(35))},1489:function(e,t,n){n(622),e.exports=n(1670)},1670:function(e,t,n){"use strict";var i=n(1671),r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(i);Object.defineProperty(window,"NeosCKEditorApi",{value:r.default,enumerable:!1,writable:!1,configurable:!0})},1671:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(257),r=_interopRequireDefault(i),o=n(126),a=_interopRequireDefault(o),u=n(293),c=_interopRequireDefault(u),l={initialize:function initialize(){},toggleFormat:function toggleFormat(){},createEditor:function createEditor(){}},f="";t.default=function createCKEditorAPI(e){if(!e)return console.error("CKEditor not found!"),l;var t=null,n=null,i=function handleUserInteractionCallbackFactory(n){return function(){var i={};Object.keys(t.formattingRules).forEach(function(r){var o=t.formattingRules[r];if(void 0!==o.command)return n.getCommand(o.command)?void(i[r]=n.getCommand(o.command).state):void(i[r]=!1);if(void 0!==o.style){if(!n.elementPath())return void(i[r]=!1);var a=new e.style(o.style);return void(i[r]=a.checkActive(n.elementPath(),n))}if(o.extractCurrentFormatFn)return void(i[r]=o.extractCurrentFormatFn(n,e));throw new Error('\n                An error occured while checking a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                a key "style", or a style "extractCurrentFormatFn" - none of which could be found.\n            ')});var r=JSON.stringify(i);r!==f&&(t.setFormattingUnderCursor(i),f=r)}};return e.disableAutoInline=!0,Object.assign(e.dtd.$editable,{b:!0,big:!0,i:!0,small:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,code:!0,dfn:!0,em:!0,kbd:!0,strong:!0,samp:!0,var:!0,a:!0,bdo:!0,img:!0,q:!0,span:!0,sub:!0,sup:!0,button:!0,label:!0}),{initialize:function initialize(n){t=n,Object.values(t.plugins).forEach(function(t){t.initFn(e)})},toggleFormat:function toggleFormat(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.formattingRules[r];if(!a)return void console.warn("Formatting instruction "+r+" not found.");if(!n)return void console.warn("Current editor not found!");if(void 0!==a.command)return n.getCommand(a.command)?(n.execCommand(a.command),n.fire("change"),void i(n)()):void console.warn("Command "+n+" not found.");if(void 0!==a.style){if(!n.elementPath())return;var u=new e.style(a.style),c=u.checkActive(n.elementPath(),n)?"removeStyle":"applyStyle";return n[c](u),n.fire("change"),void i(n)()}if(a.applyStyleFn)return a.applyStyleFn(o,n,e),n.fire("change"),void i(n)();throw new Error('\n                An error occured while applying a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                "style", or "applyFn" - none of which could be found.\n            ')},createEditor:function createEditor(o,u,l,f){var d=this;if(e.dtd.$inline[o.tagName.toLowerCase()]){if([].slice.call(o.childNodes).some(function(t){return t.tagName&&e.dtd.$block[t.tagName.toLowerCase()]})){console.warn("The editable ",o," of type <",o.tagName.toLowerCase(),"> (which is an inline html element) contains block-level children (like p, div, ...). This is invalid markup and currently not supported by CKEditor; that is why we cannot edit it currently.");var s=function onClickRemoveTags(){var t=(0,c.default)(o.innerHTML,e);o.innerHTML=t,d.createEditor(o,u,l,f),o.removeEventListener("click",onClickRemoveTags)};return void o.addEventListener("click",s)}}o.contentEditable="true";var m=e.inline(o,u);m.on("loaded",function(){m.config.buttons&&m.config.buttons.forEach(function(e){var t=m.ui.create(e);m.addFeature(t)})});var v=i(m);m.on("contentDom",function(e){e.editor.editable().on("contextmenu",function(t){e.editor.elementPath().contains("table")||t.cancel()},null,null,5)}),m.once("contentDom",function(){m.on("focus",function(){n=m,t.setCurrentlyEditedPropertyName(l),v()}),m.on("selectionChange",function(){v()}),m.on("change",(0,a.default)((0,r.default)(function(){return f(m.getData())},1500),150))})}}}(window.CKEDITOR)},257:function(e,t,n){(function(t){function debounce(e,t,i){function invokeFunc(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function leadingEdge(e){return f=e,c=setTimeout(timerExpired,t),d?invokeFunc(e):u}function remainingWait(e){var n=e-l,i=e-f,r=t-n;return s?p(r,a-i):r}function shouldInvoke(e){var n=e-l,i=e-f;return void 0===l||n>=t||n<0||s&&i>=a}function timerExpired(){var e=g();if(shouldInvoke(e))return trailingEdge(e);c=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return c=void 0,m&&r?invokeFunc(e):(r=o=void 0,u)}function cancel(){void 0!==c&&clearTimeout(c),f=0,r=l=o=c=void 0}function flush(){return void 0===c?u:trailingEdge(g())}function debounced(){var e=g(),n=shouldInvoke(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return leadingEdge(l);if(s)return c=setTimeout(timerExpired,t),invokeFunc(l)}return void 0===c&&(c=setTimeout(timerExpired,t)),u}var r,o,a,u,c,l,f=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);return t=toNumber(t)||0,isObject(i)&&(d=!!i.leading,s="maxWait"in i,a=s?b(toNumber(i.maxWait)||0,t):a,m="trailing"in i?!!i.trailing:m),debounced.cancel=cancel,debounced.flush=flush,debounced}function throttle(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return isObject(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),debounce(e,t,{leading:r,maxWait:t,trailing:o})}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&v.call(e)==r}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return i;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,s=f||d||Function("return this")(),m=Object.prototype,v=m.toString,b=Math.max,p=Math.min,g=function(){return s.Date.now()};e.exports=throttle}).call(t,n(35))},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={},i=new t.filter(n),r=t.htmlParser.fragment.fromHtml(e),o=new t.htmlParser.basicWriter;return i.applyTo(r),r.writeHtml(o),e=o.getHtml(),e.replace(/<\/?[a-z0-9A-Z]+[^>]*>/g,"")}}},[1489]);
//# sourceMappingURL=Guest.js.map