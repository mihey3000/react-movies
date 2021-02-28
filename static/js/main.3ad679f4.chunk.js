(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),i=a.n(s),r=(a(13),a(0));function l(){return Object(r.jsx)("nav",{className:"light-blue darken-3",children:Object(r.jsxs)("div",{className:"container nav-wrapper",children:[Object(r.jsx)("a",{href:"!#",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function o(){return Object(r.jsx)("footer",{className:"page-footer light-blue lighten-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=a(2),j=a(3),d=a(5),b=a(4),p=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,n=e.Type,s=e.Poster;return Object(r.jsxs)("div",{id:c,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(r.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x445?text=".concat(t),alt:""}):Object(r.jsx)("img",{className:"activator",src:s,alt:""})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[a,Object(r.jsx)("span",{className:"right",children:n})]})]})]})}function v(e){var t=e.movies,a=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(r.jsx)(u,Object(p.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"Nothing found"})})}function m(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}var O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col s12",children:[Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("input",{className:"validate",placeholder:"Search",id:"email_inline",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("button",{className:"btn search-btn blue accent-3",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(r.jsx)("span",{children:"Series only"})]})]})]})})}}]),a}(n.a.Component),x="83a5a860",f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{searchMovies:this.searchMovies}),a?Object(r.jsx)("h5",{children:Object(r.jsx)(m,{})}):Object(r.jsx)(v,{movies:t})]})}}]),a}(n.a.Component);var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(f,{}),Object(r.jsx)(o,{})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3ad679f4.chunk.js.map