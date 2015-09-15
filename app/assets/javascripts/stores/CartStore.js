var Reflux = require('reflux'),
    CartActions = require('../actions/CartActions');

var product = {};

var Store = Reflux.createStore({
  listenables: [CartActions],
  init: function () {},
  getInitialState: function () { console.debug("is: %o", input); return input; },
  onItemAdded: function (newValue) {
    product = newValue,
    this.trigger(product)
  }
});

module.exports = Store;