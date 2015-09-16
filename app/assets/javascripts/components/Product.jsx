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
      return (
        <div className="product">
          <img src={'img/soup.jpg'}/>
          TEST TEST
          <div className="product-detail-wrapper">
            <h2 className="product-name">{this.props.name}</h2>
            <p className="product-details">{this.props.details}</p>
          </div>
        </div>
      );
  }
})

module.exports = Product;