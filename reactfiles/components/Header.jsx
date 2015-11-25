var React = require('react'),
    Radium = require('radium'),
    AppActions = require('../actions/AppActions'),    
    ProductStore = require('../stores/ProductStore'),
    ResizeStore = require('../stores/ResizeStore'),
    FlatButton = require('material-ui/lib/flat-button'),
    AppBar = require('material-ui/lib/app-bar'),
    ReactTypeahead = require('react-typeahead');

var Typeahead = ReactTypeahead.Typeahead;
var blurTimer;

var styles = {
  container: {
    background: '#60AB59',
    height: '60px',
    lineHeight: '50px',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.16), 0px 1px 2px 0px rgba(0,0,0,0.26)'
  },

  hideTypeahead: {
    display: 'none'
  },

  logoWrapper: {
    height: '100%',
    lineHeight: '60px',
    float: 'left',
    marginLeft: '25px'
  },

  logo: {
    height: '50px',
    verticalAlign: 'middle',
    WebkitFilter: 'invert(1)',
  },

  cartButtonWrapper: {
    height: '100%',
    lineHeight: '60px',
    float: 'right',
    marginRight: '25px'
  },

  cartButton: {
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    background: '#5DDE9D',
    verticalAlign: 'middle'
  },

  cartIcon: {
    fontSize: '16px',
    padding: '5px'
  },  

  item: {
    background: '#FFF'
  },

  highlightedItem: {
    background: 'pink'
  },

  autocompleteWrapper: {
    verticalAlign: 'middle',
    textAlign: 'center',
    overflow: 'auto',
    lineHeight: '60px',
    margin: '0 auto',
    width: '50%'
  },

  menu: {
    background: 'green'
  }
}

var Header = React.createClass({
  // mixins: [Reflux.connect(ProductStore, 'categories')],  
  mixins: [
    Reflux.listenTo(ProductStore, 'onFetchProducts'),
    Reflux.listenTo(ResizeStore, 'onResizeWindow'),
  ],

  onFetchProducts: function(categories) {
    this.setState({
      categories: categories,
      products: this._getProducts(categories)      
    })
  },

  onResizeWindow: function(data) {
    console.log('here!', data)
    this.setState({
      windowWidth: data
    })
  },  

  getInitialState: function () { 
    return {
      categories: [],
      products: [],
      windowWidth: window.innerWidth
    }
  },  

  _cartToggled: function(show) {
    AppActions.updateCartVisible(show);
  },

  _getProducts: function(categories) {
    var products = [];
    _.each(categories, function(category) {
      _.each(category, function(product) {
        products.push(product);
      })
    })
    return products;
  },

  _matchProductToSearch: function(product, value) {
    return (product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            product.category.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  },

  _searchForProduct: function(value, cb) {
    if (value == '') return this.state.products;      
    debugger
    var items = this.state.products.filter(function (product){
      return product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    });

    var categories = _.keys(this.state.categories).filter(function (category){
      return category.toLowerCase().indexOf(value.toLowerCase()) !== -1
    });

    setTimeout(function () {
      cb(items);  
    }, 500);    

  },

  _hideDropdownList: function(event) {
    blurTimer = setTimeout(function() {
      React.findDOMNode(this.refs.typeahead).children[1].style.display = "none";
    }.bind(this), 100);
  },

  _showDropdownList: function() {
    React.findDOMNode(this.refs.typeahead).children[1].style.display = "";
  },

  _handleOptionSelected: function(option) {
    clearTimeout(blurTimer);
    console.log('option selected', option);
  },

  render: function() {
    var cartToggleButtonText = this.props.cartVisible ? 'Hide Cart' : 'Show Cart';
    var cartToggleBool = this.props.cartVisible ? false : true;
    
    return (
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <img style={styles.logo} src="https://s3-us-west-1.amazonaws.com/ttyd/ttyd-logo.png"/>
        </div>
        
        <div style={styles.cartButtonWrapper}>
          <button onClick={this._cartToggled.bind(this, cartToggleBool)} style={styles.cartButton}>
            <i className="fa fa-shopping-cart" style={styles.cartIcon}></i>
              {cartToggleButtonText}
          </button>
        </div>

        <div style={[
          styles.autocompleteWrapper,
          this.state.windowWidth < 640 && styles.hideTypeahead
        ]}>
          <Typeahead
            options={this.state.products.map(function (product) {return product.name})}
            className="topcoat-typeahead"
            onOptionSelected={this._handleOptionSelected}                        
            onKeyDown={this._showDropdownList}
            onBlur={this._hideDropdownList}
            placeholder="Search for an item..."
            ref="typeahead"
            customClasses={{
              input: "topcoat-text-input",
              results: "topcoat-list-container",
              listItem: "topcoat-list-item"
            }}
            maxVisible={4}/>
        </div>        
      </div>
    )
  }
})

module.exports = Radium(Header);