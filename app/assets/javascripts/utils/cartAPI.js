var reqwest = require('reqwest');

module.exports = {

  addToCart: function(params) {
    var orderItem = {"order_item":{ 
      quantity: params.quantity || 1, 
      product_id: params.id
    }};

    return reqwest({
      url: '/api/order_items',
      method: 'POST',
      data: JSON.stringify(orderItem),
      type: 'json',
      contentType: 'application/json',
      headers: {
        'X-CSRF-TOKEN': csrfToken()
      },
      success: function (result) {
        return result.data;
      },
      error: function (error) {
        return error;
      }
    });    
  },

  updateItemInCart: function(params) {
    var orderItem = {"order_item":{ 
      quantity: params.quantity, 
      product_id: params.productId
    }};

    return reqwest({
      url: '/api/order_items/' + params.orderItemId,
      method: 'PUT',
      data: JSON.stringify(orderItem),
      type: 'json',
      contentType: 'application/json',
      headers: {
        'X-CSRF-TOKEN': csrfToken()
      },
      success: function (result) {
        return result.data;
      },
      error: function (error) {
        return error;
      }
    });
  },

  removeFromCart: function(id) {
    return reqwest({
      url: '/api/order_items/' + id,
      method: 'DELETE',
      type: 'json',
      contentType: 'application/json',
      headers: {
        'X-CSRF-TOKEN': csrfToken()
      },
      success: function (result) {
        return result;
      },
      error: function (error) {
        return error;
      }
    });    
  },


  emptyCart: function() {
    return reqwest({
      url: '/api/orders',
      method: 'DELETE',
      type: 'json',
      contentType: 'application/json',
      headers: {
        'X-CSRF-TOKEN': csrfToken()
      },
      success: function (result) {
        return result;
      },
      error: function (error) {
        return error;
      }
    });    
  },

  fetchCart: function() {
    return reqwest({
      url: '/api/order_items',
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        'X-CSRF-TOKEN': csrfToken()
      },
      success: function (result) {
        return result.data;
      },
      error: function (error) {
        return error;
      }
    });
  }    

}

function csrfToken() {
  return _.find(document.getElementsByTagName('meta'), function(elm) { 
    return elm.name == 'csrf-token' 
  }).content;
}