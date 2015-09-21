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

    // this.listenToMany(ProductActions);
    
    // ProductActions.fetchAllProducts();    
  },

  onFetchAllProducts: function() {
    ProductAPI.fetchProducts();
  },  
  onFetchAllProductsCompleted: function (result) {
    console.log('completed!', result);
    this.state.products = result;
    this.trigger(this.state.products);
  },
  onFetchAllProductsFailed: function () {
    console.log('failed :(')
  },

  // onItemAdded: function (newValue) {
  //   product = newValue,
  //   this.trigger(product)
  // },
});

module.exports = ProductStore;