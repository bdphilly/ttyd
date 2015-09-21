var Reflux = require('reflux');
var CartAPI = require('../utils/cartAPI');

var CartActions = Reflux.createActions([  
  {"itemRemoved": {children: ["completed", "failed"]}},
  "updateCartVisible",
  "getCartItems",
  "getCartVisible"
]);

CartActions.itemRemoved.listenAndPromise(CartAPI.removeFromCart);

module.exports = CartActions;