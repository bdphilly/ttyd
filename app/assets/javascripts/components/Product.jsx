var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var ProductStore = require('../stores/ProductStore');
var Dialog = require('material-ui/lib/dialog');
var Toggle = require('material-ui/lib/toggle');
var Colors = require('material-ui/lib/styles/colors');
var Paper = require('material-ui/lib/paper');
var FontIcon = require('material-ui/lib/font-icon');
var FlatButton = require('material-ui/lib/flat-button');
var RaisedButton = require('material-ui/lib/raised-button');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var injectTapEventPlugin = require("react-tap-event-plugin");
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

injectTapEventPlugin();

var styles = {
  container: {
    background: 'red',
    display: 'inline-block',
    margin: '10px',
    width: '200px',
    height: '300px',

    ':hover': {
      background: 'black'
    },

    transition: 'all 500ms'
  },
  image: {
    width: '100px',
    height: '100px'
  },

  button: {
    minwidth: '50px'
  }
};

var ProductButtons = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'products')],

  /* two functions required for react-ui */
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
        muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function () { 
    return {
      product: {}
    }
  },    

  _handleDialogTouchTap: function(event) {
    if (event == 'plus') {
      AppActions.addOrUpdateCart(this.props.product);
    } else {      
      AppActions.minusOrDeleteFromCart(this.props.product);
    }
  },

  render: function() {
    return (
      <div>
        <RaisedButton onClick={this._handleDialogTouchTap.bind(this, "plus")} style={styles.button}>
          <FontIcon className="material-icons" color={Colors.blue500}>add_circle_outline</FontIcon>
        </RaisedButton>
        <RaisedButton onClick={this._handleDialogTouchTap.bind(this, "minus")} style={styles.button}>
          <FontIcon className="material-icons" color={Colors.blue500}>remove_circle_outline</FontIcon>
        </RaisedButton>
      </div>
    )
  }

})

var Product = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'products')],
  
  init: function () {
  },

  getInitialState: function() {
    return { modalIsOpen: false };
  },
  
  // _handleDialogTouchTap: function(event) {
  //   this.refs.dialog.show();
  // },

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
      // <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <Paper zDepth={2} className="product" style={styles.container}>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg'}
            style={styles.image}/>

          <div className="product-detail-wrapper">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-details">{product.details}</p>
          </div>

          <ProductButtons product={product}/>

          <Dialog ref="dialog" 
                  title={product.name}                  
                  actions={customActions}
                  modal={true}>
            The internals of the dialog!
          </Dialog>        
        </Paper>
      // </ReactCSSTransitionGroup>
    );
  }
})

module.exports = Radium(Product);