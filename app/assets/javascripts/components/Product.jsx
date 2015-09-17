var React = require('react');
var CartActions = require('../actions/CartActions');
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
    console.log('handling the tap')
    this.refs.dialog.show();
  },

  _handleCustomDialogCancel: function() {
    this.refs.dialog.dismiss();
  },

  _handleCustomDialogSubmit: function() {
    this.refs.dialog.dismiss();
  },

  addToCart: function(event) {
    var id = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      details: this.props.selected.details
    }
    CartActions.addToCart(id, update);
    CartActions.updateCartVisible(true);
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

  selectVariant: function(event) {
    CartActions.selectProduct(event.target.value);
  },

  render: function() {
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
            <h2 className="product-name">{this.props.name}</h2>
            <p className="product-details">{this.props.details}</p>
          </div>
          <Dialog ref="dialog" 
                  title="test title" 
                  actions={customActions}
                  modal={true}>
            The internals of the dialog!
          </Dialog>        
        </div>
      );
  }
})

module.exports = Radium(Product);