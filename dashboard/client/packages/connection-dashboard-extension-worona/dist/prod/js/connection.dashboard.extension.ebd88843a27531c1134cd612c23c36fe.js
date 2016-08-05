module.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="https://cdn.worona.io/packages/connection-dashboard-extension-worona/dist/prod/",n(0)}([function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}Object.defineProperty(n,"__esModule",{value:!0}),n.sagas=n.libs=n.selectors=n.reducers=n.types=n.actions=void 0;var o=t(4),i=r(o),c=t(3),u=r(c),s=t(7),a=r(s),l=t(15),f=r(l),d=t(6),h=r(d),v=t(14),p=r(v);n.actions=i,n.types=u,n.reducers=a,n.selectors=f,n.libs=h,n.sagas=p},function(e,n,t){var r;(function(){"use strict";function n(){}function o(e,n){for(var t=e.length;t--;)if(e[t].listener===n)return t;return-1}function i(e){return function(){return this[e].apply(this,arguments)}}var c=n.prototype,u=this,s=u.EventEmitter;c.getListeners=function(e){var n,t,r=this._getEvents();if(e instanceof RegExp){n={};for(t in r)r.hasOwnProperty(t)&&e.test(t)&&(n[t]=r[t])}else n=r[e]||(r[e]=[]);return n},c.flattenListeners=function(e){var n,t=[];for(n=0;n<e.length;n+=1)t.push(e[n].listener);return t},c.getListenersAsObject=function(e){var n,t=this.getListeners(e);return t instanceof Array&&(n={},n[e]=t),n||t},c.addListener=function(e,n){var t,r=this.getListenersAsObject(e),i="object"==typeof n;for(t in r)r.hasOwnProperty(t)&&o(r[t],n)===-1&&r[t].push(i?n:{listener:n,once:!1});return this},c.on=i("addListener"),c.addOnceListener=function(e,n){return this.addListener(e,{listener:n,once:!0})},c.once=i("addOnceListener"),c.defineEvent=function(e){return this.getListeners(e),this},c.defineEvents=function(e){for(var n=0;n<e.length;n+=1)this.defineEvent(e[n]);return this},c.removeListener=function(e,n){var t,r,i=this.getListenersAsObject(e);for(r in i)i.hasOwnProperty(r)&&(t=o(i[r],n),t!==-1&&i[r].splice(t,1));return this},c.off=i("removeListener"),c.addListeners=function(e,n){return this.manipulateListeners(!1,e,n)},c.removeListeners=function(e,n){return this.manipulateListeners(!0,e,n)},c.manipulateListeners=function(e,n,t){var r,o,i=e?this.removeListener:this.addListener,c=e?this.removeListeners:this.addListeners;if("object"!=typeof n||n instanceof RegExp)for(r=t.length;r--;)i.call(this,n,t[r]);else for(r in n)n.hasOwnProperty(r)&&(o=n[r])&&("function"==typeof o?i.call(this,r,o):c.call(this,r,o));return this},c.removeEvent=function(e){var n,t=typeof e,r=this._getEvents();if("string"===t)delete r[e];else if(e instanceof RegExp)for(n in r)r.hasOwnProperty(n)&&e.test(n)&&delete r[n];else delete this._events;return this},c.removeAllListeners=i("removeEvent"),c.emitEvent=function(e,n){var t,r,o,i,c,u=this.getListenersAsObject(e);for(i in u)if(u.hasOwnProperty(i))for(t=u[i].slice(0),o=t.length;o--;)r=t[o],r.once===!0&&this.removeListener(e,r.listener),c=r.listener.apply(this,n||[]),c===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},c.trigger=i("emitEvent"),c.emit=function(e){var n=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,n)},c.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},c._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},c._getEvents=function(){return this._events||(this._events={})},n.noConflict=function(){return u.EventEmitter=s,n},r=function(){return n}.call(u,t,u,e),!(void 0!==r&&(e.exports=r))}).call(this)},function(e,n){e.exports=vendors_dashboard_worona},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CONNECTION_STARTED="connection/CONNECTION_STARTED",n.CONNECTION_REQUESTED="connection/CONNECTION_REQUESTED",n.CONNECTION_SUCCEED="connection/CONNECTION_SUCCEED",n.CONNECTION_FAILED="connection/CONNECTION_FAILED",n.DISCONNECTED="connection/DISCONNECTED"},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}Object.defineProperty(n,"__esModule",{value:!0}),n.disconnected=n.connectionFailed=n.connectionSucceed=n.connectionRequested=n.connectionStarted=void 0;var o=t(3),i=r(o);n.connectionStarted=function(){return{type:i.CONNECTION_STARTED}},n.connectionRequested=function(){return{type:i.CONNECTION_REQUESTED}},n.connectionSucceed=function(){return{type:i.CONNECTION_SUCCEED}},n.connectionFailed=function(e){return{type:i.CONNECTION_FAILED,error:e}},n.disconnected=function(e){return{type:i.DISCONNECTED,error:e}}},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.url="wss://meteor.worona.io/websocket",n.timeout=1e4},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.errorEventChannel=n.readyEventChannel=n.collectionEventChannel=n.unsubscribe=n.subscribe=n.logout=n.loggedOutEventChannel=n.loggedInEventChannel=n.loginWithPassword=n.call=n.disconnectedEventChannel=n.connectedEventChannel=n.connect=n.start=n.Connection=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(16),u=t(11),s=t(5),a=(0,c.createClass)(),l=n.Connection=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this._url=n.url||s.url,this._client=null}return i(e,[{key:"start",value:function(){this._client=new a({autoConnect:!1,autoReconnect:!1,maintainCollections:!0,ddpVersion:"1",endpoint:this._url})}},{key:"connect",value:function(){this._client.ddp.connect()}},{key:"connectedEventChannel",value:function(){var e=this;return(0,u.eventChannel)(function(n){var t=e._client.ddp.on("connected",function(){n("connected")});return function(){e._client.ddp.removeListener("connected",t)}})}},{key:"disconnectedEventChannel",value:function(){var e=this;return(0,u.eventChannel)(function(n){var t=e._client.ddp.on("disconnected",function(){n("disconnected")});return function(){e._client.ddp.removeListener("disconnected",t)}})}},{key:"call",value:function(){for(var e=this,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return new Promise(function(n,r){var i;(i=e._client).call.apply(i,t).then(function(e){"object"===("undefined"==typeof e?"undefined":o(e))&&"Meteor.Error"===e.errorType?r(e):n(e)})["catch"](function(e){return r(e)})})}},{key:"loginWithPassword",value:function(e,n){return this._client.loginWithPassword({email:e,password:n})}},{key:"loggedInEventChannel",value:function(){var e=this;return(0,u.eventChannel)(function(n){var t=e._client.on("loggedIn",function(){n(e._client.userId)});return function(){e._client.removeListener("loggedIn",t)}})}},{key:"loggedOutEventChannel",value:function(){var e=this;return(0,u.eventChannel)(function(n){var t=e._client.on("loggedOut",function(){n("logout")});return function(){e._client.removeListener("loggedOut",t)}})}},{key:"logout",value:function(){return this._client.logout()}},{key:"subscribe",value:function(){var e;return(e=this._client).subscribe.apply(e,arguments)}},{key:"unsubscribe",value:function(e){this._client.unsubscribe(e)}},{key:"collectionEventChannel",value:function(e){var n=this;return(0,u.eventChannel)(function(t){var r=n._client.ddp.on("added",function(n){var r=n.collection,o=n.id,i=n.fields;r===e&&t({collection:r,event:"added",id:o,fields:i})}),o=n._client.ddp.on("changed",function(n){var r=n.collection,o=n.id,i=n.fields;r===e&&t({collection:r,event:"changed",id:o,fields:i})}),i=n._client.ddp.on("removed",function(n){var r=n.collection,o=n.id,i=n.fields;r===e&&t({collection:r,event:"removed",id:o,fields:i})});return function(){n._client.ddp.removeListener("added",r),n._client.ddp.removeListener("changed",o),n._client.ddp.removeListener("removed",i)}})}},{key:"readyEventChannel",value:function(e){return(0,u.eventChannel)(function(n){var t=e.on("ready",function(){n(e.name)});return function(){e.removeListener("ready",t)}})}},{key:"errorEventChannel",value:function(e){return(0,u.eventChannel)(function(n){var t=e.on("error",function(t){n(e.name,t)});return function(){e.removeListener("error",t)}})}}]),e}(),f=new l;n.start=f.start.bind(f),n.connect=f.connect.bind(f),n.connectedEventChannel=f.connectedEventChannel.bind(f),n.disconnectedEventChannel=f.disconnectedEventChannel.bind(f),n.call=f.call.bind(f),n.loginWithPassword=f.loginWithPassword.bind(f),n.loggedInEventChannel=f.loggedInEventChannel.bind(f),n.loggedOutEventChannel=f.loggedOutEventChannel.bind(f),n.logout=f.logout.bind(f),n.subscribe=f.subscribe.bind(f),n.unsubscribe=f.unsubscribe.bind(f),n.collectionEventChannel=f.collectionEventChannel.bind(f),n.readyEventChannel=f.readyEventChannel.bind(f),n.errorEventChannel=f.errorEventChannel.bind(f),n["default"]=f},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}Object.defineProperty(n,"__esModule",{value:!0}),n.isConnecting=n.isConnected=void 0;var o=t(29),i=t(3),c=r(i),u=n.isConnected=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],n=arguments[1];switch(n.type){case c.CONNECTION_SUCCEED:return!0;case c.DISCONNECTED:return!1;default:return e}},s=n.isConnecting=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],n=arguments[1];switch(n.type){case c.CONNECTION_REQUESTED:return!0;case c.CONNECTION_SUCCEED:case c.CONNECTION_FAILED:return!1;default:return e}};n["default"]=function(){return(0,o.combineReducers)({isConnected:u,isConnecting:s})}},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e){var n=e.id,t=e.token;return this.userId=n,this.loggedIn=!0,s.set(this.endpoint+"__login_token__",t).then(this.emit.bind(this,"loggedIn",n)).then(function(){return n})}function i(){return this.userId=null,this.loggedIn=!1,s.del(this.endpoint+"__login_token__").then(this.emit.bind(this,"loggedOut")).then(function(){return null})}function c(){return s.get(this.endpoint+"__login_token__").then(function(e){if(!e)throw new Error("No login token");return{resume:e}}).then(this.login.bind(this))["catch"](i.bind(this))}Object.defineProperty(n,"__esModule",{value:!0}),n.onLogin=o,n.onLogout=i,n.resumeLogin=c;var u=t(23),s=r(u)},function(e,n){function t(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function r(e){return function(n){return null==n?void 0:n[e]}}function o(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}function i(e,n){return function(t){return e(n(t))}}function c(e,n,t){var r=e[n];T.call(e,n)&&p(r,t)&&(void 0!==t||n in e)||(e[n]=t)}function u(e,n){return null!=e&&(T.call(e,n)||"object"==typeof e&&n in e&&null===Q(e))}function s(e,n){return n=D(void 0===n?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=D(r.length-n,0),c=Array(i);++o<i;)c[o]=r[n+o];o=-1;for(var u=Array(n+1);++o<n;)u[o]=r[o];return u[n]=c,t(e,this,u)}}function a(e,n,t,r){t||(t={});for(var o=-1,i=n.length;++o<i;){var u=n[o],s=r?r(t[u],e[u],u,t,e):void 0;c(t,u,void 0===s?e[u]:s)}return t}function l(e){return s(function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,c=o>2?t[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,c&&h(t[0],t[1],c)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var u=t[r];u&&e(n,u,r,i)}return n})}function f(e){var n=e?e.length:void 0;return _(n)&&(V(e)||E(e)||y(e))?o(n,String):null}function d(e,n){return n=null==n?k:n,!!n&&("number"==typeof e||I.test(e))&&e>-1&&e%1==0&&e<n}function h(e,n,t){if(!O(t))return!1;var r=typeof n;return!!("number"==r?b(t)&&d(n,t.length):"string"==r&&n in t)&&p(t[n],e)}function v(e){var n=e&&e.constructor,t="function"==typeof n&&n.prototype||L;return e===t}function p(e,n){return e===n||e!==e&&n!==n}function y(e){return g(e)&&T.call(e,"callee")&&(!x.call(e,"callee")||M.call(e)==j)}function b(e){return null!=e&&_(q(e))&&!m(e)}function g(e){return C(e)&&b(e)}function m(e){var n=O(e)?M.call(e):"";return n==N||n==S}function _(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=k}function O(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function C(e){return!!e&&"object"==typeof e}function E(e){return"string"==typeof e||!V(e)&&C(e)&&M.call(e)==P}function w(e){var n=v(e);if(!n&&!b(e))return U(e);var t=f(e),r=!!t,o=t||[],i=o.length;for(var c in e)!u(e,c)||r&&("length"==c||d(c,i))||n&&"constructor"==c||o.push(c);return o}var k=9007199254740991,j="[object Arguments]",N="[object Function]",S="[object GeneratorFunction]",P="[object String]",I=/^(?:0|[1-9]\d*)$/,L=Object.prototype,T=L.hasOwnProperty,M=L.toString,x=L.propertyIsEnumerable,A=Object.getPrototypeOf,R=Object.keys,D=Math.max,F=!x.call({valueOf:1},"valueOf"),U=i(R,Object),q=r("length"),Q=i(A,Object),V=Array.isArray,W=l(function(e,n){if(F||v(n)||b(n))return void a(n,w(n),e);for(var t in n)T.call(n,t)&&c(e,t,n[t])});e.exports=W},function(e,n,t){e.exports=t(2)("9538dc1f1f3ffc7eff656785a3b0e00e")},function(e,n,t){e.exports=t(2)("ac46257ab981ad0673dc2f51603455a2")},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CONNECTION_LOST="Connection lost",n.CONNECTION_TIMEOUT="Connection timeout"},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(){var e,n,t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,i.call)(l.start);case 2:return o.next=4,(0,i.put)(d.connectionStarted());case 4:return o.next=6,(0,i.call)(l.connectedEventChannel);case 6:return e=o.sent,o.next=9,(0,i.call)(l.disconnectedEventChannel);case 9:n=o.sent;case 10:return o.next=13,(0,i.put)(d.connectionRequested());case 13:return o.next=15,(0,i.call)(l.connect);case 15:return o.next=17,(0,i.race)({connected:(0,i.take)(e),timeout:(0,i.call)(c.delay,s.timeout)});case 17:if(t=o.sent,r=t.connected,!r){o.next=28;break}return o.next=22,(0,i.put)(d.connectionSucceed());case 22:return o.next=24,(0,i.take)(n);case 24:return o.next=26,(0,i.put)(d.disconnected(u.CONNECTION_LOST));case 26:o.next=30;break;case 28:return o.next=30,(0,i.put)(d.connectionFailed(u.CONNECTION_TIMEOUT));case 30:o.next=10;break;case 32:case"end":return o.stop()}},h[0],this)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o;var i=t(10),c=t(11),u=t(12),s=t(5),a=t(6),l=r(a),f=t(4),d=r(f),h=[o].map(regeneratorRuntime.mark)},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[(0,i.fork)(u["default"])];case 2:case"end":return e.stop()}},s[0],this)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=o;var i=t(10),c=t(13),u=r(c),s=[o].map(regeneratorRuntime.mark)},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e){return e&&e.__esModule?e:{"default":e}}var i=t(30),c=o(i),u=t(7),s=r(u);(0,c["default"])(s).omit("default").keys().forEach(function(n){e.exports[n]=function(e){return e.connection[n]}})},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function c(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=[d,y,_,v,g].concat(e),t=function(){var e=this,t=arguments;n.forEach(function(n){var r=n.init;return r&&r.apply(e,t)})};return t.prototype=Object.create(l["default"].prototype),t.prototype.constructor=t,s["default"].apply(void 0,[t.prototype].concat(i(n))),delete t.prototype.init,t}Object.defineProperty(n,"__esModule",{value:!0}),n.createClass=c;var u=t(9),s=o(u),a=t(1),l=o(a),f=t(17),d=r(f),h=t(18),v=r(h),p=t(19),y=r(p),b=t(20),g=r(b),m=t(21),_=r(m)},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){this.ddp.connect()}function i(){this.ddp.disconnect()}function c(e){var n=this,t=e.endpoint,r=e.SocketConstructor,o=void 0===r?WebSocket:r,i=e.autoConnect,c=e.autoReconnect,u=e.reconnectInterval;this.endpoint=t;var a={endpoint:t,SocketConstructor:o,autoConnect:i,autoReconnect:c,reconnectInterval:u};this.ddp=new s["default"](a).on("connected",function(){return n.emit("connected")}).on("disconnected",function(){return n.emit("disconnected")})}Object.defineProperty(n,"__esModule",{value:!0}),n.connect=o,n.disconnect=i,n.init=c;var u=t(25),s=r(u)},function(e,n,t){"use strict";function r(e){return this.call("login",e).then(c.onLogin.bind(this))}function o(){return this.call("logout").then(c.onLogout.bind(this))}function i(){this.userId=null,this.loggedIn=!1,this.ddp.on("connected",c.resumeLogin.bind(this))}Object.defineProperty(n,"__esModule",{value:!0}),n.login=r,n.logout=o,n.init=i;var c=t(8)},function(e,n){"use strict";function t(e,n){var t=this;return new Promise(function(r,o){var i=t.ddp.method(e,n);t.methods.cache[i]={resolve:r,reject:o}})}function r(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return this.apply(e,t)}function o(){var e=this;this.methods={cache:{}},this.ddp.on("result",function(n){var t=n.id,r=n.error,o=n.result,i=e.methods.cache[t];r?i.reject(r):i.resolve(o),delete e.methods.cache[t]})}Object.defineProperty(n,"__esModule",{value:!0}),n.apply=t,n.call=r,n.init=o},function(e,n,t){"use strict";function r(e){var n=e.username,t=e.email,r=e.password,o={password:r,user:{username:n,email:t}};return this.call("createUser",o).then(i.onLogin.bind(this))}function o(e){var n=e.username,t=e.email,r=e.password,o={password:r,user:{username:n,email:t}};return this.call("login",o).then(i.onLogin.bind(this))}Object.defineProperty(n,"__esModule",{value:!0}),n.createUser=r,n.loginWithPassword=o;var i=t(8)},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e){var n=e.id,t=e.name,r=e.params,i=e.stillInQueue;i||(this.subscriptions.cache.del(n),this.subscribe.apply(this,[t].concat(o(r))))}function c(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=(0,y["default"])(e,t),i=this.subscriptions.cache.get(o);if(!i){var c=this.ddp.sub(e,t),u="connected"!==this.ddp.status;i=(0,l["default"])(new d["default"],{fingerprint:o,id:c,name:e,params:t,stillInQueue:u}),this.subscriptions.cache.add(i)}return i}function u(e){this.ddp.unsub(e)}function s(){var e=this;this.subscriptions={cache:new v["default"]},this.ddp.on("ready",function(n){var t=n.subs;t.forEach(function(n){e.subscriptions.cache.get(n).emit("ready")})}).on("nosub",function(n){var t=n.error,r=n.id;t&&e.subscriptions.cache.get(r).emit("error",t),e.subscriptions.cache.del(r)}).on("connected",function(){e.subscriptions.cache.forEach(i.bind(e))})}Object.defineProperty(n,"__esModule",{value:!0}),n.subscribe=c,n.unsubscribe=u,n.init=s;var a=t(9),l=r(a),f=t(1),d=r(f),h=t(24),v=r(h),p=t(22),y=r(p)},function(e,n){"use strict";function t(e,n){return JSON.stringify({name:e,params:n})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t},function(e,n){"use strict";function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e){return new Promise(function(n,t){"undefined"!=typeof chrome&&chrome.storage?chrome.storage.local.get(e,function(t){return n(t[e])}):"undefined"!=typeof localStorage?n(localStorage[e]):"undefined"!=typeof AsyncStorage?AsyncStorage.getItem(e,function(e,r){e?t(e):n(r)}):n(c[e])})}function o(e,n){return new Promise(function(r,o){if("undefined"!=typeof chrome&&chrome.storage){var i=t({},e,n);chrome.storage.local.set(i,r)}else"undefined"!=typeof localStorage?(localStorage[e]=n,r()):"undefined"!=typeof AsyncStorage?AsyncStorage.setItem(e,n,function(e){e?o(e):r()}):(c[e]=n,r())})}function i(e){return new Promise(function(n,t){"undefined"!=typeof chrome&&chrome.storage?chrome.storage.local.remove(e,n):"undefined"!=typeof localStorage?(delete localStorage[e],n()):"undefined"!=typeof AsyncStorage?AsyncStorage.removeItem(e,function(e){e?t(e):n()}):(delete c[e],n())})}Object.defineProperty(n,"__esModule",{value:!0}),n.get=r,n.set=o,n.del=i;var c={}},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(){t(this,e),this.byFingerprint={},this.byId={}}return r(e,[{key:"add",value:function(e){this.byFingerprint[e.fingerprint]=e,this.byId[e.id]=e}},{key:"get",value:function(e){return this.byId[e]||this.byFingerprint[e]||null}},{key:"del",value:function(e){var n=this.get(e)||{};delete this.byFingerprint[n.fingerprint],delete this.byId[n.id]}},{key:"forEach",value:function(e){var n=this;Object.keys(this.byId).forEach(function(t){e(n.byId[t])})}}]),e}();n["default"]=o},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=function _(e,n,t){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:_(o,n,t)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(t):void 0},a=t(1),l=r(a),f=t(26),d=r(f),h=t(27),v=r(h),p=t(28),y="1",b=["ready","nosub","added","changed","removed","result","updated","error"],g=1e4,m=function(e){function n(e){o(this,n);var t=i(this,Object.getPrototypeOf(n).call(this));return t.status="disconnected",t.autoConnect=e.autoConnect!==!1,t.autoReconnect=e.autoReconnect!==!1,t.reconnectInterval=e.reconnectInterval||g,t.messageQueue=new d["default"](function(e){return"connected"===t.status&&(t.socket.send(e),!0)}),t.socket=new v["default"](e.SocketConstructor,e.endpoint),t.socket.on("open",function(){t.socket.send({msg:"connect",version:y,support:[y]})}),t.socket.on("close",function(){t.status="disconnected",t.messageQueue.empty(),t.emit("disconnected"),t.autoReconnect&&setTimeout(t.socket.open.bind(t.socket),t.reconnectInterval)}),t.socket.on("message:in",function(e){"connected"===e.msg?(t.status="connected",t.messageQueue.process(),t.emit("connected")):"ping"===e.msg?t.socket.send({msg:"pong",id:e.id}):(0,p.contains)(b,e.msg)&&t.emit(e.msg,e)}),t.autoConnect&&t.connect(),t}return c(n,e),u(n,[{key:"emit",value:function(){var e;setTimeout((e=s(Object.getPrototypeOf(n.prototype),"emit",this)).bind.apply(e,[this].concat(Array.prototype.slice.call(arguments))),0)}}]),u(n,[{key:"connect",value:function(){this.socket.open()}},{key:"disconnect",value:function(){this.autoReconnect=!1,this.socket.close()}},{key:"method",value:function(e,n){var t=(0,p.uniqueId)();return this.messageQueue.push({msg:"method",id:t,method:e,params:n}),t}},{key:"sub",value:function(e,n){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return t||(t=(0,p.uniqueId)()),this.messageQueue.push({msg:"sub",id:t,name:e,params:n}),t}},{key:"unsub",value:function(e){return this.messageQueue.push({msg:"unsub",id:e}),e}}]),n}(l["default"]);n["default"]=m},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(n){t(this,e),this.consumer=n,this.queue=[]}return r(e,[{key:"push",value:function(e){this.queue.push(e),this.process()}},{key:"process",value:function(){if(0!==this.queue.length){var e=this.consumer(this.queue[0]);e&&(this.queue.shift(),this.process())}}},{key:"empty",value:function(){this.queue=[]}}]),e}();n["default"]=o},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=t(1),a=r(s),l=function(e){function n(e,t){o(this,n);var r=i(this,Object.getPrototypeOf(n).call(this));return r.SocketConstructor=e,r.endpoint=t,r.rawSocket=null,r}return c(n,e),u(n,[{key:"send",value:function(e){var n=JSON.stringify(e);this.rawSocket.send(n),this.emit("message:out",JSON.parse(n))}},{key:"open",value:function(){var e=this;this.rawSocket||(this.rawSocket=new this.SocketConstructor(this.endpoint),this.rawSocket.onopen=function(){return e.emit("open")},this.rawSocket.onclose=function(){e.rawSocket=null,e.emit("close")},this.rawSocket.onerror=function(){delete e.rawSocket.onclose,e.rawSocket.close(),e.rawSocket=null,e.emit("close")},this.rawSocket.onmessage=function(n){var t;try{t=JSON.parse(n.data)}catch(r){return}e.emit("message:in",t)})}},{key:"close",value:function(){this.rawSocket&&this.rawSocket.close()}}]),n}(a["default"]);n["default"]=l},function(e,n){"use strict";function t(){return(o++).toString()}function r(e,n){return e.indexOf(n)!==-1}Object.defineProperty(n,"__esModule",{value:!0}),n.uniqueId=t,n.contains=r;var o=0},function(e,n,t){e.exports=t(2)("c02e47e5e61c3e61b153c56e595bd867")},function(e,n,t){e.exports=t(2)("e0725a01daa4746ac52caa8a837089da")}]);