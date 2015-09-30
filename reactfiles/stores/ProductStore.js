var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    CartStore = require('./CartStore'),
    ProductAPI = require('../utils/productAPI'),
    CartAPI = require('../utils/cartAPI');

var ProductStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.listenTo(CartStore, this.cartChanged);

    this.state = {
      categories: [],
      cart: []
    };
  },

  cartChanged: function(updatedCart) {
    this.state.cart = updatedCart;
  },

  onFetchProducts: function() {
    ProductAPI.fetchProducts()
      .then(function (result) {
        var categories = {};
        _.each(result.data, function(category) {
          categories[category.name] = category.products;
        });

        this.state.categories = categories;
        this.trigger(this.state.categories);
      }.bind(this))
      .catch(function (error) {
        console.error(error);
      }.bind(this))
  }
});

module.exports = ProductStore;