(this.webpackJsonplab5=this.webpackJsonplab5||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(8),r=n(7),i=n.n(r),c=n(1),a=n.n(c),l=n(9),u=n.n(l),o=n(2),j=n(3),h=n(5),d=n(4),b=n(0);function p(t){var e={img:{width:t.width,height:t.height}};return Object(b.jsx)("img",{src:t.src,alt:"usrAvatar",style:e.img})}function m(t){var e=t.user;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(p,{width:"299px",height:"299px",src:e.picture.large}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[e.name.title," ",e.name.first," ",e.name.last]}),Object(b.jsx)("li",{className:"list-group-item",children:e.gender}),Object(b.jsxs)("li",{className:"list-group-item",children:[e.location.country," ",e.location.city," ",e.location.street.name,e.location.street.number]}),Object(b.jsx)("li",{className:"list-group-item",children:e.email}),Object(b.jsx)("li",{className:"list-group-item",children:e.dob.date.slice(0,10)+"\t age: "+e.dob.age}),Object(b.jsx)("li",{className:"list-group-item",children:e.phone})]})]})}function O(t){return Object(b.jsx)("div",{id:"users",children:t.users.map((function(t,e){return Object(b.jsx)(m,{user:t},e)}))})}var f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"preloader",children:Object(b.jsx)("img",{src:"classic1.gif"})})}}]),n}(a.a.Component),x=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={users:[],loading:!1},s}return Object(j.a)(n,[{key:"handleClick",value:function(){var t=this;this.setState({loading:!0}),this.props.onClick().then((function(e){t.setState((function(){return{users:e,loading:!1}}))}))}},{key:"render",value:function(){var t=this;return this.state.loading?Object(b.jsx)(f,{}):Object(b.jsxs)("div",{id:"list",children:[Object(b.jsx)("button",{id:"button",onClick:function(){return t.handleClick()},children:this.props.label}),Object(b.jsx)(O,{users:this.state.users})]})}}]),n}(a.a.Component);n(17);function g(){return(g=Object(s.a)(i.a.mark((function t(){var e,n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://randomuser.me/api/1.3/?results=10",t.next=3,fetch("https://randomuser.me/api/1.3/?results=10");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,s=n.results,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return Object(b.jsx)("div",{children:Object(b.jsx)(x,{label:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441",onClick:function(){return function(){return g.apply(this,arguments)}()}})})}var k=document.getElementById("root");u.a.render(Object(b.jsx)(v,{}),k)}},[[18,1,2]]]);
//# sourceMappingURL=main.5c00cddb.chunk.js.map