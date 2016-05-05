var reqwest = require('reqwest');

module.exports = {
    
  fetchProducts: function() {
    return reqwest({
      url: '/api/products',
      method: 'GET',
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

  searchForItems: function(query) {
    return reqwest({
      url: '/api/products/search?name=' + query,
      method: 'GET',
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
  }
}

function csrfToken() {
  return _.find(document.getElementsByTagName('meta'), function(elm) { 
    return elm.name == 'csrf-token' 
  }).content;
}