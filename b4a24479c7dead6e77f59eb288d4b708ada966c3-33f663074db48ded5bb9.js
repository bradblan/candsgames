(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";var n,o=r("FdF9"),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),A.canUseDOM?t(u):r&&(u=r(u))}var A=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(A,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(A,"canUseDOM",c),A}}},LbRr:function(e,t,r){"use strict";var n=r("FdF9"),o=r("NBUf"),i=r.n(o),a=r("jWx0"),c=function(e){var t=e.siteTitle,r=e.sitePhone;return n.default.createElement("header",null,n.default.createElement("div",{id:"nav"},n.default.createElement("img",{src:i.a,alt:"Cornhole Charlie"}),n.default.createElement("div",{id:"navText"},n.default.createElement("div",{class:"text-logo"},n.default.createElement("div",{class:"h1"},t),n.default.createElement("div",{class:"h2"},r)),n.default.createElement(a.a,null))))};c.defaultProps={sitePhone:"",siteTitle:""},t.a=c},NBUf:function(e,t){e.exports="data:image/gif;base64,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"},"W/9C":function(e,t,r){"use strict";var n=r("FdF9"),o=r("jWx0"),i=function(e){var t=e.siteTitle;return n.default.createElement("footer",{class:"clearfix"},n.default.createElement(o.a,null),n.default.createElement("div",{class:"copyright"},"© ",(new Date).getFullYear(),".  All rights reserved by ",t,"."))};i.defaultProps={siteTitle:""},t.a=i},YVoz:function(e,t,r){"use strict";e.exports=Object.assign},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!e(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],a.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],a[l[u]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},jWx0:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("Wbzz"),o=r("FdF9");function i(){return o.default.createElement(n.StaticQuery,{query:"1038819781",render:function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("ul",null,function(e){var t=[];return e.allSiteNavJson.edges.forEach((function(e){return t.push(o.default.createElement("li",{key:e.node.label},""===e.node.target?o.default.createElement(n.Link,{to:e.node.link,activeClassName:"current"},e.node.label):o.default.createElement("a",{href:e.node.link,target:e.node.target},e.node.label)))})),t}(e)))}})}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return de}));var n,o,i,a,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),A=r("ZhWT"),f=r.n(A),p=r("FdF9"),d=r("YVoz"),g=r.n(d),h="bodyAttributes",m="htmlAttributes",y="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",C="href",T="http-equiv",v="innerHTML",O="itemprop",I="name",S="property",k="rel",j="src",Q="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",B="defer",M="encodeSpecialCharacters",K="onChangeClientState",P="titleTemplate",L=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),Y=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},N=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,w.TITLE),r=X(e,P);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,x);return t||n||void 0},J=function(e){return X(e,K)||function(){}},z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==v&&c!==E&&c!==O||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=g()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},_=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){_(e)}),0)}),$=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:e.cancelAnimationFrame||$,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,A=e.title,f=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,o),ae(A,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,l),styleTags:ue(w.STYLE,s)},d={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),u(e,d,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var A=i.length-1;A>=0;A--)r.removeAttribute(i[A]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===v)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)},Ae=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=se(r,n),[p.default.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+H(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case m:return{toComponent:function(){return se(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=F[e]||e;if(r===v||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),p.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===v||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+H(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,A=void 0===s?"":s,f=e.titleAttributes;return{base:Ae(w.BASE,t,n),bodyAttributes:Ae(h,r,n),htmlAttributes:Ae(m,o,n),link:Ae(w.LINK,i,n),meta:Ae(w.META,a,n),noscript:Ae(w.NOSCRIPT,c,n),script:Ae(w.SCRIPT,u,n),style:Ae(w.STYLE,l,n),title:Ae(w.TITLE,{title:A,titleAttributes:f},n)}},pe=s()((function(e){return{baseTag:Z([C,Q],e),bodyAttributes:z(h,e),defer:X(e,B),encode:X(e,M),htmlAttributes:z(m,e),linkTags:V(w.LINK,[k,C],e),metaTags:V(w.META,[I,b,T,S,O],e),noscriptTags:V(w.NOSCRIPT,[v],e),onChangeClientState:J(e),scriptTags:V(w.SCRIPT,[j,v],e),styleTags:V(w.STYLE,[E],e),title:W(e),titleAttributes:z(y,e)}}),(function(e){ne&&te(ne),e.defer?ne=ee((function(){oe(e,(function(){ne=null}))})):(oe(e),ne=null)}),fe)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return U(this,t),N(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},n,((t={})[r.type]=[].concat(n[r.type]||[],[G({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return G({},o,((t={})[n.type]=a,t.titleAttributes=G({},i),t));case w.BODY:return G({},o,{bodyAttributes:G({},i)});case w.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((r={})[n.type]=G({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=G({},t);return Object.keys(e).forEach((function(t){var n;r=G({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)}(q(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=G({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.default.createElement(o,n)},R(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.default.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("FdF9"),o=r("qhky"),i=r("Wbzz");function a(e){var t,r,a=e.description,c=e.lang,u=e.meta,l=e.title,s=Object(i.useStaticQuery)("63159454").site,A=a||s.siteMetadata.description,f=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.default.createElement(o.a,{htmlAttributes:{lang:c},title:l,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:A},{property:"og:title",content:l},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=s.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:A}].concat(u)},n.default.createElement("script",{src:Object(i.withPrefix)("scripts/formSuccess.js"),type:"text/javascript"}))}a.defaultProps={lang:"en",meta:[],description:""},t.a=a},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=b4a24479c7dead6e77f59eb288d4b708ada966c3-33f663074db48ded5bb9.js.map