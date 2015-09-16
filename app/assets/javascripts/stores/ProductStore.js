var Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions'),
    ProductAPI = require('../utils/productAPI');

var ProductStore = Reflux.createStore({  
  listenables: [ProductActions],  

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