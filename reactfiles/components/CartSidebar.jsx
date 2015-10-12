var React = require('react');
var Reflux = require('reflux');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');

var Cart = require('./Cart.jsx');
var CartCheckout = require('./CartCheckout.jsx');

var styles = {
  cartProducts: {
    overflowY: 'auto'
  },

  checkoutButton: {
    background: 'red'
  }
};

var CartSidebar = React.createClass({
  componentDidMount: function() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.updateDimensions);
  },

  updateDimensions: function() {
    React.findDOMNode(this.refs.cartProducts).style.height = window.innerHeight - 150 + 'px';
  },

  render: function() {
    return (
      <div className="cart-sidebar">
        <div className={"cart-products"} style={styles.cartProducts} ref={"cartProducts"}>
          <Cart products={this.props.products}/>
        </div>
        <CartCheckout className={"cart-checkout-cta"}/>
      </div>
    );
  }    
})

module.exports = CartSidebar;