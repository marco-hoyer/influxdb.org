/* 
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(t){"use strict";function e(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):void 0}function n(t,e){var n,i;for(n=0,i=t.length;i>n;n++)if(t[n]===e)return!0;return!1}function i(t,e){var n;t.createTextRange?(n=t.createTextRange(),n.move("character",e),n.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function s(t,e){try{return t.type=e,!0}catch(n){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:n,moveCaret:i,changeType:s}}}(this),function(t){"use strict";function e(){}function n(t){var e;return t.value===t.getAttribute(D)&&"true"===t.getAttribute($)?(t.setAttribute($,"false"),t.value="",t.className=t.className.replace(A,""),e=t.getAttribute(O),e&&(t.type=e),!0):!1}function i(t){var e,n=t.getAttribute(D);return""===t.value&&n?(t.setAttribute($,"true"),t.value=n,t.className+=" "+F,e=t.getAttribute(O),e?t.type="text":"password"===t.type&&B.changeType(t,"text")&&t.setAttribute(O,"password"),!0):!1}function s(t,e){var n,i,s,r,o;if(t&&t.getAttribute(D))e(t);else for(n=t?t.getElementsByTagName("input"):p,i=t?t.getElementsByTagName("textarea"):g,o=0,r=n.length+i.length;r>o;o++)s=o<n.length?n[o]:i[o-n.length],e(s)}function r(t){s(t,n)}function o(t){s(t,i)}function a(t){return function(){m&&t.value===t.getAttribute(D)&&"true"===t.getAttribute($)?B.moveCaret(t,0):n(t)}}function c(t){return function(){i(t)}}function l(t){return function(e){return y=t.value,"true"===t.getAttribute($)&&y===t.getAttribute(D)&&B.inArray(S,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function u(t){return function(){var e;"true"===t.getAttribute($)&&t.value!==y&&(t.className=t.className.replace(A,""),t.value=t.value.replace(t.getAttribute(D),""),t.setAttribute($,!1),e=t.getAttribute(O),e&&(t.type=e)),""===t.value&&(t.blur(),B.moveCaret(t,0))}}function d(t){return function(){t===document.activeElement&&t.value===t.getAttribute(D)&&"true"===t.getAttribute($)&&B.moveCaret(t,0)}}function f(t){return function(){r(t)}}function h(t){t.form&&(C=t.form,C.getAttribute(M)||(B.addEventListener(C,"submit",f(C)),C.setAttribute(M,"true"))),B.addEventListener(t,"focus",a(t)),B.addEventListener(t,"blur",c(t)),m&&(B.addEventListener(t,"keydown",l(t)),B.addEventListener(t,"keyup",u(t)),B.addEventListener(t,"click",d(t))),t.setAttribute(z,"true"),t.setAttribute(D,_),i(t)}var p,g,m,v,y,b,x,_,w,C,T,k,E,N=["text","search","url","tel","email","password","number","textarea"],S=[27,33,34,35,36,37,38,39,40,8,46],j="#ccc",F="placeholdersjs",A=new RegExp("(?:^|\\s)"+F+"(?!\\S)"),D="data-placeholder-value",$="data-placeholder-active",O="data-placeholder-type",M="data-placeholder-submit",z="data-placeholder-bound",L="data-placeholder-focus",H="data-placeholder-live",P=document.createElement("input"),q=document.getElementsByTagName("head")[0],R=document.documentElement,I=t.Placeholders,B=I.Utils;if(I.nativeSupport=void 0!==P.placeholder,!I.nativeSupport){for(p=document.getElementsByTagName("input"),g=document.getElementsByTagName("textarea"),m="false"===R.getAttribute(L),v="false"!==R.getAttribute(H),b=document.createElement("style"),b.type="text/css",x=document.createTextNode("."+F+" { color:"+j+"; }"),b.styleSheet?b.styleSheet.cssText=x.nodeValue:b.appendChild(x),q.insertBefore(b,q.firstChild),E=0,k=p.length+g.length;k>E;E++)T=E<p.length?p[E]:g[E-p.length],_=T.attributes.placeholder,_&&(_=_.nodeValue,_&&B.inArray(N,T.type)&&h(T));w=setInterval(function(){for(E=0,k=p.length+g.length;k>E;E++)T=E<p.length?p[E]:g[E-p.length],_=T.attributes.placeholder,_&&(_=_.nodeValue,_&&B.inArray(N,T.type)&&(T.getAttribute(z)||h(T),(_!==T.getAttribute(D)||"password"===T.type&&!T.getAttribute(O))&&("password"===T.type&&!T.getAttribute(O)&&B.changeType(T,"text")&&T.setAttribute(O,"password"),T.value===T.getAttribute(D)&&(T.value=_),T.setAttribute(D,_))));v||clearInterval(w)},100)}I.disable=I.nativeSupport?e:r,I.enable=I.nativeSupport?e:o}(this);