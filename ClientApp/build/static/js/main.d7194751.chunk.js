(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{42:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);a(43);var n,r=a(0),c=a.n(r),o=a(21),l=a(8),s=a(27),u=a(14),i=a(22),m=a(24),p=a(40),d=a(34),E={forecasts:[],isLoading:!1};!function(e){e[e.SIGN_IN=0]="SIGN_IN",e[e.RETRIEVE=1]="RETRIEVE",e[e.SIGN_OUT=2]="SIGN_OUT"}(n||(n={}));var f=e=>({type:n.SIGN_IN,login:e}),g={id:localStorage.getItem("id")||"",email:localStorage.getItem("email")||"",subscribedChatRooms:localStorage.getItem("subscribedChatRooms")&&JSON.parse(localStorage.getItem("subscribedChatRooms"))||"",token:localStorage.getItem("token")||"",username:localStorage.getItem("username")||""},b={counter:(e,t)=>{if(void 0===e)return{count:0};switch(t.type){case"INCREMENT_COUNT":return{count:e.count+1};case"DECREMENT_COUNT":return{count:e.count-1};default:return e}},weatherForecasts:(e,t)=>{if(void 0===e)return E;var a=t;switch(a.type){case"REQUEST_WEATHER_FORECASTS":return{startDateIndex:a.startDateIndex,forecasts:e.forecasts,isLoading:!0};case"RECEIVE_WEATHER_FORECASTS":if(a.startDateIndex===e.startDateIndex)return{startDateIndex:a.startDateIndex,forecasts:a.forecasts,isLoading:!1}}return e},login:(e=g,t)=>{switch(t.type){case n.SIGN_IN:return localStorage.setItem("id",t.login.id),localStorage.setItem("email",t.login.email),localStorage.setItem("username",t.login.username),localStorage.setItem("subscribedChatRooms",t.login.subscribedChatRooms),localStorage.setItem("token",t.login.token),Object(i.a)({},t.login);case n.SIGN_OUT:return localStorage.clear(),Object(i.a)({},g);default:return e}}};var h=a(7),v=a(65),w=a(9),x=a(64),O=a(66),j=a(67),k=a(68),y=a(69),N=a(70),S=a(20),C=(a(53),()=>{var e=Object(r.useState)(!1),t=Object(w.a)(e,2),a=t[0],c=t[1],o=Object(l.d)(),s=Object(l.e)(e=>e.login);return r.createElement("header",null,r.createElement(x.a,{className:"navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3",light:!0},r.createElement(v.a,null,r.createElement(O.a,{tag:S.a,to:"/"},"ChatApp"),s.token&&r.createElement("span",{className:"text-muted"}," Welcome, ",s.username," "),r.createElement(j.a,{onClick:()=>c(!a),className:"mr-2"}),r.createElement(k.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:a,navbar:!0},r.createElement("ul",{className:"navbar-nav flex-grow"},s.token?r.createElement(r.Fragment,null,r.createElement(y.a,null,r.createElement(N.a,{tag:S.a,className:"text-dark",to:"/"},"Home")),r.createElement(y.a,null,r.createElement(N.a,{tag:S.a,className:"text-dark",to:"/newchatroom"},"New Chat room")),r.createElement(y.a,null,r.createElement(N.a,{tag:S.a,className:"text-dark",to:"/",onClick:()=>o({type:n.SIGN_OUT})&&window.location.reload()}," Sign Out "))):r.createElement(r.Fragment,null,r.createElement(y.a,null,r.createElement(N.a,{tag:S.a,className:"text-dark",to:"/signin"},"Sign in")),r.createElement(y.a,null,r.createElement(N.a,{tag:S.a,className:"text-dark",to:"/signup"},"Sign up"))))))))});class I extends r.PureComponent{render(){return r.createElement(r.Fragment,null,r.createElement(C,null),r.createElement(v.a,null,this.props.children))}}a(61);var T,R=a(6),_=a.n(R),D=a(11),U=a(76),G=a(77),L=a(78),P=a(71),A=a(79);!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(T||(T={}));var F=(e,t="",a="")=>{var n={method:e,headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"bearer ".concat(a)}};return t?Object(i.a)({},n,{body:JSON.stringify(t)}):Object(i.a)({},n)},W=function(){var e=Object(D.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/user/login",F(T.POST,t));case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=a.statusText;case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(D.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/user",F(T.POST,t));case 2:return a=e.sent,e.abrupt("return",a.ok);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V={getChats:function(){var e=Object(D.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/chatroom");case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=alert("No chats found");case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:W,signUp:M,newChatRoom:function(){var e=Object(D.a)(_.a.mark((function e(t,a,n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/chatroom",F(T.POST,{name:t,userId:a},n));case 2:return(r=e.sent).ok||console.log("Error: ".concat(r.status)),e.abrupt("return",r.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),editChatRoom:function(){var e=Object(D.a)(_.a.mark((function e(t,a){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("api/chatroom","/").concat(t.id),F(T.PUT,t,a));case 2:return(n=e.sent).ok||console.log("Error: ".concat(n.status)),e.abrupt("return",n.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteChatRoom:function(){var e=Object(D.a)(_.a.mark((function e(t,a,n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("api/chatroom","/").concat(t),F(T.DELETE,a,n));case 2:return r=e.sent,e.abrupt("return",r.ok);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),getMessages:function(){var e=Object(D.a)(_.a.mark((function e(t,a){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("api/chatroom","/").concat(t,"/message"),F(T.GET,"",a));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),newMessage:function(){var e=Object(D.a)(_.a.mark((function e(t,a,n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("api/chatroom","/").concat(t,"/message"),F(T.POST,a,n));case 2:return r=e.sent,e.abrupt("return",r.ok);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},q=a(88),J=a(72),X=a(73),z=a(74),B=a(75),H=({id:e})=>{var t=Object(r.useState)(""),a=Object(w.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(!1),u=Object(w.a)(s,2),i=u[0],m=u[1],p=Object(l.e)(e=>e.login),d=()=>m(e=>!e),E=function(){var t=Object(D.a)(_.a.mark((function t(a){var r,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r={id:e,name:n,userId:p.id},t.next=4,V.editChatRoom(r,p.token);case 4:c=t.sent,console.log(c),d(),window.location.reload();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{color:"warning",onClick:d},"Edit"),c.a.createElement(q.a,{isOpen:i,toggle:d},c.a.createElement(J.a,{toggle:d},"Edit ChatRoom"),c.a.createElement(X.a,null,c.a.createElement(z.a,{className:"text-center",type:"text",name:"name",placeholder:"name",value:n,onChange:({target:e})=>o(e.value)})),c.a.createElement(B.a,null,c.a.createElement(P.a,{color:"warning",type:"submit",onClick:E},"Edit Chatroom"))))},Z=({id:e})=>{var t=Object(r.useState)(""),a=Object(w.a)(t,2),n=(a[0],a[1],Object(l.e)(e=>e.login)),o=Object(r.useState)(!1),s=Object(w.a)(o,2),u=s[0],i=s[1],m=()=>i(e=>!e),p=function(){var t=Object(D.a)(_.a.mark((function t(a){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,V.deleteChatRoom(e,n.id,n.token);case 3:r=t.sent,console.log(r),r&&window.location.reload();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{color:"danger",onClick:m},"Delete"),c.a.createElement(q.a,{isOpen:u,toggle:m},c.a.createElement(J.a,{toggle:m},"Delete ChatRoom"),c.a.createElement(X.a,null,c.a.createElement(P.a,{color:"danger",type:"submit",onClick:p},"Delete Chatroom"))))},$=({name:e,id:t,userId:a})=>{var n=Object(l.e)(e=>e.login);return console.log(a,n.id,n.id==a),c.a.createElement(U.a,{className:"my-2"},c.a.createElement(G.a,null,c.a.createElement(L.a,{className:"shadow-sm text-center"},c.a.createElement("h4",null,"#",t),c.a.createElement("h4",null,e),c.a.createElement("div",{className:"flex row justify-content-around my-2"},n.id&&c.a.createElement(S.a,{to:"".concat(t)},c.a.createElement(P.a,{color:"primary",className:"my-auto"},"Go to chatroom")),Number(n.id)===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,null,c.a.createElement(H,{id:t}),c.a.createElement(Z,{id:t})))))))},Q=a(80),K=()=>{var e=Object(r.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)(()=>{(function(){var e=Object(D.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,V.getChats();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]),c.a.createElement(v.a,null,c.a.createElement("h1",{className:"text-center"},"Chat Rooms"),c.a.createElement(Q.a,{className:"row-cols-1 row-cols-sm-2 row-cols-md-3"},a.map(({name:e,id:t,userId:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement($,{name:e,id:t,userId:a})))))},Y=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase()),ee=a(81),te=a(82),ae=()=>{var e=Object(r.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)("test@test.com"),s=Object(w.a)(o,2),u=s[0],i=s[1],m=Object(r.useState)("Ewqewqeads"),p=Object(w.a)(m,2),d=p[0],E=p[1],g=Object(l.d)(),b=Object(l.e)(e=>e.login),x=function(){var e=Object(D.a)(_.a.mark((function e(t){var a,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n([]),a=Y(u),r=d.length>=6,!a||!r){e.next=10;break}return e.next=7,V.login({email:u,password:d});case 7:(c=e.sent)||n(e=>[...e,"Wrong credentials"]),g(f(c));case 10:!a&&n(e=>[...e,"Invalid Email"]),!r&&n(e=>[...e,"Invalid Password"]),i(""),E("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=c.a.createElement(v.a,{className:"flex"},a.map(e=>c.a.createElement(ee.a,{color:"danger"},c.a.createElement("li",null,e))),c.a.createElement(L.a,null,c.a.createElement(te.a,{className:"input-group"},c.a.createElement(z.a,{className:"form-control",type:"text",name:"email",placeholder:"email",required:!0,value:u,onChange:({target:e})=>i(e.value)}),c.a.createElement(z.a,{className:"form-control",type:"password",name:"password",placeholder:"password",min:6,required:!0,value:d,onChange:({target:e})=>E(e.value)}))));return c.a.createElement(G.a,{className:"mx-auto flex justify-content-center"},c.a.createElement("h3",{className:"text-center my-2 py-2 border-bottom text-secondary"},"Sign in"),b.token?c.a.createElement(h.a,{to:"/"}):O,c.a.createElement(P.a,{color:"primary",type:"submit",className:"w-75 align-self-center my-2",onClick:e=>x(e)},"Sign in"))},ne=()=>{var e=Object(r.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(""),s=Object(w.a)(o,2),u=s[0],i=s[1],m=Object(r.useState)(""),p=Object(w.a)(m,2),d=p[0],E=p[1],g=Object(r.useState)(""),b=Object(w.a)(g,2),h=b[0],x=b[1],O=Object(l.d)(),j=function(){var e=Object(D.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n([]),a=Y(d),h.length>=6){e.next=7;break}return n(e=>[...e,"Invalid Password"]),e.abrupt("return");case 7:if(!a){e.next=26;break}return e.next=10,V.signUp({username:u,email:d,password:h});case 10:if(!e.sent){e.next=23;break}return alert("New account created"),e.t0=O,e.t1=f,e.next=17,V.login({email:d,password:h});case 17:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3),window.location.reload(),e.next=24;break;case 23:n(e=>[...e,"User already exists"]);case 24:e.next=27;break;case 26:n(e=>[...e,"Invalid email format"]);case 27:E(""),i(""),x("");case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(v.a,{className:"flex"},c.a.createElement(G.a,null,c.a.createElement("h3",{className:"text-center my-2 py-2 border-bottom text-secondary"},"Sign up"),a.map(e=>c.a.createElement(ee.a,{color:"danger"},c.a.createElement("li",null,e))),c.a.createElement(L.a,null,c.a.createElement(te.a,{className:"input-group"},c.a.createElement("input",{className:"form-control",type:"text",name:"username",placeholder:"username",value:u,onChange:({target:e})=>i(e.value)}),c.a.createElement("input",{className:"form-control",type:"text",name:"email",placeholder:"email",value:d,onChange:({target:e})=>E(e.value)}),c.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"password",value:h,minLength:6,onChange:({target:e})=>x(e.value)}))),c.a.createElement(P.a,{color:"primary",type:"submit",className:"w-75 align-self-center my-2",onClick:e=>j(e)},"Sign in")))},re=a(83),ce=()=>{var e=Object(r.useState)(""),t=Object(w.a)(e,2),a=t[0],n=t[1],o=Object(l.e)(e=>e.login),s=function(){var e=Object(D.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,V.newChatRoom(a,o.id,o.token);case 3:e.sent&&window.history.back();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(v.a,{className:"mx-auto col-lg-8 col-md-6"},c.a.createElement("h1",{className:"text-center"},"Create New Chat Room"),c.a.createElement(te.a,{inline:!0,className:"flex justify-content-center"},c.a.createElement(re.a,{row:!0},c.a.createElement(z.a,{className:"text-center my-2 mx-auto",type:"text",name:"name",placeholder:"name",value:a,onChange:({target:e})=>n(e.value)}),c.a.createElement("button",{className:"btn btn-primary px-2 mx-1",type:"submit",onClick:s},"Add Chatroom"))))},oe=a(84),le=a(85),se=a(86),ue=({username:e,date:t,text:a})=>c.a.createElement(oe.a,null,c.a.createElement(le.a,null,c.a.createElement("h5",null,"Username: ",e),c.a.createElement("h6",null,t)),c.a.createElement(L.a,null,c.a.createElement(se.a,null,a))),ie=()=>{var e=Object(r.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1],o=Object(h.g)().id,s=Object(l.e)(e=>e.login);return Object(r.useEffect)(()=>{var e=function(){var e=Object(D.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,V.getMessages(o,s.token);case 4:t=e.sent,n(e=>[e,...t]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setTimeout(()=>{e()},300);return()=>clearTimeout(t)}),c.a.createElement(v.a,null,a&&a.map(({username:e,date:t,text:a})=>c.a.createElement("div",null,a&&c.a.createElement(ue,{username:e,date:t,text:a}))))},me=a(87),pe=a(89),de=()=>{var e=Object(r.useState)(""),t=Object(w.a)(e,2),a=t[0],n=t[1],o=Object(h.g)().id,s=Object(l.e)(e=>e.login);return c.a.createElement(v.a,null,c.a.createElement(te.a,null,c.a.createElement(me.a,{className:"py-2 my-2"},c.a.createElement(z.a,{type:"text",value:a,onChange:({target:e})=>n(e.value)}),c.a.createElement(pe.a,{addonType:"append"},c.a.createElement(P.a,{color:"primary",type:"submit",disabled:0==a.length,onClick:e=>{e.preventDefault();var t={author:s.name,text:a,userId:s.id};o&&V.newMessage(o,t,s.token),n("")}},"Submit")))))},Ee=()=>c.a.createElement("div",null,c.a.createElement(ie,null),c.a.createElement(de,null)),fe=()=>r.createElement(I,null,localStorage.getItem("token")?r.createElement(h.d,null,r.createElement(h.b,{exact:!0,path:"/newchatroom",component:ce}),r.createElement(h.b,{exact:!0,path:"/:id/edit",component:H}),r.createElement(h.b,{exact:!0,path:"/:id/delete",component:Z}),r.createElement(h.b,{exact:!0,path:"/:id",component:Ee})):r.createElement(r.Fragment,null,r.createElement(h.b,{exact:!0,path:"/signin",component:ae}),r.createElement(h.b,{exact:!0,path:"/signup",component:ne})),r.createElement(h.b,{exact:!0,path:"/",component:K}),r.createElement(h.a,{to:"/"})),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}var he=document.getElementsByTagName("base")[0].getAttribute("href"),ve=Object(u.a)({basename:he}),we=function(e,t){var a=[p.a,Object(d.a)(e)],n=Object(m.c)(Object(i.a)({},b,{router:Object(s.b)(e)})),r=[],c="undefined"===typeof window?null:window;return c&&c.__REDUX_DEVTOOLS_EXTENSION__&&r.push(c.__REDUX_DEVTOOLS_EXTENSION__()),Object(m.e)(n,t,Object(m.d)(Object(m.a)(...a),...r))}(ve);o.render(r.createElement(l.a,{store:we},r.createElement(s.a,{history:ve},r.createElement(fe,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{var e="".concat("","/service-worker.js");ge?function(e){fetch(e).then(t=>{var a=t.headers.get("content-type");404===t.status||a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):be(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):be(e)})}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.d7194751.chunk.js.map