var React = require('react'),
    AppActions = require('../actions/AppActions'),    
    FlatButton = require('material-ui/lib/flat-button'),
    AppBar = require('material-ui/lib/app-bar');

var styles = {
  container: {
    background: '#9BF5FF',
    height: '50px',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1'
  },

  cartButton: {
    borderRadius: '10px',
    position: 'absolute',
    right: '50px'
  }
}

var Header = React.createClass({
  _cartToggled: function(show) {
    AppActions.updateCartVisible(show);
  },

  render: function() {
    var cartToggleButton = this.props.cartVisible ? 
      <button onClick={this._cartToggled.bind(this, false)} style={styles.cartButton}>Hide Cart</button> : 
      <button onClick={this._cartToggled.bind(this, true)} style={styles.cartButton}>Show Cart</button>;
      
    return (
      <div style={styles.container}>
        {cartToggleButton}
      </div>
        
    )
  }
})

module.exports = Header;