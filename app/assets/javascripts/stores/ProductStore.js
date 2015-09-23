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

  onFetchProducts: function() {
    ProductAPI.fetchProducts()
      .then(function (result) {
        this.state.products = result.data;
        this.trigger(this.state.products);
      }.bind(this))
      .catch(function (error) {
        console.error(error);
      }.bind(this))
  }
});

module.exports = ProductStore;