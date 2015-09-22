var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductAPI = require('../utils/productAPI'),
    CartAPI = require('../utils/cartAPI');

var ProductStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.state = {
      products: []
    };
  },

  onFetchProductsCompleted: function (result) {
    console.log('completed!', result);
    this.state.products = result;
    this.trigger(this.state.products);
  },

  onFetchProductsFailed: function () {
    console.log('failed :(')
  },

});

module.exports = ProductStore;