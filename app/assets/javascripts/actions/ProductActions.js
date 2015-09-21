var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');
var CartAPI = require('../utils/cartAPI');

var ProductActions = Reflux.createActions([
  {"fetchAllProducts": {children: ["completed", "failed"]}},
  {"addToCart": {children: ["completed", "failed"]}},
]);

ProductActions.fetchAllProducts.listenAndPromise(ProductAPI.fetchProducts);

ProductActions.addToCart.listenAndPromise(CartAPI.addToCart);

module.exports = ProductActions;