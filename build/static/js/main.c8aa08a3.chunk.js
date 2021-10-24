(this["webpackJsonphome-library"]=this["webpackJsonphome-library"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(29),s=n.n(r),o=n(9),i=n(35),l=n(8),b=function(e,t){switch(t.type){case"ADD_BOOK":return Object(l.a)(Object(l.a)({},e),{},{savedBooks:[t.payload].concat(Object(i.a)(e.savedBooks))});case"DELETE_BOOK":return Object(l.a)(Object(l.a)({},e),{},{savedBooks:e.savedBooks.filter((function(e){return e.id!==t.payload}))});default:return e}},j=n(0),d={savedBooks:[{id:"0000",title:"On Writing Well",author_name:["William Zinsser"],cover_i:"20450",isbn:["9780060891541"]}]},u=Object(c.createContext)(d),h=function(e){var t=e.children,n=Object(c.useReducer)(b,d),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(j.jsx)(u.Provider,{value:{savedBooks:r.savedBooks,addBook:function(e){s({type:"ADD_BOOK",payload:e})},deleteBook:function(e){s({type:"DELETE_BOOK",payload:e})}},children:t})},O=n(10),m=n(2),f=n(19),x=n.n(f),v=n(30),p=n(31),y=n.n(p);n(60);var g=function(e){var t=e.getQuery,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"search a title",value:r,onChange:function(e){return n=e.target.value,s(n),void t(n);var n}})})};n(61);var k=function(e){var t=e.result,n=Object(c.useContext)(u).addBook,a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(j.jsxs)("article",{className:"resultContainer",children:[Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("section",{className:"bookResultInfo",children:[Object(j.jsx)("h2",{className:"resultTitle",children:t.title}),t.author_name&&Object(j.jsxs)("h4",{className:"author",children:["by ",t.author_name]}),t.isbn&&Object(j.jsxs)("p",{className:"identifiers",children:["ISBN: ",t.isbn[0]]})]})}),s?Object(j.jsx)("button",{disabled:!0,className:"successAlert",children:"Book Added!"}):Object(j.jsx)("button",{className:"linkButton",onClick:function(){console.log("add button clicked");var e={id:"".concat(t._version_),title:"".concat(t.title),author_name:"".concat(t.author_name[0]),cover_i:"".concat(t.cover_i),first_publish_year:"".concat(t.first_publish_year),isbn:"".concat(t.isbn[0])};n(e),i(!0)},children:"Add"})]})},_=(n(62),{resultsContainer:{display:"flex",flexDirection:"column",alignItems:"center"}});var B=function(e){var t=e.isLoading,n=e.searchResults;return t?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("section",{style:_.resultsContainer,children:n.map((function(e){return Object(j.jsx)(k,{result:e},e._version_)}))})};var N=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(o.a)(r,2),i=s[0],l=s[1],b=Object(c.useState)(null),d=Object(o.a)(b,2),u=d[0],h=d[1];return Object(c.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("https://openlibrary.org/search.json?title=".concat(n,"&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=10"));case 2:t=e.sent,h(t.data.docs),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==n&&function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{getQuery:function(e){return a(e)}}),u&&Object(j.jsx)(B,{isLoading:i,searchResults:u})]})},S=n(78),C=(n(63),n.p+"static/media/book.becac9f6.png"),L={deleteButton:{height:"1.2rem",border:"none",padding:"0 .5rem 0 0",fontWeight:"500",fontSize:"1rem",background:"transparent",color:"#8a817c"}};var I=function(e){var t=e.book,n=Object(c.useContext)(u).deleteBook,a="http://covers.openlibrary.org/b/id/".concat(t.cover_i,"-L.jpg");return Object(j.jsxs)("article",{className:"cardContainer",children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"coverContainer",children:t.cover_i?Object(j.jsx)("img",{src:a,alt:"book cover",className:"coverImage"}):Object(j.jsx)("img",{src:C,alt:"cover not available",className:"coverImage"})}),Object(j.jsxs)("section",{className:"bookInfo",children:[Object(j.jsx)("h2",{className:"title",children:t.title}),t.author_name&&Object(j.jsxs)("h4",{className:"author",children:["by ",t.author_name]}),t.isbn&&Object(j.jsxs)("p",{className:"identifiers",children:["ISBN: ",t.isbn]})]})]}),Object(j.jsx)("button",{style:L.deleteButton,onClick:function(){return n(t.id)},children:"x"})]})},A=(n(64),{instruction:{textAlign:"center",margin:"4rem"}});var D=function(){var e=Object(c.useContext)(u).savedBooks;return 0===e.length?Object(j.jsx)("h5",{style:A.instruction,children:"Search for books to add to your library"}):Object(j.jsx)(S.a,{className:"libraryContainer",children:e.map((function(e){return Object(j.jsx)(I,{book:e},e.id)}))})};var E=function(){return Object(j.jsxs)("section",{className:"homeContainer",children:[Object(j.jsxs)("div",{className:"aboutContainer",children:[Object(j.jsxs)("h1",{className:"homeHeader",children:[Object(j.jsx)("strong",{children:"Keep track"})," of all books in your library"]}),Object(j.jsx)("p",{className:"homeAbout",children:"We currently live in a sort of limbo where some of our books live on the shelf and some live in a device. Keep track of both digital and physical books by cataloguing them in home library."})]}),Object(j.jsx)(O.b,{to:"/SearchBooks",children:Object(j.jsx)("button",{className:"buttonPrimary",children:"Start Adding Books"})})]})},W=function(){return Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/",component:E}),Object(j.jsx)(m.a,{exact:!0,path:"/MyLibrary",component:D}),Object(j.jsx)(m.a,{path:"/SearchBooks",component:N})]})};n(73);var w=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(O.b,{className:"navLink",to:"/MyLibrary",activeStyle:{fontSize:"1.5rem",fontWeight:"700",color:"#463f3a"},children:"My Library"}),Object(j.jsx)(O.b,{className:"navLink",to:"/SearchBooks",activeStyle:{fontSize:"1.5rem",fontWeight:"700",color:"#463f3a"},children:"Search Books"})]})},K=n.p+"static/media/brand-01.185625ff.png",F=(n(74),n(75),{container:{maxWidth:"90rem",height:"100vh"},brand:{height:"2rem"},header:{display:"flex",justifyContent:"center",margin:"2rem 0 .5rem 0"},main:{margin:"1rem auto"}});var T=function(){return Object(j.jsx)(h,{children:Object(j.jsx)(O.a,{children:Object(j.jsxs)("div",{style:F.container,children:[Object(j.jsx)("header",{style:F.header,children:Object(j.jsx)(O.b,{to:"/",children:Object(j.jsx)("img",{src:K,alt:"bookshelf brand icon",style:F.brand})})}),Object(j.jsx)(w,{}),Object(j.jsx)("main",{style:F.main,children:Object(j.jsx)(W,{})})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),M()}},[[76,1,2]]]);
//# sourceMappingURL=main.c8aa08a3.chunk.js.map