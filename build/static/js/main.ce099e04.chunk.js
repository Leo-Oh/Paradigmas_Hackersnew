(this["webpackJsonphackersnews-react-leonardo"]=this["webpackJsonphackersnews-react-leonardo"]||[]).push([[0],{55:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a,c,r,s,i=t(1),l=t(42),o=t.n(l),j=(t(55),t(11)),u=t(23),d=t(21),b=t(79),m=t(83),O=t(5),h=t(3),p=Object(b.a)(a||(a=Object(d.a)(["\n  mutation CreateLink(\n    $description: String!\n    $url: String!\n  ) {\n    createLink(description: $description, url: $url) {\n      id\n      url\n      description\n    }\n  }\n"]))),x=function(){var e=Object(O.f)(),n=Object(i.useState)({description:"",url:""}),t=Object(u.a)(n,2),a=t[0],c=t[1],r=Object(m.a)(p,{variables:{description:a.description,url:a.url},onCompleted:function(){return e.push("/")}}),s=Object(u.a)(r,1)[0];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s()},children:[Object(h.jsxs)("div",{className:"flex flex-column mt3",children:[Object(h.jsx)("input",{className:"mb2",value:a.description,onChange:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{description:e.target.value}))},type:"text",placeholder:"A description for the link"}),Object(h.jsx)("input",{className:"mb2",value:a.url,onChange:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{url:e.target.value}))},type:"text",placeholder:"The URL for the link"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})})},g=t(18),v="auth-token",f=function(){var e=Object(O.f)(),n=localStorage.getItem(v);return Object(h.jsxs)("div",{className:"flex pa1 justify-between nowrap orange",children:[Object(h.jsxs)("div",{className:"flex flex-fixed black",children:[Object(h.jsx)("div",{className:"fw7 mr1",children:"Hacker News"}),Object(h.jsx)(g.b,{to:"/",className:"ml1 no-underline black",children:"new"}),Object(h.jsx)("div",{className:"ml1",children:"|"}),Object(h.jsx)(g.b,{to:"/top",className:"ml1 no-underline black",children:"top"}),Object(h.jsx)("div",{className:"ml1",children:"|"}),Object(h.jsx)(g.b,{to:"/search",className:"ml1 no-underline black",children:"search"}),n&&Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("div",{className:"ml1",children:"|"}),Object(h.jsx)(g.b,{to:"/create",className:"ml1 no-underline black",children:"submit"})]})]}),Object(h.jsx)("div",{className:"flex flex-fixed",children:n?Object(h.jsx)("div",{className:"ml1 pointer black",onClick:function(){localStorage.removeItem(v),e.push("/")},children:"logout"}):Object(h.jsx)(g.b,{to:"/login",className:"ml1 no-underline black",children:"login"})})]})},k=function(e){var n=e.link;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[n.description," (",n.url,")"]})})},w=t(82),N=Object(b.a)(c||(c=Object(d.a)(["\n   \n {\n  links{\n  id\n  url\n  description\n  }\n}\n"]))),S=function(){var e=Object(w.a)(N).data;return Object(h.jsx)("div",{children:e&&Object(h.jsx)(h.Fragment,{children:e.links.map((function(e){return Object(h.jsx)(k,{link:e},e.id)}))})})},$=Object(b.a)(r||(r=Object(d.a)(["\n  mutation SignupMutation(\n    $email: String!\n    $password: String!\n    $name: String!\n  ) {\n    signup(\n      email: $email\n      password: $password\n      name: $name\n    ) {\n      token\n    }\n  }\n"]))),C=Object(b.a)(s||(s=Object(d.a)(["\n  mutation TokenAuth(\n    $username: String!\n    $password: String!\n  ) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"]))),y=function(){var e=Object(O.f)(),n=Object(i.useState)({login:!0,email:"",password:"",name:""}),t=Object(u.a)(n,2),a=t[0],c=t[1],r=Object(m.a)(C,{variables:{username:a.email,password:a.password},onCompleted:function(n){var t=n.tokenAuth;console.log(t),localStorage.setItem(v,t.token),e.push("/")}}),s=Object(u.a)(r,1)[0],l=Object(m.a)($,{variables:{name:a.name,email:a.email,password:a.password},onCompleted:function(n){var t=n.signup;localStorage.setItem(v,t.token),e.push("/")}}),o=Object(u.a)(l,1)[0];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"mv3",children:a.login?"Login":"Sign Up"}),Object(h.jsxs)("div",{className:"flex flex-column",children:[!a.login&&Object(h.jsx)("input",{value:a.name,onChange:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{name:e.target.value}))},type:"text",placeholder:"Your name"}),Object(h.jsx)("input",{value:a.email,onChange:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{email:e.target.value}))},type:"text",placeholder:"Your email address"}),Object(h.jsx)("input",{value:a.password,onChange:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{password:e.target.value}))},type:"password",placeholder:"Choose a safe password"})]}),Object(h.jsxs)("div",{className:"flex mt3",children:[Object(h.jsx)("button",{className:"pointer mr2 button",onClick:a.login?s:o,children:a.login?"login":"create account"}),Object(h.jsx)("button",{className:"pointer button",onClick:function(e){return c(Object(j.a)(Object(j.a)({},a),{},{login:!a.login}))},children:a.login?"need to create an account?":"already have an account?"})]})]})},I=function(){return Object(h.jsxs)("div",{className:"center w85",children:[Object(h.jsx)(f,{}),Object(h.jsx)("div",{className:"ph3 pv1 background-gray",children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)(O.a,{exact:!0,path:"/",component:S}),Object(h.jsx)(O.a,{exact:!0,path:"/create",component:x}),Object(h.jsx)(O.a,{exact:!0,path:"/login",component:y})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(46),L=t(80),B=t(81),J=t(78),T=Object(A.a)({uri:"http://35.232.232.192:8086/graphql/"}),U=new L.a({link:T,cache:new B.a});o.a.render(Object(h.jsx)(g.a,{children:Object(h.jsx)(J.a,{client:U,children:Object(h.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.ce099e04.chunk.js.map