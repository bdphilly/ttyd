var React = require('react');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');

var styles = {
  container: {
    background: 'red',

    ':hover': {
      background: 'black'
    },

    transition: 'all 500ms'
  },
  image: {
    width: '100px',
    height: '100px'
  },
};

var Cart = React.createClass({
  mixins: [Reflux.listenTo(CartStore, 'onCartChange')],

  getInitialState: function() {
    return {
      orderItems: []      
    }
  },

  onCartChange: function(products) {
    this.setState({
      orderItems: products
    });
  },

  componentDidMount: function() {
    AppActions.fetchCart()
  },

  _closeCart: function() {
    AppActions.updateCartVisible(false);
  },

  _openCart: function() {
    AppActions.updateCartVisible(true);
  },

  _removeFromCart: function(orderItemId) {
    AppActions.removeFromCart(orderItemId);
  },

  _empty: function() {
    AppActions.emptyCart();
  },

  render: function() {
    var self = this, 
        products = this.state.orderItems;

    return (
      <div className={"cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart" >
          <button type="button" className="empty" onClick={this._empty}>Empty Cart</button>
          <button type="button" className="close-cart" onClick={this._closeCart}>×</button>
          <ul>
            {Object.keys(products).map(function(product){
              return (
                <li key={product}>
                  <h1 className="name">{products[product].product.name}</h1>
                  <h3 className="quantity">{products[product].quantity}</h3>
                  <button type="button" className="remove-item" onClick={self._removeFromCart.bind(self, products[product].id)}>Remove</button>
                </li>
              )
            })}
          </ul>
          <span className="total">Total: ${this.props.total}</span>
        </div>
        <button type="button" className="view-cart" onClick={this._openCart} disabled={Object.keys(this.state.orderItems).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  }  
})

module.exports = Cart;