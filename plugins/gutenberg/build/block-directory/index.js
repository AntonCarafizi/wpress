this.wp=this.wp||{},this.wp.blockDirectory=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=373)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){!function(){e.exports=this.wp.blocks}()},114:function(e,t,n){"use strict";var r=n(6),o=n(20),c=n(0);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.icon,n=e.size,l=void 0===n?24:n,i=Object(o.a)(e,["icon","size"]);return Object(c.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:l,height:l},i))}},18:function(e,t,n){"use strict";var r=n(33);var o=n(34);function c(e,t){return Object(r.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}}(e,t)||Object(o.a)()}n.d(t,"a",(function(){return c}))},19:function(e,t,n){"use strict";var r=n(32);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return o}))},2:function(e,t){!function(){e.exports=this.lodash}()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(37);function o(e,t){if(null==e)return{};var n,o,c=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},256:function(e,t,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M10 1l3 6 6 .75-4.12 4.62L16 19l-6-3-6 3 1.13-6.63L1 7.75 7 7z"}));t.a=c},257:function(e,t,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88l-4.68 2.34.87-5.15-3.18-3.56 4.65-.58z"}));t.a=c},258:function(e,t,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"}));t.a=c},3:function(e,t){!function(){e.exports=this.wp.components}()},32:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},373:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"isRequestingDownloadableBlocks",(function(){return b})),n.d(r,"getDownloadableBlocks",(function(){return d})),n.d(r,"hasInstallBlocksPermission",(function(){return f})),n.d(r,"getInstalledBlockTypes",(function(){return p}));var o={};n.r(o),n.d(o,"fetchDownloadableBlocks",(function(){return D})),n.d(o,"receiveDownloadableBlocks",(function(){return N})),n.d(o,"setInstallBlocksPermission",(function(){return C})),n.d(o,"downloadBlock",(function(){return T})),n.d(o,"installBlock",(function(){return A})),n.d(o,"uninstallBlock",(function(){return I})),n.d(o,"addInstalledBlockType",(function(){return M})),n.d(o,"removeInstalledBlockType",(function(){return R}));var c=n(4),a=n(19),l=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(c.combineReducers)({downloadableBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:{},filterValue:void 0,isRequestingDownloadableBlocks:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOWNLOADABLE_BLOCKS":return s({},e,{isRequestingDownloadableBlocks:!0});case"RECEIVE_DOWNLOADABLE_BLOCKS":return s({},e,{results:Object.assign({},e.results,Object(l.a)({},t.filterValue,t.downloadableBlocks)),isRequestingDownloadableBlocks:!1})}return e},blockManagement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{installedBlockTypes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INSTALLED_BLOCK_TYPE":return s({},e,{installedBlockTypes:[].concat(Object(a.a)(e.installedBlockTypes),[t.item])});case"REMOVE_INSTALLED_BLOCK_TYPE":return s({},e,{installedBlockTypes:e.installedBlockTypes.filter((function(e){return e.name!==t.item.name}))})}return e},hasPermission:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_INSTALL_BLOCKS_PERMISSION"===t.type?t.hasPermission:e}});function b(e){return e.downloadableBlocks.isRequestingDownloadableBlocks}function d(e,t){return e.downloadableBlocks.results[t]?e.downloadableBlocks.results[t]:[]}function f(e){return e.hasPermission}function p(e){return e.blockManagement.installedBlockTypes}var O=n(23),m=n.n(O),j=n(11),k=n(2),y=n(40),h=n.n(y);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=m.a.mark(B);function g(e){return{type:"API_FETCH",request:e}}var _=function(e,t,n){if(e){var r=document.querySelector('script[src="'.concat(e.src,'"]'));r&&r.parentNode.removeChild(r);var o=document.createElement("script");o.src="string"==typeof e?e:e.src,o.onload=t,o.onerror=n,document.body.appendChild(o)}},E=function(e){if(e){var t=document.createElement("link");t.rel="stylesheet",t.href="string"==typeof e?e:e.src,document.body.appendChild(t)}};function B(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{type:"LOAD_ASSETS",assets:e});case 1:case"end":return t.stop()}}),w)}var x={SELECT:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.selectorName,c=t.args;return(n=e.select(r))[o].apply(n,Object(a.a)(c))}})),DISPATCH:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.dispatcherName,c=t.args;return(n=e.dispatch(r))[o].apply(n,Object(a.a)(c))}})),API_FETCH:function(e){var t=e.request;return h()(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))},LOAD_ASSETS:function(e){var t=e.assets;return new Promise((function(e,n){if(Array.isArray(t)){var r=0;Object(k.forEach)(t,(function(t){null!==t.match(/\.js$/)?(r++,_(t,(function(){if(0===--r)return e(r)}),n)):E(t)}))}else _(t.editor_script,(function(){return e(0)}),n),E(t.style)}))}},S=m.a.mark(T),P=m.a.mark(A),L=m.a.mark(I);function D(){return{type:"FETCH_DOWNLOADABLE_BLOCKS"}}function N(e,t){return{type:"RECEIVE_DOWNLOADABLE_BLOCKS",downloadableBlocks:e,filterValue:t}}function C(e){return{type:"SET_INSTALL_BLOCKS_PERMISSION",hasPermission:e}}function T(e,t,n){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.assets.length){r.next=3;break}throw new Error("Block has no assets");case 3:return r.next=5,B(e.assets);case 5:if(!Object(j.getBlockTypes)().length){r.next=10;break}t(e),r.next=11;break;case 10:throw new Error("Unable to get block types");case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,n(r.t0);case 17:case"end":return r.stop()}}),S,null,[[0,13]])}function A(e,t,n){var r,o,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,g({path:"__experimental/block-directory/install",data:{slug:r},method:"POST"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,M({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),P,null,[[1,12]])}function I(e,t,n){var r,o,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,g({path:"__experimental/block-directory/uninstall",data:{slug:r},method:"DELETE"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,R({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),L,null,[[1,12]])}function M(e){return{type:"ADD_INSTALLED_BLOCK_TYPE",item:e}}function R(e){return{type:"REMOVE_INSTALLED_BLOCK_TYPE",item:e}}var z={reducer:u,selectors:r,actions:o,controls:x,resolvers:{getDownloadableBlocks:m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,{type:"FETCH_DOWNLOADABLE_BLOCKS"};case 5:return e.next=7,g({path:"__experimental/block-directory/search?term=".concat(t)});case 7:return n=e.sent,r=n.map((function(e){return Object(k.mapKeys)(e,(function(e,t){return Object(k.camelCase)(t)}))})),e.next=11,N(r,t);case 11:e.next=18;break;case 13:if(e.prev=13,e.t0=e.catch(2),"rest_user_cannot_view"!==e.t0.code){e.next=18;break}return e.next=18,C(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})),hasInstallBlocksPermission:m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g({path:"__experimental/block-directory/search?term="});case 3:return e.next=5,C(!0);case 5:e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),"rest_user_cannot_view"!==e.t0.code){e.next=12;break}return e.next=12,C(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))}},V=(Object(c.registerStore)("core/block-directory",z),n(0)),H=n(54),K=n(18),F=n(5),q=n(9),W=n(1),G=n(3),U=n(114),Y=n(256),$=n(7),J=Object(V.createElement)($.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(V.createElement)($.Path,{d:"M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88V3.24z"})),Q=n(257);var X=function(e){var t=e.rating,n=.5*Math.round(t/.5),r=Math.floor(t),o=Math.ceil(t-r),c=5-(r+o);return Object(V.createElement)("div",{"aria-label":Object(W.sprintf)(Object(W.__)("%s out of 5 stars"),n)},Object(k.times)(r,(function(e){return Object(V.createElement)(U.a,{key:"full_stars_".concat(e),icon:Y.a,size:16})})),Object(k.times)(o,(function(e){return Object(V.createElement)(U.a,{key:"half_stars_".concat(e),icon:J,size:16})})),Object(k.times)(c,(function(e){return Object(V.createElement)(U.a,{key:"empty_stars_".concat(e),icon:Q.a,size:16})})))},Z=function(e){var t=e.rating,n=e.ratingCount;return Object(V.createElement)("div",{className:"block-directory-block-ratings"},Object(V.createElement)(X,{rating:t}),Object(V.createElement)("span",{className:"block-directory-block-ratings__rating-count","aria-label":Object(W.sprintf)(Object(W._n)("%d total rating","%d total ratings",n),n)},"(",n,")"))};var ee=function(e){var t=e.icon,n=e.title,r=e.rating,o=e.ratingCount,c=e.onClick;return Object(V.createElement)("div",{className:"block-directory-downloadable-block-header__row"},null!==t.match(/\.(jpeg|jpg|gif|png)(?:\?.*)?$/)?Object(V.createElement)("img",{src:t,alt:Object(W.sprintf)(Object(W.__)("%s block icon"),n)}):Object(V.createElement)("span",null,Object(V.createElement)(F.BlockIcon,{icon:t,showColors:!0})),Object(V.createElement)("div",{className:"block-directory-downloadable-block-header__column"},Object(V.createElement)("span",{role:"heading",className:"block-directory-downloadable-block-header__title"},n),Object(V.createElement)(Z,{rating:r,ratingCount:o})),Object(V.createElement)(G.Button,{isDefault:!0,onClick:function(e){e.preventDefault(),c()}},Object(W.__)("Add block")))};var te=function(e){var t=e.author,n=e.authorBlockCount,r=e.authorBlockRating;return Object(V.createElement)(V.Fragment,null,Object(V.createElement)("span",{className:"block-directory-downloadable-block-author-info__content-author"},Object(W.sprintf)(Object(W.__)("Authored by %s"),t)),Object(V.createElement)("span",{className:"block-directory-downloadable-block-author-info__content"},Object(W.sprintf)(Object(W._n)("This author has %d block, with an average rating of %d.","This author has %d blocks, with an average rating of %d.",n),n,r)))},ne=Object(V.createElement)($.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(V.createElement)($.Path,{d:"M18 3.5c0 .62-.38 1.16-.92 1.38v13.11H1.99l4.22-6.73c-.13-.23-.21-.48-.21-.76C6 9.67 6.67 9 7.5 9S9 9.67 9 10.5c0 .13-.02.25-.05.37l1.44.63c.27-.3.67-.5 1.11-.5.18 0 .35.04.51.09l3.58-6.41c-.36-.27-.59-.7-.59-1.18 0-.83.67-1.5 1.5-1.5.19 0 .36.04.53.1l.05-.09v.11c.54.22.92.76.92 1.38zm-1.92 13.49V5.85l-3.29 5.89c.13.23.21.48.21.76 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5l.01-.07-1.63-.72c-.25.18-.55.29-.88.29-.18 0-.35-.04-.51-.1l-3.2 5.09h12.29z"})),re=n(258);var oe=function(e){var t=e.description,n=e.activeInstalls,r=e.humanizedUpdated;return Object(V.createElement)(V.Fragment,null,Object(V.createElement)("p",{className:"block-directory-downloadable-block-info__content"},t),Object(V.createElement)("div",{className:"block-directory-downloadable-block-info__row"},Object(V.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(V.createElement)(U.a,{icon:ne}),Object(W.sprintf)(Object(W._n)("%d active installation","%d active installations",n),n)),Object(V.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(V.createElement)(U.a,{icon:re.a}),Object(W.sprintf)(Object(W.__)("Updated %s"),r))))};var ce=function(e){var t=e.item,n=e.onClick,r=t.icon,o=t.title,c=t.description,a=t.rating,l=t.activeInstalls,i=t.ratingCount,s=t.author,u=t.humanizedUpdated,b=t.authorBlockCount,d=t.authorBlockRating;return Object(V.createElement)("li",{className:"block-directory-downloadable-block-list-item"},Object(V.createElement)("article",{className:"block-directory-downloadable-block-list-item__panel"},Object(V.createElement)("header",{className:"block-directory-downloadable-block-list-item__header"},Object(V.createElement)(ee,{icon:r,onClick:n,title:o,rating:a,ratingCount:i})),Object(V.createElement)("section",{className:"block-directory-downloadable-block-list-item__body"},Object(V.createElement)(oe,{activeInstalls:l,description:c,humanizedUpdated:u})),Object(V.createElement)("footer",{className:"block-directory-downloadable-block-list-item__footer"},Object(V.createElement)(te,{author:s,authorBlockCount:b,authorBlockRating:d}))))};var ae=Object(q.compose)(Object(c.withDispatch)((function(e,t){var n=e("core/block-directory"),r=n.installBlock,o=n.downloadBlock,c=e("core/notices"),a=c.createErrorNotice,l=c.removeNotice,i=e("core/block-editor").removeBlocks,s=t.onSelect;return{downloadAndInstallBlock:function(e){var t=function(){var t=s(e);r(e,k.noop,(function n(){a(Object(W.__)("Block previews can't install."),{id:"block-install-error",actions:[{label:Object(W.__)("Retry"),onClick:function(){l("block-install-error"),r(e,k.noop,n)}},{label:Object(W.__)("Remove"),onClick:function(){l("block-install-error"),i(t.clientId),Object(j.unregisterBlockType)(e.name)}}]})}))};o(e,t,(function n(){a(Object(W.__)("Block previews can’t load."),{id:"block-download-error",actions:[{label:Object(W.__)("Retry"),onClick:function(){l("block-download-error"),o(e,t,n)}}]})}))}}})))((function(e){var t=e.items,n=e.onHover,r=void 0===n?k.noop:n,o=e.children,c=e.downloadAndInstallBlock;return(Object(V.createElement)("ul",{role:"list",className:"block-directory-downloadable-blocks-list"},t&&t.map((function(e){return Object(V.createElement)(ce,{key:e.id,className:Object(j.getBlockMenuDefaultClassName)(e.id),icons:e.icons,onClick:function(){c(e),r(null)},onFocus:function(){return r(e)},onMouseEnter:function(){return r(e)},onMouseLeave:function(){return r(null)},onBlur:function(){return r(null)},item:e})})),o))}));var le=Object(q.compose)([G.withSpokenMessages,Object(c.withSelect)((function(e,t){var n=t.filterValue,r=e("core/block-directory"),o=r.getDownloadableBlocks,c=r.hasInstallBlocksPermission,a=r.isRequestingDownloadableBlocks,l=c();return{downloadableItems:l?o(n):[],hasPermission:l,isLoading:a()}}))])((function(e){var t=e.downloadableItems,n=e.onSelect,r=e.onHover,o=e.hasPermission,c=e.isLoading,a=e.isWaiting,l=e.debouncedSpeak;return o?c||a?Object(V.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(V.createElement)(G.Spinner,null)):t.length?(l(Object(W.sprintf)(Object(W._n)("No blocks found in your library. We did find %d block available for download.","No blocks found in your library. We did find %d blocks available for download.",t.length),t.length)),Object(V.createElement)(V.Fragment,null,Object(V.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description"},Object(W.__)("No blocks found in your library. These blocks can be downloaded and installed:")),Object(V.createElement)(ae,{items:t,onSelect:n,onHover:r}))):Object(V.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(W.__)("No blocks found in your library.")):(l(Object(W.__)("No blocks found in your library. Please contact your site administrator to install new blocks.")),Object(V.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(W.__)("No blocks found in your library."),Object(V.createElement)("br",null),Object(W.__)("Please contact your site administrator to install new blocks.")))}));var ie=function(){var e=Object(V.useState)(""),t=Object(K.a)(e,2),n=t[0],r=t[1],o=Object(k.debounce)(r,400);return Object(V.createElement)(F.__experimentalInserterMenuExtension,null,(function(e){var t=e.onSelect,r=e.onHover,c=e.filterValue;return e.hasItems||!c?null:(n!==c&&o(c),Object(V.createElement)(le,{onSelect:t,onHover:r,filterValue:n,isWaiting:c!==n}))}))};Object(H.registerPlugin)("block-directory",{render:function(){return Object(V.createElement)(ie,null)}})},4:function(e,t){!function(){e.exports=this.wp.data}()},40:function(e,t){!function(){e.exports=this.wp.apiFetch}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},54:function(e,t){!function(){e.exports=this.wp.plugins}()},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},7:function(e,t){!function(){e.exports=this.wp.primitives}()},9:function(e,t){!function(){e.exports=this.wp.compose}()}});