var Reflux = require('reflux'),
    CartActions = require('../actions/CartActions'),
    CartAPI = require('../utils/cartAPI');
    
var product = {};

var Store = Reflux.createStore({
  listenables: [CartActions],
  init: function () {},
  getInitialState: function () { console.debug("is: %o", input); return input; },
  
  onItemAdded: function () {    
    CartAPI.addToCart();
  },

  onItemAddedCompleted: function(result) {
    console.log('success!', result);
  },

  onItemAddedFailed: function(err) {
    console.log('fail', err);
  }
});

module.exports = Store;