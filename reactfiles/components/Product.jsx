var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var ProductStore = require('../stores/ProductStore');
var ProductInfoModal = require('./ProductInfoModal.jsx');
var Button = require('./Button.jsx');

var ProductButtons = require('./ProductButtons.jsx')

var styles = {
  container: {
    background: 'white',
    display: 'inline-block',
    margin: '4px',
    width: '200px',
    height: '300px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)',
    verticalAlign: 'middle',

    ':hover': {},

    transition: 'all 500ms'
  },

  prodButtonsWrapper: {
    top: '151px',
    right: '0px',
    position: 'absolute',
    width: '100%',
    borderTop: '1px solid #B25DDE'
  },

  image: {
    width: '175px',
    height: '175px',
    margin: '0 auto',
    display: 'block',
    padding: '10px'
  },

  productQuantityWrapper: {    
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#FFF',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    textAlign: 'center',
    lineHeight: '38px',
    padding: '38px 0'
  },

  productQuantityAmount: {
    fontSize: '40px',
    display: 'block',
    fontWeight: '300'   
  },

  productQuantityLabel: {
    fontSize: '16px',
    display: 'block'
  },

  media: {
    height: '200px',
    position: 'relative'
  },

  detailWrapper: {
    marginTop: '20px'
  },

  productName: {
    fontWeight: '300',
    paddingLeft: '10px'
  },

  quantityPill: {
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    lineHeight: '30px',
    fontSize: '14px',
    background: '#60AB59',
    color: '#FFF',
    position: 'absolute',
    top: '10px',
    right: '10px',
    textAlign: 'center'
  }
};

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
  getInitialState: function() {
    return {
      dialogShowing: false
    };
  }, 

  _displayDialog: function(e) {
    // if (!this.state.dialogShowing) this.refs.productInfoModal.showDialog();
    // this.state.dialogShowing = !this.state.dialogShowing;
    this.refs.productInfoModal.openModal();
  },


  render: function() {
    var product = this.props.product;      
    var productQuantity = this.props.quantity ? <ProductQuantity quantity={this.props.quantity} /> : null;
    return (      
        <li className={"product" + (this.props.quantity ? " in-cart" : "") } key="keyForProduct" style={styles.container} onClick={this._displayDialog}>
          <div className="media" style={styles.media}>

            <img src={'https://s3-us-west-1.amazonaws.com/ttyd/photos/' + this.props.product.photo_file_name}
              style={styles.image} />

            {Radium.getState(this.state, 'keyForProduct', ':hover') ? (              
              <div>
                {productQuantity}
                <div style={styles.prodButtonsWrapper}>
                  <ProductButtons product={product} quantity={this.props.quantity} />    
                </div>
              </div>
            ) : this.props.quantity ? 
              <div style={styles.quantityPill}>
                {this.props.quantity}
              </div> :
            null}
                        
          </div>

          <div className="product-detail-wrapper" style={styles.detailWrapper}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p className="product-details">{product.details}</p>            
          </div>          

          <ProductInfoModal product={product} key="product.id" showing={this.state.dialogShowing} quantity={ProductQuantity} ref="productInfoModal"/>
        </li>
    );
  }
})

module.exports = Radium(Product);