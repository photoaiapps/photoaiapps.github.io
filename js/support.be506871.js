(function(){"use strict";var t={3075:function(t,o,e){var n=function(){var t=this,o=t._self._c;return o("div",[o("div",{staticClass:"top-wrap"},[o("top-logo",{attrs:{mobile:t.mobile}})],1),o("first-screen",{staticStyle:{display:"none"}}),o("div",{staticClass:"content",class:{"is-mobile":t.mobile}},[o("div",{staticClass:"left-box"},[o("div",{staticClass:"title"},[t._v("How Can We Help You?")]),t._m(0),o("button",{staticClass:"btn",on:{click:t.contactUs}},[t._v("Contact us")])]),t._m(1)]),o("fifth-screen",{attrs:{mobile:t.mobile}})],1)},i=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"text"},[t._v("If you have any problems, feel free to reach out at "),o("a",{attrs:{href:"mailto:photolight.feedback@gmail.com",target:"_blank"}},[t._v("photolight.feedback@gmail.com")]),t._v(" and we will help you out. ")])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"right-box"},[o("img",{attrs:{src:e(6925)}}),o("img",{staticClass:"help-tip",attrs:{src:e(2295)}})])}],r=e(4898),a=e(3022),s=e(2949),l={name:"Support",components:{FirstScreen:a.A,FifthScreen:r.A,TopLogo:s.A},data(){return{mobile:null,iosDownload:!1,iosDownloadText:"Whether to join the beta invitation in the internal testing of the iOS version.",joinNow:!1,email:""}},mounted(){this.$bus.on("openIOSDownload",this.appStoreDownload),/Mobi|Android|iPhone/i.test(window.navigator.userAgent)?this.mobile=!0:this.mobile=!1},methods:{contactUs(){window.open("mailto:photolight.feedback@gmail.com","_blank")},appStoreDownload(){this.iosDownload=!0},closeModal(){this.iosDownload=!1},goSendEmail(){this.joinNow=!0},back(){this.joinNow=!1},sendEmail(){this.$gtag.event("join_beta",{email:this.email}),this.$Message.success("Sending succeeded"),this.iosDownload=!1}}},c=l,u=e(8529),f=(0,u.A)(c,n,i,!1,null,"3f81786d",null),d=f.exports,h=e(8649),p=e(8474),b=e.n(p),v=e(3220);h["default"].config.productionTip=!1,h["default"].use(b()),h["default"].use(v.A),new h["default"]({render:t=>t(d)}).$mount("#app")}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return t[n].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,r){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(u--,1);var c=i();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,i,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={240:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==t[o]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var u=l(e)}for(o&&o(n);c<a.length;c++)r=a[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},n=self["webpackChunkcollage_art"]=self["webpackChunkcollage_art"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504,996],(function(){return e(3075)}));n=e.O(n)})();