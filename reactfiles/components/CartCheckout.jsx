var React = require('react');
var Reflux = require('reflux');
var AppActions = require('../actions/AppActions');
var CartStore = require('../stores/CartStore');

var styles = {
  container: {
    borderTop: '2px #CCC solid'
  },

  buttonWrapper: {
    background: '#FFF'
  },

  checkoutButton: {
    background: '#B25DDE',
    color: '#FFF',
    fontSize: '24px',
    lineHeight: '48px',
    textAlign: 'center',
    width: '80%',
    margin: '10px auto',
    borderRadius: '10px'
  }
};

var CartCheckout = React.createClass({
  goToCheckout: function() {
    alert('this functionality is in development');
  },

  render: function() {
    return (
      <div className="cart-options" style={styles.container}>
        <div className="cart-checkout">
          <a href="#" onClick={this.goToCheckout}>
            <div style={styles.checkoutButton}>Checkout</div>
          </a>
        </div>
      </div>
    );
  }    
});

module.exports = CartCheckout;