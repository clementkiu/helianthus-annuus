﻿/*
    Copyright (C) 2008  向日

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @name Helianthus.annuus
// @namespace http://code.google.com/p/helianthus-annuus/
// @description by 向日
// @version 3.5.1.183
// @build-time 2009-11-03 20:03:46
// @include http://forum*.hkgolden.com/*
// @run-at document-start
// ==/UserScript==

(function()
{

var window = typeof unsafeWindow != 'undefined' ? unsafeWindow : this;
var document = window.document;
var navigator = window.navigator;
var JSON = window.JSON || {};
var jQuery;
var AN = window.AN = { mod: {}, version: '3.5.1.183' };

if(document.body && document.body.firstChild.className == 'webkit-line-gutter-backdrop') return;

document.domain = 'hkgolden.com';
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=window,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

jQuery = $ = window.jQuery.noConflict();

if($.browser.mozilla && typeof unsafeWindow != 'undefined') jQuery.isReady = true;
// (v)sprintf by Sabin Iacob
(function(d){var a={"%":function(e){return"%"},b:function(e){return parseInt(e,10).toString(2)},c:function(e){return String.fromCharCode(parseInt(e,10))},d:function(e){return parseInt(e,10)?parseInt(e,10):0},u:function(e){return Math.abs(e)},f:function(f,e){return(e>-1)?Math.round(parseFloat(f)*Math.pow(10,e))/Math.pow(10,e):parseFloat(f)},o:function(e){return parseInt(e,10).toString(8)},s:function(e){return e},x:function(e){return(""+parseInt(e,10).toString(16)).toLowerCase()},X:function(e){return(""+parseInt(e,10).toString(16)).toUpperCase()}};var c=/%(?:(\d+)?(?:\.(\d+))?|\(([^)]+)\))([%bcdufosxX])/g;var b=function(f){if(f.length==1&&typeof f[0]=="object"){f=f[0];return function(i,h,k,j,g,m,l){return a[g](f[j])}}else{var e=0;return function(i,h,k,j,g,m,l){return a[g](f[e++],k)}}};d.extend({sprintf:function(f){var e=Array.apply(null,arguments).slice(1);return f.replace(c,b(e))},vsprintf:function(f,e){return f.replace(c,b(e))}})})(jQuery);

// json2.js from http://www.json.org/js.html
(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();

AN.mod['Ajax Integrator'] = { ver: 'N/A', author: '向日', fn: {

'b17a0463-e46c-4420-a8f5-f169fac20aec':
{
	desc: 'AJAX化頁面讀取',
	page: { 32: true },
	type: 7,
	options:
	{
		bCheckOnBottom: { desc: '到頁底自動更新帖子', defaultValue: true, type: 'checkbox' },
		nCheckInterval: { desc: '自動更新間隔(秒)', defaultValue: 30, type: 'text' },
		bAddCheckBtn: { desc: '加入更新帖子按扭', defaultValue: true, type: 'checkbox' },
		bAppendReplies: { desc: '延展帖子回覆', defaultValue: false, type: 'checkbox' },
		bAjaxifyReplying: { desc: 'AJAX化回覆', defaultValue: true, type: 'checkbox' },
		bShowPageNo: { desc: '顯示資料: 本頁頁數', defaultValue: true, type: 'checkbox' }
	},
	once: function(jDoc)
	{
		jDoc.defer(1, '移除原有轉頁功能', function()
		{
			window.changePage = $.blank;
		});

		var handlePage = function(jScope)
		{
			var jPageBoxes = $('select[name=page]', jScope).up('table');

			oPages[nCurPageNo] =
			{
				jDiv: $('.repliers:first', jScope).up('div'),
				jEndTable: jPageBoxes.eq(1).up('table', 3).prev(),
				jPageBoxes: jPageBoxes
			};

			if(!oPages.nLastest || oPages.nLastest < nCurPageNo)
			{
				oPages.nLastest = nCurPageNo;
			}

			jPageBoxes.find('a').click(getPage);
			jPageBoxes.find('select').data('an-pageNo', nCurPageNo).change(getPage);
		};

		var getPage = function(event)
		{
			AN.shared('log', '正在準備轉頁...');
			if(event) event.preventDefault();
			toggleTimer(false);

			var handleLeftOver = function(jDiv)
			{
				if(!AN.util.getOptions('bAppendReplies')) oPages[nCurPageNo].jDiv.hide();
				if(event) (jDiv || oPages[nTargetPageNo].jDiv)[0].scrollIntoView();
				$('#an-info-curpage').text($.sprintf('第%s頁', nTargetPageNo)).attr('href', AN.util.getURL({ page: nTargetPageNo }));
				nCurPageNo = nTargetPageNo;
			};

			var nTargetPageNo;
			if(!event)
			{
				nTargetPageNo = nCurPageNo + 1;
			}
			else
			{
				var jThis = $(this);

				if(jThis.is('a'))
				{
					nTargetPageNo = AN.util.getPageNo(this.href) * 1;
				}
				else
				{
					nTargetPageNo = jThis.val() * 1;

					// this is to workaround a Google Chrome problem
					var jTemp = $('<span></span>');
					jThis.after(jTemp).insertAfter(jTemp);
					jTemp.remove();

					jThis.val(jThis.data('an-pageNo'));
				}
			}

			if(oPages[nTargetPageNo])
			{
				AN.shared('log2', '正從快取中讀取資料...');
				oPages[nTargetPageNo].jDiv.show();
				handleLeftOver();
				AN.shared('log', '轉頁完成');
				getReplies();
			}
			else
			{
				AN.shared('log2', $.sprintf('正在讀取第%s頁...', nTargetPageNo));
				$.getDoc(AN.util.getURL({ page: nTargetPageNo }), function(jNewDoc)
				{
					var jNewDiv = jNewDoc.find('.repliers:first').up('div');
					//if(!jNewDiv.length) return AN.shared('log', '下一頁找不到回覆, 可能是本帖部份回覆被刪所致');
					jNewDiv.children(':last').prev('table').andSelf().remove(); // quick reply

					if(nTargetPageNo > oPages.nLastest)
					{
						jNewDiv.insertAfter(oPages[oPages.nLastest].jDiv);
					}
					else
					{
						for(var sPage=1; sPage<=oPages.nLastest; sPage++)
						{
							if(oPages[sPage] && nTargetPageNo < sPage)
							{
								jNewDiv.insertBefore(oPages[sPage].jDiv);
								break;
							}
						}
					}

					handleLeftOver(jNewDiv);
					handlePage(jNewDiv);

					AN.shared('log', '轉頁完成');
					AN.modFn.execMods(jNewDiv);

					toggleTimer(true, false);
				});
			}
		};

		var getReplies = function(bGetNext)
		{
			toggleTimer(false);

			if(oPages[nCurPageNo].jPageBoxes.eq(0).find('option:selected').next().length)
			{
				if(AN.util.getOptions('bAppendReplies') && bGetNext && !oPages[nCurPageNo + 1]) getPage(null);
				return;
			}

			if(nCurPageNo == 21)
			{
				AN.shared('log', '1001!');
				return;
			}

			AN.shared('log', '正在讀取最新回覆...');
			$.getDoc(AN.util.getURL({ page: nCurPageNo }), function(jNewDoc)
			{
				var jNewReplies = jNewDoc.find('.repliers').up('table');

				if(!jNewReplies.length)
				{
					AN.shared('log', '回覆讀取失敗!');
				}
				else
				{
					jNewReplies = jNewReplies.filter($.sprintf(':gt(%s)', oPages[nCurPageNo].jDiv.find('.repliers').length - 1));
					var nNew = jNewReplies.length;

					if(nNew) // has new replies
					{
						oPages[nCurPageNo].jDiv.find('strong:first').text(jNewDoc.find('strong:first').text());

						jNewReplies.each(function()
						{
							oPages[nCurPageNo].jEndTable.before($(this).add($(this).next()));
						});
						AN.shared('log', $.sprintf('加入%s個新回覆', nNew));
					}

					if(oPages[nCurPageNo].jPageBoxes.eq(0).find('option').length != jNewDoc.find('select[name=page]:first').children().length) // has nextpage
					{
						oPages[nCurPageNo].jPageBoxes.replaceWith(jNewDoc.find('select[name=page]:first').up('table'));
						handlePage(oPages[nCurPageNo].jDiv);
						AN.shared('log', '發現下一頁, 連結建立');
						AN.modFn.execMods(oPages[nCurPageNo].jPageBoxes.add(jNewReplies));
						if(bGetNext && AN.util.getOptions('bAppendReplies')) getPage(null);
						return;
					}

					if(nNew) AN.modFn.execMods(jNewReplies);
					else AN.shared('log', '沒有新回覆');
				}

				toggleTimer(true, true);
			});
		}

		var checkBottom = function()
		{
			var nDifference = oPages[nCurPageNo].jDiv.offset().top + oPages[nCurPageNo].jDiv.height() - $().scrollTop() - $.winHeight();
			if(nDifference < 500 && nDifference > -500)
			{
				getReplies(true);
			}
			else
			{
				tCheck = setTimeout(arguments.callee, 500);
			}
		};

		var toggleTimer = function(bToSet, bDeferCheck)
		{
			if(!AN.util.getOptions('bCheckOnBottom') || oPages[nCurPageNo + 1]) return;

			if(bToSet)
			{
				if(!bDeferCheck) return checkBottom();

				var nRemain = nInterval;
				(function()
				{
					if(nRemain < 0) return checkBottom();

					$('#an-info-ajaxtimer').html(nRemain-- + '秒');
					tCheck = setTimeout(arguments.callee, 1000);
				})();
			}
			else
			{
				clearTimeout(tCheck);
				$('#an-info-ajaxtimer').html('N/A');
			}
		};

		var nCurPageNo = jDoc.pageNo();
		var oPages = {};
		var tCheck;

		var nInterval = AN.util.getOptions('nCheckInterval');
		if(nInterval < 30) nInterval = 30;

		handlePage();
		$('#newmessage,#ctl00_ContentPlaceHolder1_QuickReplyLoginTable').insertAfter(oPages[nCurPageNo].jDiv);

		if(AN.util.getOptions('bCheckOnBottom'))
		{
			AN.shared('addInfo', '距離更新: <span id="an-info-ajaxtimer">N/A</span>');
			toggleTimer(true, false);
		}

		if(AN.util.getOptions('bAddCheckBtn')) jDoc.defer(2, '加入讀取按扭', function(){ AN.shared('addButton', '更新帖子', function(){ getReplies(true); }); });
		if(AN.util.getOptions('bShowPageNo')) AN.shared('addInfo', $.sprintf('本頁頁數: <a id="an-info-curpage" href="%s">第%s頁</a>', location.href, nCurPageNo));
		if(AN.util.getOptions('bAjaxifyReplying'))
		{
			$('#aspnetForm')[0].onsubmit = function() // jQuery submit function just wont work when triggering the click event of the submit btn
			{
				toggleTimer(false);
				AN.shared('log', '正在發送回覆...');
				$.post(location.href, $('#aspnetForm').serialize() + '&ctl00%24ContentPlaceHolder1%24btn_Submit.x=0&ctl00%24ContentPlaceHolder1%24btn_Submit.y=0', function(sHTML)
				{
					if($.doc(sHTML).pageName() != 'view') return AN.shared('log', '回覆發送失敗!');

					$('#ctl00_ContentPlaceHolder1_messagetext').val('');
					$('#previewArea').empty();
					AN.shared('log', '回覆發送完成');
					getReplies();
				});

				return false;
			};
		}
	}
},

'bc2521cd-cf65-4cc5-ac9d-4fedef3c3a97':
{
	desc: 'AJAX式列表更新',
	page: { 4: true },
	type: 7,
	options:
	{
		//bAjaxifyPageChange_T: { desc: 'AJAX化轉頁', defaultValue: true, type: 'checkbox' },
		nNumOfTopicPage: { desc: '列表顯示數量', defaultValue: 1, type: 'text' },
		bAddGetBtn_T: { desc: '加入更新列表按扭', defaultValue: true, type: 'checkbox' },
		bAutoRefresh_T: { desc: '預設啟用自動更新', defaultValue: false, type: 'checkbox' },
		bAddToggleAutoBtn_T: { desc: '加入切換自動更新按扭', defaultValue: false, type: 'checkbox' },
		nRefreshInterval_T: { desc: '自動更新間隔(秒)', defaultValue: 30, type: 'text' }
	},
	once: function(jDoc)
	{
		var refreshTopics = function(nPage)
		{
			clearTimeout(tRefresh);

			if(isNaN(nPage) || nPage < 1)
			{
				nPage = 1;
				AN.shared('log', '正在讀取最新列表...');
			}

			$.getDoc(AN.util.getURL({ page: nPage }), function(jNewDoc)
			{
				var jNewTbody = jNewDoc.topics().jTbody;
				var jTopicTable = $().topicTable();
				
				if(nPage == 1) jTopicTable.empty();
				jTopicTable.append(jNewTbody);

				if(nPage == AN.util.getOptions('nNumOfTopicPage'))
				{
					AN.modFn.execMods($(document).topicTable());
					AN.shared('log', '列表更新完成');

					if(bAutoRefresh)
					{
						AN.shared('log2', $.sprintf('%s秒後再次重新整埋....', nInterval));
						setNextRefresh();
					}
				}
				else
				{
					refreshTopics(nPage + 1);
				}
			});
		};

		var setNextRefresh = function()
		{
			tRefresh = setTimeout(refreshTopics, nInterval * 1000);
		};

		if(AN.util.getOptions('bAddGetBtn_T')) jDoc.defer(2, '加入更新按扭', function(){ AN.shared('addButton', '更新列表', refreshTopics); });

		var tRefresh;
		var bAutoRefresh = AN.util.getOptions('bAutoRefresh_T');
		var nInterval = AN.util.getOptions('nRefreshInterval_T');
		if(nInterval < 30) nInterval = 30;

		if(bAutoRefresh) setNextRefresh();
		if(AN.util.getOptions('bAddToggleAutoBtn_T')) AN.shared('addButton', '切換自動更新', function()
		{
			if(bAutoRefresh)
			{
				clearTimeout(tRefresh);
				AN.shared('log', '已停用自動更新');
			}
			else
			{
				setNextRefresh();
				AN.shared('log', '已啟用自動更新');
			}
			bAutoRefresh = !bAutoRefresh;
		});
	}
}

}};
AN.mod['Kernel'] = { ver: 'N/A', author: '向日', fn: {

'Kernel_Initializer':
{
	desc: '初始化',
	page: { 65535: 'comp' },
	type: 1,
	once: function(jDoc)
	{
		if(!$('head').length) $('html').prepend(document.createElement('head')); // chrome

		$.ajaxSetup(
		{
			cache: false,
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		});

		var AN_VER = '3.5b';
		
		if(AN.util.data('AN-version') != AN_VER)
		{
			if(AN.util.data('AN-version'))
			{
				AN.util.storage(null);
				AN.util.data('AN-version', AN_VER);
				alert('由於內核改動, 所有設定已被重設.\n不便之處, 敬請原諒.');
				return location.reload();
			}
			
			AN.util.data('AN-version', AN_VER);
		}

		if($().pageName() == 'view') $('select[name=page]').val(AN.util.getPageNo(location.href)); // for FF3 where select box does not reset
	}
},

'a599dafa-b550-4b28-921a-019c72f481e5':
{
	desc: '除錯模式 [除錯按扭、更準確評測結果等]',
	page: { 65535: false },
	type: 1,
	once: function(jDoc)
	{
		AN.box.debugMode = true;

		AN.util.addStyle('');
		AN.util.getOptions();
		AN.util.getOptions.oOptions['bAutoShowLog'] = true;
		AN.util.getOptions.oOptions['bShowDetailLog'] = true;

		if($().pageCode() & 92)
		{
			jDoc.topics();
		}
		else if($().pageName() == 'view')
		{
			jDoc.replies();
		}

		jDoc.defer(1, '加入啟動Firebug Lite的按扭', function()
		{
			AN.shared('addButton', '啟動Firebug Lite', function()
			{
				$.getScript('http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js', function()
				{
					window.firebug.init();
				});
			});
		});
	}
},

'12c98ebc-873c-4636-a11a-2c4c6ce7d4c2':
{
	desc: '設定內核樣式',
	page: { 65535: 'comp' },
	type: 2,
	options:
	{
		sUIFontColor: { desc: 'UI主顏色', defaultValue: '#808080', type: 'text' },
		sUIHoverColor: { desc: 'UI連結懸浮顏色', defaultValue: '#9ACD32', type: 'text' },
		sMainFontColor: { desc: '論壇主要字體顏色', defaultValue: '#000000', type: 'text' },
		sMainBorderColor: { desc: '論壇主要邊框顏色', defaultValue: '#000000', type: 'text' },
		sSecBorderColor: { desc: '論壇次要邊框顏色', defaultValue: '#CCCCCC', type: 'text' },
		sMainBgColor: { desc: '論壇主要背景顏色', defaultValue: '#FFFFFF', type: 'text' },
		sSecBgColor: { desc: '論壇次要背景顏色', defaultValue: '#F8F8F8', type: 'text' },
		sMainHeaderFontColor: { desc: '論壇標題字體顏色', defaultValue: '#FFFFFF', type: 'text' },
		sMainHeaderBgColor: { desc: '論壇標題背景顏色', defaultValue: '#336699', type: 'text' }
	},
	once: function()
	{
		AN.util.stackStyle($.sprintf(' \
		#an, #an legend { color: %(sMainFontColor)s; } \
		\
		.an-forum, .an-forum textarea { background-color: %(sSecBgColor)s; } \
		.an-forum input[type="text"], .an-forum select { background-color: %(sMainBgColor)s; border: 1px solid %(sMainBorderColor)s; } \
		.an-forum, .an-forum h4, .an-forum div, .an-forum td, .an-forum dl, .an-forum dt, .an-forum dd, .an-forum ul, .an-forum li, .an-forum a, .an-forum fieldset, .an-forum hr { border: 0 solid %(sMainBorderColor)s; } \
		.an-forum * { color: %(sMainFontColor)s; } \
		.an-forum a { text-decoration: none; } \
		.an-forum a:hover { text-decoration: underline; } \
		.an-forum table { width: 100%; border-collapse: collapse; } \
		.an-forum td { line-height: 1.5em; padding: 0 0.2em; border-width: 1px; } \
		.an-forum-header[class], .an-forum thead td { color: %(sMainHeaderFontColor)s; background-color: %(sMainHeaderBgColor)s; } \
		.an-forum-header[class] { border-bottom-width: 1px; } \
		\
		.an-content-note, .an-content-line, .an-content-box { color: %(sUIFontColor)s; } \
		.an-content-note { margin-right: 2px; cursor: default; } \
		.an-content-line { font-size: 0.625em; font-style: italic; } \
		.an-content-box { display: inline-block; border: 1px solid; padding: 1px 2px; } \
		a.an-content-line, a.an-content-box { text-decoration: none !important; } \
		a.an-content-line:hover, a.an-content-box:hover { color: %(sUIHoverColor)s; } \
		',
		AN.util.getOptions()
		));
	}
},

'78af3c29-9bf2-47ee-80bf-a3575b711c73':
{
	desc: '自動檢查更新',
	defer: 5,
	page: { 4: true },
	type: 1,
	options:
	{
		bAlsoCheckBeta: { desc: '同時檢查Beta版本', defaultValue: false, type: 'checkbox' },
		nCheckUpdateInterval: { desc: '檢查更新間隔(小時)', defaultValue: 1, type: 'text' }
	},
	once: function()
	{
		var nInterval = AN.util.getOptions('nCheckUpdateInterval');
		if(isNaN(nInterval) || nInterval < 1) nInterval = 1;
		var nLastChecked = AN.util.data('nLastChecked') || 0;
		if($.time() - AN.util.data('nLastChecked') < 3600000 * nInterval) return;

		AN.util.getData('main', function(oMain)
		{
 			AN.util.data('nLastChecked', $.time());

			var sType = AN.util.getOptions('bAlsoCheckBeta') ? 'beta' : 'stable';
			
			if(oMain.ver[sType]['annuus'] === undefined) return;
			
			var aLastest = oMain.ver[sType]['annuus'].split('.');
			var aCurrent = AN.version.split('.');

			for(var i=0; i<aToCheck.length; i++)
			{
				if(aCurrent[i] != aLastest[i])
				{
					if(aCurrent[i] < aLastest[i] && confirm('發現新版本!\n按確定進行更新'))
					{
						var sPrefix = 'http://helianthus-annuus.googlecode.com/svn/dist/v3/' + sType;
						
						if(navigator.userAgent.indexOf('MAXTHON 2.0') != -1) window.open(sPrefix + '/annuus.m2f', '_self');
						else if($.browser.mozilla && typeof unsafeWindow != 'undefined') window.open(sPrefix + '/user/annuus.user.js', '_self');
						else if(navigator.userAgent.indexOf('Chrome') == -1) window.open(sPrefix + '/annuus.crx', '_self');
						
						window.open('http://code.google.com/p/helianthus-annuus/wiki/Changelog', '_blank');
					}
					
					break;
				}
			}
		});
	}
},

'c217bf55-6d44-42d1-8fc2-2cd1662d604a':
{
	desc: '轉頁後再次運行功能',
	page: { 64: true },
	type: 1,
	once: function()
	{
		window.Profile_ShowGoogleAds = AN.modFn.execMods;
	}
},

'722b69f8-b80d-4b0e-b608-87946e00cfdc':
{
	desc: '強制鎖定闊度',
	page: { 124: true },
	type: 3,
	infinite: function()
	{
		AN.util.stackStyle(' \
		body { word-wrap: break-word; } \
		.repliers_right { overflow-x: hidden; table-layout: fixed; } \
		');
	}
},

'1b804b67-40ab-4750-8759-e63346d289ef':
{
	desc: '設定論壇浮動物件至最上層',
	page: { 65534: true },
	type: 4,
	infinite: function()
	{
		AN.util.stackStyle('.TransparentGrayBackground, .TransparentGrayBackground + * { z-index: 10; }');
	}
}

}};
AN.mod['Layout Designer'] = { ver: 'N/A', author: '向日', fn: {

'4bf6619f-2cd8-4aa2-a54a-e7d72wgs8603':
{
	desc: '修正改變搜尋列時可能造成的顯示錯誤',
	page: { 4: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.Topic_FunctionPanel { overflow: hidden; }');
	}
},

'5e173905-9c47-4f37-8d3f-4c31ea871115':
{
	desc: '隱藏頂部按扭',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopMenuBox { visibility: hidden; }');
	}
},

'7af1060d-d38c-40b9-b16b-df1bb799cb74':
{
	desc: '隱藏上方Logo列',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopBannerBox { display: none; }');
	}
},

'7ca54ba4-e2b7-489c-9adc-7ac7d62012f0':
{
	desc: '隱藏按扭列',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.TopMenuPanel + .PageWidthContainer { display: none; }');
	}
},

'd0164ba6-a5a2-4850-ab67-658b840fd3ef':
{
	desc: '隱藏繁簡轉換及分享這頁',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('\
		.PageMiddleFunctions { height: 5px; } \
		.PageMiddleFunctions > div { display: none; } \
		');
	}
},

'bbd5f176-c024-4684-ba98-b72da376a6eb':
{
	desc: '隱藏最底頁腳',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.FooterPanel { display: none; }');
	}
},

'5fd907ce-21dc-44b9-b280-3cb145c53c92':
{
	desc: '隱藏頁底空白',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.FooterPanel ~ br { display: none; }');
	}
},

'8c317615-b5e7-4b1a-a140-b7319c5b0a5b':
{
	desc: '隱藏Bookmark Bar',
	page: { 65534: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#hkg_bottombar { display: none; }');
	}
},

'd1dc862f-a7b3-4b29-a50f-440fc9c5fef0':
{
	desc: '縮短Bookmark Bar',
	page: { 65534: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#hkg_bottombar { width: auto; }');
	}
},

'02837e6a-3dd7-4c73-a155-90d6f6edd8f9':
{
	desc: '拉闊頁面',
	page: { 65534: false },
	type: 3,
	options: { nPageWidth: { desc: '頁面闊度 [可設定為auto, 80%, 1000px等]', defaultValue: 'auto', type: 'text' } },
	once: function()
	{
		AN.util.addStyle($.sprintf('\
		.PageWidthContainer { width: %s; } \
		table[width="99%"], table[width="800"], td[width="801"], td[width="792"] { width: 100%; } \
		#ctl00_ContentPlaceHolder1_ProfileForm td[width="8"] { display: none; } \
		',
		AN.util.getOptions('nPageWidth')
		));
	}
},

'8d53fef9-818f-46d1-99b8-5e199453b360':
{
	desc: '隱藏討論區資訊',
	page: { 28: false, 32:false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle({
			topics: '.ContentPanel',
			search: '#ctl00_ContentPlaceHolder1_topics_form',
			view: '#ctl00_ContentPlaceHolder1_view_form'
		}[$().pageName()] + ' > script:first-child + table { display: none; }');
	}
},

'b44ee3a6-950e-4b2a-b99a-399b6384bcce':
{
	desc: '隱藏搜尋列上下空白',
	page: { 28: false },
	type: 3,
	once: function()
	{
		if($().pageName() == 'topics')
			AN.util.stackStyle('.Topic_FunctionPanel { margin-top: 3px; }');
		else
			AN.util.stackStyle('\
			td[valign="bottom"] > br:first-child { display: none; } \
			td[valign="bottom"] > p { margin: 0; } \
			');
	}
},

'1ada74ac-9bae-47b2-914b-f1556dbab1a2':
{
	desc: '隱藏討論區選單',
	page: { 28: false },
	type: 3,
	once: function()
	{
		if($().pageName() == 'topics')
			AN.util.stackStyle('#forum_list, #forum_list + br { display: none; }');
		else
			AN.util.stackStyle('#ctl00_ContentPlaceHolder1_topics_form > div + table table:first-child { display: none; }');
	}
},

'4bf6619f-2cd8-4aa2-a54a-e7d7255e8603':
{
	desc: '隱藏熱門關鍵字',
	page: { 30: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_lb_HitSearchs { display: none; }');
	}
},

'a5d7f8f0-99fc-4aaf-8c65-373b17cfcf69':
{
	desc: '隱藏投票站連結(如有)',
	page: { 60: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_MiddleAdSpace1 { display: none; }');
	}
},

'f41e288e-cd1d-4649-a396-83d92d99ded8':
{
	desc: '隱藏紅人榜',
	page: { 4: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_HotPeoples, #ctl00_ContentPlaceHolder1_HotPeoples + br { display: none; }');
	}
},

'964d6cf5-9e46-43f6-ba1a-b11adf1292b1':
{
	desc: '隱藏高級會員頭像',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('img[alt="Logo"] { display: none; }');
	}
},

'9aebeb97-8507-4553-995d-0903dc764ec3':
{
	desc: '隱藏會員級別圖片',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('img[src^="labels/"] { display: none; }');
	}
},

'a0203b01-7565-46e1-a52e-260dd4d485a1':
{
	desc: '隱藏引用',
	page: { 32: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('.repliers_right blockquote { display: none; }');
	}
},

'26eaf7f8-d260-4b42-b6d9-08b235f56d43':
{
	desc: '隱藏引用原文連結',
	page: { 32: false },
	type: 3,
	options: { bCDROMMode: { desc: '同時隱藏快速引用連結及登入提示 [CD-ROM專用]', defaultValue: false, type: 'checkbox' } },
	once: function()
	{
		var sSelector = 'a[href^="post.aspx?mt=Y&rid="]';

		if(AN.util.getOptions('bCDROMMode'))
		{
			sSelector += ',a[href*="QuoteReply("],#ct100_ContentPlaceHolder1_QuickReplyLoginTable';
		}

		AN.util.stackStyle(sSelector + '{ display: none; }');
	}
},

'2c026f6b-f252-4a58-b2ac-706fcd052fb6':
{
	desc: '隱藏快速回覆組件',
	page: { 32: false },
	type: 3,
	options:
	{
		bRemNameRow: { desc: '隱藏名字列', defaultValue: false, type: 'checkbox' },
		bRemTopicRow: { desc: '隱藏主旨列', defaultValue: false, type: 'checkbox' },
		bRemClassicRow: { desc: '隱藏經典表情圖示列', defaultValue: false, type: 'checkbox' },
		bRemTempRow: { desc: '隱藏附加表情圖示列(如有)', defaultValue: false, type: 'checkbox' },
		bRemPreviewRow: { desc: '隱藏預覽列', defaultValue: false, type: 'checkbox' }
	},
	once: function()
	{
		if(!AN.util.isLoggedIn()) return;

		var jTbody = $('#ctl00_ContentPlaceHolder1_QuickReplyTable tbody:eq(2)');
		if(AN.util.getOptions('bRemNameRow')) jTbody.children('tr:eq(0)').hide();
		if(AN.util.getOptions('bRemTopicRow')) jTbody.children('tr:eq(1)').hide();
		if(AN.util.getOptions('bRemClassicRow')) jTbody.children('tr:eq(3)').hide();
		if(AN.util.getOptions('bRemTempRow') && jTbody.children().length > 5) jTbody.children('tr:eq(4)').next().andSelf().hide();
		if(AN.util.getOptions('bRemPreviewRow')) jTbody.children('tr:last').hide();
	}
},

'1e2a7c96-a096-4a45-9909-c196ddabc286':
{
	desc: '隱藏紅人榜記錄',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_UpdatePanelPM + br, #ctl00_ContentPlaceHolder1_HotPeoples { display: none; }');
	}
},

'c18ff3e6-b9fc-4786-95d6-1c1bc800172a':
{
	desc: '隱藏書籤',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_HotPeoples + br, #ctl00_ContentPlaceHolder1_BookmarkTable { display: none; }');
	}
},

'222f0c01-1ebd-49d6-b7f4-b1b7fc60ca40':
{
	desc: '隱藏起底列表',
	page: { 64: false },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('#ctl00_ContentPlaceHolder1_siteUpdateProgress + table { display: none; }');
	}
},

'e424fe8d-852b-4239-b797-6aa682e68c39':
{
	desc: '修正表格闊度',
	page: { 1024: true },
	type: 3,
	once: function()
	{
		AN.util.stackStyle('table[width="800"] { width: 100%; }');
	}
}

}};
AN.mod['Main Script'] = { ver: 'N/A', author: '向日', fn: {

// 佈局設定 //
'63d2407a-d8db-44cb-8666-64e5b76378a2':
{
	desc: '隱藏廣告',
	page: { 65535: true },
	type: 3,
	once: function()
	{
		$.each(
		{
			65535: '\
			#HKGTopAd { display: none; } \
			',
			// default
			2: '\
			#MainPageAd2, #MainPageAd2 ~ br, /* text ads */\
			#ctl00_ContentPlaceHolder1_MiddleAdSpace1, /* text ad */\
			.ContentPanel > div > div:first-child, /* flash ad */\
			#ctl00_ContentPlaceHolder1_lb_NewPM + br /* blank line */\
				{ display: none; } \
			',
			// topics
			4: '\
			.ContentPanel > table > tbody > tr > td + td /* flash ad */\
				{ display: none; } \
			/* inline ads, non-IE only */\
			#HotTopics tr:nth-child(11n+2) \
				{ display: none; } \
			.ContentPanel > table > tbody > tr > td:first-child, /* fix forumInfo width, IE only */\
			.ContentPanel > table /* fix forumInfo width */\
				{ width: 100% !important; } \
			',
			// search, tags
			24: '\
			#ctl00_ContentPlaceHolder1_lb_NewPM + br ~ br, /* forumInfo blanks */\
			#ctl00_ContentPlaceHolder1_topics_form > script:first-child + table td + td /* flash ad */\
				{ display: none; } \
			/* inline ads, non-IE only */\
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table tr:nth-child(11n+2), \
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table table tr:last-child \
				{ display: none; } \
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table table tr:last-child { display: none; } \
			#ctl00_ContentPlaceHolder1_topics_form > script:first-child + table td:first-child, /* fix forumInfo width, IE only */\
			#ctl00_ContentPlaceHolder1_topics_form > script:first-child + table /* fix forumInfo width */\
				{ width: 100% !important; } \
			',
			// topics, search, tags
			28: '\
			.Topic_ForumInfoPanel table td { padding-bottom: 5px; } /* forumInfo blanks */\
			.Topic_ForumInfoPanel tr:first-child + tr ~ tr { display: none; } /* 高登活動資訊 */\
			',
			// view
			32: '\
			#ctl00_ContentPlaceHolder1_view_form > script:first-child + table tr:first-child + tr ~ tr, /* 高登活動資訊 */\
			#ctl00_ContentPlaceHolder1_view_form > div[style*="99%"] table[width] > tbody > tr + tr + tr, /* top & bottom ads */\
			#ctl00_ContentPlaceHolder1_view_form > div[style*="99%"] > table[width="100%"] > tbody > tr + tr /* inline ads */\
				{ display: none; } \
			',
			// topics, search, tags, view
			60: '\
			#ctl00_ContentPlaceHolder1_MiddleAdSpace1 { margin-top: 5px !important; } \
			#ctl00_ContentPlaceHolder1_MiddleAdSpace1 > div { padding: 0 !important; } \
			#ctl00_ContentPlaceHolder1_MiddleAdSpace1 div[style*="right"] { display: none; } /* text ad */\
			',
			// profilepage
			64: '\
			.main_table1 tr { display: none; } /* inline ads */\
			.main_table1 tr[style], .main_table1 tr:first-child, #ctl00_ContentPlaceHolder1_ProfileForm > table > tbody > tr > td > table:first-child .main_table1 tr { display: table-row; } \
			'
		},
		function(nPageCode){ $().pageCode() & nPageCode && AN.util.stackStyle(this); });

		if($.browser.msie && $().pageCode() & 28)
		{
			AN.util.stackStyle($().pageName() == 'topics'
			?
			'\
			#HotTopics tr:first-child+tr, \
			#HotTopics tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr, \
			#HotTopics tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr, \
			#HotTopics tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr \
				{ display: none; } \
			'
			:
			'\
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table tr:first-child+tr, \
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr, \
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr, \
			#ctl00_ContentPlaceHolder1_topics_form > div + table + table tr:first-child+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr+tr, \
			td[height="52"] \
				{ display: none; } \
			'
			);
		}
	}
},

// 修正修改 //
'11f1c5ca-9455-4f8e-baa7-054b42d9a2c4':
{
	desc: '自動轉向正確頁面',
	page: { 2: true },
	type: 4,
	once: function()
	{
		if(document.referrer.indexOf('/login.aspx') > 0) location.replace('/topics.aspx?type=BW');
		else if(!location.pathname.match(/^\/(?:default.aspx)?$/i)) location.reload();
	}
},

'b7ef89eb-1190-4466-899a-c19b3621d6b1':
{
	desc: 'Opera: 修正無法使用Enter搜尋的錯誤',
	page: { 30: $.browser.opera || 'disabled' },
	type: 4,
	once: function()
	{
		$('#aspnetForm').submit(function(event)
		{
			event.preventDefault();
		});
	}
},

'2d4e139c-224c-44fb-824e-606170276c76':
{
	desc: 'IE: 修正用戶名稱搜尋連結',
	page: { 92: $.browser.msie || 'disabled' },
	type: 4,
	infinite: function(jDoc)
	{
		jDoc.topics().jNameLinks.each(function()
		{
			this.href = '/search.aspx?st=A&searchstring=' + escape($(this).html());
		});
	}
},

/*
'c2d9eedb-bb6c-4cb4-be11-ea2ec9612f63':
{
	desc: '修正底部的論壇功能',
	page: { 28: true },
	type: 4,
	once: function()
	{
		$('select').filter(function(){ return /^(?:page|md|mt)$/.test(this.name); }).change(function(event)
		{
			event.stopImmediatePropagation();

			var oParam = {};
			oParam[this.name] = $(this).val();
			location.assign(AN.util.getURL(oParam));
		});
	}
},
*/

'0293c9da-468f-4ed5-a2d7-ecb0067e713f':
{
	desc: '去除引用半透明',
	page: { 32: !$.browser.msie || 'disabled' },
	type: 4,
	once: function()
	{
		AN.util.stackStyle('blockquote { opacity: 1 !important; }');
	}
},

'd563af32-bd37-4c67-8bd7-0721c0ab0b36':
{
	desc: '優化頁數跳轉連結地址',
	page: { 32: true },
	type: 4,
	once: function()
	{
		window.changePage = function(nPageNo)
		{
			var sPage = (nPageNo) ? ('&page=' + nPageNo) : '';
			var sHighlight = (window.highlight_id) ? ('&highlight_id=' + window.highlight_id) : '';
			location.assign($.sprintf('/view.aspx?message=%s%s%s', window.messageid, sPage, sHighlight));
		};
	},
	infinite: function(jDoc)
	{
		jDoc.find('select[name=page]').up('tr').find('a').each(function()
		{
				this.href = this.href.replace(/&(?:page=1(?!\d)|highlight_id=0)/g, '');
		});
	}
},

'b6b232c8-1f26-449e-bb0d-2b7826bf95ef':
{
	desc: '優化圖片縮放',
	page: { 32: true },
	type: 4,
	once: function(jDoc)
	{
		window.DrawImage = $.blank;

		AN.util.stackStyle('img[onLoad] { width: auto; height: auto; max-width: 100% }');
	}
},

'52ebe3d3-bf98-44d2-a101-180ec69ce290':
{
	desc: '移除帖子連結高亮部份',
	page: { 64: false },
	type: 4,
	infinite: function(jDoc)
	{
		jDoc.topics().jTitleCells.find('a').each(function()
		{
				this.href = this.href.replace(/&highlight_id=\d+/, '');
		});
	}
},

'87a6307e-f5c2-405c-8614-af60c85b101e':
{
	desc: '搜尋開新頁',
	page: { 4: false, 24: false },
	type: 4,
	once: function()
	{
		window.Search = function()
		{
			var sType = $('#st').val(); // $('#st option:selected')[0].value;
			var sQuery = escape($('#searchstring').val());
			
			window.open(sType == 'tag' ? 'tags.aspx?tagword='.concat(sQuery) : $.sprintf('search.aspx?st=%s&searchstring=%s', sType, sQuery), '_blank');
			
			$('#searchstring').val('');
		};
	}
},

'a93f1149-d11b-4b72-98dd-c461fd9ee754':
{
	desc: '連結開新頁',
	page: { 4: false, 24: false, 64: false },
	type: 4,
	options: { bTopicLinksOnly: { desc: '只限帖子連結', defaultValue: false, type: 'checkbox' } },
	infinite: function(jDoc)
	{
		if(AN.util.getOptions('bTopicLinksOnly'))
		{
			jDoc.topics().jTitleCells.find('a').attr('target', '_blank');
		}
		else
		{
			$('#aspnetForm a').filter(function(){ return /(?:ProfilePage|newmessages|view|search)\.aspx/.test(this.href); }).attr('target', '_blank');
		}
	}
},

'2ab2f404-0d35-466f-98a5-c88fdbdaa031':
{
	desc: '外鏈連結開新頁',
	defer: 1, // after links are created
	page: { 32: true },
	type: 4,
	infinite: function(jDoc)
	{
		jDoc.replies().jContents.find('a').attr('target', '_blank');
	}
},

'6e978310-e87b-4043-9def-076a13377c19':
{
	desc: '更換favicon(小丑icon) [部份瀏覽器無效]',
	page: { 65534: false },
	type: 4,
	once: function()
	{
		$('head').append('<link rel="shortcut icon" href="http://helianthus-annuus.googlecode.com/svn/other/hkg.ico" />');
	}
},

'e54d5c5f-47ae-4839-b4e8-6fc3733edfef':
{
	desc: '改進公司模式(假扮為Google)',
	page: { 65534: true },
	type: 4,
	once: function()
	{
		if(AN.util.cookie('companymode') == 'Y')
		{
			$('head').append('<link rel="shortcut icon" href="http://www.google.com/favicon.ico" />');
			document.title = 'Google';
		}
	}
},

// 加入物件 //
'231825ad-aada-4f5f-8adc-5c2762c1b0e5':
{
	desc: '顯示資料: 樓主名稱',
	page: { 32: false },
	type: 5,
	once: function(jDoc)
	{
		AN.util.getOpenerInfo(jDoc, function(oInfo)
		{
			AN.shared('addInfo', $.sprintf('樓主: <a target="_blank" href="/ProfilePage.aspx?userid=%s">%s</a>', oInfo.sId, oInfo.sName));
		});
	}
},

'9e181e79-153b-44d5-a482-5ccc6496a172':
{
	desc: '顯示資料: 累計在線時間',
	page: { 65534: false },
	type: 5,
	once: function()
	{
		var nLastOnTime = AN.util.data('nLastOnTime');
		var nCumulatedTime = AN.util.data('nCumulatedTime') || 0;

		if(nLastOnTime)
		{
			var nDifference = $.time() - nLastOnTime;
			nCumulatedTime += (nDifference >= 120000) ? 120000 : nDifference;
		}

		var sCumulated;
		if(nCumulatedTime > 86400000)
		{
			sCumulated = (nCumulatedTime / 86400000).toFixed(2) + ' days';
		}
		else if(nCumulatedTime > 3600000)
		{
			sCumulated = (nCumulatedTime / 3600000).toFixed(2) + ' hours';
		}
		else
		{
			sCumulated = (nCumulatedTime / 60000).toFixed(2) + ' minutes';
		}

		AN.shared('addInfo', $.sprintf('在線時間: %s', sCumulated));

		AN.util.data('nLastOnTime', $.time());
		AN.util.data('nCumulatedTime', nCumulatedTime);
	}
},

'f47e77c8-6f1a-43b2-8493-f43de222b3b4':
{
	desc: '加入伺服器狀態顯示按扭',
	page: { 65534: true },
	type: 5,
	once: function()
	{
		AN.shared('addButton', '伺服器狀態', AN.shared.serverTable);
	}
},

'7de28ca9-9c44-4949-ad4a-31f38a984715':
{
	desc: '加入一鍵留名按扭',
	page: { 32: false },
	type: 5,
	options: { sLeaveNameMsg: { desc: '回覆內容', defaultValue: '留名', type: 'text' } },
	once: function()
	{
		if(!AN.util.isLoggedIn()) return;

		AN.shared('addButton', '一鍵留名', function()
		{
			$('#ctl00_ContentPlaceHolder1_messagetext').val(AN.util.getOptions('sLeaveNameMsg'));
			$('#ctl00_ContentPlaceHolder1_btn_Submit').click();
		});
	}
},

'69260bc4-4f43-4dda-ba0f-87ba804a866c':
{
	desc: '加入同步登入所有server的按扭',
	page: { 65534: false },
	type: 5,
	once: function()
	{
		AN.shared('addButton', '登入所有server', function()
		{
			var sEmail, sPass;
			if(!(sEmail = prompt('請輸入電郵地址', ''))) return;
			if(!(sPass = prompt('請輸入密碼', ''))) return;

			var login = function()
			{
				var doc = this.contentWindow.document;
				var jThis = $(this);

				if(!doc.getElementById('aspnetForm')) // error page
				{
					jThis.remove();
					return;
				}

				var $ = this.contentWindow.AN.jQuery;

				$('#ctl00_ContentPlaceHolder1_txt_email').val(sEmail);
				$('#ctl00_ContentPlaceHolder1_txt_pass').val(sPass);

				$.post('login.aspx', $('#aspnetForm').serialize() + '&ctl00%24ContentPlaceHolder1%24linkb_login=', function()
				{
					jThis.remove();
				});
			};

			var sHTML = '';
			for(var i=1; i<=8; i++)
			{
				sHTML += '<iframe style="display: none;"></iframe>';
			}

			$(sHTML)
			.appendTo('#an')
			.each(function(i)
			{
				this.src = $.sprintf('http://forum%s.hkgolden.com/login.aspx', i + 1);
			})
			.load(login);

			AN.shared('log', '登入各伺服器中, 請稍候...');

			setTimeout(function()
			{
				alert('登入完成! (部份伺服器有可能因連線問題無法登入)\n\n點擊確定重新整理頁面.');
				location.reload();
			}, 10000);
		});
	}
},

'aad1f3ac-e70c-4878-a1ef-678539ca7ee4':
{
	desc: '加入前往吹水台的快速連結',
	page: { 65534: true },
	type: 5,
	once: function()
	{
		//if($().pageName() == 'topics') return;
		AN.shared('addLink', '吹水台', '/topics.aspx?type=BW', 1);
	}
},

'd0d76204-4033-4bd6-a9a8-3afbb807495f':
{
	desc: '加入前往最頂/底的按扭',
	page: { 32: true },
	type: 5,
	once: function()
	{
		AN.shared('addLink', '最頂', function(){ scrollTo(0,0); }, 0);
		AN.shared('addLink', '最底', function(){ $('body')[0].scrollIntoView(false); }, 2);
	}
},

'b78810a2-9022-43fb-9a9b-f776100dc1df':
{
	desc: '加入樓層編號',
	page: { 32: true },
	type: 5,
	infinite: function(jDoc)
	{
		var nCurPageNo = jDoc.pageNo();
		var nFloor = ((nCurPageNo == 1) ? 0 : 50 * (nCurPageNo - 1) + 1) + jDoc.pageScope().find('.an-content-floor').length;

		jDoc.replies().each(function()
		{
			$(this).find('span:last').append($.sprintf(' <span class="an-content-floor an-content-box">#%s</span>', nFloor++));
		});
	}
},

// 其他功能 //
'3f693a9e-e79d-4d14-b639-a57bee36079a':
{
	desc: '自動顯示伺服器狀態檢查視窗',
	page: { 1: true },
	type: 6,
	defer: 5,
	once: function()
	{
		AN.shared('serverTable');
	}
},

'4cdce143-74a5-4bdb-abca-0351638816fa':
{
	desc: '發表新帖子的主旨過長時進行提示',
	page: { 256: true },
	type: 6,
	once: function(jDoc)
	{
		if(location.search.indexOf('mt=N') != -1)
		{
			$('#aspnetForm').submit(function()
			{
				var sTitle = $('#ctl00_ContentPlaceHolder1_messagesubject').val();
				var n = 0;
				for(var i=0; i<sTitle.length; i++)
				{
					n += sTitle.charCodeAt(i) > 255 ? 2 : 1;
				}
				if(n > 50 && !confirm('主旨過長!(位元組 > 50)\n將導致帖子發表失敗或主旨被裁剪!\n\n確定要進行發表?'))
				{
					return false;
				}
			});
		}
	}
},

'86d24fc8-476a-4de3-95e1-5e0eb02b3353':
{
	desc: '轉換表情碼為圖片',
	page: { 92: true },
	type: 6,
	infinite: function(jDoc)
	{
		var rSmiley = /[#[](hehe|love|ass|sosad|good|hoho|kill|bye|adore|banghead|bouncer|bouncy|censored|flowerface|shocking|photo|fire|yipes|369|bomb|slick|no|kill2|offtopic)[\]#]/g;

		var aConvertMap =
		[
			{ regex: /O:-\)/g, result: 'angel' },
			{ regex: /xx\(/g, result: 'dead' },
			{ regex: /:\)/g, result: 'smile' },
			{ regex: /:o\)/g, result: 'clown' },
			{ regex: /:-\(/g, result: 'frown' },
			{ regex: /:~\(/g, result: 'cry' },
			{ regex: /;-\)/g, result: 'wink' },
			{ regex: /:-\[/g, result: 'angry' },
			{ regex: /:-]/g, result: 'devil' },
			{ regex: /:D/g, result: 'biggrin' },
			{ regex: /:O/g, result: 'oh' },
			{ regex: /:P/g, result: 'tongue' },
			{ regex: /^3^/g, result: 'kiss' },
			{ regex: /\?_\?/g, result: 'wonder' },
			{ regex: /#yup#/g, result: 'agree' },
			{ regex: /#ng#/g, result: 'donno' },
			{ regex: /#oh#/g, result: 'surprise' },
			{ regex: /#cn#/g, result: 'chicken' },
			{ regex: /Z_Z/g, result: 'z' },
			{ regex: /@_@/g, result: '@' },
			{ regex: /\?\?\?/g, result: 'wonder2' },
			{ regex: /fuck/g, result: 'fuck' }
		];

		jDoc.topics().jTitleCells.find('a:first-child').each(function()
		{
			var jThis = $(this);
			var sOri = sText = jThis.html();

			sText = sText.replace(rSmiley, '<img style="border-width:0px;vertical-align:middle" src="/faces/$1.gif" alt="$&" />');

			$.each(aConvertMap, function()
			{
				sText = sText.replace(this.regex, '<img style="border-width:0px;vertical-align:middle" src="/faces/' + this.result + '.gif" alt="$&" />');
			});

			if(sText != sOri) jThis.html(sText);
		});
	}
},

'e24ec5f6-5734-4c2c-aa54-320ca29a3932':
{
	desc: '移除死圖',
	page: { 32: false },
	type: 6,
	defer: 1, // after all images are created
	once: function()
	{
		this.removeDead = function()
		{
			$(this).parent().css('text-decoration', 'none').html('<a href="javascript:" class="an-content-line">死圖已被移除</a>');
		};
	},
	infinite: function(jDoc, oFn)
	{
		jDoc.replies().jContents.find('img[onLoad]').each(function()
		{
			var sSrc = this.src;
			$(this).error(oFn.removeDead).attr('src', sSrc);
		});
	}
},

'd7adafa8-cc14-45f9-b3e9-bc36eab05d4f':
{
	desc: '縮小引用中的圖片',
	page: { 32: false },
	type: 6,
	options: { nQuoteImgMaxHeight: { desc: '圖片最大高度(px)', defaultValue: 100, type: 'text' } },
	once: function()
	{
		AN.util.stackStyle($.sprintf('.repliers_right blockquote img { max-height: %spx; }', AN.util.getOptions('nQuoteImgMaxHeight')));
	}
},

'8e1783cd-25d5-4b95-934c-48a650c5c042':
{
	desc: '屏蔽圖片 (點擊顯示)',
	page: { 32: false },
	type: 6,
	defer: 1, // after all images are created
	once: function(jDoc, oFn)
	{
		oFn.bAreMasked = true;

		AN.shared('addButton', '切換屏蔽圖片', function()
		{
			(oFn.bAreMasked = !oFn.bAreMasked) ? $('.an-maskimg').fadeOut().next().show() : $('.an-maskimg').next().hide().end().fadeIn();
		});

		this.unmaskIt = function()
		{
			var jBox = $(this).children('a');
			if(jBox.is(':visible'))
			{
				jBox.hide().prev().fadeIn();
				return false;
			}
		};
	},
	infinite: function(jDoc, oFn)
	{
		if(!this.bAreMasked) return;

		jDoc.replies().jContents.find('img[onLoad]').addClass('an-maskimg').hide().after('<a class="an-content-box" href="javascript:">點擊顯示圖片</a>').parent().css('text-decoration', 'none').click(oFn.unmaskIt);
	}
},

'e33bf00c-9fc5-46ab-866a-03c4c7ca5056':
{
	desc: '智能地將文字轉換成連結',
	page: { 32: true },
	type: 6,
	infinite: function(jDoc)
	{
		var rLink = /(?:ftp|https?):\/\/[\w./?:;~!@#$%^&*()+=-]+/i;
		var aMatch;

		var checkNode = function(nTarget)
		{
			if(nTarget.nextSibling) checkNode(nTarget.nextSibling);

			if(nTarget.nodeType == 3)
			{
				if(aMatch = rLink.exec(nTarget.data))
				{
					nTarget.splitText(RegExp.leftContext.length + aMatch[0].length);
					$(nTarget.splitText(RegExp.leftContext.length)).wrap($.sprintf('<a href="%s"></a>', aMatch[0])).parent().before('<span class="an-content-note" title="文字已轉換為連結">[L]</span>');
				}
			}
			else if(nTarget.firstChild && !$(nTarget).is('a,button,script,style'))
			{
				checkNode(nTarget.firstChild);
			}
		};

		jDoc.replies().jContents.each(function()
		{
			checkNode(this.firstChild);
		});
	}
},

'7b36188f-c566-46eb-b48d-5680a4331c1f':
{
	desc: '轉換論壇連結的伺服器位置',
	page: { 32: true },
	type: 6,
	infinite: function(jDoc)
	{
		var rForum = /forum\d*.hkgolden\.com/i;

		jDoc.replies().jContents.find('a').each(function()
		{
			var jThis = $(this);
			if(!jThis.children().length && rForum.test(this.hostname) && this.hostname != location.hostname)
			{
				jThis.attr('href', this.href.replace(rForum, location.hostname)).before('<span class="an-content-note" title="已轉換伺服器位置">[C]</span>');
			}
		});
	}
},

'8db8b611-e229-4d60-a74b-6142af1bacd8':
{
	desc: '提示可疑連結',
	page: { 32: false },
	type: 6,
	options:
	{
		sSusKey:
		{
			desc: '可疑關鍵字 [regular expression]',
			defaultValue: '[?&]r(?:ef(?:er[^=]+)?)?=|logout|tinyurl|urlpire|linkbucks|seriousurls|qvvo|viraldatabase|youfap|qkzone\\.com/t\\?',
			type: 'text'
		},
		sSusColor: { desc: '可疑關鍵字顏色', defaultValue: '#FF0000', type: 'text' }
	},
	infinite: function(jDoc, oFn)
	{
		var addBox = function()
		{
			AN.util.addStyle($.sprintf(' \
			#an-alertbox { display: none; position: absolute; border-width: 1px; } \
			#an-alertbox div { height: 2px; } \
			#an-alertbox p { margin: 0; padding: 0 0.2em; } \
			#an-alertbox span { color: %s; } \
			',
			AN.util.getOptions('sSusColor')
			));

			$('#an').append('<div id="an-alertbox" class="an-forum"><div class="an-forum-header"></div><p>發現可疑連結! keyword: <span></span></p></div>');

			oFn.showAlert = function(event)
			{
				$('#an-alertbox').find('span').text($(this).data('an-suskeyword'));
				$(document).bind('mousemove.an-alert', function(event)
				{
					var jAlert = $('#an-alertbox');
					jAlert.show().css({ top: event.pageY - jAlert.height() - 10, left: event.pageX - jAlert.width() / 2 });
				});
			};

			oFn.hideAlert = function()
			{
				$(document).unbind('.an-alert');
				$('#an-alertbox').fadeOut('fast');
			};
		};

		var rSus = RegExp(AN.util.getOptions('sSusKey'), 'i');
		var aMatch;

		jDoc.replies().jContents.find('a').each(function()
		{
			if(aMatch = rSus.exec(this.href))
			{
				if(!$('#an-alertbox').length) addBox();
				$(this).data('an-suskeyword', aMatch[0]).hover(oFn.showAlert, oFn.hideAlert);
			}
		});
	}
},

'039d820f-d3c7-4539-8647-dde974ceec0b':
{
	desc: '轉換視頻網站連結為影片',
	page: { 32: true },
	type: 6,
	defer: 2, // after layout is fixed
	options:
	{
		bConvertOnClick: { desc: '點擊連結才轉換', defaultValue: false, type: 'checkbox' }
	},
	once: function()
	{
		var aSites =
		[{
			regex: 'youtube\\.com/watch\\?',
			fn: function()
			{
				if(nWidth > 640) nWidth = 640;
				nHeight = nWidth / 16 * 9 + 25;
				sUrl = $.sprintf('http://www.youtube.com/v/%s&fs=1&rel=0&ap=%2526fmt%3D22', sUrl.replace(/.+?v=([^&]+).*/i, '$1'));
			}
		},
		{
			regex: 'vimeo\\.com/\\d',
			fn: function()
			{
				if(nWidth > 504) nWidth = 504;
				nHeight = nWidth / 1.5;
				sUrl = $.sprintf('http://vimeo.com/moogaloop.swf?clip_id=%s&show_title=1&fullscreen=1', sUrl.replace(/.+vimeo\.com\/(\d+).*/i, '$1'));
			}
		},
		{
			regex: 'youku\\.com/v_show/',
			fn: function()
			{
				if(nWidth > 480) nWidth = 480;
				nHeight = nWidth / 4 * 3 + 40;
				sUrl = $.sprintf('http://player.youku.com/player.php/sid/%s/v.swf', sUrl.replace(/.+?id_([^\/]+).*/i, '$1'));
			}
		},
		{
			regex: 'tudou\\.com/program/',
			fn: function()
			{
				if(nWidth > 400) nWidth = 400;
				nHeight = nWidth / 4 * 3 + 40;
				sUrl = $.sprintf('http://www.tudou.com/v/%s', sUrl.replace(/.+?view\/([^\/]+).*/i, '$1'));
			}
		}];

		this.rLink = (function()
		{
			var aReg = [];
			$.each(aSites, function(){ aReg.push(this.regex); });
			return RegExp(aReg.join('|'), 'i');
		})();

		var nWidth, nHeight, sUrl;
		this.convert = function(event)
		{
			if(event.preventDefault) event.preventDefault();

			sUrl = this.href;
			nWidth = $(this).up('td,div').width();
			$.each(aSites, function()
			{
				if(RegExp(this.regex, 'i').test(sUrl))
				{
					this.fn();
					return false;
				}
			});

			$(this).toFlash(sUrl, { width: nWidth, height: nHeight.toFixed(0) }, { wmode: 'opaque' });
		};
	},
	infinite: function(jDoc, oFn)
	{
		var jVideoLinks = jDoc.replies().jContents.find('a').filter(function(){ return oFn.rLink.test(this.href); });
		AN.util.getOptions('bConvertOnClick') ? jVideoLinks.click(oFn.convert) : jVideoLinks.each(oFn.convert);
	}
},

'd761d6f7-8ef7-4d5b-84e9-db16a274f616':
{
	desc: '轉換圖片連結為圖片',
	page: { 32: false },
	type: 6,
	infinite: function(jDoc)
	{
		jDoc.replies().jContents.find('a').each(function()
		{
			if(!$(this).children().length && /jpg|gif|png|bmp/i.test(this.href))
			{
				$(this).attr('target', '_blank').html($.sprintf('<img style="border-style: none" onLoad="DrawImage(this)" src="%s" alt="死圖" />', this.href, this.href)).before('<span class="an-content-note" title="已轉換連結為圖片">[P]</span>');
			}
		});
	}
},

'85950fa3-c5f0-4456-a81a-30a90ba6425c':
{
	desc: '顯示防盜鏈/域名被禁圖片 [FF: 建議改用RefControl] [暫時停用]',
	page: { 32: 'disabled'/*!$.browser.mozilla*/ },
	type: 6,
	options: { sImgProxy: { desc: '圖片代理', defaultValue: 'http://www.pomo.cn/showpic.asp?url=', type: 'text' } },
	infinite: function(jDoc)
	{
		var sImgProxy = AN.util.getOptions('sImgProxy');

		jDoc.replies().jContents.find('img').each(function()
		{
			if(/imageshack\.us|hiphotos\.baidu\.com|\.tianya\.cn/i.test(this.src))
			{
				this.src = sImgProxy + encodeURIComponent(this.src);
			}
		});
	}
},

'ea19d7f6-9c2c-42de-b4f9-8cab40ccf544':
{
	desc: '限制回覆格高度',
	page: { 32: false },
	type: 6,
	defer: 2, // after layout is fixed
	options:
	{
		bAltScrollBarStyle: { desc: '將滾動條置於外層 [buggy w/ ajax fn@IE,FF,Chrome]', defaultValue: false, type: 'checkbox' },
		nMaxReplyHeight: { desc: '最大回覆高度(px)', defaultValue: 2000, type: 'text' }
	},
	once: function(jDoc)
	{
		if(AN.util.getOptions('bAltScrollBarStyle'))
		{
			var nWidth = jDoc.replies().jContents.eq(0).width();

			AN.util.stackStyle($.sprintf('\
			.repliers_right { overflow-x: visible; } \
			.an-replywrapper { overflow-y: auto; position: relative; z-index: 2; max-height: %spx; width: %spx; } \
			.an-replywrapper > div { padding-right: 1px; width: %spx; } \
			',
			AN.util.getOptions('nMaxReplyHeight'), nWidth + 30, nWidth));
		}
		else
		{
			AN.util.stackStyle($.sprintf('.an-replywrapper { overflow-y: auto; max-height: %spx; }', AN.util.getOptions('nMaxReplyHeight')));
		}
	},
	infinite: function(jDoc)
	{
		//jDoc.replies().jContents.wrapInner('<div class="an-replywrapper"></div>');
		jDoc.replies().jContents.wrapInner('<div class="an-replywrapper"><div></div></div>');
	}
},

'fc07ccda-4e76-4703-8388-81dac9427d7c':
{
	desc: '強制顯示空白用戶名連結',
	page: { 32: true },
	type: 6,
	infinite: function(jDoc)
	{
		jDoc.replies().each(function()
		{
			if(/^\s*$/.test($(this).data('sUserName')))
			{
				$(this).data('jNameLink').html('<span style="color: black">&lt;空白名稱&gt;</span>');
			}
		});
	}
},

'e19a8d96-151f-4f86-acfc-0af12b53b99b':
{
	desc: '快速3擊左鍵關閉頁面 [FF: 只能配合連結開新頁使用]',
	page: { 32: false },
	type: 6,
	once: function()
	{
		var down = 0;
		var reset = function(){ down = 0; };

		$(document).mousedown(function(event)
		{
			if(down == 0) setTimeout(reset, 500);

			if(++down == 3)
			{
				window.opener = window;
				window.open('', '_parent');
				window.close();
			}
		});
	}
}

}};
AN.mod['Component Redesigner'] = { ver: 'N/A', author: '向日', fn: {

'8be1ac06-030a-42d4-a8f4-f2b7f4881300':
{
	desc: '改變引用風格',
	page: { 32: true },
	type: 8,
	defer: 1, // after linkify to improve effieciency, note: this is a part of layout changing
	options:
	{
		bOuterOnly: { desc: '隱蔵內層引用', type: 'checkbox', defaultValue: true },
		nOuterNum: { desc: '外層引用的顯示數目', type: 'text', defaultValue: 1 }
	},
	once: function(jDoc, oFn)
	{
		this.bGlobalOuterOnly = AN.util.getOptions('bOuterOnly');

		this.toggleAll = (function()
		{
			var sSelector = '.an-quote-outermostheader';
			var n = AN.util.getOptions('nOuterNum');
			while(--n)
			{
				sSelector += ' + div > blockquote > div:first-child';
			}

			return function()
			{
				oFn.toggleQuote($(sSelector), oFn.bGlobalOuterOnly);
			};
		})();

		this.toggleQuote = function(jTarget, bOuterOnly)
		{
			if(bOuterOnly === undefined) // jTarget now is actually the event object
			{
				jTarget = $(this.parentNode);
				bOuterOnly = !jTarget.hasClass('an-quote-header-hideinner');
			}

			jTarget.toggleClass('an-quote-header-hideinner', bOuterOnly).children('b').html(bOuterOnly ? '＋' : '－');
		};

		AN.shared('addButton', '切換最外層引用', function()
		{
			oFn.bGlobalOuterOnly = !oFn.bGlobalOuterOnly;
			oFn.toggleAll();
		});

		AN.util.stackStyle($.sprintf(' \
		.repliers_right blockquote { margin: 5px 0; border: 1px solid %s; } \
		.repliers_right blockquote blockquote { margin-top: 0; border-right: 0; } \
		.repliers_right blockquote > div { padding: 0 0 5px 2px; } \
		.an-quote-header { margin-bottom: 2px; padding: 0 3px !important; font-size: 12px; line-height: 15px; overflow: hidden; } \
		.an-quote-header > b { float: right; cursor: pointer; font-weight: 900; } \
		.an-quote-innermostheader > b { display: none; } \
		.an-quote-header-hideinner { margin-bottom: 5px; } \
		.an-quote-header-hideinner + div > blockquote { display: none; } \
		',
		AN.util.getOptions('sMainBorderColor')
		));
	},
	infinite: function(jDoc)
	{
		jDoc.find('blockquote').each(function()
		{
			var jQuote = $(this);

			while(true)
			{
				var eNext = this.nextSibling;

				if(eNext)
				{
					if($(eNext).is('br') || eNext.nodeType == 3 && /^\s+$/.test(eNext.nodeValue))
					{
						$(eNext).remove();
						continue;
					}
				}
				else if(jQuote.parent().parent('blockquote').length)
				{
					jQuote.parent().parent().replaceWith(jQuote); // is an empty quote && not outermost
					continue;
				}

				break;
			}

			var jHeader = $('<div class="an-forum-header an-quote-header">引用:<b>－</b></div>').prependTo(jQuote);

			if(!jQuote.find('blockquote').length) // innermost or single-layer
			{
				jHeader.addClass('an-quote-innermostheader');
			}
			if(!jQuote.parent().parent('blockquote').length) // outermost or single-layer
			{
				jHeader.addClass('an-quote-outermostheader');
			}
		});

		$('.an-quote-header > b').click(this.toggleQuote);

		if(this.bGlobalOuterOnly) jDoc.defer(3, '隱藏最外層以外的引用', this.toggleAll);
	}
},

'cb1917f9-4053-40b1-870d-e0e2c6a90b39':
{
	desc: '改變快速回覆的風格',
	page: { 32: true },
	type: 8,
	options:
	{
		bAlternativeHide: { desc: '隱藏於右下角 [必須點擊]', type: 'checkbox', defaultValue: true },
		bToggleOnClick: { desc: '心須點擊才顯示/隱藏', type: 'checkbox', defaultValue: true },
		nQROpacity: { desc: '透明度 (10 = 移除半透明)', type: 'select', defaultValue: 7, choices: [10,9,8,7,6,5,4,3,2,1,0] }
	},
	once: function()
	{
		if(!AN.util.isLoggedIn()) return;

		var nRightPx = -750;

		AN.util.stackStyle($.sprintf('\
		#newmessage { %s; z-index: 3; position: fixed; width: 806px; bottom: -2px; %s; } \
		#an-qr-header { cursor: pointer; text-align: center; } \
		',
		AN.util.getOpacityStr(AN.util.getOptions('nQROpacity')),
		AN.util.getOptions('bAlternativeHide') ? $.sprintf('right: %spx', (($.winWidth() - 806) / 2)) : 'left: 50%; margin-left: -403px'
		));

		var jQR = $('#newmessage');
		var jQRContent = jQR.find('tr:eq(2)').hide();
		var jQRHeader = jQR.find('td:eq(1)').attr('id', 'an-qr-header').html('快速回覆');

		var isNotNeeded = function(bToShow)
		{
			return typeof bToShow == 'boolean' && bToShow == (jQRContent.css('display') != 'none');
		};

		var isToShow = function(bToShow)
		{
			return typeof bToShow == 'boolean' ? bToShow : jQRContent.css('display') == 'none';
		};

		var toggleQR = function(bToShow, fCallback)
		{
			if(isNotNeeded(bToShow)) return;

			jQRContent.toggle(isToShow(bToShow));
			$('#previewArea').empty();
			if(fCallback) fCallback();
		};

		if(AN.util.getOptions('bAlternativeHide'))
		{
			jQR.css('right', nRightPx);
			toggleQR = (function(toggleDisplay)
			{
				return function(bToShow)
				{
					if(isNotNeeded(bToShow)) return;

					isToShow(bToShow) ? jQR.animate({ right: ($.winWidth() - 806) / 2 }, 'slow', toggleDisplay) : toggleDisplay(false, function(){ jQR.animate({ right: nRightPx }, 'slow'); });
				}
			})(toggleQR);
			jQRHeader.click(toggleQR);
		}
		else
		{
			AN.util.getOptions('bToggleOnClick') ? jQRHeader.click(toggleQR) : jQR.hover(toggleQR, toggleQR);
		}

		$('#aspnetForm').submit(function()
		{
			toggleQR(false);
		});

		window._OnQuoteSucceeded = function(result)
		{
			toggleQR(true);
			$('#ctl00_ContentPlaceHolder1_messagetext').val(unescape(result) + '\n').scrollTop(99999);
			window.moveEnd();
		};
		
		window.OnQuoteSucceeded = new window.Function('result', 'window._OnQuoteSucceeded(result);');
	}
}

}};
AN.mod['Style Editor'] = { ver: 'N/A', author: '向日', fn: {

'89615a78-21b7-46bd-aeb1-12e7f031e896':
{
	desc: '強制更改全局字體',
	page: { 65534: false },
	type: 2,
	options: { sMainFontFamily: { desc: '字體名稱', defaultValue: 'SimSun', type: 'text' } },
	once: function()
	{
		AN.util.stackStyle($.sprintf('body * { font-family: %s !important; }', AN.util.getOptions('sMainFontFamily')));
	}
},

'cad6d058-f999-460d-ac29-4074f33f46fb':
{
	desc: '設定連結樣式',
	page: { 65534: false },
	type: 2,
	options:
	{
		sMainLinkFontColor: { desc: '普通連結顏色', defaultValue: '#1066d2', type: 'text' },
		sMainVisitedColor: { desc: '已訪問連結顏色', defaultValue: '#800080', type: 'text' },
		sMainHoverColor: { desc: '連結懸浮顏色', defaultValue: '', type: 'text' },
		bRemoveLinkUnderline: { desc: '移除連結底線', defaultValue: false, type: 'checkbox' }
	},
	once: function()
	{
		var sTextCSS = AN.util.getOptions('bRemoveLinkUnderline')
			? 'text-decoration: none; } a[href^="/blog/blog.aspx"] > span { text-decoration: none !important; } .repliers_right a { text-decoration: underline; }'
			: '}';

		AN.util.stackStyle($.sprintf('\
		body > form a, #ctl00_ContentPlaceHolder1_MiddleAdSpace1 a { color: %(sMainLinkFontColor)s; ' + sTextCSS + ' \
		body > form a[href*="view.aspx"]:visited { color: %(sMainVisitedColor)s; } \
		body > form a[href]:hover { color: %(sMainHoverColor)s; } \
		',
		AN.util.getOptions()
		));
	}
},

'7574582b-2fea-4079-8dfb-7ac4e5587ecb':
{
	desc: '改變論壇樣式',
	page: { 65534: false },
	type: 2,
	options:
	{
		sLogoBgImage: { desc: '高登Logo圖片', defaultValue: '/images/index_images/logo.jpg', type: 'text' },
		sTopBgImage: { desc: '頂部背景圖片', defaultValue: '/images/index_images/bg_top.jpg', type: 'text' },
		sMainBgImage: { desc: '主表格背景圖片', defaultValue: '/images/index_images/bg_maintop.jpg', type: 'text' },
		sRedTitleFontColor: { desc: '紅人榜標題字體顏色', defaultValue: '#FFFFFF', type: 'text' },
		sRedTitleBgColor: { desc: '紅人榜標題背景顏色', defaultValue: '#CC2331', type: 'text' },
		sRedHeaderFontColor: { desc: '紅人榜第一列字體顏色', defaultValue: '#003366', type: 'text' },
		sRedHeaderBgColor: { desc: '紅人榜第一列背景顏色', defaultValue: '#FF5560', type: 'text' },
		sRedContentFontColor: { desc: '紅人榜內容字體顏色', defaultValue: '#000000', type: 'text' },
		sBlueBarFontColor: { desc: '藍色橫條字體顏色', defaultValue: '#FFFFFF', type: 'text' },
		sBlueBarBgColor: { desc: '藍色橫條背景顏色', defaultValue: '#6EA0C4', type: 'text' },
		sBlueBarBgImage: { desc: '藍色橫條背景圖片', defaultValue: '/images/left_menu/p.png', type: 'text' },
		sBlueSecBgColor: { desc: '高登公告內部橫條背景顏色', defaultValue: '#CCDDEA', type: 'text' },
		sHighlightBgColor: { desc: '高亮背景顏色', defaultValue: '#E9EC6C', type: 'text' },
		sTimeFontColor: { desc: '時間字體顏色', defaultValue: '#800000', type: 'text' },
		sMaleFontColor: { desc: '男用戶連結顏色', defaultValue: '#0066FF', type: 'text' },
		sFemaleFontColor: { desc: '女用戶連結字體顏色', defaultValue: '#FF0066', type: 'text' },
		sQuoteFontColor: { desc: '引用字體顏色', defaultValue: '#0000A0', type: 'text' },
		sFooterBgColor: { desc: '頁腳横條背景顏色', defaultValue: '#FFCC00', type: 'text' }
	},
	once: function()
	{
		AN.util.stackStyle($.sprintf(' \
		/* Global stuff */\
		body { background-color: %(sMainBgColor)s; } \
		p, td { color: %(sMainFontColor)s; } \
		/* main border */\
		.repliers_header, .repliers_left, .repliers, .repliers td, .Topic_ForumInfoPanel table, .Topic_ForumInfoPanel th { border-color: %(sMainBorderColor)s !important; } \
		#aspnetForm table[cellspacing="1"][cellpadding="2"], #ctl00_ContentPlaceHolder1_PMMsgTable, #ctl00_ContentPlaceHolder1_QuickReplyTable, #ctl00_ContentPlaceHolder1_QuickReplyLoginTable { background-color: %(sMainBorderColor)s !important; } \
		*[style*="128, 128, 128"], *[style*="808080"] { background-color: transparent !important; } \
		/* sec border */\
		.main_table1 { border-color: %(sSecBorderColor)s; } \
		/* nearly-white backgrounds */\
		*[style*="rgb(23"], *[style*="rgb(24"], *[style*="#E"], *[style*="#F"], *[style*="#e"], *[style*="#f"], .Topic_ForumInfoPanel table td { background-color: %(sSecBgColor)s !important; } \
		/* PM Box & white table cells */\
		.ListPMText, *[style*="255, 255, 255"], *[style*="#FFFFFF"], *[style*="background-color: white"], *[style*="BACKGROUND-COLOR: white"], *[bgcolor="#f8f8f8"] { background-color: %(sMainBgColor)s !important; } \
		/* headers */\
		.repliers_header, *[style*="51, 102, 153"], *[style*="#336699"], .Topic_ForumInfoPanel table th, .Topic_ListPanel table th { color: %(sMainHeaderFontColor)s !important; background-color: %(sMainHeaderBgColor)s !important; } \
		/* under logo links, footer text, username links, bookmarkbar */\
		.encode_link, .txt_11pt_1A3448, *[style*="color: black"], *[style*="COLOR: black"], .hkg_bottombar_link { color: %(sMainFontColor)s !important; } \
		/* non-transparent images */\
		.TopMenuPanel, .bg_top { background-image: url(%(sTopBgImage)s); } \
		.PageMiddleBox, .bg_main { background-image: url(%(sMainBgImage)s); } \
		/* main logo */\
		#ctl00_TopBarHomeLink { display: block; background: url(%(sLogoBgImage)s) no-repeat; } \
		#ctl00_TopBarHomeLink img { visibility: hidden; } \
		/* thin bars icon */\
		.title:first-child, *[bgcolor="#6ea0c4"]:first-child, .redhottitle:first-child { background-image: url(%(sBlueBarBgImage)s); } \
		*[src*="/p.jpg"], *[src*="/redhotp.jpg"] { visibility: hidden; } \
		/* blue bars , red bars, and main forum page bars */\
		.title, *[bgcolor="#6ea0c4"], *[colspan="6"] { background-color: %(sBlueBarBgColor)s !important; color: %(sBlueBarFontColor)s; } \
		.redhottitle { background-color: %(sRedTitleBgColor)s; color: %(sRedTitleFontColor)s; } \
		/* hot people */\
		table[style*="255, 85, 96"], tr[style*="255, 85, 96"], table[style*="#ff5560"], tr[style*="#ff5560"] { background-color: %(sRedHeaderBgColor)s !important; } \
		td[style*="255, 85, 96"], td[style*="#ff5560"] { border-color: %(sRedHeaderBgColor)s !important; } \
		*[style*="0, 51, 102"], *[style*="#003366"] { color: %(sRedHeaderFontColor)s !important; } \
		.redhot_text, a.redhot_link { color: %(sRedContentFontColor)s; } \
		/* hot search */\
		.HitSearchText { color: %(sMainHeaderFontColor)s; } \
		a.hitsearch_link { color: %(sMainFontColor)s; } \
		/* annoucements, profilepage tabs */\
		*[bgcolor="#ccddea"], .ajax__tab_tab, #advarea tr:first-child + tr td { background-color: %(sBlueSecBgColor)s !important; } \
		.p__tab_xp .ajax__tab_tab { color: %(sMainFontColor)s; } \
		.p__tab_xp .ajax__tab_active .ajax__tab_tab, .p__tab_xp .ajax__tab_hover .ajax__tab_tab { color: %(sMainHoverColor)s; } \
		/* hightlight bg */\
		*[style*="233, 236, 108"], *[style*="#E9EC6C"] { background-color: %(sHighlightBgColor)s !important; } \
		/* time text */\
		*[style*="128, 0, 0"], *[style*="#800000"], *[style*="maroon"] { color: %(sTimeFontColor)s !important; } \
		/* male name link */\
		*[style*="0, 102, 255"], *[style*="#0066ff"], *[style*="#0066FF"], *[color="blue"] { color: %(sMaleFontColor)s !important; } \
		/* female name link */\
		*[style*="255, 0, 102"], *[style*="#ff0066"], *[style*="#FF0066"], *[color="red"] { color: %(sFemaleFontColor)s !important; } \
		/* quotes */\
		blockquote > div[style*="color"], blockquote > div[style*="COLOR"] { color: %(sQuoteFontColor)s !important; } \
		/* profilepage avater */\
		table[width="150"] { border-color: %(sSecBorderColor)s !important; } \
		/* footer */\
		.FooterPanel > div:first-child { background-color: %(sFooterBgColor)s !important; } \
		a.terms_link { color: %(sMainFontColor)s; } \
		/* bookmark bar */\
		.hkg_bottombar, .hkg_bottombar *, .hkg_bbMenu, .hkg_bbMenu * { background-color: %(sSecBgColor)s; border-color: %(sMainBorderColor)s; color: %(sMainFontColor)s; } \
		.hkg_bb_bookmark_TitleBox, .hkg_bb_bookmark_TitleBox *, .hkg_bb_bookmarkItem_Hover, .hkg_bb_bookmarkItem_Hover a div { background-color: %(sMainHeaderBgColor)s; color: %(sMainHeaderFontColor)s; } \
		.hkg_bb_bookmarkItem a div { background-color: transparent; color: inherit; } \
		',
		AN.util.getOptions()
		));
	}
},

'eb703eac-bb31-4dbe-b28c-0b6d2942b6f5':
{
	desc: '滙入自定CSS(進階用戶專用)',
	page: { 65534: false },
	type: 2,
	options:
	{
		sCustomCSSHref: { desc: '自定CSS檔案位置 [部份瀏覽器不支持本地檔案]', defaultValue: '', type: 'text' },
		sCustomCSSContent: { desc: '自定CSS內容', defaultValue: '/*sample*/ * { color: black !important; }', type: 'text' }
	},
	once: function()
	{
		var sHref = AN.util.getOptions('sCustomCSS');
		if(sHref) $('head').append($.sprintf('<link type="text/css" rel="stylesheet" href="%s" />', sHref));

		var sContent = AN.util.getOptions('sCustomCSSContent');
		if(sContent) AN.util.stackStyle(sContent);
	}
}

}};
AN.mod['User Interface'] = { ver: 'N/A', author: '向日', fn: {

'6464e397-dfea-477f-9706-025ec439e810':
{
	desc: '設定UI樣式',
	page: { 65535: 'comp' },
	type: 2,
	options:
	{
		sMenuFontSize: { desc: 'UI主要字體大小(px)', defaultValue: '16', type: 'text' },
		sSmallFontSize: { desc: 'UI細字體大小(px)', defaultValue: '10', type: 'text' }
	},
	once: function()
	{
		AN.util.stackStyle($.sprintf(' \
		.an-box { display: none; position: fixed; left: 50%; top: 50%; z-index: 10; border-width: 1px; } \
		.an-box-header { line-height: 1.8em; margin: 0; padding: 0 0 0 0.2em; } \
		.an-box-content { overflow: auto; position: relative; } \
		\
		.an-menu { font-size: %(sMenuFontSize)spx; } \
		.an-menu a { display: block; } \
		.an-menu a:hover { color: %(sUIHoverColor)s; } \
		\
		.an-small { font-size: %(sSmallFontSize)spx; } \
		\
		#an-ui ul { margin: 0; padding: 0; list-style: none; } \
		#an-ui a:focus { outline: 0; } \
		\
		.an-mod { position: fixed; color: %(sUIFontColor)s; } \
		.an-mod, .an-mod * { border: 0 solid %(sUIFontColor)s; } \
		.an-mod a { text-decoration: none; color: %(sUIFontColor)s; } \
		\
		#an-backlayer { display: none; opacity: 0; -ms-filter: "alpha(opacity=0)"; z-index: 5; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: gray; } \
		\
		#an-mainmenu { top: 15%; right: 0; } \
		#an-mainmenu a { padding: 0.3em 0.35em 0 0; border-bottom-width: 1px; } \
		',
		AN.util.getOptions()
		));
	}
},

'1db9ccc8-ad28-48b6-8744-22f892ca0a44':
{
	desc: '加入基本元件',
	page: { 65535: 'comp' },
	type: 1,
	once: function()
	{
		$('#an').append(' \
		<div id="an-ui"> \
			<div id="an-backlayer"></div> \
			<ul id="an-mainmenu" class="an-mod an-menu"></ul> \
		</div> \
		');

		AN.shared.gray = function(bClickToQuit, uExtra)
		{
			var jGray = $('#an-backlayer');
			if(jGray.is(':hidden'))
			{
				//$('html').css('overflow', 'hidden');

				if(bClickToQuit)
				{
					jGray.one('click', function()
					{
						AN.shared.gray();
					});
				}

				jGray.show().fadeTo('slow', 0.7);

				if(uExtra)
				{
					var jExtra = $('#' + uExtra);
					var oWH = jExtra.data('an-oWH');
					var nMaxHeight = $.winHeight(0.9);
					var nMaxWidth = $.winWidth(0.9);
					jExtra.width((oWH.w == 'max' || oWH.w > nMaxWidth) ? nMaxWidth : oWH.w).height((oWH.h == 'max' || oWH.h > nMaxHeight) ? nMaxHeight : oWH.h);

					var jBox = jExtra.up('.an-box');
					jBox.css({ marginTop: -jBox.height() / 2, marginLeft: -jBox.width() / 2 }).fadeIn('slow');
				}
			}
			else
			{
				jGray.add('.an-box:visible').fadeOut('slow');
				//$('html').css('overflow', '');
			}
		};

		AN.shared.addMain = function(sName, fHandler)
		{
			$('<li><a href="javascript:">' + sName + '</a></li>').click(fHandler).appendTo('#an-mainmenu');
		};

		AN.shared.box = function(sId, sHeader, uWidth, uHeight)
		{
			return $($.sprintf('<div class="an-box an-forum"><h4 class="an-forum-header an-box-header">%s</h4><div id="%s" class="an-box-content"></div></div>', sHeader, sId)).appendTo('#an-ui').children('.an-box-content').data('an-oWH', { w: uWidth || 'auto', h: uHeight || 'auto' });
		};
	}
},


'72907d8e-4735-4f66-b3c9-20e26197663d':
{
	desc: '加入共用元件',
	page: { 65535: 'comp' },
	type: 1,
	once: function()
	{
		(function()
		{
			var testServers;

			AN.shared.serverTable = function()
			{
				if(!$('#an-server').length)
				{
					var jTestImages = $([]);

					testServers = function()
					{
						$('.an-server-reposonse').html('等待回應中...');

						jTestImages.each(function(i)
						{
							var nTime = $.time();
							$(this).data('nTime', nTime).attr('src', $.sprintf('http://forum%s.hkgolden.com/images/spacer.gif?tId=%s', i+1, nTime));
						});
					};

					var showResult = function(eImg, sStatus)
					{
						var jImg = $(eImg);

						$('.an-server-reposonse').eq(jImg.data('nServer') - 1).html(
						{
							ok: $.sprintf('~%s ms', $.time() - jImg.data('nTime')),
							dead: '發生錯誤'
						}[sStatus]);
					};

					AN.util.addStyle(' \
					#an-server div { padding: 0.5em; } \
					#an-server caption { padding-top: 0.5em; text-align: center; caption-side: bottom; } \
					#an-server caption a { display: inline-block; border-width: 1px; padding: 0.2em; } \
					#an-server table { text-align: center; } \
					');

					AN.shared.box('an-server', '伺服器狀態', 300).append('<div><table><caption><a href="javascript:">進行測試</a></caption><thead><tr><td>伺服器</td><td>回應時間</td></tr></thead><tbody></tbody></table></div>');

					var jImg = $(new Image).load(function(){ showResult(this, 'ok'); }).error(function(){ showResult(this, 'dead'); });
					var sURL = (location.href.indexOf('aspxerrorpath=') > 0) ? $.sprintf('http://%s/topics.aspx?type=BW', location.hostname) : location.href;

					var sHTML = '';
					for(var nServer=1; nServer<=8; nServer++)
					{
						jTestImages.push(jImg.clone(true).data('nServer', nServer)[0]);
						sHTML += $.sprintf('<tr><td><a href="%s">Forum %s</a></td><td class="an-server-reposonse"></td></tr>', sURL.replace(/forum\d/i, 'forum' + nServer), nServer);
					}
					$('#an-server').find('caption').click(testServers).end().find('tbody').html(sHTML);

					jImg = sURL = sHTML = null;
				}

				AN.shared.gray(true, 'an-server');
				testServers();
			};
		})();
	}
},

'95e203b9-8d9a-46ad-be53-f4297bad7285':
{
	desc: '加入選項元件',
	page: { 65534: 'comp' },
	type: 1,
	once: function()
	{
		var tabClick, getInfo, saveOptions, fillOptions, fillBoolean, importSettings, exportSettings, bFillAll, jFieldsets, jTabLinks, jSwitches, jOptions;

		AN.shared.addMain('選項', function()
		{
			if(!$('#an-settings').length)
			{
				AN.shared.box('an-settings', '選項', 900, 'max').append('<div id="an-settings-tabs"><ul id="an-settings-tabs-main"></ul><ul id="an-settings-tabs-extend"></ul></div><div id="an-settings-main"><div id="an-settings-main-panelswrapper"><div id="an-settings-main-panels"></div></div><div id="an-settings-main-controls"><ul id="an-settings-main-control-1"></ul><ul id="an-settings-main-control-2"></ul></div></div>');

				AN.util.addStyle(' \
				#an-settings-tabs { float: left; height: 100%; border-right-width: 1px; } \
				#an-settings-tabs a { display: block; line-height: 2em; text-align: center; border-bottom-width: 1px; padding: 0 0.5em; } \
				#an-settings-tabs-extend li:first-child { margin-top: 2em; border-top-width: 1px; } \
				\
				#an-settings-main { position: relative; overflow: hidden; height: 100%; } \
				\
				#an-settings-main-panelswrapper { overflow: auto; position: absolute; top: 0; right: 0; bottom: 2em; left: 0; border-bottom-width: 1px; padding: 0; margin: 0; } \
				#an-settings-main-panels { padding: 1em; } \
				#an-settings-main-panels fieldset { display: none; margin: 0; padding: 0 0.5em 1em; border-width: 1px; } \
				#an-settings-main-panels h4 { font-weight: normal; overflow: hidden; margin: 1em 0 0.5em; } \
				#an-settings-main-panels h4 span { float: left; margin-right: 0.2em; } \
				#an-settings-main-panels h4 hr { overflow: hidden; margin: 0.5em 0 0 0; border-top-width: 1px; } \
				#an-settings-main-panels dl { margin: 0.35em 0 0.35em 5px; } \
				#an-settings-main-panels dd { margin: 0.25em 0 0 20px; } \
				\
				#an-settings-main-controls { position: absolute; left: 0; right: 0; bottom: 0; line-height: 2em; } \
				#an-settings-main-control-1 { float: left; } \
				#an-settings-main-control-2 { float: right; } \
				#an-settings-main-controls li { float: left; } \
				#an-settings-main-control-last, #an-settings-main-controls a { padding: 0 1em; } \
				#an-settings-main-control-1 li { border-right-width: 1px; } \
				#an-settings-main-control-last, #an-settings-main-control-2 li { border-left-width: 1px; } \
				');

				var oTypeMap = AN.box.oTypeMap;
				var oPageMap = AN.box.oPageMap;

				var oStructure = {};
				$.each(oTypeMap, function(sType)
				{
					oStructure[sType] = {};
					$.each(oPageMap, function(sPage)
					{
						oStructure[sType][sPage] = {};
					});
				});

				var sSep = '_-_';
				$.each(AN.mod, function(sMod)
				{
					if(!this.fn) return;

					$.each(this.fn, function(sId, oFn)
					{
						$.each(oFn.page, function(sPage, uDefault)
						{
							if(!oStructure[oFn.type][sPage]) oStructure[oFn.type][sPage] = {};

							oStructure[oFn.type][sPage][sMod + sSep + sId] =
							{
								desc: oFn.desc,
								options: oFn.options,
								comp: (uDefault == 'comp'),
								disabled: (uDefault == 'disabled')
							};
						});
					});
				});

				var sHTML = '';
				$.each(oStructure, function(sType)
				{
					var jContainer = (isNaN(sType) || sType > 6) ? $('#an-settings-tabs-extend') : $('#an-settings-tabs-main');
					jContainer.append($.sprintf('<li><a href="javascript:" rel="an-settings-panel-%s">%s</a></li>', sType, oTypeMap[sType]));

					sHTML += $.sprintf('<fieldset id="an-settings-panel-%s"><legend>%s</legend>', sType, oTypeMap[sType]);
					$.each(this, function(sPage)
					{
						if($.isEmpty(this)) return;

						var aGroup = [];
						if(sPage in oPageMap) aGroup.push(oPageMap[sPage].desc);
						else $.each(oPageMap, function(s)
						{
							if(s < 65534 && s & sPage) aGroup.push(this.desc);
						});
						sHTML += $.sprintf('<h4><span>%s</span><hr /></h4>', aGroup.join('、'));

						$.each(this, function(sMixed)
						{
							sHTML += '<dl><dt>';

							var bDisabled = this.disabled;
							var sSwitchId = $.sprintf('an-settings-switch-%s%s%s', sPage, sSep, sMixed);
							var sChecked = this.comp ? 'checked="checked"' : '';
							var sSavable = (this.comp || bDisabled) ? 'disabled="disabled"' : 'class="an-settings-switch"';
							sHTML += $.sprintf('<input type="checkbox" id="%s" %s %s />', sSwitchId, sChecked, sSavable);
							sHTML += $.sprintf('<label for="%s">%s</label></dt>', sSwitchId, this.desc);

							if(this.options)
							{
								$.each(this.options, function(sName)
								{
									sHTML += '<dd>';

									var sOptionId = $.sprintf('an-settings-option-%s%s%s', sPage, sSep, sName);
									var sSavable = bDisabled ? 'disabled="disabled"' : 'class="an-settings-option"';

									if(this.type == 'checkbox')
									{
										sHTML += $.sprintf('<input type="checkbox" id="%s" %s /><label for="%s">%s</label>', sOptionId, sSavable, sOptionId, this.desc);
									}
									else if(this.type == 'text')
									{
										sHTML += $.sprintf('<label for="%s">%s: </label><input type="text" id="%s" %s />', sOptionId, this.desc, sOptionId, sSavable);
									}
									else if(this.type == 'select')
									{
										sHTML += $.sprintf('%s: <select id="%s" %s>', this.desc, sOptionId, sSavable);
										$.each(this.choices, function()
										{
											sHTML += $.sprintf('<option value="%s">%s</option>', this, this);
										});
										sHTML += '</select>';
									}

									sHTML += '</dd>';
								});
							}
							sHTML += '</dl>';
						});
					});
					sHTML += '</fieldset>';
				});

				$('#an-settings-main-panels').append(sHTML);
				sHTML = null;

				jFieldsets = $('#an-settings-main-panels fieldset'); // jQuery bug? $('#an-settings-main-panels > fieldset') got nth
				jTabLinks = $('#an-settings-tabs a');
				jSwitches = $('.an-settings-switch');
				jOptions = $('.an-settings-option');

				// remove empty tab
				jFieldsets.each(function()
				{
					var jThis = $(this);
					if(!jThis.find('h4').length)
					{
						$($.sprintf('[rel=%s]', jThis.attr('id'))).parent().add(jThis).remove();
					}
				});

				// add tab click
				tabClick = function()
				{
					jTabLinks.css('text-decoration', '');
					$(this).css('text-decoration', 'underline');
					jFieldsets.hide();
					$('#' + $(this).attr('rel')).show().parent().parent().scrollTop(0);
				};
				jTabLinks.click(tabClick);

				// add switch click
				jSwitches.click(function()
				{
					var jThis = $(this);
					jThis.parent().parent().find('.an-settings-option').attr('disabled', !jThis.is(':checked'));
				});

				getInfo = function(jTarget)
				{
					var oInfo = jTarget.data('info');

					if(!oInfo)
					{
						var aInfo;
						if(jTarget.hasClass('an-settings-switch'))
						{
							aInfo = jTarget.attr('id').replace(/an-settings-switch-/, '').split(sSep);
							oInfo = { page: aInfo[0] * 1, mod: aInfo[1], id: aInfo[2] };
						}
						else
						{
							aInfo = jTarget.attr('id').replace(/an-settings-option-/, '').split(sSep);
							oInfo = { page: aInfo[0] * 1, name: aInfo[1], type: jTarget[0].nodeName == 'SELECT' ? 'select' : jTarget.attr('type') };
						}
						jTarget.data('info', oInfo);
					}

					return oInfo;
				};

				saveOptions = function()
				{
					var oSwitches = {};
					jSwitches.each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						$.make('a', $.make('o', oSwitches, oInfo.mod), oInfo.id);

						if(jThis.is(':checked')) oSwitches[oInfo.mod][oInfo.id].push(oInfo.page);
					});
					AN.util.storage('an_switches', oSwitches);

					var oOptions = {};
					var bHasQuote = false;
					jOptions.each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						$.make('o', oOptions, oInfo.name);

						if(oInfo.type == 'checkbox')
						{
							oOptions[oInfo.name][oInfo.page] = jThis.is(':checked');
						}
						else if(oInfo.type == 'text' || oInfo.type == 'select')
						{
							if(!bHasQuote && oInfo.type == 'text' && jThis.val().match(/\'|\"/)) bHasQuote = true;
							oOptions[oInfo.name][oInfo.page] = $.correct(jThis.val());
						}
					});
					if(bHasQuote && !confirm('發現文字設定中含有引號!\n若該設定屬於CSS相關項目(如顏色設定), 則有可能導致版面錯誤!\n\n確定進行儲存?')) return false;
					AN.util.storage('an_options', oOptions);

					return true;
				};

				fillOptions = function(bFillAll, bUseDefault)
				{
					var jScope = (bFillAll) ? $('#an-settings-main-panels') : jFieldsets.filter(':visible');
					var oDB = AN.modFn.getDB(bUseDefault);

					jScope.find('.an-settings-switch').each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						var bOn = ($.inArray(oInfo.page, oDB.oSwitches[oInfo.mod][oInfo.id]) != -1);
						jThis.attr('checked', bOn).parent().parent().find('.an-settings-option').attr('disabled', !bOn);
					});

					jScope.find('.an-settings-option').each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						var uValue = oDB.oOptions[oInfo.name][oInfo.page];
						if(oInfo.type == 'checkbox')
						{
							jThis.attr('checked', uValue);
						}
						else if(oInfo.type == 'text' || oInfo.type == 'select')
						{
							jThis.val(uValue);
						}
					});
				};

				fillBoolean = function(bSwitchOn)
				{
					var jScope = (bFillAll) ? $('#an-settings-main-panels') : jFieldsets.filter(':visible');
					jScope.find('.an-settings-switch').attr('checked', bSwitchOn)
					jScope.find('.an-settings-option').attr('disabled', !bSwitchOn);
				};

				importSettings = function()
				{
					var oSettings = JSON.parse(prompt('輸入滙入設定資料', ''));
					if(!oSettings) return alert('資料剖析錯誤!');

					var jScope = (bFillAll) ? $('#an-settings-main-panels') : jFieldsets.filter(':visible');

					if(oSettings.oSwitches)
					{
						jScope.find('.an-settings-switch').each(function()
						{
							var jThis = $(this);
							var oInfo = getInfo(jThis);

							if(oSettings.oSwitches[oInfo.mod] && oSettings.oSwitches[oInfo.mod][oInfo.id])
							{
								var bOn = ($.inArray(oInfo.page, oSettings.oSwitches[oInfo.mod][oInfo.id]) != -1);
								jThis.attr('checked', bOn).parent().parent().find('.an-settings-option').attr('disabled', !bOn);
							}
						});
					}

					if(oSettings.oOptions)
					{
						jScope.find('.an-settings-option').each(function()
						{
							var jThis = $(this);
							var oInfo = getInfo(jThis);

							if(oSettings.oOptions[oInfo.name] && oInfo.page in oSettings.oOptions[oInfo.name])
							{
								var uValue = oSettings.oOptions[oInfo.name][oInfo.page];

								if(oInfo.type == 'checkbox')
								{
									jThis.attr('checked', uValue);
								}
								else if(oInfo.type == 'text' || oInfo.type == 'select')
								{
									jThis.val(uValue);
								}
							}
						});
					}

					alert('滙入成功!');
				};

				exportSettings = function()
				{
					var jScope = (bFillAll) ? $('#an-settings-main-panels') : jFieldsets.filter(':visible');
					var oExport = { oSwitches: {}, oOptions: {} };

					jScope.find('.an-settings-switch').each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						var oFn = $.make('a', $.make('o', oExport.oSwitches, oInfo.mod), oInfo.id);
						if(jThis.is(':checked')) oFn.push(oInfo.page);
					});

					jScope.find('.an-settings-option').each(function()
					{
						var jThis = $(this);
						var oInfo = getInfo(jThis);
						var oFn = $.make('o', oExport.oOptions, oInfo.name);

						if(oInfo.type == 'checkbox')
						{
							oFn[oInfo.page] = jThis.is(':checked');
						}
						else if(oInfo.type == 'text' || oInfo.type == 'select')
						{
							oFn[oInfo.page] = $.correct(jThis.val());
						}
					});

					prompt('滙出成功!\n請複製以下代碼', JSON.stringify(oExport));
				};

				$.each(
				{
					'確定': function()
					{
						if(saveOptions()) location.reload();
					},
					'取消': AN.shared.gray,
					'套用': function()
					{
						saveOptions();

						AN.box.oSwitches = null;
						AN.box.oOptions = null;
						AN.modFn.getDB();
					}
				}, function(sDesc, fControl)
				{
					$($.sprintf('<li><a href="javascript:">%s</a></li>', sDesc)).click(fControl).appendTo('#an-settings-main-control-1');
				});

				$.each(
				{
					'復原': function()
					{
						fillOptions(bFillAll, false);
					},
					'全選': function()
					{
						fillBoolean(true);
					},
					'全否': function()
					{
						fillBoolean(false);
					},
					'重設': function()
					{
						fillOptions(bFillAll, true);
					},
					'滙入': function()
					{
						importSettings();
					},
					'滙出': function()
					{
						exportSettings();
					}
				}, function(sDesc, fControl)
				{
					$($.sprintf('<li><a href="javascript:">%s</a></li>', sDesc)).click(fControl).appendTo('#an-settings-main-control-2');
				});

				$('<li id="an-settings-main-control-last"><label for="an-settings-main-control-currentonly">僅套用到本頁選項</label></li>')
				.prepend($('<input type="checkbox" id="an-settings-main-control-currentonly" checked="checked" />').click(function()
				{
					bFillAll = !$(this).is(':checked');
				}))
				.appendTo('#an-settings-main-control-2');
			}

			fillOptions(true, false);
			//$('#an-settings-tabs a:first').click(); // FF3 throws error
			tabClick.call($('#an-settings-tabs a:first')[0]);
			AN.shared.gray(false, 'an-settings');
		});
	}
},

'71c9bd88-dc3b-4a97-b04c-20052dcfcdcb':
{
	desc: '加入評測元件',
	page: { 65534: true },
	type: 1,
	once: function()
	{
		AN.shared.addMain('評測', function()
		{
			if(!$('#an-benchmark').length)
			{
				AN.util.addStyle(' \
				#an-benchmark div { padding: 0.5em; } \
				');

				AN.shared.box('an-benchmark', '評測', 550, 500).append('<div><table><thead><tr><td>#</td><td>功能</td><td>執行時間</td></tr></thead><tbody></tbody></table></div>');
			}

			var uCount, sName, sTime;
			var nCount, nSum, nTotal;
			nCount = nSum = nTotal = 0;
			var aBg = [AN.util.getOptions('sMainBgColor'), AN.util.getOptions('sSecBgColor')];

			var sHTML = '';
			$.each(AN.box.aBenchmark, function(i)
			{
				switch(this.type)
				{
					case 'start':
					uCount = 'N/A';
					sName = $.sprintf('--- %s 開始 ---', this.name);
					sTime = 'N/A';
					break;

					case 'fn':
					uCount = ++nCount;
					sName = this.name;
					sTime = (this.time || 'ε') + ' ms';

					nSum += this.time;
					nTotal += this.time;
					break;

					case 'end':
					uCount = 'N/A';
					sName = $.sprintf('--- %s 結束 ---', this.name);
					sTime = nSum + ' ms';
					break;

					case 'final':
					sHTML += $.sprintf('<tr><td>N/A</td><td>+++ 總和 +++</td><td>%s ms</td></tr>', nTotal);
					nTotal = 0;

					uCount = 'N/A';
					sName = '~~~ 回合結束 ~~~';
					sTime = this.time + ' ms';
					break;
				}

				sHTML += $.sprintf('<tr style="background-color: %s;"><td>%s</td><td>%s</td><td>%s</td></tr>', aBg[i % 2], uCount, sName, sTime);

				if(this.type == 'end') nSum = 0;
			});
			$('#an-benchmark tbody').append(sHTML);

			AN.box.aBenchmark = [];

			AN.shared.gray(true, 'an-benchmark');
		});
	}
},

'0868eb64-9631-42dd-8b5c-02f11a8c9a48':
{
	desc: '加入記錄元件 [右下]',
	page: { 65534: true },
	type: 1,
	options:
	{
		bAddLogButton: { desc: '加入記錄元件開關按扭', defaultValue: false, type: 'checkbox' },
		bAutoShowLog: { desc: '自動顯示記錄視窗', defaultValue: true, type: 'checkbox' },
		bShowDetailLog: { desc: '顯示詳盡記錄', defaultValue: false, type: 'checkbox' }
	},
	once: function()
	{
		var getMod = function()
		{
			var jMod = $('#an-log');
			if(jMod.length) return jMod;

			AN.util.addStyle(' \
			#an-log { display: none; height: 30%; width: 20em; bottom: 0; right: 0; } \
			#an-log-header { font-weight: bold; border-bottom-width: 1px; padding-bottom: 0.2em; } \
			#an-log-content li { display: none; border-bottom: 1px dotted; padding: 0.3em 0; } \
			');

			return $('<div id="an-log" class="an-mod an-small"><div id="an-log-header">Log</div><ul id="an-log-content"></ul></div>').appendTo('#an-ui');
		};

		if(AN.util.getOptions('bAddLogButton'))
		{
			AN.shared.addMain('記錄', function()
			{
				getMod().fadeToggle();
			});
		}

		AN.shared.log = function(sLog)
		{
			var jLog = getMod();

			if($.isRubbish(sLog)) return;

			if(AN.util.getOptions('bAutoShowLog')) jLog.fadeIn('fast');

			var dDate = new Date();
			var hour = dDate.getHours();
			if(hour < 10) hour = '0' + hour;
			var min = dDate.getMinutes();
			if(min < 10) min = '0' + min;
			
			var jLogContainer = $('#an-log-content');

			$($.sprintf('<li>%s:%s %s</li>', hour, min, sLog)).prependTo(jLogContainer).slideDown('slow');
			
			jLogContainer.children(':gt(50)').remove();
		};

		if(AN.util.getOptions('bShowDetailLog')) AN.shared.log2 = AN.shared.log;
		if(AN.box.debugMode) AN.shared.debug = AN.shared.log;

		$.ajaxSetup(
		{
			error: function(xhr, sStatus, err)
			{
				AN.shared.log($.sprintf('讀取目標時發生錯誤: %s %s', xhr.status, xhr.statusText));
			}
		});
	}
},

'e9051bb8-2613-4f10-82ec-69290831c6a5':
{
	desc: '加入按扭元件 [左上]',
	page: { 65534: true },
	type: 1,
	options:
	{
		bAddButtonsButton: { desc: '加入按扭元件開關按扭', defaultValue: false, type: 'checkbox' },
		bAutoShowButtons: { desc: '自動顯示按扭元件', defaultValue: true, type: 'checkbox' }
	 },
	once: function()
	{
		var getMod = function()
		{
			var jMod = $('#an-buttons');
			if(jMod.length) return jMod;

			AN.util.addStyle($.sprintf(' \
			#an-buttons { %s left: 5px; top: 30px; border-left: 5px solid; padding-left: 0.3em; } \
			#an-buttons a { padding: 0.15em 0; } \
			', AN.util.getOptions('bAutoShowButtons') ? '' : 'display: none;'));

			return $('<div id="an-buttons" class="an-mod"><ul class="an-menu"></ul></div>').appendTo('#an-ui');
		};

		if(AN.util.getOptions('bAddButtonsButton'))
		{
			AN.shared.addMain('按扭', function()
			{
				getMod().fadeToggle();
			});
		}

		AN.shared.addButton = function(sDesc, fHandler)
		{
			var jButtons = getMod();
			if(!sDesc) return;
			jButtons.find('ul').append($('<li><a href="javascript:">' + sDesc + '</a></li>').click(fHandler));
		};
	}
},

'437dc7da-fdfa-429a-aec5-329c80222327':
{
	desc: '加入連結元件 [左中]',
	page: { 65534: true },
	type: 1,
	options:
	{
		bAddLinksButton: { desc: '加入連結元件開關按扭', defaultValue: false, type: 'checkbox' },
		bAutoShowLinks: { desc: '自動顯示連結元件', defaultValue: true, type: 'checkbox' }
	 },
	once: function(jDoc)
	{
		var getMod = function()
		{
			var jMod = $('#an-links');
			if(jMod.length) return jMod;

			AN.util.addStyle($.sprintf(' \
			#an-links { %s top: 50%; left: 0; text-align: right; } \
			#an-links a { padding: 0.3em 0.1em 0.2em 1.5em; } \
			#an-links-top li { border-bottom-width: 1px; } \
			#an-links-middle li { border-width: 1px 0; } \
			#an-links-bottom li { border-top-width: 1px; } \
			', AN.util.getOptions('bAutoShowLinks') ? '' : 'display: none;'));

			var jMod = $('<div id="an-links" class="an-mod"><ul id="an-links-top" class="an-menu"></ul><ul id="an-links-middle" class="an-menu"></ul><ul id="an-links-bottom" class="an-menu"></ul></div>').appendTo('#an-ui');

			jDoc.defer(1, '調整連結元件位置', function() // after all links are added
			{
				jMod.css('margin-top', - jMod.height() / 2);
			});

			return jMod;
		};

		if(AN.util.getOptions('bAddLinksButton'))
		{
			AN.shared.addMain('連結', function()
			{
				getMod().fadeToggle();
			});
		}

		AN.shared.addLink = function(sDec, uExtra, nPos)
		{
			if(nPos === undefined) nPos = 1;

			var jLinks = getMod();

			if(!sDec) return;

			jLinks.children().eq(nPos).append(
				(typeof uExtra == 'string') ?
				$.sprintf('<li><a href="%s">%s</a></li>', uExtra, sDec) :
				$('<li><a href="javascript:">' + sDec + '</a></li>').click(uExtra)
			);
		};
	}
},

'1c6e8869-8148-4e58-b440-31e1bee4aef1':
{
	desc: '加入資訊元件 [左下]',
	page: { 65534: true },
	type: 1,
	options:
	{
		bAddInfoButton: { desc: '加入資訊元件開關按扭', defaultValue: false, type: 'checkbox' },
		bAutoShowInfo: { desc: '自動顯示資訊視窗', defaultValue: true, type: 'checkbox' },
	},
	once: function(jDoc)
	{
		var getMod = function()
		{
			var jMod = $('#an-info');
			if(jMod.length) return jMod;

			AN.util.addStyle($.sprintf(' \
			#an-info { %s; left: 10px; bottom: 10px; border-width: 0 0 1px 1px; } \
			#an-info-content { padding: 1em 1em 0 0.5em !important; } \
			#an-info-footer { text-align: right; font-weight: bold; } \
			#an-info li { display: none; padding-bottom: 0.5em; } \
			#an-info li a { display: inline; } \
			',
			AN.util.getOptions('bAutoShowInfo') ? '' : 'display: none'
			));

			return $('<div id="an-info" class="an-mod"><ul id="an-info-content" class="an-menu an-small"></ul><div class="an-small" id="an-info-footer">Info</div></div>').appendTo('#an-ui');
		};
		
		(function()
		{
			function check(){ return $('#hkg_bottombar').length && AN.util.addStyle('#an-info { bottom: 30px !important; }') && true; }
		
			// jQuery onload event sometimes does not fire on chrome?
			!check() && window.addEventListener ? window.addEventListener('load', check, false) : window.attachEvent('onload', check);
		})();

		if(AN.util.getOptions('bAddInfoButton'))
		{
			AN.shared.addMain('資訊', function()
			{
				getMod().fadeToggle();
			});
		}

		AN.shared.addInfo = function(sInfo)
		{
			getMod();
			if(!sInfo) return;
			$('<li>' + sInfo + '</li>').appendTo('#an-info-content').fadeIn('slow');
		};
	}
},

'56ecac51-0257-4d34-897d-6331247b017d':
{
	desc: '加入關於元件',
	page: { 65534: 'comp' },
	type: 1,
	once: function()
	{
		AN.shared.addMain('關於', function()
		{
			if(!$('#an-about').length)
			{
				AN.util.addStyle('\
				#an-about > div { margin: 0.5em; } \
				#an-about h1 { margin: 0.5em; font-size: 2em; text-align: center; } \
				#an-about hr { border-width: 1px; margin: 1em 0.5em; } \
				#an-about div div { overflow-y: auto; overflow-x: hidden; width: 80%; height: 200px; margin: 0 auto; border-width: 1px; } \
				#an-about dl { margin: 0; padding: 0 0.5em 0.5em; font-size: 0.8em; } \
				#an-about dt { margin-top: 1em; } \
				#an-about dd { margin: 0; line-height: 1.3; } \
				#an-about p { margin: 1em 0; font-size: 0.75em; text-align: center; } \
				');

				var jAbout = AN.shared.box('an-about', '關於', 500, 'auto').append('<div><h1>Helianthus.annuus</h1><hr /><div><dl></dl></div><p>&copy; 2009 向日 Licenced under <a href="http://www.gnu.org/licenses/gpl.html" target="_blank">GNU General Public License v3</a></p></div>');
				var sHTML = '';

				sHTML += '<dt>[程式]</dt>';
				$.each(
				{
					'名稱': 'Helianthus.annuus',
					'作者': '<a target="_blank" href="ProfilePage.aspx?userid=148720">向日</a>',
					'主頁': '<a target="_blank" href="http://code.google.com/p/helianthus-annuus/">http://code.google.com/p/helianthus-annuus/</a>',
					'版本': AN.version,
					'儲存方式': $.sprintf('<select id="an-about-storage"><option>Flash</option></select>'),
					'除錯模式': AN.box.debugMode ? '啟用' : '停用'
				}, function(sName, sValue)
				{
					sHTML += $.sprintf('<dd>%s: %s</dd>', sName, sValue);
				});

				sHTML += '<dt>[元件]</dt>';
				$.each(AN.mod, function(sMod)
				{
					sHTML += $.sprintf('<dd>%s by %s: %s</dd>', sMod, this.author, this.ver);
				});

				jAbout.find('dl').append(sHTML);

				if($.support.localStorage) $('#an-about-storage').append('<option>DOM</option>');
				$('#an-about-storage').val(AN.box.storageMode).change(function()
				{
					AN.util.cookie('an-storagemode', $(this).val());
					location.reload();
				});
			}

			AN.shared.gray(true, 'an-about');
		});
	}
},

'629944a0-a4f2-493c-8c8d-e1261a9264f9':
{
	desc: '鼠標遠離UI元件時半透明 [buggy on IE8]',
	page: { 65534: false },
	type: 1,
	options: { nUIOpacity: { desc: '透明度 (10 = 移除半透明)', type: 'select', defaultValue: 3, choices: [10,9,8,7,6,5,4,3,2,1,0] } },
	once: function()
	{
		AN.util.stackStyle($.sprintf('\
		.an-mod { opacity: %s; -ms-filter: alpha(opacity=%s); } \
		.an-mod:hover { opacity: 1; -ms-filter: alpha(opacity=100); } \
		',
		AN.util.getOptions('nUIOpacity') / 10, AN.util.getOptions('nUIOpacity') * 10
		));
	}
},

'0b587724-a3a7-41be-95d8-96c726d38343':
{
	desc: '除錯模式(續)',
	page: { 65535: 'comp' },
	type: 1,
	once: function()
	{
		if(!AN.box.debugMode) return;

		AN.shared('log');
		//AN.shared('addInfo');
		AN.shared('addLink');

		AN.shared('addButton', '移除儲存資料', function()
		{
			if(confirm('確定移除儲存資料?'))
			{
				AN.util.storage(null);
				location.reload();
			}
		});

		AN.shared('addButton', '顯示儲存資料', function()
		{
				if(!$('#an-savedsettings').length)
				{
					AN.shared('box', 'an-savedsettings', '儲存資料', null, 'max');
					AN.util.addStyle('#an-savedsettings { padding: 0 2em; } #an-savedsettings code { display: block; white-space: pre; margin: 1em 0; font-family: Consolas; }');
					$('#an-savedsettings').append('<code></code>');
				}
				$('#an-savedsettings code').text(AN.util.storage().replace(/{[^{]*},?/g, function(sMatch){ return sMatch.replace(/,/g, ',\n'); }));
				AN.shared('gray', true, 'an-savedsettings');
		});

		AN.shared('addButton', '顯示功能列表', function()
		{
				if(!$('#an-savedsettings').length)
				{
					AN.shared('box', 'an-functionlist', '功能列表', 600, 400);
					AN.util.addStyle('#an-functionlist textarea { margin: 10px; width: 570px; height: 370px; font-family: Consolas; }');
					$('#an-functionlist').append('<textarea readonly="readonly"></textarea>');

					var sList = '';
					$.each(AN.mod, function(sMod)
					{
						if(!this.fn) return;

						sList += '\r' + sMod + ':\r\r';

						$.each(this.fn, function()
						{
							sList += ' * ' + this.desc + '\r';
						});
					});

					$('#an-functionlist textarea').text(sList);
				}
				AN.shared('gray', true, 'an-functionlist');
		});
	}
}

}};
//////////////////// START OF - [jQuery Extension] ////////////////////

$.extend(
{
	blank: function(){},

	time: function(nStart)
	{
		return nStart ? $.time() - nStart : +new Date;
	},

	correct: function(sTarget)
	{
		if(sTarget == 'true')
		{
			return true;
		}
		else if(sTarget == 'false')
		{
			return false;
		}
		else if(!isNaN(sTarget) && sTarget !== '')
		{
			return sTarget * 1;
		}
		else
		{
			return sTarget;
		}
	},

	doc: function(sHTML)
	{
		var eDiv = document.createElement('div');
		eDiv.innerHTML = sHTML;
		return $(eDiv);
	},

	getDoc: function(sURL, success)
	{
		$.ajax(
		{
			url: sURL,
			dataType: 'text',
			timeout: 10000,
			success: function(sHTML)
			{
				var jNewDoc = $.doc(sHTML);
				jNewDoc.pageCode() & 32769 ? this.error() : success(jNewDoc);
			},
			error: function()
			{
				AN.shared('log', '頁面讀取失敗, 5秒後重新讀取...');
				setTimeout(function(){ $.getDoc(sURL, success); }, 5000);
			}
		});
	},

	getLength: function(uTarget)
	{
		if('length' in uTarget) return uTarget.length;

		for(var nCount in uTarget){};
		return nCount;
	},

	make: function(sType, uTarget)
	{
		$.each(arguments, function(i, sName)
		{
			if(i < 2) return;

			if(!uTarget[sName]) uTarget[sName] = (sType == 'o' ? {} : []);
			uTarget = uTarget[sName];
		});

		return uTarget;
	},

	isEmpty: function(uTarget)
	{
		if('length' in uTarget) return uTarget.length;
		for(var i in uTarget){ return false; }
		return true;
	},

	isRubbish: function(uTarget)
	{
		return (uTarget === undefined || uTarget === null || uTarget === NaN);
	},

	winWidth: function(nMutiply)
	{
		return Math.round((window.innerWidth || $(window).width()) * (nMutiply || 1));
	},

	winHeight: function(nMutiply)
	{
		return Math.round((window.innerHeight || $(window).height()) * (nMutiply || 1));
	}
});

$.fn.extend(
{
	toFlash: function(sURL, oAttrs, oParams)
	{
		if(!oAttrs) oAttrs = {};
		if(!oAttrs.id) oAttrs.id = this[0].id || 'an-flash-' + $.time(); // IE: must have an id in order to allow JS access
		if(!oAttrs.width) oAttrs.width = 0;
		if(!oAttrs.height) oAttrs.height = 0;

		if(!oParams) oParams = {};
		if(!oParams.allowscriptaccess) oParams.allowscriptaccess = 'always';

		if($.browser.msie)
		{
			oAttrs.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
			oParams.movie = sURL;
		}
		else
		{
			oAttrs.data = sURL;
			oAttrs.type = 'application/x-shockwave-flash';
		}

		var sAttrs = '';
		var sParams = '';

		$.each(oAttrs, function(sName, sValue)
		{
			sAttrs += $.sprintf('%s="%s" ', sName, sValue);
		});

		$.each(oParams, function(sName, sValue)
		{
			sParams += $.sprintf('<param name="%s" value="%s" />', sName, sValue);
		});

		var sHTML = $.sprintf('<object %s>%s</object>', sAttrs, sParams);

		if($.browser.msie) // IE: element must be created in this way in order to allow JS access
		{
			this[0].outerHTML = sHTML;
		}
		else
		{
			this.replaceWith(sHTML);
		}

		return $('#' + oAttrs.id);
	},

	fn: function(fToExec)
	{
		if(this.length) fToExec.call(this);
		return this;
	},

	outer: function()
	{
		if(!this[0]) return null;

		return this[0].outerHTML ? this[0].outerHTML : $('<div></div>').append(this.eq(0).clone()).html();
	},

	aO: function()
	{
		alert(this.outer());
		return this;
	},

	aL: function()
	{
		alert(this.length);
		return this;
	},

	fadeToggle: function(sSpeed)
	{
		if(!sSpeed) sSpeed = 'normal';
		return this.is(':hidden') ? this.fadeIn(sSpeed) : this.fadeOut(sSpeed);
	},

	up: function(sSelector, nTh)
	{
		if(!nTh) nTh = 1;
		return this.map(function()
		{
			var nCount = 0;
			var eCur = this;
			while(eCur && eCur.ownerDocument)
			{
				eCur = eCur.parentNode;
				if($(eCur).is(sSelector) && ++nCount >= nTh) return eCur;
			}
		});
	},

	contains: function(jNode)
	{
		return this[0].contains ? this[0].contains(jNode[0]) : !!(this[0].compareDocumentPosition(jNode[0]) & 16);
	},

	//--------[AN Related]--------//

	pageName: function()
	{
		if(this.sPageName) return this.sPageName;

		return this.sPageName =
			$('#ctl00_ContentPlaceHolder1_SystemMessageBoard', this).length && 'message' ||
			$('#aspnetForm', this).length && $('#aspnetForm', this).attr('action').match(/[^.]+/)[0].toLowerCase() ||
			$('body > :first', this).is('b') && 'terms' ||
			'error';
	},

	pageCode: function()
	{
		if('nPageCode' in this) return this.nPageCode;

		var sPageName = this.pageName();
		var nPageCode;

		$.each(AN.box.oPageMap, function(sPage)
		{
			if(this.action == sPageName)
			{
				nPageCode = sPage * 1;
				return false;
			}
		});
		if(!nPageCode) nPageCode = 0;

		return (this.nPageCode = nPageCode);
	},

	pageScope: function()
	{
		var jScope = this.closest('div');
		return jScope.length ? jScope : this;
	},

	pageNo: function()
	{
		return this.pageScope().find('select[name=page]:first').val() * 1;
	},

	replies: function(sSelector)
	{
		if(this.jReplies) return this.jReplies;

		var jReplies = this.jReplies = this.find('.repliers');

		jReplies.extend(
		{
			jContents: $([]),
			jNameLinks: $([])
		});

		jReplies.each(function()
		{
			var jThis = $(this), jNameLink = jThis.find('.repliers_left a:first');

			jThis
			.data('jContent', jThis.find('.repliers_right td:first'))
			.data('jNameLink', jNameLink)
			.data('sUserid', jNameLink.attr('href').replace(/.+?userid=(\d+).*/, '$1'))
			.data('sUserName', jNameLink.html());

			jReplies.jContents.push(jThis.data('jContent')[0]);
			jReplies.jNameLinks.push(jThis.data('jNameLink')[0]);
		});

		return sSelector ? jReplies.filter(sSelector) : jReplies;
	},

	treeTop: function()
	{
		return (this[0] === document || $(document.documentElement).contains(this)) ? $() : this;
	},

	topicTable: function()
	{
		if(this.jTopicTable) return this.jTopicTable;

		var jThis = this;
		this.treeTop().find('td,th').filter(function(){ return $(this).children().length === 0; }).each(function()
		{
			if(/\s*最後回應時間/.test($(this).html()))
			{
				jThis.jTopicTable = $(this).up('table');
				return false;
			}
		});

		return this.jTopicTable;
	},

	topics: function(sSelector)
	{
		if(this.jTopics) return this.jTopics;

		var jTopics = this.jTopics = this.topicTable().find('tr').filter(function(){ return !!$(this).children().children('a').length; });

		jTopics
		.extend(
		{
			jNameLinks: $([]),
			jTitleCells: $([]),
			jTbody: this.topicTable().children()
		})
		.each(function()
		{
			var jThis = $(this), jLinks = jThis.find('a');

			jThis
			.data('jNameLink', jLinks.filter(':last'))
			.data('jTitleCell', jLinks.eq(0).parent())
			.data('sTitle', jLinks.eq(0).html())
			.data('sTopicid', jLinks.eq(0).attr('href').replace(/.+?id=(\d+).*/, '$1'))
			.data('sUserName', jLinks.filter(':last').html());

			jTopics.jNameLinks.push(jThis.data('jNameLink')[0]);
			jTopics.jTitleCells.push(jThis.data('jTitleCell')[0]);
		});

		return sSelector ? jTopics.filter(sSelector) : jTopics;
	},

	defer: function(nPos, uArg, fHandler)
	{
		var oArg = (typeof uArg == 'string') ? { sDesc: uArg, aHandler: [fHandler] } : uArg;
		$.make('a', this, 'aDefer', nPos).push(oArg);

		return this;
	}
});

//////////////////// END OF - [jQuery Extension] ////////////////////
//////////////////// START OF - [AN Extension] ////////////////////

$.extend(AN,
{
	shared: function(sFnName)
	{
		if(AN.shared[sFnName]) AN.shared[sFnName].apply(null, Array.prototype.slice.call(arguments, 1));
	},

	box:
	{
		aBenchmark: [],
		oTypeMap:
		{
			1: '核心設定',
			2: '樣式設定',
			3: '佈局設定',
			4: '修正修改',
			5: '加入物件',
			6: '其他功能',

			7: 'AJAX化',
			8: '元件重造',
			9: '組合按扭'
		},
		oPageMap:
		{
			65535: { action: null, desc: '所有頁' },
			65534: { action: null, desc: '所有正常頁' },
			1: { action: 'error', desc: '所有錯誤頁' },
			2: { action: 'default', desc: '主論壇頁' },
			4: { action: 'topics', desc: '標題頁' },
			8: {action: 'search',  desc: '搜尋頁' },
			16: { action: 'tags', desc: '標籤搜尋頁' },
			32: { action: 'view', desc: '帖子頁' },
			64: { action: 'profilepage', desc: '用戶資料頁' },
			128: { action: 'sendpm', desc: '私人訊息發送頁' },
			256: { action: 'post', desc: '發佈/回覆頁' },
			512: { action: 'login', desc: '登入頁' },
			1024: { action: 'giftpage', desc: '人氣頁' },
			2048: { action: 'blog', desc: '網誌頁' },
			4096: { action: 'message', desc: '系統信息頁' }
		}
	},

	//--------[Utility Functions]--------//

	util:
	{
		addFnType: function(uType, sDec)
		{
			AN.box.oTypeMap[uType] = sDec;
		},

		stackStyle: function(sStyle)
		{
			if(AN.util.stackStyle.sStyle === undefined)
			{
				AN.util.stackStyle.sStyle = '';
				$().bind('an.defer5', function()
				{
					AN.util.addStyle(AN.util.stackStyle.sStyle);
					AN.util.stackStyle.sStyle = '';
				});
			}

			AN.util.stackStyle.sStyle += sStyle;
		},

		addStyle: function(sStyle)
		{
			if(!this.jStyle) this.jStyle = $('<style id="an-style" type="text/css"></style>').appendTo('head');

			if(AN.box.debugMode) sStyle = sStyle.replace(/(^|}|\*\/)\s+/g, '$1\n'); // indentation
			this.jStyle[0].styleSheet ? this.jStyle[0].styleSheet.cssText += sStyle : this.jStyle.append(sStyle);
		},

		changeForum: function(nForum)
		{
			location.replace(location.href.replace(/forum\d+/, 'forum' + nForum));
		},

		cookie: function(sName, sValue)
		{
			if(sValue === undefined) // GET
			{
				var nStart = document.cookie.indexOf(sName + '=');
				if(nStart == -1) return null;

				nStart += sName.length + 1;

				var nEnd = document.cookie.indexOf(';', nStart);
				if(nEnd == -1) nEnd = document.cookie.length;

				return document.cookie.substring(nStart,nEnd);
			}
			else
			{
				var dExpire = new Date;
				dExpire.setFullYear(sValue ? dExpire.getFullYear() + 1 : dExpire.setFullYear(1999)); // SET : DEL
				document.cookie = $.sprintf('%s=%s; domain=%s; expires=%s; path=/', sName, sValue || '', location.hostname, dExpire.toUTCString());

				return true;
			}
		},

		storage: function(sName, uToSet)
		{
			var storage = arguments.callee.storage || (arguments.callee.storage =
				AN.box.storageMode == 'Flash' && {
					get: function(sProfile, sName){ return AN.box.eLSO.get(sProfile, sName); },
					set: function(sProfile, sName, sData){ AN.box.eLSO.set(sProfile, sName, sData.replace(/\\\\/g, '\\')); }, // escape the backslash so that it will not be removed on GET
					remove: function(sProfile, sName){ AN.box.eLSO.remove(sProfile, sName); }
				}
				||
				AN.box.storageMode == 'DOM' && (function()
				{
					var LS = window.localStorage || window.globalStorage[location.hostname];
					return {
						get: function(sProfile, sName){ var r = LS[sProfile + '___' + sName]; return r && r.value || r; },
						set: function(sProfile, sName, sData){ LS[sProfile + '___' + sName] = sData; },
						remove: function(sProfile, sName){ LS.removeItem(sProfile + '___' + sName); }
					};
				})()
			);

			var sProfile = 'default';
			var sData = '';

			if(sName === undefined) // SHOW ALL
			{
				$.each(['an_data', 'an_switches', 'an_options'], function()
				{
					var uCookie = storage.get(sProfile, this + '');
					if(uCookie) sData += uCookie + '\n\n';
				});
				return sData;
			}
			else if(sName == null) // DEL ALL
			{
				$.each(['an_data', 'an_switches', 'an_options'], function()
				{
					storage.remove(sProfile, this + '');
					storage.remove(sProfile, this + '_backup');
				});
			}
			else if(uToSet === undefined) // GET
			{
				sData = storage.get(sProfile, sName);
				if(sData) sData = JSON.parse(sData);
				return sData || null;
			}
			else if(uToSet) // SET
			{
				var sData = JSON.stringify(uToSet);
				storage.set(sProfile, sName, sData);
			}
			else // DEL
			{
				storage.remove(sProfile, sName);
			}

			return true;
		},

		data: function(sName, uValue)
		{
			var oData = AN.util.storage('an_data') || {};

			// GET
			if(uValue === undefined)
			{
				if(oData[sName] !== undefined)
				{
					return oData[sName];
				}
				return null;
			}
			// SET
			else
			{
				uValue === null ? delete oData[sName] : oData[sName] = uValue;
				return AN.util.storage('an_data', oData);
			}
		},

		getData: function(sFile, fToExec)
		{
			var oExternal = $.make('o', AN.box, 'external');
			if(oExternal[sFile]) fToExec(oExternal[sFile]);
			else $.getScript($.sprintf('http://helianthus-annuus.googlecode.com/svn/other/an.v3.%s.js', sFile), function()
			{
				fToExec(oExternal[sFile]);
			});
		},

		getOpenerInfo: function(jDoc, fToExec)
		{
			var oInfo = arguments.callee.oInfo;

			if(oInfo)
			{
				if(oInfo.sId)
				{
					fToExec(oInfo);
				}
				else
				{
					return setTimeout(function(){ AN.util.getOpenerInfo(jDoc, fToExec); }, 100);
				}
			}
			else
			{
				oInfo = arguments.callee.oInfo = {};

				if(jDoc.pageNo() == 1)
				{
					var jOpener = jDoc.replies(':first');
					fToExec(oInfo = { sId: jOpener.data('sUserid'), sName: jOpener.data('sUserName') });
				}
				else
				{
					$.get('/view.aspx?message=' + window.messageid, function(sHTML)
					{
						var jLink = $.doc(sHTML).find('.repliers_left:first a:first');
						oInfo = { sId: jLink.attr('href').replace(/.+?userid=(\d+).*/, '$1'), sName: jLink.html() };
						fToExec(oInfo);
					});
				}
			}
		},

		getOpacityStr: function(nOpacity)
		{
			return $.support.opacity ? $.sprintf('opacity: %s', nOpacity / 10) : $.sprintf('filter: alpha(opacity=%s)', nOpacity * 10);
		},

		getOptions: function(sOptionName)
		{
			var oOptions = $.make('o', arguments.callee, 'oOptions');

			if($.isEmpty(oOptions))
			{
				$.each(AN.box.oOptions, function(sName)
				{
					$.each(this, function(sPage, uValue)
					{
						if($().pageCode() & sPage)
						{
							oOptions[sName] = uValue;
							return false;
						}
					});
				});
			}

			return sOptionName ? oOptions[sOptionName] : oOptions;
		},

		getForumNo: function()
		{
			return location.hostname.replace(/forum(\d+).+/, '$1') * 1;
		},

		getPageNo: function(sURL)
		{
			var sExtract = sURL.replace(/.+?page=(\d+).*/i, '$1');
			return isNaN(sExtract) ? 1 : sExtract * 1;
		},

		getURL: function(oParam)
		{
			var oSearch = {};
			var aParam = location.search.replace(/^\?/, '').split('&');
			$.each(aParam, function()
			{
				var aPair = this.split('=');
				if(aPair[1]) oSearch[aPair[0]] = aPair[1];
			});

			$.extend(oSearch, oParam);

			return '?' + $.param(oSearch);
		},

		isLoggedIn: function()
		{
			var bIsLoggedIn = arguments.callee.bIsLoggedIn;
			return (bIsLoggedIn !== undefined) ? bIsLoggedIn : (arguments.callee.bIsLoggedIn = ($('#ctl00_ContentPlaceHolder1_lb_UserName a:first').attr('href').indexOf('login.aspx') == -1));
		}
	},

	//--------[Module Functions]--------//

	modFn:
	{
		getDB: function(bGetDefault)
		{
			var oDB = (!AN.box.oSwitches) ? AN.box : {};
			$.extend(oDB, (bGetDefault ? { oSwitches: {}, oOptions: {} } : { oSwitches: AN.util.storage('an_switches') || {}, oOptions: AN.util.storage('an_options') || {} }));

			$.each(AN.mod, function(sMod)
			{
				if(!AN.mod[sMod].fn) return;

				$.make('o', oDB.oSwitches, sMod);

				$.each(AN.mod[sMod].fn, function(sId, oFn)
				{
					if(!oDB.oSwitches[sMod][sId])
					{
						$.make('a', oDB.oSwitches[sMod], sId);

						$.each(oFn.page, function(sPage, uDefault)
						{
							if(uDefault === true || uDefault == 'comp') oDB.oSwitches[sMod][sId].push(sPage * 1);
						});
					}

					if(!oFn.options) return;

					$.each(oFn.options, function(sName, oOption)
					{
						$.make('o', oDB.oOptions, sName);

						$.each(oFn.page, function(sPage)
						{
							if(oDB.oOptions[sName][sPage] === undefined)
							{
								oDB.oOptions[sName][sPage] = oOption.defaultValue;
							}
						});
					});
				});
			});

			return oDB;
		},

		execMods: function(jDoc)
		{
			var nBegin = $.time();

			var execMod = function(sMod)
			{
				if(!(AN.mod[sMod] && AN.mod[sMod].fn)) return;

				AN.box.aBenchmark.push({ type: 'start', name: sMod });

				$.each(AN.mod[sMod].fn, function(sId, oFn)
				{
					$.each(AN.box.oSwitches[sMod][sId], function()
					{
						if(oFn.page[this] != 'disabled' && this in oFn.page && $().pageCode() & this)
						{
							var aHandler = [];
							if(!AN.firstRan && oFn.once) aHandler.push(oFn.once);
							if(oFn.infinite) aHandler.push(oFn.infinite);

							if(aHandler.length)
							{
								var oArg =
								{
									sDesc: oFn.desc,
									aHandler: aHandler,
									oFn: oFn
								};
								oFn.defer ? jDoc.defer(oFn.defer, oArg) : execFn(oArg);
							}
							return false;
						}
					});
				});

				AN.box.aBenchmark.push({ type: 'end', name: sMod });
			};

			var execFn = function(oArg)
			{
				try
				{
					var nStart = $.time();

					$.each(oArg.aHandler, function()
					{
						this.call(oArg.oFn, jDoc, oArg.oFn);
					});

					AN.box.aBenchmark.push({ type: 'fn', name: oArg.sDesc, time: $.time(nStart) });
				}
				catch(err)
				{
					if(AN.shared.log)
					{
						AN.shared.log('請通知作者有關此錯誤');
						if(err.message) AN.shared.log('錯誤訊息: ' + err.message);
						if(err.type) AN.shared.log('錯誤類型: ' + err.type);
						if(err.lineNumber) AN.shared.log('錯誤行號: ' + err.lineNumber);
						AN.shared.log('出現地址: ' + location.href);
						AN.shared.log($.sprintf('發生錯誤: %s', oArg.sDesc));
					}
					else if(AN.box.debugMode) alert($.sprintf('ERROR ON EXECUATION: %s\r\n%s', oArg.sDesc, err.message));
				}
			};

			if(!jDoc) jDoc = $(document.body);

			execMod('Kernel');
			execMod('User Interface');
			$.each(AN.mod, function(sMod)
			{
				if(sMod != 'Kernel' && sMod != 'User Interface') execMod(sMod);
			});

			setTimeout(function()
			{
				AN.box.aBenchmark.push({ type: 'start', name: '延期執行項目' });

				for(var i=1; i<=5; i++)
				{
					$().trigger('an.defer' + i);
					if(jDoc.aDefer && jDoc.aDefer[i])
					{
						$.each(jDoc.aDefer[i], function(){ execFn(this); });
					}
				}
				jDoc.aDefer = null;
				jDoc.splice(0, jDoc.length);

				AN.box.aBenchmark.push({ type: 'end', name: '延期執行項目' });

				AN.firstRan = true;
				AN.shared('log2', '所有功能執行完成');

				AN.box.aBenchmark.push({ type: 'final', time: $.time(nBegin) });
			}, 0);
		}
	}
});

//////////////////// END OF - [AN Extension] ////////////////////
//////////////////// START OF - [Initialization] ////////////////////

$.support.localStorage = !!(window.localStorage || window.globalStorage || false);

$(function()
{
	$('<div id="an"><div id="an-lso"></div></div>').appendTo('body');

	function exec(sStorageType)
	{
		AN.box.storageMode = sStorageType;
		AN.modFn.getDB();
		AN.modFn.execMods();
	}

	if($.support.localStorage && AN.util.cookie('an-storagemode') == 'DOM')
	{
		exec('DOM');
	}
	else
	{
		var sURL = 'http://helianthus-annuus.googlecode.com/svn/other/lso.swf';
		if($.browser.msie) sURL += '?' + $.time();
		AN.box.eLSO = $('#an-lso').toFlash(sURL)[0];

		(function(){ AN.box.eLSO.get && AN.box.eLSO.set('default', 'an_test_for_safari', ':o)') && AN.box.eLSO.get('default', 'an_test_for_safari') ? exec('Flash') : setTimeout(arguments.callee, 50); })();
	}
});

//////////////////// END OF - [Initialization] ////////////////////


})();