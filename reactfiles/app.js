window._ = require('lodash');

var React = require('react'),
    ReactRouter = require('react-router'),
    CartApp = require('./components/CartApp.jsx'),
    ProductList = require('./components/ProductList.jsx'),
    AisleList = require('./components/AisleList.jsx'),  
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    RouteHandler = ReactRouter.RouteHandler,
    DefaultRoute = ReactRouter.DefaultRoute,
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    Link = ReactRouter.Link,
    IndexRoute = ReactRouter.IndexRoute,    
    Routes = ReactRouter.Routes,
    injectTapEventPlugin = require("react-tap-event-plugin");

    var path = require('path');

injectTapEventPlugin();

var routes = (
  <Route path="/" component={CartApp}>
    <IndexRoute component={ProductList} />
    <Route path="/products" component={ProductList}/>
    <Route path="/products/:categoryId" component={AisleList}/>    
  </Route>  
);

// var routes = (
//   <Route name="app" path="/" handler={CartApp}>
//     <Route name="products" path="/products" handler={ProductList}/>
//     <Route name="category" path="/products/:categoryId" handler={AisleList}/>    
//   </Route>  
// );

var ready = function () {
  
    // React.render(
    //     <CartApp/>,
    //       document.getElementById('ttyd-app')
    //       );
  // ReactRouter.run(routes, function (Handler, state) {
  //   React.render(
  //     <Handler path={state.path}/>, document.getElementById('ttyd-app'));
  // });

  React.render(
    <Router history={createBrowserHistory()} routes={routes}/>, document.getElementById('ttyd-app')
  )

};

document.addEventListener("DOMContentLoaded", function(event) { 
  ready();
});

// $(document).ready(ready);

// <ProductRouter/>,
//       document.getElementById('ttyd-app')


    // <CartApp/>,
    //       document.getElementById('ttyd-app')
    //       );
