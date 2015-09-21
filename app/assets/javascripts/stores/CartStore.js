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
  
  getInitialState: function () { 
    console.debug("initial state cart store");
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

  onRemoveFromCartCompleted: function(result, product) {
    console.log('successfully deleted!', result, product);    
    _.remove(this.state.orderItems, function(el) { return el.orderItem.id == result.product });
    this.trigger(this.state.orderItems);
  },

  onRemoveFromCartFailed: function(result) {
    console.log('not deleted!', result);
  },

  onGetCartItems: function() {
    console.log('in the get cart items!');
  },

  getCartItems: function() {
    return 'test';
  },

  onGetCartVisible: function() {
    console.log('in the get cart visible!');

    return this.state.visible;
  },

  getCartVisible: function() {
    console.log('in the get cart visible!12341234');

    return this.state.visible;
  },

  onUpdateCartVisible: function(update) {
    this.state.visible = update;
  },  

});

module.exports = Store;