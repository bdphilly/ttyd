var React = require('react');
var Reflux = require('reflux');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');
var CartItem = require('./CartItem.jsx');

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
    AppActions.fetchCart();    
  },

  _closeCart: function() {
    AppActions.updateCartVisible(false);
  },

  _openCart: function() {
    AppActions.updateCartVisible(true);
  },

  // _removeFromCart: function(orderItemId) {
  //   AppActions.removeFromCart(orderItemId);
  // },

  _empty: function() {
    AppActions.emptyCart();
  },

  render: function() {
    var self = this, 
        products = this.state.orderItems;

    return (
      <div className={"cart" + (this.props.visible ? ' active' : '')}>
        <div className="mini-cart" >
          <table>
            <tbody>
              {Object.keys(products).map(function(product, index){
                return (
                  <CartItem product={products[product]} key={index} />
                )
              })}
            </tbody>
          </table>
          <span className="total">Total: ${this.props.total}</span>
        </div>        
        <button type="button" className="empty" onClick={this._empty}>Empty Cart</button>
      </div>
    );
  }  
})

module.exports = Cart;