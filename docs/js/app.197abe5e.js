(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-5ea4adae":"ed15389a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-5ea4adae":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5ea4adae":"53789fa3"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],d=i.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var f=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/typing-test/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(n)}n("c1d2");const o={};o.render=a;var c=o,u=(n("d3b7"),n("6c02")),s=Object(r["A"])("data-v-afd0c532");Object(r["s"])("data-v-afd0c532");var i={class:"main"},d={key:0},f={key:1,class:"start"},p=Object(r["g"])("span",{class:"start-text"},"Are you ready?",-1),l=Object(r["g"])("button",null,"Start",-1);Object(r["q"])();var h=s((function(e,t,n,a,o,c){var u=Object(r["v"])("router-link");return Object(r["p"])(),Object(r["d"])("div",i,[e.loading?(Object(r["p"])(),Object(r["d"])("div",d,"Loading...")):(Object(r["p"])(),Object(r["d"])("div",f,[p,Object(r["g"])(u,{to:"test"},{default:s((function(){return[l]})),_:1})]))])})),b=n("5530"),g=n("5502"),v={name:"Start",methods:Object(b["a"])(Object(b["a"])({},Object(g["b"])(["downloadText"])),Object(g["d"])(["setText"])),computed:Object(b["a"])({},Object(g["c"])(["loading"])),created:function(){this.setText(""),this.downloadText()}};n("d132");v.render=h,v.__scopeId="data-v-afd0c532";var m=v,y=[{path:"/",name:"Start",component:m},{path:"/test",name:"Test",component:function(){return n.e("chunk-5ea4adae").then(n.bind(null,"78c1"))}}],j=Object(u["a"])({history:Object(u["b"])("/typing-test/"),routes:y}),O=j,x=(n("96cf"),n("1da1")),w=(n("99af"),n("a15b"),n("d81d"),n("b64b"),function(){return k.apply(this,arguments)});function k(){return k=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={type:"meat-and-filler",paras:1,sentences:5,format:"text"},n="https://baconipsum.com/api/",r="".concat(n,"?").concat(Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")),e.next=5,fetch(r);case 5:if(a=e.sent,!a.ok){e.next=13;break}return e.next=9,a.text();case 9:return o=e.sent,e.abrupt("return",o);case 13:console.error("some error");case 14:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}var T=Object(g["a"])({state:{text:"",rightKeys:1,progress:0,speed:0},getters:{loading:function(e){var t=e.text;return!t.length},finished:function(e){var t=e.text,n=e.progress;return t.length==n},accuracy:function(e){var t=e.rightKeys,n=e.text;return Math.round(1e3*t/n.length)/10}},mutations:{setText:function(e,t){e.rightKeys=t.length,e.text=t},progressIncrease:function(e){e.progress++},reset:function(e){e.error=!1,e.progress=0},decreaseRightKeys:function(e){e.rightKeys--},setSpeed:function(e,t){e.speed=t}},actions:{downloadText:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,w();case 3:r=t.sent,n("setText",r);case 5:case"end":return t.stop()}}),t)})))()}}});n("f9e3"),n("5aea");Object(r["c"])(c).use(T).use(O).mount("#app")},"5aea":function(e,t,n){},"9c6f":function(e,t,n){},c1d2:function(e,t,n){"use strict";n("ede7")},d132:function(e,t,n){"use strict";n("9c6f")},ede7:function(e,t,n){}});
//# sourceMappingURL=app.197abe5e.js.map