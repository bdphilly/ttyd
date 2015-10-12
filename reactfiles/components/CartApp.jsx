var React = require('react'),
    Radium = require('radium'),
    AppStore = require('../stores/AppStore'),
    CartStore = require('../stores/CartStore'),
    ProductList = require('./ProductList.jsx'),
    Header = require('./Header.jsx'),
    CartSidebar = require('./CartSidebar.jsx');

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

var styles = {
  productListWrapper: {
    'display': 'inline-block',
    'width': '100%',
    'position': 'absolute',
    'left': '0',
    'top': '50px'
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
    'height': '100%',
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
    this.setProductListsWidth(true);
  },

  onUpdateCartVisible: function(visible) {
    this.setState({
      cartVisible: visible
    });
    this.setProductListsWidth(visible);
  },

  setProductListsWidth: function(cartVisible) {
    var cart = React.findDOMNode(this.refs.cartwrap),
        products = React.findDOMNode(this.refs.productswrap);
    
    products.style.width = cartVisible ? window.innerWidth - parseInt(cart.style.width, 10) + 'px' : '100%';
  },

  render: function() {    
    return (
      <div className="ttyd-app">
        <Header cartVisible={this.state.cartVisible}/>
        <div style={styles.productListWrapper} ref="productswrap">{this.props.children}</div>
        <div style={[
          styles.cartWrapper,
          !this.state.cartVisible && styles.cartHidden
        ]} ref="cartwrap">
          <CartSidebar products={this.state.cartItems}/>        
        </div>

      </div>
    );
  },
})

module.exports = Radium(CartApp);