var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductList = require('./ProductList.jsx');
var Cart = require('./Cart.jsx');

function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    // cartVisible: CartStore.getCartVisible()
  };
}

var CartApp = React.createClass({

  getInitialState: function() {
    return getCartState();
  },

  render: function() {
    return (
      <div className="ttyd-app">
        <Cart products={this.state.cartItems} visible={this.state.cartVisible} />
        <div>brekbetweencartandproductlist</div>
        <ProductList products={this.state.products} />
      </div>
    );
  },
})

module.exports = CartApp;