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

// product row:

// <div class="row">
//   <div class="col-xs-6 col-xs-offset-3">
//     <% @products.each do |product| %>
//       <%= render "product_row", product: product, order_item: @order_item %>
//     <% end %>
//   </div>
// </div>