(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{1655:function(e,t,n){"use strict";var r=n(5988),i=(n(6960),n(5893));t.Z=function(){return(0,i.jsxs)("header",{className:"jsx-453771997",children:[(0,i.jsx)("h1",{className:"jsx-453771997 text-xl",children:(0,i.jsx)("a",{href:"/",className:"jsx-453771997 header-title",children:"ENTAKU"})}),(0,i.jsxs)("nav",{className:"jsx-453771997 pc-nav",children:[(0,i.jsx)("a",{href:"/",className:"jsx-453771997",children:"home"}),(0,i.jsx)("a",{href:"/articles",className:"jsx-453771997 ml-4",children:"articles"})]}),(0,i.jsx)(r.default,{id:"453771997",children:["header.jsx-453771997{padding:10px 4%;position:fixed;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;}","nav.jsx-453771997{margin:0 0 0 auto;}"]})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},c=n(1063),s=n(4651),a=n(7426);var l={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),u=o.default.useMemo((function(){var t=c.resolveHref(i,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?c.resolveHref(i,e.as):s||o}}),[i,e.href,e.as]),d=u.href,p=u.as,x=e.children,h=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var j=(t=o.default.Children.only(x))&&"object"===typeof t&&t.ref,v=a.useIntersection({rootMargin:"200px"}),g=r(v,2),w=g[0],k=g[1],_=o.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);o.default.useEffect((function(){var e=k&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:i&&i.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(i,d,p,{locale:t})}),[p,d,k,y,n,i]);var N={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:a,scroll:s}))}(e,i,d,p,h,m,b,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(i,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:i&&i.locale,O=i&&i.isLocaleDomain&&c.getDomainLocale(p,E,i&&i.locales,i&&i.domainLocales);N.href=O||c.addBasePath(c.addLocale(p,E,i&&i.defaultLocale))}return o.default.cloneElement(t,N)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=i.useRef(),l=i.useState(!1),f=r(l,2),u=f[0],d=f[1],p=i.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||u||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!c&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[p,u]};var i=n(7294),o=n(3447),c="undefined"!==typeof IntersectionObserver;var s=new Map},1455:function(e,t,n){"use strict";n.r(t),n.d(t,{Articles:function(){return w},__N_SSG:function(){return g},default:function(){return k}});var r=n(5988),i=n(9008),o=(n(6960),n(1655));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n(7294),p=n(1664),x=n(5893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function m(e){switch(e.articleType){case"1":return(0,x.jsx)(b,{});case"2":return(0,x.jsx)(y,{});case"3":return(0,x.jsx)(j,{});default:return(0,x.jsx)(b,{})}}function b(){return(0,x.jsx)("img",{className:"h-6 w-6",src:"/qiita.png"})}function y(){return(0,x.jsx)("img",{className:"h-6 w-6",src:"/zenn.svg"})}function j(){return(0,x.jsx)("img",{className:"h-10 w-10",src:"/note.svg"})}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(o,e);var t,n,r,i=h(o);function o(){return c(this,o),i.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){return(0,x.jsx)(p.default,{href:this.props.article.url,children:(0,x.jsxs)("div",{className:"cursor-pointer shadow-lg",children:[(0,x.jsx)("div",{children:(0,x.jsx)(m,{articleType:this.props.article.type})}),(0,x.jsx)("div",{children:(0,x.jsx)("h3",{className:" text-lg ",children:this.props.article.name})})]})})}}])&&s(t.prototype,n),r&&s(t,r),o}(d.Component),g=!0,w=function(e){var t=e.articles;return(0,x.jsxs)("div",{className:"jsx-4086661767",children:[(0,x.jsxs)(i.default,{children:[(0,x.jsx)("title",{className:"jsx-4086661767",children:"Portfolio - entaku"}),(0,x.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-4086661767"})]}),(0,x.jsx)(o.Z,{}),(0,x.jsxs)("main",{className:"jsx-4086661767",children:[(0,x.jsx)("h2",{className:"jsx-4086661767 text-xl font-bold ",children:"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbbArticles"}),(0,x.jsx)("section",{className:"jsx-4086661767 grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-x-8 gap-y-4",children:t.map((function(e,t){return(0,x.jsx)(v,{article:e},t)}))})]}),(0,x.jsx)("footer",{className:"jsx-4086661767",children:"Powered by entaku"}),(0,x.jsx)(r.default,{id:"4086661767",children:[".header-title.jsx-4086661767{font-family:Arial,cursive;font-size:36px;height:-webkit-min-content;height:-moz-min-content;height:min-content;}","main.jsx-4086661767{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:10%;}","footer.jsx-4086661767{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-4086661767 img.jsx-4086661767{margin-left:0.5rem;}","footer.jsx-4086661767 a.jsx-4086661767{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","@media (max-width:600px){.grid.jsx-4086661767{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}","*.jsx-4086661767{box-sizing:border-box;}"]})]})},k=w},7617:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n(1455)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[243,774,888,179],(function(){return t=7617,e(e.s=t);var t}));var t=e.O();_N_E=t}]);