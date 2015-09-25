var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductAPI = require('../utils/productAPI'),
    CartAPI = require('../utils/cartAPI');

var ProductStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.state = {
      categories: []
    };
  },

  onFetchProducts: function() {
    ProductAPI.fetchProducts()
      .then(function (result) {
        this.state.categories = result.data;
        this.trigger(this.state.categories);
      }.bind(this))
      .catch(function (error) {
        console.error(error);
      }.bind(this))
  }
});

module.exports = ProductStore;