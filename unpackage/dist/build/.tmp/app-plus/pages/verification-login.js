(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/verification-login"],{"2fb6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"4ab4":function(t,e,n){},"9e4a":function(t,e,n){"use strict";var a=n("4ab4"),o=n.n(a);o.a},ab0b:function(t,e,n){"use strict";n.r(e);var a=n("2fb6"),o=n("cf99");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("9e4a");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},b2df:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),o=u(n("f4fb"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,o,u,i){try{var r=t[u](i),s=r.value}catch(c){return void n(c)}r.done?e(s):Promise.resolve(s).then(a,o)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var u=t.apply(e,n);function r(t){i(u,a,o,r,s,"next",t)}function s(t){i(u,a,o,r,s,"throw",t)}r(void 0)})}}var s={data:function(){return{phone:"",password:null,code:null,p:null,name:null,safety:{time:60,state:!1,interval:""},focuss:!1,focuss1:!1,upLoadClicktag:0}},onLoad:function(){},methods:{getRegiter:function(){var e=r(a.default.mark(function e(){var n=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:/^1[3456789]\d{9}$/.test(this.phone)&&11==this.phone.length?0==this.upLoadClicktag?(this.upLoadClicktag=1,t.request({url:o.default+"login",data:{phone:this.phone,pass:this.password},method:"POST",success:function(e){console.log(e.data," at pages\\verification-login.vue:64"),0==e.data.error_code?(t.setStorageSync("storage",e.data.data),t.reLaunch({url:"bottom-nav/home"})):plus.nativeUI.alert(e.data.message)},fail:function(t){console.log(t.data," at pages\\verification-login.vue:77"),plus.nativeUI.alert("网络修复中，请稍后再试！")}}),setTimeout(function(){n.upLoadClicktag=0},3e3)):plus.nativeUI.alert("请勿频繁操作！"):plus.nativeUI.alert("请输入正确的手机号！");case 1:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),focushand:function(t){switch(t){case 0:this.focuss=!0;break;case 1:this.focuss=!1;break;case 2:this.focuss1=!0;break;case 3:this.focuss1=!1;break}},go_forget:function(){t.navigateTo({url:"forget/forget"})}}};e.default=s}).call(this,n("6e42")["default"])},cf99:function(t,e,n){"use strict";n.r(e);var a=n("b2df"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a}},[["1fe4","common/runtime","common/vendor"]]]);