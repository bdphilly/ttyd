var CartActions = require('../actions/CartActions');

module.exports = {

  addToCart: function() {
    var sourceURL = 'api/order_items';

    var orderItem = {"order_item":{ 
      quantity: 55, 
      product_id: 2, 
      local_storage_order_id: 14
    }};

    return $.ajax({
      url: sourceURL,
      type: 'POST',
      dataType: 'json',
      data: orderItem,
      success: function (result) {
        console.log('result from ajax', result);
        return result;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(xhr, status, err.toString());
        return err;
      }
    })
  }  
}