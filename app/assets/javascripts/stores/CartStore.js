var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    CartAPI = require('../utils/cartAPI');
    
var product = {};

var Store = Reflux.createStore({
  listenables: [AppActions],
  
  init: function () {
    this.state = {
      orderItems: [],
      visible: false
    }
  },

  onFetchCartCompleted: function(results) {
    this.state.orderItems = results.data.orderItems;
    
    this.trigger(this.state.orderItems);
  },

  onFetchCartFailed: function() {
    console.log('in the get cart items failedfailed!');    
  },

  onAddToCartCompleted: function(result) {
    this.state.orderItems.push({
      product: result.data.updatedOrderItem.product,
      orderItem: result.data.updatedOrderItem.orderItem
    });

    this.trigger(this.state.orderItems);
  },

  onAddToCartFailed: function(err) {
    console.log('fail', err);
  },

  onRemoveFromCart: function(params) {
  },

  onRemoveFromCartCompleted: function(result) {
    _.remove(this.state.orderItems, function(product) { 
      return product.orderItem.id == result.data.orderItemId
    });
    this.trigger(this.state.orderItems);
  },

  onRemoveFromCartFailed: function(result) {
    console.log('not deleted!', result);
  },

  getCartItems: function() {
    // debugger
    // return {
    //   orderItems: []
    // };
    return this.state;    
  },

  getCartVisible: function() {
    console.log('in the get cart visible!12341234');

    return this.state.visible;
  },

  onGetCartVisible: function() {
    console.log('in the get cart visible');
    return this.state.visible;
  },

  onUpdateCartVisible: function(update) {
    this.state.visible = update;
  },  

});

module.exports = Store;