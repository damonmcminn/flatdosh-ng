!function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!a&&s)return s(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}},o=e("./API"),u=n(o),i=e("./auth"),a=n(i),s=e("./balance"),l=n(s),c=e("./expense"),f=n(c),d=e("./filters"),p=e("./group"),g=n(p),y=e("./history"),v=n(y),h=e("./interceptor"),m=n(h),_=e("./login"),b=n(_),x=e("./ls"),P=n(x),M=e("./main"),O=n(M),j=e("./router"),I=n(j),w=e("./user"),k=n(w);angular.module("flatdosh",["templates","ui.bootstrap","ui.router"]).factory("API",["$http","$window","group",u["default"]]).factory("auth",["ls","API","$state",a["default"]]).factory("balance",["API",l["default"].factory]).factory("expense",["API",f["default"].factory]).factory("group",["ls",g["default"].factory]).factory("interceptor",["ls",m["default"]]).factory("ls",[P["default"]]).factory("user",[k["default"].factory]).controller("balanceCtrl",["balance",l["default"].ctrl]).controller("expenseCtrl",["expense","group","ls",f["default"].ctrl]).controller("loginCtrl",["auth","$state",b["default"]]).controller("historyCtrl",["expense","ls",v["default"].ctrl]).controller("mainCtrl",["auth","$state","group",O["default"]]).controller("userCtrl",["user",k["default"].ctrl]).config(["$httpProvider",function(e){e.interceptors.push("interceptor"),e.defaults.headers["delete"]={"Content-Type":"application/json"}}]).config(["$stateProvider","$urlRouterProvider","$locationProvider",I["default"]]).filter("money",d.money)},{"./API":6,"./auth":7,"./balance":10,"./expense":13,"./filters":14,"./group":16,"./history":18,"./interceptor":19,"./login":20,"./ls":21,"./main":22,"./router":23,"./user":26}],2:[function(e,t,r){t.exports=e("./lib")},{"./lib":3}],3:[function(e,t,r){"use strict";function n(e){return{get:function(t){var r=e?""+e+"."+t:t,n=JSON.parse(localStorage.getItem(r))||{},o=n.val,u=n.type;return"date"===u?new Date(o):o},set:function(t,r){var n=e?""+e+"."+t:t,u=JSON.stringify({val:r,type:o.getType(r)});return localStorage.setItem(n,u)},drop:function(t){return localStorage.removeItem(e?""+e+"."+t:t)}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=e("js-type-check");t.exports=r["default"]},{"js-type-check":4}],4:[function(e,t,r){t.exports=e("./lib/typecheck")},{"./lib/typecheck":5}],5:[function(e,t,r){"use strict";function n(e){return Number.isFinite(e)}function o(e){return"string"==typeof e}function u(e){return"boolean"==typeof e}function i(e){return e instanceof RegExp}function a(e){return e instanceof Date}function s(e){return Array.isArray(e)}function l(e){return null===e}function c(e){return void 0===e}function f(e){return!c(e)}function d(e){return"function"==typeof e}function p(e){return e?"Object"===Object.prototype.toString.call(e).slice(8,-1):!1}function g(e){return e instanceof Error}function y(e,t){var r=e.prototype.constructor.name.toLowerCase(),l={string:o,object:p,number:n,"boolean":u,regexp:i,date:a,array:s,"function":d};return l[r](t)}function v(e){var t=Object.prototype.toString.call(e);return t.slice(8,-1).toLowerCase()}Object.defineProperty(r,"__esModule",{value:!0}),r.isNumber=n,r.isString=o,r.isBool=u,r.isRegex=i,r.isDate=a,r.isArray=s,r.isNull=l,r.isUndefined=c,r.isDefined=f,r.isFunction=d,r.isObject=p,r.isError=g,r.typeCheck=y,r.getType=v},{}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t,r){var n="https://flatdosh.com/api/";return{balance:function(){return e.get(""+n+"balance/"+r.id).success(function(e){return e.data})},expense:{save:function(t){return e({method:"post",url:""+n+"expense",data:t})},all:function(){return e.get(""+n+"expense/"+r.id)},destroy:function(t){return console.log(t),e({method:"delete",url:n+"expense",data:t})}},login:function(r){var o=r.email,u=r.password,i="Basic "+t.btoa(""+o+":"+u);return e({method:"post",url:""+n+"login",headers:{authorization:i}})},register:function(t){return e({method:"post",url:n+"register",data:t})},settings:function(){return e.get(n+"settings")},members:function(){return e.get(""+n+"members/"+r.id)}}},t.exports=r["default"]},{}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t,r){var n=!!e.get("token");return{loggedIn:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return n}),login:function(o){return t.login(o).success(function(t){e.set("token",t.token),e.set("user",t.data),n=!0,r.go("main.balances")})},logout:function(){e.drop("token"),n=!1},register:function(e){return t.register(e)}}},t.exports=r["default"]},{}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){function t(){e.get().success(function(e){return r.balances=e}).error(function(e){return console.log(e)})}var r=this;t()},t.exports=r["default"]},{}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){return{get:function(){return e.balance().success(function(e){return e.forEach(function(e){e.name=e.name.split("@").shift()}),e})}}},t.exports=r["default"]},{}],10:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("./factory"),u=n(o),i=e("./ctrl"),a=n(i);r["default"]={ctrl:a["default"],factory:u["default"]},t.exports=r["default"]},{"./ctrl":8,"./factory":9}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t,r){var n=this;n.expense={},n.save=function(){n.expense.group=t.id,e.save(n.expense).then(function(){n.expense={spender:n.expense.spender}})},n.expense.spender=r.get("user").id,e.members().success(function(e){n.members=e.map(function(e){return{name:e.name.split("@").shift(),id:e.email}})})},t.exports=r["default"]},{}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t){return{all:function(){return e.expense.all().then(function(e){return e.data})},save:function(t){return e.expense.save(t).then(function(e){return e.data})},destroy:function(t){return e.expense.destroy(t).then(function(e){return e.data})},members:function(){return e.members()}}},t.exports=r["default"]},{}],13:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("./factory"),u=n(o),i=e("./ctrl"),a=n(i);r["default"]={ctrl:a["default"],factory:u["default"]},t.exports=r["default"]},{"./ctrl":11,"./factory":12}],14:[function(e,t,r){"use strict";function n(){return function(e){var t=+e;return 0>=t?"Nothing":"£"+t.toFixed(2)}}Object.defineProperty(r,"__esModule",{value:!0}),r.money=n},{}],15:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){var t=e.get("user"),r=t.groups,n=e.get("group");if(!n){var o=r[0];e.set("group",o),n=o}var u=n.id,i=n.name;return{all:r,id:u,name:i}},t.exports=r["default"]},{}],16:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("./factory"),u=n(o);r["default"]={factory:u["default"]},t.exports=r["default"]},{"./factory":15}],17:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t){function r(){e.all().then(function(e){e.forEach(function(e){return e.name=e.name.split("@").shift()}),n.history=e})}var n=this,o=t.get("user"),u=o.id,i=o.shared;n.user=u,n.shared=i,n.history=[],n.checkDeletion=function(e){var t=n.history[e].shareId;t&&n.history.filter(function(e){return e.user!==u&&e.shareId===t}).forEach(function(e){return e["delete"]=!e["delete"]})},r(),n.deleteExpenses=function(){var t=n.history.filter(function(e){return e["delete"]}).map(function(e){return e.id}),r=confirm("Delete selected expenses?");t.length>0&&r&&e.destroy(t).then(function(e){e.deleted.forEach(function(e){n.history.forEach(function(t){t.id===e&&(t.deleted=!0)})})})}},t.exports=r["default"]},{}],18:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("./ctrl"),u=n(o);r["default"]={ctrl:u["default"]},t.exports=r["default"]},{"./ctrl":17}],19:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){return{request:function(t){var r=/\/login$/.test(t.url),n=/\/api/.test(t.url);return n&&!r&&(t.headers.authorization="Bearer "+e.get("token")),t}}},t.exports=r["default"]},{}],20:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t){var r=this;e.loggedIn()&&t.go("main.balances"),r.selectLogin=!0;var n={login:function(){e.login(r.user).error(function(e){var t=void 0;switch(t=e&&e.message?e.message:"Server error",r.error=t,t){case"Bad password":r.user.password=null;break;case"User not found":r.user=null}})},register:function(){e.register(r.user).success(function(){n.login()}).error(function(e){return console.log(e)})}};r.select=function(e){r.action=e},r.submit=function(){n[r.action]()}},t.exports=r["default"]},{}],21:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("ls-wrapper"),u=n(o);r["default"]=function(){return u["default"]("flatdosh")},t.exports=r["default"]},{"ls-wrapper":2}],22:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t,r){var n=this,o=e.loggedIn();o||t.go("login"),n.group=r,n.collapsed=!0,n.logout=function(){e.logout(),t.go("login")},n.toggleCollapsed=function(){n.collapsed=!n.collapsed}},t.exports=r["default"]},{}],23:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,t,r){r.html5Mode(!0),t.otherwise("/"),e.state("login",{url:"/",templateUrl:"login/index.html"}).state("main",{templateUrl:"main/index.html"}).state("main.balances",{url:"/balances",templateUrl:"balance/index.html"}).state("main.save",{url:"/expense",templateUrl:"expense/index.html"}).state("main.history",{url:"/expense/history",templateUrl:"history/index.html"})},t.exports=r["default"]},{}],24:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(){var e=this;e.loggedIn=!1},t.exports=r["default"]},{}],25:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){return{}},t.exports=r["default"]},{}],26:[function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var o=e("./factory"),u=n(o),i=e("./ctrl"),a=n(i);r["default"]={ctrl:a["default"],factory:u["default"]},t.exports=r["default"]},{"./ctrl":24,"./factory":25}]},{},[1]);
//# sourceMappingURL=bundle.js.map