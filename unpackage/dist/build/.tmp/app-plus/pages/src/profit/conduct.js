(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/src/profit/conduct"],{"000a":function(t,e,n){"use strict";n.r(e);var a=n("a916"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},"30d8":function(t,e,n){"use strict";n.r(e);var a=n("de41"),r=n("000a");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("9bbb");var i=n("2877"),s=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"415f":function(t,e,n){},"9bbb":function(t,e,n){"use strict";var a=n("415f"),r=n.n(a);r.a},a916:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),r=u(n("630b"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,u,i){try{var s=t[u](i),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var u=t.apply(e,n);function s(t){i(u,a,r,s,o,"next",t)}function o(t){i(u,a,r,s,o,"throw",t)}s(void 0)})}}var o={data:function(){return{upLoadClicktag:0,num:null,password:null,message:null}},onLoad:function(){this.message=t.getStorageSync("storage")},methods:{getRegiter:function(){var e=s(a.default.mark(function e(){var n,u,i=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!=this.upLoadClicktag){e.next=21;break}if(this.upLoadClicktag=1,!(this.num>=200||this.num<=2e3)){e.next=17;break}if(this.num%10!=0){e.next=14;break}return n=t.getStorageSync("storage"),u={id:n.id,num:this.num,password:this.password},e.next=8,r.default.httpRequest("jiedan",u);case 8:this.res=e.sent,plus.nativeUI.toast(this.res.message),console.log(this.res.error_code," at pages\\src\\profit\\conduct.vue:48"),0==this.res.error_code&&t.navigateBack({delta:1}),e.next=15;break;case 14:plus.nativeUI.alert("请输入10的整数倍");case 15:e.next=18;break;case 17:plus.nativeUI.alert("请输入正确的接单范围");case 18:setTimeout(function(){i.upLoadClicktag=0},3e3),e.next=22;break;case 21:plus.nativeUI.alert("请勿频繁操作！");case 22:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=o}).call(this,n("6e42")["default"])},de41:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["3533","common/runtime","common/vendor"]]]);