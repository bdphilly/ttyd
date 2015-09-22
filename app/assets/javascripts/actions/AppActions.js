var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');
var CartAPI = require('../utils/cartAPI');

var AppActions = Reflux.createActions([
  {"fetchProducts": {
      children: ["completed", "failed"]
    }
  },
  {"fetchCart": {
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
  "addOrUpdateCart",
  "minusOrDeleteFromCart",
  "updateCartVisible",
  "getCartItems",
  "getCartVisible"
]);

AppActions.fetchProducts.listenAndPromise(ProductAPI.fetchProducts);
AppActions.fetchCart.listenAndPromise(CartAPI.fetchCart);
AppActions.addToCart.listenAndPromise(CartAPI.addToCart);
AppActions.removeFromCart.listenAndPromise(CartAPI.removeFromCart);

module.exports = AppActions;