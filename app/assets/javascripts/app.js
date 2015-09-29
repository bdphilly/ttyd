window._ = require('lodash');
var React = require('react');
var ReactRouter = require('react-router');
var CartApp = require('./components/CartApp.jsx');
var ProductList = require('./components/ProductList.jsx');
    
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var ThemeManager = require('material-ui/lib/styles/theme-manager'); 

var routes = (
  <Route name="app" path="/" handler={CartApp}>
    <Route name="products" handler={ProductList}>
      <Route name="category" path=":categoryId" handler={ProductList}/>
    </Route>

    <DefaultRoute handler={ProductList}/>
  </Route>  
);

var ready = function () {
    // React.render(
    //     <CartApp/>,
    //       document.getElementById('ttyd-app')
    //       );
  ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('ttyd-app'));
  });

};

$(document).ready(ready);

// <ProductRouter/>,
//       document.getElementById('ttyd-app')


    // <CartApp/>,
    //       document.getElementById('ttyd-app')
    //       );
