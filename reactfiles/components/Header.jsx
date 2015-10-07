var React = require('react'),
    AppActions = require('../actions/AppActions'),    
    FlatButton = require('material-ui/lib/flat-button'),
    AppBar = require('material-ui/lib/app-bar');

var Header = React.createClass({
  _cartToggled: function(show) {
    AppActions.updateCartVisible(show);
  },

  render: function() {
    var cartToggleButton = this.props.cartVisible ? 
      <FlatButton onClick={this._cartToggled.bind(this, false)} label="Hide Cart" /> : 
      <FlatButton onClick={this._cartToggled.bind(this, true)} label="Show Cart" />;
      
    return (
      <AppBar
        title="Tahoe To Your Door"
        iconElementRight={cartToggleButton} />
    )
  }
})

module.exports = Header;