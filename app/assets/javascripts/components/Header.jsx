var React = require('react'),
    AppActions = require('../actions/AppActions'),    
    FlatButton = require('material-ui/lib/flat-button'),
    AppBar = require('material-ui/lib/app-bar');

// var mui = require('material-ui');
// var ThemeManager = new mui.Styles.ThemeManager();

var ThemeManager = require('material-ui/lib/styles/theme-manager'); 

  // var materialReq = {
  //   childContextTypes: {
  //     muiTheme: React.PropTypes.object
  //   },

  //   getChildContext: function() {
  //     return {
  //         muiTheme: ThemeManager.getCurrentTheme()
  //     };
  //   }
  // }

var Header = React.createClass({
  /* two functions required for react-ui */
  // childContextTypes: {
  //   muiTheme: React.PropTypes.object
  // },

  // getChildContext: function() {
  //   return {
  //       muiTheme: ThemeManager.getCurrentTheme()
  //   };
  // },
  /**/

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