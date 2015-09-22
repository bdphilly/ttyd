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
        return result.data;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(xhr, status, err.toString());
        return err;
      }
    })
  },

  removeFromCart: function(id) {
    var sourceURL = 'api/order_items/' + id;

    return $.ajax({
      url: sourceURL,
      type: 'DELETE',
      dataType: 'json',
      success: function (result) {
        return result.data;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(xhr, status, err.toString());
        return err;
      }
    })
  },

  fetchCart: function() {
    var sourceURL =  '/api/order_items';

    return $.ajax({
      url: sourceURL,
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        return result.data;
      },
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }    

}