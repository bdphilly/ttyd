var Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions'),
    ProductAPI = require('../utils/productAPI');

// var products = {};

var ProductStore = Reflux.createStore({  
  listenables: [ProductActions],  
  // products: [],
  init: function () {
    // this.state = {
    //   products: []
    // };
    this.state = {products: ["init product!"]};
    // this.listenToMany(ProductActions);
    var that = this;
    // setInterval(function() {
    //   that.onFetchAllProducts();  
    // }, 500)
    
  },
  // getInitialState: function () { 
  //   console.log('in get initial state')
  //   return {
  //     products: ['test']
  //   }
  // },
  onFetchAllProducts: function() {
    ProductAPI.fetchProducts();
  },  
  onFetchAllProductsCompleted: function (result) {
    console.log('completed!', result);
    this.state.products = result;
    this.trigger(this.state);
  },
  onFetchAllProductsFailed: function () {
    console.log('failed :(')
  },
  // onItemAdded: function (newValue) {
  //   product = newValue,
  //   this.trigger(product)
  // },

  // onFetchAllProducts: function() {
  //   console.log('in the on fetch!')
  //   $.ajax({
  //     url: this.sourceURL,
  //     dataType: 'json',
  //     success: function (products) {
  //       this.products = products;
  //       this.trigger({products: this.products});
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   })
  // }
});

module.exports = ProductStore;