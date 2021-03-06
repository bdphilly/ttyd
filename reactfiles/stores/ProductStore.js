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
      cart: [],
      searchResults: []
    };
  },

  cartChanged: function(updatedCart) {
    this.state.cart = updatedCart;
  },

  fetchProducts: function() {
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
      }.bind(this));
  },

  filterAisle: function(aisle) {
    return this.state.categories[aisle];
  }

});

module.exports = ProductStore;