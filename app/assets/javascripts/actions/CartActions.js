var Reflux = require('reflux');
var CartAPI = require('../utils/cartAPI');

var CartActions = Reflux.createActions({
  "itemAdded": {children: ["completed", "failed"]}
});

CartActions.itemAdded.listenAndPromise(CartAPI.addToCart);

module.exports = CartActions;