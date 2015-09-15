var Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions');

var productList = {};

var ProductStore = Reflux.createStore({  
  listenables: [ProductActions],
  sourceURL: '/api/products.json',
  // productList: [],
  init: function () {
    this.onFetchAllProducts();
  },
  getInitialState: function () { 
    return {
      productList: ['test']
    }
  },
  // onItemAdded: function (newValue) {
  //   product = newValue,
  //   this.trigger(product)
  // },

  onFetchAllProducts: function() {
    console.log('in the on fetch!')
    $.ajax({
      url: this.sourceURL,
      dataType: 'json',
      success: function (products) {
        productList = products;
        this.trigger(productList);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }
});

module.exports = ProductStore;