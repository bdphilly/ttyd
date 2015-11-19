var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');

var styles = {
  row: {
    borderBottom: '1px #C3C3C3 solid'
  },

  columnWrapper: {
    textAlign: 'center',
    color: '#929292',
    fontSize: '18px'
  },

  minusButtonDisabled: {
    color: '#C3C3C3',        
    cursor: 'default'      
  },

  // quantity: {
  //   fontSize: '18px'
  // },

  removeItemIcon: {
    margin: '0 20px',
    color: 'red',

    ':hover': {
      cursor: 'pointer',
      color: '#C3C3C3'
    }
  },

  image: {
    width: '40px',
    height: '40px'
  },

  productName: {
    fontWeight: '300'
  }
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
      //AppActions.removeFromCart(this.props.product.id);
    }
  },

  render: function() {
    var product = this.props.product;

    return (
      <tr style={styles.row}>
        <td style={styles.columnWrapper}>
          <a onClick={this._updateCart.bind(this, "increase")} href="#">
            <i className="fa fa-caret-up"></i>
          </a>
          <div style={styles.quantity}>{product.quantity}</div>
          <a onClick={this._updateCart.bind(this, "decrease")} href="#" style={[product.quantity == 1 && styles.minusButtonDisabled]}>
            <i className="fa fa-caret-down"></i>
          </a>
        </td>
        <td style={styles.columnWrapper}>
          <img src={'https://s3-us-west-1.amazonaws.com/ttyd/photos/' + product.product.photo_file_name} style={styles.image} />
        </td>        
        <td style={styles.columnWrapper}>
          <span style={styles.productName}>{product.product.name}</span>
        </td>
        <td style={styles.columnWrapper}>
          <i className="fa fa-times" onClick={this._removeFromCart.bind(this, product.id)} style={styles.removeItemIcon}></i>
        </td>
      </tr>
    )
  }
})

module.exports = Radium(CartItem);