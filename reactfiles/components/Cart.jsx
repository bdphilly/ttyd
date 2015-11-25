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

  cartHeader: {
    height: '50px',
    background: 'green',
    color: '#fff',
    paddingLeft: '10px',
    lineHeight: '60px'
  },

  cartTable: {
    borderCollapse: 'collapse',
    width: '100%'
  },

  emptyCartIcon: {
    fontSize: '128px',
    color: '#ccc',
    textAlign: 'center',
    display: 'block',
    marginTop: '100px'
  },

  emptyCartText: {
    display: 'block',
    textAlign: 'center',
    fontSize: '32px',
    color: '#ccc'
  }
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
    
    var totalProducts = _.sum(_.map(this.state.orderItems, function(el) { return el.quantity }));        

    var emptyCart = products.length ? 
      <div>
        <span className="total">Total: ${totalProducts}</span>    
        <button type="button" className="empty" onClick={this._empty}>Empty Cart</button>
      </div>
      :
      <div>
        <i className="fa fa-shopping-cart" style={styles.emptyCartIcon}></i>
        <span style={styles.emptyCartText}>Your Cart is Empty</span>
      </div>;
    return (
      <div className={"cart" + (this.props.visible ? ' active' : '')}>
        <div style={styles.cartHeader}>
          Total Items: {this.state.totalProducts}
        </div>
        <table style={styles.cartTable}>
          <tbody>
            {Object.keys(products).map(function(product, index){
              return (
                <CartItem product={products[product]} key={index} />
              )
            })}
          </tbody>
        </table>        
        {emptyCart}
      </div>      
    );
  }  
});

module.exports = Cart;