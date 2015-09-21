module.exports = {

  addToCart: function(product) {
    var sourceURL = 'api/order_items';

    var orderItem = {"order_item":{ 
      quantity: 1, 
      product_id: product.id,
      local_storage_order_id: 23
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
  },

  removeFromCart: function(product) {
    //need to change, just copied and pasted for now!
    var sourceURL = 'api/order_items/' + product.id;

    var orderItem = {"order_item":{ 
      local_storage_order_id: product.order_id
    }};

    return $.ajax({
      url: sourceURL,
      type: 'DELETE',
      dataType: 'json',
      data: orderItem,
      success: function (result) {
        console.log('result from ajax', result);
        return {result, product};
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(xhr, status, err.toString());
        return err;
      }
    })
  }    

}