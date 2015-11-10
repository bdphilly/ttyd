var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');
var CartAPI = require('../utils/cartAPI');

var AppActions = Reflux.createActions([
  "fetchProducts",
  "fetchCart",
  "addOrUpdateCart",
  "minusOrDeleteFromCart",
  "addToCart",
  "updateItemInCart",  
  "removeFromCart",
  "emptyCart",  
  "updateCartVisible",
  "getCartItems",
  "getCartVisible",
  "resizeWindow"
]);

module.exports = AppActions;