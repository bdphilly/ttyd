var React = require('react');
var CartActions = require('../actions/CartActions');

var Product = React.createClass({
  addToCart: function(event) {
    var id = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      details: this.props.selected.details
    }
    CartActions.addToCart(id, update);
    CartActions.updateCartVisible(true);
  },

  selectVariant: function(event) {
    CartActions.selectProduct(event.target.value);
  },

  render: function() {
    // var ats = (this.props.selected.id in this.props.cartitems) ?
    //   this.props.selected.inventory - this.props.cartItems[this.props.selected.sku].quantity : this.props.selected.inventory;
    console.log('propr', this.props)
      return (
        <div className="product">
          <img src={'img/soup.jpg'}/>
          TEST TEST
          <div className="product-detail-wrapper">
            <h2 className="product-name">{this.props.product.name}</h2>
            <p className="product-details">{this.props.product.details}</p>
          </div>
        </div>
      );
  }
})

// $(document).ready(ready);

module.exports = Product;

// var ready = function () {
//   alert('ready!');
//   React.render(
//     <Product />,
//     document.getElementById('products')
//   );
// };

// $(document).ready(ready);