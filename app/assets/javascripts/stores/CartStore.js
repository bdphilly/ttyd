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

  onFetchCart: function() {
    CartAPI.fetchCart()
    .then(function (result) {
      this.state.orderItems = result.data;      
      this.trigger(this.state.orderItems);
    }.bind(this))
    .catch(function (error) {
      console.error(error);
    }.bind(this))
  },

  onAddToCart: function(data) {
    CartAPI.addToCart(data)
    .then(function (result) {
      this.state.orderItems.push(result.data.updatedOrderItem);

      this.trigger(this.state.orderItems);

    }.bind(this))
    .catch(function (error) {
      console.error(error);
    }.bind(this))
  },

  onUpdateItemInCart: function(data) {
    CartAPI.updateItemInCart(data)
      .then(function (result) {
        var updatedItem = _.find(this.state.orderItems, function(orderItem) { return orderItem.id == result.data.updatedOrderItem.id });
        updatedItem.quantity = result.data.updatedOrderItem.quantity;
        this.trigger(this.state.orderItems);
      }.bind(this))
      .catch(function (error) {
        console.error(error);
      }.bind(this))
  },  

  onRemoveFromCart: function(id) {
    CartAPI.removeFromCart(id)
      .then(function (result) {
        _.remove(this.state.orderItems, function(orderItem) { 
          return orderItem.id == result.data.orderItemId
        });
        this.trigger(this.state.orderItems);
      }.bind(this))
      .catch(function (error) {
        console.error(error);
      }.bind(this))
  },

  getCartItems: function() {
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

  onAddOrUpdateCart: function(product) {
    var orderItem = _.find(this.state.orderItems, function (orderItem) { return orderItem.product_id == product.id });
    if (orderItem) {
      AppActions.updateItemInCart({
        productId: product.id,
        quantity: orderItem.quantity + 1,
        orderItemId: orderItem.id
      })
    } else {
      AppActions.addToCart({
        id: product.id,
        quantity: 1
      })
    }
  },

  onMinusOrDeleteFromCart: function(product) {
    var orderItem = _.find(this.state.orderItems, function (orderItem) { return orderItem.product_id == product.id });
    
    if (!orderItem) {
      alert('this item isn\'t in your cart!');
    } else if (orderItem.quantity == 1) {
      AppActions.removeFromCart(orderItem.id);
    } else if (orderItem.quantity > 1) {
      AppActions.updateItemInCart({
        productId: product.id,
        quantity: orderItem.quantity - 1,
        orderItemId: orderItem.id
      })
    }
  }

});

module.exports = Store;