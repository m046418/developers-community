(this["webpackJsonpfree-trial-registration"]=this["webpackJsonpfree-trial-registration"]||[]).push([[0],{161:function(e,a,n){"use strict";n.r(a);n(62);var t=n(0),r=n.n(t),i=n(85),l=n.n(i),o=(n(151),n(41)),u=n(7),s=n(6),c=n(1),m=n(93),d=n(88),v=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,f=function(e){return"string"===typeof e&&e.indexOf("\n")>0?e.split("\n").map((function(e,a){return r.a.createElement("div",{key:a},e)})):e},h=function(e){var a=document.cookie.match(new RegExp("(^| )".concat(e,"=([^;]+)")));return a&&"null"!==a[2].toLowerCase()?a[2]:void 0},p=function(e){var a=e.item,n=e.carouselWidth;return r.a.createElement(c.a,{px:5,sx:{height:"100%",width:n,backgroundImage:"url(".concat("/free-trial-registration","/img/").concat(a.bgImage,")"),backgroundSize:"cover",paddingTop:104,paddingBottom:84,display:"conversational-ai"===a.id?"flex":"block",alignItems:"center",overflow:"auto"}},a.beforeImage&&r.a.createElement(c.d,{src:"".concat("/free-trial-registration","/img/").concat(a.beforeImage),alt:"LivePerson logo",px:3,py:5,sx:{margin:"0 auto",display:"block",width:"channels"===a.id?["100%","100%","90%","80%","70%"]:["100%","100%","50%","40%"],height:"auto"}}),a.title&&r.a.createElement(c.f,{variant:"carouselTitle",mt:1},f(a.title)),a.text&&r.a.createElement(c.f,{variant:"carouselText",mt:1},f(a.text)),a.subtitle&&r.a.createElement(c.f,{variant:"carouselSubtitle",mt:1},f(a.subtitle)),a.author&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.f,{variant:"carouselAuthorName",mt:3},f(a.author.name)),r.a.createElement(c.f,{variant:"carouselAuthorRole",mt:1},f(a.author.role))))},g=function(e){var a=e.index,n=e.activeIndex,t=e.setActiveIndex;return r.a.createElement(c.a,{onClick:function(e){e.stopPropagation(),t(a)},"data-testid":"carousel-dot"},r.a.createElement(c.a,{variant:n===a?"activeDot":"inactiveDot",m:1,sx:{width:12,height:12,borderRadius:12,cursor:"pointer"}}))},z=function(e){var a=e.slides,n=Object(t.useState)(0),i=Object(s.a)(n,2),l=i[0],o=i[1],u=Object(t.useState)(null),m=Object(s.a)(u,2),d=m[0],v=m[1],f=Object(t.useState)(null),h=Object(s.a)(f,2),z=h[0],b=h[1],y=Object(t.useRef)(),S=Object(t.useCallback)((function(){o((function(e){return e+1>=a.length?0:e+1}))}),[a.length]),w=Object(t.useCallback)((function(){return clearInterval(d)}),[d]),C=Object(t.useCallback)((function(){return v(setInterval(S,6e3)),w}),[w,S]);return Object(t.useEffect)((function(){C()}),[]),Object(t.useLayoutEffect)((function(){var e=function(){b(y.current.offsetWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement(c.a,{"data-testid":"carousel",variant:"carousel",onMouseEnter:w,onMouseLeave:C,onClick:S,ref:y,sx:{height:"100vh",gridArea:"carousel",msGridColumn:"1",width:"100%",position:"relative",overflow:"hidden",display:["none","none","block"],cursor:"pointer"}},r.a.createElement(c.c,{sx:{transition:"transform 0.5s",transform:"translate3d(-".concat(z*l,"px, 0, 0)"),position:"absolute",top:0,bottom:0,left:0,width:z*a.length}},a.map((function(e){return r.a.createElement(p,{key:e.id,item:e,carouselWidth:z})}))),r.a.createElement(c.c,{sx:{position:"absolute",left:32,bottom:32,zIndex:1}},a.map((function(e,a){return r.a.createElement(g,{key:a,index:a,activeIndex:l,setActiveIndex:o})}))))},b=n(89),y=n.n(b),S=function(e){var a=e.smallSize,n=e.isStatic;return r.a.createElement(c.d,{src:y.a,alt:"LivePerson logo",px:a?[0,0,2]:4,pt:a?3:6,pb:3,sx:{display:n?"static":a?["block","block","none"]:["none","none","block"],position:n?"static":["static","static","absolute"],top:0,left:0,zIndex:2,width:a?170:215,height:a?66:83}})},w=n(90),C=n(11),E=function(){window.location.href="https://authentication.liveperson.net/login.html"},x=function(){return r.a.createElement(c.c,{p:[0,0,4,6],justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},r.a.createElement(S,{smallSize:!0}),r.a.createElement(c.c,{justifyContent:"flex-end",flex:1},r.a.createElement(C.a,{handleClick:E,"data-testid":"signInButton",variant:"secondary",label:"Sign In"})))},O=n(17),j=n.n(O),k=n(30),B=n(32),R=n(94),I=function(e){var a=e.handleChange,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{"data-testid":"recaptcha",size:"normal",sitekey:"6Ld569AUAAAAAJ8bKdSR4QCf5Z09zOBYLXprOlWa",onChange:function(e){return a("recaptchaResponseToken",e)}}),r.a.createElement(c.a,{mt:2},n.isError&&r.a.createElement(C.b,{error:n,mb:3})))},A={marketingData:{leadSource:h("lp-leadSource")||"",referringUrl:h("lp-lsRef")||"",utmCampaignId:h("lp-lsCampaign")||"",utmCampaignMedium:h("lp-lsMedium")||"",utmCampaignSearchKeywords:h("lp-lsTerms")||"",utmCampaignSource:h("lp-lsSource")||"",utmContent:h("lp-lsContent")||""}},F=Math.ceil(18);function M(e){return T.apply(this,arguments)}function T(){return(T=Object(B.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,a)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e){var a=e.setIsVideoActive,n=e.setMessageState,i=e.setAccountDetails,l=e.userDetails,o=e.setUserDetails,f=Object(t.useState)(null),h=Object(s.a)(f,2),p=h[0],g=h[1],z=Object(t.useState)({firstName:{message:"Required field"},lastName:{message:"Required Field"},email:{message:"The business email address entered is not valid."},password:{message:"Your password does not meet all the requirements",requirements:{name:"Your password must consist of:",data:[{name:"- minimum of 8 characters"},{name:"- one or more uppercase letters (A-Z)"},{name:"- one or more lowercase letters (a-z)"},{name:"- one or more numbers (0-9)"},{name:"- one or more of these special characters:"},{name:"& @ ! * $ < > / ( ) % # =",shouldIndent:!0},{name:"- cannot use any other special characters"}]}},region:{message:"Required Field"},recaptchaResponseToken:{message:"Required Field"}}),b=Object(s.a)(z,2),y=b[0],S=b[1],w=function(e,a){S((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(k.a)({},e,Object(u.a)(Object(u.a)({},n[e]),a)))}))},E=function(e,a){S((function(n){var t=Object(u.a)({},n);return t.password.requirements.data[e].isError=a,t}))},x=function(e,a){var n;switch(e){case"email":n=!v.test(a);break;case"password":n=function(e){var a=e.length>=8;E(0,!a);var n=null!==e.match(/[A-Z]+/);E(1,!n);var t=null!==e.match(/[a-z]+/);E(2,!t);var r=null!==e.match(/[0-9]+/);E(3,!r);var i=null!==e.match(/[&@!*$<>/()%#=]+/);E(4,!i),E(5,!i);var l=null!==e.match(/^[(0-9)(a-z)(A-Z)&@!*$<>/()%#=]+$/);return E(6,!l),!a||!n||!t||!r||!i||!l}(a);break;case"firstName":case"lastName":n=a.length<1;break;case"region":n=!("z1"===a||"z2"===a||"z3"===a);break;default:n=""===a}return w(e,{hasInteracted:!0,isError:n}),n},O=function(e,a){o(Object(u.a)(Object(u.a)({},l),{},Object(k.a)({},e,a))),x(e,a)},R=function(){var e=Object(B.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return"function"===typeof e.json?e.json():e})).then((function(e){return console.log("Current status is :",e),e})).catch((function(){n("error")})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),T=function(){var e=Object(B.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat("https://free-trial.liveperson.com/api/free-trial","/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return"function"===typeof e.json?e.json():e})).then(function(){var e=Object(B.a)(j.a.mark((function e(t){var r,l,o,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("result is :",t),g(!1),r=t.accountCreationId,console.log("account creation id is :",r),l="".concat("https://free-trial.liveperson.com/api/free-trial","/status/").concat(r),console.log("account creation status path is: ",l),o=0;case 7:if(!(o<F)){e.next=29;break}return console.log("Sleeping for 5 seconds before checking if account is configured: "),e.next=11,M(5e3);case 11:return e.next=13,R(l);case 13:if(s=e.sent,console.log("result is : ",s),"SUCCESS"!==s.status){e.next=21;break}return n("success"),i(Object(u.a)(Object(u.a)({},s),{},{username:a.email})),e.abrupt("break",29);case 21:if("IN_PROGRESS"!==s.status){e.next=24;break}e.next=26;break;case 24:return n("error"),e.abrupt("break",29);case 26:o++,e.next=7;break;case 29:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(){g(!1),n("error")})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(c.a,{sx:{position:"relative"}},r.a.createElement("form",{"data-testid":"registerForm",autoComplete:"off"},r.a.createElement(c.a,{sx:{display:"grid",gridTemplateColumns:["1fr 1fr","2.5fr 2.5fr 4fr"],gridTemplateAreas:"'firstname lastname'",gridGap:"16px","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"2.5fr 2.5fr 4fr"}}},r.a.createElement(c.a,{sx:{gridArea:"firstname",msGridColumn:"1","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{marginRight:2}}},r.a.createElement(C.c,{name:"firstName",type:"text",value:l.firstName,handleChange:O,handleBlur:w,placeholder:"First name",error:y.firstName,shouldFocusOnLoad:!0,isFullWidth:!0})),r.a.createElement(c.a,{sx:{gridArea:"lastname",msGridColumn:"2","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{marginLeft:2}}},r.a.createElement(C.c,{name:"lastName",type:"text",value:l.lastName,handleChange:O,handleBlur:w,placeholder:"Last name",error:y.lastName,isFullWidth:!0}))),r.a.createElement(C.c,{name:"email",type:"email",value:l.email,handleChange:O,handleBlur:w,placeholder:"Enter business email address",error:y.email}),r.a.createElement(C.c,{name:"password",type:"password",value:l.password,handleChange:O,handleBlur:w,placeholder:"Create password",error:y.password}),r.a.createElement(C.e,{name:"region",value:l.region,defaultValue:"choose-country",handleChange:O,handleBlur:w,error:y.region,options:[{name:"Select country",value:"choose-country",disabled:!0}].concat(Object(m.a)(d.sort((function(e,a){return e.name<a.name?-1:1})))).filter((function(e){return!e.isBanned}))}),r.a.createElement(I,{handleChange:O,error:y.recaptchaResponseToken}),r.a.createElement(c.a,{pt:4,sx:{display:"grid",gridTemplateColumns:["auto","5fr 4fr"],"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"5fr 4fr"}}},r.a.createElement(C.a,{"data-testid":"registerButton",handleClick:function(e){e.preventDefault(),Object.keys(l).map((function(e){return x(e,l[e])})).reduce((function(e,a){return a||e}),!1)?"function"===typeof hj&&hj("formSubmitFailed"):("function"===typeof hj&&hj("formSubmitSuccessful"),g(!0),T(Object(u.a)(Object(u.a)({},l),A)),a(!0))},label:"Create Account",isLoading:p,isFullWidth:!0,variant:"primary"}))))},L=n(92);function D(){return(D=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function N(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM38.8284 44.8284C40.3905 46.3905 40.3905 48.9232 38.8284 50.4853C37.2663 52.0474 34.7337 52.0474 33.1716 50.4853C31.6095 48.9232 31.6095 46.3905 33.1716 44.8284C34.7337 43.2663 37.2663 43.2663 38.8284 44.8284ZM36 18C34.3431 18 33 19.3431 33 21V36C33 37.6569 34.3431 39 36 39C37.6569 39 39 37.6569 39 36V21C39 19.3431 37.6569 18 36 18Z",fill:"#EC5252"}),H=function(e){var a=e.svgRef,n=e.title,t=N(e,["svgRef","title"]);return r.a.createElement("svg",D({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,P)},W=r.a.forwardRef((function(e,a){return r.a.createElement(H,D({svgRef:a},e))}));n.p;function U(){return(U=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function q(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM23.4853 32.8284C21.9232 31.2663 19.3905 31.2663 17.8284 32.8284C16.2663 34.3905 16.2663 36.9232 17.8284 38.4853C19.3905 40.0474 21.9232 40.0474 23.4853 38.4853C25.0474 36.9232 25.0474 34.3905 23.4853 32.8284ZM32.8284 32.8284C34.3905 31.2663 36.9232 31.2663 38.4853 32.8284C40.0474 34.3905 40.0474 36.9232 38.4853 38.4853C36.9232 40.0474 34.3905 40.0474 32.8284 38.4853C31.2663 36.9232 31.2663 34.3905 32.8284 32.8284ZM53.4853 32.8284C51.9232 31.2663 49.3905 31.2663 47.8284 32.8284C46.2663 34.3905 46.2663 36.9232 47.8284 38.4853C49.3905 40.0474 51.9232 40.0474 53.4853 38.4853C55.0474 36.9232 55.0474 34.3905 53.4853 32.8284Z",fill:"#DEAD89"}),V=function(e){var a=e.svgRef,n=e.title,t=q(e,["svgRef","title"]);return r.a.createElement("svg",U({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,Z)},K=r.a.forwardRef((function(e,a){return r.a.createElement(V,U({svgRef:a},e))}));n.p;function J(){return(J=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function Y(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM45.7488 26.1213C46.9204 24.9497 48.8199 24.9497 49.9914 26.1213C51.163 27.2929 51.163 29.1924 49.9914 30.364L34.26 46.0954C34.1445 46.2767 34.0075 46.4483 33.8492 46.6066C33.3323 47.1236 32.6735 47.4124 31.9982 47.4732C31.1084 47.587 30.1773 47.3023 29.4939 46.6189C29.3169 46.4419 29.1667 46.2483 29.0432 46.0432L21.1213 38.1213C19.9497 36.9497 19.9497 35.0503 21.1213 33.8787C22.2929 32.7071 24.1924 32.7071 25.364 33.8787L31.6777 40.1924L45.7488 26.1213Z",fill:"#13CF5E"}),$=function(e){var a=e.svgRef,n=e.title,t=Y(e,["svgRef","title"]);return r.a.createElement("svg",J({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,_)},Q=r.a.forwardRef((function(e,a){return r.a.createElement($,J({svgRef:a},e))})),X=(n.p,{creating:{icon:r.a.createElement(K,{"data-testid":"creatingIcon",style:{width:44,height:44}}),title:"Setting up your account",description:"Please wait while we configure and set your account. In the meanwhile, please watch our product overview video."},success:{icon:r.a.createElement(Q,{"data-testid":"successIcon",style:{width:44,height:44}}),title:"Congratulations! Your 45 day trial account has been created"},error:{icon:r.a.createElement(W,{"data-testid":"errorIcon",style:{width:44,height:44}}),title:"Oops! Something went wrong",description:"Get ready to explore and build amazing conversational experiences for your business.",retryMessage:"Retry to sign up again"}}),ee=function(e){var a=e.isVideoActive,n=e.messageState,i=e.accountDetails,l=e.resetRegistration,o=Object(t.useState)(!1),u=Object(s.a)(o,2),m=u[0],d=u[1],v=Object(t.useState)({}),h=Object(s.a)(v,2),p=h[0],g=h[1],z=Object(t.useRef)(),b=Object(t.useRef)(),y=Object(t.useRef)(),w=Object(t.useRef)(),E="success"===n,x="creating"===n,O=X[n],j=O.icon,k=O.title,B=O.description,R=O.retryMessage;return Object(t.useLayoutEffect)((function(){var e=function(){var e=b.current.offsetHeight,a=b.current.offsetWidth,n=y.current.offsetHeight;g(function(e,a,n){var t=window.innerHeight-e-n-40;return t/.5625>a?{width:a,height:.5625*a}:{width:t/.5625,height:t}}(e,a,n))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[n]),Object(t.useEffect)((function(){z.current=new L.a("video"),d(!0)}),[]),Object(t.useEffect)((function(){m&&a&&z.current.play()}),[m,a]),r.a.createElement(c.a,{backgroundColor:"navy",sx:{height:"100%",flex:1,overflow:"auto",display:"grid",gridTemplateRows:"auto 1fr",gridTemplateAreas:"'logo'\n          'content'","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridRows:"auto 1fr"}}},r.a.createElement(c.a,{ref:y,sx:{gridArea:"logo",msGridRow:"1"}},r.a.createElement(S,{isStatic:!0})),r.a.createElement(c.a,{alignItems:"center",mx:[4,6,7],pb:6,px:[4,6,7],sx:{textAlign:"center",height:"100%",gridArea:"content",msGridRow:"2"}},r.a.createElement(c.a,{ref:b,width:"100%"},j,k&&r.a.createElement(c.f,{variant:"videoTitle",my:3},k,x?r.a.createElement(C.d,null):null),B&&r.a.createElement(c.f,{variant:"videoDescription",mb:6,mx:[2,4,6]},f(B),R&&r.a.createElement(c.f,{"data-testid":"retryButton",onClick:l,mt:4,mb:6,ml:1,fontSize:1,sx:{display:"inline",color:"aqua",cursor:"pointer",fontWeight:700,"&:hover":{color:"aquaHover"}}},R)),E&&r.a.createElement(c.c,{pb:7,alignItems:"center",mt:4,justifyContent:"center",flexWrap:"wrap"},r.a.createElement(c.f,{variant:"accountLabel",mr:3},"Account #"),r.a.createElement(c.f,{variant:"accountDetail",mr:6},i.account_id),r.a.createElement(c.f,{variant:"accountLabel",mr:3},"Username"),r.a.createElement(c.f,{variant:"accountDetail",mr:7},i.username),r.a.createElement(c.e,{href:"https://authentication.liveperson.net/login.html",target:"_blank",variant:"primaryLink"},"Login to your account"))),r.a.createElement(c.a,{flex:1,sx:{width:"100%"},ref:w},r.a.createElement(c.a,{sx:{margin:"0 auto",position:"relative",height:p.height,width:p.width,outlineColor:"shadow",outlineWidth:"6px",outlineStyle:"solid"}},r.a.createElement("iframe",{title:"FTUE",ref:z,id:"video","data-testid":"video",src:"https://player.vimeo.com/video/398468660?autoplay=0&app_id=122963",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})))))},ae=function(){return r.a.createElement(c.a,{mb:6},r.a.createElement(c.a,{sx:{backgroundColor:"liveNavy",width:[40,60,80],height:8},mb:3}),r.a.createElement(c.f,{variant:"header",mb:2},"Sign up for a free trial"),r.a.createElement(c.f,{variant:"subheader"},"No credit card required"))},ne=function(){var e=Object(t.useState)("creating"),a=Object(s.a)(e,2),n=a[0],i=a[1],l=Object(t.useState)(!1),o=Object(s.a)(l,2),m=o[0],d=o[1],v=Object(t.useState)({}),f=Object(s.a)(v,2),h=f[0],p=f[1],g=Object(t.useState)({firstName:"",lastName:"",email:"",password:"",region:"",recaptchaResponseToken:""}),b=Object(s.a)(g,2),y=b[0],C=b[1];return m?r.a.createElement(ee,{isVideoActive:m,messageState:n,accountDetails:h,resetRegistration:function(){i("creating"),d(!1),p(null),C(Object(u.a)(Object(u.a)({},y),{},{password:""}))}}):r.a.createElement(c.a,{sx:{height:"100%",position:"relative",display:["block","block","grid"],gridTemplateColumns:"5fr 2fr 9fr",gridTemplateAreas:"'carousel spacer form'","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"5fr 2fr 9fr"}},mx:[5,6,0]},r.a.createElement(S,null),r.a.createElement(z,{slides:w}),r.a.createElement(c.a,{sx:{gridArea:"spacer",msGridColumn:"2",height:"100vh",display:["none","none","block"]}}),r.a.createElement(c.a,{sx:{flex:1,overflow:"auto",gridArea:"form",msGridColumn:"3"},"data-testid":"registerContent"},r.a.createElement(x,null),r.a.createElement(ae,null),r.a.createElement(G,{setIsVideoActive:d,setMessageState:i,setAccountDetails:p,userDetails:y,setUserDetails:C}),r.a.createElement(c.f,{variant:"privacyPolicy",mt:6,mb:7},"By creating an account, I agree to LivePerson's\xa0",r.a.createElement(c.e,{sx:{textDecoration:"none",color:"electricBlue","&hover":{color:"electricBlueHover"}},href:"https://www.liveperson.com/policies/license-agreement/"},"End User License Agreement"))))};l.a.render(r.a.createElement(t.StrictMode,null,r.a.createElement(o.a,{theme:{breakpoints:["40em","52em","75em","100em"],fontSizes:[".75rem",".875rem","1rem","1.25rem","1.5rem","2rem","2.5rem"],space:[0,".25rem",".5rem","1rem","1.5rem","2rem","2.5rem","4rem","8rem","11.875rem"],colors:{orange:"#ff6900",electricBlue:"#005EF4",electricBlueHover:"#003FA3",darkBlue:"#1B1E4D",navy:"#090C43",darkNavy:"#04051F",navyGray:"#2D2F52",darkGray:"#675D55",darkerGray:"#463E36",gray:"#847970",lightGray:"#D9D4D0",lighterGray:"#F8F5F3",lightGrey:"#A2A3B8",red:"#DF2A31",lightRed:"#FEECEC",lightBlue:"#5879DA",shadow:"#141358",aqua:"#5ED7FB",aquaHover:"#00a4d6"},variants:{primaryLink:{fontSize:0,fontFamily:"Roboto",fontWeight:700,lineHeight:"20px",borderRadius:32,paddingLeft:4,paddingRight:4,paddingTop:"6px",paddingBottom:"6px",backgroundColor:"electricBlue",color:"white",WebkitFontSmoothing:"antialiased",textDecoration:"none","&:hover":{backgroundColor:"electricBlueHover"}},activeDot:{backgroundColor:"orange",borderColor:"orange",borderWidth:1,borderStyle:"solid"},inactiveDot:{backgroundColor:"transparent",borderColor:"white",borderWidth:1,borderStyle:"solid"},carousel:{backgroundColor:"darkBlue"}},text:{dropdownSelected:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:"navy"},carouselTitle:{color:"white",fontFamily:'"Roboto Slab", sans-serif',fontSize:[2,3,4,6],lineHeight:["24px","32px","40px","56px"]},carouselText:{color:"white",fontSize:[1,1,2,4],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","40px"],textAlign:"center",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselSubtitle:{color:"white",fontSize:[1,1,2,3],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselAuthorName:{color:"white",fontSize:[1,1,2,3],fontWeight:700,fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselAuthorRole:{color:"white",fontSize:[0,1],fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","24px"],letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},header:{fontSize:[3,4,5],fontWeight:700,fontFamily:'"Roboto", sans-serif',lineHeight:["28px","36px","44px"],color:"navy",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},subheader:{fontSize:2,fontFamily:'"Roboto", sans-serif',fontWeight:300,lineHeight:"24px",color:"navy",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},privacyPolicy:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",letterSpacing:"0.01em",color:"gray"},videoTitle:{color:"white",fontSize:3,fontFamily:'"Roboto", sans-serif',fontWeight:700,lineHeight:"32px",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},videoDescription:{color:"white",fontSize:1,fontFamily:'"Roboto", sans-serif',fontWeight:400,lineHeight:"24px",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},accountLabel:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"lightGrey",whiteSpace:"nowrap"},accountDetail:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"white",whiteSpace:"nowrap"}}}},r.a.createElement(ne,null))),document.getElementById("root")||document.createElement("div"))},88:function(e){e.exports=JSON.parse('[{"name":"Andorra","value":"z2"},{"name":"United Arab Emirates","value":"z2"},{"name":"Afghanistan","value":"z2"},{"name":"Antigua and Barbuda","value":"z1"},{"name":"Anguilla","value":"z1"},{"name":"Albania","value":"z2"},{"name":"Armenia","value":"z2"},{"name":"Angola","value":"z2"},{"name":"Antarctica","value":"z1"},{"name":"Argentina","value":"z1"},{"name":"American Samoa","value":"z1"},{"name":"Austria","value":"z2"},{"name":"Australia","value":"z3"},{"name":"Aruba","value":"z1"},{"name":"Aland Islands","value":"z2"},{"name":"Azerbaijan","value":"z2"},{"name":"Bosnia and Herzegovina","value":"z2"},{"name":"Barbados","value":"z1"},{"name":"Bangladesh","value":"z3"},{"name":"Belgium","value":"z2"},{"name":"Burkina Faso","value":"z2"},{"name":"Bulgaria","value":"z2"},{"name":"Bahrain","value":"z2"},{"name":"Burundi","value":"z2","isBanned":true},{"name":"Benin","value":"z2"},{"name":"Saint Barth\xe9lemy","value":"z1"},{"name":"Bermuda","value":"z1"},{"name":"Brunei Darussalam","value":"z3"},{"name":"Bolivia","value":"z1"},{"name":"Bonaire","value":"z1"},{"name":"Brazil","value":"z1"},{"name":"Bahamas","value":"z1"},{"name":"Bhutan","value":"z3"},{"name":"Bouvet Island","value":"z2"},{"name":"Botswana","value":"z2"},{"name":"Belarus","value":"z2","isBanned":true},{"name":"Belize","value":"z1"},{"name":"Canada","value":"z1"},{"name":"Cocos (Keeling) Islands","value":"z3"},{"name":"Congo (Kinshasa)","value":"z2","isBanned":true},{"name":"Central African Republic","value":"z2","isBanned":true},{"name":"Congo (Brazzaville)","value":"z2","isBanned":true},{"name":"Switzerland","value":"z2"},{"name":"Cote d\'Ivoire","value":"z2"},{"name":"Cook Islands","value":"z3"},{"name":"Chile","value":"z1"},{"name":"Cameroon","value":"z2"},{"name":"China","value":"z3"},{"name":"Colombia","value":"z1"},{"name":"Costa Rica","value":"z1"},{"name":"Cuba","value":"z1","isBanned":true},{"name":"Cape Verde","value":"z2"},{"name":"Cura\xe7ao","value":"z1"},{"name":"Christmas Island","value":"z3"},{"name":"Cyprus","value":"z2"},{"name":"Czech Republic","value":"z2"},{"name":"Germany","value":"z2"},{"name":"Djibouti","value":"z2"},{"name":"Denmark","value":"z2"},{"name":"Dominica","value":"z1"},{"name":"Dominican Republic","value":"z1"},{"name":"Algeria","value":"z2"},{"name":"Ecuador","value":"z1"},{"name":"Estonia","value":"z2"},{"name":"Egypt","value":"z2"},{"name":"Western Sahara","value":"z2"},{"name":"Eritrea","value":"z2"},{"name":"Spain","value":"z2"},{"name":"Ethiopia","value":"z2"},{"name":"Finland","value":"z2"},{"name":"Fiji","value":"z3"},{"name":"Falkland Islands (Malvinas)","value":"z1"},{"name":"Micronesia","value":"z1"},{"name":"Faroe Islands","value":"z2"},{"name":"France","value":"z2"},{"name":"Gabon","value":"z2"},{"name":"United Kingdom","value":"z2"},{"name":"Grenada","value":"z2"},{"name":"Georgia","value":"z2"},{"name":"French Guiana","value":"z2"},{"name":"Guernsey","value":"z2"},{"name":"Ghana","value":"z2"},{"name":"Gibraltar","value":"z2"},{"name":"Greenland","value":"z2"},{"name":"Gambia","value":"z2"},{"name":"Guinea","value":"z1"},{"name":"Guadeloupe","value":"z1"},{"name":"Equatorial Guinea","value":"z2"},{"name":"Greece","value":"z2"},{"name":"South Georgia and the South Sandwich Islands","value":"z1"},{"name":"Guatemala","value":"z1"},{"name":"Guam","value":"z1"},{"name":"Guinea-Bissau","value":"z2"},{"name":"Guyana","value":"z1"},{"name":"Hong Kong","value":"z3"},{"name":"Heard Island and McDonald Islands","value":"z2"},{"name":"Honduras","value":"z1"},{"name":"Croatia","value":"z2"},{"name":"Haiti","value":"z1"},{"name":"Hungary","value":"z2"},{"name":"Indonesia","value":"z3"},{"name":"Ireland","value":"z2"},{"name":"Israel","value":"z2"},{"name":"Isle of Man","value":"z2"},{"name":"India","value":"z3"},{"name":"British Indian Ocean Territory","value":"z3"},{"name":"Iraq","value":"z2","isBanned":true},{"name":"Iran","value":"z2","isBanned":true},{"name":"Iceland","value":"z2"},{"name":"Italy","value":"z2"},{"name":"Jersey","value":"z2"},{"name":"Jamaica","value":"z1"},{"name":"Jordan","value":"z2"},{"name":"Japan","value":"z3"},{"name":"Kenya","value":"z2"},{"name":"Kyrgyzstan","value":"z2"},{"name":"Cambodia","value":"z3"},{"name":"Kiribati","value":"z3"},{"name":"Comoros","value":"z2"},{"name":"Saint Kitts and Nevis","value":"z1"},{"name":"North Korea","value":"z3","isBanned":true},{"name":"South Korea","value":"z3"},{"name":"Kuwait","value":"z2"},{"name":"Cayman Islands","value":"z1"},{"name":"Kazakhstan","value":"z2"},{"name":"Laos","value":"z3"},{"name":"Lebanon","value":"z2","isBanned":true},{"name":"Saint Lucia","value":"z1"},{"name":"Liechtenstein","value":"z2"},{"name":"Sri Lanka","value":"z3"},{"name":"Liberia","value":"z2"},{"name":"Lesotho","value":"z2"},{"name":"Lithuania","value":"z2"},{"name":"Luxembourg","value":"z2"},{"name":"Latvia","value":"z2"},{"name":"Libya","value":"z2","isBanned":true},{"name":"Morocco","value":"z2"},{"name":"Monaco","value":"z2"},{"name":"Moldova","value":"z2"},{"name":"Montenegro","value":"z2"},{"name":"Saint Martin (French part)","value":"z2"},{"name":"Madagascar","value":"z2"},{"name":"Marshall Islands","value":"z3"},{"name":"Macedonia","value":"z2"},{"name":"Mali","value":"z2"},{"name":"Myanmar","value":"z3","isBanned":true},{"name":"Mongolia","value":"z3"},{"name":"Macao","value":"z3"},{"name":"Northern Mariana Islands","value":"z3"},{"name":"Martinique","value":"z1"},{"name":"Mauritania","value":"z2"},{"name":"Montserrat","value":"z1"},{"name":"Malta","value":"z2"},{"name":"Mauritius","value":"z2"},{"name":"Maldives","value":"z3"},{"name":"Malawi","value":"z2"},{"name":"Mexico","value":"z1"},{"name":"Malaysia","value":"z3"},{"name":"Mozambique","value":"z2"},{"name":"Namibia","value":"z2"},{"name":"New Caledonia","value":"z3"},{"name":"Niger","value":"z2"},{"name":"Norfolk Island","value":"z3"},{"name":"Nigeria","value":"z2"},{"name":"Nicaragua","value":"z1","isBanned":true},{"name":"Netherlands","value":"z2"},{"name":"Norway","value":"z2"},{"name":"Nepal","value":"z3"},{"name":"Nauru","value":"z3"},{"name":"Niue","value":"z3"},{"name":"New Zealand","value":"z3"},{"name":"Oman","value":"z2"},{"name":"Panama","value":"z1"},{"name":"Peru","value":"z1"},{"name":"French Polynesia","value":"z3"},{"name":"Papua New Guinea","value":"z3"},{"name":"Philippines","value":"z3"},{"name":"Pakistan","value":"z2"},{"name":"Poland","value":"z2"},{"name":"Saint Pierre and Miquelon","value":"z3"},{"name":"Pitcairn","value":"z3"},{"name":"Puerto Rico","value":"z1"},{"name":"Palestinian Territory, Occupied","value":"z2"},{"name":"Portugal","value":"z2"},{"name":"Palau","value":"z3"},{"name":"Paraguay","value":"z1"},{"name":"Qatar","value":"z2"},{"name":"Reunion","value":"z2"},{"name":"Romania","value":"z2"},{"name":"Serbia","value":"z2"},{"name":"Russia","value":"z2","isBanned":true},{"name":"Rwanda","value":"z2"},{"name":"Saudi Arabia","value":"z2"},{"name":"Solomon Islands","value":"z3"},{"name":"Seychelles","value":"z2"},{"name":"Sudan","value":"z2","isBanned":true},{"name":"Sweden","value":"z2"},{"name":"Singapore","value":"z3"},{"name":"Saint Helena, Ascension and Tristan da Cunha","value":"z2"},{"name":"Slovenia","value":"z2"},{"name":"Svalbard and Jan Mayen","value":"z2"},{"name":"Slovakia","value":"z2"},{"name":"Sierra Leone","value":"z2"},{"name":"San Marino","value":"z2"},{"name":"Senegal","value":"z2"},{"name":"Somalia","value":"z2","isBanned":true},{"name":"Suriname","value":"z1"},{"name":"South Sudan","value":"z2","isBanned":true},{"name":"Sao Tome and Principe","value":"z2"},{"name":"El Salvador","value":"z1"},{"name":"Sint Maarten (Dutch part)","value":"z1"},{"name":"Syria","value":"z2","isBanned":true},{"name":"Swaziland","value":"z2"},{"name":"Turks and Caicos Islands","value":"z1"},{"name":"Chad","value":"z2"},{"name":"French Southern Territories","value":"z2"},{"name":"Togo","value":"z2"},{"name":"Thailand","value":"z3"},{"name":"Tajikistan","value":"z2"},{"name":"Tokelau","value":"z3"},{"name":"Timor-Leste","value":"z3"},{"name":"Turkmenistan","value":"z2"},{"name":"Tunisia","value":"z2"},{"name":"Tonga","value":"z3"},{"name":"Turkey","value":"z2"},{"name":"Trinidad and Tobago","value":"z1"},{"name":"Tuvalu","value":"z3"},{"name":"Taiwan","value":"z3"},{"name":"Tanzania","value":"z3"},{"name":"Ukraine","value":"z2","isBanned":true},{"name":"Uganda","value":"z2"},{"name":"United States Minor Outlying Islands","value":"z1"},{"name":"United States","value":"z1"},{"name":"Uruguay","value":"z1"},{"name":"Uzbekistan","value":"z2"},{"name":"Holy See (Vatican City State)","value":"z2"},{"name":"Saint Vincent and the Grenadines","value":"z1"},{"name":"Venezuela","value":"z1","isBanned":true},{"name":"Virgin Islands (British)","value":"z1"},{"name":"Virgin Islands (United States)","value":"z1"},{"name":"Vietnam","value":"z3"},{"name":"Vanuatu","value":"z3"},{"name":"Wallis and Futuna","value":"z3"},{"name":"Samoa","value":"z3"},{"name":"Yemen","value":"z2","isBanned":true},{"name":"Mayotte","value":"z2"},{"name":"Yugoslavia","value":"z2"},{"name":"South Africa","value":"z2"},{"name":"Zambia","value":"z2"},{"name":"Zimbabwe","value":"z2","isBanned":true},{"name":"TBD","value":"z1"}]')},89:function(e,a,n){e.exports=n.p+"static/media/logo.df9acfdb.svg"},90:function(e){e.exports=JSON.parse('[{"id":"conversational-ai","bgImage":"carousel-1.jpg","title":"Unleash the\\ntrue power of\\nConversational AI"},{"id":"channels","beforeImage":"banner-image.png","bgImage":"carousel-2.jpg","minHeight":270,"maxHeight":495,"title":"Connect\\nand converse","subtitle":"Engage with customers directly in their preferred communication channels"},{"id":"tools","bgImage":"carousel-3.jpg","beforeImage":"gett.png","minHeight":200,"maxHeight":270,"text":"We\u2019re researchers at heart, and LivePerson\u2019s tools helped us learn and automate more than we thought was possible.","author":{"name":"Yonina Ben Shimon","role":"Global Head of Customer Experience, Gett"}}]')},95:function(e,a,n){e.exports=n(161)}},[[95,1,2]]]);
//# sourceMappingURL=main.d438129d.chunk.js.map