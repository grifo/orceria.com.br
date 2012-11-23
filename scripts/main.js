(function(t){function e(t){var e=s["$"+t]||window[t];if(!e)throw Error("Ender Error: Requested module '"+t+"' has not been defined.");return e}function n(t,e){return s["$"+t]=e}function r(t,e){for(var n in e)"noConflict"!=n&&"_VERSION"!=n&&(t[n]=e[n]);return t}function i(t,e){var n,r;this.selector=t,t===void 0?(n=[],this.selector=""):n="string"==typeof t||t.nodeName||t.length&&"item"in t||t==window?o._select(t,e):isFinite(t.length)?t:[t],this.length=n.length;for(r=this.length;r--;)this[r]=n[r]}function o(t,e){return new i(t,e)}t.global=t;var s={},u=t.$,a=t.ender,c=t.require,l=t.provide;t.provide=n,t.require=e,i.prototype.forEach=function(t,e){var n,r;for(n=0,r=this.length;r>n;++n)n in this&&t.call(e||this[n],this[n],n,this);return this},i.prototype.$=o,o._VERSION="0.4.3-dev",o.fn=i.prototype,o.ender=function(t,e){r(e?i.prototype:o,t)},o._select=function(t,e){return"string"==typeof t?(e||document).querySelectorAll(t):t.nodeName?[t]:t},o.noConflict=function(r){return t.$=u,r&&(t.provide=l,t.require=c,t.ender=a,"function"==typeof r&&r(e,n,this)),this},"undefined"!=typeof module&&module.exports&&(module.exports=o),t.ender=t.$=o})(this),function(){var t={exports:{}};t.exports,!function(e,n){t!==void 0?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this[e]=n()}("domready",function(t){function e(t){for(h=1;t=r.shift();)t()}var n,r=[],i=!1,o=document,s=o.documentElement,u=s.doScroll,a="DOMContentLoaded",c="addEventListener",l="onreadystatechange",f="readyState",h=/^loade|c/.test(o[f]);return o[c]&&o[c](a,n=function(){o.removeEventListener(a,n,i),e()},i),u&&o.attachEvent(l,n=function(){/^c/.test(o[f])&&(o.detachEvent(l,n),e())}),t=u?function(e){self!=top?h?e():r.push(e):function(){try{s.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){h?t():r.push(t)}}),provide("domready",t.exports),!function(t){var e=require("domready");t.ender({domReady:e}),t.ender({ready:function(t){return e(t),this}},!0)}(ender)}(),function(){var t={exports:{}};t.exports,function(e,n,r){t!==void 0&&t.exports?t.exports=n():"function"==typeof r.define&&r.define.amd?define(e,n):r[e]=n()}("bonzo",function(){function t(t){return RegExp("(^|\\s+)"+t+"(\\s+|$)")}function e(t,e,n,r){for(var i,o=0,s=t.length;s>o;o++)i=r?t.length-o-1:o,e.call(n||t[i],t[i],i,t);return t}function n(t,e,r){for(var i=0,o=t.length;o>i;i++)a(t[i])&&(n(t[i].childNodes,e,r),e.call(r||t[i],t[i],i,t));return t}function r(t){return t.replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function i(t){return t?t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function o(t){t[j]("data-node-uid")||t[X]("data-node-uid",++R);var e=t[j]("data-node-uid");return I[e]||(I[e]={})}function s(t){var e=t[j]("data-node-uid");e&&delete I[e]}function u(t){var e;try{return null===t||void 0===t?void 0:"true"===t?!0:"false"===t?!1:"null"===t?null:(e=parseFloat(t))==t?e:t}catch(n){}return void 0}function a(t){return t&&t.nodeName&&(1==t.nodeType||11==t.nodeType)}function c(t,e,n){for(var r=0,i=t.length;i>r;++r)if(e.call(n||null,t[r],r,t))return!0;return!1}function l(t){return"transform"==t&&(t=Y.transform)||/^transform-?[Oo]rigin$/.test(t)&&(t=Y.transform+"Origin")||"float"==t&&(t=Y.cssFloat),t?r(t):null}function f(t,n,r,i){var o=0,s=n||this,u=[],a=A&&"string"==typeof t&&"<"!=t.charAt(0)?A(t):t;return e(g(a),function(t,n){e(s,function(e){r(t,u[o++]=n>0?m(s,e):e)},null,i)},this,i),s.length=o,e(u,function(t){s[--o]=t},null,!i),s}function h(t,e,n){var r=w(t),i=r.css("position"),o=r.offset(),s="relative",u=i==s,a=[parseInt(r.css("left"),10),parseInt(r.css("top"),10)];"static"==i&&(r.css("position",s),i=s),isNaN(a[0])&&(a[0]=u?0:t.offsetLeft),isNaN(a[1])&&(a[1]=u?0:t.offsetTop),null!=e&&(t.style.left=e-o.left+a[0]+z),null!=n&&(t.style.top=n-o.top+a[1]+z)}function d(t,e){return"function"==typeof e?e(t):e}function p(t){if(this.length=0,t){t="string"==typeof t||t.nodeType||void 0===t.length?[t]:t,this.length=t.length;for(var e=0;t.length>e;e++)this[e]=t[e]}}function g(t,e,n){var r,i,o;if("string"==typeof t)return w.create(t);if(a(t)&&(t=[t]),n){for(o=[],r=0,i=t.length;i>r;r++)o[r]=m(e,t[r]);return o}return t}function m(t,e){var n,r,i=e.cloneNode(!0);if(t.$&&"function"==typeof t.cloneEvents){t.$(i).cloneEvents(e),n=t.$(i).find("*"),r=t.$(e).find("*");for(var o=0;r.length>o;o++)t.$(n[o]).cloneEvents(r[o])}return i}function v(t,e,n){var r=this[0];return r?null==t&&null==e?(y(r)?b():{x:r.scrollLeft,y:r.scrollTop})[n]:(y(r)?S.scrollTo(t,e):(null!=t&&(r.scrollLeft=t),null!=e&&(r.scrollTop=e)),this):this}function y(t){return t===S||/^(?:body|html)$/i.test(t.tagName)}function b(){return{x:S.pageXOffset||$.scrollLeft,y:S.pageYOffset||$.scrollTop}}function w(t){return new p(t)}var x,E,T,S=window,N=S.document,$=N.documentElement,C="parentNode",A=null,L=/^(checked|value|selected|disabled)$/i,D=/^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,k=["<table>","</table>",1],q=["<table><tbody><tr>","</tr></tbody></table>",3],P=["<select>","</select>",1],_=["_","",0,1],M={thead:k,tbody:k,tfoot:k,colgroup:k,caption:k,tr:["<table><tbody>","</tbody></table>",2],th:q,td:q,col:["<table><colgroup>","</colgroup></table>",2],fieldset:["<form>","</form>",1],legend:["<form><fieldset>","</fieldset></form>",2],option:P,optgroup:P,script:_,style:_,link:_,param:_,base:_},O=/^(checked|selected|disabled)$/,B=/msie/i.test(navigator.userAgent),I={},R=0,H=/^-?[\d\.]+$/,W=/^data-(.+)$/,z="px",X="setAttribute",j="getAttribute",F="getElementsByTagName",Y=function(){var t=N.createElement("p");return t.innerHTML='<a href="#x">x</a><table style="float:left;"></table>',{hrefExtended:"#x"!=t[F]("a")[0][j]("href"),autoTbody:0!==t[F]("tbody").length,computedStyle:N.defaultView&&N.defaultView.getComputedStyle,cssFloat:t[F]("table")[0].style.styleFloat?"styleFloat":"cssFloat",transform:function(){var e,n=["transform","webkitTransform","MozTransform","OTransform","msTransform"];for(e=0;n.length>e;e++)if(n[e]in t.style)return n[e]}(),classList:"classList"in t,opasity:function(){return N.createElement("a").style.opacity!==void 0}()}}(),G=/(^\s*|\s*$)/g,V=/\s+/,Q=String.prototype.toString,U={lineHeight:1,zoom:1,zIndex:1,opacity:1,boxFlex:1,WebkitBoxFlex:1,MozBoxFlex:1},K=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(G,"")},Z=Y.computedStyle?function(t,e){var n=null,r=N.defaultView.getComputedStyle(t,"");return r&&(n=r[e]),t.style[e]||n}:B&&$.currentStyle?function(t,e){if("opacity"==e&&!Y.opasity){var n=100;try{n=t.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{n=t.filters("alpha").opacity}catch(i){}}return n/100}var o=t.currentStyle?t.currentStyle[e]:null;return t.style[e]||o}:function(t,e){return t.style[e]};return Y.classList?(x=function(t,e){return t.classList.contains(e)},E=function(t,e){t.classList.add(e)},T=function(t,e){t.classList.remove(e)}):(x=function(e,n){return t(n).test(e.className)},E=function(t,e){t.className=K(t.className+" "+e)},T=function(e,n){e.className=K(e.className.replace(t(n)," "))}),p.prototype={get:function(t){return this[t]||null},each:function(t,n){return e(this,t,n)},deepEach:function(t,e){return n(this,t,e)},map:function(t,e){var n,r,i=[];for(r=0;this.length>r;r++)n=t.call(this,this[r],r),e?e(n)&&i.push(n):i.push(n);return i},html:function(t,n){var r=n?void 0===$.textContent?"innerText":"textContent":"innerHTML",i=this,o=function(n,r){e(g(t,i,r),function(t){n.appendChild(t)})},s=function(e,i){try{if(n||"string"==typeof t&&!D.test(e.tagName))return e[r]=t}catch(s){}o(e,i)};return t!==void 0?this.empty().each(s):this[0]?this[0][r]:""},text:function(t){return this.html(t,!0)},append:function(t){var n=this;return this.each(function(r,i){e(g(t,n,i),function(t){r.appendChild(t)})})},prepend:function(t){var n=this;return this.each(function(r,i){var o=r.firstChild;e(g(t,n,i),function(t){r.insertBefore(t,o)})})},appendTo:function(t,e){return f.call(this,t,e,function(t,e){t.appendChild(e)})},prependTo:function(t,e){return f.call(this,t,e,function(t,e){t.insertBefore(e,t.firstChild)},1)},before:function(t){var n=this;return this.each(function(r,i){e(g(t,n,i),function(t){r[C].insertBefore(t,r)})})},after:function(t){var n=this;return this.each(function(r,i){e(g(t,n,i),function(t){r[C].insertBefore(t,r.nextSibling)},null,1)})},insertBefore:function(t,e){return f.call(this,t,e,function(t,e){t[C].insertBefore(e,t)})},insertAfter:function(t,e){return f.call(this,t,e,function(t,e){var n=t.nextSibling;n?t[C].insertBefore(e,n):t[C].appendChild(e)},1)},replaceWith:function(t){return w(g(t)).insertAfter(this),this.remove()},addClass:function(t){return t=Q.call(t).split(V),this.each(function(n){e(t,function(t){t&&!x(n,d(n,t))&&E(n,d(n,t))})})},removeClass:function(t){return t=Q.call(t).split(V),this.each(function(n){e(t,function(t){t&&x(n,d(n,t))&&T(n,d(n,t))})})},hasClass:function(t){return t=Q.call(t).split(V),c(this,function(e){return c(t,function(t){return t&&x(e,t)})})},toggleClass:function(t,n){return t=Q.call(t).split(V),this.each(function(r){e(t,function(t){t&&(n!==void 0?n?E(r,t):T(r,t):x(r,t)?T(r,t):E(r,t))})})},show:function(t){return t="string"==typeof t?t:"",this.each(function(e){e.style.display=t})},hide:function(){return this.each(function(t){t.style.display="none"})},toggle:function(t,e){return e="string"==typeof e?e:"","function"!=typeof t&&(t=null),this.each(function(n){n.style.display=n.offsetWidth||n.offsetHeight?"none":e,t&&t.call(n)})},first:function(){return w(this.length?this[0]:[])},last:function(){return w(this.length?this[this.length-1]:[])},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},parent:function(){return this.related(C)},related:function(t){return this.map(function(e){for(e=e[t];e&&1!==e.nodeType;)e=e[t];return e||0},function(t){return t})},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this},css:function(t,e){function n(t,e,n){for(var r in i)if(i.hasOwnProperty(r)){n=i[r],(e=l(r))&&H.test(n)&&!(e in U)&&(n+=z);try{t.style[e]=d(t,n)}catch(o){}}}var r,i=t;return void 0===e&&"string"==typeof t?(e=this[0],e?e===N||e===S?(r=e===N?w.doc():w.viewport(),"width"==t?r.width:"height"==t?r.height:""):(t=l(t))?Z(e,t):null:null):("string"==typeof t&&(i={},i[t]=e),B&&i.opacity&&(i.filter="alpha(opacity="+100*i.opacity+")",i.zoom=t.zoom||1,delete i.opacity),this.each(n))},offset:function(t,e){if(t&&"object"==typeof t&&("number"==typeof t.top||"number"==typeof t.left))return this.each(function(e){h(e,t.left,t.top)});if("number"==typeof t||"number"==typeof e)return this.each(function(n){h(n,t,e)});if(!this[0])return{top:0,left:0,height:0,width:0};var n=this[0],r=n.ownerDocument.documentElement,i=n.getBoundingClientRect(),o=b(),s=n.offsetWidth,u=n.offsetHeight,a=i.top+o.y-Math.max(0,r&&r.clientTop,N.body.clientTop),c=i.left+o.x-Math.max(0,r&&r.clientLeft,N.body.clientLeft);return{top:a,left:c,height:u,width:s}},dim:function(){if(!this.length)return{height:0,width:0};var t=this[0],e=9==t.nodeType&&t.documentElement,n=e||!t.style||t.offsetWidth||t.offsetHeight?null:function(e){var n={position:t.style.position||"",visibility:t.style.visibility||"",display:t.style.display||""};return e.first().css({position:"absolute",visibility:"hidden",display:"block"}),n}(this),r=e?Math.max(t.body.scrollWidth,t.body.offsetWidth,e.scrollWidth,e.offsetWidth,e.clientWidth):t.offsetWidth,i=e?Math.max(t.body.scrollHeight,t.body.offsetHeight,e.scrollWidth,e.offsetWidth,e.clientHeight):t.offsetHeight;return n&&this.first().css(n),{height:i,width:r}},attr:function(t,e){var n=this[0];if("string"!=typeof t&&!(t instanceof String)){for(var r in t)t.hasOwnProperty(r)&&this.attr(r,t[r]);return this}return e===void 0?n?L.test(t)?O.test(t)&&"string"==typeof n[t]?!0:n[t]:"href"!=t&&"src"!=t||!Y.hrefExtended?n[j](t):n[j](t,2):null:this.each(function(n){L.test(t)?n[t]=d(n,e):n[X](t,d(n,e))})},removeAttr:function(t){return this.each(function(e){O.test(t)?e[t]=!1:e.removeAttribute(t)})},val:function(t){return"string"==typeof t?this.attr("value",t):this.length?this[0].value:null},data:function(t,n){var s,a,c=this[0];return n===void 0?c?(s=o(c),t===void 0?(e(c.attributes,function(t){(a=(""+t.name).match(W))&&(s[r(a[1])]=u(t.value))}),s):(s[t]===void 0&&(s[t]=u(this.attr("data-"+i(t)))),s[t])):null:this.each(function(e){o(e)[t]=n})},remove:function(){return this.deepEach(s),this.detach()},empty:function(){return this.each(function(t){for(n(t.childNodes,s);t.firstChild;)t.removeChild(t.firstChild)})},detach:function(){return this.each(function(t){t[C]&&t[C].removeChild(t)})},scrollTop:function(t){return v.call(this,null,t,"y")},scrollLeft:function(t){return v.call(this,t,null,"x")}},w.setQueryEngine=function(t){A=t,delete w.setQueryEngine},w.aug=function(t,e){for(var n in t)t.hasOwnProperty(n)&&((e||p.prototype)[n]=t[n])},w.create=function(t){return"string"==typeof t&&""!==t?function(){var n=/^\s*<([^\s>]+)/.exec(t),r=N.createElement("div"),i=[],o=n?M[n[1].toLowerCase()]:null,s=o?o[2]+1:1,u=o&&o[3],a=C,c=Y.autoTbody&&o&&"<table>"==o[0]&&!/<tbody/i.test(t);for(r.innerHTML=o?o[0]+t+o[1]:t;s--;)r=r.firstChild;u&&r&&1!==r.nodeType&&(r=r.nextSibling);do n&&1!=r.nodeType||c&&"tbody"==r.tagName.toLowerCase()||i.push(r);while(r=r.nextSibling);return e(i,function(t){t[a]&&t[a].removeChild(t)}),i}():a(t)?[t.cloneNode(!0)]:[]},w.doc=function(){var t=w.viewport();return{width:Math.max(N.body.scrollWidth,$.scrollWidth,t.width),height:Math.max(N.body.scrollHeight,$.scrollHeight,t.height)}},w.firstChild=function(t){for(var e,n=t.childNodes,r=0,i=n&&n.length||0;i>r;r++)1===n[r].nodeType&&(e=n[i=r]);return e},w.viewport=function(){return{width:B?$.clientWidth:self.innerWidth,height:B?$.clientHeight:self.innerHeight}},w.isAncestor="compareDocumentPosition"in $?function(t,e){return 16==(16&t.compareDocumentPosition(e))}:"contains"in $?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e=e[C];)if(e===t)return!0;return!1},w},this),provide("bonzo",t.exports),function(t){function e(t,e){for(var n=0;t.length>n;n++)if(t[n]===e)return n;return-1}function n(t){for(var e,n,r,i=[],o=0,s=0;n=t[o];++o){for(r=!1,e=0;i.length>e;++e)if(i[e]===n){r=!0;break}r||(i[s++]=n)}return i}function r(t,e){return e===void 0?i(this).dim()[t]:this.css(t,e)}var i=require("bonzo");i.setQueryEngine(t),t.ender(i),t.ender(i(),!0),t.ender({create:function(e){return t(i.create(e))}}),t.id=function(e){return t([document.getElementById(e)])},t.ender({parents:function(r,i){if(!this.length)return this;r||(r="*");var o,s,u,a=t(r),c=[];for(o=0,s=this.length;s>o;o++)for(u=this[o];(u=u.parentNode)&&(!~e(a,u)||(c.push(u),!i)););return t(n(c))},parent:function(){return t(n(i(this).parent()))},closest:function(t){return this.parents(t,!0)},first:function(){return t(this.length?this[0]:this)},last:function(){return t(this.length?this[this.length-1]:[])},next:function(){return t(i(this).next())},previous:function(){return t(i(this).previous())},appendTo:function(t){return i(this.selector).appendTo(t,this)},prependTo:function(t){return i(this.selector).prependTo(t,this)},insertAfter:function(t){return i(this.selector).insertAfter(t,this)},insertBefore:function(t){return i(this.selector).insertBefore(t,this)},siblings:function(){var e,n,r,i=[];for(e=0,n=this.length;n>e;e++){for(r=this[e];r=r.previousSibling;)1==r.nodeType&&i.push(r);for(r=this[e];r=r.nextSibling;)1==r.nodeType&&i.push(r)}return t(i)},children:function(){var e,r,o,s=[];for(e=0,r=this.length;r>e;e++)if(o=i.firstChild(this[e]))for(s.push(o);o=o.nextSibling;)1==o.nodeType&&s.push(o);return t(n(s))},height:function(t){return r.call(this,"height",t)},width:function(t){return r.call(this,"width",t)}},!0)}(ender)}(),function(){var t={exports:{}};t.exports,!function(e,n,r){t!==void 0&&t.exports?t.exports=r(e,n):"function"==typeof define&&"object"==typeof define.amd?define(r):n[e]=r(e,n)}("bean",this,function(t,e){var n,r=window,i=e[t],o=/[^\.]*(?=\..*)\.|.*/,s=/\..*/,u="addEventListener",a="removeEventListener",c=document||{},l=c.documentElement||{},f=l[u],h=f?u:"attachEvent",d={},p=Array.prototype.slice,g=function(t,e){return t.split(e||" ")},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},y="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",b="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",w=function(t,e,n){for(n=0;e.length>n;n++)e[n]&&(t[e[n]]=1);return t}({},g(y+(f?b:""))),x=function(){var t="compareDocumentPosition"in l?function(t,e){return e.compareDocumentPosition&&16===(16&e.compareDocumentPosition(t))}:"contains"in l?function(t,e){return e=9===e.nodeType||e===window?l:e,e!==t&&e.contains(t)}:function(t,e){for(;t=t.parentNode;)if(t===e)return 1;return 0},e=function(e){var n=e.relatedTarget;return n?n!==this&&"xul"!==n.prefix&&!/document/.test(""+this)&&!t(n,this):null==n};return{mouseenter:{base:"mouseover",condition:e},mouseleave:{base:"mouseout",condition:e},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),E=function(){var t=g("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),e=t.concat(g("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),n=e.concat(g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),i=t.concat(g("char charCode key keyCode keyIdentifier keyLocation location")),o=t.concat(g("data")),s=t.concat(g("touches targetTouches changedTouches scale rotation")),u=t.concat(g("data origin source")),a=t.concat(g("state")),f=/over|out/,h=[{reg:/key/i,fix:function(t,e){return e.keyCode=t.keyCode||t.which,i}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(t,n,r){return n.rightClick=3===t.which||2===t.button,n.pos={x:0,y:0},t.pageX||t.pageY?(n.clientX=t.pageX,n.clientY=t.pageY):(t.clientX||t.clientY)&&(n.clientX=t.clientX+c.body.scrollLeft+l.scrollLeft,n.clientY=t.clientY+c.body.scrollTop+l.scrollTop),f.test(r)&&(n.relatedTarget=t.relatedTarget||t[("mouseover"==r?"from":"to")+"Element"]),e}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return n}},{reg:/^text/i,fix:function(){return o}},{reg:/^touch|^gesture/i,fix:function(){return s}},{reg:/^message$/i,fix:function(){return u}},{reg:/^popstate$/i,fix:function(){return a}},{reg:/.*/,fix:function(){return t}}],d={},p=function(t,e,n){if(arguments.length&&(t=t||((e.ownerDocument||e.document||e).parentWindow||r).event,this.originalEvent=t,this.isNative=n,this.isBean=!0,t)){var i,o,s,u,a,c=t.type,l=t.target||t.srcElement;if(this.target=l&&3===l.nodeType?l.parentNode:l,n){if(a=d[c],!a)for(i=0,o=h.length;o>i;i++)if(h[i].reg.test(c)){d[c]=a=h[i].fix;break}for(u=a(t,this,c),i=u.length;i--;)!((s=u[i])in this)&&s in t&&(this[s]=t[s])}}};return p.prototype.preventDefault=function(){this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1},p.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},p.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},p.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},p.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},p.prototype.clone=function(t){var e=new p(this,this.element,this.isNative);return e.currentTarget=t,e},p}(),T=function(t,e){return f||e||t!==c&&t!==r?t:l},S=function(){var t=function(t,e,n,r){var i=function(n,i){return e.apply(t,r?p.call(i,n?0:1).concat(r):i)},o=function(n,r){return e.__beanDel?e.__beanDel.ft(n.target,t):r},s=n?function(t){var e=o(t,this);return n.apply(e,arguments)?(t&&(t.currentTarget=e),i(t,arguments)):void 0}:function(t){return e.__beanDel&&(t=t.clone(o(t))),i(t,arguments)};return s.__beanDel=e.__beanDel,s},e=function(e,n,r,i,o,s,u){var a,c=x[n];"unload"==n&&(r=L(D,e,n,r,i)),c&&(c.condition&&(r=t(e,r,c.condition,s)),n=c.base||n),this.isNative=a=w[n]&&!!e[h],this.customType=!f&&!a&&n,this.element=e,this.type=n,this.original=i,this.namespaces=o,this.eventType=f||a?n:"propertychange",this.target=T(e,a),this[h]=!!this.target[h],this.root=u,this.handler=t(e,r,null,s)};return e.prototype.inNamespaces=function(t){var e,n,r=0;if(!t)return!0;if(!this.namespaces)return!1;for(e=t.length;e--;)for(n=this.namespaces.length;n--;)t[e]==this.namespaces[n]&&r++;return t.length===r},e.prototype.matches=function(t,e,n){return!(this.element!==t||e&&this.original!==e||n&&this.handler!==n)},e}(),N=function(){var t={},e=function(n,r,i,o,s,u){var a=s?"r":"$";if(r&&"*"!=r){var c,l=0,f=t[a+r],h="*"==n;if(!f)return;for(c=f.length;c>l;l++)if((h||f[l].matches(n,i,o))&&!u(f[l],f,l,r))return}else for(var d in t)d.charAt(0)==a&&e(n,d.substr(1),i,o,s,u)},n=function(e,n,r,i){var o,s=t[(i?"r":"$")+n];if(s)for(o=s.length;o--;)if(!s[o].root&&s[o].matches(e,r,null))return!0;return!1},r=function(t,n,r,i){var o=[];return e(t,n,r,null,i,function(t){return o.push(t)}),o},i=function(e){var n=!e.root&&!this.has(e.element,e.type,null,!1),r=(e.root?"r":"$")+e.type;return(t[r]||(t[r]=[])).push(e),n},o=function(n){e(n.element,n.type,null,n.handler,n.root,function(e,n,r){return n.splice(r,1),e.removed=!0,0===n.length&&delete t[(e.root?"r":"$")+e.type],!1})},s=function(){var e,n=[];for(e in t)"$"==e.charAt(0)&&(n=n.concat(t[e]));return n};return{has:n,get:r,put:i,del:o,entries:s}}(),$=function(t){n=arguments.length?t:c.querySelectorAll?function(t,e){return e.querySelectorAll(t)}:function(){throw Error("Bean: No selector engine installed")}},C=function(t,e){if(f||!e||!t||t.propertyName=="_on"+e){var n=N.get(this,e||t.type,null,!1),r=n.length,i=0;for(t=new E(t,this,!0),e&&(t.type=e);r>i&&!t.isImmediatePropagationStopped();i++)n[i].removed||n[i].handler.call(this,t)}},A=f?function(t,e,n){t[n?u:a](e,C,!1)}:function(t,e,n,r){var i;n?(N.put(i=new S(t,r||e,function(e){C.call(t,e,r)},C,null,null,!0)),r&&null==t["_on"+r]&&(t["_on"+r]=0),i.target.attachEvent("on"+i.eventType,i.handler)):(i=N.get(t,r||e,C,!0)[0],i&&(i.target.detachEvent("on"+i.eventType,i.handler),N.del(i)))},L=function(t,e,n,r,i){return function(){r.apply(this,arguments),t(e,n,i)}},D=function(t,e,n,r){var i,o,u=e&&e.replace(s,""),a=N.get(t,u,null,!1),c={};for(i=0,o=a.length;o>i;i++)n&&a[i].original!==n||!a[i].inNamespaces(r)||(N.del(a[i]),!c[a[i].eventType]&&a[i][h]&&(c[a[i].eventType]={t:a[i].eventType,c:a[i].type}));for(i in c)N.has(t,c[i].t,null,!1)||A(t,c[i].t,!1,c[i].c)},k=function(t,e){var r=function(e,r){for(var i,o=m(t)?n(t,r):t;e&&e!==r;e=e.parentNode)for(i=o.length;i--;)if(o[i]===e)return e},i=function(t){var n=r(t.target,this);n&&e.apply(n,arguments)};return i.__beanDel={ft:r,selector:t},i},q=f?function(t,e,n){var i=c.createEvent(t?"HTMLEvents":"UIEvents");i[t?"initEvent":"initUIEvent"](e,!0,!0,r,1),n.dispatchEvent(i)}:function(t,e,n){n=T(n,t),t?n.fireEvent("on"+e,c.createEventObject()):n["_on"+e]++},P=function(t,e,n){var r,i,u,a,c=m(e);if(c&&e.indexOf(" ")>0){for(e=g(e),a=e.length;a--;)P(t,e[a],n);return t}if(i=c&&e.replace(s,""),i&&x[i]&&(i=x[i].type),!e||c)(u=c&&e.replace(o,""))&&(u=g(u,".")),D(t,i,n,u);else if(v(e))D(t,null,e);else for(r in e)e.hasOwnProperty(r)&&P(t,r,e[r]);return t},_=function(t,e,r,i){var u,a,c,l,f,m,y;{if(void 0!==r||"object"!=typeof e){for(v(r)?(f=p.call(arguments,3),i=u=r):(u=i,f=p.call(arguments,4),i=k(r,u,n)),c=g(e),this===d&&(i=L(P,t,e,i,u)),l=c.length;l--;)y=N.put(m=new S(t,c[l].replace(s,""),i,u,g(c[l].replace(o,""),"."),f,!1)),m[h]&&y&&A(t,m.eventType,!0,m.customType);return t}for(a in e)e.hasOwnProperty(a)&&_.call(this,t,a,e[a])}},M=function(t,e,n,r){return _.apply(null,m(n)?[t,n,e,r].concat(arguments.length>3?p.call(arguments,5):[]):p.call(arguments))},O=function(){return _.apply(d,arguments)},B=function(t,e,n){var r,i,u,a,c,l=g(e);for(r=l.length;r--;)if(e=l[r].replace(s,""),(a=l[r].replace(o,""))&&(a=g(a,".")),a||n||!t[h])for(c=N.get(t,e,null,!1),n=[!1].concat(n),i=0,u=c.length;u>i;i++)c[i].inNamespaces(a)&&c[i].handler.apply(t,n);else q(w[e],e,t);return t},I=function(t,e,n){for(var r,i,o=N.get(e,n,null,!1),s=o.length,u=0;s>u;u++)o[u].original&&(r=[t,o[u].type],(i=o[u].handler.__beanDel)&&r.push(i.selector),r.push(o[u].original),_.apply(null,r));return t},R={on:_,add:M,one:O,off:P,remove:P,clone:I,fire:B,setSelectorEngine:$,noConflict:function(){return e[t]=i,this}};if(r.attachEvent){var H=function(){var t,e=N.entries();for(t in e)e[t].type&&"unload"!==e[t].type&&P(e[t].element,e[t].type);r.detachEvent("onunload",H),r.CollectGarbage&&r.CollectGarbage()};r.attachEvent("onunload",H)}return $(),R}),provide("bean",t.exports),!function(t){for(var e=require("bean"),n=function(t,n){var r=n?[n]:[];return function(){for(var i=0,o=this.length;o>i;i++)!arguments.length&&"on"==t&&n&&(t="fire"),e[t].apply(this,[this[i]].concat(r,Array.prototype.slice.call(arguments,0)));return this}},r=n("add"),i=n("on"),o=n("one"),s=n("off"),u=n("fire"),a=n("clone"),c=function(t,n,r){for(r=this.length;r--;)e.on.call(this,this[r],"mouseenter",t),e.on.call(this,this[r],"mouseleave",n);return this},l={on:i,addListener:i,bind:i,listen:i,delegate:r,one:o,off:s,unbind:s,unlisten:s,removeListener:s,undelegate:s,emit:u,trigger:u,cloneEvents:a,hover:c},f="blur change click dblclick error focus focusin focusout keydown keypress keyup load mousedown mouseenter mouseleave mouseout mouseover mouseup mousemove resize scroll select submit unload".split(" "),h=f.length;h--;)l[f[h]]=n("on",f[h]);e.setSelectorEngine(t),t.ender(l,!0)}(ender)}(),function(){var t={exports:{}};t.exports,function(e,n,r){t!==void 0&&t.exports?t.exports=n():"function"==typeof r.define&&r.define.amd?define(e,n):r[e]=n()}("qwery",function(){function t(){this.c={}}function e(t){return V.g(t)||V.s(t,"(^|\\s+)"+t+"(\\s+|$)",1)}function n(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n])}function r(t){for(var e=[],n=0,r=t.length;r>n;++n)g(t[n])?e=e.concat(t[n]):e[e.length]=t[n];return e}function i(t){for(var e=0,n=t.length,r=[];n>e;e++)r[e]=t[e];return r}function o(t){for(;(t=t.previousSibling)&&1!=t[A];);return t}function s(t){return t.match(Y)}function u(t,n,r,i,o,s,u,a,l,f,h){var d,p,g,m,v;if(1!==this[A])return!1;if(n&&"*"!==n&&this[C]&&this[C].toLowerCase()!==n)return!1;if(r&&(p=r.match(L))&&p[1]!==this.id)return!1;if(r&&(v=r.match(D)))for(d=v.length;d--;)if(!e(v[d].slice(1)).test(this.className))return!1;if(l&&y.pseudos[l]&&!y.pseudos[l](this,h))return!1;if(i&&!u){m=this.attributes;for(g in m)if(Object.prototype.hasOwnProperty.call(m,g)&&(m[g].name||g)==o)return this}return i&&!c(s,J(this,o)||"",u)?!1:this}function a(t){return Q.g(t)||Q.s(t,t.replace(R,"\\$1"))}function c(t,e,n){switch(t){case"=":return e==n;case"^=":return e.match(U.g("^="+n)||U.s("^="+n,"^"+a(n),1));case"$=":return e.match(U.g("$="+n)||U.s("$="+n,a(n)+"$",1));case"*=":return e.match(U.g(n)||U.s(n,a(n),1));case"~=":return e.match(U.g("~="+n)||U.s("~="+n,"(?:^|\\s+)"+a(n)+"(?:\\s+|$)",1));case"|=":return e.match(U.g("|="+n)||U.s("|="+n,"^"+a(n)+"(-|$)",1))}return 0}function l(t,e){var r,i,o,a,c,l,f,d=[],p=[],g=e,m=K.g(t)||K.s(t,t.split(F)),y=t.match(j);if(!m.length)return d;if(a=(m=m.slice(0)).pop(),m.length&&(o=m[m.length-1].match(k))&&(g=v(e,o[1])),!g)return d;for(l=s(a),c=g!==e&&9!==g[A]&&y&&/^[+~]$/.test(y[y.length-1])?function(t){for(;g=g.nextSibling;)1==g[A]&&(l[1]?l[1]==g[C].toLowerCase():1)&&(t[t.length]=g);return t}([]):g[S](l[1]||"*"),r=0,i=c.length;i>r;r++)(f=u.apply(c[r],l))&&(d[d.length]=f);return m.length?(n(d,function(t){h(t,m,y)&&(p[p.length]=t)}),p):d}function f(t,e,n){if(d(e))return t==e;if(g(e))return!!~r(e).indexOf(t);for(var i,o,a=e.split(",");e=a.pop();)if(i=K.g(e)||K.s(e,e.split(F)),o=e.match(j),i=i.slice(0),u.apply(t,s(i.pop()))&&(!i.length||h(t,i,o,n)))return!0;return!1}function h(t,e,n,r){function i(t,r,a){for(;a=G[n[r]](a,t);)if(d(a)&&u.apply(a,s(e[r]))){if(!r)return a;if(o=i(a,r-1,a))return o}}var o;return(o=i(t,e.length-1,t))&&(!r||Z(o,r))}function d(t,e){return t&&"object"==typeof t&&(e=t[A])&&(1==e||9==e)}function p(t){var e,n,r=[];t:for(e=0;t.length>e;++e){for(n=0;r.length>n;++n)if(r[n]==t[e])continue t;r[r.length]=t[e]}return r}function g(t){return"object"==typeof t&&isFinite(t.length)}function m(t){return t?"string"==typeof t?y(t)[0]:!t[A]&&g(t)?t[0]:t:x}function v(t,e,n){return 9===t[A]?t.getElementById(e):t.ownerDocument&&((n=t.ownerDocument.getElementById(e))&&Z(n,t)&&n||!Z(t,t.ownerDocument)&&w('[id="'+e+'"]',t)[0])}function y(t,e){var n,o,s=m(e);if(!s||!t)return[];if(t===window||d(t))return!e||t!==window&&d(s)&&Z(t,s)?[t]:[];if(t&&g(t))return r(t);if(n=t.match(X)){if(n[1])return(o=v(s,n[1]))?[o]:[];if(n[2])return i(s[S](n[2]));if(te&&n[3])return i(s[T](n[3]))}return w(t,s)}function b(t,e){return function(n){var r,i;return M.test(n)?(9!==t[A]&&((i=r=t.getAttribute("id"))||t.setAttribute("id",i="__qwerymeupscotty"),n='[id="'+i+'"]'+n,e(t.parentNode||t,n,!0),r||t.removeAttribute("id")),void 0):(n.length&&e(t,n,!1),void 0)}}var w,x=document,E=x.documentElement,T="getElementsByClassName",S="getElementsByTagName",N="querySelectorAll",$="useNativeQSA",C="tagName",A="nodeType",L=/#([\w\-]+)/,D=/\.[\w\-]+/g,k=/^#([\w\-]+)$/,q=/^\.([\w\-]+)$/,P=/^([\w\-]+)$/,_=/^([\w]+)?\.([\w\-]+)$/,M=/(^|,)\s*[>~+]/,O=/^\s+|\s*([,\s\+\~>]|$)\s*/g,B=/[\s\>\+\~]/,I=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,R=/([.*+?\^=!:${}()|\[\]\/\\])/g,H=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,W=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,z=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,X=RegExp(k.source+"|"+P.source+"|"+q.source),j=RegExp("("+B.source+")"+I.source,"g"),F=RegExp(B.source+I.source),Y=RegExp(H.source+"("+W.source+")?"+"("+z.source+")?"),G={" ":function(t){return t&&t!==E&&t.parentNode},">":function(t,e){return t&&t.parentNode==e.parentNode&&t.parentNode},"~":function(t){return t&&t.previousSibling},"+":function(t,e,n,r){return t?(n=o(t))&&(r=o(e))&&n==r&&n:!1}};t.prototype={g:function(t){return this.c[t]||void 0},s:function(t,e,n){return e=n?RegExp(e):e,this.c[t]=e}};var V=new t,Q=new t,U=new t,K=new t,Z="compareDocumentPosition"in E?function(t,e){return 16==(16&e.compareDocumentPosition(t))}:"contains"in E?function(t,e){return e=9===e[A]||e==window?E:e,e!==t&&e.contains(t)}:function(t,e){for(;t=t.parentNode;)if(t===e)return 1;return 0},J=function(){var t=x.createElement("p");return(t.innerHTML='<a href="#x">x</a>')&&"#x"!=t.firstChild.getAttribute("href")?function(t,e){return"class"===e?t.className:"href"===e||"src"===e?t.getAttribute(e,2):t.getAttribute(e)}:function(t,e){return t.getAttribute(e)}}(),te=!!x[T],ee=x.querySelector&&x[N],ne=function(t,e){var r,o,s=[];try{return 9!==e[A]&&M.test(t)?(n(r=t.split(","),b(e,function(t,e){o=t[N](e),1==o.length?s[s.length]=o.item(0):o.length&&(s=s.concat(i(o)))})),r.length>1&&s.length>1?p(s):s):i(e[N](t))}catch(u){}return re(t,e)},re=function(t,r){var i,o,s,u,a,c,f=[];if(t=t.replace(O,"$1"),o=t.match(_)){for(a=e(o[2]),i=r[S](o[1]||"*"),s=0,u=i.length;u>s;s++)a.test(i[s].className)&&(f[f.length]=i[s]);
return f}return n(c=t.split(","),b(r,function(t,e,n){for(a=l(e,t),s=0,u=a.length;u>s;s++)(9===t[A]||n||Z(a[s],r))&&(f[f.length]=a[s])})),c.length>1&&f.length>1?p(f):f},ie=function(t){t[$]!==void 0&&(w=t[$]?ee?ne:re:re)};return ie({useNativeQSA:!0}),y.configure=ie,y.uniq=p,y.is=f,y.pseudos={},y},this),provide("qwery",t.exports),function(t){var e=function(){var t;try{t=require("qwery")}catch(e){t=require("qwery-mobile")}finally{return t}}();t.pseudos=e.pseudos,t._select=function(n,r){return(t._select=function(){var n;if("function"==typeof t.create)return function(n,r){return/^\s*</.test(n)?t.create(n,r):e(n,r)};try{return n=require("bonzo"),function(t,r){return/^\s*</.test(t)?n.create(t,r):e(t,r)}}catch(r){}return e}())(n,r)},t.ender({find:function(n){var r,i,o,s,u,a=[];for(r=0,i=this.length;i>r;r++)for(u=e(n,this[r]),o=0,s=u.length;s>o;o++)a.push(u[o]);return t(e.uniq(a))},and:function(e){for(var n=t(e),r=this.length,i=0,o=this.length+n.length;o>r;r++,i++)this[r]=n[i];return this.length+=n.length,this},is:function(t,n){var r,i;for(r=0,i=this.length;i>r;r++)if(e.is(this[r],t,n))return!0;return!1}},!0)}(ender)}(),function(){var t;t=function(t){var e,n;if(null!=t)return null==t.nodeName&&(t=t[0]),e=function(){var e,r,i,o,s;for(i=t.elements,s=[],e=0,r=i.length;r>e;e++)n=i[e],(n.checked||(null!=(o=n.type)?o.match(/^text(area)?$/):void 0))&&s.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value));return s}(),null!=e?e.join("&").replace(/%20/g,"+"):void 0},window.simpleCORSRequest=function(e){var n,r;if(r=new XMLHttpRequest,null!=r.withCredentials)r.open(e.method,e.url,!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded");else{if("undefined"==typeof XDomainRequest||null===XDomainRequest)return alert("Ops!\n\nPor favor, atualize seu navegador"),void 0;r=new XDomainRequest,r.open(e.method,e.url)}return n=t(e.form),r.send(null!=n?n:null)}}.call(this),function(){window.simpleAsyncLoad=function(t,e){var n;return"string"==typeof t&&(t={http:t,ssl:t}),n=document.createElement("script"),n.async=!0,null!=e&&(n.onload=e,n.onreadystatechange=function(){return"loaded"===n.readyState?"function"==typeof e?e():void 0:void 0}),n.src="https:"===document.location.protocol?t.ssl:t.http,$("script").first().before(n)}}.call(this),function(){var t;t=function(){function t(){this.form=$("form"),this.fieldEmail=$("#signin-email"),this.fieldName=$("#signin-name"),this.sendButton=$("#send-button"),this.stage=0,this.addEventListener()}return t.prototype.addEventListener=function(){var t=this;return this.sendButton.on("click",function(e){return e.preventDefault(),t.sendAndNext()}),this.fieldEmail.on("focus",function(){return 0!==t.stage?t.changeStage(0):void 0}),this.fieldName.on("focus",function(){return 0===t.stage?t.sendAndNext():void 0})},t.prototype.sendAndNext=function(){return this.validateEmail()?(simpleCORSRequest({url:"http://catapult.gri.fo/orceria.com.br.php",method:"post",form:this.form}),this.nextStage()):!1},t.prototype.applyMessage=function(){var e;return $("#message").remove(),e=t.MESSAGES[this.stage],e?this.form.prepend('<div id="message">'+e+"</div>"):void 0},t.prototype.nextStage=function(){return this.stage<t.STAGES.length-1?this.changeStage(this.stage+1):void 0},t.prototype.changeStage=function(e){return this.stage=e,this.applyMessage(),this.form[0].className=t.STAGES[this.stage],2===this.stage?$("body").scrollTop(-200):void 0},t.prototype.validateEmail=function(){var t;return t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.fieldEmail.val()),this.fieldEmail.toggleClass("invalid",!t),t||(this.fieldEmail[0].focus(),this.changeStage(0)),t},t}(),t.STAGES=["first","second","final"],t.MESSAGES=["","Seu e-mail foi cadastrado com sucesso","Obrigado por nos ajudar a conhecer você melhor.<br>Enviaremos em breve um e-mail com mais informações."],new t,$(document).on("click",'a[rel="external"]',function(t){return t.preventDefault(),window.open(this.href)}),simpleAsyncLoad({http:"http://www.google-analytics.com/ga.js",ssl:"https://ssl.google-analytics.com/ga.js"}),simpleAsyncLoad("http://w.sharethis.com/button/buttons.js",function(){return stLight.options({publisher:"ur-5ea22d2-5f60-7b40-65dc-7ebbf9f8773b",popup:!0,shorten:!1})})}.call(this);