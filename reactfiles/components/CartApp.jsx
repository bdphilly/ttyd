var React = require('react'),
    Radium = require('radium'),
    AppStore = require('../stores/AppStore'),
    CartStore = require('../stores/CartStore'),
    ProductList = require('./ProductList.jsx'),
    Header = require('./Header.jsx'),
    CartSidebar = require('./CartSidebar.jsx'),
    WindowDimensions = require('./WindowDimensions.jsx');

var FlatButton = require('material-ui/lib/flat-button');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var History = ReactRouter.History;
var ThemeManager = require('material-ui/lib/styles/theme-manager'); 

var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    // cartVisible: CartStore.getCartVisible()
  };
}

var productWidthConstant = 200;

var styles = {
  productListWrapper: {
    'display': 'inline-block',
    'position': 'absolute',
    'left': '0',
    'top': '60px'
  },  
  cartWrapper: {
    'boxShadow': '0px 1px 5px 0px rgba(0,0,0,0.46)',
    'display': 'inline-block',
    'width': '400px',
    'top': '50px',
    'right': '0',
    'position': 'fixed',
    'height': '100%',
    'backgroundColor': '#FFF',
    'transition': 'transform 1s'

  },
  cartHidden: {
    // 'display': 'none',
    'transform': 'translateX(500px)',

  }
};

var CartApp = React.createClass({
  mixins: [Reflux.listenTo(AppStore, 'onUpdateCartVisible'), History],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  // getInitialState: function() {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
  //   }
  // },

  getChildContext: function() {
    return {
        muiTheme: this.state.muiTheme
    };
  },  

  getInitialState: function() {
    return {
      cartVisible: true,
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    }
  },

  componentDidMount: function() {
    var resizeTimeout;
    this.setProductListsWidth(true);

    // window.addEventListener('resize', function() {
    //   clearTimeout(resizeTimeout);
    //   resizeTimeout = setTimeout(function() {
    //     console.log('resize!');
    //     this.setProductListsWidth(this.state.cartVisible);
    //   }.bind(this), 300);      
    // }.bind(this));
  },

  // componentWillUnmount: function() {
  //   window.removeEventListener('resize', this.setProductListsWidth(this.state.cartVisible));
  // },

  onUpdateCartVisible: function(visible) {
    this.setProductListsWidth(visible);

    this.setState({
      cartVisible: visible
    });
  },

  setProductListsWidth: function(cartVisible) {
    var cart = this.refs.cartwrap,
        products = this.refs.productswrap;

    products.style.width = cartVisible ? window.innerWidth - parseInt(cart.style.width) + 'px' : window.innerWidth + 'px';
  },

  getProductListWidth: function() {
    // this.setProductListsWidth(this.cartVisible);
    return this.refs.productswrap ? parseInt(this.refs.productswrap.style.width) : 0; // % (2 * (200 + 2 + 2)) : 0;      
  },

  resize: function() {
    this.setProductListsWidth(this.state.cartVisible);    
  },

  render: function() {    
    return (
      <div className="ttyd-app">
        <Header cartVisible={this.state.cartVisible}/>
        <div style={styles.productListWrapper} ref="productswrap">{ this.props.children && 
          React.cloneElement(this.props.children, {
            getProductListWidth: this.getProductListWidth,
            resize: this.resize
          }) }</div>
        <div style={[
          styles.cartWrapper,
          !this.state.cartVisible && styles.cartHidden
        ]} ref="cartwrap">
          <CartSidebar products={this.state.cartItems}/>        
        </div>
        <WindowDimensions/>

      </div>
    );
  },
})

// window.addEventListener('resize', function() { console.log('resize!')})

module.exports = Radium(CartApp);