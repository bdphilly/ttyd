module.exports = {
    
  fetchProducts: function() {
    var sourceURL =  '/api/products.json';

    return $.ajax({
      url: sourceURL,
      dataType: 'json',
      success: function (products) {
        console.log('products returned from ajax', products);
        return products;
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }
}