(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t.p+"static/media/spinner1.5e02af51.gif"},45:function(e,a,t){e.exports=t(74)},50:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),s=t.n(o);t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(17),c=t(2),i=t(40),u=t(4),p=t(16),m=t(41),d=t.n(m).a.create({baseURL:"https://hf-back-end.herokuapp.com"});var h=Object(c.b)(null,function(e){return{signOut:function(){return e(function(e,a){return e({type:"SIGN_OUT_SUCCES"})})}}})(function(e){return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement(u.b,{to:"/nearbyshops",className:"nav-item nav-link"},"Nearby Shops"),r.a.createElement(u.b,{to:"/preferredshops",className:"nav-item nav-link"},"My Preferred Shops"),r.a.createElement(u.b,{to:"",onClick:e.signOut,className:"nav-item nav-link text-danger"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," Log Out")))});var E=function(){return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement(u.b,{to:"/signup",className:"nav-item nav-link",href:"#"},"Sign Up"),r.a.createElement(u.b,{to:"/signin",className:"nav-item nav-link text-success",href:"#"},r.a.createElement("i",{className:"fas fa-sign-in-alt"})," Log in")))};var S=Object(c.b)(function(e){return{user:e.auth.user}})(function(e){var a=e.user?r.a.createElement(h,null):r.a.createElement(E,null);return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{to:"/",className:"navbar-brand",href:"#"},"United Remote"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),a))});var f=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello"),r.a.createElement("h2",null,"This the coding Challenge project i completed when applying to United Remote"),r.a.createElement("p",null,"The coding challenge is about implementing an app that lists shops nearby."),r.a.createElement("ul",null,r.a.createElement("li",null,"As a User, I can sign up using my email & password"),r.a.createElement("li",null,"As a User, I can sign in using my email & password"),r.a.createElement("li",null,"As a User, I can display the list of shops sorted by distance"),r.a.createElement("li",null,"As a User, I can like a shop, so it can be added to my preferred shops",r.a.createElement("ul",null,r.a.createElement("li",null,"Liked shops are not be displayed on the main page"))),r.a.createElement("li",null,"As a User, I can dislike a shop, so it won\u2019t be displayed within \u201cNearby Shops\u201d list during the next 2 hours",r.a.createElement("ul",null,r.a.createElement("li",null,"It won't be displayed only in the UI, refreshing the page will bring it back"))),r.a.createElement("li",null,"As a User, I can display the list of preferred shops"),r.a.createElement("li",null,"As a User, I can remove a shop from my preferred shops list")))},b=t(11),g=t(12),y=t(14),O=t(13),v=t(15),_=t(21),N=t.n(_),R=t(29);var C=Object(c.b)(function(e){return{token:e.auth.user.token}},function(e){return{likeShop:function(a,t){return e(function(e,a){return function(){var t=Object(R.a)(N.a.mark(function t(n,r){return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d({url:"/shops/"+e._id+"/like",method:"POST",headers:{Authorization:"Bearer "+a}}).then(function(){n({type:"LIKE_SHOP_SUCCESS",payload:e})}).catch(function(e){n({type:"LIKE_SHOP_ERROR",payload:e})});case 2:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(a,t))},dislikeShop:function(a,t){return e(function(e,a){return function(t,n){d({url:"/shops/"+e._id+"/dislike",method:"POST",headers:{Authorization:"Bearer "+a}}).then(function(){setTimeout(function(){t({type:"DISLIKE_SHOP_END",payload:e})},72e5),t({type:"DISLIKE_SHOP_SUCCESS",payload:e})}).catch(function(e){t({type:"DISLIKE_SHOP_ERROR",payload:e.response.data})})}}(a,t))}}})(function(e){var a=e.shop,t=e.shop,n=t.name,o=t.distance,s=t.imageUrl,l=e.token;return r.a.createElement("div",{className:"card shadow d-inline-flex mr-4 mb-4",style:{width:"18rem"}},r.a.createElement("h5",{className:"card-title text-center"},n),r.a.createElement("img",{src:s,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("button",{onClick:function(){e.dislikeShop(a,l)},className:"btn btn-danger mr-3"},r.a.createElement("i",{className:"far fa-thumbs-down"})," Dislike"),r.a.createElement("button",{onClick:function(){e.likeShop(a,l)},className:"btn btn-success"},r.a.createElement("i",{className:"far fa-thumbs-up"})," Like")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},"distrance: ",o," miles")))}),P=t(43),I=t.n(P),j=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:I.a,alt:"Loading...",style:{width:"200px",margin:"auto",display:"block"}}))},w=function(e){function a(){return Object(b.a)(this,a),Object(y.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.user&&this.props.fetchNearbyShops(this.props.user.token)}},{key:"render",value:function(){if(!this.props.user)return r.a.createElement(p.a,{to:"/signin"});var e=this.props,a=e.shops,t=e.loading,n=r.a.createElement("div",null,r.a.createElement("h1",null,"This is the list of nearby shops:"),r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},a&&a.map(function(e){return r.a.createElement(C,{key:e._id,shop:e})})));return a[0]||(n=r.a.createElement("div",null,r.a.createElement("h1",null,"Your Nearby Shops list is empty."))),t&&(n=r.a.createElement(j,null)),n}}]),a}(n.Component),H=Object(c.b)(function(e){return{shops:e.shop.nearbyShops.shops,user:e.auth.user,loading:e.shop.nearbyShops.loading}},function(e){return{fetchNearbyShops:function(a){return e(function(e){return function(a,t){a({type:"FETCH_NEARBY_SHOPS_BEGIN"}),d({url:"/shops/nearbyShops",method:"GET",headers:{Authorization:"Bearer "+e}}).then(function(e){var t=e.data;a({type:"FETCH_NEARBY_SHOPS_SUCCESS",payload:t})}).catch(function(e){a({type:"FETCH_NEARBY_SHOPS_ERROR",payload:e.response.data})})}}(a))}}})(w);var U=Object(c.b)(function(e){return{token:e.auth.user.token}},function(e){return{removeShop:function(a,t){return e(function(e,a){return function(){var t=Object(R.a)(N.a.mark(function t(n,r){return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d({url:"/shops/"+e._id+"/remove",method:"DELETE",headers:{Authorization:"Bearer "+a}}).then(function(){n({type:"REMOVE_SHOP_SUCCESS",payload:e})}).catch(function(e){n({type:"REMOVE_SHOP_ERROR",payload:e})});case 2:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(a,t))}}})(function(e){var a=e.shop,t=e.shop,n=t.name,o=t.distance,s=t.imageUrl,l=e.token;return r.a.createElement("div",{className:"card shadow d-inline-flex mr-4 mb-4",style:{width:"18rem"}},r.a.createElement("h5",{className:"card-title text-center"},n),r.a.createElement("img",{src:s,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("button",{onClick:function(){return e.removeShop(a,l),r.a.createElement(p.a,{to:"/preferredshops"})},className:"btn btn-danger mr-3"},r.a.createElement("i",{className:"far fa-trash-alt"})," Remove")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},"distrance: ",o," miles")))}),k=function(e){function a(){return Object(b.a)(this,a),Object(y.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.user&&this.props.fetchPreferredShops(this.props.user.token)}},{key:"render",value:function(){if(!this.props.user)return r.a.createElement(p.a,{to:"/signin"});var e=this.props,a=e.shops,t=e.loading,n=r.a.createElement("div",null,r.a.createElement("h1",null,"This is the list of preferred shops:"),r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},a&&a.map(function(e){return r.a.createElement(U,{key:e._id,shop:e})})));return a[0]||(n=r.a.createElement("div",null,r.a.createElement("h1",null,"Your preferred Shops list is empty."))),t&&(n=r.a.createElement(j,null)),n}}]),a}(n.Component),T=Object(c.b)(function(e){return{shops:e.shop.preferredShops.shops,user:e.auth.user,loading:e.shop.preferredShops.loading}},function(e){return{fetchPreferredShops:function(a){return e(function(e){return function(a,t){a({type:"FETCH_PREFERRED_SHOPS_BEGIN"}),d({url:"/shops/preferredShops",method:"GET",headers:{Authorization:"Bearer "+e}}).then(function(e){var t=e.data;a({type:"FETCH_PREFERRED_SHOPS_SUCCESS",payload:t})}).catch(function(e){a({type:"FETCH_PREFERRED_SHOPS_SUCCESS",payload:e.response.data})})}}(a))}}})(k),F=t(18),A=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleSubmit=function(e){e.preventDefault(),t.props.signIn(t.state,t.props.history)},t.handleChange=function(e){t.setState(Object(F.a)({},e.target.id,e.target.value))},t}return Object(v.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.props.authError;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign In"),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"}),e?r.a.createElement("div",{className:"alert alert-danger text-center"},e):null)}}]),a}(n.Component),x=Object(c.b)(function(e){return{authError:e.auth.error}},function(e){return{signIn:function(a,t){return e((n=a,r=t,function(e,a){e({type:"SIGN_IN_BEGIN"}),d({url:"/signin",method:"POST",data:n}).then(function(a){var t=a.data;e({type:"SIGN_IN_SUCCES",payload:t}),r.push("/nearbyshops")}).catch(function(a){e({type:"SIGN_IN_ERROR",payload:a.response.data})})}));var n,r}}})(A),D=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",confirmedPassword:"",error:null},t.handleSubmit=function(e){e.preventDefault(),t.setState({error:null});var a=t.state,n=a.email,r=a.password;if(r!==a.confirmedPassword)return t.setState({error:!0});t.props.signUp({email:n,password:r},t.props.history)},t.handleChange=function(e){t.setState(Object(F.a)({},e.target.id,e.target.value))},t}return Object(v.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"You only know your password (Your password is stored encrypted in our database).")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmedPassword"},"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"confirmedPassword",placeholder:"Confirm your Password",onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"btn btn-primary"}),this.state.error?r.a.createElement("div",{className:"alert alert-danger text-center"},"Passwords don't match"):this.props.serverError?r.a.createElement("div",{className:"alert alert-danger text-center"},this.props.serverError):null)}}]),a}(n.Component),L=Object(c.b)(function(e){return{serverError:e.auth.signUp.error}},function(e){return{signUp:function(a,t){return e((n=a,r=t,function(e,a){d({url:"/signup",method:"POST",data:n}).then(function(){e({type:"SIGN_UP_SUCCES"}),r.push("/signin")}).catch(function(a){e({type:"SIGN_UP_ERROR",payload:a.response.data.data.msg})})}));var n,r}}})(D);var B=Object(c.b)(function(e){return{userFromState:e.auth.user}},function(e){return{updateUserState:function(a){return e((t=a,function(e,a){return e({type:"UPDATE_USER_STATE",payload:t})}));var t}}})(function(e){var a,t=localStorage.getItem("user");t&&(a=JSON.parse(t));var n=e.userFromState,o=e.updateUserState;return!n&&a&&o(a),r.a.createElement(u.a,{basename:"smiletondi.github.io/HF_frontEnd"},r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:f}),r.a.createElement(p.b,{path:"/nearbyshops",component:H}),r.a.createElement(p.b,{path:"/preferredshops",component:T}),r.a.createElement(p.b,{path:"/signin",component:x}),r.a.createElement(p.b,{path:"/signup",component:L})))))}),G=t(1),K={loading:!1,user:null,error:null,signUp:{success:!1,error:null}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN_BEGIN":return Object(G.a)({},e,{loading:!0});case"SIGN_IN_SUCCES":return console.log("Login success"),localStorage.setItem("user",JSON.stringify(a.payload)),Object(G.a)({},e,{loading:!1,user:a.payload,error:null});case"SIGN_IN_ERROR":return console.log("Login Error"),Object(G.a)({},e,{loading:!1,user:null,error:a.payload.message});case"SIGN_UP_SUCCES":return console.log("Signup success"),Object(G.a)({},e,{signUp:{success:!0,error:!1}});case"SIGN_UP_ERROR":return console.log("Signup Error"),Object(G.a)({},e,{signUp:{success:!1,error:a.payload}});case"SIGN_OUT_SUCCES":return console.log("SignOut success"),localStorage.removeItem("user"),K;case"UPDATE_USER_STATE":return console.log("user state updated"),Object(G.a)({},e,{user:a.payload});default:return e}},Y=t(44),V={nearbyShops:{loading:!1,shops:[],error:null},preferredShops:{loading:!1,shops:[],error:null}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_NEARBY_SHOPS_BEGIN":return console.log("FETCH_NEARBY_SHOPS_BEGIN"),Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:[],loading:!0})});case"FETCH_NEARBY_SHOPS_SUCCESS":return console.log("FETCH_NEARBY_SHOPS_SUCCESS"),Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:a.payload,loading:!1})});case"FETCH_NEARBY_SHOPS_ERROR":return console.log("FETCH_NEARBY_SHOPS_ERROR"),Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:[],error:a.payload})});case"FETCH_PREFERRED_SHOPS_BEGIN":return console.log("FETCH_PREFERRED_SHOPS_BEGIN"),Object(G.a)({},e,{preferredShops:Object(G.a)({},e.preferredShops,{shops:[],loading:!0})});case"FETCH_PREFERRED_SHOPS_SUCCESS":return console.log("FETCH_PREFERRED_SHOPS_SUCCESS"),Object(G.a)({},e,{preferredShops:Object(G.a)({},e.preferredShops,{shops:a.payload,loading:!1})});case"FETCH_PREFERRED_SHOPS_ERROR":return console.log("FETCH_PREFERRED_SHOPS_ERROR"),Object(G.a)({},e,{preferredShops:Object(G.a)({},e.preferredShops,{shops:[],error:a.payload})});case"LIKE_SHOP_SUCCESS":console.log("LIKE_SHOP_SUCCESS",a.payload.name);var t=e.nearbyShops.shops.filter(function(e){return e!==a.payload});return Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:t})});case"LIKE_SHOP_ERROR":return console.log("LIKE_SHOP_ERROR",a.payload),e;case"REMOVE_SHOP_SUCCESS":console.log("REMOVE_SHOP_SUCCESS",a.payload.name);var n=e.preferredShops.shops.filter(function(e){return e!==a.payload});return Object(G.a)({},e,{preferredShops:Object(G.a)({},e.preferredShops,{shops:n})});case"REMOVE_SHOP_ERROR":return console.log("REMOVE_SHOP_ERROR",a.payload),e;case"DISLIKE_SHOP_SUCCESS":console.log("DISLIKE_SHOP_SUCCESS");var r=e.nearbyShops.shops.filter(function(e){return e!==a.payload});return Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:r})});case"DISLIKE_SHOP_ERROR":return console.log("DISLIKE_SHOP_ERROR",a.payload),e;case"DISLIKE_SHOP_END":console.log("DISLIKE_SHOP_END");var o=e.nearbyShops.shops;return o.push(a.payload),o.sort(function(e,a){return e.distance-a.distance}),Object(G.a)({},e,{nearbyShops:Object(G.a)({},e.nearbyShops,{shops:Object(Y.a)(o)})});default:return e}},J=Object(l.c)({auth:M,shop:z}),W=Object(l.d)(J,Object(l.a)(i.a));s.a.render(r.a.createElement(c.a,{store:W}," ",r.a.createElement(B,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.ed359d3b.chunk.js.map