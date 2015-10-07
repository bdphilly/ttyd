var React = require('react');
var Reflux = require('reflux');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');

var styles = {

};

var CartItem = React.createClass({

  _removeFromCart: function(orderItemId) {
    AppActions.removeFromCart(orderItemId);
  },

  _updateCart: function(change) {
    var cartItem = {
        productId: this.props.product.product_id,
        quantity: this.props.product.quantity,
        orderItemId: this.props.product.id
    };

    if (change == 'increase') {
      cartItem.quantity += 1;
      AppActions.updateItemInCart(cartItem);
    } else if (this.props.product.quantity > 1) {
      cartItem.quantity -= 1;
      AppActions.updateItemInCart(cartItem);
    } else {
      AppActions.removeFromCart(this.props.product.id);
    }
  },

  render: function() {
    var product = this.props.product;

    return (
      <tr>
        <td>
          <a onClick={this._updateCart.bind(this, "increase")} href="#">
            <i className="fa fa-caret-up"></i>
          </a>
          <div className="quantity">{product.quantity}</div>
          <a onClick={this._updateCart.bind(this, "decrease")} href="#">
            <i className="fa fa-caret-down"></i>
          </a>
        </td>        
        <td>
          <h3 className="name">{product.product.name}</h3>
        </td>
        <td>
          <button type="button" className="remove-item" onClick={this._removeFromCart.bind(this, product.id)}>Remove</button>      
        </td>
      </tr>
    )
  }
})

module.exports = CartItem;