var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var Dialog = require('material-ui/lib/dialog');
var Toggle = require('material-ui/lib/toggle');
var FlatButton = require('material-ui/lib/flat-button');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

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

var Product = React.createClass({  
  getInitialState: function() {
    return { modalIsOpen: false };
  },
  
  _handleDialogTouchTap: function() {
    this.refs.dialog.show();
  },

  _handleCustomDialogCancel: function() {
    this.refs.dialog.dismiss();
  },

  _handleCustomDialogSubmit: function(event) {
    AppActions.addToCart(this.props.product);    
    AppActions.updateCartVisible(true);
    this.refs.dialog.dismiss();
  },

  /* two functions required for react-ui */
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    var product = this.props.product;

    var customActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleCustomDialogCancel} />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this._handleCustomDialogSubmit} />
    ];      

    return (
      <div className="product" style={styles.container}>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg'}
          style={styles.image}/>
        <button label="This be a label" onClick={this._handleDialogTouchTap}></button>
        <div className="product-detail-wrapper">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-details">{product.details}</p>
        </div>
        <Dialog ref="dialog" 
                title={product.name} 
                actions={customActions}
                modal={true}>
          The internals of the dialog!
        </Dialog>        
      </div>
    );
  }
})

module.exports = Radium(Product);