var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');
var CartAPI = require('../utils/cartAPI');

var AppActions = Reflux.createActions([
  {"fetchAllProducts": {
      children: ["completed", "failed"]
    }
  },
  {"addToCart": {
      children: ["completed", "failed"]
    }
  },
  {"removeFromCart": {
      children: ["completed", "failed"]
    }
  },
  "updateCartVisible",
  "getCartItems",
  "getCartVisible"
]);

AppActions.fetchAllProducts.listenAndPromise(ProductAPI.fetchProducts);
AppActions.addToCart.listenAndPromise(CartAPI.addToCart);
AppActions.removeFromCart.listenAndPromise(CartAPI.removeFromCart);

module.exports = AppActions;