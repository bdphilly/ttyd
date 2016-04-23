(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// window._ = require('lodash');

// var React = require('react'),
//     ReactDOM = require('react-dom'),
//     ReactRouter = require('react-router'),
//     CartApp = require('./components/CartApp.jsx'),
//     ProductList = require('./components/ProductList.jsx'),
//     AisleList = require('./components/AisleList.jsx'), 
//     createBrowserHistory = require('history/lib/createBrowserHistory'),
//     RouteHandler = ReactRouter.RouteHandler,
//     DefaultRoute = ReactRouter.DefaultRoute,
//     Route = ReactRouter.Route,
//     Router = ReactRouter.Router,
//     Link = ReactRouter.Link,
//     IndexRoute = ReactRouter.IndexRoute,   
//     Routes = ReactRouter.Routes,
//     injectTapEventPlugin = require("react-tap-event-plugin");

//     var path = require('path');

// injectTapEventPlugin();

// var routes = (
//   <Route path="/" component={CartApp}>
//     <IndexRoute component={ProductList} />
//     <Route path="/products" component={ProductList}/>
//     <Route path="/products/:categoryId" component={AisleList}/>   
//   </Route> 
// );

// // var routes = (
// //   <Route name="app" path="/" handler={CartApp}>
// //     <Route name="products" path="/products" handler={ProductList}/>
// //     <Route name="category" path="/products/:categoryId" handler={AisleList}/>   
// //   </Route> 
// // );

// var ready = function () {

//     // React.render(
//     //     <CartApp/>,
//     //       document.getElementById('ttyd-app')
//     //       );
//   // ReactRouter.run(routes, function (Handler, state) {
//   //   React.render(
//   //     <Handler path={state.path}/>, document.getElementById('ttyd-app'));
//   // });

//   ReactDOM.render(
//     <Router history={createBrowserHistory()} routes={routes}/>, document.getElementById('ttyd-app')
//   )

// };

// document.addEventListener("DOMContentLoaded", function(event) {
//   ready();
// });

// // $(document).ready(ready);

// // <ProductRouter/>,
// //       document.getElementById('ttyd-app')

//     // <CartApp/>,
//     //       document.getElementById('ttyd-app')
//     //       );

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWFjdGZpbGVzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHdpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4vLyAgICAgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKSxcbi8vICAgICBSZWFjdFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuLy8gICAgIENhcnRBcHAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ2FydEFwcC5qc3gnKSxcbi8vICAgICBQcm9kdWN0TGlzdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3gnKSxcbi8vICAgICBBaXNsZUxpc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQWlzbGVMaXN0LmpzeCcpLCBcbi8vICAgICBjcmVhdGVCcm93c2VySGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5JyksXG4vLyAgICAgUm91dGVIYW5kbGVyID0gUmVhY3RSb3V0ZXIuUm91dGVIYW5kbGVyLFxuLy8gICAgIERlZmF1bHRSb3V0ZSA9IFJlYWN0Um91dGVyLkRlZmF1bHRSb3V0ZSxcbi8vICAgICBSb3V0ZSA9IFJlYWN0Um91dGVyLlJvdXRlLFxuLy8gICAgIFJvdXRlciA9IFJlYWN0Um91dGVyLlJvdXRlcixcbi8vICAgICBMaW5rID0gUmVhY3RSb3V0ZXIuTGluayxcbi8vICAgICBJbmRleFJvdXRlID0gUmVhY3RSb3V0ZXIuSW5kZXhSb3V0ZSwgICBcbi8vICAgICBSb3V0ZXMgPSBSZWFjdFJvdXRlci5Sb3V0ZXMsXG4vLyAgICAgaW5qZWN0VGFwRXZlbnRQbHVnaW4gPSByZXF1aXJlKFwicmVhY3QtdGFwLWV2ZW50LXBsdWdpblwiKTtcblxuLy8gICAgIHZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBpbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXG4vLyB2YXIgcm91dGVzID0gKFxuLy8gICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0NhcnRBcHB9PlxuLy8gICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UHJvZHVjdExpc3R9IC8+XG4vLyAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBjb21wb25lbnQ9e1Byb2R1Y3RMaXN0fS8+XG4vLyAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvOmNhdGVnb3J5SWRcIiBjb21wb25lbnQ9e0Fpc2xlTGlzdH0vPiAgIFxuLy8gICA8L1JvdXRlPiBcbi8vICk7XG5cbi8vIC8vIHZhciByb3V0ZXMgPSAoXG4vLyAvLyAgIDxSb3V0ZSBuYW1lPVwiYXBwXCIgcGF0aD1cIi9cIiBoYW5kbGVyPXtDYXJ0QXBwfT5cbi8vIC8vICAgICA8Um91dGUgbmFtZT1cInByb2R1Y3RzXCIgcGF0aD1cIi9wcm9kdWN0c1wiIGhhbmRsZXI9e1Byb2R1Y3RMaXN0fS8+XG4vLyAvLyAgICAgPFJvdXRlIG5hbWU9XCJjYXRlZ29yeVwiIHBhdGg9XCIvcHJvZHVjdHMvOmNhdGVnb3J5SWRcIiBoYW5kbGVyPXtBaXNsZUxpc3R9Lz4gICBcbi8vIC8vICAgPC9Sb3V0ZT4gXG4vLyAvLyApO1xuXG4vLyB2YXIgcmVhZHkgPSBmdW5jdGlvbiAoKSB7XG5cbi8vICAgICAvLyBSZWFjdC5yZW5kZXIoXG4vLyAgICAgLy8gICAgIDxDYXJ0QXBwLz4sXG4vLyAgICAgLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0eWQtYXBwJylcbi8vICAgICAvLyAgICAgICApO1xuLy8gICAvLyBSZWFjdFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlciwgc3RhdGUpIHtcbi8vICAgLy8gICBSZWFjdC5yZW5kZXIoXG4vLyAgIC8vICAgICA8SGFuZGxlciBwYXRoPXtzdGF0ZS5wYXRofS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHR5ZC1hcHAnKSk7XG4vLyAgIC8vIH0pO1xuXG4vLyAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICA8Um91dGVyIGhpc3Rvcnk9e2NyZWF0ZUJyb3dzZXJIaXN0b3J5KCl9IHJvdXRlcz17cm91dGVzfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHR5ZC1hcHAnKVxuLy8gICApXG5cbi8vIH07XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgIHJlYWR5KCk7XG4vLyB9KTtcblxuLy8gLy8gJChkb2N1bWVudCkucmVhZHkocmVhZHkpO1xuXG4vLyAvLyA8UHJvZHVjdFJvdXRlci8+LFxuLy8gLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0eWQtYXBwJylcblxuLy8gICAgIC8vIDxDYXJ0QXBwLz4sXG4vLyAgICAgLy8gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R0eWQtYXBwJylcbi8vICAgICAvLyAgICAgICApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKaGNIQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSJdfQ==
