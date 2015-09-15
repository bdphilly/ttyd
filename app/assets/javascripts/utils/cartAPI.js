var CartActions = require('../actions/CartActions');

module.exports = {

  getProductData: function() {
    var data = JSON.parse(localStorage.getItem('product'));
    CartActions.receiveProduct(data);
  }
}