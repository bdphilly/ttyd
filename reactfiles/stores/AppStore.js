var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductAPI = require('../utils/productAPI'),
    CartAPI = require('../utils/cartAPI');

var AppStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.state = {
      cartVisible: false
    };
  },

  updateCartVisible: function(visible) {
    this.state.cartVisible = visible;
    this.trigger(this.state.cartVisible);
  }
});

module.exports = AppStore;