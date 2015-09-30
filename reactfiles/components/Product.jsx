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
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var ProductInfoDialog = require('./ProductInfoDialog.jsx');

var styles = {
  container: {
    background: 'red',
    display: 'inline-block',
    margin: '10px',
    width: '200px',
    height: '300px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23',

    ':hover': {},

    transition: 'all 500ms'
  },

  actionItems: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    backgroundColor: 'red',
    borderTop: '1px solid blue',
    height: '50px',
    bottom: '0'
  },

  image: {
    width: '175px',
    height: '175px',
    margin: '0 auto',
    display: 'block',
    padding: '10px'
  },

  button: {
    minwidth: '50px'
  },

  productQuantityWrapper: {    
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#FFF',
    height: '200px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    textAlign: 'center',
    lineHeight: '38px'
  },

  productQuantityAmount: {
    marginTop: '50px',
    fontSize: '40px',
    display: 'block'    
  },

  productQuantityLabel: {
    fontSize: '16px',
    display: 'block'
  },

  media: {
    height: '220px',
    position: 'relative'
  }
};

var ProductButtons = React.createClass({
  _handleDialogTouchTap: function(event) {
    if (event == 'plus') {
      AppActions.addOrUpdateCart(this.props.product);
    } else {      
      AppActions.minusOrDeleteFromCart(this.props.product);
    }
  },

  render: function() {
    return (
      <div className="action-items" style={styles.actionItems}>
        <RaisedButton onClick={this._handleDialogTouchTap.bind(this, "minus")} style={styles.button}>
          <FontIcon className="material-icons" color={Colors.blue500}>remove_circle_outline</FontIcon>
        </RaisedButton>
        <RaisedButton onClick={this._handleDialogTouchTap.bind(this, "plus")} style={styles.button}>
          <FontIcon className="material-icons" color={Colors.blue500}>add_circle_outline</FontIcon>
        </RaisedButton>        
      </div>
    )
  }

})

var ProductDialog = React.createClass({
  _handleCustomDialogCancel: function() {
    this.refs.dialog.dismiss();
  },

  _handleCustomDialogSubmit: function(event) {
    AppActions.addToCart(this.props.product);    
    AppActions.updateCartVisible(true);
    this.refs.dialog.dismiss();
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
      <Dialog ref="dialog" 
              title={this.props.product.name}                  
              actions={customActions}
              modal={true}>
        The internals of the dialog!
      </Dialog>        
    );
  }  

})

var ProductQuantity = React.createClass({
  render: function() {
    return (
      <div className="product-quantity-wrapper" style={styles.productQuantityWrapper}>
        <div className="product-quantity">
          <span className="product-quantity-amount" style={styles.productQuantityAmount}>{this.props.quantity}</span>
          <span className="product-quantity-label" style={styles.productQuantityLabel}>in cart</span>
        </div>
      </div>
    );
  }
});

var Product = React.createClass({
  render: function() {
    var product = this.props.product;      
    var productQuantity = this.props.quantity ? <ProductQuantity quantity={this.props.quantity} /> : null;
    return (      
      // <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <li className={"product" + (this.props.quantity ? " in-cart" : "") } key="keyForProduct" style={styles.container}>
          <div className="media" style={styles.media}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg'}
              style={styles.image} />

            {Radium.getState(this.state, 'keyForProduct', ':hover') ? (
              <div>
                {productQuantity}
                <ProductButtons product={product} />    
              </div>
            ) : null}
            
          </div>

          <div className="product-detail-wrapper">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-details">{product.details}</p>            
          </div>          

          <ProductInfoDialog product={product} />
        </li>
      // </ReactCSSTransitionGroup>
    );
  }
})

module.exports = Radium(Product);